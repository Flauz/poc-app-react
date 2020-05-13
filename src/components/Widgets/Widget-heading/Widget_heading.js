import React from 'react'

const Widget_heading = ({ state }) => {

    const widget = state
    const dataWidgetTitle = widget.title
    const dataWidgetWidgetStyle = widget.widget_style
    const dataWidgetSubtitle = widget.subtitle
    const dataWidgetClass = widget.class
    const dataWidgetIntro = widget.intro
    const dataWidgetType = widget.type
    const dataWidgetHeadingType = widget.heading_type
    const dataWidgetAlign = widget.align
    const dataWidgetImage = widget.image

    return (
        <div className={dataWidgetWidgetStyle}>
            <div className={`content-wrap ${dataWidgetClass}`}>
                {dataWidgetType === 'Heading Block' ?
                    <div className="notopborder nomargin">
                        <div className="container clearfix">
                            <div className="heading-block">
                                <h2>{dataWidgetTitle}</h2>
                                {dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}
                            </div>
                            {dataWidgetIntro !== "" && <p>{dataWidgetIntro}</p>}
                        </div>
                    </div>
                    : dataWidgetType === 'Parallax' ?
                        <div className="section parallax dark notopmargin noborder mb-0" data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
                            <div className="container center clearfix">
                                <div className="emphasis-title">
                                    <h2>{dataWidgetTitle}</h2>
                                    {dataWidgetSubtitle !== "" && <p className="lead topmargin-sm">{dataWidgetSubtitle}</p>}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container clearfix">
                            <div className="" >
                                {dataWidgetHeadingType === 'h1' && <h1>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h1>}
                                {dataWidgetHeadingType === 'h2' && <h2>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h2>}
                                {dataWidgetHeadingType === 'h3' && <h3>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h3>}
                                {dataWidgetHeadingType === 'h4' && <h4>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h4>}
                                {dataWidgetHeadingType === 'h5' && <h5>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h5>}
                                {dataWidgetHeadingType === 'h6' && <h6>{dataWidgetTitle}{dataWidgetSubtitle !== "" && <span>{dataWidgetSubtitle}</span>}</h6>}
                            </div>
                            {dataWidgetIntro !== "" && {
                            }}
                        </div>
                }

            </div>
        </div>
    )
}

export default Widget_heading
