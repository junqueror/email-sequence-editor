import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/HomePage.tsx"),
  route("editor", "pages/editor/EditorPage.tsx"),
] satisfies RouteConfig;
