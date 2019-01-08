import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/riskModifiers.css';
import {formatNumber} from "../utils/helpers";
import Loading from "./Loading";
import {handleUpdateReport} from "../actions/reports";

class RiskModifiers extends Component {
  render() {
    if (this.props.reports.injurySeverity_Modifier !== undefined) {
      return (
        <div className='risk-modifiers-container text-center'>
          <h4 id='risk-modifiers-container-header'>Modifiers</h4>
          <div id='risk-modifiers-container-body'>
            {Object.keys(this.props.reports).map(key => {
                const modifier = this.props.reports[key];
                const label = key
                  .slice(0, -9)
                  .split(/(?=[A-Z])/)
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1));

                return (
                  <div key={key}>
                    <p>
                      <span>
                        <button type="button" className="btn btn-outline-primary"
                                onClick={() => this.props.dispatch(handleUpdateReport({
                                    name: key,
                                    value: modifier - 1
                                  },
                                  `ask clients [ set ${label.join('')} ${label.join('')} - 1 ]`
                                ))}>
                          - 1
                        </button>
                      </span>
                      <span>{formatNumber(modifier, 3)}</span>
                      <span>
                        <button type="button" className="btn btn-outline-primary"
                                onClick={() => this.props.dispatch(handleUpdateReport({
                                    name: key,
                                    value: modifier + 1
                                  },
                                  `ask clients [ set ${label.join('')} ${label.join('')} + 1 ]`
                                ))}>
                          + 1
                        </button>
                      </span>
                    </p>
                    <label>{label.join(' ')}</label>
                  </div>
                )
              }
            )}
          </div>
        </div>
      )
    } else {
      return <Loading text='Loading'/>
    }
  }
}

const mapStateToProps = state => {
  const reports = state.reports;

  if (Object.keys(reports).length > 0) {
    const filteredReports = Object.keys(reports)
      .filter(key => key.slice(-8) === 'Modifier')
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: reports[key]
        };
      }, {});

    return {
      reports: filteredReports
    }
  } else {
    return {
      reports: reports
    }
  }
};

export default connect(mapStateToProps)(RiskModifiers)