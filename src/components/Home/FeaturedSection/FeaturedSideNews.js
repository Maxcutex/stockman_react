import React from 'react';
import FeaturedSideNewsCaption from './FeaturedSideNewsCaption';
import FeaturedSideNewsTagList from './FeaturedSideNewsTagList';

export default props => {
    const { title, visual_news, author,category_news } = props.featured;
    console.log(props.featured);
    // const visual_news_main = visual_news.filter(
    //     image => image.image_type === 'size450x330'
    // );
    return (
        <div className="post-type-1">
            {visual_news.map((vn, i) => {
                return (
                    vn.image_type === 'size450x330' && (
                        <img
                            src={vn.image_file}
                            width="450"
                            height="330"
                            alt=""
                            key={i}
                        />
                    )
                );
            })}
            <FeaturedSideNewsTagList category_news={category_news} />
            <FeaturedSideNewsCaption title={title} author={author} />
        </div>
    );
};
