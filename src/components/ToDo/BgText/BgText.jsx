import React from "react";

function BgText({text , textSize , paddingX , backGround}) {
  return <div className={`w-fit rounded-md text-white  font-semibold p-1 whitespace-nowrap ${backGround} ${textSize} ${paddingX}` }>{text}</div>;
}

export default BgText;
