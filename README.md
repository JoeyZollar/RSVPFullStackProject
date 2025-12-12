# RSVPFullStackProject
*An application to create and signup for events.*

---

## 🚀 Overview

A full-stack event building app that allows users to RSVP for and create events. Includes user authentication.

---

## 🌐 Live Demo

| Type                         | Link                                                           |
| ---------------------------- | -------------------------------------------------------------- |
| **Frontend (Deployed Site)** | (https://rsvpfullstackproject.netlify.app/)   |
| **Backend (API Base URL)**   | (https://rsvpfullstackproject.onrender.com)   |

---

## ✨ Features

List **3–6 key features**, ideally with short bullets:

* Create, read, and delete events
* Responsive UI with reusable components
* Data persisted in MongoDB
* Advanced feature: user authentication with login and signup capabilities*
* RSVP for another user's event.
* Dashboard of RSVP'd events, created events, and all events to browse

### **Advanced Feature**

Describe which advanced feature you implemented and **1–2 sentences** about how it works:
My advanced feature includes the ability for users to signup and log into accounts to have their own personalized events and RSVP's. My backend schemas store what events a user has created, and each event has an owner associated with it. Using react state, once a user's data is confirmed by entering their username and password, the app will display their personal event data. This works through a /api/login route that gets user data, which is then saved to the react user state in App.jsx. This state is then used to filter and display the correct events the user needs to see.

---

## 📸 Screenshots

<img width="1728" height="871" alt="RSVPFullStack:screenshots:login" src="https://github.com/user-attachments/assets/9f00d449-e0a2-4e29-9fcd-78ffc34cc9bc" />
<img width="1728" height="877" alt="RSVPFullStack:screenshots:dashboard" src="https://github.com/user-attachments/assets/e51bcb62-838a-4507-bee8-445d5eb3697a" />
<img width="1728" height="881" alt="RSVPFullStack:screenshots:create" src="https://github.com/user-attachments/assets/1f5a663e-06fd-463e-8367-6cba6c341552" />

---

## 🏗️ Project Architecture

Describe how the pieces fit together.

```
/frontend
  /src
    /components
    /pages
    App.jsx
    main.jsx

/backend
  /models
  /routes
  server.js
```

Include a sentence explaining the flow:

> The React frontend communicates with the Express backend through API routes. The backend interacts with MongoDB using Mongoose models, and environment variables are used to store secrets.

---

## 📦 Installation & Setup

### **1. Clone the project**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

---

### **2. Environment Variables**

Include a `.env.example` file in both repos.

**Backend `.env.example`:**

```
MONGO_URI=your_mongodb_url
PORT=4000
JWT_SECRET=your_secret_if_using_auth
API_KEY=if_using_external_apis
```

**Frontend `.env.example`:**

```
VITE_API_URL=https://your-backend-url.com
```

---

### **3. Install Dependencies**

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

#### Backend:

```bash
cd backend
npm install
npm run dev
```

---

### **4. Running Entire App Locally**

1. Start backend on `http://localhost:4000`
2. Start frontend on `http://localhost:5173`
3. Confirm CORS + API requests are working

---

## 🛠 API Documentation

Document the **main 3–5 routes**:

### **GET /api/resource**

Returns all resources.

### **POST /api/resource**

Creates a new resource.
Body example:

```json
{
  "name": "Example",
  "description": "Text here"
}
```

### **PATCH /api/resource/:id**

Updates a resource.

### **DELETE /api/resource/:id**

Deletes a resource.

> Add additional routes if needed (auth, file uploads, WebSockets, etc.).

---

## 🚀 Deployment Notes

Document where/how you deployed:

### **Frontend**

* Vercel / Netlify
* Explain build command if different (`npm run build`)

### **Backend**

* Render / Railway
* Note environment variable setup


---

## 🎥 Video Walkthrough

**Link to Loom/YouTube:**
[https://your-video-link.com](https://your-video-link.com)

Include quick timestamps if you want extra professionalism:

* **0:00–0:30** Overview
* **0:30–1:30** Core features demo
* **1:30–2:30** Advanced feature
* **2:30–3:00** Technical challenge solved

---

# 🧠 Reflection

*(This section is required for grading.)*

### **1. What was the hardest part of this project?**

Write 3–5 sentences.

### **2. What are you most proud of?**

Could be a feature, a UI improvement, debugging work, or personal growth.

### **3. What would you do differently next time?**

Think in terms of planning, scoping, or tech choices.

### **4. How did you incorporate feedback from the 12/5 check-in gallery?**

Be explicit (this is graded):

> “Based on feedback, I reduced scope by removing X and focused on stabilizing Y.”
> “I reorganized my components for readability after feedback about structure.”

---

# Acknowledgments / AI Usage Disclosure

> Include a brief note on tools used (per academic integrity guidelines):

Examples:

* “Used ChatGPT to help troubleshoot a CORS issue.”
* “Used Claude for help writing documentation.”
* “Used VSCode Copilot for autocomplete suggestions.”
