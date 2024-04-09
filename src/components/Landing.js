import React from "react";
import "../css/landing.min.css"
import Logo from "../images/chuck_logo.webp"
export default function Landing() {
    return (
        <>
            <div class="cover-container d-flex h-100 p-3 mb-5 mx-auto flex-column text-center" id="landing">
                <main class="px-3 mb-5">
                    <img src={Logo} class="img-fluid" alt="chuck" />
                    <h1 class="cover-heading">Chuck, the round house kicking crypto canine, unleashed strength for a pawsitive cause
                        !</h1>
                    <a href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a" className="btn btn-lg btn-danger mt-1">BUY</a>
                </main>
            </div>
        </>
    )
}