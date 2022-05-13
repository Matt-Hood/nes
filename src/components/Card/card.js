import React from "react"
import ReactDOM from "react-dom"
import StarRatingComponent from "react-star-rating-component"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import LanguageIcon from "@mui/icons-material/Language"
import * as styles from "./style.module.scss"

const card = props => {
  const {
    eyebrow,
    logo,
    title,
    titleH2,
    body,
    componentPosition,
    textAlignment = "left",
    logoPosition,
    logoName,
    logoNameAttribution,
    primary,
    secondary,
    showRating,
    background = "#14153b",
  } = props

  const cardBackgroundColor = secondary
    ? "linear-gradient(.25turn, #e62a7c , 70%, #6a2c90)"
    : "#14153b"
  return (
    <Card
      className={styles.card}
      sx={{
        minWidth: 275,
        background: `${cardBackgroundColor}`,
        textAlign: `${textAlignment}`,
        position: "relative",
      }}
    >
      <CardContent>
        <div
          className={styles.iconContainer}
          style={textAlignment ? { justifyContent: `${textAlignment}` } : ""}
        >
          {textAlignment === "center" ? (
            <LanguageIcon
              sx={{
                position: "absolute",
                top: "3rem",
                backgroundColor: "#fff",
                marginLeft: "unset",
                color: "#000",
                borderRadius: "6px",
              }}
            />
          ) : (
            <LanguageIcon sx={{ marginLeft: ".7rem" }} />
          )}
        </div>

        <Typography
          variant="h5"
          component="div"
          sx={{
            padding: "1rem 0",
            fontWeight: "bold",
            paddingTop: "1.5rem",
            fontWeight: "900",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <p style={{ marginBottom: "-5rem", marginTop: "2rem" }}>
          {showRating ? (
            <StarRatingComponent name="rate1" starCount={5} value={4} />
          ) : (
            ""
          )}
        </p>
      </CardContent>
    </Card>
  )
}

export default card
