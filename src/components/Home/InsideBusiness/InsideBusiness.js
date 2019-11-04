import React from "react"
import InsideBusinessCard from "./InsideBusinessCard";
import InsideBusinessHeader from "./InsideBusinessHeader";
import InsideBusinessFooter from "./InsideBusinessFooter";


export default function InsideBusiness() {
    return (
        <div className="section-xs">
            <InsideBusinessHeader/>
            <div className="range range-20">
                {
                    [1, 2, 3, 4, 5, 6].map(elem => (
                        <InsideBusinessCard key={elem}/>
                    ))
                }

            </div>
            <InsideBusinessFooter/>
        </div>
    )
}

