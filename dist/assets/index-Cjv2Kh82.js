(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Su={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(i,e){if(!i)throw er(e)},er=function(i){return new Error("Firebase Database ("+Vf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Y_=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const s=i[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=i[t++];e[n++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=i[t++],o=i[t++],a=i[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=i[t++],o=i[t++];e[n++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<i.length;s+=3){const r=i[s],o=s+1<i.length,a=o?i[s+1]:0,c=s+2<i.length,l=c?i[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),n.push(t[h],t[u],t[d],t[f])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Gf(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Y_(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<i.length;){const r=t[i.charAt(s++)],a=s<i.length?t[i.charAt(s)]:0;++s;const l=s<i.length?t[i.charAt(s)]:64;++s;const u=s<i.length?t[i.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new j_;const d=r<<2|a>>4;if(n.push(d),l!==64){const f=a<<4&240|l>>2;if(n.push(f),u!==64){const _=l<<6&192|u;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class j_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wf=function(i){const e=Gf(i);return Zl.encodeByteArray(e,!0)},na=function(i){return Wf(i).replace(/\./g,"")},ia=function(i){try{return Zl.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(i){return qf(void 0,i)}function qf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!J_(t)||(i[t]=qf(i[t],e[t]));return i}function J_(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=()=>Z_().__FIREBASE_DEFAULTS__,eg=()=>{if(typeof process>"u"||typeof Su>"u")return;const i=Su.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},tg=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ia(i[1]);return e&&JSON.parse(e)},Ql=()=>{try{return Q_()||eg()||tg()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Xf=i=>{var e,t;return(t=(e=Ql())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},ng=i=>{const e=Xf(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},$f=()=>{var i;return(i=Ql())===null||i===void 0?void 0:i.config},Yf=i=>{var e;return(e=Ql())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=i.iat||0,r=i.sub||i.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},i);return[na(JSON.stringify(t)),na(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function sg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rg(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function og(){const i=Yt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ag(){return Vf.NODE_ADMIN===!0}function cg(){try{return typeof indexedDB=="object"}catch{return!1}}function lg(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="FirebaseError";class Ii extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=hg,Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ug(r,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ii(s,a,n)}}function ug(i,e){return i.replace(dg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const dg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(i){return JSON.parse(i)}function Tt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=function(i){let e={},t={},n={},s="";try{const r=i.split(".");e=kr(ia(r[0])||""),t=kr(ia(r[1])||""),s=r[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:s}},fg=function(i){const e=Kf(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pg=function(i){const e=Kf(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Hs(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function jc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function sa(i,e,t){const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=e.call(t,i[s],s,i));return n}function ra(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const r=i[s],o=e[s];if(Eu(r)&&Eu(o)){if(!ra(r,o))return!1}else if(r!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Eu(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Sr(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,r]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Er(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):u<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+l+c+h+n[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[s]>>r&255,++n;return e}}function _g(i,e){const t=new gg(i,e);return t.subscribe.bind(t)}class gg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");vg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vg(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ic(){}function Da(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);if(s>=55296&&s<=56319){const r=s-55296;n++,Z(n<i.length,"Surrogate pair missing trail surrogate.");const o=i.charCodeAt(n)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Na=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(i){return i&&i._delegate?i._delegate:i}class ji{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Jr;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});n.resolve(r)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);n===a&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(i){return i===zi?void 0:i}function Eg(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(st||(st={}));const bg={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},wg=st.INFO,Tg={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},Cg=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),s=Tg[e];if(s)console[s](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class th{constructor(e){this.name=e,this._logLevel=wg,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in st))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...e),this._logHandler(this,st.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...e),this._logHandler(this,st.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,st.INFO,...e),this._logHandler(this,st.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,st.WARN,...e),this._logHandler(this,st.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...e),this._logHandler(this,st.ERROR,...e)}}const Ag=(i,e)=>e.some(t=>i instanceof t);let Mu,bu;function Rg(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ig(){return bu||(bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jf=new WeakMap,Kc=new WeakMap,Zf=new WeakMap,sc=new WeakMap,nh=new WeakMap;function Pg(i){const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("success",r),i.removeEventListener("error",o)},r=()=>{t(vi(i.result)),s()},o=()=>{n(i.error),s()};i.addEventListener("success",r),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Jf.set(t,i)}).catch(()=>{}),nh.set(e,i),e}function Lg(i){if(Kc.has(i))return;const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",o),i.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",r),i.addEventListener("error",o),i.addEventListener("abort",o)});Kc.set(i,e)}let Jc={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Kc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Zf.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Dg(i){Jc=i(Jc)}function Ng(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(rc(this),e,...t);return Zf.set(n,e.sort?e.sort():[e]),vi(n)}:Ig().includes(i)?function(...e){return i.apply(rc(this),e),vi(Jf.get(this))}:function(...e){return vi(i.apply(rc(this),e))}}function Ug(i){return typeof i=="function"?Ng(i):(i instanceof IDBTransaction&&Lg(i),Ag(i,Rg())?new Proxy(i,Jc):i)}function vi(i){if(i instanceof IDBRequest)return Pg(i);if(sc.has(i))return sc.get(i);const e=Ug(i);return e!==i&&(sc.set(i,e),nh.set(e,i)),e}const rc=i=>nh.get(i);function Og(i,e,{blocked:t,upgrade:n,blocking:s,terminated:r}={}){const o=indexedDB.open(i,e),a=vi(o);return n&&o.addEventListener("upgradeneeded",c=>{n(vi(o.result),c.oldVersion,c.newVersion,vi(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const kg=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],oc=new Map;function wu(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Fg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||kg.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return oc.set(e,r),r}Dg(i=>({...i,get:(e,t,n)=>wu(e,t)||i.get(e,t,n),has:(e,t)=>!!wu(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function zg(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Tu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new th("@firebase/app"),Hg="@firebase/app-compat",Vg="@firebase/analytics-compat",Gg="@firebase/analytics",Wg="@firebase/app-check-compat",qg="@firebase/app-check",Xg="@firebase/auth",$g="@firebase/auth-compat",Yg="@firebase/database",jg="@firebase/data-connect",Kg="@firebase/database-compat",Jg="@firebase/functions",Zg="@firebase/functions-compat",Qg="@firebase/installations",ev="@firebase/installations-compat",tv="@firebase/messaging",nv="@firebase/messaging-compat",iv="@firebase/performance",sv="@firebase/performance-compat",rv="@firebase/remote-config",ov="@firebase/remote-config-compat",av="@firebase/storage",cv="@firebase/storage-compat",lv="@firebase/firestore",hv="@firebase/vertexai-preview",uv="@firebase/firestore-compat",dv="firebase",fv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",pv={[Zc]:"fire-core",[Hg]:"fire-core-compat",[Gg]:"fire-analytics",[Vg]:"fire-analytics-compat",[qg]:"fire-app-check",[Wg]:"fire-app-check-compat",[Xg]:"fire-auth",[$g]:"fire-auth-compat",[Yg]:"fire-rtdb",[jg]:"fire-data-connect",[Kg]:"fire-rtdb-compat",[Jg]:"fire-fn",[Zg]:"fire-fn-compat",[Qg]:"fire-iid",[ev]:"fire-iid-compat",[tv]:"fire-fcm",[nv]:"fire-fcm-compat",[iv]:"fire-perf",[sv]:"fire-perf-compat",[rv]:"fire-rc",[ov]:"fire-rc-compat",[av]:"fire-gcs",[cv]:"fire-gcs-compat",[lv]:"fire-fst",[uv]:"fire-fst-compat",[hv]:"fire-vertex","fire-js":"fire-js",[dv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map,mv=new Map,el=new Map;function Cu(i,e){try{i.container.addComponent(e)}catch(t){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Vs(i){const e=i.name;if(el.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,i);for(const t of oa.values())Cu(t,i);for(const t of mv.values())Cu(t,i);return!0}function ih(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Tn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Zr("app","Firebase",_v);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=fv;function Qf(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw yi.create("bad-app-name",{appName:String(s)});if(t||(t=$f()),!t)throw yi.create("no-options");const r=oa.get(s);if(r){if(ra(t,r.options)&&ra(n,r.config))return r;throw yi.create("duplicate-app",{appName:s})}const o=new Mg(s);for(const c of el.values())o.addComponent(c);const a=new gv(t,n,o);return oa.set(s,a),a}function ep(i=Qc){const e=oa.get(i);if(!e&&i===Qc&&$f())return Qf();if(!e)throw yi.create("no-app",{appName:i});return e}function xi(i,e,t){var n;let s=(n=pv[i])!==null&&n!==void 0?n:i;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}Vs(new ji(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="firebase-heartbeat-database",yv=1,Fr="firebase-heartbeat-store";let ac=null;function tp(){return ac||(ac=Og(vv,yv,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(i=>{throw yi.create("idb-open",{originalErrorMessage:i.message})})),ac}async function xv(i){try{const t=(await tp()).transaction(Fr),n=await t.objectStore(Fr).get(np(i));return await t.done,n}catch(e){if(e instanceof Ii)jn.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(t.message)}}}async function Au(i,e){try{const n=(await tp()).transaction(Fr,"readwrite");await n.objectStore(Fr).put(e,np(i)),await n.done}catch(t){if(t instanceof Ii)jn.warn(t.message);else{const n=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}function np(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=1024,Ev=30*24*60*60*1e3;class Mv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ru();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ev}),this._storage.overwrite(this._heartbeatsCache))}catch(n){jn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ru(),{heartbeatsToSend:n,unsentEntries:s}=bv(this._heartbeatsCache.heartbeats),r=na(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return jn.warn(t),""}}}function Ru(){return new Date().toISOString().substring(0,10)}function bv(i,e=Sv){const t=[];let n=i.slice();for(const s of i){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Iu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Iu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class wv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cg()?lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Iu(i){return na(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(i){Vs(new ji("platform-logger",e=>new Bg(e),"PRIVATE")),Vs(new ji("heartbeat",e=>new Mv(e),"PRIVATE")),xi(Zc,Tu,i),xi(Zc,Tu,"esm2017"),xi("fire-js","")}Tv("");function sh(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t}function ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cv=ip,sp=new Zr("auth","Firebase",ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new th("@firebase/auth");function Av(i,...e){aa.logLevel<=st.WARN&&aa.warn(`Auth (${nr}): ${i}`,...e)}function Wo(i,...e){aa.logLevel<=st.ERROR&&aa.error(`Auth (${nr}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(i,...e){throw rh(i,...e)}function Cn(i,...e){return rh(i,...e)}function rp(i,e,t){const n=Object.assign(Object.assign({},Cv()),{[e]:t});return new Zr("auth","Firebase",n).create(e,{appName:i.name})}function $n(i){return rp(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rh(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return sp.create(i,...e)}function be(i,e,...t){if(!i)throw rh(e,...t)}function Hn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Wo(e),new Error(e)}function Kn(i,e){i||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Rv(){return Pu()==="http:"||Pu()==="https:"}function Pu(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rv()||rg()||"connection"in navigator)?navigator.onLine:!0}function Pv(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kn(t>e,"Short delay should be less than long delay!"),this.isMobile=eh()||jf()}get(){return Iv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(i,e){Kn(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Qr(3e4,6e4);function Pi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Qn(i,e,t,n,s={}){return ap(i,s,async()=>{let r={},o={};n&&(e==="GET"?o=n:r={body:JSON.stringify(n)});const a=tr(Object.assign({key:i.config.apiKey},o)).slice(1),c=await i._getAdditionalHeaders();c["Content-Type"]="application/json",i.languageCode&&(c["X-Firebase-Locale"]=i.languageCode);const l=Object.assign({method:e,headers:c},r);return sg()||(l.referrerPolicy="no-referrer"),op.fetch()(cp(i,i.config.apiHost,t,a),l)})}async function ap(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lv),e);try{const s=new Uv(i),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw vo(i,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(i,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vo(i,"email-already-in-use",o);if(c==="USER_DISABLED")throw vo(i,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rp(i,h,l);yn(i,h)}}catch(s){if(s instanceof Ii)throw s;yn(i,"network-request-failed",{message:String(s)})}}async function eo(i,e,t,n,s={}){const r=await Qn(i,e,t,n,s);return"mfaPendingCredential"in r&&yn(i,"multi-factor-auth-required",{_serverResponse:r}),r}function cp(i,e,t,n){const s=`${e}${t}?${n}`;return i.config.emulator?oh(i.config,s):`${i.config.apiScheme}://${s}`}function Nv(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Uv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Cn(this.auth,"network-request-failed")),Dv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Cn(i,e,n);return s.customData._tokenResponse=t,s}function Lu(i){return i!==void 0&&i.enterprise!==void 0}class Ov{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Nv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kv(i,e){return Qn(i,"GET","/v2/recaptchaConfig",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(i,e){return Qn(i,"POST","/v1/accounts:delete",e)}async function lp(i,e){return Qn(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bv(i,e=!1){const t=kt(i),n=await t.getIdToken(e),s=ah(n);be(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:wr(cc(s.auth_time)),issuedAtTime:wr(cc(s.iat)),expirationTime:wr(cc(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function cc(i){return Number(i)*1e3}function ah(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ia(t);return s?JSON.parse(s):(Wo("Failed to decode base64 JWT payload"),null)}catch(s){return Wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Du(i){const e=ah(i);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Ii&&zv(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function zv({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(i){var e;const t=i.auth,n=await i.getIdToken(),s=await Gs(i,lp(t,{idToken:n}));be(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];i._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?hp(r.providerUserInfo):[],a=Gv(i.providerData,o),c=i.isAnonymous,l=!(i.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nl(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(i,u)}async function Vv(i){const e=kt(i);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gv(i,e){return[...i.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function hp(i){return i.map(e=>{var{providerId:t}=e,n=sh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(i,e){const t=await ap(i,{},async()=>{const n=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=i.config,o=cp(i,s,"/v1/token",`key=${r}`),a=await i._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",op.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qv(i,e){return Qn(i,"POST","/v2/accounts:revokeToken",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=Du(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await Wv(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,o=new Ls;return n&&(be(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(be(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(be(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(i,e){be(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=sh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bv(this,e)}reload(){return Vv(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Gs(this,Fv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,o,a,c,l,h;const u=(n=t.displayName)!==null&&n!==void 0?n:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,p=(l=t.createdAt)!==null&&l!==void 0?l:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:b,isAnonymous:O,providerData:T,stsTokenManager:A}=t;be(S&&A,e,"internal-error");const N=Ls.fromJSON(this.name,A);be(typeof S=="string",e,"internal-error"),ii(u,e.name),ii(d,e.name),be(typeof b=="boolean",e,"internal-error"),be(typeof O=="boolean",e,"internal-error"),ii(f,e.name),ii(_,e.name),ii(g,e.name),ii(m,e.name),ii(p,e.name),ii(M,e.name);const E=new Vn({uid:S,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:O,photoURL:_,phoneNumber:f,tenantId:g,stsTokenManager:N,createdAt:p,lastLoginAt:M});return T&&Array.isArray(T)&&(E.providerData=T.map(x=>Object.assign({},x))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const s=new Ls;s.updateFromServerResponse(t);const r=new Vn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ca(r),r}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];be(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?hp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Ls;a.updateFromIdToken(n);const c=new Vn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new nl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;function Gn(i){Kn(i instanceof Function,"Expected a class definition");let e=Nu.get(i);return e?(Kn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Nu.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}up.type="NONE";const Uu=up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(i,e,t){return`firebase:${i}:${e}:${t}`}class Ds{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=qo(this.userKey,s.apiKey,r),this.fullPersistenceKey=qo("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ds(Gn(Uu),e,n);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Gn(Uu);const o=qo(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=Vn._fromJSON(e,h);l!==r&&(a=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ds(r,e,n):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ds(r,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gp(e))return"Blackberry";if(vp(e))return"Webos";if(fp(e))return"Safari";if((e.includes("chrome/")||pp(e))&&!e.includes("edge/"))return"Chrome";if(_p(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function dp(i=Yt()){return/firefox\//i.test(i)}function fp(i=Yt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pp(i=Yt()){return/crios\//i.test(i)}function mp(i=Yt()){return/iemobile/i.test(i)}function _p(i=Yt()){return/android/i.test(i)}function gp(i=Yt()){return/blackberry/i.test(i)}function vp(i=Yt()){return/webos/i.test(i)}function ch(i=Yt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Xv(i=Yt()){var e;return ch(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $v(){return og()&&document.documentMode===10}function yp(i=Yt()){return ch(i)||_p(i)||vp(i)||gp(i)||/windows phone/i.test(i)||mp(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(i,e=[]){let t;switch(i){case"Browser":t=Ou(Yt());break;case"Worker":t=`${Ou(Yt())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(i,e={}){return Qn(i,"GET","/v2/passwordPolicy",Pi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=6;class Jv{constructor(e){var t,n,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Kv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ku(this),this.idTokenSubscription=new ku(this),this.beforeStateQueue=new Yv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gn(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lp(this,{idToken:e}),n=await Vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject($n(this));const t=e?kt(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jv(this),t=new Jv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await qv(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gn(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Av(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function is(i){return kt(i)}class ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=_g(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qv(i){Ua=i}function Sp(i){return Ua.loadJS(i)}function e0(){return Ua.recaptchaEnterpriseScript}function t0(){return Ua.gapiScript}function n0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const i0="recaptcha-enterprise",s0="NO_RECAPTCHA";class r0{constructor(e){this.type=i0,this.auth=is(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{kv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ov(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Lu(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(s0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{n(this.auth).then(a=>{if(!t&&Lu(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=e0();c.length!==0&&(c+=a),Sp(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Fu(i,e,t,n=!1){const s=new r0(i);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function il(i,e,t,n){var s;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Fu(i,e,t,t==="getOobCode");return n(i,r)}else return n(i,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fu(i,e,t,t==="getOobCode");return n(i,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(i,e){const t=ih(i,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ra(r,e??{}))return s;yn(s,"already-initialized")}return t.initialize({options:e})}function a0(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Gn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function c0(i,e,t){const n=is(i);be(n._canInitEmulator,n,"emulator-config-failed"),be(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,r=Ep(e),{host:o,port:a}=l0(e),c=a===null?"":`:${a}`;n.config.emulator={url:`${r}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),h0()}function Ep(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function l0(i){const e=Ep(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const r=s[1];return{host:r,port:Bu(n.substr(r.length+1))}}else{const[r,o]=n.split(":");return{host:r,port:Bu(o)}}}function Bu(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function h0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,t){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function u0(i,e){return Qn(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(i,e){return eo(i,"POST","/v1/accounts:signInWithPassword",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(i,e){return eo(i,"POST","/v1/accounts:signInWithEmailLink",Pi(i,e))}async function p0(i,e){return eo(i,"POST","/v1/accounts:signInWithEmailLink",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends lh{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Br(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Br(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,t,"signInWithPassword",d0);case"emailLink":return f0(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,n,"signUpPassword",u0);case"emailLink":return p0(e,{idToken:t,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(i,e){return eo(i,"POST","/v1/accounts:signInWithIdp",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="http://localhost";class Ki extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=sh(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Ki(n,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ns(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ns(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ns(e,t)}buildRequest(){const e={requestUri:m0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g0(i){const e=Sr(Er(i)).link,t=e?Sr(Er(e)).deep_link_id:null,n=Sr(Er(i)).deep_link_id;return(n?Sr(Er(n)).link:null)||n||t||e||i}class hh{constructor(e){var t,n,s,r,o,a;const c=Sr(Er(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(n=c.oobCode)!==null&&n!==void 0?n:null,u=_0((s=c.mode)!==null&&s!==void 0?s:null);be(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=g0(e);try{return new hh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,t){return Br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=hh.parseLink(t);return be(n,"argument-error"),Br._fromEmailAndCode(e,n.code,n.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends to{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ki._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return di.credential(t,n)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends to{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends to{constructor(){super("twitter.com")}static credential(e,t){return Ki._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return pi.credential(t,n)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(i,e){return eo(i,"POST","/v1/accounts:signUp",Pi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await Vn._fromIdTokenResponse(e,n,s),o=zu(n);return new Ji({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=zu(n);return new Ji({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function zu(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Ii{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new la(e,t,n,s)}}function bp(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(i,r,e,n):r})}async function y0(i,e,t=!1){const n=await Gs(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ji._forOperation(i,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(i,e,t=!1){const{auth:n}=i;if(Tn(n.app))return Promise.reject($n(n));const s="reauthenticate";try{const r=await Gs(i,bp(n,s,e,i),t);be(r.idToken,n,"internal-error");const o=ah(r.idToken);be(o,n,"internal-error");const{sub:a}=o;return be(i.uid===a,n,"user-mismatch"),Ji._forOperation(i,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yn(n,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(i,e,t=!1){if(Tn(i.app))return Promise.reject($n(i));const n="signIn",s=await bp(i,n,e),r=await Ji._fromIdTokenResponse(i,n,s);return t||await i._updateCurrentUser(r.user),r}async function S0(i,e){return wp(is(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(i){const e=is(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function E0(i,e,t){if(Tn(i.app))return Promise.reject($n(i));const n=is(i),o=await il(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",v0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Tp(i),c}),a=await Ji._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function M0(i,e,t){return Tn(i.app)?Promise.reject($n(i)):S0(kt(i),ir.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Tp(i),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(i,e){return Qn(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=kt(i),r={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Gs(n,b0(n.auth,r));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const a=n.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function T0(i,e,t,n){return kt(i).onIdTokenChanged(e,t,n)}function C0(i,e,t){return kt(i).beforeAuthStateChanged(e,t)}function A0(i,e,t,n){return kt(i).onAuthStateChanged(e,t,n)}function R0(i){return kt(i).signOut()}const ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1e3,P0=10;class Ap extends Cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},r=this.storage.getItem(n);$v()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,P0):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ap.type="LOCAL";const L0=Ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends Cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rp.type="SESSION";const Ip=Rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Oa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await D0(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=uh("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function U0(i){An().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function O0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function F0(){return Pp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="firebaseLocalStorageDb",B0=1,ua="firebaseLocalStorage",Dp="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ka(i,e){return i.transaction([ua],e?"readwrite":"readonly").objectStore(ua)}function z0(){const i=indexedDB.deleteDatabase(Lp);return new no(i).toPromise()}function sl(){const i=indexedDB.open(Lp,B0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(ua,{keyPath:Dp})}catch(s){t(s)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(ua)?e(n):(n.close(),await z0(),e(await sl()))})})}async function Hu(i,e,t){const n=ka(i,!0).put({[Dp]:e,value:t});return new no(n).toPromise()}async function H0(i,e){const t=ka(i,!1).get(e),n=await new no(t).toPromise();return n===void 0?null:n.value}function Vu(i,e){const t=ka(i,!0).delete(e);return new no(t).toPromise()}const V0=800,G0=3;class Np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>G0)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(F0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await Hu(e,ha,"1"),await Vu(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>H0(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ka(s,!1).getAll();return new no(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Np.type="LOCAL";const W0=Np;new Qr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(i,e){return e?Gn(e):(be(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function X0(i){return wp(i.auth,new dh(i),i.bypassAuthState)}function $0(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),x0(t,new dh(i),i.bypassAuthState)}async function Y0(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),y0(t,new dh(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X0;case"linkViaPopup":case"linkViaRedirect":return Y0;case"reauthViaPopup":case"reauthViaRedirect":return $0;default:yn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=new Qr(2e3,1e4);class As extends Up{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j0.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="pendingRedirect",Xo=new Map;class J0 extends Up{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const n=await Z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z0(i,e){const t=ty(e),n=ey(i);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Q0(i,e){Xo.set(i._key(),e)}function ey(i){return Gn(i._redirectPersistence)}function ty(i){return qo(K0,i.config.apiKey,i.name)}async function ny(i,e,t=!1){if(Tn(i.app))return Promise.reject($n(i));const n=is(i),s=q0(n,e),o=await new J0(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=10*60*1e3;class sy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ry(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Op(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Cn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gu(e))}saveEventToCache(e){this.cachedEventUids.add(Gu(e)),this.lastProcessedEventTime=Date.now()}}function Gu(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Op({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ry(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Op(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(i,e={}){return Qn(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cy=/^https?/;async function ly(i){if(i.config.emulator)return;const{authorizedDomains:e}=await oy(i);for(const t of e)try{if(hy(t))return}catch{}yn(i,"unauthorized-domain")}function hy(i){const e=tl(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!cy.test(t))return!1;if(ay.test(i))return n===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Qr(3e4,6e4);function Wu(){const i=An().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function dy(i){return new Promise((e,t)=>{var n,s,r;function o(){Wu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wu(),t(Cn(i,"network-request-failed"))},timeout:uy.get()})}if(!((s=(n=An().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=An().gapi)===null||r===void 0)&&r.load)o();else{const a=n0("iframefcb");return An()[a]=()=>{gapi.load?o():t(Cn(i,"network-request-failed"))},Sp(`${t0()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw $o=null,e})}let $o=null;function fy(i){return $o=$o||dy(i),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Qr(5e3,15e3),my="__/auth/iframe",_y="emulator/auth/iframe",gy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yy(i){const e=i.config;be(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?oh(e,_y):`https://${i.config.authDomain}/${my}`,n={apiKey:e.apiKey,appName:i.name,v:nr},s=vy.get(i.config.apiHost);s&&(n.eid=s);const r=i._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${tr(n).slice(1)}`}async function xy(i){const e=await fy(i),t=An().gapi;return be(t,i,"internal-error"),e.open({where:document.body,url:yy(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gy,dontclear:!0},n=>new Promise(async(s,r)=>{await n.restyle({setHideOnLeave:!1});const o=Cn(i,"network-request-failed"),a=An().setTimeout(()=>{r(o)},py.get());function c(){An().clearTimeout(a),s(n)}n.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ey=500,My=600,by="_blank",wy="http://localhost";class qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ty(i,e,t,n=Ey,s=My){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sy),{width:n.toString(),height:s.toString(),top:r,left:o}),l=Yt().toLowerCase();t&&(a=pp(l)?by:t),dp(l)&&(e=e||wy,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(Xv(l)&&a!=="_self")return Cy(e||"",a),new qu(null);const u=window.open(e||"",a,h);be(u,i,"popup-blocked");try{u.focus()}catch{}return new qu(u)}function Cy(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="__/auth/handler",Ry="emulator/auth/handler",Iy=encodeURIComponent("fac");async function Xu(i,e,t,n,s,r){be(i.config.authDomain,i,"auth-domain-config-required"),be(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:nr,eventId:s};if(e instanceof Mp){e.setDefaultLanguage(i.languageCode),o.providerId=e.providerId||"",jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof to){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}i.tenantId&&(o.tid=i.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await i._getAppCheckToken(),l=c?`#${Iy}=${encodeURIComponent(c)}`:"";return`${Py(i)}?${tr(a).slice(1)}${l}`}function Py({config:i}){return i.emulator?oh(i,Ry):`https://${i.authDomain}/${Ay}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class Ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ip,this._completeRedirectFn=ny,this._overrideRedirectResult=Q0}async _openPopup(e,t,n,s){var r;Kn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xu(e,t,n,tl(),s);return Ty(e,o,uh())}async _openRedirect(e,t,n,s){await this._originValidation(e);const r=await Xu(e,t,n,tl(),s);return U0(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Kn(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await xy(e),n=new sy(e);return t.register("authEvent",s=>(be(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lc,{type:lc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[lc];o!==void 0&&t(!!o),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ly(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yp()||fp()||ch()}}const Dy=Ly;var $u="@firebase/auth",Yu="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Oy(i){Vs(new ji("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:a,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(i)},l=new Zv(n,s,r,c);return a0(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Vs(new ji("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(n=>new Ny(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi($u,Yu,Uy(i)),xi($u,Yu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=5*60,Fy=Yf("authIdTokenMaxAge")||ky;let ju=null;const By=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Fy)return;const s=t==null?void 0:t.token;ju!==s&&(ju=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zy(i=ep()){const e=ih(i,"auth");if(e.isInitialized())return e.getImmediate();const t=o0(i,{popupRedirectResolver:Dy,persistence:[W0,L0,Ip]}),n=Yf("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const o=By(r.toString());C0(t,o,()=>o(t.currentUser)),T0(t,a=>o(a))}}const s=Xf("auth");return s&&c0(t,`http://${s}`),t}function Hy(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Qv({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=s=>{const r=Cn("internal-error");r.customData=s,t(r)},n.type="text/javascript",n.charset="UTF-8",Hy().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Oy("Browser");var Vy="firebase",Gy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi(Vy,Gy,"app");var Ku={};const Ju="@firebase/database",Zu="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp="";function Wy(i){kp=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:kr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qy(e)}}catch{}return new Xy},Xi=Fp("localStorage"),$y=Fp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new th("@firebase/database"),Yy=function(){let i=1;return function(){return i++}}(),Bp=function(i){const e=yg(i),t=new mg;t.update(e);const n=t.digest();return Zl.encodeByteArray(n)},io=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=io.apply(null,n):typeof n=="object"?e+=Tt(n):e+=n,e+=" "}return e};let Tr=null,Qu=!0;const jy=function(i,e){Z(!0,"Can't turn on custom loggers persistently."),Us.logLevel=st.VERBOSE,Tr=Us.log.bind(Us)},Ut=function(...i){if(Qu===!0&&(Qu=!1,Tr===null&&$y.get("logging_enabled")===!0&&jy()),Tr){const e=io.apply(null,i);Tr(e)}},so=function(i){return function(...e){Ut(i,...e)}},rl=function(...i){const e="FIREBASE INTERNAL ERROR: "+io(...i);Us.error(e)},Jn=function(...i){const e=`FIREBASE FATAL ERROR: ${io(...i)}`;throw Us.error(e),new Error(e)},Xt=function(...i){const e="FIREBASE WARNING: "+io(...i);Us.warn(e)},Ky=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fh=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Jy=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ws="[MIN_NAME]",Zi="[MAX_NAME]",ss=function(i,e){if(i===e)return 0;if(i===Ws||e===Zi)return-1;if(e===Ws||i===Zi)return 1;{const t=ed(i),n=ed(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},Zy=function(i,e){return i===e?0:i<e?-1:1},hr=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Tt(e))},ph=function(i){if(typeof i!="object"||i===null)return Tt(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=Tt(e[n]),t+=":",t+=ph(i[e[n]]);return t+="}",t},zp=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let s=0;s<t;s+=e)s+e>t?n.push(i.substring(s,t)):n.push(i.substring(s,s+e));return n};function Ot(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const Hp=function(i){Z(!fh(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let s,r,o,a,c;i===0?(r=0,o=0,s=1/i===-1/0?1:0):(s=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(i)/Math.LN2),n),r=a+n,o=Math.round(i*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(i/Math.pow(2,1-n-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Qy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ex=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tx(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const nx=new RegExp("^-?(0*)\\d{1,10}$"),ix=-2147483648,sx=2147483647,ed=function(i){if(nx.test(i)){const e=Number(i);if(e>=ix&&e<=sx)return e}return null},sr=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Xt("Exception was thrown by user callback.",t),e},Math.floor(0))}},rx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cr=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xt(e)}}class Yo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="5",Vp="v",Gp="s",Wp="r",qp="f",Xp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$p="ls",Yp="p",ol="ac",jp="websocket",Kp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,n,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cx(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Zp(i,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let n;if(e===jp)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Kp)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cx(i)&&(t.ns=i.namespace);const s=[];return Ot(t,(r,o)=>{s.push(r+"="+o)}),n+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.counters_={}}incrementCounter(e,t=1){Pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return K_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={},uc={};function _h(i){const e=i.toString();return hc[e]||(hc[e]=new lx),hc[e]}function hx(i,e){const t=i.toString();return uc[t]||(uc[t]=e()),uc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<n.length;++s)n[s]&&sr(()=>{this.onMessage_(n[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="start",dx="close",fx="pLPCommand",px="pRTLPCB",Qp="id",em="pw",tm="ser",mx="cb",_x="seg",gx="ts",vx="d",yx="dframe",nm=1870,im=30,xx=nm-im,Sx=25e3,Ex=3e4;class Rs{constructor(e,t,n,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=_h(t),this.urlFn=c=>(this.appCheckToken&&(c[ol]=this.appCheckToken),Zp(t,Kp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ux(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ex)),Jy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gh((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===td)this.id=a,this.password=c;else if(o===dx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[td]="t",n[tm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[mx]=this.scriptTagHolder.uniqueCallbackIdentifier),n[Vp]=mh,this.transportSessionId&&(n[Gp]=this.transportSessionId),this.lastSessionId&&(n[$p]=this.lastSessionId),this.applicationId&&(n[Yp]=this.applicationId),this.appCheckToken&&(n[ol]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xp.test(location.hostname)&&(n[Wp]=qp);const s=this.urlFn(n);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rs.forceAllow_=!0}static forceDisallow(){Rs.forceDisallow_=!0}static isAvailable(){return Rs.forceAllow_?!0:!Rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qy()&&!ex()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Wf(t),s=zp(n,xx);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[yx]="t",n[Qp]=e,n[em]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Tt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gh{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Yy(),window[fx+this.uniqueCallbackIdentifier]=e,window[px+this.uniqueCallbackIdentifier]=t,this.myIFrame=gh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ut("frame writing exception"),a.stack&&Ut(a.stack),Ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ut("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qp]=this.myID,e[em]=this.myPW,e[tm]=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+im+n.length<=nm;){const o=this.pendingSegs.shift();n=n+"&"+_x+s+"="+o.seg+"&"+gx+s+"="+o.ts+"&"+vx+s+"="+o.d,s++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(Sx)),r=()=>{clearTimeout(s),n()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const s=n.readyState;(!s||s==="loaded"||s==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=16384,bx=45e3;let da=null;typeof MozWebSocket<"u"?da=MozWebSocket:typeof WebSocket<"u"&&(da=WebSocket);class pn{constructor(e,t,n,s,r,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=_h(t),this.connURL=pn.connectionURL_(t,o,a,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,r){const o={};return o[Vp]=mh,typeof location<"u"&&location.hostname&&Xp.test(location.hostname)&&(o[Wp]=qp),t&&(o[Gp]=t),n&&(o[$p]=n),s&&(o[ol]=s),r&&(o[Yp]=r),Zp(e,jp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xi.set("previous_websocket_failure",!0);try{let n;ag(),this.mySock=new da(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const s=n.message||n.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&da!==null&&!pn.forceDisallow_}static previouslyFailed(){return Xi.isInMemoryStorage||Xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=kr(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=zp(t,Mx);n.length>1&&this.sendString_(String(n.length));for(let s=0;s<n.length;s++)this.sendString_(n[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bx))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rs,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pn&&pn.isAvailable();let n=t&&!pn.previouslyFailed();if(e.webSocketOnly&&(t||Xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[pn];else{const s=this.transports_=[];for(const r of zr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);zr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=6e4,Tx=5e3,Cx=10*1024,Ax=100*1024,dc="t",nd="d",Rx="s",id="r",Ix="e",sd="o",rd="a",od="n",ad="p",Px="h";class Lx{constructor(e,t,n,s,r,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new zr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ax?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dc in e){const t=e[dc];t===rd?this.upgradeIfSecondaryHealthy_():t===id?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=hr("t",e),n=hr("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:od,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=hr("t",e),n=hr("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=hr(dc,e);if(nd in e){const n=e[nd];if(t===Px){const s=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===od){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Rx?this.onConnectionShutdown_(n):t===id?this.onReset_(n):t===Ix?rl("Server Error: "+n):t===sd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),mh!==n&&Xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let s=0;s<n.length;s++)n[s].callback.apply(n[s].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!n||n===s[r].context)){s.splice(r,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends rm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fa}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=32,ld=768;let rt=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[n]=this.pieces_[s],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function je(){return new rt("")}function He(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function wi(i){return i.pieces_.length-i.pieceNum_}function at(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new rt(i.pieces_,e)}function vh(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function Dx(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function Hr(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function om(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new rt(e,0)}function mt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof rt)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let s=0;s<n.length;s++)n[s].length>0&&t.push(n[s])}return new rt(t,0)}function Ge(i){return i.pieceNum_>=i.pieces_.length}function qt(i,e){const t=He(i),n=He(e);if(t===null)return e;if(t===n)return qt(at(i),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Nx(i,e){const t=Hr(i,0),n=Hr(e,0);for(let s=0;s<t.length&&s<n.length;s++){const r=ss(t[s],n[s]);if(r!==0)return r}return t.length===n.length?0:t.length<n.length?-1:1}function yh(i,e){if(wi(i)!==wi(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function an(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(wi(i)>wi(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class Ux{constructor(e,t){this.errorPrefix_=t,this.parts_=Hr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Na(this.parts_[n]);am(this)}}function Ox(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Na(e),am(i)}function kx(i){const e=i.parts_.pop();i.byteLength_-=Na(e),i.parts_.length>0&&(i.byteLength_-=1)}function am(i){if(i.byteLength_>ld)throw new Error(i.errorPrefix_+"has a key path longer than "+ld+" bytes ("+i.byteLength_+").");if(i.parts_.length>cd)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cd+") or object contains a cycle "+Hi(i))}function Hi(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends rm{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}static getInstance(){return new xh}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=1e3,Fx=60*5*1e3,hd=30*1e3,Bx=1.3,zx=3e4,Hx="server_kill",ud=3;class Yn extends sm{constructor(e,t,n,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Yn.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ur,this.maxReconnectDelay_=Fx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Tt(r)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Jr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const r={p:n},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Yn.warnOnListenWarnings_(c,t),(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(n,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pn(e,"w")){const n=Hs(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fg(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=n,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,r){this.initConnection_();const o={p:t,d:n};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const r=n.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):rl("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zx&&(this.reconnectDelay_=ur),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(u){Z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ut("getToken() completed but was canceled"):(Ut("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Lx(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,f=>{Xt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hx)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Xt(u),c())}}}interrupt(e){Ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jc(this.interruptReasons_)&&(this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(r=>ph(r)).join("$"):n="default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new rt(e).toString();let s;if(this.listens.has(n)){const r=this.listens.get(n);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){Ut("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ud&&(this.reconnectDelay_=hd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ut("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ud&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kp.replace(/\./g,"-")]=1,eh()?e["framework.cordova"]=1:jf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fa.getInstance().currentlyOnline();return jc(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ve(Ws,e),s=new Ve(Ws,t);return this.compare(n,s)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class cm extends Fa{static get __EMPTY_NODE(){return yo}static set __EMPTY_NODE(e){yo=e}compare(e,t){return ss(e.name,t.name)}isDefinedOn(e){throw er("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(Zi,yo)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,yo)}toString(){return".key"}}const Os=new cm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,n,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pt{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=n??Pt.RED,this.left=s??jt.EMPTY_NODE,this.right=r??jt.EMPTY_NODE}copy(e,t,n,s,r){return new Pt(e??this.key,t??this.value,n??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,n),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return jt.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pt.RED=!0;Pt.BLACK=!1;class Vx{copy(e,t,n,s,r){return this}insert(e,t,n){return new Pt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,t=jt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new jt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pt.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(s=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xo(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new Vx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(i,e){return ss(i.name,e.name)}function Sh(i,e){return ss(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;function Wx(i){al=i}const lm=function(i){return typeof i=="number"?"number:"+Hp(i):"string:"+i},hm=function(i){if(i.isLeafNode()){const e=i.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pn(e,".sv"),"Priority must be a string or number.")}else Z(i===al||i.isEmpty(),"priority of unexpected type.");Z(i===al||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;class It{constructor(e,t=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hm(this.priorityNode_)}static set __childrenNodeConstructor(e){dd=e}static get __childrenNodeConstructor(){return dd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ge(e)?this:He(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=He(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(Z(n!==".priority"||wi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Hp(this.value_):e+=this.value_,this.lazyHash_=Bp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=It.VALUE_TYPE_ORDER.indexOf(t),r=It.VALUE_TYPE_ORDER.indexOf(n);return Z(s>=0,"Unknown leaf type: "+t),Z(r>=0,"Unknown leaf type: "+n),s===r?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let um,dm;function qx(i){um=i}function Xx(i){dm=i}class $x extends Fa{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),r=n.compareTo(s);return r===0?ss(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(Zi,new It("[PRIORITY-POST]",dm))}makePost(e,t){const n=um(e);return new Ve(t,new It("[PRIORITY-POST]",n))}toString(){return".priority"}}const _t=new $x;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=Math.log(2);class jx{constructor(e){const t=r=>parseInt(Math.log(r)/Yx,10),n=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=n(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pa=function(i,e,t,n){i.sort(e);const s=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=i[c],d=t?t(u):u,new Pt(d,u.node,Pt.BLACK,null,null);{const f=parseInt(h/2,10)+c,_=s(c,f),g=s(f+1,l);return u=i[f],d=t?t(u):u,new Pt(d,u.node,Pt.BLACK,_,g)}},r=function(c){let l=null,h=null,u=i.length;const d=function(_,g){const m=u-_,p=u;u-=_;const M=s(m+1,p),S=i[m],b=t?t(S):S;f(new Pt(b,S.node,g,null,M))},f=function(_){l?(l.left=_,l=_):(h=_,l=_)};for(let _=0;_<c.count;++_){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(_+1));g?d(m,Pt.BLACK):(d(m,Pt.BLACK),d(m,Pt.RED))}return h},o=new jx(i.length),a=r(o);return new jt(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const ls={};class Wn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Z(ls&&_t,"ChildrenNode.ts has not been loaded"),fc=fc||new Wn({".priority":ls},{".priority":_t}),fc}get(e){const t=Hs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof jt?t:null}hasIndex(e){return Pn(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const r=t.getIterator(Ve.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=r.getNext();let a;s?a=pa(n,e.getCompare()):a=ls;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Wn(h,l)}addToIndexes(e,t){const n=sa(this.indexes_,(s,r)=>{const o=Hs(this.indexSet_,r);if(Z(o,"Missing index implementation for "+r),s===ls)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ve.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),pa(a,o.getCompare())}else return ls;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new Ve(e.name,a))),c.insert(e,e.node)}});return new Wn(n,this.indexSet_)}removeFromIndexes(e,t){const n=sa(this.indexes_,s=>{if(s===ls)return s;{const r=t.get(e.name);return r?s.remove(new Ve(e.name,r)):s}});return new Wn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;class Me{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&hm(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dr||(dr=new Me(new jt(Sh),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dr}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?dr:t}}getChild(e){const t=He(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new Ve(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=s.isEmpty()?dr:this.priorityNode_;return new Me(s,o,r)}}updateChild(e,t){const n=He(e);if(n===null)return t;{Z(He(e)!==".priority"||wi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(at(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,r=!0;if(this.forEachChild(_t,(o,a)=>{t[o]=a.val(e),n++,r&&Me.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lm(this.getPriority().val())+":"),this.forEachChild(_t,(t,n)=>{const s=n.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Bp(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const r=s.getPredecessorKey(new Ve(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ve(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ve.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(_t),s=t.getIterator(_t);let r=n.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=n.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kx extends Me{constructor(){super(new jt(Sh),Me.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const ro=new Kx;Object.defineProperties(Ve,{MIN:{value:new Ve(Ws,Me.EMPTY_NODE)},MAX:{value:new Ve(Zi,ro)}});cm.__EMPTY_NODE=Me.EMPTY_NODE;It.__childrenNodeConstructor=Me;Wx(ro);Xx(ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=!0;function wt(i,e=null){if(i===null)return Me.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new It(t,wt(e))}if(!(i instanceof Array)&&Jx){const t=[];let n=!1;if(Ot(i,(o,a)=>{if(o.substring(0,1)!=="."){const c=wt(a);c.isEmpty()||(n=n||!c.getPriority().isEmpty(),t.push(new Ve(o,c)))}}),t.length===0)return Me.EMPTY_NODE;const r=pa(t,Gx,o=>o.name,Sh);if(n){const o=pa(t,_t.getCompare());return new Me(r,wt(e),new Wn({".priority":o},{".priority":_t}))}else return new Me(r,wt(e),Wn.Default)}else{let t=Me.EMPTY_NODE;return Ot(i,(n,s)=>{if(Pn(i,n)&&n.substring(0,1)!=="."){const r=wt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(n,r))}}),t.updatePriority(wt(e))}}qx(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx extends Fa{constructor(e){super(),this.indexPath_=e,Z(!Ge(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),r=n.compareTo(s);return r===0?ss(e.name,t.name):r}makePost(e,t){const n=wt(e),s=Me.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ve(t,s)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,ro);return new Ve(Zi,e)}toString(){return Hr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx extends Fa{compare(e,t){const n=e.node.compareTo(t.node);return n===0?ss(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,t){const n=wt(e);return new Ve(t,n)}toString(){return".value"}}const eS=new Qx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(i){return{type:"value",snapshotNode:i}}function qs(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Vr(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Gr(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function tS(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.index_=e}updateChild(e,t,n,s,r,o){Z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Vr(t,a)):Z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qs(t,n)):o.trackChildChange(Gr(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(_t,(s,r)=>{t.hasChild(s)||n.trackChildChange(Vr(s,r))}),t.isLeafNode()||t.forEachChild(_t,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||n.trackChildChange(Gr(s,r,o))}else n.trackChildChange(qs(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Me.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.indexedFilter_=new Eh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wr.getStartPost_(e),this.endPost_=Wr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,r,o){return this.matches(new Ve(t,n))||(n=Me.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Me.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Me.EMPTY_NODE);const r=this;return t.forEachChild(_t,(o,a)=>{r.matches(new Ve(o,a))||(s=s.updateImmediateChild(o,Me.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Wr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,r,o){return this.rangedFilter_.matches(new Ve(t,n))||(n=Me.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=Me.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Me.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Me.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Me.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;Z(a.numChildren()===this.limit_,"");const c=new Ve(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(h&&!n.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Gr(t,n,u)),a.updateImmediateChild(t,n);{r!=null&&r.trackChildChange(Vr(t,u));const g=a.updateImmediateChild(t,Me.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(qs(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return n.isEmpty()?e:h&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Vr(l.name,l.node)),r.trackChildChange(qs(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Me.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ws}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new Mh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iS(i){return i.loadsAllData()?new Eh(i.getIndex()):i.hasLimit()?new nS(i):new Wr(i)}function fd(i){const e={};if(i.isDefault())return e;let t;if(i.index_===_t?t="$priority":i.index_===eS?t="$value":i.index_===Os?t="$key":(Z(i.index_ instanceof Zx,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Tt(t),i.startSet_){const n=i.startAfterSet_?"startAfter":"startAt";e[n]=Tt(i.indexStartValue_),i.startNameSet_&&(e[n]+=","+Tt(i.indexStartName_))}if(i.endSet_){const n=i.endBeforeSet_?"endBefore":"endAt";e[n]=Tt(i.indexEndValue_),i.endNameSet_&&(e[n]+=","+Tt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function pd(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==_t&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends sm{constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ma.getListenId_(e,n),a={};this.listens_[o]=a;const c=fd(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,n),Hs(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const n=ma.getListenId_(e,t);delete this.listens_[n]}get(e){const t=fd(e._queryParams),n=e._path.toString(),s=new Jr;return this.restRequest_(n+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(n,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=kr(a.responseText)}catch{Xt("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,c)}else a.status!==401&&a.status!==404&&Xt("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return{value:null,children:new Map}}function pm(i,e,t){if(Ge(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=He(e);i.children.has(n)||i.children.set(n,_a());const s=i.children.get(n);e=at(e),pm(s,e,t)}}function cl(i,e,t){i.value!==null?t(e,i.value):rS(i,(n,s)=>{const r=new rt(e.toString()+"/"+n);cl(s,r,t)})}function rS(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ot(this.last_,(n,s)=>{t[n]=t[n]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=10*1e3,aS=30*1e3,cS=5*60*1e3;class lS{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new oS(e);const n=md+(aS-md)*Math.random();Cr(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ot(e,(s,r)=>{r>0&&Pn(this.statsToReport_,s)&&(t[s]=r,n=!0)}),n&&this.server_.reportStats(t),Cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*cS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_n||(_n={}));function bh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Th(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=_n.ACK_USER_WRITE,this.source=bh()}operationForChild(e){if(Ge(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new rt(e));return new ga(je(),t,this.revert)}}else return Z(He(this.path)===e,"operationForChild called for unrelated child."),new ga(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.source=e,this.path=t,this.type=_n.LISTEN_COMPLETE}operationForChild(e){return Ge(this.path)?new qr(this.source,je()):new qr(this.source,at(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=_n.OVERWRITE}operationForChild(e){return Ge(this.path)?new Qi(this.source,je(),this.snap.getImmediateChild(e)):new Qi(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=_n.MERGE}operationForChild(e){if(Ge(this.path)){const t=this.children.subtree(new rt(e));return t.isEmpty()?null:t.value?new Qi(this.source,je(),t.value):new Xs(this.source,je(),t)}else return Z(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xs(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=He(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uS(i,e,t,n){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&i.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(tS(o.childName,o.snapshotNode))}),fr(i,s,"child_removed",e,n,t),fr(i,s,"child_added",e,n,t),fr(i,s,"child_moved",r,n,t),fr(i,s,"child_changed",e,n,t),fr(i,s,"value",e,n,t),s}function fr(i,e,t,n,s,r){const o=n.filter(a=>a.type===t);o.sort((a,c)=>fS(i,a,c)),o.forEach(a=>{const c=dS(i,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,i.query_))})})}function dS(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function fS(i,e,t){if(e.childName==null||t.childName==null)throw er("Should only compare child_ events.");const n=new Ve(e.childName,e.snapshotNode),s=new Ve(t.childName,t.snapshotNode);return i.index_.compare(n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(i,e){return{eventCache:i,serverCache:e}}function Ar(i,e,t,n){return Ba(new Ti(e,t,n),i.serverCache)}function mm(i,e,t,n){return Ba(i.eventCache,new Ti(e,t,n))}function va(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function es(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;const pS=()=>(pc||(pc=new jt(Zy)),pc);class ot{constructor(e,t=pS()){this.value=e,this.children=t}static fromObject(e){let t=new ot(null);return Ot(e,(n,s)=>{t=t.set(new rt(n),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:je(),value:this.value};if(Ge(e))return null;{const n=He(e),s=this.children.get(n);if(s!==null){const r=s.findRootMostMatchingPathAndValue(at(e),t);return r!=null?{path:mt(new rt(n),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ge(e))return this;{const t=He(e),n=this.children.get(t);return n!==null?n.subtree(at(e)):new ot(null)}}set(e,t){if(Ge(e))return new ot(t,this.children);{const n=He(e),r=(this.children.get(n)||new ot(null)).set(at(e),t),o=this.children.insert(n,r);return new ot(this.value,o)}}remove(e){if(Ge(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=He(e),n=this.children.get(t);if(n){const s=n.remove(at(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ot(null):new ot(this.value,r)}else return this}}get(e){if(Ge(e))return this.value;{const t=He(e),n=this.children.get(t);return n?n.get(at(e)):null}}setTree(e,t){if(Ge(e))return t;{const n=He(e),r=(this.children.get(n)||new ot(null)).setTree(at(e),t);let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),new ot(this.value,o)}}fold(e){return this.fold_(je(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((s,r)=>{n[s]=r.fold_(mt(e,s),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,je(),t)}findOnPath_(e,t,n){const s=this.value?n(t,this.value):!1;if(s)return s;if(Ge(e))return null;{const r=He(e),o=this.children.get(r);return o?o.findOnPath_(at(e),mt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,je(),t)}foreachOnPath_(e,t,n){if(Ge(e))return this;{this.value&&n(t,this.value);const s=He(e),r=this.children.get(s);return r?r.foreachOnPath_(at(e),mt(t,s),n):new ot(null)}}foreach(e){this.foreach_(je(),e)}foreach_(e,t){this.children.inorderTraversal((n,s)=>{s.foreach_(mt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new ot(null))}}function Rr(i,e,t){if(Ge(e))return new vn(new ot(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const s=n.path;let r=n.value;const o=qt(s,e);return r=r.updateChild(o,t),new vn(i.writeTree_.set(s,r))}else{const s=new ot(t),r=i.writeTree_.setTree(e,s);return new vn(r)}}}function ll(i,e,t){let n=i;return Ot(t,(s,r)=>{n=Rr(n,mt(e,s),r)}),n}function _d(i,e){if(Ge(e))return vn.empty();{const t=i.writeTree_.setTree(e,new ot(null));return new vn(t)}}function hl(i,e){return rs(i,e)!=null}function rs(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(qt(t.path,e)):null}function gd(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_t,(n,s)=>{e.push(new Ve(n,s))}):i.writeTree_.children.inorderTraversal((n,s)=>{s.value!=null&&e.push(new Ve(n,s.value))}),e}function Si(i,e){if(Ge(e))return i;{const t=rs(i,e);return t!=null?new vn(new ot(t)):new vn(i.writeTree_.subtree(e))}}function ul(i){return i.writeTree_.isEmpty()}function $s(i,e){return _m(je(),i.writeTree_,e)}function _m(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(Z(r.value!==null,"Priority writes must always be leaf nodes"),n=r.value):t=_m(mt(i,s),r,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(mt(i,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(i,e){return xm(e,i)}function mS(i,e,t,n,s){Z(n>i.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:s}),s&&(i.visibleWrites=Rr(i.visibleWrites,e,t)),i.lastWriteId=n}function _S(i,e,t,n){Z(n>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:t,writeId:n,visible:!0}),i.visibleWrites=ll(i.visibleWrites,e,t),i.lastWriteId=n}function gS(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function vS(i,e){const t=i.allWrites.findIndex(a=>a.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let s=n.visible,r=!1,o=i.allWrites.length-1;for(;s&&o>=0;){const a=i.allWrites[o];a.visible&&(o>=t&&yS(a,n.path)?s=!1:an(n.path,a.path)&&(r=!0)),o--}if(s){if(r)return xS(i),!0;if(n.snap)i.visibleWrites=_d(i.visibleWrites,n.path);else{const a=n.children;Ot(a,c=>{i.visibleWrites=_d(i.visibleWrites,mt(n.path,c))})}return!0}else return!1}function yS(i,e){if(i.snap)return an(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&an(mt(i.path,t),e))return!0;return!1}function xS(i){i.visibleWrites=gm(i.allWrites,SS,je()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function SS(i){return i.visible}function gm(i,e,t){let n=vn.empty();for(let s=0;s<i.length;++s){const r=i[s];if(e(r)){const o=r.path;let a;if(r.snap)an(t,o)?(a=qt(t,o),n=Rr(n,a,r.snap)):an(o,t)&&(a=qt(o,t),n=Rr(n,je(),r.snap.getChild(a)));else if(r.children){if(an(t,o))a=qt(t,o),n=ll(n,a,r.children);else if(an(o,t))if(a=qt(o,t),Ge(a))n=ll(n,je(),r.children);else{const c=Hs(r.children,He(a));if(c){const l=c.getChild(at(a));n=Rr(n,je(),l)}}}else throw er("WriteRecord should have .snap or .children")}}return n}function vm(i,e,t,n,s){if(!n&&!s){const r=rs(i.visibleWrites,e);if(r!=null)return r;{const o=Si(i.visibleWrites,e);if(ul(o))return t;if(t==null&&!hl(o,je()))return null;{const a=t||Me.EMPTY_NODE;return $s(o,a)}}}else{const r=Si(i.visibleWrites,e);if(!s&&ul(r))return t;if(!s&&t==null&&!hl(r,je()))return null;{const o=function(l){return(l.visible||s)&&(!n||!~n.indexOf(l.writeId))&&(an(l.path,e)||an(e,l.path))},a=gm(i.allWrites,o,e),c=t||Me.EMPTY_NODE;return $s(a,c)}}}function ES(i,e,t){let n=Me.EMPTY_NODE;const s=rs(i.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_t,(r,o)=>{n=n.updateImmediateChild(r,o)}),n;if(t){const r=Si(i.visibleWrites,e);return t.forEachChild(_t,(o,a)=>{const c=$s(Si(r,new rt(o)),a);n=n.updateImmediateChild(o,c)}),gd(r).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const r=Si(i.visibleWrites,e);return gd(r).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function MS(i,e,t,n,s){Z(n||s,"Either existingEventSnap or existingServerSnap must exist");const r=mt(e,t);if(hl(i.visibleWrites,r))return null;{const o=Si(i.visibleWrites,r);return ul(o)?s.getChild(t):$s(o,s.getChild(t))}}function bS(i,e,t,n){const s=mt(e,t),r=rs(i.visibleWrites,s);if(r!=null)return r;if(n.isCompleteForChild(t)){const o=Si(i.visibleWrites,s);return $s(o,n.getNode().getImmediateChild(t))}else return null}function wS(i,e){return rs(i.visibleWrites,e)}function TS(i,e,t,n,s,r,o){let a;const c=Si(i.visibleWrites,e),l=rs(c,je());if(l!=null)a=l;else if(t!=null)a=$s(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let f=d.getNext();for(;f&&h.length<s;)u(f,n)!==0&&h.push(f),f=d.getNext();return h}else return[]}function CS(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function ya(i,e,t,n){return vm(i.writeTree,i.treePath,e,t,n)}function Ch(i,e){return ES(i.writeTree,i.treePath,e)}function vd(i,e,t,n){return MS(i.writeTree,i.treePath,e,t,n)}function xa(i,e){return wS(i.writeTree,mt(i.treePath,e))}function AS(i,e,t,n,s,r){return TS(i.writeTree,i.treePath,e,t,n,s,r)}function Ah(i,e,t){return bS(i.writeTree,i.treePath,e,t)}function ym(i,e){return xm(mt(i.treePath,e),i.writeTree)}function xm(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(n!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(n,Gr(n,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(n,Vr(n,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(n,qs(n,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(n,Gr(n,e.snapshotNode,s.oldSnap));else throw er("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Sm=new IS;class Rh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ah(this.writes_,e,n)}}getChildAfterChild(e,t,n){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),r=AS(this.writes_,s,t,1,n,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(i){return{filter:i}}function LS(i,e){Z(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function DS(i,e,t,n,s){const r=new RS;let o,a;if(t.type===_n.OVERWRITE){const l=t;l.source.fromUser?o=dl(i,e,l.path,l.snap,n,s,r):(Z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Ge(l.path),o=Sa(i,e,l.path,l.snap,n,s,a,r))}else if(t.type===_n.MERGE){const l=t;l.source.fromUser?o=US(i,e,l.path,l.children,n,s,r):(Z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=fl(i,e,l.path,l.children,n,s,a,r))}else if(t.type===_n.ACK_USER_WRITE){const l=t;l.revert?o=FS(i,e,l.path,n,s,r):o=OS(i,e,l.path,l.affectedTree,n,s,r)}else if(t.type===_n.LISTEN_COMPLETE)o=kS(i,e,t.path,n,r);else throw er("Unknown operation type: "+t.type);const c=r.getChanges();return NS(e,o,c),{viewCache:o,changes:c}}function NS(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const s=n.getNode().isLeafNode()||n.getNode().isEmpty(),r=va(i);(t.length>0||!i.eventCache.isFullyInitialized()||s&&!n.getNode().equals(r)||!n.getNode().getPriority().equals(r.getPriority()))&&t.push(fm(va(e)))}}function Em(i,e,t,n,s,r){const o=e.eventCache;if(xa(n,t)!=null)return e;{let a,c;if(Ge(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=es(e),h=l instanceof Me?l:Me.EMPTY_NODE,u=Ch(n,h);a=i.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=ya(n,es(e));a=i.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=He(t);if(l===".priority"){Z(wi(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=vd(n,t,h,c);u!=null?a=i.filter.updatePriority(h,u):a=o.getNode()}else{const h=at(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=vd(n,t,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=Ah(n,l,e.serverCache);u!=null?a=i.filter.updateChild(o.getNode(),l,u,h,s,r):a=o.getNode()}}return Ar(e,a,o.isFullyInitialized()||Ge(t),i.filter.filtersNodes())}}function Sa(i,e,t,n,s,r,o,a){const c=e.serverCache;let l;const h=o?i.filter:i.filter.getIndexedFilter();if(Ge(t))l=h.updateFullNode(c.getNode(),n,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,n);l=h.updateFullNode(c.getNode(),f,null)}else{const f=He(t);if(!c.isCompleteForPath(t)&&wi(t)>1)return e;const _=at(t),m=c.getNode().getImmediateChild(f).updateChild(_,n);f===".priority"?l=h.updatePriority(c.getNode(),m):l=h.updateChild(c.getNode(),f,m,_,Sm,null)}const u=mm(e,l,c.isFullyInitialized()||Ge(t),h.filtersNodes()),d=new Rh(s,u,r);return Em(i,u,t,s,d,a)}function dl(i,e,t,n,s,r,o){const a=e.eventCache;let c,l;const h=new Rh(s,e,r);if(Ge(t))l=i.filter.updateFullNode(e.eventCache.getNode(),n,o),c=Ar(e,l,!0,i.filter.filtersNodes());else{const u=He(t);if(u===".priority")l=i.filter.updatePriority(e.eventCache.getNode(),n),c=Ar(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=at(t),f=a.getNode().getImmediateChild(u);let _;if(Ge(d))_=n;else{const g=h.getCompleteChild(u);g!=null?vh(d)===".priority"&&g.getChild(om(d)).isEmpty()?_=g:_=g.updateChild(d,n):_=Me.EMPTY_NODE}if(f.equals(_))c=e;else{const g=i.filter.updateChild(a.getNode(),u,_,d,h,o);c=Ar(e,g,a.isFullyInitialized(),i.filter.filtersNodes())}}}return c}function yd(i,e){return i.eventCache.isCompleteForChild(e)}function US(i,e,t,n,s,r,o){let a=e;return n.foreach((c,l)=>{const h=mt(t,c);yd(e,He(h))&&(a=dl(i,a,h,l,s,r,o))}),n.foreach((c,l)=>{const h=mt(t,c);yd(e,He(h))||(a=dl(i,a,h,l,s,r,o))}),a}function xd(i,e,t){return t.foreach((n,s)=>{e=e.updateChild(n,s)}),e}function fl(i,e,t,n,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Ge(t)?l=n:l=new ot(null).setTree(t,n);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=xd(i,f,d);c=Sa(i,c,new rt(u),_,s,r,o,a)}}),l.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),g=xd(i,_,d);c=Sa(i,c,new rt(u),g,s,r,o,a)}}),c}function OS(i,e,t,n,s,r,o){if(xa(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(n.value!=null){if(Ge(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Sa(i,e,t,c.getNode().getChild(t),s,r,a,o);if(Ge(t)){let l=new ot(null);return c.getNode().forEachChild(Os,(h,u)=>{l=l.set(new rt(h),u)}),fl(i,e,t,l,s,r,a,o)}else return e}else{let l=new ot(null);return n.foreach((h,u)=>{const d=mt(t,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),fl(i,e,t,l,s,r,a,o)}}function kS(i,e,t,n,s){const r=e.serverCache,o=mm(e,r.getNode(),r.isFullyInitialized()||Ge(t),r.isFiltered());return Em(i,o,t,n,Sm,s)}function FS(i,e,t,n,s,r){let o;if(xa(n,t)!=null)return e;{const a=new Rh(n,e,s),c=e.eventCache.getNode();let l;if(Ge(t)||He(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ya(n,es(e));else{const u=e.serverCache.getNode();Z(u instanceof Me,"serverChildren would be complete if leaf node"),h=Ch(n,u)}h=h,l=i.filter.updateFullNode(c,h,r)}else{const h=He(t);let u=Ah(n,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=i.filter.updateChild(c,h,u,at(t),a,r):e.eventCache.getNode().hasChild(h)?l=i.filter.updateChild(c,h,Me.EMPTY_NODE,at(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ya(n,es(e)),o.isLeafNode()&&(l=i.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||xa(n,je())!=null,Ar(e,l,o,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new Eh(n.getIndex()),r=iS(n);this.processor_=PS(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(Me.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Me.EMPTY_NODE,a.getNode(),null),h=new Ti(c,o.isFullyInitialized(),s.filtersNodes()),u=new Ti(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ba(u,h),this.eventGenerator_=new hS(this.query_)}get query(){return this.query_}}function zS(i){return i.viewCache_.serverCache.getNode()}function HS(i){return va(i.viewCache_)}function VS(i,e){const t=es(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ge(e)&&!t.getImmediateChild(He(e)).isEmpty())?t.getChild(e):null}function Sd(i){return i.eventRegistrations_.length===0}function GS(i,e){i.eventRegistrations_.push(e)}function Ed(i,e,t){const n=[];if(t){Z(e==null,"A cancel should cancel all event registrations.");const s=i.query._path;i.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&n.push(o)})}if(e){let s=[];for(let r=0;r<i.eventRegistrations_.length;++r){const o=i.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(i.eventRegistrations_.slice(r+1));break}}i.eventRegistrations_=s}else i.eventRegistrations_=[];return n}function Md(i,e,t,n){e.type===_n.MERGE&&e.source.queryId!==null&&(Z(es(i.viewCache_),"We should always have a full cache before handling merges"),Z(va(i.viewCache_),"Missing event cache, even though we have a server cache"));const s=i.viewCache_,r=DS(i.processor_,s,e,t,n);return LS(i.processor_,r.viewCache),Z(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=r.viewCache,Mm(i,r.changes,r.viewCache.eventCache.getNode(),null)}function WS(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_t,(r,o)=>{n.push(qs(r,o))}),t.isFullyInitialized()&&n.push(fm(t.getNode())),Mm(i,n,t.getNode(),e)}function Mm(i,e,t,n){const s=n?[n]:i.eventRegistrations_;return uS(i.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class bm{constructor(){this.views=new Map}}function qS(i){Z(!Ea,"__referenceConstructor has already been defined"),Ea=i}function XS(){return Z(Ea,"Reference.ts has not been loaded"),Ea}function $S(i){return i.views.size===0}function Ih(i,e,t,n){const s=e.source.queryId;if(s!==null){const r=i.views.get(s);return Z(r!=null,"SyncTree gave us an op for an invalid query."),Md(r,e,t,n)}else{let r=[];for(const o of i.views.values())r=r.concat(Md(o,e,t,n));return r}}function wm(i,e,t,n,s){const r=e._queryIdentifier,o=i.views.get(r);if(!o){let a=ya(t,s?n:null),c=!1;a?c=!0:n instanceof Me?(a=Ch(t,n),c=!1):(a=Me.EMPTY_NODE,c=!1);const l=Ba(new Ti(a,c,!1),new Ti(n,s,!1));return new BS(e,l)}return o}function YS(i,e,t,n,s,r){const o=wm(i,e,n,s,r);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,o),GS(o,t),WS(o,t)}function jS(i,e,t,n){const s=e._queryIdentifier,r=[];let o=[];const a=Ci(i);if(s==="default")for(const[c,l]of i.views.entries())o=o.concat(Ed(l,t,n)),Sd(l)&&(i.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=i.views.get(s);c&&(o=o.concat(Ed(c,t,n)),Sd(c)&&(i.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ci(i)&&r.push(new(XS())(e._repo,e._path)),{removed:r,events:o}}function Tm(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ei(i,e){let t=null;for(const n of i.views.values())t=t||VS(n,e);return t}function Cm(i,e){if(e._queryParams.loadsAllData())return Ha(i);{const n=e._queryIdentifier;return i.views.get(n)}}function Am(i,e){return Cm(i,e)!=null}function Ci(i){return Ha(i)!=null}function Ha(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;function KS(i){Z(!Ma,"__referenceConstructor has already been defined"),Ma=i}function JS(){return Z(Ma,"Reference.ts has not been loaded"),Ma}let ZS=1;class bd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=CS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rm(i,e,t,n,s){return mS(i.pendingWriteTree_,e,t,n,s),s?rr(i,new Qi(bh(),e,t)):[]}function QS(i,e,t,n){_S(i.pendingWriteTree_,e,t,n);const s=ot.fromObject(t);return rr(i,new Xs(bh(),e,s))}function _i(i,e,t=!1){const n=gS(i.pendingWriteTree_,e);if(vS(i.pendingWriteTree_,e)){let r=new ot(null);return n.snap!=null?r=r.set(je(),!0):Ot(n.children,o=>{r=r.set(new rt(o),!0)}),rr(i,new ga(n.path,r,t))}else return[]}function oo(i,e,t){return rr(i,new Qi(wh(),e,t))}function eE(i,e,t){const n=ot.fromObject(t);return rr(i,new Xs(wh(),e,n))}function tE(i,e){return rr(i,new qr(wh(),e))}function nE(i,e,t){const n=Lh(i,t);if(n){const s=Dh(n),r=s.path,o=s.queryId,a=qt(r,e),c=new qr(Th(o),a);return Nh(i,r,c)}else return[]}function ba(i,e,t,n,s=!1){const r=e._path,o=i.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Am(o,e))){const c=jS(o,e,t,n);$S(o)&&(i.syncPointTree_=i.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=i.syncPointTree_.findOnPath(r,(d,f)=>Ci(f));if(h&&!u){const d=i.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=rE(d);for(let _=0;_<f.length;++_){const g=f[_],m=g.query,p=Dm(i,g);i.listenProvider_.startListening(Ir(m),Xr(i,m),p.hashFn,p.onComplete)}}}!u&&l.length>0&&!n&&(h?i.listenProvider_.stopListening(Ir(e),null):l.forEach(d=>{const f=i.queryToTagMap.get(Va(d));i.listenProvider_.stopListening(Ir(d),f)}))}oE(i,l)}return a}function Im(i,e,t,n){const s=Lh(i,n);if(s!=null){const r=Dh(s),o=r.path,a=r.queryId,c=qt(o,e),l=new Qi(Th(a),c,t);return Nh(i,o,l)}else return[]}function iE(i,e,t,n){const s=Lh(i,n);if(s){const r=Dh(s),o=r.path,a=r.queryId,c=qt(o,e),l=ot.fromObject(t),h=new Xs(Th(a),c,l);return Nh(i,o,h)}else return[]}function pl(i,e,t,n=!1){const s=e._path;let r=null,o=!1;i.syncPointTree_.foreachOnPath(s,(d,f)=>{const _=qt(d,s);r=r||Ei(f,_),o=o||Ci(f)});let a=i.syncPointTree_.get(s);a?(o=o||Ci(a),r=r||Ei(a,je())):(a=new bm,i.syncPointTree_=i.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=Me.EMPTY_NODE,i.syncPointTree_.subtree(s).foreachChild((f,_)=>{const g=Ei(_,je());g&&(r=r.updateImmediateChild(f,g))}));const l=Am(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Va(e);Z(!i.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=aE();i.queryToTagMap.set(d,f),i.tagToQueryMap.set(f,d)}const h=za(i.pendingWriteTree_,s);let u=YS(a,e,t,h,r,c);if(!l&&!o&&!n){const d=Cm(a,e);u=u.concat(cE(i,e,d))}return u}function Ph(i,e,t){const s=i.pendingWriteTree_,r=i.syncPointTree_.findOnPath(e,(o,a)=>{const c=qt(o,e),l=Ei(a,c);if(l)return l});return vm(s,e,r,t,!0)}function sE(i,e){const t=e._path;let n=null;i.syncPointTree_.foreachOnPath(t,(l,h)=>{const u=qt(l,t);n=n||Ei(h,u)});let s=i.syncPointTree_.get(t);s?n=n||Ei(s,je()):(s=new bm,i.syncPointTree_=i.syncPointTree_.set(t,s));const r=n!=null,o=r?new Ti(n,!0,!1):null,a=za(i.pendingWriteTree_,e._path),c=wm(s,e,a,r?o.getNode():Me.EMPTY_NODE,r);return HS(c)}function rr(i,e){return Pm(e,i.syncPointTree_,null,za(i.pendingWriteTree_,je()))}function Pm(i,e,t,n){if(Ge(i.path))return Lm(i,e,t,n);{const s=e.get(je());t==null&&s!=null&&(t=Ei(s,je()));let r=[];const o=He(i.path),a=i.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=ym(n,o);r=r.concat(Pm(a,c,l,h))}return s&&(r=r.concat(Ih(s,i,n,t))),r}}function Lm(i,e,t,n){const s=e.get(je());t==null&&s!=null&&(t=Ei(s,je()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=ym(n,o),h=i.operationForChild(o);h&&(r=r.concat(Lm(h,a,c,l)))}),s&&(r=r.concat(Ih(s,i,n,t))),r}function Dm(i,e){const t=e.query,n=Xr(i,t);return{hashFn:()=>(zS(e)||Me.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return n?nE(i,t._path,n):tE(i,t._path);{const r=tx(s,t);return ba(i,t,null,r)}}}}function Xr(i,e){const t=Va(e);return i.queryToTagMap.get(t)}function Va(i){return i._path.toString()+"$"+i._queryIdentifier}function Lh(i,e){return i.tagToQueryMap.get(e)}function Dh(i){const e=i.indexOf("$");return Z(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new rt(i.substr(0,e))}}function Nh(i,e,t){const n=i.syncPointTree_.get(e);Z(n,"Missing sync point for query tag that we're tracking");const s=za(i.pendingWriteTree_,e);return Ih(n,t,s,null)}function rE(i){return i.fold((e,t,n)=>{if(t&&Ci(t))return[Ha(t)];{let s=[];return t&&(s=Tm(t)),Ot(n,(r,o)=>{s=s.concat(o)}),s}})}function Ir(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(JS())(i._repo,i._path):i}function oE(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const s=Va(n),r=i.queryToTagMap.get(s);i.queryToTagMap.delete(s),i.tagToQueryMap.delete(r)}}}function aE(){return ZS++}function cE(i,e,t){const n=e._path,s=Xr(i,e),r=Dm(i,t),o=i.listenProvider_.startListening(Ir(e),s,r.hashFn,r.onComplete),a=i.syncPointTree_.subtree(n);if(s)Z(!Ci(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!Ge(l)&&h&&Ci(h))return[Ha(h).query];{let d=[];return h&&(d=d.concat(Tm(h).map(f=>f.query))),Ot(u,(f,_)=>{d=d.concat(_)}),d}});for(let l=0;l<c.length;++l){const h=c[l];i.listenProvider_.stopListening(Ir(h),Xr(i,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Uh(t)}node(){return this.node_}}class Oh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=mt(this.path_,e);return new Oh(this.syncTree_,t)}node(){return Ph(this.syncTree_,this.path_)}}const lE=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},wd=function(i,e,t){if(!i||typeof i!="object")return i;if(Z(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return hE(i[".sv"],e,t);if(typeof i[".sv"]=="object")return uE(i[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},hE=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+i)}},uE=function(i,e,t){i.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&Z(!1,"Unexpected increment value: "+n);const s=e.node();if(Z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return n;const o=s.getValue();return typeof o!="number"?n:o+n},Nm=function(i,e,t,n){return kh(e,new Oh(t,i),n)},Um=function(i,e,t){return kh(i,new Uh(e),t)};function kh(i,e,t){const n=i.getPriority().val(),s=wd(n,e.getImmediateChild(".priority"),t);let r;if(i.isLeafNode()){const o=i,a=wd(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new It(a,wt(s)):i}else{const o=i;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new It(s))),o.forEachChild(_t,(a,c)=>{const l=kh(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Bh(i,e){let t=e instanceof rt?e:new rt(e),n=i,s=He(t);for(;s!==null;){const r=Hs(n.node.children,s)||{children:{},childCount:0};n=new Fh(s,n,r),t=at(t),s=He(t)}return n}function or(i){return i.node.value}function Om(i,e){i.node.value=e,ml(i)}function km(i){return i.node.childCount>0}function dE(i){return or(i)===void 0&&!km(i)}function Ga(i,e){Ot(i.node.children,(t,n)=>{e(new Fh(t,i,n))})}function Fm(i,e,t,n){t&&e(i),Ga(i,s=>{Fm(s,e,!0)})}function fE(i,e,t){let n=i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function ao(i){return new rt(i.parent===null?i.name:ao(i.parent)+"/"+i.name)}function ml(i){i.parent!==null&&pE(i.parent,i.name,i)}function pE(i,e,t){const n=dE(t),s=Pn(i.node.children,e);n&&s?(delete i.node.children[e],i.node.childCount--,ml(i)):!n&&!s&&(i.node.children[e]=t.node,i.node.childCount++,ml(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=/[\[\].#$\/\u0000-\u001F\u007F]/,_E=/[\[\].#$\u0000-\u001F\u007F]/,mc=10*1024*1024,zh=function(i){return typeof i=="string"&&i.length!==0&&!mE.test(i)},Bm=function(i){return typeof i=="string"&&i.length!==0&&!_E.test(i)},gE=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Bm(i)},vE=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!fh(i)||i&&typeof i=="object"&&Pn(i,".sv")},zm=function(i,e,t,n){n&&e===void 0||Wa(Da(i,"value"),e,t)},Wa=function(i,e,t){const n=t instanceof rt?new Ux(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Hi(n));if(typeof e=="function")throw new Error(i+"contains a function "+Hi(n)+" with contents = "+e.toString());if(fh(e))throw new Error(i+"contains "+e.toString()+" "+Hi(n));if(typeof e=="string"&&e.length>mc/3&&Na(e)>mc)throw new Error(i+"contains a string greater than "+mc+" utf8 bytes "+Hi(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ot(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!zh(o)))throw new Error(i+" contains an invalid key ("+o+") "+Hi(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ox(n,o),Wa(i,a,n),kx(n)}),s&&r)throw new Error(i+' contains ".value" child '+Hi(n)+" in addition to actual children.")}},yE=function(i,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const r=Hr(n);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!zh(r[o]))throw new Error(i+"contains an invalid key ("+r[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Nx);let s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&an(s,n))throw new Error(i+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},xE=function(i,e,t,n){const s=Da(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ot(e,(o,a)=>{const c=new rt(o);if(Wa(s,a,mt(t,c)),vh(c)===".priority"&&!vE(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),yE(s,r)},Hm=function(i,e,t,n){if(!Bm(t))throw new Error(Da(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SE=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hm(i,e,t)},Hh=function(i,e){if(He(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},EE=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gE(t))throw new Error(Da(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qa(i,e){let t=null;for(let n=0;n<e.length;n++){const s=e[n],r=s.getPath();t!==null&&!yh(r,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&i.eventLists_.push(t)}function Vm(i,e,t){qa(i,t),Gm(i,n=>yh(n,e))}function ln(i,e,t){qa(i,t),Gm(i,n=>an(n,e)||an(e,n))}function Gm(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const s=i.eventLists_[n];if(s){const r=s.path;e(r)?(bE(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function bE(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();Tr&&Ut("event: "+t.toString()),sr(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="repo_interrupt",TE=25;class CE{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ME,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_a(),this.transactionQueueTree_=new Fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AE(i,e,t){if(i.stats_=_h(i.repoInfo_),i.forceRestClient_||rx())i.server_=new ma(i.repoInfo_,(n,s,r,o)=>{Td(i,n,s,r,o)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Cd(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new Yn(i.repoInfo_,e,(n,s,r,o)=>{Td(i,n,s,r,o)},n=>{Cd(i,n)},n=>{RE(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=hx(i.repoInfo_,()=>new lS(i.stats_,i.server_)),i.infoData_=new sS,i.infoSyncTree_=new bd({startListening:(n,s,r,o)=>{let a=[];const c=i.infoData_.getNode(n._path);return c.isEmpty()||(a=oo(i.infoSyncTree_,n._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vh(i,"connected",!1),i.serverSyncTree_=new bd({startListening:(n,s,r,o)=>(i.server_.listen(n,r,s,(a,c)=>{const l=o(a,c);ln(i.eventQueue_,n._path,l)}),[]),stopListening:(n,s)=>{i.server_.unlisten(n,s)}})}function Wm(i){const t=i.infoData_.getNode(new rt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xa(i){return lE({timestamp:Wm(i)})}function Td(i,e,t,n,s){i.dataUpdateCount++;const r=new rt(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(n){const c=sa(t,l=>wt(l));o=iE(i.serverSyncTree_,r,c,s)}else{const c=wt(t);o=Im(i.serverSyncTree_,r,c,s)}else if(n){const c=sa(t,l=>wt(l));o=eE(i.serverSyncTree_,r,c)}else{const c=wt(t);o=oo(i.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ys(i,r)),ln(i.eventQueue_,a,o)}function Cd(i,e){Vh(i,"connected",e),e===!1&&DE(i)}function RE(i,e){Ot(e,(t,n)=>{Vh(i,t,n)})}function Vh(i,e,t){const n=new rt("/.info/"+e),s=wt(t);i.infoData_.updateSnapshot(n,s);const r=oo(i.infoSyncTree_,n,s);ln(i.eventQueue_,n,r)}function Gh(i){return i.nextWriteId_++}function IE(i,e,t){const n=sE(i.serverSyncTree_,e);return n!=null?Promise.resolve(n):i.server_.get(e).then(s=>{const r=wt(s).withIndex(e._queryParams.getIndex());pl(i.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=oo(i.serverSyncTree_,e._path,r);else{const a=Xr(i.serverSyncTree_,e);o=Im(i.serverSyncTree_,e._path,r,a)}return ln(i.eventQueue_,e._path,o),ba(i.serverSyncTree_,e,t,null,!0),r},s=>(co(i,"get for query "+Tt(e)+" failed: "+s),Promise.reject(new Error(s))))}function PE(i,e,t,n,s){co(i,"set",{path:e.toString(),value:t,priority:n});const r=Xa(i),o=wt(t,n),a=Ph(i.serverSyncTree_,e),c=Um(o,a,r),l=Gh(i),h=Rm(i.serverSyncTree_,e,c,l,!0);qa(i.eventQueue_,h),i.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||Xt("set at "+e+" failed: "+d);const g=_i(i.serverSyncTree_,l,!_);ln(i.eventQueue_,e,g),_l(i,s,d,f)});const u=qh(i,e);Ys(i,u),ln(i.eventQueue_,u,[])}function LE(i,e,t,n){co(i,"update",{path:e.toString(),value:t});let s=!0;const r=Xa(i),o={};if(Ot(t,(a,c)=>{s=!1,o[a]=Nm(mt(e,a),wt(c),i.serverSyncTree_,r)}),s)Ut("update() called with empty data.  Don't do anything."),_l(i,n,"ok",void 0);else{const a=Gh(i),c=QS(i.serverSyncTree_,e,o,a);qa(i.eventQueue_,c),i.server_.merge(e.toString(),t,(l,h)=>{const u=l==="ok";u||Xt("update at "+e+" failed: "+l);const d=_i(i.serverSyncTree_,a,!u),f=d.length>0?Ys(i,e):e;ln(i.eventQueue_,f,d),_l(i,n,l,h)}),Ot(t,l=>{const h=qh(i,mt(e,l));Ys(i,h)}),ln(i.eventQueue_,e,[])}}function DE(i){co(i,"onDisconnectEvents");const e=Xa(i),t=_a();cl(i.onDisconnect_,je(),(s,r)=>{const o=Nm(s,r,i.serverSyncTree_,e);pm(t,s,o)});let n=[];cl(t,je(),(s,r)=>{n=n.concat(oo(i.serverSyncTree_,s,r));const o=qh(i,s);Ys(i,o)}),i.onDisconnect_=_a(),ln(i.eventQueue_,je(),n)}function NE(i,e,t){let n;He(e._path)===".info"?n=pl(i.infoSyncTree_,e,t):n=pl(i.serverSyncTree_,e,t),Vm(i.eventQueue_,e._path,n)}function qm(i,e,t){let n;He(e._path)===".info"?n=ba(i.infoSyncTree_,e,t):n=ba(i.serverSyncTree_,e,t),Vm(i.eventQueue_,e._path,n)}function UE(i){i.persistentConnection_&&i.persistentConnection_.interrupt(wE)}function co(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),Ut(t,...e)}function _l(i,e,t,n){e&&sr(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;n&&(r+=": "+n);const o=new Error(r);o.code=s,e(o)}})}function Xm(i,e,t){return Ph(i.serverSyncTree_,e,t)||Me.EMPTY_NODE}function Wh(i,e=i.transactionQueueTree_){if(e||$a(i,e),or(e)){const t=Ym(i,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&OE(i,ao(e),t)}else km(e)&&Ga(e,t=>{Wh(i,t)})}function OE(i,e,t){const n=t.map(l=>l.currentWriteId),s=Xm(i,e,n);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const h=t[l];Z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=qt(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;i.server_.put(c.toString(),a,l=>{co(i,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(_i(i.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();$a(i,Bh(i.transactionQueueTree_,e)),Wh(i,i.transactionQueueTree_),ln(i.eventQueue_,e,h);for(let d=0;d<u.length;d++)sr(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Xt("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Ys(i,e)}},o)}function Ys(i,e){const t=$m(i,e),n=ao(t),s=Ym(i,t);return kE(i,s,n),n}function kE(i,e,t){if(e.length===0)return;const n=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=qt(t,c.path);let h=!1,u;if(Z(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,s=s.concat(_i(i.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=TE)h=!0,u="maxretry",s=s.concat(_i(i.serverSyncTree_,c.currentWriteId,!0));else{const d=Xm(i,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Wa("transaction failed: Data returned ",f,c.path);let _=wt(f);typeof f=="object"&&f!=null&&Pn(f,".priority")||(_=_.updatePriority(d.getPriority()));const m=c.currentWriteId,p=Xa(i),M=Um(_,d,p);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=M,c.currentWriteId=Gh(i),o.splice(o.indexOf(m),1),s=s.concat(Rm(i.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),s=s.concat(_i(i.serverSyncTree_,m,!0))}else h=!0,u="nodata",s=s.concat(_i(i.serverSyncTree_,c.currentWriteId,!0))}ln(i.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(u),!1,null))))}$a(i,i.transactionQueueTree_);for(let a=0;a<n.length;a++)sr(n[a]);Wh(i,i.transactionQueueTree_)}function $m(i,e){let t,n=i.transactionQueueTree_;for(t=He(e);t!==null&&or(n)===void 0;)n=Bh(n,t),e=at(e),t=He(e);return n}function Ym(i,e){const t=[];return jm(i,e,t),t.sort((n,s)=>n.order-s.order),t}function jm(i,e,t){const n=or(e);if(n)for(let s=0;s<n.length;s++)t.push(n[s]);Ga(e,s=>{jm(i,s,t)})}function $a(i,e){const t=or(e);if(t){let n=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[n]=t[s],n++);t.length=n,Om(e,t.length>0?t:void 0)}Ga(e,n=>{$a(i,n)})}function qh(i,e){const t=ao($m(i,e)),n=Bh(i.transactionQueueTree_,e);return fE(n,s=>{_c(i,s)}),_c(i,n),Fm(n,s=>{_c(i,s)}),t}function _c(i,e){const t=or(e);if(t){const n=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Z(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(Z(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(_i(i.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Om(e,void 0):t.length=r+1,ln(i.eventQueue_,ao(e),s);for(let o=0;o<n.length;o++)sr(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let s=t[n];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function BE(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Xt(`Invalid query segment '${t}' in query '${i}'`)}return e}const Ad=function(i,e){const t=zE(i),n=t.namespace;t.domain==="firebase.com"&&Jn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ky();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Jp(t.host,t.secure,n,s,e,"",n!==t.subdomain),path:new rt(t.pathString)}},zE=function(i){let e="",t="",n="",s="",r="",o=!0,a="https",c=443;if(typeof i=="string"){let l=i.indexOf("//");l>=0&&(a=i.substring(0,l-1),i=i.substring(l+2));let h=i.indexOf("/");h===-1&&(h=i.length);let u=i.indexOf("?");u===-1&&(u=i.length),e=i.substring(0,Math.min(h,u)),h<u&&(s=FE(i.substring(h,u)));const d=BE(i.substring(Math.min(i.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");n=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=n}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:n,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HE=function(){let i=0;const e=[];return function(t){const n=t===i;i=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Rd.charAt(t%64),t=Math.floor(t/64);Z(t===0,"Cannot push at time == 0");let o=r.join("");if(n){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Rd.charAt(e[s]);return Z(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Tt(this.snapshot.exportVal())}}class GE{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return Ge(this._path)?null:vh(this._path)}get ref(){return new ei(this._repo,this._path)}get _queryIdentifier(){const e=pd(this._queryParams),t=ph(e);return t==="{}"?"default":t}get _queryObject(){return pd(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof Xh))return!1;const t=this._repo===e._repo,n=yh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dx(this._path)}}class ei extends Xh{constructor(e,t){super(e,t,new Mh,!1)}get parent(){const e=om(this._path);return e===null?null:new ei(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $r{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new rt(e),n=Yr(this.ref,e);return new $r(this._node.getChild(t),n,_t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,s)=>e(new $r(s,Yr(this.ref,n),_t)))}hasChild(e){const t=new rt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mt(i,e){return i=kt(i),i._checkNotDeleted("ref"),e!==void 0?Yr(i._root,e):i._root}function Yr(i,e){return i=kt(i),He(i._path)===null?SE("child","path",e):Hm("child","path",e),new ei(i._repo,mt(i._path,e))}function WE(i,e){i=kt(i),Hh("push",i._path),zm("push",e,i._path,!0);const t=Wm(i._repo),n=HE(t),s=Yr(i,n),r=Yr(i,n);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function qE(i){return Hh("remove",i._path),lo(i,null)}function lo(i,e){i=kt(i),Hh("set",i._path),zm("set",e,i._path,!1);const t=new Jr;return PE(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}function xn(i,e){xE("update",e,i._path);const t=new Jr;return LE(i._repo,i._path,e,t.wrapCallback(()=>{})),t.promise}function $h(i){i=kt(i);const e=new Km(()=>{}),t=new Ya(e);return IE(i._repo,i,t).then(n=>new $r(n,new ei(i._repo,i._path),i._queryParams.getIndex()))}class Ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new VE("value",this,new $r(e.snapshotNode,new ei(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new GE(this,e,t):null}matches(e){return e instanceof Ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XE(i,e,t,n,s){const r=new Km(t,void 0),o=new Ya(r);return NE(i._repo,i,o),()=>qm(i._repo,i,o)}function $E(i,e,t,n){return XE(i,"value",e)}function YE(i,e,t){qm(i._repo,i,null)}qS(ei);KS(ei);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FIREBASE_DATABASE_EMULATOR_HOST",gl={};let KE=!1;function JE(i,e,t,n){i.repoInfo_=new Jp(`${e}:${t}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),n&&(i.authTokenProvider_=n)}function ZE(i,e,t,n,s){let r=n||i.options.databaseURL;r===void 0&&(i.options.projectId||Jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ut("Using default host for project ",i.options.projectId),r=`${i.options.projectId}-default-rtdb.firebaseio.com`);let o=Ad(r,s),a=o.repoInfo,c;typeof process<"u"&&Ku&&(c=Ku[jE]),c?(r=`http://${c}?ns=${a.namespace}`,o=Ad(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new ax(i.name,i.options,e);EE("Invalid Firebase Database URL",o),Ge(o.path)||Jn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=eM(a,i,l,new ox(i.name,t));return new tM(h,i)}function QE(i,e){const t=gl[e];(!t||t[i.key]!==i)&&Jn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),UE(i),delete t[i.key]}function eM(i,e,t,n){let s=gl[e.name];s||(s={},gl[e.name]=s);let r=s[i.toURLString()];return r&&Jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CE(i,KE,t,n),s[i.toURLString()]=r,r}class tM{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ei(this._repo,je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jn("Cannot call "+e+" on a deleted database.")}}function nM(i=ep(),e){const t=ih(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=ng("database");n&&iM(t,...n)}return t}function iM(i,e,t,n={}){i=kt(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&Jn("Cannot call useEmulator() after instance has already been initialized.");const s=i._repoInternal;let r;if(s.repoInfo_.nodeAdmin)n.mockUserToken&&Jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Yo(Yo.OWNER);else if(n.mockUserToken){const o=typeof n.mockUserToken=="string"?n.mockUserToken:ig(n.mockUserToken,i.app.options.projectId);r=new Yo(o)}JE(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(i){Wy(nr),Vs(new ji("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZE(n,s,r,t)},"PUBLIC").setMultipleInstances(!0)),xi(Ju,Zu,i),xi(Ju,Zu,"esm2017")}function Jm(i){return{".sv":{increment:i}}}Yn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Yn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};sM();const rM={apiKey:"AIzaSyAoDNtacLJNLlPw1NXKY9Ov2Y4MNhtv3vc",authDomain:"plain-sight-924df.firebaseapp.com",databaseURL:"https://plain-sight-924df-default-rtdb.firebaseio.com",projectId:"plain-sight-924df",storageBucket:"plain-sight-924df.firebasestorage.app",messagingSenderId:"716640491645",appId:"1:716640491645:web:1db18219a64b9e55497914"},Zm=Qf(rM),ja=zy(Zm),bt=nM(Zm);async function oM(i,e){await lo(Mt(bt,`users/${i}`),{displayName:e,currency:0,weaponSkins:["default"],equippedSkin:"default",stats:{gamesPlayed:0,hiderWins:0,seekerWins:0,timesEliminated:0},createdAt:Date.now()})}async function Qm(i){const e=await $h(Mt(bt,`users/${i}`));return e.exists()?{uid:i,...e.val()}:null}async function Id(i,e){const t={};for(const[n,s]of Object.entries(e))s!==0&&(t[`users/${i}/stats/${n}`]=Jm(s));Object.keys(t).length&&await xn(Mt(bt),t)}async function aM(i,e){await xn(Mt(bt,`users/${i}`),{currency:Jm(-e)})}async function Pd(i,e){await xn(Mt(bt,`users/${i}`),{equippedSkin:e})}async function cM(i,e){const n=(await $h(Mt(bt,`users/${i}/weaponSkins`))).val()||["default"];n.includes(e)||await lo(Mt(bt,`users/${i}/weaponSkins`),[...n,e])}function lM(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>i[Math.floor(Math.random()*i.length)]).join("")}async function hM(i,e,t){const n=lM(),s=WE(Mt(bt,"games")),r=s.key;return await lo(s,{hostId:i,code:n,settings:{prepTime:t.prepTime??120,seekerCount:t.seekerCount??1,shadowsEnabled:t.shadowsEnabled!==!1,maxPlayers:10},status:"lobby",createdAt:Date.now(),winner:null,players:{}}),await e_(r,i,e),{gameId:r,code:n}}async function uM(i){const e=await $h(Mt(bt,"games"));if(!e.exists())return null;let t=null;return e.forEach(n=>{const s=n.val();s.code===i.toUpperCase()&&s.status==="lobby"&&(t=n.key)}),t}async function e_(i,e,t){await lo(Mt(bt,`games/${i}/players/${e}`),{displayName:t,role:null,position:{x:2,y:0,z:2},rotationY:0,pose:"stand",paintColors:{head:"#808080",torso:"#808080",leftArm:"#808080",rightArm:"#808080",leftLeg:"#808080",rightLeg:"#808080"},alive:!0,isReady:!1})}async function dM(i,e){await qE(Mt(bt,`games/${i}/players/${e}`))}function t_(i,e){const t=Mt(bt,`games/${i}`);return $E(t,n=>e(n.val())),()=>YE(t)}async function fM(i,e,t,n){await xn(Mt(bt,`games/${i}/players/${e}`),{position:t,rotationY:n})}async function pM(i,e,t){await xn(Mt(bt,`games/${i}/players/${e}`),{paintColors:t})}async function mM(i,e,t){await xn(Mt(bt,`games/${i}/players/${e}`),{pose:t})}async function _M(i,e,t){await xn(Mt(bt,`games/${i}/players/${e}`),{isReady:t})}async function gM(i,e){await xn(Mt(bt,`games/${i}/players/${e}`),{alive:!1})}async function vM(i,e){const t={};for(const[n,s]of Object.entries(e))t[`players/${n}/role`]=s;t.status="prep",await xn(Mt(bt,`games/${i}`),t)}async function yM(i){await xn(Mt(bt,`games/${i}`),{status:"game"})}async function xM(i,e){await xn(Mt(bt,`games/${i}`),{status:"ended",winner:e})}function SM(i){return A0(ja,i)}async function EM(i,e,t){const n=await E0(ja,i,e);return await w0(n.user,{displayName:t}),await oM(n.user.uid,t),n.user}async function MM(i,e){return(await M0(ja,i,e)).user}async function bM(){await R0(ja)}class wM{constructor(e,t){this.container=e,this.onSuccess=t,this.mode="login",this.render()}render(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.gap="28px",this.el.innerHTML=`
      <div style="text-align:center;position:relative;z-index:1">
        <div class="game-title">PLAIN SIGHT</div>
        <div class="game-tagline">hide in plain sight — or find those who do</div>
      </div>

      <div class="card" style="width:min(380px,90vw);position:relative;z-index:1">
        <div class="tabs" style="margin-bottom:20px">
          <button class="tab ${this.mode==="login"?"active":""}" data-tab="login">LOG IN</button>
          <button class="tab ${this.mode==="register"?"active":""}" data-tab="register">SIGN UP</button>
        </div>

        <form id="auth-form" style="display:flex;flex-direction:column;gap:14px">
          ${this.mode==="register"?`
          <div class="field">
            <label class="label">USERNAME</label>
            <input class="input" type="text" id="displayName" placeholder="Your tag…" maxlength="20" required />
          </div>`:""}

          <div class="field">
            <label class="label">EMAIL</label>
            <input class="input" type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div class="field">
            <label class="label">PASSWORD</label>
            <input class="input" type="password" id="password" placeholder="••••••••" minlength="6" required />
          </div>

          <div class="error-msg" id="auth-error"></div>

          <button type="submit" class="btn btn-red btn-full" id="auth-submit">
            ${this.mode==="login"?"LOG IN":"CREATE ACCOUNT"}
          </button>
        </form>
      </div>
    `,this.container.appendChild(this.el),this.bind()}bind(){this.el.querySelectorAll(".tab").forEach(n=>{n.addEventListener("click",()=>{this.mode=n.dataset.tab,this.el.remove(),this.render()})});const e=this.el.querySelector("#auth-form"),t=this.el.querySelector("#auth-error");e.addEventListener("submit",async n=>{n.preventDefault();const s=this.el.querySelector("#auth-submit");s.disabled=!0,s.textContent="...",t.classList.remove("show");const r=this.el.querySelector("#email").value.trim(),o=this.el.querySelector("#password").value;try{let a;if(this.mode==="login")a=await MM(r,o);else{const l=this.el.querySelector("#displayName").value.trim();if(!l)throw new Error("Username is required.");a=await EM(r,o,l)}const c=await Qm(a.uid);this.onSuccess(a,c)}catch(a){t.textContent=TM(a.code||a.message),t.classList.add("show"),s.disabled=!1,s.textContent=this.mode==="login"?"LOG IN":"CREATE ACCOUNT"}})}destroy(){var e;(e=this.el)==null||e.remove()}}function TM(i){return{"auth/user-not-found":"No account with that email.","auth/wrong-password":"Wrong password.","auth/email-already-in-use":"Email already in use.","auth/weak-password":"Password needs at least 6 characters.","auth/invalid-email":"Invalid email address."}[i]||"Something went wrong. Try again."}const Ld=[{id:"default",name:"Stock Can",price:0,color:"#7a7060"},{id:"rusted",name:"Rusty Pipe",price:50,color:"#8B4513"},{id:"cobalt",name:"Cobalt Tag",price:100,color:"#1a4f8a"},{id:"crimson",name:"Crimson Mist",price:150,color:"#b52b1e"},{id:"golden",name:"Golden Coat",price:250,color:"#c9940a"},{id:"bone",name:"Bone Dry",price:200,color:"#d8ccb0"}];class CM{constructor(e,t,n,{onPlay:s,onLogout:r}){this.container=e,this.user=t,this.profile=n,this.onPlay=s,this.onLogout=r,this.tab="home",this.render(),this.loadProfile()}async loadProfile(){try{this.profile=await Qm(this.user.uid),this.refreshProfileArea()}catch{}}refreshProfileArea(){if(!this.profile)return;this.profile.stats;const e=this.el.querySelector("#profile-area");e&&(e.innerHTML=this.profileHTML())}profileHTML(){var t,n,s,r;const e=((t=this.profile)==null?void 0:t.stats)||{};return`
      <div style="display:flex;align-items:center;gap:14px">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--red);
          border:3px solid var(--dark);display:flex;align-items:center;justify-content:center;
          font-family:var(--font-graf);font-size:22px;color:var(--white);
          box-shadow:var(--sh)">
          ${(((n=this.profile)==null?void 0:n.displayName)||this.user.displayName||"?")[0].toUpperCase()}
        </div>
        <div>
          <div style="font-family:var(--font-graf);font-size:22px;letter-spacing:1px">
            ${((s=this.profile)==null?void 0:s.displayName)||this.user.displayName||"Player"}
          </div>
          <div class="currency-bar" style="margin-top:4px;display:inline-flex">
            🥫 ${((r=this.profile)==null?void 0:r.currency)??0} Cans
          </div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px">
        <div class="stat-box"><div class="stat-num">${e.gamesPlayed??0}</div><div class="stat-label">Played</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--blue)">${e.hiderWins??0}</div><div class="stat-label">Hider Wins</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--red)">${e.seekerWins??0}</div><div class="stat-label">Seeker Wins</div></div>
        <div class="stat-box"><div class="stat-num" style="color:var(--grey)">${e.timesEliminated??0}</div><div class="stat-label">Eliminated</div></div>
      </div>
    `}shopHTML(){var n,s;const e=((n=this.profile)==null?void 0:n.weaponSkins)||["default"],t=((s=this.profile)==null?void 0:s.equippedSkin)||"default";return Ld.map(r=>{const o=e.includes(r.id),a=t===r.id;return`
        <div class="shop-item ${o?"owned":""} ${a?"equipped":""}"
             data-skin="${r.id}" data-price="${r.price}">
          <div style="width:48px;height:48px;border-radius:50%;
            background:${r.color};border:2px solid var(--dark);
            margin:0 auto;box-shadow:2px 2px 0 var(--dark)"></div>
          <div class="shop-item-name">${r.name}</div>
          <div class="shop-item-price">
            ${a?"✓ Equipped":o?"Owned":`🥫 ${r.price}`}
          </div>
        </div>
      `}).join("")}render(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.cssText="align-items:stretch;justify-content:flex-start;",this.el.innerHTML=`
      <!-- Nav bar -->
      <div style="background:var(--dark);padding:12px 24px;display:flex;
        align-items:center;justify-content:space-between;position:relative;z-index:1;
        border-bottom:3px solid var(--red);flex-shrink:0">
        <div class="game-title" style="font-size:clamp(28px,4vw,48px);
          text-shadow:2px 2px 0 var(--red),4px 4px 0 var(--blue);color:var(--white)">
          PLAIN SIGHT
        </div>
        <button class="btn btn-sm" id="logout-btn" style="background:transparent;
          color:var(--grey);border-color:var(--grey);box-shadow:none">
          LOG OUT
        </button>
      </div>

      <!-- Content area -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;
        align-items:center;padding:28px 16px;gap:20px;position:relative;z-index:1">

        <!-- Profile card -->
        <div class="card" style="width:min(540px,100%)" id="profile-area">
          ${this.profileHTML()}
        </div>

        <!-- Main actions -->
        <div style="display:flex;flex-direction:column;gap:12px;width:min(540px,100%)">
          <button class="btn btn-red btn-lg btn-full" id="play-btn">▶ PLAY</button>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <button class="btn btn-blue btn-full" id="shop-btn">🥫 SHOP</button>
            <button class="btn btn-white btn-full" id="stats-btn">📊 STATS</button>
          </div>
        </div>

        <!-- Shop panel (hidden by default) -->
        <div class="card" style="width:min(540px,100%);display:none" id="shop-panel">
          <div style="font-family:var(--font-graf);font-size:26px;
            letter-spacing:2px;margin-bottom:16px">WEAPON SKINS</div>
          <p style="font-size:13px;color:var(--grey);margin-bottom:14px">
            Earn Cans by playing. Buy skins to customize your paint gun.
          </p>
          <div class="shop-grid" id="shop-grid">${this.shopHTML()}</div>
          <div class="error-msg" id="shop-error" style="margin-top:10px"></div>
        </div>
      </div>
    `,this.container.appendChild(this.el),this.bind()}bind(){this.el.querySelector("#logout-btn").addEventListener("click",async()=>{await bM(),this.onLogout()}),this.el.querySelector("#play-btn").addEventListener("click",()=>this.onPlay());const e=this.el.querySelector("#shop-panel");this.el.querySelector("#shop-btn").addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none"}),this.el.querySelector("#stats-btn").addEventListener("click",()=>{this.loadProfile()}),this.el.querySelector("#shop-grid").addEventListener("click",async t=>{var c,l;const n=t.target.closest("[data-skin]");if(!n)return;const s=n.dataset.skin,r=parseInt(n.dataset.price);Ld.find(h=>h.id===s);const o=((c=this.profile)==null?void 0:c.weaponSkins)||["default"],a=this.el.querySelector("#shop-error");if(a.classList.remove("show"),o.includes(s)){try{await Pd(this.user.uid,s),this.profile.equippedSkin=s,this.el.querySelector("#shop-grid").innerHTML=this.shopHTML()}catch{}return}if((((l=this.profile)==null?void 0:l.currency)??0)<r){a.textContent=`Not enough Cans! You need ${r}.`,a.classList.add("show");return}try{await aM(this.user.uid,r),await cM(this.user.uid,s),await Pd(this.user.uid,s),this.profile.currency-=r,this.profile.weaponSkins=[...o,s],this.profile.equippedSkin=s,this.el.querySelector("#shop-grid").innerHTML=this.shopHTML(),this.refreshProfileArea()}catch{a.textContent="Purchase failed. Try again.",a.classList.add("show")}})}destroy(){var e;(e=this.el)==null||e.remove()}}class AM{constructor(e,t,n,{onRole:s,onBack:r}){this.container=e,this.user=t,this.profile=n,this.onRole=s,this.onBack=r,this.gameId=null,this.gameData=null,this.unwatch=null,this.view="menu",this.render()}render(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.gap="20px",this.container.appendChild(this.el),this.showMenu()}clearContent(){this.el.innerHTML=""}header(e){return`
      <div style="text-align:center;position:relative;z-index:1">
        <div class="game-title" style="font-size:clamp(36px,6vw,64px)">${e}</div>
      </div>
    `}showMenu(){this.clearContent(),this.el.innerHTML=`
      ${this.header("FIND A GAME")}
      <div class="card" style="width:min(360px,90vw);display:flex;flex-direction:column;gap:12px;position:relative;z-index:1">
        <button class="btn btn-red btn-full btn-lg" id="create-btn">CREATE LOBBY</button>
        <button class="btn btn-blue btn-full btn-lg" id="join-btn">JOIN LOBBY</button>
        <hr class="divider">
        <button class="btn btn-white btn-full" id="back-btn">← BACK</button>
      </div>
    `,this.el.querySelector("#create-btn").addEventListener("click",()=>this.showCreate()),this.el.querySelector("#join-btn").addEventListener("click",()=>this.showJoin()),this.el.querySelector("#back-btn").addEventListener("click",()=>this.onBack())}showCreate(){this.clearContent(),this.el.innerHTML=`
      ${this.header("CREATE LOBBY")}
      <div class="card" style="width:min(400px,90vw);display:flex;flex-direction:column;gap:16px;position:relative;z-index:1">

        <div class="field">
          <label class="label">PREP TIME</label>
          <div style="display:flex;align-items:center;gap:12px">
            <input type="range" id="prep-time" min="60" max="300" step="30" value="120" style="flex:1">
            <span class="badge" id="prep-time-val">2 min</span>
          </div>
        </div>

        <div class="field">
          <label class="label">SEEKERS</label>
          <div style="display:flex;gap:8px" id="seeker-btns">
            ${[1,2,3].map(r=>`<button class="btn btn-sm ${r===1?"btn-red":""}" data-n="${r}">${r}</button>`).join("")}
          </div>
        </div>

        <div class="toggle-row">
          <label class="label" style="margin:0">SHADOWS</label>
          <label class="toggle">
            <input type="checkbox" id="shadows-toggle" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="toggle-row">
          <label class="label" style="margin:0">MAX PLAYERS (10)</label>
          <span style="font-family:var(--font-graf);font-size:20px">10</span>
        </div>

        <div class="error-msg" id="create-error"></div>

        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="back-btn2">←</button>
          <button class="btn btn-red btn-full" id="create-go">CREATE</button>
        </div>
      </div>
    `;let e=1;const t=this.el.querySelectorAll("#seeker-btns button");t.forEach(r=>{r.addEventListener("click",()=>{e=parseInt(r.dataset.n),t.forEach(o=>o.classList.remove("btn-red")),r.classList.add("btn-red")})});const n=this.el.querySelector("#prep-time"),s=this.el.querySelector("#prep-time-val");n.addEventListener("input",()=>{const r=parseInt(n.value);s.textContent=r<60?`${r}s`:`${r/60} min`}),this.el.querySelector("#back-btn2").addEventListener("click",()=>this.showMenu()),this.el.querySelector("#create-go").addEventListener("click",async()=>{var a;const r=this.el.querySelector("#create-go"),o=this.el.querySelector("#create-error");r.disabled=!0,r.textContent="...",o.classList.remove("show");try{const c={prepTime:parseInt(n.value),seekerCount:e,shadowsEnabled:this.el.querySelector("#shadows-toggle").checked},{gameId:l,code:h}=await hM(this.user.uid,((a=this.profile)==null?void 0:a.displayName)||this.user.displayName,c);this.gameId=l,this.showWaiting(h,!0)}catch{o.textContent="Could not create lobby. Check Firebase config.",o.classList.add("show"),r.disabled=!1,r.textContent="CREATE"}})}showJoin(){this.clearContent(),this.el.innerHTML=`
      ${this.header("JOIN LOBBY")}
      <div class="card" style="width:min(360px,90vw);display:flex;flex-direction:column;gap:14px;position:relative;z-index:1">
        <div class="field">
          <label class="label">LOBBY CODE</label>
          <input class="input" id="code-input" maxlength="6"
            placeholder="ABC123" style="text-transform:uppercase;font-size:28px;
            letter-spacing:6px;font-family:var(--font-graf);text-align:center">
        </div>
        <div class="error-msg" id="join-error"></div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="back-btn3">←</button>
          <button class="btn btn-blue btn-full" id="join-go">JOIN</button>
        </div>
      </div>
    `,this.el.querySelector("#code-input").addEventListener("input",e=>{e.target.value=e.target.value.toUpperCase()}),this.el.querySelector("#back-btn3").addEventListener("click",()=>this.showMenu()),this.el.querySelector("#join-go").addEventListener("click",async()=>{var s;const e=this.el.querySelector("#join-go"),t=this.el.querySelector("#join-error"),n=this.el.querySelector("#code-input").value.trim();if(n.length<6){t.textContent="Enter a 6-character code",t.classList.add("show");return}e.disabled=!0,e.textContent="...",t.classList.remove("show");try{const r=await uM(n);if(!r)throw new Error("Lobby not found.");await e_(r,this.user.uid,((s=this.profile)==null?void 0:s.displayName)||this.user.displayName),this.gameId=r,this.showWaiting(n,!1)}catch(r){t.textContent=r.message||"Could not join. Try again.",t.classList.add("show"),e.disabled=!1,e.textContent="JOIN"}})}showWaiting(e,t){if(this.clearContent(),this.el.innerHTML=`
      ${this.header("LOBBY")}
      <div style="display:flex;flex-direction:column;gap:16px;width:min(500px,90vw);position:relative;z-index:1">
        <div class="card" style="text-align:center">
          <div style="font-family:var(--font-marker);font-size:16px;color:var(--grey);margin-bottom:8px">
            Share this code:
          </div>
          <div class="game-code">${e}</div>
        </div>

        <div class="card" style="display:flex;flex-direction:column;gap:8px">
          <div style="font-family:var(--font-graf);font-size:20px;letter-spacing:1px;margin-bottom:4px">
            PLAYERS <span id="player-count" class="badge">0/10</span>
          </div>
          <div id="player-list" style="display:flex;flex-direction:column;gap:6px">
            <div class="loader" style="margin:10px auto"></div>
          </div>
        </div>

        <div style="display:flex;gap:10px">
          <button class="btn btn-white" id="leave-btn">LEAVE</button>
          ${t?'<button class="btn btn-red btn-full" id="start-btn" disabled>START GAME</button>':'<button class="btn btn-blue btn-full" id="ready-btn">READY UP</button>'}
        </div>

        <div class="error-msg" id="wait-error"></div>
      </div>
    `,this.el.querySelector("#leave-btn").addEventListener("click",async()=>{var n;(n=this.unwatch)==null||n.call(this),await dM(this.gameId,this.user.uid).catch(()=>{}),this.gameId=null,this.showMenu()}),!t){let n=!1;const s=this.el.querySelector("#ready-btn");s.addEventListener("click",async()=>{n=!n,s.textContent=n?"✓ READY":"READY UP",s.className=n?"btn btn-yellow btn-full":"btn btn-blue btn-full",await _M(this.gameId,this.user.uid,n)})}t&&this.el.querySelector("#start-btn").addEventListener("click",()=>this.hostStart()),this.unwatch=t_(this.gameId,n=>{var s,r,o;n&&(this.gameData=n,this.updateWaitingUI(n,t),n.status==="prep"&&((r=(s=n.players)==null?void 0:s[this.user.uid])!=null&&r.role)&&((o=this.unwatch)==null||o.call(this),this.onRole(this.gameId,{...n,gameId:this.gameId})))})}updateWaitingUI(e,t){const n=Object.entries(e.players||{}),s=n.length,r=this.el.querySelector("#player-count");r&&(r.textContent=`${s}/10`);const o=this.el.querySelector("#player-list");if(o&&(o.innerHTML=n.map(([a,c])=>`
        <div class="player-item">
          <div class="player-dot ${c.isReady||a===e.hostId?"ready":""}"></div>
          <span style="flex:1">${c.displayName||"Player"}</span>
          ${a===e.hostId?'<span class="badge" style="background:var(--red);color:var(--white)">HOST</span>':""}
          ${c.isReady?'<span class="badge">READY</span>':""}
        </div>
      `).join("")),t){const a=this.el.querySelector("#start-btn");if(a){const c=n.every(([h,u])=>h===e.hostId||u.isReady),l=s>=2;a.disabled=!(c&&l),a.title=l?c?"":"Wait for everyone to ready up":"Need at least 2 players"}}}async hostStart(){var t;const e=this.el.querySelector("#wait-error");e==null||e.classList.remove("show");try{const n=Object.keys(this.gameData.players||{}),s=((t=this.gameData.settings)==null?void 0:t.seekerCount)??1,r=[...n].sort(()=>Math.random()-.5),o={};r.forEach((a,c)=>{o[a]=c<s?"seeker":"hider"}),await vM(this.gameId,o)}catch{e&&(e.textContent="Could not start game.",e.classList.add("show"))}}destroy(){var e,t;(e=this.unwatch)==null||e.call(this),(t=this.el)==null||t.remove()}}class RM{constructor(e,t,n,{onStartGame:s}){this.container=e,this.gameData=t,this.myUid=n,this.onStartGame=s,this.timer=null,this.render()}render(){var o,a,c,l,h;const e=((c=(a=(o=this.gameData)==null?void 0:o.players)==null?void 0:a[this.myUid])==null?void 0:c.role)??"hider",t=e==="seeker",n=((h=(l=this.gameData)==null?void 0:l.settings)==null?void 0:h.prepTime)??120,s=Math.floor(n/60),r=n%60;this.el=document.createElement("div"),this.el.className="screen",this.el.style.gap="12px",this.el.innerHTML=`
      <div class="role-reveal" style="z-index:1">
        <div class="role-reveal-title">YOU ARE A</div>
        <div class="role-word ${e}">${e.toUpperCase()}</div>
        <div class="role-desc">
          ${t?`Wait ${s>0?s+" min":""} ${r>0?r+"s":""} — then hunt them down.`:`You have ${s>0?s+" min":""} ${r>0?r+"s":""} to blend in. Paint yourself. Hide.`}
        </div>
        <div class="role-countdown" id="role-cd">
          ${t?"STANDBY":"STARTING IN"}
        </div>
        <div style="font-family:var(--font-graf);font-size:72px;
          color:var(--dark);text-shadow:3px 3px 0 ${t?"var(--red)":"var(--blue)"};"
          id="cd-num">5</div>
      </div>
    `,this.container.appendChild(this.el),this.startCountdown()}startCountdown(){let e=5;const t=this.el.querySelector("#cd-num");this.timer=setInterval(()=>{e--,t&&(t.textContent=e>0?e:"GO!"),e<=0&&(clearInterval(this.timer),setTimeout(()=>this.onStartGame(),400))},1e3)}destroy(){var e;clearInterval(this.timer),(e=this.el)==null||e.remove()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="167",IM=0,Dd=1,PM=2,n_=1,i_=2,Bn=3,Ai=0,Kt=1,zn=2,Mi=0,ks=1,Nd=2,Ud=3,Od=4,LM=5,Wi=100,DM=101,NM=102,UM=103,OM=104,kM=200,FM=201,BM=202,zM=203,vl=204,yl=205,HM=206,VM=207,GM=208,WM=209,qM=210,XM=211,$M=212,YM=213,jM=214,KM=0,JM=1,ZM=2,wa=3,QM=4,eb=5,tb=6,nb=7,jh=0,ib=1,sb=2,bi=0,rb=1,ob=2,ab=3,cb=4,lb=5,hb=6,ub=7,s_=300,js=301,Ks=302,xl=303,Sl=304,Ka=306,Ta=1e3,$i=1001,El=1002,cn=1003,db=1004,So=1005,mn=1006,gc=1007,Yi=1008,Zn=1009,r_=1010,o_=1011,jr=1012,Kh=1013,ts=1014,qn=1015,ho=1016,Jh=1017,Zh=1018,Js=1020,a_=35902,c_=1021,l_=1022,gn=1023,h_=1024,u_=1025,Fs=1026,Zs=1027,d_=1028,Qh=1029,f_=1030,eu=1031,tu=1033,jo=33776,Ko=33777,Jo=33778,Zo=33779,Ml=35840,bl=35841,wl=35842,Tl=35843,Cl=36196,Al=37492,Rl=37496,Il=37808,Pl=37809,Ll=37810,Dl=37811,Nl=37812,Ul=37813,Ol=37814,kl=37815,Fl=37816,Bl=37817,zl=37818,Hl=37819,Vl=37820,Gl=37821,Qo=36492,Wl=36494,ql=36495,p_=36283,Xl=36284,$l=36285,Yl=36286,fb=3200,pb=3201,m_=0,mb=1,mi="",En="srgb",Li="srgb-linear",nu="display-p3",Ja="display-p3-linear",Ca="linear",ct="srgb",Aa="rec709",Ra="p3",hs=7680,kd=519,_b=512,gb=513,vb=514,__=515,yb=516,xb=517,Sb=518,Eb=519,Fd=35044,Bd="300 es",Xn=2e3,Ia=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zd=1234567;const Pr=Math.PI/180,Kr=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function iu(i,e){return(i%e+e)%e}function Mb(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bb(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function wb(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function Tb(i,e=1){return e-Math.abs(iu(i,e*2)-e)}function Cb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ab(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ib(i,e){return i+Math.random()*(e-i)}function Pb(i){return i*(.5-Math.random())}function Lb(i){i!==void 0&&(zd=i);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Db(i){return i*Pr}function Nb(i){return i*Kr}function Ub(i){return(i&i-1)===0&&i!==0}function Ob(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fb(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const g_={DEG2RAD:Pr,RAD2DEG:Kr,generateUUID:cr,clamp:Lt,euclideanModulo:iu,mapLinear:Mb,inverseLerp:bb,lerp:Lr,damp:wb,pingpong:Tb,smoothstep:Cb,smootherstep:Ab,randInt:Rb,randFloat:Ib,randFloatSpread:Pb,seededRandom:Lb,degToRad:Db,radToDeg:Nb,isPowerOfTwo:Ub,ceilPowerOfTwo:Ob,floorPowerOfTwo:kb,setQuaternionFromProperEuler:Fb,normalize:Vt,denormalize:Cs};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],M=s[1],S=s[4],b=s[7],O=s[2],T=s[5],A=s[8];return r[0]=o*g+a*M+c*O,r[3]=o*m+a*S+c*T,r[6]=o*p+a*b+c*A,r[1]=l*g+h*M+u*O,r[4]=l*m+h*S+u*T,r[7]=l*p+h*b+u*A,r[2]=d*g+f*M+_*O,r[5]=d*m+f*S+_*T,r[8]=d*p+f*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new ke;function v_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bb(){const i=Pa("canvas");return i.style.display="block",i}const Hd={};function Dr(i){i in Hd||(Hd[i]=!0,console.warn(i))}function zb(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Vd=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gd=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pr={[Li]:{transfer:Ca,primaries:Aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:ct,primaries:Aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ja]:{transfer:Ca,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(Vd)},[nu]:{transfer:ct,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gd),fromReference:i=>i.applyMatrix3(Vd).convertLinearToSRGB()}},Hb=new Set([Li,Ja]),et={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hb.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=pr[e].toReference,s=pr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return pr[i].primaries},getTransfer:function(i){return i===mi?Ca:pr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(pr[e].luminanceCoefficients)}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class Vb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Pa("canvas")),us.width=e.width,us.height=e.height;const n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gb=0;class y_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wb=0;class $t extends ar{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=$i,s=$i,r=mn,o=Yi,a=gn,c=Zn,l=$t.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=cr(),this.name="",this.source=new y_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=s_;$t.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(f+1)/2,O=(p+1)/2,T=(h+d)/4,A=(u+g)/4,N=(_+m)/4;return S>b&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=N/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=A/r,s=N/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qb extends ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new y_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends qb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class x_ extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xb extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let m=1-a;const p=c*d+l*f+h*_+u*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),T=Math.atan2(O,p*M);m=Math.sin(m*T)/O,a=Math.sin(a*T)/O}const b=a*M;if(c=c*m+d*b,l=l*m+f*b,h=h*m+_*b,u=u*m+g*b,m===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*f-l*d,e[t+1]=c*_+h*d+l*u-a*f,e[t+2]=l*_+h*f+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new R,Wd=new uo;class os{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Mo.subVectors(this.max,mr),ds.subVectors(e.a,mr),fs.subVectors(e.b,mr),ps.subVectors(e.c,mr),si.subVectors(fs,ds),ri.subVectors(ps,fs),Ni.subVectors(ds,ps);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ni.z,Ni.y,si.z,0,-si.x,ri.z,0,-ri.x,Ni.z,0,-Ni.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ni.y,Ni.x,0];return!Ec(t,ds,fs,ps,Mo)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,ds,fs,ps,Mo))?!1:(bo.crossVectors(si,ri),t=[bo.x,bo.y,bo.z],Ec(t,ds,fs,ps,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,Eo=new os,ds=new R,fs=new R,ps=new R,si=new R,ri=new R,Ni=new R,mr=new R,Mo=new R,bo=new R,Ui=new R;function Ec(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $b=new os,_r=new R,Mc=new R;class su{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$b.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Mc)),this.expandByPoint(_r.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new R,bc=new R,wo=new R,oi=new R,wc=new R,To=new R,Tc=new R;class S_{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(bc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=oi.dot(this.direction),c=-oi.dot(wo),l=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bc).addScaledVector(wo,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){wc.subVectors(t,e),To.subVectors(n,e),Tc.crossVectors(wc,To);let o=this.direction.dot(Tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(To.crossVectors(oi,To));if(c<0)return null;const l=a*this.direction.dot(wc.cross(oi));if(l<0||c+l>o)return null;const h=-a*oi.dot(Tc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,_,g,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,_,g,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yb,e,jb)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ai.crossVectors(n,Qt),ai.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ai.crossVectors(n,Qt)),ai.normalize(),Co.crossVectors(Qt,ai),s[0]=ai.x,s[4]=Co.x,s[8]=Qt.x,s[1]=ai.y,s[5]=Co.y,s[9]=Qt.y,s[2]=ai.z,s[6]=Co.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],b=n[11],O=n[15],T=s[0],A=s[4],N=s[8],E=s[12],x=s[1],I=s[5],V=s[9],B=s[13],$=s[2],X=s[6],G=s[10],Y=s[14],z=s[3],ae=s[7],ue=s[11],ve=s[15];return r[0]=o*T+a*x+c*$+l*z,r[4]=o*A+a*I+c*X+l*ae,r[8]=o*N+a*V+c*G+l*ue,r[12]=o*E+a*B+c*Y+l*ve,r[1]=h*T+u*x+d*$+f*z,r[5]=h*A+u*I+d*X+f*ae,r[9]=h*N+u*V+d*G+f*ue,r[13]=h*E+u*B+d*Y+f*ve,r[2]=_*T+g*x+m*$+p*z,r[6]=_*A+g*I+m*X+p*ae,r[10]=_*N+g*V+m*G+p*ue,r[14]=_*E+g*B+m*Y+p*ve,r[3]=M*T+S*x+b*$+O*z,r[7]=M*A+S*I+b*X+O*ae,r[11]=M*N+S*V+b*G+O*ue,r[15]=M*E+S*B+b*Y+O*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+g*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=u*m*l-g*d*l+g*c*f-a*m*f-u*c*p+a*d*p,S=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,b=h*g*l-_*u*l+_*a*f-o*g*f-h*a*p+o*u*p,O=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,T=t*M+n*S+s*b+r*O;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=M*A,e[1]=(g*d*r-u*m*r-g*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*A,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,e[4]=S*A,e[5]=(h*m*r-_*d*r+_*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=b*A,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*p-t*u*p)*A,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=O*A,e[13]=(h*g*s-_*u*s+_*n*d-t*g*d-h*n*m+t*u*m)*A,e[14]=(_*a*s-o*g*s-_*n*c+t*g*c+o*n*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,M=c*l,S=c*h,b=c*u,O=n.x,T=n.y,A=n.z;return s[0]=(1-(g+p))*O,s[1]=(f+b)*O,s[2]=(_-S)*O,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(_+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ms.set(s[0],s[1],s[2]).length();const o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const l=1/r,h=1/o,u=1/a;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,_;if(a===Xn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ia)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let _,g;if(a===Xn)_=(o+r)*u,g=-2*u;else if(a===Ia)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new R,dn=new ht,Yb=new R(0,0,0),jb=new R(1,1,1),ai=new R,Co=new R,Qt=new R,qd=new ht,Xd=new uo;class In{constructor(e=0,t=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kb=0;const $d=new R,_s=new uo,On=new ht,Ao=new R,gr=new R,Jb=new R,Zb=new uo,Yd=new R(1,0,0),jd=new R(0,1,0),Kd=new R(0,0,1),Jd={type:"added"},Qb={type:"removed"},gs={type:"childadded",child:null},Cc={type:"childremoved",child:null};class Ht extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new R,t=new In,n=new uo,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(gr,Ao,this.up):On.lookAt(Ao,gr,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(On),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qb),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new R(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new R,kn=new R,Ac=new R,Fn=new R,vs=new R,ys=new R,Zd=new R,Rc=new R,Ic=new R,Pc=new R;class bn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),kn.subVectors(n,t),Ac.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(kn),c=fn.dot(Ac),l=kn.dot(kn),h=kn.dot(Ac),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),kn.subVectors(e,t),fn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),fn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,n),ys.subVectors(r,n),Rc.subVectors(e,n);const c=vs.dot(Rc),l=ys.dot(Rc);if(c<=0&&l<=0)return t.copy(n);Ic.subVectors(e,s);const h=vs.dot(Ic),u=ys.dot(Ic);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(vs,o);Pc.subVectors(e,r);const f=vs.dot(Pc),_=ys.dot(Pc);if(_>=0&&f<=_)return t.copy(r);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ys,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Zd.subVectors(r,s),a=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Zd,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=iu(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lc(o,r,e+1/3),this.g=Lc(o,r,e),this.b=Lc(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=E_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return et.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Lt(Bt.r*255,0,255))*65536+Math.round(Lt(Bt.g*255,0,255))*256+Math.round(Lt(Bt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=En){et.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Ro);const n=Lr(ci.h,Ro.h,t),s=Lr(ci.s,Ro.s,t),r=Lr(ci.l,Ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ye;Ye.NAMES=E_;let ew=0;class fo extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=ks,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ou extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new R,Io=new fe;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}}class M_ extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class b_ extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tw=0;const rn=new ht,Dc=new Ht,xs=new R,en=new os,vr=new os,Rt=new R;class ti extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?b_:M_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(en.min,vr.min),en.expandByPoint(Rt),Rt.addVectors(en.max,vr.max),en.expandByPoint(Rt)):(en.expandByPoint(vr.min),en.expandByPoint(vr.max))}en.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(e,l),Rt.add(xs)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new R,c[N]=new R;const l=new R,h=new R,u=new R,d=new fe,f=new fe,_=new fe,g=new R,m=new R;function p(N,E,x){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),a[N].add(g),a[E].add(g),a[x].add(g),c[N].add(m),c[E].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,E=M.length;N<E;++N){const x=M[N],I=x.start,V=x.count;for(let B=I,$=I+V;B<$;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new R,b=new R,O=new R,T=new R;function A(N){O.fromBufferAttribute(s,N),T.copy(O);const E=a[N];S.copy(E),S.sub(O.multiplyScalar(O.dot(E))).normalize(),b.crossVectors(T,E);const I=b.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,I)}for(let N=0,E=M.length;N<E;++N){const x=M[N],I=x.start,V=x.count;for(let B=I,$=I+V;B<$;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new ht,Oi=new S_,Po=new su,ef=new R,Ss=new R,Es=new R,Ms=new R,Nc=new R,Lo=new R,Do=new fe,No=new fe,Uo=new fe,tf=new R,nf=new R,sf=new R,Oo=new R,ko=new R;class Et extends Ht{constructor(e=new ti,t=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Nc.fromBufferAttribute(u,e),o?Lo.addScaledVector(Nc,h):Lo.addScaledVector(Nc.sub(t),h))}t.add(Lo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Po.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Po,ef)===null||Oi.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qd.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,O=S;b<O;b+=3){const T=a.getX(b),A=a.getX(b+1),N=a.getX(b+2);s=Fo(this,p,e,n,l,h,u,T,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=Fo(this,o,e,n,l,h,u,M,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,O=S;b<O;b+=3){const T=b,A=b+1,N=b+2;s=Fo(this,p,e,n,l,h,u,T,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,b=m+2;s=Fo(this,o,e,n,l,h,u,M,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function nw(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ai,a),c===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ko);return l<t.near||l>t.far?null:{distance:l,point:ko.clone(),object:i}}function Fo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ss),i.getVertexPosition(c,Es),i.getVertexPosition(l,Ms);const h=nw(i,e,t,n,Ss,Es,Ms,Oo);if(h){s&&(Do.fromBufferAttribute(s,a),No.fromBufferAttribute(s,c),Uo.fromBufferAttribute(s,l),h.uv=bn.getInterpolation(Oo,Ss,Es,Ms,Do,No,Uo,new fe)),r&&(Do.fromBufferAttribute(r,a),No.fromBufferAttribute(r,c),Uo.fromBufferAttribute(r,l),h.uv1=bn.getInterpolation(Oo,Ss,Es,Ms,Do,No,Uo,new fe)),o&&(tf.fromBufferAttribute(o,a),nf.fromBufferAttribute(o,c),sf.fromBufferAttribute(o,l),h.normal=bn.getInterpolation(Oo,Ss,Es,Ms,tf,nf,sf,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};bn.getNormal(Ss,Es,Ms,u.normal),h.face=u}return h}class as extends ti{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(u,2));function _(g,m,p,M,S,b,O,T,A,N,E){const x=b/A,I=O/N,V=b/2,B=O/2,$=T/2,X=A+1,G=N+1;let Y=0,z=0;const ae=new R;for(let ue=0;ue<G;ue++){const ve=ue*I-B;for(let qe=0;qe<X;qe++){const nt=qe*x-V;ae[g]=nt*M,ae[m]=ve*S,ae[p]=$,l.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[p]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(qe/A),u.push(1-ue/N),Y+=1}}for(let ue=0;ue<N;ue++)for(let ve=0;ve<A;ve++){const qe=d+ve+X*ue,nt=d+ve+X*(ue+1),H=d+(ve+1)+X*(ue+1),Q=d+(ve+1)+X*ue;c.push(qe,nt,Q),c.push(nt,H,Q),z+=6}a.addGroup(f,z,E),f+=z,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function iw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function w_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const sw={clone:Qs,merge:Wt};var rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rw,this.fragmentShader=ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=iw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class T_ extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new R,rf=new fe,of=new fe;class tn extends T_{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,rf,of),t.subVectors(of,rf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,ws=1;class aw extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(bs,ws,e,t);s.layers=this.layers,this.add(s);const r=new tn(bs,ws,e,t);r.layers=this.layers,this.add(r);const o=new tn(bs,ws,e,t);o.layers=this.layers,this.add(o);const a=new tn(bs,ws,e,t);a.layers=this.layers,this.add(a);const c=new tn(bs,ws,e,t);c.layers=this.layers,this.add(c);const l=new tn(bs,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class C_ extends $t{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cw extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new C_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new as(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Mi});r.uniforms.tEquirect.value=t;const o=new Et(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=mn),new aw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Uc=new R,lw=new R,hw=new ke;class Vi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uc.subVectors(n,t).cross(lw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hw.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new su,Bo=new R;class au{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],M=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,m-f,b-p).normalize(),n[1].setComponents(c+r,d+l,m+f,b+p).normalize(),n[2].setComponents(c+o,d+h,m+_,b+M).normalize(),n[3].setComponents(c-o,d-h,m-_,b-M).normalize(),n[4].setComponents(c-a,d-u,m-g,b-S).normalize(),t===Xn)n[5].setComponents(c+a,d+u,m+g,b+S).normalize();else if(t===Ia)n[5].setComponents(a,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A_(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uw(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class po extends ti{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let S=0;S<l;S++){const b=S*u-r;_.push(b,-M,0),g.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const S=M+l*p,b=M+l*(p+1),O=M+1+l*(p+1),T=M+1+l*p;f.push(S,b,T),f.push(b,O,T)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var dw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_w=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ww=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ow=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ST=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:dw,alphahash_pars_fragment:fw,alphamap_fragment:pw,alphamap_pars_fragment:mw,alphatest_fragment:_w,alphatest_pars_fragment:gw,aomap_fragment:vw,aomap_pars_fragment:yw,batching_pars_vertex:xw,batching_vertex:Sw,begin_vertex:Ew,beginnormal_vertex:Mw,bsdfs:bw,iridescence_fragment:ww,bumpmap_pars_fragment:Tw,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Aw,clipping_planes_pars_vertex:Rw,clipping_planes_vertex:Iw,color_fragment:Pw,color_pars_fragment:Lw,color_pars_vertex:Dw,color_vertex:Nw,common:Uw,cube_uv_reflection_fragment:Ow,defaultnormal_vertex:kw,displacementmap_pars_vertex:Fw,displacementmap_vertex:Bw,emissivemap_fragment:zw,emissivemap_pars_fragment:Hw,colorspace_fragment:Vw,colorspace_pars_fragment:Gw,envmap_fragment:Ww,envmap_common_pars_fragment:qw,envmap_pars_fragment:Xw,envmap_pars_vertex:$w,envmap_physical_pars_fragment:sT,envmap_vertex:Yw,fog_vertex:jw,fog_pars_vertex:Kw,fog_fragment:Jw,fog_pars_fragment:Zw,gradientmap_pars_fragment:Qw,lightmap_pars_fragment:eT,lights_lambert_fragment:tT,lights_lambert_pars_fragment:nT,lights_pars_begin:iT,lights_toon_fragment:rT,lights_toon_pars_fragment:oT,lights_phong_fragment:aT,lights_phong_pars_fragment:cT,lights_physical_fragment:lT,lights_physical_pars_fragment:hT,lights_fragment_begin:uT,lights_fragment_maps:dT,lights_fragment_end:fT,logdepthbuf_fragment:pT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:gT,map_fragment:vT,map_pars_fragment:yT,map_particle_fragment:xT,map_particle_pars_fragment:ST,metalnessmap_fragment:ET,metalnessmap_pars_fragment:MT,morphinstance_vertex:bT,morphcolor_vertex:wT,morphnormal_vertex:TT,morphtarget_pars_vertex:CT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:IT,normal_pars_fragment:PT,normal_pars_vertex:LT,normal_vertex:DT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:FT,opaque_fragment:BT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:VT,dithering_fragment:GT,dithering_pars_fragment:WT,roughnessmap_fragment:qT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:YT,shadowmap_vertex:jT,shadowmask_pars_fragment:KT,skinbase_vertex:JT,skinning_pars_vertex:ZT,skinning_vertex:QT,skinnormal_vertex:eC,specularmap_fragment:tC,specularmap_pars_fragment:nC,tonemapping_fragment:iC,tonemapping_pars_fragment:sC,transmission_fragment:rC,transmission_pars_fragment:oC,uv_pars_fragment:aC,uv_pars_vertex:cC,uv_vertex:lC,worldpos_vertex:hC,background_vert:uC,background_frag:dC,backgroundCube_vert:fC,backgroundCube_frag:pC,cube_vert:mC,cube_frag:_C,depth_vert:gC,depth_frag:vC,distanceRGBA_vert:yC,distanceRGBA_frag:xC,equirect_vert:SC,equirect_frag:EC,linedashed_vert:MC,linedashed_frag:bC,meshbasic_vert:wC,meshbasic_frag:TC,meshlambert_vert:CC,meshlambert_frag:AC,meshmatcap_vert:RC,meshmatcap_frag:IC,meshnormal_vert:PC,meshnormal_frag:LC,meshphong_vert:DC,meshphong_frag:NC,meshphysical_vert:UC,meshphysical_frag:OC,meshtoon_vert:kC,meshtoon_frag:FC,points_vert:BC,points_frag:zC,shadow_vert:HC,shadow_frag:VC,sprite_vert:GC,sprite_frag:WC},se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Wt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Wt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Wt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Wt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Wt([se.lights,se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const zo={r:0,b:0,g:0},Fi=new In,qC=new ht;function XC(i,e,t,n,s,r,o){const a=new Ye(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function g(M){let S=!1;const b=_(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,S){const b=_(S);b&&(b.isCubeTexture||b.mapping===Ka)?(h===void 0&&(h=new Et(new as(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Qs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(S.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qC.makeRotationFromEuler(Fi)),h.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Et(new po(2,2),new Ri({name:"BackgroundMaterial",uniforms:Qs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(zo,w_(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:g,addToRenderList:m}}function $C(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,I,V,B,$){let X=!1;const G=u(B,V,I);r!==G&&(r=G,l(r.object)),X=f(x,B,V,$),X&&_(x,B,V,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(x,I,V,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,I,V){const B=V.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let X=$[I.id];X===void 0&&(X={},$[I.id]=X);let G=X[B];return G===void 0&&(G=d(c()),X[B]=G),G}function d(x){const I=[],V=[],B=[];for(let $=0;$<t;$++)I[$]=0,V[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,I,V,B){const $=r.attributes,X=I.attributes;let G=0;const Y=V.getAttributes();for(const z in Y)if(Y[z].location>=0){const ue=$[z];let ve=X[z];if(ve===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function _(x,I,V,B){const $={},X=I.attributes;let G=0;const Y=V.getAttributes();for(const z in Y)if(Y[z].location>=0){let ue=X[z];ue===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),$[z]=ve,G++}r.attributes=$,r.attributesNum=G,r.index=B}function g(){const x=r.newAttributes;for(let I=0,V=x.length;I<V;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){const V=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;V[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),$[x]!==I&&(i.vertexAttribDivisor(x,I),$[x]=I)}function M(){const x=r.newAttributes,I=r.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==x[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function S(x,I,V,B,$,X,G){G===!0?i.vertexAttribIPointer(x,I,V,$,X):i.vertexAttribPointer(x,I,V,B,$,X)}function b(x,I,V,B){g();const $=B.attributes,X=V.getAttributes(),G=I.defaultAttributeValues;for(const Y in X){const z=X[Y];if(z.location>=0){let ae=$[Y];if(ae===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const ue=ae.normalized,ve=ae.itemSize,qe=e.get(ae);if(qe===void 0)continue;const nt=qe.buffer,H=qe.type,Q=qe.bytesPerElement,pe=H===i.INT||H===i.UNSIGNED_INT||ae.gpuType===Kh;if(ae.isInterleavedBufferAttribute){const le=ae.data,Le=le.stride,Be=ae.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<z.locationSize;We++)p(z.location+We,le.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<z.locationSize;We++)m(z.location+We);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let We=0;We<z.locationSize;We++)S(z.location+We,ve/z.locationSize,H,ue,Le*Q,(Be+ve/z.locationSize*We)*Q,pe)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)p(z.location+le,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<z.locationSize;le++)m(z.location+le);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let le=0;le<z.locationSize;le++)S(z.location+le,ve/z.locationSize,H,ue,ve*Q,ve/z.locationSize*le*Q,pe)}}else if(G!==void 0){const ue=G[Y];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}M()}function O(){N();for(const x in n){const I=n[x];for(const V in I){const B=I[V];for(const $ in B)h(B[$].object),delete B[$];delete I[V]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const V in I){const B=I[V];for(const $ in B)h(B[$].object),delete B[$];delete I[V]}delete n[x.id]}function A(x){for(const I in n){const V=n[I];if(V[x.id]===void 0)continue;const B=V[x.id];for(const $ in B)h(B[$].object),delete B[$];delete V[x.id]}}function N(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function YC(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<d.length;g++)t.update(_,n,d[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jC(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:b,maxSamples:O}}function KC(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Vi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,S=M*4;let b=p.clippingState||null;c.value=b,b=h(_,d,S,f);for(let O=0;O!==S;++O)b[O]=t[O];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=f;S!==g;++S,b+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function JC(i){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=js:a===Sl&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xl||a===Sl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cw(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class R_ extends T_{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,af=[.125,.215,.35,.446,.526,.582],qi=20,Oc=new R_,cf=new Ye;let kc=null,Fc=0,Bc=0,zc=!1;const Gi=(1+Math.sqrt(5))/2,Ts=1/Gi,lf=[new R(-Gi,Ts,0),new R(Gi,Ts,0),new R(-Ts,0,Gi),new R(Ts,0,Gi),new R(0,Gi,-Ts),new R(0,Gi,Ts),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){kc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Fc,Bc),this._renderer.xr.enabled=zc,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ho,format:gn,colorSpace:Li,depthBuffer:!1},s=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZC(r)),this._blurMaterial=QC(r,e,t)}return s}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,n,s){const a=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cf),h.toneMapping=bi,h.autoClear=!1;const f=new ou({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new Et(new as,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(cf),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Ho(s,M*S,p>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===js||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lf[(s-r-1)%lf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let M=0;for(let A=0;A<qi;++A){const N=A/g,E=Math.exp(-N*N/2);p.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const b=this._sizeLods[s],O=3*b*(s>S-Is?s-S+Is:0),T=4*(this._cubeSize-b);Ho(t,O,T,3*b,2*b),c.setRenderTarget(t),c.render(u,Oc)}}function ZC(i){const e=[],t=[],n=[];let s=i;const r=i-Is+1+af.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Is?c=af[o-i+Is-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),S=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,N=T>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(E,g*_*T),S.set(d,m*_*T);const x=[T,T,T,T,T,T];b.set(x,p*_*T)}const O=new ti;O.setAttribute("position",new Rn(M,g)),O.setAttribute("uv",new Rn(S,m)),O.setAttribute("faceIndex",new Rn(b,p)),e.push(O),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(i,e,t){const n=new ns(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function QC(i,e,t){const n=new Float32Array(qi),s=new R(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function df(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ff(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xl||c===Sl,h=c===js||c===Ks;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hf(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new hf(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nA(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let S=0,b=M.length;S<b;S+=3){const O=M[S+0],T=M[S+1],A=M[S+2];d.push(O,T,T,A,A,O)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,b=M.length/3-1;S<b;S+=3){const O=S+0,T=S+1,A=S+2;d.push(O,T,T,A,A,O)}}else return;const m=new(v_(d)?b_:M_)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function iA(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M];for(let M=0;M<g.length;M++)t.update(p,n,g[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rA(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let O=a.attributes.position.count*b,T=1;O>e.maxTextureSize&&(T=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const A=new Float32Array(O*T*4*u),N=new x_(A,O,T,u);N.type=qn,N.needsUpdate=!0;const E=b*4;for(let I=0;I<u;I++){const V=p[I],B=M[I],$=S[I],X=O*T*4*I;for(let G=0;G<V.count;G++){const Y=G*E;_===!0&&(s.fromBufferAttribute(V,G),A[X+Y+0]=s.x,A[X+Y+1]=s.y,A[X+Y+2]=s.z,A[X+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,G),A[X+Y+4]=s.x,A[X+Y+5]=s.y,A[X+Y+6]=s.z,A[X+Y+7]=0),m===!0&&(s.fromBufferAttribute($,G),A[X+Y+8]=s.x,A[X+Y+9]=s.y,A[X+Y+10]=s.z,A[X+Y+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new fe(O,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function oA(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class I_ extends $t{constructor(e,t,n,s,r,o,a,c,l,h=Fs){if(h!==Fs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=ts),n===void 0&&h===Zs&&(n=Js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const P_=new $t,pf=new I_(1,1),L_=new x_,D_=new Xb,N_=new C_,mf=[],_f=[],gf=new Float32Array(16),vf=new Float32Array(9),yf=new Float32Array(4);function lr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mf[s];if(r===void 0&&(r=new Float32Array(s),mf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function aA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function lA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function uA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),At(t,n)}}function dA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;vf.set(n),i.uniformMatrix3fv(this.addr,!1,vf),At(t,n)}}function fA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),At(t,n)}}function pA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function _A(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function gA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function vA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function xA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function SA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function EA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pf.compareFunction=__,r=pf):r=P_,t.setTexture2D(e||r,s)}function MA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||D_,s)}function bA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||N_,s)}function wA(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||L_,s)}function TA(i){switch(i){case 5126:return aA;case 35664:return cA;case 35665:return lA;case 35666:return hA;case 35674:return uA;case 35675:return dA;case 35676:return fA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return _A;case 35669:case 35673:return gA;case 5125:return vA;case 36294:return yA;case 36295:return xA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return wA}}function CA(i,e){i.uniform1fv(this.addr,e)}function AA(i,e){const t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function RA(i,e){const t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function IA(i,e){const t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function PA(i,e){const t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LA(i,e){const t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function DA(i,e){const t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function NA(i,e){i.uniform1iv(this.addr,e)}function UA(i,e){i.uniform2iv(this.addr,e)}function OA(i,e){i.uniform3iv(this.addr,e)}function kA(i,e){i.uniform4iv(this.addr,e)}function FA(i,e){i.uniform1uiv(this.addr,e)}function BA(i,e){i.uniform2uiv(this.addr,e)}function zA(i,e){i.uniform3uiv(this.addr,e)}function HA(i,e){i.uniform4uiv(this.addr,e)}function VA(i,e,t){const n=this.cache,s=e.length,r=Za(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||P_,r[o])}function GA(i,e,t){const n=this.cache,s=e.length,r=Za(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||D_,r[o])}function WA(i,e,t){const n=this.cache,s=e.length,r=Za(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||N_,r[o])}function qA(i,e,t){const n=this.cache,s=e.length,r=Za(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||L_,r[o])}function XA(i){switch(i){case 5126:return CA;case 35664:return AA;case 35665:return RA;case 35666:return IA;case 35674:return PA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return NA;case 35667:case 35671:return UA;case 35668:case 35672:return OA;case 35669:case 35673:return kA;case 5125:return FA;case 36294:return BA;case 36295:return zA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return qA}}class $A{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TA(t.type)}}class YA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XA(t.type)}}class jA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function xf(i,e){i.seq.push(e),i.map[e.id]=e}function KA(i,e,t){const n=i.name,s=n.length;for(Hc.lastIndex=0;;){const r=Hc.exec(n),o=Hc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xf(t,l===void 0?new $A(a,i,e):new YA(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new jA(a),xf(t,u)),t=u}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);KA(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Sf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const JA=37297;let ZA=0;function QA(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function eR(i){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i);let n;switch(e===t?n="":e===Ra&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ra&&(n="LinearSRGBToLinearDisplayP3"),i){case Li:case Ja:return[n,"LinearTransferOETF"];case En:case nu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ef(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+QA(i.getShaderSource(e),o)}else return s}function tR(i,e){const t=eR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nR(i,e){let t;switch(e){case rb:t="Linear";break;case ob:t="Reinhard";break;case ab:t="OptimizedCineon";break;case cb:t="ACESFilmic";break;case hb:t="AgX";break;case ub:t="Neutral";break;case lb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new R;function iR(){et.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function rR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mr(i){return i!==""}function Mf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(aR,lR)}const cR=new Map;function lR(i,e){let t=Oe[e];if(t===void 0){const n=cR.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(hR,uR)}function uR(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function fR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case js:case Ks:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case ib:e="ENVMAP_BLENDING_MIX";break;case sb:e="ENVMAP_BLENDING_ADD";break}return e}function _R(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gR(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=dR(t),l=fR(t),h=pR(t),u=mR(t),d=_R(t),f=sR(t),_=rR(r),g=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==bi?nR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,tR("linearToOutputTexel",t.outputColorSpace),iR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=jl(o),o=Mf(o,t),o=bf(o,t),a=jl(a),a=Mf(a,t),a=bf(a,t),o=wf(o),a=wf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,b=M+p+a,O=Sf(s,s.VERTEX_SHADER,S),T=Sf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,O),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(O).trim(),$=s.getShaderInfoLog(T).trim();let X=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,T);else{const Y=Ef(s,O,"vertex"),z=Ef(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Y+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||$==="")&&(G=!1);G&&(I.diagnostics={runnable:X,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(O),s.deleteShader(T),N=new ea(s,g),E=oR(s,g)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,JA)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=T,this}let vR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xR(e),t.set(e,n)),n}}class xR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(i,e,t,n,s,r,o){const a=new ru,c=new yR,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,I,V,B){const $=V.fog,X=B.geometry,G=E.isMeshStandardMaterial?V.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),z=Y&&Y.mapping===Ka?Y.image.height:null,ae=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=ue!==void 0?ue.length:0;let qe=0;X.morphAttributes.position!==void 0&&(qe=1),X.morphAttributes.normal!==void 0&&(qe=2),X.morphAttributes.color!==void 0&&(qe=3);let nt,H,Q,pe;if(ae){const Ke=Mn[ae];nt=Ke.vertexShader,H=Ke.fragmentShader}else nt=E.vertexShader,H=E.fragmentShader,c.update(E),Q=c.getVertexShaderID(E),pe=c.getFragmentShaderID(E);const le=i.getRenderTarget(),Le=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,We=!!E.map,dt=!!E.matcap,C=!!Y,gt=!!E.aoMap,tt=!!E.lightMap,it=!!E.bumpMap,xe=!!E.normalMap,vt=!!E.displacementMap,Ie=!!E.emissiveMap,De=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,F=E.clearcoat>0,K=E.dispersion>0,J=E.iridescence>0,j=E.sheen>0,Se=E.transmission>0,re=v&&!!E.anisotropyMap,he=F&&!!E.clearcoatMap,Ue=F&&!!E.clearcoatNormalMap,ee=F&&!!E.clearcoatRoughnessMap,ce=J&&!!E.iridescenceMap,Xe=J&&!!E.iridescenceThicknessMap,Ae=j&&!!E.sheenColorMap,de=j&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,ze=!!E.specularColorMap,ut=!!E.specularIntensityMap,P=Se&&!!E.transmissionMap,te=Se&&!!E.thicknessMap,W=!!E.gradientMap,q=!!E.alphaMap,ie=E.alphaTest>0,we=!!E.alphaHash,$e=!!E.extensions;let yt=bi;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Dt={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:H,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Li,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:dt,envMap:C,envMapMode:C&&Y.mapping,envMapCubeUVHeight:z,aoMap:gt,lightMap:tt,bumpMap:it,normalMap:xe,displacementMap:d&&vt,emissiveMap:Ie,normalMapObjectSpace:xe&&E.normalMapType===mb,normalMapTangentSpace:xe&&E.normalMapType===m_,metalnessMap:De,roughnessMap:w,anisotropy:v,anisotropyMap:re,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ee,dispersion:K,iridescence:J,iridescenceMap:ce,iridescenceThicknessMap:Xe,sheen:j,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:Pe,specularColorMap:ze,specularIntensityMap:ut,transmission:Se,transmissionMap:P,thicknessMap:te,gradientMap:W,opaque:E.transparent===!1&&E.blending===ks&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:ie,alphaHash:we,combine:E.combine,mapUv:We&&g(E.map.channel),aoMapUv:gt&&g(E.aoMap.channel),lightMapUv:tt&&g(E.lightMap.channel),bumpMapUv:it&&g(E.bumpMap.channel),normalMapUv:xe&&g(E.normalMap.channel),displacementMapUv:vt&&g(E.displacementMap.channel),emissiveMapUv:Ie&&g(E.emissiveMap.channel),metalnessMapUv:De&&g(E.metalnessMap.channel),roughnessMapUv:w&&g(E.roughnessMap.channel),anisotropyMapUv:re&&g(E.anisotropyMap.channel),clearcoatMapUv:he&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(E.sheenRoughnessMap.channel),specularMapUv:Pe&&g(E.specularMap.channel),specularColorMapUv:ze&&g(E.specularColorMap.channel),specularIntensityMapUv:ut&&g(E.specularIntensityMap.channel),transmissionMapUv:P&&g(E.transmissionMap.channel),thicknessMapUv:te&&g(E.thicknessMap.channel),alphaMapUv:q&&g(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(We||q),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zn,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(M(x,E),S(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),E.push(a.mask)}function b(E){const x=_[E.type];let I;if(x){const V=Mn[x];I=sw.clone(V.uniforms)}else I=E.uniforms;return I}function O(E,x){let I;for(let V=0,B=h.length;V<B;V++){const $=h[V];if($.cacheKey===x){I=$,++I.usedTimes;break}}return I===void 0&&(I=new gR(i,x,E,r),h.push(I)),I}function T(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:O,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:N}}function ER(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function MR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Af(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,_,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||MR),n.length>1&&n.sort(d||Cf),s.length>1&&s.sort(d||Cf)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function bR(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Af,i.set(n,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ye};break;case"SpotLight":t={position:new R,direction:new R,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function TR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let CR=0;function AR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function RR(i){const e=new wR,t=TR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ht,o=new ht;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,S=0,b=0,O=0,T=0,A=0;l.sort(AR);for(let E=0,x=l.length;E<x;E++){const I=l[E],V=I.color,B=I.intensity,$=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],B);A++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,z=t.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(V).multiplyScalar(B),G.distance=$,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[g]=G;const Y=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,Y.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[g]=Y.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=X,b++}g++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(V).multiplyScalar(B),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Y=I.shadow,z=t.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=I.shadow.matrix,S++}n.point[_]=G,_++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(B),G.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==b||N.numSpotMaps!==O||N.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+O-T,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,N.directionalLength=f,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=b,N.numSpotMaps=O,N.numLightProbes=A,n.version=CR++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Rf(i){const e=new RR(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function IR(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Rf(i),e.set(s,[a])):r>=o.length?(a=new Rf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class PR extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LR extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UR(i,e,t){let n=new au;const s=new fe,r=new fe,o=new lt,a=new PR({depthPacking:pb}),c=new LR,l={},h=t.maxTextureSize,u={[Ai]:Kt,[Kt]:Ai,[zn]:zn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:DR,fragmentShader:NR}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Et(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let p=this.type;this.render=function(T,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==Bn&&this.type===Bn,$=p===Bn&&this.type!==Bn;for(let X=0,G=T.length;X<G;X++){const Y=T[X],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ae=z.getFrameExtents();if(s.multiply(ae),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,z.mapSize.y=r.y)),z.map===null||B===!0||$===!0){const ve=this.type!==Bn?{minFilter:cn,magFilter:cn}:{};z.map!==null&&z.map.dispose(),z.map=new ns(s.x,s.y,ve),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let ve=0;ve<ue;ve++){const qe=z.getViewport(ve);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),V.viewport(o),z.updateMatrices(Y,ve),n=z.getFrustum(),b(A,N,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Bn&&M(z,N),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,I)};function M(T,A){const N=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ns(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,N,f,g,null)}function S(T,A,N,E){let x=null;const I=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)x=I;else if(x=N.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=x.uuid,B=A.uuid;let $=l[V];$===void 0&&($={},l[V]=$);let X=$[B];X===void 0&&(X=x.clone(),$[B]=X,A.addEventListener("dispose",O)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,E===Bn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=N}return x}function b(T,A,N,E,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const B=e.update(T),$=T.material;if(Array.isArray($)){const X=B.groups;for(let G=0,Y=X.length;G<Y;G++){const z=X[G],ae=$[z.materialIndex];if(ae&&ae.visible){const ue=S(T,ae,E,x);T.onBeforeShadow(i,T,A,N,B,ue,z),i.renderBufferDirect(N,null,B,ue,T,z),T.onAfterShadow(i,T,A,N,B,ue,z)}}}else if($.visible){const X=S(T,$,E,x);T.onBeforeShadow(i,T,A,N,B,X,null),i.renderBufferDirect(N,null,B,X,T,null),T.onAfterShadow(i,T,A,N,B,X,null)}}const V=T.children;for(let B=0,$=V.length;B<$;B++)b(V[B],A,N,E,x)}function O(T){T.target.removeEventListener("dispose",O);for(const N in l){const E=l[N],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function OR(i){function e(){let P=!1;const te=new lt;let W=null;const q=new lt(0,0,0,0);return{setMask:function(ie){W!==ie&&!P&&(i.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){P=ie},setClear:function(ie,we,$e,yt,Dt){Dt===!0&&(ie*=yt,we*=yt,$e*=yt),te.set(ie,we,$e,yt),q.equals(te)===!1&&(i.clearColor(ie,we,$e,yt),q.copy(te))},reset:function(){P=!1,W=null,q.set(-1,0,0,0)}}}function t(){let P=!1,te=null,W=null,q=null;return{setTest:function(ie){ie?pe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ie){te!==ie&&!P&&(i.depthMask(ie),te=ie)},setFunc:function(ie){if(W!==ie){switch(ie){case KM:i.depthFunc(i.NEVER);break;case JM:i.depthFunc(i.ALWAYS);break;case ZM:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case QM:i.depthFunc(i.EQUAL);break;case eb:i.depthFunc(i.GEQUAL);break;case tb:i.depthFunc(i.GREATER);break;case nb:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ie}},setLocked:function(ie){P=ie},setClear:function(ie){q!==ie&&(i.clearDepth(ie),q=ie)},reset:function(){P=!1,te=null,W=null,q=null}}}function n(){let P=!1,te=null,W=null,q=null,ie=null,we=null,$e=null,yt=null,Dt=null;return{setTest:function(Ke){P||(Ke?pe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!P&&(i.stencilMask(Ke),te=Ke)},setFunc:function(Ke,Dn,Sn){(W!==Ke||q!==Dn||ie!==Sn)&&(i.stencilFunc(Ke,Dn,Sn),W=Ke,q=Dn,ie=Sn)},setOp:function(Ke,Dn,Sn){(we!==Ke||$e!==Dn||yt!==Sn)&&(i.stencilOp(Ke,Dn,Sn),we=Ke,$e=Dn,yt=Sn)},setLocked:function(Ke){P=Ke},setClear:function(Ke){Dt!==Ke&&(i.clearStencil(Ke),Dt=Ke)},reset:function(){P=!1,te=null,W=null,q=null,ie=null,we=null,$e=null,yt=null,Dt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,p=null,M=null,S=null,b=null,O=null,T=new Ye(0,0,0),A=0,N=!1,E=null,x=null,I=null,V=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=G>=2);let z=null,ae={};const ue=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),qe=new lt().fromArray(ue),nt=new lt().fromArray(ve);function H(P,te,W,q){const ie=new Uint8Array(4),we=i.createTexture();i.bindTexture(P,we),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<W;$e++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(te+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return we}const Q={};Q[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),r.setFunc(wa),it(!1),xe(Dd),pe(i.CULL_FACE),gt(Mi);function pe(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function le(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function Le(P,te){return h[P]!==te?(i.bindFramebuffer(P,te),h[P]=te,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Be(P,te){let W=d,q=!1;if(P){W=u.get(te),W===void 0&&(W=[],u.set(te,W));const ie=P.textures;if(W.length!==ie.length||W[0]!==i.COLOR_ATTACHMENT0){for(let we=0,$e=ie.length;we<$e;we++)W[we]=i.COLOR_ATTACHMENT0+we;W.length=ie.length,q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,q=!0);q&&i.drawBuffers(W)}function We(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const dt={[Wi]:i.FUNC_ADD,[DM]:i.FUNC_SUBTRACT,[NM]:i.FUNC_REVERSE_SUBTRACT};dt[UM]=i.MIN,dt[OM]=i.MAX;const C={[kM]:i.ZERO,[FM]:i.ONE,[BM]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[qM]:i.SRC_ALPHA_SATURATE,[GM]:i.DST_COLOR,[HM]:i.DST_ALPHA,[zM]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[WM]:i.ONE_MINUS_DST_COLOR,[VM]:i.ONE_MINUS_DST_ALPHA,[XM]:i.CONSTANT_COLOR,[$M]:i.ONE_MINUS_CONSTANT_COLOR,[YM]:i.CONSTANT_ALPHA,[jM]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(P,te,W,q,ie,we,$e,yt,Dt,Ke){if(P===Mi){_===!0&&(le(i.BLEND),_=!1);return}if(_===!1&&(pe(i.BLEND),_=!0),P!==LM){if(P!==g||Ke!==N){if((m!==Wi||S!==Wi)&&(i.blendEquation(i.FUNC_ADD),m=Wi,S=Wi),Ke)switch(P){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nd:i.blendFunc(i.ONE,i.ONE);break;case Ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ud:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Od:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,M=null,b=null,O=null,T.set(0,0,0),A=0,g=P,N=Ke}return}ie=ie||te,we=we||W,$e=$e||q,(te!==m||ie!==S)&&(i.blendEquationSeparate(dt[te],dt[ie]),m=te,S=ie),(W!==p||q!==M||we!==b||$e!==O)&&(i.blendFuncSeparate(C[W],C[q],C[we],C[$e]),p=W,M=q,b=we,O=$e),(yt.equals(T)===!1||Dt!==A)&&(i.blendColor(yt.r,yt.g,yt.b,Dt),T.copy(yt),A=Dt),g=P,N=!1}function tt(P,te){P.side===zn?le(i.CULL_FACE):pe(i.CULL_FACE);let W=P.side===Kt;te&&(W=!W),it(W),P.blending===ks&&P.transparent===!1?gt(Mi):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const q=P.stencilWrite;o.setTest(q),q&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(P){E!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),E=P)}function xe(P){P!==IM?(pe(i.CULL_FACE),P!==x&&(P===Dd?i.cullFace(i.BACK):P===PM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),x=P}function vt(P){P!==I&&(X&&i.lineWidth(P),I=P)}function Ie(P,te,W){P?(pe(i.POLYGON_OFFSET_FILL),(V!==te||B!==W)&&(i.polygonOffset(te,W),V=te,B=W)):le(i.POLYGON_OFFSET_FILL)}function De(P){P?pe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function w(P){P===void 0&&(P=i.TEXTURE0+$-1),z!==P&&(i.activeTexture(P),z=P)}function v(P,te,W){W===void 0&&(z===null?W=i.TEXTURE0+$-1:W=z);let q=ae[W];q===void 0&&(q={type:void 0,texture:void 0},ae[W]=q),(q.type!==P||q.texture!==te)&&(z!==W&&(i.activeTexture(W),z=W),i.bindTexture(P,te||Q[P]),q.type=P,q.texture=te)}function F(){const P=ae[z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){qe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),qe.copy(P))}function de(P){nt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),nt.copy(P))}function Pe(P,te){let W=c.get(te);W===void 0&&(W=new WeakMap,c.set(te,W));let q=W.get(P);q===void 0&&(q=i.getUniformBlockIndex(te,P.name),W.set(P,q))}function ze(P,te){const q=c.get(te).get(P);a.get(te)!==q&&(i.uniformBlockBinding(te,q,P.__bindingPointIndex),a.set(te,q))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,ae={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,p=null,M=null,S=null,b=null,O=null,T=new Ye(0,0,0),A=0,N=!1,E=null,x=null,I=null,V=null,B=null,qe.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pe,disable:le,bindFramebuffer:Le,drawBuffers:Be,useProgram:We,setBlending:gt,setMaterial:tt,setFlipSided:it,setCullFace:xe,setLineWidth:vt,setPolygonOffset:Ie,setScissorTest:De,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ce,texImage3D:Xe,updateUBOMapping:Pe,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:ee,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Ae,viewport:de,reset:ut}}function If(i,e,t,n){const s=kR(n);switch(t){case c_:return i*e;case h_:return i*e;case u_:return i*e*2;case d_:return i*e/s.components*s.byteLength;case Qh:return i*e/s.components*s.byteLength;case f_:return i*e*2/s.components*s.byteLength;case eu:return i*e*2/s.components*s.byteLength;case l_:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case tu:return i*e*4/s.components*s.byteLength;case jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case Ml:case wl:return Math.max(i,8)*Math.max(e,8)/2;case Cl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Wl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case p_:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $l:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kR(i){switch(i){case Zn:case r_:return{byteLength:1,components:1};case jr:case o_:case ho:return{byteLength:2,components:1};case Jh:case Zh:return{byteLength:2,components:4};case ts:case Kh:case qn:return{byteLength:4,components:1};case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function FR(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return f?new OffscreenCanvas(w,v):Pa("canvas")}function g(w,v,F){let K=1;const J=De(w);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(K*J.width),Se=Math.floor(K*J.height);u===void 0&&(u=_(j,Se));const re=v?_(j,Se):u;return re.width=j,re.height=Se,re.getContext("2d").drawImage(w,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Se+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==cn&&w.minFilter!==mn}function p(w){i.generateMipmap(w)}function M(w,v,F,K,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=v;if(v===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),v===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const Se=J?Ca:et.getTransfer(K);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=Se===ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(w,v){let F;return w?v===null||v===ts||v===Js?F=i.DEPTH24_STENCIL8:v===qn?F=i.DEPTH32F_STENCIL8:v===jr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ts||v===Js?F=i.DEPTH_COMPONENT24:v===qn?F=i.DEPTH_COMPONENT32F:v===jr&&(F=i.DEPTH_COMPONENT16),F}function b(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function O(w){const v=w.target;v.removeEventListener("dispose",O),A(v),v.isVideoTexture&&h.delete(v)}function T(w){const v=w.target;v.removeEventListener("dispose",T),E(v)}function A(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,K=d.get(F);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(w),Object.keys(K).length===0&&d.delete(F)}n.remove(w)}function N(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,K=d.get(F);delete K[v.__cacheKey],o.memory.textures--}function E(w){const v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[K][J]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let K=0,J=F.length;K<J;K++){const j=n.get(F[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(w)}let x=0;function I(){x=0}function V(){const w=x;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),x+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){const F=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(F,w,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function X(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){nt(F,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){nt(F,w,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function Y(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){H(F,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const z={[Ta]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},ae={[cn]:i.NEAREST,[db]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[gc]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},ue={[_b]:i.NEVER,[Eb]:i.ALWAYS,[gb]:i.LESS,[__]:i.LEQUAL,[vb]:i.EQUAL,[Sb]:i.GEQUAL,[yb]:i.GREATER,[xb]:i.NOTEQUAL};function ve(w,v){if(v.type===qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===gc||v.magFilter===So||v.magFilter===Yi||v.minFilter===mn||v.minFilter===gc||v.minFilter===So||v.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,z[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,z[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,z[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==So&&v.minFilter!==Yi||v.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qe(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",O));const K=v.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const j=B(v);if(j!==w.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[j].usedTimes++;const Se=J[w.__cacheKey];Se!==void 0&&(J[w.__cacheKey].usedTimes--,Se.usedTimes===0&&N(v)),w.__cacheKey=j,w.__webglTexture=J[j].texture}return F}function nt(w,v,F){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const J=qe(w,v),j=v.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+F);const Se=n.get(j);if(j.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+F);const re=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===mi?null:et.getPrimaries(v.colorSpace),Ue=v.colorSpace===mi||re===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ee=g(v.image,!1,s.maxTextureSize);ee=Ie(v,ee);const ce=r.convert(v.format,v.colorSpace),Xe=r.convert(v.type);let Ae=M(v.internalFormat,ce,Xe,v.colorSpace,v.isVideoTexture);ve(K,v);let de;const Pe=v.mipmaps,ze=v.isVideoTexture!==!0,ut=Se.__version===void 0||J===!0,P=j.dataReady,te=b(v,ee);if(v.isDepthTexture)Ae=S(v.format===Zs,v.type),ut&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ce,Xe,null));else if(v.isDataTexture)if(Pe.length>0){ze&&ut&&t.texStorage2D(i.TEXTURE_2D,te,Ae,Pe[0].width,Pe[0].height);for(let W=0,q=Pe.length;W<q;W++)de=Pe[W],ze?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,ce,Xe,de.data):t.texImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,ce,Xe,de.data);v.generateMipmaps=!1}else ze?(ut&&t.texStorage2D(i.TEXTURE_2D,te,Ae,ee.width,ee.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ce,Xe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ce,Xe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ae,Pe[0].width,Pe[0].height,ee.depth);for(let W=0,q=Pe.length;W<q;W++)if(de=Pe[W],v.format!==gn)if(ce!==null)if(ze){if(P)if(v.layerUpdates.size>0){const ie=If(de.width,de.height,v.format,v.type);for(const we of v.layerUpdates){const $e=de.data.subarray(we*ie/de.data.BYTES_PER_ELEMENT,(we+1)*ie/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,we,de.width,de.height,1,ce,$e,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,ce,de.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,ce,Xe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,de.width,de.height,ee.depth,0,ce,Xe,de.data)}else{ze&&ut&&t.texStorage2D(i.TEXTURE_2D,te,Ae,Pe[0].width,Pe[0].height);for(let W=0,q=Pe.length;W<q;W++)de=Pe[W],v.format!==gn?ce!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,ce,de.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,de.width,de.height,ce,Xe,de.data):t.texImage2D(i.TEXTURE_2D,W,Ae,de.width,de.height,0,ce,Xe,de.data)}else if(v.isDataArrayTexture)if(ze){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,Ae,ee.width,ee.height,ee.depth),P)if(v.layerUpdates.size>0){const W=If(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const ie=ee.data.subarray(q*W/ee.data.BYTES_PER_ELEMENT,(q+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ce,Xe,ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Xe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,ce,Xe,ee.data);else if(v.isData3DTexture)ze?(ut&&t.texStorage3D(i.TEXTURE_3D,te,Ae,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Xe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,ce,Xe,ee.data);else if(v.isFramebufferTexture){if(ut)if(ze)t.texStorage2D(i.TEXTURE_2D,te,Ae,ee.width,ee.height);else{let W=ee.width,q=ee.height;for(let ie=0;ie<te;ie++)t.texImage2D(i.TEXTURE_2D,ie,Ae,W,q,0,ce,Xe,null),W>>=1,q>>=1}}else if(Pe.length>0){if(ze&&ut){const W=De(Pe[0]);t.texStorage2D(i.TEXTURE_2D,te,Ae,W.width,W.height)}for(let W=0,q=Pe.length;W<q;W++)de=Pe[W],ze?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ce,Xe,de):t.texImage2D(i.TEXTURE_2D,W,Ae,ce,Xe,de);v.generateMipmaps=!1}else if(ze){if(ut){const W=De(ee);t.texStorage2D(i.TEXTURE_2D,te,Ae,W.width,W.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Xe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ce,Xe,ee);m(v)&&p(K),Se.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function H(w,v,F){if(v.image.length!==6)return;const K=qe(w,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const j=n.get(J);if(J.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const Se=et.getPrimaries(et.workingColorSpace),re=v.colorSpace===mi?null:et.getPrimaries(v.colorSpace),he=v.colorSpace===mi||Se===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!Ue&&!ee?ce[q]=g(v.image[q],!0,s.maxCubemapSize):ce[q]=ee?v.image[q].image:v.image[q],ce[q]=Ie(v,ce[q]);const Xe=ce[0],Ae=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Pe=M(v.internalFormat,Ae,de,v.colorSpace),ze=v.isVideoTexture!==!0,ut=j.__version===void 0||K===!0,P=J.dataReady;let te=b(v,Xe);ve(i.TEXTURE_CUBE_MAP,v);let W;if(Ue){ze&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Pe,Xe.width,Xe.height);for(let q=0;q<6;q++){W=ce[q].mipmaps;for(let ie=0;ie<W.length;ie++){const we=W[ie];v.format!==gn?Ae!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,we.width,we.height,Ae,de,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,Pe,we.width,we.height,0,Ae,de,we.data)}}}else{if(W=v.mipmaps,ze&&ut){W.length>0&&te++;const q=De(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Pe,q.width,q.height)}for(let q=0;q<6;q++)if(ee){ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,Ae,de,ce[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,ce[q].width,ce[q].height,0,Ae,de,ce[q].data);for(let ie=0;ie<W.length;ie++){const $e=W[ie].image[q].image;ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,$e.width,$e.height,Ae,de,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,Pe,$e.width,$e.height,0,Ae,de,$e.data)}}else{ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ae,de,ce[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,Ae,de,ce[q]);for(let ie=0;ie<W.length;ie++){const we=W[ie];ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Ae,de,we.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,Pe,Ae,de,we.image[q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Q(w,v,F,K,J,j){const Se=r.convert(F.format,F.colorSpace),re=r.convert(F.type),he=M(F.internalFormat,Se,re,F.colorSpace);if(!n.get(v).__hasExternalTextures){const ee=Math.max(1,v.width>>j),ce=Math.max(1,v.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,he,ee,ce,v.depth,0,Se,re,null):t.texImage2D(J,j,he,ee,ce,0,Se,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(F).__webglTexture,0,it(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(F).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,j=S(v.stencilBuffer,J),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=it(v);xe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,j,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const K=v.textures;for(let J=0;J<K.length;J++){const j=K[J],Se=r.convert(j.format,j.colorSpace),re=r.convert(j.type),he=M(j.internalFormat,Se,re,j.colorSpace),Ue=it(v);F&&xe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,he,v.width,v.height):xe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const K=n.get(v.depthTexture).__webglTexture,J=it(v);if(v.depthTexture.format===Fs)xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Zs)xe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Le(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");le(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=i.createRenderbuffer(),pe(v.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),pe(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,v,F){const K=n.get(w);v!==void 0&&Q(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Le(w)}function We(w){const v=w.texture,F=n.get(w),K=n.get(v);w.addEventListener("dispose",T);const J=w.textures,j=w.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let he=0;he<v.mipmaps.length;he++)F.__webglFramebuffer[re][he]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let re=0,he=J.length;re<he;re++){const Ue=n.get(J[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&xe(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const he=J[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Ue=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ce=M(he.internalFormat,Ue,ee,he.colorSpace,w.isXRRenderTarget===!0),Xe=it(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ve(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Q(F.__webglFramebuffer[re][he],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else Q(F.__webglFramebuffer[re],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,he=J.length;re<he;re++){const Ue=J[re],ee=n.get(Ue);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),ve(i.TEXTURE_2D,Ue),Q(F.__webglFramebuffer,w,Ue,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),m(Ue)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,K.__webglTexture),ve(re,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Q(F.__webglFramebuffer[he],w,v,i.COLOR_ATTACHMENT0,re,he);else Q(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}w.depthBuffer&&Le(w)}function dt(w){const v=w.textures;for(let F=0,K=v.length;F<K;F++){const J=v[F];if(m(J)){const j=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(J).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}const C=[],gt=[];function tt(w){if(w.samples>0){if(xe(w)===!1){const v=w.textures,F=w.width,K=w.height;let J=i.COLOR_BUFFER_BIT;const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),re=v.length>1;if(re)for(let he=0;he<v.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<v.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ue=n.get(v[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,J,i.NEAREST),c===!0&&(C.length=0,gt.length=0,C.push(i.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(C.push(j),gt.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<v.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ue=n.get(v[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function xe(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ie(w,v){const F=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Li&&F!==mi&&(et.getTransfer(F)===ct?(K!==gn||J!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xe}function BR(i,e){function t(n,s=mi){let r;const o=et.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===a_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===r_)return i.BYTE;if(n===o_)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===Kh)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ho)return i.HALF_FLOAT;if(n===c_)return i.ALPHA;if(n===l_)return i.RGB;if(n===gn)return i.RGBA;if(n===h_)return i.LUMINANCE;if(n===u_)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===d_)return i.RED;if(n===Qh)return i.RED_INTEGER;if(n===f_)return i.RG;if(n===eu)return i.RG_INTEGER;if(n===tu)return i.RGBA_INTEGER;if(n===jo||n===Ko||n===Jo||n===Zo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===bl||n===wl||n===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Al)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Il||n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===Ol||n===kl||n===Fl||n===Bl||n===zl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===Wl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===p_||n===Xl||n===$l||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zR extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HR={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HR)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const VR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:VR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qR extends ar{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const g=new WR,m=t.getContextAttributes();let p=null,M=null;const S=[],b=[],O=new fe;let T=null;const A=new tn;A.layers.enable(1),A.viewport=new lt;const N=new tn;N.layers.enable(2),N.viewport=new lt;const E=[A,N],x=new zR;x.layers.enable(1),x.layers.enable(2);let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=S[H];return Q===void 0&&(Q=new Vc,S[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=S[H];return Q===void 0&&(Q=new Vc,S[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=S[H];return Q===void 0&&(Q=new Vc,S[H]=Q),Q.getHandSpace()};function B(H){const Q=b.indexOf(H.inputSource);if(Q===-1)return;const pe=S[Q];pe!==void 0&&(pe.update(H.inputSource,H.frame,l||o),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",X);for(let H=0;H<S.length;H++){const Q=b[H];Q!==null&&(b[H]=null,S[H].disconnect(Q))}I=null,V=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ns(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Zs:Fs,pe=m.stencil?Js:ts);const Le={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ns(d.textureWidth,d.textureHeight,{format:gn,type:Zn,depthTexture:new I_(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(H){for(let Q=0;Q<H.removed.length;Q++){const pe=H.removed[Q],le=b.indexOf(pe);le>=0&&(b[le]=null,S[le].disconnect(pe))}for(let Q=0;Q<H.added.length;Q++){const pe=H.added[Q];let le=b.indexOf(pe);if(le===-1){for(let Be=0;Be<S.length;Be++)if(Be>=b.length){b.push(pe),le=Be;break}else if(b[Be]===null){b[Be]=pe,le=Be;break}if(le===-1)break}const Le=S[le];Le&&Le.connect(pe)}}const G=new R,Y=new R;function z(H,Q,pe){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const le=G.distanceTo(Y),Le=Q.projectionMatrix.elements,Be=pe.projectionMatrix.elements,We=Le[14]/(Le[10]-1),dt=Le[14]/(Le[10]+1),C=(Le[9]+1)/Le[5],gt=(Le[9]-1)/Le[5],tt=(Le[8]-1)/Le[0],it=(Be[8]+1)/Be[0],xe=We*tt,vt=We*it,Ie=le/(-tt+it),De=Ie*-tt;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(De),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const w=We+Ie,v=dt+Ie,F=xe-De,K=vt+(le-De),J=C*dt/v*w,j=gt*dt/v*w;H.projectionMatrix.makePerspective(F,K,J,j,w,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ae(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),x.near=N.near=A.near=H.near,x.far=N.far=A.far=H.far,(I!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,V=x.far,A.near=I,A.far=V,N.near=I,N.far=V,A.updateProjectionMatrix(),N.updateProjectionMatrix(),H.updateProjectionMatrix());const Q=H.parent,pe=x.cameras;ae(x,Q);for(let le=0;le<pe.length;le++)ae(pe[le],Q);pe.length===2?z(x,A,N):x.projectionMatrix.copy(A.projectionMatrix),ue(H,x,Q)};function ue(H,Q,pe){pe===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Kr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ve=null;function qe(H,Q){if(h=Q.getViewerPose(l||o),_=Q,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Be=0;Be<pe.length;Be++){const We=pe[Be];let dt=null;if(f!==null)dt=f.getViewport(We);else{const gt=u.getViewSubImage(d,We);dt=gt.viewport,Be===0&&(e.setRenderTargetTextures(M,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(M))}let C=E[Be];C===void 0&&(C=new tn,C.layers.enable(Be),C.viewport=new lt,E[Be]=C),C.matrix.fromArray(We.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(We.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(dt.x,dt.y,dt.width,dt.height),Be===0&&(x.matrix.copy(C.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(C)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Be=u.getDepthInformation(pe[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,s.renderState)}}for(let pe=0;pe<S.length;pe++){const le=b[pe],Le=S[pe];le!==null&&Le!==void 0&&Le.update(le,Q,l||o)}ve&&ve(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const nt=new A_;nt.setAnimationLoop(qe),this.setAnimationLoop=function(H){ve=H},this.dispose=function(){}}}const Bi=new In,XR=new ht;function $R(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,w_(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,b=M.envMapRotation;S&&(m.envMap.value=S,Bi.copy(b),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(XR.makeRotationFromEuler(Bi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function YR(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const b=S.program;n.uniformBlockBinding(M,b)}function l(M,S){let b=s[M.id];b===void 0&&(_(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(M,O);const T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const S=u();M.__bindingPointIndex=S;const b=i.createBuffer(),O=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],b=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=b.length;T<A;T++){const N=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,x=N.length;E<x;E++){const I=N[E];if(f(I,T,E,O)===!0){const V=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let X=0;X<B.length;X++){const G=B[X],Y=g(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+$,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,S,b,O){const T=M.value,A=S+"_"+b;if(O[A]===void 0)return typeof T=="number"||typeof T=="boolean"?O[A]=T:O[A]=T.clone(),!0;{const N=O[A];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return O[A]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function _(M){const S=M.uniforms;let b=0;const O=16;for(let A=0,N=S.length;A<N;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,I=E.length;x<I;x++){const V=E[x],B=Array.isArray(V.value)?V.value:[V.value];for(let $=0,X=B.length;$<X;$++){const G=B[$],Y=g(G),z=b%O,ae=z%Y.boundary,ue=z+ae;b+=ae,ue!==0&&O-ue<Y.storage&&(b+=O-ue),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=Y.storage}}}const T=b%O;return T>0&&(b+=O-T),M.__size=b,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class jR{constructor(e={}){const{canvas:t=Bb(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=bi,this.toneMappingExposure=1;const S=this;let b=!1,O=0,T=0,A=null,N=-1,E=null;const x=new lt,I=new lt;let V=null;const B=new Ye(0);let $=0,X=t.width,G=t.height,Y=1,z=null,ae=null;const ue=new lt(0,0,X,G),ve=new lt(0,0,X,G);let qe=!1;const nt=new au;let H=!1,Q=!1;const pe=new ht,le=new R,Le=new lt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function dt(){return A===null?Y:1}let C=n;function gt(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ie,!1),C===null){const L="webgl2";if(C=gt(L,y),C===null)throw gt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let tt,it,xe,vt,Ie,De,w,v,F,K,J,j,Se,re,he,Ue,ee,ce,Xe,Ae,de,Pe,ze,ut;function P(){tt=new tA(C),tt.init(),Pe=new BR(C,tt),it=new jC(C,tt,e,Pe),xe=new OR(C),vt=new sA(C),Ie=new ER,De=new FR(C,tt,xe,Ie,it,Pe,vt),w=new JC(S),v=new eA(S),F=new uw(C),ze=new $C(C,F),K=new nA(C,F,vt,ze),J=new oA(C,K,F,vt),Xe=new rA(C,it,De),Ue=new KC(Ie),j=new SR(S,w,v,tt,it,ze,Ue),Se=new $R(S,Ie),re=new bR,he=new IR(tt),ce=new XC(S,w,v,xe,J,d,c),ee=new UR(S,J,it),ut=new YR(C,vt,it,xe),Ae=new YC(C,tt,vt),de=new iA(C,tt,vt),vt.programs=j.programs,S.capabilities=it,S.extensions=tt,S.properties=Ie,S.renderLists=re,S.shadowMap=ee,S.state=xe,S.info=vt}P();const te=new qR(S,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(X,G,!1))},this.getSize=function(y){return y.set(X,G)},this.setSize=function(y,L,U=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,G=L,t.width=Math.floor(y*Y),t.height=Math.floor(L*Y),U===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(X*Y,G*Y).floor()},this.setDrawingBufferSize=function(y,L,U){X=y,G=L,Y=U,t.width=Math.floor(y*U),t.height=Math.floor(L*U),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,L,U,k){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,L,U,k),xe.viewport(x.copy(ue).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(ve)},this.setScissor=function(y,L,U,k){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,L,U,k),xe.scissor(I.copy(ve).multiplyScalar(Y).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){xe.setScissorTest(qe=y)},this.setOpaqueSort=function(y){z=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(y=!0,L=!0,U=!0){let k=0;if(y){let D=!1;if(A!==null){const ne=A.texture.format;D=ne===tu||ne===eu||ne===Qh}if(D){const ne=A.texture.type,oe=ne===Zn||ne===ts||ne===jr||ne===Js||ne===Jh||ne===Zh,me=ce.getClearColor(),ge=ce.getClearAlpha(),Te=me.r,Ce=me.g,Ee=me.b;oe?(f[0]=Te,f[1]=Ce,f[2]=Ee,f[3]=ge,C.clearBufferuiv(C.COLOR,0,f)):(_[0]=Te,_[1]=Ce,_[2]=Ee,_[3]=ge,C.clearBufferiv(C.COLOR,0,_))}else k|=C.COLOR_BUFFER_BIT}L&&(k|=C.DEPTH_BUFFER_BIT),U&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),re.dispose(),he.dispose(),Ie.dispose(),w.dispose(),v.dispose(),J.dispose(),ze.dispose(),ut.dispose(),j.dispose(),te.dispose(),te.removeEventListener("sessionstart",Sn),te.removeEventListener("sessionend",pu),Di.stop()};function W(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=vt.autoReset,L=ee.enabled,U=ee.autoUpdate,k=ee.needsUpdate,D=ee.type;P(),vt.autoReset=y,ee.enabled=L,ee.autoUpdate=U,ee.needsUpdate=k,ee.type=D}function ie(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function we(y){const L=y.target;L.removeEventListener("dispose",we),$e(L)}function $e(y){yt(y),Ie.remove(y)}function yt(y){const L=Ie.get(y).programs;L!==void 0&&(L.forEach(function(U){j.releaseProgram(U)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,U,k,D,ne){L===null&&(L=Be);const oe=D.isMesh&&D.matrixWorld.determinant()<0,me=W_(y,L,U,k,D);xe.setMaterial(k,oe);let ge=U.index,Te=1;if(k.wireframe===!0){if(ge=K.getWireframeAttribute(U),ge===void 0)return;Te=2}const Ce=U.drawRange,Ee=U.attributes.position;let Je=Ce.start*Te,ft=(Ce.start+Ce.count)*Te;ne!==null&&(Je=Math.max(Je,ne.start*Te),ft=Math.min(ft,(ne.start+ne.count)*Te)),ge!==null?(Je=Math.max(Je,0),ft=Math.min(ft,ge.count)):Ee!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Ee.count));const pt=ft-Je;if(pt<0||pt===1/0)return;ze.setup(D,k,me,U,ge);let Jt,Ze=Ae;if(ge!==null&&(Jt=F.get(ge),Ze=de,Ze.setIndex(Jt)),D.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*dt()),Ze.setMode(C.LINES)):Ze.setMode(C.TRIANGLES);else if(D.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),xe.setLineWidth(ye*dt()),D.isLineSegments?Ze.setMode(C.LINES):D.isLineLoop?Ze.setMode(C.LINE_LOOP):Ze.setMode(C.LINE_STRIP)}else D.isPoints?Ze.setMode(C.POINTS):D.isSprite&&Ze.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ze.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ze.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ye=D._multiDrawStarts,Nt=D._multiDrawCounts,Qe=D._multiDrawCount,hn=ge?F.get(ge).bytesPerElement:1,cs=Ie.get(k).currentProgram.getUniforms();for(let Zt=0;Zt<Qe;Zt++)cs.setValue(C,"_gl_DrawID",Zt),Ze.render(ye[Zt]/hn,Nt[Zt])}else if(D.isInstancedMesh)Ze.renderInstances(Je,pt,D.count);else if(U.isInstancedBufferGeometry){const ye=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Nt=Math.min(U.instanceCount,ye);Ze.renderInstances(Je,pt,Nt)}else Ze.render(Je,pt)};function Dt(y,L,U){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,go(y,L,U),y.side=Ai,y.needsUpdate=!0,go(y,L,U),y.side=zn):go(y,L,U)}this.compile=function(y,L,U=null){U===null&&(U=y),m=he.get(U),m.init(L),M.push(m),U.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),y!==U&&y.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();const k=new Set;return y.traverse(function(D){const ne=D.material;if(ne)if(Array.isArray(ne))for(let oe=0;oe<ne.length;oe++){const me=ne[oe];Dt(me,U,D),k.add(me)}else Dt(ne,U,D),k.add(ne)}),M.pop(),m=null,k},this.compileAsync=function(y,L,U=null){const k=this.compile(y,L,U);return new Promise(D=>{function ne(){if(k.forEach(function(oe){Ie.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){D(y);return}setTimeout(ne,10)}tt.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ke=null;function Dn(y){Ke&&Ke(y)}function Sn(){Di.stop()}function pu(){Di.start()}const Di=new A_;Di.setAnimationLoop(Dn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(y){Ke=y,te.setAnimationLoop(y),y===null?Di.stop():Di.start()},te.addEventListener("sessionstart",Sn),te.addEventListener("sessionend",pu),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(L),L=te.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,L,A),m=he.get(y,M.length),m.init(L),M.push(m),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),nt.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,H=Ue.init(this.clippingPlanes,Q),g=re.get(y,p.length),g.init(),p.push(g),te.enabled===!0&&te.isPresenting===!0){const ne=S.xr.getDepthSensingMesh();ne!==null&&Qa(ne,L,-1/0,S.sortObjects)}Qa(y,L,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(z,ae),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&ce.addToRenderList(g,y),this.info.render.frame++,H===!0&&Ue.beginShadows();const U=m.state.shadowsArray;ee.render(U,y,L),H===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,D=g.transmissive;if(m.setupLights(),L.isArrayCamera){const ne=L.cameras;if(D.length>0)for(let oe=0,me=ne.length;oe<me;oe++){const ge=ne[oe];_u(k,D,y,ge)}We&&ce.render(y);for(let oe=0,me=ne.length;oe<me;oe++){const ge=ne[oe];mu(g,y,ge,ge.viewport)}}else D.length>0&&_u(k,D,y,L),We&&ce.render(y),mu(g,y,L);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(S,y,L),ze.resetDefaultState(),N=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],H===!0&&Ue.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Qa(y,L,U,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){k&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe);const oe=J.update(y),me=y.material;me.visible&&g.push(y,oe,me,U,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){const oe=J.update(y),me=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Le.copy(oe.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(pe)),Array.isArray(me)){const ge=oe.groups;for(let Te=0,Ce=ge.length;Te<Ce;Te++){const Ee=ge[Te],Je=me[Ee.materialIndex];Je&&Je.visible&&g.push(y,oe,Je,U,Le.z,Ee)}}else me.visible&&g.push(y,oe,me,U,Le.z,null)}}const ne=y.children;for(let oe=0,me=ne.length;oe<me;oe++)Qa(ne[oe],L,U,k)}function mu(y,L,U,k){const D=y.opaque,ne=y.transmissive,oe=y.transparent;m.setupLightsView(U),H===!0&&Ue.setGlobalState(S.clippingPlanes,U),k&&xe.viewport(x.copy(k)),D.length>0&&_o(D,L,U),ne.length>0&&_o(ne,L,U),oe.length>0&&_o(oe,L,U),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _u(y,L,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new ns(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ho:Zn,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ne=m.state.transmissionRenderTarget[k.id],oe=k.viewport||x;ne.setSize(oe.z,oe.w);const me=S.getRenderTarget();S.setRenderTarget(ne),S.getClearColor(B),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),We&&ce.render(U);const ge=S.toneMapping;S.toneMapping=bi;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),H===!0&&Ue.setGlobalState(S.clippingPlanes,k),_o(y,U,k),De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Je=L.length;Ee<Je;Ee++){const ft=L[Ee],pt=ft.object,Jt=ft.geometry,Ze=ft.material,ye=ft.group;if(Ze.side===zn&&pt.layers.test(k.layers)){const Nt=Ze.side;Ze.side=Kt,Ze.needsUpdate=!0,gu(pt,U,k,Jt,Ze,ye),Ze.side=Nt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne))}S.setRenderTarget(me),S.setClearColor(B,$),Te!==void 0&&(k.viewport=Te),S.toneMapping=ge}function _o(y,L,U){const k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ne=y.length;D<ne;D++){const oe=y[D],me=oe.object,ge=oe.geometry,Te=k===null?oe.material:k,Ce=oe.group;me.layers.test(U.layers)&&gu(me,L,U,ge,Te,Ce)}}function gu(y,L,U,k,D,ne){y.onBeforeRender(S,L,U,k,D,ne),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.transparent===!0&&D.side===zn&&D.forceSinglePass===!1?(D.side=Kt,D.needsUpdate=!0,S.renderBufferDirect(U,L,k,D,y,ne),D.side=Ai,D.needsUpdate=!0,S.renderBufferDirect(U,L,k,D,y,ne),D.side=zn):S.renderBufferDirect(U,L,k,D,y,ne),y.onAfterRender(S,L,U,k,D,ne)}function go(y,L,U){L.isScene!==!0&&(L=Be);const k=Ie.get(y),D=m.state.lights,ne=m.state.shadowsArray,oe=D.state.version,me=j.getParameters(y,D.state,ne,L,U),ge=j.getProgramCacheKey(me);let Te=k.programs;k.environment=y.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(y.isMeshStandardMaterial?v:w).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",we),Te=new Map,k.programs=Te);let Ce=Te.get(ge);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===oe)return yu(y,me),Ce}else me.uniforms=j.getUniforms(y),y.onBeforeCompile(me,S),Ce=j.acquireProgram(me,ge),Te.set(ge,Ce),k.uniforms=me.uniforms;const Ee=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=Ue.uniform),yu(y,me),k.needsLights=X_(y),k.lightsStateVersion=oe,k.needsLights&&(Ee.ambientLightColor.value=D.state.ambient,Ee.lightProbe.value=D.state.probe,Ee.directionalLights.value=D.state.directional,Ee.directionalLightShadows.value=D.state.directionalShadow,Ee.spotLights.value=D.state.spot,Ee.spotLightShadows.value=D.state.spotShadow,Ee.rectAreaLights.value=D.state.rectArea,Ee.ltc_1.value=D.state.rectAreaLTC1,Ee.ltc_2.value=D.state.rectAreaLTC2,Ee.pointLights.value=D.state.point,Ee.pointLightShadows.value=D.state.pointShadow,Ee.hemisphereLights.value=D.state.hemi,Ee.directionalShadowMap.value=D.state.directionalShadowMap,Ee.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ee.spotShadowMap.value=D.state.spotShadowMap,Ee.spotLightMatrix.value=D.state.spotLightMatrix,Ee.spotLightMap.value=D.state.spotLightMap,Ee.pointShadowMap.value=D.state.pointShadowMap,Ee.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function vu(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=ea.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function yu(y,L){const U=Ie.get(y);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function W_(y,L,U,k,D){L.isScene!==!0&&(L=Be),De.resetTextureUnits();const ne=L.fog,oe=k.isMeshStandardMaterial?L.environment:null,me=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Li,ge=(k.isMeshStandardMaterial?v:w).get(k.envMap||oe),Te=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ce=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!U.morphAttributes.position,Je=!!U.morphAttributes.normal,ft=!!U.morphAttributes.color;let pt=bi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=S.toneMapping);const Jt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ze=Jt!==void 0?Jt.length:0,ye=Ie.get(k),Nt=m.state.lights;if(H===!0&&(Q===!0||y!==E)){const sn=y===E&&k.id===N;Ue.setState(k,y,sn)}let Qe=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Nt.state.version||ye.outputColorSpace!==me||D.isBatchedMesh&&ye.batching===!1||!D.isBatchedMesh&&ye.batching===!0||D.isBatchedMesh&&ye.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ye.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ye.instancing===!1||!D.isInstancedMesh&&ye.instancing===!0||D.isSkinnedMesh&&ye.skinning===!1||!D.isSkinnedMesh&&ye.skinning===!0||D.isInstancedMesh&&ye.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ye.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ye.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ye.instancingMorph===!1&&D.morphTexture!==null||ye.envMap!==ge||k.fog===!0&&ye.fog!==ne||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ue.numPlanes||ye.numIntersection!==Ue.numIntersection)||ye.vertexAlphas!==Te||ye.vertexTangents!==Ce||ye.morphTargets!==Ee||ye.morphNormals!==Je||ye.morphColors!==ft||ye.toneMapping!==pt||ye.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,ye.__version=k.version);let hn=ye.currentProgram;Qe===!0&&(hn=go(k,L,D));let cs=!1,Zt=!1,ec=!1;const xt=hn.getUniforms(),ni=ye.uniforms;if(xe.useProgram(hn.program)&&(cs=!0,Zt=!0,ec=!0),k.id!==N&&(N=k.id,Zt=!0),cs||E!==y){xt.setValue(C,"projectionMatrix",y.projectionMatrix),xt.setValue(C,"viewMatrix",y.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(C,le.setFromMatrixPosition(y.matrixWorld)),it.logarithmicDepthBuffer&&xt.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Zt=!0,ec=!0)}if(D.isSkinnedMesh){xt.setOptional(C,D,"bindMatrix"),xt.setOptional(C,D,"bindMatrixInverse");const sn=D.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),xt.setValue(C,"boneTexture",sn.boneTexture,De))}D.isBatchedMesh&&(xt.setOptional(C,D,"batchingTexture"),xt.setValue(C,"batchingTexture",D._matricesTexture,De),xt.setOptional(C,D,"batchingIdTexture"),xt.setValue(C,"batchingIdTexture",D._indirectTexture,De),xt.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&xt.setValue(C,"batchingColorTexture",D._colorsTexture,De));const tc=U.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&Xe.update(D,U,hn),(Zt||ye.receiveShadow!==D.receiveShadow)&&(ye.receiveShadow=D.receiveShadow,xt.setValue(C,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ni.envMap.value=ge,ni.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(ni.envMapIntensity.value=L.environmentIntensity),Zt&&(xt.setValue(C,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&q_(ni,ec),ne&&k.fog===!0&&Se.refreshFogUniforms(ni,ne),Se.refreshMaterialUniforms(ni,k,Y,G,m.state.transmissionRenderTarget[y.id]),ea.upload(C,vu(ye),ni,De)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ea.upload(C,vu(ye),ni,De),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(C,"center",D.center),xt.setValue(C,"modelViewMatrix",D.modelViewMatrix),xt.setValue(C,"normalMatrix",D.normalMatrix),xt.setValue(C,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const sn=k.uniformsGroups;for(let nc=0,$_=sn.length;nc<$_;nc++){const xu=sn[nc];ut.update(xu,hn),ut.bind(xu,hn)}}return hn}function q_(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function X_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,L,U){Ie.get(y.texture).__webglTexture=L,Ie.get(y.depthTexture).__webglTexture=U;const k=Ie.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const U=Ie.get(y);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,U=0){A=y,O=L,T=U;let k=!0,D=null,ne=!1,oe=!1;if(y){const ge=Ie.get(y);ge.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(C.FRAMEBUFFER,null),k=!1):ge.__webglFramebuffer===void 0?De.setupRenderTarget(y):ge.__hasExternalTextures&&De.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);const Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);const Ce=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?D=Ce[L][U]:D=Ce[L],ne=!0):y.samples>0&&De.useMultisampledRTT(y)===!1?D=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[U]:D=Ce,x.copy(y.viewport),I.copy(y.scissor),V=y.scissorTest}else x.copy(ue).multiplyScalar(Y).floor(),I.copy(ve).multiplyScalar(Y).floor(),V=qe;if(xe.bindFramebuffer(C.FRAMEBUFFER,D)&&k&&xe.drawBuffers(y,D),xe.viewport(x),xe.scissor(I),xe.setScissorTest(V),ne){const ge=Ie.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,U)}else if(oe){const ge=Ie.get(y.texture),Te=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,U||0,Te)}N=-1},this.readRenderTargetPixels=function(y,L,U,k,D,ne,oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){xe.bindFramebuffer(C.FRAMEBUFFER,me);try{const ge=y.texture,Te=ge.format,Ce=ge.type;if(!it.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&U>=0&&U<=y.height-D&&C.readPixels(L,U,k,D,Pe.convert(Te),Pe.convert(Ce),ne)}finally{const ge=A!==null?Ie.get(A).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(y,L,U,k,D,ne,oe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){xe.bindFramebuffer(C.FRAMEBUFFER,me);try{const ge=y.texture,Te=ge.format,Ce=ge.type;if(!it.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-k&&U>=0&&U<=y.height-D){const Ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(L,U,k,D,Pe.convert(Te),Pe.convert(Ce),0),C.flush();const Je=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await zb(C,Je,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne)}finally{C.deleteBuffer(Ee),C.deleteSync(Je)}return ne}}finally{const ge=A!==null?Ie.get(A).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(y,L=null,U=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-U),D=Math.floor(y.image.width*k),ne=Math.floor(y.image.height*k),oe=L!==null?L.x:0,me=L!==null?L.y:0;De.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,U,0,0,oe,me,D,ne),xe.unbindTexture()},this.copyTextureToTexture=function(y,L,U=null,k=null,D=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],L=arguments[2],D=arguments[3]||0,U=null);let ne,oe,me,ge,Te,Ce;U!==null?(ne=U.max.x-U.min.x,oe=U.max.y-U.min.y,me=U.min.x,ge=U.min.y):(ne=y.image.width,oe=y.image.height,me=0,ge=0),k!==null?(Te=k.x,Ce=k.y):(Te=0,Ce=0);const Ee=Pe.convert(L.format),Je=Pe.convert(L.type);De.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const ft=C.getParameter(C.UNPACK_ROW_LENGTH),pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Jt=C.getParameter(C.UNPACK_SKIP_PIXELS),Ze=C.getParameter(C.UNPACK_SKIP_ROWS),ye=C.getParameter(C.UNPACK_SKIP_IMAGES),Nt=y.isCompressedTexture?y.mipmaps[D]:y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,me),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Te,Ce,ne,oe,Ee,Je,Nt.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Te,Ce,Nt.width,Nt.height,Ee,Nt.data):C.texSubImage2D(C.TEXTURE_2D,D,Te,Ce,ne,oe,Ee,Je,Nt),C.pixelStorei(C.UNPACK_ROW_LENGTH,ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Jt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ye),D===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,L,U=null,k=null,D=0){y.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,k=arguments[1]||null,y=arguments[2],L=arguments[3],D=arguments[4]||0);let ne,oe,me,ge,Te,Ce,Ee,Je,ft;const pt=y.isCompressedTexture?y.mipmaps[D]:y.image;U!==null?(ne=U.max.x-U.min.x,oe=U.max.y-U.min.y,me=U.max.z-U.min.z,ge=U.min.x,Te=U.min.y,Ce=U.min.z):(ne=pt.width,oe=pt.height,me=pt.depth,ge=0,Te=0,Ce=0),k!==null?(Ee=k.x,Je=k.y,ft=k.z):(Ee=0,Je=0,ft=0);const Jt=Pe.convert(L.format),Ze=Pe.convert(L.type);let ye;if(L.isData3DTexture)De.setTexture3D(L,0),ye=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)De.setTexture2DArray(L,0),ye=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Nt=C.getParameter(C.UNPACK_ROW_LENGTH),Qe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),hn=C.getParameter(C.UNPACK_SKIP_PIXELS),cs=C.getParameter(C.UNPACK_SKIP_ROWS),Zt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce),y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ye,D,Ee,Je,ft,ne,oe,me,Jt,Ze,pt.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(ye,D,Ee,Je,ft,ne,oe,me,Jt,pt.data):C.texSubImage3D(ye,D,Ee,Je,ft,ne,oe,me,Jt,Ze,pt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,hn),C.pixelStorei(C.UNPACK_SKIP_ROWS,cs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt),D===0&&L.generateMipmaps&&C.generateMipmap(ye),xe.unbindTexture()},this.initRenderTarget=function(y){Ie.get(y).__webglFramebuffer===void 0&&De.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?De.setTextureCube(y,0):y.isData3DTexture?De.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?De.setTexture2DArray(y,0):De.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){O=0,T=0,A=null,xe.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nu?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ja?"display-p3":"srgb"}}class lu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class KR extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class U_ extends $t{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,c=new ht;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hu extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class JR extends hu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Go=new R,Gc=new uu,Wc=new uu,qc=new uu;class ZR extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),l=Go);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Gc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,m),Wc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,m),qc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Wc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Gc.calc(c),Wc.calc(c),qc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function QR(i,e){const t=1-i;return t*t*e}function eI(i,e){return 2*(1-i)*i*e}function tI(i,e){return i*i*e}function Nr(i,e,t,n){return QR(i,e)+eI(i,t)+tI(i,n)}function nI(i,e){const t=1-i;return t*t*t*e}function iI(i,e){const t=1-i;return 3*t*t*i*e}function sI(i,e){return 3*(1-i)*i*i*e}function rI(i,e){return i*i*i*e}function Ur(i,e,t,n,s){return nI(i,e)+iI(i,t)+sI(i,n)+rI(i,s)}class O_ extends Ln{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oI extends Ln{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y),Ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k_ extends Ln{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aI extends Ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends Ln{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cI extends Ln{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y),Nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Pf(a,c.x,l.x,h.x,u.x),Pf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var Lf=Object.freeze({__proto__:null,ArcCurve:JR,CatmullRomCurve3:ZR,CubicBezierCurve:O_,CubicBezierCurve3:oI,EllipseCurve:hu,LineCurve:k_,LineCurve3:aI,QuadraticBezierCurve:F_,QuadraticBezierCurve3:cI,SplineCurve:B_});class lI extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lf[s.type]().fromJSON(s))}return this}}class hI extends lI{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new k_(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new F_(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new O_(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new B_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new hu(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class du extends ti{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,d=new fe,f=new R,_=new R,g=new R;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(_)}for(let M=0;M<=t;M++){const S=n+M*h*s,b=Math.sin(S),O=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*O,o.push(u.x,u.y,u.z),d.x=M/t,d.y=T/(e.length-1),a.push(d.x,d.y);const A=c[3*T+0]*b,N=c[3*T+1],E=c[3*T+0]*O;l.push(A,N,E)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){const b=S+M*e.length,O=b,T=b+e.length,A=b+e.length+1,N=b+1;r.push(O,T,N),r.push(A,N,T)}this.setIndex(r),this.setAttribute("position",new nn(o,3)),this.setAttribute("uv",new nn(a,2)),this.setAttribute("normal",new nn(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.points,e.segments,e.phiStart,e.phiLength)}}class Or extends du{constructor(e=1,t=1,n=4,s=8){const r=new hI;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Or(e.radius,e.length,e.capSegments,e.radialSegments)}}class La extends ti{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let O=0;O<=t;O++){const T=O/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+S*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+b,1-S),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=h[p][M+1],b=h[p][M],O=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(S,b,T),(p!==n-1||c<Math.PI)&&f.push(b,O,T)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends fo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fu extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xc=new ht,Df=new R,Nf=new R;class z_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uf=new ht,yr=new R,$c=new R;class uI extends z_{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),$c.copy(n.position),$c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($c),n.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}}class dI extends fu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uI}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fI extends z_{constructor(){super(new R_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pI extends fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new fI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mI extends fu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _I{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Of(){return(typeof performance>"u"?Date:performance).now()}const kf=new ht;class H_{constructor(e,t,n=0,s=1/0){this.ray=new S_(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(Ff),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,n,t);return n.sort(Ff),n}}function Ff(i,e){return i.distance-e.distance}function Kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);const _e=4.2,Fe=.3,Ne=_e/2;function Re(i,e){return i+Math.random()*(e-i)}function zt(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new U_(n);return s.wrapS=s.wrapT=Ta,s.needsUpdate=!0,s}function gI(i,e,t){const n=["#c89060","#b87848","#d09a6a","#c08855"];i.fillStyle=n[0],i.fillRect(0,0,e,t);for(let r=0;r<t;r+=28){i.fillStyle=n[Math.floor(r/28)%n.length],i.fillRect(0,r+1,e,27),i.fillStyle="#6a4020",i.fillRect(0,r,e,1);for(let o=0;o<7;o++){const a=r+Re(2,25);i.strokeStyle="rgba(70,35,8,0.07)",i.lineWidth=Re(.5,1.5),i.beginPath(),i.moveTo(0,a);for(let c=0;c<=e;c+=14)i.lineTo(c,a+Math.sin(c*.06+o)*2);i.stroke()}}let s=Re(50,90);for(;s<e;)i.fillStyle="#6a4020",i.fillRect(s,0,1,t),s+=Re(80,140)}function vI(i,e,t){const n=["#6a4828","#7a5832","#604020","#724a28"];i.fillStyle=n[0],i.fillRect(0,0,e,t);for(let s=0;s<t;s+=22){i.fillStyle=n[Math.floor(s/22)%n.length],i.fillRect(0,s+1,e,21),i.fillStyle="#3a2010",i.fillRect(0,s,e,1);for(let r=0;r<5;r++){const o=s+Re(2,19);i.strokeStyle="rgba(30,15,5,0.08)",i.lineWidth=Re(.5,1.5),i.beginPath(),i.moveTo(0,o);for(let a=0;a<=e;a+=12)i.lineTo(a,o+Math.sin(a*.07+r)*1.5);i.stroke()}}}function Bf(i,e,t,n,s){i.fillStyle=s||"#b0ada8",i.fillRect(0,0,e,t);for(let c=0;c*64<t+64;c++)for(let l=0;l*64<e+64;l++){i.fillStyle=n||"#f0ede8",i.fillRect(l*64+5,c*64+5,64-5*2,64-5*2);const h=i.createLinearGradient(l*64,c*64,l*64+64,c*64+64);h.addColorStop(0,"rgba(255,255,255,0.14)"),h.addColorStop(1,"rgba(0,0,0,0.06)"),i.fillStyle=h,i.fillRect(l*64+5,c*64+5,64-5*2,64-5*2)}}function yI(i,e,t){i.fillStyle="#b8b4b0",i.fillRect(0,0,e,t);for(let o=0;o*80<t+80;o++)for(let a=0;a*80<e+80;a++){i.fillStyle="#ece8e4",i.fillRect(a*80+4,o*80+4,80-4*2,80-4*2),i.strokeStyle=`rgba(160,150,140,${Re(.2,.6)})`,i.lineWidth=Re(.5,2),i.beginPath();const c=a*80+4+Re(0,76);i.moveTo(c,o*80+4),i.bezierCurveTo(c+Re(-18,18),o*80+80*.35,c+Re(-18,18),o*80+80*.65,c+Re(-25,25),o*80+80-4),i.stroke()}}function Yc(i,e,t,n){i.fillStyle=n||"#7a6858",i.fillRect(0,0,e,t);for(let s=0;s<3e3;s++)i.fillStyle=`rgba(0,0,0,${Re(.02,.08)})`,i.fillRect(Re(0,e),Re(0,t),1,Re(1,4))}function xr(i,e,t,n){i.fillStyle=n||"#ede5d0",i.fillRect(0,0,e,t);for(let s=0;s<1800;s++){const r=Re(.01,.04);i.fillStyle=Re(0,1)>.5?`rgba(255,255,255,${r})`:`rgba(0,0,0,${r})`,i.fillRect(Re(0,e),Re(0,t),Re(2,6),Re(1,4))}}function xI(i,e,t){const o=["#a03828","#b04432","#982e1e","#8c2c20","#b84838"];i.fillStyle="#c0a878",i.fillRect(0,0,e,t);for(let a=0;a*26<t+26;a++){const c=a%2*28;for(let l=-1;l*56<e+56;l++){const h=l*56+c,u=a*26;i.fillStyle=o[Math.floor(Re(0,o.length))],i.fillRect(h+4,u+4,56-4*2,26-4*2),i.fillStyle="rgba(0,0,0,0.06)";for(let d=0;d<3;d++)i.fillRect(h+4+Re(0,52),u+4+Re(0,22),Re(6,22),1)}}}function SI(i,e,t){const n=["#8b6040","#9a7050","#7a5030","#a07848"];i.fillStyle=n[0],i.fillRect(0,0,e,t);for(let s=0;s<t;s+=10){i.fillStyle=n[Math.floor(s/10)%n.length],i.fillRect(0,s,e,10);for(let r=0;r<3;r++){const o=s+Re(1,9);i.strokeStyle="rgba(50,25,5,0.09)",i.lineWidth=1,i.beginPath(),i.moveTo(0,o);for(let a=0;a<=e;a+=10)i.lineTo(a,o+Math.sin(a*.09+r)*1.5);i.stroke()}}}function EI(i,e,t){i.fillStyle="#f2ede8",i.fillRect(0,0,e,t);for(let n=0;n<1200;n++)i.fillStyle=`rgba(180,170,160,${Re(.01,.035)})`,i.fillRect(Re(0,e),Re(0,t),Re(2,7),Re(2,5))}class MI{constructor(e){this.scene=e,this.wallBoxes=[],this.allMeshes=[],this._tex=this._makeTex(),this._build()}_makeTex(){return{woodFloor:zt(512,256,gI),darkWood:zt(512,256,vI),tile:zt(256,256,(e,t,n)=>Bf(e,t,n)),tileGrey:zt(256,256,(e,t,n)=>Bf(e,t,n,"#e8e4e0","#a8a5a0")),marble:zt(256,256,yI),carpetBei:zt(256,256,(e,t,n)=>Yc(e,t,n,"#a09080")),carpetBlu:zt(256,256,(e,t,n)=>Yc(e,t,n,"#60708a")),carpetRed:zt(256,256,(e,t,n)=>Yc(e,t,n,"#7a4040")),plaster:zt(256,256,(e,t,n)=>xr(e,t,n,"#ede5d0")),pBlue:zt(256,256,(e,t,n)=>xr(e,t,n,"#ccdae8")),pGreen:zt(256,256,(e,t,n)=>xr(e,t,n,"#cce0d0")),pCream:zt(256,256,(e,t,n)=>xr(e,t,n,"#f0e8d8")),pYellow:zt(256,256,(e,t,n)=>xr(e,t,n,"#f0e4c0")),brick:zt(512,256,xI),wood:zt(256,256,SI),ceiling:zt(256,256,EI)}}_tmat(e,t,n,s){const r=this._tex[e].clone();return r.repeat.set(t,n),r.needsUpdate=!0,new zs({map:r,color:s??16777215})}_cmat(e){return new zs({color:e})}_add(e,t=!1){this.scene.add(e),this.allMeshes.push(e),t&&this.wallBoxes.push(new os().setFromObject(e))}_box(e,t,n,s,r,o,a,c=!1,l=!0){const h=new Et(new as(e,t,n),s);return h.position.set(r,o,a),h.castShadow=c,h.receiveShadow=l,h}_wall(e,t,n,s,r,o,a){this._add(this._box(e,t,n,s,r,o,a),!0)}_floor(e,t,n,s,r){this._add(this._box(e,.18,t,n,s,-.09,r))}_ceil(e,t,n,s,r){this._add(this._box(e,.18,t,n,s,_e+.09,r))}_obj(e,t,n,s,r,o,a){this._add(this._box(e,t,n,s,r,o,a,!0,!0),!0)}_deco(e,t,n,s,r,o,a){this._add(this._box(e,t,n,s,r,o,a,!0,!0),!1)}_wallDoor(e,t,n,s,r,o,a,c,l=2.6,h=2.5){const u=e/2,d=(e-l)/2,f=(g,m)=>{const p=this._box(c===0?m:n,t,c===0?n:m,s,r+(c===0?g:0),o,a+(c===0?0:g));this._add(p,!0)};d>.1&&(f(-(u-d/2),d),f(u-d/2,d));const _=t-h;if(_>.05){const g=this._box(c===0?l:n,_,c===0?n:l,s,r,h+_/2,a);this._add(g,!0)}}_skirting(e,t,n,s,r="x"){const o=r==="x"?this._box(e,.12,.06,t,n,.06,s):this._box(.06,.12,e,t,n,.06,s);this._add(o)}_build(){const e=new Et(new po(300,300),new zs({color:1708552}));e.rotation.x=-Math.PI/2,e.position.y=-.15,e.receiveShadow=!0,this.scene.add(e),this._buildLivingRoom(),this._buildKitchen(),this._buildDining(),this._buildHallway(),this._buildStudy(),this._buildMasterBed(),this._buildGuestBed(),this._buildBathroom(),this._buildConservatory(),this._buildUtility()}_buildLivingRoom(){const r=this._tmat("plaster",12,_e/2),o=this._tmat("woodFloor",24/1.2,20/1.2),a=this._tmat("ceiling",24/3,20/3);this._floor(24,20,o,0,0),this._ceil(24,20,a,0,0),this._wall(24,_e,Fe,r,0,Ne,0+20/2),this._wallDoor(24,_e,Fe,r,0,Ne,0-20/2,0,3,2.6),this._wallDoor(20,_e,Fe,this._tmat("plaster",20/2,_e/2),0-24/2,Ne,0,1,3,2.6),this._wallDoor(20,_e,Fe,this._tmat("plaster",20/2,_e/2),0+24/2,Ne,0,1,3.2,2.6),this._deco(24*.6,_e*.55,.12,this._tmat("brick",24*.6/.5,_e*.55/.25),0,Ne*.55,0+20/2-.22),this._obj(4.8,.7,1.1,this._cmat(8001560),-3,.35,0+6.5),this._obj(1.1,.7,2.8,this._cmat(8001560),0+1.85,.35,0+5.7),this._deco(4.8,.95,.28,this._cmat(6950928),-3,.475,0+7.2),this._deco(1.1,.95,2.8,this._cmat(6950928),0+1.85,.475,5);for(let l=0;l<3;l++)this._deco(.55,.28,.1,this._cmat(14205088),-4+l*1.5,.84,0+7.15);this._obj(2.4,.04,1.2,this._tmat("wood",2,1),0-1.2,.45,0+4.5);for(const[l,h]of[[-1,-.45],[1,-.45],[-1,.45],[1,.45]])this._obj(.08,.44,.08,this._cmat(5912608),0-1.2+l,.22,0+4.5+h);this._obj(3.8,.6,.5,this._tmat("darkWood",3,1),0,.3,0-9.1),this._deco(3.2,1.8,.1,this._cmat(789518),0,1.5,0-9.25),this._obj(.35,2.8,4.2,this._tmat("wood",2,4),0+11.3,1.4,-6);const c=[11873054,1724298,13210634,5913994,2783802,14208176,9060416,4876938];for(let l=0;l<6;l++){let h=-7.8;for(;h<0-4.2;){const u=Re(.14,.24);this._deco(.25,Re(.22,.38),u,this._cmat(c[Math.floor(Re(0,c.length))]),0+11.08,.3+l*.42,h+u/2),h+=u+.01}}this._obj(.55,.6,.55,this._tmat("wood",1,1),0+1.3,.3,7),this._deco(.12,.9,.12,this._cmat(10522752),0+1.3,.9,7),this._deco(.4,.25,.4,this._cmat(16050392),0+1.3,1.42,7),this._obj(1.1,.65,1,this._cmat(9134144),5,.325,0+4.5),this._deco(1.1,.9,.25,this._cmat(8015920),5,.45,0+5.1),this._obj(1.1,.65,1,this._cmat(9134144),-7,.325,0+4.5),this._deco(1.1,.9,.25,this._cmat(8015920),-7,.45,0+5.1),this._deco(5.5,.04,3.5,this._cmat(6965304),0-1.5,.02,0+5.2),this._deco(.1,1.8,.1,this._cmat(10127480),-8,.9,0+7.5),this._deco(.45,.32,.45,this._cmat(15788248),-8,1.96,0+7.5),this._deco(.55,.55,.55,this._cmat(5916728),0-9.5,.28,0-7.5),this._deco(.7,.9,.7,this._cmat(3828272),0-9.5,.95,0-7.5),this._skirting(24,this._cmat(15788248),0,0+20/2-Fe/2,"x"),this._skirting(24,this._cmat(15788248),0,0-20/2+Fe/2,"x")}_buildKitchen(){const r=this._tmat("pYellow",8,_e/2),o=this._tmat("tile",16/1.5,14/1.5),a=this._tmat("ceiling",16/3,14/3);this._floor(16,14,o,22,-1),this._ceil(16,14,a,22,-1),this._wall(16,_e,Fe,r,22,Ne,-1-14/2),this._wall(16,_e,Fe,r,22,Ne,-1+14/2),this._wallDoor(14,_e,Fe,r,22+16/2,Ne,-1,1,3,2.6),this._obj(16*.7,.92,.88,this._tmat("tileGrey",6,1),21,.46,-1-14/2+.6),this._obj(.88,.92,14*.45,this._tmat("tileGrey",1,4),22+16/2-.6,.46,-3),this._deco(16*.7,.8,.82,this._tmat("wood",5,1),21,.4,-1-14/2+.55),this._deco(.82,.8,14*.45,this._tmat("wood",1,3),22+16/2-.55,.4,-3),this._obj(16*.65,.85,.38,this._tmat("wood",5,1),22-1.2,2.55,-1-14/2+.28),this._obj(.38,.85,14*.4,this._tmat("wood",1,3),22+16/2-.25,2.55,-3),this._obj(2.8,.94,1.4,this._tmat("tileGrey",3,2),20,.47,-1+1.5),this._deco(2.8,.86,1.4,this._tmat("wood",3,2),20,.43,-1+1.5);for(let c=-1;c<=1;c++)this._obj(.4,.82,.4,this._cmat(3813408),20+c*.95,.41,2);this._obj(.85,2.1,.75,this._cmat(14737626),22+16/2-1,1.05,-1-14/2+.5),this._obj(.75,.1,.75,this._cmat(3158064),22+1.5,.97,-1-14/2+.56),this._obj(2,.75,1,this._tmat("wood",2,1),22-5.5,.375,3);for(const[c,l]of[[-1,0],[1,0],[0,-.85],[0,.85]])this._obj(.5,.85,.5,this._tmat("wood",1,1),22-5.5+c,.425,3+l)}_buildDining(){const r=this._tmat("pCream",7,_e/2),o=this._tmat("darkWood",14/1.2,11/1.2),a=this._tmat("ceiling",14/3,11/3);this._floor(14,11,o,22,13),this._ceil(14,11,a,22,13),this._wall(14,_e,Fe,r,22,Ne,13+11/2),this._wall(14,_e,Fe,r,22,Ne,13-11/2),this._wall(11,_e,Fe,r,22+14/2,Ne,13,1),this._wall(Fe,_e,11,r,22+14/2,Ne,13),this._obj(3.8,.78,1.8,this._tmat("darkWood",4,2),22-.5,.39,13);for(const[l,h]of[[-1.6,-.7],[1.6,-.7],[-1.6,.7],[1.6,.7]])this._obj(.1,.78,.1,this._tmat("darkWood",1,1),22-.5+l,.39,13+h);[[-1.8,0,-.7],[-.7,0,-.7],[.4,0,-.7],[1.5,0,-.7],[-1.8,0,.7],[-.7,0,.7],[.4,0,.7],[1.5,0,.7]].forEach(([l,h,u])=>{this._obj(.52,.88,.52,this._tmat("darkWood",1,1),22-.5+l,.44,13+u),this._deco(.52,.75,.1,this._tmat("darkWood",1,1),22-.5+l,.75,13+u+(u<0?-.3:.3))}),this._obj(2.2,.95,.55,this._tmat("darkWood",2,1),22+5.5,.475,13),this._obj(.3,2.2,1.4,this._tmat("wood",1,3),22-5.5,1.1,15),this._deco(.6,.25,.6,this._cmat(12625984),22-.5,_e-.35,13)}_buildHallway(){const r=this._tmat("plaster",12,_e/2),o=this._tmat("tile",5/1.5,24/1.5),a=this._tmat("ceiling",5/2,24/3);this._floor(5,24,o,0,-22),this._ceil(5,24,a,0,-22),this._wall(Fe,_e,24,r,0-5/2,Ne,-22),this._wall(Fe,_e,24,r,0+5/2,Ne,-22),this._wallDoor(5,_e,Fe,r,0,Ne,-22-24/2,0,2.5,2.6),this._obj(1.2,.88,.45,this._tmat("darkWood",1,1),0,.44,-22),this._deco(.06,1.1,.8,this._cmat(13682880),0,1.44,-22-.22);for(let c=0;c<4;c++)this._deco(.08,.08,.08,this._cmat(3158056),0-5/2+.15,1.8-c*.01,-30+c*.9)}_buildStudy(){const r=this._tmat("pBlue",7,_e/2),o=this._tmat("carpetRed",14/1.5,12/1.5),a=this._tmat("ceiling",14/3,12/3);this._floor(14,12,o,0,-38),this._ceil(14,12,a,0,-38),this._wallDoor(14,_e,Fe,r,0,Ne,-38+12/2,0,2.5,2.6),this._wall(14,_e,Fe,r,0,Ne,-38-12/2),this._wall(Fe,_e,12,r,0-14/2,Ne,-38),this._wall(Fe,_e,12,r,0+14/2,Ne,-38);const c=this._tmat("darkWood",3,4);this._obj(14-.5,_e,.38,c,0,Ne,-38-12/2+.22),this._obj(.38,_e,12-.5,c,0-14/2+.22,Ne,-38),this._obj(.38,_e,12*.5,c,0+14/2-.22,Ne,-37);const l=[11873054,1724298,13210634,5913994,2783802,14208176,9060416,6318200,11038784];for(let h=0;h<8;h++){let u=-6.4;for(;u<0+14/2-.6;){const d=Re(.12,.2);this._deco(d,Re(.2,.36),.28,this._cmat(l[Math.floor(Re(0,l.length))]),u+d/2,.22+h*.44,-38-12/2+.06),u+=d+.008}}this._obj(2.4,.78,1.1,this._tmat("darkWood",2,1),2,.39,-36),this._obj(.55,.85,.55,this._tmat("carpetBlu",1,1),2,.425,-38+3.2),this._deco(.55,.7,.12,this._tmat("darkWood",1,1),2,.7,-38+3.65),this._obj(1,.7,.95,this._cmat(4872304),0-4.5,.35,-38+2.5),this._deco(1,.95,.25,this._cmat(3819616),0-4.5,.475,-38+3.1),this._deco(.28,.28,.28,this._cmat(6324384),0+.8,.92,-36),this._deco(.08,.55,.08,this._cmat(8423544),3,.67,-36),this._deco(.3,.2,.3,this._cmat(13148208),3,1.05,-36),this._obj(2.4,1.2,.38,this._cmat(14208960),0,.6,-38-12/2+.22),this._deco(1.8,.9,.3,this._cmat(1708552),0,.5,-38-12/2+.18)}_buildMasterBed(){const r=this._tmat("pBlue",8,_e/2),o=this._tmat("carpetBei",16/1.5,14/1.5),a=this._tmat("ceiling",16/3,14/3);this._floor(16,14,o,-22,-2),this._ceil(16,14,a,-22,-2),this._wall(16,_e,Fe,r,-22,Ne,-2-14/2),this._wall(16,_e,Fe,r,-22,Ne,-2+14/2),this._wall(Fe,_e,14,r,-22-16/2,Ne,-2),this._wallDoor(14,_e,Fe,r,-22+16/2,Ne,-2,1,3,2.6),this._obj(2.2,.36,2.8,this._tmat("darkWood",2,3),-25,.18,-4),this._deco(2.1,.24,2.6,this._cmat(15788256),-25,.48,-4),this._deco(2.1,.2,1.4,this._cmat(13689072),-25,.68,-3),this._deco(.8,.18,.5,this._cmat(16052460),-22-3.5,.7,-2-3.1),this._deco(.8,.18,.5,this._cmat(16052460),-22-2.5,.7,-2-3.1),this._obj(2.2,.9,.28,this._tmat("darkWood",2,1),-25,.45,-2-3.6);for(const c of[-4.6,-1.4])this._obj(.55,.55,.55,this._tmat("darkWood",1,1),-22+c,.275,-2-2.5),this._deco(.22,.55,.22,this._cmat(15785120),-22+c,.83,-2-2.5);this._obj(2.8,2.4,.65,this._tmat("darkWood",3,3),-22+16/2-1.5,1.2,-2-4.5),this._obj(1.6,1,.55,this._tmat("darkWood",2,1),-17,.5,2),this._deco(1.4,.85,.06,this._cmat(13682880),-17,1,-2+3.7),this._obj(1,.65,.9,this._cmat(6320272),-29,.325,3),this._deco(1,.9,.22,this._cmat(5267584),-29,.45,-2+5.6),this._deco(3,.04,2.2,this._cmat(4874368),-25,.02,-2-1.2)}_buildGuestBed(){const r=this._tmat("pGreen",6,_e/2),o=this._tmat("carpetBlu",12/1.5,10/1.5),a=this._tmat("ceiling",12/3,10/3);this._floor(12,10,o,-22,12),this._ceil(12,10,a,-22,12),this._wall(12,_e,Fe,r,-22,Ne,12+10/2),this._wall(12,_e,Fe,r,-22,Ne,12-10/2),this._wall(Fe,_e,10,r,-22-12/2,Ne,12),this._wallDoor(10,_e,Fe,r,-22+12/2,Ne,12,1,2.8,2.6),this._obj(1.8,.34,2.2,this._tmat("wood",2,2),-24,.17,12-1.5),this._deco(1.7,.22,2,this._cmat(15789288),-24,.45,12-1.5),this._deco(1.7,.2,1,this._cmat(6328480),-24,.62,11),this._deco(.7,.16,.44,this._cmat(16315632),-22-2.4,.65,12-2.55),this._deco(.7,.16,.44,this._cmat(16315632),-22-1.6,.65,12-2.55),this._obj(1.8,.85,.24,this._tmat("wood",2,1),-24,.425,12-2.75),this._obj(1.4,.72,.6,this._tmat("wood",1,1),-18,.36,15),this._obj(.48,.78,.48,this._tmat("carpetBlu",1,1),-18,.39,16),this._obj(1.8,2.2,.6,this._tmat("wood",2,3),-22-4.2,1.1,12-3.8),this._obj(.28,1.8,1.6,this._tmat("wood",1,2),-22+12/2-.18,.9,14)}_buildBathroom(){const r=this._tmat("tile",8.333333333333334,_e/.8,15658734),o=this._tmat("marble",10/1.2,8/1.2),a=this._tmat("ceiling",10/3,8/3);this._floor(10,8,o,-22,-17),this._ceil(10,8,a,-22,-17),this._wall(10,_e,Fe,r,-22,Ne,-17-8/2),this._wall(10,_e,Fe,r,-22,Ne,-17+8/2),this._wall(Fe,_e,8,r,-22-10/2,Ne,-17),this._wallDoor(8,_e,Fe,r,-22+10/2,Ne,-17,1,2.4,2.6),this._obj(.85,.5,1.9,this._cmat(15789544),-24,.25,-18),this._deco(.65,.32,1.7,this._cmat(14209256),-24,.42,-18);for(const[c,l]of[[-.35,-.85],[.35,-.85],[-.35,.85],[.35,.85]])this._deco(.08,.08,.08,this._cmat(12630152),-24+c,.04,-18+l);this._obj(1.4,_e*.85,.06,this._cmat(13691112),-19,_e*.425,-20),this._obj(.06,_e*.85,1.4,this._cmat(13691112),-22+3.7,_e*.425,-17-3.7),this._obj(1.8,.85,.5,this._cmat(15262944),-22+2.5,.425,-17+2.5),this._deco(1.8,.06,.5,this._cmat(16053488),-22+2.5,.88,-17+2.5),this._deco(1.6,1,.06,this._cmat(13682880),-22+2.5,1.42,-17+2.26),this._obj(.44,.42,.68,this._cmat(15789288),-26,.21,-17+2.5),this._deco(.44,.1,.55,this._cmat(16052460),-26,.47,-17+2.2),this._deco(.04,.04,.7,this._cmat(12630152),-22-4.9,1.1,-18),this._deco(.04,.04,.7,this._cmat(12630152),-22-4.9,1.4,-18)}_buildConservatory(){const r=this._tmat("plaster",9,_e/2,13691108),o=this._tmat("tile",18/1.5,12/1.5,15792368),a=this._tmat("ceiling",18/3,12/3,14676204);this._floor(18,12,o,0,19),this._ceil(18,12,a,0,19),this._wall(18,_e,Fe,r,0,Ne,19+12/2),this._wall(Fe,_e,12,r,0-18/2,Ne,19),this._wall(Fe,_e,12,r,0+18/2,Ne,19),[[-7,16],[7,16],[-7,22],[7,22],[0,24],[-4,24],[4,24]].forEach(([l,h])=>{const u=Re(.6,1.4);this._deco(Re(.35,.6),Re(.3,.45),Re(.35,.6),this._cmat(4876336),l,u*.5+.1,h),this._deco(Re(.4,.8),u,Re(.4,.8),this._cmat(2775072+Math.floor(Re(0,8))*4096),l,u*.5,h)}),this._obj(1.6,.68,.9,this._cmat(10123336),-3,.34,22),this._obj(1.6,.68,.9,this._cmat(10123336),3,.34,22),this._deco(1.6,.85,.22,this._cmat(9070648),-3,.425,19+3.6),this._deco(1.6,.85,.22,this._cmat(9070648),3,.425,19+3.6),this._obj(1.2,.04,.65,this._tmat("wood",1,1),0,.45,22);for(const[l,h]of[[-.5,-.28],[.5,-.28],[-.5,.28],[.5,.28]])this._obj(.06,.44,.06,this._cmat(9072720),0+l,.22,22+h);this._deco(.45,.1,.45,this._cmat(13166784),0-3.3,.73,22),this._deco(.45,.1,.45,this._cmat(12639432),-3+.6,.73,22),this._deco(.45,.1,.45,this._cmat(13166784),3,.73,22)}_buildUtility(){const r=this._tmat("plaster",4,_e/2,14210252),o=this._tmat("tileGrey",8/1.5,8/1.5),a=this._tmat("ceiling",8/3,8/3);this._floor(8,8,o,16,-20),this._ceil(8,8,a,16,-20),this._wall(8,_e,Fe,r,16,Ne,-20-8/2),this._wall(8,_e,Fe,r,16,Ne,-20+8/2),this._wall(Fe,_e,8,r,16+8/2,Ne,-20),this._wallDoor(8,_e,Fe,r,16-8/2,Ne,-20,1,2.4,2.6),this._obj(.65,.9,.65,this._cmat(14737632),16+2.5,.45,-20-2.8),this._obj(.65,.9,.65,this._cmat(14474460),16+2.5,.45,-22),this._obj(.24,2.4,2.4,this._tmat("wood",1,3),16-3.7,1.2,-20),this._obj(.55,.88,.5,this._cmat(14211280),16+2.5,.44,-20+2.5)}getRaycastTargets(){return this.allMeshes}}const Ps=512;function bI(i){const e=document.createElement("canvas");e.width=Ps,e.height=Ps;const t=e.getContext("2d");return t.fillStyle=i||"#808080",t.fillRect(0,0,Ps,Ps),{canvas:e,ctx:t}}class V_{constructor(e={},t=!1){this.isLocalPlayer=t,this.group=new br,this._canvases={},this._textures={},this.colors={head:e.head||"#808080",torso:e.torso||"#808080",leftArm:e.leftArm||"#808080",rightArm:e.rightArm||"#808080",leftLeg:e.leftLeg||"#808080",rightLeg:e.rightLeg||"#808080"},this.pose="stand",this._build()}_makeMat(e){const t=this.colors[e];if(this.isLocalPlayer){const{canvas:n,ctx:s}=bI(t);this._canvases[e]={canvas:n,ctx:s};const r=new U_(n);return this._textures[e]=r,new zs({map:r})}return new zs({color:t})}_build(){this.headMesh=new Et(new La(.24,24,16),this._makeMat("head")),this.headMesh.scale.y=.92,this.headMesh.position.y=1.42,this.headMesh.castShadow=!0,this.group.add(this.headMesh),this.torsoMesh=new Et(new Or(.22,.42,8,16),this._makeMat("torso")),this.torsoMesh.position.y=.88,this.torsoMesh.castShadow=!0,this.group.add(this.torsoMesh);const e=new Or(.075,.32,6,12);this.leftArmMesh=new Et(e,this._makeMat("leftArm")),this.leftArmMesh.position.set(-.34,.86,0),this.leftArmMesh.rotation.z=.18,this.leftArmMesh.castShadow=!0,this.group.add(this.leftArmMesh),this.rightArmMesh=new Et(e.clone(),this._makeMat("rightArm")),this.rightArmMesh.position.set(.34,.86,0),this.rightArmMesh.rotation.z=-.18,this.rightArmMesh.castShadow=!0,this.group.add(this.rightArmMesh);const t=new Or(.09,.36,6,12);this.leftLegMesh=new Et(t,this._makeMat("leftLeg")),this.leftLegMesh.position.set(-.13,.3,0),this.leftLegMesh.castShadow=!0,this.group.add(this.leftLegMesh),this.rightLegMesh=new Et(t.clone(),this._makeMat("rightLeg")),this.rightLegMesh.position.set(.13,.3,0),this.rightLegMesh.castShadow=!0,this.group.add(this.rightLegMesh);const n=new La(.045,8,6),s=new zs({color:"#18100a"}),r=new Et(n,s),o=new Et(n,s);r.position.set(-.09,1.46,.21),o.position.set(.09,1.46,.21),this.group.add(r,o),this.parts={head:this.headMesh,torso:this.torsoMesh,leftArm:this.leftArmMesh,rightArm:this.rightArmMesh,leftLeg:this.leftLegMesh,rightLeg:this.rightLegMesh}}paintAtUV(e,t,n,s,r=32){const o=Object.keys(this.parts).find(u=>this.parts[u]===e);if(!o||!this._canvases[o])return!1;const{ctx:a}=this._canvases[o],c=t*Ps,l=(1-n)*Ps,h=a.createRadialGradient(c,l,0,c,l,r);return h.addColorStop(0,s+"ff"),h.addColorStop(.6,s+"cc"),h.addColorStop(1,s+"00"),a.globalCompositeOperation="source-over",a.fillStyle=h,a.beginPath(),a.arc(c,l,r,0,Math.PI*2),a.fill(),this._textures[o].needsUpdate=!0,this.colors[o]=s,!0}applyColors(e){for(const[t,n]of Object.entries(e)){if(!this.parts[t])continue;const s=this.parts[t].material;s.color&&s.color.set(n),this.colors[t]=n}}getColors(){return{...this.colors}}setPose(e){switch(this.pose=e,this.group.rotation.x=0,this.group.position.y=0,e){case"stand":this.group.scale.y=1;break;case"crouch":this.group.scale.y=.58,this.group.position.y=-.35;break;case"prone":this.group.rotation.x=Math.PI/2,this.group.position.y=.28;break}}animate(e,t,n,s=!1){this._t=(this._t||0)+e,this._phase=(this._phase||0)+e*(s?9:t?5.5:.5);const r=Math.sin(this._phase),o=g_.lerp,a=this._t;let c,l,h,u,d,f,_,g;if(n==="prone")c=.45,l=-.45,h=.55,u=-.55,d=0,f=0,_=0,g=0;else if(n==="crouch"){if(h=.55,u=-.55,t)c=-r*.18,l=r*.18,d=r*.28,f=-r*.28;else{const S=Math.sin(a*.9)*.06;c=S,l=-S,d=0,f=0}_=0,g=0}else if(s)c=-1+r*.5,l=-1-r*.5,h=.68,u=-.68,d=r*.7,f=-r*.7,_=-.18,g=.1;else if(t)c=-r*.38,l=r*.38,h=.22,u=-.22,d=r*.44,f=-r*.44,_=0,g=0;else{const S=Math.sin(a*.8)*.045;c=.12+S,l=.12-S,h=.28+Math.abs(S)*.2,u=-(.28+Math.abs(S)*.2),d=0,f=0,_=0,g=Math.sin(a*.65)*.03}const m=s?.045:.15,p=.25,M=.1;if(this.leftArmMesh.rotation.x=o(this.leftArmMesh.rotation.x,c,m),this.leftArmMesh.rotation.z=o(this.leftArmMesh.rotation.z,h,m),this.rightArmMesh.rotation.x=o(this.rightArmMesh.rotation.x,l,m),this.rightArmMesh.rotation.z=o(this.rightArmMesh.rotation.z,u,m),this.leftLegMesh.rotation.x=o(this.leftLegMesh.rotation.x,d,p),this.rightLegMesh.rotation.x=o(this.rightLegMesh.rotation.x,f,p),this.torsoMesh.rotation.x=o(this.torsoMesh.rotation.x,_,M),this.headMesh.rotation.x=o(this.headMesh.rotation.x,g,M),t||s){const S=Math.abs(r)*(s?.032:.016);this.headMesh.position.y=o(this.headMesh.position.y,1.42-S,.28),this.torsoMesh.position.y=o(this.torsoMesh.position.y,.88-S,.28)}else{const S=Math.sin(a*1.2)*.008;this.headMesh.position.y=o(this.headMesh.position.y,1.42+S,.05),this.torsoMesh.position.y=o(this.torsoMesh.position.y,.88+S,.05)}}getMeshes(){return Object.values(this.parts)}dispose(){this.group.traverse(e=>{var t,n;(t=e.geometry)==null||t.dispose(),e.material&&((n=e.material.map)==null||n.dispose(),e.material.dispose())})}}const wI=5.5,TI=9.5,CI=3,AI=1.6,zf=4.5,RI=1.8;class II{constructor(e,t,n,s){this.character=e,this.camera=t,this.wallBoxes=n,this.canvas=s,this.yaw=0,this.pitch=.25,this.keys={},this.locked=!1,this.paused=!1,this.posLocked=!1,this.running=!1,this.moving=!1,this.pose="stand",this.time=0,this._camTarget=new R,this._buildUI(),this._bindInput()}_buildUI(){this._lookHint=document.createElement("div"),this._lookHint.style.cssText=`
      position:fixed; bottom:82px; left:50%; transform:translateX(-50%);
      background:rgba(36,28,14,0.82); color:#f4ede0;
      font-family:'Bangers',cursive; font-size:19px; letter-spacing:2px;
      padding:8px 22px; border-radius:8px; border:2px solid #808070;
      pointer-events:none; z-index:22; transition:opacity .25s;
    `,this._lookHint.textContent="CLICK TO LOOK AROUND",document.body.appendChild(this._lookHint),this._lockBadge=document.createElement("div"),this._lockBadge.style.cssText=`
      position:fixed; top:18px; left:18px;
      background:rgba(36,28,14,0.88); color:#c9940a;
      font-family:'Bangers',cursive; font-size:18px; letter-spacing:2px;
      padding:7px 16px; border-radius:8px; border:2px solid #c9940a;
      pointer-events:none; z-index:22; display:none;
    `,this._lockBadge.innerHTML='📌 LOCKED &nbsp;<span style="color:#808070;font-size:14px">[F] to move</span>',document.body.appendChild(this._lockBadge)}_bindInput(){this._onKey=e=>{const t=e.code.toLowerCase();this.keys[t]=e.type==="keydown",e.type==="keydown"&&t==="keyf"&&this._togglePosLock()},this._onMouseMove=e=>{if(!this.locked)return;this.yaw-=e.movementX*.0022;const t=this.posLocked?1.45:.65,n=this.posLocked?-1.35:-.55;this.pitch=Math.max(n,Math.min(t,this.pitch-e.movementY*.0022))},this._onLockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this._lookHint.style.opacity=this.locked?"0":"1"},document.addEventListener("keydown",this._onKey),document.addEventListener("keyup",this._onKey),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("pointerlockchange",this._onLockChange),this.canvas.addEventListener("click",()=>{var e,t;this.locked||(t=(e=this.canvas).requestPointerLock)==null||t.call(e)})}_togglePosLock(){var e,t;this.posLocked=!this.posLocked,this._lockBadge.style.display=this.posLocked?"block":"none",this.posLocked||(t=(e=this.canvas).requestPointerLock)==null||t.call(e)}setPose(e){this.pose=e,this.character.setPose(e)}update(e){if(this.time+=e,this._updateCamera(),this.posLocked){this.character.animate(e,!1,this.pose,!1);return}if(this.paused)return;this.running=(this.keys.shiftleft||this.keys.shiftright)&&this.pose==="stand";const t=this.pose==="crouch"?CI:this.pose==="prone"?AI:this.running?TI:wI,n=Math.sin(this.yaw),s=Math.cos(this.yaw),r=new R(-n,0,-s),o=new R(s,0,-n),a=new R;(this.keys.keyw||this.keys.arrowup)&&a.addScaledVector(r,1),(this.keys.keys||this.keys.arrowdown)&&a.addScaledVector(r,-1),(this.keys.keyd||this.keys.arrowright)&&a.addScaledVector(o,1),(this.keys.keya||this.keys.arrowleft)&&a.addScaledVector(o,-1),this.moving=a.lengthSq()>.001,this.moving&&a.normalize().multiplyScalar(t*e);const c=this.character.group.position,l=.35,h=1.9,u=c.x+a.x;this._hits(u,c.z,l,h)||(c.x=u);const d=c.z+a.z;if(this._hits(c.x,d,l,h)||(c.z=d),c.y=0,this.moving){const f=Math.atan2(a.x,a.z);this.character.group.rotation.y=g_.lerp(this.character.group.rotation.y,f,.18)}this.character.animate(e,this.moving,this.pose,this.running)}_hits(e,t,n,s){const r=new os(new R(e-n,.05,t-n),new R(e+n,s,t+n));return this.wallBoxes.some(o=>r.intersectsBox(o))}_updateCamera(){const e=this.character.group.position,t=this.posLocked?zf+1.8:zf,n=e.x+Math.sin(this.yaw)*t,s=e.y+RI+this.pitch*2.2,r=e.z+Math.cos(this.yaw)*t;this.camera.position.set(n,s,r),this._camTarget.set(e.x,e.y+1.1,e.z),this.camera.lookAt(this._camTarget)}destroy(){var e,t,n;document.removeEventListener("keydown",this._onKey),document.removeEventListener("keyup",this._onKey),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("pointerlockchange",this._onLockChange),(e=document.exitPointerLock)==null||e.call(document),(t=this._lookHint)==null||t.remove(),(n=this._lockBadge)==null||n.remove()}}const PI=["#f4ede0","#e0d4b8","#c0956b","#8b6040","#b52b1e","#7a1a1a","#1a4f8a","#2a6a9a","#c9940a","#808070","#505040","#2c1c0c","#c8b090","#9a7a5a","#4a7a4a","#7a5a8a"];class LI{constructor(e,t,n,s,r){this.scene=e,this.camera=t,this.myCharacter=n,this.buildingMeshes=s,this.onPaintChange=r,this.active=!1,this.painting=!1,this.eyedropActive=!1,this.color="#c0956b",this.brushRadius=32,this.raycaster=new H_,this._buildUI(),this._bindEvents()}_buildUI(){this.panel=document.createElement("div"),this.panel.id="brush-panel",this.panel.style.cssText=`
      position:fixed; right:18px; top:50%; transform:translateY(-50%);
      width:190px; background:var(--white);
      border:3px solid var(--dark); border-radius:var(--r);
      box-shadow:var(--sh-lg); padding:14px;
      display:none; z-index:30; pointer-events:all;
      font-family:var(--font-body);
    `,this.panel.innerHTML=`
      <div style="font-family:var(--font-graf);font-size:18px;letter-spacing:2px;
        text-align:center;margin-bottom:10px">🖌 BRUSH</div>

      <!-- Colour preview / native picker -->
      <div style="position:relative;margin-bottom:8px">
        <div id="bp-preview" style="height:38px;border:3px solid var(--dark);
          border-radius:var(--r-sm);box-shadow:var(--sh);cursor:pointer;
          background:${this.color}"></div>
        <input type="color" id="bp-picker" value="${this.color}"
          style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">
      </div>

      <!-- Swatches -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:9px">
        ${PI.map(e=>`
          <div data-c="${e}" class="bp-sw" style="aspect-ratio:1;background:${e};
            border:2px solid var(--dark);border-radius:4px;cursor:pointer;
            box-shadow:1px 1px 0 var(--dark)"></div>
        `).join("")}
      </div>

      <!-- Eyedropper -->
      <button id="bp-eye" class="btn btn-sm btn-full" style="margin-bottom:8px">
        💧 Sample wall color
      </button>

      <!-- Brush size -->
      <div style="font-family:var(--font-graf);font-size:12px;letter-spacing:1px;
        color:var(--dark);margin-bottom:4px">BRUSH SIZE</div>
      <input type="range" id="bp-size" min="8" max="90" value="32" style="width:100%">

      <hr style="border:none;border-top:2px solid var(--surface2);margin:10px 0">
      <div style="font-family:var(--font-marker);font-size:12px;color:var(--grey);
        text-align:center">Click + drag on your character<br>to paint. [P] to exit.</div>
    `,document.body.appendChild(this.panel),this.cursor=document.createElement("div"),this.cursor.style.cssText=`
      position:fixed; pointer-events:none; border-radius:50%;
      border:2px solid rgba(0,0,0,0.6);
      transform:translate(-50%,-50%);
      display:none; z-index:25; mix-blend-mode:multiply;
    `,document.body.appendChild(this.cursor),this._refreshCursor(),this._bindPanelEvents()}_bindPanelEvents(){const e=this.panel.querySelector("#bp-picker");e.addEventListener("input",t=>this._setColor(t.target.value)),this.panel.querySelector("#bp-preview").addEventListener("click",()=>e.click()),this.panel.querySelectorAll(".bp-sw").forEach(t=>t.addEventListener("click",()=>this._setColor(t.dataset.c))),this.panel.querySelector("#bp-eye").addEventListener("click",()=>{this.eyedropActive=!this.eyedropActive;const t=this.panel.querySelector("#bp-eye");t.textContent=this.eyedropActive?"❌ Cancel sample":"💧 Sample wall color",t.style.borderColor=this.eyedropActive?"var(--blue)":"",this.cursor.style.borderStyle=this.eyedropActive?"dashed":"solid"}),this.panel.querySelector("#bp-size").addEventListener("input",t=>{this.brushRadius=parseInt(t.target.value),this._refreshCursor()})}_setColor(e){this.color=e;const t=this.panel.querySelector("#bp-preview");t&&(t.style.background=e);const n=this.panel.querySelector("#bp-picker");n&&(n.value=e),this._refreshCursor()}_refreshCursor(){const t=Math.max(8,this.brushRadius*.42)*2;this.cursor.style.width=t+"px",this.cursor.style.height=t+"px",this.cursor.style.background=this.color+"40",this.cursor.style.borderColor=this.color}_bindEvents(){this._onMove=e=>{this.active&&(this.cursor.style.left=e.clientX+"px",this.cursor.style.top=e.clientY+"px",this.painting&&!this.eyedropActive&&this._paint(e.clientX,e.clientY))},this._onDown=e=>{if(!(!this.active||e.button!==0)){if(this.eyedropActive){this._eyedrop(e.clientX,e.clientY);return}this.painting=!0,this._paint(e.clientX,e.clientY)}},this._onUp=e=>{e.button===0&&this.painting&&(this.painting=!1,this.onPaintChange(this.myCharacter.getColors()))},document.addEventListener("mousemove",this._onMove),document.addEventListener("mousedown",this._onDown),document.addEventListener("mouseup",this._onUp)}_paint(e,t){const n=document.getElementById("game-canvas");if(!n)return;const s=n.getBoundingClientRect(),r=(e-s.left)/s.width*2-1,o=-((t-s.top)/s.height)*2+1;this.raycaster.setFromCamera({x:r,y:o},this.camera);const a=this.raycaster.intersectObjects(this.myCharacter.getMeshes(),!1);if(!a.length)return;const c=a[0];c.uv&&this.myCharacter.paintAtUV(c.object,c.uv.x,c.uv.y,this.color,this.brushRadius)}_eyedrop(e,t){const n=document.getElementById("game-canvas");if(!n)return;const s=n.getBoundingClientRect(),r=(e-s.left)/s.width*2-1,o=-((t-s.top)/s.height)*2+1;this.raycaster.setFromCamera({x:r,y:o},this.camera);const a=new Set(this.myCharacter.getMeshes()),c=this.buildingMeshes.filter(u=>!a.has(u)),l=this.raycaster.intersectObjects(c,!0);if(l.length>0){const u=l[0].object.material;u!=null&&u.color&&this._setColor("#"+u.color.getHexString())}this.eyedropActive=!1;const h=this.panel.querySelector("#bp-eye");h&&(h.textContent="💧 Sample wall color",h.style.borderColor=""),this.cursor.style.borderStyle="solid"}toggle(){var e,t,n;this.active=!this.active,this.panel.style.display=this.active?"block":"none",this.cursor.style.display=this.active?"block":"none",this.active?(e=document.exitPointerLock)==null||e.call(document):(this.painting=!1,this.eyedropActive=!1,(n=(t=document.getElementById("game-canvas"))==null?void 0:t.requestPointerLock)==null||n.call(t))}isOpen(){return this.active}destroy(){document.removeEventListener("mousemove",this._onMove),document.removeEventListener("mousedown",this._onDown),document.removeEventListener("mouseup",this._onUp),this.panel.remove(),this.cursor.remove()}}const DI=.8;class NI{constructor(e,t,n){this.scene=e,this.camera=t,this.onHit=n,this.hitboxes={},this.cooldown=0,this.raycaster=new H_,this._flash=document.createElement("div"),this._flash.style.cssText=`
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      width:60px;height:60px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,220,100,0.9) 0%,transparent 70%);
      pointer-events:none;z-index:25;display:none;
    `,document.body.appendChild(this._flash),this._onMouseDown=s=>{s.button===0&&this.shoot()},document.addEventListener("mousedown",this._onMouseDown)}addHider(e,t){this.hitboxes[e]&&this.removeHider(e);const n=new as(.65,1.85,.65),s=new ou({visible:!1}),r=new Et(n,s);r.position.copy(t.position),r.position.y+=.9,r.userData.uid=e,this.scene.add(r),this.hitboxes[e]=r}removeHider(e){this.hitboxes[e]&&(this.scene.remove(this.hitboxes[e]),delete this.hitboxes[e])}updateHiderPosition(e,t){this.hitboxes[e]&&this.hitboxes[e].position.set(t.x,t.y+.9,t.z)}shoot(){if(this.cooldown>0)return;this.cooldown=DI,this._flash.style.display="block",setTimeout(()=>{this._flash.style.display="none"},80),this.raycaster.setFromCamera({x:0,y:0},this.camera);const e=Object.values(this.hitboxes),t=this.raycaster.intersectObjects(e);if(t.length>0){const n=t[0].object.userData.uid;n&&this.onHit(n)}}update(e){this.cooldown>0&&(this.cooldown-=e)}destroy(){document.removeEventListener("mousedown",this._onMouseDown),Object.keys(this.hitboxes).forEach(e=>this.removeHider(e)),this._flash.remove()}}const UI=.1;class OI{constructor(e,t,n,s,r,o){this.gameId=e,this.myUid=t,this.myRole=n,this.scene=s,this.gunSystem=r,this.onStateChange=o,this.remoteChars={},this.syncTimer=0,this.myChar=null,this.myController=null,this._lastStatus=null,this._unwatch=t_(e,a=>this._onGameData(a))}_onGameData(e){var n,s,r,o,a;if(!e)return;const t=e.players||{};for(const[c,l]of Object.entries(t)){if(c===this.myUid)continue;if(!l.alive){this._removeRemote(c);continue}if(!this.remoteChars[c]){const d=new V_(l.paintColors||{},!1);d.group.position.set(((n=l.position)==null?void 0:n.x)??0,((s=l.position)==null?void 0:s.y)??0,((r=l.position)==null?void 0:r.z)??0),this.scene.add(d.group),this.remoteChars[c]=d,this.myRole==="seeker"&&l.role==="hider"&&((o=this.gunSystem)==null||o.addHider(c,d.group))}const h=this.remoteChars[c],u=l.position??{x:0,y:0,z:0};h.group.position.lerp({x:u.x,y:u.y,z:u.z},.25),h.group.rotation.y=l.rotationY??0,(a=this.gunSystem)==null||a.updateHiderPosition(c,h.group.position),l.paintColors&&h.applyColors(l.paintColors),l.pose&&l.pose!==h.pose&&h.setPose(l.pose)}for(const c of Object.keys(this.remoteChars))t[c]||this._removeRemote(c);e.status!==this._lastStatus&&(this._lastStatus=e.status),this.onStateChange(e)}_removeRemote(e){var t;this.remoteChars[e]&&(this.scene.remove(this.remoteChars[e].group),this.remoteChars[e].dispose(),delete this.remoteChars[e],(t=this.gunSystem)==null||t.removeHider(e))}update(e){if(this.syncTimer+=e,this.syncTimer>=UI&&this.myChar&&this.myController){this.syncTimer=0;const t=this.myChar.group.position;fM(this.gameId,this.myUid,{x:+t.x.toFixed(3),y:+t.y.toFixed(3),z:+t.z.toFixed(3)},+this.myController.yaw.toFixed(4)).catch(()=>{})}}async syncPaint(e){await pM(this.gameId,this.myUid,e).catch(()=>{})}async syncPose(e){await mM(this.gameId,this.myUid,e).catch(()=>{})}async eliminate(e){await gM(this.gameId,e).catch(()=>{})}async triggerStartGame(){await yM(this.gameId).catch(()=>{})}async triggerEndGame(e){await xM(this.gameId,e).catch(()=>{})}destroy(){var e;(e=this._unwatch)==null||e.call(this);for(const t of Object.keys(this.remoteChars))this._removeRemote(t)}}class kI{constructor(e,t,n,s){this.myRole=e,this.prepTime=t,this.onPoseChange=n,this.onTogglePaint=s,this.currentPose="stand",this.eliminated=!1,this.timeLeft=t,this.inPrep=!0,this.gameTimeLeft=0,this._build(),this._bindKeys()}_build(){this.hud=document.getElementById("hud"),this.hud||(this.hud=document.createElement("div"),this.hud.id="hud",document.body.appendChild(this.hud)),this.hud.innerHTML=`
      <!-- Role badge -->
      <div class="hud-role ${this.myRole}">
        ${this.myRole==="seeker"?"👁 SEEKER":"🎨 HIDER"}
      </div>

      <!-- Timer -->
      <div class="hud-timer" id="hud-timer">
        ${this._fmtTime(this.timeLeft)}
      </div>

      <!-- Crosshair (seekers only) -->
      ${this.myRole==="seeker"?'<div class="hud-crosshair"></div>':""}

      <!-- Pose bar (hiders only) -->
      ${this.myRole==="hider"?`
        <div class="hud-pose-bar">
          <button class="pose-btn active" data-pose="stand">STAND [1]</button>
          <button class="pose-btn"        data-pose="crouch">CROUCH [2]</button>
          <button class="pose-btn"        data-pose="prone">PRONE [3]</button>
        </div>
        <div class="hud-paint-btn">
          <button class="btn btn-blue" id="hud-paint-open">🎨 PAINT [P]</button>
        </div>
      `:""}

      <!-- Ammo indicator (seekers) -->
      ${this.myRole==="seeker"?`
        <div class="hud-ammo">🔴 CLICK TO SHOOT</div>
      `:""}

      <!-- Prep phase banner -->
      <div id="hud-prep-banner" style="position:absolute;bottom:90px;left:50%;transform:translateX(-50%);
        font-family:var(--font-graf);font-size:22px;letter-spacing:2px;
        background:var(--dark);color:var(--white);padding:8px 20px;
        border:3px solid var(--dark);border-radius:var(--r);box-shadow:var(--sh);">
        ${this.myRole==="hider"?"🎨 PREP PHASE — PAINT & HIDE!":"⏳ SEEKERS WAIT…"}
      </div>
    `,this.hud.classList.add("show"),this.hud.querySelectorAll(".pose-btn").forEach(t=>{t.addEventListener("click",()=>this._setPose(t.dataset.pose))});const e=this.hud.querySelector("#hud-paint-open");e==null||e.addEventListener("click",()=>{var t;return(t=this.onTogglePaint)==null?void 0:t.call(this)})}_bindKeys(){this._onKey=e=>{var t;switch(e.code){case"Digit1":this._setPose("stand");break;case"Digit2":this._setPose("crouch");break;case"Digit3":this._setPose("prone");break;case"KeyP":this.myRole==="hider"&&((t=this.onTogglePaint)==null||t.call(this));break}},document.addEventListener("keydown",this._onKey)}_setPose(e){var t;this.currentPose=e,(t=this.onPoseChange)==null||t.call(this,e),this.hud.querySelectorAll(".pose-btn").forEach(n=>{n.classList.toggle("active",n.dataset.pose===e)})}_fmtTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}update(e){var n,s;if(this.eliminated||this.timeLeft<=0)return;this.inPrep?(this.timeLeft-=e,this.timeLeft<=0&&(this.timeLeft=0,(n=this.onPrepEnd)==null||n.call(this))):(this.timeLeft-=e,this.timeLeft<=0&&(this.timeLeft=0,(s=this.onTimeOut)==null||s.call(this)));const t=this.hud.querySelector("#hud-timer");t&&(t.textContent=this._fmtTime(Math.max(0,this.timeLeft)),t.classList.toggle("urgent",this.timeLeft<30))}startGamePhase(e=300){this.inPrep=!1,this.timeLeft=e;const t=this.hud.querySelector("#hud-prep-banner");if(t&&(t.style.display="none"),this.myRole==="seeker"){const n=this.hud.querySelector(".hud-role");n&&(n.style.borderColor="var(--red)")}}showEliminated(){if(this.eliminated)return;this.eliminated=!0;const e=document.createElement("div");e.className="hud-eliminated",e.textContent="TAGGED!",this.hud.appendChild(e),this.hud.querySelectorAll(".pose-btn, #hud-paint-open").forEach(t=>t.disabled=!0)}showHiderCaught(e){const t=document.createElement("div");t.style.cssText=`
      position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);
      font-family:var(--font-graf);font-size:32px;letter-spacing:2px;
      background:var(--red);color:var(--white);padding:10px 24px;
      border:3px solid var(--dark);border-radius:var(--r);box-shadow:var(--sh);
      animation:elim-flash 2s ease-out forwards;pointer-events:none
    `,t.textContent=`${e} TAGGED!`,this.hud.appendChild(t),setTimeout(()=>t.remove(),2e3)}destroy(){document.removeEventListener("keydown",this._onKey),this.hud.classList.remove("show"),this.hud.innerHTML=""}}const FI=300;class BI{constructor(e,t,n,s,r,{onGameOver:o}){var a,c,l,h;this.canvas=e,this.gameData=t,this.gameId=n,this.myUid=s,this.profile=r,this.onGameOver=o,this.myRole=((c=(a=t.players)==null?void 0:a[s])==null?void 0:c.role)??"hider",this.isHost=t.hostId===s,this.prepTime=((l=t.settings)==null?void 0:l.prepTime)??120,this.shadows=((h=t.settings)==null?void 0:h.shadowsEnabled)!==!1,this._frameId=null,this._gameEnded=!1,this._prepDone=!1,this._init()}_init(){var t;this.renderer=new jR({canvas:this.canvas,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=i_,this.renderer.setClearColor(10139848),this.scene=new KR,this.scene.fog=new lu(13154458,25,70),this.camera=new tn(70,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,3,6),this._setupLighting(),this.building=new MI(this.scene);const e=(t=this.gameData.players)==null?void 0:t[this.myUid];this.myChar=new V_((e==null?void 0:e.paintColors)||{},!0),this.myChar.group.position.set(1,0,1),this.scene.add(this.myChar.group),this.controller=new II(this.myChar,this.camera,this.building.wallBoxes,this.canvas),this.myRole==="seeker"&&(this.controller.paused=!0),this.gunSystem=null,this.myRole==="seeker"&&(this.gunSystem=new NI(this.scene,this.camera,n=>this._onHitHider(n))),this.sync=new OI(this.gameId,this.myUid,this.myRole,this.scene,this.gunSystem,n=>this._onGameStateChange(n)),this.sync.myChar=this.myChar,this.sync.myController=this.controller,this.paintSystem=null,this.myRole==="hider"&&(this.paintSystem=new LI(this.scene,this.camera,this.myChar,this.building.getRaycastTargets(),n=>this.sync.syncPaint(n))),this.hud=new kI(this.myRole,this.prepTime,n=>{this.controller.setPose(n),this.sync.syncPose(n)},()=>{var n;return(n=this.paintSystem)==null?void 0:n.toggle()}),this.hud.onPrepEnd=()=>this._onPrepEnd(),this.hud.onTimeOut=()=>this._endGame("hiders"),this._onResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",this._onResize),this.clock=new _I,this._animate()}_setupLighting(){const e=new mI(14207144,.55);this.scene.add(e);const t=new pI(16773336,1.1);t.position.set(8,14,6),t.castShadow=this.shadows,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=80,t.shadow.camera.left=t.shadow.camera.bottom=-30,t.shadow.camera.right=t.shadow.camera.top=30,this.scene.add(t),[{pos:[0,2.6,0],col:16769200,int:.7,dist:14},{pos:[13,2.6,-1],col:15266047,int:.6,dist:10},{pos:[-13,2.6,-1],col:15788287,int:.6,dist:10},{pos:[0,2.6,-9],col:16773344,int:.5,dist:8}].forEach(s=>{const r=new dI(s.col,s.int,s.dist);r.position.set(...s.pos),this.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(512,512)),this.scene.add(r)})}_animate(){var t;this._frameId=requestAnimationFrame(()=>this._animate());const e=Math.min(this.clock.getDelta(),.1);this.controller.update(e),this.sync.update(e),this.hud.update(e),(t=this.gunSystem)==null||t.update(e),this.renderer.render(this.scene,this.camera)}_onPrepEnd(){this._prepDone=!0,this.myRole==="seeker"&&(this.controller.paused=!1),this.hud.startGamePhase(FI),this.isHost&&this.sync.triggerStartGame()}_onGameStateChange(e){if(this._gameEnded||!e)return;const t=e.players||{};if(this.isHost&&this._prepDone&&e.status==="game"){const n=Object.values(t).filter(r=>r.role==="hider");n.filter(r=>r.alive).length===0&&n.length>0&&this._endGame("seekers")}e.status==="ended"&&e.winner&&this._endGame(e.winner,!1)}async _onHitHider(e){var n,s,r,o;if(this._gameEnded)return;(n=this.gameData.players)==null||n[e];const t=this.sync.remoteChars[e]?((r=(s=this.gameData.players)==null?void 0:s[e])==null?void 0:r.displayName)??"Hider":"Hider";this.hud.showHiderCaught(t),(o=this.gunSystem)==null||o.removeHider(e),await this.sync.eliminate(e),await Id(this.myUid,{seekerWins:0})}async _endGame(e,t=!0){if(this._gameEnded)return;this._gameEnded=!0,this.controller.paused=!0,t&&this.isHost&&await this.sync.triggerEndGame(e);const n=e==="seekers"&&this.myRole==="seeker"||e==="hiders"&&this.myRole==="hider";try{await Id(this.myUid,{gamesPlayed:1,hiderWins:e==="hiders"&&this.myRole==="hider"?1:0,seekerWins:e==="seekers"&&this.myRole==="seeker"?1:0,timesEliminated:!n&&this.myRole==="hider"?1:0})}catch{}setTimeout(()=>this.onGameOver(e,this.myRole),1800)}destroy(){var e,t;cancelAnimationFrame(this._frameId),window.removeEventListener("resize",this._onResize),this.controller.destroy(),this.hud.destroy(),this.sync.destroy(),(e=this.paintSystem)==null||e.destroy(),(t=this.gunSystem)==null||t.destroy(),this.renderer.dispose()}}const Gt={user:null,profile:null,gameId:null,gameData:null};let wn=null,hi=null;const gi=document.getElementById("app"),ta=document.getElementById("game-canvas");function zI(){var i;wn&&((i=wn.destroy)==null||i.call(wn),wn=null),gi.innerHTML="",ta.style.display="none"}function on(i,e={}){switch(zI(),i){case"auth":wn=new wM(gi,(t,n)=>{Gt.user=t,Gt.profile=n,on("home")});break;case"home":wn=new CM(gi,Gt.user,Gt.profile,{onPlay:()=>on("lobby"),onLogout:()=>on("auth")});break;case"lobby":wn=new AM(gi,Gt.user,Gt.profile,{onRole:(t,n)=>{Gt.gameId=t,Gt.gameData=n,on("role")},onBack:()=>on("home")});break;case"role":wn=new RM(gi,Gt.gameData,Gt.user.uid,{onStartGame:()=>on("game")});break;case"game":ta.style.display="block",hi=new BI(ta,Gt.gameData,Gt.gameId,Gt.user.uid,Gt.profile,{onGameOver:t=>{hi&&(hi.destroy(),hi=null),on("gameover",{winner:t})}});break;case"gameover":hi==null||hi.destroy(),hi=null,ta.style.display="none",HI(e.winner,e.myRole);break}}function HI(i,e){const t=document.createElement("div");t.className="screen",t.style.gap="20px",t.innerHTML=`
    <div class="gameover-title ${i}" style="position:relative;z-index:1">
      ${i==="hiders"?"HIDERS WIN":"SEEKERS WIN"}
    </div>
    <p style="font-family:var(--font-marker);font-size:22px;color:var(--grey);position:relative;z-index:1">
      ${i==="hiders"?"They vanished into plain sight.":"No one can hide forever."}
    </p>
    <button class="btn btn-red btn-lg" id="go-home">Back to Home</button>
  `,gi.appendChild(t),wn={destroy:()=>t.remove()},t.querySelector("#go-home").addEventListener("click",()=>on("home"))}const mo=document.createElement("div");mo.className="screen";mo.id="loading-screen";mo.innerHTML=`
  <div style="text-align:center;position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:20px">
    <div class="game-title">PLAIN SIGHT</div>
    <div class="loader"></div>
    <div style="font-family:var(--font-marker);color:var(--grey);font-size:16px" id="load-msg">
      Connecting…
    </div>
  </div>
`;gi.appendChild(mo);gi.style.pointerEvents="all";function Jl(){mo.remove()}const Hf=setTimeout(()=>{Jl(),G_(),on("auth")},4e3);try{SM(i=>{clearTimeout(Hf),Jl(),Gt.user=i,on(i?"home":"auth")})}catch{clearTimeout(Hf),Jl(),G_(),on("auth")}function G_(){const i=document.createElement("div");i.style.cssText=`
    position:fixed;bottom:16px;left:50%;transform:translateX(-50%);
    background:#241c0e;color:#f4ede0;
    font-family:'Rubik',sans-serif;font-size:13px;
    padding:10px 20px;border-radius:8px;border:2px solid #b52b1e;
    z-index:999;max-width:90vw;text-align:center;
    box-shadow:4px 4px 0 #b52b1e;
  `,i.innerHTML=`
    ⚠️ Firebase not configured — fill in <strong>src/firebase/config.js</strong> to enable auth &amp; multiplayer.
    <button onclick="this.parentElement.remove()" style="margin-left:12px;background:none;border:none;color:#c9940a;cursor:pointer;font-size:13px">✕</button>
  `,document.body.appendChild(i)}
