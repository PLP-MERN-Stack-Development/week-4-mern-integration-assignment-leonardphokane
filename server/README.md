# MERN Blog — Integration Assignment

![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-ISC-lightgrey.svg)
![Node.js](https://img.shields.io/badge/node-v18%2B-blue.svg)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green.svg)
![Status](https://img.shields.io/badge/status-in%20progress-orange.svg)
![Author](https://img.shields.io/badge/author-Leonard%20Phokane-8e44ad.svg)
![Vision](https://img.shields.io/badge/Zulutech-Afro--futurist%20backend-blueviolet.svg)

---

## 🖋️ MERN Blog — Personal Build

This repository showcases a blog platform built with the MERN stack, following the Week 4 curriculum. It demonstrates seamless integration between MongoDB, Express.js, React.js, and Node.js. Backend logic is modular and clean, paired with culturally resonant seed data reflecting Zulutech’s narrative direction.

---

### 📂 Project Structure


mern-blog/
├── client/              # React frontend using Vite
├── server/              # Express backend with MongoDB
├── .env.example         # Environment configuration
└── README.md            # This file

---
## 🚀 Setup Instructions
bash
# Server
cd server
npm install
npm run dev

# Client
cd client
npm install
npm run dev
🔌 API Endpoints (RESTful)
GET /api/posts → Retrieve all blog posts

GET /api/posts/:id → Retrieve single post

POST /api/posts → Create post

PUT /api/posts/:id → Update post

DELETE /api/posts/:id → Delete post

GET /api/categories → Retrieve categories

POST /api/categories → Create category

--- 

### 🧠 Features Implemented
Modular backend with error handling and validation

MongoDB seeding with cultural themes

React routing and layout components

Custom hooks for API calls

Dynamic forms with optimistic UI

Screenshots pending integration


---

## 📌 Vision Alignment
This project extends beyond functionality. It reflects a commitment to accessible, ethical tech rooted in Afro-futurist branding. Every route, schema, and component ties back to meaningful digital storytelling.

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20021002&assignment_repo_type=AssignmentRepo)
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 
