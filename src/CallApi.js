import React, { useState } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import { connect } from 'react-redux'



const CallApi = () => {

    const [pages, setPages] = useState([])
    const [isLoaded, setIsloaded] = useState(false)

    getPages = () => {
        axios.get(this.props.config)
            .then(result => { this.setState({ pages: result.data, isLoaded: true }) })
    }

    pagesToStore = () => {
        const action = { type: 'PAGES_LOADED', value: pages,isLoaded }
        this.props.dispatch(action)
    }

    this.pagesToStore()
}

const mapStateToProps = state => {
    return {
        config: state.ConfigReducer.config.json_files.pages,
        menu: state.PagesReducer
    }
}

export default withRouter(connect(mapStateToProps)(CallApi))