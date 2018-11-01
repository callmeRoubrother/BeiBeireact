const data = (state = {
  userName: '',
  isLogin: '',
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'CHECK_LOGIN':
      return {...state, isLogin: data}
    case 'CHECK_USER':
      return {...state, userName: data}
    default:
      return state
  }
}

export default data
