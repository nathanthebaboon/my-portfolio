// app/page.tsx

type Project = {
  title: string;
  type: string;
  year: string;
  description: string;
  link: string;
};

type ProjectSection = {
  title: string;
  subtitle?: string;
  projects: Project[];
};

const sections: ProjectSection[] = [
  {
    title: "Digital Transformation and Operations",
    subtitle: "Brand positioning, marketing, and competitive advantage",
    projects: [
      {
        title: "Improving Verification of Refund Claims on GrabFood",
        type: "Business Analytics",
        year: "2025",
        description:
          "Analytics project to detect suspicious refund claims and reduce financial leakage for GrabFood.",
        link: "/files/grab-refund-claims.pdf",
      },
      {
        title: "Pitch Deck for SkillsSphere",
        type: "Digital Transformation",
        year: "2025",
        description:
          "Pitch deck for SkillsSphere, a platform focused on skills mapping and workforce development.",
        link: "/files/skillsphere-pitch-deck.pdf",
      },
      {
        title:
          "Digital Transformation in Strategic Workforce Development",
        type: "Digital Transformation",
        year: "2025",
        description:
          "Conceptual design of a digital platform for strategic workforce development and skills planning.",
        link: "/files/digital-transformation-strat-workforce-dev.pdf",
      },

      {
        title: "Scharffen Bergen Chocolate Maker",
        type: "Operations Management",
        year: "2025",
        description:
          "Operations management case analysing capacity, bottlenecks and production decisions at Scharffen Bergen.",
        link: "/files/scharffen-bergen.pdf",
      },
      {
        title: "Scharffen Bergen Chocolate Maker Annex",
        type: "Operations Management",
        year: "2025",
        description:
          "Annex materials (data and analysis) supporting the Scharffen Bergen operations management case.",
        link: "/files/scharffen-bergen-annex.xlsx",
      },
      {
        title: "Three Jays Corporation",
        type: "Operations Management",
        year: "2024",
        description:
          "Operations case focused on inventory, demand management and process decisions at Three Jays.",
        link: "/files/three-jays.pdf",
      },
    ],
  },
  {
    title: "Finance and Accounting",
    subtitle: "Valuation, corporate finance, accounting and risk management",
    projects: [
            {
        title: "Evaluation of Mary Chia Holdings",
        type: "Corporate Finance",
        year: "2024",
        description:
          "DCF and relative valuation of Mary Chia Holdings, combining quantitative modelling and qualitative assessment.",
        link: "/files/mary-chia-holdings-eval.pdf",
      },

      {
        title: "Acquisition of Heinz Report",
        type: "Financial Accounting",
        year: "2025",
        description:
          "Report on the Heinz acquisition with emphasis on accounting treatment and financial reporting implications.",
        link: "/files/heinz-report.pdf",
      },
      {
        title: "Acquisition of Heinz Presentation",
        type: "Financial Accounting",
        year: "2025",
        description:
          "Presentation examining the Heinz acquisition from an accounting and financial perspective.",
        link: "/files/heinz.pdf",
      },
      {
        title: "GetGo",
        type: "Entrepreneurial Finance",
        year: "2025",
        description:
          "Entrepreneurial finance analysis of GetGo, focusing on funding, growth and unit economics.",
        link: "/files/getgo.pdf",
      },
      {
        title:
          "Does the Options Market Underreact to Firms' Left Tail Risk",
        type: "Financial Risk Management",
        year: "2024",
        description:
          "Risk management paper studying options markets’ reaction to left-tail risk in equity returns.",
        link: "/files/options-underreaction-to-left-tail-risk.pdf",
      },
      {
        title:
          "The Impact of Artificial Intelligence on the Hedge Fund Industry Report",
        type: "Hedge Funds",
        year: "2025",
        description:
          "Detailed research report on how AI is reshaping hedge fund strategies, operations and competition.",
        link: "/files/impact-of-ai-hedge-funds-report.pdf",
      },
      {
        title:
          "The Impact of Artificial Intelligence on the Hedge Fund Industry Presentation",
        type: "Hedge Funds",
        year: "2025",
        description:
          "Presentation-style analysis of AI adoption and implications in the hedge fund industry.",
        link: "/files/impact-of-ai-hedge-funds.pdf",
      },
      {
        title:
          "Introducing Klima Decentralised Autonomous Organisation",
        type: "Financial Innovation and Analytics",
        year: "2024",
        description:
          "Analysis of KlimaDAO’s model in voluntary carbon markets and its financial and ESG implications.",
        link: "/files/klima-dao.pdf",
      },
    ],
  },
  {
    title: "Branding and Marketing",
    subtitle: "Operations, workforce planning and digital platforms",
    projects: [
      {
        title: "Pitch Deck for Koufit by Koufu",
        type: "Marketing",
        year: "2024",
        description:
          "Concept and go-to-market pitch for a healthy, fitness-focused meals brand under Koufu.",
        link: "/files/koufit-pitch.pdf",
      },
      {
        title: "Case Study on Vinamilk",
        type: "Brand Strategy",
        year: "2024",
        description:
          "Developed a brand strategy for Vinamilk focused on growth in emerging Asian markets.",
        link: "/files/vinamilk-case-study.pdf",
      },
      {
        title: "Case Study on Nike",
        type: "Brand Strategy",
        year: "2025",
        description:
          "Analysed Nike’s brand strategy, consumer behaviour, and recommendations in the sportswear segment.",
        link: "/files/nike-case-study.pdf",
      },
    ],
  },
  {
    title: "Strategy and Leadership ",
    subtitle: "Organisational behaviour, leadership and HR",
    projects: [
      {
        title: "Developing a Competitive Advantage for Briefly",
        type: "Strategic Management",
        year: "2025",
        description:
          "Strategic management project on building sustainable competitive advantage for Briefly.",
        link: "/files/briefly-competitive-advantage.pdf",
      },
      {
        title:
          "Improving Talent Retention in the Singapore Armed Forces",
        type: "Strategic Management",
        year: "2025",
        description:
          "Strategic management project proposing initiatives to improve talent retention in the SAF.",
        link: "/files/talent-retention-saf.pdf",
      },
      {
        title: "Board vs Bonds Case Study Leadership Case",
        type:
          "Organisational Behaviour and Human Resource Assignment",
        year: "2024",
        description:
          "Case study on Board vs Bonds draw out leadership lessons for senior management.",
        link: "/files/board-v-bonds-case.pdf",
      },
      {
        title: "Board vs Bonds Case Study Presentation",
        type:
          "Organisational Behaviour and Human Resource",
        year: "2025",
        description:
          "Presentation on the Board vs Bonds leadership case, focusing on people dynamics and organisational behaviour.",
        link: "/files/board-v-bonds.pdf",
      },
      {
        title: "Board vs Bonds Case Study Insights",
        type:
          "Organisational Behaviour and Human Resource",
        year: "2025",
        description:
          "Insights guide summarising key learnings and takeaways from the Board vs Bonds case.",
        link: "/files/board-v-bonds-insights.pdf",
      },

    ],
  },
  {
    title: "Startups and Personal Projects",
    subtitle: "Real-world startup pitching and product storytelling",
    projects: [
      {
        title: "Investor Pitch Deck for Briefly",
        type: "Personal Project",
        year: "2025",
        description:
          "Investor-focused pitch deck for Briefly, an AI-powered business insights platform for professionals.",
        link: "/files/briefly-pitch-deck-investor.pdf",
      },
      {
        title: "Sales Pitch Deck for The News Concierge",
        type: "Personal Project",
        year: "2024",
        description:
          "Sales deck for a curated news concierge service designed for busy professionals.",
        link: "/files/news-concierge-pitch-deck-sales.pdf",
      },
      {
        title: "Sales Pitch Deck for Advaisers",
        type: "Personal Project",
        year: "2025",
        description:
          "Sales deck for Advaisers, a platform that turns tutors’ materials into AI Q&A assistants for students.",
        link: "/files/advaisers-pitch-deck-sales.pdf",
      },
    ],
  },
];


const skills = [
  "Financial & Valuation Modelling",
  "Business Analytics & Data Visualisation",
  "Digital Transformation & Product Thinking",
  "Python for Analytics",
  "Next.js & React (basic)",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* soft gradient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-sky-500 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Nathan Tang
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-300">
              MBA (SMU) · Analytics · Strategy · Digital Transformation
            </p>
          </div>

          <div className="self-start md:self-auto">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs md:text-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold">
                NT
              </div>
              <div>
                <p className="font-medium">Based in Singapore</p>
                <p className="text-slate-400">Open to projects & collaborations</p>
              </div>
            </div>
          </div>
        </header>

        {/* About + Skills */}
        <section className="mb-12 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <div>
            <h2 className="text-lg font-semibold mb-3">About</h2>
              <div className="text-sm md:text-base text-slate-200 leading-relaxed space-y-4">
                <p>
                  This site showcases my work throughout my Masters in Business Administration at the Singapore Management University.
                </p>
                <p>
                  This consists of the following modules:
                </p>
                <p>
                  Core Modules: Operations Management, Marketing, Strategic Management, Digital Transformation, Corporate Finance, Financial Accounting, Business Analytics, Organisational Behaviour and Human Resource
                </p>
                <p>
                  Elective Modules: Hedge Funds, Financial Innovation and Analytics, Machine Learning for Decision Making, Mergers and Acquisitions, Financial Risk Management, Brand Strategy, Consumer Behaviour, Digital Marketing, Entrepreneurship and Business Planning
                </p>
              </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs md:text-sm text-slate-100"
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
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  {section.subtitle && (
                    <p className="text-xs text-slate-400 mt-1">
                      {section.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-[11px] text-slate-500">
                  Click a card to open the full file
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {section.projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.link}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-[2px] hover:border-sky-500 hover:bg-slate-900"
                  >
                    <div className="absolute inset-y-0 right-[-40%] w-[60%] bg-gradient-to-l from-sky-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="flex items-baseline justify-between gap-2 mb-1 relative">
                      <h3 className="font-semibold text-sm md:text-base">
                        {p.title}
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {p.year}
                      </span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-sky-400 mb-2">
                      {p.type}
                    </p>
                    <p className="text-sm text-slate-200 leading-snug">
                      {p.description}
                    </p>
                    <p className="mt-3 text-xs text-sky-300">Open ↗</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>


        {/* Contact */}
        <section className="border-t border-slate-800 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm md:text-base text-slate-200">
            Email:{" "}
            <a
              href="mailto:nathantang7744@gmail.com"
              className="underline underline-offset-2"
            >
              nathantang7744@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nathan-tang-5057b6218/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              linkedin.com/in/nathan-tang-5057b6218/
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
