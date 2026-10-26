function CardProyect({ project, repoLabel, technologiesLabel, imageAlt }) {
  const { index, title, description, features, technologies, image, repo } =
    project;

  return (
    <article className="group relative isolate flex w-full flex-col border border-white/15 bg-black transition-colors hover:border-white/30 lg:flex-row">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/15 bg-neutral-950 lg:aspect-auto lg:w-2/5 lg:border-b-0 lg:border-r">
        <img
          src={image}
          alt={`${imageAlt} ${title}`}
          className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
        />
        <span className="jetbrains-mono-uniquifier absolute left-4 top-4 z-10 flex items-center gap-2 border border-white/15 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-red-500" />
          {index}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        <div>
          <h3 className="kumar-one-outline-regular mt-4 text-2xl leading-none text-blue-500 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-400">
            {description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
          {features.map((feature, featureIndex) => (
            <li key={feature} className="flex items-baseline gap-3 bg-black p-3">
              <span className="jetbrains-mono-uniquifier text-[10px] text-red-500">
                0{featureIndex + 1}
              </span>
              <span className="jetbrains-mono-uniquifier text-xs text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div>
          <div className="flex items-center gap-4">
            <h4 className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {technologiesLabel}
            </h4>
            <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="jetbrains-mono-uniquifier border border-white/15 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <a
            href={repo}
            className="jetbrains-mono-uniquifier inline-flex items-center justify-center gap-3 border-2 border-red-500 bg-red-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
          >
            {repoLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CardProyect;
