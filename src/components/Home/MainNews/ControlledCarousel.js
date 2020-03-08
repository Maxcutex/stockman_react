import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ControlledCarousel =  ({allNews}) =>{
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        
          {/* {
            allNews.map(news => {
              const image = news.visual_news[0];
              const categories = news.category_news;
              return (
                <Carousel.Item key={news.id}>
                <img src={image.image_file}alt="image1" />
                <ul className="tag-list" />
                <Carousel.Caption>
                <div className="caption">
                      <h2 className="title">
                          <a href="post.html">Carrier to keep jobs in Indiana <br className="veil reveal-sm-inline"/> after Trump penalty threats</a>
                      </h2>
                    <ul className="meta-list">
                      <li>by <a href="post.html">Jon Snow</a></li>
                      <li><a href="post.html">Aug 08, 2017</a></li>
                    </ul>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>      
              )})
          } */}
          <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide-1-930x692.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide-1-930x692.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide-1-930x692.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
          
       </Carousel>
    );
  }
  
 export default ControlledCarousel;