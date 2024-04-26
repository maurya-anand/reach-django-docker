# React-Django docker app

This project consists of a Django backend and a React frontend, both of which are containerized using Docker.

## Backend Setup

The backend is a Django application. To set it up:

1. Navigate to the backend directory.
1. Create a virtual environment and activate it (optional but recommended).
1. Install the required packages using pip: `pip install -r requirements.txt`.
1. Run the Django migrations: `python manage.py migrate`.
1. Start the Django server: `python manage.py runserver`.

> The Django application will start on `http://0.0.0.0:8000/`.

## Frontend Setup

The frontend is a React application bootstrapped with Vite. To set it up:

1. Navigate to the frontend directory.
1. Install the required packages using npm: `npm install`.
1. Start the Vite server: `npm run dev`.

> The React application will start on `http://localhost:5173/`.

## Docker Setup

Both the frontend and backend can be containerized using Docker. To do this:

1. Build the Docker image for the backend using `docker build -t backend .` from the backend directory.
1. Run the backend container using `docker run --publish 8000:8000 backend`.
1. Build the Docker image for the frontend using `docker build -t frontend .` from the frontend directory.
1. Run the frontend Docker container: `docker run --publish 5173:5173 frontend`.

> You can also use Docker Compose to manage both containers together. To do this, `run docker-compose up` from the root directory.

## Using this Structure for Future Projects

Create a folder structure in the following template:

```bash
.
├── backend
│   ├── api
│   ├── core
│   ├── db.sqlite3
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
├── frontend
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   ├── public
│   ├── README.md
│   ├── src
│   └── vite.config.js
├── compose.yml
└── README.md
```

This project structure separates the frontend and backend into their own directories, each with its own Dockerfile. This allows each part to be developed, tested, and deployed independently.

You can use this structure for future projects by replacing the frontend and backend directories with your own applications. The Dockerfiles and Docker Compose file may need to be updated to match the requirements of your applications.