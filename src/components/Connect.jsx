import React from "react";
import { GitHubIcon, LaptopIcon, Instagram, LinkedInIcon, Xlogo } from "../icons/icon";

const Connect = () => {
  return (
    <section id="connect" className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[#030213] text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Connect with Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <SocialLink href="https://github.com/yourprofile" svgcolor={"w-8 h-8"} bgColor="bg-gray-900" hoverColor="hover:bg-gray-700" Icon={GitHubIcon} label="GitHub" />
        <SocialLink href="https://linkedin.com/in/yourprofile" svgcolor={"w-8 h-8 text-blue-500"} bgColor="bg-gray-900 " hoverColor="hover:bg-gray-700" Icon={LinkedInIcon} label="LinkedIn" />
        <SocialLink href="https://yourportfolio.com" svgcolor={"w-8 h-8 text-purple-500"} bgColor="bg-gray-900" hoverColor="hover:bg-gray-700" Icon={LaptopIcon} label="Portfolio" />
        <SocialLink href="https://instagram.com/yourprofile" svgcolor={"w-8 h-8"} bgColor="bg-gray-900" hoverColor="hover:bg-gray-700" Icon={Instagram} label="Instagram" />
        <SocialLink href="https://twitter.com/yourprofile" svgcolor={"w-8 h-8"} bgColor="bg-gray-900" hoverColor="hover:bg-gray-700" Icon={Xlogo} label="Twitter" />
      </div>
    </section>
  );
};

const SocialLink = ({ href, bgColor, hoverColor, Icon, label,svgcolor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 ${bgColor} ${hoverColor} rounded-xl transition-all transform hover:scale-110 shadow-lg hover:shadow-xl w-full text-white font-semibold tracking-wide`}
    >
      <Icon className={svgcolor} />
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

export default Connect;
