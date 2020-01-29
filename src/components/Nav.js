import React, { Component } from 'react';
import { Icon, Slider } from 'antd';
import "antd/dist/antd.css";
import './CSS/Nav.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'
import ReactFlagsSelect from 'react-flags-select';



@inject("processedData")

@observer
class Nav extends Component {

    
    render() {

        const logo = "<p>"
        return (
            <div id='nav-bar'>
                <span id='nav-log-top-left'>{logo}
                </span>
                {/* <Icon type="font-colors" style={{ fontSize: '45px', padding:'5px' }} /> */}
                <Slider vertical defaultValue={100} onChange={this.props.processedData.translationSlider} className='slider'/>
                <span className='easy'>Easy</span>
                <span className='hard'>Hard</span>
                <Icon className='line' type="line" style={{ fontSize: '15px', alignItems: 'center' }} />
                <ReactFlagsSelect className='menu-flags' countries={["US", "GB", "FR", "DE", "IT", "NG"]} selectedSize={10} optionsSize={6} alignOptions="center"/>


                
            </div>
        );
    }
}

export default Nav;
