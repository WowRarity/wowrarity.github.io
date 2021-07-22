(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},444:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2,slug:"/manual/troubleshooting/clearing-accountwide-statistics"},s="Clearing Accountwide Statistics",l={unversionedId:"manual/troubleshooting/clearing-accountwide-statistics",id:"manual/troubleshooting/clearing-accountwide-statistics",isDocsHomePage:!1,title:"Clearing Accountwide Statistics",description:"Internally, the unique character ID changes when you rename or transfer your character, as Blizzard deletes and recreates it while assigning a new ID to it. This means Rarity sees it as an entirely different character, and there's no (reliable) way to detect it's actually the same as your old one.",source:"@site/docs/manual/troubleshooting/02-clearing-accountwide-statistics.md",sourceDirName:"manual/troubleshooting",slug:"/manual/troubleshooting/clearing-accountwide-statistics",permalink:"/docs/manual/troubleshooting/clearing-accountwide-statistics",editUrl:"https://github.com/WowRarity/Rarity/edit/main/docusaurus/docs/manual/troubleshooting/02-clearing-accountwide-statistics.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/manual/troubleshooting/clearing-accountwide-statistics"},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/docs/manual/troubleshooting"},next:{title:"Questions and Answers",permalink:"/docs/faq"}},u=[],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clearing-accountwide-statistics"},"Clearing Accountwide Statistics"),(0,i.kt)("p",null,"Internally, the unique character ID changes when you rename or transfer your character, as Blizzard deletes and recreates it while assigning a new ID to it. This means Rarity sees it as an entirely different character, and there's no (reliable) way to detect it's actually the same as your old one."),(0,i.kt)("p",null,'As a workaround, you can go to the "Advanced" tab in the Options and click on the button labeled "Clear accountwide statistics".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clearing accountwide statistics",src:n(8888).Z})),(0,i.kt)("p",null,"This will delete the cached ",(0,i.kt)("a",{parentName:"p",href:"/docs/manual/tracking-custom-items/#using-kill-statistics"},"Kill Statistics")," obtained from Blizzard for ALL of your characters, but leave regular attempts alone. The latter will still be stored under your old character, but that can't currently be helped (until we have a better way of interacting with the database, which may be implemented in a future update)."),(0,i.kt)("p",null,"You'll have to log into the other characters again to recover the now-removed statistics for them, but nothing should be irrevocably lost. Still, it's highly recommended to make a backup of your ",(0,i.kt)("a",{parentName:"p",href:"/docs/manual/accessing-historical-data/#inspecting-the-saved-variables"},"SavedVariables")," file, as the feature is experimental and has been implemented for just this special case, with very little testing going into it otherwise."))}p.isMDXComponent=!0},8888:function(e,t,n){"use strict";t.Z=n.p+"assets/images/02-clear-accountwide-statistics-1f62639bf51170e7c168a31cc5ee1cba.png"}}]);