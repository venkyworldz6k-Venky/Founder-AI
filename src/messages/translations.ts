export type SupportedLanguage = 'en' | 'te' | 'hi' | 'ta' | 'kn' | 'ml' | 'es' | 'fr' | 'de';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
];

export interface TranslationSchema {
  nav: {
    logo: string;
    home: string;
    about: string;
    projects: string;
    skills: string;
    process: string;
    contact: string;
    startProject: string;
  };
  hero: {
    label: string;
    namePrefix: string;
    nameSuffix: string;
    role: string;
    description: string;
    viewPortfolio: string;
    contactMe: string;
    scrollHint: string;
  };
  about: {
    tag: string;
    title: string;
    bio: string;
    stats: {
      projectsDelivered: string;
      ongoingProject: string;
      upcomingProjects: string;
      builtFromScratch: string;
    };
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      dataAnalytics: { title: string; desc: string; tags: string[] };
      ai: { title: string; desc: string; tags: string[] };
      machineLearning: { title: string; desc: string; tags: string[] };
      computerVision: { title: string; desc: string; tags: string[] };
      fullstack: { title: string; desc: string; tags: string[] };
      healthcareAutomation: { title: string; desc: string; tags: string[] };
    };
  };
  projects: {
    tag: string;
    title: string;
    ongoingBadge: string;
    upcomingBadge: string;
    confidentialityNotice: string;
    items: {
      hospitalAdGen: {
        title: string;
        category: string;
        status: string;
        desc: string;
        tags: string[];
      };
      medicalReportAi: {
        title: string;
        category: string;
        status: string;
        desc: string;
        tags: string[];
      };
      smartClinicCrm: {
        title: string;
        category: string;
        status: string;
        desc: string;
        tags: string[];
      };
    };
  };
  process: {
    tag: string;
    title: string;
    steps: {
      research: { num: string; title: string; desc: string };
      analyze: { num: string; title: string; desc: string };
      design: { num: string; title: string; desc: string };
      develop: { num: string; title: string; desc: string };
      launch: { num: string; title: string; desc: string };
    };
  };
  contact: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    directChannels: string;
    directDesc: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMsg: string;
  };
  footer: {
    role: string;
    copyright: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  en: {
    nav: {
      logo: 'KSV.',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      process: 'Process',
      contact: 'Contact',
      startProject: 'Start Project',
    },
    hero: {
      label: "HELLO, I'M",
      namePrefix: 'KEDARI SRI',
      nameSuffix: 'VENKATESH',
      role: 'Data Analyst • AI Engineer • Founder',
      description:
        'I build intelligent AI systems, data-driven applications, healthcare automation, and scalable digital products with modern engineering.',
      viewPortfolio: 'View Portfolio',
      contactMe: 'Contact Me',
      scrollHint: 'Scroll to explore neural galaxy',
    },
    about: {
      tag: '01 // PHILOSOPHY & VISION',
      title: 'ABOUT',
      bio: "I'm KEDARI SRI VENKATESH, a Data Analyst, AI Engineer, and Founder passionate about building intelligent software, data analytics platforms, computer vision solutions, and healthcare AI products.",
      stats: {
        projectsDelivered: 'Projects Delivered',
        ongoingProject: 'Ongoing Project',
        upcomingProjects: 'Upcoming Projects',
        builtFromScratch: 'Built from Scratch',
      },
    },
    skills: {
      tag: '02 // CORE COMPETENCIES',
      title: 'SKILLS & EXPERTISE',
      subtitle: 'Architecting high-performance machine intelligence, automated clinical pipelines, and modern cloud infrastructure.',
      items: {
        dataAnalytics: {
          title: 'Data Analytics',
          desc: 'End-to-end data intelligence, probabilistic modeling, enterprise dashboards, and high-throughput telemetry pipelines.',
          tags: ['SQL', 'Python', 'Pandas', 'Power BI', 'ETL Pipelines'],
        },
        ai: {
          title: 'Artificial Intelligence',
          desc: 'Production generative AI systems, domain-specialized LLM agents, retrieval-augmented generation (RAG), and vector architectures.',
          tags: ['LangChain', 'LlamaIndex', 'RAG', 'Vector DBs', 'Agents'],
        },
        machineLearning: {
          title: 'Machine Learning',
          desc: 'Predictive modeling, deep neural networks, classification, regression, and scalable production inference endpoints.',
          tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Feature Engineering'],
        },
        computerVision: {
          title: 'Computer Vision',
          desc: 'High-speed object detection, multi-modal video understanding, neural segmentation, and visual quality assurance systems.',
          tags: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Video AI'],
        },
        fullstack: {
          title: 'Full Stack Development',
          desc: 'Modern web platforms engineered with Next.js, React 19, TypeScript, scalable microservices, and secure API gateways.',
          tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        },
        healthcareAutomation: {
          title: 'Healthcare AI',
          desc: 'Mission-critical clinical workflows, HIPAA-compliant patient intelligence, automated diagnostics, and hospital SaaS platforms.',
          tags: ['Clinical AI', 'HIPAA Workflows', 'Medical Vision', 'Healthcare SaaS'],
        },
      },
    },
    projects: {
      tag: '03 // PORTFOLIO ARCHITECTURE',
      title: 'SELECTED WORK',
      ongoingBadge: 'ONGOING',
      upcomingBadge: 'UPCOMING',
      confidentialityNotice:
        'Enterprise Non-Disclosure Notice: Third-party client systems remain restricted under commercial agreements. Displaying proprietary SaaS and upcoming internal ventures.',
      items: {
        hospitalAdGen: {
          title: 'Hospital Advertisement Generator',
          category: 'Healthcare AI · Video Automation · Generative AI',
          status: 'ONGOING',
          desc: 'AI-powered multilingual healthcare marketing platform for hospitals and clinics.',
          tags: ['Generative AI', 'Healthcare SaaS', 'Video Synthesis', 'Python', 'Next.js'],
        },
        medicalReportAi: {
          title: 'Medical Report AI',
          category: 'Clinical NLP · Diagnostic Intelligence · LLM Agents',
          status: 'UPCOMING',
          desc: 'LLM-powered medical report understanding and patient summary system.',
          tags: ['Biomedical NLP', 'Document AI', 'RAG Architecture', 'FastAPI'],
        },
        smartClinicCrm: {
          title: 'Smart Clinic CRM',
          category: 'Healthcare SaaS · Cloud Infrastructure · Patient Flow',
          status: 'UPCOMING',
          desc: 'Complete patient, appointment, billing and hospital management platform.',
          tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Real-time WebSockets'],
        },
      },
    },
    process: {
      tag: '04 // METHODOLOGY',
      title: 'HOW WE BUILD',
      steps: {
        research: {
          num: '01',
          title: 'Research',
          desc: 'Deconstructing core domain challenges, clinical requirements, and architectural boundaries.',
        },
        analyze: {
          num: '02',
          title: 'Analyze',
          desc: 'Deep exploratory data profiling, edge-case analysis, and algorithmic feasibility tests.',
        },
        design: {
          num: '03',
          title: 'Design',
          desc: 'Formulating modular system topologies, data contracts, and minimalist luxury interfaces.',
        },
        develop: {
          num: '04',
          title: 'Develop',
          desc: 'Writing production-grade, type-safe code with continuous integration and low-latency benchmarks.',
        },
        launch: {
          num: '05',
          title: 'Launch',
          desc: 'Zero-downtime deployment, telemetry monitoring, and iterative neural optimization.',
        },
      },
    },
    contact: {
      tag: '05 // VENTURE & COLLABORATION',
      titleMain: "LET'S BUILD",
      titleAccent: 'THE FUTURE',
      description: 'Interested in AI engineering, data analytics, healthcare AI, or digital product ventures? Reach out directly.',
      directChannels: 'DIRECT CHANNELS',
      directDesc: 'Accepting select enterprise collaborations, AI consulting partnerships, and venture inquiries.',
      formTitle: 'SEND A MESSAGE',
      nameLabel: 'Your Name',
      namePlaceholder: 'Alex Mercer',
      emailLabel: 'Email Address',
      emailPlaceholder: 'alex@enterprise.com',
      messageLabel: 'Project Brief / Message',
      messagePlaceholder: 'Tell me about your project, timeline, or data & AI engineering inquiry...',
      sendButton: 'Send Message',
      sending: 'Transmitting...',
      successMsg: 'Message received. I will review and respond promptly.',
    },
    footer: {
      role: 'Data Analyst • AI Engineer • Founder',
      copyright: '© 2026 KEDARI SRI VENKATESH. All Rights Reserved.',
    },
  },
  te: {
    nav: {
      logo: 'KSV.',
      home: 'హోమ్',
      about: 'గురించి',
      projects: 'ప్రాజెక్ట్‌లు',
      skills: 'నైపుణ్యాలు',
      process: 'ప్రక్రియ',
      contact: 'సంప్రదించండి',
      startProject: 'ప్రాజెక్ట్ ప్రారంభించండి',
    },
    hero: {
      label: 'నమస్కారం, నేను',
      namePrefix: 'కేదారి శ్రీ',
      nameSuffix: 'వెంకటేష్',
      role: 'డేటా అనలిస్ట్ • ఏఐ ఇంజనీర్ • ఫౌండర్',
      description:
        'నేను నిజ జీవిత వ్యాపార సమస్యలను స్కేలబుల్ ఇంజనీరింగ్ ద్వారా పరిష్కరించే ఇంటెలిజెంట్ ఏఐ సిస్టమ్స్, హెల్త్‌కేర్ ఆటోమేషన్ మరియు డేటా ఆధారిత డిజిటల్ ఉత్పత్తులను రూపొందిస్తాను.',
      viewPortfolio: 'పోర్ట్‌ఫోలియో చూడండి',
      contactMe: 'సంప్రదించండి',
      scrollHint: 'న్యూరల్ గెలాక్సీ అన్వేషించండి',
    },
    about: {
      tag: '01 // తత్వశాస్త్రం & విజన్',
      title: 'గురించి',
      bio: 'నేను కేదారి శ్రీ వెంకటేష్, డేటా అనలిస్ట్, ఏఐ ఇంజనీర్ మరియు ఫౌండర్. ఇంటెలిజెంట్ సాఫ్ట్‌వేర్, హెల్త్‌కేర్ ఏఐ, ఆటోమేషన్ సిస్టమ్స్ మరియు స్కేలబుల్ డిజిటల్ ఉత్పత్తులను నిర్మించడంలో నిమగ్నుడనై ఉన్నాను.',
      stats: {
        projectsDelivered: 'పూర్తయిన ప్రాజెక్ట్‌లు',
        ongoingProject: 'ప్రస్తుత ప్రాజెక్ట్',
        upcomingProjects: 'రాబోయే ప్రాజెక్ట్‌లు',
        builtFromScratch: 'మొదటినుండి నిర్మించినవి',
      },
    },
    skills: {
      tag: '02 // ప్రధాన నైపుణ్యాలు',
      title: 'నైపుణ్యాలు & అనుభవం',
      subtitle: 'అధిక సామర్థ్యంగల మెషిన్ ఇంటెలిజెన్స్, ఆటోమేటెడ్ క్లినికల్ పైప్‌లైన్లు మరియు ఆధునిక క్లౌడ్ మౌలిక సదుపాయాల రూపకల్పన.',
      items: {
        dataAnalytics: {
          title: 'డేటా అనలిటిక్స్',
          desc: 'ఎండ్-టు-ఎండ్ డేటా ఇంటెలిజెన్స్, సంభావ్యత మోడలింగ్, ఎంటర్‌ప్రైజ్ డ్యాష్‌బోర్డులు.',
          tags: ['SQL', 'Python', 'Pandas', 'Power BI', 'ETL Pipelines'],
        },
        ai: {
          title: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్',
          desc: 'ఉత్పాదక ఏఐ సిస్టమ్స్, డొమైన్-నిర్దిష్ట ఎల్‌ఎల్‌ఎమ్ ఏజెంట్లు, ఆర్‌ఎజి ఆర్కిటెక్చర్లు.',
          tags: ['LangChain', 'LlamaIndex', 'RAG', 'Vector DBs', 'Agents'],
        },
        machineLearning: {
          title: 'మెషిన్ లెర్నింగ్',
          desc: 'ప్రిడిక్టివ్ మోడలింగ్, డీప్ న్యూరల్ నెట్‌వర్క్‌లు, వర్గీకరణ మరియు ఉత్పత్తి రన్‌టైమ్‌లు.',
          tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Feature Engineering'],
        },
        computerVision: {
          title: 'కంప్యూటర్ విజన్',
          desc: 'ఆబ్జెక్ట్ డిటెక్షన్, మల్టీ-మోడల్ వీడియో అవగాహన, న్యూరల్ సెగ్మెంటేషన్.',
          tags: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Video AI'],
        },
        fullstack: {
          title: 'ఫుల్ స్టాక్ డెవలప్‌మెంట్',
          desc: 'Next.js, React 19, TypeScript, స్కేలబుల్ మైక్రోసర్వీసులు.',
          tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        },
        healthcareAutomation: {
          title: 'హెల్త్‌కేర్ ఆటోమేషన్',
          desc: 'క్లినికల్ వర్క్‌ఫ్లోలు, HIPAA నిబంధనల పాటింపు, ఆసుపత్రి SaaS ప్లాట్‌ఫారమ్‌లు.',
          tags: ['EHR Systems', 'HIPAA Workflows', 'SaaS Engines', 'Clinical AI'],
        },
      },
    },
    projects: {
      tag: '03 // పోర్ట్‌ఫోలియో నిర్మాణం',
      title: 'ఎంపిక చేసిన ప్రాజెక్ట్‌లు',
      ongoingBadge: 'ప్రస్తుతం జరుగుతోంది',
      upcomingBadge: 'రాబోయేది',
      confidentialityNotice:
        'ఎంటర్‌ప్రైజ్ ఒప్పందాల ప్రకారం క్లయింట్ అమలు రహస్యంగా ఉంచబడింది. స్వంత SaaS మరియు అంతర్గత ప్రాజెక్ట్‌లు ప్రదర్శించబడుతున్నాయి.',
      items: {
        hospitalAdGen: {
          title: 'హాస్పిటల్ ప్రకటనల జనరేటర్',
          category: 'హెల్త్‌కేర్ ఏఐ · వీడియో ఆటోమేషన్ · జనరేటివ్ ఏఐ',
          status: 'ప్రస్తుతం అభివృద్ధిలో ఉంది',
          desc: 'వైద్య కేంద్రాలు మరియు ఆసుపత్రుల కోసం నియంత్రణ ప్రమాణాలతో కూడిన ప్రకటన వీడియోలను రూపొందించే ఏఐ ఇంజిన్.',
          tags: ['Generative AI', 'Healthcare SaaS', 'Video Synthesis', 'Python', 'Next.js'],
        },
        medicalReportAi: {
          title: 'మెడికల్ రిపోర్ట్ ఏఐ',
          category: 'క్లినికల్ ఎన్‌ఎల్‌పి · డయాగ్నస్టిక్ ఇంటెలిజెన్స్',
          status: 'రాబోయేది',
          desc: 'సంక్లిష్టమైన వైద్య పరీక్ష ఫలితాలను విశ్లేషించి స్పష్టమైన నివేదికలుగా మార్చే క్లినికల్ డాక్యుమెంట్ పార్సర్.',
          tags: ['Biomedical NLP', 'Document AI', 'RAG Architecture', 'FastAPI'],
        },
        smartClinicCrm: {
          title: 'స్మార్ట్ క్లినిక్ సిఆర్‌ఎమ్',
          category: 'హెల్త్‌కేర్ SaaS · క్లౌడ్ ఇన్‌ఫ్రాస్ట్రక్చర్',
          status: 'రాబోయేది',
          desc: 'రోగి సమన్వయం, స్మార్ట్ అపాయింట్‌మెంట్‌లు మరియు బిల్లింగ్ ప్రక్రియల కోసం ఆధునిక క్లినిక్ సూట్.',
          tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Real-time WebSockets'],
        },
      },
    },
    process: {
      tag: '04 // పనితీరు పద్ధతి',
      title: 'మేము ఎలా నిర్మిస్తాము',
      steps: {
        research: { num: '01', title: 'పరిశోధన', desc: 'డొమైన్ సవాళ్లు మరియు క్లినికల్ అవసరాల మూలాలను అధ్యయనం చేయడం.' },
        analyze: { num: '02', title: 'విశ్లేషణ', desc: 'లోతైన డేటా ప్రొఫైలింగ్ మరియు అల్గారిథమిక్ సాధ్యత పరీక్షలు.' },
        design: { num: '03', title: 'డిజైన్', desc: 'సిస్టమ్ ఆర్కిటెక్చర్ మరియు మినిమలిస్ట్ లగ్జరీ ఇంటర్‌ఫేస్‌ల రూపకల్పన.' },
        develop: { num: '04', title: 'అభివృద్ధి', desc: 'ఉన్నత స్థాయి నాణ్యతతో దృఢమైన కోడ్ నిర్మాణం.' },
        launch: { num: '05', title: 'ప్రారంభం', desc: 'లైవ్ డిప్లాయ్‌మెంట్, టెలిమెట్రీ పర్యవేక్షణ మరియు నిరంతర ఆప్టిమైజేషన్.' },
      },
    },
    contact: {
      tag: '05 // సంప్రదింపు & భాగస్వామ్యం',
      titleMain: 'కలిసి నిర్మిద్దాం',
      titleAccent: 'భవిష్యత్తును',
      description: 'హాస్పిటల్ SaaS లేదా ఏఐ ఇంజనీరింగ్ సేవల కోసం నేరుగా సంప్రదించండి.',
      directChannels: 'ప్రత్యక్ష మార్గాలు',
      directDesc: 'ఎంటర్‌ప్రైజ్ ఏఐ భాగస్వామ్యాలు మరియు వెంచర్ చర్చలను ఆహ్వానిస్తున్నాము.',
      formTitle: 'సందేశం పంపండి',
      nameLabel: 'మీ పేరు',
      namePlaceholder: 'మీ పేరు నమోదు చేయండి',
      emailLabel: 'ఈమెయిల్ చిరునామా',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'సందేశం',
      messagePlaceholder: 'ప్రాజెక్ట్ వివరాలు లేదా విచారణను ఇక్కడ వ్రాయండి...',
      sendButton: 'సందేశం పంపండి',
      sending: 'పంపుతోంది...',
      successMsg: 'సందేశం చేరింది. త్వరలోనే మీకు సమాధానం ఇస్తాను.',
    },
    footer: {
      role: 'డేటా అనలిస్ట్ • ఏఐ ఇంజనీర్ • ఫౌండర్',
      copyright: '© 2026 కేదారి శ్రీ వెంకటేష్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.',
    },
  },
  hi: {
    nav: {
      logo: 'KSV.',
      home: 'होम',
      about: 'परिचय',
      projects: 'परियोजनाएं',
      skills: 'कौशल',
      process: 'प्रक्रिया',
      contact: 'संपर्क',
      startProject: 'प्रोजेक्ट शुरू करें',
    },
    hero: {
      label: 'नमस्ते, मैं हूँ',
      namePrefix: 'केदारी श्री',
      nameSuffix: 'वेंकटेश',
      role: 'डेटा विश्लेषक • एआई इंजीनियर • संस्थापक',
      description:
        'मैं स्केलेबल इंजीनियरिंग के माध्यम से वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने वाले इंटेलिजेंट एआई सिस्टम, हेल्थकेयर ऑटोमेशन और डेटा-संचालित डिजिटल उत्पाद डिज़ाइन करता हूँ।',
      viewPortfolio: 'पोर्टफोलियो देखें',
      contactMe: 'संपर्क करें',
      scrollHint: 'न्यूरल गैलेक्सी का अन्वेषण करें',
    },
    about: {
      tag: '01 // दृष्टि और दर्शन',
      title: 'परिचय',
      bio: 'मैं केदारी श्री वेंकटेश, एक डेटा विश्लेषक, एआई इंजीनियर और संस्थापक हूँ, जो इंटेलिजेंट सॉफ्टवेयर, हेल्थकेयर एआई, ऑटोमेशन और स्केलेबल डिजिटल उत्पाद बनाने के लिए प्रतिबद्ध है।',
      stats: {
        projectsDelivered: 'पूर्ण परियोजनाएं',
        ongoingProject: 'वर्तमान परियोजना',
        upcomingProjects: 'आगामी परियोजनाएं',
        builtFromScratch: 'शुरुआत से निर्मित',
      },
    },
    skills: {
      tag: '02 // मुख्य क्षमताएं',
      title: 'कौशल एवं विशेषज्ञता',
      subtitle: 'उच्च प्रदर्शन मशीन इंटेलिजेंस, स्वचालित नैदानिक पाइपलाइन और आधुनिक क्लाउड इंफ्रास्ट्रक्चर।',
      items: {
        dataAnalytics: {
          title: 'डेटा एनालिटिक्स',
          desc: 'एंड-टू-एंड डेटा इंटेलिजेंस, प्रेडिक्टिव मॉडलिंग और एंटरप्राइज डैशबोर्ड।',
          tags: ['SQL', 'Python', 'Pandas', 'Power BI', 'ETL Pipelines'],
        },
        ai: {
          title: 'आर्टिफिशियल इंटेलिजेंस',
          desc: 'प्रोडक्शन जेनरेटिव एआई, डोमेन-विशिष्ट एलएलएम एजेंट्स और आरएजी आर्किटेक्चर।',
          tags: ['LangChain', 'LlamaIndex', 'RAG', 'Vector DBs', 'Agents'],
        },
        machineLearning: {
          title: 'मशीन लर्निंग',
          desc: 'प्रेडिक्टिव मॉडलिंग, डीप न्यूरल नेटवर्क और स्केलेबल प्रोडक्शन अनुमान।',
          tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Feature Engineering'],
        },
        computerVision: {
          title: 'कंप्यूटर विज़न',
          desc: 'ऑब्जेक्ट डिटेक्शन, मल्टी-मॉडल वीडियो समझ और न्यूरल सेगमेंटेशन।',
          tags: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Video AI'],
        },
        fullstack: {
          title: 'फुल स्टैक डेवलपमेंट',
          desc: 'Next.js, React 19, TypeScript और सुरक्षित एपीआई गेटवे।',
          tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        },
        healthcareAutomation: {
          title: 'हेल्थकेयर ऑटोमेशन',
          desc: 'नैदानिक वर्कफ़्लो, एचआईपीएए-अनुपालन और अस्पताल सास प्लेटफॉर्म।',
          tags: ['EHR Systems', 'HIPAA Workflows', 'SaaS Engines', 'Clinical AI'],
        },
      },
    },
    projects: {
      tag: '03 // पोर्टफोलियो',
      title: 'चयनित कार्य',
      ongoingBadge: 'प्रगति पर है',
      upcomingBadge: 'आगामी',
      confidentialityNotice: 'कॉन्ट्रैक्ट और एनडीए के तहत क्लाइंट कार्य गोपनीय है। केवल मालिकाना सास और आगामी प्रोजेक्ट प्रदर्शित हैं।',
      items: {
        hospitalAdGen: {
          title: 'हॉस्पिटल विज्ञापन जेनरेटर',
          category: 'हेल्थकेयर एआई · वीडियो ऑटोमेशन · जेनरेटिव एआई',
          status: 'वर्तमान में विकास में है',
          desc: 'अस्पतालों और क्लीनिकों के लिए अनुपालन-सत्यापित विज्ञापन वीडियो बनाने वाला एआई इंजन।',
          tags: ['Generative AI', 'Healthcare SaaS', 'Video Synthesis', 'Python', 'Next.js'],
        },
        medicalReportAi: {
          title: 'मेडिकल रिपोर्ट एआई',
          category: 'क्लीनिकल एनएलपी · डायग्नोस्टिक इंटेलिजेंस',
          status: 'आगामी',
          desc: 'जटिल मेडिकल रिपोर्टों को समझने में आसान और प्रमाणित स्वास्थ्य अंतर्दृष्टि में बदलने वाला एआई पार्सर।',
          tags: ['Biomedical NLP', 'Document AI', 'RAG Architecture', 'FastAPI'],
        },
        smartClinicCrm: {
          title: 'स्मार्ट क्लिनिक सीआरएम',
          category: 'हेल्थकेयर सास · क्लाउड इंफ्रास्ट्रक्चर',
          status: 'आगामी',
          desc: 'मरीज़ रिकॉर्ड, अपॉइंटमेंट और बिलिंग को सहज रूप से प्रबंधित करने वाला आधुनिक क्लिनिक प्लेटफॉर्म।',
          tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Real-time WebSockets'],
        },
      },
    },
    process: {
      tag: '04 // कार्यप्रणाली',
      title: 'हम कैसे निर्माण करते हैं',
      steps: {
        research: { num: '01', title: 'अनुसंधान', desc: 'डोमेन चुनौतियों और तकनीकी सीमाओं का गहरा विश्लेषण।' },
        analyze: { num: '02', title: 'विश्लेषण', desc: 'डेटा प्रोफाइलिंग और एल्गोरिदम व्यवहार्यता परीक्षण।' },
        design: { num: '03', title: 'डिज़ाइन', desc: 'मॉड्यूलर आर्किटेक्चर और सुंदर डिजिटल इंटरफेस।' },
        develop: { num: '04', title: 'विकास', desc: 'उच्च प्रदर्शन और सुरक्षित प्रोडक्शन-ग्रेड कोड लिखना।' },
        launch: { num: '05', title: 'लॉन्च', desc: 'ज़ीरो-डाउनटाइम परिनियोजन और सतत अनुकूलन।' },
      },
    },
    contact: {
      tag: '05 // साझेदारी एवं सहयोग',
      titleMain: 'आइए निर्माण करें',
      titleAccent: 'भविष्य का',
      description: 'हेल्थकेयर सास या एआई इंजीनियरिंग समाधानों के लिए सीधे संपर्क करें।',
      directChannels: 'प्रत्यक्ष संपर्क',
      directDesc: 'एंटरप्राइज एआई साझेदारी और उद्यम चर्चाओं का स्वागत है।',
      formTitle: 'संदेश भेजें',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'अपना नाम दर्ज करें',
      emailLabel: 'ईमेल पता',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'संदेश',
      messagePlaceholder: 'परियोजना विवरण या प्रश्न यहाँ लिखें...',
      sendButton: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      successMsg: 'संदेश प्राप्त हुआ। मैं शीघ्र ही उत्तर दूँगा।',
    },
    footer: {
      role: 'डेटा विश्लेषक • एआई इंजीनियर • संस्थापक',
      copyright: '© 2026 केदारी श्री वेंकटेश. सर्वाधिकार सुरक्षित।',
    },
  },
  ta: {
    nav: {
      logo: 'KSV.',
      home: 'முகப்பு',
      about: 'பற்றி',
      projects: 'திட்டங்கள்',
      skills: 'திறன்கள்',
      process: 'செயல்முறை',
      contact: 'தொடர்பு',
      startProject: 'திட்டத்தை தொடங்குங்கள்',
    },
    hero: {
      label: 'வணக்கம், நான்',
      namePrefix: 'கேதாரி ஸ்ரீ',
      nameSuffix: 'வெங்கடேஷ்',
      role: 'தரவு ஆய்வாளர் • AI பொறியாளர் • நிறுவனர்',
      description: 'நம்பகமான பொறியியல் மூலம் நிஜ உலக வணிக சிக்கல்களைத் தீர்க்கும் அதிநவீன AI அமைப்புகள் மற்றும் மருத்துவ ஆட்டோமேஷன் தயாரிப்புகளை வடிவமைக்கிறேன்.',
      viewPortfolio: 'போர்ட்ஃபோலியோ பார்க்க',
      contactMe: 'தொடர்பு கொள்ள',
      scrollHint: 'நியூரல் கேலக்ஸியை ஆராயுங்கள்',
    },
    about: {
      tag: '01 // தொலைநோக்கு பார்வை',
      title: 'பற்றி',
      bio: 'நான் கேதாரி ஸ்ரீ வெங்கடேஷ், தரவு ஆய்வாளர், AI பொறியாளர் மற்றும் நிறுவனர். மருத்துவ AI மற்றும் ஆட்டோமேஷன் மென்பொருட்களை உருவாக்குவதில் ஆர்வம் கொண்டவன்.',
      stats: {
        projectsDelivered: 'வழங்கப்பட்ட திட்டங்கள்',
        ongoingProject: 'நடப்பு திட்டம்',
        upcomingProjects: 'வரவிருக்கும் திட்டங்கள்',
        builtFromScratch: 'முற்றிலும் புதிதாக உருவாக்கப்பட்டது',
      },
    },
    skills: {
      tag: '02 // முக்கிய திறன்கள்',
      title: 'திறன்கள் & நிபுணத்துவம்',
      subtitle: 'அதிநவீன மெஷின் நுண்ணறிவு மற்றும் கிளவுட் கட்டமைப்புகள்.',
      items: {
        dataAnalytics: { title: 'தரவு பகுப்பாய்வு', desc: 'முழுமையான தரவு நுண்ணறிவு மற்றும் டாஷ்போர்டுகள்.', tags: ['SQL', 'Python', 'Pandas', 'Power BI'] },
        ai: { title: 'செயற்கை நுண்ணறிவு', desc: 'ஜெனரேட்டிவ் AI மற்றும் LLM ஏஜெண்டுகள்.', tags: ['LangChain', 'RAG', 'Vector DBs'] },
        machineLearning: { title: 'மெஷின் லேர்னிங்', desc: 'முன்கணிப்பு மாடலிங் மற்றும் நியூரல் நெட்வொர்க்குகள்.', tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn'] },
        computerVision: { title: 'கம்ப்யூட்டர் விஷன்', desc: 'பொருள் கண்டறிதல் மற்றும் வீடியோ பகுப்பாய்வு.', tags: ['OpenCV', 'YOLOv8', 'MediaPipe'] },
        fullstack: { title: 'ஃபுல் ஸ்டாக் டெவலப்மென்ட்', desc: 'Next.js 15, React 19, TypeScript.', tags: ['Next.js', 'React', 'TypeScript'] },
        healthcareAutomation: { title: 'மருத்துவ ஆட்டோமேஷன்', desc: 'மருத்துவ பணிப்பாய்வு மற்றும் மருத்துவமனை SaaS.', tags: ['EHR', 'HIPAA', 'SaaS Engines'] },
      },
    },
    projects: {
      tag: '03 // தேர்ந்தெடுக்கப்பட்ட படைப்புகள்',
      title: 'தேர்ந்தெடுக்கப்பட்ட பணிகள்',
      ongoingBadge: 'நடைபெறுகிறது',
      upcomingBadge: 'வரவிருக்கிறது',
      confidentialityNotice: 'வாடிக்கையாளர் ஒப்பந்தங்களின்படி பணிகள் ரகசியமாக வைக்கப்பட்டுள்ளன. சொந்த தயாரிப்புகள் மட்டுமே காட்சிப்படுத்தப்பட்டுள்ளன.',
      items: {
        hospitalAdGen: { title: 'மருத்துவமனை விளம்பர ஜெனரேட்டர்', category: 'ஹெல்த்கேர் AI · வீடியோ ஆட்டோமேஷன்', status: 'உருவாக்கத்தில் உள்ளது', desc: 'மருத்துவமனைகளுக்கான தானியங்கி விளம்பர வீடியோ உருவாக்கும் AI தளம்.', tags: ['AI', 'Healthcare', 'Video'] },
        medicalReportAi: { title: 'மெடிக்கல் ரிப்போர்ட் AI', category: 'மருத்துவ NLP · நோயறிதல் நுண்ணறிவு', status: 'வரவிருக்கிறது', desc: 'மருத்துவ அறிக்கைகளை பகுப்பாய்வு செய்து எளிமையான சுருக்கமாக மாற்றும் தளம்.', tags: ['NLP', 'Document AI', 'FastAPI'] },
        smartClinicCrm: { title: 'ஸ்மார்ட் கிளினிக் CRM', category: 'ஹெல்த்கேர் SaaS · கிளவுட் கட்டமைப்பு', status: 'வரவிருக்கிறது', desc: 'நோயாளி பதிவுகள் மற்றும் முன்பதிவுகளை எளிதாக்கும் நவீன தளம்.', tags: ['React 19', 'PostgreSQL', 'WebSockets'] },
      },
    },
    process: {
      tag: '04 // கட்டமைப்பு முறை',
      title: 'எவ்வாறு உருவாக்குகிறோம்',
      steps: {
        research: { num: '01', title: 'ஆராய்ச்சி', desc: 'சவால்கள் மற்றும் தேவைகளை முழுமையாக ஆய்வு செய்தல்.' },
        analyze: { num: '02', title: 'பகுப்பாய்வு', desc: 'தரவு சரிபார்ப்பு மற்றும் செயல்முறை சோதனைகள்.' },
        design: { num: '03', title: 'வடிவமைப்பு', desc: 'நவீன கட்டமைப்பு மற்றும் கவர்ச்சிகரமான இடைமுகம்.' },
        develop: { num: '04', title: 'உருவாக்கம்', desc: 'உயர்தர மற்றும் பாதுகாப்பான நிரலாக்கம்.' },
        launch: { num: '05', title: 'வெளியீடு', desc: 'வெற்றிகரமான வெளியீடு மற்றும் கண்காணிப்பு.' },
      },
    },
    contact: {
      tag: '05 // ஒத்துழைப்பு',
      titleMain: 'இணைந்து உருவாக்குவோம்',
      titleAccent: 'எதிர்காலத்தை',
      description: 'மருத்துவ SaaS அல்லது AI பொறியியல் சேவைகளுக்கு என்னை தொடர்பு கொள்ளவும்.',
      directChannels: 'நேரடி தொடர்புகள்',
      directDesc: 'தொழில்நுட்ப ஆலோசனைகள் மற்றும் கூட்டாண்மைகளுக்கு வரவேற்கிறேன்.',
      formTitle: 'செய்தி அனுப்பவும்',
      nameLabel: 'உங்கள் பெயர்',
      namePlaceholder: 'பெயர் உள்ளிடவும்',
      emailLabel: 'மின்னஞ்சல்',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'செய்தி',
      messagePlaceholder: 'விவரங்களை இங்கே எழுதவும்...',
      sendButton: 'செய்தி அனுப்பு',
      sending: 'அனுப்பப்படுகிறது...',
      successMsg: 'செய்தி கிடைத்தது. விரைவில் பதிலளிக்கிறேன்.',
    },
    footer: {
      role: 'தரவு ஆய்வாளர் • AI பொறியாளர் • நிறுவனர்',
      copyright: '© 2026 கேதாரி ஸ்ரீ வெங்கடேஷ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
  kn: {
    nav: {
      logo: 'KSV.',
      home: 'ಮುಖಪುಟ',
      about: 'ಕುರಿತು',
      projects: 'ಯೋಜನೆಗಳು',
      skills: 'ಕೌಶಲ್ಯಗಳು',
      process: 'ಪ್ರಕ್ರಿಯೆ',
      contact: 'ಸಂಪರ್ಕ',
      startProject: 'ಯೋಜನೆ ಪ್ರಾರಂಭಿಸಿ',
    },
    hero: {
      label: 'ನಮಸ್ಕಾರ, ನಾನು',
      namePrefix: 'ಕೇದಾರಿ ಶ್ರೀ',
      nameSuffix: 'ವೆಂಕಟೇಶ್',
      role: 'ಡೇಟಾ ವಿಶ್ಲೇಷಕ • AI ಎಂಜಿನಿಯರ್ • ಸಂಸ್ಥಾಪಕ',
      description: 'ನಾನು ನೈಜ ಜಗತ್ತಿನ ವ್ಯಾಪಾರ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸುವ ಬುದ್ಧಿವಂತ AI ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಹೆಲ್ತ್‌ಕೇರ್ ಆಟೊಮೇಷನ್ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇನೆ.',
      viewPortfolio: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ನೋಡಿ',
      contactMe: 'ಸಂಪರ್ಕಿಸಿ',
      scrollHint: 'ನ್ಯೂರಲ್ ಗ್ಯಾಲಕ್ಸಿ ಅನ್ವೇಷಿಸಿ',
    },
    about: {
      tag: '01 // ದೃಷ್ಟಿಕೋನ',
      title: 'ಕುರಿತು',
      bio: 'ನಾನು ಕೇದಾರಿ ಶ್ರೀ ವೆಂಕಟೇಶ್, ಡೇಟಾ ವಿಶ್ಲೇಷಕ, AI ಎಂಜಿನಿಯರ್ ಮತ್ತು ಸಂಸ್ಥಾಪಕ. ಆರೋಗ್ಯ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಆಟೊಮೇಷನ್ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿ ನಿರತನಾಗಿದ್ದೇನೆ.',
      stats: {
        projectsDelivered: 'ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು',
        ongoingProject: 'ಪ್ರಸ್ತುತ ಯೋಜನೆ',
        upcomingProjects: 'ಮುಂಬರುವ ಯೋಜನೆಗಳು',
        builtFromScratch: 'ಆರಂಭದಿಂದ ನಿರ್ಮಿಸಿದವು',
      },
    },
    skills: {
      tag: '02 // ಮುಖ್ಯ ಸಾಮರ್ಥ್ಯಗಳು',
      title: 'ಕೌಶಲ್ಯಗಳು & ಪರಿಣತಿ',
      subtitle: 'ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತೆಯ ಯಂತ್ರ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಕ್ಲೌಡ್ ತಂತ್ರಜ್ಞಾನಗಳು.',
      items: {
        dataAnalytics: { title: 'ಡೇಟಾ ಅನಾಲಿಟಿಕ್ಸ್', desc: 'ಎಂಡ್-ಟು-ಎಂಡ್ ಡೇಟಾ ಇಂಟೆಲಿಜೆನ್ಸ್ ಮತ್ತು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು.', tags: ['SQL', 'Python', 'Pandas', 'Power BI'] },
        ai: { title: 'ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ', desc: 'ಉತ್ಪಾದನಾ AI ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು LLM ಏಜೆಂಟ್‌ಗಳು.', tags: ['LangChain', 'RAG', 'Vector DBs'] },
        machineLearning: { title: 'ಮೆಷಿನ್ ಲರ್ನಿಂಗ್', desc: 'ಮುನ್ಸೂಚಕ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಆಳವಾದ ನ್ಯೂರಲ್ ನೆಟ್‌ವರ್ಕ್‌ಗಳು.', tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn'] },
        computerVision: { title: 'ಕಂಪ್ಯೂಟರ್ ವಿಷನ್', desc: 'ವಸ್ತು ಪತ್ತೆ ಮತ್ತು ವೀಡಿಯೊ ವಿಶ್ಲೇಷಣೆ.', tags: ['OpenCV', 'YOLOv8', 'MediaPipe'] },
        fullstack: { title: 'ಫುಲ್ ಸ್ಟಾಕ್ ಡೆವಲಪ್‌ಮೆಂಟ್', desc: 'Next.js 15, React 19, TypeScript.', tags: ['Next.js', 'React', 'TypeScript'] },
        healthcareAutomation: { title: 'ಆರೋಗ್ಯ ಆಟೊಮೇಷನ್', desc: 'ವೈದ್ಯಕೀಯ ಕಾರ್ಯಪ್ರವಾಹ ಮತ್ತು ಆಸ್ಪತ್ರೆ SaaS.', tags: ['EHR', 'HIPAA', 'SaaS Engines'] },
      },
    },
    projects: {
      tag: '03 // ಆಯ್ದ ಕೆಲಸಗಳು',
      title: 'ಆಯ್ದ ಯೋಜನೆಗಳು',
      ongoingBadge: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ',
      upcomingBadge: 'ಮುಂಬರುವ',
      confidentialityNotice: 'ಗ್ರಾಹಕರ ಒಪ್ಪಂದಗಳ ಅನ್ವಯ ಗೌಪ್ಯತೆ ಕಾಯ್ದುಕೊಳ್ಳಲಾಗಿದೆ. ಸ್ವಂತ ಯೋಜನೆಗಳನ್ನು ಮಾತ್ರ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ.',
      items: {
        hospitalAdGen: { title: 'ಆಸ್ಪತ್ರೆ ಜಾಹೀರಾತು ಜನರೇಟರ್', category: 'ಹೆಲ್ತ್‌ಕೇರ್ AI · ವೀಡಿಯೊ ಆಟೊಮೇಷನ್', status: 'ಅಭಿವೃದ್ಧಿಯಲ್ಲಿದೆ', desc: 'ಆಸ್ಪತ್ರೆಗಳಿಗಾಗಿ ಸ್ವಯಂಚಾಲಿತ ವೀಡಿಯೊ ಜಾಹೀರಾತುಗಳನ್ನು ರಚಿಸುವ AI ಎಂಜಿನ್.', tags: ['AI', 'Healthcare', 'Video'] },
        medicalReportAi: { title: 'ಮೆಡಿಕಲ್ ರಿಪೋರ್ಟ್ AI', category: 'ಕ್ಲಿನಿಕಲ್ NLP · ರೋಗನಿರ್ಣಯ ಬುದ್ಧಿಮತ್ತೆ', status: 'ಮುಂಬರುವ', desc: 'ವೈದ್ಯಕೀಯ ವರದಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ನಿಖರ ಸಾರಾಂಶ ನೀಡುವ ವ್ಯವಸ್ಥೆ.', tags: ['NLP', 'Document AI', 'FastAPI'] },
        smartClinicCrm: { title: 'ಸ್ಮಾರ್ಟ್ ಕ್ಲಿನಿಕ್ CRM', category: 'ಹೆಲ್ತ್‌ಕೇರ್ SaaS · ಕ್ಲೌಡ್ ಇನ್‌ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್', status: 'ಮುಂಬರುವ', desc: 'ರೋಗಿಗಳ ನಿರ್ವಹಣೆ ಮತ್ತು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸರಳಗೊಳಿಸುವ ವೇದಿಕೆ.', tags: ['React 19', 'PostgreSQL', 'WebSockets'] },
      },
    },
    process: {
      tag: '04 // ಕಾರ್ಯವಿಧಾನ',
      title: 'ನಾವು ಹೇಗೆ ನಿರ್ಮಿಸುತ್ತೇವೆ',
      steps: {
        research: { num: '01', title: 'ಸಂಶೋಧನೆ', desc: 'ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಸವಾಲುಗಳ ಆಳವಾದ ಅಧ್ಯಯನ.' },
        analyze: { num: '02', title: 'ವಿಶ್ಲೇಷಣೆ', desc: 'ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪರಿಹಾರಗಳ ಪರೀಕ್ಷೆ.' },
        design: { num: '03', title: 'ವಿನ್ಯಾಸ', desc: 'ಆರ್ಕಿಟೆಕ್ಚರ್ ಮತ್ತು ಆಧುನಿಕ ಇಂಟರ್ಫೇಸ್ ವಿನ್ಯಾಸ.' },
        develop: { num: '04', title: 'ಅಭಿವೃದ್ಧಿ', desc: 'ದೃಢ ಮತ್ತು ಸುರಕ್ಷಿತ ಕೋಡಿಂಗ್.' },
        launch: { num: '05', title: 'ಬಿಡುಗಡೆ', desc: 'ಯಶಸ್ವಿ ನಿಯೋಜನೆ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ.' },
      },
    },
    contact: {
      tag: '05 // ಸಹಯೋಗ',
      titleMain: 'ಒಟ್ಟಾಗಿ ನಿರ್ಮಿಸೋಣ',
      titleAccent: 'ಭವಿಷ್ಯವನ್ನು',
      description: 'ಹೆಲ್ತ್‌ಕೇರ್ SaaS ಅಥವಾ AI ಎಂಜಿನಿಯರಿಂಗ್ ಸಲಹೆಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.',
      directChannels: 'ನೇರ ಸಂಪರ್ಕಗಳು',
      directDesc: 'ಉದ್ಯಮ ಸಹಯೋಗಗಳು ಮತ್ತು ಪಾಲುದಾರಿಕೆಗೆ ಸ್ವಾಗತ.',
      formTitle: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      nameLabel: 'ನಿಮ್ಮ ಹೆಸರು',
      namePlaceholder: 'ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      emailLabel: 'ಇಮೇಲ್ ವಿಳಾಸ',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'ಸಂದೇಶ',
      messagePlaceholder: 'ಯೋಜನೆಯ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
      sendButton: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sending: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      successMsg: 'ಸಂದೇಶ ತಲುಪಿದೆ. ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇನೆ.',
    },
    footer: {
      role: 'ಡೇಟಾ ವಿಶ್ಲೇಷಕ • AI ಎಂಜಿನಿಯರ್ • ಸಂಸ್ಥಾಪಕ',
      copyright: '© 2026 ಕೇದಾರಿ ಶ್ರೀ ವೆಂಕಟೇಶ್. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    },
  },
  ml: {
    nav: {
      logo: 'KSV.',
      home: 'ഹോം',
      about: 'കുറിച്ച്',
      projects: 'പദ്ധതികൾ',
      skills: 'കഴിവുകൾ',
      process: 'പ്രക്രിയ',
      contact: 'ബന്ധപ്പെടുക',
      startProject: 'പദ്ധതി തുടങ്ങുക',
    },
    hero: {
      label: 'നമസ്കാരം, ഞാൻ',
      namePrefix: 'കേദാരി ശ്രീ',
      nameSuffix: 'വെങ്കിടേഷ്',
      role: 'ഡാറ്റ അനലിസ്റ്റ് • AI എഞ്ചിനീയർ • സ്ഥാപകൻ',
      description: 'യഥാർത്ഥ ബിസിനസ്സ് വെല്ലുവിളികൾ പരിഹരിക്കുന്ന ഇന്റലിജന്റ് AI സംവിധാനങ്ങളും ഹെൽത്ത്‌കെയർ ഓട്ടോമേഷനും ഞാൻ നിർമ്മിക്കുന്നു.',
      viewPortfolio: 'പോർട്ട്ഫോളിയോ കാണുക',
      contactMe: 'ബന്ധപ്പെടുക',
      scrollHint: 'ന്യൂറൽ ഗാലക്സി കണ്ടെത്തുക',
    },
    about: {
      tag: '01 // കാഴ്ചപ്പാട്',
      title: 'കുറിച്ച്',
      bio: 'ഞാൻ കേദാരി ശ്രീ വെങ്കിടേഷ്, ഡാറ്റ അനലിസ്റ്റ്, AI എഞ്ചിനീയർ, സംരംഭകൻ. മികച്ച സോഫ്റ്റ്‌വെയറുകളും ഹെൽത്ത്‌കെയർ AI-യും നിർമ്മിക്കുന്നതിൽ പ്രതിജ്ഞാബദ്ധൻ.',
      stats: {
        projectsDelivered: 'പൂർത്തിയാക്കിയ പദ്ധതികൾ',
        ongoingProject: 'നടപ്പിലുള്ള പദ്ധതി',
        upcomingProjects: 'വരാനിരിക്കുന്ന പദ്ധതികൾ',
        builtFromScratch: 'ആദ്യം മുതൽ നിർമ്മിച്ചത്',
      },
    },
    skills: {
      tag: '02 // പ്രധാന കഴിവുകൾ',
      title: 'നൈപുണ്യങ്ങൾ & വൈദഗ്ദ്ധ്യം',
      subtitle: 'ഉയർന്ന പ്രകടനക്ഷമതയുള്ള മെഷീൻ ഇന്റലിജൻസും ക്ലൗഡ് ഇൻഫ്രാസ്ട്രക്ചറും.',
      items: {
        dataAnalytics: { title: 'ഡാറ്റ അനലിറ്റിക്സ്', desc: 'സമഗ്രമായ ഡാറ്റ ഇന്റലിജൻസും ഡാഷ്‌ബോർഡുകളും.', tags: ['SQL', 'Python', 'Pandas', 'Power BI'] },
        ai: { title: 'നിർമ്മിത ബുദ്ധി', desc: 'ജനറേറ്റീവ് AI സംവിധാനങ്ങളും LLM ഏജന്റുകളും.', tags: ['LangChain', 'RAG', 'Vector DBs'] },
        machineLearning: { title: 'മെഷീൻ ലേണിംഗ്', desc: 'പ്രെഡിക്റ്റീവ് മോഡലിംഗും ആഴത്തിലുള്ള ന്യൂറൽ നെറ്റ്‌വർക്കുകളും.', tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn'] },
        computerVision: { title: 'കമ്പ്യൂട്ടർ വിഷൻ', desc: 'ഒബ്‌ജക്റ്റ് ഡിറ്റക്ഷനും വീഡിയോ അപഗ്രഥനവും.', tags: ['OpenCV', 'YOLOv8', 'MediaPipe'] },
        fullstack: { title: 'ഫുൾ സ്റ്റാക്ക് ഡെവലപ്‌മെന്റ്', desc: 'Next.js 15, React 19, TypeScript.', tags: ['Next.js', 'React', 'TypeScript'] },
        healthcareAutomation: { title: 'ഹെൽത്ത്‌കെയർ ഓട്ടോമേഷൻ', desc: 'ക്ലിനിക്കൽ വർക്ക്‌ഫ്ലോകളും ആശുപത്രി SaaS ഉം.', tags: ['EHR', 'HIPAA', 'SaaS Engines'] },
      },
    },
    projects: {
      tag: '03 // തിരഞ്ഞെടുത്ത പ്രവൃത്തികൾ',
      title: 'പ്രധാന പദ്ധതികൾ',
      ongoingBadge: 'പുരോഗമിക്കുന്നു',
      upcomingBadge: 'വരാനിരിക്കുന്നത്',
      confidentialityNotice: 'കരാറുകൾ പ്രകാരം ക്ലയന്റ് വിവരങ്ങൾ രഹസ്യമാണ്. സ്വന്തം പ്രോജക്റ്റുകൾ മാത്രം പ്രദർശിപ്പിച്ചിരിക്കുന്നു.',
      items: {
        hospitalAdGen: { title: 'ഹോസ്പിറ്റൽ അഡ്വർടൈസ്‌മെന്റ് ജനറേറ്റർ', category: 'ഹെൽത്ത്‌കെയർ AI · വീഡിയോ ഓട്ടോമേഷൻ', status: 'വികസനത്തിൽ', desc: 'ആശുപത്രികൾക്കായി ഓട്ടോമേറ്റഡ് പരസ്യ വീഡിയോകൾ സൃഷ്ടിക്കുന്ന AI എഞ്ചിൻ.', tags: ['AI', 'Healthcare', 'Video'] },
        medicalReportAi: { title: 'മെഡിക്കൽ റിപ്പോർട്ട് AI', category: 'ക്ലിനിക്കൽ NLP · ഡയഗ്നോസ്റ്റിക് ഇന്റലിജൻസ്', status: 'വരാനിരിക്കുന്നത്', desc: 'മെഡിക്കൽ റിപ്പോർട്ടുകൾ വിശകലനം ചെയ്തു എളുപ്പത്തിൽ മനസ്സിലാക്കാൻ സഹായിക്കുന്ന സിസ്റ്റം.', tags: ['NLP', 'Document AI', 'FastAPI'] },
        smartClinicCrm: { title: 'സ്മാർട്ട് ക്ലിനിക്ക് CRM', category: 'ഹെൽത്ത്‌കെയർ SaaS · ക്ലൗഡ് ഇൻഫ്രാസ്ട്രക്ചർ', status: 'വരാനിരിക്കുന്നത്', desc: 'രോഗികളുടെ രേഖകളും അപ്പോയിന്റ്മെന്റുകളും കാര്യക്ഷമമാക്കുന്ന ആധുനിക പ്ലാറ്റ്‌ഫോം.', tags: ['React 19', 'PostgreSQL', 'WebSockets'] },
      },
    },
    process: {
      tag: '04 // പ്രവർത്തനരീതി',
      title: 'ഞങ്ങൾ എങ്ങനെ നിർമ്മിക്കുന്നു',
      steps: {
        research: { num: '01', title: 'ഗവേഷണം', desc: 'വെല്ലുവിളികളും ആവശ്യകതകളും ആഴത്തിൽ പഠിക്കുന്നു.' },
        analyze: { num: '02', title: 'വിശകലനം', desc: 'ഡാറ്റ പരിശോധനയും സാങ്കേതിക സാധ്യതാ പഠനവും.' },
        design: { num: '03', title: 'രൂപകൽപ്പന', desc: 'ആർക്കിടെക്ചറും ആകർഷകമായ ഇന്റർഫേസും.' },
        develop: { num: '04', title: 'വികസനം', desc: 'സുരക്ഷിതവും നിലവാരമുള്ളതുമായ കോഡിംഗ്.' },
        launch: { num: '05', title: 'സമാരംഭം', desc: 'തത്സമയ ലോഞ്ചും തുടർച്ചയായ നിരീക്ഷണവും.' },
      },
    },
    contact: {
      tag: '05 // സഹകരണം',
      titleMain: 'നമുക്ക് ഒരുമിച്ച്',
      titleAccent: 'ഭാവി നിർമ്മിക്കാം',
      description: 'ഹെൽത്ത്‌കെയർ SaaS അല്ലെങ്കിൽ AI എൻജിനീയറിങ് ചർച്ചകൾക്കായി ബന്ധപ്പെടുക.',
      directChannels: 'നേരിട്ടുള്ള വഴികൾ',
      directDesc: 'പുതിയ പങ്കാളിത്തങ്ങൾക്കായി സ്വാഗതം ചെയ്യുന്നു.',
      formTitle: 'സന്ദേശം അയക്കുക',
      nameLabel: 'നിങ്ങളുടെ പേര്',
      namePlaceholder: 'പേര് നൽകുക',
      emailLabel: 'ഇമെയിൽ വിലാസം',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'സന്ദേശം',
      messagePlaceholder: 'വിവരങ്ങൾ ഇവിടെ കുറിക്കുക...',
      sendButton: 'സന്ദേശം അയക്കുക',
      sending: 'അയക്കുന്നു...',
      successMsg: 'സന്ദേശം ലഭിച്ചു. ഉടൻ മറുപടി നൽകുന്നതാണ്.',
    },
    footer: {
      role: 'ഡാറ്റ അനലിസ്റ്റ് • AI എഞ്ചിനീയർ • സ്ഥാപകൻ',
      copyright: '© 2026 കേദാരി ശ്രീ വെങ്കിടേഷ്. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    },
  },
  es: {
    nav: {
      logo: 'KSV.',
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
      skills: 'Habilidades',
      process: 'Proceso',
      contact: 'Contacto',
      startProject: 'Iniciar Proyecto',
    },
    hero: {
      label: 'HOLA, SOY',
      namePrefix: 'KEDARI SRI',
      nameSuffix: 'VENKATESH',
      role: 'Analista de Datos • Ingeniero de IA • Fundador',
      description:
        'Diseño sistemas inteligentes de IA, automatización sanitaria y productos digitales basados en datos que resuelven problemas empresariales reales mediante ingeniería escalable.',
      viewPortfolio: 'Ver Portafolio',
      contactMe: 'Contáctame',
      scrollHint: 'Desplázate para explorar la galaxia neuronal',
    },
    about: {
      tag: '01 // FILOSOFÍA Y VISIÓN',
      title: 'ACERCA DE',
      bio: 'Soy KEDARI SRI VENKATESH, Analista de Datos, Ingeniero de IA y Fundador apasionado por crear software inteligente, IA sanitaria, sistemas de automatización y productos digitales escalables.',
      stats: {
        projectsDelivered: 'Proyectos Entregados',
        ongoingProject: 'Proyecto en Curso',
        upcomingProjects: 'Próximos Proyectos',
        builtFromScratch: 'Construido desde Cero',
      },
    },
    skills: {
      tag: '02 // COMPETENCIAS CLAVE',
      title: 'HABILIDADES Y EXPERIENCIA',
      subtitle: 'Arquitectura de inteligencia artificial de alto rendimiento, flujos clínicos automatizados e infraestructura en la nube.',
      items: {
        dataAnalytics: {
          title: 'Análisis de Datos',
          desc: 'Inteligencia de datos integral, modelado predictivo y paneles empresariales de alto rendimiento.',
          tags: ['SQL', 'Python', 'Pandas', 'Power BI', 'Pipelines ETL'],
        },
        ai: {
          title: 'Inteligencia Artificial',
          desc: 'Sistemas de IA generativa para producción, agentes LLM especializados y arquitecturas RAG.',
          tags: ['LangChain', 'LlamaIndex', 'RAG', 'Vector DBs', 'Agents'],
        },
        machineLearning: {
          title: 'Machine Learning',
          desc: 'Modelado predictivo, redes neuronales profundas y puntos de inferencia en producción.',
          tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Feature Engineering'],
        },
        computerVision: {
          title: 'Visión por Computadora',
          desc: 'Detección de objetos de alta velocidad, comprensión de video multimodal y segmentación neuronal.',
          tags: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Video AI'],
        },
        fullstack: {
          title: 'Desarrollo Full Stack',
          desc: 'Plataformas web modernas con Next.js 15, React 19, TypeScript y microservicios escalables.',
          tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        },
        healthcareAutomation: {
          title: 'Automatización Sanitaria',
          desc: 'Flujos clínicos de misión crítica, cumplimiento de HIPAA y plataformas SaaS hospitalarias.',
          tags: ['EHR Systems', 'HIPAA Workflows', 'SaaS Engines', 'Clinical AI'],
        },
      },
    },
    projects: {
      tag: '03 // ARQUITECTURA DEL PORTAFOLIO',
      title: 'TRABAJOS SELECCIONADOS',
      ongoingBadge: 'EN CURSO',
      upcomingBadge: 'PRÓXIMO',
      confidentialityNotice:
        'Aviso de Confidencialidad: Los proyectos de clientes se mantienen bajo acuerdos comerciales estrictos. Mostrando plataformas SaaS propietarias y proyectos activos.',
      items: {
        hospitalAdGen: {
          title: 'Generador de Publicidad Hospitalaria',
          category: 'IA Sanitaria · Automatización de Video · IA Generativa',
          status: 'Actualmente en Desarrollo',
          desc: 'Motor de generación de video con IA para hospitales y clínicas que produce anuncios y comunicaciones médicas verificadas.',
          tags: ['Generative AI', 'Healthcare SaaS', 'Video Synthesis', 'Python', 'Next.js'],
        },
        medicalReportAi: {
          title: 'IA para Informes Médicos',
          category: 'NLP Clínico · Inteligencia Diagnóstica · Agentes LLM',
          status: 'Próximo',
          desc: 'Analizador inteligente de documentos clínicos que sintetiza hallazgos de radiología y laboratorio en resúmenes médicos accionables.',
          tags: ['Biomedical NLP', 'Document AI', 'RAG Architecture', 'FastAPI'],
        },
        smartClinicCrm: {
          title: 'CRM para Clínicas Inteligentes',
          category: 'SaaS Sanitario · Infraestructura en la Nube',
          status: 'Próximo',
          desc: 'Suite de gestión clínica integral que une admisión de pacientes, agenda inteligente y flujos de facturación.',
          tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Real-time WebSockets'],
        },
      },
    },
    process: {
      tag: '04 // METODOLOGÍA',
      title: 'CÓMO CONSTRUIMOS',
      steps: {
        research: { num: '01', title: 'Investigación', desc: 'Análisis exhaustivo de desafíos del dominio y requisitos clínicos.' },
        analyze: { num: '02', title: 'Análisis', desc: 'Perfilado profundo de datos y pruebas de viabilidad algorítmica.' },
        design: { num: '03', title: 'Diseño', desc: 'Topologías de sistemas modulares e interfaces editoriales de lujo.' },
        develop: { num: '04', title: 'Desarrollo', desc: 'Código con tipado estricto, alto rendimiento y pruebas rigurosas.' },
        launch: { num: '05', title: 'Lanzamiento', desc: 'Despliegue continuo sin tiempo de inactividad y optimización neuronal.' },
      },
    },
    contact: {
      tag: '05 // VENTURAS Y COLABORACIÓN',
      titleMain: 'CONSTRUYAMOS',
      titleAccent: 'EL FUTURO',
      description: '¿Interesado en nuestra plataforma SaaS hospitalaria o servicios de ingeniería de IA? Hablemos directamente.',
      directChannels: 'CANALES DIRECTOS',
      directDesc: 'Abierto a colaboraciones empresariales de IA y asociaciones piloto de SaaS médico.',
      formTitle: 'ENVIAR UN MENSAJE',
      nameLabel: 'Tu Nombre',
      namePlaceholder: 'Carlos Ruiz',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'carlos@empresa.com',
      messageLabel: 'Detalles del Proyecto',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
      sendButton: 'Enviar Mensaje',
      sending: 'Transmitiendo...',
      successMsg: 'Mensaje recibido. Responderé a la brevedad.',
    },
    footer: {
      role: 'Analista de Datos • Ingeniero de IA • Fundador',
      copyright: '© 2026 KEDARI SRI VENKATESH. Todos los derechos reservados.',
    },
  },
  fr: {
    nav: {
      logo: 'KSV.',
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      process: 'Processus',
      contact: 'Contact',
      startProject: 'Démarrer Projet',
    },
    hero: {
      label: 'BONJOUR, JE SUIS',
      namePrefix: 'KEDARI SRI',
      nameSuffix: 'VENKATESH',
      role: "Analyste de Données • Ingénieur en IA • Fondateur",
      description:
        "Je conçois des systèmes d'IA intelligents, des automatisations de santé et des produits numériques axés sur les données pour résoudre des défis concrets.",
      viewPortfolio: 'Voir Portfolio',
      contactMe: 'Me Contacter',
      scrollHint: 'Faites défiler pour explorer la galaxie',
    },
    about: {
      tag: '01 // PHILOSOPHIE & VISION',
      title: 'À PROPOS',
      bio: "Je m'appelle KEDARI SRI VENKATESH, Analyste de Données, Ingénieur IA et Fondateur dédié à la création de logiciels intelligents, d'IA médicale et de plateformes numériques scalables.",
      stats: {
        projectsDelivered: 'Projets Livrés',
        ongoingProject: 'Projet en Cours',
        upcomingProjects: 'Projets à Venir',
        builtFromScratch: 'Conçu à Partir de Zéro',
      },
    },
    skills: {
      tag: '02 // COMPÉTENCES CLÉS',
      title: 'COMPÉTENCES & EXPERTISE',
      subtitle: 'Architecture d’intelligence machine à haute performance et infrastructure cloud de pointe.',
      items: {
        dataAnalytics: { title: 'Analyse de Données', desc: 'Intelligence de données et tableaux de bord analytiques.', tags: ['SQL', 'Python', 'Pandas', 'Power BI'] },
        ai: { title: 'Intelligence Artificielle', desc: 'Systèmes d’IA générative et architectures RAG.', tags: ['LangChain', 'RAG', 'Vector DBs'] },
        machineLearning: { title: 'Machine Learning', desc: 'Modélisation prédictive et réseaux de neurones profonds.', tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn'] },
        computerVision: { title: 'Vision par Ordinateur', desc: 'Détection d’objets et compréhension vidéo multimodale.', tags: ['OpenCV', 'YOLOv8', 'MediaPipe'] },
        fullstack: { title: 'Développement Full Stack', desc: 'Next.js 15, React 19, TypeScript et microservices.', tags: ['Next.js', 'React', 'TypeScript'] },
        healthcareAutomation: { title: 'Automatisation Santé', desc: 'Flux cliniques critiques et plateformes SaaS d’hôpitaux.', tags: ['EHR', 'HIPAA', 'SaaS Engines'] },
      },
    },
    projects: {
      tag: '03 // PROJETS SÉLECTIONNÉS',
      title: 'PROJETS CHOISIS',
      ongoingBadge: 'EN COURS',
      upcomingBadge: 'À VENIR',
      confidentialityNotice: 'Accords de confidentialité stricts : seuls les projets propriétaires et SaaS internes sont affichés.',
      items: {
        hospitalAdGen: { title: 'Générateur Publicitaire Hôpital', category: 'IA Médicale · Vidéo · IA Générative', status: 'En Développement', desc: 'Moteur IA de création vidéo pour annonces médicales et cliniques.', tags: ['IA', 'Healthcare', 'Video'] },
        medicalReportAi: { title: 'Rapports Médicaux IA', category: 'NLP Clinique · Diagnostic', status: 'À Venir', desc: 'Analyseur automatique de comptes-rendus médicaux et radiologiques.', tags: ['NLP', 'Document AI', 'FastAPI'] },
        smartClinicCrm: { title: 'CRM Clinique Intelligente', category: 'SaaS Santé · Cloud', status: 'À Venir', desc: 'Gestion clinique moderne unifiant dossiers, planning et facturation.', tags: ['React 19', 'PostgreSQL', 'WebSockets'] },
      },
    },
    process: {
      tag: '04 // MÉTHODOLOGIE',
      title: 'NOTRE PROCESSUS',
      steps: {
        research: { num: '01', title: 'Recherche', desc: 'Compréhension approfondie des besoins cliniques.' },
        analyze: { num: '02', title: 'Analyse', desc: 'Profilage des données et tests de faisabilité.' },
        design: { num: '03', title: 'Design', desc: 'Architectures modulaires et interfaces soignées.' },
        develop: { num: '04', title: 'Développement', desc: 'Code robuste et sécurisé pour la production.' },
        launch: { num: '05', title: 'Lancement', desc: 'Déploiement haute disponibilité et monitoring.' },
      },
    },
    contact: {
      tag: '05 // COLLABORATION',
      titleMain: 'BÂTISSONS',
      titleAccent: "L'AVENIR",
      description: 'Intéressé par notre plateforme SaaS médicale ou nos services IA ? Contactez-moi directement.',
      directChannels: 'CANAUX DIRECTS',
      directDesc: 'Ouvert aux partenariats pilotes et collaborations technologiques.',
      formTitle: 'ENVOYER UN MESSAGE',
      nameLabel: 'Votre Nom',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'jean@domaine.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez votre projet...',
      sendButton: 'Envoyer',
      sending: 'Envoi...',
      successMsg: 'Message bien reçu. Je vous répondrai rapidement.',
    },
    footer: {
      role: 'Analyste de Données • Ingénieur IA • Fondateur',
      copyright: '© 2026 KEDARI SRI VENKATESH. Tous droits réservés.',
    },
  },
  de: {
    nav: {
      logo: 'KSV.',
      home: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      process: 'Prozess',
      contact: 'Kontakt',
      startProject: 'Projekt Starten',
    },
    hero: {
      label: 'HALLO, ICH BIN',
      namePrefix: 'KEDARI SRI',
      nameSuffix: 'VENKATESH',
      role: 'Datenanalyst • KI-Ingenieur • Gründer',
      description:
        'Ich entwickle intelligente KI-Systeme, Healthcare-Automatisierung und datengestützte Produkte zur Lösung geschäftskritischer Probleme.',
      viewPortfolio: 'Portfolio Ansehen',
      contactMe: 'Kontakt Aufnehmen',
      scrollHint: 'Scrollen, um die neuronale Galaxie zu erkunden',
    },
    about: {
      tag: '01 // PHILOSOPHIE & VISION',
      title: 'ÜBER MICH',
      bio: 'Ich bin KEDARI SRI VENKATESH, Datenanalyst, KI-Ingenieur und Gründer, mit Leidenschaft für Healthcare-KI, Automatisierung und skalierbare Software.',
      stats: {
        projectsDelivered: 'Abgeschlossene Projekte',
        ongoingProject: 'Laufendes Projekt',
        upcomingProjects: 'Kommende Projekte',
        builtFromScratch: 'Von Grund auf Entwickelt',
      },
    },
    skills: {
      tag: '02 // KERNKOMPETENZEN',
      title: 'FÄHIGKEITEN & EXPERTISE',
      subtitle: 'Architektur für hochperformante maschinelle Intelligenz und Cloud-Infrastrukturen.',
      items: {
        dataAnalytics: { title: 'Datenanalyse', desc: 'Ganzheitliche Datenintelligenz und Analyse-Dashboards.', tags: ['SQL', 'Python', 'Pandas', 'Power BI'] },
        ai: { title: 'Künstliche Intelligenz', desc: 'Generative KI-Systeme und RAG-Architekturen.', tags: ['LangChain', 'RAG', 'Vector DBs'] },
        machineLearning: { title: 'Machine Learning', desc: 'Prädiktive Modelle und neuronale Netze.', tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn'] },
        computerVision: { title: 'Computer Vision', desc: 'Objekterkennung und multimodale Videoanalyse.', tags: ['OpenCV', 'YOLOv8', 'MediaPipe'] },
        fullstack: { title: 'Full-Stack Entwicklung', desc: 'Next.js 15, React 19, TypeScript und APIs.', tags: ['Next.js', 'React', 'TypeScript'] },
        healthcareAutomation: { title: 'Healthcare Automatisierung', desc: 'Klinische Workflows und Krankenhaus-SaaS.', tags: ['EHR', 'HIPAA', 'SaaS Engines'] },
      },
    },
    projects: {
      tag: '03 // AUSGEWÄHLTE ARBEITEN',
      title: 'AUSGEWÄHLTE PROJEKTE',
      ongoingBadge: 'LAUFEND',
      upcomingBadge: 'DEMNÄCHST',
      confidentialityNotice: 'Aufgrund von Vertraulichkeitsvereinbarungen werden nur eigene SaaS-Lösungen präsentiert.',
      items: {
        hospitalAdGen: { title: 'Krankenhaus-Werbegenerator', category: 'Healthcare-KI · Video · Generative KI', status: 'In Entwicklung', desc: 'KI-gestützte Videoerstellung für Kliniken und medizinische Zentren.', tags: ['KI', 'Healthcare', 'Video'] },
        medicalReportAi: { title: 'Medizinische Berichte KI', category: 'Klinische NLP · Diagnostik', status: 'Demnächst', desc: 'Automatische Analyse und Zusammenfassung radiologischer Befunde.', tags: ['NLP', 'Document AI', 'FastAPI'] },
        smartClinicCrm: { title: 'Smart Clinic CRM', category: 'Healthcare-SaaS · Cloud', status: 'Demnächst', desc: 'Moderne Praxisverwaltung für Patientenaufnahme und Abrechnung.', tags: ['React 19', 'PostgreSQL', 'WebSockets'] },
      },
    },
    process: {
      tag: '04 // METHODIK',
      title: 'WIE WIR BAUEN',
      steps: {
        research: { num: '01', title: 'Recherche', desc: 'Detaillierte Erfassung klinischer und technischer Anforderungen.' },
        analyze: { num: '02', title: 'Analyse', desc: 'Tiefgehende Datenanalyse und Machbarkeitsprüfungen.' },
        design: { num: '03', title: 'Design', desc: 'Modulare Systemstrukturen und elegante Interfaces.' },
        develop: { num: '04', title: 'Entwicklung', desc: 'Typsicherer, performanter Code für den Produktiveinsatz.' },
        launch: { num: '05', title: 'Launch', desc: 'Hochverfügbares Deployment und kontinuierliche Optimierung.' },
      },
    },
    contact: {
      tag: '05 // KOOPERATION',
      titleMain: 'LASSEN SIE UNS',
      titleAccent: 'DIE ZUKUNFT BAUEN',
      description: 'Interessiert an unserer Krankenhaus-SaaS oder KI-Engineering? Kontaktieren Sie mich direkt.',
      directChannels: 'DIREKTE KANÄLE',
      directDesc: 'Offen für Unternehmenskooperationen und Pilotpartnerschaften.',
      formTitle: 'NACHRICHT SENDEN',
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'max@unternehmen.de',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt...',
      sendButton: 'Nachricht Senden',
      sending: 'Wird gesendet...',
      successMsg: 'Nachricht erhalten. Ich werde mich zeitnah bei Ihnen melden.',
    },
    footer: {
      role: 'Datenanalyst • KI-Ingenieur • Gründer',
      copyright: '© 2026 KEDARI SRI VENKATESH. Alle Rechte vorbehalten.',
    },
  },
};
