export const useResumeData = () => {
  const profile = {
    name: "Chatupond Boonlua",
    nickname: "Tong",
    tagline:
      "Focused on team management and project management to drive efficiency and ensure on-time product delivery, supported by a well-designed technical architecture.",
    meta: [
      {
        type: "email",
        value: "chatupond.b@gmail.com",
        icon: "/email.png",
        label: "Email",
      },
      {
        type: "link",
        value: "https://www.linkedin.com/in/chatupond/",
        icon: "/linkedin.svg",
        label: "LinkedIn",
      },
      {
        type: "link",
        value: "https://github.com/chatupond",
        icon: "/github.svg",
        label: "GitHub",
      },
    ],
    photo: "/profile.jpg",
    actions: [
      { label: "Download PDF", variant: "primary" },
      { label: "Contact", variant: "ghost" },
    ],
  };

  const currentRole = {
    label: "Current Role",
    title: "Engineering Manager",
    subtitle: "Finnomena · 2017 — Present",
    stats: [
      { value: "14 years", label: "Engineering Experience" },
      { value: "30+", label: "Products shipped" },
      { value: "20+", label: "Engineers led" },
    ],
  };

  const roles = [
    {
      company: "Finnomena",
      logo: "/finnomena.png",
      period: "2017 — Present",
      positions: [
        {
          title: "Engineering Manager",
          period: "2019 — Present",
          summary:
            "Focused on team management and project delivery across multiple squads.",
          highlights: [
            "Improved delivery predictability by 30% through planning cadence.",
            "Led org-wide engineering alignment for product launches.",
            "Coached and grew 20+ engineers and tech leads.",
          ],
        },
        {
          title: "Senior Full Stack Software Engineer",
          period: "2017 — 2019",
          summary:
            "Owned design system and web platform foundation for growth teams.",
          highlights: [
            "Standardized UI components across 4 product lines.",
            "Improved app performance to 95+ Lighthouse scores.",
            "Partnered with design on accessibility standards.",
          ],
        }
      ],
    },
    {
      company: "Thairath",
      logo: "/thairath.jpg",
      period: "2013 — 2017",
      positions: [
        {
          title: "Senior Programmer",
          period: "2016 — 2017",
          summary:
            "Led UI platform initiatives and shipped multi-tenant dashboards.",
          highlights: [
            "Developed a modular component library used across 6 products.",
            "Reduced build times by 40% with a new CI pipeline.",
            "Partnered with design on a new accessibility standard.",
          ],
        },
        {
          title: "Programmer",
          period: "2014 — 2016",
          summary:
            "Led UI platform initiatives and shipped multi-tenant dashboards.",
          highlights: [
            "Developed a modular component library used across 6 products.",
            "Reduced build times by 40% with a new CI pipeline.",
            "Partnered with design on a new accessibility standard.",
          ],
        },
      ],
    },
    {
      company: "Cenclean",
      logo: "/cenclean.jpeg",
      period: "2011 — 2014",
      positions: [
        {
          title: "Web Developer & Graphic Designer",
          period: "2011 — 2014",
          summary: "Built customer-facing analytics and early mobile experiences.",
          highlights: [
            "Delivered a real-time insights dashboard for 5K+ users.",
            "Migrated legacy UI to Vue, cutting support tickets in half.",
            "Built onboarding flows that increased activation by 22%.",
          ],
        },
      ],
    },
  ];

  const skills = [
    {
      title: "Engineering Leadership",
      description: "Lead and manage engineering teams to deliver high-quality software while fostering a culture of ownership, collaboration, and continuous improvement",
    },
    {
      title: "People Management & Coaching",
      description: "Coach and mentor engineers through regular feedback, performance reviews, and career development planning to grow individual and team capability",
    },
    {
      title: "Project & Delivery Management",
      description: "Plan, prioritize, and execute projects using Agile methodologies to ensure on-time delivery aligned with business goals",
    },
    {
      title: "Technical Architecture & System Design",
      description: "Drive technical decision-making, design scalable system architectures, and balance trade-offs between speed, quality, and long-term maintainability",
    },
    {
      title: "Performance",
      description: "Core Web Vitals, caching, image optimization.",
    },
    {
      title: "Analytics",
      description: "Product metrics, experimentation, insights dashboards.",
    },
    {
      title: "Collaboration",
      description: "Stakeholder alignment, design partnership, QA.",
    },
    {
      title: "Quality",
      description: "Testing strategy, CI automation, release readiness.",
    },
    {
      title: "Platform",
      description: "Monorepos, tooling, build pipelines, dev experience.",
    },
    {
      title: "Internationalization",
      description: "Localization workflows, RTL support, global UX.",
    },
  ];

  const projects = [
    {
      name: "Aurora Checkout",
      description: "End-to-end checkout redesign with a focus on speed.",
      metrics: "+18% conversion · -32% drop-off",
    },
    {
      name: "Pulse Analytics",
      description: "Real-time dashboard for multi-region customer insights.",
      metrics: "2.1s load time · 5K daily active users",
    },
    {
      name: "Nebula Design System",
      description: "Unified web & mobile UI kit for consistent experiences.",
      metrics: "120+ components · 6 product teams",
    },
  ];

  const education = [
    {
      school: "The University of the Thai Chamber of Commerce (UTCC)",
      degree:
        "Bachelor of Business Administration (B.B.A.) · Major in Business Computer · Second Class Honors",
      period: "",
    },
  ];

  const footer = {
    message: "Open to senior frontend and product engineering roles.",
    links: ["GitHub", "Behance", "Dribbble", "Resume PDF"],
  };

  return { profile, currentRole, roles, skills, projects, education, footer };
};
