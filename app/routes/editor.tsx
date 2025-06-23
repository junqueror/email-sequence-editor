import React from "react";
import siteConfig from "../config/site";
import EmailSequenceEditor from "~/editor/EmailSequenceEditor/EmailSequenceEditor";

export const meta = () => [
    { title: `Editor | ${siteConfig.TITLE}` },
    { name: "description", content: siteConfig.DESCRIPTION },
];

const Editor = () => (
  <>
    <h1 className="text-purple text-3xl">Editor</h1>
    <EmailSequenceEditor />
  </>
);

export default Editor;
