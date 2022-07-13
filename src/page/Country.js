import React from 'react'
import useCountry from "../custom-hooks/useCountry"
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { CardActionArea, Button } from '@mui/material'
import { useParams, Link} from "react-router-dom"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'

export default function Country() {
    const name = useParams()
    const name1 =name.country
    console.log(name.country)
    const { countryData,error,loading } = useCountry(`https://restcountries.com/v3.1/name/${name1}`)
    console.log("country",countryData)
   if(error) return <div>Error</div>
   if(loading) return <div>Loading</div>
   console.log("country",countryData)
  return (
    <div>
            { countryData ? (countryData.map((country) => {
           
            return (
                    <Card sx={{ maxWidth: 400, marginLeft:'auto', marginRight:'auto'}} >
                     <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={country.flags.png}
                        alt="flag"
                      />
                     <CardContent>
                      <Typography sx={{ fontSize: 20, color: "black" }}gutterBottom >
                        {country.name.common}
                      </Typography>
                      <Typography sx={{ fontSize: 20, color: "black" }} gutterBottom >
                        In the Region: {country.region}
                      </Typography>
                      <Typography sx={{ fontSize: 20, color: "black" }} gutterBottom >
                        Capital city: {country.capital}
                      </Typography>
                      <Typography  sx={{ fontSize: 20, color: "black" }} gutterBottom>
                        Population: {country.population}
                      </Typography>
                      <Typography sx={{ fontSize: 20, color: "black" }} gutterBottom >
                        Languages:
                      </Typography>
                       {country.languages ? (
                          Object.values(country.languages).map((lang) => {
                              return <Typography sx={{ fontSize: 20, color: "black" }} gutterBottom >{lang}</Typography>
                          })
                      ) : (
                          <> </>
                      )}
                      </CardContent>
                     </CardActionArea>
                     <CardActions>
                <Button sx={{ maxWidth: 345, marginLeft:'auto', marginRight:'auto'}} size="small" color="primary" >
                  <Link to={`/`} >Back</Link>
                </Button>
              </CardActions>
                    </Card>
            )
        })
            ):( <> </>
            )}
    </div>
    )}
 




