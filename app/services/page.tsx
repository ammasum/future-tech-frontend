import type { Metadata } from "next";

import { RouteBlueprint } from "@/components/site/route-blueprint";
import { getRouteDefinition } from "@/lib/site";

const route = getRouteDefinition("/services");

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  if (!route) {
    return null;
  }

  return <RouteBlueprint route={route} />;
}
