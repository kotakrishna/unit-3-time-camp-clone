import React from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { getTasks } from "../Redux/action";
import { TimeSheetTask } from "./TimeSheetTask";
import styles from "./TimeSheets.module.css";
import styled from "styled-components";
import moment from "moment";
import { loaddata } from "../../taskUtil/taskLocalStorage";
import { TimeInput } from "./TimeInput";
import LoadingSign from "../../Components/LoadingSign";

export function TimeSheets() {
  const dayjs = require("dayjs");
  const tasks = useSelector((state) => state.appRed.tasks);
  const [calendar, setCalendar] = React.useState(false);
  const [calVal, setCalVal] = React.useState(new Date());
  const [taskPro, setTaskPro] = React.useState(false);
  const [searchVal, setSearchVal] = React.useState("");
  const [manualStrTime, setManualStrTime] = React.useState(
    `${dayjs().format("HH:mm")}`
  );
  const [manualStpTime, setManualStpTime] = React.useState(
    `${dayjs().format("HH:mm")}`
  );
  const dispatch = useDispatch();

  // const handleTasks = () => {
  //     dispatch(getTasks())
  // }
  const Div = styled.div`
    margin: 0 5px;
    &:hover {
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }
  `;
  const Button = styled.div`
    width: 150px;
    padding: 10px 5px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    background: #3ea04a;
    color: white;
    margin: 0 5px;

    &:hover {
      background: #3eb44c;
    }
  `;
  const CalCont = styled.div`
    ${calendar &&
    `height: 100%;
        border:1px solid #0dd43b;
        color: #09da3a;`}
  `;
  const filterCondition = (item) => {
    let taskDate = new Date(item.data.time.startTime).toDateString();
    let calValDate = new Date(`${calVal}`).toDateString();

    return `${taskDate}` === `${calValDate}`;
    // return true;
  };
  const isLoading = useSelector((state) => state.appRed.isLoading);

  React.useEffect(() => {
    dispatch(getTasks(localStorage.getItem("userId")));
  }, []);
  return (
    <div>
      <div className={styles.timeSheets}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.calendar} style={{ position: "relative" }}>
            <div className={styles.prev}>{"<"}</div>
            <CalCont>
              <div
                onClick={() => setCalendar(!calendar)}
                className={styles.calLogo}
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"
                  alt=""
                />
                <div>^</div>
              </div>
            </CalCont>

            {calendar && (
              <div className={styles.calendarPopup}>
                <div>
                  <Calendar
                    onChange={(value) => setCalVal(value)}
                    value={calVal}
                  />
                </div>
              </div>
            )}
            <div className={styles.next}>{">"}</div>
          </div>
          <div>
            <div className={styles.date}>{calVal.toDateString()}</div>
          </div>
        </div>

        <div className={styles.sortAndEdit}>
          <div className={styles.dayWeek}>
            <div>Day</div>
            <div
              style={{
                width: 1,
                height: "100%",
                borderRight: "1px solid rgb(202, 200, 200)",
              }}
            ></div>
            <div>Week</div>
          </div>
          <div className={styles.refresh}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/1200px-Refresh_icon.svg.png"
              alt=""
            />
          </div>
          <div className={styles.logo}>
            <div className={styles.calLogo}>
              <img
                src="https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png"
                alt=""
              />
              <div>^</div>
            </div>
          </div>

          <div className={styles.edit}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/512px-Edit_font_awesome.svg.png"
              alt=""
            />
            <div>Bulk edit</div>
          </div>
          <div className={styles.logo}>
            <div className={styles.calLogo}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
                alt=""
              />
              <div>^</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.taskCont} style={{}}>
        <Div className={styles.selectInp} onClick={() => setTaskPro(!taskPro)}>
          Select task and project
        </Div>
        {taskPro && (
          <div className={styles.searchModal}>
            <div className={styles.inpPart}>
              <div className={styles.inputF}>
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                />
                <img
                  src="https://s3.amazonaws.com/freestock-prod/450/freestock_567790828.jpg"
                  alt=""
                />
              </div>
              <div className={styles.addT}>+</div>
            </div>
            <div className={styles.recUsed}>
              <div>RECENTLY USED</div>
            </div>
            <div className={styles.proTask}>
              <div>PROJECT AND TASKS</div>
            </div>
          </div>
        )}
        <div className={styles.timerCont}>
          <Div className={styles.note}>note</Div>
          <div className={styles.middle}></div>
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

          <Div className={styles.duration}>0h 00m</Div>

          <div style={{ width: "100px" }}>start timer</div>

          <Button>ADD TIME ENTRY</Button>
        </div>
      </div>

      <div className={styles.tasksCont}>
        {tasks.filter(filterCondition).map((item) => {
          // console.log("Ajay")
          console.log(new Date(`${item.data.time.stopTime}`).toDateString());
          return <TimeSheetTask data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
