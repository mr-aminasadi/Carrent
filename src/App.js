import React from "react";

// import css files
import "./index.css";
import NavBar from "./component/NavBar";
import HeadLine from "./component/HeadLine";
import FilterCars from "./component/FilterCars";
import PopularCar from "./component/PopularCar";
import RecomendationCar from "./component/RecomendationCar";



const App = () => {
  return (
    <>
      <NavBar/>
      <HeadLine/>
      <FilterCars/>
      <PopularCar/>
      <RecomendationCar/>
    </>
    
  );
};

export default App;
