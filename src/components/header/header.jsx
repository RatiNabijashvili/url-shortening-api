import React from 'react'
import Button from '../button/button'
import Styles from './header.module.css'

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
        <img src='/images/illustration-working.svg' className={Styles.img} />
      </div>
    </header>
  )
}

export default header
