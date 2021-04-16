import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import {useDispatch,useSelector} from 'react-redux'
import {getUserTasks} from '../Redux/action'
import {Link} from 'react-router-dom'
import AccountTreeIcon from '@material-ui/icons/AccountTree';


// const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    }
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    var project = useSelector((state) => state.log.project);
    
  const handleClose = () => {
      onClose(selectedValue);
    };
    const dispatch = useDispatch()
    
    const handleListItemClick = (value) => {
        onClose(value);
        dispatch(getUserTasks(value))
        console.log(value)
    };
    
    return (
    <Dialog
    onClose={handleClose}
    aria-labelledby="simple-dialog-title"
    open={open}
    >
      <DialogTitle id="simple-dialog-title">Search Project</DialogTitle>
      <List>
        {project.map((project) => (
            <ListItem
            button
            onClick={() => handleListItemClick(project.projectId)}
            key={project.projectId}
            >
            <ListItemAvatar>
              <AccountTreeIcon className={classes.avatar}>
                <PersonIcon />
              </AccountTreeIcon>
            </ListItemAvatar>
            <ListItemText primary={project.projectName} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
          >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
            <Link to="/input-page">
          <ListItemText primary="Add project" />
            </Link>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default function SearchProject() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    
    const handleClickOpen = () => {
        setOpen(true);
  };
  
  const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
  };

  return  (
    <div style={{flex:"1", width:"500px"}}>
{/* { selectedValue!==""  &&      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
}      <br /> */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          {/* <input > */}
        <input className="input" style={{width:"100%"}} placeholder="Search"/>
           {/* </input> */}
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
