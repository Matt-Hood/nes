import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./style.module.scss"
import Card from "../components/Card/card"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import IntroText from "../components/IntroText/introText"
import BreakerLarge from "../components/BreakerLarge/breakerLarge"
import Breaker from "../components/Breaker/breaker"
import CardList from "../components/CardList/cardList"
import MasonaryGrid from "../components/MasonaryGrid/masonaryGrid"
import BlogGrid from "../components/BlogGrid/blogGrid"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    {/* Hero  Start*/}
    <BreakerLarge isHero={true} background={"#160f20"}>
      <div className={styles.centerGatsbyImage}>
        <StaticImage
          src="../images/wave.png"
          width={300}
          height={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{
            filter: "drop-shadow(30px 10px 4px black)",
            transform: "scale(.9)",
            margin: "3rem 0",
            opacity: ".4",
            marginBottom: "4rem",
          }}
        />
      </div>

      <IntroText
        titleH1="Innovative Solutions"
        linkSrc="/"
        body="Neverending solutions provides top
quality digital services to our clients.
We are a full service UI/UX, digital
content management,software
development, digital marketing, and
web design agency. Our team is
dedicated to providing the services
your business needs with the
capabilities to address and overcome
any potential obstacles."
        linkText="Contact Us"
        componentAlignment="center"
        buttonTopRight={false}
        textAlignment="center"
      />
      <CardList>
        <Card
          title="Feature Concepts"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        />
        <Card
          title="Big Ideas"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          secondary={true}
        />
        <Card
          title="Creative"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        />
      </CardList>
    </BreakerLarge>

    {/* Hero  End*/}

    {/* About Us Section Start*/}

    <Breaker background="#181c26" twoCol={true}>
      <IntroText
        eyebrow="About Us"
        titleH2="Our Purpose"
        linkSrc="/"
        body="In our world today people and businesses are faced with varying problems.The mission of never ending solutions is to facilitate the transformation of your problem into a viable digital solution."
        linkText="Contact Us"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
        textAlignment="left"
        componentAlignment="left"
      />
      <div className={styles.hideOnMobile}>
        <StaticImage
          src="../images/astro.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          className={styles.hideOnMobile}
        />
        <StaticImage
          src="../images/wave.png"
          width={300}
          height={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{
            transform: "scale(.5)",
            position: "absolute",
            right: "0",
            bottom: "-1rem",
          }}
          className={styles.hideOnMobile}
        />
      </div>
    </Breaker>

    {/* About Us Section End*/}

    {/* Services Section Start*/}
    <Breaker background="#160f20" twoCol={false}>
      <IntroText
        eyebrow="Services"
        titleH2="Our Team"
        linkSrc="/"
        body="It takes a team to evaluate a concern for a client. Our diversified team bring their commitment and creative outlook to provide innovative approaches to solve every challenge."
        linkText="See All"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
        textAlignment="left"
        componentAlignment="left"
        buttonTopRight={true}
      />

      <CardList>
        <Card
          title="Tech Services"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          textAlignment="center"
        />
        <Card
          title="Networking"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          secondary={true}
          textAlignment="center"
        />
        <Card
          title="Health"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          textAlignment="center"
        />
      </CardList>
    </Breaker>

    {/* Services Section End*/}

    {/* Portfolio  Section Start*/}
    <BreakerLarge isHero={true} background={"#181c26"}>
      <div className={styles.centerGatsbyImage}></div>
      <IntroText
        eyebrow="Portfolio"
        titleH2="Some of our finest moments"
        linkSrc="/"
        body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        linkText="See All"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
        buttonTopRight={true}
      />
      <MasonaryGrid />
    </BreakerLarge>

    {/* Portfolio  Section End */}

    {/* Testimonial  Section Start*/}

    <Breaker background="#160f20" twoCol={false}>
      <IntroText
        eyebrow="Testimonials"
        titleH2="What clients say"
        linkSrc="/"
        body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        linkText="See More"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
        buttonTopRight={true}
      />

      <CardList>
        <Card
          title="Vincent Wasswa"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          showRating={true}
          secondary={true}
        />
        <Card
          title="Vincent Wasswa"
          body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
          showRating={true}
          secondary={true}
        />
      </CardList>
    </Breaker>

    {/* Testimonial  Section End */}

    {/* News  Section Start */}
    <Breaker background="#160f20" twoCol={false}>
      <IntroText
        eyebrow="News"
        titleH2="Blog"
        linkSrc="/"
        body="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        linkText="See All"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
        buttonTopRight={true}
      />
      <BlogGrid />
    </Breaker>

    {/* News  Section End */}

    {/* Contact  Section Start */}

    <Breaker background="#181c26" twoCol={true}>
      <IntroText
        titleH2="Say Hello"
        linkSrc="/"
        body="Tel: +1(845) 391-1805."
        bodyTwo="Email: matthood@neverendingsolutions.com"
        linkText="Contact Us"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
      />
      <IntroText
        titleH2="Contact Info"
        linkSrc="/"
        linkText="View Map"
        body="201 Frozen Ridge Road."
        bodyTwo="Newburgh NY. 12550"
        componentPosition="left"
        buttonTopRight={false}
        primary={true}
      />
    </Breaker>
    {/* Contact  Section End */}
  </Layout>
)

export default IndexPage
