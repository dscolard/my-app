import React, { Component } from "react";
import Chart from "./Chart.js";

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
      data: [1, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],

      backgroundColor: [
        "rgba(54,162,235,0.6)",
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
      data: [0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 1],

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

class Accuracy extends Component {
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
          <h1>Data Quality: Accuracy & Reliability</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Accuracy & Reliability:</h3>
            <p>
              Accuracy measures the volume of typos, transpositions and other
              data inaccuracies of data entry and classification within the
              dataset. The reliabilty of data is measured as the ability of the
              data to reproduce the same results when research is repeated under
              the same conditions.
            </p>
          </div>

          <div className="box">
            <h3>How this applies to our dataset:</h3>
            <br />

            <p>
              We can test the relibaility of this data using the prediction
              model itself. By running the model using this data and the same
              input multiple times, we can observe whether our output remains
              constant. If it does remain constant, or within a margin of error,
              we can say that our dataset is reliable under testing.
            </p>

            <p>
              It is important for the prediciton model that we minimise the
              total number of inaccuracies as much as possible. Currently all
              the data is being entered by hand and so some errors are
              inevitable. With the aid of this page it will be possible to track
              and eliminate each data entry error and misclassification in the
              dataset.
            </p>
            <br />

            <div
              className="box"
              style={{
                textAlign: "center",
                width: "50%",
                marginLeft: "25%",
                borderRadius: "20px",
                backgroundColor: "rgba(38, 157, 255, 0.342)",
              }}
            >
              Total number of data inaccuracies within the dataset:
              <br />
              <b>5</b>
            </div>
            <br />
            <br />

            <ul>
              <li>
                <p>
                  The number of errors per patient is important as patients with
                  many errors should be ommitted in the training of the
                  prediction model in order to avoid errors in development.
                </p>

                <Chart
                  chartType="bar"
                  text="Inaccuracies per patient"
                  chartData={patientData}
                  height={450}
                />
                <br />
                <br />
              </li>
              <li>
                <p>
                  The inaccuracies per variable is important as it can help
                  researchers identify which areas of the data have the highest
                  rate of inaccuracy. This can be highlighted to the people
                  recording the data and hopefully eliminate any future
                  inaccuracies of their kind.
                </p>
                <Chart
                  chartType="bar"
                  text="Inaccuracies per variable"
                  chartData={variableData}
                  height={450}
                />
                {/* Total data innacuracies - Bar chart
            inaccuracies per patient - 
            inaccuracies per variable -  */}
                <br />
              </li>
            </ul>

            <div
              style={{
                width: "40%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            ></div>
            <br />
          </div>
          <div className="box">
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
              <li>Reference 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Accuracy;
