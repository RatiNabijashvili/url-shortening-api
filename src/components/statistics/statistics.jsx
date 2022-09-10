import React from 'react'
import StatiscsComps from './statisticsComps/statiscsComps'
import Styles from './statistics.module.css'
import RecognitionLogo from './img/icon-brand-recognition.svg'
import RecordsLogo from './img/icon-detailed-records.svg'
import CustomizableLogo from './img/icon-fully-customizable.svg'

const statistics = () => {
  return (
    <div className={Styles.div}>
      <div className={Styles.responsive}>
        <div className={Styles.text}>
          <h2 className={Styles.h2}>Advanced Statistics</h2>
          <p className={Styles.p}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={Styles.comps}>
          <StatiscsComps
            img={RecognitionLogo}
            title='Brand Recognition'
            paragraph='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
            offset='-3em'
          />
          <StatiscsComps
            img={RecordsLogo}
            title='Detailed Records'
            paragraph='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
          />
          <StatiscsComps
            img={CustomizableLogo}
            title='Fully Customizable'
            paragraph='mprove brand awareness and content discoverability through customizable links, supercharging audience engagement.'
            offset='3em'
          />
        </div>
      </div>
    </div>
  )
}

export default statistics
