import React from 'react';
import WorldSectionShareBlock from './WorldSectionShareBlock';
import image from '../../../assets/images/home-3-330x220.jpg';
import dateFormat from 'dateformat'
// import { activeNews } from './mock';
import { Link } from 'react-router-dom';
const WorldSectionDetails = props => {
    let image1 = ''
    return props.activeNews.map(activeNew => {
        const {
            
            title,
            description,
           // author: { first_name, last_name },
            //date,
            category_news,
            author,
            news_date,
            id,
            visual_news,
        } = activeNew;
        const formattedDate =  dateFormat(new Date(news_date), 'mmmm dS, yyyy') 
        let image_visual = {}
        
        let imagelist = visual_news.filter(
            image => image.image_type === 'size330x220'
        );
        image_visual = imagelist[0];
        if (imagelist.length != 0) {
            image1 = image_visual.image_file
        } else {
            image1 = image
        }
        return (
            <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 isotope-item"
                // data-filter={section}
                key={id}
            >
                <div className="post-type-2">
                    <div className="img-block">
                        <Link to={`/content-page/news/${id}`}>
                        <img
                                // src={visual_news[0].image_file || image}
                                src={image1}
                                width="330"
                                height="220"
                                alt=""
                            />
                        </Link>
                         
                        <ul className="tag-list">
                            
                            {
                                category_news.map(category => (
                                <li key={category.section_category.id}>
                                <a href="post.html">{category.section_category.section_name}</a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="caption">
                        <h5>
                        <Link to={`/content-page/news/${id}`}>{title}</Link>
                        </h5>
                        <p>{description}</p>
                        <div className="bottom-block">
                            <ul className="meta-list">
                                <li>
                                    by{' '}
                                    {
                                        author? 
                                        <a href="post.html">{`${author.first_name} ${author.last_name} `}</a> :
                                        ''
                                    }
                                </li>
                                <li>{' '}
                                    <a href="post.html">{formattedDate}</a>
                                </li>
                            </ul>
                            <WorldSectionShareBlock />
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};
export default WorldSectionDetails;
