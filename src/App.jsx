import { useState } from "react";

import Hero from "./components/Hero";
import Docs from "./components/Docs";
import Connect from "./components/Connect";

function App() {
  return (
    <>
      <Hero />
      <Docs />
      <Connect />
      <div className="flex flex-wrap items-center bg-[#000000] border-t border-gray-700 md:justify-between justify-center select-none">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-400 font-medium py-2">
            Copyright © <span className="">2025</span><br />
            <span className="">Designed & Developed by- Rahman Husain × Ritchie</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
