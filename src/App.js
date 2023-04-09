import React from "react";

// import css files
import "./index.css";
import NavBar from "./component/NavBar";
import HeadLine from "./component/HeadLine";
import FilterCars from "./component/FilterCars";


const App = () => {
  return (
    <>
      <NavBar/>
      <HeadLine/>
      <FilterCars/>
    </>
    
  );
};

export default App;
