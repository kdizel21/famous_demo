import React from "react";
import ReactDOM from "react-dom";

export default class EditHeaderComponent extends React.Component{
  render(){
    var opts = {};
    if (this.props.entrySelected == false) {
        opts['disabled'] = 'disabled';
    }

    return (
      <div className="editor-option add-header">
        <h4>Edit a title</h4>
        <textarea
          {...opts}
          onKeyUp={this.props.keyUpHandler}
          rows="3"
          cols="40"
          placeholder="Type a title name here"
          defaultValue={this.props.headerText}>
        </textarea>
      </div>
    )
  }
}
