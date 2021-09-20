import React from 'react';
import UploadForm from "../form/uploadform";

export default function BasePage(props) {
    return [
            <div className="title__workspace">Upload your image</div>,
            <div className="description__workspace">File should be Jpeg, Png</div>,
            <UploadForm handleAjaxRequest={props.handleAjaxRequest} />
        ]
}