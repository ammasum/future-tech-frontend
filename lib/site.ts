export type SiteContact = {
  address: string;
  email: string;
  phoneLabel: string;
  phoneHref: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  summary: string;
  contact: SiteContact;
};

export type RouteSection = {
  title: string;
  description: string;
};

export type SiteRouteDefinition = {
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  foundationNote: string;
  sections: RouteSection[];
};

export const siteConfig: SiteConfig = {
  name: "X-prox Telecom",
  tagline: "Network design, setup, and maintenance for modern spaces.",
  summary:
    "A multi-page telecom platform for services, equipment visibility, and live project transparency.",
  contact: {
    address: "Sylhet, Bangladesh",
    email: "hello@xproxtelecom.com",
    phoneLabel: "+880 1712 000 000",
    phoneHref: "tel:+8801712000000",
  },
};

export const primaryRoutes: SiteRouteDefinition[] = [
  {
    href: "/",
    label: "Home",
    eyebrow: "Brand entry",
    title: "Home Page",
    description:
      "The digital front door for the company, combining trust signals, service previews, and conversion paths.",
    foundationNote:
      "This route should introduce the brand quickly, then direct visitors toward services, equipment, or client access.",
    sections: [
      {
        title: "Hero and company positioning",
        description: "Concise value proposition with telecom-focused visual identity.",
      },
      {
        title: "Who We Are",
        description: "Short trust-building overview of expertise and operating focus.",
      },
      {
        title: "Services preview",
        description: "Three snapshots that point visitors toward the full services page.",
      },
      {
        title: "Primary calls to action",
        description: "Quote request, equipment view, and existing client access entry.",
      },
    ],
  },
  {
    href: "/services",
    label: "Services",
    eyebrow: "Offer structure",
    title: "Services Page",
    description:
      "A clear breakdown of the company's networking solutions by client type and deployment context.",
    foundationNote:
      "This route will later expand into detailed content blocks, use cases, and inquiry prompts.",
    sections: [
      {
        title: "Corporate and Business",
        description: "Enterprise support, uptime, server-room care, and managed network operations.",
      },
      {
        title: "Apartment and Standard",
        description: "Residential fiber, mesh Wi-Fi planning, and installation packages.",
      },
      {
        title: "Contractual",
        description: "Short-term, event-based, or project-phase deployments with rapid setup.",
      },
    ],
  },
  {
    href: "/equipment",
    label: "Equipment",
    eyebrow: "Catalog planning",
    title: "Equipment Page",
    description:
      "A hardware-focused route for showcasing the infrastructure behind the company's network delivery.",
    foundationNote:
      "This page should be driven by structured data so the initial mock catalog can later be replaced with API responses.",
    sections: [
      {
        title: "Core hardware",
        description: "Routers, switches, OLTs, and server hardware used in production setups.",
      },
      {
        title: "Connectivity layer",
        description: "ONUs, cables, and accessories grouped by category and purpose.",
      },
      {
        title: "Offer spotlight",
        description: "Promotional pricing or bundled installation packages displayed prominently.",
      },
    ],
  },
  {
    href: "/track-work",
    label: "Track Work",
    eyebrow: "Custom feature",
    title: "Track Work Page",
    description:
      "A client-facing status tool where users search by ticket ID to monitor active networking projects.",
    foundationNote:
      "This is the highest-value custom workflow in the proposal and should be structured for an eventual API-backed ticket lookup.",
    sections: [
      {
        title: "Ticket lookup",
        description: "Single input for ticket ID with empty, error, and success states.",
      },
      {
        title: "Status timeline",
        description: "Progress states: On-site, Progressing, Revision, and Success.",
      },
      {
        title: "Project snapshot",
        description: "Useful context such as project type, latest update, and assigned notes.",
      },
    ],
  },
  {
    href: "/contact",
    label: "Contact & Review",
    eyebrow: "Trust layer",
    title: "Contact and Review Page",
    description:
      "The credibility-focused route combining contact details, location, certificates, partner logos, and client feedback.",
    foundationNote:
      "This page should balance conversion and authority by bringing logistics, proof, and social validation into one place.",
    sections: [
      {
        title: "Location and communication",
        description: "Map area, office address, phone, and email touchpoints.",
      },
      {
        title: "Authority signals",
        description: "Certificates, affiliations, and partner logos displayed cleanly.",
      },
      {
        title: "Reviews and gallery",
        description: "Client comments, recommendations, and images from past work.",
      },
    ],
  },
];

export const foundationLayers = [
  {
    title: "Design tokens",
    description:
      "Shared color, spacing, typography, radius, and shadow decisions to keep future pages visually aligned.",
  },
  {
    title: "Route blueprints",
    description:
      "Each proposed page now has an explicit route, a content purpose, and section-level planning.",
  },
  {
    title: "Reusable shells",
    description:
      "Page-level and section-level wrappers reduce repetition before detailed page content is built.",
  },
];

export const nextPhaseChecklist = [
  "Step 2 builds the shared navbar, mobile menu, and footer.",
  "Step 3 turns the Home route into the full marketing landing page.",
  "Step 4 through Step 8 fill in the remaining page content.",
];

export function getRouteDefinition(pathname: string) {
  return primaryRoutes.find((route) => route.href === pathname);
}
