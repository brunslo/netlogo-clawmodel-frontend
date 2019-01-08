import React, {Component} from 'react';
import '../styles/dashboard.css';
import {connect} from 'react-redux';
import View from './View';
import Sliders from './Sliders';
// import RiskModifiers from './RiskModifiers';
import Plots from './Plots';
import Status from './Status';
import {handleData} from "../actions/index";
import {handleCommand, getGo} from "../utils/api";


class Dashboard extends Component {
  state = {
    go: false
  };

  componentDidMount() {
    this.interval = setInterval(() => this.handleGo(), 650);
  }

  async handleGo() {
    if (this.state.go) {
      await getGo();
      this.props.dispatch(handleData());
    }
  };

  handleGoOnce = () => {
    getGo()
      .then(() => this.props.dispatch(handleData()))
  };

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className='dashboard-container container-fluid'>
        <div className='dashboard-header text-center'>
        </div>
        <div className='dashboard-body row'>
          <div className='col-2' id='params'>
            <Sliders/>
            {/*<RiskModifiers/>*/}
          </div>

          <div className='col-8'>
            <div className='row buttons text-center' id='main-buttons'>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('setup')}>
                  Set Up
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => {
                          this.state.go
                            ? this.setState({go: false})
                            : this.setState({go: true})
                        }}>
                  Go
                </button>
              </div>
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleGoOnce}>
                  Go Once
                </button>
              </div>
              {/*<div className='col-2'>*/}
                {/*<button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('wave')}>*/}
                  {/*Wave*/}
                {/*</button>*/}
              {/*</div>*/}
              <div className='col-2'>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleCommand('ask patches [ set pcolor black ]')}>
                  Reset Patches
                </button>
              </div>
              {/*<div className='col-2'>*/}
                {/*<button type="button" className="btn btn-outline-primary"*/}
                        {/*onClick={() => handleCommand('save-world-state')}>*/}
                  {/*Save World State*/}
                {/*</button>*/}
              {/*</div>*/}
            </div>

            <div id='main-chart'>
              <View/>
            </div>

            <div id='charts'>
              <Plots/>
            </div>
          </div>

          <div className='col-2' id='status'>
            <Status/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Dashboard)
