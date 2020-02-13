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
            <b>What is Motor Neruone Disease?</b><br/>
            Motor neurones are specialised nerve cells that control important voluntary muscle activity 
            such as walking, talking and breathing. MND refers to any disease which inhibits these nerve cells and prevents them from operating 
            normally. The loss of motor neurone function leads to increasing loss of mobility in the limbs and difficulty with speech, 
            swallowing and breathing. Ultimately the prognosis is death, 70% of people with ALS (The most common form of MND) die within three 
            years after the first symptoms present themselves.
            </p>
            <p>
                <b>How do you measure data quality?</b><br/>...
            </p>
            <p>
                <b>What is the importance of data quality?</b><br/>...
            </p>
        </div>
      </div>
    );
  }
}
export default FAQ