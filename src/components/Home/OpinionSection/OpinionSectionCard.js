import React from 'react'
import OpinionSectionCaption from "./OpinionSectionCaption";



export default function OpinionSectionCard({imgSrc, children}) {
    return (
        <div className="cell-xs-10 cell-sm-6">
            <div className="post-type-1 post-type-1-mode">
                <img
                    src={imgSrc}
                    width="450"
                    height="330"
                    alt=""
                />
                {children}
                <OpinionSectionCaption/>
            </div>
        </div>
    )
}
