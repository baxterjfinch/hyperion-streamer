import { connect } from 'react-redux';
import React, { Component } from "react";

import {push} from "connected-react-router";

class HomePage extends Component {
	constructor(props) {
		super(props);


	}



  render() {
    return (
      <>
				doop
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
