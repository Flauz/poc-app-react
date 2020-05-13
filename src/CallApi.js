import React, { useState } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'


const CallApi = () => {

    const config = useSelector(state => state.ConfigReducer.config.json_files.pages)
    const dispatch = useDispatch()

    getPages = () => {
        return dispatch => {
            axios.get(config)
                .then(res =>
                    dispatch({
                        type: 'PAGES_LOADED',
                        pages: res.pages
                    })
                )
        }
    }
    
    useEffect(() => {
        dispatch(getPages())
    }, [])
}

export default CallApi