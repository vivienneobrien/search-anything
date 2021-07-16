import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "316px",
  },
});

const QueryCard = ({ searchInput, filterValues }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={3}>
        <CardHeader title="Query" />
        <CardContent>
          <Typography variant="body2" colour="textSecondary" noWrap>
            Search: {searchInput}
            Filters: {filterValues ? filterValues : ""}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueryCard;
