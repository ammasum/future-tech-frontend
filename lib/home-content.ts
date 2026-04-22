import type { SiteConfig } from "./site";
import { siteConfig } from "./site";

export type HeroHighlight = {
  title: string;
  description: string;
};

export type ServiceLane = {
  label: string;
  summary: string;
};

export type OperatingModelItem = {
  title: string;
  description: string;
};

export type ServiceHighlight = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export type DeliveryFlowItem = {
  step: string;
  title: string;
  description: string;
};

export type HomePageContent = {
  siteConfig: SiteConfig;
  heroHighlights: HeroHighlight[];
  serviceLanes: ServiceLane[];
  expertiseAreas: string[];
  operatingModel: OperatingModelItem[];
  serviceHighlights: ServiceHighlight[];
  deliveryFlow: DeliveryFlowItem[];
};

export const homePageContent: HomePageContent = {
  siteConfig,
  heroHighlights: [
    {
      title: "Enterprise-ready planning",
      description:
        "Structured network design, server room coordination, and uptime-focused rollout planning.",
    },
    {
      title: "Residential fiber delivery",
      description:
        "Apartment, tower, and premium home connectivity with practical mesh Wi-Fi coverage.",
    },
    {
      title: "Visible project progress",
      description:
        "Clients get a cleaner path into delivery status through ticket-based work tracking.",
    },
  ],
  serviceLanes: [
    {
      label: "Corporate",
      summary: "Business networking, maintenance, and server room care.",
    },
    {
      label: "Apartment",
      summary: "Fiber and mesh Wi-Fi setups for modern residential sites.",
    },
    {
      label: "Contractual",
      summary: "Short-term high-capacity deployments for project-based work.",
    },
  ],
  expertiseAreas: [
    "Network design and site planning",
    "Fiber rollout and structured cabling",
    "Mesh Wi-Fi and access distribution",
    "Equipment selection and deployment staging",
    "Maintenance coordination and service follow-up",
    "Ticket visibility for active client work",
  ],
  operatingModel: [
    {
      title: "Plan",
      description:
        "We map the technical scope, hardware fit, and field workflow before installation begins.",
    },
    {
      title: "Deploy",
      description:
        "Teams move from infrastructure setup to configuration with clearer service alignment.",
    },
    {
      title: "Maintain",
      description:
        "Ongoing support stays tied to equipment visibility and a trackable service process.",
    },
  ],
  serviceHighlights: [
    {
      eyebrow: "Corporate & Business",
      title: "Networks designed for uptime-critical environments",
      description:
        "For offices, campuses, and managed business spaces that need structured deployment and dependable maintenance.",
      points: [
        "Enterprise maintenance workflows",
        "Server room and backbone coordination",
        "Operational continuity support",
      ],
    },
    {
      eyebrow: "Apartment & Standard",
      title: "Reliable fiber and Wi-Fi for residential properties",
      description:
        "For apartments, towers, and premium home users who need stronger in-building connectivity.",
      points: [
        "Fiber-ready access planning",
        "Mesh Wi-Fi coverage strategies",
        "Practical setup for multi-unit environments",
      ],
    },
    {
      eyebrow: "Contractual",
      title: "Flexible deployments for fast-moving project sites",
      description:
        "For events, temporary operations, and phased projects that need high-capacity network delivery on a tighter timeline.",
      points: [
        "Short-term deployment planning",
        "Fast installation coordination",
        "Temporary but dependable network coverage",
      ],
    },
  ],
  deliveryFlow: [
    {
      step: "01",
      title: "Define the scope",
      description:
        "Start with the service context, technical needs, and the kind of environment being served.",
    },
    {
      step: "02",
      title: "Match the hardware",
      description:
        "Review the equipment stack and align infrastructure choices to the deployment plan.",
    },
    {
      step: "03",
      title: "Track delivery",
      description:
        "Monitor active work with ticket-based updates as installation and configuration move forward.",
    },
    {
      step: "04",
      title: "Access support",
      description:
        "Clients return through the portal to review status, history, and the next support action.",
    },
  ],
};
