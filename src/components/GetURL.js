import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

@inject( "processedData" )

@observer
class GetURL extends Component {
    componentDidMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        console.log(params.get("url"));
        let sendUrl = params.get("url")
        this.props.processedData.createWebsiteData(sendUrl)
        // this.props.processedData.createWebsiteData(this.props.match.params.url)

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default GetURL;