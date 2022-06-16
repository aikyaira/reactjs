import React from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chat: {
    padding: "1em 2em",
  },
  button: {
    background: theme.palette.gradient.main,

  },
  textField: {
    width: "100%",
  },
}));

function Form({
  author,
  message,
  messageList,
  setMessageList,
  setAuthor,
  setMessage,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const updateMessageList = (e) => {
    e.preventDefault();
    let now = new Date();
    setMessageList([
      ...messageList,
      {
        issupport: false,
        datetime: now.toLocaleTimeString(),
        author: author,
        message: message,
      },
    ]);
  };
  return (
    <Paper className={classes.chat} elevation={2}>
      <Typography variant="h5" component="h3">
        Чат с поддержкой
      </Typography>

      <form onSubmit={updateMessageList}>
        <TextField
          label="Имя"
          id="margin-normal"
          margin="normal"
          name="name"
          defaultValue={author}
          className={classes.textField}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Коментарий"
          id="margin-normal"
          margin="normal"
          name="comment"
          defaultValue={message}
          className={classes.textField}
          multiline
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
        />
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="margin-normal"
            margin="normal"
            className={classes.button}
          >
            Отправить
          </Button>
       
      </form>
    </Paper>
  );
}
export default Form;
