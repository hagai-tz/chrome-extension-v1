import React, { Component } from 'react';
import { Icon, Slider, Menu, Dropdown } from 'antd';
import "antd/dist/antd.css";

import './CSS/Nav.css'
import mainLogo from'../img/Trial Logo Design1.png';




import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'



@inject("processedData")

@observer
class Nav extends Component {

    

    languageHandler = (e) => {
        this.props.processedData.changeTranslationLanguage(e.target.value)
    }
    render() {
        const langs = ["HE", "FR", "AR", "ES", "DE", "SE"]
        const logo = "<p>"
        return (
            <div id='nav-bar'>
                <img id='logo' src={mainLogo} />
                {/* <span id='nav-log-top-left'>{logo}</span> */}
                {/* <button lang='ar' onClick={this.languageHandler} >ar</button> */}
                <Slider vertical defaultValue={60} onChange={this.props.processedData.translationSlider} className='slider'/>
                <span className='easy'>More</span>
                <span className='hard'>Less</span>
                <Icon className='line' type="line" style={{ fontSize: '15px', alignItems: 'center', color:"purple" }} />

                <select onChange={this.languageHandler} className='menu-flags'>
                        {langs.map(lang => <option value={lang}>{lang}</option>)}
                </select>

                
            </div>
        );
    }
}

export default Nav;





