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

    <section style={background ? {background:`${background}`} : '' } >
      <div className={ !!twoCol ? styles.breakerTwoCol : styles.breakerOneCol}>
      {props.children}
      </div>
    </section>
  )
}

export default breaker