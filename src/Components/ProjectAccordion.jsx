import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TaskAddingComponent from "./TaskAddingComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: "100vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ProjectAccordion({
  children,
  subTask = [],
  marginL = 0,
  projectId,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: "1000px", margin: "auto" }}>
      <Accordion style={{ minWidth: "900px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{ paddingLeft: { marginL } }}
            className={classes.heading}
          >
            {children}
          </Typography>
        </AccordionSummary>
        {subTask.length > 0 &&
          subTask?.map((task) => {
            return !task.data.addedToTimeSheets ? (
              <ProjectAccordion
                key={task.taskId}
                style={{ minWidth: "900px" }}
                // style={{ display: "flex" }}
                subTask={subTask.filter((some) => {
                  if (some.parentId === task.taskId) {
                    some.data.addedToTimeSheets = true;
                  } else {
                    some.data.addedToTimeSheets = false;
                  }
                  return (
                    // some.parentId === task.taskId &&
                    some.data.addedToTimeSheets === true
                  );
                })}
                // marginL={"10px"}
              >
                <div
                  style={{ display: "grid", gridTemplateColumns: "100px auto" }}
                >
                  <div>{task.data.details.taskName}</div>
                  <div style={{ width: "auto", marginLeft: "90vh" }}>
                    <TaskAddingComponent
                      parentId={task.taskId}
                      userId={task.userId}
                      projectId={task.projectId}
                    >
                      Add Task
                    </TaskAddingComponent>
                  </div>
                </div>
              </ProjectAccordion>
            ) : null;
          })}
        {subTask.length === 0 && (
          <AccordionDetails>
            <Typography style={{ marginLeft: "255px" }}>
              <div style={{ marginRight: "150px" }}>
                Add Task To Get Details
              </div>
              <TaskAddingComponent
                parentId={subTask.taskId}
                userId={subTask.userId}
                projectId={projectId}
              >
                Add Task
              </TaskAddingComponent>
            </Typography>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
}
