import React from "react";
import { Paper, Typography, List } from "@mui/material";
import { makeStyles} from "@material-ui/core";
import ChatItem from "./ChatItem";
const useStyles = makeStyles({
  chatContainer: {
    padding: "1em 2em",
  },
});

function Chat({ chats }) {
  const classes = useStyles();

  return (
    <Paper className={classes.chatContainer} elevation={2}>
      <Typography variant="h5" component="h3">
        Список чатов
      </Typography>
      <List>
        {chats.map((chat) => {
          return <ChatItem key={chat.id} name={chat.name} />;
        })}
      </List>
    </Paper>
  );
}
export default Chat;
