import type { Metadata } from "next";

import { RouteBlueprint } from "@/components/site/route-blueprint";
import { getRouteDefinition } from "@/lib/site";

const route = getRouteDefinition("/login");

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  if (!route) {
    return null;
  }

  return <RouteBlueprint route={route} />;
}
