import React,{Component} from 'react';
import NewsDetails from './NewsDetails'
import InsideBusinessDetails from './InsideBusinessDetails'
import OpinionDetails from './OpinionDetails'
class ContentPage extends Component {
   
    
    render() {
        const {id, pageType} =this.props.match.params;
        if (pageType === 'news') {
            return ( 
                <NewsDetails id={id} pageType={pageType} />
            ); 
        }
        if (pageType === 'insidebusiness') {
            return ( 
                <InsideBusinessDetails id={id} pageType={pageType} />
            );
        }
        if (pageType === 'opinions') {
            return ( 
                <OpinionDetails id={id} pageType={pageType} />
            ); 
        }
        
    }
}



export default ContentPage;