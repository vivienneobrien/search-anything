import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";
import axios from "axios";
import MediaCard from "../components/MediaCard.component";

const Template = ({ url, endpoint, name }) => {
  const [media, setMedia] = useState([]);
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
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {media.map((individualMedia) => (
          <div key={individualMedia.id}>
            <MediaCard individualMedia={individualMedia} endpoint={endpoint} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Template;
