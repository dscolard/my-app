import React from 'react'
import Chart from './Chart'
import Sidebar from './Sidebar';


class DataQuality extends React.Component {

  constructor(){
    super();
    this.state = {
      chartData:{},
      title:''
    }
  }

  componentWillMount(){
    this.getChartData();
  }


  getChartData(metric){

    //Pull API data here for title and chartData

    this.setState({

      title: metric,

      chartData:{
        labels:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
        datasets:[
            {
                data:[
                      78,
                      98,
                      94,
                      78,
                      87,
                      72.4,
                      83.4,
                      100
                ],
                  
                backgroundColor:[
                      'rgba(255,99,132,0.6)',
                      'rgba(54,162,235,0.6)',
                      'rgba(255,206,86,0.6)',
                      'rgba(75,192,192,0.6)',
                      'rgba(153,102,255,0.6)',
                      'rgba(255,159,64,0.6)',
                      'rgba(200,140,132,0.6)',
                      'rgba(60,99,200,0.6)'
                ],
                borderWidth: 1
            }
        ]
      }
    });
  }


  render() {


    return(
      <div>

        <div class='sidenav'>  
          <a href='#completeness' onClick={() => {this.getChartData("Completeness")}}>
            Completeness
          </a>  
          <a href='#timeliness' onClick={() => {this.getChartData("Timeliness")}}>
            Timeliness
          </a>        
          <a href='#consistency' onClick={() => {this.getChartData("Consistency")}}>
            Consistency
          </a>          
          <a href='#validity' onClick={() => {this.getChartData("Validity")}}>
            Validity
          </a>          
          <a href='#accuracy' onClick={() => {this.getChartData("Accuracy")}}>
            Accuracy
          </a>
          <a href='#uniqueness' onClick={() => {this.getChartData("Uniqueness")}}>
            Uniqueness
          </a>
        </div>

        

        <div style={{position:"relative", marginLeft:'10%',width:'95%',height:'100%'}}>

          <div class='topLeft'>
            <Chart chartType="pie" text={this.state.title} chartData={this.state.chartData} height={'180%'}/>
          </div>

          <div class='topMiddle'>
            <Chart chartType="horizontalBar" text={this.state.title} chartData={this.state.chartData} height={'180%'}/>
          </div>

          <div class='topRight'>
            <Chart chartType="polar" text={this.state.title} chartData={this.state.chartData} height={'180%'}/>
          </div>

          <div class='centreLeft'>
            <Chart chartType="bar" text={this.state.title} chartData={this.state.chartData} height={'350%'}/>
          </div>

          <div class='mainDisplay'>
            <Chart chartType="line" text={this.state.title} chartData={this.state.chartData} height={'350%'}/>
          </div>

          <div class='infoBar'>
            Bottom Bar
          </div>
          
        </div>
      </div>
    );
  }
}
export default DataQuality