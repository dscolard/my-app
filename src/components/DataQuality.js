import React from 'react'
import Chart from './Chart'


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
      <Chart chartData={this.state.chartData}/>
    );
  }
}
export default Features