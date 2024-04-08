import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg px-5 navBar sticky-top mb-5 shadow-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/" id="brand">
                        <img src="../../public/images/chuck-brand.png" alt="chuck" width="55" height="55" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link " to="/HowToBuy">How to buy</Link>
                            <Link class="nav-link" to="/chart">Chart</Link>
                            <Link class="nav-link" to="/whitePaper">Whitepaper</Link>
                            <Link class="nav-link" to="/roadMap">Roadmap</Link>
                            <Link class="nav-link" to="/tokenomics">Tokenomics</Link>
                            <Link class="nav-link" to="https://linktr.ee/chuckonbase" target="_blank">Join Us</Link>
                        </div>
                    </div>
                </div>
            </nav></>
    )
}