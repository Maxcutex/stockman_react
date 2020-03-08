import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import { fetchNews } from '../../../actions/newsAction';
import Loader from '../../Loader/Loader';
import Slider from './Slider'

class MainNews extends Component {
    componentDidMount() {
        this.props.fetchNews();
    }
    render() {
        if (!this.props.generalNews || this.props.isLoading) {
            return <Loader />;
        }
        const allNews = this.props.generalNews.results
            .filter(main => !main.is_main)
            .slice(0, 2);
        return (
            // <Carousel autoPlay interval={3500} infiniteLoop showThumbs={false}>
            <Slider   slides={allNews}  />
              
        );
    }
}
const mapStateToProps = state => ({
    generalNews: state.news.generalNews,
    isLoading: state.news.isLoading,
});

export default connect(mapStateToProps, { fetchNews })(
    MainNews
);
