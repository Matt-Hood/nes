import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './style.module.scss';

import Button from "../components/atom/Button/button"
import Card from "../components/Card/card"


import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import IntroText from "../components/IntroText/introText"
import BreakerLarge from "../components/BreakerLarge/breakerLarge"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
<BreakerLarge isHero={true}>
  <div className={styles.centerGatsbyImage}>
  <StaticImage
  src="../images/wave.png"
  width={300}
  height={500}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt="A Gatsby astronaut"
  style={{  filter: "drop-shadow(30px 10px 4px black)", transform: "scale(.5)", marginTop: "-4rem" }}
/>
  </div>
  <IntroText 
  titleH1="Digital Agency" 
  linkSrc='/' 
  body='Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
  linkText='Contact Us'
  componentPosition='center'
  buttonTopRight={false}
  />
  <Card 
  title='Feature Concepts'
  body='Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
  />
  <Card 
  title='Big Ideas'
  body='Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
  />
    <Card 
  title='Creative'
  body='Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
  />

</BreakerLarge>
<Button to='/' primary={true} text="Contact Us"/>
  
  </Layout>
)

export default IndexPage
