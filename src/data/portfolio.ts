export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterTag: "all" | "astrology" | "consultation" | "edtech" | "procurement";
  downloads: string;
  client: string;
  description: string;
  technologies: string[];
  features: string[];
  playStoreUrl: string;
  image: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  badge?: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Achievement {
  value: string;
  label: string;
  detail: string;
}

export const PORTFOLIO_DATA = {
  owner: {
    name: "Azaruddin Khan",
    headlineFirst: "AZARUDDIN",
    headlineLast: "KHAN",
    title: "Flutter Developer & Mobile App Developer",
    roleShort: "Flutter Developer",
    experienceYears: "3+",
    location: "Jaipur, India",
    email: "azaruddinkhan465@gmail.com",
    phone: "+91 7877145521",
    linkedinUrl: "https://www.linkedin.com/in/azaruddin-khan-b8653b2a3/",
    githubUrl: "https://github.com/Azaruddin1khan",
    resumeUrl: "/resume/Azaruddin_Khan_Resume.pdf",
    statusBadge: "Available for Hire",
  },

  hero: {
    intro: "I build beautiful, scalable, and production-ready mobile applications.",
    secondaryDescription:
      "Mobile App Developer with 3+ years of experience building real-world Flutter applications, integrating complex APIs, and delivering high-quality mobile experiences.",
    stats: [
      { value: "03+", label: "Years Experience" },
      { value: "04", label: "Live Applications" },
      { value: "1M+", label: "Downloads on Contributed App" },
    ],
  },

  about: {
    heading: "ABOUT ME",
    subheading: "Turning ideas into powerful mobile experiences.",
    paragraphs: [
      "I'm Azaruddin Khan, a Mobile App Developer with 3+ years of hands-on experience developing and maintaining production Flutter applications.",
      "I specialize in Flutter, Dart, Bloc/Cubit, Clean Architecture, Firebase, REST APIs, and real-time application features.",
      "Throughout my professional journey, I have contributed to four applications published on Google Play, including an astrology platform with over one million downloads.",
      "I enjoy building responsive user interfaces, integrating complex services, optimizing application performance, and delivering reliable mobile experiences.",
    ],
    highlightKeywords: [
      "Flutter",
      "Dart",
      "Bloc/Cubit",
      "Clean Architecture",
      "Firebase",
      "REST APIs",
      "1M+ downloads",
      "Google Play",
    ],
  },

  experience: [
    {
      company: "Appic Softwares LLP",
      role: "Flutter Developer",
      duration: "2023 - 2026",
      location: "Jaipur, India",
      description:
        "Developed and maintained production Flutter applications with a focus on performance, responsive interfaces, and reliable releases.",
      responsibilities: [
        "Developed responsive mobile interfaces using Flutter.",
        "Implemented Clean Architecture and MVC/MVVM patterns.",
        "Managed application state using Bloc and Cubit.",
        "Integrated Firebase authentication, storage, and real-time data.",
        "Integrated REST APIs and JSON services.",
        "Implemented wallet and payment-related application features.",
        "Built real-time chat and call consultation flows.",
        "Applied unit, widget and integration testing practices.",
        "Supported debugging and Google Play release workflows.",
        "Collaborated using Git and GitHub.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Bloc",
        "Cubit",
        "Clean Architecture",
        "Firebase",
        "REST APIs",
        "WebSockets",
        "Git",
      ],
    },
  ],

  projects: [
    {
      id: "balaji-astro-guide",
      number: "01",
      title: "Balaji Astro Guide",
      category: "Flutter / Astrology / Real-Time Consultation",
      filterTag: "astrology",
      downloads: "1M+ Downloads",
      client: "Balaji Telefilms Limited",
      description:
        "A Vedic astrology application offering Janam Kundli, Kundli matching, Pooja booking, daily horoscopes, and live chat and call consultations with astrologers.",
      technologies: ["Flutter", "Dart", "Firebase", "WebSockets", "Agora Calling"],
      features: [
        "Janam Kundli",
        "Kundli Matching",
        "Pooja Booking",
        "Daily Horoscope",
        "Astrologer Chat",
        "Call Consultation",
      ],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.astrovani.balaji.app",
      image: "/projects/balaji-astro.jpg",
      featured: true,
    },
    {
      id: "hello-astrologer",
      number: "02",
      title: "Hello Astrologer",
      category: "Flutter / Astrology Platform",
      filterTag: "consultation",
      downloads: "5K+ Downloads",
      client: "Champs Connect Pvt. Ltd.",
      description:
        "An astrology platform offering online chat and call consultations, an astrologer directory for offline consultations, free Kundli, matchmaking, horoscope and Panchang.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "Bloc", "REST APIs"],
      features: [
        "Online Consultation",
        "Astrologer Directory",
        "Kundli",
        "Matchmaking",
        "Horoscope",
        "Panchang",
      ],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.helloastro.user",
      image: "/projects/hello-astrologer.jpg",
      featured: false,
    },
    {
      id: "vedvidhi-live-astrology",
      number: "03",
      title: "Vedvidhi: Live Astrology",
      category: "Flutter / Live Streaming / Education",
      filterTag: "edtech",
      downloads: "5K+ Downloads",
      client: "Asthavarga Pvt. Ltd.",
      description:
        "A live astrology application offering chat and call consultations, online astrology courses with certification, and live streaming.",
      technologies: ["Flutter", "Dart", "Live Streaming", "Cubit", "Payment Gateway"],
      features: [
        "Live Chat",
        "Call Consultation",
        "Online Courses",
        "Certification",
        "Live Streaming",
      ],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.vedvidhi.user",
      image: "/projects/vedvidhi.jpg",
      featured: false,
    },
    {
      id: "constromat",
      number: "04",
      title: "Constromat",
      category: "Flutter / Construction / Procurement",
      filterTag: "procurement",
      downloads: "100+ Downloads",
      client: "Indithrive Infratech Pvt. Ltd.",
      description:
        "A construction-material procurement application connecting customers with suppliers for materials including sand, bricks, doors, paints and plumbing products, with a focus on competitive rates and delivery times.",
      technologies: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "Order Tracking"],
      features: [
        "Construction Material Discovery",
        "Supplier Connections",
        "Product Categories",
        "Procurement Experience",
      ],
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.consto.constomart",
      image: "/projects/constromat.jpg",
      featured: false,
    },
  ] as Project[],

  skills: [
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", category: "Framework", badge: "Core" },
        { name: "Dart", category: "Language", badge: "Core" },
        { name: "Android", category: "Platform", badge: "Native" },
        { name: "Cross-Platform", category: "Engineering", badge: "Mobile" },
      ],
    },
    {
      category: "Architecture & State",
      skills: [
        { name: "Clean Architecture", category: "Pattern", badge: "Architecture" },
        { name: "Bloc & Cubit", category: "State Management", badge: "Advanced" },
        { name: "MVVM / MVC", category: "Design Pattern", badge: "Pattern" },
      ],
    },
    {
      category: "Backend & Integration",
      skills: [
        { name: "Firebase Suite", category: "Auth, Firestore, Cloud Storage", badge: "Cloud" },
        { name: "RESTful APIs", category: "HTTP, JSON, Networking", badge: "API" },
        { name: "WebSockets", category: "Real-time chat & socket streams", badge: "Realtime" },
        { name: "Payment Gateways", category: "Wallets, In-app purchase", badge: "Payments" },
      ],
    },
    {
      category: "Testing & Reliability",
      skills: [
        { name: "Unit Testing", category: "Logic verification", badge: "Quality" },
        { name: "Widget Testing", category: "UI component tests", badge: "Quality" },
        { name: "Integration Testing", category: "End-to-end flows", badge: "Quality" },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git & GitHub", category: "Version Control", badge: "DevOps" },
        { name: "VS Code", category: "IDE", badge: "Tool" },
        { name: "Android Studio", category: "Native SDK & Profiling", badge: "Tool" },
        { name: "Xcode", category: "iOS Build & Deployment", badge: "Tool" },
      ],
    },
  ] as SkillGroup[],

  achievements: [
    {
      value: "03+",
      label: "Years of Experience",
      detail: "Building production-grade mobile applications with Flutter.",
    },
    {
      value: "04",
      label: "Live Applications",
      detail: "Contributed to 4 production apps published on Google Play Store.",
    },
    {
      value: "1M+",
      label: "Downloads on Balaji Astro Guide",
      detail: "Major milestone reached by contributed flagship astrology platform.",
    },
  ] as Achievement[],

  contact: {
    heading: "HAVE A PROJECT IN MIND?",
    subheading: "Let's build something great together.",
    description:
      "I'm open to discussing Flutter development opportunities, mobile application projects, and professional collaborations.",
    email: "azaruddinkhan465@gmail.com",
    phone: "+91 7877145521",
    linkedinUrl: "https://www.linkedin.com/in/azaruddin-khan-b8653b2a3/",
    footerCopyright: "© 2026 Azaruddin Khan. Designed & Developed by Azaruddin Khan.",
  },
};
