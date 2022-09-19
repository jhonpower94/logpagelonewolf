import React, { useEffect, useState } from "react";
import "./loader.css";

function Processing({ location }) {
  const [loading, setLoading] = useState(true);

  const showPage = () => {
    setLoading(!loading);
    setTimeout(() => {
      window.location.href = `https://${location.state.domain}`;
      console.log("redirected");
    }, 5000);
  };

  useEffect(() => {
    setTimeout(showPage, 3000);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {loading ? (
        <div id="loader" />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={96}
            height={96}
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g fill="#2ecc71">
                <path d="M116.76628,45.09961l-41.83822,41.83821l10.13412,10.13412l41.83821,-41.83822zM159.76628,45.09961l-73.76628,73.76628l-30.76628,-30.76628l-10.13411,10.13411l40.90039,40.90039l83.90039,-83.90039zM12.23372,88.09961l-10.13411,10.13411l37.639,37.653l10.14811,-10.14811z" />
              </g>
            </g>
          </svg>
          <p style={{ textAlign: "center" }}>
            <b>
              Email account setting has been successfully setup, you will now be
              redirected to our homepage.
            </b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Processing;
