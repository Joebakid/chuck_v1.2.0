import React from "react";
import "../css/roadMap.min.css"
export default function RoadMap() {
    return (
        <>
            <div class="container py-5 my-5">
                <div class="text-center">
                    <h2>Road Map</h2>
                </div>
                <div class="timeLine">
                    <div class="vessel left-vessel">
                        <div class="textBox">
                            <h3>Project Awareness Building</h3>
                            <h5 class="small">Q2 2024</h5>
                            <ul>
                                <li>Token Creation</li>
                                <li>BASE DEX Listing: Uniswap</li>
                                <li>Website Development</li>
                                <li>Social Media Development: Telegram, X</li>
                                <li>Chuck Bot Telegram Integration</li>
                                <li>Cross Channel Marketing with Influencers</li>
                                <li>Major Dextools: CG and CMC Listings</li>
                            </ul>
                        </div>
                    </div>
                    <div class="vessel right-vessel">
                        <div class="textBox">
                            <h3>Community Advancement</h3>
                            <h5 class="small">Q3 2024</h5>
                            <ul>
                                <li>Donation to Dog Charity</li>
                                <li>Chuck NFT and Design Planning</li>
                                <li>Chuck Merchandise</li>
                                <li>Community Competitions</li>
                                <li>Utility Planning</li>
                            </ul>
                        </div>
                    </div>
                    <div class="vessel left-vessel">
                        <div class="textBox">
                            <h3>Community Advancement</h3>
                            <h5 class="small">Q4 2024</h5>
                            <ul>
                                <li>Website Upgrade</li>
                                <li>NFT Mint and Launch</li>
                                <li>Community Game Creation</li>
                                <li>Cross Community Partnership</li>
                            </ul>
                        </div>
                    </div>
                    <div class="vessel right-vessel">
                        <div class="textBox">
                            <h3>Continued Development</h3>
                            <h5 class="small">Q1 2025</h5>
                            <ul>
                                <li>NFT Development</li>
                                <li>Community Game Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div></>
    )
}