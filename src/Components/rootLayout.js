import { Outlet } from "react-router-dom"
import Navigationbar from "./Navbar"

const RootLayout = ()=>{
    return(
        <>
      <Navigationbar />
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default RootLayout