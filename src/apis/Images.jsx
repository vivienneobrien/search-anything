import React from "react";
import MediaDisplay from "../components/MediaDisplay.component";
import PropTypes from "prop-types";

//
// 1.   Search url, import SearchBar from "./components/SearchBar.componenet"
// 2.

const API_KEY = "22400082-8e6c08d983f752bf5835da06e";
const searchWord = "dogs";
const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchWord}&image_type=photo`;

const Images = () => {
  return (
    <div>
      <MediaDisplay url={url} endpoint="webformatURL" name={"hits"} />
    </div>
  );
};

Images.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Images;
