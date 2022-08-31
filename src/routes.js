/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import PasswordGenerator from "views/security/PasswordGenerator.js";
import Base64 from "views/developer/Base64.js";
import Jwt from "views/developer/Jwt.js";
import Json from "views/developer/Json.js";
import Home from "views/Home.js";
import Timestamp from "views/developer/Timestamp.js";
import TextCounter from "views/text/TextCounter.js";
import CaseConverter from "views/text/CaseConverter.js";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-istanbul",
    component: Home,
    layout: "/tools",
  },
  {
    collapse: true,
    name: "Developer",
    icon: "tim-icons icon-html5",
    iconclass: "info-icon text-center icon-default",
    state: "developerCollapse",
    views: [
      {

        id: "view_1",
        path: "/encodig",
        name: "Base64",
        subname: "Decode & Encode",
        mini: "B64",
        component: Base64,
        layout: "/tools",
      },
      {
        id: "view_2",
        path: "/jwt",
        name: "JWT",
        subname: "Decode",
        mini: "JW",
        component: Jwt,
        layout: "/tools",
      },
      {
        id: "view_3",
        path: "/json",
        name: "JSON Viewer",
        subname: "Stringify",
        mini: "JS",
        component: Json,
        layout: "/tools",
      },
      {
        id: "view_4",
        path: "/timestamp",
        name: "Timestamp Converter",
        subname: "Epoch",
        mini: "TS",
        component: Timestamp,
        layout: "/tools",
      },
    ],
  },
  {
    collapse: true,
    name: "Text",
    icon: "tim-icons icon-caps-small",
    iconclass: "info-icon text-center icon-default",
    state: "textCollapse",
    views: [
      {
        id: "view_5",
        path: "/textcounter",
        name: "Characters Calculator",
        subname: "Online",
        mini: "TC",
        component: TextCounter,
        layout: "/tools",
      },
      {
        id: "view_6",
        path: "/caseconverter",
        name: "Case Converter",
        subname: "Online",
        mini: "CC",
        component: CaseConverter,
        layout: "/tools",
      }
    ],
  },
  {
    collapse: true,
    name: "Security",
    icon: "tim-icons icon-key-25",
    iconclass: "info-icon text-center icon-default",
    state: "passwordCollapse",
    views: [
      {
        id: "view_7",
        path: "/passgen",
        name: "Password Generator",
        subname: "Security",
        mini: "PG",
        component: PasswordGenerator,
        layout: "/tools",
      },
    ],
  },
  /* {
    collapse: true,
    name: "SEO",
    icon: "tim-icons icon-planet",
    iconclass: "info-icon text-center icon-success",
    state: "seoCollapse",
    views: [
      {
        path: "/keywordresearch",
        name: "Keywords",
        subname: "Research",
        mini: "KR",
        component: Pricing,
        layout: "/tools",
      },
      {
        path: "/sitespeed",
        name: "Site Speed",
        subname: "Web",
        mini: "SS",
        component: SiteSpeed,
        layout: "/tools",
      },
      {
        path: "/rankchecking",
        name: "Rank Checking",
        subname: "Web Site",
        mini: "RC",
        component: Pricing,
        layout: "/tools",
      },
      {
        path: "/siteanalytics",
        name: "Site Analitycs",
        subname: "Web",
        mini: "SA",
        component: Pricing,
        layout: "/tools",
      },
      {
        path: "/hreflang",
        name: "Hreflang",
        subname: "Tag",
        mini: "HT",
        component: Pricing,
        layout: "/tools",
      },
      {
        path: "/ytkeywords",
        name: "Keywords",
        subname: "YouTube",
        mini: "YT",
        component: Pricing,
        layout: "/tools",
      },
      {
        path: "/mailval",
        name: "Email",
        subname: "Validator",
        mini: "MV",
        component: Pricing,
        layout: "/tools",
        description: "https://verifier.meetchopra.com/,https://www.mailboxvalidator.com/plans#api",
      },
    ],
  },
  {
    collapse: true,
    name: "Network",
    icon: "tim-icons icon-world",
    iconclass: "info-icon text-center icon-default",
    state: "networkCollapse",
    views: [
      {
        path: "/iplookup",
        name: "IP Location",
        subname: "Lookup",
        mini: "IP",
        component: Pricing,
        layout: "/tools",
        description: "https://github.com/fawazahmed0/cloudflare-trace-api,https://www.myip.com/api-docs/",
      },
      {
        path: "/domainrep",
        name: "Domain Reputation",
        subname: "Lookup",
        mini: "DR",
        component: Pricing,
        layout: "/tools",
        description: "https://github.com/public-apis/public-apis#anti-malware",
      },
      {
        path: "/qrcode",
        name: "Creator",
        subname: "QR Code",
        mini: "QR",
        component: Pricing,
        layout: "/tools",
        description: "https://goqr.me/api/doc/",
      },
      {
        path: "/urlshort",
        name: "Shortener",
        subname: "URLs",
        mini: "SU",
        component: Pricing,
        layout: "/tools",
        description: "https://github.com/robvanbakel/gotiny-api",
      },
    ],
  }, */
];

export default routes;
