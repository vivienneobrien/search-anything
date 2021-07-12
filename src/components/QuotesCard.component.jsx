import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import React from "react";

const QuotesCard = ({ quote }) => {
  return (
    <Card elevation={3}>
      <CardHeader title={quote.text}/>
      <CardContent>
      <Typography variant="body2" colour="textSecondary">
      {quote.author}
      </Typography>
      </CardContent>
    </Card>
  );
};

export default QuotesCard;
