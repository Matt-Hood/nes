import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from './style.module.scss';
import HamburgerMenuIcon from './assets/hamburger-menu.svg';
import Logo from './assets/logo.svg';
import { StaticImage } from "gatsby-plugin-image"

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
          {siteTitle}
        </Link>
      </h2>
      <StaticImage
      src="./assets/hamburger-menu.svg"
      quality={95}
      style={{ transform: `rotateY(180deg)`, color: `#fff`, backgroundColor: `#fff` }}
      formats={["auto", "webp", "avif"]}
      alt="Hamburger menu icon"
    />
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
