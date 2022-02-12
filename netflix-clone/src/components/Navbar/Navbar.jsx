import React, {useState} from 'react'
import styles from './navbar.module.css'
import logo from '../../assets/nav-logo.png'
import {NavLink} from 'react-router-dom'
import {AiFillBell} from 'react-icons/ai'
import {MdSearch} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    window.onscroll = () =>{
    if(window.pageYOffset === 0){
        setIsScrolled(false)
    } else{
        setIsScrolled(true)
    }
    return () => window.pageYOffset = null;
    }

    const handleClick = () =>(setIsSearchOpen(!isSearchOpen))

    return (
    <div className={ isScrolled ? styles.scrolled: styles.container }>  
        <div className={styles.left}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.mid}>
            <NavLink exact to='/' className={(isActive) => isActive ? styles.active__link : styles.link__}>Home</NavLink>
            <NavLink exact to='movies' className={styles.link__}>Movies</NavLink>
            <NavLink exact to='tvshows' className={styles.link__}>TV Shows</NavLink>
            <NavLink exact to='tvshows' className={styles.link__}>Recently Added</NavLink>
            <NavLink exact to='tvshows' className={styles.link__list}>Lists</NavLink>
        </div>
        <div className={styles.right}>
            {isSearchOpen && <div className={styles.search_box}><input placeholder='search...' className={styles.input__}/> </div>}
            <MdSearch className={styles.search__} onClick={() => handleClick()}/>
            <AiFillBell className={styles.bell__}/>
            <CgProfile className={styles.profile__}/>
        </div>
    </div>
    );
}

export default Navbar