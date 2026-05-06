/* ═══════════════════════════════════════════════════════
   CENTRAL SERVICES DATA SOURCE
   Single source of truth for all service content.
   Used by: /services, /services/[slug], homepage ServicesSection.
════════════════════════════════════════════════════════ */

export type ServiceFeature = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  /** One-line value proposition shown under the title */
  tagline: string;
  /** 1–2 sentence summary for cards and meta descriptions */
  shortDescription: string;
  /** Array of paragraphs for the full service page */
  fullDescription: string[];
  /** SVG <path> `d` attribute strings rendered as the service icon */
  iconPaths: string[];
  features: ServiceFeature[];
  benefits: string[];
  ctaText: string;
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  /* ── 1. Google Business Profile ────────────────────────────────────────── */
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    tagline: "Soyez visible là où vos clients vous cherchent",
    shortDescription:
      "Optimisation complète de votre fiche Google Business Profile à Orléans pour apparaître dans le pack local Google Maps.",
    fullDescription: [
      "Votre fiche Google Business Profile est souvent le premier — et parfois le seul — point de contact entre votre entreprise et un client local. Une fiche mal configurée (mauvaises catégories, photos absentes, horaires incorrects) vous fait perdre des appels chaque jour, en silence.",
      "J'audite, restructure et optimise intégralement votre profil : catégories principales et secondaires, attributs, services détaillés, description avec mots-clés locaux, stratégie photo, posts réguliers et gestion des questions-réponses. Résultat : une fiche qui convertit les recherches locales en contacts réels.",
    ],
    iconPaths: [
      "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z",
    ],
    features: [
      {
        title: "Audit complet",
        description:
          "Analyse de chaque champ : catégories, attributs, services, Q&A, photos et avis existants.",
      },
      {
        title: "Optimisation ciblée",
        description:
          "Mots-clés locaux intégrés naturellement dans la description, les posts et les réponses aux avis.",
      },
      {
        title: "Stratégie photos",
        description:
          "Guide de contenu visuel pour renforcer la crédibilité et le taux de clics sur votre fiche.",
      },
      {
        title: "Suivi mensuel",
        description:
          "Rapport des métriques clés : vues, appels générés, demandes d'itinéraire, clics vers votre site.",
      },
    ],
    benefits: [
      "Apparaître dans le « Pack 3 » Google Maps",
      "Plus d'appels entrants depuis Google",
      "Meilleure conversion des recherches en contacts",
      "Crédibilité renforcée face aux concurrents",
    ],
    ctaText: "Optimiser ma fiche Google",
    seo: {
      title: "Google Business Profile Orléans — Optimisation Google Maps",
      description:
        "Optimisation de fiche Google Business Profile à Orléans (Orleans) pour gagner en visibilité sur Google Maps et générer plus d'appels clients.",
    },
  },

  /* ── 2. SEO Local ──────────────────────────────────────────────────────── */
  {
    slug: "seo-local",
    title: "SEO Local à Orléans",
    tagline: "Dominez les résultats Google dans votre zone",
    shortDescription:
      "Stratégie de référencement local à Orléans pour attirer des clients qualifiés dans votre zone de chalandise.",
    fullDescription: [
      "Le SEO local consiste à optimiser votre présence en ligne pour apparaître en priorité lorsque des clients proches de vous recherchent vos services. C'est le levier le plus rentable pour les TPE/PME avec une clientèle de proximité — sans dépendre d'un budget publicitaire permanent.",
      "J'analyse votre situation actuelle, identifie les mots-clés locaux à fort potentiel, et déploie une stratégie durable : optimisation on-page, cohérence des citations locales (NAP), maillage interne et création de contenu géolocalisé. L'objectif est un positionnement solide et pérenne sur votre territoire.",
    ],
    iconPaths: [
      "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    ],
    features: [
      {
        title: "Audit SEO local",
        description:
          "Analyse complète de votre positionnement actuel et identification des opportunités de croissance.",
      },
      {
        title: "Mots-clés locaux",
        description:
          "Recherche et ciblage des expressions réellement utilisées par vos clients à Orléans et alentours.",
      },
      {
        title: "Optimisation on-page",
        description:
          "Balises, contenu, structure sémantique — chaque page travaillée pour les moteurs de recherche.",
      },
      {
        title: "Citations locales",
        description:
          "Cohérence de vos informations (NAP) sur les annuaires et plateformes locales prioritaires.",
      },
    ],
    benefits: [
      "Visibilité accrue sur les requêtes locales",
      "Trafic qualifié depuis votre zone de chalandise",
      "Résultats durables sans dépendre de la publicité",
      "Avantage concurrentiel sur votre territoire",
    ],
    ctaText: "Améliorer mon SEO local",
    seo: {
      title: "SEO Local Orléans — Référencement local TPE/PME",
      description:
        "Référencement local pour TPE/PME à Orléans (Orleans) : audit SEO, mots-clés locaux et optimisation on-page pour mieux vous positionner sur Google.",
    },
  },

  /* ── 3. Optimisation Site Web ──────────────────────────────────────────── */
  {
    slug: "optimisation-site-web",
    title: "Optimisation de Site Web à Orléans",
    tagline: "Votre site, premier commercial 24h/24",
    shortDescription:
      "Audit et optimisation de site internet à Orléans pour la performance mobile, la vitesse de chargement et la conversion.",
    fullDescription: [
      "La majorité de vos clients potentiels vous cherchent depuis leur téléphone. Un site lent, mal structuré ou difficile à naviguer sur mobile représente une perte directe de clients — souvent sans que vous vous en rendiez compte.",
      "J'audite votre site existant et interviens sur les points bloquants : vitesse de chargement (Core Web Vitals), adaptation mobile, clarté du message et facilité de contact. L'objectif est que chaque visiteur puisse vous appeler ou vous écrire en moins de 3 clics, depuis n'importe quel appareil.",
    ],
    iconPaths: [
      "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h1.5",
    ],
    features: [
      {
        title: "Audit de performance",
        description:
          "Analyse Core Web Vitals, temps de chargement, diagnostics techniques et points de friction.",
      },
      {
        title: "Optimisation mobile",
        description:
          "Adaptation complète pour une expérience fluide et rapide sur tous les appareils.",
      },
      {
        title: "Clarté du message",
        description:
          "Révision des textes et de la structure pour un parcours client immédiatement compréhensible.",
      },
      {
        title: "CTAs & conversion",
        description:
          "Placement stratégique des boutons d'action (appel, formulaire, itinéraire) pour maximiser le contact.",
      },
    ],
    benefits: [
      "Site rapide sur mobile et desktop",
      "Taux de rebond réduit significativement",
      "Plus de prises de contact depuis le site",
      "Meilleur positionnement Google (Core Web Vitals)",
    ],
    ctaText: "Optimiser mon site",
    seo: {
      title: "Optimisation Site Web Orléans — Vitesse, Mobile, Conversion",
      description:
        "Optimisation de site web et site internet à Orléans : Core Web Vitals, UX mobile et conversion pour transformer plus de visiteurs en demandes de contact.",
    },
  },

  /* ── 4. E-Réputation & Avis ────────────────────────────────────────────── */
  {
    slug: "gestion-reputation",
    title: "E-Réputation & Avis",
    tagline: "Construisez la confiance qui convertit",
    shortDescription:
      "Stratégie de gestion des avis Google à Orléans pour bâtir une réputation locale solide et rassurante.",
    fullDescription: [
      "Les avis Google sont l'un des facteurs les plus influents dans la décision d'un client local. Un profil sans avis récents — ou pire, avec des avis négatifs sans réponse — fait fuir les clients avant même qu'ils ne vous contactent.",
      "Je vous aide à mettre en place une stratégie simple et éthique pour collecter des avis réguliers, gérer les retours négatifs constructivement et utiliser votre réputation comme levier de conversion et de référencement local.",
    ],
    iconPaths: [
      "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
    ],
    features: [
      {
        title: "Audit e-réputation",
        description:
          "État des lieux complet de vos avis sur Google et autres plateformes clés (Pages Jaunes, Tripadvisor…).",
      },
      {
        title: "Stratégie de collecte",
        description:
          "Méthode simple et éthique pour encourager vos clients satisfaits à laisser un avis spontanément.",
      },
      {
        title: "Gestion des réponses",
        description:
          "Réponses professionnelles aux avis positifs et négatifs, avec un ton adapté à votre secteur.",
      },
      {
        title: "Suivi & alertes",
        description:
          "Monitoring de votre réputation et notification en cas de nouvel avis important à traiter.",
      },
    ],
    benefits: [
      "Note Google améliorée et avis plus récents",
      "Confiance renforcée pour les nouveaux clients",
      "Impact positif sur le classement local",
      "Différenciation nette face aux concurrents",
    ],
    ctaText: "Améliorer ma réputation",
    seo: {
      title: "Avis Google Orléans — Gestion e-réputation locale",
      description:
        "Gestion des avis Google à Orléans (Orleans) pour TPE/PME : collecte éthique, réponses professionnelles et suivi de votre e-réputation locale.",
    },
  },
  /* ── 5. Création de Sites Web ──────────────────────────────────────────── */
  {
    slug: "creation-site-web",
    title: "Création de Sites Web à Orléans",
    tagline: "Un site vitrine clair, rapide et orienté conversion",
    shortDescription:
      "Création de site internet et site vitrine à Orléans pour TPE/PME : design soigné, performance mobile et structure SEO-ready dès la mise en ligne.",
    fullDescription: [
      "Votre site est souvent la première impression de votre entreprise. Un design daté, une navigation confuse ou un site lent font fuir les prospects avant même le premier contact. Un bon site doit inspirer confiance en quelques secondes et guider naturellement vers l'action.",
      "Je crée des sites vitrines sur mesure pensés pour convertir : architecture claire, textes orientés client, design cohérent avec votre image de marque, version mobile irréprochable et fondations SEO solides. Vous obtenez un site professionnel, facile à maintenir, qui soutient réellement votre développement local.",
    ],
    iconPaths: [
      "M3.75 4.5h16.5A1.5 1.5 0 0 1 21.75 6v12a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 18V6a1.5 1.5 0 0 1 1.5-1.5Z",
      "M2.25 8.25h19.5",
      "m9.75 12 2.25 2.25L14.25 12",
      "m12 14.25 2.25 2.25",
    ],
    features: [
      {
        title: "Arborescence stratégique",
        description:
          "Structure des pages et parcours utilisateur conçus pour rendre votre offre lisible et persuasive.",
      },
      {
        title: "Design sur mesure",
        description:
          "Interface moderne, cohérente avec votre identité visuelle et adaptée aux attentes de vos clients.",
      },
      {
        title: "Performance & mobile",
        description:
          "Site rapide, responsive et optimisé Core Web Vitals pour une expérience fluide sur smartphone.",
      },
      {
        title: "Base SEO prête",
        description:
          "Balises, maillage interne, hiérarchie des contenus et bonnes pratiques techniques intégrées dès le départ.",
      },
    ],
    benefits: [
      "Image de marque plus crédible en ligne",
      "Plus de demandes de contact qualifiées",
      "Meilleure conversion sur mobile",
      "Fondations solides pour le SEO local",
    ],
    ctaText: "Créer mon site web",
    seo: {
      title: "Création de Sites Web à Orléans — Sitnikov Web",
      description:
        "Création de site web, site internet et site vitrine à Orléans (Orleans) pour TPE/PME : design moderne, SEO technique et conversion orientée résultats.",
    },
  },
  /* ── 6. Optimisation IA ────────────────────────────────────────────────── */
  {
    slug: "optimisation-ia",
    title: "Optimisation IA pour TPE/PME à Orléans",
    tagline: "Intégrez l'intelligence artificielle dans votre quotidien",
    shortDescription:
      "Accompagnement IA à Orléans pour intégrer les bons outils dans votre activité : contenu, automatisation, service client et productivité.",
    fullDescription: [
      "L'intelligence artificielle n'est plus réservée aux grandes entreprises. Aujourd'hui, les TPE/PME qui intègrent les bons outils IA dans leur quotidien gagnent un avantage concurrentiel réel — moins de temps perdu sur les tâches répétitives, plus de cohérence dans leur communication, et une capacité à produire davantage avec les mêmes ressources.",
      "Je vous aide à identifier les outils adaptés à votre secteur, à les configurer correctement, et à former votre équipe à les utiliser efficacement. De la génération de contenu SEO à l'automatisation des réponses clients, chaque usage est choisi pour un impact concret et mesurable sur votre activité.",
    ],
    iconPaths: [
      "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
      "M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
    ],
    features: [
      {
        title: "Audit des processus",
        description:
          "Identification des tâches répétitives dans votre activité où l'IA peut générer un gain de temps immédiat.",
      },
      {
        title: "Sélection des outils",
        description:
          "Recommandation des outils IA adaptés à votre secteur, votre budget et vos usages réels (ChatGPT, Claude, Perplexity, Zapier…).",
      },
      {
        title: "Contenu & SEO assisté par IA",
        description:
          "Mise en place d'un workflow pour produire des textes, fiches services et posts Google optimisés plus rapidement.",
      },
      {
        title: "Formation & accompagnement",
        description:
          "Sessions pratiques pour que vous et votre équipe maîtrisiez les outils choisis de façon autonome.",
      },
    ],
    benefits: [
      "Gain de temps sur la production de contenu",
      "Automatisation des réponses et relances clients",
      "Meilleure cohérence dans la communication",
      "Avantage concurrentiel face aux acteurs moins digitalisés",
    ],
    ctaText: "Intégrer l'IA dans mon activité",
    seo: {
      title: "Automatisation IA Orléans — Accompagnement TPE/PME",
      description:
        "Accompagnement en automatisation IA à Orléans (Orleans) pour TPE/PME : choix d'outils, workflows de contenu SEO et formation opérationnelle.",
    },
  },
];

/* ── Utility helpers ──────────────────────────────────────────────────────── */

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
