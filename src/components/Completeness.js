import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Chart from "./Chart.js";

var chartData = {
  labels: ["Complete %", "Incomplete %"],
  datasets: [
    {
      data: [70, 30],

      backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
      borderWidth: 1,
    },
  ],
};

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

var SNIPGraph = {
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
      data: [5, 5, 3, 4, 0, 2, 4, 4, 5, 2, 1, 1],

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

var ALSFRSGraph = {
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
      data: [2, 4, 3, 6, 2, 1, 1, 2, 5, 4, 4, 4, 4, 7, 9],

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

var variableData = {
  labels: [
    "Sample ID",
    "DOB",
    "Date of Onset",
    "Site of onset",
    "El Escorial",
    "Date of Diagnosis",
    "Onset To Diagnosis(months)",
    "Onset To Death(months)",
    "Diagnosis to Death(months)",
    "Date of Death",
    "Does the patient have dementia?",
    "C9orf72 Repeat Expansion",
  ],
  datasets: [
    {
      data: [100, 100, 100, 100, 83.33, 100, 100, 58.3, 58.3, 58.3, 100, 100],

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

class Completeness extends Component {
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
          <h1>Data Quality: Completeness</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Completeness:</h3>
            <p>
              Completeness is defined as the expected comprehensiveness of a
              dataset. Data can be complete even if optional data is missing. As
              long as the data meets the expectations then the data is
              considered complete.
            </p>
          </div>
          <div className="box" style={{ float: "left" }}>
            <h3>How this applies to our dataset:</h3>
            <p>
              In the case of our dataset, each variable has been carefully
              selected through the process of backwards elimination and so in
              our case the expected comprehensiveness includes all data points,
              therefore any missing values will bring down the completeness
              rating of our dataset.
            </p>
            <ul>
              <li>
                <p>
                  The completeness for our
                  <b> static variables</b> can simply be calculated as a
                  percentage: <br />
                  (Missing data entries / Total expected data entries)*100
                </p>
                <br />

                <div
                  style={{
                    width: "60%",
                    marginLeft: "20%",
                  }}
                >
                  <Chart
                    chartType="bar"
                    text="Static Variables Completeness %"
                    chartData={variableData}
                    height={550}
                  />
                </div>
              </li>
              <br />
              <li>
                <p>
                  The dataset also contains <b>non-static variables</b> such as
                  the SNIP and ALSFRS measurements. These are recorded at
                  non-uniform intervals when a patient attends a clinical visit.
                  They help to map the patients deterioration over time. There
                  is no set number of clinical visits which a patient is obliged
                  to complete, therefore the completeness is relative in this
                  case. For example, we can assume the patient with the highest
                  number of clinical visits obtains 100% completeness, and then
                  compare all other patients to this as a gold standard.
                </p>

                <br />

                <div
                  style={{
                    width: "37%",
                    marginLeft: "10%",
                    marginRight: "6%",
                    float: "left",
                  }}
                >
                  <Chart
                    chartType="horizontalBar"
                    text="Number of SNIP entries per patient"
                    chartData={SNIPGraph}
                    height={350}
                  />
                </div>
                <div
                  style={{
                    width: "37%",
                    float: "right",
                    marginRight: "10%",
                  }}
                >
                  <Chart
                    chartType="horizontalBar"
                    text="Number of ALSFRS entries per patient"
                    chartData={ALSFRSGraph}
                    height={350}
                  />
                </div>
              </li>
              <li style={{ float: "left", paddingTop: "50px" }}>
                <p>
                  Tracking the completeness for each individual patient is also
                  important. A patients completeness percentage is simply
                  calculated as: <br />
                  (number of missing datapoints/number of total expected
                  datapoints)*100. <br />
                  For example, patients wih low completeness percentage may need
                  to be omitted from training the prediction model as they are
                  biased towards certain variables.
                  <br />
                </p>

                <div
                  style={{
                    width: "90%",
                    marginLeft: "5%",
                    marginBottom: "40px",
                    float: "left",
                  }}
                >
                  <Chart
                    chartType="line"
                    text="Completeness % per patient"
                    chartData={patientData}
                    height={450}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="box" style={{ float: "left" }}>
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
              <li>Reference 2</li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Completeness;
