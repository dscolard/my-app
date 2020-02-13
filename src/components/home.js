import React from 'react'

var marginStyle = {
    padding: "20px",
  };

class Home extends React.Component {

  render() {
    return (
    <div> 
        <div className="container" style={marginStyle}>
          <div class="alert alert-primary" role="alert" style={marginStyle}>
            Your Data Quality Analysis is coming soon !
          </div>
          <h2>
            Data quality is a measure of the condition of data based on 
            factors such as accuracy, completeness, consistency, 
            reliability and whether it's up to date.
          </h2>
        </div>
      </div>
      );
  }
}
export default Home