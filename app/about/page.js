import { EditorFile } from "@/components/vscode/editor";
import {
  Line,
  kw,
  fn,
  str,
  va,
  pn,
} from "@/components/vscode/syntax";
import { Badge, PanelTitle, TextMuted } from "@/components/vscode/ui";

export default function About() {
  return (
    <EditorFile
      filename="about.jsx"
      language="JavaScript JSX"
      previewLabel="About Me"
      preview={
        <>
          <div className="mx-auto max-w-3xl">
            {/* Profile header */}
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-chrome-strong bg-editor-soft text-3xl font-semibold text-sky-300">
                J
              </div>
              <div>
                <PanelTitle>Jonas</PanelTitle>
                <TextMuted>
                  Full-stack developer building fast, minimal tools with the
                  Next.js App Router. This is the live preview of the{" "}
                  <span className="font-mono text-fg">about.jsx</span> template.
                </TextMuted>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge color="bg-selection text-teal-200">React</Badge>
                  <Badge color="bg-selection text-orange-200">Tailwind</Badge>
                  <Badge color="bg-selection text-purple-200">Node</Badge>
                </div>
              </div>
            </div>

            <div className="my-8 h-px bg-chrome-strong" />

            {/* C# Developer */}
            <section>
              <div className="flex flex-wrap items-center gap-3">
                <PanelTitle className="mb-0!">C# Developer</PanelTitle>
                <Badge color="bg-selection text-teal-200">
                  December 2023 – Present
                </Badge>
              </div>
              <TextMuted className="mt-3">
                I develop and maintain business applications, focusing on
                automation, system improvements, database-driven solutions, and
                application performance.
              </TextMuted>
            </section>

            {/* Career Progress */}
            <section className="mt-9">
              <PanelTitle>Career Progress</PanelTitle>
              <div className="space-y-6">
                {[
                  {
                    year: "2023",
                    title: "Foundation",
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
                    ],
                  },
                ].map((e) => (
                  <div
                    key={e.year}
                    className="relative border-l border-chrome-strong pl-5"
                  >
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-sky-400 bg-editor" />
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-mono text-sm font-semibold text-sky-300">
                        {e.year}
                      </span>
                      <span className="text-sm font-semibold text-fg">
                        — {e.title}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 text-[13px] leading-5 text-fg-muted"
                        >
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-fg-dim" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Current Skills */}
            <section className="mt-9">
              <PanelTitle>Current Skills</PanelTitle>
              <div className="flex flex-wrap gap-2">
                {[
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
                ].map((s, i) => (
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
            </section>
          </div>
        </>
      }
    >
      <Line n={1}>
        {kw("export const")} {va("profile")} {pn("=")} {"{"}
      </Line>
      <Line n={2}>
        {"  "}{va("name")}{pn(":")} {str('"Jonas"')}{pn(",")}
      </Line>
      <Line n={3}>
        {"  "}{va("role")}{pn(":")} {str('"Full-stack Developer"')}{pn(",")}
      </Line>
      <Line n={4}>
        {"  "}{va("location")}{pn(":")} {str('"Philippines, PH"')}{pn(",")}
      </Line>
      <Line n={5}>
        {"  "}{va("stack")}{pn(":")} {"["}{str('"Next.js"')}{pn(", ")}{str('"React"')}{pn(", ")}{str('"Tailwind"')}{pn(", ")}{str('"Node"')}{pn("]")}{pn(",")}
      </Line>
      <Line n={6}>
        {pn("}")}
      </Line>
      <Line n={7} />
      <Line n={8}>
        {kw("export default function")} {fn("About")}{pn("()")} {"{"}
      </Line>
      <Line n={9}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={10}>
        {"    "}{pn("<")}{va("section")} {va("className")}={str('"p-8"')}{pn(">")}
      </Line>
      <Line n={11}>
        {"      "}{pn("<")}{va("h1")}{pn(">")}{pn("{")}{va("profile")}{pn(".")}{va("name")}{pn("}")}{pn("</")}{va("h1")}{pn(">")}
      </Line>
      <Line n={12}>
        {"      "}{pn("<")}{va("p")}{pn(">")}{pn("{")}{va("profile")}{pn(".")}{va("role")}{pn("}")}{pn("</")}{va("p")}{pn(">")}
      </Line>
      <Line n={13}>
        {"      "}{pn("<")}{va("ul")}{pn(">")}
      </Line>
      <Line n={14}>
        {"        "}{pn("{")}{va("profile")}{pn(".")}{va("stack")}{pn(".")}{fn("map")}{pn("(")}{pn("(")}{va("s")}{pn(")")} {kw("=>")} {pn("(")}
      </Line>
      <Line n={15}>
        {"          "}{pn("<")}{va("li")} {va("key")}={pn("{")}{va("s")}{pn("}")}{pn(">")}{pn("{")}{va("s")}{pn("}")}{pn("</")}{va("li")}{pn(">")}
      </Line>
      <Line n={16}>
        {"        "}{pn(")")}{pn(")")}
      </Line>
      <Line n={17}>
        {"      "}{pn("</")}{va("ul")}{pn(">")}
      </Line>
      <Line n={18}>
        {"    "}{pn("</")}{va("section")}{pn(">")}
      </Line>
      <Line n={19}>
        {"  "}{pn(")")}
      </Line>
      <Line n={20}>{pn("}")}</Line>
    </EditorFile>
  );
}
