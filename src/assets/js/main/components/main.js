import React from "react";
import ReactDOM from "react-dom"

import EditorMainComponent from './../../editor/components/editorMain.js';
import StageMainComponent from './../../stage/components/stageMain.js';
import SubmitComponent from './../../submit/components/submit.js';
import SelectorMainComponent from './../../selector/components/selectorMain.js';

export default class MainComponent extends React.Component{
  render(){
    return (
      <div>
        <h3 className="title">Famous Demo</h3>
        <StageMainComponent />
        <EditorMainComponent />
        <SelectorMainComponent />
        <SubmitComponent />
      </div>
    )
  }
}
