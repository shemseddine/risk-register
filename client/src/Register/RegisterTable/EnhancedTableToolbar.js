import React from 'react';
import { Toolbar, withStyles, Typography, IconButton, Tooltip } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { Delete, FilterList } from '@material-ui/icons';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        paddingRight: theme.spacing.unit
    },
    hightlight: theme.palette.type === "light" ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
    } : {
        color: theme.text.primary,
        backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
        flex: `1 1 100%`
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: `0 0 auto`
    }
});

let EnhancedTableToolbar = ({classes, numSelected }) => {
    return (
        <Toolbar className={classNames(classes.root, {[classes.hightlight]: numSelected > 0})}>
            <div className={classes.title}>
            {numSelected > 0 ? (
                <Typography color="inherit" variant="subheading">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography variant="title" id="tableTitle">
                    Risk Register
                </Typography>
            )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="delete">
                        <IconButton aria-label="Delete">
                            <Delete />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list">
                            <FilterList />
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    )
}

export default withStyles(styles)(EnhancedTableToolbar);