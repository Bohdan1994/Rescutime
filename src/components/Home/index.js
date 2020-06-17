import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DiagramBar from '../DiagramBar';
import DetailsBar from '../DetailsBar';
import './style.sass';
import CategoryFactory from '../../instances/category';
import {API_KEY, PROXY_URL, getDaylyData} from '../api';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.state = {
      categories: ''
    }
  }

  componentDidMount() {
    getDaylyData((val) => {
      let res = val.rows;
      const categories = new CategoryFactory().getCategories(res);
      let totalHours = () => {
        return val.rows.reduce((prev, next) => prev + +next[1], 0);
      }
      this.setState({categories: categories, totalHours: totalHours()});
    });
  }


  render() {
    const items = this.state.categories;
    console.log(items);
      return(
        <Container>
          <Row className="home">
            <Col xs={6}>
              <DiagramBar/>
            </Col>
            <Col xs={6}>
              <DetailsBar  data={items} total={this.state.totalHours} />
            </Col>
          </Row>
        </Container>
      )
  }

}

export default Home;