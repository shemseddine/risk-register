import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, Tooltip, TableSortLabel } from '@material-ui/core';

const EnhancedTableHead = ({rows, onRequestSort, onSelectAllClick, order, orderBy, numSelected, rowCount}) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={(event, checked) => onSelectAllClick(checked)} />
                </TableCell>
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            numeric={row.numeric}
                            padding={row.disablePadding ? "none":  "default"}
                            sortDirection={orderBy === row.id ? order : false}>
                            <Tooltip title="sort" placement={row.numeric ? "bottom-end" : "bottom-start"}
                            enterDelay={300}>
                                <TableSortLabel active={orderBy === row.id}
                                    direction={order}
                                    onClick={property => event => onRequestSort(property)}>
                                    {row.label} 
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    )
}

export default EnhancedTableHead;