import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Chart from "./Chart";
import Completeness from "./Completeness";
import Relevance from "./Relevance";
import Accuracy from "./Accuracy";
import Coherence from "./Coherence";
import Accessability from "./Accessability";
import Time from "./Time";

class Metrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compClicked: false,
      timeClicked: false,
      accuracyClicked: false,
      coherenceClicked: false,
      accessClicked: false,
      relevanceClicked: false,
    };
  }

  handleClick(metric) {
    this.setState({
      compClicked: false,
      timeClicked: false,
      accuracyClicked: false,
      coherenceClicked: false,
      accessClicked: false,
      relevanceClicked: false,
    });

    if (metric == "comp") {
      this.setState({
        compClicked: true,
      });
    } else if (metric == "time") {
      this.setState({
        timeClicked: true,
      });
    } else if (metric == "acc") {
      this.setState({
        accuracyClicked: true,
      });
    } else if (metric == "coherence") {
      this.setState({
        coherenceClicked: true,
      });
    } else if (metric == "access") {
      this.setState({
        accessClicked: true,
      });
    } else if (metric == "relevance") {
      this.setState({
        relevanceClicked: true,
      });
    }
  }

  render() {
    return (
      <div style={{}}>
        {this.state.compClicked && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
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
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
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
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.timeClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>

                <Time />

                <Button
                  onClick={() => {
                    this.state.timeClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  Back to metrics
                </Button>
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
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.accuracyClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <Accuracy />
                <Button
                  onClick={() => {
                    this.state.accuracyClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  Back to metrics
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
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.coherenceClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <Coherence />
                <Button
                  onClick={() => {
                    this.state.coherenceClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  Back to metrics
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
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.accessClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <Accessability />

                <Button
                  onClick={() => {
                    this.state.accessClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  Back to metrics
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
              <div className="metricContainer">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => {
                    this.state.relevanceClicked = false;
                    this.forceUpdate();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>

                <Relevance />

                <Button
                  onClick={() => {
                    this.state.relevanceClicked = false;
                    this.forceUpdate();
                  }}
                  style={{
                    float: "left",
                    marginLeft: "170px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  Back to metrics
                </Button>
              </div>
            </div>
          </CSSTransition>
        )}

        <div
          style={{
            zIndex: -1,
            position: "absolute",
            width: "100%",
          }}
        >
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            HIQA Defined <br />
            Dimensions of Data Quality
          </h1>

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
                textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
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
