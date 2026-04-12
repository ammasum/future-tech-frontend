import type { Metadata } from "next";

import { RouteBlueprint } from "@/components/site/route-blueprint";
import { getRouteDefinition } from "@/lib/site";

const route = getRouteDefinition("/equipment");

export const metadata: Metadata = {
  title: "Equipment",
};

export default function EquipmentPage() {
  if (!route) {
    return null;
  }

  return <RouteBlueprint route={route} />;
}
