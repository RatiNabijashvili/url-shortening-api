import React from 'react'
import Button from '../button/button'
import Styles from './header.module.css'
import Img from './img/illustration-working.svg'

const header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.responsive}>
        <div className={Styles.div}>
          <h2 className={Styles.h2}>
            More than just <br /> shorter links
          </h2>
          <p className={Styles.p}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button title='Get Sarted' />
        </div>
        <img src={Img} className={Styles.img} />
      </div>
    </header>
  )
}

export default header
