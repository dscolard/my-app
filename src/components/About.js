import React from 'react'
class About extends React.Component {
  render() {

    return (
    <div style={{position:"relative"}}>
      <div class="aboutMND">
        <h1>Motor Neurone Disease</h1>
        <p>
        Motor neurones are specialised nerve cells that control important voluntary muscle activity 
        such as walking, talking and breathing. MND refers to any disease which inhibits these nerve 
        cells and prevents them from operating normally. The loss of motor neurone function leads to 
        increasing loss of mobility in the limbs and difficulty with speech, swallowing and breathing. 
        Ultimately the prognosis is death, 70% of people with ALS (The most common form of MND) die within 
        three years after the first symptoms present themselves.<br/><br/>MND is a rare disease which 
        progresses very rapidly, these combined factors have made it extremely difficult to gather patient 
        data and carry out widespread trials to fully understand the disease and how it progresses. Thus 
        far there are no accredited models for predicting how fast the disease may progress in an individual 
        patient. This information is critical for risk assessment and counselling for individual patients, 
        stratification of patients for trials, and timing of interventions. Researchers here at Trinity College 
        Dublin aim to solve this issue by developing and validating a model capable of predicting the composite 
        survival endpoint for individual patients with ALS.
        </p>
      </div>

      <div class="aboutModel">
        <h1>The Prediction Model</h1>
        <p>
        In order to develop an accurate model the team had to gather a large enough dataset to which 
        they could apply modern machine learning techniques. To do this data has been gathered from 
        14 ALS centres located across Europe. This dataset contained information about each individual 
        patient which was gathered on the day of diagnosis or as soon thereafter. The team assessed 16 
        patient characteristics from this dataset as possible predictors of composite survival outcome. 
        The key predictors were then identified using backward elimination with bootstrapping. Backward 
        elimination begins with all the independent variables entered into the equation first and each 
        one is deleted one at a time if they do not contribute to the regression equation. Bootstrapping
         is a method of random sampling with replacement. The proportion of bootstrap samples in which 
         each predictor is identified is determined. The predictors which were present in more than 70% 
         of the bootstrap samples were chosen for the model. Selected variables were then used to develop
          a multivariable Roystone-Parmar model for predicting composite survival outcome. Model was verified 
          using internal-external cross validation. 
        </p>
      </div>

      <div class="aboutContribution">
        <h1>My Contribution</h1>
        <p>
        High Data Quality is a vital prerequisite for any predictive model in order to ensure accurate 
        and useful predictions. Data Quality is measured using multiple factors such as accuracy, 
        completeness, consistency, reliability and whether it's up to date. It is my job to analyse our
         dataset in order to monitor these conditions. The results of my analysis will be available in 
         real time via a web application. This web application will be accessible to the researchers 
         allowing them to easily view and understand their dataset.
        </p>
      </div>
    </div>
    );
  }
}
export default About