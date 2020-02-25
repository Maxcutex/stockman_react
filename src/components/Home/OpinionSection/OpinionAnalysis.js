import React, { Component} from 'react';
import { connect } from 'react-redux';
import OpinionAnalysisHeader from './OpinionAnalysisHeader';
import OpinionSectionCard from './OpinionSectionCard';
import { fetchOpinionAnalysis } from '../../../actions/opinionAction';
import Loader from '../../Loader/Loader';


class OpinionAnalysis extends Component {

    componentDidMount(){
         this.props.fetchOpinionAnalysis();
    }
    render() {
        const { opinionAnalysisLoading, opinionAnalysis } = this.props;
        if (!opinionAnalysis || opinionAnalysisLoading) {
            return <Loader />;
        } 
        return (
            <div>
               
                    <div className='section-xs'>
                    <OpinionAnalysisHeader/>
                    <div className='range range-center range-30'>
                        {
                            opinionAnalysis.results
                            .slice(0, 4)
                            .map( opinionItem => (
                                <OpinionSectionCard opinion={opinionItem} key={opinionItem.id} />
                            ))
                        }
                        
                        
                    </div>
                </div>
                
                
            </div>
        
    )};
};

const mapStateToProps = ({ opinion }) => ({
    opinionAnalysis: opinion.opinionAnalysis,
    opinionAnalysisLoading: opinion.opinionAnalysisLoading,
});

export default connect(mapStateToProps, { fetchOpinionAnalysis })(
    OpinionAnalysis
);
