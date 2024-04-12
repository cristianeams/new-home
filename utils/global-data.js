export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Cristiane Silva';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : `Hi! I'm Cristiane Silva.`;
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : `${new Date().getFullYear()}`;
  const titleSEO = `Front End Developer with 5+ years of experience in JavaScript/TypeScript, HTML/CSS, using React, NextJS and GraphQL. Excellent problem-solving and communication skills working with B2B companies.`;

  const neonDescription = [
    `Developed and implemented Neon's Design System, Cornerstone, using TypeScript, React, and Storybook, resulting in a 20% improvement in code reusability and a more consistent UI/UX across the platform.`,
    'Led the front-end development of Alltourage, a talent acquisition dashboard platform that streamlines the job application process.',
    'Prioritized tasks based on impact, improving project efficiency and reducing time-to-market, boosting overall productivity.',
    'Collaborated with cross-functional teams to ensure seamless integration and communication between application components, enabling successful feature launches in a fast-paced environment with multiple stakeholders',
    'Investigated and resolved technical issues related to front - end development.',
  ];
  const starlingDescription = [
    'Built responsive, and accessible components for a mental health training platform designed for educators',
    'Implemented user authentication and API integrations.',
    'Developed and maintained automated tests to ensure the quality of the code base.',
    'Participated in code reviews, feature planning, and design reviews.',
  ];

  const randomDescription = [
    'Created user-friendly interfaces for various web and mobile applications, ensuring a positive user experience.',
    'Conducted user research to discover user needs and to inform design decisions.',
  ];

  return {
    name,
    titleSEO,
    blogTitle,
    footerText,
    neonDescription,
    starlingDescription,
    randomDescription,
  };
};
