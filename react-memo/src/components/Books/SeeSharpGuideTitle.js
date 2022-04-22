import React from "react";
import SeeSharpGuide from "./SeeSharpGuide";

const SeeSharpGuideTitle = () => {
    const date = new Date();
    const subject = (date.getSeconds() % 2 == 0) ? "React" : "C# 교과서";
    const title = `${subject} 학습 가이드`;

    const titleStyle = {
        color: '#C0FFEE',
        textDecoration: "underline"
    };

    return (
        <header className="seesharp-guide-title">
            <h2 style={titleStyle}>{title}</h2>
        </header>
    );
}

export default SeeSharpGuideTitle;