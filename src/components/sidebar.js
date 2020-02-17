import React, { Component } from "react";

class Sidebar extends Component{
    render(){
        return(

            <div class='sidenav'>  
                <a href="#about">Completeness</a>
                <a href="#services">Consistency</a>
                <a href="#clients">Timeliness</a>
                <a href="#contact">Validity</a>  
                <a href="#contact">Accuracy</a>  
                <a href="#contact">Uniqueness</a>  
            </div>
        );
    }
}

export default Sidebar;