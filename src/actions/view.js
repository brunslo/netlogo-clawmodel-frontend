export const RECEIVE_VIEW = 'RECEIVE_VIEW';

export function receiveView(view) {
  return {
    type: RECEIVE_VIEW,
    view
  }
}