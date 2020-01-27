import React, { Component } from 'react';
import { Icon, Slider } from 'antd';
import "antd/dist/antd.css";


import './CSS/Nav.css'

class Nav extends Component {

    wordsFilter = (difficultyLevel) => {
        
        console.log(difficultyLevel)

    }
    render() {
        const logo = "<p>"
        return (
            <div id='nav-bar'>
                        <span id='nav-log-top-left'>{logo}
                        {/* <Icon type="line" style={{ fontSize: '15px', alignItems: 'center' }} /> */}
                        </span>
                        {/* <Icon type="font-colors" style={{ fontSize: '45px', padding:'5px' }} /> */}
                        <Slider vertical defaultValue={40} onChange={this.wordsFilter} className='slider'/>
                        <span className='hard'>Hard</span>
                        <span className='easy'>Easy</span>
                
            </div>
        );
    }
}

export default Nav;