import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LIBBlock } from "components";

const Header = (props) => {
  const [block, setBlock] = useState(null);

  useEffect(()=>{}, [])

  return (
    <>
      <LIBBlock client={props.client}/>
    </>
  );
};

export default connect(({ router }) => ({
  router
}))(Header);
