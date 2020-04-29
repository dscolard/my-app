import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Chart from "./Chart.js";

var chartData2 = {
  labels: ["Data Gathered", "No Data"],
  datasets: [
    {
      data: [85, 15],

      backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
      borderWidth: 1,
    },
  ],
};

var chartData3 = {
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
      data: [50, 50, 30, 40, 10, 20, 40, 40, 50, 20, 10, 10, 80, 90, 75],

      backgroundColor: [
        "rgba(100,200,100,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(153,102,255,0.6)",
        "rgba(255,206,86,0.6)",
        "rgba(54,162,235,0.6)",
        "rgba(255,99,132,0.6)",
        "rgba(255,206,86,0.6)",
        "rgba(200,140,132,0.6)",
        "rgba(60,99,200,0.6)",
        "rgba(10,34,80,0.6)",
        "rgba(54, 72, 28, 0.6)",
        "rgba(67,46,20,0.6)",
        "rgba(83,47,85,0.6)",
        "rgba(255,99,132,0.6)",
        "rgba(54,162,235,0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

class Time extends Component {
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
          <h1>Data Quality: Timeliness & Punctuality</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Timeliness & Punctuality:</h3>
            <p>
              Timely data is collected within a reasonable agreed time period
              after the activity that it measures. Punctuality refers to whether
              data is delivered or reported on the dates promised, advertised or
              announced.
            </p>
          </div>
          <div className="box">
            <h3>How this applies to our dataset:</h3>
            <p>
              Timely data is crutial for obtaining accurate predictions. Ideally
              one would want to gather patient data for the entire duration of
              their illness from the date of diagnosis to the date of death.
              This would give us a full representation of the patients
              deterioration from start to finish. One would also want to gather
              data at regular intervals in order to accurately map the
              deterioration over time.
            </p>

            <br />
            <h4>Measuring Timeliness:</h4>
            <p>
              For each patient I have recorded the time interval between their
              first clinical visit to their last clinical visit, then I compared
              this to the time interval from their date of diagnosis diagnosis
              to their death. From this measurement we can see how much of each
              patients story we are missing and subsequently how much data we
              have not gathered which might be vital in producing an effective
              prediction model.
            </p>
            <div
              style={{
                width: "60%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <Chart
                chartType="pie"
                text={
                  "Average percentage of time for which data been gathered across the dataset"
                }
                chartData={chartData2}
                height={400}
              />
            </div>
            <br />
            <br />
            <div style={{ marginLeft: "10%", width: "80%" }}>
              <Chart
                chartType="bar"
                text={
                  "Percentage of time for which data has been gathered per patient"
                }
                chartData={chartData3}
                height={400}
              />
            </div>
          </div>

          <div className="box">
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
              <li>Reference 2</li>
              <li>Reference 3</li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Time;
