export type EquipmentCategory = {
  slug: string;
  title: string;
  description: string;
};

export type EquipmentItem = {
  id: string;
  name: string;
  category: EquipmentCategory["slug"];
  specSummary: string;
  deploymentFit: string;
  imageLabel: string;
  specs: string[];
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "routers",
    title: "Routers",
    description:
      "Edge routing, traffic control, and managed gateway equipment for business and residential deployments.",
  },
  {
    slug: "switches",
    title: "Switches",
    description:
      "Access and aggregation switching for floor distribution, PoE delivery, and backbone coordination.",
  },
  {
    slug: "olts",
    title: "OLTs",
    description:
      "Optical line terminal hardware for structured fiber distribution and GPON delivery.",
  },
  {
    slug: "servers",
    title: "Servers",
    description:
      "Core compute infrastructure for monitoring, service control, and internal network operations.",
  },
  {
    slug: "onus",
    title: "ONUs",
    description:
      "Optical network units used at the client edge for fiber handoff and wireless access extension.",
  },
  {
    slug: "cables",
    title: "Cables",
    description:
      "Fiber and structured cabling used for distribution, backbone runs, and last-mile installation.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    description:
      "Rack, power, and installation accessories that complete the deployment environment.",
  },
];

export const equipmentItems: EquipmentItem[] = [
  {
    id: "router-xr5400",
    name: "XR-5400 Edge Router",
    category: "routers",
    specSummary:
      "Multi-site edge routing for managed business links and high-priority traffic shaping.",
    deploymentFit: "Corporate branches, managed offices, and central gateway handoff.",
    imageLabel: "XR",
    specs: ["Dual WAN uplinks", "VPN-ready", "Advanced traffic policies"],
  },
  {
    id: "router-gx320",
    name: "GX-320 Business Gateway",
    category: "routers",
    specSummary:
      "Compact gateway router for residential towers, mixed-use buildings, and smaller branch environments.",
    deploymentFit: "Apartment installations and small-to-mid business environments.",
    imageLabel: "GX",
    specs: ["Gigabit routing", "Low-latency handling", "Remote admin ready"],
  },
  {
    id: "switch-sw48g",
    name: "SW-48G Aggregation Switch",
    category: "switches",
    specSummary:
      "High-density switching for floor aggregation, server uplinks, and traffic consolidation.",
    deploymentFit: "Commercial floors, server rooms, and core distribution layers.",
    imageLabel: "SW",
    specs: ["48-port Gigabit", "VLAN support", "SFP uplink slots"],
  },
  {
    id: "switch-poe24",
    name: "POE-24 Access Switch",
    category: "switches",
    specSummary:
      "Power-over-Ethernet switching for access points, CPE hardware, and distributed endpoint devices.",
    deploymentFit: "Apartment access layers, Wi-Fi rollouts, and compact field cabinets.",
    imageLabel: "PO",
    specs: ["24-port PoE", "Managed switching", "Fan-efficient chassis"],
  },
  {
    id: "olt-gpon8",
    name: "GPON OLT 8P",
    category: "olts",
    specSummary:
      "Fiber distribution hardware for structured GPON service delivery across multi-unit environments.",
    deploymentFit: "Apartment buildings, towers, and fiber-focused residential networks.",
    imageLabel: "OL",
    specs: ["8 PON ports", "Rack-mount chassis", "Subscriber scaling support"],
  },
  {
    id: "server-nms1",
    name: "NMS-1 Monitoring Server",
    category: "servers",
    specSummary:
      "Centralized monitoring and operations server for visibility, diagnostics, and internal service control.",
    deploymentFit: "Core operations, service monitoring, and internal management environments.",
    imageLabel: "NM",
    specs: ["Redundant storage", "Monitoring-ready OS", "Remote access capable"],
  },
  {
    id: "onu-ax1800",
    name: "AX1800 Wi-Fi ONU",
    category: "onus",
    specSummary:
      "Fiber edge ONU with integrated Wi-Fi for high-quality indoor connectivity and cleaner handoff.",
    deploymentFit: "Apartments, premium homes, and small managed client spaces.",
    imageLabel: "AX",
    specs: ["Dual-band Wi-Fi", "GPON compatible", "In-home coverage support"],
  },
  {
    id: "onu-bridge1000",
    name: "Bridge-1000 ONU",
    category: "onus",
    specSummary:
      "Simple fiber handoff unit for installations that need stable access without onboard Wi-Fi complexity.",
    deploymentFit: "Standard residential handoff and contractor-managed client endpoints.",
    imageLabel: "BR",
    specs: ["Single-user bridge mode", "Compact enclosure", "Low-power operation"],
  },
  {
    id: "cable-fiber12",
    name: "12-Core Outdoor Fiber Cable",
    category: "cables",
    specSummary:
      "Outdoor fiber run cable for backbone extension, building-to-building links, and resilient routing.",
    deploymentFit: "Backbone runs, distribution paths, and exposed installation routes.",
    imageLabel: "12",
    specs: ["Outdoor-rated sheath", "12-core layout", "Long-run deployment fit"],
  },
  {
    id: "accessory-rackkit",
    name: "Rack and Power Kit",
    category: "accessories",
    specSummary:
      "Deployment accessories for structured rack mounting, cable control, and protected power organization.",
    deploymentFit: "Server rooms, equipment cabinets, and organized installation finishing.",
    imageLabel: "RK",
    specs: ["Rack tray set", "Power distribution kit", "Cable management bundle"],
  },
];

export const promotionalOffer = {
  title: "Deployment bundle for new site launches",
  description:
    "A bundled starter stack for new office floors, apartment blocks, or temporary project sites that need routing, access switching, ONU handoff, and installation essentials in one procurement path.",
  highlights: [
    "Router, switch, ONU, and accessory bundle guidance",
    "Faster planning for first-time site rollouts",
    "Ideal for quote-led setup discussions and package comparisons",
  ],
};
