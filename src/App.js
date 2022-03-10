import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import Whatwe from "./components/whatwe/Whatwe";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Whatwe/>
      <Section/>
    </div>
  );
}

export default App;
