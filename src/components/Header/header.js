import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from './style.module.scss';
import HamburgerMenuIcon from './assets/hamburger-menu.svg';
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../Navbar/navbar";

const Header = ({ siteTitle }) => (
  <header
  className={styles.sticky}
  >
    <div
    className={styles.mainNav}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
      src="./assets/never-ending-solutions-logo-white.svg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Hamburger menu icon"
    />
        </Link>
      </h2>
    
    <Navbar/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
