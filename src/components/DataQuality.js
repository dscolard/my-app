import React from "react";
import Chart from "./Chart";
import Sidebar from "./Sidebar";

class DataQuality extends React.Component {
  constructor() {
    super();
    this.state = {
      totalData: {},
      variableData: {},
      patientData: {},
      title: "Completeness",
      definition: {},
      description: ""
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData(metric) {
    //Pull data here for title and chartData
    if (metric) {
      this.state.title = metric;
    }

    if (metric == "Timeliness") {
      console.log("wtf");
      this.state.description =
        "I have assessed timeliness by analysing how much of the duration of " +
        "each patients illness has not been recorded in clinical visits. Using this sort " +
        "of analyses we can see how much data could be gathered for our model in a perfect scenario, " +
        "under ideal conditions for timely data collection.";
      this.state.totalData = {
        labels: ["Gathered data", "Not Gathered"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
            borderWidth: 1
          }
        ]
      };
      this.state.patientData = {
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
          "Samp_15"
        ],
        datasets: [
          {
            data: [
              75,
              63,
              98,
              57,
              64,
              38,
              87,
              100,
              67,
              100,
              72,
              50,
              90,
              34,
              100
            ],

            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(200,140,132,0.6)",
              "rgba(60,99,200,0.6)",
              "rgba(10,34,80,0.6)",
              "rgba(54, 72, 28, 0.6)",
              "rgba(67,46,20,0.6)",
              "rgba(83,47,85,0.6)",
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)"
            ],
            borderWidth: 1
          }
        ]
      };
      this.state.variableData = {
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
          "C9orf72 Repeat Expansion"
        ],
        datasets: [
          {
            data: [80, 70, 90, 76, 87.33, 70, 80, 98.3, 88.3, 98.3, 60, 30],

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
              "rgba(54,162,235,0.6)"
            ],
            borderWidth: 1
          }
        ]
      };
    } else if (metric == "Accuracy") {
      this.state.description =
        "Accuracy measures the volume of typos, transpositions, " +
        "and other inaccuracies of data entry and classification within the dataset. " +
        "Each variable and patient has an accuracy percentage such that if the accuracy is 90%, " +
        "then 1 in 10 entries has an accuracy error.";
      this.state.totalData = {
        labels: ["Good Data", "Errors"],
        datasets: [
          {
            data: [97, 3],
            backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
            borderWidth: 1
          }
        ]
      };
      this.state.patientData = {
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
          "Samp_15"
        ],
        datasets: [
          {
            data: [
              92,
              100,
              95,
              90,
              100,
              100,
              92,
              95,
              93,
              96,
              100,
              98,
              92,
              100,
              100
            ],

            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(200,140,132,0.6)",
              "rgba(60,99,200,0.6)",
              "rgba(10,34,80,0.6)",
              "rgba(54, 72, 28, 0.6)",
              "rgba(67,46,20,0.6)",
              "rgba(83,47,85,0.6)",
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)"
            ],
            borderWidth: 1
          }
        ]
      };
      this.state.variableData = {
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
          "C9orf72 Repeat Expansion"
        ],
        datasets: [
          {
            data: [
              100,
              93.3,
              100,
              100,
              93.3,
              100,
              93.3,
              100,
              100,
              100,
              100,
              100
            ],

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
              "rgba(54,162,235,0.6)"
            ],
            borderWidth: 1
          }
        ]
      };
    } else {
      this.state.description =
        "Completeness is an examination of the number of missing values in our dataset " +
        "for both patients and variables. Each one of these has been given a completeness " +
        "percentage which is measured as the number of filled data points divided by the " +
        "total number of possible data points.";

      this.setState({
        title: metric,

        totalData: {
          labels: ["Complete %", "Incomplete %"],
          datasets: [
            {
              data: [60, 40],

              backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
              borderWidth: 1
            }
          ]
        },
        variableData: {
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
            "C9orf72 Repeat Expansion"
          ],
          datasets: [
            {
              data: [
                100,
                100,
                100,
                100,
                83.33,
                100,
                100,
                58.3,
                58.3,
                58.3,
                100,
                100
              ],

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
                "rgba(54,162,235,0.6)"
              ],
              borderWidth: 1
            }
          ]
        },

        patientData: {
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
            "Samp_15"
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
                80
              ],

              backgroundColor: [
                "rgba(255,99,132,0.6)",
                "rgba(54,162,235,0.6)",
                "rgba(255,206,86,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(153,102,255,0.6)",
                "rgba(255,159,64,0.6)",
                "rgba(200,140,132,0.6)",
                "rgba(60,99,200,0.6)",
                "rgba(10,34,80,0.6)",
                "rgba(54, 72, 28, 0.6)",
                "rgba(67,46,20,0.6)",
                "rgba(83,47,85,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(54,162,235,0.6)",
                "rgba(255,206,86,0.6)"
              ],
              borderWidth: 1
            }
          ]
        }
      });
    }

    this.state.definition = (
      <div>
        <h2>{this.state.title}</h2>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000"
          }}
        />
        <p class="myfont">{this.state.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div class="sidenav">
          <a
            href="#completeness"
            onClick={() => {
              this.getChartData("Completeness");
            }}
          >
            Completeness
          </a>
          <a
            href="#timeliness"
            onClick={() => {
              this.getChartData("Timeliness");
              console.log(this.state.patientData);
              this.forceUpdate();
            }}
          >
            Timeliness
          </a>
          <a
            href="#accuracy"
            onClick={() => {
              this.getChartData("Accuracy");
            }}
          >
            Accuracy
          </a>

          {/* <a
            href="#consistency"
            onClick={() => {
              this.getChartData("Consistency");
            }}
          >
            Consistency
          </a>
          <a
            href="#validity"
            onClick={() => {
              this.getChartData("Validity");
            }}
          >
            Validity
          </a>
          <a
            href="#uniqueness"
            onClick={() => {
              this.getChartData("Uniqueness");
            }}
          >
            Uniqueness
          </a> */}
        </div>

        <div
          style={{
            position: "relative",
            marginLeft: "10%",
            width: "95%",
            height: "100%"
          }}
        >
          <div class="topLeft" style={{ width: "55%" }}>
            {this.state.definition}
          </div>

          <div class="topRight">
            <Chart
              chartType="pie"
              text="Total"
              chartData={this.state.totalData}
              height={"160%"}
            />
          </div>

          <div class="centreLeft">
            <Chart
              chartType="horizontalBar"
              text="Per patient data completeness %"
              chartData={this.state.patientData}
              height={"350%"}
            />
          </div>

          <div class="mainDisplay">
            <Chart
              chartType="line"
              text="Static Variables Completeness %"
              chartData={this.state.variableData}
              height={"350%"}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DataQuality;
