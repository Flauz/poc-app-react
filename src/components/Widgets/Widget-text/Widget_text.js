import React from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';


class Widget_text extends React.Component {


    widget = this.props.state

    dataWidgetText = this.widget.text
    dataWidgetStyle = this.widget.widget_style

    

    render() {
        console.log('WIDGET', this.dataWidgetStyle)
        return (
            <div className='container'>
                <div className="container clearfix">
                <div className={this.dataWidgetStyle}>{ReactHtmlParser(this.dataWidgetText)}</div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateRedux : state 
    }
}

export default connect(mapStateToProps)(Widget_text)