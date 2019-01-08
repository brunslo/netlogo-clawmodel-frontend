import {RECEIVE_REPORTS, UPDATE_REPORT} from "../actions/reports";

export default function reports(state = {}, action) {
  switch (action.type) {
    case RECEIVE_REPORTS:
      return {
        ...state,
        ...action.reports
      };
    case UPDATE_REPORT:
      return {
        ...state,
        [action.report.name]: action.report.value
      };
    default:
      return state
  }
}