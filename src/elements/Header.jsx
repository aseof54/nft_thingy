import React from 'react'
import logo from "../assets/img/logo.png"
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Header = () => {
    const menu = [
        {
            url: "/explore",
            name: "Explore"
        },
        {
            url: "/creators",
            name: "Creators"
        },
        {
            url: "/community",
            name: "Community"
        }
    ]
  return (
    <header className='header'>
      <img src={logo} alt='logo' className='logo'></img>
      <nav className='header-menu'>
        <ul>
        {menu.map((element)=>(
            <Link to={element.url}>{element.name}</Link>
        ))}
        </ul>
      </nav>
      <Button padding="21px 29px" backgroundColor="#E9D7A7" backgroundOpacity="0.1" borderColor="#FFCE4E" textColor="#FFCE4E">Connect Wallet</Button>
    </header>
  )
}

export default Header
