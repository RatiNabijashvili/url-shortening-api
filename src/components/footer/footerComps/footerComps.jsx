import React from 'react'
import Styles from './footerComps.module.css'

const footerComps = (props) => {
  return (
    <div>
      <span className={Styles.span}>{props.title}</span>
      <ul className={Styles.ul}>
        {props.list.map((item) => {
          return (
            <li className={Styles.li} key={item}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default footerComps
