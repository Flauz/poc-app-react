import React, { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Widget_heading from "../Widgets/Widget-heading/Widget_heading"
import Widget_text from "../Widgets/Widget-text/Widget_text"
import Header from "../Widgets/Header/Header"


var widgetText = null
var widgetHeading = null

const View = ({ title, json_path }) => {

    const menus = useSelector(state => state.PagesReducer)
    const widgets = useSelector(state => state.ViewReducer)
    const dispatch = useDispatch()

    const getView = () => {
        return dispatch => {
            axios.get(json_path)
                .then(res =>
                    dispatch({
                        type: 'VIEW_LOADED',
                        view: res.data
                    }))
        }
    }

    useEffect(() => {
        dispatch(getView())
    }, [])

    return (
        <>
            {!widgets.isLoaded ? "" :
                <div>
                    {/* TODO */}
                    {widgetText = widgets.view.widgets[2],
                        widgetHeading = widgets.view.widgets[1], console.log()}
                    <Header />
                    {widgetHeading &&
                        <Widget_heading state={widgetHeading} />}
                    {widgetText &&
                        <Widget_text state={widgetText} />}
                    <h1>{title}</h1>
                    <div>{json_path}</div>

                </div>
            }
        </>
    )
}

export default View