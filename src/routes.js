// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Inicio from "./pages/Inicio";

import NuevoVideo from "pages/NuevoVideo";

const { default: Inicio } = require ("./pages/Inicio");
const { BrowserRouter, Routes, Route } = require ("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Inicio/>}> </Route>
               
                 <Route path="/nuevovideo" element= {<NuevoVideo/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;