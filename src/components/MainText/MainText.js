import React from 'react';

import './MainText.css';

const MainText = (props) => {
        return (
            <div className='MainTextContainer'>
                <div className='MainText'>
                    {props.main}
                </div>
            </div> 
        )
}

export default MainText;