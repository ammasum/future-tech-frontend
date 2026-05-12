import {
  contactOverview,
  type ContactOverview,
} from "./contact-review";
import {
  equipmentCategories,
  equipmentItems,
  promotionalOffer,
  type EquipmentCategory,
  type EquipmentItem,
  type PromotionalOffer,
} from "./equipment";
import { homePageContent, type HomePageContent } from "./home-content";
import { servicesPageContent, type ServicesPageContent } from "./services-content";
import {
  primaryRoutes,
  siteConfig,
  type SiteConfig,
  type SiteRouteDefinition,
} from "./site";
import {
  workTickets,
  workTrackingStatuses,
  type WorkTicket,
  type WorkTrackingStatus,
} from "./work-tracking";

type ApiEnvelope<T> = {
  data: T;
};

export type SiteMeta = {
  siteConfig: SiteConfig;
  primaryRoutes: SiteRouteDefinition[];
};

export type EquipmentPageContent = {
  siteConfig: SiteConfig;
  categories: EquipmentCategory[];
  items: EquipmentItem[];
  promotionalOffer: PromotionalOffer;
};

export type WorkTrackingOverview = {
  statuses: WorkTrackingStatus[];
};

const fallbackSiteMeta: SiteMeta = {
  siteConfig,
  primaryRoutes,
};

const fallbackEquipmentPageContent: EquipmentPageContent = {
  siteConfig,
  categories: equipmentCategories,
  items: equipmentItems,
  promotionalOffer,
};

const fallbackWorkTrackingOverview: WorkTrackingOverview = {
  statuses: [...workTrackingStatuses],
};

const apiBaseUrl =
  process.env.SITE_API_BASE_URL ??
  process.env.NEXT_PUBLIC_SITE_API_BASE_URL ??
  "http://68.183.83.151:3050/api/v1";

async function fetchFromSiteApi<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as ApiEnvelope<T>;

    return payload.data;
  } catch (error) {
    console.error(`Failed to fetch ${path} from site API`, error);
    return fallback;
  }
}

export function getSiteMeta() {
  return fetchFromSiteApi("/site/meta", fallbackSiteMeta);
}

export function getHomePageContent() {
  return fetchFromSiteApi("/site/home", homePageContent);
}

export function getServicesPageContent() {
  return fetchFromSiteApi("/site/services", servicesPageContent);
}

export function getEquipmentPageContent() {
  return fetchFromSiteApi("/site/equipment", fallbackEquipmentPageContent);
}

export function getContactOverview() {
  return fetchFromSiteApi("/contact/overview", contactOverview);
}

export function getWorkTrackingOverview() {
  return fetchFromSiteApi(
    "/work-tracking/statuses",
    fallbackWorkTrackingOverview.statuses,
  ).then((statuses) => ({ statuses }));
}

export async function getWorkTicket(ticketId: string) {
  const normalizedTicketId = ticketId.trim().toUpperCase();

  if (!normalizedTicketId) {
    return null;
  }

  try {
    const response = await fetch(
      `${apiBaseUrl}/work-tracking/${encodeURIComponent(normalizedTicketId)}`,
      {
        cache: "no-store",
      },
    );

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as ApiEnvelope<WorkTicket>;

    return payload.data;
  } catch (error) {
    console.error("Failed to fetch work ticket from site API", error);

    return (
      workTickets.find(
        (ticket) => ticket.ticketId.toUpperCase() === normalizedTicketId,
      ) ?? null
    );
  }
}
