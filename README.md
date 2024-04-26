# React-Django docker app

This project is a full-stack web application that uses a Django backend and a React frontend. The backend provides a RESTful API, and the frontend consumes this API to provide a dynamic user interface. Both the frontend and backend are containerized using Docker, allowing for easy deployment and scaling.

## Using docker compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you can create and start all the services from your configuration with just a single command.

To start the application using Docker Compose, run the following command from the root directory:

``` bash
docker compose up
```

**Open your browser and navigate to `http://localhost:5173/`.**

This will start both the backend and frontend services. The Django application will be accessible at `http://0.0.0.0:8000/`, and the React application will be accessible at `http://localhost:5173/`.

To stop the services, use the following command:

``` bash
docker compose down
```

If you make changes to the application and need to rebuild the containers, use the following command:

``` bash
docker compose up --build
```

## Manual setup

Before running the setup commands, ensure you are in the correct directory. For backend setup, navigate to the backend directory. For frontend setup, navigate to the frontend directory.

### Backend Setup

The backend is a Django application. To set it up:

1.  Navigate to the backend directory.
2.  Create a virtual environment and activate it (optional but recommended).
3.  Install the required packages using pip: `pip install -r requirements.txt`.
4.  Run the Django migrations: `python manage.py migrate`.
5.  Start the Django server: `python manage.py runserver`.

> The Django application will start on `http://0.0.0.0:8000/`.

### Running the backend container manually

1.  Build the Docker image for the backend using `docker build -t backend .` from the backend directory.
2.  Run the backend container using `docker run --publish 8000:8000 backend`.

### Frontend Setup

The frontend is a React application bootstrapped with Vite. To set it up:

1.  Navigate to the frontend directory.
2.  Install the required packages using npm: `npm install`.
3.  Start the Vite server: `npm run dev`.

> The React application will start on `http://localhost:5173/`.

### Running the frontend container manually

1.  Build the Docker image for the frontend using `docker build -t frontend .` from the frontend directory.
2.  Run the frontend Docker container: `docker run --publish 5173:5173 frontend`.

## Using this Structure for Future Projects

This project follows a specific structure that separates the frontend and backend into their own directories, each with its own Dockerfile. This allows each part to be developed, tested, and deployed independently.

Create a folder structure in the following template:

``` bash
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

To use this structure for future projects, follow these steps:

1.  Clone or download this repository to your local machine.
2.  Replace the `frontend` and `backend` directories with your own applications.
3.  Update the Dockerfiles in each directory to match the requirements of your applications.
4.  If necessary, update the `compose.yml` file to match the services of your applications.
5.  Build and run your applications using Docker or Docker Compose as described in the sections above.