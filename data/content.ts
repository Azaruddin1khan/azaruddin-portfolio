export interface ProjectItem {
  id: string;
  name: string;
  publisher: string;
  downloads: string;
  category?: string;
  description: string;
  playStoreUrl: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    role: string;
    pitch: string;
    email: string;
    linkedinUrl: string;
    resumePath: string;
  };
  hero: {
    greeting: string;
    badge: string;
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
    phoneScreenshot: string | null; // Set to e.g. "/screenshots/balaji.png" once uploaded
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraphs: string[];
    highlights: {
      metric: string;
      label: string;
    }[];
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  contact: {
    title: string;
    subtitle: string;
    emailPrompt: string;
  };
  metadata: {
    siteTitle: string;
    metaDescription: string;
    siteUrl: string;
  };
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: "Azaruddin Khan",
    role: "Flutter Developer",
    pitch: "I build production Flutter apps, including one with 1M+ downloads on Google Play.",
    email: "azaruddinkhan465@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/azaruddin-khan-b8653b2a3/",
    resumePath: "/resume.pdf",
  },
  hero: {
    greeting: "Hello, I'm",
    badge: "Open to opportunities",
    ctaPrimary: {
      text: "View Projects",
      href: "#projects",
    },
    ctaSecondary: {
      text: "Download Resume",
      href: "/resume.pdf",
    },
    // Set to a path in /public/screenshots/ (e.g. "/screenshots/app.png") when available.
    // If null, displays a clean device frame with a neutral gradient.
    phoneScreenshot: null,
  },
  about: {
    title: "About Me",
    subtitle: "3+ years of building production-grade mobile applications with Flutter",
    bioParagraphs: [
      "I am a Flutter Mobile App Developer with 3+ years of professional experience at Appic Softwares LLP (2023–2026), specializing in creating scalable, high-performance mobile applications.",
      "My core expertise centers on Dart and Flutter with Bloc/Cubit state management and Clean Architecture. I have engineered real-time chat and call consultation flows, robust Firebase systems, and low-latency REST and WebSocket API integrations serving millions of active users.",
    ],
    highlights: [
      {
        metric: "3+",
        label: "Years of Experience",
      },
      {
        metric: "1M+",
        label: "Downloads on Play Store",
      },
      {
        metric: "4+",
        label: "Production Apps Published",
      },
    ],
  },
  skills: [
    {
      category: "Mobile",
      skills: ["Flutter", "Dart", "Android", "cross-platform development"],
    },
    {
      category: "Architecture & State",
      skills: ["Clean Architecture", "MVC", "MVVM", "Bloc", "Cubit"],
    },
    {
      category: "Backend & Integration",
      skills: [
        "Firebase",
        "REST APIs",
        "JSON",
        "WebSockets",
        "authentication",
        "cloud storage",
      ],
    },
    {
      category: "Testing",
      skills: ["Unit testing", "widget testing", "integration testing"],
    },
    {
      category: "Tools",
      skills: ["Git/GitHub", "VS Code", "Android Studio", "Xcode"],
    },
  ],
  projects: [
    {
      id: "balaji-astro-guide",
      name: "Balaji Astro Guide",
      publisher: "Balaji Telefilms Limited",
      downloads: "1M+ downloads",
      category: "Astrology & Lifestyle",
      description:
        "Vedic astrology app with free Janam Kundli, Kundli matching, Pooja booking, daily horoscope, live chat and call with astrologers.",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.astrovani.balaji.app",
      highlight: true,
    },
    {
      id: "hello-astrologer",
      name: "Hello Astrologer",
      publisher: "Champs Connect Pvt. Ltd.",
      downloads: "5K+ downloads",
      category: "Consultation & Services",
      description:
        "Online chat/call consultation plus an astrologer directory for offline consultation.",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.helloastro.user",
      highlight: false,
    },
    {
      id: "vedvidhi-live-astrology",
      name: "Vedvidhi: Live Astrology",
      publisher: "Asthavarga Pvt. Ltd.",
      downloads: "5K+ downloads",
      category: "Live Streaming & EdTech",
      description:
        "Live astrologer chat/call, certified astrology courses, live streaming.",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.vedvidhi.user",
      highlight: false,
    },
    {
      id: "constromat",
      name: "Constromat",
      publisher: "Indithrive Infratech Pvt. Ltd.",
      downloads: "100+ downloads",
      category: "B2B & Procurement",
      description:
        "Construction material procurement app connecting customers with suppliers.",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.consto.constomart",
      highlight: false,
    },
  ],
  experience: [
    {
      period: "2023 — 2026",
      role: "Flutter Developer",
      company: "Appic Softwares LLP",
      location: "India",
      description:
        "Engineered production Flutter applications, architected real-time chat and call systems, implemented Bloc/Cubit state management with Clean Architecture, and integrated cloud services, RESTful APIs, and WebSockets across client and commercial mobile apps.",
      technologies: [
        "Flutter",
        "Dart",
        "Bloc",
        "Cubit",
        "Clean Architecture",
        "Firebase",
        "WebSockets",
        "REST APIs",
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    subtitle:
      "Whether you're looking to build a high-performance Flutter mobile application or discuss an engineering opportunity, my inbox is open.",
    emailPrompt: "Say hello directly or connect via LinkedIn.",
  },
  metadata: {
    siteTitle: "Azaruddin Khan | Flutter Mobile App Developer",
    metaDescription:
      "Azaruddin Khan is a Flutter Mobile App Developer with 3+ years of experience building production apps, including Balaji Astro Guide with 1M+ downloads on Google Play.",
    siteUrl: "https://azaruddinkhan.dev",
  },
};
