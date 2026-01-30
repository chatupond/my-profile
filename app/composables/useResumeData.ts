export const useResumeData = () => {
  const profile = {
    name: "Tong Li",
    tagline:
      "Product-focused Frontend Engineer crafting clean, accessible experiences for fast-growing teams.",
    meta: ["San Francisco, CA", "tong.li@email.com", "linkedin.com/in/tongli"],
    photo: "/profile.jpg",
    actions: [
      { label: "Download PDF", variant: "primary" },
      { label: "Contact", variant: "ghost" },
    ],
  };

  const currentRole = {
    label: "Current Role",
    title: "Lead Frontend Engineer",
    subtitle: "Lumina Labs · 2022 — Present",
    stats: [
      { value: "12+", label: "Products shipped" },
      { value: "45%", label: "Perf boost" },
      { value: "8", label: "Engineers led" },
    ],
  };

  const roles = [
    {
      company: "Lumina Labs",
      title: "Lead Frontend Engineer",
      period: "2022 — Present",
      summary:
        "Owned the design system and commerce experience for a hardware + SaaS startup.",
      highlights: [
        "Rebuilt core checkout flow, lifting conversion by 18%.",
        "Introduced performance budgets and hit 97 Lighthouse score.",
        "Mentored 8 engineers across web and mobile squads.",
      ],
    },
    {
      company: "Northbridge Studio",
      title: "Senior Frontend Engineer",
      period: "2019 — 2022",
      summary:
        "Led UI platform initiatives and shipped multi-tenant dashboards.",
      highlights: [
        "Developed a modular component library used across 6 products.",
        "Reduced build times by 40% with a new CI pipeline.",
        "Partnered with design on a new accessibility standard.",
      ],
    },
    {
      company: "Orbitly",
      title: "Frontend Engineer",
      period: "2016 — 2019",
      summary: "Built customer-facing analytics and early mobile experiences.",
      highlights: [
        "Delivered a real-time insights dashboard for 5K+ users.",
        "Migrated legacy UI to Vue, cutting support tickets in half.",
        "Built onboarding flows that increased activation by 22%.",
      ],
    },
  ];

  const skills = [
    {
      title: "Product Craft",
      description: "UI architecture, accessibility, interaction design.",
    },
    {
      title: "Frontend Engineering",
      description: "Vue, Nuxt, TypeScript, modern CSS, performance.",
    },
    {
      title: "Design Systems",
      description: "Component libraries, tokens, theming, tooling.",
    },
    {
      title: "Leadership",
      description: "Mentorship, roadmap planning, cross-team alignment.",
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
      school: "University of California, Davis",
      degree: "B.S. in Computer Science",
      period: "2012 — 2016",
    },
    {
      school: "Apple Design Academy",
      degree: "Product Design for Engineers (Certificate)",
      period: "2021",
    },
  ];

  const footer = {
    message: "Open to senior frontend and product engineering roles.",
    links: ["GitHub", "Behance", "Dribbble", "Resume PDF"],
  };

  return { profile, currentRole, roles, skills, projects, education, footer };
};
