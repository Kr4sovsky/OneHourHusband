import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography, } from "@mui/material";
import React, { SyntheticEvent } from "react";
import logo from '../assets/logo.png'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import ChatIcon from "@mui/icons-material/Chat";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
    const pages = [
        'BOOK A SERVICE',
        'SERVICES',
        'GALLERY',
        'REVIEWS',
        'ABOUT',
        'CONTACT']
    const [value, setValue] = React.useState(0);
    const [anchorMainMenu, setAnchorMainMenu] = React.useState<null | HTMLElement>(null);
    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorMainMenu(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorMainMenu(null);
      };

    return (
        <AppBar elevation={0} position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            onClick={handleClickMenu}
            style={{color: "blue", fill: "blue"}}
            >
            <MenuIcon />
            </IconButton>
            <Menu

            id="menu-appbar"
            anchorEl={anchorMainMenu}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorMainMenu)}
            onClose={handleClose}
            sx={{
                display: { xs: "block", sm: "block", md: "none" },
            }}
            >
            {pages.map((page, idx) => (
                <MenuItem key={"page-idx-" + idx}
                // onClick={() => {navigate(routes[idx])}}
                >
                <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <Grid  container alignItems="center" justifyContent={"start"} spacing={5}>
            <Grid item>
              <Box component={"img"}  onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault();}} sx={{width: {xs: "180px", md: '200px'}}} src={logo} alt="logo" />
            </Grid>
            <Grid item sx={{display: { md: "flex", sm: "none", xs: "none" }}}>
            <Tabs

            variant="standard"
            value={value}

            onChange={handleChange}
            aria-label="icon position tabs example"
            >
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="BOOK A SERVICE"></Tab>
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="SERVICES" />
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="GALLERY" />
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="REVIEWS" />
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="ABOUT" />
                <Tab sx={{fontSize: {xs: 12, md: 13, lg: 14, xl: 20 }}} iconPosition="start" label="CONTACT" />


            </Tabs>
            </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;