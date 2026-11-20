/**
 * ALL the words on the website live in this file.
 * Edit text here; the components only arrange it on the page.
 *
 * Prices are plain numbers in rupees (no commas). They're shown as "from ₹14,999".
 */

export const site = {
  name: "Point Five Studio",
  shortName: "Point Five",
  url: "https://pointfivestudio.in",
  domain: "pointfivestudio.in",
  tagline: "A fresh way to see your business online.",
  email: "hellopointfivestudio@gmail.com",

  instagram: {
    handle: "@pointfivestudio.in",
    url: "https://www.instagram.com/pointfivestudio.in/",
  },

  // Typed in for people when they tap a contact button (email now, or WhatsApp once it's on).
  // {name} and {price} are filled in by each package's "Ask about" button.
  enquiry: {
    subject: "Website enquiry",
    message: "Hi Point Five Studio! I'd like to know more about a website for my business.",
    packageSubject: "{name} package enquiry",
    packageMessage: "Hi Point Five Studio! I'm interested in the {name} package (from {price}). Can we talk about my business?",
  },

  whatsapp: {
    // WhatsApp buttons are switched OFF: every contact button opens an email instead.
    // To switch them on: put your WhatsApp Business number below (country code + number,
    // digits only, e.g. 919812345678), change `enabled` to true, then commit and push.
    enabled: false,
    number: "910000000000",
  },

  // Labels for the main contact button in the header, hero, contact section and the
  // floating button on phones. Which set is used depends on `whatsapp.enabled` above.
  contactCta: {
    email: { short: "Email us", long: "Email us", floating: "Email us" },
    whatsapp: { short: "WhatsApp us", long: "Chat on WhatsApp", floating: "Chat with us on WhatsApp" },
  },

  cities: ["Gurgaon", "Mumbai"],

  seo: {
    // Shown in Google results and browser tabs. Keep under ~65 characters.
    title: "Point Five Studio | Websites & Booking Systems in Gurgaon & Mumbai",
    // Shown under the title in Google. Keep under ~160 characters.
    description:
      "Website and booking system for small businesses in Gurgaon and Mumbai. Fast sites, WhatsApp and AI chatbots, and simple owner dashboards for cafés, salons and clinics.",
    // Alt text for the image shown when the site is shared on WhatsApp, LinkedIn, X…
    shareImageAlt:
      "Point Five Studio: a fresh way to see your business online. Websites and booking systems for small businesses in Gurgaon and Mumbai.",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Websites and booking systems for small businesses in Gurgaon and Mumbai",
    // The headline is the tagline. The last word gets the marigold highlight.
    titleStart: "A fresh way to see your business",
    titleHighlight: "online.",
    intro:
      "We help cafés, salons, clinics and local businesses get more bookings and spend less time on admin, with fast websites, booking systems, WhatsApp and AI chat, and a simple dashboard for the owner.",
    secondaryCta: "See packages",
    note: "Free 20-minute call. Reply within one working day.",
  },

  // The camera-style zoom switch in the hero.
  lens: {
    label: "Zoom level",
    levels: [
      {
        id: "wide",
        pill: ".5",
        active: "0.5×",
        name: "0.5× wide",
        caption: "0.5× · The whole picture: website, bookings, WhatsApp and your numbers, working together.",
      },
      {
        id: "standard",
        pill: "1",
        active: "1×",
        name: "1× standard",
        caption: "1× · What most customers see today: one Instagram post, and a lot of DMs to answer.",
      },
      {
        id: "close",
        pill: "2",
        active: "2×",
        name: "2× close-up",
        caption: "2× · Up close: a table booked and confirmed on WhatsApp at 11 pm, while you sleep.",
      },
    ],
    // Text inside the little illustrated screens.
    scene: {
      insta: { handle: "kaapi.andco", place: "Bandra West", likes: "214 likes", caption: "Filter coffee, done slowly." },
      website: { url: "kaapiandco.in", brand: "Kaapi & Co.", headline: "Filter coffee, done slowly.", button: "Book a table" },
      booking: { title: "Book a table", day: "Sat, 23 Nov", slots: ["6:30", "7:00", "7:30", "8:00"], picked: "7:30", confirm: "Confirmed · table for 4" },
      chat: {
        name: "Kaapi & Co.",
        status: "Auto-reply",
        incoming: "Hi! Any table for 4 tonight?",
        reply: "Yes, 7:30 pm is free. Tap to confirm and we'll hold it for you.",
        time: "11:02 pm",
      },
      dashboard: { title: "This week", stat: "42", statLabel: "bookings", bars: [40, 55, 48, 70, 62, 88, 76], days: "M T W T F S S" },
    },
  },

  services: {
    kicker: "Services",
    title: "Everything your customers need to find you, book you and come back.",
    intro: "Pick one, or have them all work together. Every piece is built around how your business actually runs.",
    items: [
      {
        icon: "website",
        name: "Website",
        pitch: "A fast, good-looking site that turns Instagram visitors into customers.",
        points: [
          "Mobile-first, loads in a blink",
          "Menu, services, prices and photos",
          "Google Maps, reviews and click-to-call",
          "Set up for Google search in your area",
        ],
      },
      {
        icon: "booking",
        name: "Booking system",
        pitch: "Customers book a table, a haircut or an appointment in a few taps, any time of day.",
        points: [
          "Real-time slots, no double bookings",
          "Instant confirmations and reminders",
          "Fewer no-shows",
          "Works with your existing calendar",
        ],
      },
      {
        icon: "chat",
        name: "AI chatbot and WhatsApp automation",
        pitch: "Answers the same 20 questions for you and books customers straight from WhatsApp.",
        points: [
          "Replies to hours, prices and directions 24/7",
          "Takes bookings inside the chat",
          "Hands over to you when it's unsure",
          "Uses the official WhatsApp Business Platform",
        ],
      },
      {
        icon: "dashboard",
        name: "Owner dashboard",
        pitch: "One simple screen for today's bookings, new enquiries and how the week went.",
        points: [
          "Today's bookings at a glance",
          "Every enquiry in one list",
          "Weekly numbers without spreadsheets",
          "Works on your phone",
        ],
      },
    ],
  },

  process: {
    kicker: "How it works",
    title: "Three steps from first chat to fully booked.",
    steps: [
      {
        name: "Zoom out",
        time: "Free 20-minute call",
        text: "We look at your whole business: how customers find you, how they book, and where your time goes. You get a clear plan and a fixed quote.",
      },
      {
        name: "Build",
        time: "2–4 weeks",
        text: "We design and build your site and tools, then test everything on real phones. You see progress every week and can change your mind along the way.",
      },
      {
        name: "Launch and grow",
        time: "Day one and after",
        text: "We go live, show you and your team how it all works, and stay on call. Small fixes in the first 30 days are on us.",
      },
    ],
  },

  packages: {
    kicker: "Pricing",
    title: "Clear starting prices. A fixed quote before we start.",
    intro: "Every business is different, so these are starting points. After our call you get one fixed price, with no surprises later.",
    pricePrefix: "from",
    priceSuffix: "one-time",
    featuredLabel: "Most picked",
    ctaPrefix: "Ask about",
    items: [
      {
        name: "Starter",
        price: 14999,
        bestFor: "For a café, salon or clinic that needs to look great online, fast.",
        time: "Live in 2–4 weeks",
        features: [
          "One-page mobile website",
          "Menu or services with prices",
          "WhatsApp and click-to-call buttons",
          "Google Maps and Business Profile setup",
          "Basic search setup for your area",
        ],
        featured: false,
      },
      {
        name: "Growth",
        price: 34999,
        bestFor: "For businesses that want bookings coming in without the back-and-forth.",
        time: "Live in 2–4 weeks",
        features: [
          "Everything in Starter",
          "Up to 5 pages",
          "Online booking system",
          "Booking confirmations and reminders",
          "WhatsApp auto-replies for common questions",
        ],
        featured: true,
      },
      {
        name: "Pro",
        price: 64999,
        bestFor: "For owners who want the admin to run itself.",
        time: "Live in 2–4 weeks",
        features: [
          "Everything in Growth",
          "AI chatbot on your site and WhatsApp",
          "Bookings straight from WhatsApp",
          "Owner dashboard",
          "Priority support for 1 month",
        ],
        featured: false,
      },
    ],
    footnote:
      "Domain name, WhatsApp message fees and AI usage are billed at cost, with no markup. Bigger or more custom projects are quoted separately.",
  },

  work: {
    kicker: "Work",
    heading: "Recent work",
    liveLabel: "Visit the live site",
    // One entry per case study, shown side by side on wide screens. Screenshots live in public/work/ as
    // <image>-desktop-1280.webp, <image>-desktop-640.webp, <image>-mobile-480.webp and <image>-mobile-240.webp.
    projects: [
      {
        title: "Kaapi & Co.",
        subtitle: "A filter-coffee café in Bandra West, Mumbai",
        tag: "Concept build",
        summary:
          "A one-page site designed to turn Instagram browsers into table bookings. Built to show what a small café can have: a tabbed menu, a photo gallery, a reservation form, opening hours with a map, and a WhatsApp button that's always one tap away.",
        highlights: ["Reservation form that's quick on a phone", "Tabbed menu and photo gallery", "Floating WhatsApp button", "Map, hours and contact in one place"],
        scoresTitle: "Google Lighthouse scores",
        scoresNote: "Measured on the production build. 100 is the maximum.",
        scores: [
          { label: "Performance", sub: "on mobile", value: 96 },
          { label: "Accessibility", sub: "", value: 100 },
          { label: "Best practices", sub: "", value: 100 },
          { label: "SEO", sub: "", value: 100 },
        ],
        liveUrl: "https://kaapi-cafe.vercel.app",
        note: "",
        image: "kaapi",
        desktopAlt:
          "The Kaapi & Co. website on a laptop: the headline “Good coffee takes its time.”, a Reserve a table button and an illustrated coffee cup.",
        mobileAlt: "The Kaapi & Co. website on a phone, with the Reserve a table button and a floating WhatsApp button.",
      },
      {
        title: "Saanjh Salon",
        subtitle: "A salon website with online booking",
        tag: "Concept build",
        summary:
          "A website for a premium salon on Golf Course Road, Gurugram, where customers book in a few taps. The booking is real: it shows each stylist's live availability, and the owner manages every appointment from a simple dashboard.",
        highlights: [
          "Service → stylist → date → time booking",
          "Double-booking protection",
          "Owner dashboard with confirm/cancel",
          "Loads in 0.9 s on mobile",
        ],
        scoresTitle: "Google PageSpeed scores",
        scoresNote: "Measured on mobile and desktop, with the same scores on both. 100 is the maximum.",
        scores: [
          { label: "Performance", sub: "", value: 100 },
          { label: "Accessibility", sub: "", value: 100 },
          { label: "Best practices", sub: "", value: 100 },
        ],
        liveUrl: "https://saanjh-salon.vercel.app",
        note: "To see the owner's side, open “View owner dashboard (demo)” in the site's footer. Demo login: demo-saanjh.",
        image: "saanjh",
        desktopAlt:
          "The Saanjh Salon website on a laptop: the headline “Unhurried hair, skin & bridal care.”, a Book an appointment button and an arched photo of the salon.",
        mobileAlt:
          "Saanjh Salon's booking form on a phone at the date and time step: a row of dates, then the day's times, with booked times struck through.",
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Questions owners usually ask.",
    items: [
      {
        q: "How long does it take?",
        a: "Most projects are live in 2–4 weeks, depending on the package and how much needs connecting. The clock starts once we have your photos, menu or service list.",
      },
      {
        q: "What does “from ₹X” mean? How do I get an exact price?",
        a: "The price shown is where each package starts. After a free 20-minute call we send one fixed quote based on what you need: number of pages, how bookings should work, and which tools to connect. That quote doesn't change unless you add something.",
      },
      {
        q: "Do I need to write the text or take photos?",
        a: "No. We write the words with you, in your voice. If you have good photos we'll use them; if not, we can suggest a photographer or use well-chosen stock images to start with.",
      },
      {
        q: "How does the WhatsApp automation work?",
        a: "We connect your number to the official WhatsApp Business Platform. It sends instant replies to common questions, booking confirmations and reminders. Meta charges small fees for some messages, which we pass on at cost.",
      },
      {
        q: "Will the AI chatbot give customers wrong answers?",
        a: "It only answers from what you give it: your menu or services, prices, hours and policies. When it isn't sure, it hands the chat over to you instead of guessing. You can read every conversation.",
      },
      {
        q: "Are there monthly costs?",
        a: "Hosting for most small sites is free. You pay for your domain name (about ₹1,000 a year) and, if you use them, WhatsApp message fees and AI usage at cost. An optional care plan covers updates and small changes each month.",
      },
      {
        q: "Who owns the website?",
        a: "You do. The domain is registered in your name, and the site, content and data are yours. If you ever want to move, we hand everything over.",
      },
      {
        q: "Do you only work in Gurgaon and Mumbai?",
        a: "We focus on Gurgaon and Mumbai, but we work with businesses anywhere in India over email and video calls.",
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Let's zoom out on your business.",
    text: "Tell us what you run and what eats up your time. We'll reply within one working day with ideas and a fixed quote.",
    // Shown next to the main button when WhatsApp is switched on.
    emailLabel: "Email us",
    instagramLabel: "Instagram",
    note: "Free 20-minute call. No obligation.",
  },

  notFound: {
    title: "Out of frame.",
    text: "This page doesn't exist. Let's zoom back out.",
    cta: "Back to the home page",
  },

  // Words only screen readers hear, plus a few button labels.
  labels: {
    skipLink: "Skip to content",
    home: "Point Five Studio, back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    newTab: "(opens in a new tab)",
    scoreOutOf: "out of 100 for",
  },

  footer: {
    line: "Websites, booking systems and WhatsApp automation for small businesses in Gurgaon and Mumbai.",
    nameNote: "Why “Point Five”? The 0.5× lens on your phone camera fits more into the frame. We help customers see more of your business.",
  },
} as const;

export type Site = typeof site;
