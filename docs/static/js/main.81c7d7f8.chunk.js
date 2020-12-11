(this["webpackJsonpreact-inview-callback-demo"]=this["webpackJsonpreact-inview-callback-demo"]||[]).push([[0],{19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),o=t.n(r),a=t(10),c=t.n(a),s=(t(19),t(2)),l=t(3),d=768,u=769,p=1023,h=1024,f=960,m={main:{colors:{primaryBlue:"#74b9ff",secondaryBlue:"#c0e0ff",secondaryColor:"#e55039",light:"#f9f9f9",vapor:"#eee",lightGrey:"#ccc",grey:"#999",darkGrey:"#555",charcoal:"#333",dark:"#212121"},breakpoints:{mobileMax:d+"px",tabletMin:u+"px",tabletMax:p+"px",desktopMin:h+"px",maxWidth:f+"px",maxWidthBlog:f/1.5+"px"},media:{get maxMobile(){return"@media all and (max-width: ".concat(d,"px)")},get minTablet(){return"@media all and (mine-width: ".concat(u,"px)")},get maxTablet(){return"@media all and (max-width: ".concat(p,"px)")},get minDesktop(){return"@media all and (min-width: ".concat(h,"px)")}},spacing:{smallSpacing:"10px",mediumSpacing:"20px",largeSpacing:"40px"}}},g=o.a.createContext(m.main);function x(){var n=Object(s.a)(["\n      width: 100%;\n      position: relative;\n      background-color: ",";\n      border-bottom: 5px "," solid;\n      padding: "," ",";\n\n      "," {\n        padding: "," ",";\n      }\n\n      .inner {\n        width: 100%;\n        margin: 0 auto;\n        max-width: ",";\n        display: flex;\n        flex-direction: column;\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n        align-items: flex-start;\n        h1,p {\n          margin: 0;\n        }\n\n        "," {\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: space-between;\n          align-items: center;\n        }\n      }\n  "]);return x=function(){return n},n}var b=l.a.header(x(),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.spacing.smallSpacing}),(function(n){return n.theme.spacing.mediumSpacing}),(function(n){return n.theme.media.minDesktop}),(function(n){return n.theme.spacing.smallSpacing}),(function(n){return n.theme.spacing.largeSpacing}),(function(n){return n.theme.breakpoints.maxWidth}),(function(n){return n.theme.media.minTablet}));function w(n){var e=n.title,t=void 0===e?"Default Title":e,o=n.description,a=void 0===o?"Short description":o;if("string"!==typeof t)throw new Error("Title needs to be of sting type and ".concat(typeof t," was provided."));if("string"!==typeof a)throw new Error("Description needs to be of sting type and ".concat(typeof t," was provided."));var c=Object(r.useContext)(g);return Object(i.jsx)(b,{className:"header",theme:c,children:Object(i.jsxs)("div",{className:"inner",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("p",{children:a})]})})}var v=t(8),j=t(5),y=t.n(j);function O(){var n=Object(s.a)(["\n        width: 100%;\n        position: relative;\n        padding: ",";\n        background-color: ",";\n        background: linear-gradient(45deg, "," 0%, "," 100%);\n\n        "," {\n            padding: ",";\n        }\n\n        .inner {\n            width: 100%;\n            min-height: 90vh;\n            margin: 0 auto;\n            max-width: ",";\n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n            color: white;\n            h1 {\n                font-weight: 800;\n            }\n            p {\n                font-size: 20px;\n                opacity: 1;\n                transform: translateY(0px);\n                transition: all 0.8s ease-in-out;\n                &.hidden {\n                    opacity: 0;\n                    transform: translateY(40px);\n                } \n                &.cta-text {\n                    text-decoration: underline;\n                }\n            }\n        }\n    "]);return O=function(){return n},n}var S=l.a.section(O(),(function(n){return n.theme.spacing.smallSpacing}),(function(n){return n.theme.colors.SecondaryBlue}),(function(n){return n.theme.colors.primaryBlue}),(function(n){return n.theme.colors.secondaryBlue}),(function(n){return n.theme.media.minDesktop}),(function(n){return n.theme.spacing.largeSpacing}),(function(n){return n.theme.breakpoints.maxWidthBlog}));function k(n){var e=n.title,t=void 0===e?"Sample Title":e,o=n.description,a=void 0===o?"Sample description in long format":o,c=n.cta,s=void 0===c?"Do something now!":c;if("string"!==typeof t)throw new Error("Title needs to be of sting type and ".concat(typeof t," was provided."));if("string"!==typeof a)throw new Error("Description needs to be of sting type and ".concat(typeof t," was provided."));if("string"!==typeof s)throw new Error("CTA needs to be of sting type and ".concat(typeof t," was provided."));var l=Object(r.useContext)(g),d=Object(r.useRef)(null);return y()(d,{root:"root",rootMargin:"0px",threshold:.5},(function(n){var e=d.current.querySelectorAll("p");Object(v.a)(e).forEach((function(n){n.classList.remove("hidden")}))}),(function(n){var e=d.current.querySelectorAll("p");Object(v.a)(e).forEach((function(n){n.classList.add("hidden")}))})),Object(i.jsx)(S,{ref:d,theme:l,children:Object(i.jsxs)("div",{className:"inner",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("p",{className:"cta-text",children:s})]})})}function C(){var n=Object(s.a)(["\n    width: 100%;\n    min-height: 50vh;\n    position: relative;\n    background-color: ",";\n    padding: "," ",";\n    color: ",";\n\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    "," {\n    padding: "," ",";\n    }\n\n    h1 {\n        margin: 10px;\n        font-weight: 800;\n        font-style: italic;\n        font-size: 64px;\n    }\n"]);return C=function(){return n},n}var T=l.a.section(C(),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.spacing.smallSpacing}),(function(n){return n.theme.spacing.mediumSpacing}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.media.minDesktop}),(function(n){return n.theme.spacing.smallSpacing}),(function(n){return n.theme.spacing.largeSpacing}));var B={root:"root",rootMargin:"0px",threshold:function(){for(var n=[],e=1;e<=100;e++){var t=e/100;n.push(t)}return n.push(0),n}()};function D(){var n=Object(r.useContext)(g),e=Object(r.useRef)(null);y()(e,B,(function(n){var t=e.current.querySelectorAll("h1")[0],i=parseFloat(100*n.intersectionRatio).toFixed("0");t.innerHTML=i+"%",console.log(i)}));return Object(i.jsxs)(T,{ref:e,theme:n,children:[Object(i.jsx)("p",{children:"This section is"}),Object(i.jsx)("h1",{children:"0%"}),Object(i.jsx)("p",{children:"visible in the viewport!"})]})}function M(){var n=Object(s.a)(["\n  width: 100%;\n  position: relative;\n  min-height: 300vh;\n"]);return M=function(){return n},n}var E=l.a.div(M());function A(){return Object(i.jsxs)(E,{className:"App",children:[Object(i.jsx)(w,{title:"inView",description:"A custom ReactJS Hook with callbacks."}),Object(i.jsx)(k,{title:"inView ReactJS Hook",description:"Custom Hook that as the Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport that will run a custom callback on entry and exit.",cta:"Scroll down to view it in action!"}),Object(i.jsx)(D,{})]})}var F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),o(n),a(n)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.81c7d7f8.chunk.js.map