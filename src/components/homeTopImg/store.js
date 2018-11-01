const data = (state = {
  prolist: [],
  randomNum: '',
  clickData: []
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'CHANGE_TOP_IMG':
      return {...state, prolist: data}
    case 'CHANGE_NUM':
      return {...state, randomNum: data}
    case 'CHANGE_CLICK':
      return {...state, clickData: data}
    default:
      return state
  }
}

export default data
