import React from "react";
import TwitterTimeline from "./Twitter";
import "../css/community.min.css"
export default function Community() {
    return (
        <><div class="container-fluid px-5 my-5">
            <div class="row">
                <div class="col shadow-lg">
                    <div class="scrollable-column">
                        <div>
                            <TwitterTimeline screenName={"Chuck_on_base"} />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h1>Welcome to our vibrant
                        community !</h1>
                    <p>Stay connected for the latest news, exclusive insights, and engaging content by following us on social
                        media. Let's
                        engage in ongoing conversations and join forces to craft something incredible.</p>
                    <p>You are now a valued member of a truly unique community!</p>
                    <button type="button" class="btn btn-lg btn-danger">Join Us</button>
                </div>
            </div>
        </div></>
    )
}