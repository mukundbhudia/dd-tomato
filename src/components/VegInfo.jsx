import React from 'react'
import tomatoImage from '../images/tomato.jpg'

const VegInfo = () => {
  return (
    <>
      <div className="Tomato">
        <h1>The Tomato</h1>
        <img className="Tomato__image" alt="tomato" src={tomatoImage} />
      </div>
      <div className="Tomato">
        <h2>Varieties</h2>
        <p>
          There are around 7500 tomato varieties grown for various purposes.
          Heirloom tomatoes are becoming increasingly popular, particularly
          among home gardeners and organic producers, since they tend to produce
          more interesting and flavorful crops at the cost of disease resistance
          and productivity. In 1973, Israeli scientists developed the world's
          first long shelf-life commercial tomato varieties.
        </p>
        <p>
          Tomato varieties are roughly divided into several categories, based
          mostly on shape and size.
        </p>
        <ul>
          <li>"Slicing"/"globe" tomatoes</li>
          <li>Beefsteak tomatoes</li>
          <li>Oxheart tomatoes</li>
          <li>Plum tomatoes</li>
          <li>Pear tomatoes</li>
          <li>Cherry tomatoes</li>
          <li>Grape tomatoes</li>
          <li>Campari tomatoes</li>
        </ul>
      </div>
    </>
  )
}

export default VegInfo
