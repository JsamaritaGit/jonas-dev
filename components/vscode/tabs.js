// The three editor tabs. These are the navigation for the app.
// `path` is the route the tab opens; `name` is the fake editor filename
// shown in the tab bar and used to render the "open file" look.
export const TABS = [
  {
    path: "/",
    name: "home.jsx",
    label: "Home",
    language: "JavaScript JSX",
    accent: "text-orange-300",
  },
  {
    path: "/about",
    name: "about.jsx",
    label: "About",
    language: "JavaScript JSX",
    accent: "text-teal-300",
  },
  {
    path: "/projects",
    name: "projects.jsx",
    label: "Projects",
    language: "JavaScript JSX",
    accent: "text-purple-300",
  },
];

// Which file in the Explorer tree maps to which route is defined in
// components/vscode/SidePanel.jsx (it needs pathname state to highlight
// the active file, so the tree lives there as nested data).
