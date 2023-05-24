import React from "react";

export default function SideBarMenuItem({ text, Icon }) {
  return (
    <div>
      <Icon className="h-7" />
      <span>{text} </span>
    </div>
  );
}
