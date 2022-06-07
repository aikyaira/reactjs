import React from "react";
import UserInfo from "./UserInfo";

function Comment(props) {
  return (
    <div className="Comment card shadow">
      <UserInfo user={props.author} />
      <div className="card-body">
        <p className="Comment-date">{props.date}</p>
        <p className="Comment-text card-text">{props.text}</p>
      </div>
    </div>
  );
}
export default Comment;
