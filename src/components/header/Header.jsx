import React from 'react';
import "./header.css";
import { IoMdSearch } from "react-icons/io";


const Header = ({handleSearchTextChange}) => {
  return (
    <nav className='nav-container'>
    <div className='nav'>
        <img width={100} src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" alt="myntra_logo" />
         
         <div className='search-bar'>
            <div>
            <IoMdSearch className='search-icon'/>
            </div>
            
         <input onChange={handleSearchTextChange} type="text" placeholder='search products...' />
         </div>


         <ul className='menu_items'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

         </ul>
    </div>
    </nav>
  )
}

export default Header;