import React from "react";

function MenuItem(props) {
  return (
    <li className="nav-item">
      <a href="{props.url}" className="nav-link">
        {props.name}
      </a>
    </li>
  );
}
export default MenuItem;
