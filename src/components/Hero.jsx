import React, { useEffect, useState } from "react";

function Hero() {
  return (
    <div className="relative h-dvh flex flex-col justify-center items-center px-4 text-center text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-gradientBlur"></div>
      <CodeAnimation />
      
      {/* Content */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Welcome to .Rizzz
      </h1>
      
      <p className="relative text-gray-300 mt-4 text-lg max-w-lg">
        A fun interpreted programming language written in Python.
      </p>
      
      {/* Action Buttons */}
      <div className="relative flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="#"
          className="px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white shadow-lg transition duration-300 transform hover:scale-110 hover:bg-blue-800"
        >
          🚀 Download
        </a>
        <a
          href="#docs"
          className="px-6 py-3 text-lg font-semibold rounded-full bg-purple-600 text-white shadow-lg transition duration-300 transform hover:scale-110 hover:bg-purple-800"
        >
          📖 Docs
        </a>
      </div>
      
      {/* Footer Link */}
      <a
        href="#connect"
        className="relative inline-block underline mt-6 text-purple-400 hover:text-purple-300 transition duration-300 text-lg"
      >
        @Rahman Husain
      </a>
      
      <a
        href="#wtfmode"
        className="relative px-6 py-3 text-xs font-semibold mt-3 rounded-full bg-blue-600 text-white shadow-lg transition duration-300 transform hover:scale-110 hover:bg-blue-800"
      >
        🔥Try WTF mode
      </a>
    </div>
  );
}

const CodeAnimation = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const codeSnippets = [
      "say \"Hello, World!\"",
      "x = 42;",
      "hobby = gimme \"Enter your Hobby 🔥\"",
      "say \"coding.....\"",
      "if true { say \"Yes!\" }"
    ];

    const interval = setInterval(() => {
      setLines(prev => [
        ...prev.slice(-4),
        codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-start p-6 text-green-400 text-sm font-mono opacity-40 animate-fadeIn">
      {lines.map((line, index) => (
        <div key={index} className="animate-moveUp">{line}</div>
      ))}
    </div>
  );
};

export default Hero;

