import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const LIBBlock = (props) => {
  const [block, setBlock] = useState(null);
  const [fork, setFork] = useState(null);
  
  useEffect(()=>{}, [])

  props.client.onLIB = async (data) => {
    if (data.block_num % 5 === 0) {
      setBlock(data.block_num)
      console.log("LIB ", data.block_num)
    }
  }
  props.client.onFork = async (data) => {
    console.log("FORK ", data)
  }

  props.client.onData = async (data) => {
    console.log("DATA ", data)
  }

  return (
    <div className="">
      Block: {block}
      Fork: {fork}
  	</div>
  );
};

export default connect(({ router }) => ({
  router
}))(LIBBlock);
