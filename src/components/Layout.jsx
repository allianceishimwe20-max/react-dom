import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Homepage"
function Layout(){

    return(
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )


}
export default Layout;