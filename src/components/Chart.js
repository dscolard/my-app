import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut, HorizontalBar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayLegend: false,
    displayTitle: true,
    chartData: {},
    text: "Completeness",
    legendPosition: "right",
    chartType: "bar",
  };

  render() {
    if (this.props.chartType == "bar") {
      return (
        <div>
          <div className="chart">
            <Bar
              data={this.props.chartData}
              width={this.state.width}
              height={this.state.height}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: this.props.text,
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      );
    } else if (this.props.chartType == "line") {
      return (
        <div>
          <div className="chart">
            <Line
              data={this.props.chartData}
              width={this.state.width}
              height={this.state.height}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: this.props.text,
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      );
    } else if (this.props.chartType == "pie") {
      return (
        <div>
          <div className="chart">
            <Pie
              data={this.props.chartData}
              width={this.state.width}
              height={this.state.height}
              legend={{
                display: true,
                position: "left",
                fullWidth: true,
                reverse: false,
                labels: {
                  fontSize: 20,
                },
              }}
              options={{
                display: true,
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: this.props.text,
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>
        </div>
      );
    } else if (this.props.chartType == "doughnut") {
      return (
        <div>
          <div className="chart">
            <Doughnut
              data={this.props.chartData}
              width={this.state.width}
              height={this.state.height}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: this.props.text,
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
              }}
            />
          </div>
        </div>
      );
    } else if (this.props.chartType == "horizontalBar") {
      return (
        <div>
          <div className="chart">
            <HorizontalBar
              data={this.props.chartData}
              width={this.state.width}
              height={this.state.height}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {
                  display: this.props.displayTitle,
                  text: this.props.text,
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Chart;
