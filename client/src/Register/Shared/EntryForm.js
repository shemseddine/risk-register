import React from "react";
import {
  withStyles,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

const styles = theme => ({
  paper: {},
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const EntryForm = ({
  classes,
  newEntry,
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  handleClose
}) => {
  return (
    <div>
      <Typography variant="title" gutterBottom>
        {newEntry ? "New Entry" : "Edit Entry"}
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
            name="description"
            label="Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={values.raisedOn}
            onChange={handleChange}
            onBlur={handleBlur}
            id="raisedOn"
            name="raisedOn"
            label="Raised On"
            type="date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.likelihood}
            onChange={handleChange}
            onBlur={handleBlur}
            id="likelihood"
            name="likelihood"
            label="likelihood"
            type="number"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.impact}
            onChange={handleChange}
            onBlur={handleBlur}
            id="impact"
            name="impact"
            label="impact"
            type="number"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.severity}
            onChange={handleChange}
            onBlur={handleBlur}
            id="severity"
            name="severity"
            label="severity"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.owner}
            onChange={handleChange}
            onBlur={handleBlur}
            id="ower"
            name="owner"
            label="owner"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.mitigation}
            onChange={handleChange}
            onBlur={handleBlur}
            id="mitigation"
            name="mitigation"
            label="mitigation"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.contingent}
            onChange={handleChange}
            onBlur={handleBlur}
            id="contingent"
            name="contingent"
            label="contingent"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.progress}
            onChange={handleChange}
            onBlur={handleBlur}
            id="progress"
            name="progress"
            label="progress"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            id="status"
            name="status"
            label="status"
          />
        </Grid>
      </Grid>

      <div className={classes.footer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Save
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(EntryForm);
