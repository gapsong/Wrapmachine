export default function temp(state = {}, action) {
  switch (action.type) {
    case 'GET_RHYME_SUCCESSFUL':
      return Object.assign({}, action.word);
    default:
      return state;
  }
}
