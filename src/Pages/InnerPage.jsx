import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserProjectId, getUserTasks } from "../Redux/action";
import { Link } from "react-router-dom";
import ProjectAddingComponent from "../Components/ProjectAddingComponent";
import TaskAddingComponent from "../Components/TaskAddingComponent";

export default function InnerPage() {
  const dispatch = useDispatch();

  const project = useSelector((state) => state.project);
  const tasks = useSelector((state) => state.data.tasks);
  console.log(tasks);
  const handleProject = (i) => {
    console.log(i);

    dispatch(getUserTasks(i));
  };
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
            style={{
              border: "1px solid black",
              width: "1000px",
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              margin: " auto",
            }}
          >
            <div>
              <h1>{i.projectName}</h1>
            </div>
            <div>
              <h5> {i.projectDetails}</h5>
            </div>
            <button onClick={() => handleProject(i.projectId)}>
              Get tasks of this project
            </button>
          </div>
        ))}
      </div>
      <div>
        {tasks?.map((task) => (
          <div
            key={task.taskId}
            style={{
              display: "grid",
              border: "1px solid black",
              padding: "2%",
              gridTemplateColumns: "auto auto auto",
            }}
          >
            <h1>{task.data.details.taskName}</h1>
            <h1>{task.data.details.taskNotes}</h1>
            <div>
              <TaskAddingComponent
                parentId={task.taskId}
                userId={task.userId}
                projectId={task.projectId}
              >
                {console.log(task.taskId, task.userId, task.projectId)}
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
