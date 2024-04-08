import React from "react";
export default function Footer() {
    return (
        <>
            <div class="container-fluid mt-5">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4">
                    <div class="col d-flex align-items-center">
                        <img src="../src/images/base.webp" alt="base" />
                        <img src="../src/images/hash.webp" alt="hash" />
                        <img src="../src/images/uniswap.webp" alt="uniswap" />
                    </div>
                    <div class="col d-flex align-items-center text-center">
                        <a href="mailto:info@chuckonbase.io">
                            <p class="mb-3 mb-md-0 text-body-secondary">Get in touch</p>
                            <p>info@chuckonbase.io</p>
                        </a>
                    </div>

                    <ul class="nav col justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}