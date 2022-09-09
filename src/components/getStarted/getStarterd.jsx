import React from 'react'
import Button from '../button/button.jsx'
import Styles from './getStarted.module.css'

const getStarterd = () => {
  return (
    <div className={Styles.div}>
      <img src='/images/bg-boost-desktop.svg' className={Styles.img} />
      <div className={Styles.text}>
        <h2 className={Styles.h2}> Boost your links today</h2>
        <Button title='Get Started' />
      </div>
    </div>
  )
}

export default getStarterd
