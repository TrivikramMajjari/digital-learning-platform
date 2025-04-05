# Digital Learning Platform

## Overview
The Digital Learning Platform is a full-stack web application designed to facilitate online learning. It provides features for user authentication, course management, assignment tracking, and resource sharing. The platform aims to enhance the digital learning experience by offering a structured environment for students and educators.

## Technologies Used
- **Backend**: Spring Boot (Java)
- **Frontend**: React
- **Database**: MySQL
- **Authentication**: Spring Security with JWT
- **Deployment**: Docker

## Project Structure
```
digital-learning-platform
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── digitallearning
│   │   │   │           ├── config
│   │   │   │           ├── controller
│   │   │   │           ├── dto
│   │   │   │           ├── exception
│   │   │   │           ├── model
│   │   │   │           ├── repository
│   │   │   │           ├── security
│   │   │   │           ├── service
│   │   │   │           └── DigitalLearningApplication.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       ├── application-dev.properties
│   │   │       └── application-prod.properties
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── digitallearning
│   ├── pom.xml
│   └── Dockerfile
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── utils
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Course Management**: Create, update, and retrieve courses.
- **Assignment Tracking**: Manage assignments and track progress.
- **Resource Sharing**: Upload and access educational resources.
- **Notifications**: Receive updates and alerts related to courses and assignments.

## Getting Started

### Prerequisites
- Java 11 or higher
- Node.js and npm
- MySQL
- Docker

### Backend Setup
1. Navigate to the `backend` directory.
2. Update the `application.properties` file with your database configuration.
3. Build the project using Maven:
   ```
   mvn clean install
   ```
4. Run the application:
   ```
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Docker Deployment
1. Navigate to the root of the project.
2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

## API Documentation
API endpoints are documented using Swagger. Access the documentation at `http://localhost:8080/swagger-ui.html` after starting the backend application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.