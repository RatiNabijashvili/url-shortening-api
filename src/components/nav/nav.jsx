import React from 'react'
import Button from '../button/button.jsx'
import Styles from './nav.module.css'

const nav = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.responsive}>
        <div className={Styles.div}>
          <ul className={Styles.ul}>
            <img src='/images/logo.svg' className={Styles.img} />
            <li className={Styles.li}>Features</li>
            <li className={Styles.li}>Pricing</li>
            <li className={Styles.li}>Resources</li>
          </ul>
          <div className={Styles.login}>
            <h2 className={Styles.h2}>Login</h2>
            <Button title='Sign Up' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default nav
