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
import profilePic from "@/app/resources/jonas-profile-pic.jpg";

const EXPERIENCE = [
  {
    role: "Instructor",
    company: "Kolehiyo ng Subic — Computer Science Department",
    period: "September 2026 – Present",
    location: "Subic, Philippines",
    current: true,
    points: [
      "Transitioning into teaching in the Computer Science Department.",
    ],
  },
  {
    role: "System Developer/Programmer",
    company: "Sanyo Denki Philippines, Inc.",
    period: "December 2023 – September 2026",
    location: "Subic Bay Freeport Zone, Philippines",
    current: false,
    points: ["Managed software development & maintenance."],
  },
  {
    role: "Data Entry Operator",
    company: "Exela Technologies",
    period: "September 2023 – November 2023",
    location: "Subic, Philippines",
    points: [
      "Inserted customer and account data from source documents within time limits.",
      "Compiled, verified accuracy, and sorted information according to priorities.",
      "Reviewed data for deficiencies or errors and checked output.",
    ],
  },
  {
    role: "Administrative Staff",
    company: "Merry Telecommunication Installation Services",
    period: "September 2021 – March 2023",
    location: "Philippines",
    points: ["Monitored project progress.", "Processed billing documents."],
  },
  {
    role: "Secondary Developer",
    company: "Kolehiyo ng Subic",
    period: "June 2020 – September 2021",
    location: "Subic, Philippines",
    points: [
      "Handled database maintenance.",
      "Developed the school's current enrolment system.",
    ],
  },
  {
    role: "Administrative Clerk",
    company: "Kolehiyo ng Subic",
    period: "June 2019 – July 2020",
    location: "Subic, Zambales",
    points: [],
  },
];

export default function About() {
  return (
    <EditorFile
      filename="about.jsx"
      language="JavaScript JSX"
      previewLabel="Job History"
      preview={
        <>
          <div className="mx-auto max-w-5xl">
            <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
              {/* Profile hero */}
              <div className="flex flex-col gap-4 rounded-md border border-chrome-strong bg-editor p-5 md:col-span-2 md:row-span-2">
                <div>
                  <div className="text-lg font-semibold text-fg">
                    Jonas Samarita
                  </div>
                  <div className="mt-0.5 font-mono text-[13px] text-sky-300">
                    Instructor, Computer Science Department
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-fg-dim">
                    Kolehiyo ng Subic · Subic, Central Luzon, Philippines
                  </div>
                </div>
                <TextMuted>
                  C#/.NET developer transitioning into teaching — bringing
                  business application experience to the Computer Science
                  Department at Kolehiyo ng Subic.
                </TextMuted>
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
                </div>
              </div>

              {/* Top skills */}
              <div className="rounded-md border border-chrome-strong bg-editor p-5 md:col-span-1 md:row-span-2">
                <span className="text-[11px] font-medium uppercase tracking-widest text-fg-muted">
                  Top Skills
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>GitHub</Badge>
                  <Badge color="bg-selection text-teal-200">Next.js</Badge>
                  <Badge color="bg-selection text-purple-200">Node.js</Badge>
                </div>
              </div>

              {/* Experience */}
              {EXPERIENCE.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="rounded-md border border-chrome-strong bg-editor p-4 md:col-span-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[13px] font-semibold text-fg">
                      {job.role}
                    </span>
                    {job.current ? (
                      <Badge color="bg-selection text-teal-200">Current</Badge>
                    ) : null}
                  </div>
                  <div className="mt-1 font-mono text-[12px] text-sky-300">
                    {job.company}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] text-fg-dim">
                    {job.period}
                  </div>
                  {job.points.length > 0 ? (
                    <ul className="mt-2 space-y-1">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 text-[12px] leading-4 text-fg-muted"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-fg-dim" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              {/* Education */}
              <div className="rounded-md border border-chrome-strong bg-editor p-4 md:col-span-3">
                <span className="text-[11px] font-medium uppercase tracking-widest text-fg-muted">
                  Education
                </span>
                <div className="mt-2 text-[13px] font-semibold text-fg">
                  Kolehiyo ng Subic
                </div>
                <div className="text-[11px] text-fg-dim">
                  BS in Computer Science
                </div>
                <div className="text-[11px] text-fg-dim">
                  March 2017 – April 2020
                </div>
              </div>
            </div>
          </div>
        </>
      }
    >
      <Line n={1}>
        {kw("export const")} {va("experience")} {pn("=")} {"["}
      </Line>
      <Line n={2}>
        {"  "}{pn("{")} {va("role")}{pn(":")} {str('"System Developer/Programmer"')}{pn(",")}
      </Line>
      <Line n={3}>
        {"  "}{va("company")}{pn(":")} {str('"Sanyo Denki Philippines, Inc."')}{pn(",")}
      </Line>
      <Line n={4}>
        {"  "}{va("start")}{pn(":")} {str('"December 2023"')}{pn(",")}
      </Line>
      <Line n={5}>
        {"  "}{va("current")}{pn(":")} {kw("true")}{pn(",")}
      </Line>
      <Line n={6}>
        {"  "}{pn("}")}{pn(",")}
      </Line>
      <Line n={7}>
        {"  "}{pn("{")} {va("role")}{pn(":")} {str('"Data Entry Operator"')}{pn(",")}
      </Line>
      <Line n={8}>
        {"  "}{va("company")}{pn(":")} {str('"Exela Technologies"')}{pn(",")}
      </Line>
      <Line n={9}>
        {"  "}{pn("}")}
      </Line>
      <Line n={10}>
        {pn("]")}
      </Line>
      <Line n={11} />
      <Line n={12}>
        {cm("// Job history — from LinkedIn profile.")}
      </Line>
      <Line n={13}>
        {kw("export default function")} {fn("About")}{pn("()")} {"{"}
      </Line>
      <Line n={14}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={15}>
        {"    "}{pn("{")}{va("experience")}{pn(".")}{fn("map")}{pn("(")}{pn("(")}{va("job")}{pn(")")} {kw("=>")} {pn("(")}
      </Line>
      <Line n={16}>
        {"      "}{pn("<")}{va("article")} {va("key")}={pn("{")}{va("job")}{pn(".")}{va("role")}{pn("}")}{pn(">")}
      </Line>
      <Line n={17}>
        {"        "}{pn("<")}{va("h2")}{pn(">")}{pn("{")}{va("job")}{pn(".")}{va("role")}{pn("}")}{pn("</")}{va("h2")}{pn(">")}
      </Line>
      <Line n={18}>
        {"        "}{pn("<")}{va("p")}{pn(">")}{pn("{")}{va("job")}{pn(".")}{va("company")}{pn("}")}{pn("</")}{va("p")}{pn(">")}
      </Line>
      <Line n={19}>
        {"      "}{pn("</")}{va("article")}{pn(">")}
      </Line>
      <Line n={20}>
        {"    "}{pn(")")}{pn(")")}
      </Line>
      <Line n={21}>
        {"  "}{pn(")")}
      </Line>
      <Line n={22}>{pn("}")}</Line>
    </EditorFile>
  );
}
