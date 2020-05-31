import React from 'react';
import {DetailItem as Item } from './Detail-item';

 const DetailsBar = (props) => {
    if(props.topfive) {
        const getPercent = (el) => (el[1] / props.total) * 100 ;
        
        // console.log(props.topfive,  props.total);
        return(
            <div className="details">
                {
                    props.topfive.map((el, index) => {
                        return <Item key={index} percent={getPercent(el)} data={el}/>
                    })
                }
            </div>
        )
    }
   
}

   
    


export default DetailsBar;