import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { CSVLink } from "react-csv";

const headers = [
  { label: "email", key: "email" },
  { label: "id", key: "id" },
];

var CryptoJS = require("crypto-js");

function Encryption() {
  const [value, setValue] = React.useState("");
  const [isdisabled, setDisabled] = React.useState(true);

  const [encrypted, setEncrypted] = React.useState([]);

  const [count, setCount] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleClick() {
    const newLine = value.split(/\s+/);

    // console.log(newLine.length);
    setCount(newLine.length);

    for (var email of newLine) {
      var id = CryptoJS.AES.encrypt(email, "ghost94").toString();
      console.log(email);
      encrypted.push({ email: email, id: id });
    }
  }

  return (
    <React.Fragment>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="../encryp.css" />
      </Helmet>
      <div style={{ margin: 50 }}>
        <h3> Encrypt email and download csv for mailer </h3>
        <div style={{ marginTop: 60 }}>
          <div style={{ display: "flex" }}>
            <div>
              <textarea
                value={value}
                rows="30"
                cols="50"
                onChange={handleChange}
              />
            </div>

            <div style={{ paddingLeft: 50 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div id="count">
                  <p>
                    <b>{`${encrypted.length} / ${count} `}</b>encrypted
                  </p>
                </div>
                <div id="actions">
                  <button className="button" onClick={handleClick}>
                    Encrypt
                  </button>

                  <CSVLink
                    data={encrypted}
                    headers={headers}
                    className="button button2"
                  >
                    Download CSV
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Encryption;
