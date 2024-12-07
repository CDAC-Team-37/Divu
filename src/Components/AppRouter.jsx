import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/RouteConstants";
import Home  from "./Home";
import   LoginSignUp  from "./LoginSignUp";
import Services from "./ServicesPage";
import Signup from "./Signup";
import Login from "./Login";
import Venues from "./Venues";
import Vendors from "./Vendors";
import Aboutus from "./AboutUs";
import Admin from "../admin/Admin";
import AdminVendors from "../admin/AdminVendors";
import AdminVenues from "../admin/AdminVenues";
import AdminBookings from "../admin/AdminBookings";
import AdminUsers from "../admin/AdminUsers";
import AdminReports from "../admin/AdminReports";
import Gallery from "./Gallery";



export function AppRouter(){
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}></Route>
            <Route path={ROUTES.LOGSIGN_FORM} element={<LoginSignUp/>}></Route>
            <Route path={ROUTES.SERVICES} element={<Services/>}></Route>
            <Route path={ROUTES.SIGNUP} element={<Signup/>}></Route>
            <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
            <Route path={ROUTES.VENDORS} element={<Vendors/>}></Route>
            <Route path={ROUTES.VENUES} element={<Venues/>}></Route>
            <Route path={ROUTES.ABOUTUS} element={<Aboutus/>}></Route>
            <Route path={ROUTES.ADMIN} element={<Admin />} />
            <Route path={ROUTES.ADMIN_VENDORS} element={<AdminVendors />} />
            <Route path={ROUTES.ADMIN_VENUES} element={<AdminVenues />} />
            <Route path={ROUTES.ADMIN_BOOKINGS} element={<AdminBookings />} />
            <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
            <Route path={ROUTES.ADMIN_REPORTS} element={<AdminReports />} />
            <Route path={ROUTES.GALLERY} element={<Gallery/>}></Route>
            
           
       </Routes> 
    )
}