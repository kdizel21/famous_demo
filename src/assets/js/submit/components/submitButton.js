import React from "react";
import ReactDOM from "react-dom"

export default class SubmitButtonComponent extends React.Component{

  render(){
    var active = this.props.active;
    var opts = {};
    if (this.props.active == 'disabled') {
        opts['disabled'] = 'disabled';
    }
    return (
      <button
        {...opts}
        onClick={this.props.save}
        type="submit"
        className={"submit " + active}>Save Changes</button>
    )
  }
}
