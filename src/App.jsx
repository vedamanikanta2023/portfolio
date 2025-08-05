import { useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Home } from "./Home";
import { UseMemo } from "./practice/UseMemo";
import { UseCallBack } from "./practice/UseCallBack";
import { Provider } from 'react-redux'
import { store } from "./store";
import {CitiusTech} from "../src/interview/CitiusTech"

function App() {
  const [pageType, setPageType] = useState();
const html1 = <>
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
  return (
    <Provider store={store}>
    {/* <ApiFetch /> */}
      <UseMemo />
    <UseCallBack />
    <CitiusTech />





    {html1}
    {/* // */}
    </Provider>
  );
}

export default App;


