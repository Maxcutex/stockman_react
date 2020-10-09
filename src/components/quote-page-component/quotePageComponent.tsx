import React from 'react';
import './quotePageComponent.styles.css'

type quoteType = {
    topText: string
    bottomText?: string | number
}
const QuotePageComponent = ({topText, bottomText = '0' }: quoteType) => {
    return ( 
        <div className="component-holder">
            <div className="component-title">{topText}</div>
            <div>{bottomText}</div>
        </div>
     );
}
 
export default QuotePageComponent;