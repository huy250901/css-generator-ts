"use client";
import React, { useEffect, useState } from "react";
import "./Boxshadow.css";
import BoxController from "./BoxController";
import { initialBoxShadow } from "../../components/ValueBoxshadow/ValueBoxshadow";

const BoxShadow = () => {
  const [shadows, setShadows] = useState<any>([]);
  const [data, setData] = useState(initialBoxShadow);

  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [selectedColorChildren, setSelectedColorChildren] = useState("#3d9df6");

  const handleColorChangeChildren = (event: any) => {
    const newColor = event.target.value;
    setSelectedColorChildren(newColor);
  };

  const handleColorChangeBackground = (event: any) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="container_bx">
      <div className="lg:grid lg:grid-cols-2 gap-4 mt-[20px] ">
        <div className="container_bg">
          <BoxController
            setShadows={setShadows}
            data={data}
            setData={setData}
          />
        </div>
        <div className="container_preview">
          <div className="container_1">
            <div className="container_header relative">
              <h2 className="preview p-[18px] font-semibold leading-[24px] text-lg">
                Preview
              </h2>
              <div className="color_picker flex gap-[6px] absolute top-[12px] right-[16px]">
                <div className="color">
                  <input
                    value={selectedColor}
                    onChange={handleColorChangeBackground}
                    type="color"
                    className="color-preview w-[48px] h-[32px] bg-transparent rounded-[3px]"
                  />
                </div>
                <div className="color">
                  <input
                    type="color"
                    className="color-preview w-[48px] h-[32px] bg-transparent rounded-[3px]"
                    onChange={handleColorChangeChildren}
                    value={selectedColorChildren}
                  />
                </div>
              </div>
            </div>
            <div
              style={{ background: selectedColor }}
              className="container_boxshadow p-[40px]"
            >
              <div
                style={{
                  boxShadow: shadows,
                  background: selectedColorChildren,
                }}
                className="box-shadow w-[200px] h-[200px] bg-[#000]"
              ></div>
            </div>
          </div>
          <div className="container_2 mt-[20px]">
            <div className="container_csscode">
              <h2 className="csscode">CSS code</h2>
            </div>
            <div className="container_section p-[20px]">
              <pre className="mt-[14px] mb-[14px] whitespace-pre-wrap">
                <code>box-shadow:{shadows}</code>
              </pre>
            </div>
          </div>
          <div className="container_3 mt-[20px]">
            <div className="container_template">
              <h2 className="template">Template</h2>
            </div>
            <div className="container_box_template">
              <div className="box-template"></div>
              <div className="box-template2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;
