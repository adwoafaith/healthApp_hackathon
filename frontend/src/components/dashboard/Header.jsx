import React from 'react'

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      padding: '0 2rem',
      height: 50
    }}>
        <label htmlFor="tabs">
            <span style={{color: 'rgba(35, 50, 85, 0.50)'}}>...Teacher</span>
            <span style={{color: '#F6AD2B'}}>/Students</span>
        </label>
    </header>
  )
}

export default Header