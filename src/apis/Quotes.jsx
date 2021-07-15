import React from "react";
import MediaDisplay from "../components/MediaDisplay.component";
import PropTypes from "prop-types";

var url = `https://type.fit/api/quotes/`;

const Quotes = () => {
  return (
    <div>
      <MediaDisplay url={url} endpoint="author" name={""} />
    </div>
  );
};

Quotes.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Quotes;
