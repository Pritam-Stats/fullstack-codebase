# Minimal Full-Stack Connection (React + Node/Express)

A basic full-stack JavaScript application built to demonstrate how a React frontend communicates with an Express backend, highlighting standard industry practices like URL standardization, CORS mitigation via proxies, and production-level deployment concepts.

---

# Tech Stack & Architecture

## Frontend
- React
- Vite
- Axios

### Default Development Port
```txt
http://localhost:5173
```

---

## Backend
- Node.js
- Express.js
- ES Modules (`"type": "module"`)

### Default Development Port
```txt
http://localhost:3100
```

Configured dynamically using:

```js
process.env.PORT
```

with a fallback port.

---

# Core Concepts Implemented

## 1. CORS vs Full-Stack Proxying

When the frontend runs on:

```txt
http://localhost:5173
```

and the backend runs on:

```txt
http://localhost:3100
```

the browser treats them as different origins.

Because of the browser's **Same-Origin Policy**, requests from the frontend to the backend get blocked unless CORS is explicitly configured.

---

## Solution: Frontend Proxying with Vite

Instead of enabling unrestricted CORS access on the backend, a proxy is configured inside `vite.config.js`.

### Example

```js
// vite.config.js

server: {
  proxy: {
    '/api': 'http://localhost:3100',
  },
}
```

---

## How It Works

When Axios sends a request like:

```js
axios.get('/api/jokes')
```

Vite intercepts the request during development and forwards it to:

```txt
http://localhost:3100/api/jokes
```

The browser believes the request is being made to the same origin, so no CORS error occurs.

---

## Why This Approach Matters

### Benefits
- Cleaner frontend code
- No hardcoded backend URLs
- Better security posture
- Easier migration to production
- Prevents unnecessarily opening backend origins

### Important Note
This proxy works only during development because Vite acts as an intermediary server.

---

# 2. API Standardization & Versioning

Instead of exposing raw routes like:

```txt
/jokes
```

the backend uses standardized API prefixes:

```txt
/api/jokes
```

---

## Why Use `/api`

### Benefits
- Clear separation between frontend assets and backend APIs
- Easier future versioning (`/api/v1`)
- Better scalability
- Cleaner architecture

---

# 3. Production Deployment Insights  
## The "Dist Folder" Paradox

Running:

```bash
npm run build
```

generates a production-ready `dist/` folder containing optimized HTML, CSS, and JavaScript files.

A common legacy pattern is serving this folder directly from Express:

```js
app.use(express.static('dist'))
```

---

## Why This Becomes Problematic

This tightly couples the frontend and backend.

Even a tiny frontend change requires:

1. Rebuilding the frontend
2. Replacing the old `dist/` folder
3. Restarting the backend server

---

## Better Production Architecture

Modern production systems usually separate deployments:

| Layer | Recommended Hosting |
|---|---|
| Frontend | Vercel / Netlify |
| Backend | AWS / DigitalOcean / Render |

This enables:
- Independent deployments
- Better scalability
- Proper CI/CD workflows
- Faster frontend delivery through CDNs

---

# Project Structure

```txt
project-root/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── vite.config.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# How to Run Locally

# 1. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install express
```

Inside `package.json`:

```json
{
  "type": "module"
}
```

Start the backend server:

```bash
npm start
```

---

# 2. Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install axios
```

Start the Vite development server:

```bash
npm run dev
```

---

# Example API Request

## Frontend

```js
import axios from "axios";

const fetchJokes = async () => {
  const response = await axios.get("/api/jokes");
  console.log(response.data);
};
```

---

## Backend

```js
import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  res.json([
    {
      id: 1,
      title: "First Joke"
    }
  ]);
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Quick Review Questions

## 1. Why does an empty dependency array `[]` in `useEffect` prevent repeated API calls?

Hint:
- Think about component re-renders.
- What happens if state updates continuously trigger effects?

---

## 2. What is the operational difference between `app.use()` and `app.get()` in Express?

Hint:
- Middleware vs route handlers.

---

## 3. If this backend is deployed to DigitalOcean or AWS, what should change inside `vite.config.js`?

Hint:
- The proxy destination should point to the deployed backend URL instead of localhost.

---

# Key Takeaways

- Frontend and backend run on different origins during development.
- Vite proxying avoids CORS issues cleanly.
- API prefixing improves scalability and maintainability.
- Serving `dist/` directly from Express is workable but not ideal for scalable production systems.
- Modern deployments separate frontend and backend infrastructure.

---