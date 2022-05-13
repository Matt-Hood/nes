import React from "react"
import { Link } from "gatsby"
import * as styles from "./style.module.scss"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../atom/Button/button"

const introText = props => {
  const {
    eyebrow,
    titleH1,
    titleH2,
    titleDecorator,
    textAlignment = "left",
    body,
    bodyTwo,
    linkText,
    linkSrc,
    componentAlignment = "left",
    buttonTopRight,
    primary,
    background = "#",
  } = props

  return (
    <div className={styles.introTextContainer}>
      <div
        className={styles.introTextContainerInner}
        style={
          componentAlignment ? { alignItems: `${componentAlignment}` } : ""
        }
      >
        <h4>
          {eyebrow ? (
            <StaticImage
              src="./assets/infinity-landscape.svg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Hamburger menu icon"
              style={{ marginRight: "1rem" }}
            />
          ) : (
            ""
          )}
          {eyebrow ? eyebrow : ""}
        </h4>
        <h1 style={textAlignment ? { textAlign: `${textAlignment}` } : ""}>
          {titleH1 ? titleH1 : ""}
        </h1>
        <h2>
          {titleH2 ? titleH2 : ""}
          {titleH2 ? (
            <span
              style={{
                height: "15px",
                width: "15px",
                display: "block",
                borderRadius: "50%",
                background: "linear-gradient(.25turn, #e62a7c , 70%, #6a2c90)",
              }}
            ></span>
          ) : (
            ""
          )}
        </h2>

        <p style={textAlignment ? { textAlign: `${textAlignment}` } : ""}>
          {body ? body : ""}
        </p>
        <p style={textAlignment ? { textAlign: `${textAlignment}` } : ""}>
          {bodyTwo ? bodyTwo : ""}
        </p>

        {!buttonTopRight ? (
          <Button to={linkSrc} text={linkText} primary={primary} />
        ) : (
          ""
        )}
      </div>

      {buttonTopRight ? (
        <Button to={linkSrc} text={linkText} primary={primary} />
      ) : (
        ""
      )}
    </div>
  )
}

export default introText
