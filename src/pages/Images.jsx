import React from "react";
import Template from "../layouts/Template";
import PropTypes from "prop-types";

var API_KEY = "22400082-8e6c08d983f752bf5835da06e";
var searchWord = "dogs";
var url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo`;

const Images = () => {
  return (
    <div>
      <Template url={url} endpoint="webformatURL" name={"hits"} />
    </div>
  );
};

Images.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Images;
