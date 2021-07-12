import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import QuotesCard from "../components/QuotesCard.component";
import Masonry from "react-masonry-css";
import axios from "axios";
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://type.fit/api/quotes/`)
      .then((response) => setQuotes(response.data))
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
        {quotes.map((quote, index) => (
          <div key={index}>
            <QuotesCard quote={quote} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Quotes;
