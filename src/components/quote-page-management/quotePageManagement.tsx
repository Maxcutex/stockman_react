import React from 'react';
import {  REQUEST_STATUSES, IStock } from '../../types'
import QuotePageMgt from './quotePageMgt';
import { ManagementDiv, Container } from './quotePageManagement.styles';
const QuotePageManagement : React.FC<IStock> = ({Stock}) => {
    return ( 
    <Container>
        <ManagementDiv>
            <QuotePageMgt Stock={Stock} ManagementType='management'/>
        </ManagementDiv>
        <ManagementDiv>
            <QuotePageMgt Stock={Stock} ManagementType='director'/>
        </ManagementDiv>
       
    </Container> );
}
 
export default QuotePageManagement;