import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Chart from "./Chart";
import Completeness from "./Completeness";

var chartData2 = {
  labels: ["Data Gathered", "No Data"],
  datasets: [
    {
      data: [85, 15],

      backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
      borderWidth: 1
    }
  ]
};

var chartData3 = {
  labels: ["Accurate Data", "Data Error"],
  datasets: [
    {
      data: [97, 3],

      backgroundColor: ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"],
      borderWidth: 1
    }
  ]
};

class Metrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compClicked: false,
      timeClicked: false,
      accuracyClicked: false,
      coherenceClicked: false,
      accessClicked: false,
      relevanceClicked: false
    };
  }

  handleClick(metric) {
    this.setState({
      compClicked: false,
      timeClicked: false,
      accuracyClicked: false,
      coherenceClicked: false,
      accessClicked: false,
      relevanceClicked: false
    });

    if (metric == "comp") {
      this.setState({
        compClicked: true
      });
    } else if (metric == "time") {
      this.setState({
        timeClicked: true
      });
    } else if (metric == "acc") {
      this.setState({
        accuracyClicked: true
      });
    } else if (metric == "coherence") {
      this.setState({
        coherenceClicked: true
      });
    } else if (metric == "access") {
      this.setState({
        accessClicked: true
      });
    } else if (metric == "relevance") {
      this.setState({
        relevanceClicked: true
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.compClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="metricContainer">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.compClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">Back &times;</span>
                </button>

                <Completeness />

                <Button
                  onClick={() => {
                    this.state.compClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginTop: "20px",
                    marginBottom: "30px"
                  }}
                >
                  Back to metrics
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        {this.state.timeClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="displayMetric">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.timeClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 style={{ textAlign: "center" }}>
                  Timeliness and Punctuality
                </h1>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000"
                  }}
                />
                <h4>Definition</h4>
                <p>
                  Timely data is collected within a reasonable agreed time
                  period after the activity that it measures. Punctuality refers
                  to whether data is delivered or reported on the dates
                  promised, advertised or announced.
                </p>
                <h4>How is this applied to our dataset ?</h4>
                <p>
                  Timely data is crutial for obtaining accurate predictions.
                  Ideally one would want to gather patient data for the entire
                  duration of their illness from the date of diagnosis to the
                  date of death. This would give us a full representation of the
                  patients deterioration from start to finish. One would also
                  want to gather data at regular intervals in order to
                  accurately map the deterioration over time.
                </p>
                <h4>How is this measured ?</h4>
                <p>
                  For each patient I have recorded the time interval between
                  theie first clinical visit to their last clinical visit and
                  compared this to the time interval from their date of
                  diagnosis diagnosis to their death. From this measurement we
                  can see how much of each patients story we are missing and
                  subsequently how much data we have not gathered which might be
                  vital in producing an effective prediction model.
                </p>
                <Chart
                  chartType="doughnut"
                  text={
                    "Average % of time for which data has not been gathered across the dataset"
                  }
                  chartData={chartData2}
                  height={"500px"}
                />
                <br />
                <b>
                  To see a detailed analysis of timeliness please refere to the
                  dashboard.
                </b>
                <br />
                <br />
                <Button
                  onClick={() => {
                    this.state.timeClicked = false;
                    this.forceUpdate();
                  }}
                  style={{ float: "left" }}
                >
                  Close
                </Button>
                <Completeness />
              </div>
            </div>
          </CSSTransition>
        )}

        {this.state.accuracyClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="displayMetric">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.accuracyClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 style={{ textAlign: "center" }}>
                  Accuracy and Reliability
                </h1>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000"
                  }}
                />
                <h4>Definition</h4>
                <p>
                  The accuracy of data refers to how closely the data correctly
                  describes what it was designed to measure. Reliability refers
                  to whether that data consistently measures, over time, the
                  reality that it was designed to represent. Accurate data
                  should be free of typos, transpositions, and other
                  inaccuracies of data entry and classification.
                </p>
                <h4>How does this apply to our dataset ?</h4>
                <p>
                  In our case all the gathered data has been carefully selected
                  in order to measure the composite survival endpoint for
                  individual patients. Therefore the relative accuracy of our
                  data would be directly related to the accuracy of the
                  predictions themselves. <br />
                  The accuracy of our data is also reliant on accurate recording
                  of the patients data. Any typos, transpositions, or other
                  inaccuracies of data entry and classification will reduce the
                  quality og our data.
                </p>
                <h4>How is this measured ?</h4>
                <p>
                  The number of data entry errors per 100 data entries has been
                  calculated throughhout the dataset. The accuracy of each
                  variable can be seen on the dashboard page.
                </p>
                <br />
                <Chart
                  chartType="pie"
                  text={"Data accuracy across entire dataset"}
                  chartData={chartData3}
                  height={"500px"}
                />
                <br />
                <br />
                <Button
                  onClick={() => {
                    this.state.accuracyClicked = false;
                    this.forceUpdate();
                  }}
                  style={{ float: "left" }}
                >
                  Close
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        {this.state.coherenceClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="displayMetric">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.coherenceClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 style={{ textAlign: "center" }}>
                  Coherence & Comparability
                </h1>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000"
                  }}
                />
                <h4>Definition</h4>
                <p>
                  Coherent and comparable data is consistentover time and across
                  providers and can beeasily combined with other sources. A
                  major component of this is standardisation, ie. all data is
                  recorded and stored according to set standards and practices.
                  This makes it much easier for the data to be compared globally
                  across the field of research. It also makes it much easier for
                  a computer to analyse the data in large quantities.
                </p>
                <h4>How is this applied to our dataset ?</h4>
                <p></p>

                <p></p>
                <br />
                <Button
                  onClick={() => {
                    this.state.coherenceClicked = false;
                    this.forceUpdate();
                  }}
                  style={{ float: "left" }}
                >
                  Close
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        {this.state.accessClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="displayMetric">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.accessClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 style={{ textAlign: "center" }}>Accessibility & Clarity</h1>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000"
                  }}
                />
                <h4>Definition</h4>
                <p>
                  Accessability and clarity is a measure of how easily
                  attainable the data is and how easily it can be understood.
                  Myself and some colleagues are currently working on improving
                  this aspect of the data quality by making it available to
                  researchers via a web application.
                </p>
                <h4>How is this applied to our dataset ?</h4>
                <p></p>
                <h4>How is this measured ?</h4>

                <p></p>
                <br />
                <Button
                  onClick={() => {
                    this.state.accessClicked = false;
                    this.forceUpdate();
                  }}
                  style={{ float: "left" }}
                >
                  Close
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        {this.state.relevanceClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div width="100%" height="100%">
              <div className="displayMetric">
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.relevanceClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 style={{ textAlign: "center" }}>Relevance</h1>
                <hr
                  style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000"
                  }}
                />
                <h4>Definition</h4>
                <p>
                  Relevant data is data which meets the current and potential
                  future needs of the user. It would be fair to say that the
                  current data being used is extremely relevant as each variable
                  was carefully selected using backward elimination. The future
                  relevance of this data is currently unknown however as we may
                  uncover other factors which are far greater predictors of
                  composite survival outcome than our current set of variables.
                </p>
                <h4>How is this applied to our dataset ?</h4>
                <p></p>
                <h4>How is this measured ?</h4>

                <p></p>
                <br />
                <Button
                  onClick={() => {
                    this.state.relevanceClicked = false;
                    this.forceUpdate();
                  }}
                  style={{ float: "left" }}
                >
                  Close
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        <div style={{ zIndex: -1, position: "absolute", width: "100%" }}>
          <div
            style={{
              margin: "40px",
              backgroundColor: "#fff",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            Select a data quality metric below to discover how it was measured
            within our dataset....
          </div>

          <div>
            <Button
              onClick={() => {
                this.handleClick("comp");
                this.forceUpdate();
              }}
              variant="outline-info"
              className="topLeft"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Completeness
            </Button>

            <Button
              onClick={() => {
                this.handleClick("time");
                this.forceUpdate();
              }}
              variant="outline-primary"
              className="topMiddle"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Timeliness & Punctuality
            </Button>

            <Button
              onClick={() => {
                this.handleClick("acc");
                this.forceUpdate();
              }}
              variant="outline-success"
              className="topRight"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Accuracy & Reliability
            </Button>
          </div>

          <div>
            <Button
              onClick={() => {
                this.handleClick("coherence");
                this.forceUpdate();
              }}
              variant="outline-warning"
              className="topLeft"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Coherence & Comparability
            </Button>

            <Button
              onClick={() => {
                this.handleClick("access");
                this.forceUpdate();
              }}
              variant="outline-danger"
              className="topMiddle"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Accessibility & Clarity
            </Button>

            <Button
              onClick={() => {
                this.handleClick("relevance");
                this.forceUpdate();
              }}
              variant="outline-dark"
              className="topRight"
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Relevance
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Metrics;
