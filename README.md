📘 README.md — MERN Blog Integration Assignment
md
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

```bash
mern-blog/
├── client/              # React frontend using Vite
├── server/              # Express backend with MongoDB
├── .env.example         # Environment configuration
└── README.md            # This file
🚀 Setup Instructions
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

🧠 Features Implemented
Modular backend with error handling and validation

MongoDB seeding with cultural themes

React routing and layout components

Custom hooks for API calls

Dynamic forms with optimistic UI

Screenshots pending integration

📌 Vision Alignment
This project extends beyond functionality. It reflects a commitment to accessible, ethical tech rooted in Afro-futurist branding. Every route, schema, and component ties back to meaningful digital storytelling.