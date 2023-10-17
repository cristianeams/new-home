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
  const titleSEO = `Skilled Front End Web Developer with 5+ years of experience in JavaScript/TypeScript, HTML/CSS, using React, NextJS and GraphQL. Excellent problem-solving and communication skills working with B2B companies.`
  const neonDescription = `Led the front-end team in developing a B2B talent acquisition platform that included an admin tool with user-based permissions and a job board to promote hires based on referrals.
  Built a design system using Chakra UI, Storybook React, Next.js and TypeScript to speed up our ability to prototype, iterate and communicate through development and design.
  Created a comprehensive onboarding documentation and guide to help newly hired developers get started.
  Presented weekly demo to our partners, addressing technical concerns and proposing solutions while working collectively to incorporate feedback.
  Participated in code reviews, feature planning, and design reviews.
  Investigated and resolved technical issues related to front-end development.`
  const starlingDescription = `Built responsive, and accessible web components for a B2B mental health training platform designed for educators.
  Implemented user authentication and API integrations.
  Developed and maintained automated tests to ensure the quality of the code base.
  Participated in code reviews, feature planning, and design reviews.`
  const randomDescription = `
  Created user-friendly interfaces for various web and mobile applications, ensuring a positive user experience.
  Conducted user research to discover user needs and to inform design decisions.`
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



