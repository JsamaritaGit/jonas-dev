import {
  EditorFile,
  Line,
  Preview,
  kw,
  fn,
  str,
  va,
  pn,
} from "@/components/vscode/editor";
import { Badge, PanelTitle, TextMuted } from "@/components/vscode/ui";

export default function About() {
  return (
    <EditorFile filename="about.jsx" language="JavaScript JSX">
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

      <Preview label="Profile">
        <div className="flex items-start gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-chrome-strong bg-editor-soft text-3xl font-semibold text-sky-300">
            J
          </div>
          <div>
            <PanelTitle>Jonas</PanelTitle>
            <TextMuted>
              Full-stack developer building fast, minimal tools with the Next.js
              App Router. This is the live preview of the{" "}
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
      </Preview>
    </EditorFile>
  );
}
