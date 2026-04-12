import type { Metadata } from "next";

import { RouteBlueprint } from "@/components/site/route-blueprint";
import { getRouteDefinition } from "@/lib/site";

const route = getRouteDefinition("/contact");

export const metadata: Metadata = {
  title: "Contact & Review",
};

export default function ContactPage() {
  if (!route) {
    return null;
  }

  return <RouteBlueprint route={route} />;
}
