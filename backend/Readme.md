# BrainDx Backend

This repository contains the backend code for the BrainDx application, which detects brain tumors from MRI images.

## Getting Started

### Prerequisites

- Docker installed on your machine.

### Pulling the Docker Image

To pull the Docker image from Docker Hub, use the following command:

```bash
docker pull sandipsamanta007/braindx-backend-app:latest
```

### Running the Docker Container

After pulling the image, you can run a new container using the following command:

```bash
docker run --name my-braindx-container -p 8080:8080 sandipsamanta007/braindx-backend-app:latest
```

### Accessing the Application

Once the container is running, you can access the application by navigating to:

- Swagger UI: http://localhost:8080/docs
- ReDoc: http://localhost:8080/redoc

### Stopping and Removing the Container

To stop and remove the container after testing, use the following commands:

```bash
docker stop my-braindx-container
docker rm my-braindx-container
```
