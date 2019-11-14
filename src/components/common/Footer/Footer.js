import React from 'react';
import FooterInformation from './FooterInfomation';
import FooterCategories from './FooterCategories';
import FooterTags from './FooterTags';
import FooterNewsLetter from './FooterNewsletter';
import FooterCopyRightPrivacy from './FooterCopyRightPrivacy';

const Footer = () => {
    return (
        <footer>
            <div className="shell page-footer-default page-footer-type-1">
                <div className="range range-30 text-left">
                    <FooterCategories />
                    <FooterInformation />
                    <FooterTags />
                    <FooterNewsLetter />
                </div>
                <FooterCopyRightPrivacy />
            </div>
        </footer>
    );
};

export default Footer;
