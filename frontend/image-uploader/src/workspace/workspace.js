import React from 'react';
import {PageStatus} from "../utils/enums";
import BasePage from './pages/base'
import LoadPage from './pages/load'
import SuccessPage from './pages/success'
// import getCookie from "../utils/cookies";
import $ from "jquery";

class PageManager extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            url:'https://images.unsplash.com/photo-1563769874036-8f569cb59d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
            status:200,
            isLoaded:false
        }
    }

    handleAjaxRequest = (formData) =>{
        this.props.onPageStatusChanged(PageStatus.Load)
        const self = this;
        $.ajax({
              url: 'http://localhost/api/image',
              method: 'post',
              type:'POST',
              contentType: false,
              processData: false,
              data:formData,

              success: function (data){
                self.handleAjaxResponse({
                    ...data,
                    status:201
                })
                self.preloadImage(self.state.url)
                    .then((imgObject)=>{
                        self.setState({imgObject})
                        setTimeout(self.props.onPageStatusChanged, 500,PageStatus.Success)
                    })
              },
              error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                  alert('Not connect. Verify Network.');
                } else if (jqXHR.status === 404) {
                  alert('Requested page not found (404).');
                } else if (jqXHR.status === 500) {
                  alert('Internal Server Error (500).');
                } else if (exception === 'parsererror') {
                  alert('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                  alert('Time out error.');
                } else if (exception === 'abort') {
                  alert('Ajax request aborted.');
                } else {
                  alert('Uncaught Error. ' + jqXHR.responseText);
                }
              }
        })
        }

    handleAjaxResponse = response => {
        this.setState({
            url: response.url,
            imgObject: null,
            status: response.status,
        })

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