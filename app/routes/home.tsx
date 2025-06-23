import React from "react";
import Welcome from "../home/welcome";

const TITLE = "Email Sequence Editor";
const DESCRIPTION = "Exercise interview for a Senior Frontend position at Salesforge "

export const meta = () => [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
];

const Home = () => {
  return <Welcome title={ TITLE } />;
}

export default Home;
