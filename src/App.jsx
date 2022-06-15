import React, { useState, useEffect } from "react";
import "./App.css";
import Comment from "./Comment";
import Menu from "./Menu";

function App() {
  const initialState = [];
  const [messageList, setMessageList] = useState(initialState);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  //const ref = useRef(null);
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
    <div className="App">
      <Menu />
      <div className="container">
        <h1 className="my-5">Добро пожаловать.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          maiores labore quidem sequi ipsa, ullam fuga, nostrum aspernatur at
          eaque tempora ipsam officia molestiae, dicta voluptates doloribus
          necessitatibus temporibus voluptatum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium cupiditate ratione ea vitae
          voluptatibus, alias illum corrupti nisi vero iure ad consequuntur
          mollitia nostrum dolorum accusamus eos aliquam magnam porro.
        </p>
        <h3 className="fw-bold my-5">Чат с поддержкой:</h3>
        <div className="row">
          <form className="col-4" onSubmit={updateMessageList}>
            <div className="mb-3 text-start">
              <label for="nameField" className="form-label">
                Ваше имя
              </label>
              <input
                type="text"
                className="form-control"
                id="nameField"
                placeholder="Иван Иванов"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-3 text-start">
              <label for="messageField" className="form-label">
                Коментарий
              </label>
              <textarea
                className="form-control"
                id="messageField"
                rows="3"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Отправить
            </button>
          </form>
          <div className="col-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
