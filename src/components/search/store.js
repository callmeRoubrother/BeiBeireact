const data = (state = {
  searchVal: '',
  searchList: []
}, action) => {
  const { type, data } = action
  switch (type) {
    case "CHANGE_VAL":
      return { ...state, searchVal: data}
    case "CHANGE_LIST":
      return { ...state, searchList: data}
    default:
      return state
  }
}

export default data
