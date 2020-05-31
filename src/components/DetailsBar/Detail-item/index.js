import './style.sass';
import React from 'react';
import Row from 'react-bootstrap/Row';

export function DetailItem (props) {
    const percents = 40 + '%';
    console.log(props);
    // const 
    return(
        <div className="details-item item">
            <div className="wrap">
                <div className="item__percents">
                    {percents}
                </div>
                <div className="item__title">
                    Software Development
                </div>
            </div>
            <div className="item__hightlight item__hightlight--productive" style={ {width : percents}}>
            </div>

        </div>
    )
};