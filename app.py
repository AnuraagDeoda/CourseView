from pytz import timezone
import pytz
from flask import Flask, render_template, request, jsonify, make_response, url_for
from config import Config
from extension import db
from flask_migrate import Migrate
from email_validator import validate_email, EmailNotValidError

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

from models import User, Course, UserAction

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    email = request.cookies.get('user_email')
    if email:
        user = User.query.filter_by(email=email).first()
        if user:
            # Record the visit
            action = UserAction(action='visited_site', user_id=user.id)
            db.session.add(action)
            db.session.commit()
    # Group courses by style
    courses = Course.query.all()
    courses_by_style = {}
    for course in courses:
        courses_by_style.setdefault(course.style, []).append(course)
    return render_template('index.html', courses_by_style=courses_by_style, email_provided=bool(email))

@app.route('/submit_email', methods=['POST'])
def submit_email():
    data = request.get_json()
    email = data.get('email')
    if not email:
        return jsonify({'status': 'error', 'message': 'Email is required.'}), 400
    try:
        # Validate email
        valid = validate_email(email)
        email = valid.email
    except EmailNotValidError as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(email=email)
        db.session.add(user)
        db.session.commit()
    # Record the visit
    action = UserAction(action='submitted_email', user_id=user.id)
    db.session.add(action)
    db.session.commit()
    response = make_response(jsonify({'status': 'success'}))
    response.set_cookie('user_email', email, max_age=30*24*60*60)  # 30 days
    return response

@app.route('/record_course_view', methods=['POST'])
def record_course_view():
    data = request.get_json()
    course_id = data.get('course_id')
    email = request.cookies.get('user_email')
    if not email or not course_id:
        return jsonify({'status': 'error', 'message': 'Invalid data.'}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'status': 'error', 'message': 'User not found.'}), 404
    action = UserAction(action='viewed_course', user_id=user.id, course_id=course_id)
    db.session.add(action)
    db.session.commit()
    return jsonify({'status': 'success'})


@app.route('/get_course_url', methods=['POST'])
def get_course_url():
    data = request.get_json()
    course_id = data.get('course_id')
    course = Course.query.get(course_id)
    if course:
        course_url = course.course_url  # Get the URL from the database
        return jsonify({'status': 'success', 'course_url': course_url})
    else:
        return jsonify({'status': 'error', 'message': 'Course not found'}), 404


from collections import Counter
from sqlalchemy.sql import func

# ... [existing code] ...
@app.route('/dashboard')
def dashboard():
    # Implement authentication here (omitted for brevity)
    users = User.query.all()
    courses = Course.query.all()
    user_course_views = {}
    ist = timezone('Asia/Kolkata')

    # Analytics Data
    total_users = User.query.count()
    total_courses = Course.query.count()

    # Most viewed course
    course_view_counts = db.session.query(
        UserAction.course_id, func.count(UserAction.course_id)
    ).filter(
        UserAction.action == 'viewed_course'
    ).group_by(
        UserAction.course_id
    ).order_by(func.count(UserAction.course_id).desc()).first()

    if course_view_counts:
        course_id, views = course_view_counts
        course = Course.query.get(course_id)
        most_viewed_course = {
            'title': course.title,
            'views': views
        }
    else:
        most_viewed_course = None

    for user in users:
        course_views = {}
        for course in courses:
            # Get all timestamps when the user viewed the course
            actions = UserAction.query.filter_by(
                user_id=user.id, course_id=course.id, action='viewed_course'
            ).order_by(UserAction.timestamp.desc()).all()
            timestamps = []
            for action in actions:
                # If the timestamp is naive, assume it's in UTC and localize it
                if action.timestamp.tzinfo is None:
                    utc_timestamp = pytz.utc.localize(action.timestamp)
                else:
                    utc_timestamp = action.timestamp
                ist_timestamp = utc_timestamp.astimezone(ist)
                timestamps.append(ist_timestamp)
            course_views[course.id] = timestamps if timestamps else None
        # Handle user.created_at similarly
        if user.created_at.tzinfo is None:
            utc_created_at = pytz.utc.localize(user.created_at)
        else:
            utc_created_at = user.created_at
        ist_created_at = utc_created_at.astimezone(ist)
        user_course_views[user.id] = {
            'signup_date': ist_created_at,
            'course_views': course_views
        }

    return render_template(
        'dashboard.html',
        users=users,
        courses=courses,
        user_course_views=user_course_views,
        total_users=total_users,
        total_courses=total_courses,
        most_viewed_course=most_viewed_course
    )

@app.route('/get_courses', methods=['GET'])
def get_courses():
    style = request.args.get('style')
    if style:
        courses = Course.query.filter_by(style=style).all()
    else:
        courses = Course.query.all()

    course_list = [
        {
            'id': course.id,
            'title': course.title,
            'thumbnail_url': course.thumbnail_url,
            'style': course.style
        }
        for course in courses
    ]
    return jsonify({'status': 'success', 'courses': course_list})


if __name__ == '__main__':
    app.run(debug=True)
