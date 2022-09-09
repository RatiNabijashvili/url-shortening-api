import React, { useState } from 'react'
import Styles from './shorten.module.css'

const copyLink = (e, link) => {
  navigator.clipboard.writeText(link)
  const button = e.currentTarget
  button.classList.add(Styles['copied-button'])
  button.innerText = 'Copied'
  setTimeout(() => {
    button.classList.remove(Styles['copied-button'])
    button.innerText = 'Copy'
  }, 1500)
}

const Shorter = () => {
  const [shortenedUrls, setShortenedUrls] = useState([])

  const shortenUrl = () => {
    const linkInput = document.getElementById('link-input')
    const originalLink = linkInput.value
    linkInput.value = ''
    if (!originalLink) return
    const data = {
      domain: 'bit.ly',
      long_url: originalLink,
    }

    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 12fc5e0617b077322c758acb253a190c3254e801',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setShortenedUrls([
          ...shortenedUrls,
          { originalLink: originalLink, shortenedLink: data.link },
        ])
      })
  }
  return (
    <div className={Styles.div}>
      <div className={Styles.responsive}>
        <img src='/images/bg-shorten-desktop.svg' className={Styles.img} />
        <div className={Styles['input-div']}>
          <input
            type='text'
            placeholder='Shorten a link here... '
            className={Styles.input}
            id={'link-input'}
          />
          <button onClick={shortenUrl} className={Styles.button}>
            Shorten It!
          </button>
        </div>
        <div className={Styles['link-container']}>
          <ul className={Styles.ul}>
            <li className={Styles.li}>
              {shortenedUrls.map((url, index) => {
                return (
                  <div key={index} className={Styles['li-div']}>
                    <span className={Styles.span}>{url.originalLink}</span>
                    <span id={`shortened-link-${index}`}>
                      {url.shortenedLink}
                    </span>
                    <button
                      onClick={(e) => copyLink(e, url.shortenedLink)}
                      className={Styles.btn}
                    >
                      Copy
                    </button>
                  </div>
                )
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shorter
