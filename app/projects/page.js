import { EditorFile } from "@/components/vscode/editor";
import {
  Line,
  kw,
  fn,
  str,
  cm,
  va,
  num,
  pn,
} from "@/components/vscode/syntax";
import { Badge, PanelTitle } from "@/components/vscode/ui";
import PokemonCard from "@/components/pokemon/PokemonCard";

const PROJECTS = [
  {
    name: "jonas-dev",
    desc: "This portfolio site — a VS Code–styled app built with Next.js, React, and Tailwind.",
    stars: "Live",
    href: "jns-smrt.space",
    color: "text-sky-300",
    live: true,
  },
  {
    name: "2d hobby Platform game",
    desc: "A simple 2D platformer game built with Next.js .",
    stars: "0",
    color: "text-orange-300",
  },
  {
    name: "cli-tools",
    desc: "Developer productivity CLI written in Node.",
    stars: "64",
    color: "text-teal-300",
  },
  {
    name: "design-system",
    desc: "Shared React components and tokens.",
    stars: "32",
    color: "text-purple-300",
  },
];

const STACK = [
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

export default function Projects() {
  return (
    <EditorFile
      filename="projects.jsx"
      language="JavaScript JSX"
      previewLabel="Projects"
      preview={
        <>
          <div className="flex items-center justify-between">
            <PanelTitle>Projects</PanelTitle>
            <Badge color="bg-selection text-purple-200">
              {PROJECTS.length} repositories
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className={`rounded-md border p-4 transition-colors duration-200 hover:border-orange-400/80 ${
                  p.live
                    ? "border-sky-400/60 bg-selection/10 sm:col-span-2"
                    : "border-chrome-strong bg-editor"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`font-mono font-semibold ${p.color} ${
                      p.live ? "text-base" : "text-sm"
                    }`}
                  >
                    {p.name}
                  </div>
                  {p.live ? (
                    <div className="flex items-center gap-2">
                      <Badge color="bg-selection text-teal-200">Live</Badge>
                      <Badge color="bg-selection text-sky-200">Vercel</Badge>
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 text-[13px] leading-5 text-fg-muted">
                  {p.desc}
                </p>
                {p.live ? (
                  <div className="mt-2 font-mono text-[11px] text-sky-300">
                    {p.href}
                  </div>
                ) : null}
                
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-fg-dim">
                    {p.live ? "Deployed on Vercel" : `★ ${p.stars}`}
                  </span>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-sm px-3 py-1.5 text-[11px] font-medium ${
                        p.live
                          ? "bg-status-bar text-white hover:brightness-110"
                          : "bg-selection text-sky-200 hover:brightness-125"
                      }`}
                    >
                      Open ↗
                    </a>
                  ) : (
                    <span className="cursor-pointer rounded-sm bg-selection px-2 py-1 text-[11px] text-sky-200 hover:brightness-125">
                      Open
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Part-time availability */}
          <div className="mt-6 rounded-md border border-sky-400/40 bg-selection/20 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-[13px] font-semibold text-fg">
                Open to part-time opportunities
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-5 text-fg-muted">
              Available for part-time / freelance roles. Comfortable working
              with:
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {STACK.map((s, i) => (
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
            <a
              href="mailto:jonas27samarita@gmail.com"
              className="mt-3 inline-flex rounded-sm bg-status-bar px-3 py-1.5 text-[12px] font-medium text-white hover:brightness-110"
            >
              Contact me
            </a>
          </div>

          {/** Pokemon card */}
          <div className="fixed bottom-4 right-4 z-50">
            <PokemonCard />
          </div>
        </>
      }
    >
      <Line n={1}>
        {kw("const")} {va("projects")} {pn("=")} {"["}
      </Line>
      <Line n={2}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"jonas-dev"')}{pn(", ")}{va("url")}{pn(":")} {str('"https://jonas-dev-mu.vercel.app/"')}{pn("}")}{pn(",")}
      </Line>
      <Line n={3}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"vscode-ui"')}{pn(", ")}{va("stars")}{pn(":")} {num("128")}{pn("}")}{pn(",")}
      </Line>
      <Line n={4}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"cli-tools"')}{pn(", ")}{va("stars")}{pn(":")} {num("64")}{pn("}")}{pn(",")}
      </Line>
      <Line n={5}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"design-system"')}{pn(", ")}{va("stars")}{pn(":")} {num("32")}{pn("}")}{pn(",")}
      </Line>
      <Line n={6}>
        {pn("]")}
      </Line>
      <Line n={7} />
      <Line n={8}>
        {cm("// Projects grid — link each card to your deployed apps.")}
      </Line>
      <Line n={9}>
        {kw("export default function")} {fn("Projects")}{pn("()")} {"{"}
      </Line>
      <Line n={10}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={11}>
        {"    "}{pn("<")}{va("section")} {va("className")}={str('"grid grid-cols-2 gap-4 p-8"')}{pn(">")}
      </Line>
      <Line n={12}>
        {"      "}{pn("{")}{va("projects")}{pn(".")}{fn("map")}{pn("(")}{pn("(")}{va("p")}{pn(")")} {kw("=>")} {pn("(")}
      </Line>
      <Line n={13}>
        {"        "}{pn("<")}{va("article")} {va("key")}={pn("{")}{va("p")}{pn(".")}{va("name")}{pn("}")} {pn(">")}
      </Line>
      <Line n={14}>
        {"          "}{pn("<")}{va("h2")}{pn(">")}{pn("{")}{va("p")}{pn(".")}{va("name")}{pn("}")}{pn("</")}{va("h2")}{pn(">")}
      </Line>
      <Line n={15}>
        {"          "}{pn("{")}{va("p")}{pn(".")}{va("url")} {pn("&&")} {pn("<")}{va("a")} {va("href")}={pn("{")}{va("p")}{pn(".")}{va("url")}{pn("}")}{pn(">")}{str("Live")}{pn("</")}{va("a")}{pn(">")}
      </Line>
      <Line n={16}>
        {"        "}{pn("</")}{va("article")}{pn(">")}
      </Line>
      <Line n={17}>
        {"      "}{pn(")")}{pn(")")}
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
