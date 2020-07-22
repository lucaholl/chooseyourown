import React from 'react';

import './Options.css'

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.click(this.props.id);
    }
    render(){
        return (
            <div onClick={this.handleClick}className='option'>
                {this.props.text}
            </div>
        )
    }
}

export default Options;