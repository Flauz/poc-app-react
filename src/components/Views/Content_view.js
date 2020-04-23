import React from 'react'
import Widget_heading from '../Widgets/Widget-heading/Widget_heading'
import Widget_text from '../Widgets/Widget-text/Widget_text'

class Content_view extends React.Component {
    render(){
        return(
            <>
            <Widget_heading/>
            <Widget_text/>
            </>
        )
    }
}

export default Content_view