import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { postUserProjectId } from "../Redux/action";

export default function ProjectAddingComponent({ children }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const initProject = {
    projectName: "",
    projectId: uuid(),
    projectDetails: "",
  };
  const [data, setData] = React.useState(initProject);
  const handleChangeProject = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // const handleSubmitTask = (e) => {
  //   // e.preventDefault();
  //   console.log(data);
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(data);
    if (data.projectName !== undefined) {
      dispatch(postUserProjectId(data));
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>Sub Add Task</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            name="projectName"
            value={data.projectName}
            onChange={(e) => handleChangeProject(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="details"
            label="Project Details"
            type="text"
            fullWidth
            name="projectDetails"
            value={data.projectDetails}
            onChange={(e) => handleChangeProject(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
