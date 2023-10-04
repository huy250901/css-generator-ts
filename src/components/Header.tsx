import Link from "next/link";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="container_box">
        <Link href="/Box-shadow">Box shadow</Link>
        <Link href={"Text-shadow"}>Text shadow</Link>
        <Link href={"border"}>Border</Link>
        <Link href={"box-shadow"}>Tranforms</Link>
        <Link href={"box-shadow"}>Gradient</Link>
      </div>
    </div>
  );
};

export default Header;
