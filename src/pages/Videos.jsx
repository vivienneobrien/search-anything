import React from "react";
import Template from "../layouts/Template";
import PropTypes from "prop-types";

var API_KEY = "22400082-8e6c08d983f752bf5835da06e";
var searchWord = "dogs";
var url = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${searchWord}`;

const Videos = () => {
  return (
    <div>
      <Template url={url} endpoint="videos.tiny.url" name={"hits"} />
    </div>
  );
};

Videos.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Videos;
