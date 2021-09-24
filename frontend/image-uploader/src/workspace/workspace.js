import React from 'react';
import {PageStatus} from "../utils/enums";
import BasePage from './pages/base'
import LoadPage from './pages/load'
import SuccessPage from './pages/success'
// import getCookie from "../utils/cookies";
import AjaxManager from '../utils/mixins' ;


class PageManager extends React.Component //+ AjaxManagerMixin
{
    constructor(props) {
        super(props);

        this.state = {
            // default image
            url:'https://images.unsplash.com/photo-1563769874036-8f569cb59d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
            status:200
        }


        this.handleAjaxRequest = (formData) => AjaxManager.handleAjaxRequest(this,formData)
        this.handleAjaxResponse = (response) => AjaxManager.handleAjaxResponse(this, response)
    }


    preloadImage = (url) => new Promise((resolve, reject)=>{
        const imageToPreload = new Image();
        imageToPreload.src = url

        imageToPreload.onload = () => {
            resolve(imageToPreload)
        }
    })

    getBasePage = () => {
        return (<BasePage handleAjaxRequest={this.handleAjaxRequest}/>)
    }

    getLoadPage = () => {
        return (<LoadPage onPageStatusChanged={this.props.onPageStatusChanged} />)
    }

    getSuccessPage = () => {
        if (this.state.status < 300 && this.state.status >=200) {
            return (<SuccessPage url={this.state.url} />)
        }
    }

    render() {
        return (
           <div className="workspace">
          { (this.props.pageStatus === PageStatus.Base)?
                this.getBasePage():
            (this.props.pageStatus === PageStatus.Load)?
                this.getLoadPage():
            (this.props.pageStatus === PageStatus.Success)?
                this.getSuccessPage():"Error 404"
          }
      </div>
        );
    }
}



export default PageManager;