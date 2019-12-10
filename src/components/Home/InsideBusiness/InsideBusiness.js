import React, { Component } from 'react';
import { fetchInsideBusiness } from '../../../actions/newsAction';
import { connect } from 'react-redux';
import InsideBusinessCard from './InsideBusinessCard';
import InsideBusinessHeader from './InsideBusinessHeader';
import InsideBusinessFooter from './InsideBusinessFooter';
import Loader from '../../Loader/Loader';

class InsideBusiness extends Component {
    componentDidMount() {
        this.props.fetchInsideBusiness();
    }
    render() {
        if (!this.props.insideBusiness || this.props.isLoading) {
            return <Loader />;
        }
        return (
            <div className="section-xs">
                <InsideBusinessHeader />
                <div className="range range-20">
                    {this.props.insideBusiness.results
                        .splice(0, 6)
                        .map(elem => (
                            <InsideBusinessCard
                                key={elem.id}
                                insideBusiness={elem}
                            />
                        ))}
                </div>
                <InsideBusinessFooter />
            </div>
        );
    }
}

const mapStateToProps = ({ news }) => ({
    insideBusiness: news.insideBusiness,
    isLoading: news.insideBusinessLoading,
});

export default connect(mapStateToProps, { fetchInsideBusiness })(
    InsideBusiness
);
