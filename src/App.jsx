import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
