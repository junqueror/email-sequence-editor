import React from "react";
import Welcome from "./Welcome";

const TITLE = "Email Sequence Editor";
const DESCRIPTION =
  "Exercise interview for a Senior Frontend position at Salesforge ";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
];

const HomePage = () => {
  return <Welcome title={TITLE} />;
};

export default HomePage;
