import React from 'react';

export default function LoadPage() {
     return [
            <div key={0} className="load__text">Uploading...</div>,
            <div key={1} className="load__panel_background">
                <div className="load__panel">
                </div>
            </div>
        ]
}