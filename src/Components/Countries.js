import React, { useState, useEffect } from 'react';
import Tablerow from './Tablerow';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataForCountries } from '../Redux/Actions/countriesAction';
import NavBar from './NavBar';
const columns = [
   
    {
        id: 'flag', label: 'Flag', minWidth: 170, align: 'left',
        format: (value) => <Avatar alt="Remy Sharp" src={value}
            sx={{ width: 60, height: 60 }}/>
    },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'population', label: 'Population', minWidth: 170, align: 'left' },
    { id: 'languages', label: 'Languages', minWidth: 170, align: 'left' },
    { id: 'region', label: 'Region', minWidth: 100 },
];
export default function Countries() {
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    const countriesData = useSelector(state => state.countriesData)
    console.log("countriesData", countriesData)
    useEffect(() => {
        dispatch(fetchDataForCountries());
    }, [dispatch])
    const handleChangePage = (event,
        newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    if (countriesData.error) return <div>Error</div>
    if (countriesData.loading) return <h1>Loading</h1>
    return (
        <React.Fragment>
            <NavBar />
            {countriesData ?
               <Tablerow countries={countriesData.filterdCountries} columns={columns} rowsPerPage={rowsPerPage} page={page} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
                : null}
        </React.Fragment>
    );
}