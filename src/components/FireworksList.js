import React from 'react'
import FireworksItem from './FireworksItem'

const FireworksList = ({ fireworks }) => {
  return (
    <div>
      <h1>All Fireworks</h1>
      <hr />
      { fireworks.map(firework => <FireworksItem key={ firework.id } firework={ firework } />) }
    </div>
  )
}

export default FireworksList