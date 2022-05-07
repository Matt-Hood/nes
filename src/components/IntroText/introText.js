import React from 'react'
import { Link } from "gatsby"
import * as styles from './style.module.scss';
import { StaticImage } from "gatsby-plugin-image"

import Button from "../atom/Button/button"

const introText = (props) => {

  const {
    eyebrow, titleH1, titleH2, titleDecorator, textAlignment = 'left', body, linkText, linkSrc, componentAlignment= 'center', buttonTopRight, primary, background = '#'
  } = props

  return (
    <div className={styles.introTextContainer} >

       
      <div className={styles.introTextContainerInner} style={componentAlignment ? {alignItems:`${componentAlignment}`} : '' }>
     <h4> 
       { eyebrow ? 
           <StaticImage
           src="./assets/infinity-landscape.svg"
           quality={95}
           formats={["auto", "webp", "avif"]}
           alt="Hamburger menu icon"
           style={{  marginRight: "1rem" }}
         /> : ''
       }
     {eyebrow ? eyebrow : ''}
       </h4> 
<h1>
{titleH1 ? titleH1 : ''}
</h1>
<h2>
{titleH2 ? titleH2 : ''}
</h2>

<p style={textAlignment ? {textAlign:`${textAlignment}`} : '' }>
{ body ? body : ''}
</p>


{
!buttonTopRight ? <Button
to={linkSrc}
text={linkText}
primary={primary}
/> : ''}
</div>

{
buttonTopRight ? <Button
to={linkSrc}
text={linkText}

/> : ''}
</div>
  )
}

export default introText