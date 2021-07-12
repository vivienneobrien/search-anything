import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import VideosCard from "../components/VideosCard.component";
import Masonry from "react-masonry-css";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

var API_KEY = "22400082-8e6c08d983f752bf5835da06e";
var searchWord = "dogs";

const useStyles = makeStyles((theme) => ({
  masonryGrid: {
    display: "-webkit-box" /* Not needed if autoprefixing */,
    display: "-ms-flexbox" /* Not needed if autoprefixing */,
    display: "flex",
    marginLeft: "-30px" /* gutter size offset */,
    width: "1040px",
  },
}));

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/videos/?key=${API_KEY}&q=${searchWord}`)
      .then((response) => setVideos(response.data.hits))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // (700 and down make it a 1 column grid)
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className={classes.masonryGrid}
        columnClassName="my-masonry-grid_column"
      >
        {videos.map((video) => (
          <div key={video.id}>
            <VideosCard video={video} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Videos;
