import React from "react";
import { useSelector } from "react-redux";
// import { getUserTasks } from "../Redux/action";
import { Link } from "react-router-dom";
// import ProjectAddingComponent from "../Components/ProjectAddingComponent";
import TaskAddingComponent from "../Components/TaskAddingComponent";
import ProjectAccordion from "../Components/ProjectAccordion";
import "./InnerPage.css";
import { useDispatch } from "react-redux";
import SearchProject from "../Components/SearchProject";
import { getUserProjectId } from "../Redux/action";
import ProjectEditCard from "../Components/ProjectEditCard";
import LoadingSign from "../Components/LoadingSign";
import { getTimeInStringWithoutHr } from "../Components/getTimeInString";

export default function InnerPage() {
  let projectDetails = React.useRef();
  // projectDetails.current = {
  //   projectName: "okay",
  // };
  const dispatch = useDispatch();

  const project = useSelector((state) => state.log.project);
  const tasks = useSelector((state) => state.log.data.tasks);
  const isDataLoading = useSelector((state) => state.log.data.isDataLoading);
  console.log(tasks);
  const userId = localStorage.getItem("userId");
  // const handleProject = (i) => {
  //   console.log(i);
  const randomColor = () => {
    return Math.floor(Math.random() * 256);
  };
  React.useEffect(() => {
    console.log(project);
    // dispatch(get)
    dispatch(getUserProjectId(userId));
    // dispatch(getUserTasksUserId(userId));
  }, []);
  const add = (a, b) => {
    return a + b;
  };

  let [projectData_edit, setProjectData_edit] = React.useState({});
  return isDataLoading ? (
    <LoadingSign />
  ) : (
    <div className="project_main">
      <div className="project_page">
        <h3 className="inner_page">Projects</h3>
        <div className="project_page">
          {/* <input className="input"  placeholder="Search"/> */}
          <SearchProject style={{ flex: 0.5 }} />
          <Link style={{ textDecoration: "none" }} to="/input-page">
            <button className="add_project">Add Project or Task</button>
            <button className="add_project">Filter</button>
            <button className="add_project">Archieved</button>
          </Link>
        </div>
      </div>
      <div className="task">
        {project.map((i) => (
          // <div >
          <ProjectAccordion
            key={i.projectId}
            className="task_details"
            projectId={i.projectId}
            subTask={tasks?.filter((task) => task.projectId === i.projectId)}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  margin: 5,
                  borderRadius: 5,
                  background: `rgb(${randomColor()},${randomColor()},${randomColor()})`,
                }}
              ></div>
              {i.projectName}
            </div>
          </ProjectAccordion>
          // </div>
        ))}
      </div>

      <h1>All Tasks</h1>
      <div>
        {tasks?.map((task) =>
          !task ? (
            <LoadingSign />
          ) : (
            <div
              key={task.taskId}
              style={{
                display: "grid",
                border: "1px solid black",
                padding: "1%",
                width: "700px",
                margin: "auto",
                background: "whiteSmoke",
                borderBlockStyle: "5px",
                marginBottom: "10px",
                borderRadius: "10px",
                gridTemplateColumns: "150px 400px 100px",
              }}
            >
              <h2>{task.data.details.taskName}</h2>
              <h4>
                {getTimeInStringWithoutHr(
                  task.data.details.timeSpent.reduce((a, b) => a + b, 0)
                )}
              </h4>
              <div className="another_task">
                <TaskAddingComponent
                  parentId={task.taskId}
                  userId={task.userId}
                  projectId={task.projectId}
                >
                  {/* {console.log(task.taskId, task.userId, task.projectId)} */}
                  Add Another Task
                </TaskAddingComponent>
              </div>
            </div>
          )
        )}
      </div>
      {/* <div> */}
      {/* // </ProjectAddingComponent> */}
      {/* <button key={i.id} onClick={() => handleProject(i.projectId)}> */}
      {/* // <ProjectAddingComponent key={i.projectId}> */}
      {/* </button> */}
      {/* {project.map((i) => (
          <h1>{i.projectName}</h1>
        ))} */}
      {/* </div> */}
    </div>
  );
}
