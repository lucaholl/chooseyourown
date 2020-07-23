import React from 'react';
import './OptionsContainer.css'

import Options from '../../components/Options/Options'

class OptionsContainer extends React.Component{
    render(){
        return (
            <div className='OptionsContainer'>
                {this.props.options.map((option, index) => {
                    return <Options click={this.props.handleClick} key={index} text={option.text} id={index} />
                })}    
            </div>
        )
    }

}

export default OptionsContainer;