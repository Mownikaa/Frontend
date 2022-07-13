import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

import AddBoxIcon from '@mui/icons-material/AddBox';
import { getAllFavouritesCountries } from "../Redux/Actions/countriesAction"

export default function Tablebody({ countries, columns, rowsPerPage, page }) {
    const dispatch = useDispatch()
    const favoriteCountries = useSelector(state => state.countriesData.favoriteCountries)
  localStorage.setItem("favoriteCountries", JSON.stringify(favoriteCountries))
    
  function handleFavoriteClick(index, country) {
    dispatch(getAllFavouritesCountries(index, country))
  }
  function isDublicate(country) {
    let val = favoriteCountries.some(
      (value) => value.name.common === country.name.common
    )
    return val
  }

  return (
    <TableBody>
      {countries && countries
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((country, index) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={country.flags.png}>
              {columns.map((column) => {
                let result = ""
                switch (column.id) {
                  case "name":
                    result = country.name.common || " "
                    break;
                  case "flag":
                    result = country.flags.png || " "
                    break;
                  case "languages":
                    result = country.languages || " "
                    break;
                  case "population":
                    result = country.population || " "
                    break;
                  case "region":
                    result = country.region || " "
                    break;
                  default:
                    result = null
                    break;
                }
                return result ? (
                  <TableCell key={column.id} align={column.align}>
                    {column.format ? column.format(result)
                      : column.id === "languages" ?
                        Object.keys(result).map((lang) => {
                          return (
                            <p key={lang}>
                              {result[lang]}
                            </p>
                          )
                        })
                        : column.id === "name" ?
                          <Link to={`${result}`}><p>{result}</p></Link>
                          : <p>{result}</p>
                    }
                  </TableCell>
                ) : null
              })}
              <TableCell >
                < AddBoxIcon
                  sx={
                    () => isDublicate(country) ? { color: "orange" } : { color: "black" }}
                  onClick={() => handleFavoriteClick(index, country)} /></TableCell>
            </TableRow>
          );
        })}
    </TableBody>
    )
}