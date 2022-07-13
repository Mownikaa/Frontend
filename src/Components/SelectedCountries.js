import * as React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCountryFromFavourites } from '../Redux/Actions/countriesAction';
import { useDispatch } from 'react-redux';

export default function FavoritCountries() {
  const dispatch = useDispatch()
  const favoriteCountries = useSelector(state => state.countriesData.favoriteCountries)
  let favoriteCountriesfromLocalStore = JSON.parse(localStorage.getItem("favoriteCountries"))
  console.log( favoriteCountriesfromLocalStore)

  function handleRemoveFavorite(name) {
    dispatch(deleteCountryFromFavourites(name))
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 1700,
          borderRadius: 1,
          margin: '2rem'
        }}
      >
        {favoriteCountries.map((country) => {
          return (
            <Card sx={{ width: 300, height: 350, margin: '2rem' }} key={country.cca3} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={country.flags.png}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {country.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {country.population}
                </Typography>
                {Object.keys(country.languages).map((key) => {
                  return (
                    <Typography variant="body2" color="text.secondary" key={country.cca3 + key}>
                      {country.languages[key]}
                    </Typography>
                  )
                }
                )}
              </CardContent>
              <IconButton
                aria-label="delete"
                onClick={() => handleRemoveFavorite(country.name.common)}>
                <DeleteIcon />
              </IconButton>
            </Card>
          )
        })}

      </Box>
    </React.Fragment>
  );
}