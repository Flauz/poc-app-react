import React from 'react'
import { connect } from 'react-redux'


class Widget_heading extends React.Component {

    widget = this.props.state

    dataWidgetTitle = this.widget.title
    dataWidgetWidgetStyle = this.widget.widget_style
    dataWidgetSubtitle = this.widget.subtitle
    dataWidgetClass = this.widget.class
    dataWidgetIntro = this.widget.intro
    dataWidgetType = this.widget.type
    dataWidgetHeadingType = this.widget.heading_type
    dataWidgetAlign = this.widget.align
    dataWidgetImage = this.widget.image

    render() {
        return (
            <div className={this.dataWidgetWidgetStyle}>
                <div className={`content-wrap ${this.dataWidgetClass}`}>
                        {this.dataWidgetType === 'Heading Block' ? 
                            <div className="notopborder nomargin">
                                <div className="container clearfix">
                                    <div className="heading-block">
                                        <h2>{this.dataWidgetTitle}</h2>
                                        {this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}
                                    </div>
                                    {this.dataWidgetIntro !== "" && <p>{this.dataWidgetIntro}</p>}
                                </div>
                            </div>
                        : this.dataWidgetType === 'Parallax' ?
                            <div className="section parallax dark notopmargin noborder mb-0" data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
                                <div className="container center clearfix">
                                    <div className="emphasis-title">
                                        <h2>{this.dataWidgetTitle}</h2>
                                        {this.dataWidgetSubtitle !== "" && <p className="lead topmargin-sm">{this.dataWidgetSubtitle}</p>}
                                    </div>
                                </div>
                            </div>
                        :
                            <div className="container clearfix">
                                <div className="" >
                                    {this.dataWidgetHeadingType === 'h1' && <h1>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h1>}
                                    {this.dataWidgetHeadingType === 'h2' && <h2>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h2>}
                                    {this.dataWidgetHeadingType === 'h3' && <h3>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h3>}
                                    {this.dataWidgetHeadingType === 'h4' && <h4>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h4>}
                                    {this.dataWidgetHeadingType === 'h5' && <h5>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h5>}
                                    {this.dataWidgetHeadingType === 'h6' && <h6>{this.dataWidgetTitle}{this.dataWidgetSubtitle !== "" && <span>{this.dataWidgetSubtitle}</span>}</h6>}
                                </div>
                                {this.dataWidgetIntro !== "" && {
                                }}
                            </div>
                        }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateRedux: state.ViewReducer
    }
}

export default connect(mapStateToProps)(Widget_heading)
