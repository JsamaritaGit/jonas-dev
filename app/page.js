import { EditorFile } from "@/components/vscode/editor";
import {
  Line,
  kw,
  fn,
  str,
  cm,
  va,
  pn,
} from "@/components/vscode/syntax";
import { Badge, PanelTitle, TextMuted } from "@/components/vscode/ui";
import ZoomImage from "@/components/vscode/ZoomImage";
import Typewriter from "@/components/vscode/Typewriter";
import profilePic from "@/app/resources/jonas-profile-pic.jpg";

const TIMELINE = [
  {
    year: "2020-21",
    title: "Early Career Development",
    points: [
      "Started as a secondary developer (junior developer).",
      "Learned VB6 and .NET fundamentals.",
      "Gained experience with WinForms and SQL Server.",
    ],
  },
  {
    year: "2023",
    title: "C#/.NET Developer",
    points: [
      "Started as a C#/.NET developer.",
      "Worked with WinForms and SQL Server.",
      "Learned existing systems, business processes, and database structures.",
    ],
  },
  {
    year: "2024",
    title: "Application Development",
    points: [
      "Developed new features and business applications.",
      "Expanded skills in C#, Dapper, T-SQL, and database development.",
      "Started using Git and ClickOnce deployment.",
    ],
  },
  {
    year: "2025",
    title: "Advanced Development",
    points: [
      "Focused on application architecture, performance, and security.",
      "Improved SQL queries and large-data processing.",
      "Applied async programming and reusable components.",
    ],
  },
  {
    year: "2026",
    title: "Full-Stack Development",
    points: [
      "Expanded into modern web development.",
      "Working with Next.js, React, TypeScript, Tailwind CSS, and Supabase.",
      "Developing full-stack applications with authentication, authorization, and cloud deployment.",
      "Transitioning into an instructor role at Kolehiyo ng Subic — Computer Science Department.",
    ],
  },
];

const SKILLS = [
  "C#",
  ".NET",
  "WinForms",
  "SQL Server",
  "Dapper",
  "T-SQL",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
];

export default function Home() {
  return (
    <EditorFile
      filename="home.jsx"
      language="JavaScript JSX"
      previewLabel="Profile"
      preview={
        <>
          <div className="relative -m-4 flex min-h-[calc(100%+2rem)] flex-col overflow-hidden md:-m-5 md:min-h-[calc(100%+2.5rem)]">
            {/* Blurred profile photo background
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70 blur-lg"
              style={{ backgroundImage: `url(${profilePic.src})` }}
            /> */}
            <div className="relative z-10 flex-1 p-5">
              <div className="mx-auto max-w-5xl">
                <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
                  {/* Profile hero */}
                  <div className="flex flex-col gap-4 rounded-md border border-chrome-strong bg-editor p-5 transition-colors duration-200 hover:border-orange-400/80 md:col-span-2">
                    <div className="flex items-center gap-4">
                      <ZoomImage
                        src={profilePic.src}
                        alt="Jonas Samarita"
                        className="h-20 w-20 rounded-full border-2 border-chrome-strong object-cover"
                      />
                      <div>
                        <div className="text-lg font-semibold text-fg">
                          Jonas
                        </div>
                        <div className="font-mono text-[13px] text-sky-300">
                          Full-stack Developer
                        </div>
                        <div className="font-mono text-[11px] text-fg-dim">
                          Castillejos Zambales, Philippines, 09054239012
                        </div>
                      </div>
                    </div>
                    <Typewriter text="Experienced C#/.NET developer with a strong foundation in WinForms and SQL Server. Skilled in building business applications, optimizing database performance, and implementing modern web technologies. Passionate about continuous learning and contributing to innovative projects." />
                    <div className="mt-auto flex flex-wrap gap-2">
                      <a
                        href="mailto:jonas27samarita@gmail.com"
                        className="rounded-sm bg-selection px-2 py-1 font-mono text-[11px] text-sky-200 hover:brightness-125"
                      >
                        jonas27samarita@gmail.com
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jonas-samarita-922695247/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-sm bg-selection px-2 py-1 font-mono text-[11px] text-sky-200 hover:brightness-125"
                      >
                        linkedin
                      </a>
                      <a href="https://www.facebook.com/jonas.samarita/" target="_blank" rel="noreferrer" className="rounded-sm bg-selection px-2 py-1 font-mono text-[11px] text-sky-200 hover:brightness-125">
                        facebook
                      </a>
                      <a href="https://github.com/JsamaritaGit" target="_blank" rel="noreferrer" className="rounded-sm bg-selection px-2 py-1 font-mono text-[11px] text-sky-200 hover:brightness-125">
                        github
                      </a>
                    </div>
                  </div>

                  {/* Current Skills */}
                  <div className="rounded-md border border-chrome-strong bg-editor p-5 transition-colors duration-200 hover:border-orange-400/80 md:col-span-1 md:row-span-2">
                    <PanelTitle className="mb-0!">Current Skills</PanelTitle>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SKILLS.map((s, i) => (
                        <Badge
                          key={s}
                          color={
                            i % 2 === 0
                              ? "bg-selection text-sky-200"
                              : "bg-selection text-teal-200"
                          }
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* C# Developer */}
                  <div className="rounded-md border border-chrome-strong bg-editor p-4 transition-colors duration-200 hover:border-orange-400/80 md:col-span-1">
                    <PanelTitle className="mb-0!">C# Developer</PanelTitle>
                    <div className="mt-1 font-mono text-[11px] text-fg-dim">
                      December 2023 – September 2026
                    </div>
                    <TextMuted className="mt-2">

                      Business enterprise applications — automation, system improvements,
                      database-driven solutions, and application performance.
                      
                    </TextMuted>
                  </div>

                  {/* Career Progress */}
                  {TIMELINE.map((e) => (
                    <div
                      key={e.year}
                      className="rounded-md border border-chrome-strong bg-editor p-4 transition-colors duration-200 hover:border-orange-400/80 md:col-span-1"
                    >
                      <div className="font-mono text-sm font-semibold text-sky-300">
                        {e.year}
                      </div>
                      <div className="mt-0.5 text-[13px] font-semibold text-fg">
                        {e.title}
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {e.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2 text-[12px] leading-4 text-fg-muted"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-fg-dim" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      }
    >
      <Line n={1}>
        {kw("import")} {"{ "}{va("BentoCard")}{" }"} {kw("from")} {str("'../components/bento'")}
      </Line>
      <Line n={2}>
        {kw("import")} {va("profile")} {kw("from")} {str("'../data/profile'")}
      </Line>
      <Line n={3} />
      <Line n={4}>{cm("// Home — bento layout.")}</Line>
      <Line n={5}>
        {kw("export default function")} {fn("Home")}{pn("()")} {"{"}
      </Line>
      <Line n={6}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={7}>
        {"    "}{pn("<")}{va("section")} {va("className")}={str('"grid grid-cols-3 gap-4"')}{pn(">")}
      </Line>
      <Line n={8}>
        {"      "}{pn("<")}{va("BentoCard")} {va("span")}={str('"col-span-2 row-span-2"')}{pn(">")}
      </Line>
      <Line n={9}>
        {"        "}{pn("<")}{va("img")} {va("src")}={pn("{")}{va("profile")}{pn(".")}{va("photo")}{pn("}")} {pn("/>")}
      </Line>
      <Line n={10}>
        {"        "}{pn("<")}{va("h1")}{pn(">")}{pn("{")}{va("profile")}{pn(".")}{va("name")}{pn("}")}{pn("</")}{va("h1")}{pn(">")}
      </Line>
      <Line n={11}>
        {"      "}{pn("</")}{va("BentoCard")}{pn(">")}
      </Line>
      <Line n={12}>
        {"      "}{pn("{")}{va("profile")}{pn(".")}{va("skills")}{pn(".")}{fn("map")}{pn("(")}{pn("(")}{va("s")}{pn(")")} {kw("=>")} {pn("(")}
      </Line>
      <Line n={13}>
        {"        "}{pn("<")}{va("Badge")} {va("key")}={pn("{")}{va("s")}{pn("}")}{pn(">")}{pn("{")}{va("s")}{pn("}")}{pn("</")}{va("Badge")}{pn(">")}
      </Line>
      <Line n={14}>
        {"      "}{pn(")")}{pn(")")}
      </Line>
      <Line n={15}>
        {"    "}{pn("</")}{va("section")}{pn(">")}
      </Line>
      <Line n={16}>
        {"  "}{pn(")")}
      </Line>
      <Line n={17}>{pn("}")}</Line>
    </EditorFile>
  );
}
