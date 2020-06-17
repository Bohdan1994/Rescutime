import React from 'react';
import Row from 'react-bootstrap/Row';
import TotalTime from './TotalTime';
import {getCategoriesByHour} from '../api';
import './style.sass';

const TimeLineYItem = (props) => {
    // data
    // console.log("TimeLineItem -> data", data)
    const [time, posY] = props.data;
    return <g>
        <line className="x-time" x1="0" y1={posY}  x2="300" y2={posY}/> 
        <text className="timeline-text" x="0" y={posY}>{time}</text>
    </g>
}

const TimeLineXItem = (props) => {
    const [time, posX] = props.data;
    return <g>
        <rect className="x-time" x1={posX} y1={posY}  x2={parseInt(posX) + 12.5} y2={posY}/> 
        <text className="timeline-text" x="0" y={posY}>{time}</text>
    </g>
}

const TimeLineVertical = (props) => {
    return <g className="timeline">
           <TimeLineYItem data={[45, '12.5%']}/>
           <TimeLineYItem data={[30, '25%']}/>
           <TimeLineYItem data={[15, '37.5%']}/>
    </g>
}

const TimeLineHorizontal = (props) => {
    return <g className="timeline">
           <TimeLineXItem data={[45, '12.5%']}/>
           <TimeLineXItem data={[30, '25%']}/>
           <TimeLineXItem data={[15, '37.5%']}/>
    </g>
}


class DiagramBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            timeline: 16
        }
    }

    componentDidMount ()  {
        // console.log(getCategoriesByHour());

        getCategoriesByHour((val) => {
            // val
            console.log("DiagramBar -> componentDidMount -> val", val)
        });
    }

    render() {
        return(
            <div className="diagram-bar">
                <Row>
                    <TotalTime/>
                </Row>
                <Row>
                    <svg width="300" height="180" className="diagram">
                        <line className="x-base" x1="0" y1="50%" x2="300" y2="50%"/>
                        <TimeLineVertical />
                        {/* <line className="x-time" x1="0" y1="0" x2="300" y2="0"/>
                        <line className="x-time" x1="0" y1="12.5%" x2="300" y2="12.5%"/>
                        <line className="x-time" x1="0" y1="25%" x2="300" y2="25%"/>
                        <line className="x-time" x1="0" y1="37.5%" x2="300" y2="37.5%"/>
                        <line className="x-time" x1="0" y1="62.5%" x2="300" y2="62.5%"/>
                        <line className="x-time" x1="0" y1="75%" x2="300" y2="75%"/>
                        <line className="x-time" x1="0" y1="87.5%" x2="300" y2="87.5%"/>
                        <line className="x-time" x1="0" y1="100%" x2="300" y2="100%"/> */}
                    </svg>
                </Row>
          </div>
        )
    }
}

export default DiagramBar;