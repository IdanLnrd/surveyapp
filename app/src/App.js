import './App.css';
import React from 'react';
import * as Survey from 'survey-react';
function App() {
  
  const surveyJSON = {
    title: "Tell us, what technologies do you use?",
    pages: [
      {
        name: "page1", questions: [
          { 
            type: "radiogroup", 
            choices: ["Yes", "No"], 
            isRequired: true, 
            name: "frameworkUsing", 
            title: "Do you use any front-end framework like Bootstrap?" 
          },
          { 
            type: "checkbox", 
            choices: ["Bootstrap", "Foundation"], 
            hasOther: true, isRequired: true, 
            name: "framework", 
            title: "What front-end framework do you use?", 
            visibleIf: "{frameworkUsing} = 'Yes'" }
        ]
      },
      {
        name: "page2", questions: [
          { 
            type: "radiogroup", 
            choices: ["Yes", "No"], 
            isRequired: true, 
            name: "mvvmUsing", 
            title: "Do you use any MVVM framework?" },
          { 
            type: "checkbox", 
            choices: ["AngularJS", "KnockoutJS", "React"], 
            hasOther: true, 
            isRequired: true, 
            ame: "mvvm", 
            title: "What MVVM framework do you use?", 
            visibleIf: "{mvvmUsing} = 'Yes'" }]
      },
      {
        name: "page3", questions: [
          { 
            type: "comment", 
            name: "about", 
            title: "Please tell us about your main requirements for Survey library" 
          }
        ]
      }
    ]
  }
  
  const sendDataToServer = data => {
    console.log('sendDataToServer: ', data.valuesHash);
  }
  // var surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorDivElementID");
  console.log('surveyCreator:', Survey.SurveyCreator);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{textAlign: 'start', fontSize: '16px'}}><pre>{JSON.stringify(surveyJSON, null, 2)}</pre></div>
      </header>
      <div>
        <div id="surveyCreatorDivElementID"></div>
        <Survey.SurveyWindow 
          json={surveyJSON}
          onComplete={sendDataToServer}>
        </Survey.SurveyWindow>
        
      </div>
    </div>
  );
}

export default App;
