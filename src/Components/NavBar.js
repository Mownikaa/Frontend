import  React, {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "./SearchInput";
import Badge from '@mui/material/Badge';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'


import SwitchTheme from "./SwitchTheme";
import { ThemeContext, themes } from "./ThemeComponent";

export default function NavBar() {
  const {theme} = useContext(ThemeContext)
  console.log(theme)
  const themecolor = themes[theme]
  console.log(themes)
  const navigate = useNavigate()
  const favoriteCountries = useSelector(state => state.countriesData.favoriteCountries)

  function goToFavoriteCountries() {
    navigate('/favoritCountries')
  }
  return (
    <div>
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx = {{ backgroundColor:themecolor.background }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, backgroundColor:themecolor.background }}>
        <Toolbar>
        <SwitchTheme/>
          <SearchInput component="div" sx={{ flexGrow: 1, themecolor }}/>
          <Badge badgeContent={favoriteCountries.length} color="error">
          <LocalGroceryStoreIcon  onClick={goToFavoriteCountries} />
          </Badge>
         </Toolbar>
     </Box>
     </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}