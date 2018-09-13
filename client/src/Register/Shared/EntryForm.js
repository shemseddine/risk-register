import React from 'react';
import { withStyles, Typography, Grid, TextField } from '@material-ui/core';

const styles = theme => ({
    paper: {}
})

const EntryForm = ({ classes, newEntry }) => {
    return (
        <div>
            <Typography variant="title" gutterBottom>
                {newEntry ? "New Entry" : "Edit Entry"}
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        required 
                        id="description"
                        name="description"
                        label="Description"
                        fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="raisedOn"
                        name="raisedOn"
                        label="Raised On"
                        type="date"
                        fullWidth
                        value={Date.now()} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="likelihood"
                        name="likelihood"
                        label="likelihood"
                        type="number" />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="impact"
                        name="impact"
                        label="impact"
                        type="number" />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <TextField
                        disabled
                        id="impact"
                        name="impact"
                        label="impact"
                        value="5" />
                </Grid>
            </Grid>
        </div>)
}

export default withStyles(styles)(EntryForm);