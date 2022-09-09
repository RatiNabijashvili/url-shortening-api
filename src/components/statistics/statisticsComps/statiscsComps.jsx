import React from 'react'
import Styles from './statisticsComps.module.css'

const statiscsComps = (props) => {
  return (
    <div
      className={Styles.div}
      style={{ transform: `translateY(${props.offset})` }}
    >
      <div className={Styles['img-div']}>
        <img src={props.img} className={Styles.img} />
      </div>
      <h2 className={Styles.h2}>{props.title}</h2>
      <p className={Styles.p}>{props.paragraph}</p>
    </div>
  )
}

export default statiscsComps
