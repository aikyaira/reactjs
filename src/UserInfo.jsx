import React from "react";
import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className="UserInfo ">
      <Avatar user={props.user} />
      <h5 className="UserInfo-name card-title mt-2">{props.user.name}</h5>
    </div>
  );
}

export default UserInfo;
