"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3802],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="iOS",c={unversionedId:"getting-started/installation/react-native/ios",id:"getting-started/installation/react-native/ios",title:"iOS",description:"1. Add the following lines to the start of your Podfile (ios/Podfile).",source:"@site/guides/getting-started/installation/react-native/ios.md",sourceDirName:"getting-started/installation/react-native",slug:"/getting-started/installation/react-native/ios",permalink:"/guides/getting-started/installation/react-native/ios",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/guides/getting-started/installation/react-native/"},next:{title:"Android",permalink:"/guides/getting-started/installation/react-native/android"}},p={},d=[{value:"React Native &gt;= 0.70.0",id:"react-native--0700",level:4},{value:"React Native 0.64.0 - 0.69.5",id:"react-native-0640---0695",level:4},{value:"React Native &lt;= 0.64.0",id:"react-native--0640",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios"},"iOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following lines to the start of your Podfile (",(0,i.kt)("inlineCode",{parentName:"li"},"ios/Podfile"),").")),(0,i.kt)("p",null,"If a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," is defined we also need to define the default source (which is implicit if no source is specified), explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source 'https://github.com/hyperledger/indy-sdk-react-native'\nsource 'https://cdn.cocoapods.org'\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install the Latest CocoaPods dependencies:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ios\npod install\npod update Indy\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure Bitcode to ",(0,i.kt)("inlineCode",{parentName:"p"},"no")," in both the project and targets")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Libraries for Distribution")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," in both the project and targets"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is required due to mismatching Swift versions between the Indy SDK and the application, as described in this ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/58654714/module-compiled-with-swift-5-1-cannot-be-imported-by-the-swift-5-1-2-compiler/63305234#63305234"},"Stackoverflow Answer"))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"iOS Simulators are currently not supported and should be disabled")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hermes"))),(0,i.kt)("p",null,"Hermes is recommended on iOS for application performance improvements"),(0,i.kt)("h4",{id:"react-native--0700"},"React Native >= 0.70.0"),(0,i.kt)("p",null,"Hermes is enabled by default"),(0,i.kt)("h4",{id:"react-native-0640---0695"},"React Native 0.64.0 - 0.69.5"),(0,i.kt)("p",null,"Add or adjust the following in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/Podfile")," to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-use_react_native!("},"     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n     # By default, Hermes is disabled on Old Architecture, and enabled on New Architecture.\n     # You can enable/disable it manually by replacing `flags[:hermes_enabled]` with `true` or `false`.\n-    :hermes_enabled => flags[:hermes_enabled],\n+    :hermes_enabled => true\n   )\n")),(0,i.kt)("h4",{id:"react-native--0640"},"React Native <= 0.64.0"),(0,i.kt)("p",null,"Hermes is not required for older versions of React Native"))}f.isMDXComponent=!0}}]);