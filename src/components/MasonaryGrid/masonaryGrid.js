import React from "react"

import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Scbd from "./assets/scbd.jpg"
import TDM from "./assets/tdm.jpg"
import Launchpad from "./assets/rotunda.jpg"
import Home from "./assets/home.jpg"
import Hyperflick from "./assets/hyperflick.png"
import NA from "./assets/na.jpg"
import { Link } from "gatsby"

const itemData = [
  {
    img: `${Scbd}`,
    title: "Smooth Colors By Design",
    url: "#",
  },
  {
    img: `${TDM}`,
    title: "Tasty Diabetic Meals",
    url: "#",
  },
  {
    img: `${Home}`,
    title: "Home",
    url: "#",
  },
  {
    img: `${Hyperflick}`,
    title: "Hyper Flick",
    url: "#",
  },
  {
    img: `${Launchpad}`,
    title: "Launchpad ",
    url: "#",
  },
]

const masonaryGrid = () => {
  return (
    <section>
      <Box
        sx={{
          overflowY: "scroll",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "4rem 0",
        }}
      >
        <ImageList variant="woven" cols={2} gap={20}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`≈?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  )
}

export default masonaryGrid
