import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DGoodIssuanceNotifier } from "components";

const InfoCard = (props) => {
  console.log("HEADER PROPS", props)


  return (
    <>
      <DGoodIssuanceNotifier client={props.client}/>
    </>
  );
};

export default connect(({ router }) => ({
  router
}))(InfoCard);
