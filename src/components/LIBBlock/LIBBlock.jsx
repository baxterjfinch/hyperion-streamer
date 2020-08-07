import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const LIBBlock = (props) => {
  const [block, setBlock] = useState(null);

  useEffect(()=>{

  }, [])

  props.client.onLIB = async (data) => {
    if (data.block_num % 5 === 0) {
      setBlock(data.block_num)
    }
  }

  return (
    <div className="">
      {block}
  	</div>
  );
};

export default connect(({ router }) => ({
  router
}))(LIBBlock);
