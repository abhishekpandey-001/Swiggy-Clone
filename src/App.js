import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import RestHeader from "./Components/RestHeader";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/Stores";
import { Provider } from "react-redux";

function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome/>}>
              <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
              <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
              <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)






// http://cors-anywhere.herokuapp.com/ -> Mediator using to resolve the CORS issue