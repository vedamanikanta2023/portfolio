import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Home } from "./Home";

function App() {
  const [pageType, setPageType] = useState();

  return (
    <>
      <Navbar pageType={pageType} setPageType={setPageType} />
      {pageType === "home" ? (
        <Home pageType={pageType} setPageType={setPageType} />
      ) : (
        <About pageType={pageType} setPageType={setPageType} />
      )}
      <img
        src="/icons/social.svg"
        className="position-fixed start-0 bottom-0 m-2"
        alt="social media links"
        style={{ position: "fixed", left: "20", bottom: "20" }}
      />
      <p className="position-fixed fw-bold end-0 bottom-4 m-2 rotate-text text-bold">
        sinhaanishkumar@outlook.com
      </p>
    </>
  );
}

export default App;
