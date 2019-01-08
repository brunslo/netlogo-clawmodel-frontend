import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import {connect} from 'react-redux';
import '../styles/charts.css';
import Loading from './Loading';

class Plots extends Component {
  render() {
    if (Object.keys(this.props.plots).length > 0) {
      return (
        <div className='text-center charts-container'>
          <h4 id='charts-container-header'>Plots</h4>
          <div className='row' id='charts-container-body'>
            {Object.keys(this.props.plots).map(key => {
                const plot = this.props.plots[key];
                return (
                  <div className='col-6' key={key}>
                    <Scatter data={plot.formattedData} options={plot.options}/>
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
  return {
    plots: state.plots
  }
};

export default connect(mapStateToProps)(Plots)