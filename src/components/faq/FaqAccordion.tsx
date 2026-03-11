"use client";

import { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */
interface FaqItem {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
}

interface Category {
  id: string;
  label: string;
}

/* ─────────────────────────────────────────────────────────
   CUSTOM HOOK — IntersectionObserver scroll reveal
───────────────────────────────────────────────────────── */
function useInView(
  threshold = 0.12,
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const categories: Category[] = [
  { id: "all", label: "Tout voir" },
  { id: "together", label: "Travailler ensemble" },
  { id: "website", label: "Création de sites" },
  { id: "seo", label: "Optimisation & SEO" },
  { id: "pricing", label: "Tarifs & délais" },
  { id: "ai", label: "IA & automatisation" },
  { id: "support", label: "Support & révisions" },
];

const faqItems: FaqItem[] = [
  /* ── Travailler ensemble ── */
  {
    id: "q1",
    question: "Avec quel type d'entreprises travaillez-vous ?",
    answer:
      "Je travaille principalement avec des TPE et PME — artisans, restaurateurs, professions libérales, commerces locaux — qui veulent développer leur présence en ligne sérieusement. Mon approche est taillée pour les structures sans équipe technique interne : un interlocuteur unique, réactif et autonome du début à la fin.",
    categoryId: "together",
  },
  {
    id: "q2",
    question: "Travaillez-vous uniquement avec des entreprises locales ?",
    answer:
      "Non. J'interviens pour des entreprises partout en France, entièrement à distance. La dimension \"locale\" de mon positionnement concerne le référencement local — Google Maps, fiches Google Business, Local Pack — une spécialité que j'applique aussi bien pour une boulangerie orléanaise que pour un cabinet à Paris.",
    categoryId: "together",
  },
  {
    id: "q3",
    question: "De quoi avez-vous besoin avant de démarrer un projet ?",
    answer:
      "Il me faut comprendre votre activité, vos objectifs et vos clients cibles. Si vous avez déjà un site, un accès me permet de l'analyser directement. Un bref échange par message ou en appel suffit pour tout cadrer. Je rédige ensuite un devis précis avec périmètre, délais et prix fixe — pas de surprises.",
    categoryId: "together",
  },
  {
    id: "q4",
    question: "Comment se déroule la communication pendant le projet ?",
    answer:
      "Principalement par messagerie (email, Telegram ou Malt) avec des points d'étape réguliers. Je livre des versions intermédiaires à valider avant d'avancer, et je reste disponible pour répondre rapidement. Pas de réunions inutiles — mais une vraie disponibilité quand vous en avez besoin.",
    categoryId: "together",
  },

  /* ── Création de sites ── */
  {
    id: "q5",
    question: "Créez-vous des sites web de zéro ?",
    answer:
      "Oui, c'est l'une de mes prestations principales. Je conçois et développe des sites sur mesure — sans templates génériques — en me concentrant sur la performance, le design et le référencement naturel dès la conception. Le résultat : un site rapide, responsive, et taillé pour convertir des visiteurs en clients.",
    categoryId: "website",
  },
  {
    id: "q6",
    question: "Pouvez-vous refondre un site existant ?",
    answer:
      "Absolument. Si votre site est lent, vieillissant, peu visible sur Google ou mal adapté au mobile, une refonte a souvent un impact immédiat. Je commence par un audit pour identifier précisément les freins avant de proposer une solution. La refonte peut être totale ou ciblée sur les points les plus critiques.",
    categoryId: "website",
  },
  {
    id: "q7",
    question: "Puis-je modifier le site moi-même après la livraison ?",
    answer:
      "Oui, si c'est une priorité pour vous. Je peux intégrer une interface d'administration simple (CMS headless ou solution dédiée) qui vous permet de modifier textes, images et contenus sans toucher au code. Vous restez maître de votre contenu à tout moment, sans dépendre de moi pour chaque mise à jour mineure.",
    categoryId: "website",
  },
  {
    id: "q8",
    question: "Travaillez-vous avec Shopify ou des solutions e-commerce ?",
    answer:
      "Je travaille uniquement avec Shopify pour les projets e-commerce. C'est la plateforme sur laquelle je suis spécialisé et avec laquelle je livre des boutiques performantes et bien optimisées.",
    categoryId: "website",
  },

  /* ── Optimisation & SEO ── */
  {
    id: "q9",
    question: "Proposez-vous du SEO technique ?",
    answer:
      "Oui. Le SEO technique fait partie intégrante de mon travail : structure des URL, balisage sémantique HTML, Core Web Vitals, sitemap XML, données structurées Schema.org, optimisation des images, redirections propres... Je traite aussi le référencement local — fiche Google Business, Local Pack — pour les entreprises qui ciblent une zone géographique précise.",
    categoryId: "seo",
  },
  {
    id: "q10",
    question:
      "Pouvez-vous améliorer la vitesse et les performances d'un site ?",
    answer:
      "C'est l'une de mes spécialités. Un site lent perd des visiteurs et descend dans les classements Google — les deux à la fois. J'audite les causes de lenteur (images non compressées, scripts bloquants, hébergement sous-dimensionné...) et j'applique les corrections avec un impact mesurable sur le score PageSpeed et l'expérience réelle des utilisateurs.",
    categoryId: "seo",
  },

  /* ── Tarifs & délais ── */
  {
    id: "q11",
    question: "Combien coûte un site web ?",
    answer:
      "Le prix dépend du périmètre et de la complexité. Un site vitrine sur mesure démarre généralement à partir de 290 €. Une refonte complète ou un projet avec des fonctionnalités avancées peut aller au-delà. Je travaille avec un devis précis et un prix fixe — pas de facturation à l'heure, pas de surprises en cours de route. Devis gratuit et sans engagement.",
    categoryId: "pricing",
  },
  {
    id: "q12",
    question: "Proposez-vous des forfaits à prix fixe ?",
    answer:
      "Oui, c'est mon mode de fonctionnement habituel. Chaque projet est cadré avec un devis clair précisant le périmètre exact, le prix total et les délais. Vous savez dès le départ ce que vous payez et ce que vous recevez. Il n'y a pas de surprises et pas d'heures supplémentaires facturées.",
    categoryId: "pricing",
  },
  {
    id: "q13",
    question: "Combien de temps dure un projet en général ?",
    answer:
      "Pour un site vitrine, comptez entre 2 et 4 semaines selon la complexité du design et le nombre de pages. Une refonte complète prend 3 à 6 semaines. Les missions d'optimisation SEO ou de performance sont souvent réalisées en 1 à 2 semaines. Je communique toujours un calendrier précis au démarrage — et je le tiens.",
    categoryId: "pricing",
  },

  /* ── IA & automatisation ── */
  {
    id: "q14",
    question: "Pouvez-vous intégrer l'IA dans un site ou un processus métier ?",
    answer:
      "Oui. Je conçois des intégrations pratiques basées sur l'IA : chatbots pour qualifier des demandes entrantes, génération automatique de contenus ciblés, réponses clients intelligentes, outils de devis ou de recommandations automatiques... L'objectif est toujours concret : gagner du temps sur des tâches répétitives ou améliorer l'expérience de vos clients.",
    categoryId: "ai",
  },
  {
    id: "q15",
    question: "Quels types d'outils IA pouvez-vous créer ?",
    answer:
      "Assistants conversationnels adaptés à votre activité, générateurs de contenu ciblé, automatisations connectées à votre CRM ou vos emails, tableaux de bord intelligents, agents capables de traiter des demandes clients en votre absence... Chaque outil est conçu pour votre cas spécifique — pas un chatbot générique copié-collé.",
    categoryId: "ai",
  },

  /* ── Support & révisions ── */
  {
    id: "q16",
    question: "Assurez-vous un suivi après la mise en ligne ?",
    answer:
      "Oui. Je propose des formules de maintenance mensuelle pour les clients qui le souhaitent : mises à jour techniques, corrections, suivi des performances SEO et rapports mensuels. Et même sans contrat de suivi formel, je reste disponible après la livraison. Vous ne serez jamais laissé seul face à un problème technique.",
    categoryId: "support",
  },
];

/* ─────────────────────────────────────────────────────────
   SINGLE ACCORDION ITEM
───────────────────────────────────────────────────────── */
function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.45s ease ${index * 0.055}s, transform 0.45s ease ${index * 0.055}s`,
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full text-left group flex items-start gap-5 rounded-2xl border px-6 py-5 transition-all duration-300 ${
          isOpen
            ? "border-blue-300 bg-blue-50 shadow-sm"
            : "border-gray-200 bg-white hover:border-blue-200 hover:bg-gray-50"
        }`}
      >
        {/* Plus / cross icon */}
        <span
          className={`mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-250 ${
            isOpen
              ? "bg-blue-600 shadow-md shadow-blue-600/30"
              : "bg-gray-100 group-hover:bg-gray-200"
          }`}
        >
          <svg
            className={`h-[11px] w-[11px] ${isOpen ? "text-white" : "text-gray-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.22s ease",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>

        <div className="flex-1 min-w-0">
          {/* Question */}
          <p
            className={`text-[0.92rem] font-semibold leading-snug transition-colors duration-200 lg:text-[0.97rem] ${
              isOpen
                ? "text-gray-900"
                : "text-gray-700 group-hover:text-gray-900"
            }`}
          >
            {item.question}
          </p>

          {/* Answer — CSS height animation via max-height */}
          <div
            style={{
              maxHeight: isOpen ? "480px" : "0px",
              opacity: isOpen ? 1 : 0,
              overflow: "hidden",
              transition: isOpen
                ? "max-height 0.38s cubic-bezier(0.04,0.62,0.23,0.98), opacity 0.28s ease 0.06s"
                : "max-height 0.28s cubic-bezier(0.04,0.62,0.23,0.98), opacity 0.18s ease",
            }}
          >
            <p className="mt-4 pb-1 text-sm leading-relaxed text-gray-500 lg:text-[0.92rem]">
              {item.answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   EXPORTED COMPONENT — category tabs + accordion list
───────────────────────────────────────────────────────── */
export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.categoryId === activeCategory);

  function handleCategoryChange(id: string) {
    setActiveCategory(id);
    setOpenId(null);
    setFadeKey((k) => k + 1);
  }

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div>
      {/* ── Category tab bar ── */}
      <div className="relative mb-12 -mx-1">
        <div className="relative flex flex-wrap gap-x-1 gap-y-1 border-b border-gray-200 pb-px">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative flex-shrink-0 px-4 pb-3 pt-1 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── FAQ item list — fade on category change via key ── */}
      <div
        key={fadeKey}
        className="space-y-3"
        style={{
          animation: "faqFadeIn 0.22s ease forwards",
        }}
      >
        {filtered.map((item, index) => (
          <FaqItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>

      {/* Inline keyframe for list fade-in on category switch */}
      <style>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}
