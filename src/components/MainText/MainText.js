import React from 'react';
import './MainText.css';

const MainText = (props) => {
        return (
            <div className='MainTextContainer'>
                <div 
                    key={props.id} 
                    className='MainText' 
                    style={{opacity: '1', transition: 'opacity 500ms ease-in'}}>
                        {props.main}
                </div>
            </div> 
        )
}

export default MainText;