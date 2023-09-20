import ScrollLink from "./ScrollLink";
import SocialIcons from "./SocialIcons";

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center opacity-60 px-3">
      <div className='flex justify-center my-8'>
        <ScrollLink className="btn" href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="animate-bounce transform w-6 h-6"
          >
            <path
              className={`stroke-current text-primary`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            ></path>
          </svg>
        </ScrollLink>
      </div>
      <SocialIcons />
      <p className="font-semibold pl-4 mt-8">
        Made with <a href="https://nextjs.org/" className="hover:underline decoration-4 decoration-violet-300">Next.JS</a> and <a href="https://tailwindcss.com/" className="hover:underline decoration-4 decoration-violet-300">Taildwind</a>. Deployed on <a href="https://www.netlify.com/" className="hover:underline decoration-4 decoration-violet-300">Netlify.</a>
      </p>
    </footer>
  );
}
