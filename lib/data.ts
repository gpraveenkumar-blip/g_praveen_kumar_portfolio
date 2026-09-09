// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL PERSONAL CONTENT
// Edit this file to personalize the entire site. Nothing else needs touching
// unless you're changing layout/design.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "G PRAVEEN KUMAR",
  titles: ["AI Engineer", "AI/ML Engineer", "Applied AI Engineer", "Agentic AI Engineer", "ML Engineer", "GenAI Engineer", "Generative AI Engineer", "LLM Engineer", "Computer Vision Engineer", "AI Product Engineer", "Full-Stack AI Engineer", "Data Scientist"],
  tagline:
    "I build production full stack AI/ML systems — from data pipeline to deployed model — with a focus on computer vision, applied deep learning, GenAI and AI Automation.",
  valueProposition:
    "I bridge the gap between research and production by creating AI-powered applications that are accurate, efficient, user-centric, and ready for real-world deployment.",
  location: "Hyderabad, India",
  availability: "Open to full-time roles · Available from immediate notice",
  preferredRoles: ["AI Engineer", "AI/ML Engineer", "Applied AI Engineer", "Agentic AI Engineer", "ML Engineer", "GenAI Engineer", "Generative AI Engineer", "LLM Engineer", "Computer Vision Engineer", "AI Product Engineer", "Full-Stack AI Engineer", "Data Scientist"],
  preferredLocations: ["Hyderabad", "Bengaluru", "Remote"],
  email: "gudeballurpraveenkumar@gmail.com",
  phone: "+91 8247359678",
  photo: "/my photo.png", // replace with your headshot, square, ≥600x600
  resumePdf: "/G PRAVEEN KUMAR __AI-ML RESUME.pdf", // replace with your resume file
  languages: [
    { name: "English", level: "Professional" },
    { name: "Telugu", level: "Professional" },
    { name: "Hindi", level: "Native" }
  ],
  interests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Data Science", "prompt Engineering", "AI Agents", "RAG", "LLM", "GenAI", "MLOps", "Web"],
  social: {
    linkedin: "https://www.linkedin.com/in/g-praveen-kumar-421834307/",
    github: "https://github.com/gpraveenkumar-blip",
    kaggle: "https://www.kaggle.com/praveen8247",
    leetcode: "https://leetcode.com/u/G_Praveen_Kumar/",
    hackerrank: "https://www.hackerrank.com/profile/gpraveenkumar12",
    email: "mailto:gudeballurpraveenkumar@gmail.com"
  }
};

export const about = {
  summary:
    "AI/ML Engineer specializing in Generative AI, computer vision, deep learning, and full-stack AI development, with hands-on experience building and deploying AI-powered applications from prototype to production. I focus on the practical side of AI — data quality, model evaluation, API integration, scalable architectures, deployment, and automation — while turning real-world problems into reliable, user-focused AI products.",
  objective:
    "Seeking an AI/ML Engineer or Applied AI role where I can build and own AI systems end-to-end—from problem solving, data preparation, and model development to deployment, evaluation, and production-ready applications.",
  currentStatus: "Recent B.Tech graduate / Currently working as an AI Engineer Intern",
  passion:
    "I'm drawn to the gap between a model that works in a notebook and one that works at 2am under real traffic — that gap is most of the actual engineering.",
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "CSI Wesley Institute of Technology and science affiliated to JNTUH",
      duration: "2022 — 2026",
      cgpa: "8.10 / 10",
      coursework: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Ai Agents", "Ai Automation", "Generative Ai", "Data Structures & Algorithms",]
    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "Vagdevi junior college, Mahabubnagar",
      duration: "2020 — 2022",
      cgpa: "83%",
      coursework: ["Mathematics", "Physics", "Chemistry"]
    }
  ]
};

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[]; // level 0-100
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
    ]
  },

  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "XGBoost", level: 82 },
      { name: "Feature Engineering", level: 88 },
      { name: "Model Evaluation", level: 88 }
    ]
  },

  {
    category: "Deep Learning",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "CNN", level: 92 },
      { name: "RNN/LSTM", level: 78 },
      { name: "Transformers", level: 85 }
    ]
  },

  {
    category: "Generative AI",
    skills: [
      { name: "LLMs", level: 88 },
      { name: "Prompt Engineering", level: 90 },
      { name: "RAG", level: 82 },
      { name: "AI Agents", level: 80 },
      { name: "Embeddings & Vector Search", level: 80 }
    ]
  },

  {
    category: "Computer Vision",
    skills: [
      { name: "OpenCV", level: 92 },
      { name: "YOLO", level: 88 },
      { name: "MediaPipe", level: 82 },
      { name: "Image Classification", level: 90 },
      { name: "Object Detection", level: 88 },
      { name: "Face Recognition", level: 82 }
    ]
  },

  {
    category: "Data Science",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 92 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 82 },
      { name: "Data Preprocessing", level: 90 }
    ]
  },

  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Supabase", level: 82 }
    ]
  },

  {
    category: "AI & Backend",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "AI API Integration", level: 90 },
      { name: "Model Deployment", level: 82 }
    ]
  },

  {
    category: "Full-Stack Development",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "HTML/CSS", level: 88 },
      { name: "Tailwind CSS", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 78 }
    ]
  },

  {
    category: "MLOps & Deployment",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "Docker", level: 82 },
      { name: "GitHub Actions", level: 78 },
      { name: "MLflow", level: 70 }
    ]
  },

  {
    category: "Cloud & Platforms",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 88 },
      { name: "Render", level: 82 },
      { name: "Netlify", level: 85 }
    ]
  }
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architectureImage?: string;
  screenshots: string[];
  demoVideo?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  reportUrl?: string;
  metrics: { label: string; value: string }[];
  futureImprovements: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "snapclass",
    title: "SnapClass — AI-Powered Smart Attendance",
    image: "/projects/snapclass.png",
    summary: "An AI-powered classroom attendance platform that combines face recognition, voice recognition, and QR-based workflows to make attendance faster and easier.",
    problem: "Traditional classroom attendance is time-consuming, prone to manual errors, and difficult to manage efficiently across teachers, students, and attendance records.",
    solution: "Built SnapClass as an automated attendance platform with teacher and student workflows, supporting face-based photo attendance, voice attendance, QR-driven interactions, enrollment, and centralized attendance records.",
    features: [
      "AI-powered face recognition for attendance",
      "Voice-based attendance workflow",
      "QR-based classroom and student interactions",
      "Teacher dashboard for attendance management",
      "Student enrollment and attendance dashboard",
      "Stored attendance records and history"
    ],
    techStack: ["Python", "Flask", "Streamlit", "Supabase", "Computer Vision", "Face Recognition", "Voice Recognition"],
    architectureImage: "/projects/snapclass-architecture.png",
    screenshots: [
      "/projects/snapclass-dashboard.png",
      "/projects/snapclass-photo-attendance.png",
      "/projects/snapclass-teacher-dashboard.png",
      "/projects/snapclass-student-dashboard.png"
    ],
    demoVideo: "https://your-demo-video-link.com",
    githubUrl: "https://github.com/gpraveenkumar-blip/SnapClass--Smart-AI-Attendance-System.git",
    liveDemoUrl: "https://snapcalss-ai.netlify.app/",
    reportUrl: "/reports/snapclass-report.pdf",
    metrics: [
      { label: "Attendance Modes", value: "3" },
      { label: "User Roles", value: "2" },
      { label: "Core Workflow", value: "AI + QR" }
    ],
    futureImprovements: [
      "Improve recognition accuracy under varied lighting and camera conditions",
      "Add advanced attendance analytics and reporting",
      "Introduce stronger anti-spoofing and liveness detection",
      "Optimize the platform for larger classrooms and institutions"
    ],
    tags: ["Artificial Intelligence", "Computer Vision", "Face Recognition", "Voice Recognition", "EdTech"]
  },

  {
    slug: "ai-gym-coach",
    title: "AI Real-Time Gym Coach",
    image: "/projects/gym-coach3.png",
    summary:
      "Real-time AI fitness coach that uses computer vision and pose estimation to track exercises, count reps, analyze form, and provide live coaching feedback.",
    problem:
      "Many people train without a personal trainer and may struggle to maintain correct exercise form, track repetitions accurately, or recognize movement mistakes during workouts.",
    solution:
      "Built a real-time computer-vision fitness coach using MediaPipe pose estimation, OpenCV, WebRTC, and exercise-specific detection logic. The app analyzes body landmarks and movement patterns to track reps and sets, evaluate form-related metrics, and provide AI-powered coaching and voice feedback.",
    features: [
      "Real-time webcam pose estimation",
      "Automatic repetition counting",
      "Set and workout tracking",
      "Exercise-specific form analysis",
      "Real-time form feedback",
      "AI-powered coaching with Groq",
      "Voice coaching and text-to-speech feedback",
      "Multiple exercise detectors",
      "Workout history and progress tracking",
      "Interactive Streamlit interface"
    ],
    techStack: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "Streamlit",
      "WebRTC",
      "Groq",
      "gTTS"
    ],
    screenshots: [
      "/projects/gym-1.png",
      "/projects/gym-2.png",
      "/projects/gym-3.png",
      "/projects/gym-4.png",
      "/projects/gym-5.png",
      "/projects/gym-6.png"
    ],
    githubUrl:
      "https://github.com/gpraveenkumar-blip/AI-Real-time-GYM-Coach",
    liveDemoUrl:
      "https://aigymcoach-in.netlify.app/",
    metrics: [
      { label: "Pose Analysis", value: "Real-time" },
      { label: "Workout Tracking", value: "Live" },
      { label: "AI Coaching", value: "Enabled" }
    ],
    futureImprovements: [
      "Add more exercise detectors",
      "Improve form classification",
      "Personalized workout plans",
      "Advanced workout analytics",
      "Progress visualization",
      "Calorie estimation",
      "Multilingual AI coaching",
      "Mobile app version"
    ],
    tags: [
      "Computer Vision",
      "Artificial Intelligence",
      "MediaPipe",
      "OpenCV",
      "Streamlit",
      "Fitness Tech"
    ]
  },

];

export const experience = [
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "IBM SkillsBuild – Edunet Foundation",
    duration: "Dec 2025 — Jan 2026",
    responsibilities: [
      "Completed a 6-week AI & Machine Learning internship under the AICTE program",
      "Gained hands-on experience in Artificial Intelligence and Machine Learning concepts",
      "Developed industry-oriented technical skills through IBM SkillsBuild learning and practical training"
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python"
    ],
    achievements: [
      "Successfully completed the AICTE 6-week AI & ML internship program in collaboration with Edunet Foundation and IBM SkillsBuild"
    ]
  },

];

export const certifications = [
  {
    name: "AI/ML using Python",
    organization: "IIT Madras",
    image: "/certs/aiml_iitm.jpg",
    issueDate: "2025",
    credentialUrl: "https://digitalskills.iitmpravartak.org.in/iitprogram/pages/certificate/DSA00366_4.pdf"
  },
  {
    name: "AI/ML for Geodata Analyrics",
    organization: "ISRO (Indian space research organisation)",
    image: "/certs/ai_ml_isro.jpg",
    issueDate: "2026",
    credentialUrl: "https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php"
  },
  {
    name: "Geodata Processing using Python and Machine Learning",
    organization: "ISRO (Indian space research organisation)",
    image: "/certs/pyml_isro.jpg",
    issueDate: "2025",
    credentialUrl: "https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php?contextid=1049408"
  },
  {
    name: "Artificial Intelligence and Machine Learning Internship",
    organization: "IBM SkillsBuild",
    image: "/certs/ibm_skill.jpg",
    issueDate: "2025",
    credentialUrl: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_certified-aiml-internship-with-ibm-skill-ugcPost-7425955060624461824-dGpL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5BYFkBQvBhn7vf9xdP6-y7MggyTg8jyuM"
  },
  {
    name: "AI Agents",
    organization: "Google Cloud",
    image: "/certs/google_ai.jpeg",
    issueDate: "2025",
    credentialUrl: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_google-aiagents-googlecloud-ugcPost-7365706524964343809-Qdw_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5BYFkBQvBhn7vf9xdP6-y7MggyTg8jyuM"
  },
  {
    name: "Artificial Intelligence",
    organization: "IBM",
    image: "/certs/ibm_ai.jpg",
    issueDate: "2025",
    credentialUrl: "https://www.credly.com/badges/0d111962-edd6-4d0b-a640-adb0ea457cb9"
  },
  {
    name: "Machine Learning using Python",
    organization: "NIELIT (National Institute of Electronics and Information Technology)",
    image: "/certs/nielit_ml.jpg",
    issueDate: "2025",
    credentialUrl: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_nielit-machine-learning-certification-using-ugcPost-7405136366520614912-Z7Px/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5BYFkBQvBhn7vf9xdP6-y7MggyTg8jyuM"
  },
  {
    name: "Python",
    organization: "NIELIT (National Institute of Electronics and Information Technology)",
    image: "/certs/nielit_py.jpg",
    issueDate: "2025",
    credentialUrl: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_learning-report-python-programming-at-nielit-activity-7397618766626553856-tHeI?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE5BYFkBQvBhn7vf9xdP6-y7MggyTg8jyuM&utm_campaign=copy_link"
  },
  {
    name: "Quantum Computing",
    organization: "C-DAC Hyderabad & IIT Roorkee",
    image: "/certs/quc_iitr.jpg",
    issueDate: "2025",
    credentialUrl: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_iitroorke-quantumcomputing-cdachyderabad-activity-7338158001108721664-epv2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5BYFkBQvBhn7vf9xdP6-y7MggyTg8jyuM"
  },
  {
    name: "AI Tool Workshop",
    organization: "be10x",
    image: "/certs/be10x.jpg",
    issueDate: "2026",
    credentialUrl: ""
  },
];

export const achievements = {
  coding: [
    "Hands-on experience developing AI/ML applications using Python",
    "Built and deployed multiple real-world AI-powered projects"
  ],

  hackathons: [
    "Smart India Hackathon 2025",
    "Participant — Developed an AI-powered solution"
  ],

  competitions: [
    "Kaggle — 3 Competitions",
    "Kaggle — 12 Notebooks",
    "Kaggle — 2 Datasets",
    "Kaggle — Bronze Medal"
  ],

  research: [
    "Hands-on exploration of Computer Vision, Deep Learning, and Generative AI through practical projects"
  ],

  publications: [
    {
      title: "AICTE 6-Week Internship in Artificial Intelligence & Machine Learning",
      venue: "LinkedIn — 2025",
      url: "https://www.linkedin.com/posts/g-praveen-kumar-421834307_aicte-6-weeks-internship-in-aiml-edunet-activity-7411775260619890689-miou"
    }
  ],

  badges: [
    "Artificial Intelligence & Machine Learning Internship — Edunet Foundation",
    "AICTE & IBM SkillsBuild"
  ]
};


export const whyHireMe = [
  { title: "Strong problem-solving", description: "I break ambiguous problems into testable ML hypotheses fast." },
  { title: "Fast learner", description: "Comfortable picking up new frameworks and domains under time pressure." },
  { title: "AI/ML specialization", description: "Deep focus on computer vision and applied deep learning." },
  { title: "Team player", description: "Used to working closely with product, design, and backend engineers." },
  { title: "Good communication", description: "I explain model tradeoffs in terms non-ML stakeholders can act on." },
  { title: "Project experience", description: "Seven end-to-end projects, from data collection to deployment." },
  { title: "Passion for research", description: "I read papers for fun and try to reimplement the interesting ones." }
];

export const recruiterSnapshot = {
  yearsExperience: "fresher",
  projectsCompleted: `${projects.length}+`,
  certifications: `${certifications.length}`,
  education: "B.Tech Computer Science and Engineering, 2026",
  currentStatus: about.currentStatus,
  availability: profile.availability,
  preferredLocations: profile.preferredLocations.join(", "),
  expectedRole: profile.preferredRoles[0]
};

export const skillsMatrix = [
  { label: "Programming", rating: 5 },
  { label: "Data Structures & Algorithms", rating: 4 },
  { label: "Artificial Intelligence", rating: 5 },
  { label: "Machine Learning", rating: 5 },
  { label: "Deep Learning", rating: 5 },
  { label: "Generative AI", rating: 5 },
  { label: "Computer Vision", rating: 5 },
  { label: "Python", rating: 5 },
  { label: "SQL", rating: 4 },
  { label: "Full-Stack Development", rating: 4 },
  { label: "Model Deployment & MLOps", rating: 4 },
  { label: "Communication", rating: 4 }
];

export const careerTimeline = [
  { year: "2020", title: "Started Class XI with MPC", description: "First problem-slove of Maths, first broken build." },
  { year: "2022", title: "Began B.Tech in CSE", description: "Picked AI/ML as a specialization from day one." },
  { year: "2023", title: "Deep dive into AI world with ChatGPT Pro", description: "exploring artificial intelligence beyond basic buzzwords to understand how computers process data, recognize patterns, and mimic human thought." },
  { year: "2024", title: "To build AI powered real time projects shipped", description: "Built and deployed a full stack Ai powered projects end-to-end." },
  { year: "2025", title: "AI/ML Engineer Internship", description: "Owned a computer-vision and Deep learning feature end-to-end." },
  { year: "2026", title: "Graduating — seeking full-time AI/ML Engineer role", description: "You are here." }
];

export const chatbotFaq: { question: string; keywords: string[]; answer: string }[] = [
  {
    question: "What roles are you looking for?",
    keywords: ["role", "position", "job", "looking for", "hiring"],
    answer: `I'm looking for AI/ML Engineer, Applied AI Engineer, Generative AI Engineer, and AI Product Engineer roles. I'm interested in opportunities where I can build and deploy AI solutions end-to-end.`
  },
  {
    question: "What are your strongest skills?",
    keywords: ["skill", "strength", "good at", "expert"],
    answer:
      "My strongest areas are Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Computer Vision, and Python, with supporting skills in Full-Stack Development, APIs, databases, and deployment."
  },
  {
    question: "Can I see your resume?",
    keywords: ["resume", "cv", "curriculum vitae"],
    answer:
      "Yes — head to the Resume section to view or download my latest resume."
  },
  {
    question: "What projects have you built?",
    keywords: ["project", "built", "work", "portfolio"],
    answer:
      "I've built multiple AI-powered projects covering Machine Learning, Computer Vision, Generative AI, and Full-Stack AI applications. Check the Projects section to explore my work and see the technologies used in each project."
  },
  {
    question: "How can I contact you?",
    keywords: ["contact", "email", "reach", "connect"],
    answer:
      "You can reach me through the contact section of this portfolio. I'm open to discussing AI/ML opportunities, collaborations, internships, and innovative AI projects."
  }
];
