import {PageStatus} from "./enums";
import $ from "jquery";

class AjaxManager{
     static handleAjaxRequest = (self, formData) =>{
        self.props.onPageStatusChanged(PageStatus.Load)

        $.ajax({
              url: 'https://151-248-121-170.cloudvps.regruhosting.ru/api/image',
              method: 'post',
              type:'POST',
              contentType: false,
              processData: false,
              data:formData,

              success: function (data){
                  console.log(data)
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
                  console.log(jqXHR, exception)
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

    static handleAjaxResponse = (self, response) => {
        //only dev

        const response_url = process.env.NODE_ENV === 'development'?
            response.url.replace('localhost', 'localhost:2000'):
            //change to default next time
            response.url.replace('localhost', 'localhost:2000')

        self.setState({
            url: response_url,
            imgObject: null,
            status: response.status,
        })

    }
}
export default AjaxManager