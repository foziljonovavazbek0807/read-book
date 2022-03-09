import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Whatwe from "./components/whatwe/Whatwe";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Whatwe/>
    </div>
  );
}

export default App;
