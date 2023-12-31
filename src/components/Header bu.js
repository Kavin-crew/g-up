import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const navItems = ["Home", "Categories", "Blog", "Login"];

const drawer = (
  <Box sx={{ textAlign: "center" }}>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

function Header() {
  return (
    <Box component="header" bgcolor="primary.main">
      <AppBar component="nav">
        <Container>
          <Link to={"/"}>
            <Typography variant="h2" color="white">
              G-Up
            </Typography>
          </Link>
          <ListItem disablePadding>
            <NavLink to="/">
              <ListItemButton>Home</ListItemButton>
            </NavLink>

            <NavLink to="/categories">
              <ListItemButton>Categories</ListItemButton>
            </NavLink>

            <NavLink to="/blog">
              <ListItemButton>Blog</ListItemButton>
            </NavLink>

            <NavLink to="/login">
              <ListItemButton>Login</ListItemButton>
            </NavLink>
          </ListItem>
          <Button variant="contained">Report a Number</Button>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
