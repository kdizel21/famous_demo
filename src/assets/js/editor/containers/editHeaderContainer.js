import { connect } from 'react-redux';
import { updateHeader,getHeaderState } from '../actions/editorActions.js';
import { contentEdited } from '../../submit/actions/submitActions.js';
import EditHeaderComponent from '../components/editHeader.js';

const hasSelected = (entryVal) => {
  if(entryVal && entryVal.id)
    return true

  return false
}

const mapStateToProps = (state) => {
  return {
    headerText: state.editor.headerText,
    entrySelected: hasSelected(state.main.currentEntry)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    keyUpHandler: (e) => { console.log('keyup')
      dispatch(updateHeader(e.target.value));
      dispatch(contentEdited())
    }
  }
}

const EditHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHeaderComponent)

export default EditHeader
