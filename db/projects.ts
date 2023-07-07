export interface ProjectI {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  stack: Array<string>;
  projectLink: string;
  ghLink: string;
}

export const projects: ProjectI[] = [
  {
    id: 2,
    title: "ASRM (Team Project)",
    imgUrl: "asrm.png",
    description: `
    Fullstack website for a non-profit medical organisation 
    'Association of Specialists in Respiratory Medicine (ASRM)'. 
    Designed to make announcements and post news in respiratory medicine. 
    Users can create accounts and sign up to events via website`,
    stack: ["VueJS", "VueX", "Django", "AWS", "Figma"],
    projectLink: "https://asrm.kz/",
    ghLink: "https://github.com/ZhomartZhetpisbekov/ASRM-website",
  },
  {
    id: 3,
    title: "Not Parkour",
    imgUrl: "notparkour.png",
    description: `
      Not Parkour is an arcade style collaborative 2 player game.
      Levels are structured in such way that players won't be able
      to complete the level on their own. Players can either create
      the room or join one, where they will be assigned a character
      at random. Each of the characters have their own special
      ability. 
    `,
    stack: ["Node.js", "Express", "p5.js", "Socket.io"],
    projectLink: "",
    ghLink: "https://github.com/karishev/not-parkour",
  },
];
