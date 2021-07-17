import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent, Typography } from "@material-ui/core";
import React from "react";

const getEndpoint = (endpoint, individualMedia) => {
  let newEndpoint;
  if (endpoint === "webformatURL") {
    newEndpoint = <img src={individualMedia.webformatURL} alt="information" />;
  } else if (endpoint === "videos.tiny.url") {
    newEndpoint = (
      <video src={individualMedia.videos.tiny.url} alt="information" />
    );
  } else {
    newEndpoint = individualMedia.url;
  }
  return newEndpoint;
};

const MediaCard = ({ individualMedia, endpoint }) => {
  return (
    <Card elevation={3}>
      <CardHeader
        title={
          individualMedia.tags ? individualMedia.tags : individualMedia.title
        }
      />
      <CardContent>
        <Typography variant="body2" colour="textSecondary" noWrap>
          {getEndpoint(endpoint, individualMedia)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
