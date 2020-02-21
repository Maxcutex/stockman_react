import React,{Component, useParams} from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchInsideBusinessById, fetchNewsById } from '../../actions/newsSingleAction';
import SidePageOne from '../../components/side-page-one/side-page-one';
import Loader from '../../components/Loader/Loader';
class ContentPagess extends Component {
   
    
    render() {
        const {id, pageType} =this.props.match.params;
        if (pageType == 'news') {
            return ( 
                <NewsDetails id={id} pageType={pageType} />
            ); 
        }
        if (pageType == 'insidebusiness') {
            return ( 
                <InsideBusinessDetails id={id} pageType={pageType} />
            ); 
        }
        if (pageType == 'opinions') {
            return ( 
                <OpinionDetails id={id} pageType={pageType} />
            ); 
        }
        
    }
}

ContentPage.propTypes = {

};

const mapStateToProps = ({ news, newsSingle,}) => ({
    generalNews: news.generalNews,
    newsSingle: newsSingle.newsSingle,
    worldNews: news.worldNews,
    insideBusiness: news.insideBusiness,
    insideBusinessSingle: newsSingle.insideBusinessSingle,
    insideBusinessLoading: news.insideBusinessLoading,
    insideBusinessSingleLoading: newsSingle.insideBusinessSingleLoading,
    generalNewsLoading: news.generalNewsLoading,
    generalNewsLoading: news.generalNewsLoading,
    worldNewsLoading: news.worldNewsLoading,
});

export default connect(mapStateToProps, {fetchInsideBusinessById, fetchNewsById})(
    ContentPagess
);