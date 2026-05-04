window.homePlannerData = {
  summary: {
    season: "Spring 2026",
    address: "1110 Richardine Avenue",
    projectCount: 8,
    estimate: "$12.8k",
    roomCount: 4,
    finishTarget: "Aug 2026"
  },
  rooms: [
    {
      name: "Kitchen",
      status: "Design options",
      budget: "$2,100",
      focus: "Cabinet color, pulls, counter lighting, and soft-close repairs",
      image: "assets/uploads/.gitkeep"
    },
    {
      name: "Primary Bath",
      status: "In progress",
      budget: "$3,400",
      focus: "Vanity top, grout, fixtures, and exhaust fan"
    },
    {
      name: "Entryway",
      status: "Planned",
      budget: "$950",
      focus: "Bench storage, hooks, trim paint, and shoe landing"
    },
    {
      name: "Exterior",
      status: "Research",
      budget: "$1,800",
      focus: "Lot layout, paint touch-ups, drainage, and curb view"
    }
  ],
  renderings: [
    {
      title: "Kitchen cabinet refresh",
      room: "Kitchen",
      status: "Prompt ready",
      source: "Upload a current kitchen photo to assets/uploads/",
      prompt: "Render this kitchen with warm white upper cabinets, deep green lower cabinets, brushed brass pulls, white quartz counters, and soft under-cabinet lighting."
    },
    {
      title: "Entryway drop zone",
      room: "Entryway",
      status: "Needs current photo",
      source: "Take a straight-on wall photo before generating options",
      prompt: "Create a compact built-in entry bench with closed lower storage, black hooks, natural wood seat, warm white walls, and durable slate-look floor tile."
    },
    {
      title: "Exterior paint options",
      room: "Exterior",
      status: "Reference images saved",
      source: "assets/references/property/",
      prompt: "Show three exterior palettes using the existing house photo: soft white with black trim, warm gray with cream trim, and olive siding with natural wood accents."
    }
  ],
  projects: [
    {
      title: "Kitchen cabinet refresh",
      room: "Kitchen",
      status: "High priority",
      budget: "$2,100",
      window: "May",
      description: "Paint lowers, replace pulls, add under-cabinet lighting, and repair the soft-close hinges.",
      nextStep: "Upload current cabinet photos and generate 3 color options."
    },
    {
      title: "Primary bath update",
      room: "Primary Bath",
      status: "In progress",
      budget: "$3,400",
      window: "June",
      description: "Swap vanity top, reseal grout, upgrade fixtures, and install a better exhaust fan.",
      nextStep: "Collect fixture measurements and preferred finish references."
    },
    {
      title: "Entryway drop zone",
      room: "Entryway",
      status: "Planned",
      budget: "$950",
      window: "July",
      description: "Build bench storage, add wall hooks, repaint trim, and create a shoe landing area.",
      nextStep: "Photograph the wall and mark available width."
    }
  ],
  budget: [
    { label: "Kitchen", value: 2100, max: 5000, amount: "$2,100" },
    { label: "Bath", value: 3400, max: 5000, amount: "$3,400" },
    { label: "Exterior", value: 1800, max: 5000, amount: "$1,800" }
  ],
  timeline: [
    {
      month: "May",
      title: "Paint, hardware, and quick repairs",
      description: "Finish low-disruption indoor work before bigger summer projects start."
    },
    {
      month: "June",
      title: "Bathroom fixtures and ventilation",
      description: "Coordinate plumbing purchases, fan install, and grout reseal in one stretch."
    },
    {
      month: "July",
      title: "Entry storage and exterior touch-ups",
      description: "Move to build work, trim paint, and outdoor repairs while weather is stable."
    }
  ],
  materials: [
    "Cabinet enamel paint, primer, and foam rollers",
    "Brushed brass pulls and matching hinges",
    "LED under-cabinet light strips",
    "Vanity faucet, drain kit, and silicone",
    "Bench lumber, hooks, baskets, and trim caulk"
  ]
};
