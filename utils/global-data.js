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
  const titleSEO = `I&apos;m  a Frontend developer based in Vancouver.  I specialize in building accessible and user-friendly products. My expertise includes technologies like TypeScript and React, allowing me to create interactive and responsive experiences for the web.`
  const neonDescription = `I use React, TypeScript, and other technologies to build impactful products and collaborate with others to build reusable components and keep everyone in sync with the UI. I participate in Scrum practices, present demos, and strive to deliver high-quality products that meet users' needs while staying up-to-date with the latest technologies and best practices.`;
  const starlingDescription = `I built the front end of the Mental Health Platform using Cordova and Vue.js, creating reusable components and writing clean, scalable code. I collaborated with the back-end team and contributed to documentation to maintain high coding standards.`
  const randomDescription = `
  As a designer, I presented proposals, developed high-quality interfaces and graphics, and solved clients' communication problems. I used mobile-first design principles, color theory, typography, and UX best practices to deliver successful solutions on time and within budget, resulting in increased profits.`
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



