import React from "react";
export default function UIButton({ children, onClick }:{ children: React.ReactNode; onClick?:()=>void }){
  return <button className="btn" onClick={onClick}>{children}</button>;
}
