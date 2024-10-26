import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  
  return (
    <div className='Navbar'>
      <img src={assets.pink} alt="" className='logo'/>
      <ul className='Navbar-menu'>
        <li onclick={() => setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onclick={() => setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onclick={() => setMenu("mobail-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onclick={() => setMenu("contact-us")} className={menu==="comtact-us"?"active":""}>contact-us</li>
      </ul>
      <div className="Navbar-right">
        <img src={assets.pink} alt="" />
        <div className="Navbar-search-icon">
          <img src={assets.pink} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar