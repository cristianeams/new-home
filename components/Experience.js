export default function Experience({ descriptions }) {
  const { neonDescription, starlingDescription, randomDescription } =
    descriptions;
  return (
    <div className="px-3 mb-48">
      <h4 className="text-xl font-semibold lg:text-4xl mb-6">Experience</h4>
      <a
        className="group "
        href={`https://neon.cc/`}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="text-sm lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-1">
          Neon - Frontend Developer
        </h4>

        <p className="text-sm lg:text-md mb-4">
          September 2019 - September 2023
        </p>
        <ul className="list-disc list-inside">
          {neonDescription.map((task) => (
            <li className="text-sm lg:text-base pb-2" key={task}>
              {task}
            </li>
          ))}
        </ul>
      </a>
      <a
        className="group"
        href={`https://www.starlingminds.com/`}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="text-sm mt-8 lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-1">
          Starling Minds - Frontend Developer
        </h4>
      </a>

      <p className="text-sm lg:text-md mb-4">September 2018 - July 2019</p>
      <ul className="list-disc list-inside">
        {starlingDescription.map((task) => (
          <li className="text-sm lg:text-base pb-2" key={task}>
            {task}
          </li>
        ))}
      </ul>
      <a
        className="group"
        href={`https://www.behance.net/cristianeams`}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="text-sm mt-8 lg:text-xl group-hover:underline decoration-4 decoration-violet-300 mb-1">
          UI Designer - Self Employed
        </h4>
      </a>

      <p className="text-sm lg:text-md mb-4">January 2014 - June 2017</p>
      <ul className="list-disc list-inside">
        {randomDescription.map((task) => (
          <li className="text-sm lg:text-base pb-2" key={task}>
            {task}
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Download resume as PDF"
        className="flex h-full bg-violet-300 mt-8  rounded-3xl py-2 px-4 dh-10 hover:drop-shadow-xl"
      >
        <a href="/Resume_CristianeS.pdf" download>
          Download PDF
        </a>
      </button>
    </div>
  );
}
