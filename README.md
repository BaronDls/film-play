# 🎬 Film Play 
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.1-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.8.2-5A29E4?logo=axios&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.0-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)
## 📖 Descripción
**Film Play** es una **Single Page Application (SPA)** desarrollada para gestionar y visualizar películas (medias).  
Permite realizar operaciones **CRUD** sobre entidades relacionadas como *Media*, *Directores*, *Productores*, *Géneros* y *Tipos*, además de contar con **autenticación de usuarios mediante JWT**.

---

## 🚀 Características principales
- 📋 Listado y detalle de películas.
- ✏️ Crear, editar y eliminar entidades relacionadas (Director, Producer, Genre, Type).
- 🔐 Autenticación de usuarios con **JSON Web Tokens (JWT)**.
- 💾 Persistencia de sesión mediante `localStorage`.
- 💅 Interfaz moderna, responsive y accesible con **TailwindCSS**.
- 🔔 Notificaciones no intrusivas con **Sonner** (toasts).

---

## 🧩 Tecnologías utilizadas

### **Frontend**
- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🧭 [React Router DOM](https://reactrouter.com/)
- 🌐 [Axios](https://axios-http.com/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🔔 [Sonner](https://sonner.emilkowal.ski/)

### **Backend**
- 🟢 [Node.js](https://nodejs.org/)
- 🚂 [Express](https://expressjs.com/)
- 🍃 [MongoDB](https://www.mongodb.com/)
- 🧬 [Mongoose](https://mongoosejs.com/)
- 🔑 [JWT](https://jwt.io/)

---

## 📁 Estructura del proyecto
```
film-play/
├── backend/ # Servidor API (Express + Mongoose)
│ ├── index.js # Configuración principal y rutas
│ ├── controllers # Peticiones y respuestas
│ ├── models/ # Modelos Mongoose
│ ├── routes/ # rutas
│ ├── Middleware # Comunicación de datos y validaciones 
│ └── .env.example # Variables de entorno del backend
│
├── frontend/ # Cliente (React + Vite)
│ ├── src/
│ │ ├── api/ # Llamadas a la API (usa VITE_API_URL)
│ │ ├── components/ # Componentes reutilizables
│ │ ├── pages/ # Vistas (MediaLayout, Login, NotFound, etc.)
│ │ └── App.jsx # Rutas (Router DOM)
│ │ └── main.jsx
│ └── .env.example # Variables de entorno del frontend
│
└── README.md
```

---

## ⚙️ Instalación y ejecución (Windows)

### **1. Clonar el repositorio**
```
git clone https://github.com/BaronDls/film-play.git
cd film-play
```
### **2.Backend**
```
cd backend
npm install
npm run dev
```
### **3.Fronend**
```
cd frontend
npm install
npm run dev
```



