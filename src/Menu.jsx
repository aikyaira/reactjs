import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = [
    { name: "Главная", url: "/" },
    { name: "Урок 1", url: "/" },
    { name: "Урок 2", url: "/" },
    { name: "Урок 3", url: "/" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <a class="navbar-brand" href="/">ReactJs</a>
        <ul className="nav nav-pills">
          {menu.map((menuItem, i) => {
            return <MenuItem key={i} name={menuItem.name} url={menuItem.url} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
