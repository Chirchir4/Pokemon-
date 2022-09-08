import React from 'react'

export default function Picture({ data }) {
  console.log(data)
  const mapSprites = data.map((item) => {
    return (
      <div className='cards'>
        <div className="cardA">
          <img className='img' src={item.sprites.other.home.front_default} alt='' />
        </div>
        <div className="cardB">
          <div className="name">
            <ul>Name:{item.name}</ul>
            <ul>Height:{item.height}</ul>
            <ul>Ability:{item.abilities.map((item) => {
              return item.ability.name
            })}</ul>
          </div>
        </div>
      </div >
    )
  })
  return (
    <div className="picture">
      {
        mapSprites
      }
    </div>
  )
}
