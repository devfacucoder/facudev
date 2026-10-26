import {
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const stackIcons = {
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  express: { Icon: SiExpress, color: "#FFFFFF" },
  react: { Icon: SiReact, color: "#61DAFB" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
};

function Start({ t, language, onLanguageChange }) {
  return (
    <section
      id="inicio"
      className="relative isolate w-full min-h-screen overflow-hidden bg-black"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "url('/imgs/texture-fondo.jpg')",
          backgroundSize: "420px auto",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/70 to-black"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-14 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <p className="jetbrains-mono-uniquifier flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              <span className="h-2 w-2 bg-red-500" />
              {t.start.eyebrow}
            </p>

            <div>
              <label htmlFor="language" className="sr-only">
                {t.language.label}
              </label>
              <select
                id="language"
                value={language}
                onChange={(event) => onLanguageChange(event.target.value)}
                className="jetbrains-mono-uniquifier cursor-pointer border border-white/15 bg-black px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:border-white/40 hover:text-white focus:border-red-500 focus:outline-none"
              >
                <option value="es">{t.language.options.es}</option>
                <option value="en">{t.language.options.en}</option>
              </select>
            </div>
          </div>

          <h1 className="kumar-one-outline-regular mt-6 text-5xl leading-none text-blue-500 sm:text-6xl lg:text-7xl">
            {t.start.name.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <h2 className="caveat-uniquifier mt-3 text-4xl leading-none text-red-500 sm:text-5xl">
            {t.start.role}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
            {t.start.description}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
            {t.start.services.map((service, index) => (
              <li
                key={service}
                className="flex items-baseline gap-3 bg-black p-3"
              >
                <span className="jetbrains-mono-uniquifier text-[10px] text-red-500">
                  0{index + 1}
                </span>
                <span className="jetbrains-mono-uniquifier text-xs text-neutral-300">
                  {service}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="jetbrains-mono-uniquifier inline-flex items-center justify-center gap-3 border-2 border-red-500 bg-red-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              {t.start.projectsCta}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contacto"
              className="jetbrains-mono-uniquifier inline-flex items-center justify-center border-2 border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.start.contactCta}
            </a>
          </div>
        </div>

        <div className="w-full lg:max-w-sm">
          <div className="flex items-center gap-4">
            <h3 className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              {t.start.stackTitle}
            </h3>
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
            {t.start.stack.map(({ id, name }) => {
              const { Icon, color } = stackIcons[id];

              return (
                <li
                  key={id}
                  className="group flex flex-col items-start gap-4 bg-black p-4 transition-colors hover:bg-white/5"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-3xl"
                    style={{ color }}
                  />
                  <span className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-white">
                    {name}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="jetbrains-mono-uniquifier mt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            {t.start.stackFooter}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Start;
