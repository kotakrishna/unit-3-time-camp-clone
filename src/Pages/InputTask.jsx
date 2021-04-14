import React from "react";
import { postUserProjectId, postUserTaskId } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import TaskAddingComponent from "../Components/TaskAddingComponent";
import { getLocalStorage } from "../Components/LocalStorage";
export default function InputTask() {
  const dispatch = useDispatch();
  const userId =
    useSelector((state) => state.userId) || getLocalStorage("userId");
  const tasks =
    useSelector((state) => state.data.tasks) || getLocalStorage("tasks");

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
        timeSpent: "",
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
      <form action="" onSubmit={handleSubmitProject}>
        <div>
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
      </form>
      <div>
        <h1>Add Task</h1>
        <div>
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
        </div>
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
    </div>
  );
}
