import React from 'react'
import { ThemeConsumer } from '../context/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav() {
  return(
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link'>
                  Top
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new'
                className='nav-link'
                activeStyle={activeStyle}>
                  New
              </NavLink>
            </li>
          </ul>
          <button
            className='btn-clear'
            style={{ fontSize: 25 }}
            onClick={toggleTheme}>
              {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}