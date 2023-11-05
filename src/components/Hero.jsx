import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full object-contain">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onclick={() => {
            window.open("https://github.com/Tabeed-H/Article-Summarizer");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with this AI powered Article Summarizer that
        transforms lengthy aritcles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
