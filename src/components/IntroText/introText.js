import React from 'react'
import { Link } from "gatsby"
import * as styles from './style.module.scss';

import Button from "../atom/Button/button"

const introText = (props) => {

  const {
    eyebrow, titleH1, titleH2, titleDecorator, body, linkText, linkSrc, componentPosition, buttonTopRight, primary
  } = props

  return (
    <div className={styles.introTextContainer}>
       {/* style={{backgroundImage: `url(${arrow})`}} */}
      <div className={styles.introTextContainerInner} style={componentPosition ? {textAlign:`${componentPosition}`} : '' }>
      {eyebrow ? eyebrow : ''}
<h1>
{titleH1 ? titleH1 : ''}
</h1>
<h2>
{titleH2 ? titleH2 : ''}
</h2>

{body ? body : ''}

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
primary={primary}
/> : ''}
</div>
  )
}

export default introText