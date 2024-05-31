import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="header">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input type="text" />
        <Image src={"/next.svg"} width={50} height={50} />
      </div>
    </nav>
  );
};

export default Header;
