import {RECEIVE_PLOTS} from "../actions/plots";

export default function plots(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PLOTS:
      return {
        ...state,
        ...action.plots
      };

    default:
      return state
  }
}