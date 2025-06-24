import React from "react";
import siteConfig from "../../config/site";
import NewEmailSequence from "~/pages/editor/NewEmailSequence/NewEmailSequence";
import BreadCrumbs from "~/components/layout/BreadCrumbs";
import SendIcon from '~/assets/icons/Send.svg?react';

export const meta = () => [
    { title: `Editor | ${siteConfig.TITLE}` },
    { name: "description", content: siteConfig.DESCRIPTION },
];

const EditorPage = () => (
  <div className="p-8">
    <BreadCrumbs className="mb-4">
      <SendIcon />
      <span>Sequence</span>
    </BreadCrumbs>
    <h1>New sequence</h1>
    <NewEmailSequence className="my-8"/>
  </div>
);

export default EditorPage;
