import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="base">
          <Preview />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
