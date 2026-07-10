// =============================================================
// Portfolio content — edit this file to update the site.
// Nothing else needs to change when adding projects, jobs, etc.
// =============================================================

const portfolio = {
  name: "David Zajac",
  tagline: "3rd-year Computer Science student at Ontario Tech University",
  location: "Toronto, Ontario",
  photo: "IMG_0909.jpg",

  intro: `Hi, I'm David — a Computer Science student passionate about building
    software that's clean, useful, and thoughtfully designed. I enjoy working
    with Python, Java, and C++, and I'm always looking for new problems to solve.`,

  social: {
    github: "https://github.com/DavidZajac123",
    linkedin: "https://www.linkedin.com/in/david-zajac-393554360/",
    email: "dzajac2705@gmail.com"
  },

  // Path to the résumé file offered via the download button in Contact.
  resume: "David Zajac Resume (1).pdf",

  // Add new projects by copying a block and editing the fields.
  projects: [
    {
      title: "ReelRater",
      description: "A full-stack movie discovery and tracking web app built as a final course project for Software Design and Analysis. Users can browse films via the TMDB API, rate and track what they've watched, and follow other users to get recommendations from their social network. Includes user authentication, admin movie management, and a full test suite.",
      tech: ["React", "TypeScript", "JavaScript", "Node.js", "Express", "Vite"],
      link: "https://github.com/DavidZajac123/SoftwareDesignAndAnalysisReelRaterProject"
    },
    {
      title: "Pokémon Base Stats Analysis",
      description: "An exploratory data analysis project examining how Pokémon base stats have evolved across Generations I–IX. Uses a Kaggle dataset of 1,025 Pokémon to compare stat distributions by type, visualize generational trends, and surface patterns in the data using pandas and seaborn.",
      tech: ["Python", "Jupyter", "pandas", "matplotlib", "seaborn"],
      link: "https://github.com/DavidZajac123/pokemon-base-stats-analysis"
    }
  ],

  education: [
    {
      school: "Ontario Tech University",
      degree: "BSc. Honours Computer Science, Data Science Specialization (In Progress)",
      period: "September 2024 — Present",
      note: "Completed second year"
    },
    {
      school: "Sir Oliver Mowat Collegiate Institute",
      degree: "Ontario Secondary School Diploma — Ontario Scholar",
      period: "September 2020 — June 2024",
      note: "Toronto, Ontario"
    }
  ],

  experience: [
    {
      role: "Caretaker Assistant / Camp Counsellor",
      org: "Grace Christian Reformed Church",
      period: "June 2025 — August 2025",
      points: [
        "Planned, organized, and led youth camp activities and Sunday school programs",
        "Supervised children in a safe, supportive environment",
        "Supported indoor and outdoor maintenance tasks"
      ]
    },
    {
      role: "Administrative Assistant (Co-Op Placement)",
      org: "Act First Safety",
      period: "February 2023 — May 2023",
      points: [
        "Entered and analyzed client training data",
        "Compiled and organized training materials",
        "Fulfilled administrative tasks alongside office staff"
      ]
    }
  ],

  skills: {
    languages: ["Python", "Java", "C++"],
    tools: ["Microsoft Office", "Google Suite"],
    traits: ["Organized", "Proactive", "Punctual", "Efficient"]
  },

  certifications: [
    "Standard First Aid CPR-C/AED — Canadian Red Cross (2025)",
    "Plan To Protect Abuse Prevention Training Certification",
    "Honour Roll, Grade 7 — Grade 12"
  ]
};
