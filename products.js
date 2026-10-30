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
        name: "CinefyAI",
        icon: "▶",
        summary:
          "AI media suite: text to video, speech and voices, translation across Indian languages, transcription, and talking AI avatars.",
        url: "https://app.106-51-128-210.sslip.io/",
      },
      {
        id: "aibuildos",
        name: "OSifyAI (ONIE Bare-Metal Build Lab)",
        icon: "▣",
        summary:
          "Build network operating system images as ONIE installers from the web, a REST API or a CLI, then boot-test them in a QEMU virtual switch.",
        url: "https://buildos.106-51-128-210.sslip.io/",
      },
      {
        id: "ixflextopology",
        name: "NetifyAI (VPP-FRR RFC Sandbox Lab)",
        icon: "◈",
        summary:
          "Design network topologies, deploy them as FRR / VPP sandboxes, and test them against RFC sections with generated configuration and reports.",
        url: "https://ixmesh.106-51-128-210.sslip.io/dashboard",
      },
      {
        id: "demobot-ai",
        name: "ShowifyAI",
        icon: "◉",
        summary:
          "Give it your website: it explores the features and makes a narrated demo video with subtitles, a tutorial and a PDF guide, plus a live chat bot for your visitors.",
        url: "https://demobot.106-51-128-210.sslip.io/",
      },
      {
        id: "demobot-acadtutorial",
        name: "ScormifyAI",
        icon: "✎",
        summary:
          "Your own AI academy: type a topic and get a complete course with lessons, quizzes, flashcards and narration, then invite students and track their progress and certificates.",
        url: "https://acad.106-51-128-210.sslip.io/",
      },
      {
        id: "codifyai",
        name: "CodifyAI",
        icon: "⌘",
        summary:
          "Describe a task and get working, tested code in Python, Go, JavaScript/TypeScript, Java or C/C++; find and fix bugs, trace how a codebase flows and see its architecture as diagrams.",
        url: "https://code.106-51-128-210.sslip.io/",
      },
      {
        id: "bookifyai",
        name: "BookifyAI",
        icon: "❦",
        summary:
          "Turn a topic, a PDF or a SCORM course into a book, and get a ready-to-upload Kindle kit: the EPUB eBook, the print interior and cover PDFs, and the listing details for Amazon KDP.",
        url: "https://book.106-51-128-210.sslip.io/",
      },
      {
        id: "kernelifyai",
        name: "KernelifyAI (Kernel Debug & VPP-FRR Packet Trace Lab)",
        icon: "⚙",
        summary:
          "Trace packets through the Linux kernel and relate them to FRR (OSPF, BGP, BFD) and VPP: see every kernel function a packet passes, the daemon that receives it and why it is dropped. Debug live kernels with gdb, kgdb, ftrace and bpftrace, analyse oopses, dmesg and vmcore memory dumps to the faulting source line.",
        url: "https://kernel.106-51-128-210.sslip.io/",
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
