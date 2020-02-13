import React from 'react'
import Chart from './Chart'
import Sidebar from './Sidebar';


class Features extends React.Component {

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){

    //Pull API data here

    this.setState({
      chartData:{
        labels:['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
        datasets:[
            {
                label:'Completeness',
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
      <Sidebar/>
      <div style={{position:"relative", marginLeft:'10%',width:'95%'}}>

        <div class='topLeft'>
          <Chart chartType="pie" chartData={this.state.chartData}/>
        </div>

        <div class='topMiddle'>
          <Chart chartType="bar" chartData={this.state.chartData}/>
        </div>

        <div class='topRight'>
          <Chart chartType="pie" chartData={this.state.chartData}/>
        </div>

        <div class='centreLeft'>
          Side Component
        </div>

        <div class='mainDisplay'>
          <Chart chartType="line" chartData={this.state.chartData}/>
        </div>

        <div class='bottomBar'>
          Bottom Bar
        </div>
        
      </div>
      </div>
    );
  }
}
export default Features