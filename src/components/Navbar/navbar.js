import React, { useState, useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './style.module.scss';

// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button className={styles.hamburgerMenuButton} onClick={ctx.toggleMenu}  style={{ color: `#fff`, backgroundColor: `transparent`, borderColor: 'transparent' }}>

<StaticImage
      src="./assets/hamburger-menu.svg"
      quality={95}
      style={{ transform: `rotateY(180deg)`, color: `#fff`, backgroundColor: `#fff` }}
      formats={["auto", "webp", "avif"]}
      alt="Hamburger menu icon"
    />
    </button>
  )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu 
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      className={styles.navContainer}
    > 


    
     <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/">About</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
    </Menu>
  )
}

// default export here
const Navbar = () => {
  return (
    <MyProvider>
      <div>
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  )
}

export default Navbar;