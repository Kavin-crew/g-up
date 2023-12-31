import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = ["Home", "Categories", "Blog", "Login"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      width="300px"
    >
      <Typography variant="h2" sx={{ my: 2 }}>
        G-UP
      </Typography>
      <Divider />
      <List>
        <ListItemButton>
          <NavLink to="/">
            <ListItemText primary="Home" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="/categories">
            <ListItemText primary="Categories" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="/blog">
            <ListItemText primary="Blog" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <NavLink to="/login">
            <ListItemText primary="Login" />
          </NavLink>
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              G-UP
            </Typography>
            <Stack
              sx={{ display: { xs: "none", sm: "block", md: "flex" } }}
              //   width="60%"
              direction="row"
            >
              <ListItem disablePadding sx={{ justifyContent: "space-evenly" }}>
                <NavLink to="/">
                  <Button sx={{ color: "#fff" }}>Home</Button>
                </NavLink>

                <NavLink to="/categories">
                  <Button sx={{ color: "#fff" }}>Categories</Button>
                </NavLink>

                <NavLink to="/blog">
                  <Button sx={{ color: "#fff" }}>Blog</Button>
                </NavLink>

                <NavLink to="/login">
                  <Button sx={{ color: "#fff" }}>Login</Button>
                </NavLink>
              </ListItem>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  borderRadius: "100px",
                  flexShrink: 0,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Report a Number
              </Button>
            </Stack>
          </Toolbar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
