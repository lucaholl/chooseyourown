import React from 'react';
import './OptionsContainer.css'

import Options from '../../components/Options/Options'

class OptionsContainer extends React.Component{
    render(){
        return (
            <div className='OptionsContainer'>
                {this.props.options.map(option => {
                    return <Options click={this.props.handleClick} key={option.id} text={option.text} id={option.id} />
                })}    
            </div>
        )
    }

}

export default OptionsContainer;