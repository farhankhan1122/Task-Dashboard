# 🚀 Task Management Dashboard

A task management dashboard built with **React + Vite**, showcasing clean state management using **Redux Toolkit** and **Context API**.  
This project is part of an assessment to demonstrate **React skills, state management, and clean architecture**.

---

## 🛠️ Tech Stack
- **React 18** (functional components + hooks)  
- **Vite** (fast dev server + build)  
- **Redux Toolkit** (task state, filters, persistence via middleware)  
- **React Router v6** (routing)  
- **Context API** (theme + authentication)  
- **TailwindCSS** 

---

## ⚡ Features
- **Task CRUD** → Add, edit, delete tasks (title, description, priority, status).  
- **Filtering & Sorting** → By status, priority, and creation date.   
- **Context API** →  
  - Theme switching (light/dark).  
  - Fake login/logout with Auth state.  
- **Redux Toolkit** →  
  - Task list state + CRUD operations.  
  - Middleware to persist tasks in `localStorage`.  
- **Optimistic Updates** → Instant UI updates before persistence.  
- **Routing** →  
  - `/login` → Fake login form.  
  - `/dashboard` → Task dashboard.  
