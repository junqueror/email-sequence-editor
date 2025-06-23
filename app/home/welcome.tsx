import React from "react";
import { Link } from "react-router";

interface WelcomeProps {
  title: string,
}

const Welcome = ({ title }: WelcomeProps) => (
  <main className="flex items-center justify-center pt-16 pb-4 h-screen w-screen">
    <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
      <header className="flex flex-col items-center gap-9">
        <h1 className="text-purple text-3xl">{ title }</h1>
      </header>
        <nav className="max-w-[300px] w-full p-4 flex justify-center">
          <Link
            className="bg-purple rounded-xl px-8 py-4 text-white"
            to="/editor">
              Start
          </Link>
        </nav>
    </div>
  </main>
  );

export default Welcome;