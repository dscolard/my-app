import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut, Polar, Bubble, Scatter, HorizontalBar} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData,
            height:props.height,
            width:props.width

        }
    }

    static defaultProps = {
        displayLegend: false,
        displayTitle: true,
        text: 'Completeness',
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
                            width={this.state.width}
                            height={this.state.height}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,                         
                                title:{
                                    display:this.props.displayTitle,
                                    text: this.props.text,
                                    fontSize:25,                              
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
                            width={this.state.width}
                            height={this.state.height}
                            options={{
                                responsive: true,  
                                maintainAspectRatio: false,                         
                                title:{
                                    display:this.props.displayTitle,
                                    text:this.props.text,
                                    fontSize:25,
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
                            width={this.state.width}
                            height={this.state.height}
                            options={{
                                responsive: true,  
                                maintainAspectRatio: false,
                                title:{
                                    display:this.props.displayTitle,
                                    text:this.props.text,
                                    fontSize:25,
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
        else if(this.props.chartType=="polar"){
            return(
                <div>
                    <div className='chart' >
                        <Polar
                            data={this.state.chartData}
                            width={this.state.width}
                            height={this.state.height}
                            options={{
                                responsive: true,  
                                maintainAspectRatio: false,
                                title:{
                                    display:this.props.displayTitle,
                                    text:this.props.text,
                                    fontSize:25,
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
        else if(this.props.chartType=="horizontalBar"){
            return(
                <div>
                    <div className='chart' >
                        <HorizontalBar
                            data={this.state.chartData}
                            width={this.state.width}
                            height={this.state.height}
                            options={{
                                responsive: true,  
                                maintainAspectRatio: false,
                                title:{
                                    display:this.props.displayTitle,
                                    text:this.props.text,
                                    fontSize:25,
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