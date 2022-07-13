import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
    return (
        <React.Fragment>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            {
              country ?
                <Card sx={{ maxWidth: 345 }}>
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
                  <Link to={`/countries`} >Back</Link>
                   </Card>
                : null
                
            }
          </Grid>
        </React.Fragment>
      );
    }