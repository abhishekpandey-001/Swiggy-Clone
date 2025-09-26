import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)






// http://cors-anywhere.herokuapp.com/ -> Mediator using to resolve the CORS issue