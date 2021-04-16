import React from "react";
import { postUserProjectId, postUserTaskId } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import TaskAddingComponent from "../Components/TaskAddingComponent";
import "./InputTask.css"
// import { getLocalStorage } from "../Components/LocalStorage";
import ProjectAddingComponent from "../Components/ProjectAddingComponent";
import { deleteTask } from "../Redux/action";
// import {TaskAddingComponent} from "../Components/TaskAddingComponent";

export default function InputTask() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.log.userId);
  const tasks = useSelector((state) => state.log.data.tasks);

  const initProject = {
    projectName: "",
    projectId: uuid(),
    projectDetails: "",
  };
  const [data, setData] = React.useState(initProject);
  const initTask = {
    userId: userId,
    projectId: data.projectId,
    parentId: 0,
    taskId: uuid(),
    data: {
      addedToTimeSheets: false,
      timer: {
        startTimer: false,
        stopTimer: false,
      },
      time: {
        startTime: "",
        stopTime: "",
      },
      details: {
        taskName: "",
        timeSpent: 0,
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
  const handleChangeProject = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmitProject = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(userId);
    dispatch(postUserProjectId({ project: data, userId }));
  };
  const handleSubmitTask = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(postUserTaskId(task));
  };
  return (
    <div>
      {/* <form action="" onSubmit={handleSubmitProject}>
        <div>
    <div className="data">
      <form action="" onSubmit={handleSubmitProject}>
        <div className="project_details">
          <h1>Project Enter</h1>
          <label htmlFor="">
            Project Name:
            <input
              type="text"
              name="projectName"
              value={data.projectName}
              onChange={(e) => handleChangeProject(e)}
              id=""
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Project Details:
            <input
              type="text"
              name="projectDetails"
              value={data.projectDetails}
              onChange={(e) => handleChangeProject(e)}
              id=""
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" name="" id="" />
        </div>
      </form> */}
      <div>
        <h1>
          <TaskAddingComponent>Add Task</TaskAddingComponent>
        </h1>
        {/* <div>
          <form action="" onSubmit={handleSubmitTask}>
            <div>
              <label htmlFor="">
                Task Name:
                <input
                  type="text"
                  name="taskName"
                  value={task.data.details.taskName}
                  onChange={(e) => handleChangeTask(e)}
                  id=""
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Task Notes:
                <input
                  type="text"
                  name="taskNotes"
                  value={task.data.details.taskNotes}
                  onChange={(e) => handleChangeTask(e)}
                  id=""
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" name="" id="" />
            </div>
          </form>
        </div> */}
      </div>
      <div>
        <ProjectAddingComponent>Add Project</ProjectAddingComponent>
      </div>
      <div>
        {tasks.map((task) => (
          <div>
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
      <div>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
}
