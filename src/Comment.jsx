import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles/*, useTheme*/ } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    marginBottom: "1.5em",
    padding: "1em 2em",
  },
  textRight: {
    textAlign: "right",
  },
});
function Comment({ author, message, datetime }) {
  const classes = useStyles();
  //const theme = useTheme();
  return (
    <Paper elevation={2} className={classes.message}>
      <Typography variant="h6" gutterBottom component="div">
        {author}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="p">
        {message}
      </Typography>
      <Typography
        variant="caption"
        className={classes.textRight}
        display="block"
        gutterBottom
        component="span"
      >
        {datetime}
      </Typography>
    </Paper>
  );
}
export default Comment;
