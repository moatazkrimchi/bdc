import {Table, TableCell, TableHead, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles(theme=>({
    table:{
        marginTop: theme.spacing(3),
        '& thead th' :{
            fontWeight: '600',
            color:'#e37830',
            backgroundColor: "#ffead8",
        },
        '& tbody td':{
            fontWeight:"300",
        },
        '& tbody tr:hover':{
            backgroundColor: '#fffbf2',
            cursor:"pointer",
        },
    },
}))

export default function useTable(records, headCells) {

const classes = useStyles();

const TblContainer = props => (
    <Table className={classes.table}>
        {props.children}
    </Table>
)

const TblHead = props => {
    return(<TableHead>
        <TableRow>
            {
                headCells.map(headCell => (<TableCell key={headCell.id}>{headCell.label}</TableCell>))
            }
        </TableRow>
    </TableHead>)
}

  return {
      TblHead,
      TblContainer
  }
}