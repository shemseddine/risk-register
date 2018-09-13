import React from 'react';
import { TableRow, TableCell, Checkbox } from '@material-ui/core';

const ListItem = ({classes, handleClick, isSelected, id, raisedOn, description, likelihood, impact, severity, owner, mitigation, contingent, progress, status}) => {
    return (
        <TableRow
            hover
            onClick={handleClick}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={id}
            selected={isSelected}>
            <TableCell padding="checkbox">
                <Checkbox checked={isSelected} />
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
                {description}
            </TableCell>
            <TableCell>{raisedOn}</TableCell>
            <TableCell>{likelihood}</TableCell>
            <TableCell>{impact}</TableCell>
            <TableCell>{severity}</TableCell>
            <TableCell>{owner}</TableCell>
            <TableCell>{mitigation}</TableCell>
            <TableCell>{contingent}</TableCell>
            <TableCell>{progress}</TableCell>
            <TableCell>{status}</TableCell>
        </TableRow>
    )
}

export default ListItem;