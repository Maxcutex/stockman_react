import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return ( 
        <button className={`${isGoogleSignIn ? 'google-sign-in': '' } button button-primary button-pad-margin`} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;