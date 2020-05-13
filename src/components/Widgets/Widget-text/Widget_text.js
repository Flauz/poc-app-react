import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const Widget_text = ({ state }) => {

    const widget = state
    const dataWidgetText = widget.text
    const dataWidgetStyle = widget.widget_style

    return (
        <div className='container'>
            <div className="container clearfix">
                <div className={dataWidgetStyle}>{ReactHtmlParser(dataWidgetText)}</div>
            </div>
        </div>
    )
}

export default Widget_text