import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/Assets'

const ExploreMenu = () => {
  return (
    <div className='Explore-menu' id='Explore-menu'>
      <h1>Explore our menu</h1>
      <p className='Explore-menu-text'>Choose from a diverse menu featuring a delectable array at dishes. Our mission's to satisfy your cravings and elevate your dining experience.</p>
      <div className="Explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='Explore-menu-list-item'>
              <img src={item.menu_image} alt="" />
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu