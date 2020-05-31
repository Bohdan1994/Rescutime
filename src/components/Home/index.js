import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DiagramBar from '../DiagramBar';
import DetailsBar from '../DetailsBar';
import './style.sass';
import {API_KEY, PROXY_URL, getTotalHours} from '../api';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
      topFive: []
    }
  }

  componentDidMount() {
    getTotalHours((val) => {
      let topFive = val.rows.slice(0, 5);
      let totalHours = () => {
        return val.rows.reduce((prev, next) => prev + +next[1], 0);
      }
      this.setState({topFive: topFive, totalHours: totalHours()});
    });
  }


  render() {
    const TOP_FIVE = this.state.topFive;

      return(
        <Container>
          <Row className="home">
            <Col xs={6}>
           
              {/* <DiagramBar/> */}
            </Col>
            <Col xs={6}>
                   <DetailsBar  topfive={TOP_FIVE} total={this.state.totalHours} />
              
            </Col>
          </Row>
        </Container>
      )
  }

}

export default Home;