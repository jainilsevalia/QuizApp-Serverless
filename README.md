## Serverless Architecture
![alt Serverless Application](https://github.com/jainilsevalia/QuizApp-Serverless/blob/main/SDP_MultiCloud_Architecture.drawio.png)

## Cloud Services Usage in Project

| Cloud Service           | Usage in Project                                                                                                                                                                                                                                                                                                                               |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AWS Cognito             | First level authentication in User Authentication feature. Handles user credentials, access tokens, and AWS credentials.                                                                                                                                                                                                                        |
| GCP Cloud Functions     | Second level authentication in User Authentication feature. Used to handle security questions and answers. Also used in Trivia Game Lobby for fetching specific data of quiz from the database.                                                                                                                                             |
| GCP Firestore           | Used in multiple features, including User Authentication (storing security questions and answers), User Profile Management (storing user information), Trivia Game Lobby (storing games and questions), Team Management (as a database for team-related data), and Automated Question Tagging (storing tagged questions).                           |
| Amazon DynamoDB         | Used in User Profile Management (storing user profile information and game results), Leaderboards (storing game results data), and Automated Question Tagging (storing tagged questions).                                                                                                                                                   |
| Amazon S3               | Used in User Profile Management (storing user profile pictures), Leaderboards (loading and processing game results data), and Trivia Content Management (storing game data for analysis and visualization).                                                                                                                               |
| AWS Lambda Functions     | Utilized in multiple features, including User Authentication (processing authentication logic), User Profile Management (handling various functionalities), Leaderboards (implementing micro ETL for game results), Team Management (implementing various functions), Virtual Assistance (handling chatbot features), Trivia Content Management (implementing various functions), Automated Question Tagging (tagging questions), and In-Game Experience (processing game logic). |
| AWS API Gateway          | Used for exposing Lambda Functions as REST APIs in multiple features, enabling communication with the frontend.                                                                                                                                                                                                                               |
| AWS Athena               | Used in Leaderboards and Trivia Content Management for data analysis and querying.                                                                                                                                                                                                                                                              |
| AWS QuickSight           | Used in Leaderboards for visualizing and creating dashboards based on game metrics and performance data.                                                                                                                                                                                                                                      |
| AWS Secret Manager       | Used for securely storing sensitive secrets, such as API keys or private keys, in multiple features.                                                                                                                                                                                                                                            |
| Amazon Lex              | Used in Virtual Assistance for building a chatbot with features like user navigation assistance, team score retrieval, and leaderboard retrieval.                                                                                                                                                                                               |
| Google Cloud Natural Language API | Used in Automated Question Tagging for its NLP capabilities in automatically tagging newly added questions.                                                                                                                                                                                                                                  |

## User Login

- email : pr514457@dal.ca
- password : 123456

## Team Members

- Parth Champaneria
- Jainil Sevalia
- Raj Patel
- Akshit Patel
- Dhruv Kothari

## Deployment URL

- https://frontendapp-7l4cel6fjq-ue.a.run.app/
