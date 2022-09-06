import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import sianaImg from '../../assets/images/siana.PNG'
import yulmazImg from '../../assets/images/yulmaz.PNG'
import chichkhanImg from '../../assets/images/chichkhan.PNG'
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const portfolio = [
    {
      name: 'SianaDZ',
      url: 'https://sianadz.com',
      description: 'Solutions de plomberie depuis plus de 10 ans',
      image: sianaImg,
    },
    {
      name: 'Yulmaz',
      url: 'https://yulmaz.com',
      description:
        'Yulmaz, Agence Marketing dédiée aux professionnels de la restauration et du commerce alimentaire',
      image: yulmazImg,
    },
    {
      name: 'Resto Chichkhan',
      url: 'https://restochichkhan.com',
      description: 'COMMANDE EN LIGNE, THE BEST TUNISIAN FOOD !',
      image: chichkhanImg,
    },
  ]

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
