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
import { postUserTaskId } from "../Redux/action";
import "../Pages/InnerPage.css";

export default function TaskAddingComponent({
  children,
  parentId = 0,
  userId,
  projectId = 0,
}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const initTask = {
    userId: userId || localStorage.getItem("userId"),
    projectId: projectId,
    parentId: parentId,
    taskId: uuid(),
    data: {
      addedToTimeSheets: false,
      timer: {
        startTimer: false,
        stopTimer: false,
      },
      time: {
        startTime: new Date(),
        stopTime: new Date(),
      },
      details: {
        taskName: "",
        timeSpent: [],
        taskNotes: "",
      },
    },
  };
  const [task, setTask] = React.useState(initTask);
  const handleChangeTask = (e) => {
    let { name, value } = e.target;
    setTask({
      ...task,
      data: { ...task.data, details: { ...task.data.details, [name]: value } },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(task);
    if (task.data.details.taskName !== "") {
      dispatch(postUserTaskId(task));
    }
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          width: "200px",
          marginLeft: "-60px",
          borderRadius: "10px",
          border: "1px solid black",
          color: "white",
          background: "green",
          marginTop: "10px",
        }}
        onClick={handleClickOpen}
      >
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Adding Task</DialogTitle>
        <DialogContent>
          <DialogContentText>Sub Add Task</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            type="text"
            fullWidth
            name="taskName"
            value={task.data.details.taskName}
            onChange={(e) => handleChangeTask(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="details"
            label="Task Details"
            type="text"
            fullWidth
            name="taskNotes"
            value={task.data.details.taskNotes}
            onChange={(e) => handleChangeTask(e)}
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
