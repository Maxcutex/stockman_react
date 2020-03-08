import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-bootstrap/Carousel'
import { fetchNews } from '../../actions/newsAction';
import Loader from '../Loader/Loader';

class CarouselComponent extends Component {
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
            <Carousel autoPlay interval={3500} infiniteLoop showThumbs={false}>
           {/* //  <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}> */}
                {
                allNews.map(news => {
                    const image = news.visual_news[0];
                    const categories = news.category_news;
                    return (
                                    
                        <div key={news.id} id={news.id}>
                            <img src={image.image_file}alt="image1" />
                            <ul className="tag-list" />
                            <p className="legend">{news.title}</p>
                        </div>
                    )})
                }
                
            </Carousel>
        );
    }
}
const mapStateToProps = state => ({
    generalNews: state.news.generalNews,
    isLoading: state.news.isLoading,
});

export default connect(mapStateToProps, { fetchNews })(
    CarouselComponent
);
