import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent, Typography } from "@material-ui/core";
import React from "react";

const MediaCard = ({ individualMedia, mediaTypeTag }) => {
  return (
    <Card elevation={3}>
      <CardHeader title={individualMedia.tags} />
      <CardContent>
        <Typography variant="body2" colour="textSecondary" noWrap>
          {mediaTypeTag}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
