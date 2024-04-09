import React from "react"
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import NotFound from "../pages/NotFound"
import Header from "./Header"
import Footer from "./Footer"
import Home from "../pages/Home"
import RoadMap from "../pages/RoadMap"
import HowToBuy from "../pages/HowToBuy"
import WhitePaper from "../pages/WhitePaper"
import Chart from "../pages/Chart"
import Tokenomics from "../pages/Tokenomics"
import "../css/home.min.css"
export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
                <div class="area">
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </>
        )
    }
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<Layout />}>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="*" element={<NotFound />} />
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // )
    const BrowserRouter = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/roadMap",
                    element: <RoadMap />
                },
                {
                    path: "/HowToBuy",
                    element: <HowToBuy />
                },
                {
                    path: "/whitepaper",
                    element: <WhitePaper />
                },
                {
                    path: "/chart",
                    element: <Chart />
                },
                {
                    path: "/tokenomics",
                    element: <Tokenomics />
                },
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
    return <RouterProvider router={BrowserRouter} />
}