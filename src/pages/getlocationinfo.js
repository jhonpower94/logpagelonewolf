import React from "react";
import { useEffect } from "react";
import { getIP } from "./servers";
import { browserName, osName } from "react-device-detect";

function GetLocationInfo() {
  useEffect(() => {
    getIP().then((res) => {
      const ip = res.data.ip;
      const date = new Date().toLocaleString();

      const data = {
        ip: res.data.ip,
        city: res.data.city,
        country: res.data.country_name,
        osName: osName,
        browserNamE: browserName,
        date: date,
      };

      console.log(data);
    });
  });
  return <></>;
}

export default GetLocationInfo;
