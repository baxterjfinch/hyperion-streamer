import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const DGoodIssuanceNotifier = (props) => {
  const [dgood, setDGood] = useState(null);

  useEffect(()=>{}, [])

  props.client.onData = async (data) => {
    console.log(data)
    setDGood(data)
  }

  return (
    <div className="">
      DGood: {dgood}
  	</div>
  );
};

export default connect(({ router }) => ({
  router
}))(DGoodIssuanceNotifier);
