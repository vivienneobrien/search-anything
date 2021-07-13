import React from "react";
import Template from "./Template";
import PropTypes from "prop-types";

var API_KEY = "22400082-8e6c08d983f752bf5835da06e";
var searchWord = "dogs";
var url = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${searchWord}`;

const tag = (individualMedia) => (
  <video src={individualMedia.videos.tiny.url} />
);

const Videos = () => {
  return (
    <div>
      <Template url={url} tag={tag} />
    </div>
  );
};

Videos.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Videos;
