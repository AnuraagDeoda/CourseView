from app import app
from extension import db  # Corrected 'extension' to 'extensions'
from models import User, Course

def init_db():
    with app.app_context():
        db.create_all()
        # Define the course URL and thumbnail URL
        course_url = 'https://staging.contentauthor.ai/projects/9091755f-6ba4-45fe-9f3f-2e0f8a1bdd9e/Exploring_Emotional_Quests:_Adoption,_Infertility,_and_Relationship_Dynamics/'
        thumbnail_url = 'dummy.png'  # Assuming 'dummy.png' is in the root folder

        # Add 15 courses, 3 in each of 5 styles
        courses = [
            # Style 1: Programming Languages
            Course(title='Python for Beginners', style='Programming Languages', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Mastering JavaScript', style='Programming Languages', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Java Fundamentals', style='Programming Languages', thumbnail_url=thumbnail_url, course_url=course_url),

            # Style 2: Data Science
            Course(title='Introduction to Data Science', style='Data Science', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Machine Learning Basics', style='Data Science', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Deep Learning with TensorFlow', style='Data Science', thumbnail_url=thumbnail_url, course_url=course_url),

            # Style 3: Web Development
            Course(title='HTML & CSS', style='Web Development', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Building Websites with Django', style='Web Development', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='ReactJS Essentials', style='Web Development', thumbnail_url=thumbnail_url, course_url=course_url),

            # Style 4: Mobile App Development
            Course(title='Android Development', style='Mobile App Development', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='iOS Development with Swift', style='Mobile App Development', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Flutter for Cross-Platform Apps', style='Mobile App Development', thumbnail_url=thumbnail_url, course_url=course_url),

            # Style 5: Cloud Computing
            Course(title='AWS Cloud Practitioner', style='Cloud Computing', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Microsoft Azure Fundamentals', style='Cloud Computing', thumbnail_url=thumbnail_url, course_url=course_url),
            Course(title='Google Cloud Platform Basics', style='Cloud Computing', thumbnail_url=thumbnail_url, course_url=course_url),
        ]
        db.session.bulk_save_objects(courses)
        db.session.commit()

if __name__ == '__main__':
    init_db()
