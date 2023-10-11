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
  const titleSEO = `Skilled Front End Web Developer with 5+ years of experience in JavaScript/TypeScript, HTML/CSS, and React. Excellent problem-solving and communication skills.`
  const neonDescription = `Led the front-end team in developing a simplified and streamlined HR system for efficient hiring.
  Built a design system using Chakra UI, Storybook React, and TypeScript for rapid prototyping of Neon's style guide.
  Created a comprehensive onboarding documentation and guide to help newly hired developers get started.
  Participated in code reviews, feature planning, and design reviews.
  Investigated and resolved technical issues related to front-end development.
  Implemented API integration with GraphQL and Apollo Client`
  const starlingDescription = `Utilized Cordova and Vue.js to create interactive, responsive, and user-friendly web application.
  Implemented user authentication and API integrations
  Developed and maintained automated tests to ensure the quality of the code base.
  Participated in code reviews, feature planning, and design reviews.`
  const randomDescription = `
  Designed intuitive, user-centric interfaces for a range of web and mobile applications.
  Conducted user research to discover user needs and to inform design decisions.
  Utilized various design tools such as Photoshop, Adobe XD, and Sketch to create user interface designs.`
  return {
    name,
    titleSEO,
    blogTitle,
    footerText,
    neonDescription,
    starlingDescription,
    randomDescription
  };
};



