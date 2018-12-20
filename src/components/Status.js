import React, {Component} from 'react';
import Loading from "./Loading";
import {connect} from 'react-redux';
import {formatNumber} from "../utils/helpers";
import '../styles/status.css';

class Status extends Component {
    render() {
        if (typeof this.props.reports==="object") {
            return (
                <div className='text-center status-container'>
                    <div id='status-container-header'>
                        <h4>Status</h4>
                    </div>
                    <div id='status-container-body'>
                        {/*TODO: needs to work on Regex*/}
                        {/*{Object.keys(this.props.reports).map(key => {*/}
                        {/*const label = this.props.reports[key];*/}
                        {/*console.log(label);*/}
                        {/*const labelName = key*/}
                        {/*.slice(0, -6)*/}
                        {/*.split(/(?=[A-Z])|(?=[0-9])/)*/}
                        {/*.map(word => word.charAt(0).toUpperCase() + word.slice(1));*/}

                        {/*return (*/}
                        {/*<div key={key}>*/}
                        {/*<label>{labelName.join(' ')}</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{label === '' ? label : 'N/A'}</span>*/}
                        {/*</p>*/}
                        {/*</div>*/}
                        {/*)*/}
                        {/*}*/}
                        {/*)}*/}
                        <label>Average & Cost Per Client</label>
                        <p id='data'>
                            <span>{this.props.reports.meanClientCost_Monitor}</span>
                        </p>

                        <label>Clients > 5 Years</label>
                        <p id='data'>
                            <span>{this.props.reports.totalClientsGreaterThan5Years_Monitor}</span>
                        </p>

                        <label> Health Status</label>
                        <p id='data'>
                            <span>{formatNumber(this.props.reports.meanHealthStatus_Monitor, 2)}</span>
                        </p>

                        <label>Total Clients</label>
                        <p id='data'>
                            <span>{this.props.reports.totalClients_Monitor}</span>
                        </p>

                        <label>Mean Satisfaction </label>
                        <p id='data'>
                            <span>{formatNumber(this.props.reports.meanSatisfaction_Monitor, 2)}</span>
                        </p>


                        <label>Good Exit 6 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.goodExit6Months_Monitor}</span>
                        </p>

                        <label>Bad Exit 6 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.badExit6Months_Monitor}</span>
                        </p>

                        <label>Good Exit 18 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.goodExit18Months_Monitor}</span>
                        </p>

                        <label>Bad Exit 18 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.badExit18Months_Monitor}</span>
                        </p>

                        <label>Good Exit 24 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.goodExit24Months_Monitor}</span>
                        </p>

                        <label>Bad Exit 24 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.badExit24Months_Monitor}</span>
                        </p>

                        <label>Good Exit 36 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.goodExit36Months_Monitor}</span>
                        </p>

                        <label>Bad Exit 36 Months</label>
                        <p id='data'>
                            <span>{this.props.reports.badExit36Months_Monitor}</span>
                        </p>

                        <label>Neutral Exit 36 Plus Months</label>
                        <p id='data'>
                            <span>{this.props.reports.neutralExit36PlusMonths_Monitor}</span>
                        </p>

                        {/*<label>Bad Exit 36 Plus Months</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{this.props.reports.bottom36PlusMonths_Label}</span>*/}
                        {/*</p>*/}

                        {/*<label>Good Exit Ratio (%)</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{this.props.reports.goodExitRatio_Label ? this.props.reports.goodExitRatio_Label : 'N/A'}</span>*/}
                        {/*</p>*/}

                        <label>Bad Exit Ratio (%)</label>
                        <p id='data'>
                            <span>{this.props.reports.badExitPercentage_Monitor ? this.props.reports.badExitPercentage_Monitor : 'N/A'}</span>
                        </p>

                        {/*<label>Embeddedness</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.embeddedness_Label, 2)}</span>*/}
                        {/*</p>*/}

                        {/*<label>Drift</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.drift_Label, 2)}</span>*/}
                        {/*</p>*/}

                        {/*<label>Wait List Effect</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.waitListEffect_Label, 2)}</span>*/}
                        {/*</p>*/}

                        {/*<label>Drift - Wait List Effect</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.driftWaitListEffect_Label, 2)}</span>*/}
                        {/*</p>*/}

                        {/*<label>Current Drift</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.currentDrift_Label, 2)}</span>*/}
                        {/*</p>*/}

                        {/*<label>Time</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{this.props.reports.time_Label}</span>*/}
                        {/*</p>*/}

                        {/*<label>Recalculate Drift</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{this.props.reports.recalculateDrift_Label ? 'True' : 'False'}</span>*/}
                        {/*</p>*/}

                        <label>Common Law #</label>
                        <p id='data'>
                            <span>{this.props.reports.commonLawCapture_Monitor}</span>
                        </p>

                        {/*<label>Common Law Ratio</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{this.props.reports.commonLawRatio_Label ? this.props.reports.commonLawRatio_Label : 'N/A'}</span>*/}
                        {/*</p>*/}



                        {/*<label>Costs</label>*/}
                        {/*<p id='data'>*/}
                        {/*<span>{formatNumber(this.props.reports.costs_Label, 2)}</span>*/}
                        {/*</p>*/}
                    </div>
                </div>)
        } else {
            return <Loading text='Loading'/>
        }
    }
}

const mapStateToProps = state => {
    const reports = state.reports;

    if (Object.keys(reports).length > 0) {
        const filteredReports = Object.keys(reports)
            .filter(key => key.slice(-7) === 'Monitor')
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

export default connect(mapStateToProps)(Status)
