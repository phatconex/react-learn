import React, { memo } from "react";

const ContentMemo = () => {
    console.log("render");
    return (
        <div>
            <h2>Content memo</h2>
        </div>
    );
};

export default memo(ContentMemo);
