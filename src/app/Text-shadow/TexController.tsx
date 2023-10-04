"use client";
import "./Textshadow.css";
import React, { useEffect, useState } from "react";
import { TextShadow } from "@/types/type";
import ListItem from "../../components/ListItem/ListItem";

export function hexToRgba(hex: string, alpha: number) {
  const hexColor = hex.replace("#", "");
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
}

export interface updateShadow {
  setShadows: (s: any) => void;
  data: any;
  setData: React.Dispatch<React.SetStateAction<TextShadow[]>>;
}

const TextController = ({ setShadows, data, setData }: updateShadow) => {
  const [editData, setEditData] = useState<any>();
  const [formData, setFormData] = useState(data[0]);
  const [count, setCount] = useState(data.length);

  useEffect(() => {
    if (editData) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        shiftRight: editData.shiftRight,
        shiftDown: editData.shiftDown,
        // spread: editData.spread,
        blur: editData.blur,
        opacity: editData.opacity,
        color: editData.color,
        // inset: editData.inset,
        id: editData.id,
      }));
    } else {
      setEditData(data[0]);
    }
  }, [editData]);

  useEffect(() => {
    const textShadowString = data
      .map((item: any) => {
        const { shiftRight, shiftDown, blur, color, opacity, inset } = item;
        const colorWithOpacity = hexToRgba(color, opacity);
        const insetString = inset
          ? `inset ${shiftRight}px ${shiftDown}px ${blur}px `
          : `${shiftRight}px ${shiftDown}px ${blur}px `;
        return ` ${insetString} ${colorWithOpacity}`;
      })
      .join(",");
    console.log(textShadowString);
    setShadows(textShadowString);
  }, [data, formData]);

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedFormData);

    if (editData) {
      const updatedData = data.map((item: any) => {
        if (item.id === editData.id) {
          return { ...item, ...updatedFormData };
        }
        return item;
      });
      setData(updatedData);
    }
  };

  const addShadow = () => {
    const newData: TextShadow = {
      id: count,
      shiftRight: 0,
      shiftDown: 0,
      blur: 3,
      opacity: 20,
      color: "#000000",
    };
    setData((prevData: any) => [...prevData, newData]);
    setCount(count + 1);
  };

  return (
    <>
      <div className="container2">
        <div className="header">
          <b>Text-Shadow CSS Generator</b>
        </div>
        <div className="space-y-4 text-[14px]">
          <div className="flex  flex-col gap-4">
            <label htmlFor="shiftRight" className="w-1/3">
              Shift right
            </label>
            <input
              type="range"
              id="shiftRight"
              name="shiftRight"
              min={-50}
              max={50}
              step={1}
              className=""
              value={formData.shiftRight}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.shiftRight}</span>
          </div>
          <div className="flex  flex-col gap-4">
            <label htmlFor="shiftDown" className="w-1/3">
              Shift down
            </label>
            <input
              type="range"
              id="shiftDown"
              name="shiftDown"
              min={-50}
              max={50}
              step={1}
              className=""
              value={formData.shiftDown}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.shiftDown}</span>
          </div>
          <div className="flex  flex-col gap-4">
            <label htmlFor="blur" className="w-1/3">
              Blur
            </label>
            <input
              type="range"
              id="blur"
              name="blur"
              min={0}
              max={100}
              step={1}
              className=""
              value={formData.blur}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.blur}</span>
          </div>
          <div className="flex  flex-col gap-4">
            <label htmlFor="opacity" className="w-1/3">
              Opacity
            </label>
            <input
              type="range"
              id="opacity"
              name="opacity"
              min={0}
              max={100}
              step={1}
              className=""
              value={formData.opacity}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.opacity}</span>
          </div>
          <div className="color_shadow">
            <input
              type="color"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="container_3 p-[20px] bg-[#fff]">
        <button className="button_add" onClick={addShadow}>
          <span>Add Layer</span>
        </button>
        <div className="listitem mt-[20px]">
          {data.map((e: any, index: number) => (
            <ListItem
              key={index}
              shadow={e}
              formData={formData}
              data={data}
              setData={setData}
              setEditData={setEditData}
              type="text"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TextController;
