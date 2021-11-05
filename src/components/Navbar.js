import React,{ useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { setSearch } from '../store/accountStore/accountSlice'
import './Navbar.css';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const dispatch = useDispatch()
  const searchInput = useRef();

  const searchHandler = () => {
    dispatch(setSearch((searchInput.current.value)))
  }
  
  return (
    <nav>
      <Box sx={{ flexGrow: 1, mb:5 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, flexGrow: 0, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
              Foodblog
              </Link>
            </Typography>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/favorites" variant="h7">
              Favorites
              </Link>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                inputRef={searchInput}
                onKeyPress={searchHandler}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link to="/account">
                <AccountCircle />
                </Link>
              </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}

export default Navbar;
