import React from 'react'
import * as styles from './style.module.scss';
import { Link } from "gatsby"

const button = (props) => {
    const {
        children,
        to,
        text,
        primary,
        secondary
      } = props;
    
  return (
      <>
        <Link 
    to={to}

className= { primary ? styles.primaryButton : styles.secondaryButton}
  >
      {text}
  </Link>
      </>
  
  )
}

export default button