// app/page.tsx

type Project = {
  title: string;
  type: string;
  year: string;
  description: string;
  link: string;
  file?: string;
};

type ProjectSection = {
  title: string;
  subtitle?: string;
  projects: Project[];
};

const sections: ProjectSection[] = [
  {
    title: "Digital Transformation and Operations",
    subtitle: "Coursework completed as part of the Digital Transformation, Business Analytics, Machine Learning and Operations Management modules",
    projects: [
      {
        title: "Improving Verification of Refund Claims on GrabFood",
        type: "Business Analytics",
        year: "2025",
        description:
          "Analytics project to detect suspicious refund claims and reduce financial leakage for GrabFood.",
        link: "/files/grab-refund-claims.pdf",
        file: "/files/grab-refund-claims.pdf"
      },
      {
        title: "Pitch Deck for SkillsSphere",
        type: "Digital Transformation",
        year: "2024",
        description:
          "Pitch deck for SkillsSphere, a platform focused on skills mapping and workforce development.",
        link: "/files/skillsphere-pitch-deck.pdf",
        file: "/files/skillsphere-pitch-deck.pdf"
      },
      {
        title:
          "Digital Transformation in Strategic Workforce Development",
        type: "Digital Transformation",
        year: "2024",
        description:
          "Conceptual design of a digital platform for strategic workforce development and skills planning.",
        link: "/files/digital-transformation-strat-workforce-dev.pdf",
        file: "/files/digital-transformation-strat-workforce-dev.pdf"
      },

      {
        title: "Scharffen Bergen Chocolate Maker",
        type: "Operations Management",
        year: "2024",
        description:
          "Operations management case analysing capacity, bottlenecks and production decisions at Scharffen Bergen.",
        link: "/files/scharffen-bergen.pdf",
        file: "/files/scharffen-bergen.pdf"
      },
      {
        title: "Scharffen Bergen Chocolate Maker Annex",
        type: "Operations Management",
        year: "2024",
        description:
          "Annex materials (data and analysis) supporting the Scharffen Bergen operations management case.",
        link: "/files/scharffen-bergen-annex.pdf",
        file: "/files/scharffen-bergen-annex.pdf"
      },
      {
        title: "Three Jays Corporation",
        type: "Operations Management",
        year: "2024",
        description:
          "Operations case focused on inventory, demand management and process decisions at Three Jays.",
        link: "/files/three-jays.pdf",
        file: "/files/three-jays.pdf"
      },
    ],
  },
  {
    title: "Finance and Accounting",
    subtitle: "Coursework completed as part of the specialisation in finance requirements",
    projects: [
      {
        title:
          "The Merger and Separation of Dow and DuPont",
        type: "Mergers and Acquisitions",
        year: "2025",
        description:
          "A study of the merger and eventual separation of Dow and DuPont.",
        link: "/files/dow-dupont-merger.pdf",
        file: "/files/dow-dupont-merger.pdf"
      },
      {
        title: "GetGo",
        type: "Entrepreneurial Finance",
        year: "2025",
        description:
          "Entrepreneurial finance analysis of GetGo, focusing on funding, growth and unit economics.",
        link: "/files/getgo.pdf",
        file: "/files/getgo.pdf"
      },
      {
        title: "Acquisition of Heinz Presentation",
        type: "Financial Accounting",
        year: "2025",
        description:
          "Presentation examining the Heinz acquisition from an accounting and financial perspective.",
        link: "/files/heinz.pdf",
        file: "/files/heinz.pdf"
      },
      {
        title: "Acquisition of Heinz Report",
        type: "Financial Accounting",
        year: "2025",
        description:
          "Report on the Heinz acquisition with emphasis on accounting treatment and financial reporting implications.",
        link: "/files/heinz-report.pdf",
        file: "/files/heinz-report.pdf"
      },
      {
        title: "Evaluation of Mary Chia Holdings",
        type: "Corporate Finance",
        year: "2024",
        description:
          "DCF and relative valuation of Mary Chia Holdings, combining quantitative modelling and qualitative assessment.",
        link: "/files/mary-chia-holdings-eval.pdf",
        file: "/files/mary-chia-holdings-eval.pdf"
      },

      {
        title:
          "Does the Options Market Underreact to Firms' Left Tail Risk Presentation",
        type: "Financial Risk Management",
        year: "2025",
        description:
          "Presentation on a paper studying options markets’ reaction to left-tail risk in equity returns.",
        link: "/files/options-underreaction-to-left-tail-risk.pdf",
        file: "/files/options-underreaction-to-left-tail-risk.pdf"
      },
      {
        title:
          "Does the Options Market Underreact to Firms' Left Tail Risk Report",
        type: "Financial Risk Management",
        year: "2025",
        description:
          "Report on a paper studying options markets’ reaction to left-tail risk in equity returns.",
        link: "/files/options-underreaction-to-left-tail-risk-report.pdf",
        file: "/files/options-underreaction-to-left-tail-risk-report.pdf"
      },
      {
        title:
          "The Impact of Artificial Intelligence on the Hedge Fund Industry Presentation",
        type: "Hedge Funds",
        year: "2025",
        description:
          "Presentation-style analysis of AI adoption and implications in the hedge fund industry.",
        link: "/files/impact-of-ai-hedge-funds.pdf",
        file: "/files/impact-of-ai-hedge-funds.pdf"
      },
      {
        title:
          "The Impact of Artificial Intelligence on the Hedge Fund Industry Report",
        type: "Hedge Funds",
        year: "2025",
        description:
          "Detailed research report on how AI is reshaping hedge fund strategies, operations and competition.",
        link: "/files/impact-of-ai-hedge-funds-report.pdf",
        file: "/files/impact-of-ai-hedge-funds-report.pdf"
      },

      {
        title:
          "Introducing Klima Decentralised Autonomous Organisation",
        type: "Financial Innovation and Analytics",
        year: "2025",
        description:
          "Analysis of KlimaDAO’s model in voluntary carbon markets and its financial and ESG implications.",
        link: "/files/klima-dao.pdf",
        file: "/files/klima-dao.pdf"
      },
    ],
  },
  {
    title: "Branding and Marketing",
    subtitle: "Coursework completed as part of the Marketing, Brand Strategy and Consumer behaviour modules",
    projects: [
      {
        title: "Rebranding Formula 1",
        type: "Consumer Behaviour",
        year: "2024",
        description:
          "A study into the rebranding of Formula 1 using consumer behaviour concepts such as perception and attitude.",
        link: "/files/rebranding-f1.pdf",
        file: "/files/rebranding-f1.pdf"
      },
      {
        title: "Pitch Deck for Koufit by Koufu",
        type: "Marketing",
        year: "2024",
        description:
          "Concept and go-to-market pitch for a healthy, fitness-focused meals brand under Koufu.",
        link: "/files/koufit-pitch.pdf",
        file: "/files/koufit-pitch.pdf"
      },
      {
        title: "Case Study on Vinamilk",
        type: "Brand Strategy",
        year: "2025",
        description:
          "Developed a brand strategy for Vinamilk focused on growth in emerging Asian markets.",
        link: "/files/vinamilk-case-study.pdf",
        file: "/files/vinamilk-case-study.pdf"
      },
      {
        title: "Case Study on Nike",
        type: "Brand Strategy",
        year: "2025",
        description:
          "Analysed Nike’s brand strategy, consumer behaviour, and recommendations in the sportswear segment.",
        link: "/files/nike-case-study.pdf",
        file: "/files/nike-case-study.pdf"
      },
    ],
  },
  {
    title: "Strategy and Leadership ",
    subtitle: "Coursework completed as part of the Strategic Management and Organisational Behaviour and Human Resource modules",
    projects: [
      {
        title: "Developing a Competitive Advantage for Briefly",
        type: "Strategic Management",
        year: "2025",
        description:
          "Strategic management project on building sustainable competitive advantage for Briefly.",
        link: "/files/briefly-competitive-advantage.pdf",
        file: "/files/briefly-competitive-advantage.pdf"
      },
      {
        title:
          "Improving Talent Retention in the Singapore Armed Forces",
        type: "Strategic Management",
        year: "2025",
        description:
          "Strategic management project proposing initiatives to improve talent retention in the SAF.",
        link: "/files/talent-retention-saf.pdf",
        file: "/files/talent-retention-saf.pdf"
      },
      {
        title: "Board vs Bonds Case Study Presentation",
        type:
          "Organisational Behaviour and Human Resource",
        year: "2025",
        description:
          "Presentation on the Board vs Bonds leadership case, focusing on people dynamics and organisational behaviour.",
        link: "/files/board-v-bonds.pdf",
        file: "/files/board-v-bonds.pdf"
      },
      {
        title: "Board vs Bonds Case Study Leadership Case",
        type:
          "Organisational Behaviour and Human Resource",
        year: "2025",
        description:
          "Case study on Board vs Bonds draw out leadership lessons for senior management.",
        link: "/files/board-v-bonds-case.pdf",
        file: "/files/board-v-bonds-case.pdf"
      },

      {
        title: "Board vs Bonds Case Study Insights",
        type:
          "Organisational Behaviour and Human Resource",
        year: "2025",
        description:
          "Insights guide summarising key learnings and takeaways from the Board vs Bonds case.",
        link: "/files/board-v-bonds-insights.pdf",
        file: "/files/board-v-bonds-insights.pdf"
      },

    ],
  },
  {
    title: "Startups and Personal Projects",
    subtitle: "Projects completed with the Singapore Management University's Institute of Innovation and Entrepreneurship",
    projects: [
      {
        title: "Investor Pitch Deck for Briefly",
        type: "Personal Project",
        year: "2025",
        description:
          "Investor-focused pitch deck for Briefly, an AI-powered business insights platform for professionals.",
        link: "/files/briefly-pitch-deck-investor.pdf",
        file: "/files/briefly-pitch-deck-investor.pdf"
      },
      {
        title: "Sales Pitch Deck for The News Concierge",
        type: "Personal Project",
        year: "2025",
        description:
          "Sales deck for a curated news concierge service designed for busy professionals.",
        link: "/files/news-concierge-pitch-deck-sales.pdf",
        file: "/files/news-concierge-pitch-deck-sales.pdf"
      },
      {
        title: "Sales Pitch Deck for Advaisers",
        type: "Personal Project",
        year: "2025",
        description:
          "Sales deck for Advaisers, a platform that turns tutors’ materials into AI Q&A assistants for students.",
        link: "/files/advaisers-pitch-deck-sales.pdf",
        file: "/files/advaisers-pitch-deck-sales.pdf"
      },
    ],
  },
];

const skills = [
  "Python",
  "Typescript", 
  "React", 
  "Next.JS",
  "Railway", 
  "Render", 
  "Vercel", 
  "Langfuse", 
  "Supabase", 
  "QDrant", 
  "LlamaParse", 
  "Twilio", 
  "Resend",
  "News API", 
  "Open AI API",
  "Figma", 
  "Canva",
  "English", 
  "Mandarin", 
  "Malay"
];

// Premium Email Icon (outline)
const EmailIcon = () => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M41.6667 8.33337H8.33341C6.04175 8.33337 4.16675 10.2084 4.16675 12.5V37.5C4.16675 39.7917 6.04175 41.6667 8.33341 41.6667H41.6667C43.9584 41.6667 45.8334 39.7917 45.8334 37.5V12.5C45.8334 10.2084 43.9584 8.33337 41.6667 8.33337ZM41.6667 16.6667L25.0001 27.0834L8.33341 16.6667V12.5L25.0001 22.9167L41.6667 12.5V16.6667Z"
      fill="currentColor"
    />
  </svg>
);
// Premium LinkedIn Icon
const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.1h.1c.53-1 1.84-2.1 3.78-2.1 4.04 0 4.79 2.66 4.79 6.1V23h-4v-7.8c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.03-2.99 4.12V23h-4V8z"/>
  </svg>
);


// Premium WhatsApp Icon
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 448 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path d="M380.9 97.1C339-3.7 222.1-33.5 141.6 
    27.5c-72.6 55-92.1 157.4-41.9 234L54.2 
    423.5l165.4-43.5c75.7 28.6 162.7-9.3 
    197.5-82.2 33.6-69.2 14.3-152.1-36.2-200.7zM224.1 
    387.3c-25.5 0-50.4-6.7-72.4-19.4l-5.2-3-98.2 
    25.8 26.2-95.6-3.4-5.4c-50.3-80.3-8.3-186 
    85.3-211.7 94.6-25.7 192.2 38.3 203.5 
    134.3 11.7 101.3-67.9 175-136 175z"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 via-slate-50 to-zinc-100 text-zinc-900">
      {/* soft metallic background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-gradient-to-br from-white via-slate-200 to-zinc-300 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-[#d4af37] via-amber-200 to-zinc-200 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            {/* WELCOME */}
            <p
              className="
                text-xs uppercase
                font-semibold
                tracking-[0.22em]
                text-zinc-500
                mb-2
                transition-all duration-300
                hover:text-[#d4af37]
                hover:tracking-[0.28em]
              "
            >
              WELCOME TO MY PORTFOLIO
            </p>

            {/* NAME */}
            <h1
              className="
                font-heading
                text-3xl md:text-4xl
                font-semibold
                tracking-tight
                leading-tight
                text-zinc-900
                transition-all duration-300
                hover:text-[#d4af37]
                hover:tracking-[0.03em]
              "
            >
              TANG EN CI NATHAN
            </h1>

            {/* MBA LINE */}
            <p
              className="
                mt-2
                text-sm md:text-base
                text-zinc-600
                transition-all duration-300
                hover:text-[#d4af37]
                hover:tracking-[0.04em]
              "
            >
              Digital Transformation · Finance · Startups
            </p>

            {/* WEBSITES */}
            <div className="mt-4 space-y-1">

              <p
                className="
                  text-sm text-zinc-600
                  transition-all duration-300
                  hover:text-[#d4af37]
                  hover:tracking-[0.04em]
                "
              >
                <span className="font-bold text-zinc-800">Current Projects:</span>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                </a>
              </p>

              <p
                className="
                  text-sm text-zinc-600
                  transition-all duration-300
                  hover:text-[#d4af37]
                  hover:tracking-[0.04em]
                "
              >
                <span className="font-bold text-zinc-800">Advaisers:</span>{" "}
                <a
                  href="https://www.advaisers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  www.advaisers.com
                </a>
              </p>

              <p
                className="
                  text-sm text-zinc-600
                  transition-all duration-300
                  hover:text-[#d4af37]
                  hover:tracking-[0.04em]
                "
              >
                <span className="font-bold text-zinc-800">The Portfolio Atelier:</span>{" "}
                <a
                  href="https://www.theportfolioatelier.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  www.theportfolioatelier.com
                </a>
              </p>

              <p
                className="
                  text-sm text-zinc-600
                  transition-all duration-300
                  hover:text-[#d4af37]
                  hover:tracking-[0.04em]
                "
              >
                <span className="font-bold text-zinc-800">Moonie Rocket:</span>{" "}
                <a
                  href="https://www.moonierocket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  www.moonierocket.com
                </a>
              </p>
            </div>
          </div>


          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nathan-tang-5057b6218/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-8 h-8 group transition-transform duration-200 hover:-translate-y-[5px]"
              title="LinkedIn"
            >
              <img
                src="/icons/linkedin-grey.svg"
                alt="linkedin"
                className="absolute inset-0 w-8 h-8 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
              />
              <img
                src="/icons/linkedin-gold.svg"
                alt="linkedin-gold"
                className="absolute inset-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:nathantang7744@gmail.com"
              className="relative inline-flex items-center justify-center w-9 h-9 group transition-transform duration-200 hover:-translate-y-[5px]"
              title="Email"
            >
              <img
                src="/icons/email-grey.svg"
                alt="email"
                className="absolute inset-0 w-9 h-9 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
              />
              <img
                src="/icons/email-gold.svg"
                alt="email-gold"
                className="absolute inset-0 w-9 h-9 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6582039319"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-8 h-8 group transition-transform duration-200 hover:-translate-y-[5px]"
              title="WhatsApp"
            >
              <img
                src="/icons/whatsapp-grey.svg"
                alt="whatsapp"
                className="absolute inset-0 w-8 h-8 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
              />
              <img
                src="/icons/whatsapp-gold.svg"
                alt="whatsapp-gold"
                className="absolute inset-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          </div>

        </header>

        {/* About + Skills */}
        <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* About card */}
          <div
            className="
              bg-white/85 border border-zinc-200 rounded-2xl p-5 shadow-sm
              transition-all duration-300
              hover:-translate-y-[4px] hover:shadow-xl hover:border-[#d4af37]/70
              hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)]
              transform-gpu will-change-transform
            "
          >
            <h2
              className="
                font-heading
                text-lg
                font-semibold
                mb-3
                text-zinc-900
                tracking-tight
                transition-all duration-300
                hover:text-[#d4af37]
                hover:tracking-[0.05em]
              "
            >
              About
            </h2>
            <div className="text-sm md:text-base text-zinc-700 leading-relaxed space-y-3">
              <p>
                This site showcases my work throughout my Masters in Business Administration
                at the Singapore Management University.
              </p>
              <p>This consists of the following modules:</p>
              <p>
                <span className="font-semibold text-zinc-900">Core Modules:</span>{" "}
                Operations Management, Marketing, Strategic Management, Digital
                Transformation, Corporate Finance, Financial Accounting, Business
                Analytics, Organisational Behaviour and Human Resource
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Elective Modules:</span>{" "}
                Hedge Funds, Financial Innovation and Analytics, Machine Learning for
                Decision Making, Mergers and Acquisitions, Financial Risk Management,
                Brand Strategy, Consumer Behaviour, Digital Marketing, Entrepreneurship
                and Business Planning
              </p>
            </div>
          </div>

          {/* Skills card */}
          <div
            className="
              bg-white/85 border border-zinc-200 rounded-2xl p-5 shadow-sm
              transition-all duration-300
              hover:-translate-y-[4px] hover:shadow-xl hover:border-[#d4af37]/70
              hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)]
              transform-gpu will-change-transform
            "
          >
            <h2
              className="
                font-heading
                text-lg
                font-semibold
                mb-3
                text-zinc-900
                tracking-tight
                transition-all duration-300
                hover:text-[#d4af37]
                hover:tracking-[0.05em]
              "
            >
              Other Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="
                    rounded-full border border-zinc-200 
                    bg-gradient-to-r from-white via-zinc-50 to-slate-100 
                    px-3 py-1 text-xs md:text-sm text-zinc-800
                    shadow-[0_0_0_1px_rgba(255,255,255,0.8)]
                    transition-all duration-200
                    hover:-translate-y-[1px] hover:border-[#d4af37]/60
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects grouped by section */}
        <section className="mb-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  {/* Section title */}
                  <h2
                    className="
                      font-heading text-xl md:text-2xl font-semibold text-zinc-900
                      tracking-tight
                      transition-all duration-300
                      hover:text-[#d4af37]
                      hover:tracking-[0.05em]
                    "
                  >
                    {section.title}
                  </h2>

                  {/* Section subtitle */}
                  {section.subtitle && (
                    <p
                      className="
                        text-sm md:text-base text-zinc-500 mt-1
                        transition-all duration-300
                        hover:text-[#d4af37]
                        hover:tracking-[0.06em]
                      "
                    >
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-zinc-500">
                  Click a card to open the full file
                </p>
              </div>


              {/* Project cards */}
              <div className="grid gap-4 md:grid-cols-2">
                {section.projects.map((p) => (

                  <a
                    key={p.title}
                    href={p.link}
                    className="
                      group relative overflow-hidden rounded-2xl
                      border border-zinc-200 bg-white/90
                      shadow-sm transition
                      hover:-translate-y-[2px]
                      hover:shadow-md
                      hover:border-[#d4af37]/80
                    "
                  >
                    {/* PDF thumbnail */}
                    <div className="relative h-40 md:h-56 w-full overflow-hidden bg-zinc-100">
                      <object
                        data={`${p.file}#page=1&view=FitH`}
                        type="application/pdf"
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0" />
                    </div>

                    {/* Content */}
                    <div className="p-4 relative">
                      <div
                        className="
                          absolute inset-y-0 right-[-40%] w-[60%]
                          bg-gradient-to-l
                          from-[#d4af37]/20 via-amber-100/40 to-transparent
                          opacity-0 transition
                          group-hover:opacity-100
                        "
                      />
                      <div className="flex items-baseline justify-between gap-2 mb-1 relative">
                        <h3 className="font-semibold text-sm md:text-base text-zinc-900">
                          {p.title}
                        </h3>
                        <span className="text-[11px] text-zinc-500">{p.year}</span>
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#b08d2c] mb-2">
                        {p.type}
                      </p>
                      <p className="text-sm text-zinc-700 leading-snug">{p.description}</p>
                      <p className="mt-3 text-xs text-[#b08d2c] font-medium">Open ↗</p>
                    </div>
                  </a>

                ))}
              </div>
            </div>
          ))}
        </section>


      </div>
    </main>
  );
}

