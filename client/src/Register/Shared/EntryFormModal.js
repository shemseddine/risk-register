import React from "react";
import { withStyles, Modal, Button } from "@material-ui/core";
import WrapperForm from "./WrapperForm";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
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
        <WrapperForm handleClose={handleClose} />
      </div>
    </Modal>
  );
};

export default withStyles(styles)(EntryFormModal);
