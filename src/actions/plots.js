export const RECEIVE_PLOTS = 'RECEIVE_PLOTS';

export function receivePlots(plots) {
  return {
    type: RECEIVE_PLOTS,
    plots
  }
}