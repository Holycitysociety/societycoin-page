import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  link: { textDecoration: "none", color: "#d0d1d5", fontSize: "20px" },
  icon: { color: "#d0d1d5" },
  logo: { flexGrow: "1", cursor: "pointer", color: "#d0d1d5" },
  draw: { background: "red" }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="top"
        sx={{ width: 250, color: "main.primary" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar style={{ backgroundColor: "#0b1127" }}>
          <Typography variant="h4" className={classes.logo}>
            SOCIETYKEY
          </Typography>
          <CloseIcon style={{ color: "#d0d1d5", cursor: "pointer" }} onClick={() => setOpenDrawer(false)} />
        </Toolbar>
        <box style={{ backgroundColor: "#0b1127" }} height="100vh">
          <List height="100vh">
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/about" className={classes.link}>
                  Societykey
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" className={classes.link}>
                  Society Localist
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" className={classes.link}>
                  Society Rides
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </box>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
