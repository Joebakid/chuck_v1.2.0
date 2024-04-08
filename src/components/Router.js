import React from "react"
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"

export default function Router() {
    const Layout = () => {
        return (
            <>
                {/* <Header /> */}
                <Outlet />
                {/* <Footer /> */}
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
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
    return <RouterProvider router={BrowserRouter} />
}