import React from 'react'
import '../../css-modules/components/Header.module.css'

const Header = () => {
  return (
    <header>
        <label htmlFor="tabs">
            <span>...oldTab</span>
            <span>/current</span>
        </label>
    </header>
  )
}

export default Header