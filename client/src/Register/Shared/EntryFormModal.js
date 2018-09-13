import React from "react";
import { withStyles, Modal, Button } from "@material-ui/core";
import EntryForm from "./EntryForm";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const EntryFormModal = ({ classes, open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={getModalStyle()} className={classes.paper}>
        <EntryForm />
        <div className={classes.footer}>
          <Button className={classes.button} variant="contained" color="secondary">
            Save
          </Button>
          <Button className={classes.button} variant="contained" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default withStyles(styles)(EntryFormModal);
