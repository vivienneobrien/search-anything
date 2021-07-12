import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({});
const VideosCard = ({ video }) => {
  const classes = useStyles();
  return (
    <Card elevation={3}>
      <CardHeader title={video.tags} />
      <CardContent>
        <Typography variant="body2" colour="textSecondary" noWrap>
          <video
            src={video.videos.tiny.url}
            alt="video"
            className={classes.video}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideosCard;
