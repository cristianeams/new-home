import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Experience from '../components/Experience';

export default function Index({ posts, globalData }) {
  const { footerText, name, blogTitle } = globalData;

  return (
    <Layout>
      <SEO title={name} description={blogTitle} />
      <Header name={name} />
      <main className="w-full mb-12">
        <h2 className="text-xl font-semibold lg:text-3xl px-3 mb-4">I&apos;m  a Frontend developer based in Vancouver.  I specialize in building accessible and user-friendly products. My expertise includes technologies like TypeScript and React, allowing me to create interactive and responsive experiences for the web.</h2>
        <button
          type="button"
          aria-label="Contact me"
          className="flex h-full bg-violet-300 ml-3 rounded-3xl py-2 px-4 dh-10 hover:drop-shadow-xl mb-16 lg:mb-48"
        >
          <a href="mailto:contact@cristiane.dev" target="_blank" rel="noreferrer">Let&apos;s chat</a>
        </button>
        <Experience descriptions={globalData} />

        <h4 className="text-xl font-semibold lg:text-4xl mb-12 px-3">
          Latest Post
        </h4>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white  
               bg-opacity-10 hover:bg-opacity-20 transition border border-gray-800  border-opacity-10  border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="hover:bg-[linear-gradient(transparent 0 50%, amber-200 50% 75%,transparent 75%);]"
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4 group">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl group-hover:underline decoration-4 decoration-violet-300 mb-2">{post.data.title}</h2>
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
