import React, { Component } from "react";
import { withRouter } from "react-router";

class App extends Component {
  componentDidMount(){
    console.log("Mounted")
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

export default (App);
