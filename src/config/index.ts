import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Siddharth Garg — AI/ML Developer",
  author: "Siddharth Garg",
  description:
    "Software Engineer based in Seattle, USA. I specialize in AI/ML, backend development, and cloud infrastructure.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/siddharthgarg26" },
    { text: "Github", href: "https://github.com/sgarg26" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Siddharth Garg",
    specialty: "AI/ML Developer",
    summary:
      "Software Engineer based in Seattle, USA. I specialize in AI/ML, backend development, and cloud infrastructure.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "T-Mobile",
      position: "Software Engineering Intern",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Develop agent orchestration pipelines using LangGraph and CrewAI to automate a spam filtering system.",
        "Design Model Context Protocol (MCP) servers to expose structured tools for PostgreSQL and Apache Cassandra, which are used as data sources.",
        "Use Kubernetes to deploy and manage the application.",
      ],
    },
    {
      company: "Nileflo AI Solutions",
      position: "AI/ML Developer",
      startDate: "November 2024",
      endDate: "Present",
      summary: [
        "Developed and deployed a real-time Azure API-based NLP application to record and summarize patient-doctor conversations, enabling healthcare providers to efficiently review and understand patient requirements.",
        "Created an RAG-based chatbot using Cosmos DB and Python, allowing doctors to query AI about patient information securely and contextually.",
        "Integrated agentic AI into the application, enabling medical professionals to delegate and streamline administrative tasks using requests in natural language.",
      ],
    },
    {
      company: "SciTech Robotics",
      position: "Lead Developer",
      startDate: "January 2024",
      endDate: "January 2025",
      summary: [
        "Served as the Programming Team Officer for the Vex U robotics team, overseeing software development and implementation for competition tasks.",
        "Trained YOLOv11 on custom datasets in Python, achieving 92% confidence in detecting scoring objects on the field.",
        "Programmed microcontrollers and depth cameras in C++ and Python for depth perception and V-SLAM tasks.",
      ]
    },
  ],
  projects: [
    {
      name: "FastRTC-Kroko",
      summary: "Developed an extension for the open-source gradio-app/fastrtc library to integrate Kroko ASR, enabling real-time speech-to-text transcription using the Kroko model within interactive audio streaming pipelines",
      linkPreview: "/",
      linkSource: "https://github.com/sgarg26/fastrtc-kroko",
      image: "/fastrtc-kroko.jpg",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
I’m Siddharth Garg, a software engineer passionate about artificial intelligence and building practical tech that makes a difference. My main interests are in AI, robotics, machine learning, and backend development. I love experimenting with the open-source AI models, integrating them into real-world systems, and automating workflows with Python and Rust. When I’m not coding, I’m exploring sci-fi worlds or checking out the latest in tech.
    `,
    image: "/siddharth-big.jpg",
  },
};

// #5755ff
