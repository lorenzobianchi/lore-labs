import React from 'react'
import logo from '../logo.svg';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>lore-labs</code>
        </p>
      </header>
    )
  }
}

export default Header
