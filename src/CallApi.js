import React from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import { connect } from 'react-redux'



class CallApi extends React.Component {

    state = {
        pages: [],
        isLoaded: false,
    }

    getPages = () => {
        axios.get(this.props.config)
            .then(result => { this.setState({ pages: result.data, isLoaded: true }) })
    }

    pagesToStore = () => {
        const action = { type: 'PAGES_LOADED', value: this.state }
        this.props.dispatch(action)
    }

    componentDidMount() {
        this.getPages()
    }

    render() {

        this.pagesToStore()

        return null
    }
}

const mapStateToProps = state => {
    return {
        config: state.ConfigReducer.config.json_files.pages,
        menu: state.PagesReducer
    }
}

export default withRouter(connect(mapStateToProps)(CallApi))