import CardProyect from "../components/layout/CardProyect";
import projectsData from "../data/projects.json";

function Proyects({ t }) {
  return (
    <section
      id="proyectos"
      className="relative isolate w-full overflow-hidden border-t border-white/15 bg-black py-20"
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

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-4">
          <p className="jetbrains-mono-uniquifier flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            <span aria-hidden="true" className="h-2 w-2 bg-red-500" />
            {t.projects.eyebrow}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="kumar-one-outline-regular mt-6 text-4xl leading-none text-blue-500 sm:text-5xl">
          {t.projects.title}
        </h2>
        <p className="caveat-uniquifier mt-2 text-3xl leading-none text-red-500">
          {t.projects.subtitle}
        </p>

        <ul className="mt-12 flex flex-col gap-6">
          {t.projects.items.map((project, index) => (
            <li key={project.index}>
              <CardProyect
                project={{ ...project, ...projectsData[index] }}
                repoLabel={t.projects.repoCta}
                technologiesLabel={t.projects.technologiesTitle}
                imageAlt={t.projects.imageAlt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Proyects;
