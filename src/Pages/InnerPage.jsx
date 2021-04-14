import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserProjectId, getUserTasks } from "../Redux/action";

export default function InnerPage() {
  const dispatch = useDispatch();

  const projectId = useSelector((state) => state.projectId);

  const handleProject = (i) => {
    console.log(i);

    dispatch(getUserTasks(i));
  };
  return (
    <div>
      <h1>Inner Page</h1>
      <div>
        {projectId.map((i) => (
          <button onClick={() => handleProject(i)} key={i}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
