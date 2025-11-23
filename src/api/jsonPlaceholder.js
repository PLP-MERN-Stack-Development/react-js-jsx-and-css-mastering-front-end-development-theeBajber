// Alternative API with English content
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Mock English data to replace Latin content
const englishTitles = [
  "Understanding React Components",
  "The Power of Modern JavaScript",
  "Building Responsive Web Designs",
  "Introduction to Node.js",
  "CSS Grid vs Flexbox",
  "State Management in React",
  "API Integration Best Practices",
  "Web Performance Optimization",
  "Progressive Web Apps",
  "TypeScript for Beginners",
  "React Hooks Deep Dive",
  "Frontend Testing Strategies",
  "Building RESTful APIs",
  "Database Design Principles",
  "Cloud Deployment Techniques"
];

const englishContent = [
  "React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces that can be managed independently.",
  "Modern JavaScript has evolved significantly with features like async/await, arrow functions, and modules that make development more efficient and code more readable.",
  "Responsive design ensures that your web applications look great on all devices, from mobile phones to desktop computers, using flexible layouts and media queries.",
  "Node.js enables developers to use JavaScript on the server side, creating fast and scalable network applications with event-driven architecture.",
  "Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Grid is ideal for two-dimensional layouts, while Flexbox works best for one-dimensional layouts.",
  "Effective state management is crucial for complex React applications. Solutions like Context API, Redux, or Zustand help manage application state predictably.",
  "Proper API integration involves handling loading states, errors, and data caching to create smooth user experiences in your applications.",
  "Web performance optimization includes techniques like code splitting, lazy loading, and image optimization to ensure fast loading times and better user engagement.",
  "Progressive Web Apps combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences through web technologies.",
  "TypeScript adds static typing to JavaScript, helping catch errors during development and making codebases more maintainable and scalable.",
  "React Hooks revolutionized functional components by allowing them to use state and lifecycle methods, making code more reusable and easier to understand.",
  "Comprehensive testing strategies including unit tests, integration tests, and end-to-end tests ensure your application works correctly and remains stable during updates.",
  "RESTful APIs follow architectural constraints that make them scalable, maintainable, and easy to consume by various clients including web and mobile applications.",
  "Good database design involves proper normalization, indexing, and relationship management to ensure data integrity and optimal query performance.",
  "Cloud deployment platforms like AWS, Google Cloud, and Azure provide scalable infrastructure for deploying and managing web applications with high availability."
];

export const api = {
  // Get posts with pagination and English content
  getPosts: async (page = 1, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) throw new Error('Failed to fetch posts from the API');

    const originalPosts = await response.json();

    // Replace Latin content with English content
    const englishPosts = originalPosts.map((post, index) => ({
      ...post,
      title: englishTitles[index % englishTitles.length],
      body: englishContent[index % englishContent.length]
    }));

    return englishPosts;
  },

  // Search posts by title (in English)
  searchPosts: async (query) => {
    if (!query.trim()) return [];
    const response = await fetch(
      `${BASE_URL}/posts?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) throw new Error('Failed to search posts');

    const originalPosts = await response.json();

    // Replace Latin content with English content
    const englishPosts = originalPosts.map((post, index) => ({
      ...post,
      title: englishTitles[index % englishTitles.length],
      body: englishContent[index % englishContent.length]
    }));

    return englishPosts;
  },

  // Get a single post with English content
  getPost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) throw new Error('Failed to fetch post details');

    const originalPost = await response.json();

    // Replace Latin content with English content
    const englishPost = {
      ...originalPost,
      title: englishTitles[id % englishTitles.length],
      body: englishContent[id % englishContent.length]
    };

    return englishPost;
  },
};