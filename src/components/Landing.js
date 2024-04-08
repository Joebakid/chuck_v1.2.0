import React from "react";
import "../css/landing.min.css"
export default function Landing() {
    return (
        <>
            <div class="cover-container d-flex h-100 p-3 mt-5 mx-auto flex-column text-center">
                <main class="px-3 mt-4">
                    <img src="../src/images/chuck_logo.webp" class="img-fluid" alt="chuck" />
                    <h1 class="cover-heading">Chuck, the round house kicking crypto canine, unleashed strength for a pawsitive cause
                        !</h1>
                    <p class="lead mt-3">
                        <a href="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a"
                            class="btn btn-lg btn-danger">BUY</a>
                    </p>
                </main>
            </div>
        </>
    )
}