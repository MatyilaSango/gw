if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"fcefd2b600d1daa40862217b469d1563"},{url:"/_next/static/Hg6h0eKKP0D7H76yXIUgu/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/Hg6h0eKKP0D7H76yXIUgu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/115-5a48513d43c622dc.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/596-4b230ca212d577b8.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/app/layout-639f2a4f1d103575.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/app/page-6706a70519b5fe13.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/fd9d1056-9593a577cdf5fc4e.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/main-616a8f4b115338b1.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/main-app-27bec71e93ad546d.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b2cbed57e43ad042.js",revision:"Hg6h0eKKP0D7H76yXIUgu"},{url:"/_next/static/css/695ebb41bb06c50a.css",revision:"695ebb41bb06c50a"},{url:"/_next/static/css/b1a07daf5995f895.css",revision:"b1a07daf5995f895"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/GW-weather.acdfc316.png",revision:"491bde9cb274f430a7c5e9a028737485"},{url:"/_next/static/media/back-right-arrow.113ef6e2.svg",revision:"07cdd1afca9eb0a192b89faf7fbb5a71"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/close.a9f0571e.svg",revision:"3ddeca9628528744ec0ceb7533ccf1dc"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/loading-anim.e534a166.gif",revision:"792777f095784dcad641ae875b13aa7c"},{url:"/_next/static/media/weather_wallpaper.0463b2a1.jpg",revision:"9be952fe95edab073ad90c070ce65c19"},{url:"/icon-192x192.png",revision:"332c0caee5b894b417021ee8b350b2f8"},{url:"/icon-256x256.png",revision:"db286f0e1497fc821e14446f47da78f4"},{url:"/icon-384x384.png",revision:"2dbf3e39c68ae767e6b02eae9f36c21a"},{url:"/icon-512x512.png",revision:"54ab60727a6e0088dec3b52002b9a1d0"},{url:"/manifest.json",revision:"b8b5cfa549cf16ea015f448cab78541d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
