export const submitChanges = (htmlData) => {
  return {
      type:'SUBMIT_CHANGES',
      payload:htmlData
    };
}

export const submitErorrHanlder = (data) => {
  return {
      type:'SUBMIT_ERROR',
      payload:data
    };
}

export const submitSuccess = (data) => {
  return {
      type:'SUBMIT_SUCCESS',
      payload:data
    };
}

export const contentEdited = (data) => {
  return {
      type:'CONTENT_EDITED',
      payload:data
    };
}
