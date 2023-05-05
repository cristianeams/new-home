import Link from 'next/link';

export default function Experience({ descriptions }) {
    const { neonDescription, starlingDescription, randomDescription } = descriptions
    return (

        <div className="px-3 mb-48 dark:font-color-black" >
            <h2 className="text-xl lg:text-2xl mb-4">
                Experience
            </h2>
            <h3 className="text-sm lg:text-lg">
                <Link
                    href={`https://neon.cc/`}
                >Neon - Frontend Developer
                </Link>
            </h3>
            <p className="text-sm lg:text-base mb-1">September 2019 - Current</p>
            <p className="text-sm lg:text-base mb-8">{neonDescription}</p>
            <h3 className="text-sm lg:text-lg">
                <Link
                    href={`https://www.starlingminds.com/`}
                >Starling Minds - Frontend Developer
                </Link>
            </h3>
            <p className="text-sm lg:text-base mb-1">September 20198 - July 2019</p>
            <p className="text-sm lg:text-base mb-8">{starlingDescription}</p>
            <h3 className="text-sm lg:text-lg">
                <Link
                    href={`https://www.starlingminds.com/`}
                >UI Designer - Self Employed
                </Link>
            </h3>
            <p className="text-sm lg:text-base mb-1">January 2014 - June 2017</p>
            <p className="text-sm lg:text-base mb-8">{randomDescription}</p>
            <button
                type="button"
                aria-label="Download resume as PDF"
                className="flex h-full pr-2 bg-primary dark:bg-primary rounded-3xl p-2 dh-10 transition"
            >
                <a href="/cristianesilva.pdf" download>Download PDF</a>

            </button>
        </div>
    );
}
