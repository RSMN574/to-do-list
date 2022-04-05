(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ms})),n.d(t,"b",(function(){return Qo})),n.d(t,"c",(function(){return Ls})),n.d(t,"d",(function(){return Xo})),n.d(t,"e",(function(){return Ps})),n.d(t,"f",(function(){return es}));var r=n("589b"),i=n("22e5"),o=n("e691"),s=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
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
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
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
 */
let l="9.6.5";
/**
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
 */const h=new o["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e,...t){if(h.logLevel<=o["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${l}): ${e}`,...n)}}function p(e,...t){if(h.logLevel<=o["a"].ERROR){const n=t.map(v);h.error(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=o["a"].WARN){const n=t.map(v);h.warn(`Firestore (${l}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function g(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function b(e,t){e||g()}function y(e,t){return e}
/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends s["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
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
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class S{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable(()=>(e=>(null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message),t(e.token)))(n))};const n=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),new j(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class A{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
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
 */function x(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */A.I=-1;class R{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=x(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function D(e,t){return e<t?-1:e>t?1:0}function N(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
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
 */
class P{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return P.fromMillis(Date.now())}static fromDate(e){return P.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new P(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new P(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function M(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function F(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&g(),void 0===n?n=e.length-t:n>e.length-t&&g(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends V{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends V{construct(e,t,n){return new G(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new O(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new O(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new O(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new O(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new G(t)}static emptyPath(){return new G([])}}
/**
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
 */class ${constructor(e){this.fields=e,e.sort(G.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return N(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
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
 */
/**
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
 */
class H{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new H(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new H(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}H.EMPTY_BYTE_STRING=new H("");const z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(e){if(b(!!e),"string"==typeof e){let t=0;const n=z.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function J(e){return"string"==typeof e?H.fromBase64String(e):H.fromUint8Array(e)}
/**
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
 */function Q(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(e){const t=e.mapValue.fields.__previous_value__;return Q(t)?X(t):t}function Y(e){const t=K(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}
/**
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
 */function Z(e){return null==e}function ee(e){return 0===e&&1/e==-1/0}function te(e){return"number"==typeof e&&Number.isInteger(e)&&!ee(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(B.fromString(e))}static fromName(e){return new ne(B.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new B(e.slice()))}}
/**
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
 */function re(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Q(e)?4:10:g()}function ie(e,t){if(e===t)return!0;const n=re(e);if(n!==re(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Y(e).isEqual(Y(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=K(e.timestampValue),r=K(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return J(e.bytesValue).isEqual(J(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return W(e.geoPointValue.latitude)===W(t.geoPointValue.latitude)&&W(e.geoPointValue.longitude)===W(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return W(e.integerValue)===W(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=W(e.doubleValue),r=W(t.doubleValue);return n===r?ee(n)===ee(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return N(e.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ie(n[i],r[i])))return!1;return!0}(e,t);default:return g()}}function oe(e,t){return void 0!==(e.values||[]).find(e=>ie(e,t))}function se(e,t){if(e===t)return 0;const n=re(e),r=re(t);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=W(e.integerValue||e.doubleValue),r=W(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ae(e.timestampValue,t.timestampValue);case 4:return ae(Y(e),Y(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(e,t){const n=J(e),r=J(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=D(n[i],r[i]);if(0!==e)return e}return D(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=D(W(e.latitude),W(t.latitude));return 0!==n?n:D(W(e.longitude),W(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=se(n[i],r[i]);if(e)return e}return D(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=D(r[s],o[s]);if(0!==e)return e;const t=se(n[r[s]],i[o[s]]);if(0!==t)return t}return D(r.length,o.length)}(e.mapValue,t.mapValue);default:throw g()}}function ae(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return D(e,t);const n=K(e),r=K(t),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function ce(e){return ue(e)}function ue(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=K(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?J(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ne.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ue(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ue(e.fields[i])}`;return n+"}"}(e.mapValue):g();var t,n}function le(e){return!!e&&"integerValue"in e}function he(e){return!!e&&"arrayValue"in e}function de(e){return!!e&&"nullValue"in e}function fe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pe(e){return!!e&&"mapValue"in e}function me(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return F(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=me(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=me(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
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
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=me(t)}setAll(e){let t=G.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=me(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());pe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ie(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){F(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new ve(me(this.value))}}function ge(e){const t=[];return F(e.fields,(e,n)=>{const r=new G([e]);if(pe(n)){const e=ge(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new $(t)
/**
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
 */}class be{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new be(e,0,L.min(),ve.empty(),0)}static newFoundDocument(e,t,n){return new be(e,1,t,n,0)}static newNoDocument(e,t){return new be(e,2,t,ve.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,ve.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class ye{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.R=null}}function we(e,t=null,n=[],r=[],i=null,o=null,s=null){return new ye(e,t,n,r,i,o,s)}function Oe(e){const t=y(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Se(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Z(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Le(t.startAt)),t.endAt&&(e+="|ub:",e+=Le(t.endAt)),t.R=e}return t.R}function Ee(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ce(t.value)}`;var t}).join(", ")}]`),Z(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Le(e.startAt)),e.endAt&&(t+=", endAt: "+Le(e.endAt)),`Target(${t})`}function _e(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Fe(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ie(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ve(e.startAt,t.startAt)&&Ve(e.endAt,t.endAt)}function Te(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ie extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new ke(e,t,n):"array-contains"===t?new xe(e,n):"in"===t?new Re(e,n):"not-in"===t?new De(e,n):"array-contains-any"===t?new Ne(e,n):new Ie(e,t,n)}static P(e,t,n){return"in"===t?new je(e,n):new Ce(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(se(t,this.value)):null!==t&&re(this.value)===re(t)&&this.v(se(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return g()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Se(e){return e.field.canonicalString()+e.op.toString()+ce(e.value)}class ke extends Ie{constructor(e,t,n){super(e,t,n),this.key=ne.fromName(n.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.v(t)}}class je extends Ie{constructor(e,t){super(e,"in",t),this.keys=Ae("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ce extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=Ae("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ae(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ne.fromName(e.referenceValue))}class xe extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return he(t)&&oe(t.arrayValue,this.value)}}class Re extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&oe(this.value.arrayValue,t)}}class De extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!oe(this.value.arrayValue,t)}}class Ne extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!he(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>oe(this.value.arrayValue,e))}}class Pe{constructor(e,t){this.position=e,this.before=t}}function Le(e){return`${e.before?"b":"a"}:${e.position.map(e=>ce(e)).join(",")}`}class Me{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ue(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?ne.comparator(ne.fromName(s.referenceValue),n.key):se(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Ve(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ie(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Be{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qe(e,t,n,r,i,o,s,a){return new Be(e,t,n,r,i,o,s,a)}function Ge(e){return new Be(e)}function $e(e){return!Z(e.limit)&&"F"===e.limitType}function He(e){return!Z(e.limit)&&"L"===e.limitType}function ze(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ke(e){for(const t of e.filters)if(t.V())return t.field;return null}function We(e){return null!==e.collectionGroup}function Je(e){const t=y(e);if(null===t.S){t.S=[];const e=Ke(t),n=ze(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Me(e)),t.S.push(new Me(G.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Me(G.keyField(),e))}}}return t.S}function Qe(e){const t=y(e);if(!t.D)if("F"===t.limitType)t.D=we(t.path,t.collectionGroup,Je(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Je(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Me(i.field,t))}const n=t.endAt?new Pe(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Pe(t.startAt.position,!t.startAt.before):null;t.D=we(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Xe(e,t,n){return new Be(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ye(e,t){return _e(Qe(e),Qe(t))&&e.limitType===t.limitType}function Ze(e){return`${Oe(Qe(e))}|lt:${e.limitType}`}function et(e){return`Query(target=${Ee(Qe(e))}; limitType=${e.limitType})`}function tt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ne.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Ue(e.startAt,Je(e),t))&&(!e.endAt||!Ue(e.endAt,Je(e),t))}(e,t)}function nt(e){return(t,n)=>{let r=!1;for(const i of Je(e)){const e=rt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function rt(e,t,n){const r=e.field.isKeyField()?ne.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?se(r,i):g()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return g()}}
/**
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
 */function it(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ee(t)?"-0":t}}function ot(e){return{integerValue:""+e}}function st(e,t){return te(t)?ot(t):it(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class at{constructor(){this._=void 0}}function ct(e,t,n){return e instanceof ht?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof dt?ft(e,t):e instanceof pt?mt(e,t):function(e,t){const n=lt(e,t),r=gt(n)+gt(e.N);return le(n)&&le(e.N)?ot(r):it(e.k,r)}(e,t)}function ut(e,t,n){return e instanceof dt?ft(e,t):e instanceof pt?mt(e,t):n}function lt(e,t){return e instanceof vt?le(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ht extends at{}class dt extends at{constructor(e){super(),this.elements=e}}function ft(e,t){const n=bt(t);for(const r of e.elements)n.some(e=>ie(e,r))||n.push(r);return{arrayValue:{values:n}}}class pt extends at{constructor(e){super(),this.elements=e}}function mt(e,t){let n=bt(t);for(const r of e.elements)n=n.filter(e=>!ie(e,r));return{arrayValue:{values:n}}}class vt extends at{constructor(e,t){super(),this.k=e,this.N=t}}function gt(e){return W(e.integerValue||e.doubleValue)}function bt(e){return he(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */function yt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof dt&&t instanceof dt||e instanceof pt&&t instanceof pt?N(e.elements,t.elements,ie):e instanceof vt&&t instanceof vt?ie(e.N,t.N):e instanceof ht&&t instanceof ht}(e.transform,t.transform)}class wt{constructor(e,t){this.version=e,this.transformResults=t}}class Ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Et(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class _t{}function Tt(e,t,n){e instanceof Ct?function(e,t,n){const r=e.value.clone(),i=Rt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof At?function(e,t,n){if(!Et(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Rt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(xt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function It(e,t,n){e instanceof Ct?function(e,t,n){if(!Et(e.precondition,t))return;const r=e.value.clone(),i=Dt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(jt(t),r).setHasLocalMutations()}(e,t,n):e instanceof At?function(e,t,n){if(!Et(e.precondition,t))return;const r=Dt(e.fieldTransforms,n,t),i=t.data;i.setAll(xt(e)),i.setAll(r),t.convertToFoundDocument(jt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Et(e.precondition,t)&&t.convertToNoDocument(L.min())}(e,t)}function St(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=lt(r.transform,e||null);null!=i&&(null==n&&(n=ve.empty()),n.set(r.field,i))}return n||null}function kt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&N(e,t,(e,t)=>yt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function jt(e){return e.isFoundDocument()?e.version:L.min()}class Ct extends _t{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class At extends _t{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function xt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Rt(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,ut(s,a,n[i]))}return r}function Dt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,ct(e,o,t))}return r}class Nt extends _t{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Pt extends _t{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Lt{constructor(e){this.count=e}}
/**
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
 */var Mt,Ft;function Ut(e){switch(e){default:return g();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Vt(e){if(void 0===e)return p("GRPC error has no .code"),w.UNKNOWN;switch(e){case Mt.OK:return w.OK;case Mt.CANCELLED:return w.CANCELLED;case Mt.UNKNOWN:return w.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return w.INTERNAL;case Mt.UNAVAILABLE:return w.UNAVAILABLE;case Mt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Mt.NOT_FOUND:return w.NOT_FOUND;case Mt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Mt.ABORTED:return w.ABORTED;case Mt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Mt.DATA_LOSS:return w.DATA_LOSS;default:return g()}}(Ft=Mt||(Mt={}))[Ft.OK=0]="OK",Ft[Ft.CANCELLED=1]="CANCELLED",Ft[Ft.UNKNOWN=2]="UNKNOWN",Ft[Ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ft[Ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ft[Ft.NOT_FOUND=5]="NOT_FOUND",Ft[Ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ft[Ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ft[Ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ft[Ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ft[Ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ft[Ft.ABORTED=10]="ABORTED",Ft[Ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ft[Ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ft[Ft.INTERNAL=13]="INTERNAL",Ft[Ft.UNAVAILABLE=14]="UNAVAILABLE",Ft[Ft.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Bt{constructor(e,t){this.comparator=e,this.root=t||Gt.EMPTY}insert(e,t){return new Bt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qt(this.root,e,this.comparator,!0)}}class qt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Gt.RED,this.left=null!=r?r:Gt.EMPTY,this.right=null!=i?i:Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Gt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Gt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw g();if(this.right.isRed())throw g();const e=this.left.check();if(e!==this.right.check())throw g();return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1,Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class $t{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ht(this.data.getIterator())}getIteratorFrom(e){return new Ht(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof $t))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $t(this.comparator);return t.data=e,t}}class Ht{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */const zt=new Bt(ne.comparator);function Kt(){return zt}const Wt=new Bt(ne.comparator);function Jt(){return Wt}const Qt=new Bt(ne.comparator);function Xt(){return Qt}const Yt=new $t(ne.comparator);function Zt(...e){let t=Yt;for(const n of e)t=t.add(n);return t}const en=new $t(D);function tn(){return en}
/**
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
 */class nn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,rn.createSynthesizedTargetChangeForCurrentChange(e,t)),new nn(L.min(),n,tn(),Kt(),Zt())}}class rn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new rn(H.EMPTY_BYTE_STRING,t,Zt(),Zt(),Zt())}}
/**
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
 */class on{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.O=r}}class sn{constructor(e,t){this.targetId=e,this.M=t}}class an{constructor(e,t,n=H.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class cn{constructor(){this.F=0,this.L=hn(),this.B=H.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Zt(),t=Zt(),n=Zt();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:g()}}),new rn(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=hn()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class un{constructor(e){this.et=e,this.nt=new Map,this.st=Kt(),this.it=ln(),this.rt=new $t(D)}ot(e){for(const t of e.$)e.O&&e.O.isFoundDocument()?this.ct(t,e.O):this.at(t,e.key,e.O);for(const t of e.removedTargetIds)this.at(t,e.key,e.O)}ut(e){this.forEachTarget(e,t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:g()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((e,n)=>{this.lt(n)&&t(n)})}dt(e){const t=e.targetId,n=e.M.count,r=this.wt(t);if(r){const e=r.target;if(Te(e))if(0===n){const n=new ne(e.path);this.at(t,n,be.newNoDocument(n,L.min()))}else b(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Te(i.target)){const t=new ne(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.at(r,t,be.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}});let n=Zt();this.it.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new nn(e,t,this.rt,this.st,n);return this.st=Kt(),this.it=ln(),this.rt=new $t(D),r}ct(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}at(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new cn,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new $t(D),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new cn),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function ln(){return new Bt(ne.comparator)}function hn(){return new Bt(ne.comparator)}
/**
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
 */const dn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),fn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class pn{constructor(e,t){this.databaseId=e,this.C=t}}function mn(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vn(e,t){return e.C?t.toBase64():t.toUint8Array()}function gn(e,t){return mn(e,t.toTimestamp())}function bn(e){return b(!!e),L.fromTimestamp(function(e){const t=K(e);return new P(t.seconds,t.nanos)}(e))}function yn(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function wn(e){const t=B.fromString(e);return b(Hn(t)),t}function On(e,t){return yn(e.databaseId,t.path)}function En(e,t){const n=wn(t);if(n.get(1)!==e.databaseId.projectId)throw new O(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new O(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(Sn(n))}function _n(e,t){return yn(e.databaseId,t)}function Tn(e){const t=wn(e);return 4===t.length?B.emptyPath():Sn(t)}function In(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sn(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function kn(e,t,n){return{name:On(e,t),fields:n.value.mapValue.fields}}function jn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:g()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.C?(b(void 0===t||"string"==typeof t),H.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),H.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?w.UNKNOWN:Vt(e.code);return new O(t,e.message||"")}(s);n=new an(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=En(e,r.document.name),o=bn(r.document.updateTime),s=new ve({mapValue:{fields:r.document.fields}}),a=be.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new on(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=En(e,r.document),o=r.readTime?bn(r.readTime):L.min(),s=be.newNoDocument(i,o),a=r.removedTargetIds||[];n=new on([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=En(e,r.document),o=r.removedTargetIds||[];n=new on([],o,i,null)}else{if(!("filter"in t))return g();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Lt(r),o=e.targetId;n=new sn(o,i)}}return n}function Cn(e,t){let n;if(t instanceof Ct)n={update:kn(e,t.key,t.value)};else if(t instanceof Nt)n={delete:On(e,t.key)};else if(t instanceof At)n={update:kn(e,t.key,t.data),updateMask:$n(t.fieldMask)};else{if(!(t instanceof Pt))return g();n={verify:On(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ht)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof dt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vt)return{fieldPath:t.field.canonicalString(),increment:n.N};throw g()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:gn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:g()}(e,t.precondition)),n}function An(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?bn(e.updateTime):bn(t);return n.isEqual(L.min())&&(n=bn(t)),new wt(n,e.transformResults||[])}(e,t))):[]}function xn(e,t){return{documents:[_n(e,t.path)]}}function Rn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=_n(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=_n(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(fe(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NAN"}};if(de(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(fe(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NAN"}};if(de(e.value))return{unaryFilter:{field:Vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(e.field),op:Un(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Vn(e.field),direction:Fn(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.C||Z(t)?t:{value:t}}(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=Ln(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Ln(t.endAt)),n}function Dn(e){let t=Tn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=Pn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>function(e){return new Me(Bn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Z(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Mn(n.startAt));let u=null;return n.endAt&&(u=Mn(n.endAt)),qe(t,i,s,o,a,"F",c,u)}function Nn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return g()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Pn(e){return e?void 0!==e.unaryFilter?[Gn(e)]:void 0!==e.fieldFilter?[qn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Pn(e)).reduce((e,t)=>e.concat(t)):g():[]}function Ln(e){return{before:e.before,values:e.position}}function Mn(e){const t=!!e.before,n=e.values||[];return new Pe(n,t)}function Fn(e){return dn[e]}function Un(e){return fn[e]}function Vn(e){return{fieldPath:e.canonicalString()}}function Bn(e){return G.fromServerFormat(e.fieldPath)}function qn(e){return Ie.create(Bn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return g()}}(e.fieldFilter.op),e.fieldFilter.value)}function Gn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Bn(e.unaryFilter.field);return Ie.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(e.unaryFilter.field);return Ie.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(e.unaryFilter.field);return Ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bn(e.unaryFilter.field);return Ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return g()}}function $n(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Hn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function zn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Wn(t)),t=Kn(e.get(n),t);return Wn(t)}function Kn(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Wn(e){return e+""}class Jn{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Jn.store="owner",Jn.key="owner";class Qn{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Qn.store="mutationQueues",Qn.keyPath="userId";class Xn{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Xn.store="mutations",Xn.keyPath="batchId",Xn.userMutationsIndex="userMutationsIndex",Xn.userMutationsKeyPath=["userId","batchId"];class Yn{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,zn(t)]}static key(e,t,n){return[e,zn(t),n]}}Yn.store="documentMutations",Yn.PLACEHOLDER=new Yn;class Zn{constructor(e,t,n,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}Zn.store="remoteDocuments",Zn.readTimeIndex="readTimeIndex",Zn.readTimeIndexPath="readTime",Zn.collectionReadTimeIndex="collectionReadTimeIndex",Zn.collectionReadTimeIndexPath=["parentPath","readTime"];class er{constructor(e){this.byteSize=e}}er.store="remoteDocumentGlobal",er.key="remoteDocumentGlobalKey";class tr{constructor(e,t,n,r,i,o,s){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class nr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}nr.store="targetDocuments",nr.keyPath=["targetId","path"],nr.documentTargetsIndex="documentTargetsIndex",nr.documentTargetsKeyPath=["path","targetId"];class rr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}rr.key="targetGlobalKey",rr.store="targetGlobal";class ir{constructor(e,t){this.collectionId=e,this.parent=t}}ir.store="collectionParents",ir.keyPath=["collectionId","parent"];class or{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}or.store="clientMetadata",or.keyPath="clientId";class sr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}sr.store="bundles",sr.keyPath="bundleId";class ar{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}ar.store="namedQueries",ar.keyPath="name";Qn.store,Xn.store,Yn.store,Zn.store,tr.store,Jn.store,rr.store,nr.store,or.store,er.store,ir.store,sr.store,ar.store;const cr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
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
 */class lr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&g(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof lr?t:lr.resolve(t)}catch(e){return lr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):lr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):lr.reject(t)}static resolve(e){return new lr((t,n)=>{t(e)})}static reject(e){return new lr((t,n)=>{n(e)})}static waitFor(e){return new lr((t,n)=>{let r=0,i=0,o=!1;e.forEach(e=>{++r,e.next(()=>{++i,o&&i===r&&t()},e=>n(e))}),o=!0,i===r&&t()})}static or(e){let t=lr.resolve(!1);for(const n of e)t=t.next(e=>e?lr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
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
 */function hr(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */
class dr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Tt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&It(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(L.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Zt())}isEqual(e){return this.batchId===e.batchId&&N(this.mutations,e.mutations,(e,t)=>kt(e,t))&&N(this.baseMutations,e.baseMutations,(e,t)=>kt(e,t))}}class fr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=Xt();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new fr(e,t,n,r)}}
/**
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
 */class pr{constructor(e,t,n,r,i=L.min(),o=L.min(),s=H.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class mr{constructor(e){this.Gt=e}}function vr(e){const t=Dn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xe(t,t.limit,"L"):t}
/**
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
 */
/**
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
 */
class gr{constructor(){this.zt=new br}addToCollectionParentIndex(e,t){return this.zt.add(t),lr.resolve()}getCollectionParents(e,t){return lr.resolve(this.zt.getEntries(t))}}class br{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $t(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $t(B.comparator)).toArray()}}
/**
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
 */class yr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new yr(e,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */yr.DEFAULT_COLLECTION_PERCENTILE=10,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yr.DEFAULT=new yr(41943040,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yr.DISABLED=new yr(-1,0,0);
/**
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
 */
class wr{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new wr(0)}static re(){return new wr(-1)}}
/**
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
 */
/**
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
 */
async function Or(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==cr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */
/**
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
 */
class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){F(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return U(this.inner)}}
/**
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
 */class _r{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:L.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:be.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
class Tr{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.bn(e,t,n))}bn(e,t,n){return this.Je.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Pn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}vn(e,t){return this.Je.getEntries(e,t).next(t=>this.Vn(e,t).next(()=>t))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Pn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):We(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ne(t)).next(e=>{let t=Jt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Dn(e,t,n){const r=t.collectionGroup;let i=Jt();return this.Jt.getCollectionParents(e,r).next(o=>lr.forEach(o,o=>{const s=function(e,t){return new Be(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.Cn(e,s,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Nn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=be.newInvalidDocument(n),r=r.insert(n,i)),It(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{tt(t,n)||(r=r.remove(e))}),r))}Nn(e,t,n){let r=Zt();for(const o of t)for(const e of o.mutations)e instanceof At&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
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
 */class Ir{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Zt(),r=Zt();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ir(e,t.fromCache,n,r)}}
/**
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
 */class Sr{On(e){this.Mn=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(L.min())?this.Fn(e,t):this.Mn.vn(e,r).next(i=>{const s=this.Ln(t,i);return($e(t)||He(t))&&this.Bn(t.limitType,s,r,n)?this.Fn(e,t):(d()<=o["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),et(t)),this.Mn.getDocumentsMatchingQuery(e,t,n).next(e=>(s.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Ln(e,t){let n=new $t(nt(e));return t.forEach((t,r)=>{tt(e,r)&&(n=n.add(r))}),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return d()<=o["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",et(t)),this.Mn.getDocumentsMatchingQuery(e,t,L.min())}}
/**
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
 */class kr{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Bt(D),this.Kn=new Er(e=>Oe(e),_e),this.jn=L.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Tr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function jr(e,t,n,r){return new kr(e,t,n,r)}async function Cr(e,t){const n=y(e);let r=n.An,i=n.Wn;const o=await n.persistence.runTransaction("Handle user change","readonly",e=>{let o;return n.An.getAllMutationBatches(e).next(s=>(o=s,r=n.persistence.getMutationQueue(t),i=new Tr(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let s=Zt();for(const e of o){n.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return i.vn(e,s).next(e=>({Gn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),o}function Ar(e,t){const n=y(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=lr.resolve();return o.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const o=n.docVersions.get(e);b(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),s.next(()=>e.An.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}function xr(e){const t=y(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.He.getLastRemoteSnapshotVersion(e))}function Rr(e,t){const n=y(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const s=[];t.targetChanges.forEach((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.He.removeMatchingKeys(e,o.removedDocuments,a).next(()=>n.He.addMatchingKeys(e,o.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(H.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.He.updateTargetData(e,u))});let a=Kt();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(Dr(e,o,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual(L.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next(t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return lr.waitFor(s).next(()=>o.apply(e)).next(()=>n.Wn.Vn(e,a)).next(()=>a)}).then(e=>(n.qn=i,e))}function Dr(e,t,n,r,i){let o=Zt();return n.forEach(e=>o=o.add(e)),t.getEntries(e,o).next(e=>{let o=Kt();return n.forEach((n,s)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(L.min())?(t.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s,c),o=o.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function Nr(e,t){const n=y(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t)))}function Pr(e,t){const n=y(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.He.getTargetData(e,t).next(i=>i?(r=i,lr.resolve(r)):n.He.allocateTargetId(e).next(i=>(r=new pr(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e})}async function Lr(e,t,n){const r=y(e),i=r.qn.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!hr(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Mr(e,t,n){const r=y(e);let i=L.min(),o=Zt();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=y(e),i=r.Kn.get(n);return void 0!==i?lr.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Qe(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next(e=>{o=e})}).next(()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:L.min(),n?o:Zt())).next(e=>({documents:e,zn:o})))}
/**
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
 */
class Fr{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return lr.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:bn(n.createTime)}),lr.resolve()}getNamedQuery(e,t){return lr.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:vr(e.bundledQuery),readTime:bn(e.readTime)}}(t)),lr.resolve()}}
/**
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
 */class Ur{constructor(){this.ts=new $t(Vr.es),this.ns=new $t(Vr.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Vr(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.os(new Vr(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}us(e){const t=new ne(new B([])),n=new Vr(t,e),r=new Vr(t,e+1),i=[];return this.ns.forEachInRange([n,r],e=>{this.os(e),i.push(e.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ne(new B([])),n=new Vr(t,e),r=new Vr(t,e+1);let i=Zt();return this.ns.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Vr(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Vr{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ne.comparator(e.key,t.key)||D(e.fs,t.fs)}static ss(e,t){return D(e.fs,t.fs)||ne.comparator(e.key,t.key)}}
/**
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
 */class Br{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new $t(Vr.es)}checkEmpty(e){return lr.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new dr(i,t,n,r);this.An.push(o);for(const s of r)this.ws=this.ws.add(new Vr(s.key,i)),this.Jt.addToCollectionParentIndex(e,s.key.path.popLast());return lr.resolve(o)}lookupMutationBatch(e,t){return lr.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return lr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return lr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vr(t,0),r=new Vr(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],e=>{const t=this._s(e.fs);i.push(t)}),lr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $t(D);return t.forEach(e=>{const t=new Vr(e,0),r=new Vr(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],e=>{n=n.add(e.fs)})}),lr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ne.isDocumentKey(i)||(i=i.child(""));const o=new Vr(new ne(i),0);let s=new $t(D);return this.ws.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.fs)),!0)},o),lr.resolve(this.ys(s))}ys(e){const t=[];return e.forEach(e=>{const n=this._s(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return lr.forEach(t.mutations,r=>{const i=new Vr(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,t){const n=new Vr(t,0),r=this.ws.firstAfterOrEqual(n);return lr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,lr.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
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
 */class qr{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Bt(ne.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),o=i?i.size:0,s=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s,readTime:n}),this.size+=s-o,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lr.resolve(n?n.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let n=Kt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():be.newInvalidDocument(e))}),lr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Kt();const i=new ne(t.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i,readTime:s}}=o.getNext();if(!t.path.isPrefixOf(e.path))break;s.compareTo(n)<=0||tt(t,i)&&(r=r.insert(i.key,i.mutableCopy()))}return lr.resolve(r)}Es(e,t){return lr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Gr(this)}getSize(e){return lr.resolve(this.size)}}class Gr extends _r{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),lr.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
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
 */class $r{constructor(e){this.persistence=e,this.Is=new Er(e=>Oe(e),_e),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.As=0,this.Rs=new Ur,this.targetCount=0,this.bs=wr.ie()}forEachTarget(e,t){return this.Is.forEach((e,n)=>t(n)),lr.resolve()}getLastRemoteSnapshotVersion(e){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lr.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),lr.resolve()}ae(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new wr(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,lr.resolve()}updateTargetData(e,t){return this.ae(t),lr.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,lr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),lr.waitFor(i).next(()=>r)}getTargetCount(e){return lr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return lr.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),lr.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),lr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),lr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return lr.resolve(n)}containsKey(e,t){return lr.resolve(this.Rs.containsKey(t))}}
/**
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
 */class Hr{constructor(e,t){this.Ps={},this.Be=new A(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new $r(this),this.Jt=new gr,this.Je=function(e,t){return new qr(e,t)}(this.Jt,e=>this.referenceDelegate.vs(e)),this.k=new mr(t),this.Ye=new Fr(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new Br(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new zr(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(e=>this.referenceDelegate.Ss(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ds(e,t){return lr.or(Object.values(this.Ps).map(n=>()=>n.containsKey(e,t)))}}class zr extends ur{constructor(e){super(),this.currentSequenceNumber=e}}class Kr{constructor(e){this.persistence=e,this.Cs=new Ur,this.Ns=null}static ks(e){return new Kr(e)}get xs(){if(this.Ns)return this.Ns;throw g()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),lr.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),lr.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.xs,n=>{const r=ne.fromPath(n);return this.$s(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return lr.or([()=>lr.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
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
 */class Wr{constructor(){this.activeTargetIds=tn()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jr{constructor(){this.pi=new Wr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Wr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
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
 */class Qr{Ei(e){}shutdown(){}}
/**
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
 */class Xr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Yr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Zr{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}
/**
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
 */class ei extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const o=this.Ui(e,t);f("RestConnection","Sending: ",o,n);const s={};return this.qi(s,r,i),this.Ki(e,o,s,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",o,"request:",n),t})}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Ui(e,t){const n=Yr[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const t=s.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),o(new O(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const e=s.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(t)>=0?t:w.UNKNOWN}(e.status);o(new O(t,e.message))}else o(new O(w.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new O(w.UNAVAILABLE,"Connection failed."));break;default:g()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);s.send(t,"POST",c,n,15)})}Qi(e,t,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),o=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,t,n),Object(s["p"])()||Object(s["q"])()||Object(s["l"])()||Object(s["n"])()||Object(s["s"])()||Object(s["k"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const p=new Zr({Vi:e=>{d?f("Connection","Not sending because WebChannel is closed:",e):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",e),l.send(e))},Si:()=>l.close()}),v=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return v(l,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),v(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Oi())}),v(l,a["f"].EventType.ERROR,e=>{d||(d=!0,m("Connection","WebChannel transport errored:",e),p.Oi(new O(w.UNAVAILABLE,"The operation could not be completed")))}),v(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Mt[e];if(void 0!==t)return Vt(t)}(e),n=i.message;void 0===t&&(t=w.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,p.Oi(new O(t,n)),l.close()}else f("Connection","WebChannel received:",n),p.Mi(n)}}),v(o,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
/**
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
 */
/**
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
 */function ti(){return"undefined"!=typeof document?document:null}
/**
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
 */function ni(e){return new pn(e,!0)}class ri{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
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
 */class ii{constructor(e,t,n,r,i,o,s,a){this.Me=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new ri(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.rr===t&&this.Ir(e,n)},t=>{e(()=>{const e=new O(w.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)})})}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(e=>{n(()=>this.Ar(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Me.enqueueAndForget(()=>this.rr===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oi extends ii{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=jn(this.k,e),n=function(e){if(!("targetChange"in e))return L.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?L.min():t.readTime?bn(t.readTime):L.min()}(e);return this.listener.br(t,n)}Pr(e){const t={};t.database=In(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Te(r)?{documents:xn(e,r)}:{query:Rn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=vn(e,t.resumeToken):t.snapshotVersion.compareTo(L.min())>0&&(n.readTime=mn(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=Nn(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=In(this.k),t.removeTarget=e,this.gr(t)}}class si extends ii{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=An(e.writeResults,e.commitTime),n=bn(e.commitTime);return this.listener.Cr(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=In(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Cn(this.k,e))};this.gr(t)}}
/**
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
 */class ai extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new O(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(w.UNKNOWN,e.toString())})}ji(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(w.UNKNOWN,e.toString())})}terminate(){this.$r=!0}}class ci{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+e.toString()),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(t),this.Lr=!1):f("OnlineStateTracker",t)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
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
 */class ui{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(e=>{n.enqueueAndForget(async()=>{bi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=y(e);t.Gr.add(4),await hi(t),t.Jr.set("Unknown"),t.Gr.delete(4),await li(t)}(this))})}),this.Jr=new ci(n,r)}}async function li(e){if(bi(e))for(const t of e.zr)await t(!0)}async function hi(e){for(const t of e.zr)await t(!1)}function di(e,t){const n=y(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),gi(n)?vi(n):Li(n).lr()&&pi(n,t))}function fi(e,t){const n=y(e),r=Li(n);n.Wr.delete(t),r.lr()&&mi(n,t),0===n.Wr.size&&(r.lr()?r._r():bi(n)&&n.Jr.set("Unknown"))}function pi(e,t){e.Yr.X(t.targetId),Li(e).Pr(t)}function mi(e,t){e.Yr.X(t),Li(e).vr(t)}function vi(e){e.Yr=new un({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Li(e).start(),e.Jr.Br()}function gi(e){return bi(e)&&!Li(e).hr()&&e.Wr.size>0}function bi(e){return 0===y(e).Gr.size}function yi(e){e.Yr=void 0}async function wi(e){e.Wr.forEach((t,n)=>{pi(e,t)})}async function Oi(e,t){yi(e),gi(e)?(e.Jr.Kr(t),vi(e)):e.Jr.set("Unknown")}async function Ei(e,t,n){if(e.Jr.set("Online"),t instanceof an&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await _i(e,n)}else if(t instanceof on?e.Yr.ot(t):t instanceof sn?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(L.min()))try{const t=await xr(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(H.EMPTY_BYTE_STRING,n.snapshotVersion)),mi(e,t);const r=new pr(n.target,t,1,n.sequenceNumber);pi(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await _i(e,t)}}async function _i(e,t,n){if(!hr(t))throw t;e.Gr.add(1),await hi(e),e.Jr.set("Offline"),n||(n=()=>xr(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await li(e)})}function Ti(e,t){return t().catch(n=>_i(e,n,t))}async function Ii(e){const t=y(e),n=Mi(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Si(t);)try{const e=await Nr(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,ki(t,e)}catch(e){await _i(t,e)}ji(t)&&Ci(t)}function Si(e){return bi(e)&&e.Qr.length<10}function ki(e,t){e.Qr.push(t);const n=Mi(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function ji(e){return bi(e)&&!Mi(e).hr()&&e.Qr.length>0}function Ci(e){Mi(e).start()}async function Ai(e){Mi(e).kr()}async function xi(e){const t=Mi(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Ri(e,t,n){const r=e.Qr.shift(),i=fr.from(r,t,n);await Ti(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ii(e)}async function Di(e,t){t&&Mi(e).Sr&&await async function(e,t){if(n=t.code,Ut(n)&&n!==w.ABORTED){const n=e.Qr.shift();Mi(e).wr(),await Ti(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ii(e)}var n}(e,t),ji(e)&&Ci(e)}async function Ni(e,t){const n=y(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=bi(n);n.Gr.add(3),await hi(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await li(n)}async function Pi(e,t){const n=y(e);t?(n.Gr.delete(2),await li(n)):t||(n.Gr.add(2),await hi(n),n.Jr.set("Unknown"))}function Li(e){return e.Xr||(e.Xr=function(e,t,n){const r=y(e);return r.Or(),new oi(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{Di:wi.bind(null,e),Ni:Oi.bind(null,e),br:Ei.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),gi(e)?vi(e):e.Jr.set("Unknown")):(await e.Xr.stop(),yi(e))})),e.Xr}function Mi(e){return e.Zr||(e.Zr=function(e,t,n){const r=y(e);return r.Or(),new si(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:Ai.bind(null,e),Ni:Di.bind(null,e),Nr:xi.bind(null,e),Cr:Ri.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await Ii(e)):(await e.Zr.stop(),e.Qr.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr
/**
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
 */}class Fi{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new Fi(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new O(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ui(e,t){if(p("AsyncQueue",`${t}: ${e}`),hr(e))return new O(w.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Vi{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ne.comparator(t.key,n.key):(e,t)=>ne.comparator(e.key,t.key),this.keyedMap=Jt(),this.sortedSet=new Bt(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Vi;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Bi{constructor(){this.eo=new Bt(ne.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):g():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,n)=>{e.push(n)}),e}}class qi{constructor(e,t,n,r,i,o,s,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new qi(e,t,Vi.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ye(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Gi{constructor(){this.so=void 0,this.listeners=[]}}class $i{constructor(){this.queries=new Er(e=>Ze(e),Ye),this.onlineState="Unknown",this.io=new Set}}async function Hi(e,t){const n=y(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Gi),i)try{o.so=await n.onListen(r)}catch(e){const n=Ui(e,`Initialization of query '${et(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.ro(n.onlineState),o.so&&t.oo(o.so)&&Ji(n)}async function zi(e,t){const n=y(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ki(e,t){const n=y(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&Ji(n)}function Wi(e,t,n){const r=y(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function Ji(e){e.io.forEach(e=>{e.next()})}class Qi{constructor(e,t,n){this.query=e,this.co=t,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new qi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.ao?this.ho(e)&&(this.co.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}
/**
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
 */
/**
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
 */
class Xi{constructor(e){this.key=e}}class Yi{constructor(e){this.key=e}}class Zi{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Zt(),this.mutatedKeys=Zt(),this.Ao=nt(e),this.Ro=new Vi(this.Ao)}get bo(){return this.To}Po(e,t){const n=t?t.vo:new Bi,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=$e(this.query)&&r.size===this.query.limit?r.last():null,c=He(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=tt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))}),$e(this.query)||He(this.query))for(;o.size>this.query.limit;){const e=$e(this.query)?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:o,vo:n,Bn:s,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return g()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Ao(e.doc,t.doc)),this.So(n);const o=t?this.Do():[],s=0===this.Io.size&&this.current?1:0,a=s!==this.Eo;return this.Eo=s,0!==i.length||a?{snapshot:new qi(this.query,e.Ro,r,i,e.mutatedKeys,0===s,a,!1),Co:o}:{Co:o}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Bi,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(e=>this.To=this.To.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.To=this.To.delete(e)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Zt(),this.Ro.forEach(e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))});const t=[];return e.forEach(e=>{this.Io.has(e)||t.push(new Yi(e))}),this.Io.forEach(n=>{e.has(n)||t.push(new Xi(n))}),t}ko(e){this.To=e.zn,this.Io=Zt();const t=this.Po(e.documents);return this.applyChanges(t,!0)}xo(){return qi.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class eo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class to{constructor(e){this.key=e,this.$o=!1}}class no{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Er(e=>Ze(e),Ye),this.Fo=new Map,this.Lo=new Set,this.Bo=new Bt(ne.comparator),this.Uo=new Map,this.qo=new Ur,this.Ko={},this.jo=new Map,this.Qo=wr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ro(e,t){const n=_o(e);let r,i;const o=n.Mo.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.xo();else{const e=await Pr(n.localStore,Qe(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await io(n,t,r,"current"===o),n.isPrimaryClient&&di(n.remoteStore,e)}return i}async function io(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.Po(n);i.Bn&&(i=await Mr(e.localStore,t.query,!1).then(({documents:e})=>t.view.Po(e,i)));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return go(e,t.targetId,s.Co),s.snapshot}(e,t,n,r);const i=await Mr(e.localStore,t,!0),o=new Zi(t,i.zn),s=o.Po(i.documents),a=rn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=o.applyChanges(s,e.isPrimaryClient,a);go(e,n,c.Co);const u=new eo(t,n,o);return e.Mo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function oo(e,t){const n=y(e),r=n.Mo.get(t),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(e=>!Ye(e,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fi(n.remoteStore,r.targetId),mo(n,r.targetId)}).catch(Or)):(mo(n,r.targetId),await Lr(n.localStore,r.targetId,!0))}async function so(e,t,n){const r=To(e);try{const e=await function(e,t){const n=y(e),r=P.now(),i=t.reduce((e,t)=>e.add(t.key),Zt());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Wn.vn(e,i).next(i=>{o=i;const s=[];for(const e of t){const t=St(e,o.get(e.key));null!=t&&s.push(new At(e.key,t,ge(t.value.mapValue),Ot.exists(!0)))}return n.An.addMutationBatch(e,r,s,t)})).then(e=>(e.applyToLocalDocumentSet(o),{batchId:e.batchId,changes:o}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Bt(D)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await wo(r,e.changes),await Ii(r.remoteStore)}catch(e){const t=Ui(e,"Failed to persist write");n.reject(t)}}async function ao(e,t){const n=y(e);try{const e=await Rr(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Uo.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?b(r.$o):e.removedDocuments.size>0&&(b(r.$o),r.$o=!1))}),await wo(n,e,t)}catch(e){await Or(e)}}function co(e,t,n){const r=y(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Mo.forEach((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=y(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)}),r&&Ji(n)}(r.eventManager,t),e.length&&r.Oo.br(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uo(e,t,n){const r=y(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),o=i&&i.key;if(o){let e=new Bt(ne.comparator);e=e.insert(o,be.newNoDocument(o,L.min()));const n=Zt().add(o),i=new nn(L.min(),new Map,new $t(D),e,n);await ao(r,i),r.Bo=r.Bo.remove(o),r.Uo.delete(t),yo(r)}else await Lr(r.localStore,t,!1).then(()=>mo(r,t,n)).catch(Or)}async function lo(e,t){const n=y(e),r=t.batch.batchId;try{const e=await Ar(n.localStore,t);po(n,r,null),fo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wo(n,e)}catch(e){await Or(e)}}async function ho(e,t,n){const r=y(e);try{const e=await function(e,t){const n=y(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.An.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t))).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}(r.localStore,t);po(r,t,n),fo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await wo(r,e)}catch(n){await Or(n)}}function fo(e,t){(e.jo.get(t)||[]).forEach(e=>{e.resolve()}),e.jo.delete(t)}function po(e,t,n){const r=y(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function mo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Mo.delete(r),n&&e.Oo.zo(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(t=>{e.qo.containsKey(t)||vo(e,t)})}function vo(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(fi(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),yo(e))}function go(e,t,n){for(const r of n)r instanceof Xi?(e.qo.addReference(r.key,t),bo(e,r)):r instanceof Yi?(f("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||vo(e,r.key)):g()}function bo(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(f("SyncEngine","New document in limbo: "+n),e.Lo.add(r),yo(e))}function yo(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ne(B.fromString(t)),r=e.Qo.next();e.Uo.set(r,new to(n)),e.Bo=e.Bo.insert(n,r),di(e.remoteStore,new pr(Qe(Ge(n.path)),r,2,A.I))}}async function wo(e,t,n){const r=y(e),i=[],o=[],s=[];r.Mo.isEmpty()||(r.Mo.forEach((e,a)=>{s.push(r.Go(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ir.$n(a.targetId,e);o.push(t)}}))}),await Promise.all(s),r.Oo.br(i),await async function(e,t){const n=y(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>lr.forEach(t,t=>lr.forEach(t.kn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>lr.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!hr(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,o))}async function Oo(e,t){const n=y(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await Cr(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach(e=>{e.forEach(e=>{e.reject(new O(w.CANCELLED,t))})}),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await wo(n,e.Gn)}}function Eo(e,t){const n=y(e),r=n.Uo.get(t);if(r&&r.$o)return Zt().add(r.key);{let e=Zt();const r=n.Fo.get(t);if(!r)return e;for(const t of r){const r=n.Mo.get(t);e=e.unionWith(r.view.bo)}return e}}function _o(e){const t=y(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ao.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Eo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uo.bind(null,t),t.Oo.br=Ki.bind(null,t.eventManager),t.Oo.zo=Wi.bind(null,t.eventManager),t}function To(e){const t=y(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lo.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ho.bind(null,t),t}class Io{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=ni(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return jr(this.persistence,new Sr,e.initialUser,this.k)}Yo(e){return new Hr(Kr.ks,this.k)}Jo(e){return new Jr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class So{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>co(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oo.bind(null,this.syncEngine),await Pi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $i}createDatastore(e){const t=ni(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ei(r));var r;return function(e,t,n,r){return new ai(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>co(this.syncEngine,e,0),o=Xr.Pt()?new Xr:new Qr,new ui(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new no(e,t,n,r,i,o);return s&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=y(e);f("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await hi(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class ko{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
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
 */
/**
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
 */
class jo{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ui(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Co(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Cr(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ao(e,t){e.asyncQueue.verifyOperationInProgress();const n=await xo(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>Ni(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Ni(t.remoteStore,n)),e.onlineComponents=t}async function xo(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Co(e,new Io)),e.offlineComponents}async function Ro(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ao(e,new So)),e.onlineComponents}function Do(e){return Ro(e).then(e=>e.syncEngine)}async function No(e){const t=await Ro(e),n=t.eventManager;return n.onListen=ro.bind(null,t.syncEngine),n.onUnlisten=oo.bind(null,t.syncEngine),n}function Po(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new ko({next:n=>{t.enqueueAndForget(()=>zi(e,s)),n.fromCache&&"server"===r.source?i.reject(new O(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Qi(n,o,{includeMetadataChanges:!0,wo:!0});return Hi(e,s)}(await No(e),e.asyncQueue,t,n,r)),r.promise}class Lo{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Mo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Fo=new Map;
/**
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
 */function Uo(e,t,n){if(!n)throw new O(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Vo(e,t,n,r){if(!0===t&&!0===r)throw new O(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Bo(e){if(!ne.isDocumentKey(e))throw new O(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qo(e){if(ne.isDocumentKey(e))throw new O(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Go(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":g()}function $o(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Go(e);throw new O(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
class Ho{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new O(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new O(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class zo{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ho({}),this._settingsFrozen=!1,e instanceof Mo?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new O(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(e.options.projectId)}(e))}get app(){if(!this._app)throw new O(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new O(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ho(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new T;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new k(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new O(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Fo.get(e);t&&(f("ComponentProvider","Removing Datastore"),Fo.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class Ko{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ko(this.firestore,e,this._key)}}class Wo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wo(this.firestore,e,this._query)}}class Jo extends Wo{constructor(e,t,n){super(e,t,Ge(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ko(this.firestore,null,new ne(e))}withConverter(e){return new Jo(this.firestore,e,this._path)}}function Qo(e,t,...n){if(e=Object(s["i"])(e),Uo("collection","path",t),e instanceof zo){const r=B.fromString(t,...n);return qo(r),new Jo(e,null,r)}{if(!(e instanceof Ko||e instanceof Jo))throw new O(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return qo(r),new Jo(e.firestore,null,r)}}function Xo(e,t,...n){if(e=Object(s["i"])(e),1===arguments.length&&(t=R.A()),Uo("doc","path",t),e instanceof zo){const r=B.fromString(t,...n);return Bo(r),new Ko(e,null,new ne(r))}{if(!(e instanceof Ko||e instanceof Jo))throw new O(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Bo(r),new Ko(e.firestore,e instanceof Jo?e.converter:null,new ne(r))}}
/**
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
 */
class Yo{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new ri(this,"async_queue_retry"),this.bc=()=>{const e=ti();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=ti();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const t=ti();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const t=new E;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!hr(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const t=this.mc.then(()=>(this.Ic=!0,e().catch(e=>{this.Ec=e,this.Ic=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw p("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ic=!1,e))));return this.mc=t,t}enqueueAfterDelay(e,t,n){this.Pc(),this.Rc.indexOf(e)>-1&&(t=0);const r=Fi.createAndSchedule(this,e,t,n,e=>this.Sc(e));return this.Tc.push(r),r}Pc(){this.Ec&&g()}verifyOperationInProgress(){}async Dc(){let e;do{e=this.mc,await e}while(e!==this.mc)}Cc(e){for(const t of this.Tc)if(t.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const t=this.Tc.indexOf(e);this.Tc.splice(t,1)}}class Zo extends zo{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Yo,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ns(this),this._firestoreClient.terminate()}}function es(e=Object(r["e"])()){return Object(r["b"])(e,"firestore").getImmediate()}function ts(e){return e._firestoreClient||ns(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ns(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Lo(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new jo(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
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
 */
/**
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
 */
class rs{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new O(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(H.fromBase64String(e))}catch(e){throw new O(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new is(H.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class os{constructor(e){this._methodName=e}}
/**
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
 */class ss{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}
/**
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
 */const as=/^__.*__$/;class cs{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ct(e,this.data,t,this.fieldTransforms)}}function us(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class ls{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new ls(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.Lc(e),r}Bc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Os(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(0===e.length)throw this.qc("Document fields must not be empty");if(us(this.$c)&&as.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class hs{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||ni(e)}Qc(e,t,n,r=!1){return new ls({$c:e,methodName:t,jc:n,path:G.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function ds(e){const t=e._freezeSettings(),n=ni(e._databaseId);return new hs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fs(e,t,n,r,i,o={}){const s=e.Qc(o.merge||o.mergeFields?2:0,t,n,i);gs("Data must be an object, but it was:",s,r);const a=ms(r,s);let c,u;if(o.merge)c=new $(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=bs(t,r,n);if(!s.contains(i))throw new O(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Es(e,i)||e.push(i)}c=new $(e),u=s.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=s.fieldTransforms;return new cs(new ve(a),c,u)}function ps(e,t){if(vs(e=Object(s["i"])(e)))return gs("Unsupported field value:",t,e),ms(e,t);if(e instanceof os)return function(e,t){if(!us(t.$c))throw t.qc(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.qc(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.$c)throw t.qc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ps(i,t.Uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s["i"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return st(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=P.fromDate(e);return{timestampValue:mn(t.k,n)}}if(e instanceof P){const n=new P(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mn(t.k,n)}}if(e instanceof ss)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof is)return{bytesValue:vn(t.k,e._byteString)};if(e instanceof Ko){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.qc("Unsupported field value: "+Go(e))}(e,t)}function ms(e,t){const n={};return U(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):F(e,(e,r)=>{const i=ps(r,t.Mc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function vs(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof P||e instanceof ss||e instanceof is||e instanceof Ko||e instanceof os)}function gs(e,t,n){if(!vs(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Go(n);throw"an object"===r?t.qc(e+" a custom object"):t.qc(e+" "+r)}}function bs(e,t,n){if((t=Object(s["i"])(t))instanceof rs)return t._internalPath;if("string"==typeof t)return ws(e,t);throw Os("Field path arguments must be of type string or ",e,!1,void 0,n)}const ys=new RegExp("[~\\*/\\[\\]]");function ws(e,t,n){if(t.search(ys)>=0)throw Os(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rs(...t.split("."))._internalPath}catch(r){throw Os(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Os(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new O(w.INVALID_ARGUMENT,a+e+c)}function Es(e,t){return e.some(e=>e.isEqual(t))}
/**
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
 */class _s{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ko(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ts(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Is("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ts extends _s{data(){return super.data()}}function Is(e,t){return"string"==typeof t?ws(e,t):t instanceof rs?t._internalPath:t._delegate._internalPath}
/**
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
 */class Ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ks extends _s{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Is("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class js extends ks{data(e={}){return super.data(e)}}class Cs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ss(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new js(this._firestore,this._userDataWriter,n.key,n,new Ss(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new js(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ss(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new js(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ss(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:As(t.type),doc:r,oldIndex:i,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function As(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return g()}}
/**
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
 */
function xs(e){if(He(e)&&0===e.explicitOrderBy.length)throw new O(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
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
 */
class Rs{convertValue(e,t="none"){switch(re(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(J(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw g()}}convertObject(e,t){const n={};return F(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new ss(W(e.latitude),W(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=X(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Y(e));default:return null}}convertTimestamp(e){const t=K(e);return new P(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);b(Hn(n));const r=new Mo(n.get(1),n.get(3)),i=new ne(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function Ds(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ns extends Rs{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ko(this.firestore,null,t)}}function Ps(e){e=$o(e,Wo);const t=$o(e.firestore,Zo),n=ts(t),r=new Ns(t);return xs(e._query),Po(n,e._query).then(n=>new Cs(t,r,e,n))}function Ls(e){return Fs($o(e.firestore,Zo),[new Nt(e._key,Ot.none())])}function Ms(e,t){const n=$o(e.firestore,Zo),r=Xo(e),i=Ds(e.converter,t);return Fs(n,[fs(ds(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function Fs(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>so(await Do(e),t,n)),n.promise}(ts(e),t)}!function(e,t=!0){!function(e){l=e}(r["a"]),Object(r["c"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Zo(r,new I(e.getProvider("auth-internal")),new C(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.4",e),Object(r["g"])(c,"3.4.4","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return R})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return L})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return S})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return b})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return A}));
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
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
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return h().indexOf("Electron/")>=0}function g(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return h().indexOf("MSAppHost/")>=0}function y(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}
/**
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
 */
const O="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?T(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function T(e,t){return e.replace(I,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
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
 */function S(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(j(n)&&j(o)){if(!k(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
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
 */function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function A(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function R(e,t){const n=new D(e,t);return n.subscribe.bind(n)}class D{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=N(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function P(){}
/**
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
 */
/**
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
 */
function L(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},v=m.prototype;e.exports=function(e,t,n){var r,g,b,y,w,O,E,_=n&&n.that,T=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=i(t,_),j=function(e){return r&&f(r,"normal",e),new m(!0,e)},C=function(e){return T?(s(e),S?k(e[0],e[1],j):k(e[0],e[1])):S?k(e,j):k(e)};if(I)r=e;else{if(g=d(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(w=C(e[b]),w&&l(v,w))return w;return new m(!1)}r=h(e,g)}O=r.next;while(!(E=o(O,r)).done){try{w=C(E.value)}catch(A){f(r,"throw",A)}if("object"==typeof w&&w&&l(v,w))return w}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["f"]}));var i="firebase",o="9.6.6";
/**
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
 */
Object(r["g"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),v=n("d6d6"),g=n("1cdc"),b=n("605d"),y=a.setImmediate,w=a.clearImmediate,O=a.process,E=a.Dispatch,_=a.Function,T=a.MessageChannel,I=a.String,S=0,k={},j="onreadystatechange";try{r=a.location}catch(D){}var C=function(e){if(h(k,e)){var t=k[e];delete k[e],t()}},A=function(e){return function(){C(e)}},x=function(e){C(e.data)},R=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};y&&w||(y=function(e){v(arguments.length,1);var t=l(e)?e:_(e),n=p(arguments,1);return k[++S]=function(){c(t,void 0,n)},i(S),S},w=function(e){delete k[e]},b?i=function(e){O.nextTick(A(e))}:E&&E.now?i=function(e){E.now(A(e))}:T&&!g?(o=new T,s=o.port2,o.port1.onmessage=x,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",x,!1)):i=j in m("script")?function(e){f.appendChild(m("script"))[j]=function(){f.removeChild(this),C(e)}}:function(e){setTimeout(A(e),0)}),e.exports={set:y,clear:w}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t&&t.on(o,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=e,o=Object(r["b"])(),a=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!a||!o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new s(n,a):null,r=o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else a.emit(i,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["C"])({data:t}),e.strict&&w(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;g(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;b(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;y(e,r,t,u)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=E(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=E(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return v(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function v(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function g(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function b(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function y(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function w(e){Object(r["M"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function E(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var _="vuex bindings",T="vuex:mutations",I="vuex:actions",S="vuex",k=0;function j(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[_]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:C}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===S)if(n.filter){var r=[];P(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId;v(t,r),n.state=L(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=k++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var C=8702998,A=6710886,x=16777215,R={label:"namespaced",textColor:x,backgroundColor:A};function D(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:D(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function P(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){P(e,t._children[i],n,r+i+"/")}))}function L(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=M(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?D(e):e,editable:!1,value:U((function(){return o[e]}))}}))}return i}function M(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){s(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,B);var q=function(e){this.register([],e,!1)};function G(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");G(e.concat(r),t.getChild(r),n.modules[r])}}q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},q.prototype.update=function(e){G([],this.root,e)},q.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var i=new V(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var $={assert:function(e){return"function"===typeof e},expected:"function"},H={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:$,mutations:$,actions:H};function K(e,t){Object.keys(z).forEach((function(n){if(t[n]){var r=z[n];s(t[n],(function(t,i){u(r.assert(t),W(e,n,i,t,r.expected))}))}}))}function W(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function J(e){return new Q(e)}var Q=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new q(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},X={state:{configurable:!0}};Q.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&j(e,this)},X.state.get=function(){return this._state.data},X.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},Q.prototype.commit=function(e,t,n){var r=this,i=E(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},Q.prototype.dispatch=function(e,t){var n=this,r=E(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},Q.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},Q.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},Q.prototype.watch=function(e,t,n){var i=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["M"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Q.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Q.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},Q.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},Q.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},Q.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},Q.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Q.prototype,X);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=te(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=te(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||te(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Y(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=te(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Y(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return G})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return W})),n.d(t,"g",(function(){return Q}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
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
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.16",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",w="@firebase/functions",O="@firebase/functions-compat",E="@firebase/installations",_="@firebase/installations-compat",T="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",k="@firebase/performance-compat",j="@firebase/remote-config",C="@firebase/remote-config-compat",A="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",N="firebase",P="9.6.6",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[w]:"fire-fn",[O]:"fire-fn-compat",[E]:"fire-iid",[_]:"fire-iid-compat",[T]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[k]:"fire-perf-compat",[j]:"fire-rc",[C]:"fire-rc-compat",[A]:"fire-gcs",[x]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},F=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())V(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function G(e,t,n=L){q(e,t).clearInstance(n)}
/**
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
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",$);
/**
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
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
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
 */const K=P;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(e,s.options)&&Object(o["g"])(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new z(e,n,a);return F.set(i,c),c}function J(e=L){const t=F.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function Q(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
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
 */
function X(e){B(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),Q(c,u,e),Q(c,u,"esm2017"),Q("fire-js","")}X("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var m,v=h(arguments[s++]),g=d?p(a(v),d(v)):a(v),b=g.length,y=0;while(b>y)m=g[y++],r&&!o(f,v,m)||(n[m]=v[m])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},v=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};v.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?v:m},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,b=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var w=d.state||(d.state=new g),O=c(w.get),E=c(w.has),_=c(w.set);r=function(e,t){if(E(w,e))throw new v(m);return t.facade=e,_(w,e,t),t},i=function(e){return O(w,e)||{}},o=function(e){return E(w,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new v(m);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},o=function(e){return h(e,T)}}e.exports={set:r,get:i,has:o,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return H}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const v=/\/$/,g=e=>e.replace(v,"");function b(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=S(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(t.matched[r],n.matched[i])&&_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,j;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(j||(j={}));function C(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const A=/^[^#]+#/;function x(e,t){return e.replace(A,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function P(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function F(e){const t=L.get(e);return L.delete(e),t}let U=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const s=w(n,e);return s+r+i}function B(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:k.pop,direction:l?l>0?j.forward:j.back:j.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:D()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?D():null}}function G(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:D()});o(s.current,s,!0);const a=f({},q(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function $(e){e=C(e);const t=G(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function H(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),$(e)}function z(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function X(e,t){return f(new Error,{type:e,[J]:!0},t)}function Y(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=f({},ee,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},se=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=he(e);a.aliasOf=r&&r.record;const u=me(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!fe(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:m}function s(e){if(K(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=f(le(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,ge=/&/g,be=/\//g,ye=/=/g,we=/\?/g,Oe=/\+/g,Ee=/%5B/g,_e=/%5D/g,Te=/%5E/g,Ie=/%60/g,Se=/%7B/g,ke=/%7C/g,je=/%7D/g,Ce=/%20/g;function Ae(e){return encodeURI(""+e).replace(ke,"|").replace(Ee,"[").replace(_e,"]")}function xe(e){return Ae(e).replace(Se,"{").replace(je,"}").replace(Te,"^")}function Re(e){return Ae(e).replace(Oe,"%2B").replace(Ce,"+").replace(ve,"%23").replace(ge,"%26").replace(Ie,"`").replace(Se,"{").replace(je,"}").replace(Te,"^")}function De(e){return Re(e).replace(ye,"%3D")}function Ne(e){return Ae(e).replace(ve,"%23").replace(we,"%3F")}function Pe(e){return null==e?"":Ne(e).replace(be,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Oe," "),n=e.indexOf("="),o=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=De(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function qe(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Ge(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(Be(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Be(c,n,r,o,e)()}))}}return i}function Ge(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(r["q"])(c),n=Object(r["q"])(u),i=Object(r["f"])(()=>t.resolve(Object(r["J"])(e.to))),o=Object(r["f"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(E.bind(null,r));if(s>-1)return s;const a=Je(e[t-2]);return t>1&&Je(r)===a&&o[o.length-1].path!==a?o.findIndex(E.bind(null,e[t-2])):s}),s=Object(r["f"])(()=>o.value>-1&&We(n.params,i.value.params)),a=Object(r["f"])(()=>o.value>-1&&o.value===n.matched.length-1&&_(n.params,i.value.params));function l(n={}){return Ke(n)?t[Object(r["J"])(e.replace)?"replace":"push"](Object(r["J"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["f"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const He=Object(r["n"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Object(r["C"])($e(e)),{options:i}=Object(r["q"])(c),o=Object(r["f"])(()=>({[Qe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["p"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),ze=He;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function We(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["n"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["q"])(l),o=Object(r["f"])(()=>e.route||i.value),c=Object(r["q"])(a,0),u=Object(r["f"])(()=>o.value.matched[c]);Object(r["A"])(a,c+1),Object(r["A"])(s,u),Object(r["A"])(l,o);const h=Object(r["D"])();return Object(r["M"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&E(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["p"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Ye(n.default,{Component:m,route:i})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Xe;function et(e){const t=ue(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||Fe,o=e.history;const s=Ve(),a=Ve(),d=Ve(),v=Object(r["G"])(W);let g=W;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),E=p.bind(null,Pe),_=p.bind(null,Le);function T(e,n){let r,i;return K(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map(e=>e.record)}function j(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=f({},r||v.value),"string"===typeof e){const i=b(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:_(s.params),hash:Le(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:b(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:E(e.params)}),r.params=E(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=w(_(a.params));const u=y(i,f({},e,{hash:xe(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Fe?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function A(e){return"string"===typeof e?b(n,e,v.value.path):f({},e)}function x(e,t){if(g!==e)return X(8,{from:t,to:e})}function R(e){return V(e)}function L(e){return R(f(A(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=C(e),r=v.value,o=e.state,s=e.force,a=!0===e.replace,c=U(n);if(c)return V(f(A(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&O(i,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(f(A(e.to),{state:o,force:s,replace:a}),t||u)}else e=$(u,r,!0,a,o);return G(u,r,e),e})}function B(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,o]=nt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Be(r,e,t))});const c=B.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of s.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).then(()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Be(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=qe(o,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(c),tt(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function G(e,t,n){for(const r of d.list())r(e,t,n)}function $(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===W,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,re(e,t,n,a),ne()}let H;function z(){H=o.listen((e,t,n)=>{const r=C(e),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(m);g=r;const s=v.value;h&&M(P(s.fullPath,n.delta),D()),q(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===k.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||$(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===k.pop&&Y(e,20)&&o.go(-1,!1)),G(r,s,e)}).catch(m)})}let J,Q=Ve(),Z=Ve();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&v.value!==W?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,z(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&F(P(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["r"])().then(()=>s(t,n,a)).then(e=>e&&N(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:v,addRoute:T,removeRoute:I,hasRoute:j,getRoutes:S,resolve:C,options:e,push:R,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["J"])(v)}),h&&!oe&&v.value===W&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in W)n[o]=Object(r["f"])(()=>v.value[o]);e.provide(c,t),e.provide(u,Object(r["C"])(n)),e.provide(l,v);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=W,H&&H(),v.value=W,oe=!1,J=!1),i()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>E(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>E(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==v)&&s(n,"name",v),u=d(n),u.source||(u.source=f.join("string"==typeof v?v:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"C",(function(){return ye})),n.d(t,"D",(function(){return Ne})),n.d(t,"G",(function(){return Pe})),n.d(t,"I",(function(){return ke})),n.d(t,"J",(function(){return Fe})),n.d(t,"s",(function(){return r["J"]})),n.d(t,"H",(function(){return r["M"]})),n.d(t,"a",(function(){return Ir})),n.d(t,"b",(function(){return yr})),n.d(t,"e",(function(){return Kr})),n.d(t,"f",(function(){return Ii})),n.d(t,"h",(function(){return Mr})),n.d(t,"i",(function(){return Jr})),n.d(t,"j",(function(){return Lr})),n.d(t,"k",(function(){return Gr})),n.d(t,"l",(function(){return Wr})),n.d(t,"m",(function(){return $r})),n.d(t,"n",(function(){return en})),n.d(t,"o",(function(){return ui})),n.d(t,"p",(function(){return Si})),n.d(t,"q",(function(){return Lt})),n.d(t,"r",(function(){return st})),n.d(t,"t",(function(){return on})),n.d(t,"u",(function(){return sn})),n.d(t,"v",(function(){return pn})),n.d(t,"w",(function(){return bn})),n.d(t,"x",(function(){return vn})),n.d(t,"y",(function(){return xr})),n.d(t,"z",(function(){return It})),n.d(t,"A",(function(){return Pt})),n.d(t,"B",(function(){return Tt})),n.d(t,"E",(function(){return ti})),n.d(t,"F",(function(){return Or})),n.d(t,"M",(function(){return Ut})),n.d(t,"N",(function(){return Mt})),n.d(t,"O",(function(){return St})),n.d(t,"P",(function(){return Zn})),n.d(t,"c",(function(){return so})),n.d(t,"d",(function(){return ko})),n.d(t,"g",(function(){return $o})),n.d(t,"K",(function(){return Mo})),n.d(t,"L",(function(){return Lo}));var r=n("9ff4");let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return i=this,e()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let v;const g=Symbol(""),b=Symbol("");class y{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=v,t=O;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,O=!0,p=1<<++f,f<=m?l(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,v=this.parent,O=t,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let O=!0;const E=[];function _(){E.push(O),O=!1}function T(){const e=E.pop();O=void 0===e||e}function I(e,t,n){if(O&&v){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;S(r,i)}}function S(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function k(e,t,n,i,o,s){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(g)),Object(r["u"])(e)&&u.push(c.get(b)));break;case"delete":Object(r["o"])(e)||(u.push(c.get(g)),Object(r["u"])(e)&&u.push(c.get(b)));break;case"set":Object(r["u"])(e)&&u.push(c.get(g));break}if(1===u.length)u[0]&&j(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);j(a(e))}}function j(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const C=Object(r["I"])("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["F"])),x=L(),R=L(!1,!0),D=L(!0),N=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=ke(this);for(let t=0,i=this.length;t<i;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ke)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){_();const n=ke(this)[t].apply(this,e);return T(),n}}),e}function L(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:me:t?pe:fe).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(N,i))return Reflect.get(N,i,o);const a=Reflect.get(n,i,o);if(Object(r["F"])(i)?A.has(i):C(i))return a;if(e||I(n,"get",i),t)return a;if(De(a)){const e=!s||!Object(r["t"])(i);return e?a.value:a}return Object(r["w"])(a)?e?Oe(a):ye(a):a}}const M=U(),F=U(!0);function U(e=!1){return function(t,n,i,o){let s=t[n];if(Te(s)&&De(s)&&!De(i))return!1;if(!e&&!Te(i)&&(Ie(i)||(i=ke(i),s=ke(s)),!Object(r["o"])(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===ke(o)&&(a?Object(r["j"])(i,s)&&k(t,"set",n,i,s):k(t,"add",n,i)),c}}function V(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&k(e,"delete",t,void 0,i),o}function B(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&A.has(t)||I(e,"has",t),n}function q(e){return I(e,"iterate",Object(r["o"])(e)?"length":g),Reflect.ownKeys(e)}const G={get:x,set:M,deleteProperty:V,has:B,ownKeys:q},$={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},H=Object(r["h"])({},G,{get:R,set:F}),z=e=>e,K=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const i=ke(e),o=ke(t);t!==o&&!n&&I(i,"get",t),!n&&I(i,"get",o);const{has:s}=K(i),a=r?z:n?Ae:Ce;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=ke(n),i=ke(e);return e!==i&&!t&&I(r,"has",e),!t&&I(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&I(ke(e),"iterate",g),Reflect.get(e,"size",e)}function X(e){e=ke(e);const t=ke(this),n=K(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function Y(e,t){t=ke(t);const n=ke(this),{has:i,get:o}=K(n);let s=i.call(n,e);s||(e=ke(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function Z(e){const t=ke(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=ke(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&k(t,"delete",e,void 0,o),s}function ee(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=ke(o),a=t?z:e?Ae:Ce;return!e&&I(s,"iterate",g),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ne(e,t,n){return function(...i){const o=this["__v_raw"],s=ke(o),a=Object(r["u"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?z:t?Ae:Ce;return!t&&I(s,"iterate",u?b:g),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return W(this,e)},get size(){return Q(this)},has:J,add:X,set:Y,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return Q(this)},has:J,add:X,set:Y,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)}),[e,n,t,r]}const[oe,se,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?se:oe;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ve=new WeakMap;function ge(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ge(Object(r["P"])(e))}function ye(e){return Te(e)?e:Ee(e,!1,G,le,fe)}function we(e){return Ee(e,!1,H,he,pe)}function Oe(e){return Ee(e,!0,$,de,me)}function Ee(e,t,n,i,o){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function _e(e){return Te(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Se(e){return _e(e)||Te(e)}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function je(e){return Object(r["g"])(e,"__v_skip",!0),e}const Ce=e=>Object(r["w"])(e)?ye(e):e,Ae=e=>Object(r["w"])(e)?Oe(e):e;function xe(e){O&&v&&(e=ke(e),S(e.dep||(e.dep=a())))}function Re(e,t){e=ke(e),e.dep&&j(e.dep)}function De(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return Le(e,!1)}function Pe(e){return Le(e,!0)}function Le(e,t){return De(e)?e:new Me(e,t)}class Me{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Ce(e)}get value(){return xe(this),this._value}set value(e){e=this.__v_isShallow?e:ke(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ce(e),Re(this,e))}}function Fe(e){return De(e)?e.value:e}const Ue={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ve(e){return _e(e)?e:new Proxy(e,Ue)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new y(e,()=>{this._dirty||(this._dirty=!0,Re(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=ke(this);return xe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let i,o;const s=Object(r["q"])(e);s?(i=e,o=r["d"]):(i=e.get,o=e.set);const a=new Be(i,o,s||!o,n);return a}Promise.resolve();function Ge(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){He(o,t,n)}return i}function $e(e,t,n,i){if(Object(r["q"])(e)){const o=Ge(e,t,n,i);return o&&Object(r["z"])(o)&&o.catch(e=>{He(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push($e(e[r],t,n,i));return o}function He(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Ge(s,null,10,[e,i,o])}ze(e,n,i,r)}function ze(e,t,n,r=!0){console.error(e)}let Ke=!1,We=!1;const Je=[];let Qe=0;const Xe=[];let Ye=null,Ze=0;const et=[];let tt=null,nt=0;const rt=Promise.resolve();let it=null,ot=null;function st(e){const t=it||rt;return e?t.then(this?e.bind(this):e):t}function at(e){let t=Qe+1,n=Je.length;while(t<n){const r=t+n>>>1,i=vt(Je[r]);i<e?t=r+1:n=r}return t}function ct(e){Je.length&&Je.includes(e,Ke&&e.allowRecurse?Qe+1:Qe)||e===ot||(null==e.id?Je.push(e):Je.splice(at(e.id),0,e),ut())}function ut(){Ke||We||(We=!0,it=rt.then(gt))}function lt(e){const t=Je.indexOf(e);t>Qe&&Je.splice(t,1)}function ht(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ut()}function dt(e){ht(e,Ye,Xe,Ze)}function ft(e){ht(e,tt,et,nt)}function pt(e,t=null){if(Xe.length){for(ot=t,Ye=[...new Set(Xe)],Xe.length=0,Ze=0;Ze<Ye.length;Ze++)Ye[Ze]();Ye=null,Ze=0,ot=null,pt(e,t)}}function mt(e){if(et.length){const e=[...new Set(et)];if(et.length=0,tt)return void tt.push(...e);for(tt=e,tt.sort((e,t)=>vt(e)-vt(t)),nt=0;nt<tt.length;nt++)tt[nt]();tt=null,nt=0}}const vt=e=>null==e.id?1/0:e.id;function gt(e){We=!1,Ke=!0,pt(e),Je.sort((e,t)=>vt(e)-vt(t));r["d"];try{for(Qe=0;Qe<Je.length;Qe++){const e=Je[Qe];e&&!1!==e.active&&Ge(e,null,14)}}finally{Qe=0,Je.length=0,mt(e),Ke=!1,it=null,(Je.length||Xe.length||et.length)&&gt(e)}}new Set;new Map;function bt(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["O"]))}let c;let u=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["N"])(Object(r["l"])(t))]),u&&$e(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,$e(l,e,6,o)}}function yt(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=yt(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function wt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Ot=null,Et=null;function _t(e){const t=Ot;return Ot=e,Et=e&&e.type.__scopeId||null,t}function Tt(e){Et=e}function It(){Et=null}function St(e,t=Ot,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Nr(-1);const i=_t(t),o=e(...n);return _t(i),r._d&&Nr(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function kt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:v}=e;let g,b;const y=_t(e);try{if(4&n.shapeFlag){const e=o||i;g=Qr(h.call(e,e,d,s,p,f,m)),b=u}else{const e=t;0,g=Qr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:jt(u)}}catch(O){Cr.length=0,He(O,e,1),g=$r(kr)}let w=g;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(r["v"])&&(b=Ct(b,a)),w=Kr(w,b))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),g=w,_t(y),g}const jt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},Ct=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function At(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||xt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?xt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!wt(u,n))return!0}}return!1}function xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!wt(n,o))return!0}return!1}function Rt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Dt=e=>e.__isSuspense;function Nt(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ft(e)}function Pt(e,t){if(ci){let n=ci.provides;const r=ci.parent&&ci.parent.provides;r===n&&(n=ci.provides=Object.create(r)),n[e]=t}else 0}function Lt(e,t,n=!1){const i=ci||Ot;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}function Mt(e,t){return Vt(e,null,t)}const Ft={};function Ut(e,t,n){return Vt(e,t,n)}function Vt(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=ci;let u,l,h=!1,d=!1;if(De(e)?(u=()=>e.value,h=Ie(e)):_e(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(_e),u=()=>e.map(e=>De(e)?e.value:_e(e)?Gt(e):Object(r["q"])(e)?Ge(e,c,2):void 0)):u=Object(r["q"])(e)?t?()=>Ge(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),$e(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>Gt(e())}let f=e=>{l=g.onStop=()=>{Ge(e,c,4)}};if(mi)return f=r["d"],t?n&&$e(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:Ft;const m=()=>{if(g.active)if(t){const e=g.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),$e(t,c,3,[e,p===Ft?void 0:p,f]),p=e)}else g.run()};let v;m.allowRecurse=!!t,v="sync"===o?m:"post"===o?()=>sr(m,c&&c.suspense):()=>{!c||c.isMounted?dt(m):m()};const g=new y(u,v);return t?n?m():p=g.run():"post"===o?sr(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,g)}}function Bt(e,t,n){const i=this.proxy,o=Object(r["E"])(e)?e.includes(".")?qt(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["q"])(t)?s=t:(s=t.handler,n=t);const a=ci;li(this);const c=Vt(o,s.bind(i),n);return a?li(a):hi(),c}function qt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Gt(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))Gt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{Gt(e,t)});else if(Object(r["y"])(e))for(const n in e)Gt(e[n],t);return e}function $t(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pn(()=>{e.isMounted=!0}),gn(()=>{e.isUnmounting=!0}),e}const Ht=[Function,Array],zt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},setup(e,{slots:t}){const n=ui(),r=$t();let i;return()=>{const o=t.default&&Zt(t.default(),!0);if(!o||!o.length)return;const s=ke(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return Qt(c);const u=Xt(c);if(!u)return Qt(c);const l=Jt(u,s,r,n);Yt(u,l);const h=n.subTree,d=h&&Xt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==kr&&(!Ur(u,d)||f)){const e=Jt(d,s,r,n);if(Yt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Qt(c);"in-out"===a&&u.type!==kr&&(e.delayLeave=(e,t,n)=>{const i=Wt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},Kt=zt;function Wt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Jt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:v,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),w=Wt(n,e),O=(e,t)=>{e&&$e(e,r,9,t)},E={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=w[y];o&&Ur(e,o)&&o.el._leaveCb&&o.el._leaveCb(),O(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=v||c,r=g||u,o=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,O(t?o:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();O(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),O(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return Jt(e,t,n,r)}};return E}function Qt(e){if(nn(e))return e=Kr(e),e.children=null,e}function Xt(e){return nn(e)?e.children?e.children[0]:void 0:e}function Yt(e,t){6&e.shapeFlag&&e.component?Yt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Ir?(128&o.patchFlag&&r++,n=n.concat(Zt(o.children,t))):(t||o.type!==kr)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function en(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const tn=e=>!!e.type.__asyncLoader;const nn=e=>e.type.__isKeepAlive;RegExp,RegExp;function rn(e,t){return Object(r["o"])(e)?e.some(e=>rn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function on(e,t){an(e,"a",t)}function sn(e,t){an(e,"da",t)}function an(e,t,n=ci){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(hn(t,r,n),n){let e=n.parent;while(e&&e.parent)nn(e.parent.vnode)&&cn(r,t,n,e),e=e.parent}}function cn(e,t,n,i){const o=hn(t,e,i,!0);bn(()=>{Object(r["L"])(i[t],o)},n)}function un(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function ln(e){return 128&e.shapeFlag?e.ssContent:e}function hn(e,t,n=ci,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;_(),li(n);const i=$e(t,n,e,r);return hi(),T(),i});return r?i.unshift(o):i.push(o),o}}const dn=e=>(t,n=ci)=>(!mi||"sp"===e)&&hn(e,t,n),fn=dn("bm"),pn=dn("m"),mn=dn("bu"),vn=dn("u"),gn=dn("bum"),bn=dn("um"),yn=dn("sp"),wn=dn("rtg"),On=dn("rtc");function En(e,t=ci){hn("ec",e,t)}let _n=!0;function Tn(e){const t=jn(e),n=e.proxy,i=e.ctx;_n=!1,t.beforeCreate&&Sn(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:v,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:w,unmounted:O,render:E,renderTracked:_,renderTriggered:T,errorCaptured:I,serverPrefetch:S,expose:k,inheritAttrs:j,components:C,directives:A,filters:x}=t,R=null;if(l&&In(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(r["q"])(e)&&(i[N]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["w"])(t)&&(e.data=ye(t))}if(_n=!0,s)for(const N in s){const e=s[N],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=Ii({get:t,set:o});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)kn(c[r],i,n,r);if(u){const e=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Pt(t,e[t])})}function D(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Sn(h,e,"c"),D(fn,d),D(pn,f),D(mn,p),D(vn,m),D(on,v),D(sn,g),D(En,I),D(On,_),D(wn,T),D(gn,y),D(bn,O),D(yn,S),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});E&&e.render===r["d"]&&(e.render=E),null!=j&&(e.inheritAttrs=j),C&&(e.components=C),A&&(e.directives=A)}function In(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Dn(e));for(const o in e){const n=e[o];let s;s=Object(r["w"])(n)?"default"in n?Lt(n.from||o,n.default,!0):Lt(n.from||o):Lt(n),De(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Sn(e,t,n){$e(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function kn(e,t,n,i){const o=i.includes(".")?qt(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Ut(o,n)}else if(Object(r["q"])(e))Ut(o,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>kn(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&Ut(o,i,e)}else 0}function jn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Cn(c,e,s,!0)),Cn(c,t,s)):c=t,o.set(t,c),c}function Cn(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Cn(e,o,n,!0),i&&i.forEach(t=>Cn(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=An[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const An={data:xn,props:Pn,emits:Pn,methods:Pn,computed:Pn,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:Pn,directives:Pn,watch:Ln,provide:xn,inject:Rn};function xn(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function Rn(e,t){return Pn(Dn(e),Dn(t))}function Dn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Nn(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Ln(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Nn(e[r],t[r]);return n}function Mn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Vr,1),e.propsDefaults=Object.create(null),Un(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:we(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Fn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=ke(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Un(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Vn(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const t=Object(r["e"])(a);o[t]=Vn(u,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&k(e,"set","$attrs")}function Un(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["A"])(u))continue;const l=t[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:wt(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(s){const t=ke(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=Vn(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Vn(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(li(o),i=r[n]=e.call(null,t),hi())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Bn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["q"])(e)){const i=e=>{u=!0;const[n,i]=Bn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);qn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(qn(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=Hn(Boolean,i.type),n=Hn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function qn(e){return"$"!==e[0]}function Gn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function $n(e,t){return Gn(e)===Gn(t)}function Hn(e,t){return Object(r["o"])(t)?t.findIndex(t=>$n(t,e)):Object(r["q"])(t)&&$n(t,e)?0:-1}const zn=e=>"_"===e[0]||"$stable"===e,Kn=e=>Object(r["o"])(e)?e.map(Qr):[Qr(e)],Wn=(e,t,n)=>{const r=St((...e)=>Kn(t(...e)),n);return r._c=!1,r},Jn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(zn(o))continue;const n=e[o];if(Object(r["q"])(n))t[o]=Wn(o,n,i);else if(null!=n){0;const e=Kn(n);t[o]=()=>e}}},Qn=(e,t)=>{const n=Kn(t);e.slots.default=()=>n},Xn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ke(t),Object(r["g"])(t,"_",n)):Jn(t,e.slots={})}else e.slots={},t&&Qn(e,t);Object(r["g"])(e.slots,Vr,1)},Yn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,Jn(t,o)),a=t}else t&&(Qn(e,t),a={default:1});if(s)for(const r in o)zn(r)||r in a||delete o[r]};function Zn(e,t){const n=Ot;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&Gt(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function er(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(_(),$e(c,n,8,[e.el,a,e,t]),T())}}function tr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nr=0;function rr(e,t){return function(n,i=null){null==i||Object(r["w"])(i)||(i=null);const o=tr(),s=new Set;let a=!1;const c=o.app={_uid:nr++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:ki,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["q"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["q"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=$r(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Ei(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function ir(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>ir(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(tn(i)&&!o)return;const s=4&i.shapeFlag?Ei(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):De(l)&&(l.value=null)),Object(r["q"])(u))Ge(u,c,12,[a,h]);else{const t=Object(r["E"])(u),i=De(u);if(t||i){const i=()=>{if(e.f){const n=t?h[u]:u.value;o?Object(r["o"])(n)&&Object(r["L"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?h[u]=[s]:(u.value=[s],e.k&&(h[e.k]=u.value))}else t?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):De(u)&&(u.value=a,e.k&&(h[e.k]=a))};a?(i.id=-1,sr(i,n)):i()}else 0}}function or(){}const sr=Nt;function ar(e){return cr(e)}function cr(e,t){or();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:v}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ur(e,t)&&(r=W(e),G(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Sr:b(e,t,n,r);break;case kr:w(e,t,n,r);break;case jr:null==e&&O(t,n,r,s);break;case Ir:D(e,t,n,r,i,o,s,a,c);break;default:1&h?S(e,t,n,r,i,o,s,a,c):6&h?N(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,Q)}null!=l&&i&&ir(l,e&&e.ref,o,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},O=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},S=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,i,o,s,a,c):A(e,t,i,o,s,a,c)},k=(e,t,n,o,c,u,l,d)=>{let f,p;const{type:v,props:g,shapeFlag:b,transition:y,patchFlag:w,dirs:O}=e;if(e.el&&void 0!==m&&-1===w)f=e.el=m(e.el);else{if(f=e.el=a(e.type,u,g&&g.is,g),8&b?h(f,e.children):16&b&&C(e.children,f,null,o,c,u&&"foreignObject"!==v,l,d),O&&er(e,null,o,"created"),g){for(const t in g)"value"===t||Object(r["A"])(t)||s(f,t,null,g[t],u,e.children,o,c,K);"value"in g&&s(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&ei(p,o,e)}j(f,e,e.scopeId,l,o)}O&&er(e,null,o,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;E&&y.beforeEnter(f),i(f,t,n),((p=g&&g.onVnodeMounted)||E||O)&&sr(()=>{p&&ei(p,o,e),E&&y.enter(f),O&&er(e,null,o,"mounted")},c)},j=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;j(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Xr(e[u]):Qr(e[u]);g(null,c,t,n,r,i,o,s,a)}},A=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let v;n&&ur(n,!1),(v=m.onVnodeBeforeUpdate)&&ei(v,n,t,e),f&&er(t,e,n,"beforeUpdate"),n&&ur(n,!0);const g=o&&"foreignObject"!==t.type;if(d?x(e.dynamicChildren,d,u,n,i,g,a):c||U(e,t,u,null,n,i,g,a,!1),l>0){if(16&l)R(u,t,p,m,n,i,o);else if(2&l&&p.class!==m.class&&s(u,"class",null,m.class,o),4&l&&s(u,"style",p.style,m.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,K)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||R(u,t,p,m,n,i,o);((v=m.onVnodeUpdated)||f)&&sr(()=>{v&&ei(v,n,t,e),f&&er(t,e,n,"updated")},i)},x=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ir||!Ur(c,u)||70&c.shapeFlag)?d(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},R=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["A"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(e,u,h,l,c,t.children,o,a,K)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,K);"value"in i&&s(e,"value",n.value,i.value)}},D=(e,t,n,r,o,s,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(h,n,r),i(d,n,r),C(t.children,n,d,o,s,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&lr(e,t,!0)):U(e,t,n,d,o,s,a,u,l)},N=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):P(t,n,r,i,o,s,c):L(e,t,c)},P=(e,t,n,r,i,o,s)=>{const a=e.component=ai(e,r,i);if(nn(e)&&(a.ctx.renderer=Q),vi(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=$r(kr);w(null,e,t,n)}}else M(a,e,t,n,i,o,s)},L=(e,t,n)=>{const r=t.component=e.component;if(At(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,lt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,ur(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ei(t,u,n,l),ur(e,!0);const f=kt(e);0;const p=e.subTree;e.subTree=f,g(p,f,d(p.el),W(p),e,o,s),n.el=f.el,null===h&&Rt(e,f.el),c&&sr(c,o),(t=n.props&&n.props.onVnodeUpdated)&&sr(()=>ei(t,u,n,l),o)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=tn(t);if(ur(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&ei(a,d,t),ur(e,!0),c&&Y){const n=()=>{e.subTree=kt(e),Y(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=kt(e);0,g(null,r,n,i,e,o,s),t.el=r.el}if(h&&sr(h,o),!f&&(a=u&&u.onVnodeMounted)){const e=t;sr(()=>ei(a,d,e),o)}256&t.shapeFlag&&e.a&&sr(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new y(c,()=>ct(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,ur(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Fn(e,t.props,r,n),Yn(e,t.children,n),_(),pt(void 0,e.update),T()},U=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(u,d,n,r,i,o,s,a,c);if(256&f)return void V(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&K(u,i,o),d!==u&&h(n,d)):16&l?16&p?B(u,d,n,r,i,o,s,a,c):K(u,i,o,!0):(8&l&&h(n,""),16&p&&C(d,n,r,i,o,s,a,c))},V=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Xr(t[f]):Qr(t[f]);g(e[f],r,n,null,o,s,a,c,u)}l>h?K(e,o,s,!0,!1,d):C(t,n,i,o,s,a,c,u,d)},B=(e,t,n,i,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Xr(t[l]):Qr(t[l]);if(!Ur(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Xr(t[f]):Qr(t[f]);if(!Ur(r,i))break;g(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)g(null,t[l]=u?Xr(t[l]):Qr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=d)G(e[l],o,s,!0),l++;else{const p=l,m=l,v=new Map;for(l=m;l<=f;l++){const e=t[l]=u?Xr(t[l]):Qr(t[l]);null!=e.key&&v.set(e.key,l)}let b,y=0;const w=f-m+1;let O=!1,E=0;const _=new Array(w);for(l=0;l<w;l++)_[l]=0;for(l=p;l<=d;l++){const r=e[l];if(y>=w){G(r,o,s,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(b=m;b<=f;b++)if(0===_[b-m]&&Ur(r,t[b])){i=b;break}void 0===i?G(r,o,s,!0):(_[i-m]=l+1,i>=E?E=i:O=!0,g(r,t[i],n,null,o,s,a,c,u),y++)}const T=O?hr(_):r["a"];for(b=T.length-1,l=w-1;l>=0;l--){const e=m+l,r=t[e],d=e+1<h?t[e+1].el:i;0===_[l]?g(null,r,n,d,o,s,a,c,u):O&&(b<0||l!==T[b]?q(r,n,d,2):b--)}}},q=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,Q);if(a===Ir){i(s,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===jr)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,t,n),sr(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&ir(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!tn(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&ei(m,t,e),6&l)z(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&er(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Q,r):u&&(o!==Ir||h>0&&64&h)?K(u,t,n,!1,!0):(o===Ir&&384&h||!i&&16&l)&&K(c,t,n),r&&$(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&sr(()=>{m&&ei(m,t,e),f&&er(e,null,t,"unmounted")},n)},$=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ir)return void H(n,r);if(t===jr)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},H=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},z=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,G(a,e,t,n)),c&&sr(c,t),sr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},K=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)G(e[s],t,n,r,i)},W=e=>6&e.shapeFlag?W(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),mt(),t._vnode=e},Q={p:g,um:G,m:q,r:$,mt:P,mc:C,pc:U,pbc:x,n:W,o:e};let X,Y;return t&&([X,Y]=t(Q)),{render:J,hydrate:X,createApp:rr(J,X)}}function ur({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function lr(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=Xr(o[r]),t.el=e.el),n||lr(e,t))}}function hr(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const dr=e=>e.__isTeleport,fr=e=>e&&(e.disabled||""===e.disabled),pr=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,mr=(e,t)=>{const n=e&&e.to;if(Object(r["E"])(n)){if(t){const e=t(n);return e}return null}return n},vr={__isTeleport:!0,process(e,t,n,r,i,o,s,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:v}}=u,g=fr(t.props);let{shapeFlag:b,children:y,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");f(e,n,r),f(u,n,r);const h=t.target=mr(t.props,p),d=t.targetAnchor=m("");h&&(f(d,h),s=s||pr(h));const v=(e,t)=>{16&b&&l(y,e,t,i,o,s,a,c)};g?v(n,u):h&&v(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=fr(e.props),v=m?n:l,b=m?r:f;if(s=s||pr(l),w?(d(e.dynamicChildren,w,v,i,o,s,a),lr(e,t,!0)):c||h(e,t,v,b,i,o,s,a,!1),g)m||gr(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=mr(t.props,p);e&&gr(t,e,null,u,0)}else m&&gr(t,l,f,u,1)}},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=e;if(h&&o(l),(s||!fr(d))&&(o(u),16&a))for(let f=0;f<c.length;f++){const e=c[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:gr,hydrate:br};function gr(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===o;if(h&&r(s,t,n),(!h||fr(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],t,n,2);h&&r(a,t,n)}function br(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:c}},u){const l=t.target=mr(t.props,c);if(l){const c=l._lpa||l.firstChild;16&t.shapeFlag&&(fr(t.props)?(t.anchor=u(s(e),t,a(e),n,r,i,o),t.targetAnchor=c):(t.anchor=s(e),t.targetAnchor=u(c,t,l,n,r,i,o)),l._lpa=t.targetAnchor&&s(t.targetAnchor))}return t.anchor&&s(t.anchor)}const yr=vr,wr="components";function Or(e,t){return _r(wr,e,!0,t)||e}const Er=Symbol();function _r(e,t,n=!0,i=!1){const o=Ot||ci;if(o){const n=o.type;if(e===wr){const e=_i(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Tr(o[e]||n[e],t)||Tr(o.appContext[e],t);return!s&&i?n:s}}function Tr(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Ir=Symbol(void 0),Sr=Symbol(void 0),kr=Symbol(void 0),jr=Symbol(void 0),Cr=[];let Ar=null;function xr(e=!1){Cr.push(Ar=e?null:[])}function Rr(){Cr.pop(),Ar=Cr[Cr.length-1]||null}let Dr=1;function Nr(e){Dr+=e}function Pr(e){return e.dynamicChildren=Dr>0?Ar||r["a"]:null,Rr(),Dr>0&&Ar&&Ar.push(e),e}function Lr(e,t,n,r,i,o){return Pr(Gr(e,t,n,r,i,o,!0))}function Mr(e,t,n,r,i){return Pr($r(e,t,n,r,i,!0))}function Fr(e){return!!e&&!0===e.__v_isVNode}function Ur(e,t){return e.type===t.type&&e.key===t.key}const Vr="__vInternal",Br=({key:e})=>null!=e?e:null,qr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||De(e)||Object(r["q"])(e)?{i:Ot,r:e,k:t,f:!!n}:e:null;function Gr(e,t=null,n=null,i=0,o=null,s=(e===Ir?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Br(t),ref:t&&qr(t),scopeId:Et,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Yr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Dr>0&&!a&&Ar&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Ar.push(u),u}const $r=Hr;function Hr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Er||(e=kr),Fr(e)){const r=Kr(e,t,!0);return n&&Yr(r,n),r}if(Ti(e)&&(e=e.__vccOpts),t){t=zr(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(Se(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:Dt(e)?128:dr(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Gr(e,t,n,i,o,a,s,!0)}function zr(e){return e?Se(e)||Vr in e?Object(r["h"])({},e):e:null}function Kr(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?Zr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Br(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(qr(t)):[o,qr(t)]:qr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ir?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kr(e.ssContent),ssFallback:e.ssFallback&&Kr(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Wr(e=" ",t=0){return $r(Sr,null,e,t)}function Jr(e="",t=!1){return t?(xr(),Mr(kr,null,e)):$r(kr,null,e)}function Qr(e){return null==e||"boolean"===typeof e?$r(kr):Object(r["o"])(e)?$r(Ir,null,e.slice()):"object"===typeof e?Xr(e):$r(Sr,null,String(e))}function Xr(e){return null===e.el||e.memo?e:Kr(e)}function Yr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Yr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Vr in t?3===r&&Ot&&(1===Ot.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ot}}else Object(r["q"])(t)?(t={default:t,_ctx:Ot},n=32):(t=String(t),64&i?(n=16,t=[Wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],o=i[e];!o||n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function ei(e,t,n,r=null){$e(e,t,7,[n,r])}function ti(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const ni=e=>e?di(e)?Ei(e)||e.proxy:ni(e.parent):null,ri=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ni(e.parent),$root:e=>ni(e.root),$emit:e=>e.emit,$options:e=>jn(e),$forceUpdate:e=>()=>ct(e.update),$nextTick:e=>st.bind(e.proxy),$watch:e=>Bt.bind(e)}),ii={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];_n&&(a[t]=0)}}const h=ri[t];let d,f;return h?("$attrs"===t&&I(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return o!==r["b"]&&Object(r["k"])(o,t)?(o[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(ri,a)||Object(r["k"])(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const oi=tr();let si=0;function ai(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||oi,a={uid:si++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bn(i,s),emitsOptions:yt(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=bt.bind(null,a),e.ce&&e.ce(a),a}let ci=null;const ui=()=>ci||Ot,li=e=>{ci=e,e.scope.on()},hi=()=>{ci&&ci.scope.off(),ci=null};function di(e){return 4&e.vnode.shapeFlag}let fi,pi,mi=!1;function vi(e,t=!1){mi=t;const{props:n,children:r}=e.vnode,i=di(e);Mn(e,n,i,t),Xn(e,r);const o=i?gi(e,t):void 0;return mi=!1,o}function gi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=je(new Proxy(e.ctx,ii));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Oi(e):null;li(e),_();const o=Ge(i,e,0,[e.props,n]);if(T(),hi(),Object(r["z"])(o)){if(o.then(hi,hi),t)return o.then(n=>{bi(e,n,t)}).catch(t=>{He(t,e,0)});e.asyncDep=o}else bi(e,o,t)}else yi(e,t)}function bi(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Ve(t)),yi(e,n)}function yi(e,t,n){const i=e.type;if(!e.render){if(!t&&fi&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=fi(t,c)}}e.render=i.render||r["d"],pi&&pi(e)}li(e),_(),Tn(e),T(),hi()}function wi(e){return new Proxy(e.attrs,{get(t,n){return I(e,"get","$attrs"),t[n]}})}function Oi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=wi(e))},slots:e.slots,emit:e.emit,expose:t}}function Ei(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ve(je(e.exposed)),{get(t,n){return n in t?t[n]:n in ri?ri[n](e):void 0}}))}function _i(e){return Object(r["q"])(e)&&e.displayName||e.name}function Ti(e){return Object(r["q"])(e)&&"__vccOpts"in e}const Ii=(e,t)=>qe(e,t,mi);function Si(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?Fr(t)?$r(e,null,[t]):$r(e,t):$r(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Fr(n)&&(n=[n]),$r(e,t,n))}Symbol("");const ki="3.2.31",ji="http://www.w3.org/2000/svg",Ci="undefined"!==typeof document?document:null,Ai=Ci&&Ci.createElement("template"),xi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Ci.createElementNS(ji,e):Ci.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ci.createTextNode(e),createComment:e=>Ci.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ci.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{Ai.innerHTML=r?`<svg>${e}</svg>`:e;const i=Ai.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ri(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Di(e,t,n){const i=e.style,o=Object(r["E"])(n);if(n&&!o){for(const e in n)Pi(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&Pi(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ni=/\s*!important$/;function Pi(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Pi(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Fi(e,t);Ni.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ni,""),"important"):e[i]=n}}const Li=["Webkit","Moz","ms"],Mi={};function Fi(e,t){const n=Mi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Mi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Li.length;r++){const n=Li[r]+i;if(n in e)return Mi[t]=n}return t}const Ui="http://www.w3.org/1999/xlink";function Vi(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ui,t.slice(6,t.length)):e.setAttributeNS(Ui,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Bi(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let qi=Date.now,Gi=!1;if("undefined"!==typeof window){qi()>document.createEvent("Event").timeStamp&&(qi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Gi=!!(e&&Number(e[1])<=53)}let $i=0;const Hi=Promise.resolve(),zi=()=>{$i=0},Ki=()=>$i||(Hi.then(zi),$i=qi());function Wi(e,t,n,r){e.addEventListener(t,n,r)}function Ji(e,t,n,r){e.removeEventListener(t,n,r)}function Qi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Yi(t);if(r){const s=o[t]=Zi(r,i);Wi(e,n,s,a)}else s&&(Ji(e,n,s,a),o[t]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function Yi(e){let t;if(Xi.test(e)){let n;t={};while(n=e.match(Xi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Zi(e,t){const n=e=>{const r=e.timeStamp||qi();(Gi||r>=n.attached-1)&&$e(eo(e,n.value),t,5,[e])};return n.value=e,n.attached=Ki(),n}function eo(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const to=/^on[a-z]/,no=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Ri(e,i,o):"style"===t?Di(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||Qi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ro(e,t,i,o))?Bi(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Vi(e,t,i,o))};function ro(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&to.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!to.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const io="transition",oo="animation",so=(e,{slots:t})=>Si(Kt,ho(e),t);so.displayName="Transition";const ao={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},co=so.props=Object(r["h"])({},Kt.props,ao),uo=(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)},lo=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function ho(e){const t={};for(const r in e)r in ao||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=fo(o),v=m&&m[0],g=m&&m[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:w,onLeave:O,onLeaveCancelled:E,onBeforeAppear:_=b,onAppear:T=y,onAppearCancelled:I=w}=t,S=(e,t,n)=>{vo(e,t?h:c),vo(e,t?l:a),n&&n()},k=(e,t)=>{vo(e,p),vo(e,f),t&&t()},j=e=>(t,n)=>{const r=e?T:y,o=()=>S(t,e,n);uo(r,[t,o]),go(()=>{vo(t,e?u:s),mo(t,e?h:c),lo(r)||yo(t,i,v,o)})};return Object(r["h"])(t,{onBeforeEnter(e){uo(b,[e]),mo(e,s),mo(e,a)},onBeforeAppear(e){uo(_,[e]),mo(e,u),mo(e,l)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){const n=()=>k(e,t);mo(e,d),_o(),mo(e,f),go(()=>{vo(e,d),mo(e,p),lo(O)||yo(e,i,g,n)}),uo(O,[e,n])},onEnterCancelled(e){S(e,!1),uo(w,[e])},onAppearCancelled(e){S(e,!0),uo(I,[e])},onLeaveCancelled(e){k(e),uo(E,[e])}})}function fo(e){if(null==e)return null;if(Object(r["w"])(e))return[po(e.enter),po(e.leave)];{const t=po(e);return[t,t]}}function po(e){const t=Object(r["O"])(e);return t}function mo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function vo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bo=0;function yo(e,t,n,r){const i=e._endId=++bo,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=wo(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function wo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(io+"Delay"),o=r(io+"Duration"),s=Oo(i,o),a=r(oo+"Delay"),c=r(oo+"Duration"),u=Oo(a,c);let l=null,h=0,d=0;t===io?s>0&&(l=io,h=s,d=o.length):t===oo?u>0&&(l=oo,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?io:oo:null,d=l?l===io?o.length:c.length:0);const f=l===io&&/\b(transform|all)(,|$)/.test(n[io+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Oo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>Eo(t)+Eo(e[n])))}function Eo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function _o(){return document.body.offsetHeight}const To=new WeakMap,Io=new WeakMap,So={name:"TransitionGroup",props:Object(r["h"])({},co,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ui(),r=$t();let i,o;return vn(()=>{if(!i.length)return;const t=e.moveClass||(e.name||"v")+"-move";if(!xo(i[0].el,n.vnode.el,t))return;i.forEach(jo),i.forEach(Co);const r=i.filter(Ao);_o(),r.forEach(e=>{const n=e.el,r=n.style;mo(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,vo(n,t))};n.addEventListener("transitionend",i)})}),()=>{const s=ke(e),a=ho(s);let c=s.tag||Ir;i=o,o=t.default?Zt(t.default()):[];for(let e=0;e<o.length;e++){const t=o[e];null!=t.key&&Yt(t,Jt(t,a,r,n))}if(i)for(let e=0;e<i.length;e++){const t=i[e];Yt(t,Jt(t,a,r,n)),To.set(t,t.el.getBoundingClientRect())}return $r(c,null,o)}}},ko=So;function jo(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Co(e){Io.set(e,e.el.getBoundingClientRect())}function Ao(e){const t=To.get(e),n=Io.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function xo(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=wo(r);return i.removeChild(r),o}const Ro=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function Do(e){e.target.composing=!0}function No(e){const t=e.target;t.composing&&(t.composing=!1,Po(t,"input"))}function Po(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Lo={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Ro(o);const s=i||o.props&&"number"===o.props.type;Wi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["O"])(i)),e._assign(i)}),n&&Wi(e,"change",()=>{e.value=e.value.trim()}),t||(Wi(e,"compositionstart",Do),Wi(e,"compositionend",No),Wi(e,"change",No))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=Ro(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},Mo={deep:!0,created(e,t,n){e._assign=Ro(n),Wi(e,"change",()=>{const t=e._modelValue,n=Uo(e),i=e.checked,o=e._assign;if(Object(r["o"])(t)){const e=Object(r["H"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["C"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(Vo(e,i))})},mounted:Fo,beforeUpdate(e,t,n){e._assign=Ro(n),Fo(e,t,n)}};function Fo(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["H"])(t,i.props.value)>-1:Object(r["C"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["G"])(t,Vo(e,!0)))}function Uo(e){return"_value"in e?e._value:e.value}function Vo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Bo=Object(r["h"])({patchProp:no},xi);let qo;function Go(){return qo||(qo=ar(Bo))}const $o=(...e)=>{const t=Go().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Ho(e);if(!i)return;const o=t._component;Object(r["q"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Ho(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(e){return d+p+h+e+d+"/"+p+h},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete w[f][s[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=i(e),n=new v,v[f]=null,n[m]=e):n=w(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),v=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=v.IteratorPrototype,w=v.BUGGY_SAFARI_ITERATORS,O=p("iterator"),E="keys",_="values",T="entries",I=function(){return this};e.exports=function(e,t,n,s,p,v,S){c(n,t,s);var k,j,C,A=function(e){if(e===p&&P)return P;if(!w&&e in D)return D[e];switch(e){case E:return function(){return new n(this,e)};case _:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},x=t+" Iterator",R=!1,D=e.prototype,N=D[O]||D["@@iterator"]||p&&D[p],P=!w&&N||A(p),L="Array"==t&&D.entries||N;if(L&&(k=u(L.call(new e)),k!==Object.prototype&&k.next&&(o||u(k)===y||(l?l(k,y):a(k[O])||f(k,O,I)),h(k,x,!0,!0),o&&(m[x]=I))),g&&p==_&&N&&N.name!==_&&(!o&&b?d(D,"name",_):(R=!0,P=function(){return i(N,this)})),p)if(j={values:A(_),keys:v?P:A(E),entries:A(T)},S)for(C in j)(w||R||!(C in D))&&f(D,C,j[C]);else r({target:t,proto:!0,forced:w||R},j);return o&&!S||D[O]===P||f(D,O,P,{name:p}),m[t]=P,j}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return jr})),n.d(t,"b",(function(){return Ar})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Rr})),n.d(t,"e",(function(){return xr})),n.d(t,"f",(function(){return Dr})),n.d(t,"g",(function(){return Nr})),n.d(t,"h",(function(){return Sr})),n.d(t,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function v(e,t,n){return v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,v.apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function y(){this.s=this.s,this.o=this.o}var w=0,O={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete O[e]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},_=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function T(e){e:{var t=qn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function I(e){return Array.prototype.concat.apply([],arguments)}function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e){return/^[\s\xa0]*$/.test(e)}var j,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var R=a.navigator;if(R){var D=R.userAgent;if(D){j=D;break e}}j=""}function N(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function U(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var V,B=A(j,"Opera"),q=A(j,"Trident")||A(j,"MSIE"),G=A(j,"Edge"),$=G||q,H=A(j,"Gecko")&&!(A(j.toLowerCase(),"webkit")&&!A(j,"Edge"))&&!(A(j,"Trident")||A(j,"MSIE"))&&!A(j,"Edge"),z=A(j.toLowerCase(),"webkit")&&!A(j,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var W="",J=function(){var e=j;return H?/rv:([^\);]+)(\)|;)/.exec(e):G?/Edge\/([\d\.]+)/.exec(e):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):B?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(J&&(W=J?J[1]:""),q){var Q=K();if(null!=Q&&Q>parseFloat(W)){V=String(Q);break e}}V=W}var X,Y={};function Z(){return U((function(){let e=0;const t=C(String(V)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||x(0==i[2].length,0==o[2].length)||x(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(a.document&&q){var ee=K();X=ee||(parseInt(V,10)||void 0)}else X=void 0;var te=X,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(H){e:{try{F(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:oe[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},b(ie,re);var oe={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=E(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=de(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new ce(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return be(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)me(e,t[o],n,r,i);return null}return n=Ie(n),e&&e[se]?e.N(t,n,l(r)?!!r.capture:!!r,i):ve(e,t,n,!1,r,i)}function ve(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=_e(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Oe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}var t=Ee;return e}function be(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)be(e,t[o],n,r,i);return null}return n=Ie(n),e&&e[se]?e.O(t,n,l(r)?!!r.capture:!!r,i):ve(e,t,n,!0,r,i)}function ye(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)ye(e,t[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=Ie(n),e&&e[se]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=de(o,n,r,i),-1<n&&(ue(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=_e(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[se])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Oe(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_e(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function Oe(e){return e in pe?pe[e]:pe[e]="on"+e}function Ee(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function _e(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Se(){y.call(this),this.i=new le(this),this.P=this,this.I=null}function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=je(s,r,!0,t)&&i}if(s=t.g=e,i=je(s,r,!0,t)&&i,i=je(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=je(s,r,!1,t)&&i}function je(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&he(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(Se,y),Se.prototype[se]=!0,Se.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Se.prototype.M=function(){if(Se.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=a.JSON.stringify;function Ae(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ne,e=>e.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){Re||Me(),Fe||(Re(),Fe=!0),Ue.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Re=function(){e.then(Ve)}}var Fe=!1,Ue=new xe;function Ve(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Be(e,t){Se.call(this),this.h=e||1,this.g=t||a,this.j=v(this.kb,this),this.l=Date.now()}function qe(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ge(e,t,n){if("function"===typeof e)n&&(e=v(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=v(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function $e(e){e.g=Ge(()=>{e.g=null,e.i&&(e.i=!1,$e(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Be,Se),r=Be.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(qe(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.Z.M.call(this),qe(this),delete this.g};class He extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){y.call(this),this.h=e,this.g={}}b(ze,y);var Ke=[];function We(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var o=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Je(e){N(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Qe(){this.g=!0}function Xe(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function Ye(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ce(n)}catch(a){return t}}ze.prototype.M=function(){ze.Z.M.call(this),Je(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Se}function ot(e){re.call(this,nt.Ma,e)}function st(e){const t=it();ke(t,new ot(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();ke(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",b(ot,re),nt.STAT_EVENT="statevent",b(at,re),nt.Na="timingevent",b(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var vt,gt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bt(){re.call(this,"d")}function yt(){re.call(this,"c")}function wt(){}function Ot(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ze(this),this.P=_t,e=$?125:void 0,this.W=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}b(bt,re),b(yt,re),b(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},vt=new wt;var _t=45e3,Tt={},It={};function St(e,t,n){e.K=1,e.v=Xt(Ht(t)),e.s=n,e.U=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),xt(e),e.A=Ht(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Et,e.g=yr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new He(v(e.Ia,e,e.g),e.O)),We(e.V,e.g,"readystatechange",e.gb),t=e.H?P(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),st(1),Xe(e.j,e.u,e.A,e.m,e.X,e.s)}function jt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==It){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}jt(e)&&r!=It&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Nt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?It:(t=t.substr(r,n),e.C=r+n,t)))}function xt(e){e.Y=Date.now()+e.P,Rt(e,e.P)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(v(e.eb,e),t)}function Dt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.G||e.I||pr(e.l,e)}function Pt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.W),Je(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||On(n.i,e)))if(n.I=e.N,!e.J&&On(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(v(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else vr(n,11)}else if((e.J||n.g==e)&&fr(n),!k(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.i;!o.g&&(A(e,"spdy")||A(e,"quic")||A(e,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(En(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Qt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=e;if(r.oa=br(r,r.H?r.la:null,r.W),s.J){_n(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Dt(a),xt(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||vr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?vr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)_(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ut)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Bt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Bt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=Ot.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Wn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Wn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||$||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=h||7==t||st(8==t||0>=d?3:2),Dt(this);var n=this.g.ba();this.N=n;t:if(jt(this)){var r=Jn(this.g);e="";var i=r.length,o=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Nt(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Pt(this),Nt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.U?(Ct(this,h,s),$&&this.i&&3==h&&(We(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,s,null),Lt(this,s)),4==h&&Pt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),Nt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Wn(this.g),t=this.g.ga();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(st(3),ct(17)),Pt(this),this.o=2,Nt(this)):Rt(this,this.Y-e)},r=Ut.prototype,r.R=function(){Vt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Vt(this),this.g.concat()},r.get=function(e,t){return Bt(this.h,e)?this.h[e]:t},r.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};var qt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof $t){this.g=void 0!==t?t:e.g,zt(this,e.j),this.s=e.s,Kt(this,e.i),Wt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),Jt(this,n),this.o=e.o}else e&&(n=String(e).match(qt))?(this.g=!!t,zt(this,n[1]||"",!0),this.s=en(n[2]||""),Kt(this,n[3]||"",!0),Wt(this,n[4]),this.l=en(n[5]||"",!0),Jt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Ht(e){return new $t(e)}function zt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t,n){e.i=n?en(t,!0):t}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Jt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Qt(e,t,n){e.h.set(t,n)}function Xt(e){return Qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e){return e instanceof $t?Ht(e):new $t(e,void 0)}function Zt(e,t,n,r){var i=new $t(null,void 0);return e&&zt(i,e),t&&Kt(i,t),n&&Wt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Ut,e.h=0,e.i&&Gt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vt(e)))}function dn(e,t){return ln(e),t=pn(e,t),Bt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),S(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){_(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=I(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=I(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};var vn=class{constructor(e,t){this.h=e,this.g=t}};function gn(e){this.l=e||bn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bn=10;function yn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function On(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function En(e,t){e.g?e.g.add(t):e.h=t}function _n(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Tn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function In(){}function Sn(){this.g=new In}function kn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function jn(e,t){const n=new Qe;if(a.Image){const r=new Image;r.onload=g(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=g(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(Cn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function An(e){this.l=e.$b||null,this.j=e.ib||!1}function xn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},In.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},In.prototype.parse=function(e){return a.JSON.parse(e,void 0)},b(An,ft),An.prototype.g=function(){return new xn(this.l,this.j)},An.prototype.i=function(e){return function(){return e}}({}),b(xn,Se);var Rn=0;function Dn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nn(this)),this.readyState=Rn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Nn(this):Pn(this),3==this.readyState&&Dn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Nn(this))},r.Ta=function(e){this.g&&(this.response=e,Nn(this))},r.ha=function(){this.g&&Nn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(e){Se.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}b(Mn,Se);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(e){return q&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function qn(e){return"content-type"==e.toLowerCase()}function Gn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,$n(e),zn(e)}function $n(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function Hn(e){if(e.h&&"undefined"!=typeof s&&(!e.C[1]||4!=Wn(e)||2!=e.ba()))if(e.v&&4==Wn(e))Ge(e.Fa,0,e);else if(ke(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const s=e.ba();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){var i=String(e.H).match(qt)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var c=2<Wn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",$n(e)}}finally{zn(e)}}}function zn(e,t){if(e.g){Kn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function Jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Qn(e){let t="";return N(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Qt(e,t,n))}function Yn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Qe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,e),this.$a=Yn("retryDelaySeedMs",1e4,e),this.Ya=Yn("forwardChannelMaxRetries",2,e),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new gn(e&&e.concurrentRequestLimit),this.Ca=new Sn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Ht(e.F);Qt(n,"SID",e.J),Qt(n,"RID",t),Qt(n,"TYPE","terminate"),ar(e,n),t=new Ot(e,e.h,t,void 0),t.K=2,t.v=Xt(Ht(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=yr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xt(t)}gr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new vn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){yn(e.i)||e.m||(e.m=!0,Le(e.Ha,e),e.C=0)}function or(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(v(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function sr(e,t){var n;n=t?t.m:e.V++;const r=Ht(e.F);Qt(r,"SID",e.J),Qt(r,"RID",n),Qt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Xn(r,e.o,e.s),n=new Ot(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),En(e.i,n),St(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Qt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?v(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{kn(c,e,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Le(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(v(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new Ot(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ht(e.oa);Qt(t,"RID","rpc"),Qt(t,"SID",e.J),Qt(t,"CI",e.N?"0":"1"),Qt(t,"AID",e.U),ar(e,t),Qt(t,"TYPE","xmlhttp"),e.o&&e.s&&Xn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Xt(Ht(t)),n.s=null,n.U=!0,kt(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!On(e.i,t))return;n=t.D,_n(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),ke(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&or(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:vr(e,5);break;case 4:vr(e,10);break;case 3:vr(e,6);break;default:vr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function vr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=v(e.jb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||zt(n,"https"),Xt(n)),jn(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),gr(e),nr(e)}function gr(e){e.G=0,e.I=-1,e.j&&(0==Tn(e.i).length&&0==e.l.length||(e.i.i.length=0,S(e.l),e.l.length=0),e.j.ua())}function br(e,t,n){let r=Yt(n);if(""!=r.i)t&&Kt(r,t+"."+r.i),Wt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&N(e.aa,(function(e,t){Qt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Qt(r,t,n),Qt(r,"VER",e.ma),ar(e,r),r}function yr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new An({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function Or(){if(q&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Er(e,t){Se.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!k(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ir(this)}function _r(e){bt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Tr(){yt.call(this),this.status=1}function Ir(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?pt(this.u):pt(vt),this.g.onreadystatechange=v(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void Gn(this,o)}e=n||"";const i=new Ut(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=T(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=E(Vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.pa,this)):this.A=Ge(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Gn(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),zn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ln(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ot(this,this.h,e,void 0);let o=this.s;if(this.P&&(o?(o=P(o),M(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Ht(this.F),Qt(n,"RID",e),Qt(n,"CVER",22),this.D&&Qt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Xn(n,this.o,o),En(this.i,i),this.Ra&&Qt(n,"TYPE","init"),this.ja?(Qt(n,"$req",t),Qt(n,"SID","null"),i.$=!0,St(i,n,null)):St(i,n,t),this.G=2}}else 3==this.G&&(e?sr(this,e):0==this.l.length||yn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(v(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Or.prototype.g=function(e,t){return new Er(e,t)},b(Er,Se),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Le(v(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=br(e,null,e.W),ir(e)},Er.prototype.close=function(){er(this.g)},Er.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ce(e),rr(this.g,t)):rr(this.g,e)},Er.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Er.Z.M.call(this)},b(_r,bt),b(Tr,yt),b(Ir,wr),Ir.prototype.xa=function(){ke(this.g,"a")},Ir.prototype.wa=function(e){ke(this.g,new _r(e))},Ir.prototype.va=function(e){ke(this.g,new Tr(e))},Ir.prototype.ua=function(){ke(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=o.createWebChannelTransport=function(){return new Or},kr=o.getStatEventTarget=function(){return it()},jr=o.ErrorCode=ht,Cr=o.EventType=dt,Ar=o.Event=nt,xr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=o.FetchXmlHttpFactory=An,Dr=o.WebChannel=mt,Nr=o.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{l=t.regeneratorRuntime=u?e.exports:{},l.wrap=w;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={},v={};v[s]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(R([])));b&&b!==r&&i.call(b,s)&&(v=b);var y=T.prototype=E.prototype=Object.create(v);_.prototype=y.constructor=T,T.constructor=_,T[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(y),e},l.awrap=function(e){return{__await:e}},I(S.prototype),S.prototype[a]=function(){return this},l.AsyncIterator=S,l.async=function(e,t,n,r){var i=new S(w(e,t,n,r));return l.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(y),y[c]="Generator",y[s]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function w(e,t,n,r){var i=t&&t.prototype instanceof E?t:E,o=Object.create(i.prototype),s=new x(r||[]);return o._invoke=k(e,n,s),o}function O(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function E(){}function _(){}function T(){}function I(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){function t(n,r,o,s){var a=O(e[n],e,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,s)}))}s(a.arg)}var n;function r(e,r){function i(){return new Promise((function(n,i){t(e,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function k(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=j(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=O(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,j(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=O(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,m;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(e){if(e){var t=e[s];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){while(++r<e.length)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return J})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return o})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return K})),n.d(t,"u",(function(){return P})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return B})),n.d(t,"x",(function(){return j})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return q})),n.d(t,"A",(function(){return W})),n.d(t,"B",(function(){return g})),n.d(t,"C",(function(){return L})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return V})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return w})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return u})),n.d(t,"L",(function(){return x})),n.d(t,"M",(function(){return O})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return se})),n.d(t,"P",(function(){return H}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||B(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v=r(p),g=r(m);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return!(!n||!r)&&b(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>y(e,t))}const O=e=>U(e)?e:null==e?"":N(e)||B(e)&&(e.toString===G||!F(e.toString))?JSON.stringify(e,E,2):String(e),E=(e,t)=>t&&t.__v_isRef?E(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||N(t)||z(t)?t:String(t),_={},T=[],I=()=>{},S=()=>!1,k=/^on[^a-z]/,j=e=>k.test(e),C=e=>e.startsWith("onUpdate:"),A=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,D=(e,t)=>R.call(e,t),N=Array.isArray,P=e=>"[object Map]"===$(e),L=e=>"[object Set]"===$(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,V=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,q=e=>B(e)&&F(e.then)&&F(e.catch),G=Object.prototype.toString,$=e=>G.call(e),H=e=>$(e).slice(8,-1),z=e=>"[object Object]"===$(e),K=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Y=Q(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=Q(e=>e.replace(Z,"-$1").toLowerCase()),te=Q(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=Q(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),b=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,w=h.document,O=h.process,E=h.Promise,_=f(h,"queueMicrotask"),T=_&&_.value;T||(r=function(){var e,t;b&&(e=O.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},m||b||g||!y||!w?!v&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=d(u.then,u),s=function(){l(r)}):b?s=function(){O.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=w.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,v,g){for(var b,y,w=s(p),O=o(w),E=r(m,v),_=a(O),T=0,I=g||c,S=t?I(p,_):n||d?I(p,0):void 0;_>T;T++)if((f||T in O)&&(b=O[T],y=E(b,T,w),e))if(t)S[T]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return T;case 2:u(S,b)}else switch(e){case 4:return!1;case 7:u(S,b)}return h?-1:i||l?l:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d511:function(e,t,n){"use strict";n.d(t,"a",(function(){return ce})),n.d(t,"b",(function(){return ue})),n.d(t,"c",(function(){return he})),n.d(t,"d",(function(){return le}));var r=n("7a23");function i(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,i),r}function o({visible:e=!0,features:t=0,...n}){var r;if(e||2&t&&n.props.static)return s(n);if(1&t){let e=null==(r=n.props.unmount)||r?0:1;return i(e,{[0](){return null},[1](){return s({...n,props:{...n.props,hidden:!0,style:{display:"none"}}})}})}return s(n)}function s({props:e,attrs:t,slots:n,slot:i,name:o}){var s;let{as:u,...l}=a(e,["unmount","static"]),h=null==(s=n.default)?void 0:s.call(n,i);if("template"===u){if(Object.keys(l).length>0||Object.keys(t).length>0){let[e,...n]=null!=h?h:[];if(!c(e)||n.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(e=>"  - "+e).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - "+e).join("\n")].join("\n"));return Object(r["e"])(e,l)}return Array.isArray(h)&&1===h.length?h[0]:h}return Object(r["p"])(u,l,h)}function a(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function c(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}var u=0;function l(){return++u}function h(){return l()}function d(e){throw new Error("Unexpected object: "+e)}function f(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),i=null!=r?r:-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>!(-1!==i&&r.length-n-1>=i)&&!t.resolveDisabled(e));return-1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=i)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return-1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:d(e)}})();return-1===o?r:o}function p(e){return null==e||null==e.value?null:"$el"in e.value?e.value.$el:e.value}function m(e,t,n){"undefined"!=typeof window&&Object(r["N"])(r=>{window.addEventListener(e,t,n),r(()=>{window.removeEventListener(e,t,n)})})}var v=Symbol("Context");function g(){return null!==b()}function b(){return Object(r["q"])(v,null)}function y(e){Object(r["A"])(v,e)}function w(e,t){if(e)return e;let n=null!=t?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function O(e,t){let n=Object(r["D"])(w(e.value.type,e.value.as));return Object(r["v"])(()=>{n.value=w(e.value.type,e.value.as)}),Object(r["N"])(()=>{var e;n.value||!p(t)||p(t)instanceof HTMLButtonElement&&!(null==(e=p(t))?void 0:e.hasAttribute("type"))&&(n.value="button")}),n}function E({container:e,accept:t,walk:n,enabled:i}){Object(r["N"])(()=>{let r=e.value;if(!r||void 0!==i&&!i.value)return;let o=Object.assign(e=>t(e),{acceptNode:t}),s=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)n(s.currentNode)})}var _=Symbol("ComboboxContext");function T(e){let t=Object(r["q"])(_,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}Object(r["n"])({name:"Combobox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(e,{slots:t,attrs:n,emit:s}){let c=Object(r["D"])(1),u=Object(r["D"])(null),l=Object(r["D"])(null),h=Object(r["D"])(null),d=Object(r["D"])(null),v=Object(r["D"])({static:!1,hold:!1}),g=Object(r["D"])([]),b=Object(r["D"])(null),w=Object(r["f"])(()=>e.modelValue),O={comboboxState:c,value:w,inputRef:l,labelRef:u,buttonRef:h,optionsRef:d,disabled:Object(r["f"])(()=>e.disabled),options:g,activeOptionIndex:b,inputPropsRef:Object(r["D"])({displayValue:void 0}),optionsPropsRef:v,closeCombobox(){e.disabled||1!==c.value&&(c.value=1,b.value=null)},openCombobox(){e.disabled||0!==c.value&&(c.value=0)},goToOption(t,n){if(e.disabled||d.value&&!v.value.static&&1===c.value)return;let r=f(4===t?{focus:4,id:n}:{focus:t},{resolveItems:()=>g.value,resolveActiveIndex:()=>b.value,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});b.value!==r&&(b.value=r)},syncInputValue(){let e=O.value.value;if(!p(O.inputRef)||void 0===e)return;let t=O.inputPropsRef.value.displayValue;"function"==typeof t?O.inputRef.value.value=t(e):"string"==typeof e&&(O.inputRef.value.value=e)},selectOption(e){let t=g.value.find(t=>t.id===e);if(!t)return;let{dataRef:n}=t;s("update:modelValue",n.value),O.syncInputValue()},selectActiveOption(){if(null===b.value)return;let{dataRef:e}=g.value[b.value];s("update:modelValue",e.value),O.syncInputValue()},registerOption(e,t){var n,r;let i=null!==b.value?g.value[b.value]:null,o=Array.from(null!=(r=null==(n=d.value)?void 0:n.querySelectorAll('[id^="headlessui-combobox-option-"]'))?r:[]).reduce((e,t,n)=>Object.assign(e,{[t.id]:n}),{});g.value=[...g.value,{id:e,dataRef:t}].sort((e,t)=>o[e.id]-o[t.id]),b.value=(()=>null===i?null:g.value.indexOf(i))()},unregisterOption(e){let t=g.value.slice(),n=null!==b.value?t[b.value]:null,r=t.findIndex(t=>t.id===e);-1!==r&&t.splice(r,1),g.value=t,b.value=(()=>r===b.value||null===n?null:t.indexOf(n))()}};m("mousedown",e=>{var t,n,r;let i=e.target;0===c.value&&((null==(t=p(l))?void 0:t.contains(i))||(null==(n=p(h))?void 0:n.contains(i))||(null==(r=p(d))?void 0:r.contains(i))||O.closeCombobox())}),Object(r["M"])([O.value,O.inputRef],()=>O.syncInputValue(),{immediate:!0}),Object(r["A"])(_,O),y(Object(r["f"])(()=>i(c.value,{[0]:0,[1]:1})));let E=Object(r["f"])(()=>null===b.value?null:g.value[b.value].dataRef.value);return()=>{let r={open:0===c.value,disabled:e.disabled,activeIndex:b.value,activeOption:E.value};return o({props:a(e,["modelValue","onUpdate:modelValue","disabled"]),slot:r,slots:t,attrs:n,name:"Combobox"})}}}),Object(r["n"])({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:t,slots:n}){let r=T("ComboboxLabel"),i="headlessui-combobox-label-"+h();function s(){var e;null==(e=p(r.inputRef))||e.focus({preventScroll:!0})}return()=>{let a={open:0===r.comboboxState.value,disabled:r.disabled.value},c={id:i,ref:r.labelRef,onClick:s};return o({props:{...e,...c},slot:a,attrs:t,slots:n,name:"ComboboxLabel"})}}}),Object(r["n"])({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:t,slots:n}){let i=T("ComboboxButton"),s="headlessui-combobox-button-"+h();function a(e){i.disabled.value||(0===i.comboboxState.value?i.closeCombobox():(e.preventDefault(),i.openCombobox()),Object(r["r"])(()=>{var e;return null==(e=p(i.inputRef))?void 0:e.focus({preventScroll:!0})}))}function c(e){switch(e.key){case"ArrowDown":return e.preventDefault(),e.stopPropagation(),1===i.comboboxState.value&&(i.openCombobox(),Object(r["r"])(()=>{i.value.value||i.goToOption(0)})),void Object(r["r"])(()=>{var e;return null==(e=i.inputRef.value)?void 0:e.focus({preventScroll:!0})});case"ArrowUp":return e.preventDefault(),e.stopPropagation(),1===i.comboboxState.value&&(i.openCombobox(),Object(r["r"])(()=>{i.value.value||i.goToOption(3)})),void Object(r["r"])(()=>{var e;return null==(e=i.inputRef.value)?void 0:e.focus({preventScroll:!0})});case"Escape":return e.preventDefault(),i.optionsRef.value&&!i.optionsPropsRef.value.static&&e.stopPropagation(),i.closeCombobox(),void Object(r["r"])(()=>{var e;return null==(e=i.inputRef.value)?void 0:e.focus({preventScroll:!0})})}}let u=O(Object(r["f"])(()=>({as:e.as,type:t.type})),i.buttonRef);return()=>{var r,l;let h={open:0===i.comboboxState.value,disabled:i.disabled.value},d={ref:i.buttonRef,id:s,type:u.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":null==(r=p(i.optionsRef))?void 0:r.id,"aria-expanded":i.disabled.value?void 0:0===i.comboboxState.value,"aria-labelledby":i.labelRef.value?[null==(l=p(i.labelRef))?void 0:l.id,s].join(" "):void 0,disabled:!0===i.disabled.value||void 0,onKeydown:c,onClick:a};return o({props:{...e,...d},slot:h,attrs:t,slots:n,name:"ComboboxButton"})}}}),Object(r["n"])({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:e=>!0},setup(e,{emit:t,attrs:n,slots:s}){let c=T("ComboboxInput"),u="headlessui-combobox-input-"+h();function l(e){switch(e.key){case"Enter":e.preventDefault(),e.stopPropagation(),c.selectActiveOption(),c.closeCombobox();break;case"ArrowDown":return e.preventDefault(),e.stopPropagation(),i(c.comboboxState.value,{[0]:()=>c.goToOption(2),[1]:()=>{c.openCombobox(),Object(r["r"])(()=>{c.value.value||c.goToOption(0)})}});case"ArrowUp":return e.preventDefault(),e.stopPropagation(),i(c.comboboxState.value,{[0]:()=>c.goToOption(1),[1]:()=>{c.openCombobox(),Object(r["r"])(()=>{c.value.value||c.goToOption(3)})}});case"Home":case"PageUp":return e.preventDefault(),e.stopPropagation(),c.goToOption(0);case"End":case"PageDown":return e.preventDefault(),e.stopPropagation(),c.goToOption(3);case"Escape":e.preventDefault(),c.optionsRef.value&&!c.optionsPropsRef.value.static&&e.stopPropagation(),c.closeCombobox();break;case"Tab":c.selectActiveOption(),c.closeCombobox();break}}function d(e){c.openCombobox(),t("change",e)}return c.inputPropsRef=Object(r["f"])(()=>e),()=>{var t,r,i,h,f;let m={open:0===c.comboboxState.value},v={"aria-controls":null==(t=c.optionsRef.value)?void 0:t.id,"aria-expanded":c.disabled?void 0:0===c.comboboxState.value,"aria-activedescendant":null===c.activeOptionIndex.value||null==(r=c.options.value[c.activeOptionIndex.value])?void 0:r.id,"aria-labelledby":null!=(f=null==(i=p(c.labelRef))?void 0:i.id)?f:null==(h=p(c.buttonRef))?void 0:h.id,id:u,onKeydown:l,onChange:d,onInput:d,role:"combobox",type:"text",tabIndex:0,ref:c.inputRef},g=a(e,["displayValue"]);return o({props:{...g,...v},slot:m,attrs:n,slots:s,features:3,name:"ComboboxInput"})}}}),Object(r["n"])({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n}){let i=T("ComboboxOptions"),s="headlessui-combobox-options-"+h();Object(r["N"])(()=>{i.optionsPropsRef.value.static=e.static}),Object(r["N"])(()=>{i.optionsPropsRef.value.hold=e.hold});let c=b(),u=Object(r["f"])(()=>null!==c?0===c.value:0===i.comboboxState.value);return E({container:Object(r["f"])(()=>p(i.optionsRef)),enabled:Object(r["f"])(()=>0===i.comboboxState.value),accept(e){return"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}}),()=>{var r,c,l,h;let d={open:0===i.comboboxState.value},f={"aria-activedescendant":null===i.activeOptionIndex.value||null==(r=i.options.value[i.activeOptionIndex.value])?void 0:r.id,"aria-labelledby":null!=(h=null==(c=p(i.labelRef))?void 0:c.id)?h:null==(l=p(i.buttonRef))?void 0:l.id,id:s,ref:i.optionsRef,role:"listbox"},m=a(e,["hold"]);return o({props:{...m,...f},slot:d,attrs:t,slots:n,features:3,visible:u.value,name:"ComboboxOptions"})}}}),Object(r["n"])({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){let i=T("ComboboxOption"),s="headlessui-combobox-option-"+h(),a=Object(r["f"])(()=>null!==i.activeOptionIndex.value&&i.options.value[i.activeOptionIndex.value].id===s),c=Object(r["f"])(()=>Object(r["I"])(i.value.value)===Object(r["I"])(e.value)),u=Object(r["f"])(()=>({disabled:e.disabled,value:e.value}));function l(t){if(e.disabled)return t.preventDefault();i.selectOption(s),i.closeCombobox(),Object(r["r"])(()=>{var e;return null==(e=p(i.inputRef))?void 0:e.focus({preventScroll:!0})})}function d(){if(e.disabled)return i.goToOption(5);i.goToOption(4,s)}function f(){e.disabled||a.value||i.goToOption(4,s)}function m(){e.disabled||!a.value||i.optionsPropsRef.value.hold||i.goToOption(5)}return Object(r["v"])(()=>i.registerOption(s,u)),Object(r["w"])(()=>i.unregisterOption(s)),Object(r["v"])(()=>{Object(r["M"])([i.comboboxState,c],()=>{0===i.comboboxState.value&&(!c.value||i.goToOption(4,s))},{immediate:!0})}),Object(r["N"])(()=>{0===i.comboboxState.value&&(!a.value||Object(r["r"])(()=>{var e,t;return null==(t=null==(e=document.getElementById(s))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})}))}),()=>{let{disabled:r}=e,i={active:a.value,selected:c.value,disabled:r},u={id:s,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===c.value?c.value:void 0,disabled:void 0,onClick:l,onFocus:d,onPointermove:f,onMousemove:f,onPointerleave:m,onMouseleave:m};return o({props:{...e,...u},slot:i,attrs:n,slots:t,name:"ComboboxOption"})}}});var I=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>e+":not([tabindex='-1'])").join(",");function S(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(I))}function k(e,t=0){return e!==document.body&&i(t,{[0](){return e.matches(I)},[1](){let t=e;for(;null!==t;){if(t.matches(I))return!0;t=t.parentElement}return!1}})}function j(e){null==e||e.focus({preventScroll:!0})}function C(e,t){let n,r=Array.isArray(e)?e.slice().sort((e,t)=>{let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}):S(e),i=document.activeElement,o=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,r.indexOf(i))-1;if(4&t)return Math.max(0,r.indexOf(i))+1;if(8&t)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=32&t?{preventScroll:!0}:{},c=0,u=r.length;do{if(c>=u||c+u<=0)return 0;let e=s+c;if(16&t)e=(e+u)%u;else{if(e<0)return 3;if(e>=u)return 1}n=r[e],null==n||n.focus(a),c+=o}while(n!==document.activeElement);return n.hasAttribute("tabindex")||n.setAttribute("tabindex","0"),2}function A(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function x(e,t=Object(r["D"])(!0),n=Object(r["D"])({})){let i=Object(r["D"])("undefined"!=typeof window?document.activeElement:null),o=Object(r["D"])(null);function s(){if(!t.value||1!==e.value.size)return;let{initialFocus:r}=n.value,s=document.activeElement;if(r){if(r===s)return}else if(A(e.value,s))return;if(i.value=s,r)j(r);else{let t=!1;for(let n of e.value)if(2===C(n,1)){t=!0;break}t||console.warn("There are no focusable elements inside the <FocusTrap />")}o.value=document.activeElement}function a(){j(i.value),i.value=null,o.value=null}Object(r["N"])(s),Object(r["x"])(()=>{t.value?s():a()}),Object(r["w"])(a),m("keydown",n=>{if(t.value&&"Tab"===n.key&&document.activeElement&&1===e.value.size){n.preventDefault();for(let t of e.value)if(2===C(t,16|(n.shiftKey?2:4))){o.value=document.activeElement;break}}}),m("focus",n=>{if(!t.value||1!==e.value.size)return;let r=o.value;if(!r)return;let i=n.target;i&&i instanceof HTMLElement?A(e.value,i)?(o.value=i,j(i)):(n.preventDefault(),n.stopPropagation(),j(r)):j(o.value)},!0)}var R="body > *",D=new Set,N=new Map;function P(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function L(e){let t=N.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function M(e,t=Object(r["D"])(!0)){Object(r["N"])(n=>{if(!t.value||!e.value)return;let r=e.value;D.add(r);for(let e of N.keys())e.contains(r)&&(L(e),N.delete(e));document.querySelectorAll(R).forEach(e=>{if(e instanceof HTMLElement){for(let t of D)if(e.contains(t))return;1===D.size&&(N.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),P(e))}}),n(()=>{if(D.delete(r),D.size>0)document.querySelectorAll(R).forEach(e=>{if(e instanceof HTMLElement&&!N.has(e)){for(let t of D)if(e.contains(t))return;N.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),P(e)}});else for(let e of N.keys())L(e),N.delete(e)})})}var F=Symbol("StackContext");function U(){return Object(r["q"])(F,()=>{})}function V(e){let t=U();Object(r["N"])(n=>{let r=null==e?void 0:e.value;!r||(t(0,r),n(()=>t(1,r)))})}function B(e){let t=U();function n(...n){null==e||e(...n),t(...n)}Object(r["A"])(F,n)}var q=Symbol("ForcePortalRootContext");function G(){return Object(r["q"])(q,!1)}var $=Object(r["n"])({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return Object(r["A"])(q,e.force),()=>{let{force:r,...i}=e;return o({props:i,slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function H(){let e=document.getElementById("headlessui-portal-root");if(e)return e;let t=document.createElement("div");return t.setAttribute("id","headlessui-portal-root"),document.body.appendChild(t)}var z=Object(r["n"])({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let i=G(),s=Object(r["q"])(K,null),a=Object(r["D"])(!0===i||null===s?H():s.resolveTarget());Object(r["N"])(()=>{i||null!==s&&(a.value=s.resolveTarget())});let c=Object(r["D"])(null);return V(c),Object(r["w"])(()=>{var e;let t=document.getElementById("headlessui-portal-root");!t||a.value===t&&a.value.children.length<=0&&(null==(e=a.value.parentElement)||e.removeChild(a.value))}),B(),()=>{if(null===a.value)return null;let i={ref:c};return Object(r["p"])(r["b"],{to:a.value},o({props:{...e,...i},slot:{},attrs:n,slots:t,name:"Portal"}))}}}),K=Symbol("PortalGroupContext"),W=Object(r["n"])({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let i=Object(r["C"])({resolveTarget(){return e.target}});return Object(r["A"])(K,i),()=>{let{target:r,...i}=e;return o({props:i,slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),J=Symbol("DescriptionContext");function Q(){let e=Object(r["q"])(J,null);if(null===e)throw new Error("Missing parent");return e}function X({slot:e=Object(r["D"])({}),name:t="Description",props:n={}}={}){let i=Object(r["D"])([]);function o(e){return i.value.push(e),()=>{let t=i.value.indexOf(e);-1!==t&&i.value.splice(t,1)}}return Object(r["A"])(J,{register:o,slot:e,name:t,props:n}),Object(r["f"])(()=>i.value.length>0?i.value.join(" "):void 0)}Object(r["n"])({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:t,slots:n}){let i=Q(),s="headlessui-description-"+h();return Object(r["v"])(()=>Object(r["w"])(i.register(s))),()=>{let{name:a="Description",slot:c=Object(r["D"])({}),props:u={}}=i,l=e,h={...Object.entries(u).reduce((e,[t,n])=>Object.assign(e,{[t]:Object(r["J"])(n)}),{}),id:s};return o({props:{...l,...h},slot:c.value,attrs:t,slots:n,name:a})}}});var Y=Symbol("DialogContext");function Z(e){let t=Object(r["q"])(Y,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}var ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",te=(Object(r["n"])({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ee},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:s}){let a=Object(r["D"])(new Set),c=b(),u=Object(r["f"])(()=>e.open===ee&&null!==c?i(c.value,{[0]:!0,[1]:!1}):e.open);if(e.open===ee&&null===c)throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if("boolean"!=typeof u.value)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+(u.value===ee?void 0:e.open));let l=Object(r["f"])(()=>e.open?0:1),d=Object(r["f"])(()=>null!==c?0===c.value:0===l.value),f=Object(r["D"])(null),v=Object(r["D"])(0===l.value);Object(r["x"])(()=>{v.value=0===l.value});let g="headlessui-dialog-"+h(),y=Object(r["f"])(()=>({initialFocus:e.initialFocus}));x(a,v,y),M(f,v),B((e,t)=>i(e,{[0](){a.value.add(t)},[1](){a.value.delete(t)}}));let w=X({name:"DialogDescription",slot:Object(r["f"])(()=>({open:u.value}))}),O=Object(r["D"])(null),E={titleId:O,dialogState:l,setTitleId(e){O.value!==e&&(O.value=e)},close(){t("close",!1)}};function _(e){e.stopPropagation()}return Object(r["A"])(Y,E),m("mousedown",e=>{let t=e.target;0===l.value&&1===a.value.size&&(A(a.value,t)||(E.close(),Object(r["r"])(()=>null==t?void 0:t.focus())))}),m("keydown",e=>{"Escape"===e.key&&0===l.value&&(a.value.size>1||(e.preventDefault(),e.stopPropagation(),E.close()))}),Object(r["N"])(e=>{if(0!==l.value)return;let t=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,r=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=r+"px",e(()=>{document.documentElement.style.overflow=t,document.documentElement.style.paddingRight=n})}),Object(r["N"])(e=>{if(0!==l.value)return;let t=p(f);if(!t)return;let n=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&E.close()});n.observe(t),e(()=>n.disconnect())}),()=>{let t={...n,ref:f,id:g,role:"dialog","aria-modal":0===l.value||void 0,"aria-labelledby":O.value,"aria-describedby":w.value,onClick:_},{open:i,initialFocus:a,...c}=e,u={open:0===l.value};return Object(r["p"])($,{force:!0},()=>Object(r["p"])(z,()=>Object(r["p"])(W,{target:f.value},()=>Object(r["p"])($,{force:!1},()=>o({props:{...c,...t},slot:u,attrs:n,slots:s,visible:d.value,features:3,name:"Dialog"})))))}}}),Object(r["n"])({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let r=Z("DialogOverlay"),i="headlessui-dialog-overlay-"+h();function s(e){e.target===e.currentTarget&&(e.preventDefault(),e.stopPropagation(),r.close())}return()=>o({props:{...e,id:i,"aria-hidden":!0,onClick:s},slot:{open:0===r.dialogState.value},attrs:t,slots:n,name:"DialogOverlay"})}}),Object(r["n"])({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:n}){let i=Z("DialogTitle"),s="headlessui-dialog-title-"+h();return Object(r["v"])(()=>{i.setTitleId(s),Object(r["w"])(()=>i.setTitleId(null))}),()=>o({props:{...e,id:s},slot:{open:0===i.dialogState.value},attrs:t,slots:n,name:"DialogTitle"})}}),Symbol("DisclosureContext"));function ne(e){let t=Object(r["q"])(te,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return t}var re=Symbol("DisclosurePanelContext");function ie(){return Object(r["q"])(re,null)}Object(r["n"])({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let s="headlessui-disclosure-button-"+h(),a="headlessui-disclosure-panel-"+h(),c=Object(r["D"])(e.defaultOpen?0:1),u=Object(r["D"])(null),l=Object(r["D"])(null),d={buttonId:s,panelId:a,disclosureState:c,panel:u,button:l,toggleDisclosure(){c.value=i(c.value,{[0]:1,[1]:0})},closeDisclosure(){1!==c.value&&(c.value=1)},close(e){d.closeDisclosure();let t=(()=>e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?p(e):p(d.button):p(d.button))();null==t||t.focus()}};return Object(r["A"])(te,d),y(Object(r["f"])(()=>i(c.value,{[0]:0,[1]:1}))),()=>{let{defaultOpen:r,...i}=e,s={open:0===c.value,close:d.close};return o({props:i,slot:s,slots:t,attrs:n,name:"Disclosure"})}}}),Object(r["n"])({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n}){let i=ne("DisclosureButton"),s=ie(),a=null!==s&&s===i.panelId,c=Object(r["D"])(null);a||Object(r["N"])(()=>{i.button.value=c.value});let u=O(Object(r["f"])(()=>({as:e.as,type:t.type})),c);function l(){var t;e.disabled||(a?(i.toggleDisclosure(),null==(t=p(i.button))||t.focus()):i.toggleDisclosure())}function h(t){var n;if(!e.disabled)if(a)switch(t.key){case" ":case"Enter":t.preventDefault(),t.stopPropagation(),i.toggleDisclosure(),null==(n=p(i.button))||n.focus();break}else switch(t.key){case" ":case"Enter":t.preventDefault(),t.stopPropagation(),i.toggleDisclosure();break}}function d(e){switch(e.key){case" ":e.preventDefault();break}}return()=>{let r={open:0===i.disclosureState.value},s=a?{ref:c,type:u.value,onClick:l,onKeydown:h}:{id:i.buttonId,ref:c,type:u.value,"aria-expanded":e.disabled?void 0:0===i.disclosureState.value,"aria-controls":p(i.panel)?i.panelId:void 0,disabled:!!e.disabled||void 0,onClick:l,onKeydown:h,onKeyup:d};return o({props:{...e,...s},slot:r,attrs:t,slots:n,name:"DisclosureButton"})}}}),Object(r["n"])({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n}){let i=ne("DisclosurePanel");Object(r["A"])(re,i.panelId);let s=b(),a=Object(r["f"])(()=>null!==s?0===s.value:0===i.disclosureState.value);return()=>{let r={open:0===i.disclosureState.value,close:i.close},s={id:i.panelId,ref:i.panel};return o({props:{...e,...s},slot:r,attrs:t,slots:n,features:3,visible:a.value,name:"DisclosurePanel"})}}}),Object(r["n"])({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let i=Object(r["D"])(new Set),s=Object(r["D"])(null),a=Object(r["D"])(!0),c=Object(r["f"])(()=>({initialFocus:e.initialFocus}));return Object(r["v"])(()=>{!s.value||(i.value.add(s.value),x(i,a,c))}),Object(r["w"])(()=>{a.value=!1}),()=>{let r={},i={ref:s},{initialFocus:a,...c}=e;return o({props:{...c,...i},slot:r,attrs:t,slots:n,name:"FocusTrap"})}}});function oe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}var se=Symbol("ListboxContext");function ae(e){let t=Object(r["q"])(se,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ae),t}return t}var ce=Object(r["n"])({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(e,{slots:t,attrs:n,emit:s}){let c=Object(r["D"])(1),u=Object(r["D"])(null),l=Object(r["D"])(null),h=Object(r["D"])(null),d=Object(r["D"])([]),v=Object(r["D"])(""),g=Object(r["D"])(null),b=Object(r["f"])(()=>e.modelValue),w={listboxState:c,value:b,orientation:Object(r["f"])(()=>e.horizontal?"horizontal":"vertical"),labelRef:u,buttonRef:l,optionsRef:h,disabled:Object(r["f"])(()=>e.disabled),options:d,searchQuery:v,activeOptionIndex:g,closeListbox(){e.disabled||1!==c.value&&(c.value=1,g.value=null)},openListbox(){e.disabled||0!==c.value&&(c.value=0)},goToOption(t,n){if(e.disabled||1===c.value)return;let r=f(4===t?{focus:4,id:n}:{focus:t},{resolveItems:()=>d.value,resolveActiveIndex:()=>g.value,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});""===v.value&&g.value===r||(v.value="",g.value=r)},search(t){if(e.disabled||1===c.value)return;let n=""!==v.value?0:1;v.value+=t.toLowerCase();let r=(null!==g.value?d.value.slice(g.value+n).concat(d.value.slice(0,g.value+n)):d.value).find(e=>e.dataRef.textValue.startsWith(v.value)&&!e.dataRef.disabled),i=r?d.value.indexOf(r):-1;-1===i||i===g.value||(g.value=i)},clearSearch(){e.disabled||1!==c.value&&""!==v.value&&(v.value="")},registerOption(e,t){var n,r;let i=Array.from(null!=(r=null==(n=h.value)?void 0:n.querySelectorAll('[id^="headlessui-listbox-option-"]'))?r:[]).reduce((e,t,n)=>Object.assign(e,{[t.id]:n}),{});d.value=[...d.value,{id:e,dataRef:t}].sort((e,t)=>i[e.id]-i[t.id])},unregisterOption(e){let t=d.value.slice(),n=null!==g.value?t[g.value]:null,r=t.findIndex(t=>t.id===e);-1!==r&&t.splice(r,1),d.value=t,g.value=(()=>r===g.value||null===n?null:t.indexOf(n))()},select(t){e.disabled||s("update:modelValue",t)}};return m("mousedown",e=>{var t,n,r;let i=e.target,o=document.activeElement;0===c.value&&((null==(t=p(l))?void 0:t.contains(i))||((null==(n=p(h))?void 0:n.contains(i))||w.closeListbox(),(o===document.body||!(null==o?void 0:o.contains(i)))&&(e.defaultPrevented||null==(r=p(l))||r.focus({preventScroll:!0}))))}),Object(r["A"])(se,w),y(Object(r["f"])(()=>i(c.value,{[0]:0,[1]:1}))),()=>{let r={open:0===c.value,disabled:e.disabled};return o({props:a(e,["modelValue","onUpdate:modelValue","disabled","horizontal"]),slot:r,slots:t,attrs:n,name:"Listbox"})}}}),ue=(Object(r["n"])({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(e,{attrs:t,slots:n}){let r=ae("ListboxLabel"),i="headlessui-listbox-label-"+h();function s(){var e;null==(e=p(r.buttonRef))||e.focus({preventScroll:!0})}return()=>{let a={open:0===r.listboxState.value,disabled:r.disabled.value},c={id:i,ref:r.labelRef,onClick:s};return o({props:{...e,...c},slot:a,attrs:t,slots:n,name:"ListboxLabel"})}}}),Object(r["n"])({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(e,{attrs:t,slots:n}){let i=ae("ListboxButton"),s="headlessui-listbox-button-"+h();function a(e){switch(e.key){case" ":case"Enter":case"ArrowDown":e.preventDefault(),i.openListbox(),Object(r["r"])(()=>{var e;null==(e=p(i.optionsRef))||e.focus({preventScroll:!0}),i.value.value||i.goToOption(0)});break;case"ArrowUp":e.preventDefault(),i.openListbox(),Object(r["r"])(()=>{var e;null==(e=p(i.optionsRef))||e.focus({preventScroll:!0}),i.value.value||i.goToOption(3)});break}}function c(e){switch(e.key){case" ":e.preventDefault();break}}function u(e){i.disabled.value||(0===i.listboxState.value?(i.closeListbox(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),i.openListbox(),oe(()=>{var e;return null==(e=p(i.optionsRef))?void 0:e.focus({preventScroll:!0})})))}let l=O(Object(r["f"])(()=>({as:e.as,type:t.type})),i.buttonRef);return()=>{var r,h;let d={open:0===i.listboxState.value,disabled:i.disabled.value},f={ref:i.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":null==(r=p(i.optionsRef))?void 0:r.id,"aria-expanded":i.disabled.value?void 0:0===i.listboxState.value,"aria-labelledby":i.labelRef.value?[null==(h=p(i.labelRef))?void 0:h.id,s].join(" "):void 0,disabled:!0===i.disabled.value||void 0,onKeydown:a,onKeyup:c,onClick:u};return o({props:{...e,...f},slot:d,attrs:t,slots:n,name:"ListboxButton"})}}})),le=Object(r["n"])({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n}){let s=ae("ListboxOptions"),a="headlessui-listbox-options-"+h(),c=Object(r["D"])(null);function u(e){switch(c.value&&clearTimeout(c.value),e.key){case" ":if(""!==s.searchQuery.value)return e.preventDefault(),e.stopPropagation(),s.search(e.key);case"Enter":if(e.preventDefault(),e.stopPropagation(),null!==s.activeOptionIndex.value){let{dataRef:e}=s.options.value[s.activeOptionIndex.value];s.select(e.value)}s.closeListbox(),Object(r["r"])(()=>{var e;return null==(e=p(s.buttonRef))?void 0:e.focus({preventScroll:!0})});break;case i(s.orientation.value,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return e.preventDefault(),e.stopPropagation(),s.goToOption(2);case i(s.orientation.value,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return e.preventDefault(),e.stopPropagation(),s.goToOption(1);case"Home":case"PageUp":return e.preventDefault(),e.stopPropagation(),s.goToOption(0);case"End":case"PageDown":return e.preventDefault(),e.stopPropagation(),s.goToOption(3);case"Escape":e.preventDefault(),e.stopPropagation(),s.closeListbox(),Object(r["r"])(()=>{var e;return null==(e=p(s.buttonRef))?void 0:e.focus({preventScroll:!0})});break;case"Tab":e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(s.search(e.key),c.value=setTimeout(()=>s.clearSearch(),350));break}}let l=b(),d=Object(r["f"])(()=>null!==l?0===l.value:0===s.listboxState.value);return()=>{var r,i,c,l;let h={open:0===s.listboxState.value},f={"aria-activedescendant":null===s.activeOptionIndex.value||null==(r=s.options.value[s.activeOptionIndex.value])?void 0:r.id,"aria-labelledby":null!=(l=null==(i=p(s.labelRef))?void 0:i.id)?l:null==(c=p(s.buttonRef))?void 0:c.id,"aria-orientation":s.orientation.value,id:a,onKeydown:u,role:"listbox",tabIndex:0,ref:s.optionsRef};return o({props:{...e,...f},slot:h,attrs:t,slots:n,features:3,visible:d.value,name:"ListboxOptions"})}}}),he=Object(r["n"])({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){let i=ae("ListboxOption"),s="headlessui-listbox-option-"+h(),a=Object(r["f"])(()=>null!==i.activeOptionIndex.value&&i.options.value[i.activeOptionIndex.value].id===s),c=Object(r["f"])(()=>Object(r["I"])(i.value.value)===Object(r["I"])(e.value)),u=Object(r["D"])({disabled:e.disabled,value:e.value,textValue:""});function l(t){if(e.disabled)return t.preventDefault();i.select(e.value),i.closeListbox(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})})}function d(){if(e.disabled)return i.goToOption(5);i.goToOption(4,s)}function f(){e.disabled||a.value||i.goToOption(4,s)}function m(){e.disabled||!a.value||i.goToOption(5)}return Object(r["v"])(()=>{var e,t;let n=null==(t=null==(e=document.getElementById(s))?void 0:e.textContent)?void 0:t.toLowerCase().trim();void 0!==n&&(u.value.textValue=n)}),Object(r["v"])(()=>i.registerOption(s,u)),Object(r["w"])(()=>i.unregisterOption(s)),Object(r["v"])(()=>{Object(r["M"])([i.listboxState,c],()=>{var e,t;0===i.listboxState.value&&(!c.value||(i.goToOption(4,s),null==(t=null==(e=document.getElementById(s))?void 0:e.focus)||t.call(e)))},{immediate:!0})}),Object(r["N"])(()=>{0===i.listboxState.value&&(!a.value||Object(r["r"])(()=>{var e,t;return null==(t=null==(e=document.getElementById(s))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})}))}),()=>{let{disabled:r}=e,i={active:a.value,selected:c.value,disabled:r},u={id:s,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":!0===c.value?c.value:void 0,disabled:void 0,onClick:l,onFocus:d,onPointermove:f,onMousemove:f,onPointerleave:m,onMouseleave:m};return o({props:{...e,...u},slot:i,attrs:n,slots:t,name:"ListboxOption"})}}});function de(e){requestAnimationFrame(()=>requestAnimationFrame(e))}var fe=Symbol("MenuContext");function pe(e){let t=Object(r["q"])(fe,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,pe),t}return t}Object(r["n"])({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let s=Object(r["D"])(1),a=Object(r["D"])(null),c=Object(r["D"])(null),u=Object(r["D"])([]),l=Object(r["D"])(""),h=Object(r["D"])(null),d={menuState:s,buttonRef:a,itemsRef:c,items:u,searchQuery:l,activeItemIndex:h,closeMenu:()=>{s.value=1,h.value=null},openMenu:()=>s.value=0,goToItem(e,t){let n=f(4===e?{focus:4,id:t}:{focus:e},{resolveItems:()=>u.value,resolveActiveIndex:()=>h.value,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});""===l.value&&h.value===n||(l.value="",h.value=n)},search(e){let t=""!==l.value?0:1;l.value+=e.toLowerCase();let n=(null!==h.value?u.value.slice(h.value+t).concat(u.value.slice(0,h.value+t)):u.value).find(e=>e.dataRef.textValue.startsWith(l.value)&&!e.dataRef.disabled),r=n?u.value.indexOf(n):-1;-1===r||r===h.value||(h.value=r)},clearSearch(){l.value=""},registerItem(e,t){var n,r;let i=Array.from(null!=(r=null==(n=c.value)?void 0:n.querySelectorAll('[id^="headlessui-menu-item-"]'))?r:[]).reduce((e,t,n)=>Object.assign(e,{[t.id]:n}),{});u.value=[...u.value,{id:e,dataRef:t}].sort((e,t)=>i[e.id]-i[t.id])},unregisterItem(e){let t=u.value.slice(),n=null!==h.value?t[h.value]:null,r=t.findIndex(t=>t.id===e);-1!==r&&t.splice(r,1),u.value=t,h.value=(()=>r===h.value||null===n?null:t.indexOf(n))()}};return m("mousedown",e=>{var t,n,r;let i=e.target,o=document.activeElement;0===s.value&&((null==(t=p(a))?void 0:t.contains(i))||((null==(n=p(c))?void 0:n.contains(i))||d.closeMenu(),(o===document.body||!(null==o?void 0:o.contains(i)))&&(e.defaultPrevented||null==(r=p(a))||r.focus({preventScroll:!0}))))}),Object(r["A"])(fe,d),y(Object(r["f"])(()=>i(s.value,{[0]:0,[1]:1}))),()=>{let r={open:0===s.value};return o({props:e,slot:r,slots:t,attrs:n,name:"Menu"})}}}),Object(r["n"])({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(e,{attrs:t,slots:n}){let i=pe("MenuButton"),s="headlessui-menu-button-"+h();function a(e){switch(e.key){case" ":case"Enter":case"ArrowDown":e.preventDefault(),e.stopPropagation(),i.openMenu(),Object(r["r"])(()=>{var e;null==(e=p(i.itemsRef))||e.focus({preventScroll:!0}),i.goToItem(0)});break;case"ArrowUp":e.preventDefault(),e.stopPropagation(),i.openMenu(),Object(r["r"])(()=>{var e;null==(e=p(i.itemsRef))||e.focus({preventScroll:!0}),i.goToItem(3)});break}}function c(e){switch(e.key){case" ":e.preventDefault();break}}function u(t){e.disabled||(0===i.menuState.value?(i.closeMenu(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),t.stopPropagation(),i.openMenu(),de(()=>{var e;return null==(e=p(i.itemsRef))?void 0:e.focus({preventScroll:!0})})))}let l=O(Object(r["f"])(()=>({as:e.as,type:t.type})),i.buttonRef);return()=>{var r;let h={open:0===i.menuState.value},d={ref:i.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":null==(r=p(i.itemsRef))?void 0:r.id,"aria-expanded":e.disabled?void 0:0===i.menuState.value,onKeydown:a,onKeyup:c,onClick:u};return o({props:{...e,...d},slot:h,attrs:t,slots:n,name:"MenuButton"})}}}),Object(r["n"])({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n}){let i=pe("MenuItems"),s="headlessui-menu-items-"+h(),a=Object(r["D"])(null);function c(e){var t;switch(a.value&&clearTimeout(a.value),e.key){case" ":if(""!==i.searchQuery.value)return e.preventDefault(),e.stopPropagation(),i.search(e.key);case"Enter":if(e.preventDefault(),e.stopPropagation(),null!==i.activeItemIndex.value){let{id:e}=i.items.value[i.activeItemIndex.value];null==(t=document.getElementById(e))||t.click()}i.closeMenu(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})});break;case"ArrowDown":return e.preventDefault(),e.stopPropagation(),i.goToItem(2);case"ArrowUp":return e.preventDefault(),e.stopPropagation(),i.goToItem(1);case"Home":case"PageUp":return e.preventDefault(),e.stopPropagation(),i.goToItem(0);case"End":case"PageDown":return e.preventDefault(),e.stopPropagation(),i.goToItem(3);case"Escape":e.preventDefault(),e.stopPropagation(),i.closeMenu(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})});break;case"Tab":e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(i.search(e.key),a.value=setTimeout(()=>i.clearSearch(),350));break}}function u(e){switch(e.key){case" ":e.preventDefault();break}}E({container:Object(r["f"])(()=>p(i.itemsRef)),enabled:Object(r["f"])(()=>0===i.menuState.value),accept(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let l=b(),d=Object(r["f"])(()=>null!==l?0===l.value:0===i.menuState.value);return()=>{var r,a;let l={open:0===i.menuState.value},h={"aria-activedescendant":null===i.activeItemIndex.value||null==(r=i.items.value[i.activeItemIndex.value])?void 0:r.id,"aria-labelledby":null==(a=p(i.buttonRef))?void 0:a.id,id:s,onKeydown:c,onKeyup:u,role:"menu",tabIndex:0,ref:i.itemsRef};return o({props:{...e,...h},slot:l,attrs:t,slots:n,features:3,visible:d.value,name:"MenuItems"})}}}),Object(r["n"])({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){let i=pe("MenuItem"),s="headlessui-menu-item-"+h(),a=Object(r["f"])(()=>null!==i.activeItemIndex.value&&i.items.value[i.activeItemIndex.value].id===s),c=Object(r["D"])({disabled:e.disabled,textValue:""});function u(t){if(e.disabled)return t.preventDefault();i.closeMenu(),Object(r["r"])(()=>{var e;return null==(e=p(i.buttonRef))?void 0:e.focus({preventScroll:!0})})}function l(){if(e.disabled)return i.goToItem(5);i.goToItem(4,s)}function d(){e.disabled||a.value||i.goToItem(4,s)}function f(){e.disabled||!a.value||i.goToItem(5)}return Object(r["v"])(()=>{var e,t;let n=null==(t=null==(e=document.getElementById(s))?void 0:e.textContent)?void 0:t.toLowerCase().trim();void 0!==n&&(c.value.textValue=n)}),Object(r["v"])(()=>i.registerItem(s,c)),Object(r["w"])(()=>i.unregisterItem(s)),Object(r["N"])(()=>{0===i.menuState.value&&(!a.value||Object(r["r"])(()=>{var e,t;return null==(t=null==(e=document.getElementById(s))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})}))}),()=>{let{disabled:r}=e,i={active:a.value,disabled:r};return o({props:{...e,id:s,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,onClick:u,onFocus:l,onPointermove:d,onMousemove:d,onPointerleave:f,onMouseleave:f},slot:i,attrs:n,slots:t,name:"MenuItem"})}}});var me=Symbol("PopoverContext");function ve(e){let t=Object(r["q"])(me,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <${Oe.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ve),t}return t}var ge=Symbol("PopoverGroupContext");function be(){return Object(r["q"])(ge,null)}var ye=Symbol("PopoverPanelContext");function we(){return Object(r["q"])(ye,null)}var Oe=Object(r["n"])({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let s="headlessui-popover-button-"+h(),a="headlessui-popover-panel-"+h(),c=Object(r["D"])(1),u=Object(r["D"])(null),l=Object(r["D"])(null),d={popoverState:c,buttonId:s,panelId:a,panel:l,button:u,togglePopover(){c.value=i(c.value,{[0]:1,[1]:0})},closePopover(){1!==c.value&&(c.value=1)},close(e){d.closePopover();let t=(()=>e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?p(e):p(d.button):p(d.button))();null==t||t.focus()}};Object(r["A"])(me,d),y(Object(r["f"])(()=>i(c.value,{[0]:0,[1]:1})));let f={buttonId:s,panelId:a,close(){d.closePopover()}},v=be(),g=null==v?void 0:v.registerPopover;function b(){var e,t,n;return null!=(n=null==v?void 0:v.isFocusWithinPopoverGroup())?n:(null==(e=p(u))?void 0:e.contains(document.activeElement))||(null==(t=p(l))?void 0:t.contains(document.activeElement))}return Object(r["N"])(()=>null==g?void 0:g(f)),m("focus",()=>{0===c.value&&(b()||!u||!l||d.closePopover())},!0),m("mousedown",e=>{var t,n,r;let i=e.target;0===c.value&&((null==(t=p(u))?void 0:t.contains(i))||(null==(n=p(l))?void 0:n.contains(i))||(d.closePopover(),k(i,1)||(e.preventDefault(),null==(r=p(u))||r.focus())))}),()=>{let r={open:0===c.value,close:d.close};return o({props:e,slot:r,slots:t,attrs:n,name:"Popover"})}}}),Ee=(Object(r["n"])({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n}){let i=ve("PopoverButton"),s=be(),a=null==s?void 0:s.closeOthers,c=we(),u=null!==c&&c===i.panelId,l=Object(r["D"])(null),h=Object(r["D"])("undefined"==typeof window?null:document.activeElement);m("focus",()=>{h.value=l.value,l.value=document.activeElement},!0);let d=Object(r["D"])(null);u||Object(r["N"])(()=>{i.button.value=d.value});let f=O(Object(r["f"])(()=>({as:e.as,type:t.type})),d);function v(e){var t,n,r,o;if(u){if(1===i.popoverState.value)return;switch(e.key){case" ":case"Enter":e.preventDefault(),e.stopPropagation(),i.closePopover(),null==(t=p(i.button))||t.focus();break}}else switch(e.key){case" ":case"Enter":e.preventDefault(),e.stopPropagation(),1===i.popoverState.value&&(null==a||a(i.buttonId)),i.togglePopover();break;case"Escape":if(0!==i.popoverState.value)return null==a?void 0:a(i.buttonId);if(!p(i.button)||!(null==(n=p(i.button))?void 0:n.contains(document.activeElement)))return;e.preventDefault(),e.stopPropagation(),i.closePopover();break;case"Tab":if(0!==i.popoverState.value||!i.panel||!i.button)return;if(e.shiftKey){if(!h.value||(null==(r=p(i.button))?void 0:r.contains(h.value))||(null==(o=p(i.panel))?void 0:o.contains(h.value)))return;let t=S(),n=t.indexOf(h.value);if(t.indexOf(p(i.button))>n)return;e.preventDefault(),e.stopPropagation(),C(p(i.panel),8)}else e.preventDefault(),e.stopPropagation(),C(p(i.panel),1);break}}function g(e){var t,n;if(!u&&(" "===e.key&&e.preventDefault(),0===i.popoverState.value&&i.panel&&i.button))switch(e.key){case"Tab":if(!h.value||(null==(t=p(i.button))?void 0:t.contains(h.value))||(null==(n=p(i.panel))?void 0:n.contains(h.value)))return;let r=S(),o=r.indexOf(h.value);if(r.indexOf(p(i.button))>o)return;e.preventDefault(),e.stopPropagation(),C(p(i.panel),8);break}}function b(){var t,n;e.disabled||(u?(i.closePopover(),null==(t=p(i.button))||t.focus()):(1===i.popoverState.value&&(null==a||a(i.buttonId)),null==(n=p(i.button))||n.focus(),i.togglePopover()))}return()=>{let r={open:0===i.popoverState.value},s=u?{ref:d,type:f.value,onKeydown:v,onClick:b}:{ref:d,id:i.buttonId,type:f.value,"aria-expanded":e.disabled?void 0:0===i.popoverState.value,"aria-controls":p(i.panel)?i.panelId:void 0,disabled:!!e.disabled||void 0,onKeydown:v,onKeyup:g,onClick:b};return o({props:{...e,...s},slot:r,attrs:t,slots:n,name:"PopoverButton"})}}}),Object(r["n"])({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n}){let i=ve("PopoverOverlay"),s="headlessui-popover-overlay-"+h(),a=b(),c=Object(r["f"])(()=>null!==a?0===a.value:0===i.popoverState.value);function u(){i.closePopover()}return()=>{let r={open:0===i.popoverState.value};return o({props:{...e,id:s,"aria-hidden":!0,onClick:u},slot:r,attrs:t,slots:n,features:3,visible:c.value,name:"PopoverOverlay"})}}}),Object(r["n"])({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:n}){let{focus:i}=e,s=ve("PopoverPanel");Object(r["A"])(ye,s.panelId),Object(r["w"])(()=>{s.panel.value=null}),Object(r["N"])(()=>{var e;if(!i||0!==s.popoverState.value||!s.panel)return;let t=document.activeElement;(null==(e=p(s.panel))?void 0:e.contains(t))||C(p(s.panel),1)}),m("keydown",e=>{var t,n;if(0!==s.popoverState.value||!p(s.panel)||"Tab"!==e.key||!document.activeElement||!(null==(t=p(s.panel))?void 0:t.contains(document.activeElement)))return;e.preventDefault();let r=C(p(s.panel),e.shiftKey?2:4);if(3===r)return null==(n=p(s.button))?void 0:n.focus();if(1===r){if(!p(s.button))return;let e=S(),t=e.indexOf(p(s.button)),n=e.splice(t+1).filter(e=>{var t;return!(null==(t=p(s.panel))?void 0:t.contains(e))});0===C(n,1)&&C(document.body,1)}}),m("focus",()=>{var e;!i||0===s.popoverState.value&&(!p(s.panel)||(null==(e=p(s.panel))?void 0:e.contains(document.activeElement))||s.closePopover())},!0);let a=b(),c=Object(r["f"])(()=>null!==a?0===a.value:0===s.popoverState.value);function u(e){var t,n;switch(e.key){case"Escape":if(0!==s.popoverState.value||!p(s.panel)||!(null==(t=p(s.panel))?void 0:t.contains(document.activeElement)))return;e.preventDefault(),e.stopPropagation(),s.closePopover(),null==(n=p(s.button))||n.focus();break}}return()=>{let r={open:0===s.popoverState.value,close:s.close},i={ref:s.panel,id:s.panelId,onKeydown:u};return o({props:{...e,...i},slot:r,attrs:t,slots:n,features:3,visible:c.value,name:"PopoverPanel"})}}}),Object(r["n"])({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let i=Object(r["D"])(null),s=Object(r["D"])([]);function a(e){let t=s.value.indexOf(e);-1!==t&&s.value.splice(t,1)}function c(e){return s.value.push(e),()=>{a(e)}}function u(){var e;let t=document.activeElement;return!!(null==(e=p(i))?void 0:e.contains(t))||s.value.some(e=>{var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))})}function l(e){for(let t of s.value)t.buttonId!==e&&t.close()}return Object(r["A"])(ge,{registerPopover:c,unregisterPopover:a,isFocusWithinPopoverGroup:u,closeOthers:l}),()=>o({props:{...e,ref:i},slot:{},attrs:t,slots:n,name:"PopoverGroup"})}}),Symbol("LabelContext"));function _e(){let e=Object(r["q"])(Ee,null);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,_e),e}return e}function Te({slot:e={},name:t="Label",props:n={}}={}){let i=Object(r["D"])([]);function o(e){return i.value.push(e),()=>{let t=i.value.indexOf(e);-1!==t&&i.value.splice(t,1)}}return Object(r["A"])(Ee,{register:o,slot:e,name:t,props:n}),Object(r["f"])(()=>i.value.length>0?i.value.join(" "):void 0)}Object(r["n"])({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let i=_e(),s="headlessui-label-"+h();return Object(r["v"])(()=>Object(r["w"])(i.register(s))),()=>{let{name:a="Label",slot:c={},props:u={}}=i,{passive:l,...h}=e,d={...Object.entries(u).reduce((e,[t,n])=>Object.assign(e,{[t]:Object(r["J"])(n)}),{}),id:s},f={...h,...d};return l&&delete f.onClick,o({props:f,slot:c,attrs:n,slots:t,name:a})}}});var Ie=Symbol("RadioGroupContext");function Se(e){let t=Object(r["q"])(Ie,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Se),t}return t}Object(r["n"])({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(e,{emit:t,attrs:n,slots:i}){let s=Object(r["D"])(null),a=Object(r["D"])([]),c=Te({name:"RadioGroupLabel"}),u=X({name:"RadioGroupDescription"}),l=Object(r["f"])(()=>e.modelValue),d={options:a,value:l,disabled:Object(r["f"])(()=>e.disabled),firstOption:Object(r["f"])(()=>a.value.find(e=>!e.propsRef.disabled)),containsCheckedOption:Object(r["f"])(()=>a.value.some(t=>Object(r["I"])(t.propsRef.value)===Object(r["I"])(e.modelValue))),change(n){var i;if(e.disabled||l.value===n)return!1;let o=null==(i=a.value.find(e=>Object(r["I"])(e.propsRef.value)===Object(r["I"])(n)))?void 0:i.propsRef;return!(null==o?void 0:o.disabled)&&(t("update:modelValue",n),!0)},registerOption(e){var t;let n=Array.from(null==(t=s.value)?void 0:t.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((e,t,n)=>Object.assign(e,{[t.id]:n}),{});a.value.push(e),a.value.sort((e,t)=>n[e.id]-n[t.id])},unregisterOption(e){let t=a.value.findIndex(t=>t.id===e);-1!==t&&a.value.splice(t,1)}};function f(e){if(!s.value||!s.value.contains(e.target))return;let t=a.value.filter(e=>!1===e.propsRef.disabled).map(e=>e.element);switch(e.key){case"ArrowLeft":case"ArrowUp":if(e.preventDefault(),e.stopPropagation(),2===C(t,18)){let e=a.value.find(e=>e.element===document.activeElement);e&&d.change(e.propsRef.value)}break;case"ArrowRight":case"ArrowDown":if(e.preventDefault(),e.stopPropagation(),2===C(t,20)){let e=a.value.find(e=>e.element===document.activeElement);e&&d.change(e.propsRef.value)}break;case" ":{e.preventDefault(),e.stopPropagation();let t=a.value.find(e=>e.element===document.activeElement);t&&d.change(t.propsRef.value)}break}}Object(r["A"])(Ie,d),E({container:Object(r["f"])(()=>p(s)),accept(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let m="headlessui-radiogroup-"+h();return()=>{let{modelValue:t,disabled:r,...a}=e,l={ref:s,id:m,role:"radiogroup","aria-labelledby":c.value,"aria-describedby":u.value,onKeydown:f};return o({props:{...a,...l},slot:{},attrs:n,slots:i,name:"RadioGroup"})}}}),Object(r["n"])({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:n}){let i=Se("RadioGroupOption"),s="headlessui-radiogroup-option-"+h(),c=Te({name:"RadioGroupLabel"}),u=X({name:"RadioGroupDescription"}),l=Object(r["D"])(null),d=Object(r["f"])(()=>({value:e.value,disabled:e.disabled})),f=Object(r["D"])(1);Object(r["v"])(()=>i.registerOption({id:s,element:l,propsRef:d})),Object(r["w"])(()=>i.unregisterOption(s));let p=Object(r["f"])(()=>{var e;return(null==(e=i.firstOption.value)?void 0:e.id)===s}),m=Object(r["f"])(()=>i.disabled.value||e.disabled),v=Object(r["f"])(()=>Object(r["I"])(i.value.value)===Object(r["I"])(e.value)),g=Object(r["f"])(()=>m.value?-1:v.value||!i.containsCheckedOption.value&&p.value?0:-1);function b(){var t;!i.change(e.value)||(f.value|=2,null==(t=l.value)||t.focus())}function y(){f.value|=2}function w(){f.value&=-3}return()=>{let r=a(e,["value","disabled"]),i={checked:v.value,disabled:m.value,active:Boolean(2&f.value)},h={id:s,ref:l,role:"radio","aria-checked":v.value?"true":"false","aria-labelledby":c.value,"aria-describedby":u.value,"aria-disabled":!!m.value||void 0,tabIndex:g.value,onClick:m.value?void 0:b,onFocus:m.value?void 0:y,onBlur:m.value?void 0:w};return o({props:{...r,...h},slot:i,attrs:t,slots:n,name:"RadioGroupOption"})}}});var ke=Symbol("GroupContext"),je=(Object(r["n"])({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let i=Object(r["D"])(null),s=Te({name:"SwitchLabel",props:{onClick(){!i.value||(i.value.click(),i.value.focus({preventScroll:!0}))}}}),a=X({name:"SwitchDescription"});return Object(r["A"])(ke,{switchRef:i,labelledby:s,describedby:a}),()=>o({props:e,slot:{},slots:t,attrs:n,name:"SwitchGroup"})}}),Object(r["n"])({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},setup(e,{emit:t,attrs:n,slots:i}){let s=Object(r["q"])(ke,null),a="headlessui-switch-"+h();function c(){t("update:modelValue",!e.modelValue)}let u=Object(r["D"])(null),l=null===s?u:s.switchRef,d=O(Object(r["f"])(()=>({as:e.as,type:n.type})),l);function f(e){e.preventDefault(),c()}function p(e){"Tab"!==e.key&&e.preventDefault()," "===e.key&&c()}function m(e){e.preventDefault()}return()=>{let t={checked:e.modelValue},r={id:a,ref:l,role:"switch",type:d.value,tabIndex:0,"aria-checked":e.modelValue,"aria-labelledby":null==s?void 0:s.labelledby.value,"aria-describedby":null==s?void 0:s.describedby.value,onClick:f,onKeyup:p,onKeypress:m};return o({props:{...e,...r},slot:t,attrs:n,slots:i,name:"Switch"})}}}),Symbol("TabsContext"));function Ce(e){let t=Object(r["q"])(je,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return t}Object(r["n"])({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n,emit:i}){let s=Object(r["D"])(null),c=Object(r["D"])([]),u=Object(r["D"])([]),l={selectedIndex:s,orientation:Object(r["f"])(()=>e.vertical?"vertical":"horizontal"),activation:Object(r["f"])(()=>e.manual?"manual":"auto"),tabs:c,panels:u,setSelectedIndex(e){s.value!==e&&(s.value=e,i("change",e))},registerTab(e){c.value.includes(e)||c.value.push(e)},unregisterTab(e){let t=c.value.indexOf(e);-1!==t&&c.value.splice(t,1)},registerPanel(e){u.value.includes(e)||u.value.push(e)},unregisterPanel(e){let t=u.value.indexOf(e);-1!==t&&u.value.splice(t,1)}};return Object(r["A"])(je,l),Object(r["N"])(()=>{var t;if(l.tabs.value.length<=0||null===e.selectedIndex&&null!==s.value)return;let n=l.tabs.value.map(e=>p(e)).filter(Boolean),r=n.filter(e=>!e.hasAttribute("disabled")),i=null!=(t=e.selectedIndex)?t:e.defaultIndex;if(i<0)s.value=n.indexOf(r[0]);else if(i>l.tabs.value.length)s.value=n.indexOf(r[r.length-1]);else{let e=n.slice(0,i),t=[...n.slice(i),...e].find(e=>r.includes(e));if(!t)return;s.value=n.indexOf(t)}}),()=>{let r={selectedIndex:s.value};return o({props:a(e,["selectedIndex","defaultIndex","manual","vertical","onChange"]),slot:r,slots:t,attrs:n,name:"TabGroup"})}}}),Object(r["n"])({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let r=Ce("TabList");return()=>{let i={selectedIndex:r.selectedIndex.value},s={role:"tablist","aria-orientation":r.orientation.value};return o({props:{...e,...s},slot:i,attrs:t,slots:n,name:"TabList"})}}}),Object(r["n"])({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n}){let s=Ce("Tab"),a="headlessui-tabs-tab-"+h(),c=Object(r["D"])();Object(r["v"])(()=>s.registerTab(c)),Object(r["w"])(()=>s.unregisterTab(c));let u=Object(r["f"])(()=>s.tabs.value.indexOf(c)),l=Object(r["f"])(()=>u.value===s.selectedIndex.value);function d(e){let t=s.tabs.value.map(e=>p(e)).filter(Boolean);if(" "===e.key||"Enter"===e.key)return e.preventDefault(),e.stopPropagation(),void s.setSelectedIndex(u.value);switch(e.key){case"Home":case"PageUp":return e.preventDefault(),e.stopPropagation(),C(t,1);case"End":case"PageDown":return e.preventDefault(),e.stopPropagation(),C(t,8)}return i(s.orientation.value,{vertical(){return"ArrowUp"===e.key?C(t,18):"ArrowDown"===e.key?C(t,20):void 0},horizontal(){return"ArrowLeft"===e.key?C(t,18):"ArrowRight"===e.key?C(t,20):void 0}})}function f(){var e;null==(e=p(c))||e.focus()}function m(){var t;e.disabled||(null==(t=p(c))||t.focus(),s.setSelectedIndex(u.value))}let v=O(Object(r["f"])(()=>({as:e.as,type:t.type})),c);return()=>{var r,i;let h={selected:l.value},p={ref:c,onKeydown:d,onFocus:"manual"===s.activation.value?f:m,onClick:m,id:a,role:"tab",type:v.value,"aria-controls":null==(i=null==(r=s.panels.value[u.value])?void 0:r.value)?void 0:i.id,"aria-selected":l.value,tabIndex:l.value?0:-1,disabled:!!e.disabled||void 0};return o({props:{...e,...p},slot:h,attrs:t,slots:n,name:"Tab"})}}}),Object(r["n"])({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=Ce("TabPanels");return()=>{let i={selectedIndex:r.selectedIndex.value};return o({props:e,slot:i,attrs:n,slots:t,name:"TabPanels"})}}}),Object(r["n"])({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n}){let i=Ce("TabPanel"),s="headlessui-tabs-panel-"+h(),a=Object(r["D"])();Object(r["v"])(()=>i.registerPanel(a)),Object(r["w"])(()=>i.unregisterPanel(a));let c=Object(r["f"])(()=>i.panels.value.indexOf(a)),u=Object(r["f"])(()=>c.value===i.selectedIndex.value);return()=>{var r,l;let h={selected:u.value},d={ref:a,id:s,role:"tabpanel","aria-labelledby":null==(l=null==(r=i.tabs.value[c.value])?void 0:r.value)?void 0:l.id,tabIndex:u.value?0:-1};return o({props:{...e,...d},slot:h,attrs:t,slots:n,features:3,visible:u.value,name:"TabPanel"})}}});function Ae(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function xe(){let e=[],t=[],n={enqueue(e){t.push(e)},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);n.add(()=>cancelAnimationFrame(t))},nextFrame(...e){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...e)})},setTimeout(...e){let t=setTimeout(...e);n.add(()=>clearTimeout(t))},add(t){e.push(t)},dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function Re(e,...t){e&&t.length>0&&e.classList.add(...t)}function De(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ne(e,t){let n=xe();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,s]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});return 0!==o?n.setTimeout(()=>t("finished"),o+s):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Pe(e,t,n,r,i,o){let s=xe(),a=void 0!==o?Ae(o):()=>{};return De(e,...i),Re(e,...t,...n),s.nextFrame(()=>{De(e,...n),Re(e,...r),s.add(Ne(e,n=>(De(e,...r,...t),Re(e,...i),a(n))))}),s.add(()=>De(e,...t,...n,...r,...i)),s.add(()=>a("cancelled")),s.dispose}function Le(e=""){return e.split(" ").filter(e=>e.trim().length>1)}var Me=Symbol("TransitionContext");function Fe(){return null!==Object(r["q"])(Me,null)}function Ue(){let e=Object(r["q"])(Me,null);if(null===e)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ve(){let e=Object(r["q"])(Be,null);if(null===e)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}var Be=Symbol("NestingContext");function qe(e){return"children"in e?qe(e.children):e.value.filter(({state:e})=>"visible"===e).length>0}function Ge(e){let t=Object(r["D"])([]),n=Object(r["D"])(!1);function o(r,o=1){let s=t.value.findIndex(({id:e})=>e===r);-1!==s&&(i(o,{[0](){t.value.splice(s,1)},[1](){t.value[s].state="hidden"}}),!qe(t)&&n.value&&(null==e||e()))}function s(e){let n=t.value.find(({id:t})=>t===e);return n?"visible"!==n.state&&(n.state="visible"):t.value.push({id:e,state:"visible"}),()=>o(e,0)}return Object(r["v"])(()=>n.value=!0),Object(r["w"])(()=>n.value=!1),{children:t,register:s,unregister:o}}var $e=1,He=Object(r["n"])({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:s}){if(!Fe()&&g())return()=>Object(r["p"])(Ke,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},s);let a=Object(r["D"])(null),c=Object(r["D"])("visible"),u=Object(r["f"])(()=>e.unmount?0:1),{show:l,appear:d}=Ue(),{register:f,unregister:m}=Ve(),v={value:!0},b=h(),w={value:!1},O=Ge(()=>{w.value||(c.value="hidden",m(b),t("afterLeave"))});Object(r["v"])(()=>{let e=f(b);Object(r["w"])(e)}),Object(r["N"])(()=>{if(1===u.value&&b){if(l&&"visible"!==c.value)return void(c.value="visible");i(c.value,{hidden:()=>m(b),visible:()=>f(b)})}});let E=Le(e.enter),_=Le(e.enterFrom),T=Le(e.enterTo),I=Le(e.entered),S=Le(e.leave),k=Le(e.leaveFrom),j=Le(e.leaveTo);function C(e){let n=v.value&&!d.value,r=p(a);!r||!(r instanceof HTMLElement)||n||(w.value=!0,l.value&&t("beforeEnter"),l.value||t("beforeLeave"),e(l.value?Pe(r,E,_,T,I,e=>{w.value=!1,"finished"===e&&t("afterEnter")}):Pe(r,S,k,j,I,e=>{w.value=!1,"finished"===e&&(qe(O)||(c.value="hidden",m(b),t("afterLeave")))})))}return Object(r["v"])(()=>{Object(r["N"])(()=>{if("visible"===c.value){let e=p(a);if(e instanceof Comment&&""===e.data)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})}),Object(r["v"])(()=>{Object(r["M"])([l,d],(e,t,n)=>{C(n),v.value=!1},{immediate:!0})}),Object(r["A"])(Be,O),y(Object(r["f"])(()=>i(c.value,{visible:0,hidden:1}))),()=>{let{appear:t,show:r,enter:i,enterFrom:u,enterTo:l,entered:h,leave:d,leaveFrom:f,leaveTo:p,...m}=e;return o({props:{...m,ref:a},slot:{},slots:s,attrs:n,features:$e,visible:"visible"===c.value,name:"TransitionChild"})}}}),ze=He,Ke=Object(r["n"])({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:s}){let c=b(),u=Object(r["f"])(()=>null===e.show&&null!==c?i(c.value,{[0]:!0,[1]:!1}):e.show);Object(r["N"])(()=>{if(![!0,!1].includes(u.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=Object(r["D"])(u.value?"visible":"hidden"),h=Ge(()=>{l.value="hidden"}),d={value:!0},f={show:u,appear:Object(r["f"])(()=>e.appear||!d.value)};return Object(r["v"])(()=>{Object(r["N"])(()=>{d.value=!1,u.value?l.value="visible":qe(h)||(l.value="hidden")})}),Object(r["A"])(Be,h),Object(r["A"])(Me,f),()=>{let i=a(e,["show","appear","unmount"]),c={unmount:e.unmount};return o({props:{...c,as:"template"},slot:{},slots:{...s,default:()=>[Object(r["p"])(ze,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...c,...i},s.default)]},attrs:{},features:$e,visible:"visible"===l.value,name:"Transition"})}}})},d6d6:function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=s.set,f=s.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),b=n("59ed"),y=n("1626"),w=n("861d"),O=n("19aa"),E=n("8925"),_=n("2266"),T=n("1c7e"),I=n("4840"),S=n("2cf4").set,k=n("b575"),j=n("cdf9"),C=n("44de"),A=n("f069"),x=n("e667"),R=n("01b4"),D=n("69f3"),N=n("94ca"),P=n("b622"),L=n("6069"),M=n("605d"),F=n("2d00"),U=P("species"),V="Promise",B=D.getterFor(V),q=D.set,G=D.getterFor(V),$=d&&d.prototype,H=d,z=$,K=u.TypeError,W=u.document,J=u.process,Q=A.f,X=Q,Y=!!(W&&W.createEvent&&u.dispatchEvent),Z=y(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=N(V,(function(){var e=E(H),t=e!==String(H);if(!t&&66===F)return!0;if(c&&!z["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&L&&!Z})),ue=ce||!T((function(e){H.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!w(e)||!y(t=e.then))&&t},he=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&ve(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(K("Promise-chain cycle")):(r=le(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,k((function(){var n,r=e.reactions;while(n=r.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;Y?(r=W.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&C("Unhandled promise rejection",n)},pe=function(e){h(S,u,(function(){var t,n=e.facade,r=e.value,i=me(e);if(i&&(t=x((function(){M?J.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=M||me(e)?se:oe,t.error))throw t.value}))},me=function(e){return e.rejection!==oe&&!e.parent},ve=function(e){h(S,u,(function(){var t=e.facade;M?J.emit("rejectionHandled",t):fe(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},be=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,de(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw K("Promise can't be resolved itself");var r=le(t);r?k((function(){var n={done:!1};try{h(r,t,ge(ye,n,e),ge(be,n,e))}catch(i){be(n,i,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(i){be({done:!1},i,e)}}};if(ce&&(H=function(e){O(this,z),b(e),h(r,this);var t=B(this);try{e(ge(ye,t),ge(be,t))}catch(n){be(t,n)}},z=H.prototype,r=function(e){q(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:ne,value:void 0})},r.prototype=p(z,{then:function(e,t){var n=G(this),r=Q(I(this,H));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=M?J.domain:void 0,n.state==ne?n.reactions.add(r):k((function(){he(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=B(e);this.promise=e,this.resolve=ge(ye,t),this.reject=ge(be,t)},A.f=Q=function(e){return e===H||e===o?new i(e):X(e)},!c&&y(d)&&$!==Object.prototype)){s=$.then,ae||(f($,"then",(function(e,t){var n=this;return new H((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f($,"catch",z["catch"],{unsafe:!0}));try{delete $.constructor}catch(we){}m&&m($,z)}a({global:!0,wrap:!0,forced:ce},{Promise:H}),v(H,V,!1,!0),g(V),o=l(V),a({target:V,stat:!0,forced:ce},{reject:function(e){var t=Q(this);return h(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ce},{resolve:function(e){return j(c&&this===o?H:this,e)}}),a({target:V,stat:!0,forced:ue},{all:function(e){var t=this,n=Q(t),r=n.resolve,i=n.reject,o=x((function(){var n=b(t.resolve),o=[],s=0,a=1;_(e,(function(e){var c=s++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=Q(t),r=n.reject,i=x((function(){var i=b(t.resolve);_(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]}))},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return ar})),n.d(t,"c",(function(){return ct})),n.d(t,"d",(function(){return ut}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
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
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||b(t)}
/**
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
 */const w=new Map;function O(e){y(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
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
 */function E(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function _(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function j(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function A(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new C(3e4,6e4);
/**
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
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,o={}){return L(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["t"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const o=await P(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function B(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function $(e,t=!1){const n=Object(r["i"])(e),i=await n.getIdToken(t),o=z(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:G(H(o.auth_time)),issuedAtTime:G(H(o.iat)),expirationTime:G(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function K(e){const t=z(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await W(e,q(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["i"])(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */async function ne(e,t){const n=await L(e,{},async()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
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
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:O,providerData:E,stsTokenManager:_}=t;g(y&&_,e,"internal-error");const T=re.fromJSON(this.name,_);g("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(h,e.name),g("boolean"===typeof w,e,"internal-error"),g("boolean"===typeof O,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(v,e.name),ie(b,e.name);const I=new oe({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:O,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:b});return E&&Array.isArray(E)&&(I.providerData=E.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(O(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||O(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["j"])()){return/firefox\//i.test(e)}function de(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["j"])()){return/crios\//i.test(e)}function pe(e=Object(r["j"])()){return/iemobile/i.test(e)}function me(e=Object(r["j"])()){return/android/i.test(e)}function ve(e=Object(r["j"])()){return/blackberry/i.test(e)}function ge(e=Object(r["j"])()){return/webos/i.test(e)}function be(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(r["j"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return Object(r["n"])()&&10===document.documentMode}function Oe(e=Object(r["j"])()){return be(e)||me(e)||ge(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function _e(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["j"])());break;case"Worker":n=`${le(Object(r["j"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
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
 */class Te{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_e(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ie(e){return Object(r["i"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
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
 */async function je(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Ce(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
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
 */
async function Ae(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
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
 */class Re extends ke{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ce(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function De(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
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
 */const Ne="http://localhost";class Pe extends ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Pe(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return De(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,De(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,De(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["t"])(t)}return e}}
/**
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
 */async function Le(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function Fe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),Ue)}
/**
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
 */class Be extends ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Be({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ge(e){const t=Object(r["u"])(Object(r["h"])(e))["link"],n=t?Object(r["u"])(Object(r["h"])(t))["deep_link_id"]:null,i=Object(r["u"])(Object(r["h"])(e))["deep_link_id"],o=i?Object(r["u"])(Object(r["h"])(i))["link"]:null;return o||i||n||t||e}class $e{constructor(e){var t,n,i,o,s,a;const c=Object(r["u"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qe(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ge(e);try{return new $e(t)}catch(n){return null}}}
/**
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
 */
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$e.parseLink(t);return g(n,"argument-error"),Re._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ke extends ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class We extends Ke{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(t){return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com",We.PROVIDER_ID="facebook.com";
/**
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
 */
class Je extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pe._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
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
 */
class Qe extends Ke{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
/**
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
 */
class Xe extends Ke{constructor(){super("twitter.com")}static credential(e,t){return Pe._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Ye(e,t){return M(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
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
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
 */async function rt(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
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
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await W(e,nt(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=z(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
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
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ie(e),t)}async function at(e,t,n){const r=Ie(e),i=await Ye(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["i"])(e),He.credential(t,n))}
/**
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
 */function ut(e){return Object(r["i"])(e).signOut()}
/**
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
 */
function lt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function ht(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const dt="__sak";
/**
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
 */class ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dt,"1"),this.storage.removeItem(dt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function pt(){const e=Object(r["j"])();return de(e)||be(e)}const mt=1e3,vt=10;class gt extends ft{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pt()&&Ee(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gt.type="LOCAL";const bt=gt;
/**
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
 */class yt extends ft{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const wt=yt;
/**
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
 */function Ot(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
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
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Ot(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function _t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Et.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=_t("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
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
 */function It(){return window}function St(e){It().location.href=e}
/**
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
 */function kt(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function jt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ct(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function At(){return kt()?self:null}
/**
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
 */const xt="firebaseLocalStorageDb",Rt=1,Dt="firebaseLocalStorage",Nt="fbase_key";class Pt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lt(e,t){return e.transaction([Dt],t?"readwrite":"readonly").objectStore(Dt)}function Mt(){const e=indexedDB.deleteDatabase(xt);return new Pt(e).toPromise()}function Ft(){const e=indexedDB.open(xt,Rt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Dt,{keyPath:Nt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Dt)?t(n):(n.close(),await Mt(),t(await Ft()))})})}async function Ut(e,t,n){const r=Lt(e,!0).put({[Nt]:t,value:n});return new Pt(r).toPromise()}async function Vt(e,t){const n=Lt(e,!1).get(t),r=await new Pt(n).toPromise();return void 0===r?null:r.value}function Bt(e,t){const n=Lt(e,!0).delete(t);return new Pt(n).toPromise()}const qt=800,Gt=3;class $t{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ft()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Gt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(At()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jt(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ct()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ft();return await Ut(e,dt,"1"),await Bt(e,dt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ut(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Vt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Lt(e,!1).getAll();return new Pt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$t.type="LOCAL";const Ht=$t;
/**
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
 */function zt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Kt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
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
 */
/**
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
 */
function Wt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Wt().appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Qt("rcb"),new C(3e4,6e4);
/**
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
 */
const Xt="recaptcha";async function Yt(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===Xt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Le(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class Zt{constructor(e){this.providerId=Zt.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Yt(this.auth,e,Object(r["i"])(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zt.credentialFromTaggedObject(t)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
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
 */
function en(e,t){return t?O(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Zt.PROVIDER_ID="phone",Zt.PHONE_SIGN_IN_METHOD="phone";class tn extends ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return De(e,this._buildIdpRequest())}_linkToIdToken(e,t){return De(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return De(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nn(e){return ot(e.auth,new tn(e),e.bypassAuthState)}function rn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new tn(e),e.bypassAuthState)}async function on(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new tn(e),e.bypassAuthState)}
/**
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
 */class sn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const an=new C(2e3,1e4);class cn extends sn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,an.get())};e()}}cn.currentPopupAction=null;
/**
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
 */
const un="pendingRedirect",ln=new Map;class hn extends sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ln.get(this.auth._key());if(!e){try{const t=await dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ln.set(this.auth._key(),e)}return this.bypassAuthState||ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(e,t){const n=pn(t),r=fn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function fn(e){return O(e._redirectPersistence)}function pn(e){return ce(un,e.config.apiKey,e.name)}
/**
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
 */async function mn(e,t,n=!1){const r=Ie(e),i=en(r,t),o=new hn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const vn=6e5;class gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
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
 */async function On(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
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
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_n=/^https?/;async function Tn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await On(e);for(const r of t)try{if(In(r))return}catch(n){}f(e,"unauthorized-domain")}function In(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!_n.test(n))return!1;if(En.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
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
 */const Sn=new C(3e4,6e4);function kn(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise((t,n)=>{var r,i,o;function s(){kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kn(),n(p(e,"network-request-failed"))},timeout:Sn.get()})}if(null===(i=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=It().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return It()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Cn=null,e})}let Cn=null;function An(e){return Cn=Cn||jn(e),Cn}
/**
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
 */const xn=new C(5e3,15e3),Rn="__/auth/iframe",Dn="emulator/auth/iframe",Nn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,Dn):`https://${e.config.authDomain}/${Rn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Pn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["t"])(o).slice(1)}`}async function Mn(e){const t=await An(e),n=It().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Ln(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=It().setTimeout(()=>{r(i)},xn.get());function s(){It().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
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
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Un=500,Vn=600,Bn="_blank",qn="http://localhost";class Gn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $n(e,t,n,i=Un,o=Vn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Fn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=fe(l)?Bn:n),he(l)&&(t=t||qn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Hn(t||"",c),new Gn(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Gn(d)}function Hn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const zn="__/auth/handler",Kn="emulator/auth/handler";function Wn(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof ze){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["m"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["t"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?A(e,Kn):`https://${e.authDomain}/${zn}`}
/**
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
 */const Qn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=mn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wn(e,t,n,T(),r);return $n(e,o,_t())}async _openRedirect(e,t,n,r){return await this._originValidation(e),St(Wn(e,t,n,T(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Mn(e),n=new gn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||de()||be()}}const Yn=Xn;class Zn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class er extends Zn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new er(e)}_finalizeEnroll(e,t,n){return ht(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tr{constructor(){}static assertion(e){return er._fromCredential(e)}}tr.FACTOR_ID="phone";var nr="@firebase/auth",rr="0.19.8";
/**
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
 */
class ir{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function or(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_e(e)},s=new Te(t,r);return _(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new ir(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(nr,rr,or(e)),Object(i["g"])(nr,rr,"esm2017")}
/**
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
 */function ar(e=Object(i["e"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():E(e,{popupRedirectResolver:Yn,persistence:[Ht,bt,wt]})}sr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.d45d0de2.js.map