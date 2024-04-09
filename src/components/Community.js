import React from "react";
import TwitterTimeline from "./Twitter";
import "../css/community.min.css"
export default function Community() {
    return (
        <>
            <div class="container">
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="rounded-3 scrollable-column">
                            <div>
                                <TwitterTimeline screenName={"Chuck_on_base"} />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5">
                            <h1>Welcome to our vibrant
                                community !</h1>
                            <p>Stay connected for the latest news, exclusive insights, and engaging content by following us on social
                                media. Let's
                                engage in ongoing conversations and join forces to craft something incredible.</p>
                            <p>You are now a valued member of a truly unique community!</p>
                            <button type="button" class="btn btn-lg btn-danger">Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}