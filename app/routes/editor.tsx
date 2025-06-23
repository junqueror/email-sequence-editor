import React from "react";
import siteConfig from "../config/site";

export const meta = () => [
    { title: `Editor | ${siteConfig.TITLE}` },
    { name: "description", content: siteConfig.DESCRIPTION },
];

const Editor = () => (
  <h1 className="text-purple text-3xl">Editor</h1>
);

export default Editor;
