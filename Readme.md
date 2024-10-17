# Flask App README

## Overview
This Flask app allows you to create and manage a SQLite database called `app.db` and run a web server using Flask. The repository includes two main Python scripts:

- **db_setup.py**: Sets up the SQLite database (`app.db`).
- **app.py**: Runs the Flask application.

## Getting Started

### Prerequisites
- Python 3.x
- Flask
- Docker (for deployment)

### Installation

1. Clone the repository and navigate into the directory:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Create a virtual environment and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the database setup script:

   ```bash
   python db_setup.py
   ```

5. Start the Flask app:

   ```bash
   python app.py
   ```

The application will run on `http://127.0.0.1:5000/` by default.

## Deploying on Server

To deploy the application on a server, follow the steps below:

### Updating the Code on Server
1. Update the code in the server directory:
   
   ```bash
   scp -r ./* ec2-user@<server-ip>:/home/ec2-user/Course_View
   ```

2. SSH into the server:

   ```bash
   ssh ec2-user@<server-ip>
   ```

### Docker Deployment

1. Stop the previous running Docker container:
   
   ```bash
   docker ps
   docker stop <running-container-id>
   ```

2. Clear the Docker cache:

   ```bash
   docker system prune -a
   # Press 'y' when prompted
   ```

3. Build and run the Docker container:

   ```bash
   cd /home/ec2-user/Course_View
   docker build -t my-flask-app .
   docker run -d -p 5000:5000 --name my-running-app -v /home/ec2-user/instance:/app/instance my-flask-app
   ```

Your Flask app should now be running on the server, accessible at `http://<server-ip>:5000/`.

## Notes
- Make sure the Docker daemon is running before executing Docker commands.
- Any issues encountered during deployment can often be resolved by checking the Docker container logs:

  ```bash
  docker logs my-running-app
  ```

## License
This project is licensed under the MIT License.

