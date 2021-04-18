import React from "react";
// import { postUserProjectId, postUserTaskId } from "../Redux/action";
import { useSelector } from "react-redux";
// import { v4 as uuid } from "uuid";
import TaskAddingComponent from "../Components/TaskAddingComponent";
import "./InputTask.css";
// import { getLocalStorage } from "../Components/LocalStorage";
import ProjectAddingComponent from "../Components/ProjectAddingComponent";
// import { deleteTask } from "../Redux/action";
// import {TaskAddingComponent} from "../Components/TaskAddingComponent";

export default function InputTask() {
  const tasks = useSelector((state) => state.log.data.tasks);
  console.log(tasks);

  return (
    <div>
      <div>
        <h1>
          <TaskAddingComponent className="add_task">
            Add Task
          </TaskAddingComponent>
        </h1>
      </div>
      <div>
        <ProjectAddingComponent>Add Project</ProjectAddingComponent>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.taskId}>
            <h1>{task.data.details.taskName}</h1>
            {/* <button> */}
            <TaskAddingComponent
              parentId={task.taskId}
              userId={task.userId}
              projectId={task.projectId}
            >
              AdD new Task
            </TaskAddingComponent>
            {/* </button> */}
          </div>
        ))}
      </div>
      <div>{/* <button onClick={deleteTask}>Delete</button> */}</div>
    </div>
  );
}
