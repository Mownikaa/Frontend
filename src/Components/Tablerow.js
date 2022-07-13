import React from 'react'
import Table from '@mui/material/Table'
import Tablehead from './Tablehead'
import Tablebody from './Tablebody'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
export default function Tablerow({ columns, countries, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) {
    return (
        <React.Fragment>
          <Paper sx={{ width: "90%", overflow: "hidden",  margin: '5rem auto 0 auto' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <Tablehead columns={columns} />
                <Tablebody columns={columns} countries={countries} rowsPerPage={rowsPerPage} page={page} />
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={countries.length}
              rowsPerPage={rowsPerPage}
              page={countries.length <= 0 ? 0 : page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          {/* <NewTable /> */}
        </React.Fragment>
    
      )
    }