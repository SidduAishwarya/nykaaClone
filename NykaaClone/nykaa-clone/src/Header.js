import React from 'react'
import "./Header.css"
import Logo from "./nykaa logo.png"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fc2779',
      contrastText: '#fff',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
        height: '2ch',
      },
    },
  }));

const Header = () => {
  return (
    <div className="navbar" >
     <img className="logo" src={Logo} alt="" /> 
     <div className="nav">
        
     <div className="nav1">
     <a href="/"  style={{textDecoration: 'none', color: "black",fontWeight: "bold"}}  >Categories</a>
     </div>
     <div className="nav1">
     <a href="/"  style={{textDecoration: 'none', color: "black",fontWeight: "bold"}}>Brands</a>
     </div>
     <div className="nav1">
     <a href="/"  style={{textDecoration: 'none', color: "black",fontWeight: "bold"}}>Luxe</a>
     </div>
     <div className="nav1">
     <a href="/"  style={{textDecoration: 'none', color: "black",fontWeight: "bold"}}>Nykaa Fashion</a>
     </div>
     <div className="nav1">
     <a href="/"  style={{textDecoration: 'none', color: "black",fontWeight: "bold"}}>Beauty Advice</a>
     </div>
     
     <div className="nav2">
     <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search on Nykaa"
              inputProps={{ 'aria-label': 'search' }}
            />
    </Search>
    </div>
    <div className="button">
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained">
        Sign in
      </Button>
    </ThemeProvider>
    </div>
    <div className='nav3'>
    <ShoppingBagOutlinedIcon/>
    </div>
    
    </div>
    </div>
  )
}

export default Header
