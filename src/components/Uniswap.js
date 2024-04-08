import React from "react";
export default function Uniswap() {
    return (
        <>
            <div class="container-fluid px-5 my-5">
                <div class="row">
                    <div class="col h-100">
                        <div class="card text-bg-light">
                            <div class="card-body">
                                <h1 class="card-title">Ready to embark on your journey with us ?</h1>
                                <h2 class="mb-2 text-body-secondary">Here's how you can easily buy $Chuck and become
                                    part of our growing community.</h2>
                                <h4 class="mb-2 text-body-secondary">Please follow the steps directly within the
                                    Uniswap interface embedded on this page.</h4>
                                <ul>
                                    <li>Bridge your Ethereum to the Base network using the Base token bridge</li>
                                    <li>Connect your Metamask wallet to uniswap</li>
                                    <li>Swap your Ethereum for Chuck</li>
                                </ul>
                                <div class="form-floating mb-3">
                                    <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput"
                                        placeholder="0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A"
                                        value="0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A" />
                                    <label for="floatingPlaintextInput">Please double-check to ensure you have entered the correct
                                        token address.</label>
                                </div>
                                <h6 class="card-subtitle">For detailed purchasing instructions, please refer to the 'How to Buy'
                                    section.</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col h-100">
                        <img src="http://via.placeholder.com/700x700" alt="uniswap enbedd" />
                    </div>
                </div>
            </div></>
    )
}