import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimeInString,
  getTimeInStringWithoutHr,
} from "../Components/getTimeInString";
import styled from "styled-components";
import { getUserTasksUserId } from "../Redux/action";
import LoadingSign from "../Components/LoadingSign";
export default function ReportsPage() {
  const H6 = styled.p`
    text-align: "center";
    text-align: "left";
    align-self: "start";
    padding-left: "20%";
    /* margin-top: "50px"; */
    /* padding-top: "5px";
    margin: 0 5px; */
    &:hover {
      font-weight: 1000;
      /* border: 1px solid #c4c4c4; */
      /* border-radius: 10px; */
    }
  `;
  const Div = styled.div`
    /* text-align: "center"; */
    margin: 0 5px;
    &:hover {
      background-color: #c4c4c4;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }
  `;
  const NameCompo = styled.p`
    /* text-align: "left"; */
    background-color: "black";
    /* padding-left: "20%"; */
  `;
  // const
  const tasks = useSelector((state) => state.log.data.tasks);
  const isDataLoading = useSelector((state) => state.log.data.isDataLoading);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(tasks);
    dispatch(getUserTasksUserId(localStorage.getItem("userId")));
  }, []);
  const add = (a, b) => {
    return a + b;
  };
  console.log(tasks);
  //   if (tasks) {
  //     // var allTask = tasks.data.details;
  let sum;
  let total = tasks
    .map((task) => {
      let sum = 0;
      return (sum = sum + task.data.details.timeSpent.reduce(add, 0));
    })
    .reduce(add, 0);
  console.log(total);
  //   }
  return isDataLoading ? (
    <LoadingSign />
  ) : (
    <div>
      <h2>Reports page</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 200px 100px",
          gridColumnGap: "200px",
        }}
      >
        <div>
          <NameCompo
            style={{
              textAlign: "left",
              paddingLeft: "20%",
            }}
          >
            Name
          </NameCompo>
        </div>
        <div>
          <p>Hours with subtasks</p>
        </div>
        <div>
          <p>Task Time</p>
        </div>
      </div>
      <div>
        {tasks?.map((task) => (
          <>
            <Div
              key={task.Id}
              style={{
                display: "grid",
                gridTemplateColumns: "500px 200px 100px",
                gridColumnGap: "200px",
                gridRowGap: "10px",
              }}
            >
              {task.data.details.timeSpent.reduce(add, 0) !== 0 && (
                <>
                  <NameCompo>{task.data.details.taskName}</NameCompo>
                  <NameCompo>{task.data.details.taskNotes}</NameCompo>
                  <NameCompo>
                    {getTimeInString(
                      task.data.details.timeSpent.reduce(add, 0)
                    )}
                  </NameCompo>
                </>
              )}
            </Div>
          </>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "500px 200px 100px",
          gridColumnGap: "200px",
        }}
      >
        <div>
          <h1>total time Spent</h1>
        </div>
        <div></div>
        <div>
          <H6 style={{ fontSize: "20px" }}>
            {getTimeInStringWithoutHr(total)}
          </H6>
        </div>
      </div>
    </div>
  );
}
