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
      "Contributed to the overhaul of legacy code and documentation, effectively removing deprecated dependencies and improving maintainability",
      "Assisted in the transition to a monorepository using Turborepo and pnpm, significantly enhancing project scalability and development speed",
      "Participated in the integration of five projects into the monorepo and the creation of a shared packages folder, promoting code reusability across projects",
      "Worked on the development of new features and debugging of existing ones, thereby enhancing application reliability and user experience",
    ],
  },
  {
    id: 2,
    position: "Software Engineer Intern (Part-time)",
    company: "Borderless",
    period: "June 2023 - Present",
    description: [
      "Working on fine-tuning a GPT model for the company's needs",
      "Building website scrapers and populating database",
      "Developed 4 new features with NextJS and TailwindCSS",
    ],
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "NYU HSRN",
    period: "Sep 2022 - May 2023",
    description: [
      "Developed dynamic and browser compatible pages using Next.js, TypeScript, and Material UI",
      "Worked in an agile environment with weekly stand-ups to design the user UX journey",
    ],
  },
  {
    id: 4,
    position: "Frontend Developer",
    company: "ASRM",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Maintained, developed, and designed the public website using Vue 2, Vuex, HTML5, and CSS",
      "Implemented the mobile responsiveness via flexbox strategy, developed the registration process, and designed the UX user journey",
      "Introduced the practice of documenting code and processes per project, which made on-boarding of new developers faster",
      "Hosted the application on Amazon AWS",
    ],
  },
];
