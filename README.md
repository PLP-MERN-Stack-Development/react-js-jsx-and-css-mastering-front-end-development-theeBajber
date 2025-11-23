# React Task Manager

A modern, responsive React application built with Vite and Tailwind CSS. Features task management, API integration, and dark/light theme switching.

## ✨ Features

- **Task Management**: Add, complete, delete, and filter tasks
- **Local Storage**: Tasks persist in your browser
- **API Integration**: Fetch and display posts from JSONPlaceholder API
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **React Router**: Client-side routing for seamless navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, useContext)


Project Live Link: https://react-js-jsx-and-css-mastering-fron-rho-three.vercel.app/

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/react-task-manager.git](https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-reubenm597.git)
   cd react-task-manager


Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:3000



📁 Project Structure
text
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button with variants
│   ├── Card.jsx        # Card container
│   ├── TaskManager.jsx # Task management functionality
│   ├── APIDemo.jsx     # API integration demo
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Footer.jsx      # Site footer
│   └── Layout.jsx      # Main layout wrapper
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management
├── api/                # API integration
│   └── jsonPlaceholder.js
├── App.jsx             # Main application component
└── main.jsx            # Application entry point






🎯 Available Scripts
npm run dev - Start development server

npm run build - Create production build

npm run preview - Preview production build locally

npm run lint - Run ESLint
