import Link from 'next/link';

export default function Experience({ descriptions }) {
    const { neonDescription, starlingDescription, randomDescription } = descriptions
    return (

        <div className="px-3 mb-48" >
            <h4 className="text-xl font-semibold lg:text-4xl mb-6">
                Experience
            </h4>
            <a
                className="group "
                href={`https://neon.cc/`}
            >
                <h4 className="text-sm lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-2">
                    Neon - Frontend Developer
                </h4>

                <p className="text-sm lg:text-md mb-2">September 2019 - Current</p>
                <p className="text-sm lg:text-md">{neonDescription}</p>

            </a>
            <a
                className="group"
                href={`https://www.starlingminds.com/`}
            >
                <h4 className="text-sm mt-8 lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-2">
                    Starling Minds - Frontend Developer
                </h4>
            </a>

            <p className="text-sm lg:text-base mb-1">September 20198 - July 2019</p>
            <p className="text-sm lg:text-base">{starlingDescription}</p>
            <a
                className="group"
                href={`https://www.behance.net/cristianeams`}
            >
                <h4 className="text-sm mt-8 lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-2">
                    UI Designer - Self Employed
                </h4>
            </a>

            <p className="text-sm lg:text-base mb-1">January 2014 - June 2017</p>
            <p className="text-sm lg:text-base">{randomDescription}</p>
            <button
                type="button"
                aria-label="Download resume as PDF"
                className="flex h-full bg-violet-300 mt-8  rounded-3xl py-2 px-4 dh-10 hover:drop-shadow-xl"
            >
                <a href="/cristianesilva.pdf" download>Download PDF</a>

            </button>
        </div>
    );
}
