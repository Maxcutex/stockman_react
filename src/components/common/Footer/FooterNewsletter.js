import React from 'react'
import NewsLetterForm from '../../forms/NewsletterForm'

export default function FooterNewsLetter() {
    return (
        <div className='cell-xs-12 cell-sm-6 cell-lg-3'>
            <h4 className='footer-title'>Newsletter</h4>
            <p className='text-italic'>
                We will send you breaking news right to your inbox
            </p>
            <NewsLetterForm id='section_footer' />
        </div>
    )
}