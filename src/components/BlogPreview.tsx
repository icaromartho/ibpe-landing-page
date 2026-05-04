import { blogPosts } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-ibpe-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Conteúdo técnico para quem atua antes, durante e depois da crise"
          subtitle="Artigos, análises e materiais práticos sobre gestão de emergências, ICS, crise, aviação, simulados e resposta operacional."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group border border-ibpe-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-ibpe-orange/50 hover:shadow-card"
            >
              <span className="inline-flex bg-orange-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-ibpe-orange">
                {post.category}
              </span>
              <h3 className="mt-6 text-xl font-black leading-tight text-ibpe-dark">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ibpe-muted">{post.summary}</p>
              <a
                href="#contato"
                className="focus-ring mt-6 inline-flex rounded-sm text-sm font-black text-ibpe-orange transition group-hover:translate-x-1"
              >
                Ler artigo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
