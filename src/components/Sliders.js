import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import Select from 'react-select';
import '../styles/parameters.css';
import {handleUpdateReport} from "../actions/reports";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
    const {value, dragging, index, ...restProps} = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}>
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};


const eventType = [
    { label: "Negative", value: "Negative" },
    { label: "Neutral", value: "Neutral" },
    { label: "Positive", value: "Positive" },
    { label: "Delete", value: "Delete" }
];
class Sliders extends Component {
    handleSliderChange = (slider, e) => {
        const sliderName = slider.slice(0, -7)
            .split(/(?=[A-Z])|(?=[0-9])/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');

        if (slider === "roadSafetyEffectiveness_Slider") {
            this.props.dispatch(handleUpdateReport({
                    name: slider,
                    value: e
                },
                `ask clients [set Road_Safety_Effectiveness ${e}]`
            ))
        }
        // else if (slider === "recalculateDrift_Slider") {
        //   if (e === 1) {
        //     this.props.dispatch(handleUpdateReport({
        //         name: slider,
        //         value: e
        //       },
        //       `ask clients [ set RecalculateDrift True ]`
        //     ))
        //   } else if (e === 0) {
        //     this.props.dispatch(handleUpdateReport({
        //         name: slider,
        //         value: e
        //       },
        //       `ask clients [ set RecalculateDrift False ]`
        //     ))
        //   }
        // }
        else {
            this.props.dispatch(handleUpdateReport({
                    name: slider,
                    value: e
                },
                `ask clients [set ${sliderName} ${e}]`
            ))
        }
    };

    handleChooserChange = (chooser, e) => {

        this.props.dispatch(handleUpdateReport({
                name: chooser,
                value: e.value
            },
            `ask clients [set Event_Type "${e.value}"]`
        ))
    };

    render() {
        return (
            <div className='params-container text-center'>
                <h4 id='params-header'>Sliders</h4>
                <div className='sliders' id='params-body'>
                    <Slider min={0} max={10} defaultValue={1} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("newClients_Slider", e)}
                    />
                    <p>New Clients: {this.props.reports.newClients_Slider}</p>

                    <Slider min={1} max={100} defaultValue={1} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("roadSafetyEffectiveness_Slider", e)}
                    />
                    <p>Road Safety Effectiveness: {this.props.reports.roadSafetyEffectiveness_Slider}</p>

                    <Slider min={0} max={100} defaultValue={22} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("injuryRecovery_Slider", e)}
                    />
                    <p>Injury Recovery: {this.props.reports.injuryRecovery_Slider}</p>


                    <Slider min={0} max={0.2} defaultValue={0.049} step={0.001}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("randomVariation_Slider", e)}
                    />
                    <p>Random Variation: {this.props.reports.randomVariation_Slider}</p>

                    <Slider min={1} max={200} defaultValue={75} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("issueCount_Slider", e)}/>
                    <p>Issue Count: {this.props.reports.issueCount_Slider}</p>
                    {/*TODO*/}
                    <Slider min={0} max={1} defaultValue={1} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("traceClients_Switch", e)}
                    />
                    <p>Trace Clients: {this.props.reports.traceClients_Switch ? 'True' : 'False'}</p>

                    {/*<Slider min={1} max={10} defaultValue={1.01} step={0.01}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("driftModifier_Slider", e)}/>*/}
                    {/*<p>Drift Modifier: {this.props.reports.driftModifier_Slider}</p>*/}

                    <Slider min={0} max={100} defaultValue={50} step={1}
                            handle={handle}
                            onChange={(e) => this.handleSliderChange("solicitors_Slider", e)}/>
                    <p>Solicitors: {this.props.reports.solicitors_Slider}</p>

                    <Select options={ eventType }
                            value={'Negative'}
                            onChange={(e)=>this.handleChooserChange("eventType_Chooser",e)}
                    />
                    <p>Event Type: {this.props.reports.eventType_Chooser? this.props.reports.eventType_Chooser: 'Negative'}</p>
                    {/*<Slider min={-300} max={100} defaultValue={-260} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone1Starts_Slider", e)}/>*/}
                    {/*<p>Shock Zone 1 Starts: {this.props.reports.shockZone1Starts_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-250} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone1Ends_Slider", e)}/>*/}
                    {/*<p>Shock Zone 1 Ends: {this.props.reports.shockZone1Ends_Slider}</p>*/}

                    {/*<Slider min={0} max={100} defaultValue={35} step={1}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone1Increase_Slider", e)}/>*/}
                    {/*<p>Shock Zone 1 Increases: {this.props.reports.shockZone1Increase_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-50} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone2Starts_Slider", e)}/>*/}
                    {/*<p>Shock Zone 2 Starts: {this.props.reports.shockZone2Starts_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-20} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone2Ends_Slider", e)}/>*/}
                    {/*<p>Shock Zone 2 Ends: {this.props.reports.shockZone2Ends_Slider}</p>*/}

                    {/*<Slider min={0} max={100} defaultValue={20} step={1}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("shockZone2Increase_Slider", e)}/>*/}
                    {/*<p>Shock Zone 2 Increases: {this.props.reports.shockZone2Increase_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-280} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone1Starts_Slider", e)}/>*/}
                    {/*<p>Relief Zone 1 Starts: {this.props.reports.reliefZone1Starts_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-270} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone1Ends_Slider", e)}/>*/}
                    {/*<p>Relief Zone 1 Ends: {this.props.reports.reliefZone1Ends_Slider}</p>*/}

                    {/*<Slider min={0} max={100} defaultValue={21} step={1}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone1Decrease_Slider", e)}/>*/}
                    {/*<p>Relief Zone 1 Decreases: {this.props.reports.reliefZone1Decrease_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-200} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone2Starts_Slider", e)}/>*/}
                    {/*<p>Relief Zone 2 Starts: {this.props.reports.reliefZone2Starts_Slider}</p>*/}

                    {/*<Slider min={-300} max={100} defaultValue={-190} step={5}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone2Ends_Slider", e)}/>*/}
                    {/*<p>Relief Zone 2 Ends: {this.props.reports.reliefZone2Ends_Slider}</p>*/}

                    {/*<Slider min={0} max={100} defaultValue={22} step={1}*/}
                    {/*handle={handle}*/}
                    {/*onChange={(e) => this.handleSliderChange("reliefZone2Decrease_Slider", e)}/>*/}
                    {/*<p>Relief Zone 2 Decreases: {this.props.reports.reliefZone2Decrease_Slider}</p>*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const reports = state.reports;

    if (Object.keys(reports).length > 0) {
        const filteredReports = Object.keys(reports)
            .filter(key => key.slice(-6) === 'Slider' || key.slice(-7)==='Chooser')
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

export default connect(mapStateToProps)(Sliders)
