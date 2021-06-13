import React from "react";
import SellHeader from "./SellHeader";
import Sellinput from "./Sellinput";

function Sell(props) {
  return (
    <div className="sell">

      <SellHeader/>
      <Sellinput props={props} />
    </div>
  );
}

export default Sell;
