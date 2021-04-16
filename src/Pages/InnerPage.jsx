import React from "react";
import { useSelector } from "react-redux";
// import { getUserTasks } from "../Redux/action";
import { Link } from "react-router-dom";
// import ProjectAddingComponent from "../Components/ProjectAddingComponent";
import TaskAddingComponent from "../Components/TaskAddingComponent";
import ProjectAccordion from "../Components/ProjectAccordion";
import { useDispatch } from "react-redux";
import { getUserProjectId, getUserTasksUserId } from "../Redux/action";

export default function InnerPage() {
  const dispatch = useDispatch();

  const project = useSelector((state) => state.log.project);
  const tasks = useSelector((state) => state.log.data.tasks);
  console.log(tasks);
  const userId = localStorage.getItem("userId");
  // const handleProject = (i) => {
  //   console.log(i);
  React.useEffect(() => {
    console.log(project);
    // dispatch(get)
    dispatch(getUserProjectId(userId));
    // dispatch(getUserTasksUserId(userId));
  }, []);

  return (
    <div>
      <div>
        <h1>Inner Page</h1>
        <Link style={{ textDecoration: "none" }} to="/input-page">
          <button>
            <h3>Add Project or Task</h3>
          </button>
        </Link>
      </div>
      <div>
        {project.map((i) => (
          <div
            key={i.projectId}
            // style={{
            //   border: "1px solid black",
            //   width: "1000px",
            //   display: "grid",
            //   gridTemplateColumns: "auto auto auto",
            //   margin: " auto",
            // }}
          >
            <ProjectAccordion
              projectId={i.projectId}
              subTask={tasks?.filter((task) => task.projectId === i.projectId)}
            >
              {i.projectName}
            </ProjectAccordion>
            {/* <div>
              <h1>{i.projectName}</h1>
            </div>
            <div>
              <h5> {i.projectDetails}</h5>
            </div>
            <button onClick={() => handleProject(i.projectId)}>
              Get tasks of this project
            </button> */}
          </div>
        ))}
      </div>
      <h1>All Tasks</h1>
      <div>
        {tasks?.map((task) => (
          <div
            key={task.taskId}
            style={{
              display: "grid",
              border: "1px solid black",
              padding: "1%",
              width: "700px",
              margin: "auto",
              gridTemplateColumns: "150px 400px 100px",
            }}
          >
            <h2>{task.data.details.taskName}</h2>
            <h4>{task.data.details.taskNotes}</h4>
            <div>
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
        ))}
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
