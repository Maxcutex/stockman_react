import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel autoPlay interval={3500} infiniteLoop showThumbs={false}>
                <div>
                    <img src="images/slide-1-930x692.jpg" alt="image1" />
                    <ul className="tag-list" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/slide-2-930x692.jpg" alt="image2" />
                    <ul className="tag-list" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/slide-3-930x692.jpg" alt="image3" />
                    <ul className="tag-list" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default CarouselComponent;
