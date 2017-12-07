export default function messages(state = {}, action) {
  switch (action.type) {
    case 'CONTACT_FORM_SUCCESS':
      return {penis: "penalutsch"};
    default:
      return state;
  }
}
