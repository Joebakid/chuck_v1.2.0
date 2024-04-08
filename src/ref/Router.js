import React from "react"
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Home from "../views/Home"
import NotFound from "../views/NotFound"
import SignIn from "../views/Authentication/Sign-in"
import SignUp from "../views/Authentication/Sign-up"
import SimpleFooter from "./SimpleFooter"
import ChatbotnSupport from "./ChatbotnSupport"
import PlansAndPricing from "../views/Pricing/Pricing"
import Overview from "../views/Dashboard/Overview"
import Wallet from "./Wallet"
import Deposit from "./Deposit"
import Withdrawal from "./Withdrawal"
import Account from "./Account"
import Contracts from "./Contracts"
import Settings from "./Settings"
import Analytics from "./Analytics"

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <ChatbotnSupport />
                <Footer />
            </>
        )
    }
    const Auth = () => {
        return (
            <>
                <Outlet />
                <ChatbotnSupport />
                <SimpleFooter />
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
                    path: "pricing",
                    element: <PlansAndPricing />
                },
                {
                    path: "overview",
                    element: <Overview />
                },
                {
                    path: "wallet",
                    element: <Wallet />
                },
                {
                    path: "deposit",
                    element: <Deposit />
                },
                {
                    path: "withdrawal",
                    element: <Withdrawal />
                },
                {
                    path: "account",
                    element: <Account />
                },
                {
                    path: "contracts",
                    element: <Contracts />
                },
                {
                    path: "settings",
                    element: <Settings />
                },
                {
                    path: "analytics",
                    element: <Analytics />
                }
            ]
        },
        {
            path: "/auth",
            element: <Auth />,
            children: [
                {
                    path: "sign-in",
                    element: <SignIn />
                },
                {
                    path: "sign-up",
                    element: <SignUp />
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
    return <RouterProvider router={BrowserRouter} />
}