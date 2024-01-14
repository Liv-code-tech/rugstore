import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HandleSlideshow from "./Components/HandleSlideshow.jsx";

export default function App() { 
  return (
    <>
      <div className="App">
        <Header/>
      </div>
      <div>
        <HandleSlideshow/>
      </div>
      <div>
        
      </div>
      <div>
        <Footer/>
      </div>
      

    </>
);


};

