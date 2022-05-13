import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"

import SEO from "./assets/seo.png"
import Story from "./assets/story.jpg"
import Founders from "./assets/founders.png"

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Our approach to nutrition",
    author: "@matthood",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: `${SEO}`,
    title: "How to perfect SEO",
    author: "@matthood",
  },
  {
    img: `${Story}`,
    title: "Our Story",
    author: "@matthood",
  },
  {
    img: `${Founders}`,
    title: "Meet the founders",
    author: "@matthood",
    cols: 2,
  },
]

const blogGrid = () => {
  return (
    <ImageList gap={20}>
      {itemData.map(item => (
        <ImageListItem key={item.img} gap={20}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default blogGrid
