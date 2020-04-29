import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Chart from "./Chart.js";
import { Dropdown } from "react-bootstrap";

var patientData = {
  labels: [
    "Samp_1",
    "Samp_2",
    "Samp_3",
    "Samp_4",
    "Samp_5",
    "Samp_6",
    "Samp_7",
    "Samp_8",
    "Samp_9",
    "Samp_10",
    "Samp_11",
    "Samp_12",
    "Samp_13",
    "Samp_14",
    "Samp_15",
  ],
  datasets: [
    {
      data: [
        100,
        100,
        80,
        100,
        100,
        100,
        100,
        100,
        80,
        100,
        73.33,
        100,
        100,
        73.33,
        80,
      ],

      backgroundColor: [
        "rgba(200,20,235,0.2)",
        "rgba(255,206,86,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(153,102,255,0.6)",
        "rgba(255,159,64,0.6)",
        "rgba(200,140,132,0.6)",
        "rgba(60,99,200,0.6)",
        "rgba(255,99,132,0.6)",

        "rgba(10,34,80,0.6)",
        "rgba(54, 72, 28, 0.6)",
        "rgba(67,46,20,0.6)",
        "rgba(83,47,85,0.6)",
        "rgba(255,99,132,0.6)",
        "rgba(54,162,235,0.6)",
        "rgba(255,206,86,0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

class Relevance extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <a href="#completeness" onClick={() => {}}>
            Definition
          </a>
          <a href="#timeliness" onClick={() => {}}>
            Examples
          </a>
          <a href="#accuracy" onClick={() => {}}>
            References
          </a>
        </div>
        <div className="main">
          <h1>Data Quality: Relevance</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Relevance:</h3>
            <p>
              Relevance determines whether the data meets the current and
              potential future needs of the user. The data should pertain to the
              time period, location and population which comprise and affect
              what we are measuring.
            </p>
          </div>

          <div className="box">
            <h3>How this applies to our dataset:</h3>
            <p>
              The data here has been compiled from ALS centres across Europe. It
              focuses solely on individuals with ALS in developed European
              countries. Therefore the data is highly relevant and consistent in
              terms of both location and population.
              <br />
              <br />
              The time period from which data is obtained is also very relevant.
              In the case of this project we can imagine that modern equipment
              has helped to keep individuals alive/functioning for longer, and
              therefore we can expect that in more recent the patients would be
              living longer or having a further away composite survival
              endpoint. From this we could conclude that the older the data is
              the less relevant it becomes as it does not represent the current
              expected endpoint.
              <br />
              <br />
            </p>

            <div className="container">
              <div
                className="box"
                className="left"
                style={{ borderRadius: "25px" }}
              >
                Oldest patient data (months):
                <br />
                233
              </div>
              <div
                className="box"
                className="right"
                style={{ borderRadius: "25px" }}
              >
                Average age of patient data (months):
                <br />
                61
              </div>
            </div>

            <br />
            <br />

            <div
              style={{
                width: "70%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              {/* //Oldest data
              //Average age of data */}
              <Chart
                chartType="bar"
                text="Number of months since first recorded data for each patient"
                chartData={patientData}
                height={450}
              />
            </div>
            <br />
            <br />
          </div>
          <div className="box">
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
              <li>Reference 2 </li>
              <li>Reference 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Relevance;
