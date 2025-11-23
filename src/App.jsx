import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import APIDemo from './components/APIDemo';

function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome to Task Manager
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        A modern React application built with Tailwind CSS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create, organize, and track your tasks with our intuitive task manager.
          </p>
          <a
            href="/tasks"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Tasks
          </a>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            API Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Explore our API integration demo with JSONPlaceholder.
          </p>
          <a
            href="/api-demo"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            API Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api-demo" element={<APIDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;