import type { Metadata } from "next";

import { RouteBlueprint } from "@/components/site/route-blueprint";
import { getRouteDefinition } from "@/lib/site";

const route = getRouteDefinition("/track-work");

export const metadata: Metadata = {
  title: "Track Work",
};

export default function TrackWorkPage() {
  if (!route) {
    return null;
  }

  return <RouteBlueprint route={route} />;
}
