import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { WillRoute } from "hocs";
import HomePage from "pages/HomePage";

class App extends Component {
  componentWillMount() {
    console.log("WILL MOUNT")

  }
  componentDidMount(){
    console.log(this.props)
  }

  render() {
    console.log("REDNERING HERE")
    return (
      <Switch>
        <WillRoute exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default withRouter(
  connect(
    ({ endpoint, router }) => ({
      endpoint,
      router
    }),
    {
    }
  )(App)
);
