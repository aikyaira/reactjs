import React from "react";

function Comment(props) {

  return (
    <div className={(props.issupport===true)? "row justify-content-start" : "row justify-content-end" }>
      <div className={(props.issupport===true)? "alert alert-primary text-start col-6" : "alert alert-secondary text-start col-6" } role="alert">
        <h6 className="fw-bold">{props.author}</h6>
        <p>{props.message}</p>
        <p className="text-end">{props.datetime}</p>
      </div>
    </div>
  );
}
export default Comment;
