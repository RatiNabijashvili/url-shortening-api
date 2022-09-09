import React from 'react'
import Styles from './button.module.css'

const button = (props) => {
  return <button className={Styles.button}>{props.title}</button>
}
export default button
