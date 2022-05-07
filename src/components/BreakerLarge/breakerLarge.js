import React from 'react'
import * as styles from './style.module.scss';


const breakerLarge = (props) => {
    const {
        children,
        background,
        isHero
      } = props;
    
  return (
    <section className={ !!isHero ? styles.breakerLarge : ''}  style={background ? {background:`${background}`} : '' }>
    {props.children}
    </section>
  )
}

export default breakerLarge