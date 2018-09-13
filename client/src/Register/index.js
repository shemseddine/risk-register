import React from 'react';
import { withStyles, Tooltip, Button, Paper } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import RegisterTable from './RegisterTable';

const width = 950;

const styles = theme => ({
    root: {
        position: "relative",
        width: "auto",
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit *2,
        [theme.breakpoints.up(width + theme.spacing.unit * 2 * 2)]: {
            width: width,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    add: {
        position: "absolute",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(width + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3,
        }
    }
})

const Register = ({classes}) => {
    return <div className={classes.root}>
        <Paper className={classes.paper}>
            <h1>Registers</h1>
            <RegisterTable />
            <Tooltip title="Add new entry">
                <Button variant="fab" color="secondary" className={classes.add}>
                    <Add />
                </Button>
            </Tooltip>
        </Paper>
    </div>
}

export default withStyles(styles)(Register);