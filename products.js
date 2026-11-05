// QuantaPrism product catalog, shared by products.html (the list) and product.html
// (one product, framed). To add a product, add an entry to its category's
// `products`; to add a category, add an object to the list. A product with a `url`
// opens inside the site; one with only `link` opens that page instead; one with
// neither is listed as coming soon. `comingSoon: true` keeps the url but shows "Coming
// soon" everywhere until the product is running again: delete that line to bring it back.
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
          "Private AI video studio with six separate studios: songs, stories, animation and avatars, explainers, voice and dubbing, and editing. One sign-in and one credit wallet for all of them.",
        url: "https://cinefy.quantaprism.com/",
      },
      {
        id: "aibuildos",
        name: "OSifyAI (ONIE Bare-Metal Build Lab)",
        icon: "▣",
        summary:
          "Build network operating system images as ONIE installers from the web, a REST API or a CLI, then boot-test them in a QEMU virtual switch.",
        url: "https://buildos.quantaprism.com/",
        comingSoon: true,
      },
      {
        id: "ixflextopology",
        name: "NetifyAI (VPP-FRR RFC Sandbox Lab)",
        icon: "◈",
        summary:
          "Design network topologies, deploy them as FRR / VPP sandboxes, and test them against RFC sections with generated configuration and reports.",
        url: "https://ixmesh.quantaprism.com/dashboard",
        comingSoon: true,
      },
      {
        id: "demobot-ai",
        name: "ShowifyAI",
        icon: "◉",
        summary:
          "Give it your website: it explores the features and makes a narrated demo video with subtitles, a tutorial and a PDF guide, plus a live chat bot for your visitors.",
        url: "https://demobot.quantaprism.com/",
        comingSoon: true,
      },
      {
        id: "demobot-acadtutorial",
        name: "ScormifyAI",
        icon: "✎",
        summary:
          "Your own AI academy: type a topic and get a complete course with lessons, quizzes, flashcards and narration, then invite students and track their progress and certificates.",
        url: "https://acad.quantaprism.com/",
        comingSoon: true,
      },
      {
        id: "codifyai",
        name: "CodifyAI",
        icon: "⌘",
        summary:
          "Describe a task and get working, tested code in Python, Go, JavaScript/TypeScript, Java or C/C++; find and fix bugs, trace how a codebase flows and see its architecture as diagrams.",
        url: "https://code.quantaprism.com/",
        comingSoon: true,
      },
      {
        id: "bookifyai",
        name: "BookifyAI",
        icon: "❦",
        summary:
          "Turn a topic, a PDF or a SCORM course into a book, and get a ready-to-upload Kindle kit: the EPUB eBook, the print interior and cover PDFs, and the listing details for Amazon KDP.",
        url: "https://book.quantaprism.com/",
      },
      {
        id: "kernelifyai",
        name: "KernelifyAI (Kernel Debug & VPP-FRR Packet Trace Lab)",
        icon: "⚙",
        summary:
          "Trace packets through the Linux kernel and relate them to FRR (OSPF, BGP, BFD) and VPP: see every kernel function a packet passes, the daemon that receives it and why it is dropped. Debug live kernels with gdb, kgdb, ftrace and bpftrace, build and debug your own kernel module in the lab, capture crashes with kdump as on a server, and analyse oopses, dmesg and vmcore memory dumps to the faulting source line.",
        url: "https://kernel.quantaprism.com/",
        comingSoon: true,
      },
    ],
  },
  {
    id: "cinefy-studios",
    title: "CinefyAI studios",
    heading: "Six studios, one CinefyAI.",
    intro: "Open only the studio you need. Your sign-in, credits and My Media library are shared across all of them.",
    products: [
      {
        id: "cinefy-song",
        name: "Song Studio",
        icon: "♪",
        summary:
          "Turn your own lyrics into an original song and a short video with the words on screen, make karaoke and vocal-free tracks from your own song, and create sung kids rhymes as cartoons.",
        url: "https://song.quantaprism.com/",
      },
      {
        id: "cinefy-story",
        name: "Story & Video Studio",
        icon: "▶",
        summary:
          "Storyboards, narrated text-to-video, AI shots, photo stories, festival greetings, product photos and ads, and video merging.",
        url: "https://story.quantaprism.com/",
      },
      {
        id: "cinefy-animate",
        name: "Animation & Avatar Studio",
        icon: "◐",
        summary:
          "Cartoon and 3D animation, talking AI avatars, conversations of 2 to 4 people, photo stories, new looks with your own face, old photo restore and kids rhymes.",
        url: "https://animate.quantaprism.com/",
      },
      {
        id: "cinefy-explain",
        name: "Explainer Studio",
        icon: "✦",
        summary:
          "Short, lively teaching videos with a lesson script you review, and notes, quizzes and SCORM courses from your class recordings, in English and Indian languages.",
        url: "https://explain.quantaprism.com/",
      },
      {
        id: "cinefy-dub",
        name: "Voice & Dubbing Studio",
        icon: "◍",
        summary:
          "Dub videos into Indian and world languages with a new voice and translated subtitles, lip-sync short clips, make natural voice-overs and clean podcast episodes, and turn your own book into an audiobook.",
        url: "https://dub.quantaprism.com/",
      },
      {
        id: "cinefy-edit",
        name: "Edit & Publish",
        icon: "✂",
        summary:
          "Transcribe, cut Shorts, burn subtitles, make thumbnails and social posts, add watermarks, strip metadata, compress images and restore old photos.",
        url: "https://edit.quantaprism.com/",
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

// On pages with hard-coded "Open ..." links, shows "Coming soon" in place of the link.
window.qpMarkComingSoon = function () {
  for (const link of document.querySelectorAll('a[href^="product.html?id="]')) {
    const found = window.qpFindProduct(new URLSearchParams(link.search).get("id"));
    if (!found || !found.product.comingSoon) continue;
    const soon = document.createElement("span");
    soon.className = "product-link";
    soon.textContent = "Coming soon";
    link.replaceWith(soon);
  }
};

window.qpFindProduct = function (id) {
  for (const category of window.QP_PRODUCT_CATEGORIES) {
    for (const product of category.products) {
      if (product.id === id) return { category, product };
    }
  }
  return null;
};
