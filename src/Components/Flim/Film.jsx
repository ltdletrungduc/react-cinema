import React, { useState } from "react";

// Tab
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Carousel
import Carousel from "react-material-ui-carousel";

// Import
import CardFilm from "./Card/CardFilm";

export default function Flim() {
  var filmsCurrent = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "./assets/img/Film_1.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "./assets/img/Film_2.png",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "./assets/img/Film_3.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "./assets/img/Film_4.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "./assets/img/Film_2.png",
    },
  ];

  var filmsSoon = [];

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Config carousel multiple
  const sliderItems = filmsCurrent.length > 4 ? 4 : filmsCurrent.length;

  const items = [];

  for (let i = 0; i < filmsCurrent.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <div className="film-carousel">
          {filmsCurrent.slice(i, i + sliderItems).map((film, index) => {
            return <CardFilm key={index} info={film} />;
          })}
        </div>
      );
    }
  }

  return (
    <TabContext value={value}>
      <Box sx={{ borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs" centered>
          <Tab sx={{ color: "white" }} label="Phim đang chiếu" value="1" />
          <Tab sx={{ color: "white" }} label="Phim sắp chiếu" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        {filmsCurrent.length > 1 ? (
          <Carousel
            indicators={false}
            autoPlay={false}
            navButtonsProps={{ style: { opacity: 1 } }}
          >
            {items}
          </Carousel>
        ) : (
          <p className="text-center">Hiện tại không có phim đang chiếu !!</p>
        )}
      </TabPanel>
      <TabPanel value="2">
        {filmsSoon.length > 1 ? (
          <Carousel>
            {filmsCurrent.map((film, index) => {
              return <CardFilm key={index} info={film} />;
            })}
          </Carousel>
        ) : (
          <p className="text-center">Hiện tại không có phim gì sắp chiếu !!</p>
        )}
      </TabPanel>
    </TabContext>
  );
}
