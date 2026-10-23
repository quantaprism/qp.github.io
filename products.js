// QuantaPrism product catalog, shared by products.html (the list) and product.html
// (one product, framed). To add a product, add an entry to its category's
// `products`; to add a category, add an object to the list. A product with a `url`
// opens inside the site; one with only `link` opens that page instead; one with
// neither is listed as coming soon.
//
// The framed products run on QuantaPrism's server (QPrismGoLive/golive/Caddyfile),
// which allows only this site to frame them.
//
// Payments: "test" while Razorpay runs in test mode (no real money); the product
// pages then show a demo-mode banner. Set to "live" once the Razorpay account is activated.
window.QP_PAYMENTS_MODE = "test";

window.QP_PRODUCT_CATEGORIES = [
  {
    id: "software",
    title: "Software products",
    heading: "Run our software in your browser.",
    intro: "Sign in to each product with your own account, right here on quantaprism.com.",
    products: [
      {
        id: "genai-video-studio",
        name: "GenAI Video Studio",
        icon: "▶",
        summary:
          "AI media suite: text to video, speech and voices, translation across Indian languages, transcription, and talking AI avatars.",
        url: "https://app.106-51-128-210.sslip.io/",
      },
      {
        id: "aibuildos",
        name: "AIBuildOS",
        icon: "▣",
        summary:
          "Build network operating system images as ONIE installers from the web, a REST API or a CLI, then boot-test them in a QEMU virtual switch.",
        url: "https://buildos.106-51-128-210.sslip.io/",
      },
      {
        id: "ixflextopology",
        name: "iXFlexTopology",
        icon: "◈",
        summary:
          "Design network topologies, deploy them as FRR / VPP sandboxes, and test them against RFC sections with generated configuration and reports.",
        url: "https://ixmesh.106-51-128-210.sslip.io/",
      },
      {
        id: "demobot-ai",
        name: "DemoBot AI",
        icon: "◉",
        summary:
          "Give it your website: it explores the features and makes a narrated demo video with subtitles, a tutorial and a PDF guide, plus a live chat bot for your visitors.",
        url: "https://demobot.106-51-128-210.sslip.io/",
      },
    ],
  },
  {
    id: "hardware",
    title: "Hardware products",
    heading: "Hardware products are on the way.",
    intro: "Our hardware design services are described in the hardware portfolio.",
    more: { label: "Hardware portfolio →", href: "hardware-portfolio.html" },
    products: [],
  },
  {
    id: "other",
    title: "Other products",
    heading: "More to come.",
    intro: "New products will be listed here as they launch.",
    products: [],
  },
];

window.qpFindProduct = function (id) {
  for (const category of window.QP_PRODUCT_CATEGORIES) {
    for (const product of category.products) {
      if (product.id === id) return { category, product };
    }
  }
  return null;
};
