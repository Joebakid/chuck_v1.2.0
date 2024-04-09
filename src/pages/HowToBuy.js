import React from "react";
import AddToMeta from "../images/Add_base_to_metamask.mp4"
import Bridge from "../images/Bridge_Base.mp4"
import How from "../images/How_to_uniswap_edit.mp4"
import { Link } from "react-router-dom";
export default function HowToBuy() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="text-center">
                        <h1>How to Buy</h1>
                        <div className="row my-5 border-bottom shadow-lg">
                            <div className="col text-center mt-5">
                                <h2>Have some Ethereum in your wallet</h2>
                                <p>Purchase on an exchange or swap on a DEX</p>
                            </div>
                        </div>
                        <div className="row my-5 border-bottom shadow-lg">
                            <div className="col-md-4 text-center text-md-end">
                                <h2>Add Base network to metamask</h2>
                                <p>Connect to your MM wallet and go to your Networks. Click Add Network, Base Mainnet should be in the list of popular networks so you don't need to add it manually. Just press Add and Approve popup, now just switch to the Base network.</p>
                            </div>
                            <div className="col-md-8">
                                <video controls class="img-fluid">
                                    <source src={AddToMeta} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="row my-5 border-bottom shadow-lg">
                            <div className="col-md-4 text-center text-md-end">
                                <h2>Bridge your ETH</h2>
                                <p>Bridge you Ethereum network to the Base network using:</p>
                                <Link to="https://bridge.base.org/deposit">Bridge.base.org</Link>
                            </div>
                            <div className="col-md-8">
                                <video controls class="img-fluid">
                                    <source src={Bridge} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="row my-5 border-bottom shadow-lg">
                            <div className="col-md-4 text-center text-md-end">
                                <h2>Swap your ETH on Base for $CHUCK.</h2>
                                <p>Go on Uniswap and swap your Base Ethereum for $CHUCK.</p>
                                <p>Make sure you use the correct token address</p>
                                <p>0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A</p>
                            </div>
                            <div className="col-md-8">
                                <video controls class="img-fluid">
                                    <source src={How} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}