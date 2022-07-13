import React, { useEffect } from 'react'
import CountryCard from './CountryCard'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/Actions/countryAction'
import Stack from '@mui/material/Stack'

export default function Country() {
    const { name } = useParams();
  const dispatch = useDispatch();
  const countryData = useSelector(state => state.countryData)
  useEffect(() => {
    dispatch(fetchData(name));
  }, [dispatch, name])
  if (countryData.error) return <div>Error</div>
  if (countryData.loading) return <h1>Loading</h1>
  return (
    <Stack direction="row">
      {countryData.country ? <CountryCard country={countryData.country[0]} /> : null}
    </Stack>
  )
}