import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route} from 'react-router-dom'
import View from "./components/Views/View"
import CallApi from "./CallApi"
import './App.css';

const App = () => {

  const config = useSelector(state => state.ConfigReducer)
  const routes = useSelector(state => state.PagesReducer)
  const root = useSelector(state => state.PagesReducer.pages.pages)
  const dispatch = useDispatch()

  const getData = () => {
    return dispatch => {
      axios.get("http://localhost:3030/config")
      .then(res => 
        dispatch({
          type: 'CONFIG_LOADED',
          config: res.data
        }))

    }
  }

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className="app">
      {!config.isLoaded ? (<div>Loading...</div>) :
        <div className="App">
          
          <CallApi />

          {!routes.isLoaded ? "loading..." :
            <Switch>
              <Route exact path="/" component={() => <View title={root[0].title} json_path={root[0].json_page_path}/>} />
              {root &&
                root.map((route, index) => {
                  return <Route exact key={index} path={route.url} component={() => <View title={route.title} json_path={route.json_page_path} />} />
                })}
            </Switch>
          }
        </div>
      }
    </div>
  );
}

export default App;
