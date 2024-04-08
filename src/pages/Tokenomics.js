import React from "react";
export default function Tokenomics() {
    return (
        <>
            <div class="my-5">
                <h1>Token Address</h1>
                <div class="form-floating mb-3">
                    <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput"
                        placeholder="0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A"
                        value="0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A" />
                </div>
            </div>
            <div>
                <h1>Token Supply</h1>
                <p>1,000,000,000</p>
                <img width="50" height="50" src="../src/images/70%lp.webp" alt="" />
                <img width="50" height="50" src="../src/images/15%dev.webp" alt="" />
                <img width="50" height="50" src="../src/images/7.5%airdrop.webp" alt="" />
                <img width="50" height="50" src="../src/images/7.5%marketing.webp" alt="" />
            </div>
        </>
    )
}