import React from 'react'
class FAQ extends React.Component {
  render() {

    var marginStyle = {
      padding: "20px",
      margin: "20px"
    };
    
    return (
      <div style={marginStyle}>
        <h1>Frequently Asked Questions</h1>
        <div style={{padding:20}}>
            <p>
            What is data quality?<br/>...
            </p>
            <p>
                How do you measure data quality?<br/>...
            </p>
            <p>
                What is the importance of data quality?<br/>...
            </p>
        </div>
      </div>
    );
  }
}
export default FAQ