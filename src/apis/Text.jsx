import React from "react";
import MediaDisplay from "../components/MediaDisplay.component";

const API_KEY = "5a0627a84b52eb8b94d4e0c68cdabfe8";
const searchWord = "dogs";
const url = `http://api.serpstack.com/search?access_key=${API_KEY}&query=${searchWord}`;

const Text = () => {
  return (
    <div>
      <MediaDisplay url={url} endpoint="title" name={"organic_results"} />
    </div>
  );
};

export default Text;
