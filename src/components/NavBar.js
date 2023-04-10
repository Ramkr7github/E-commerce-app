import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {TiShoppingCart} from 'react-icons/ti'


const NavBar = ({ onSearch, cartItemCount=8}) => {

    const [searchQuery, setSearchQuery]= useState('')
 const handleSubmit = () => {
    if(searchQuery.trim().length){
        onSearch(searchQuery.trim())
    }
    setSearchQuery('')
 }
  return (
    <div className='wrapper'>

<header className="container">
    <div className="header py-2">
        <div className="grid">
            <Link to="/" className='link'>
                <h1 className="brand">
                    E-commerce
                </h1>
            </Link>
            <div className="formContainer">
                <form className="search">
                    <div className="form-control">
                        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='search Products...' />
                    </div>
                    <button type="button" className="search-btn" onClick={handleSubmit}>Search</button>
                </form>
            </div>
            {/* <Link to="/cart" >
                <TiShoppingCart className='link headerCart' />
                {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
            </Link> */}
            <Link to="/cart" className="link headerCart">
            <TiShoppingCart className='link headerCart cartImg' />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
        </div>
    </div>
</header>

    </div>
  )
}

export default NavBar