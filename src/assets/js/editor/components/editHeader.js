import React from "react";
import ReactDOM from "react-dom";

export default class EditHeaderComponent extends React.Component{
  render(){
    return (
      <div className="editor-option add-header">
        <h4>Add a title</h4>
        <textarea onKeyUp={this.props.keyUpHandler}
          rows="3"
          cols="40"
          placeholder="Type a title name here"
          defaultValue={this.props.headerText}>
        </textarea>
      </div>
    )
  }
}
