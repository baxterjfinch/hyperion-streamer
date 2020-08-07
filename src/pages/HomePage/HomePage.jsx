import { connect } from 'react-redux';
import React, { Component } from "react";
import {push} from "connected-react-router";

import { Header } from "components";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
  render() {
    return (
      <>
				<Header client={this.props.client} />
			</>
    );
  }
}

export default connect(({ router }) => ({
			router
		}),
		{
			push
		}
)(HomePage);
