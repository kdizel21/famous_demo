import React from "react";
import ReactDOM from "react-dom"

import StageHeaderContainer from "../containers/stagingContainer";

export default class StageMainComponent extends React.Component{
  render(){
    return (
      <div>
        <h4 className="title stage">Staging Area</h4>
        <StageHeaderContainer />
      </div>
    )
  }
}
