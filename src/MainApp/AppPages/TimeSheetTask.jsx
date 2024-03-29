import React from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { getTasks, updateTasks, setStart, setStop } from "../Redux/action";
import * as moment from "moment";
import styles from "./TimeSheets.module.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TimeInputPolyfill from "react-time-input-polyfill";
import { loaddata } from "../../taskUtil/taskLocalStorage";
import { TimeInput } from "./TimeInput";
import {
  getTimeInString,
  getTimeInStringWithoutHr,
} from "../../Components/getTimeInString";
import LoadingSign from "../../Components/LoadingSign";

export function TimeSheetTask({ data }) {
  const dayjs = require("dayjs");
  const {isLoading,isError} = useSelector(state=>state, shallowEqual)
  const [state, setState] = React.useState(false);
  const [startCheck, setStartCheck] = React.useState(false);

  const [manualStrTime, setManualStrTime] = React.useState(
    `${dayjs().format("HH:mm")}`
  );
  const [manualStpTime, setManualStpTime] = React.useState(
    `${dayjs().format("HH:mm")}`
  );
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
  React.useEffect(()=>{
      let manlStrTime = manualStrTime.trim().split(":").map(Number)
      let manlStpTime = manualStpTime.trim().split(":").map(Number)
      let strSeconds = ((manlStrTime[0]*60) + manlStrTime[1]) * 60
      let stpSeconds = ((manlStpTime[0]*60) + manlStpTime[1]) * 60
      if(strSeconds<stpSeconds){
        let params = {
          
          startTimer: data.data.timer.startTimer,
          stopTimer: data.data.timer.startTimer,
          startTime: data.data.time.startTime,
          stopTime: data.data.time.stopTime,
          taskName: data.data.details.taskName,
          taskNotes: data.data.details.taskNotes,
          
        }
        let timeSpent = [...data.data.details.timeSpent,(stpSeconds-strSeconds)]
        dispatch(
          updateTasks(
            params,
            data.id,
            timeSpent,
            localStorage.getItem("userId")
          )
        );
      } else if(strSeconds>stpSeconds) {
        alert("Start time should be less than stop time!")
      }
  },[manualStrTime, manualStpTime])
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const timer = React.useRef();
  // const startTimerInterval = (prev) => {
  //   if (isRunning) {
  //     return null;
  //   }
  //   timer.current = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //     setIsRunning(true);
  //   }, 1000);
  //   document.title = getTimeInStringWithoutHr(time);
  // };
  // const stopTimerInterval = (value) => {
  //   document.title = "Time Camp";
  //   console.log("false");
  //   clearInterval(timer.current);
  //   setIsRunning(false);
  //   setTime(value);
  // };
  // document.title = getTimeInStringWithoutHr(time);
  // if (time === 0 || !isRunning) {
  //   document.title = "Time Camp";
  // }
  // React.useEffect(() => {
  //   return () => stopTimerInterval();
  // }, []);

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
          stopTime: data.data.time.stopTime,
          taskName: data.data.details.taskName,
          taskNotes: data.data.details.taskNotes,
        };

        let timeSpent = data.data.details.timeSpent;
        // startTimerInterval();
        console.log(params.stopTime);
        dispatch(
          updateTasks(
            params,
            data.id,
            timeSpent,
            localStorage.getItem("userId")
          )
        );
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
          let timeSpent = [
            ...data.data.details.timeSpent,
            Math.floor(
              (new Date(params.stopTime) - new Date(params.startTime)) / 1000
            ),
          ];
          // stopTimerInterval(timeSpent[timeSpent.length - 1]);
          console.log(params.stopTime);
          dispatch(
            updateTasks(
              params,
              data.id,
              timeSpent,
              localStorage.getItem("userId")
            )
          );
        } else {
          const params = {
            startTimer: false,
            stopTimer: true,
            startTime: data.data.time.startTime,
            stopTime: new Date(),
            taskName: data.data.details.taskName,
            taskNotes: data.data.details.taskNotes,
          };
          let timeSpent = data.data.details.timeSpent;
          console.log(params.stopTime);
          dispatch(
            updateTasks(
              params,
              data.id,
              timeSpent,
              localStorage.getItem("userId")
            )
          );
        }
      }
    }
  };

  const randomColor = () => {
    return Math.floor(Math.random() * 256);
  };
  return isLoading ? <LoadingSign /> : (
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
          {/* moment.utc(data.data.details.timeSpent*1000).format('HH:mm:ss') */}
          {moment
            .utc(
              (data.data.details.timeSpent.length != 0
                ? data.data.details.timeSpent?.reduce((ac, ele) => {
                    return ac + ele;
                  })
                : 0) * 1000
            )
            .format("HH:mm:ss")}
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
