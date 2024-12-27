export const projects = [
  {
    name: "Essentials: An e-commerce platform",
    description: [
      "Designed and developed an e-commerce platform using a robust tech stack including React.js, Redux, and React-Router (v6), enabling seamless navigation and functionality.",
      "Implemented interactive features such as user authentication (custom API), product search with autocomplete, wishlist and cart management, and secure Razorpay payment integration, boosting user satisfaction by enhancing functionality and trust.",
      "Streamlined the UI/UX with pixel-perfect designs using custom CSS and React-Icons for a polished and intuitive user interface.",
      "Enhanced scalability by incorporating responsive design principles and Tailwind CSS for optimized development.",
    ],

    techStack: ["React.js", "Redux", "TailwindCSS", "Razorpay", "React-Router"],
    link: "https://essentialsdeveshcse.netlify.app/",
    sourceCode: "https://github.com/deveshcse/Essentials",
    thumbnail: [
      "/Essentials001.png",
      "/Essentials002.png",
      "/Essentials003.png",
      "/Essentials004.png",
      "/Essentials005.png",
    ],
  },

  {
    name: "ScholarSync: A CRUD application",
    description: [
      "Designed and developed a responsive student management dashboard using React.js, ShadCN, and TailwindCSS, ensuring alignment with the Figma design.",
      "Integrated Redux Toolkit and RTK Query for state management and seamless CRUD operations on student data stored in Supabase.",
      "Built RESTful APIs with Express.js and Prisma, deploying the backend on Render.com and the frontend on Netlify for reliable and secure access.",
      "Modularized the codebase with reusable components, enabling easy maintenance and scalability for future feature additions.",
    ],

    techStack: [
      "Node.js",
      "JavaScript",
      "React.js",
      "PostgreSQL",
      "Express.js",
      "Render",
      "Netlify",
      "Figma",
      "React Router DOM",
      "Tailwind CSS",
      "Redux Toolkit",
      "Supabase",
      "RTK Query",
      "Prisma ORM",
      "ShadCN UI",
    ],
    link: "https://assignmentdeveshcse.netlify.app/",
    sourceCode: "https://github.com/deveshcse/fullstackassignment.git",
    thumbnail: [
      "/ScholarSync001.png",
      "/ScholarSync002.png",
      "/ScholarSync003.png",
      "/ScholarSync004.png",
    ],
  },

  {
    name: "VidStream: YouTube-inspired platform",
    description: [
      "Built and launched a YouTube-inspired video streaming platform using React.js, Redux, and React-Router (v6), offering real-time content updates with YouTube API integration.",
      "Introduced key features such as trending video feeds, video search, subscriptions, shorts, playlists, and gaming content to enhance engagement.",
      "Crafted an engaging UI using Material UI (MUI) components and icons, ensuring seamless interaction across diverse devices.",
      "Integrated YouTube API for efficient data retrieval, enabling up-to-date content and an enriched user experience.",
    ],
    techStack: [
      "React.js",
      "Redux",
      "YouTube API",
      "Material UI",
      "React-Router",
    ],
    link: "https://vidstreamdeveshcse.netlify.app/",
    sourceCode: "https://github.com/deveshcse/vidstream/",
    thumbnail: ["/VidStream001.png", "/VidStream002.png"], // Add the image path here
  },

  {
    name: "Crop Recommendation System",
    description: [
      `Implemented a machine learning-based crop recommendation system using Python, Pandas, and Sci-kit Learn,
 achieving a 96% accuracy rate tailored to soil nutrient data (Nitrogen, Phosphorus, Potassium, etc.).`,
      `Analyzed soil datasets with Matplotlib and Seaborn to extract meaningful insights and refine model performance.
`,
      `Developed an interactive web app with Streamlit, enabling farmers to input soil data and receive actionable crop
 recommendations, and deployed the solution on Streamlit Community Cloud.`,
    ],
    techStack: ["Python", "Sci-kit Learn", "Streamlit", "Pandas", "Matplotlib"],
    link: "https://crop-recommendation-app-deveshcse.streamlit.app/",
    sourceCode: "https://github.com/deveshcse/crop-recommendation-app",
    thumbnail: ["/croprecommendation001.png"], // Add the image path here
  },
];

export const skills = [
  {
    category: "Front-end",
    skills: [
      {
        title: "JavaScript",
        techStack: ["React", "Next.js", "TypeScript", "Redux", "Framer Motion"],
      },
      {
        title: "HTML & CSS",
        techStack: ["TailwindCSS", "Bootstrap", "MaterialUI", "Shadcn/ui"],
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        title: "Back-end Technologies",
        techStack: [
          "Node.js",
          "Express.js",
          "Prisma",
          "MySQL",
          "Firebase",
          "MongoDB",
          "Supabase",
        ],
      },
      {
        title: "Cloud & Python",
        techStack: ["Amazon Web Services (AWS)", "Flask (Python)"],
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        title: "Version Control & Tools",
        techStack: [
          "Git",
          "Github",
          "Vite",
          "Figma",
          "Vector Database (FAISS)",
          "Docker",
        ],
      },
      {
        title: "Languages & Frameworks",
        techStack: ["C/C++", "Python", "Langchain", "Huggingface"],
      },
    ],
  },
];

export const resumePath = "/DeveshMishra_1YOE_FrontendDeveloper.pdf";
