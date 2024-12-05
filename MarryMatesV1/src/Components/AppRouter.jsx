import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/RouteConstants";
import Home  from "./Home";
import   LoginSignUp  from "./LoginSignUp";
import Services from "./ServicesPage";
import Signup from "./Signup";
import Login from "./Login";
import Venues from "./Venues";

export function AppRouter(){
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}></Route>
            <Route path={ROUTES.LOGSIGN_FORM} element={<LoginSignUp/>}></Route>
            <Route path={ROUTES.SERVICES} element={<Services/>}></Route>
            <Route path={ROUTES.SIGNUP} element={<Signup/>}></Route>
            <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
            <Route path={ROUTES.VENUES} element={<Venues/>}></Route>
       </Routes> 
    )
}