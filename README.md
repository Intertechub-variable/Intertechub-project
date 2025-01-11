# crowdfunding-web-app

A crowdfunding platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create projects, fund them, and track their progress.
## Features
- **User Authentication**: Secure user login and registration.
- **Project Creation**: Users can create new crowdfunding projects.
- **Funding Projects**: Users can fund projects directly from the platform.
- **Project Management**: View project details, current funding status, and more.
- **Responsive Design**: Mobile-friendly interface for an optimal user experience.

## Technologies Used
- **Frontend**: 
  - React.js
  - Axios and zustand (for API requests)
  - Tailwind css (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for data modeling)

- **Development Tools**:
  - npm (Node Package Manager)
  - Git (for version control)
 
## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or via a cloud service like MongoDB Atlas)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Intertechub-variable/Intertechub-project.git
   cd crowdfunding-project

# Endpoints
## Authentication Endpoints
## Method	Endpoint	Description
  POST	/auth/signup	Register a new user
  POST	/auth/login	Authenticate a user and get a token 
  POST /auth/logout Logout a user
  
## Project API Endpoints
GET /projects/approved Get projects that Approved by admin
GET /projects/unapproved Geting projects that not Approved yet by admin
PUT /projects/approve/:id Approve projects by admin
POST /projects/create Create projects by user
POST /projects/fund/:id Funding projects by users
PUT /projects/update/:id Update project by project id
DELETE /projects/:id Delete project by project id

# Deployment
The website is live and accessible at: Base URL: https://crowdfunding-app.onrender.com
