interface ExperienceI {
  id: number;
  position: string;
  company: string;
  period: string;
  description: Array<string>;
}

export const experience: ExperienceI[] = [
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "Yandex",
    period: "June 2023 - Present",
    description: [
      "Decreased code-related issues by 20% through overhauling legacy code and documentation, effectively removing deprecated dependencies and improving maintainability.",
      "Enhanced project scalability and sped up development by assisting in the transition to a monorepository using Turborepo and pnpm, which resulted in fewer bugs and made the project more manageable.",
      "Improved the performance of the app and the efficiency of testing by successfully moving a feature from the main code to operate as an independent platform using CI/CD, Docker, and ReactJs.",
    ],
  },
  {
    id: 2,
    position: "Software Engineer Intern (Part-time)",
    company: "Borderless",
    period: "June 2023 - Aug 2023",
    description: [
      "Built a comprehensive web scraper using Node.js, capturing critical information from 250 universities, enriching the pool of resources, and boosting user engagement on the platform.",
      "Implemented a novel feature leveraging Next.js, Prisma, and tRPC, enhancing the website’s functionality and improving user interaction.",
      "Developed efficient Prisma queries for precise database manipulations, which reduced data retrieval times by 30%, contributing significantly to overall system performance and reliability.",
    ],
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "NYU HSRN",
    period: "Sep 2022 - May 2023",
    description: [
      "Engineered the foundational structure of the website from scratch, using Next.js, TypeScript, and Material UI, providing a platform for user interaction and information exchange.",
      "Utilized an agile work environment to iteratively present, receive feedback, and improve on the website’s UX and UI design on a weekly basis.",
    ],
  },
];
