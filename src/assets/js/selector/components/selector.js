import React from "react";
import ReactDOM from "react-dom";

export default class SelectorComponent extends React.Component{
  render(){
    let entries = this.props.entries.map((entry) => {
      return <li key={entry.id} data-id={entry.id} onClick={this.props.selectEntryItem}>{entry.headertext}</li>
    });

    return (
      <ul className="entries-list">
        {entries}
      </ul>
    )
  }
}
