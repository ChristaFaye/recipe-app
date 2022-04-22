import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";

function Pages() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    )
}

export default Pages;