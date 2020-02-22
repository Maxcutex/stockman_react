import React from 'react'
import OpinionSectionCaption from './OpinionSectionCaption';



export default function OpinionSectionCard({opinion}) {
    let imagesItems = opinion.visual_analysis.filter(y => y.image_type==='size450x330');
    let showImage = '';
    if(imagesItems[0]) {
        showImage = imagesItems[0].image_file
    } else {
        showImage = 'images/home-7-450x330.jpg'
    }
    return (
        <div className="cell-xs-10 cell-sm-6">
            <div className="post-type-1 post-type-1-mode">
                
                <img
                    src={showImage}
                    width='450' height='330'
                    alt=''
                />`
                <ul className='tag-list'>
                    {
                        opinion.category_analysis && opinion.category_analysis.map(category => (
                        <li key={category.section_category.id}>
                        <a href="/">{category.section_category.section_name}</a>
                        </li>
                        ))
                    }
                </ul>
                <OpinionSectionCaption id={opinion.id} title={opinion.title} author={opinion.author}/>
            </div>
        </div>
    )
}
