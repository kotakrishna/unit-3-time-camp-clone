import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserProjectId, getUserTasks } from "../Redux/action";
import { Link } from "react-router-dom";

export default function InnerPage() {
  const dispatch = useDispatch();

  const project = useSelector((state) => state.project);

  const handleProject = (i) => {
    console.log(i);

    dispatch(getUserTasks(i));
  };
  return (
    <div>
      <h1>Inner Page</h1>
      <Link to="/input-page">Add Input</Link>
      <div>
        {project.map((i) => (
          <div>
            <h1>{i.projectName}</h1>
            <h5>{i.projectDetails}</h5>
          </div>
        ))}
      </div>
      <div>
        {project.map((i) => (
          <button key={i.id} onClick={() => handleProject(i.projectId)}>
            <h1>{i.projectName}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}
