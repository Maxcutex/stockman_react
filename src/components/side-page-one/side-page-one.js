import React from 'react';
import NewsLetterForm from '../forms/NewsletterForm';
import OpinionSectionSideBarRecentArticles from '../Home/OpinionSection/OpinionSectionSideBar/RecentArticles';

const SidePageOne = () => {
    return (
        <div>
            <div className="section-left-sidebar section-left-sidebar-type-1">
                <div className="range range-50">
                    <div className="cell-sm-6 cell-md-12">
                        <div className="sidebar-form-block">
                            <h3>Get latest market news delivered daily!</h3>
                            <p>We will send you breaking news right to your inbox</p>
                            <NewsLetterForm />
                            <div className="section-subscribe">
                                <h3>Follow us</h3>
                                <p>Read our latest news on any of these social networks!</p>
                                <div className="soc-icon"><a className="icon fa-twitter" href='/'></a><a className="icon fa-facebook-square" href='/'></a><a className="icon fa-instagram" href='/'></a><a className="icon fa-pinterest" href='/'></a><a className="icon fa-youtube-play" href='/'></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="cell-sm-6 cell-md-12">
                        <div className="section-title">
                            <h3>YouTube</h3>
                        </div>
                        <div className="post-video">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title="ssdafsf" src="https://www.youtube.com/embed/0qvjg_39awQ"></iframe>
                            </div>
                            <div className="caption">
                                <h5 className="title"><a href="post.html">Why mobile industry is rapidly changing</a></h5>
                                <div className="bottom-block">
                                    <ul className="meta-list">
                                        <li>by <a href="post.html">Jon Snow</a></li>
                                        <li><a href="post.html">Aug 10, 2017		</a></li>
                                    </ul>
                                    <div className="share-block">
                                        <div className="soc-icon"><a className="icon fa-twitter" href='/'></a>
                                            <a className="icon fa-facebook" href='/'></a><a className="icon fa-google-plus" href='/'></a>
                                            <a className="icon fa-youtube-play" href='/'></a></div><span className="icon fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <OpinionSectionSideBarRecentArticles size={10} />

                    <div className="cell-sm-6 cell-md-12">
                        <div className="section-title">
                            <h3>Twitter</h3>
                        </div>
                        <div className="twitter" data-twitter-username="templatemonster">
                            <div data-twitter-type="tweet" style={{ opacity: '1' }}><img data-media_url="src" alt="" src="http://pbs.twimg.com/media/EQvwFsaXYAA3HT2.jpg" />
                                <div data-tweet="text">What are you celebrating today: St. Valentines Day💕 or the World’s First Computer Day🖥?😉😏 </div>
                            </div>
                            <span id="loading_tweet" style={{ display: 'none' }}>Loading...</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SidePageOne;