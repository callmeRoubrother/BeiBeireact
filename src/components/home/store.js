const data = (state = {
  bannerlist: [],
  prolist: [],
  homeContent: [],
  homeContentId: {
    iid: '',
    eventId: '',
    uid: ''
  }
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'CHANGE_PRO':
      return {...state, prolist: data}
    case 'CHANGE_BANNER':
      return {...state, bannerlist: data}
    case 'CHANGE_HOMECONTENT':
      return {...state, homeContent: data}
    case 'CHANGE_ID':
      return {...state, homeContentId: data}
    default:
      return state
  }
}

export default data
