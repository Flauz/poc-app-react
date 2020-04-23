import React from 'react';
import axios from "axios"
import { connect } from "react-redux"
import { Switch, Route, withRouter } from 'react-router-dom'
import View from "./components/Views/View"
import CallApi from "./CallApi"
import './App.css';


var routes = null


class App extends React.Component {

  state = {
    config: [],
    isLoaded: false
  }

  getData = () => {
    axios.get("http://localhost:3030/config")
      .then(result => { this.setState({ config: result.data, isLoaded: true }) })
  }

  dataToStore = () => {
    const action = { type: 'CONFIG_LOADED', value: this.state }
    this.props.dispatch(action)
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    this.dataToStore()

    routes = this.props.routes.pages.pages

    return (
      <div className="app">
        {!this.props.config.isLoaded ? (<div>Loading...</div>) :
          <div className="App">

            <CallApi/>

            {!this.props.routes.isLoaded ? "loading..." :
              <Switch>
                {console.log('LES ROUTES C ICI :', routes[0])}
                <Route exact path="/" component={() => <View json_path={routes[0].json_page_path}/>} />
                {routes &&
                  routes.map((route, index) => {
                    console.log("ICI BATARD :",route.url, route.component,route.title, route.json_page_path, index)
                    return <Route exact key={index} path={route.url} component={() => <View title={route.title} json_path={route.json_page_path} />} />
                  })}
              </Switch>
            }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.ConfigReducer,
    routes: state.PagesReducer
  }
}

export default withRouter(connect(mapStateToProps)(App));
