# 📚 Lesson Plan Generator - Backend

This is the backend service for the **Lesson Plan Generator** application. It receives subject, grade level, and topic inputs from the frontend, generates a structured lesson plan using an AI model or logic, and returns the result as JSON.

---

## 🚀 Features

- Accepts subject, grade, and topic from a client
- Generates lesson plans with:
  - Topic overview
  - Objectives
  - Target audience
  - Duration
  - Introduction with definition
  - Teaching methods
  - Examples (with problem and solution)
  - Quiz (questions and answers)
  - Applications
- Structured JSON output
- CORS enabled for frontend integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Axios (or fetch) for API calls (if using AI service)
- dotenv for environment variables
- Optional: OpenAI / Groq / Custom AI model

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/lesson-plan-generator-backend.git
cd lesson-plan-generator-backend
npm install
npm run start
