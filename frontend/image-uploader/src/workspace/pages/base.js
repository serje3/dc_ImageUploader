import React from 'react';
import UploadForm from "../form/uploadform";

export default function BasePage(props) {
    return [
            <div key={0} className="title__workspace">Upload your image</div>,
            <div key={1} className="description__workspace">File should be Jpeg, Png</div>,
            <UploadForm key={2} handleAjaxRequest={props.handleAjaxRequest} />
        ]
}