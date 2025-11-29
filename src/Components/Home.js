import React, { useEffect } from "react";
import localForage from "localforage";
import Particles from "react-tsparticles";
import options from "./options";

export default function Home({ container }) {
  useEffect(() => {
    localForage.getItem("mode").then((value) => {
      if (!container || !container.current) return;

      if (value === "dark") {
        container.current.loadTheme("dark");
      } else {
        container.current.loadTheme("light");
      }
    });
  }, [container]);

  return (
    <>
      <Particles options={options} container={container} />
      <div id="/" className="page_wrapper home" style={{ color: "red" }}>
        <div>
          <div className="container">
            <h1 className="heading heading-greeting title title1">Hi!</h1>
          </div>

          <div className="container">
            <h1 className="heading heading-intro title title2">
              <span>I'm Sam</span>
            </h1>
          </div>
          <div className="container para">
            <p className="paragraph-intro title title3">
              A <span className="text-span">Full Stack Developer </span>
              based in New York who loves a challenge.
              <br />
              Get to know more about me —
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
