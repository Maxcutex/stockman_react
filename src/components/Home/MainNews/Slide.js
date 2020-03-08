/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, width }) => {
    const image = content.visual_news[0];
    const categories = content.category_news;
    console.log(image.image_file);
    return (
  <div key={content.id}
    css={css`
      height: 930px;
      width: 620px;
      background-image: url('${image.image_file}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  >ddddd</div>
)}

export default Slide