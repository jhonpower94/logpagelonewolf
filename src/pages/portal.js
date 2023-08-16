import { doc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "./portal.scoped.css";
import { db, notifySuccess } from "./servers";

function Portal() {
  const [values, setValues] = useState({
    url: "",
    submited: false,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setValues({ ...values, submited: true });
    const urlRef = doc(db, "pagelink", "Eo2fkLBaiUZPowHcRzPn");
    setDoc(urlRef, { currentlink: values.url }, { merge: true }).then(() => {
      notifySuccess("Link uploaded successfully");
      setValues({ ...values, submited: false });
    });
  };

  useEffect(() => {
    onSnapshot(doc(db, "pagelink", "LbzVoX2SNQS20OtzEfYN"), (doc) => {
      const currentLink = doc.data().currentlink;
      setValues({ ...values, url: currentLink });
    });
  }, []);

  return (
    <div className="container">
      <form onSubmit={submit}>
        <label className="pos-label pos-label--block required" htmlFor="urlinput">
          Url address
        </label>
        <input
          id="urlinput"
          type="text"
          name="url"
          onChange={handleChange}
          defaultValue={values.url}
          required
        />
        <button
          type="submit"
          id="submitBtn"
          className="pos-button pos-button--cta pos-button--block a-mb-space-2"
          disabled={values.submited}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Portal;
