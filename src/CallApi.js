import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'


const CallApi = () => {

    const config = useSelector(state => state.ConfigReducer.config.json_files.pages)
    const dispatch = useDispatch()

    const getPages = () => {
        return dispatch => {
            axios.get(config)
                .then(res =>
                    dispatch({
                        type: 'PAGES_LOADED',
                        pages: res.data
                    })
                )
        }
    }
    
    useEffect(() => {
        dispatch(getPages())
    }, [])

    return null
}

export default CallApi