import React from 'react'
class About extends React.Component {
  render() {

    var marginStyle = {
      padding: "20px",
      margin: "20px"
    };
    
    return (
      <div style={marginStyle}>
        <h1>About</h1>
        <p>
          We have developed an externally validated model to predict survival without tracheostomy and
          non-invasive ventilation for more than 23 h per day in European patients with ALS. This model could be applied to
          individualised patient management, counselling, and future trial design, but to maximise the benefit and prevent
          harm it is intended to be used by medical doctors only.<br/><br/>We obtained data for patients from 14 specialised 
          ALS centres (each one designated as a cohort) in Belgium, France, the Netherlands, Germany, 
          Ireland, Italy, Portugal, Switzerland, and the UK. All patients were diagnosed in the
          centres after excluding other diagnoses and classified according to revised El Escorial criteria. We assessed 16 patient
          characteristics as potential predictors of a composite survival outcome (time between onset of symptoms and noninvasive
          ventilation for more than 23 h per day, tracheostomy, or death) and applied backward elimination with
          bootstrapping in the largest population-based dataset for predictor selection. Data were gathered on the day of diagnosis 
          or as soon as possible thereafter. The quality of the gathered data is extermely important and so this website has been developed in order to 
          allow researchers to view up to date statistics regarding the condition of their data based on 
          factors such as accuracy, completeness, consistency, 
          reliability and whether it's up to date.
        </p>
      </div>
    );
  }
}
export default About