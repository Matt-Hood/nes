import React from 'react'
import * as styles from './style.module.scss';



const breaker = (props) => {
  const {
    children,
    twoCol,
    oneCol,
    background,
  } = props;
  return (
    <section className={ !!twoCol ? styles.breakerTwoCol : styles.breakerOneCol} style={background ? {background:`${background}`} : '' }>
    {props.children}
    </section>
  )
}

export default breaker