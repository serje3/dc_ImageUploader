import React from 'react';
import success_img from '../../img/svg/check_circle_black_24dp.svg'

class SuccessPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            url: props.url
        }
    }

    componentDidMount() {
        //copy_button functionality
        const copyButton = document.querySelector('#copy_button')
        const linkText = document.getElementById('link_text')
        copyButton.onclick = ()=> {
            linkText.select()
            document.execCommand('copy')
        }
    }

    render() {
        return [
                <img key={0} src={success_img} className="success_img__workspace" alt="success_img__workspace"/>,
                <div key={1} className="success_text__workspace">Uploaded Successfully!</div>,
                <img key={2} src={this.state.url} className='image_preview__workspace' alt='preview'/>,
                <div key={3} className="link_container__workspace">
                    <input type='text' id='link_text' className="link_text__workspace" defaultValue={this.state.url} />
                    <div id='copy_button' className="copy_button__workspace">Copy Link</div>
                </div>
                ]
    }
}

export default SuccessPage