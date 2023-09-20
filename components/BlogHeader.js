import Link from 'next/link';

export default function BlogHeader({ name }) {
    return (
        <header className="pt-16 lg:pt-36 pb-12">
            <Link href="/">
                <a>
                    <h1 className="text-4xl font-extrabold lg:text4xl self-start text-shadow-custom shadow-violet-300">
                        {name}
                    </h1>
                </a>
            </Link>
        </header>
    );
}
