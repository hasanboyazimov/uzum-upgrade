import { Outlet } from "react-router-dom";
import {Navbar, Footer} from "../components"

function RootLayout() {
    return (
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default RootLayout