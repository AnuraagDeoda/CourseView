function submitEmail() {
    const email = document.getElementById('email-input').value;
    if (!email) {
        alert('Please enter your email.');
        return;
    }
    // Simple email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    fetch('/submit_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('email-popup').style.display = 'none';
        } else {
            alert(data.message);
        }
    });
}

function openCourseModal(courseId) {
    fetch('/record_course_view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course_id: courseId })
    });
    // Fetch the course URL from the server
    fetch('/get_course_url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course_id: courseId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            const iframe = document.getElementById('course-iframe');
            iframe.src = data.course_url;
            document.getElementById('course-modal').style.display = 'block';
        } else {
            alert('Error loading course.');
        }
    });
}

function closeCourseModal() {
    document.getElementById('course-modal').style.display = 'none';
    const iframe = document.getElementById('course-iframe');
    iframe.src = '';
}
