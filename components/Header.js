import Link from 'next/link';

export default function Header({ name }) {
  const splitName = name.split(' ')

  return (
    <header className="pt-16 lg:pt-36 pb-12 px-3">
      <Link href="/">
        <h1 className="text-4xl font-extrabold lg:text-8xl self-start text-shadow-custom shadow-violet-300">
          <a>{splitName[0]}</a>
          <br />
          <a>{splitName[1]}</a>
        </h1>
      </Link>
    </header>
  );
}
