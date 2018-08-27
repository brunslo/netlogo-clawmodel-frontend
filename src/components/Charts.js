import React, { Component } from 'react';
import '../styles/charts.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Linechart from './MainChart';
import Parameters from './Parameters';

class Charts extends Component {
  render () {
    return (
      <div className='charts-container'>
        <div className='charts-header text-center'>
        </div>
        <div className='container-fluid charts-body row'>
          <div className='col-2' id='params'>
            <Parameters/>
          </div>
          <div className='col-8' id='charts'>
            <div id='main-chart'>
              <Linechart/>
            </div>
            <div className='row buttons text-center'>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Set Up
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Go
                </button>
              </div>
              <div className='col-4'>
                <button type="button" className="btn btn-outline-primary">
                  Go Once
                </button>
              </div>
            </div>
          </div>
          <div className='col-2' id='status'>
            <p>Status</p>
            <div className="form-group">
              <label htmlFor="injurySeverity">Injury Severity</label>
              <input type="text" className="form-control" id="injurySeverity" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts