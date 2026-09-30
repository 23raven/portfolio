/*
  EDIT THIS FILE ONLY.
  The website UI is generated from the data below.
  Add/remove experience, skills, links and projects without touching HTML.
*/

window.SITE_CONFIG = {
  site: {
    title: "Iskander Rassulov",
    description: "Personal website and portfolio of Iskander Rassulov.",
  },

  profile: {
    name: "Iskander Rassulov",
    role: "Game Developer",
    email: "iskander.rassulov.2002@gmail.com",
    age: 24,
    photo: "assets/photo.png",
    tagline: "Building games, interactive experiences and systems",
    meta: [
      { label: "Focus", text: "Unity · C#" },
      { label: "Languages", text: "Russian, English, Kazakh" },
      { label: "Location", text: "Kazakhstan · Remote" }
    ],
    // CV file used by the DOWNLOAD CV button.
    cv: "docs/eng_cv.pdf"
  },

  decoration: {
    image: "assets/av1.jpg",
    alt: "Decoration"
  },

  about: {
    text: "Game developer focused on Unity, 2D gameplay systems, prototyping"
  },

  education: {
    university: "Suleyman Demirel University",
    degree: "Bachelor's Degree · Computer Science",
    years: "2019 — 2023",
    logo: "assets/logo-sdu.jpg"
  },

  experience: [
    {
      jobTitle: "Operations Analyst",
      companyTitle: "Prime Food Factory",
      years: "Aug 2025 — Aug 2026",
      description: "",
      bullets: [
        "Managed and organized internal and local document workflows",
        "Prepared official documentation for the sale of goods and services and coordinated with the accounting department",
        "Prepared documentation to verify the proper use of loan funds for the bank and Damu Fund (160M KZT) and coordinated with external appraisers",
        "Verified incoming goods against supporting documentation and coordinated workflows between warehouse, production, accounting and external organizations"
      ]
    }
  ],
  skills: [
    "Unity 3D",
    "C#",
    "Git",
    "Unity 2D",
    "ScriptableObject Architecture"
  ],

  links: [
    { label: "GitHub", url: "https://github.com/23raven", icon: "GH" },
    { label: "iskander.rassulov.2002@gmail.com", url: "mailto:iskander.rassulov.2002@gmail.com", icon: "@" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/iskandar-rassulov-773145429/?isSelfProfile=true", icon: "in" },
    { label: "Itch.io", url: "https://23raven.itch.io/", icon: "◉" },
    { label: "Telegram · @iskan23tg", url: "https://t.me/iskan23tg", icon: "↗" },
    { label: "YouTube", url: "https://www.youtube.com/@23raven", icon: "▶" },
    { label: "Discord · 23ravenc", url: "https://discord.com/users/1487857481224028242", icon: "◌" }
  ],

  personalLinks: {
    label: "Personal Links",
    title: "All my links, one tile.",
    description: "A compact page with my full online profile and contacts.",
    url: "https://23raven.github.io/personal-links/",
    icon: "↗"
  },

  projects: [
    {
      name: "Zero Direction",
      tags: ["#gamejam", "#2026"],
      priority: 1,
      description: "A platformer created during Do You WANNA Jam?! 2026, built around dynamic gravity direction changes as the core gameplay mechanic",
      banner: "assets/projects/banner-zero.png",
      links: {
        "GitHub": "https://github.com/23raven/Zero-Direction",
        "YouTube": "https://www.youtube.com/watch?v=Cr8du3bMqoM&feature=youtu.be",
        "Itch.io": "https://23raven.itch.io/zero-direction",
        "Gamejam score": "https://itch.io/jam/do-you-wanna-jam-2026/rate/4930724"
      }
    },
    {
      name: "Tooth Fairy",
      tags: ["#pet-project", "#2026"],
      priority: 1,
      description: "A small 2D game made in Unity where you play as a Tooth Fairy collecting teeth",
      banner: "assets/projects/banner-tooth-fairy.png",
      links: {
        "GitHub": "https://github.com/23raven/Unity_Tooth-Fairy",
        "YouTube": "https://www.youtube.com/watch?v=kRUNb_6U_4g&source_ve_path=OTY3MTQ&embeds_referring_euri=https%3A%2F%2F23raven.itch.io%2Ftooth-fairy",
        "Itch.io": "https://23raven.itch.io/tooth-fairy"
      }
    },
    {
      name: "Tracer FPS",
      tags: ["#reverse-engineering", "#pet-project", "#2026"],
      priority: 1,
      description: "A Unity gameplay project inspired by Tracer from Overwatch, featuring a custom movement system and mechanics",
      banner: "assets/projects/banner-tracer.png",
      links: {
        "GitHub": "https://github.com/23raven/Unity_TracerFPS",
        "YouTube": "https://www.youtube.com/watch?v=bb6q8can3Yo",
        "Itch.io": "https://23raven.itch.io/tracerfps"
      }
    },
    {
      name: "Nova Expedition",
      tags: ["#pet-project", "#2026"],
      priority: 2,
      description: "A small story-driven adventure game developed with Unity, featuring exploration and puzzle-solving elements",
      banner: "assets/projects/banner-nova.png",
      links: {
        "GitHub": "https://github.com/23raven/Unity_Nova-Expedition-Trials",
        "YouTube": "https://www.youtube.com/watch?v=IYjij2PDPBA",
        "Itch.io": "https://23raven.itch.io/nova-expedition-trials"
      }
    },
  ]};
