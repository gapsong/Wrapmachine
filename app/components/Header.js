import React from 'react'
import { IndexLink } from 'react-router'

class Header extends React.Component {
  render () {
    const active = { borderBottomColor: '#3f51b5' }
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' data-toggle='collapse' data-target='#navbar' className='navbar-toggle collapsed'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <IndexLink to='/' className='navbar-brand'>Wrapper</IndexLink>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              <li><IndexLink to='/' activeStyle={active}>Home</IndexLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
