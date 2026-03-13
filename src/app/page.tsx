import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">

      {/* SECTION HERO : L'accroche principale */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Emplacement pour ton logo */}
        <div className="mb-8">
          <div className="w-24 h-24 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center border border-[var(--color-primary)]/30">
            {/* Remplacer par : <Image src="/logo.png" width={96} height={96} alt="FluxElectrique" /> */}
            <span className="text-3xl font-bold text-[var(--color-primary)]">FÉ</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          L&apos;ingénierie informatique <br className="hidden md:block" />
          <span className="text-[var(--color-primary)]">sur mesure.</span>
        </h1>

        <p className="text-xl text-[var(--text-muted)] max-w-2xl mb-10">
          De la carte mère au cloud. Développement d&apos;applications web et mobiles, infrastructures sécurisées et expertise matérielle.
        </p>

        <div className="flex gap-4">
          <Link
            href="#contact"
            className="px-8 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Discuter d&apos;un projet
          </Link>
          <Link
            href="#services"
            className="px-8 py-3 rounded-md bg-[var(--bg-card)] border border-slate-700 text-white font-medium hover:border-[var(--text-muted)] transition-colors"
          >
            Mes expertises
          </Link>
        </div>
      </section>

      {/* SECTION SERVICES : Tes 3 piliers */}
      <section id="services" className="w-full max-w-6xl px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Pilier 1 : Dev */}
        <FadeIn delay={0.1}>
        <div className="bg-[var(--bg-card)] p-8 rounded-xl border border-slate-800 hover:border-[var(--color-primary)]/50 transition-colors h-full flex flex-col">
          <div className="text-3xl mb-4 text-[var(--color-accent)]">💻</div>
          <h2 className="text-xl font-bold mb-3">Ingénierie Logicielle</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Création d&apos;applications web ultra-rapides (NextJS) et d&apos;applications mobiles natives (Android / Kotlin) pensées pour la performance.
          </p>
        </div>
        </FadeIn>

        {/* Pilier 2 : Infra */}
        <FadeIn delay={0.3}>
        <div className="bg-[var(--bg-card)] p-8 rounded-xl border border-slate-800 hover:border-[var(--color-primary)]/50 transition-colors h-full flex flex-col">
          <div className="text-3xl mb-4 text-[var(--color-accent)]">🔒</div>
          <h2 className="text-xl font-bold mb-3">Infrastructure & Sécurité</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Déploiement de serveurs virtuels (Proxmox), conteneurisation (Docker) et création de réseaux chiffrés.
          </p>
        </div>
        </FadeIn>

        {/* Pilier 3 : Hardware */}
        <FadeIn delay={0.5}>
        <div className="bg-[var(--bg-card)] p-8 rounded-xl border border-slate-800 hover:border-[var(--color-primary)]/50 transition-colors h-full flex flex-col">
          <div className="text-3xl mb-4 text-[var(--color-accent)]">⚙️</div>
          <h2 className="text-xl font-bold mb-3">Expertise Matérielle</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Diagnostic matériel avancé, micro-soudure de composants de surface (CMS) et réparation d&apos;équipements informatiques.
          </p>
        </div>
        </FadeIn>

      </section>

    </main>
  );
}
