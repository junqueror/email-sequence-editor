import React from "react";
import { Link } from "react-router";
import Button from "~/components/elements/Button";

interface WelcomeProps {
  title: string;
}

const Welcome = ({ title }: WelcomeProps) => (
  <main className="flex items-center justify-center pt-16 pb-4 h-screen w-screen">
    <div className="flex-1 flex flex-col items-center gap-4 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <h1>{title}</h1>
      </header>
      <nav className="max-w-[300px] w-full p-4 flex justify-center">
        <Link to="/editor">
          <Button isAccent>Start</Button>
        </Link>
      </nav>
    </div>
  </main>
);

export default Welcome;
