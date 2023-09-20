import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function BlogHeader({ name }) {
    return (
        <header className="pt-16 lg:pt-36 pb-12 px-6 md:px-0" id="home">
            <Link href="/">
                <a>
                    <h1 className="text-4xl font-extrabold lg:text4xl self-start text-shadow-custom shadow-violet-300">
                        {name}
                    </h1>
                    <ArrowIcon className="transform rotate-180 mt-4" />
                </a>
            </Link>
        </header>
    );
}
