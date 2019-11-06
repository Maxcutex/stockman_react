import React from 'react';
import OpinionAnalysisHeader from "./OpinionAnalysisHeader";
import OpinionSectionCard from "./OpinionSectionCard";

const OpinionAnalysis = () => {
    return (
        <div className="section-xs">
            <OpinionAnalysisHeader/>
            <div className="range range-center range-30">
                <OpinionSectionCard imgSrc={"images/home-7-450x330.jpg"}>
                    <ul className="tag-list">
                        <li>
                            <a href="post.html">Economy</a>
                        </li>
                    </ul>

                </OpinionSectionCard>
                <OpinionSectionCard imgSrc={"images/home-8-450x330.jpg"}>
                    <ul className="tag-list">
                        <li>
                            <a href="post.html">Business</a>
                        </li>
                    </ul>
                </OpinionSectionCard>
                <OpinionSectionCard imgSrc={"images/home-9-450x330.jpg"}>
                    <ul className="tag-list">
                        <li>
                            <a href="post.html">Life</a>
                        </li>
                        <li>
                            <a href="post.html">Business</a>
                        </li>
                    </ul>
                </OpinionSectionCard>
                <OpinionSectionCard imgSrc={"images/home-10-450x330.jpg"} >
                    <ul className="tag-list">
                        <li>
                            <a href="post.html">Economy</a>
                        </li>
                    </ul>
                </OpinionSectionCard>
            </div>
        </div>
    );
};

export default OpinionAnalysis;
