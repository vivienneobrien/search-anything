import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, makeStyles, Typography} from "@material-ui/core";
import React from "react";


const useStyles = makeStyles({
    
})
const ImagesCard = ({ image }) => {
    const classes = useStyles()
  return (
    <Card elevation={3}>
      <CardHeader title={image.tags}/>
      <CardContent>
      <Typography variant="body2" colour="textSecondary" noWrap>
      <img src={image.webformatURL} alt="image" className={classes.image}/>
      </Typography>
      </CardContent>
    </Card>
  );
};

export default ImagesCard;


