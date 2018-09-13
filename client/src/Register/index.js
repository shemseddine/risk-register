import React from 'react';
import { withStyles, Tooltip, Button, Paper, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import RegisterTable from './RegisterTable';
import EntryFormModal from './Shared/EntryFormModal';

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

class Register extends React.Component{
    state = {
        open: true
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render(){
        let {classes} = this.props;
        let { open } = this.state;

        return <div className={classes.root}>
        <Paper className={classes.paper}>
            <Typography variant="body2" align="right">Last updated 15:10 13/09/2018</Typography>
            <RegisterTable />
            <EntryFormModal open={open} handleClose={this.handleClose}/>
            <Tooltip title="Add new entry">
                <Button variant="fab" onClick={this.handleOpen} color="secondary" className={classes.add}>
                    <Add />
                </Button>
            </Tooltip>
        </Paper>
    </div>
    }
}

export default withStyles(styles)(Register);