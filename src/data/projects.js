const PROJECTS = [
  {
    id: 'foodiefly',
    title: 'Foodiefly: Food Delivery Website',
    category: 'Full Stack',
    tech: 'HTML, CSS, Javascript, React, Node, JWT, MongoDB',
    image: '/src/assets/project-images/Foodiefly.png',
    desc: 'Built a scalable food delivery app with login, cart, and real-time order tracking using MERN stack.',
    longDesc: [
      'Built a full-stack Food Delivery Website scalable to 1M+ users using React.js and Node.js.',
      'Delivered 10+ features including Login, Signup, Cart, Live Tracking, and Checkout flow with real-time updates.',
      'Simplified read queries in MongoDB to respond under 10ms; backend API latency under 50ms.',
      ' Achieved 100% REST API test coverage using Postman and Jest, ensuring robust backend performance.'
    ],
    github: 'https://github.com/Tarunsaxena177/Foodiefly.git',
    live: 'https://foodiefly-1.onrender.com',
    video: ''
  },
  {
    id: 'aivirtualassistant',
    title: 'AI Virtual Assistant',
    category: 'AI',
    tech: 'Javascript, MERN Stack, OpenAI API, JWT, Render',
    image: '/src/assets/project-images/Ai Virtual.png',
    desc: 'Integrated NLP-based intent recognition and speech modules for a natural conversational experience.',
    longDesc: [
      'Integrated speech-to-text and text-to-speech modules, enabling natural voice interactions.',
      'Implemented NLP-based intent recognition for context-aware responses.',
      'Managed large-scale audio metadata extraction with minimal failure and refined thread management.'
    ],
    github: 'https://github.com/Tarunsaxena177/AI-VirtualAssistant.git',
    live: 'https://ai-virtualassistant-lbbw.onrender.com',
    video: ''
  },
  {
    id: 'airbnb-clone',
    title: 'Airbnb Clone',
    category: 'Full Stack',
    tech: 'Javascript, React, Node.js, Express, MongoDB',
    image: '/src/assets/project-images/Airbnb_clone.png',
    desc: 'Developed an Airbnb-like platform with user authentication, booking flow, and property management.',
    longDesc: [
      'Built an Airbnb clone with Node.js & Express, supporting dynamic listings and responsive design.',
      'Achieved API response times under 400ms and ensured high throughput under concurrent load.',
      'Integrated user authentication, booking flow, and property management for a complete end-to-end experience.'
    ],
    github: 'https://github.com/Tarunsaxena177/Airbnb.git',
    live: 'https://airbnb-eqyi.onrender.com',
    video: ''
  },
  {
    id: 'hospital-scraper',
    title: 'Hospital Records Scraper',
    category: 'Frontend',
    tech: 'MERN Stack (MongoDB, Express, React, Node)',
    image: '/src/assets/project-images/scraper.jpg',
    desc: 'Built a multithreaded web scraper for hospital directories, achieving 95%+ success rate.',
    longDesc: [
      'Engineered a multithreaded crawler to extract hospital records 50x faster from target medical directories.',
      'Established scraper logic to ensure 95%+ success rate with minimal errors.'
    ],
    github: '',
    live: '',
    video: ''
  },
   {
    id: 'crud-app',
    title: 'CRUD Operation',
    category: 'Full Stack',
    tech: 'MERN Stack (MongoDB, Express, React, Node.js)',
    image: '/src/assets/project-images/crud-app.png',
    desc: 'Developed a full-featured CRUD application for managing user data using the MERN stack.',
    longDesc: [
      'Built a responsive CRUD web app enabling users to Create, Read, Update, and Delete records seamlessly.',
      'Implemented RESTful APIs with Express.js and MongoDB for optimized data persistence and retrieval.',
      'Integrated React front-end with dynamic state management and form validation.',
      'Deployed on Render with secure environment variables and JWT-based authentication for protected routes.'
    ],
    github: 'https://github.com/Tarunsaxena177/BitsandVolts_Tarun.git',
    live: 'https://bitsandvolts-tarun-1.onrender.com/',
    video: ''
  }
];

export default PROJECTS;
