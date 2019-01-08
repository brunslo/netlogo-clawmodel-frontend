import {handleCommand} from "../utils/api";

export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';
export const UPDATE_REPORT = 'UPDATE_REPORT';

export function receiveReports(reports) {
  return {
    type: RECEIVE_REPORTS,
    reports
  }
}

function updateReport(report) {
  return {
    type: UPDATE_REPORT,
    report
  }
}

export function handleUpdateReport(report, command) {
  return dispatch => {
    handleCommand(command)
      .then(() => dispatch(updateReport(report)))
  }
}