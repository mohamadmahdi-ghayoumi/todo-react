import React from "react";
import BgText from "./BgText/BgText";
import RowList from "./RowList/RowList";

function ToDo() {
  return (
    <div className="flex flex-col gap-3 w-fit h-[50%]  rounded-3xl m-auto bg-slate-500 justify-center">
      <p className="font-bold text-2xl mb-2">ToDo List</p>
      <RowList
        numberTask={"Task1"}
        bgText={"Hight"}
        backGround={"bg-red-500"}
      />
      <hr />
      <RowList
        numberTask={"Task2"}
        bgText={"Medium"}
        backGround={"bg-yellow-500"}
      />
      <hr />

      <RowList
        numberTask={"Task3"}
        bgText={"Low"}
        backGround={"bg-green-500"}
      />
      <hr />

      <RowList
        numberTask={"Task4"}
        bgText={"Hight"}
        backGround={"bg-red-500"}
      />

      <div className="flex mt-3 w-[50%]">
        <input type="text" name="" id="" placeholder="Task name" className="w-full pl-1 outline-none"/>
        <select name="" id="" className="font-semibold text-lg">
          <option value="Hight">Hight</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <BgText
          backGround={"bg-green-400"}
          text={"Add Task"}
          textSize={"text-xl"}
        />
      </div>
    </div>
  );
}

export default ToDo;
