import React, { Component } from "react";
import { db } from "../Config.js";
import { Button } from "react-bootstrap";

class Access extends Component {
  constructor() {
    super();
    this.state = {
      patientNames: [],
      patient_data: [],
      selectedPatient: "",
    };

    this.getPatientDetails();
  }

  getPatientNames(data) {
    this.getPatientDetails();

    for (var i = 0; i < data.length; i++) {
      this.state.patientNames.push(data[i]["Sample ID"]);
    }
    console.log(this.state.patientNames);
  }

  getPatientDetails() {
    db.ref("patients")
      .orderByChild("Sample ID")
      .once("value")
      .then((snapshot) => {
        let temp = [];
        snapshot.forEach((snap) => {
          temp.push(snap.val());
        });
        this.setState({ patient_data: temp });
      });
  }

  createData() {
    return this.state.patientNames.map((el) => ({ value: el["Samp ID"] }));
  }

  render() {
    const patientNames = this.state;

    let patientsList =
      patientNames.length > 0 &&
      patientNames.map((item, i) => {
        return (
          <option key={i} value={item["Sample ID"]}>
            {item["Sample ID"]}
          </option>
        );
      });

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
          <h1>Data Quality: Accessability & Clarity</h1>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <div className="box">
            <h3>Definition of Accessability & Clarity:</h3>
            <p>
              Data is easily obtainable and clearly presented in a way that can
              be understood.
            </p>
          </div>

          <div className="box">
            <h3>How this applies to our dataset:</h3>
            <p>
              Accessability of the data was part of the inclusion criteria for
              the variables in the prediction model. The clarity and
              interpretability of the data is now a focus for this project.
              Through the construction of this website and others like it we aim
              to improve this data quality metric in particular.
              <br />
              Accessability includes things such as:
            </p>
            <ul>
              <li>
                Providing supporting documents such as metadata in order to
                facilitate clarity of interpretation for data users.
              </li>
              <li>
                Making data viewable in a way which supports proper
                interpretation and meaningful comparisons.
              </li>
            </ul>
            <p>
              These are some of the areas this web application aims to help
              with, providing clear metadata statistics.
            </p>
            <Button
              onClick={() => {
                this.getPatientDetails();
                if (this.state.patientNames[0] == null) {
                  this.getPatientNames(this.state.patient_data);
                }
              }}
            >
              Get Patient Records
            </Button>
            <br />
            <br />
          </div>
          <div className="box">
            <h4>References:</h4>
            <ul>
              <li>Reference 1</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Access;
