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
      /CreateEvent.jsx
      /Dashboard.jsx
      /EventItem.jsx
      /Login.jsx
      /Signup.jsx
  /api
    / events.js
    / users.js
  /App.jsx
  /App.css
  /main.jsx
  /LoginSignup.css

/backend
  /models
    /Event.js
    /User.js
  /routes
    /events.js
    /users.js
  server.js
```

Include a sentence explaining the flow:

> When the user interacts with the react frontend, eventhandlers communicate to the express backend through API routes with fetch calls. The backend server then communicates with the MongoDB using Mongoose, making the data persistent.

---

## 📦 Installation & Setup

### **1. Clone the project**

```bash
git clone (https://github.com/JoeyZollar/RSVPFullStackProject.git)
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

### **GET /api/events**

Returns all events.

### **POST /api/events**

Creates a new event.
Body example:

```json
{
  "title": "Example",
  "date": 12122025,
  "time": "2:30pm",
  "place": "Place example",
  "description": "Text here",
  "owner": ObjectId(693b62564fcacc9c011815c8)
}
```

### **PUT /api/events/:id/rsvp**

Updates the RSVP list of an event.

Body Example:

```json
{
  {userId: "693b62564fcacc9c011815c8"}
}
```

### **POST /api/users/login**

Get's a users data from the database to log them in.

Body Example:
```json
{
username: "Username",
password: "SuperSecretPassword"}
}
```

### **GET /api/users/:id

Gets a user by their id and also populates their created events to be displayed by the frontend.

Response example:

```json
{
_id: "693b62564fcacc9c011815c8"
username: "myuser"
password: "secretpassword"
events: [{_id: "693c7ea6079127f2e672ee9b", title: "Birthday Party", date: 2212026, time: "8:30pm",…}]
  0: {_id: "693c7ea6079127f2e672ee9b", title: "Birthday Party", date: 2212026, time: "8:30pm",…}
}
```

---

## 🚀 Deployment Notes

Document where/how you deployed:

### **Frontend**

* For my frontend deployment I used Netlify.
* In order to use Netlify I manually added the VITE_API_BASE_URL environmental variable, which allows access to the deployed Render backend.
* Build command: `npm run build`

### **Backend**

* For backend I used Render.
* In order to use Render I manually added in my environmental variables:
*   MONGODB_URI: MongoDB acess URL
*   PORT: Port number
*   CLIENT_ORIGIN: frontend url


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

The most difficult part of this project was the sheer amount of moving parts that need to align for things to work right. Creating the different parts of the stack, working with multiple differnet languages, and ensuring that everything connects was a big challenge for this project. I frequently looked back on previous labs to base my structure on. Debugging was also a big challenge in this project, as many different things can go wrong and sometimes it is somthing very small that can throw off the whole project. Overall, I would say the biggest challenge is organization and mindset when building an app like this. It can become draining quickly when things go wrong, and so making sure to take things in small chunks helps a lot to work through everything.

### **2. What are you most proud of?**

I am most proud of the way I implemented the way that different users see different events. It is satisfying to see the way that each user's data is displayed to show their events and their RSVP's.

### **3. What would you do differently next time?**

Next time I would take the time to plan out all my routes in more depth, and how my database Schemas will need to be used to fit those routes. Initially I created CRUD routes for both of my modules, but I found out that I needed more that were specifcially tailored to my app and what it needed to do. In the future I would plan these routes out better and visualize what data needs to go where.

### **4. How did you incorporate feedback from the 12/5 check-in gallery?**

During my feedback I did not have much to show my peers, and so I mainly disucssed my ideas and what challenges I may face. I discussed how user authentication would be my main challenge along with the access to user specfic data. I also learned some things from other students that I thought was interesting. I saw other users implementing similar login systems and so I took inspiration from their layouts. 

---

# Acknowledgments / AI Usage Disclosure

For this project I utilized assistive AI to help me troubleshoot, debug, and style my project.
I mainly used ChatGPT when stuck on how to approach certain features of my application. For example, I had stuggled to figure out how to include multiple pages on the application.
ChatGPT gave me a framework and step-by-step process for using State to keep track pages. To acheive the result, I create a pages state in my App.jsx that can be changed through state on other components.
This system allowed naviagtion to be simple to implement. Using this I was able to add dashboard and create events buttons that easily changed the state of the app.

This project also proved to be quite challenging to debug, and so I would use ChatGPT when I could not fix the issue myself.
An example of this is when I was trying to implement a way for the dashboard events list to automatically update the events based on when a user RSVP's or unRSVP's. ChatGPT showed me a short implementation on how to do this by updating the eventState I had created for the dashboard. By using the map function to go through the events and replace old events with updated ones, I was able to acheive the effect I was looking for. 
Instances like these where I am not as confident in my react knowledge were where assitve AI was helpful to keep the project progressing.

Finally, I used ChatGPT to improve my CSS styling of the different pages. Given the amount of time left to complete the project I chose to focus on the backend features. My styling was basic but not where I wanted it to be. In order to save some time and bring an extra level of professionalism, I had AI improve my styling for the pages. This worked well but there were some minor issues, such as buttons being incorrectly colored, that I went in and adjusted to my liking.

Overall, I utilized AI a fair amount in this project to assist me in areas that I was stuck or struggling. It helped me to see smaller issues I had not noticed, and new ways to acheive things I did not expect. I always made sure to look over any code that I used, and that I understood how it ran and would play into my overall structure.
