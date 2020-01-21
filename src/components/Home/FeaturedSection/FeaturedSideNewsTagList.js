import React from 'react'



export default function FeaturedSideNewsTagList({category_news}) {
    return (
        <ul className="tag-list">
            {
                category_news.map(category => (
                <li key={category.section_category.id}>
                <a href="post.html">{category.section_category.section_name}</a>
                </li>
                ))
            }
            
           
        </ul>
    )
}
