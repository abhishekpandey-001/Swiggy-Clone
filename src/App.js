import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOption from "./Components/DineOption";
import Restaurant from "./Components/Restaurant";

function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)






// http://cors-anywhere.herokuapp.com/ -> Mediator using to resolve the CORS issue