import './style.sass';
import React from 'react';
import Row from 'react-bootstrap/Row';

class DetailItem extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            isPercents: false,    
        };
    }

    hoverHandler() {
      console.log('w');
      this.setState({isPercents: !this.state.isPercents})
    }

    render() {
      let category = this.props.category;
      const title = category.title;
      const categoryName = category.categoryName;
      const categorySeconds = category.getTotalSeconds();

      let percents = categorySeconds?categorySeconds / (this.props.totalSeconds / 100):0;
      let hours = Math.floor(categorySeconds / 60 / 60);
      let minutes =  Math.floor(categorySeconds / 60) - (hours * 60);
      let top = category.getTopThree();


      return(     
          <div className="details-item item" onMouseEnter={() => this.hoverHandler()} onMouseLeave={() => this.hoverHandler()}>
              <div className="wrap">
                  <div className="item__percents">
                      {this.state.isPercents?percents.toFixed(1) + '%':`${hours}:${minutes}m`}
                  </div>
                  <div className="item__title">
                    {title}
                  </div>
              </div>
              <div className={`item__hightlight item__hightlight--${categoryName}`} style={ {width : percents + '%'}}>
                  {top}
              </div>

          </div>
      )
    }
};

export default DetailItem;