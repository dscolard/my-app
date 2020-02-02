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
            What is Motor Neruone Disease?<br/>
            Motor neurones are specialised nerve cells that control important voluntary muscle activity 
            such as walking, talking and breathing. MND refers to any disease which inhibits these nerve cells and prevents them from operating 
            normally. The loss of motor neurone function leads to increasing loss of mobility in the limbs and difficulty with speech, 
            swallowing and breathing. Ultimately the prognosis is death, 70% of people with ALS (The most common form of MND) die within three 
            years after the first symptoms present themselves.
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