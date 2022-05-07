import React from 'react'
import * as styles from './style.module.scss';

const cardList = (props) => {
    const {
        children,
      } = props;
  return (
    <div className={styles.cardList}>
          {props.children}
    </div>
  )
}

export default cardList