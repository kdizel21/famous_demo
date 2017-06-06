import React from "react";
import ReactDOM from "react-dom"

import SelectorContainer from "../containers/selectorContainer";

export default class SelectorMainComponent extends React.Component{
  render(){
    return (
      <div className="entries-container">
        <h4 className="title selector">Select an item</h4>
        <SelectorContainer />
      </div>
    )
  }
}
