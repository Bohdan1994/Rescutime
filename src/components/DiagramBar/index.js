import React from 'react';
import Row from 'react-bootstrap/Row';
import TotalTime from './TotalTime';

class DiagramBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
          <Row>
              <TotalTime/>
          </Row>
        )
    }
}

export default DiagramBar;