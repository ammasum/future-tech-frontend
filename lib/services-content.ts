import type { SiteConfig } from "./site";
import { siteConfig } from "./site";

export type ServiceCategory = {
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  benefits: string[];
  useCases: string[];
};

export type DeliveryPrinciple = {
  title: string;
  description: string;
};

export type InquiryOption = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type ServicesPageContent = {
  siteConfig: SiteConfig;
  serviceCategories: ServiceCategory[];
  deliveryPrinciples: DeliveryPrinciple[];
  inquiryOptions: InquiryOption[];
};

export const servicesPageContent: ServicesPageContent = {
  siteConfig,
  serviceCategories: [
    {
      eyebrow: "Corporate & Business",
      title: "Enterprise networking for uptime-sensitive operations",
      description:
        "Structured support for offices, managed business environments, campuses, and operational floors where downtime disrupts real work.",
      audience:
        "Best for offices, shared workspaces, institutions, and managed commercial sites.",
      benefits: [
        "Enterprise maintenance planning and service continuity support",
        "Server room, backbone, and access-layer coordination",
        "Practical escalation paths for performance and stability issues",
      ],
      useCases: [
        "Business internet distribution across multiple departments",
        "Server room setup tied to managed switching and routing",
        "Operational networks that need stronger maintenance discipline",
      ],
    },
    {
      eyebrow: "Apartment & Standard",
      title: "Residential fiber and Wi-Fi coverage built for modern living",
      description:
        "Connectivity packages for apartment buildings, towers, gated properties, and high-end residential users who need stable coverage across real layouts.",
      audience:
        "Best for multi-unit buildings, premium homes, and apartment operators.",
      benefits: [
        "Fiber-ready setup and in-building distribution planning",
        "Mesh Wi-Fi coverage strategies for dead-zone reduction",
        "Installation patterns designed for daily residential usage",
      ],
      useCases: [
        "Apartment-wide connectivity with floor-by-floor access planning",
        "Home and villa Wi-Fi optimization with mesh coverage",
        "Residential retrofits where signal quality is inconsistent",
      ],
    },
    {
      eyebrow: "Contractual",
      title: "Fast deployment for short-term and project-phase networking",
      description:
        "Flexible network delivery for event operations, temporary work sites, and construction or project phases where time and adaptability matter most.",
      audience:
        "Best for events, temporary operations, pop-up sites, and phased projects.",
      benefits: [
        "Rapid deployment planning for changing field conditions",
        "High-capacity temporary networking with controlled scope",
        "Clearer coordination between setup, revision, and handover",
      ],
      useCases: [
        "Event connectivity with temporary backbone and access coverage",
        "Construction-phase network support for site operations",
        "Short-duration technical setups that still need dependable delivery",
      ],
    },
  ],
  deliveryPrinciples: [
    {
      title: "Scope first",
      description:
        "We start with the operating environment, capacity need, and physical layout before choosing how the network should be delivered.",
    },
    {
      title: "Hardware aligned",
      description:
        "Service design stays connected to the equipment layer so routers, switches, fiber endpoints, and accessories match the actual deployment.",
    },
    {
      title: "Trackable execution",
      description:
        "Active work is positioned to move through status-based tracking instead of leaving clients blind during installation and revision.",
    },
  ],
  inquiryOptions: [
    {
      title: "Need a service quote?",
      description:
        "Start with your environment type, expected scale, and the deployment timeline so the inquiry stays specific.",
      href: "/contact",
      label: "Request a quote",
    },
    {
      title: "Review the hardware stack",
      description:
        "Browse the equipment direction behind the service offering before moving into deployment planning.",
      href: "/equipment",
      label: "View equipment",
    },
    {
      title: "Already an active client?",
      description:
        "Return through the portal or jump into work tracking for live installations and follow-up.",
      href: "/login",
      label: "Client access",
    },
  ],
};
