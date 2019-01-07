import React from 'react';
import { Link } from 'react-router-dom';
export default props => {
    const { title, visual_news, author } = props.featured;
    // const visual_news_main = visual_news.filter(
    //     image => image.image_type === 'size450x330'
    // );
    return (
        <div className="post-type-1">
            {visual_news.map(vn => {
                return (
                    vn.image_type === 'size450x330' && (
                        <img
                            src={vn.image_file}
                            width="450"
                            height="330"
                            alt=""
                            key={vn.id}
                        />
                    )
                );
            })}
            <ul className="tag-list">
                <li>
                    <a href="post.html">Money</a>
                </li>
                <li>
                    <a href="post.html">Life</a>
                </li>
            </ul>
            <div className="caption">
                <h4 className="title">
                    <a href="post.html">{title}</a>
                </h4>
                <div className="bottom-block">
                    <ul className="meta-list">
                        <li>
                            by <a href="post.html">{author} </a>
                        </li>
                        <li>
                            <a href="post.html">Aug 08, 2017 </a>
                        </li>
                    </ul>
                    <div className="share-block">
                        <div className="soc-icon">
                            <Link className="icon fa-twitter" to="/">
                                {' '}
                            </Link>
                            <Link className="icon fa-facebook" to="/" />
                            <Link className="icon fa-google-plus" to="/" />
                            <Link className="icon fa-youtube-play" to="/" />
                        </div>
                        <span className="icon fa-share-alt" />
                    </div>
                </div>
            </div>
        </div>
    );
};
