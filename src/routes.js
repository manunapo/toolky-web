import SecretGenerator from "views/security/SecretGenerator.js";
import SiteRiskAnalyzer from "views/security/SiteRiskAnalyzer.js";
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
    name: "Text",
    icon: "tim-icons icon-caps-small",
    iconclass: "info-icon text-center icon-default",
    state: "textCollapse",
    views: [
      {
        path: "/textcounter",
        name: "Characters Calculator",
        subname: "Analysis",
        mini: "TC",
        component: TextCounter,
        layout: "/tools",
      },
      {
        path: "/caseconverter",
        name: "Case Converter",
        subname: "Analysis",
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
        path: "/passwordgenerator",
        name: "Password Generator",
        subname: "Customizable",
        mini: "PG",
        component: SecretGenerator,
        layout: "/tools",
      },
      {
        new: true,
        path: "/siteanalyzer",
        name: "Risk Analyzer",
        iconhome: "tim-icons icon-zoom-split",
        subname: "Web Site",
        mini: "RA",
        component: SiteRiskAnalyzer,
        layout: "/tools",
      },
    ],
  },
  {
    collapse: true,
    name: "Developer",
    icon: "tim-icons icon-html5",
    iconclass: "info-icon text-center icon-default",
    state: "developerCollapse",
    views: [
      {
        path: "/base64",
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
        path: "/jsonviewer",
        name: "JSON Viewer",
        subname: "Stringify",
        mini: "JS",
        component: Json,
        layout: "/tools",
      },
      {
        path: "/timestamp",
        name: "Timestamp Converter",
        subname: "Epoch",
        mini: "TS",
        component: Timestamp,
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
