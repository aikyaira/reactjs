import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Comment from "./Comment";
import Chat from "./Chat";
import {
  Grid,
  Container,

} from "@mui/material";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import theme from "./theme";

const useStyles = makeStyles({
  container: {
    padding: "6em 0",
  },

});

function App() {
  const classes = useStyles();

  const initialState = [];
  const [messageList, setMessageList] = useState(initialState);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const chats = [
    { id: 1, name: "Поддержка" },
    { id: 2, name: "Вопросы" },
    { id: 3, name: "Пожелания" },
    { id: 4, name: "Предложения" },
  ];

  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].issupport === false) {
        setTimeout(() => {
          let now = new Date();
          setMessageList([
            ...messageList,
            {
              issupport: true,
              datetime: now.toLocaleTimeString(),
              author: "Робот поддержки",
              message:
                "Доброго дня! Это автоматический ответ. К сожалению, в данный момент все операторы заняты. Пожалуйста, подождите.",
            },
          ]);
        }, 1500);
      }
    }
  }, [messageList]);
  return (
    <ThemeProvider theme={theme}>
      <Container fixed className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Form
              messageList={messageList}
              setMessageList={setMessageList}
              message={message}
              setMessage={setMessage}
              author={author}
              setAuthor={setAuthor}
            />
          </Grid>
          <Grid item xs={4}>
            {messageList.map((message, i) => {
              return (
                <Comment
                  key={i}
                  issupport={message.issupport}
                  datetime={message.datetime}
                  message={message.message}
                  author={message.author}
                />
              );
            })}
          </Grid>
          <Grid item xs={3}>
            <Chat chats={chats}/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
