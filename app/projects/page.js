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
            <Badge color="bg-selection text-purple-200">3 repositories</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { name: "vscode-ui", desc: "VS Code–styled app shell for this site.", stars: "128", color: "text-orange-300" },
              { name: "cli-tools", desc: "Developer productivity CLI written in Node.", stars: "64", color: "text-teal-300" },
              { name: "design-system", desc: "Shared React components and tokens.", stars: "32", color: "text-purple-300" },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-md border border-chrome-strong bg-editor p-4"
              >
                <div className={`font-mono text-sm font-semibold ${p.color}`}>
                  {p.name}
                </div>
                <p className="mt-2 text-[13px] leading-5 text-fg-muted">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-fg-dim">
                    ★ {p.stars}
                  </span>
                  <span className="cursor-pointer rounded-sm bg-selection px-2 py-1 text-[11px] text-sky-200 hover:brightness-125">
                    Open
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      }
    >
      <Line n={1}>
        {kw("const")} {va("projects")} {pn("=")} {"["}
      </Line>
      <Line n={2}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"vscode-ui"')}{pn(", ")}{va("stars")}{pn(":")} {num("128")}{pn("}")}{pn(",")}
      </Line>
      <Line n={3}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"cli-tools"')}{pn(", ")}{va("stars")}{pn(":")} {num("64")}{pn("}")}{pn(",")}
      </Line>
      <Line n={4}>
        {"  "}{pn("{")} {va("name")}{pn(":")} {str('"design-system"')}{pn(", ")}{va("stars")}{pn(":")} {num("32")}{pn("}")}{pn(",")}
      </Line>
      <Line n={5}>
        {pn("]")}
      </Line>
      <Line n={6} />
      <Line n={7}>
        {cm("// Projects grid template — swap the array for your own data.")}
      </Line>
      <Line n={8}>
        {kw("export default function")} {fn("Projects")}{pn("()")} {"{"}
      </Line>
      <Line n={9}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={10}>
        {"    "}{pn("<")}{va("section")} {va("className")}={str('"grid grid-cols-3 gap-4 p-8"')}{pn(">")}
      </Line>
      <Line n={11}>
        {"      "}{pn("{")}{va("projects")}{pn(".")}{fn("map")}{pn("(")}{pn("(")}{va("p")}{pn(")")} {kw("=>")} {pn("(")}
      </Line>
      <Line n={12}>
        {"        "}{pn("<")}{va("article")} {va("key")}={pn("{")}{va("p")}{pn(".")}{va("name")}{pn("}")} {va("className")}={str('"rounded border p-4"')}{pn(">")}
      </Line>
      <Line n={13}>
        {"          "}{pn("<")}{va("h2")}{pn(">")}{pn("{")}{va("p")}{pn(".")}{va("name")}{pn("}")}{pn("</")}{va("h2")}{pn(">")}
      </Line>
      <Line n={14}>
        {"          "}{pn("<")}{va("p")}{pn(">")}{pn("{")}{va("p")}{pn(".")}{va("desc")}{pn("}")}{pn("</")}{va("p")}{pn(">")}
      </Line>
      <Line n={15}>
        {"          "}{pn("<")}{va("span")}{pn(">")}{pn("★")} {pn("{")}{va("p")}{pn(".")}{va("stars")}{pn("}")}{pn("</")}{va("span")}{pn(">")}
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
