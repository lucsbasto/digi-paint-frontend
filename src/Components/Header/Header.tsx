import React from 'react'
import Logo from '../../Assets/svg/logo.svg'
import './Header.css'
export default function Header() {
  return (
    <header>
      <h1>
        <img src={Logo} alt="Digi Paint" />
      </h1>
    </header>
  )
}
