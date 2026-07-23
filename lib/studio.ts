// All site content lives here — one file to edit, everything else is layout.

export const site = {
  name: "Allah-u-Abha Rodrigues",
  shortName: "Allah-u-Abha",
  email: "allah-u-abha.rodrigues@yale.edu",
  url: "https://allahurodrigues.com",
  linkedIn: "https://www.linkedin.com/in/allahu-rodrigues/",
  gitHub: "https://github.com/AllahuRodrigues",
  resume: "/resume.pdf",
  wsj: "https://www.wsj.com/tech/ai/forget-wall-street-elite-students-are-spending-their-summers-on-startup-dreams-e7191994",
  status: "Yale Hacker House · San Francisco",
};

export type Artwork = {
  slug: string;
  src: string;
  w: number;
  h: number;
  title: string;
  year: string;
  medium: string;
  place: string;
  size?: string;
  statement?: string;
};

// Room I — Maputo. Numbering and statements are the artist's own.
export const maputoWorks: Artwork[] = [
  {
    slug: "capulana",
    src: "/art/capulana.jpg",
    w: 1800,
    h: 1290,
    title: "Capulana",
    year: "2020",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "16.5 × 11.7 in",
    statement:
      "A drawing of my little cousin, who lives hundreds of miles away, smiling in a capulana — the sarong worn across Mozambique. It was such a pure moment of happiness. I wanted to convey the joy of being understood by someone who loves you.",
  },
  {
    slug: "equilibrium",
    src: "/art/equilibrium.jpg",
    w: 1800,
    h: 1289,
    title: "Equilibrium, In the long run",
    year: "2020",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "16.5 × 11.7 in",
    statement:
      "The sketch I am most proud of — drawn fast, over a couple of days in class. A year later it still holds up, and it reminds me how much I love working in pencil.",
  },
  {
    slug: "reverse-feel",
    src: "/art/reverse-feel.jpg",
    w: 1284,
    h: 1800,
    title: "Reverse Feel",
    year: "2020",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "11.7 × 16.5 in",
    statement:
      "The seven stages of grief in reverse — denial, pain, anger, reflection, the upward turn, reconstruction, hope — told through hands, physicalizing the phenomenon of fall. The title has a dual meaning: tactile and emotional.",
  },
  {
    slug: "the-bar",
    src: "/art/the-bar.jpg",
    w: 1302,
    h: 1800,
    title: "The bar",
    year: "2019",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "8.3 × 11.7 in",
  },
  {
    slug: "oblique-angel",
    src: "/art/oblique-angel.jpg",
    w: 1236,
    h: 1800,
    title: "Oblique Angel",
    year: "2020",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "11.7 × 16.5 in",
  },
  {
    slug: "soldier",
    src: "/art/soldier.jpg",
    w: 1244,
    h: 1800,
    title: "Soldier",
    year: "2019",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "11.7 × 16.5 in",
  },
  {
    slug: "afterlife",
    src: "/art/afterlife.jpg",
    w: 1246,
    h: 1800,
    title: "Afterlife",
    year: "2021",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "8.3 × 11.7 in",
  },
  {
    slug: "mozambique-railways",
    src: "/art/mozambique-railways.jpg",
    w: 1800,
    h: 1236,
    title: "Mozambique Railways",
    year: "2020",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "16.5 × 11.7 in",
    statement:
      "I lived right by the Mozambique Railways, so I took this picture on my way to school. It was fun to work with the Beaux-Arts architecture, the contrasts of the building, and the reflective window.",
  },
  {
    slug: "soft-mornings",
    src: "/art/soft-mornings.jpg",
    w: 1361,
    h: 1800,
    title: "Soft Mornings",
    year: "2019",
    medium: "Acrylic on canvas",
    place: "Maputo, Mozambique",
    size: "16.5 × 23.4 in",
    statement:
      "A large painting, which made the details harder to render — but I had the most fun being expressive with the cerulean, the tall buildings, and the people.",
  },
  {
    slug: "childhood",
    src: "/art/childhood.jpg",
    w: 1325,
    h: 1800,
    title: "Childhood",
    year: "2021",
    medium: "Pencil",
    place: "Maputo, Mozambique",
    size: "11.7 × 16.5 in",
    statement:
      "Part of a series on invoking emotion through African women — here, loneliness and fear, reflected in the tears of the child. I later gifted this piece to my high school, with a talk for students struggling with their mental health.",
  },
];

// Room II — Lakeville. The Hotchkiss series, shown at the Troutbeck Symposium.
export const lakevilleWorks: Artwork[] = [
  {
    slug: "du-bois",
    src: "/art/du-bois.jpg",
    w: 1350,
    h: 1800,
    title: "I came back, but you weren't there — W.E.B. Du Bois",
    year: "2023",
    medium: "Graphite & color",
    place: "Lakeville, Connecticut",
    statement:
      "A series on double consciousness and the identity conflict faced by Black students, connecting W.E.B. Du Bois with my friend Jamil across a century — kente patterns binding past to present.",
  },
  {
    slug: "jamil",
    src: "/art/jamil.jpg",
    w: 1350,
    h: 1800,
    title: "I came back, but you weren't there — Jamil",
    year: "2023",
    medium: "Graphite & color",
    place: "Lakeville, Connecticut",
    statement:
      "The second panel of the series: my friend Jamil, drawn in the same graphite as Du Bois — the Harlem Renaissance answered by a kid in a puffer jacket, still asking the same questions.",
  },
  {
    slug: "memorial-horizon",
    src: "/art/memorial-horizon.jpg",
    w: 1800,
    h: 1332,
    title: "Memorial Horizon",
    year: "2023",
    medium: "Graphite",
    place: "Lakeville, Connecticut",
    statement:
      "A campus mid-construction — diggers, fences, and a Georgian dormitory holding still while everything in front of it changes.",
  },
];

export const galleryEpigraph =
  "In the raw vibrations of the African soil, I found the essence of my creativity.";

export type Project = {
  index: string;
  title: string;
  blurb: string;
  year: string;
  meta: string;
  tech?: string[];
  href?: string;
};

export type Experience = {
  slug: string;
  role: string;
  org: string;
  period: string;
  place: string;
  bullets: string[];
  tech: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    slug: "hapstr",
    role: "Software Engineer",
    org: "HapSTR",
    period: "may – aug 2025",
    place: "los angeles · remote",
    bullets: [
      "Scaled a photorealistic 3D real-estate app from ~200 to 1,000+ users — CesiumJS + Google Photorealistic 3D Tiles in Next.js/TypeScript, with Street View handoff and click-to-building fly-to.",
      "Sub-200ms property lookups from cached geospatial endpoints fusing Zillow CSVs, ATTOM API data, and Microsoft Building Footprints — EPSG:4326 mapping, Haversine search.",
      "Prototyped Interior Transparency with PyTorch + Hugging Face to infer floor layouts and render 3D interior previews — listing-detail clicks up 35%, time-to-first-insight down 40%.",
      "Releases went from 2 days to 45 minutes: Docker-first CI/CD (GitHub Actions → AWS ECS), 88% unit-test coverage, blue-green deploys.",
    ],
    tech: ["next.js", "typescript", "cesiumjs", "google-3d-tiles", "pytorch", "docker", "aws-ecs", "github-actions"],
    href: "https://hapstr.com",
  },
  {
    slug: "unlock-labs",
    role: "Machine Learning Engineer",
    org: "Unlock Labs",
    period: "jun – aug 2025",
    place: "charlotte · remote",
    bullets: [
      "Cut marketing spend 2% for a $32M DTC brand with a Streamlit-on-AWS analytics engine — Random Forest demand forecasts plus Monte Carlo scenario modeling.",
      "One dashboard for forecasts, scenario controls, and KPI tracking, with automated data refresh and audit logs.",
      "Channel-reallocation recommendations with confidence intervals, so leadership decided faster.",
    ],
    tech: ["python", "scikit-learn", "random-forest", "monte-carlo", "aws", "streamlit", "pandas"],
  },
  {
    slug: "undp",
    role: "GRP Fellow",
    org: "United Nations Development Programme",
    period: "jun 2026 —",
    place: "the hague · remote",
    bullets: [
      "Monitoring, evaluation & learning with the Governance, Rule of Law and Peacebuilding Hub — helping programs organize evidence and measure outcomes.",
      "Applying CS + statistics to impact-measurement tools and indicator frameworks across international, cross-functional teams.",
    ],
    tech: ["python", "statistics", "data-analysis", "m&e"],
    href: "https://www.undp.org",
  },
  {
    slug: "yalies",
    role: "Software Developer",
    org: "Yale Computer Society — Yalies.io",
    period: "2025 —",
    place: "new haven",
    bullets: [
      "Backend and search for 30,000+ students and alumni — paginated endpoints, request-level caching, and monitoring handling 3,000+ daily requests on Next.js/Node + Elasticsearch.",
      "Query filters, profile views, and contributor docs that cut new-dev ramp-up time.",
    ],
    tech: ["next.js", "node", "elasticsearch", "typescript"],
    href: "https://yalies.io",
  },
  {
    slug: "curious-cardinals",
    role: "SWE & ML Mentor",
    org: "Curious Cardinals",
    period: "2025 —",
    place: "remote",
    bullets: [
      "Mentored a cohort of four seniors to a full CRUD app in Java/Spring Boot — OOP design, testing, CI.",
      "Built an NBA fantasy predictor to ~0.95 AUC with a junior mentee — five Kaggle datasets, XGBoost tuning, a Streamlit app for lineup exploration.",
    ],
    tech: ["java", "spring-boot", "python", "xgboost", "streamlit", "arduino"],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Something new",
    blurb: "The startup I'm building at the hacker house. Under wraps for now — ask me.",
    year: "2026 —",
    meta: "San Francisco",
    tech: ["under wraps"],
  },
  {
    index: "02",
    title: "Tenure",
    blurb: "Helps renters negotiate: market data, state tenant law, and the exact email to send your landlord. Claude + RentCast + Stripe under the hood.",
    year: "2025 – 26",
    meta: "solo build",
    tech: ["next.js","claude-api","rentcast","stripe","supabase","qstash","redis"],
    href: "https://tenure-kappa.vercel.app",
  },
  {
    index: "03",
    title: "Yalies.io",
    blurb: "Yale's student directory — 30,000+ students and alumni, thousands of searches a day. I work on the backend and search.",
    year: "2025 —",
    meta: "Yale Computer Society",
    tech: ["next.js","node","elasticsearch","typescript"],
    href: "https://yalies.io",
  },
  {
    index: "04",
    title: "MacroTrack",
    blurb: "Tracks my meals, InBody scans, and progress photos — web and Expo mobile, one Supabase behind both.",
    year: "2026",
    meta: "Next.js · Expo",
    tech: ["next.js-16","react-19","expo","supabase","sqlite","recharts"],
    href: "https://macrotracking-coral.vercel.app",
  },
  {
    index: "05",
    title: "Unseen",
    blurb: "Personal finance app: connects bank data, catches subscriptions you forgot, drafts the dispute for you.",
    year: "2026",
    meta: "Next.js · Plaid · Python",
    tech: ["next.js","plaid","supabase","python","ollama"],
    href: "https://unseen-rho.vercel.app",
  },
  {
    index: "06",
    title: "Yale4Sale",
    blurb: "Campus marketplace with real-time chat and reviews — built with four classmates for CPSC 4190.",
    year: "2025",
    meta: "team of five",
    tech: ["next.js","react","supabase","socket.io"],
    href: "https://project-project-group-14.vercel.app",
  },
  {
    index: "07",
    title: "HapSTR",
    blurb: "3D real-estate maps — CesiumJS, Mapbox, NYC PLUTO data. Joined as a SWE intern while it grew from 200 to 1,000+ users.",
    year: "2024 – 25",
    meta: "Los Angeles · remote",
    tech: ["cesiumjs","mapbox","nyc-pluto","attom","next.js"],
    href: "https://hapstr.com",
  },
  {
    index: "08",
    title: "Salary Predictor",
    blurb: "60k+ Stack Overflow responses in, salary predictions out — 0.91 AUC, live Streamlit dashboard.",
    year: "2024 – 25",
    meta: "Python · scikit-learn",
    tech: ["python","scikit-learn","pandas","streamlit","postgresql"],
    href: "https://salarypredictionml.streamlit.app",
  },
  {
    index: "09",
    title: "UNDP · GRP Fellow",
    blurb: "Monitoring & evaluation tooling for rule-of-law and peacebuilding programs, with the GRP Hub.",
    year: "2026",
    meta: "The Hague · remote",
    tech: ["python","statistics","m&e"],
    href: "https://www.undp.org",
  },
  {
    index: "10",
    title: "Plataforma Makobo",
    blurb: "A relief map that connected 62,000 people displaced in Cabo Delgado with aid, medicine, and work.",
    year: "2021 – 22",
    meta: "Mozambique",
    tech: ["javascript","leaflet.js","geojson"],
    href: "https://plataformamakobo.org/map",
  },
];

export const processShots = [
  {
    src: "/art/memorial-wip-1.jpg",
    w: 900,
    h: 1200,
    caption: "early — sky and background still open",
  },
  {
    src: "/art/memorial-wip-2.jpg",
    w: 1200,
    h: 900,
    caption: "middle — fence and machines blocked in",
  },
  {
    src: "/art/memorial-reference.jpg",
    w: 1200,
    h: 900,
    caption: "the reference, shot through the fence",
  },
];

export type Snapshot = {
  src: string;
  w: number;
  h: number;
  caption: string;
  alt: string;
};

export const snapshots: Snapshot[] = [
  {
    src: "/photos/rugby-action.jpg",
    w: 1400,
    h: 933,
    caption: "flanker things, Yale rugby",
    alt: "Rugby match in motion — carrying the ball past a yellow school bus",
  },
  {
    src: "/photos/golden-gate.jpg",
    w: 900,
    h: 1200,
    caption: "golden gate, week one",
    alt: "With friends in front of the Golden Gate Bridge on a foggy day",
  },
  {
    src: "/photos/hacker-house-yard.jpg",
    w: 1050,
    h: 1400,
    caption: "sunday standup, hacker house yard",
    alt: "Aerial view of the hacker house backyard, founders around a brunch table",
  },
  {
    src: "/photos/exhibition.jpg",
    w: 1600,
    h: 1280,
    caption: "opening night, 'i came back, but you weren't there'",
    alt: "Standing beside my graphite portraits at the exhibition",
  },
  {
    src: "/photos/rugby-win.jpg",
    w: 966,
    h: 1200,
    caption: "bluedogs 7 – 5 columbia",
    alt: "Yale rugby team photo after beating Columbia",
  },
  {
    src: "/photos/yale-night.jpg",
    w: 1400,
    h: 1050,
    caption: "formal, apparently",
    alt: "Night portrait in a suit on Yale's campus",
  },
];

export const aboutWords =
  "The quick version: I'm from Maputo, Mozambique — the first person from Mozambique to attend Yale. Before New Haven there was Hotchkiss in Lakeville — FTC robotics, thirds tennis, and drawing more than I slept — plus a stretch in Porto. Now I'm a Yale senior doing a B.S. in Computer Science + Statistics & Data Science, and this summer I'm at the Yale Hacker House in San Francisco, the house The Wall Street Journal wrote about. Half of this page is pencil. The other half is code.";
