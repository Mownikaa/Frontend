import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow'

export default function Tablehead({ columns }) {
    return (
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell sx={{ backgroundColor: 'lightblue' }}
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }} >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )
    }