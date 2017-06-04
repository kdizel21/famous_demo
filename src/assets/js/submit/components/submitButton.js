import React from "react";
import ReactDOM from "react-dom"

export default class SubmitButtonComponent extends React.Component{

  render(){
    var active = this.props.active;
    return (
      <button onClick={this.props.saveChanges} type="submit" className={"submit " + active}>Save Changes</button>
    )
  }
}
