import React from 'react';
import DetailItem from './Detail-item';

 const DetailsBar = (props) => {
    if(props.data) {
        return(
            <div className="details">
                {
                    props.data.map((el, index) => {
                        return <DetailItem key={index} category={el} totalSeconds={props.total}/>
                    })
                }
            </div>
        )
    }
    else {
        return null;
    }
   
}

   
    


export default DetailsBar;