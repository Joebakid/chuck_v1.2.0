import React from "react";
import "../css/footer.min.css"
import Tiktok from "../Logo others/Tiktok_logo.png"
import Telegram from "../Logo others/telegram.png"
import X from "../Logo others/x.png"
import chuckonbase from "../images/chuckonbase.webp"
import Base from "../Logo others/base.png"
import DexTools from "../Logo others/dextools.png"
import Uniswap from "../Logo others/uniswap.png"
import { Link } from "react-router-dom";
export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear()
    return (
        <>
            <footer class="mt-5 py-5">
                <div class="container-fluid text-light text-center">
                    <div class="row d-flex justify-content-between">
                        <div class="col-md-4 justify-content-start">
                            <Link className="m-1 p-2" to="https://www.base.org/">
                                <img src={Base} alt="base_icon" className="footerImg" width={50} height={50} />
                            </Link>
                            <Link className="m-1 p-2" to="https://www.dextools.io/app/en/base/pair-explorer/0xa878a7944062c3984b214a6f7bc3970f4a6a5257">
                                <img src={DexTools} alt="dexTools_icon" className="footerImg" width={45} height={60} />
                            </Link>
                            <Link className="m-1 p-2" to="https://app.uniswap.org/explore/tokens/base/0x7a8a5012022bccbf3ea4b03cd2bb5583d915fb1a">
                                <img src={Uniswap} alt="Uniswap_icon" className="footerImg" width={50} height={50} />
                            </Link>
                        </div>
                        <div class="col-md-4 justify-content-center">
                            <Link to="mailto:info@chuckonbase.io">
                                <img src={chuckonbase} alt="x_icon" className="footerImg" width={50} height={50} />
                                <p>Get in Touch</p>
                                <small>info@chuckonbase.io</small>
                            </Link>
                        </div>
                        <div class="col-md-4 justify-content-end">
                            <Link className="m-1 p-2" to="https://twitter.com/CHUCK_on_Base">
                                <img src={X} alt="x_icon" className="footerImg" width={50} height={50} />
                            </Link>
                            <Link className="m-1 p-2" to="https://t.me/Chuck_on_Base">
                                <img src={Telegram} alt="telegram_icon" className="footerImg" width={50} height={50} />
                            </Link>
                            <Link className="m-1 p-2" to="https://www.tiktok.com/@chucksdog">
                                <img src={Tiktok} alt="tiktok_icon" className="footerImg" width={50} height={50} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="container-fluid text-light text-center mt-3">
                    <div class="row">
                        <div class="col">
                            <h4><Link className="m-1 p-2" to="https://www.base.org/">Powered by Base</Link></h4>
                            <small> All Rights Reserved  &copy; {currentYear} Chuck On Base</small>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}