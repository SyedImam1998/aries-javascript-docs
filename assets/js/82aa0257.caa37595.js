"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),c=s,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const i={},o="Postgres Setup for macOS",a={unversionedId:"tutorials/indy-sdk-postgres-database-nodejs/macos",id:"tutorials/indy-sdk-postgres-database-nodejs/macos",title:"Postgres Setup for macOS",description:"Prerequisites",source:"@site/guides/tutorials/indy-sdk-postgres-database-nodejs/macos.md",sourceDirName:"tutorials/indy-sdk-postgres-database-nodejs",slug:"/tutorials/indy-sdk-postgres-database-nodejs/macos",permalink:"/guides/next/tutorials/indy-sdk-postgres-database-nodejs/macos",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres Setup for Linux",permalink:"/guides/next/tutorials/indy-sdk-postgres-database-nodejs/linux"},next:{title:"Postgres Setup for windows",permalink:"/guides/next/tutorials/indy-sdk-postgres-database-nodejs/windows"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: installing the dependencies using brew",id:"step-1-installing-the-dependencies-using-brew",level:2},{value:"Step 2: Build Postgres plugin",id:"step-2-build-postgres-plugin",level:2},{value:"Step 2.1: Cloning the indy-sdk",id:"step-21-cloning-the-indy-sdk",level:3},{value:"Step 2.2: Building Postgres plugin",id:"step-22-building-postgres-plugin",level:3},{value:"Step 2.3: Moving the file",id:"step-23-moving-the-file",level:3}],u={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postgres-setup-for-macos"},"Postgres Setup for macOS"),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Homebrew"),(0,s.kt)("li",{parentName:"ul"},"Cargo (We have to build Postgres plugin from source)"),(0,s.kt)("li",{parentName:"ul"},"git (to clone a repo, could also be done with downloading the zip from the GitHub page)")),(0,s.kt)("h2",{id:"step-1-installing-the-dependencies-using-brew"},"Step 1: installing the dependencies using brew"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"brew install libsodium zeromq\n")),(0,s.kt)("h2",{id:"step-2-build-postgres-plugin"},"Step 2: Build Postgres plugin"),(0,s.kt)("p",null,"Building Postgres plugin from the indy-sdk repo with cargo."),(0,s.kt)("h3",{id:"step-21-cloning-the-indy-sdk"},"Step 2.1: Cloning the indy-sdk"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/hyperledger/indy-sdk.git\n\ncd indy-sdk/experimental/plugins/postgres_storage\n")),(0,s.kt)("h3",{id:"step-22-building-postgres-plugin"},"Step 2.2: Building Postgres plugin"),(0,s.kt)("p",null,"If this step throws any errors, it might be because you miss some packages. Step 1 of this guide provided the dependencies that are required, but it also assumed that you have some basic development packages installed. If you are missing some packages, you can install them with your package manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\ncargo build --release\n")),(0,s.kt)("h3",{id:"step-23-moving-the-file"},"Step 2.3: Moving the file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n\n# OUTPUT: .../indy-sdk/experimental/plugins/postgres_storage\n\nsudo mv ./target/release/libindystrgpostgres.dylib /usr/local/lib/libindystrgpostgres.dylib\n")))}g.isMDXComponent=!0}}]);