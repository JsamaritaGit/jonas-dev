import {
  EditorFile,
  Line,
  Preview,
  kw,
  fn,
  str,
  cm,
  va,
  pn,
} from "@/components/vscode/editor";
import { StatCard, PanelTitle, TextMuted } from "@/components/vscode/ui";

export default function Home() {
  return (
    <EditorFile filename="home.jsx" language="JavaScript JSX">
      <Line n={1}>
        {kw("import")} {"{ "}{va("StatCard")}{" }"} {kw("from")} {str("'../components/stat-card'")}
      </Line>
      <Line n={2}>
        {kw("import")} {"{ "}{va("useDashboard")}{" }"} {kw("from")} {str("'../hooks/use-dashboard'")}
      </Line>
      <Line n={3} />
      <Line n={4}>{cm("// Dashboard template — replace with your own home page.")}</Line>
      <Line n={5}>
        {kw("export default function")} {fn("Home")}{pn("()")} {"{"}
      </Line>
      <Line n={6}>
        {"  "}{kw("const")} {"{ "}{va("total")}{", "}{va("active")}{", "}{va("deployed")}{", "}{va("uptime")}{" }"} = {fn("useDashboard")}{pn("()")}{";"}
      </Line>
      <Line n={7} />
      <Line n={8}>
        {"  "}{kw("return")} {pn("(")}
      </Line>
      <Line n={9}>
        {"    "}{pn("<")}{va("section")} {va("className")}={str('"p-8"')}{pn(">")}
      </Line>
      <Line n={10}>
        {"      "}{pn("<")}{va("h1")} {va("className")}={str('"text-2xl font-bold"')}{pn(">")}{str("Welcome back, Jonas")}{pn("</")}{va("h1")}{pn(">")}
      </Line>
      <Line n={11}>
        {"      "}{pn("<")}{va("div")} {va("className")}={str('"mt-6 grid grid-cols-4 gap-4"')}{pn(">")}
      </Line>
      <Line n={12}>
        {"        "}{pn("<")}{va("StatCard")} {va("label")}={str('"Total tabs"')} {va("value")}={pn("{")}{va("total")}{pn("}")} {pn("/>")}
      </Line>
      <Line n={13}>
        {"        "}{pn("<")}{va("StatCard")} {va("label")}={str('"Active"')} {va("value")}={pn("{")}{va("active")}{pn("}")} {pn("/>")}
      </Line>
      <Line n={14}>
        {"        "}{pn("<")}{va("StatCard")} {va("label")}={str('"Deployed"')} {va("value")}={pn("{")}{va("deployed")}{pn("}")} {pn("/>")}
      </Line>
      <Line n={15}>
        {"        "}{pn("<")}{va("StatCard")} {va("label")}={str('"Uptime"')} {va("value")}={pn("{")}{va("uptime")}{pn("}")} {pn("/>")}
      </Line>
      <Line n={16}>
        {"      "}{pn("</")}{va("div")}{pn(">")}
      </Line>
      <Line n={17}>
        {"    "}{pn("</")}{va("section")}{pn(">")}
      </Line>
      <Line n={18}>
        {"  "}{pn(")")}
      </Line>
      <Line n={19}>{pn("}")}</Line>

      <Preview label="Dashboard">
        <PanelTitle>Dashboard</PanelTitle>
        <TextMuted>
          This is the live preview of the{" "}
          <span className="font-mono text-fg">home.jsx</span> template. Edit the
          code above and this pane reflects your changes.
        </TextMuted>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="Total tabs" value="3" hint="3 open tabs" />
          <StatCard label="Active" value="2" hint="in progress" />
          <StatCard label="Deployed" value="14" hint="this quarter" />
          <StatCard label="Uptime" value="99.9%" hint="last 30 days" />
        </div>
      </Preview>
    </EditorFile>
  );
}
