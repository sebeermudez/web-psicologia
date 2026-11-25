import { ShieldCheck, Sun, Users } from 'lucide-react';
import { siteContent } from '../data/content';
import type { PillarIconName } from '../types';

const pillarIconMap = {
  'shield-check': ShieldCheck,
  sun: Sun,
  users: Users,
} as const;

function PillarIcon({ name }: { name: PillarIconName }) {
  const Icon = pillarIconMap[name];
  return <Icon className="h-5 w-5" aria-hidden="true" />;
}

export function ParentingSection() {
  const { parenting } = siteContent;

  return (
    <section
      id="crianza-desarrollo"
      className="border-y border-acento-suave bg-blanco py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-primario uppercase">
              {parenting.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-texto-principal sm:text-3xl lg:text-4xl">
              {parenting.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-texto-secundario sm:text-lg">
              {parenting.intro}
            </p>
          </div>

          <div className="lg:col-span-5">
            <blockquote className="rounded-2xl border-l-4 border-primario bg-crema p-6">
              <p className="font-serif text-base italic leading-relaxed text-texto-principal sm:text-lg">
                {parenting.quote}
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {parenting.pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-2xl border border-acento-suave bg-crema/65 p-6 transition-colors duration-200 hover:border-primario/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secundario/12 text-secundario">
                <PillarIcon name={pillar.icon} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-texto-principal">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-texto-secundario sm:text-base">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
