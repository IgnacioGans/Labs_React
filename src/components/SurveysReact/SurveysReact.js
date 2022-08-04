import React, {useCallback } from 'react';
import NavigationReact from '../NavigationReact/NavigationReact';
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import './SurveysReact.css';
import { Survey } from 'survey-react-ui';
StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

const SurveysReact = () => {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);
  return (
    <>
      <NavigationReact/>
      <Survey model={survey} />
    </>
  )
};

export default SurveysReact;
