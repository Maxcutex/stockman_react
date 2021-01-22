import React, {useState, useEffect} from "react"
import { getRecentArticles, } from '../../../../API/analysisStock';
import {  IRecentArticles, RecentArticles, REQUEST_STATUSES,  } from '../../../../types'

const OpinionSectionSideBarRecentArticles: React.FC<IRecentArticles> = ({size}) => {
    const [
        articles,
        setArticles,
    ] = useState<RecentArticles[] | null>(null);
    const [status, setStatus] = useState<REQUEST_STATUSES>(
        REQUEST_STATUSES.IDLE
    );
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setStatus(REQUEST_STATUSES.LOADING);
        getRecentArticles()
            .then(data => {
                setArticles(data);
                setStatus(REQUEST_STATUSES.SUCCESS);
            })
            .catch(error => {
                setStatus(REQUEST_STATUSES.ERROR);
                setError(error.message);
            });
    }, []);
    return (
        <div className="cell-sm-6 cell-md-12">
            <div className="section-title">
                <h3>Recent articles</h3>
            </div>
            {status === REQUEST_STATUSES.LOADING ? <div> Loading ...</div> : null}
            {status === REQUEST_STATUSES.ERROR ? (
                <div>Oops! There was an Error. Try refreshing the page</div>
            ) : null}

            {status === REQUEST_STATUSES.SUCCESS && articles ===undefined? (
                <div>No Record Found</div>
            ) : null}

            {status === REQUEST_STATUSES.SUCCESS && articles!==null
                ? (
                    <div>
                        <ul className="post-list">
                            {
                                articles.length > 0 ? (
                                   articles.slice(0, size).map((article)=>{
                                    <li>
                                    <a href={article.url}>
                                        {article.title}
                                    </a>
                                </li>
                                   })
                                ) : (
                                    <li>
                               
                                    No Articles yet
                               
                            </li>
                                )
                            }
                            
                        </ul>
                    </div>
                )
                : null}
           
        </div>
    )
}

export default OpinionSectionSideBarRecentArticles;