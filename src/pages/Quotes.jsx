import React from "react";
import Template from "../layouts/Template";
import PropTypes from "prop-types";

var url = `https://type.fit/api/quotes/`;

const Quotes = () => {
  return (
    <div>
      <Template url={url} endpoint="author" name={""} />
    </div>
  );
};

Quotes.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Quotes;
