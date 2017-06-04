import React from "react";
import ReactDOM from "react-dom";

import SubmitContainer from "../containers/submitContainer";

export default class SubmitComponent extends React.Component{
  render(){
    return (
      <div className="submit button">
        <SubmitContainer />
      </div>
    )
  }
}
