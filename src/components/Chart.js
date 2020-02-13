import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayLegend: false,
        displayTitle: true,
        legendPosition: "right",
        chartType: "bar"
    }

    render(){
        if(this.props.chartType=="bar"){
            return(
                <div>
                    <div className='chart' >
                        <Bar
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:this.props.displayTitle,
                                    text:'Completeness',
                                    fontSize:25,
                                    maintainAspectRatio: false
                                },
                                legend:{
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        />
                    </div>
                </div>

            );
        }
        else if(this.props.chartType=="line"){
            return(
                <div>
                    <div className='chart' >
                        <Line
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:this.props.displayTitle,
                                    text:'Completeness',
                                    fontSize:25,
                                    maintainAspectRatio: true
                                },
                                legend:{
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        />
                    </div>
                </div>
            );
        }
        else if(this.props.chartType=="pie"){
            return(
                <div>
                    <div className='chart' >
                        <Pie
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:this.props.displayTitle,
                                    text:'Completeness',
                                    fontSize:25,
                                    maintainAspectRatio: false
                                },
                                legend:{
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default Chart;