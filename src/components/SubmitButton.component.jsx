import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

// <SearchCheck
//         searchStatus={searchStatus}
//         setShowMediaData={setShowMediaData}
//         media={media}
//       />
const SubmitButton = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SubmitButton;
