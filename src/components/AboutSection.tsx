import { Briefcase, GraduationCap } from 'lucide-react';
import profilePlaceholderSvg from '../assets/foto-perfil-placeholder.svg';
import { siteContent } from '../data/content';

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section
      id="sobre-mi"
      className="border-y border-acento-suave bg-blanco py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Espacio reservado elegante para fotografía profesional (4:5) */}
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-acento-suave bg-crema shadow-sm">
                <img
                  src={profilePlaceholderSvg}
                  alt={about.photoAlt}
                  width={480}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="mt-4 rounded-2xl border border-acento-suave bg-crema px-5 py-4 shadow-xs sm:absolute sm:-right-4 sm:-bottom-5 sm:mt-0 sm:max-w-[230px] sm:bg-blanco">
                <p className="font-serif text-2xl font-semibold text-primario">
                  {about.experienceBadgeValue}
                </p>
                <p className="mt-0.5 text-xs font-medium leading-snug text-texto-secundario">
                  {about.experienceBadgeLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Perfil humano y trayectoria profesional */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-primario uppercase">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-texto-principal sm:text-3xl lg:text-4xl">
              {about.title}
            </h2>
            <p className="mt-2 text-base font-medium text-secundario sm:text-lg">
              {about.roleSubtitle}
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-texto-secundario sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Experiencia actual destacada */}
            <div className="mt-7 rounded-2xl border border-secundario/20 bg-secundario/6 p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secundario text-blanco">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-secundario uppercase">
                    {about.currentRoleLabel}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-texto-principal">
                    {about.currentRoleTitle}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-texto-secundario">
                    {about.currentRoleDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Formación académica */}
            <div className="mt-8">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-texto-principal">
                <GraduationCap className="h-5 w-5 text-primario" aria-hidden="true" />
                <span>{about.educationTitle}</span>
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {about.education.map((item) => (
                  <li
                    key={item.degree}
                    className="rounded-2xl border border-acento-suave bg-crema/70 p-4"
                  >
                    <p className="text-sm font-semibold text-texto-principal">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-texto-secundario">
                      {item.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
