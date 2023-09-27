import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://cristiane.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cristiane Silva - Frontend Developer" />
      <meta property="og:description" content="Cristiane Silva - I'm a Frontend developer based in Vancouver.  I specialize in building accessible and user-friendly products. My expertise includes technologies like TypeScript and React, allowing me to create interactive and responsive experiences for the web." />
      <meta property="og:image" content="https://cristiane.dev/opentag.png" />
    </Head>
  )
}
