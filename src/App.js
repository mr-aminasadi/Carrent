import React from "react";

// import css files
import "./index.css";

import NavBar from "./component/NavBar";
import HeadLine from "./component/HeadLine";
import FilterCars from "./component/FilterCars";
import PopularCar from "./component/PopularCar";
import RecomendationCar from "./component/RecomendationCar";
import Footer from "./component/Footer";
import Copyright from "./component/CopyRight";



const App = () => {
  return (
    <>
      <NavBar/>
      <HeadLine/>
      <FilterCars/>
      <PopularCar/>
      <RecomendationCar/>
      <Footer/>
      <Copyright/>
    </>
    
  );
};

export default App;
