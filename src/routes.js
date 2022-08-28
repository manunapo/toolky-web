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
import Password from "views/developer/Password.js";
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
    icon: "tim-icons icon-settings",
    component: Home,
    layout: "/tools",
  },
  {
    collapse: true,
    name: "Developer",
    icon: "tim-icons icon-html5",
    iconclass: "info-icon text-center icon-primary",
    state: "developerCollapse",
    views: [
      {
        path: "/encodig",
        name: "Base64",
        subname: "Decode & Encode",
        mini: "B64",
        component: Base64,
        layout: "/tools",
      },
      {
        path: "/jwt",
        name: "JWT",
        subname: "Decode",
        mini: "JW",
        component: Jwt,
        layout: "/tools",
      },
      {
        path: "/json",
        name: "JSON",
        subname: "Stringify",
        mini: "JS",
        component: Json,
        layout: "/tools",
      },
      {
        path: "/timestamp",
        name: "Timestamp",
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
    iconclass: "info-icon text-center icon-danger",
    state: "textCollapse",
    views: [
      {
        path: "/textcounter",
        name: "Characters Calculator",
        subname: "Online",
        mini: "TC",
        component: TextCounter,
        layout: "/tools",
      },
      {
        path: "/caseconverter",
        name: "Case Converter",
        subname: "Online",
        mini: "CC",
        component: CaseConverter,
        layout: "/tools",
      }
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
  {
    collapse: true,
    name: "Password",
    icon: "tim-icons icon-key-25",
    iconclass: "info-icon text-center icon-warning",
    state: "passwordCollapse",
    views: [
      {
        path: "/passgen",
        name: "Generation",
        subname: "Password",
        mini: "PG",
        component: Password,
        layout: "/tools",
      },
    ],
  },
];

export default routes;
