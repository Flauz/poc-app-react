import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import Widget_heading from "../Widgets/Widget-heading/Widget_heading"
import Widget_text from "../Widgets/Widget-text/Widget_text"
import Header from "../Widgets/Header/Header"

var widgets = null
var widgetHeading = null

class View extends React.Component {
    state = {
        view: {},
        isLoaded: false
    }

    title = this.props.title
    json_path = this.props.json_path

    getView = () => {
        axios.get(this.json_path)
            .then(result => { this.setState({ view: result.data, isLoaded: true }) })
    }

    viewToStore = () => {
        const action = { type: 'VIEW_LOADED', value: this.state }
        this.props.dispatch(action)
    }

    componentDidMount() {
        this.getView()
    }

    render() {

        this.viewToStore()

        return (
            <>
                {!this.props.widgets.isLoaded ? "" :
                    <div>
                    {console.log('YEYEYE', this.props.widgets)}
                        {widgets = this.props.widgets.view.widgets[2],
                        widgetHeading = this.props.widgets.view.widgets[1],
                        console.log("YAYAYAYAY: ", widgets)}
                        <Header />
                        {widgetHeading &&
                        <Widget_heading state={widgetHeading}/>}
                        {widgets &&
                        <Widget_text state={widgets}/>}
                        <h1>{this.title}</h1>
                        <div>{this.json_path}</div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        menu: state.PagesReducer,
        widgets: state.ViewReducer
    }
}

export default connect(mapStateToProps)(View)