const action = {
  loginout: (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'CHECK_LOGIN',
        data: ''
      })
      dispatch({
        type: 'CHECK_USER',
        data: ''
      })
    })
  }
}

export default action
