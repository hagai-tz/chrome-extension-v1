import React, { Component } from 'react';
import { Icon, Slider, Menu, Dropdown } from 'antd';
import "antd/dist/antd.css";
import './CSS/Nav.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'



@inject("processedData")

@observer
class Nav extends Component {

    

    languageHandler = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.props.processedData.changeTranslationLanguage(e.target.value)
    }
    render() {
        const langs = ["HE", "EN", "FR", "AR", "ES", "DE", "SE"]
        const logo = "<p>"
        return (
            <div id='nav-bar'>
                <span id='nav-log-top-left'>{logo}
                </span>
                {/* <button lang='ar' onClick={this.languageHandler} >ar</button> */}
                <Slider vertical defaultValue={100} onChange={this.props.processedData.translationSlider} className='slider'/>
                <span className='easy'>Easy</span>
                <span className='hard'>Hard</span>
                <Icon className='line' type="line" style={{ fontSize: '15px', alignItems: 'center' }} />

            <select onChange={this.languageHandler} className='menu-flags'>
                     {langs.map(lang => <option value={lang}>{lang}</option>)}
            </select>

                
            </div>
        );
    }
}

export default Nav;





