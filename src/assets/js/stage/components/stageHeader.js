import React from "react";
import ReactDOM from "react-dom"

export default class StageHeaderComponent extends React.Component{

  render(){
    return (
      <div className="stage-container">
        <h4>{this.props.stageHeaderText}</h4>
      </div>
    )
  }
}
