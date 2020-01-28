import React, { Component } from 'react';
import { Icon, Slider } from 'antd';
import "antd/dist/antd.css";
import './CSS/Nav.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class Nav extends Component {

   
    render() {
        const logo = "<p>"
        return (
            <div id='nav-bar'>
                <span id='nav-log-top-left'>{logo}
                {/* <Icon type="line" style={{ fontSize: '15px', alignItems: 'center' }} /> */}
                </span>
                {/* <Icon type="font-colors" style={{ fontSize: '45px', padding:'5px' }} /> */}
                <Slider vertical defaultValue={40} onChange={this.props.processedData.translationSlider} className='slider'/>
                <span className='easy'>Easy</span>
                <span className='hard'>Hard</span>
                
            </div>
        );
    }
}

export default Nav;