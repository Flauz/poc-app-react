import React from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';


class Widget_heading extends React.Component {

    dataWidgetTitle = this.props.state.title
    dataWidgetWidgetStyle = this.props.state.widget_style
    dataWidgetSubtitle = this.props.state.subtitle
    dataWidgetClass = this.props.state.class
    dataWidgetIntro = this.props.state.intro
    dataWidgetType = this.props.state.type
    dataWidgetHeadingType = this.props.state.heading_type
    dataWidgetAlign = this.props.state.align
    dataWidgetImage = this.props.state.image

    render() {
        console.log('WIDGET', this.props.state)
        return (
            <div className={this.dataWidgetWidgetStyle}>

                <div className={`content-wrap ${this.dataWidgetClass}`}>
                    if({this.dataWidgetType === 'Heading Block'}) {
                        <div className="notopborder nomargin">
                            <div className="container clearfix">
                                <div className="heading-block">
                                    <h2>{this.dataWidgetTitle}</h2>
                                    if({this.dataWidgetSubtitle} != "") {<span>{this.dataWidgetSubtitle}</span>}
                                </div>
                                if({this.dataWidgetIntro} != "") {<p>{this.dataWidgetIntro}</p>}
                            </div>
                        </div>
                    } else if ({this.dataWidgetType === 'Parallax'}) {
                        <div className="section parallax dark notopmargin noborder mb-0" style="padding: 80px 0; background-image: url({{ widget.image.url }});" data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
                            <div className="container center clearfix">
                                <div className="emphasis-title">
                                    <h2>{this.dataWidgetTitle}</h2>
                                    if({this.dataWidgetSubtitle} != "") {<p className="lead topmargin-sm">{this.dataWidgetSubtitle}</p>}
                                </div>
                            </div>
                        </div>
                    } else {
                        <div className="container clearfix">
                            <div className="" >
                                if({this.dataWidgetHeadingType} == 'h1') {<h1>}
                                if({this.dataWidgetHeadingType} == 'h2') {<h2>}
                                if({this.dataWidgetHeadingType} == 'h3') {<h3>}
                                if({this.dataWidgetHeadingType} == 'h4') {<h4>}
                                if({this.dataWidgetHeadingType} == 'h5') {<h5>}
                                if({this.dataWidgetHeadingType} == 'h6') {<h6>}

                                {this.dataWidgetTitle}

                                if({this.dataWidgetSubtitle} != "") {<span>{this.dataWidgetSubtitle}</span>}

                                if({this.dataWidgetHeadingType} == 'h1') {<h1>}
                                if({this.dataWidgetHeadingType} == 'h2') {<h2>}
                                if({this.dataWidgetHeadingType} == 'h3') {<h3>}
                                if({this.dataWidgetHeadingType} == 'h4') {<h4>}
                                if({this.dataWidgetHeadingType} == 'h5') {<h5>}
                                if({this.dataWidgetHeadingType} == 'h6') {<h6>}
                            </div>

                            if({this.dataWidgetIntro} != "") {
                            }
                        </div>
                    }
                </div>
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        state : state.data[1].widgets[0]
    }
}

export default connect(mapStateToProps)(Widget_text)
