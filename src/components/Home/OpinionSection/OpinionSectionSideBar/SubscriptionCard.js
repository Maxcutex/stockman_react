import React from 'react'
import {Link} from 'react-router-dom';
import NewsLetterForm from '../../../forms/NewsletterForm';



export default function OpinionSectionSideBarSubscriptionCard() {
    return (
        <div className='cell-sm-6 cell-md-12'>
            <div className='sidebar-form-block'>
                <h3>
                    Get latest market news delivered
                    daily!
                </h3>
                <p>
                    We will send you breaking news right
                    to your inbox
                </p>
                <NewsLetterForm id='section_opinion' />
                <div className='section-subscribe'>
                    <h3>Follow us</h3>
                    <p>
                        Read our latest news on any of
                        these social networks!
                    </p>
                    <div className='soc-icon'>
                        <Link
                            className='icon fa-twitter'
                            to='/'
                        >
                            {' '}
                        </Link>
                        <Link
                            className='icon fa-facebook'
                            to='/'
                        />
                        <Link
                            className='icon fa-google-plus'
                            to='/'
                        />
                        <Link
                            className='icon fa-youtube-play'
                            to='/'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}