import React from 'react'
import Logo from './Pokemonlogo.png'

export default function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt='LOGO'></img>
    </div>
  )
}
