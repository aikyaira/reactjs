import "./App.css";
import Comment from "./Comment";
import Menu from "./Menu";

function App() {
  const comments = [
    {
      text: "Первое приложение на React",
      author: {
        name: "Алина",
        avatarUrl: "https://picsum.photos/100/50?random=1",
      },
      date: "07.06.2022",
    },
    {
      text: "Круто, будем знать.",
      author: {
        name: "Олег",
        avatarUrl: "https://picsum.photos/100/50?random=2",
      },
      date: "07.06.2022",
    },
    {
      text: "Удачного программирования!",
      author: {
        name: "Александр",
        avatarUrl: "https://picsum.photos/100/50?random=3",
      },
      date: "07.06.2022",
    },
    {
      text: "Хороший курс",
      author: {
        name: "Елена",
        avatarUrl: "https://picsum.photos/100/50?random=4",
      },
      date: "07.06.2022",
    },
  ];

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
        <h3 className="fw-bold my-5">Комментарии:</h3>
        <div className="d-flex justify-content-between">
          {comments.map((comment, i) => {
            return (
              <Comment
                key={i}
                date={comment.date}
                text={comment.text}
                author={comment.author}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
