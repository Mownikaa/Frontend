import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useFetch from "../custom-hooks/useCountries"
// import onChangeHandler from "../custom-hooks/useUserInput"

const columns = [
  {
     id: 'flags',
     label: 'Flag',
     minWidth: 170,
     format: (value) => <img src={value.png} alt="country flag" />
  },

  { id: 'name', 
    label: 'Name',
    minWidth: 100,
  format: (value) => value.common },
{
    id: 'region',
    label: 'Region',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 100,
    align: 'right',
    format: (languages) => {
      console.log(languages);
      return (
    <ul>
      {Object.values(languages).map(
      (lang) => {
          return (
          <li> {lang} </li>
          )
      })}
    </ul>
      )
    }

  },
];


export default function CountryPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { countries, error, loading } = useFetch("https://restcountries.com/v3.1/all")
  // const { inputvalue } = useUserInput()
  if (error) return <div>Error!</div>
  if (loading) return <div>Loading...</div>
  console.log(countries)
  return (
    <div>{

    }
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country) => {
                  console.log(country);
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={country.code}>
                      {columns.map((column) => {
                        const value = country[column.id];
                        console.log(column.id);
                        //console.log(value);
                        return (
                          <TableCell align={column.align}>
                            {column.format
                            ? column.format(value)
                            : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 200]}
          component="div"
          count={countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}