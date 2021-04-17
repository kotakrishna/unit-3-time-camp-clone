import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
// import { getUserProjectId } from "../Redux/action";

// import { useDispatch } from "react-redux";

// const id=React.useRef()
const editProjectTitle = async ({ Project, project }) => {
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  let id = 0;
  let projectId = 0;
  let payload = {
    id: id,
    title: Project.projectName,
    projectDetails: Project.projectDetails,
    projectId: projectId,
  };
  const getId = async (project) => {
    return await axios.get(
      `https://json-server-mocker-masai-test.herokuapp.com/projects?${project.title}`
    );
  };
  //   let userId = localStorage.getItem("userId");
  //   const data = await getId(project);
  //   const data =
  //   console.log(data.data[0]);
  try {
    // await data;
    await axios
      .patch(
        `https://json-server-mocker-masai-test.herokuapp.com/projects/${await getId(
          project
        ).data[0].id}`,
        {
          project: {
            projectName: `${payload.title}`,
            projectDetails: `${payload.projectDetails}`,
            projectId: `${payload.projectId}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((er) => console.log(er));
  } catch (error) {
    console.log(error);
  }
};
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectEditCard(project) {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  const initial = {
    // id: id,
    projectName: "",
    projectDetails: "",
  };
  const [Project, setProject] = React.useState(initial);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setProject({ ...Project, [name]: value });
  };
  const handleSubmit = () => {
    editProjectTitle({ Project, project });
    setProject(initial);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {project.projectName}
        </Typography>
        <TextField
          id="standard-basic"
          label="New Title"
          name="projectName"
          value={Project.projectName}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Details"
          variant="filled"
          name="projectDetails"
          value={Project.projectDetails}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSubmit}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
