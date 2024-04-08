import React, { useEffect } from "react";

const TwitterTimeline = ({ screenName }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="twitter-timeline">
            <a
                className="twitter-timeline"
                href={`https://twitter.com/${screenName}?ref_src=twsrc%5Etfw`}
            >
                Tweets by {screenName}
            </a>
        </div>
    );
};

export default TwitterTimeline;