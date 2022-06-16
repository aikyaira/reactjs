import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";


function ChatItem({ id, name }) {

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}
export default ChatItem;
