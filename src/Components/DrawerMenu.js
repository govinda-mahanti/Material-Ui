import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const coueces = ["react", "node js", "mern", "express js"];

  return (
    <div style={{ marginTop: "70px" }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(true)}>
        <List>
          {coueces.map((course) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <br />

      {/* <Snackbar open={true} message="this is snackbar"/> */}
      <Snackbar open={true} autoHideDuration={200}>
        <Alert severity="success">This is alert in snackbar</Alert>
      </Snackbar>

      <CircularProgress color="secondary" value={75} />
      <LinearProgress />
      <br />
      <Rating
        value={value}
        onChange={(e, val) => setValue(val)}
        size="large"
        precision={0.5}
      />
      <Typography>Rated {value !== undefined ? value : 0} stars</Typography>
      <br />
      <br />
      <br />
      <IconButton onClick={() => alert("icon botton")}>
        <EmojiEmotionsIcon color="secondary" />
      </IconButton>
    </div>
  );
};

export default DrawerMenu;
