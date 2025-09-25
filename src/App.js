import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";

function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)