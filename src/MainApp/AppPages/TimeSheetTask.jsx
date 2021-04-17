import React from "react";
import { useDispatch } from "react-redux";
import { getTasks, updateTasks, setStart, setStop } from "../Redux/action";
import * as moment from "moment";
import styles from "./TimeSheets.module.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TimeInputPolyfill from "react-time-input-polyfill";
import { loaddata } from "../../taskUtil/taskLocalStorage";
import { TimeInput } from "./TimeInput";
import SetInterval_TitleChange from "./SetInterval&TitleChange";

export function TimeSheetTask({ data }) {
  const [state, setState] = React.useState(false);
  const [startCheck, setStartCheck] = React.useState(false);

  const [manualStrTime, setManualStrTime] = React.useState("18:00");
  const [manualStpTime, setManualStpTime] = React.useState("18:00");
  const tasks = useSelector((state) => state.appRed.tasks);
  const dispatch = useDispatch();

  const Div = styled.div`
    margin: 0 10px;
    &:hover {
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }
  `;
  const StartStopButton = styled.div`
    &:hover {
      background: #3ea04a;
      border-radius: 5px;
    }
  `;
  // React.useEffect(()=>{

  // },[manualStpTime])

  const handleStartAndStop = () => {
    tasks?.forEach((item) => {
      if (item.data.timer.startTimer) {
        setStartCheck(true);
      }
    });
    if (true) {
      if (!data.data.timer.startTimer) {
        const params = {
          startTimer: true,
          stopTimer: false,
          startTime: new Date(),
          stopTime: "",
          taskName: data.data.details.taskName,
          taskNotes: data.data.details.taskNotes,
        };
        let timeSpent = Number(data.data.details.timeSpent);
        console.log(timeSpent);
        dispatch(updateTasks(params, data.id, timeSpent, loaddata("userId")));
      } else if (data.data.timer.startTimer) {
        if (data.data.time.startTime !== "") {
          const params = {
            startTimer: false,
            stopTimer: true,
            startTime: data.data.time.startTime,
            stopTime: new Date(),
            taskName: data.data.details.taskName,
            taskNotes: data.data.details.taskNotes,
          };
          let timeSpent =
            Number(data.data.details.timeSpent) +
            (new Date(params.stopTime) - new Date(params.startTime));
          console.log(timeSpent);
          dispatch(updateTasks(params, data.id, timeSpent, loaddata("userId")));
        } else {
          const params = {
            startTimer: false,
            stopTimer: true,
            startTime: data.data.time.startTime,
            stopTime: new Date(),
            taskName: data.data.details.taskName,
            taskNotes: data.data.details.taskNotes,
          };
          let timeSpent = Number(data.data.details.timeSpent);
          console.log(timeSpent);
          dispatch(updateTasks(params, data.id, timeSpent, loaddata("userId")));
        }
      }
    }
  };

  const randomColor = () => {
    return Math.floor(Math.random() * 256);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        borderBottom: "1px solid #c4c4c4",
        height: 80,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 10,
            height: 10,
            margin: 5,
            borderRadius: 5,
            background: `rgb(${randomColor()},${randomColor()},${randomColor()})`,
          }}
        ></div>
        <div>{data.data.details.taskName}</div>
      </div>
      <div>{/* <SetInterval_TitleChange /> */}</div>
      <div style={{ display: "flex" }}>
        <Div className={styles.note} style={{ width: 200 }}>
          note
        </Div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 200,
            alignItems: "center",
          }}
        >
          <Div className={styles.timer}>
            <TimeInput
              currentValue={manualStrTime}
              onInputChange={(newVal) => setManualStrTime(newVal)}
            />
          </Div>
          <div style={{ fontSize: 20 }}>-</div>
          <Div className={styles.timer}>
            <TimeInput
              currentValue={manualStpTime}
              onInputChange={(newVal) => setManualStpTime(newVal)}
            />
          </Div>
        </div>

        <Div className={styles.duration}>
          {moment.utc(data.data.details.timeSpent * 1000).format("HH:mm:ss")}
        </Div>

        <StartStopButton
          onClick={handleStartAndStop}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 35,
            height: 35,
          }}
        >
          {!data.data.timer.startTimer ? (
            <div className={styles.start}></div>
          ) : (
            <div className={styles.stop}>
              <div></div>
            </div>
          )}
        </StartStopButton>
      </div>
    </div>
  );
}
