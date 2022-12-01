"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[751],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1156:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},p="Aries Framework JavaScript Extensions",l={unversionedId:"extensions/index",id:"extensions/index",title:"Aries Framework JavaScript Extensions",description:"Aries Framework JavaScript Extensions is an extensions repository to Aries Framework JavaScript (AFJ). It hosts libraries built on top of Aries Framework JavaScript that don't necessarily belong to the core of the project.",source:"@site/guides/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/guides/extensions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Aries JavaScript Ecosystem",permalink:"/guides/ecosystem/"}},c={},m=[],u={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aries-framework-javascript-extensions"},"Aries Framework JavaScript Extensions"),(0,o.kt)("p",null,"Aries Framework JavaScript Extensions is an extensions repository to Aries Framework JavaScript (AFJ). It hosts libraries built on top of Aries Framework JavaScript that don't necessarily belong to the core of the project."),(0,o.kt)("p",null,"Currently, there a four packages in the extension repository. Example extension libraries include React Hooks for AFJ and a REST API wrapper."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Package"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@aries-framework/redux-store"},(0,o.kt)("inlineCode",{parentName:"a"},"@aries-framework/redux-store"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://img.shields.io/npm/v/@aries-framework/redux-store",alt:"@aries-framework/redux-store version"})),(0,o.kt)("td",{parentName:"tr",align:null},"Redux toolkit wrapper around Aries Framework JavaScript")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@aries-framework/rest"},(0,o.kt)("inlineCode",{parentName:"a"},"@aries-framework/rest"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://img.shields.io/npm/v/@aries-framework/rest",alt:"@aries-framework/rest version"})),(0,o.kt)("td",{parentName:"tr",align:null},"Rest endpoint wrapper for using your agent over HTTP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@aries-framework/react-hooks"},(0,o.kt)("inlineCode",{parentName:"a"},"@aries-framework/react-hooks"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://img.shields.io/npm/v/@aries-framework/react-hooks",alt:"@aries-framework/react-hooks version"})),(0,o.kt)("td",{parentName:"tr",align:null},"React Hooks for data handling and agent interaction")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@aries-framework/push-notifications"},(0,o.kt)("inlineCode",{parentName:"a"},"@aries-framework/push-notifications"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://img.shields.io/npm/v/@aries-framework/push-notifications",alt:"@aries-framework/push-notifications version"})),(0,o.kt)("td",{parentName:"tr",align:null},"Push notification plugin for Aries Framework JavaScript")))))}f.isMDXComponent=!0}}]);