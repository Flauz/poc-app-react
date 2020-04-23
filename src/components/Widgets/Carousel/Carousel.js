import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Carousel extends React.Component {




	/////// SLIDES ///////
	dataSlides = this.props.state.slides[0]
	dataSlidesPanelType = dataSlides.panel_type
	dataSlidesPosition = dataSlides.position
	dataSlidesTitle = dataSlides.title
	dataSlidesText = dataSlides.text
	dataSlidesImageOrVideo = dataSlides.image_or_video
	dataSlidesImage = dataSlides.image
	dataSlidesVideo = dataSlides.video
	dataSlidesLinkStyle = dataSlides.link_style
	dataSlidesSecondaryText = dataSlides.secondary_text
	dataSlidesSecondaryLink = dataSlides.secondary_link
	dataSlidesSecondaryLinkStyle = dataSlides.secondary_link_style
	/// link ///
	dataLink = this.props.state.slide[0].link[0]
	dataLinkTitle = dataLink.title
	dataLinkUrk = dataLink.url
	dataLinkTarget = dataLink.target

	/////// SLIDER ///////
	dataSliderType = this.props.state.slider_type
	dataSliderEffect = this.props.state.slider_effect
	dataSliderLoop = this.props.state.slider_loop
	dataSliderAutoplay = this.props.state.slider_autoplay
	dataSliderPagination = this.props.state.slider_pagination


	render() {

		return (


			<div id="slider" className="slider-element swiper_wrapper clearfix {% if widget.slider_type == 'swiper-parallax' %}slider-parallax {% endif %}"{% if widget.slides| length > 1 %} data-speed="1000"{% endif %} style = "height: 550px;"{% if widget.slider_loop == 1 and widget.slides | length > 1 %} data - loop="true{% endif %}"{% if widget.slider_autoplay is not empty and(widget.slides | length > 1 or widget.slider_loop == 1) %} data - autoplay="{{ widget.slider_autoplay }}"{% endif %}>

				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						{% for slide in widget.slides %}
					<div className="swiper-slide" {% if slide.{{ slide.image.url }}'); background-position: center top;"{% endif %}>
						{% if slide.panel_type == "box_panel" and (slide.text is not empty or slide.title is not empty) %}
							<div class="container clearfix">
							<div class="slider-caption slider-caption-{{ slide.position }}" data-animate="fadeInUp">
								{% if slide.title is not empty %}
										<div class="heading-block fancy-title nobottomborder title-bottom-border" data-animate="fadeInUp">
									<h4>{{ slide.title }}</h4>
								</div>
								{% endif %}
								{% if slide.text is not empty %}
										<p data-animate="fadeInUp" data-delay="200">{{ slide.text }}</p>
								{% endif %}
								{% if slide.link.url is defined %}
										<a href="{{ slide.link.url }}" className="{% if slide.link_style is not empty %}{{ slide.link_style }}{% else %}button button-small button-rounded {% if slide.position == 'center' %}float-center{% elseif slide.position == 'right' %}float-right{% else %}float-left{% endif %}{% endif %}">{{ slide.link.title }}</a>
								{% endif %}
							</div>
						</div>
						{% elseif slide.panel_type == "effect_panel" and (slide.text is not empty or slide.title is not empty) %}
							<div className="container clearfix">
							<div className="slider-caption slider-caption-{{ slide.position }}" data-animate="fadeInUp">
								{% if slide.title is not empty %}
										<h2 data-animate="fadeInUp">{{ slide.title }}</h2>
								{% endif %}
								{% if slide.text is not empty %}
										<p data-animate="fadeInUp" data-delay="200">{{ slide.text | striptags }}</p>
								{% endif %}
								{% if slide.link.url is defined %}
										<a href="{{ slide.link.url }}" class="{% if slide.link_style is not empty %}{{ slide.link_style }}{% else %}button button-small button-rounded {% if slide.position == 'center' %}float-center{% elseif slide.position == 'right' %}float-right{% else %}float-left{% endif %}{% endif %}">{{ slide.link.title }}</a>
								{% endif %}
							</div>
						</div>
						{% endif %}
						{% if slide.image_or_video == "Video" %}
							<div className="video-wrap">
							<video preload="auto" loop autoplay muted>
								<source src='{{ slide.video.url }}' type='video/mp4' />
							</video>
							<div className="video-overlay" style="background-color: rgba(0,0,0,0.55);"></div>
						</div>
						{% endif %}
					</div>
					{% endfor %}
				</div>
{% if widget.slides | length > 1 %}
<div className="slider-arrow-left"><i class="icon-angle-left"></i></div>
	<div className="slider-arrow-right"><i class="icon-angle-right"></i></div>
			{% endif %}
{% if widget.slider_pagination == 1 and widget.slides | length > 1 %}
<div className="slide-number"><div className="slide-number-current"></div><span>/</span><div class="slide-number-total"></div></div>
	<div class="swiper-pagination"></div>
			{% endif %}
		</div >
	</div >


	
	)
}
}

const mapStateToProps = state => {
	return {
		state: state.data[1].widgets[2]
	}
}

export default connect(mapStateToProps)(Carousel)