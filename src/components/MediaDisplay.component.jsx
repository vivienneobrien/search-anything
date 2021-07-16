import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";
import axios from "axios";
import MediaCard from "./MediaCard.component";
import QueryCard from "./QueryCard.component";

const MediaDisplay = ({ url, endpoint, name }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    console.log("page loaded");
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMedia(name ? response.data[name] : response.data))
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
  var filterValues;
  const searchInput = <div>dogs</div>;
  return (
    <Container>
      <QueryCard searchInput={searchInput} filterValues={filterValues} />
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {media.map((individualMedia, index) => (
          <div key={index}>
            <MediaCard individualMedia={individualMedia} endpoint={endpoint} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default MediaDisplay;
