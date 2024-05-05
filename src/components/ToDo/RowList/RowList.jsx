import React from 'react'
import BgText from '../BgText/BgText'

function RowList({numberTask, bgText ,backGround}) {
  return (
    
    <div className="flex justify-between ml-2 ">
<div className="flex gap-2 items-center">
<input type="checkbox" className="w-5 h-5" /> 
<p className="text-xl font-medium ">{numberTask}</p>
<BgText text={bgText} textSize= {"text-xs"} paddingX={"px-2"} backGround={backGround}/>
</div>

<BgText text={"Delete"} textSize={"text-lg"} backGround={"bg-red-500"} />
    </div>  )
}

export default RowList