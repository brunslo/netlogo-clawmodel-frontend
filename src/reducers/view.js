import {RECEIVE_VIEW} from "../actions/view";

export default function view(state = {}, action) {
  switch (action.type) {
    case RECEIVE_VIEW:
      return {
        ...state,
        ...action.view
      };

    default:
      return state
  }
}