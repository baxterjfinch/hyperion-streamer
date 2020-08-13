import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { WillRoute } from "hocs";
import HomePage from "pages/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.client = props.client;
  }

  componentWillMount() {
    this.client.connect()
  }
  componentDidMount(){
    console.log("App Mounted")
    console.log(this.client)
  }

  render() {

    return (
      <Switch>
        <WillRoute exact path="/" component={HomePage} client={this.client} />
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
