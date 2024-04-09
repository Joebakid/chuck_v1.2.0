import React from "react";
import Landing from "../components/Landing";
import WhyChuck from "../components/whyChuck";
import Uniswap from "../components/Uniswap";
import Community from "../components/Community"
import "../css/home.min.css"
export default function Home() {
    return (
        <>
            <Landing />
            <WhyChuck />
            {/* <Uniswap /> */}
            <Community />
        </>
    )
}