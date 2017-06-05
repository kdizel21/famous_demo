import { connect } from 'react-redux';
import axios from 'axios';
import { submitChanges,
  submitErorrHanlder,
  submitSuccess
 } from '../actions/submitActions.js';
import SubmitButtonComponent from '../components/submitButton.js';

const mapStateToProps = (state) => {
  return {
    active: state.submit.active,
    headerText: state.editor.headerText
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveChanges: (hText) => {
      console.log('saveChanges called');
      var user = 1;
      // dispatch(submitChanges());
      axios.put(`/api/entries/${user}`, {headerText:hText})
        .then(res => {
          dispatch(submitSuccess)
        })
        .catch(function (error) {
          console.log(error);
          // dispatch(submitErorrHanlder());
        });
    }
  }
}

const mergeProps = (stateProps, propsFromDispatch, ownProps) => {
  return Object.assign({}, stateProps, {
    save: () => propsFromDispatch.saveChanges(stateProps.headerText)
  })
}

const SubmitButton = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SubmitButtonComponent)

export default SubmitButton
