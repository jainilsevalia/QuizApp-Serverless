
# Project Overview:

Welcome to the Trivia Game Application!

## Introduction:

The Trivia Game Application is a feature-rich platform designed to provide users with a captivating trivia experience. This project addresses various aspects of user engagement, from authentication and profile management to in-game experiences and virtual assistance.

Distinguished by its cutting-edge architecture, the Trivia Game Application leverages microservices, Multi-cloud integration, and serverless computing to elevate its performance and scalability. Users can expect a high-quality, resilient, and adaptable trivia platform that thrives on the latest advancements in technology.

By incorporating cloud services, AI, and modern development practices, this project sets a standard for interactive and feature-packed applications.

# Technologies Used:

## Main Technologies:

- React.js for the frontend application.
- AWS Cognito for user authentication.
- GCP Firestore and Cloud Functions for backend services.
- AWS Lambda for serverless microservices.
- Docker for containerization.
- AWS ECR for container image hosting.

## Key Features:

1. **User Authentication:**
   - Seamlessly integrated AWS Cognito for secure user authentication.
   - Implemented a dual-level authentication system using GCP Firestore and Cloud Functions.

2. **User Profile Management:**
   - Developed a comprehensive profile management system with AWS Lambda, DynamoDB, and S3.
   - Efficient handling of profile pictures with dynamic defaults and user uploads.

3. **Leaderboards:**
   - Implemented a micro ETL pipeline for processing game results data from DynamoDB to S3.
   - Utilized AWS Athena and QuickSight for data analysis and visualization.

4. **Team Management (AI Integration):**
   - Integrated OpenAI API for AI-driven team management functionalities.
   - Automated deployment of Lambda functions and Dockerized each function for scalability.

5. **Trivia Game Lobby:**
   - Utilized GCP Firestore, AWS Lambda, API Gateway, and ECR for feature implementation.
   - Implemented browse and join game endpoints for an interactive lobby experience.

6. **Automated Question Tagging:**
   - Integrated Google Cloud NLP for automated question tagging.
   - Implemented a feedback loop for manual tag entry, improving model accuracy.

7. **In-Game Experience:**
   - Overcame challenges in fetching and validating data from different databases.
   - Utilized multi-cloud architecture for storing scores and ensured flexible data transfer.

8. **Virtual Assistance:**
   - Developed intents for user navigation, team score retrieval, and leaderboard retrieval.
   - Integrated DynamoDB for dynamic page linking and external APIs for data retrieval.

# Architecture and Design:

## High-Level Overview:

The Trivia Game Application follows a modular architecture, leveraging microservices for individual features. Key design decisions include:

- Serverless architecture using AWS Lambda and GCP Cloud Functions.
- Cloud-native data storage with GCP Firestore and AWS DynamoDB.
- Docker containerization for microservices, hosted on AWS ECR.
- Integration of AI services for enhanced team management.

## Serverless Architecture
![alt Serverless Application](https://github.com/jainilsevalia/QuizApp-Serverless/blob/main/SDP_MultiCloud_Architecture.drawio.png)

# Cloud Services Integration:

The Trivia Game Application makes extensive use of cloud services from AWS and GCP:

#### AWS Services:

| Cloud Service          | Usage in Project                                                                                                                                                                              |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AWS Cognito            | First level authentication in User Authentication feature. Handles user credentials, access tokens, and AWS credentials.                                                                      |
| Amazon DynamoDB        | Used in User Profile Management (storing user profile information and game results), Leaderboards (storing game results data), and Automated Question Tagging (storing tagged questions). |
| Amazon S3              | Used in User Profile Management (storing user profile pictures), Leaderboards (loading and processing game results data), and Trivia Content Management (storing game data for analysis and visualization). |
| AWS Lambda Functions   | Utilized in multiple features, including User Authentication (processing authentication logic), User Profile Management (handling various functionalities), Leaderboards (implementing micro ETL for game results), Team Management (implementing various functions), Virtual Assistance (handling chatbot features), Trivia Content Management (implementing various functions), Automated Question Tagging (tagging questions), and In-Game Experience (processing game logic). |
| AWS API Gateway        | Used for exposing Lambda Functions as REST APIs in multiple features, enabling communication with the frontend.                                                                             |
| AWS Athena             | Used in Leaderboards and Trivia Content Management for data analysis and querying.                                                                                                          |
| AWS QuickSight         | Used in Leaderboards for visualizing and creating dashboards based on game metrics and performance data.                                                                                   |
| AWS Secret Manager     | Used for securely storing sensitive secrets, such as API keys or private keys, in multiple features.                                                                                         |
| Amazon Lex             | Used in Virtual Assistance for building a chatbot with features like user navigation assistance, team score retrieval, and leaderboard retrieval.                                             |


#### GCP Services:

| Cloud Service          | Usage in Project                                                                                                                                                                              |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP Cloud Functions     | Second level authentication in User Authentication feature. Used to handle security questions and answers. Also used in Trivia Game Lobby for fetching specific data of quiz from the database. |
| GCP Firestore           | Used in multiple features, including User Authentication (storing security questions and answers), User Profile Management (storing user information), Trivia Game Lobby (storing games and questions), Team Management (as a database for team-related data), and Automated Question Tagging (storing tagged questions).  |
| Google Cloud Natural Language API | Used in Automated Question Tagging for its NLP capabilities in automatically tagging newly added questions.                                                                         |

# Challenges and Technical Resolutions:

## Challenges:

- **Integration of AI Services:**
  - Faced issues with OpenAI API call limits.
  - Overcame by implementing request batching and optimizing payload size to maximize efficiency.

- **Leaderboards Implementation:**
  - AWS Academy restrictions on QuickSight access.
  - Worked around by utilizing Amazon Quicksight Embedding for secure external access.

## Technical Resolutions:

- **CI/CD Pipeline and Dockerization:**
  - Configured a robust CI/CD pipeline for the frontend with Docker on GCP Cloud Run.
  - Dockerized each Lambda function for consistency and scalability.

- **Security Measures:**
  - Implemented an extra layer of security through AWS Cognito token validation.
  - Leveraged AWS Secret Manager for secure storage of GCP Firestore credentials.

- **Code Readability:**
  - Added detailed code comments and citations in backend and frontend files.

# Future Improvements:

To enhance the Trivia Game Application further, we plan to:

- Implement real-time features for improved user engagement.
- Explore more AI integrations for enhanced trivia content.
- Enhance security measures with advanced authentication methods.
- Optimize and automate the ETL pipeline for leaderboard statistics.

# Testing and Quality Assurance:

The project follows a rigorous testing approach, utilizing:

- Unit testing for individual microservices.
- Integration testing for end-to-end functionality.
- Continuous monitoring and optimization for performance.

# Demo or Screenshots:

Explore a live demo of the Trivia Game Application [here](https://youtu.be/eTLSRA15ZYY).


                                                                                                                                                                                                                               


