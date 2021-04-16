import React from "react";
import styles from "./Home.module.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Landing} from "../Components/Landing";
export default function Home() {
  const Button = styled.button`
    outline: none;
    background: #f1b709;
    width: 300px;
    padding: 15px;
    border: none;
    color: #ffff;
    font-size: 15px;
    border-radius: 25px;
    font-weight: 700;
  `;
  return (
    <div className={styles.homeCont}>
      <NavLink to='/timesheets'>
        <h3>Time sheets</h3>

      </NavLink>
      <Landing/>

      <div className={styles.adv}>
        <div className={styles.line}></div>
        <h2 className={styles.text}>
          Trusted by 18,000 teams from all over the world (and still growing!)
        </h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.teamLogo}>
        <div className={styles.teams}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt=""
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
            alt=""
          />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/dsv.png" alt="" />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/usp.png" alt="" />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/saatchi.png" alt="" />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
            alt=""
          />
        </div>
        <div className={styles.teams}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt=""
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          width: "89%",
          borderBottom: "1px solid #b8b2b2",
          margin: "10px auto 0",
        }}
      ></div>
      <div className={styles.timeCampDet}>
        <div>
          <h2>TimeCamp - tracking time, reinvented.</h2>
          <p>
            Discover how a feature-rich free time tracker can end your project
            management headaches. Let your team perform at it's best without
            intrusive micromanagement.
          </p>
        </div>
      </div>
      <div className={styles.timeCampDet}>
        <div style={{ marginTop: 100 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: 45,
              fontWeight: 700,
              color: "#1b1b20",
            }}
          >
            TimeCamp is your go-to tool for
          </h1>
        </div>
      </div>
      <div className={styles.track}>
        <div className={styles.trackImg}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/goodbyeSpreadsheet.svg"
            alt=""
          />
        </div>
        <div style={{ width: 400 }}>
          <h2>
            Restoring clarity thanks to <span>time tracking software</span>
          </h2>
          <p>
            Are you struggling to keep track of your team's performance across
            different projects?{" "}
            <strong>Say "goodbye" to spreadsheets and guesswork.</strong> Let
            TimeCamp do the time tracking and focus on the work that matters.
          </p>
          <p>
            Why waste countless hours on additional data processing just to have
            a precise report? TimeCamp does it all automatically so you can
            maintain your focus on the important work.
            {/* import { styled } from 'styled-components';
import { styled } from 'styled-components';
import { styled } from 'styled-components'; */}
          </p>
          <div
            style={{
              width: 250,
              padding: 10,
              background: "#D9D9D9",
              cursor: "pointer",
              borderRadius: 20,
              fontWeight: "bold",
            }}
          >
            More about time tracking
          </div>
        </div>
      </div>
      <div className={styles.track}>
        <div style={{ width: 500 }}>
          <h2>
            Ending your manual <span>reporting headaches</span>
          </h2>
          <p>
            Start working smart by employing TimeCamp to become your own project
            manager. Access all of the essential information about your projects
            in one place. Easy!{" "}
            <strong>Say "goodbye" to spreadsheets and guesswork.</strong> Let
            TimeCamp do the time tracking and focus on the work that matters.
          </p>
          <p>
            Learn how a piece of time tracking software{" "}
            <strong>can help you optimize your team's workflow</strong> as well
            as keep your projects within their budgets.
          </p>
          <div
            style={{
              width: 300,
              padding: 10,
              background: "#D9D9D9",
              cursor: "pointer",
              borderRadius: 20,
              fontWeight: "bold",
            }}
          >
            More about timeCamp reports
          </div>
        </div>
        <div className={styles.trackImg}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/manualReporting.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.track}>
        <div className={styles.trackImg}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/appsAndWebsites.png"
            alt=""
          />
        </div>
        <div style={{ width: 400 }}>
          <h2>
            Staying on the same page with your team.{" "}
            <span>Wherever you are</span>
          </h2>
          <p>
            If you're in need to track the usage of certain apps by your team,
            try this! Stay on the same page with your team without any
            micromanagement.
          </p>
          <p>
            Time management for the modern age. Empower your team members by
            giving them a tracking tool to self-manage their work time. No need
            to look over their shoulders, your employees will now be able to
            track time directly from their computers and improve their
            productivity.
          </p>
          <div
            style={{
              width: 250,
              padding: 10,
              background: "#D9D9D9",
              cursor: "pointer",
              borderRadius: 20,
              fontWeight: "bold",
            }}
          >
            Checkout productivity tracking
          </div>
        </div>
      </div>
      <div className={styles.track}>
        <div style={{ width: 500 }}>
          <h2>
            Hassle-free timesheets and <span>attendance tracking</span>
          </h2>
          <p>
            Tired of attendance related paperwork? With TimeCamp you can approve
            your team's timesheets with just one click. Regardless if you're a
            small web design studio or a multinational corporation.
          </p>
          <p>
            No more punch in-and-out cards, attendance checklists, or your HR
            team spending hours on doing the payroll. Keeping track of employee
            time has never been easier!
          </p>
          <div
            style={{
              width: 300,
              padding: 10,
              background: "#D9D9D9",
              cursor: "pointer",
              borderRadius: 20,
              fontWeight: "bold",
            }}
          >
            Learn about timesheets
          </div>
        </div>
        <div className={styles.trackImg}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/submitApproval.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.demoCont}>
        <div>
          <h2>
            If you want a product tour, here you can book a call demo with our
            experts.
          </h2>
          <p>
            Learn all of the time tracking basics of TimeCamp and track time
            like a true pro.
          </p>
          <Button>Book a demo</Button>
        </div>
      </div>
      <div className={styles.integration}>
        <div className={styles.integration}>
          <p>Time tracking integrations</p>
          <h2>
            Easy and quick integration with more than 100 apps and work tools
          </h2>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className={styles.integrationApps}></div>
      </div>
    </div>
  );
}
