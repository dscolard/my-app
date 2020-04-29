import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Chart from "./Chart.js";
import { Dropdown } from "react-bootstrap";

var ALSFRSData = {
  labels: [
    "Number of patients evaluated using ALSFRS",
    "Number of patients evaluated using ALSFRS-R",
  ],
  datasets: [
    {
      data: [120, 140],
      backgroundColor: ["rgba(20,160,180,0.6)", "rgba(20,60,180,0.6)"],
      borderWidth: 1,
    },
  ],
};

var SNIPData = {
  labels: [
    "Number of patients evaluated using SNIP",
    "Number of patients evaluated using FVC ",
  ],
  datasets: [
    {
      data: [100, 1400],
      backgroundColor: ["rgba(20,160,180,0.6)", "rgba(20,60,180,0.6)"],
      borderWidth: 1,
    },
  ],
};

function getPatient(patient) {}

class Coherence extends Component {
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
          <h1>Data Quality: Coherence & Comparability</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Coherence & and Comparability:</h3>
            <p>
              Coherent and comparable data is consistent over time and across
              providers, it can be easily combined with other sources. A major
              component of this is standardisation, this ensures all data is
              recorded and stored in line with pre-determined standards and
              practices.
            </p>
          </div>

          <div className="box">
            <h3>How this applies to our dataset:</h3>
            <p>
              The data which feeds into the prediction model has been gathered
              from 14 specialised ALS centres across Europe. Due to this it is
              of high importance that all centres involved agree on how and what
              to record. This is vital to ensure that the data is comparable
              across all the centres and can be combined to yield a much larger
              and more useful dataset. This is extremely important as ALS is a
              rare disease and so gathering data can prove difficult.
              <br />
              <br />
              <h3>
                There are two notable Comparability concerns to overcome in this
                dataset:
              </h3>
              <ul>
                <li>
                  The ALS functional rating scale (ALSFRS) has been revised in
                  recent times and so we now use what is known as the
                  ALSFRS-Revised score. Older and newer data now have different
                  scoring methods, therefore we must draw a correlation between
                  the two in order to combine them in our dataset.
                </li>

                {/* Data before ALSFRSR and after */}
                <div
                  style={{
                    width: "80%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <Chart
                    chartType="pie"
                    text=""
                    chartData={ALSFRSData}
                    height={450}
                  />
                </div>
                <br />

                <li>
                  ALS interferes with an individuals ability to breath.
                  Currently there are two existing ways of measurng this
                  respiratory muscle decline. In the Irish datsdet we use a
                  measurement called SNIP (Maximal Sniff Nasal-inspiratory
                  pressure), whereas the rest of the cohorts use a measurement
                  called FVC (Forced Vital Capacity). Although they measure the
                  same thing, the two give different outputs numbers. There is a
                  correlation between the two so we can compare the two values
                  using an algorithm.
                </li>

                {/* FVC data vs SNIP data */}
                <div
                  style={{
                    width: "80%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  <Chart
                    chartType="pie"
                    text=""
                    chartData={SNIPData}
                    height={450}
                  />
                </div>
                <br />
              </ul>
            </p>

            <br />
          </div>
          <div className="box">
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
              <li>Reference 2</li>
              <li>Reference 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Coherence;
