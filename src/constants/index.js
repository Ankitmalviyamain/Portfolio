import project0 from "../assets/projects/aiformBuilder.png";
import project1 from "../assets/projects/chatDashboard.png";
import project2 from "../assets/projects/notesAppDashboard.png";
import project3 from "../assets/projects/AuthApp.jpg";
import slideGenImage from '../assets/projects/slide-gen.png'
import arbitrageBotImage from '../assets/projects/arbitrage_image.png';
import chimpxImage from '../assets/projects/chimpx.png';
import journalingAppImage from '../assets/projects/aijournal.png';
import wabsyImage from '../assets/projects/wabsyImage.jpg'
import veneklasenImage from '../assets/projects/veneklasenImage.jpg'
import pegasusImage from '../assets/projects/pegasusImage.jpeg'

export const HERO_CONTENT = `I am a passionate full stack developer specializing in building robust, scalable, and AI-powered web applications. With 3 years of hands-on experience, I excel in modern front-end development using React.js and TypeScript, and back-end engineering with Node.js, Express, and ASP.NET Core (Web API & MVC). I have deep expertise in PostgreSQL for data management, and I’m proficient in building AI-driven solutions to solve complex business problems. My cloud infrastructure skills include AWS services like S3, EC2, and RDS, and I’m well-versed in creating innovative, production-ready solutions that drive business growth and deliver exceptional user experiences.`;
export const EXPERIENCES = [
  {
    year: "January 2023 - Present",
    role: "Full Stack Developer",
    company: "Apricus Intech",
    description: `Architected a comprehensive All-in-One ERP ecosystem (Wabsy) using Node.js and React, integrating Inventory, LMS, and TMS modules.
• Developed and maintained scalable backend systems for multiple client sites using .NET Core MVC and PostgreSQL on AWS.
• Engineered automated Marketing and Customer Engagement workflows, significantly reducing manual operational tasks.
• Optimized database queries and API logic, achieving a 30% improvement in page load speeds and 15% reduction in latency.
• Leveraged OutSystems for rapid internal tool development, cutting standard development cycles by 25%.`,
    technologies: ["React.js", "Node.js", "ASP.NET Core", "Web API", "MVC", "PostgreSQL", "AWS", "RDS", "OutSystems", "TypeScript", "Agile"],
  },
  {
    year: "June 2022 - December 2023",
    role: "Associate Software Engineer Trainee",
    company: "Hexaware Technologies",
    description: `Completed intensive full-stack residency in the HTTP domain, mastering enterprise-level application architecture.
• Developed modular web components using React, Node.js, and Express, ensuring high code quality and reusability.
• Collaborated in Agile sprints for the development of enterprise modules using Java and C#.
• Contributed to daily Scrum cycles, ensuring clean code standards and high-quality deployments for client-facing features.`,
    technologies: ["Node.js", "Express", "React.js", "Java", "C#", "SQL", "JavaScript", "Git", "Agile"],
  },
  {
    year: "August 2021 - December 2022",
    role: "Software Engineering Project Lead",
    company: "Freelance / Academic Projects",
    description: `Built a real-time Fund Manager Stock Selection Platform using ASP.NET Core Web API and React.
• Integrated web scraping modules to fetch real-time Last Traded Price (LTP) data for financial analysis.
• Implemented historical data storage using PostgreSQL hosted on AWS EC2 instances.`,
    technologies: ["ASP.NET Core", "React.js", "PostgreSQL", "AWS", "Web Scraping", "REST APIs"],
  },
];
export const EDUCATION = [
  {
    year: "August 2018 - May 2022",
    role: "Bachelor of Technology, Computer Science (74.8%)",
    company: "Truba College of Science and Technology, Bhopal",
    description: `Gained a comprehensive foundation in computer science principles, specializing in software engineering and web technologies. Focused on data structures, algorithms, and object-oriented programming. Led academic projects involving full-stack development and system design, successfully implementing scalable solutions using modern frameworks.`,
    technologies: ["C#", "Java", "C++", "Data Structures", "Algorithms", "DBMS", "Software Engineering"],
  },

];
export const PROJECTS = [
  {
    title: "Wabsy Business Management Suite (All-in-One ERP)",
    image: wabsyImage,
    link: "https://www.wabsy.in/",
    description:
      "Architected and engineered a comprehensive enterprise ERP ecosystem from scratch, integrating mission-critical modules like Inventory, LMS, and TMS. Developed a high-impact marketing suite with automated engagement workflows and a robust billing engine. Utilized PostgreSQL on AWS to manage complex relational data, significantly reducing manual operational tasks for business users.",
    technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Express", "TypeScript", "Meta Auth", "Automation"],
  },
  {
    title: "Veneklasen Associate - USA client Website",
    image: veneklasenImage,
    link: "https://www.veneklasen.in/",
    description:
      "Successfully led the end-to-end development of this complete corporate website for an international client. Focused on building a scalable architecture using ASP.NET Core and React to deliver a premium user experience. Managed the entire project lifecycle, from database schema design in PostgreSQL to final deployment on AWS infrastructure.",
    technologies: ["ASP.NET Core", "React", "Web API", "PostgreSQL", "AWS RDS", "Responsive Design", "Client Management"],
  },
  {
    title: "AI-Powered DeFi Trading Agent - Chimpx",
    image: chimpxImage,
    hostLink: "#",
    description:
      "Developed intelligent trading agents for decentralized exchanges enabling natural language interaction for position management and market analysis. Integrated real-time blockchain data feeds and implemented automated trading strategies based on user-defined parameters. Built secure wallet connection system supporting multiple Web3 wallets with transaction signing capabilities.",
    technologies: ["React.js", "TypeScript", "Node.js", "Web3", "Blockchain", "LangChain", "LangGraph", "DeFi", "Smart Contracts"],
  },
  {
    title: "Pegasus Pharma International - Ireland Client Project",
    image: pegasusImage,
    link: "https://pegasuspharmaintl.com/",
    description:
      "Developed the complete web presence for Pegasus Pharma, a prominent pharmaceutical client based in Ireland. Built a secure and professional platform tailored to international industry standards. Implemented a robust backend using Node.js and .NET, ensuring high data integrity and a seamless interface for global stakeholders.",
    technologies: [ "CSS3", "Security Standards", "International Client Delivery"],
  },
  {
    title: "Cryptocurrency Arbitrage Trading Bot",
    image: arbitrageBotImage,
    hostLink: "#",
    description:
      "Engineered high-frequency trading bot executing cross-platform arbitrage between centralized exchanges and banking systems. Implemented real-time price monitoring, automated order execution, and risk management protocols. Achieved $1,000+ USDT in profitable trades through optimized trading algorithms and latency reduction.",
    technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "WebSockets", "REST APIs"],
  },
  {
    title: "AI Journaling Mobile Application",
    image: journalingAppImage,
    hostLink: "#",
    description:
      "Built a cross-platform mobile application featuring AI-powered life coaching and personalized insights. Integrated sentiment analysis and pattern recognition to provide actionable feedback on daily journal entries. Implemented secure user authentication, encrypted data storage, and cloud synchronization features.",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AI", "Machine Learning", "LangChain"],
  },
  {
    title: "Slide Gen",
    image: slideGenImage, 
    hostLink: "https://slide-gen.atmalviya.cloud/",
    description:
      "Created automated tool generating PowerPoint presentations from YouTube video URLs using AI-driven content extraction. Implemented subtitle extraction, NLP-based summarization, and formatted slide generation pipeline. Reduced presentation creation time by 75% through intelligent content structuring.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Gemini AI",
      "TypeScript",
      "UploadThing",
      "Shadcn UI",
      "NLP",
    ],
  },
  {
    title: "Ai Form Builder",
    image: project0,
    description:
      "Developed an intelligent platform for dynamic form generation using AI-driven automation and natural language processing. Enables users to create complex, customized forms through conversational interface without coding knowledge.",
    technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Drizzel", "AI", "LangChain"],
  },
  {
    title: "Real Time Chat Application",
    image: project1,
    description:
      "Built scalable real-time messaging platform with WebSocket technology ensuring low-latency communication. Implemented secure authentication, authorization, message encryption, and user presence detection. Designed responsive UI supporting group chats, file sharing, and message history synchronization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "Encryption"],
  },
  {
    title: "Notes Application",
    image: project2,
    description:
      "This is a full-stack notes application built using the MERN stack. The application allows users to login to their account and create, read, update, and delete notes.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Authentication App",
    image: project3,
    description:
      "This is an authentication application where users can register themselves, log in, view and update their profiles, and reset their passwords using an OTP sent to their email.",
    technologies: ["React", "Tailwin CSS", "Node.js", "Express", "MongoDB", "JWT"],
  }
];

export const CONTACT = {
  address: "Bhopal Madhya Pradesh, India",
  phoneNo: "+91 8959445692",
  email: "ankitmalviya1316@gmail.com",
};
