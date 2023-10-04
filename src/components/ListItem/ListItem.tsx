import { Dragicon, Deleteicon, Editicon } from "@/icons/icons";
import React, { useState } from "react";
import "./ListItem.css";

const ListItem = ({
  shadow,
  formData,
  setEditData,
  data,
  setData,
  type,
}: any) => {
  const handleEditClick = (item: any) => {
    setEditData(item);
  };

  const displayProperties = formData?.id === shadow?.id ? formData : shadow;

  const onDelete = (id: number) => {
    const updatedData = data.filter((item: any) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div
      draggable
      key={shadow?.id}
      onClick={() => handleEditClick(shadow)}
      className={`layer flex justify-between p-3 cursor-move 
      ${
        formData?.id === shadow?.id
          ? "bg-[#5c6ac4] text-[#fff]"
          : "bg-[#afafaf] text-[#000]"
      } 
      mb-3 `}
    >
      <div className="add_layer">
        <div className="layer-current w-[20px] mr-[8px]">
          <Dragicon />
        </div>
        <div>
          {type === "box"
            ? displayProperties?.inset
              ? `inset ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.spread}px ${displayProperties?.opacity}px ${displayProperties?.color}`
              : ` ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.spread}px ${displayProperties?.opacity}px ${displayProperties?.color}`
            : `${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.opacity}px ${displayProperties?.color}`}
        </div>
      </div>
      <button className="icon flex gap-[10px]">
        <Editicon />
        {/* </button> */}
        {/* <button className="icon"> */}
        <Deleteicon onClick={() => onDelete(shadow.id)} />
      </button>
    </div>
  );
};

export default ListItem;
