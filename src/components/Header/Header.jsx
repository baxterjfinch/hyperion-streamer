import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LIBBlock } from "components";

const Header = (props) => {
  const [online, setOnline] = useState(null);

  useEffect(()=>{}, [])

  return (
    <>

      {console.log(props.client)}
      <LIBBlock client={props.client}/>
    </>
  );
};

export default connect(({ router }) => ({
  router
}))(Header);
