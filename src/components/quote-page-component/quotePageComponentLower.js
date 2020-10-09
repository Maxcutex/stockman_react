import React from 'react';
const QuotePageComponentLower = ({mainText, lowerText}) => {
    return (  <div className="component-holder-lower">
    <div className="component-number">{mainText}</div>
    <div className="component-text">{lowerText}</div>
</div>);
}
 
export default QuotePageComponentLower;