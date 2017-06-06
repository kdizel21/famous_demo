import { connect } from 'react-redux';
import { selectEntry } from '../../main/actions/main.js';
import { updateHeader } from '../../editor/actions/editorActions.js';
import SelectorComponent from '../components/selector.js';

const mapStateToProps = (state) => {
  return {
    entries: state.main.entries
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEntry: (data,id) => {
      let item = data.filter(function(entry){
            return entry.id == id
          });
      dispatch(selectEntry(item[0]));
      dispatch(updateHeader(item[0].headertext));
    }
  }
}

const mergeProps = (stateProps, propsFromDispatch, ownProps) => {
  console.log(ownProps, "-----")
  return Object.assign({}, stateProps, ownProps, {
    selectEntryItem: (e) => {
      let id = parseInt(e.target.getAttribute("data-id"));
      propsFromDispatch.getEntry(stateProps.entries, id)
    }
  })
}

const EntrySelector = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SelectorComponent)

export default EntrySelector
