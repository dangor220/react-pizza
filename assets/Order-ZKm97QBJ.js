import{g as Ae,e as T,f as _,h as ze,j as h,u as Ke}from"./index-N1lbtcqW.js";var Re={exports:{}},Ie={exports:{}},Fe={exports:{}},Je="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ge=Je,Ze=Ge;function Te(){}function Ne(){}Ne.resetWarningCache=Te;var Xe=function(){function t(r,a,o,l,u,s){if(s!==Ze){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ne,resetWarningCache:Te};return n.PropTypes=n,n};Fe.exports=Xe();var Qe=Fe.exports;const O=Ae(Qe);var He=function(t,e,n,r,a,o,l,u){if(!t){var s;if(e===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,a,o,l,u],c=0;s=new Error(e.replace(/%s/g,function(){return f[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}},et=He,P=T,ve=et;function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)}function Le(t){return requestAnimationFrame(t)}function ye(t){cancelAnimationFrame(t)}function Y(t){var e=t.ownerDocument;return e.hasFocus()&&e.activeElement===t}function De(t){return t==null?void 0:t.ownerDocument}function tt(t){var e=function(n){var r;return(r=De(n))==null?void 0:r.defaultView}(t);return!!e&&t instanceof e.HTMLElement}function me(t){return P.useCallback(function(){var e=t.current,n=typeof window<"u"&&tt(e);if(!e||!n)return null;if(e.nodeName!=="INPUT"&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},[t])}function nt(t,e){var n,r,a,o,l=P.useRef({start:null,end:null}),u=me(t),s=P.useCallback(function(){return function(m){var g=m.selectionStart,I=m.selectionEnd;return{start:g,end:I,length:I-g}}(u())},[u]),f=P.useCallback(function(){return l.current},[]),c=P.useCallback(function(m){var g=u();g&&Y(g)&&(function(I,v,C){C===void 0&&(C=v),I.setSelectionRange(v,C)}(g,m.start,m.end),l.current=s())},[u,s]),i=P.useCallback(function(){l.current=s()},[s]),d=(n=i,r=P.useRef(null),a=P.useCallback(function(){r.current===null&&function m(){n(),r.current=Le(m)}()},[n]),o=P.useCallback(function(){ye(r.current),r.current=null},[]),P.useEffect(function(){r.current&&(o(),a())},[a,o]),P.useEffect(ye,[]),[a,o]),y=d[0],x=d[1];return P.useLayoutEffect(function(){if(e){var m=u();return m.addEventListener("focus",y),m.addEventListener("blur",x),Y(m)&&y(),function(){m.removeEventListener("focus",y),m.removeEventListener("blur",x),x()}}}),{getSelection:s,getLastSelection:f,setSelection:c}}function rt(t,e){var n=P.useRef(),r=nt(n,e),a=r.getSelection,o=r.getLastSelection,l=r.setSelection,u=function(i,d){var y=me(i),x=P.useRef(d);return{getValue:P.useCallback(function(){return y().value},[y]),getLastValue:P.useCallback(function(){return x.current},[]),setValue:P.useCallback(function(m){x.current=m;var g=y();g&&(g.value=m)},[y])}}(n,t),s=u.getValue,f=u.getLastValue,c=u.setValue;return{inputRef:n,getInputState:function(){return{value:s(),selection:a()}},getLastInputState:function(){return{value:f(),selection:o()}},setInputState:function(i){var d=i.value,y=i.selection;c(d),l(y)}}}var at=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],Ee={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},ot=function(t){var e=this;this.isCharacterAllowedAtPosition=function(n,r){var a=e.maskOptions.maskPlaceholder;return!!e.isCharacterFillingPosition(n,r)||!!a&&a[r]===n},this.isCharacterFillingPosition=function(n,r){var a=e.maskOptions.mask;if(!n||r>=a.length)return!1;if(!e.isPositionEditable(r))return a[r]===n;var o=a[r];return new RegExp(o).test(n)},this.isPositionEditable=function(n){var r=e.maskOptions,a=r.mask,o=r.permanents;return n<a.length&&o.indexOf(n)===-1},this.isValueEmpty=function(n){return n.split("").every(function(r,a){return!e.isPositionEditable(a)||!e.isCharacterFillingPosition(r,a)})},this.isValueFilled=function(n){return e.getFilledLength(n)===e.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(n){var r=e.getFilledLength(n),a=e.getRightEditablePosition(r);return{start:a,end:a}},this.getFilledLength=function(n){return function(r,a){for(var o=r.length-1;o>=0;o--)if(a(r[o],o))return o;return-1}(n.split(""),function(r,a){return e.isPositionEditable(a)&&e.isCharacterFillingPosition(r,a)})+1},this.getStringFillingLengthAtPosition=function(n,r){return n.split("").reduce(function(a,o){return e.insertCharacterAtPosition(a,o,a.length)},function(a,o){o===void 0&&(o=1);for(var l="",u=0;u<o;u++)l+=a;return l}(" ",r)).length-r},this.getLeftEditablePosition=function(n){for(var r=n;r>=0;r--)if(e.isPositionEditable(r))return r;return null},this.getRightEditablePosition=function(n){for(var r=e.maskOptions.mask,a=n;a<r.length;a++)if(e.isPositionEditable(a))return a;return null},this.formatValue=function(n){var r=e.maskOptions,a=r.maskPlaceholder,o=r.mask;if(!a){for(n=e.insertStringAtPosition("",n,0);n.length<o.length&&!e.isPositionEditable(n.length);)n+=o[n.length];return n}return e.insertStringAtPosition(a,n,0)},this.clearRange=function(n,r,a){if(!a)return n;var o=r+a,l=e.maskOptions,u=l.maskPlaceholder,s=l.mask,f=n.split("").map(function(c,i){var d=e.isPositionEditable(i);return!u&&i>=o&&!d?"":i<r||i>=o?c:d?u?u[i]:"":s[i]}).join("");return e.formatValue(f)},this.insertCharacterAtPosition=function(n,r,a){var o=e.maskOptions,l=o.mask,u=o.maskPlaceholder;if(a>=l.length)return n;var s=e.isCharacterAllowedAtPosition(r,a),f=e.isPositionEditable(a),c=e.getRightEditablePosition(a),i=u&&c?r===u[c]:null,d=n.slice(0,a);return!s&&f||(n=d+(s?r:l[a])),s||f||i||(n=e.insertCharacterAtPosition(n,r,a+1)),n},this.insertStringAtPosition=function(n,r,a){var o=e.maskOptions,l=o.mask,u=o.maskPlaceholder;if(!r||a>=l.length)return n;var s=r.split(""),f=e.isValueFilled(n)||!!u,c=n.slice(a);return n=s.reduce(function(i,d){return e.insertCharacterAtPosition(i,d,i.length)},n.slice(0,a)),f?n+=c.slice(n.length-a):e.isValueFilled(n)?n+=l.slice(n.length).join(""):n=c.split("").filter(function(i,d){return e.isPositionEditable(a+d)}).reduce(function(i,d){var y=e.getRightEditablePosition(i.length);return y===null?i:(e.isPositionEditable(i.length)||(i+=l.slice(i.length,y).join("")),e.insertCharacterAtPosition(i,d,i.length))},n),n},this.processChange=function(n,r){var a=e.maskOptions,o=a.mask,l=a.prefix,u=a.lastEditablePosition,s=n.value,f=n.selection,c=r.value,i=r.selection,d=s,y="",x=0,m=0,g=Math.min(i.start,f.start);return f.end>i.start?(y=d.slice(i.start,f.end),m=(x=e.getStringFillingLengthAtPosition(y,g))?i.length:0):d.length<c.length&&(m=c.length-d.length),d=c,m&&(m===1&&!i.length&&(g=i.start===f.start?e.getRightEditablePosition(f.start):e.getLeftEditablePosition(f.start)),d=e.clearRange(d,g,m)),d=e.insertStringAtPosition(d,y,g),(g+=x)>=o.length?g=o.length:g<l.length&&!x?g=l.length:g>=l.length&&g<u&&x&&(g=e.getRightEditablePosition(g)),{value:d=e.formatValue(d),enteredString:y,selection:{start:g,end:g}}},this.maskOptions=function(n){var r=n.mask,a=n.maskPlaceholder,o=[];if(!r)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof r=="string"){var l=!1,u="";r.split("").forEach(function(c){l||c!=="\\"?(!l&&Ee[c]||o.push(u.length),u+=c,l=!1):l=!0}),r=u.split("").map(function(c,i){return o.indexOf(i)===-1?Ee[c]:c})}else r.forEach(function(c,i){typeof c=="string"&&o.push(i)});a&&(a=a.length===1?r.map(function(c,i){return o.indexOf(i)!==-1?c:a}):a.split(""),o.forEach(function(c){a[c]=r[c]}),a=a.join(""));for(var s=o.filter(function(c,i){return c===i}).map(function(c){return r[c]}).join(""),f=r.length-1;o.indexOf(f)!==-1;)f--;return{maskPlaceholder:a,prefix:s,mask:r,lastEditablePosition:f,permanents:o}}(t)},it=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],ce=P.forwardRef(function(t,e){var n=t.alwaysShowMask,r=t.children,a=t.mask,o=t.maskPlaceholder,l=t.beforeMaskedStateChange,u=function(E,b){if(E==null)return{};var p,w,S={},N=Object.keys(E);for(w=0;w<N.length;w++)p=N[w],b.indexOf(p)>=0||(S[p]=E[p]);return S}(t,it);(function(E){var b=E.mask,p=E.maskPlaceholder;b&&p&&p.length!==1&&p.length!==b.length&&ve(!1)})(t);var s,f,c=new ot({mask:a,maskPlaceholder:o}),i=!!a,d=!u.disabled&&!u.readOnly,y=t.value!==null&&t.value!==void 0,x=(s=i,f=P.useRef(),P.useEffect(function(){f.current=s}),f.current),m=function(E){return""+E}((y?t.value:t.defaultValue)||""),g=rt(m,i),I=g.inputRef,v=g.getInputState,C=g.setInputState,R=g.getLastInputState,q=me(I);if(i&&y){var V=q(),z=V&&Y(V)||n||t.value?c.formatValue(t.value):t.value;l&&(z=l({nextState:{value:z,selection:{start:null,end:null}}}).value),C(D({},R(),{value:z}))}var G=R(),se=G.selection,le=G.value;P.useLayoutEffect(function(){if(i){var E=q();if(E){var b=Y(E),p=se,w=v(),S=D({},w);if(!y){var N=w.value,$=c.formatValue(N),L=c.isValueEmpty($);!L||b||n?S.value=$:L&&!b&&(S.value="")}b&&!x?S.selection=c.getDefaultSelectionForValue(S.value):y&&b&&p&&p.start!==null&&p.end!==null&&(S.selection=p),l&&(S=l({currentState:w,nextState:S})),C(S)}}});var Z=function(E){I.current=E,function(b){return typeof b=="function"}(e)?e(E):e!==null&&typeof e=="object"&&(e.current=E)},X=D({},u,{onFocus:function(E){I.current=E.target;var b=v().value;if(i&&!c.isValueFilled(b)){var p=c.formatValue(b),w=c.getDefaultSelectionForValue(p),S={value:p,selection:w};l&&(p=(S=l({currentState:v(),nextState:S})).value,w=S.selection),C(S),p!==b&&t.onChange&&t.onChange(E),Le(function(){C(R())})}t.onFocus&&t.onFocus(E)},onBlur:function(E){var b=v().value,p=R().value;if(i&&!n&&c.isValueEmpty(p)){var w="",S={value:w,selection:{start:null,end:null}};l&&(w=(S=l({currentState:v(),nextState:S})).value),C(S),w!==b&&t.onChange&&t.onChange(E)}t.onBlur&&t.onBlur(E)},onChange:i&&d?function(E){var b=v(),p=R(),w=c.processChange(b,p);l&&(w=l({currentState:b,previousState:p,nextState:w})),C(w),t.onChange&&t.onChange(E)}:t.onChange,onMouseDown:i&&d?function(E){var b=q();if(b){var p=v().value,w=De(b);if(!Y(b)&&!c.isValueFilled(p)){var S=E.clientX,N=E.clientY,$=new Date().getTime();w.addEventListener("mouseup",function L(B){if(w.removeEventListener("mouseup",L),Y(b)){var W=Math.abs(B.clientX-S),ue=Math.abs(B.clientY-N),Q=Math.max(W,ue),J=new Date().getTime()-$;if(Q<=10&&J<=200||Q<=5&&J<=300){var A=R(),H=D({},A,{selection:c.getDefaultSelectionForValue(A.value)});C(H)}}})}t.onMouseDown&&t.onMouseDown(E)}}:t.onMouseDown,value:i&&y?le:t.value});if(r){(function(E,b){at.filter(function(p){return b.props[p]!=null&&b.props[p]!==E[p]}).length&&ve(!1)})(t,r);var K=P.Children.only(r);return P.cloneElement(K,D({},X,{ref:Z}))}return P.createElement("input",D({ref:Z},X))});ce.displayName="InputMask",ce.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},Ie.exports=ce;var st=Ie.exports;Re.exports=st;var lt=Re.exports;const ut=Ae(lt);function be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?be(Object(n),!0).forEach(function(r){Me(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ne(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ne=function(e){return typeof e}:ne=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function Me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ct(t,e){return ft(t)||dt(t,e)||pt(t,e)||ht()}function ft(t){if(Array.isArray(t))return t}function dt(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],a=!0,o=!1,l,u;try{for(n=n.call(t);!(a=(l=n.next()).done)&&(r.push(l.value),!(e&&r.length===e));a=!0);}catch(s){o=!0,u=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw u}}return r}}function pt(t,e){if(t){if(typeof t=="string")return Ce(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(t,e)}}function Ce(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mt=function(e){var n=_.useRef(e);return _.useEffect(function(){n.current=e},[e]),n.current},ie=function(e){return e!==null&&ne(e)==="object"},xe="[object Object]",gt=function t(e,n){if(!ie(e)||!ie(n))return e===n;var r=Array.isArray(e),a=Array.isArray(n);if(r!==a)return!1;var o=Object.prototype.toString.call(e)===xe,l=Object.prototype.toString.call(n)===xe;if(o!==l)return!1;if(!o&&!r)return e===n;var u=Object.keys(e),s=Object.keys(n);if(u.length!==s.length)return!1;for(var f={},c=0;c<u.length;c+=1)f[u[c]]=!0;for(var i=0;i<s.length;i+=1)f[s[i]]=!0;var d=Object.keys(f);if(d.length!==u.length)return!1;var y=e,x=n,m=function(I){return t(y[I],x[I])};return d.every(m)},vt=function(e,n,r){return ie(e)?Object.keys(e).reduce(function(a,o){var l=!ie(n)||!gt(e[o],n[o]);return r.includes(o)?(l&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),a):l?Se(Se({},a||{}),{},Me({},o,e[o])):a},null):null},$e=_.createContext(null);$e.displayName="ElementsContext";var yt=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Ue=_.createContext(null);Ue.displayName="CartElementContext";var Et=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};O.any,O.object;var we=function(e){var n=_.useContext($e);return yt(n,e)},Pe=function(e){var n=_.useContext(Ue);return Et(n,e)};O.func.isRequired;var F=function(e,n,r){var a=!!r,o=_.useRef(r);_.useEffect(function(){o.current=r},[r]),_.useEffect(function(){if(!a||!e)return function(){};var l=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,l),function(){e.off(n,l)}},[a,n,e,o])},bt=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},k=function(e,n){var r="".concat(bt(e),"Element"),a=function(s){var f=s.id,c=s.className,i=s.options,d=i===void 0?{}:i,y=s.onBlur,x=s.onFocus,m=s.onReady,g=s.onChange,I=s.onEscape,v=s.onClick,C=s.onLoadError,R=s.onLoaderStart,q=s.onNetworksChange,V=s.onCheckout,z=s.onLineItemClick,G=s.onConfirm,se=s.onCancel,le=s.onShippingAddressChange,Z=s.onShippingRateChange,X=we("mounts <".concat(r,">")),K=X.elements,E=_.useState(null),b=ct(E,2),p=b[0],w=b[1],S=_.useRef(null),N=_.useRef(null),$=Pe("mounts <".concat(r,">")),L=$.setCart,B=$.setCartState;F(p,"blur",y),F(p,"focus",x),F(p,"escape",I),F(p,"click",v),F(p,"loaderror",C),F(p,"loaderstart",R),F(p,"networkschange",q),F(p,"lineitemclick",z),F(p,"confirm",G),F(p,"cancel",se),F(p,"shippingaddresschange",le),F(p,"shippingratechange",Z);var W;e==="cart"?W=function(H){B(H),m&&m(H)}:m&&(e==="payButton"?W=m:W=function(){m(p)}),F(p,"ready",W);var ue=e==="cart"?function(A){B(A),g&&g(A)}:g;F(p,"change",ue);var Q=e==="cart"?function(A){B(A),V&&V(A)}:V;F(p,"checkout",Q),_.useLayoutEffect(function(){if(S.current===null&&K&&N.current!==null){var A=K.create(e,d);e==="cart"&&L&&L(A),S.current=A,w(A),A.mount(N.current)}},[K,d,L]);var J=mt(d);return _.useEffect(function(){if(S.current){var A=vt(d,J,["paymentRequest"]);A&&S.current.update(A)}},[d,J]),_.useLayoutEffect(function(){return function(){S.current&&(S.current.destroy(),S.current=null)}},[]),_.createElement("div",{id:f,className:c,ref:N})},o=function(s){we("mounts <".concat(r,">")),Pe("mounts <".concat(r,">"));var f=s.id,c=s.className;return _.createElement("div",{id:f,className:c})},l=n?o:a;return l.propTypes={id:O.string,className:O.string,onChange:O.func,onBlur:O.func,onFocus:O.func,onReady:O.func,onEscape:O.func,onClick:O.func,onLoadError:O.func,onLoaderStart:O.func,onNetworksChange:O.func,onCheckout:O.func,onLineItemClick:O.func,onConfirm:O.func,onCancel:O.func,onShippingAddressChange:O.func,onShippingRateChange:O.func,options:O.object},l.displayName=r,l.__elementType=e,l},j=typeof window>"u";k("auBankAccount",j);var St=k("card",j);k("cardNumber",j);k("cardExpiry",j);k("cardCvc",j);k("fpxBank",j);k("iban",j);k("idealBank",j);k("p24Bank",j);k("epsBank",j);k("payment",j);k("payButton",j);k("paymentRequestButton",j);k("linkAuthentication",j);k("address",j);k("shippingAddress",j);k("cart",j);k("paymentMethodMessaging",j);k("affirmMessage",j);k("afterpayClearpayMessage",j);var ge=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,xt=Object.getOwnPropertyNames,wt=Object.prototype.hasOwnProperty,Pt=(t,e)=>{for(var n in e)ge(t,n,{get:e[n],enumerable:!0})},Ot=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of xt(e))!wt.call(t,a)&&a!==n&&ge(t,a,{get:()=>e[a],enumerable:!(r=Ct(e,a))||r.enumerable});return t},kt=t=>Ot(ge({},"__esModule",{value:!0}),t),Oe=(t,e,n)=>new Promise((r,a)=>{var o=s=>{try{u(n.next(s))}catch(f){a(f)}},l=s=>{try{u(n.throw(s))}catch(f){a(f)}},u=s=>s.done?r(s.value):Promise.resolve(s.value).then(o,l);u((n=n.apply(t,e)).next())}),Ve={};Pt(Ve,{SubmissionError:()=>U,appendExtraData:()=>re,createClient:()=>Be,getDefaultClient:()=>Jt,isSubmissionError:()=>Dt});var pe=kt(Ve),M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",jt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function _t(t){t=String(t);for(var e,n,r,a,o="",l=0,u=t.length%3;l<t.length;){if((n=t.charCodeAt(l++))>255||(r=t.charCodeAt(l++))>255||(a=t.charCodeAt(l++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=n<<16|r<<8|a,o+=M.charAt(e>>18&63)+M.charAt(e>>12&63)+M.charAt(e>>6&63)+M.charAt(e&63)}return u?o.slice(0,u-3)+"===".substring(u):o}function At(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!jt.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,n="",r,a,o=0;o<t.length;)e=M.indexOf(t.charAt(o++))<<18|M.indexOf(t.charAt(o++))<<12|(r=M.indexOf(t.charAt(o++)))<<6|(a=M.indexOf(t.charAt(o++))),n+=r===64?String.fromCharCode(e>>16&255):a===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return n}var Rt=()=>navigator.webdriver||!!document.documentElement.getAttribute(At("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,It=class{constructor(){this.loadedAt=Date.now(),this.webdriver=Rt()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},Ft=class{constructor(t){this.kind="success",this.next=t.next}};function Tt(t){return"next"in t&&typeof t.next=="string"}var Nt=class{constructor(t,e){this.paymentIntentClientSecret=t,this.resubmitKey=e,this.kind="stripePluginPending"}};function Lt(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function Dt(t){return t.kind==="error"}var U=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let n of t){if(!n.field){this.formErrors.push({code:n.code&&Mt(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let r=(e=this.fieldErrors.get(n.field))!=null?e:[];r.push({code:n.code&&Ut(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,r)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function Mt(t){return t in $t}var $t={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function Ut(t){return t in Vt}var Vt={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function Bt(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var Wt="3.0.1",Yt=t=>_t(JSON.stringify(t)),qt=t=>{let e=`@formspree/core@${Wt}`;return t?`${t} ${e}`:e};function re(t,e,n){t instanceof FormData?t.append(e,n):t[e]=n}function zt(t){return t!==null&&typeof t=="object"}var Kt=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new It)}submitForm(t,e){return Oe(this,arguments,function*(n,r,a={}){let o=a.endpoint||"https://formspree.io",l=this.project?`${o}/p/${this.project}/f/${n}`:`${o}/f/${n}`,u={Accept:"application/json","Formspree-Client":qt(a.clientName)};this.session&&(u["Formspree-Session-Data"]=Yt(this.session.data())),r instanceof FormData||(u["Content-Type"]="application/json");function s(c){return Oe(this,null,function*(){try{let i=yield(yield fetch(l,{method:"POST",mode:"cors",body:c instanceof FormData?c:JSON.stringify(c),headers:u})).json();if(zt(i)){if(Bt(i))return Array.isArray(i.errors)?new U(...i.errors):new U({message:i.error});if(Lt(i))return new Nt(i.stripe.paymentIntentClientSecret,i.resubmitKey);if(Tt(i))return new Ft({next:i.next})}return new U({message:"Unexpected response format"})}catch(i){let d=i instanceof Error?i.message:`Unknown error while posting to Formspree: ${JSON.stringify(i)}`;return new U({message:d})}})}if(this.stripe&&a.createPaymentMethod){let c=yield a.createPaymentMethod();if(c.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});re(r,"paymentMethod",c.paymentMethod.id);let i=yield s(r);if(i.kind==="error")return i;if(i.kind==="stripePluginPending"){let d=yield this.stripe.handleCardAction(i.paymentIntentClientSecret);if(d.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});r instanceof FormData?r.delete("paymentMethod"):delete r.paymentMethod,re(r,"paymentIntent",d.paymentIntent.id),re(r,"resubmitKey",i.resubmitKey);let y=yield s(r);return ke(y),y}return i}let f=yield s(r);return ke(f),f})}};function ke(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var Be=t=>new Kt(t),Jt=()=>(fe||(fe=Be()),fe),fe,We={};Object.defineProperty(We,"__esModule",{value:!0});function ae(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ae=function(e){return typeof e}:ae=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(t)}var Ye="https://js.stripe.com/v3",Gt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,je="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Zt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Ye,'"]')),n=0;n<e.length;n++){var r=e[n];if(Gt.test(r.src))return r}return null},Xt=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Ye).concat(n);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(r),r},Qt=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:n})},ee=null,Ht=function(e){return ee!==null||(ee=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(je),window.Stripe){n(window.Stripe);return}try{var a=Zt();a&&e?console.warn(je):a||(a=Xt(e)),a.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(o){r(o);return}})),ee},en=function(e,n,r){if(e===null)return null;var a=e.apply(void 0,n);return Qt(a,r),a},_e=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||ae(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},oe,he=!1,qe=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];he=!0;var a=Date.now();return Ht(oe).then(function(o){return en(o,n,a)})};qe.setLoadParameters=function(t){if(he&&oe){var e=_e(t),n=Object.keys(e),r=n.reduce(function(a,o){var l;return a&&t[o]===((l=oe)===null||l===void 0?void 0:l[o])},!0);if(r)return}if(he)throw new Error("You cannot change load parameters after calling loadStripe");oe=_e(t)};We.loadStripe=qe;function te(t){let{prefix:e,field:n,errors:r,...a}=t;if(r==null)return null;let o=n?r.getFieldErrors(n):r.getFormErrors();return o.length===0?null:_.createElement("div",{...a},e?`${e} `:null,o.map(l=>l.message).join(", "))}var tn=_.createContext(null);function nn(){return T.useContext(tn)??{client:pe.getDefaultClient()}}var rn="2.5.1",an=`@formspree/react@${rn}`;function on(t,e={}){let n=nn(),{client:r=n.client,extraData:a,onError:o,onSuccess:l,origin:u}=e,{stripe:s}=r,f=T.useMemo(()=>s==null?void 0:s.elements().getElement(St),[s]);return async function(c){let i=sn(c)?ln(c):c;if(typeof a=="object")for(let[y,x]of Object.entries(a)){let m;typeof x=="function"?m=await x():m=x,m!==void 0&&pe.appendExtraData(i,y,m)}let d=await r.submitForm(t,i,{endpoint:u,clientName:an,createPaymentMethod:s&&f?()=>s.createPaymentMethod({type:"card",card:f,billing_details:un(i)}):void 0});pe.isSubmissionError(d)?o==null||o(d):l==null||l(d)}}function sn(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function ln(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function un(t){let e={address:cn(t)};for(let n of["name","email","phone"]){let r=t instanceof FormData?t.get(n):t[n];r&&typeof r=="string"&&(e[n]=r)}return e}function cn(t){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=t instanceof FormData?t.get(n):t[n];a&&typeof a=="string"&&(e[r]=a)}return e}function fn(t,e={}){let[n,r]=T.useState(null),[a,o]=T.useState(null),[l,u]=T.useState(!1),[s,f]=T.useState(!1),c=on(t,{client:e.client,extraData:e.data,onError(i){r(i),u(!1),f(!1)},onSuccess(i){r(null),o(i),u(!1),f(!0)},origin:e.endpoint});return[{errors:n,result:a,submitting:l,succeeded:s},async function(i){u(!0),await c(i)},function(){r(null),o(null),u(!1),f(!1)}]}const dn="_root_6ceb9_1",pn="_dropdown_6ceb9_5",hn="_suggestion_6ceb9_21",de={root:dn,dropdown:pn,suggestion:hn};function mn(){const[t,e]=T.useState(""),[n,r]=T.useState([]),[a,o]=T.useState(!1),[l,u]=T.useState(-1),[s,f]=T.useState(!1),c=T.useRef(null);T.useEffect(()=>{if(s){f(!1);return}if(t.length<3){r([]),o(!1);return}i()},[t]);const i=async()=>{try{const v=await ze.get("https://suggest-maps.yandex.ru/v1/suggest",{params:{apikey:"e0138f23-d41a-450e-8004-203dc2962ef7",text:t}});r(v.data.results||[]),v.data.results.length>0&&o(!0)}catch(v){console.error("Error fetching suggestions:",v),r([])}},d=v=>{e(v.target.value),u(-1)},y=v=>{v.key==="ArrowDown"?u(C=>{const R=(C+1)%n.length;return I(R),R}):v.key==="ArrowUp"?u(C=>{const R=(C-1+n.length)%n.length;return I(R),R}):v.key==="Enter"?(v.preventDefault(),l>=0&&n[l]&&x(n[l].title.text)):v.key==="Escape"&&o(!1)},x=v=>{f(!0),e(C=>{const R=C.lastIndexOf(",");return R===-1?v:`${C.slice(0,R+1)} ${v}`.trim()}),o(!1),r([])},m=v=>{x(v)},g=()=>{setTimeout(()=>o(!1),200)},I=v=>{const C=c.current;C&&C.children[v]&&C.children[v].scrollIntoView({block:"nearest",inline:"nearest"})};return h.jsxs("div",{className:de.root,children:[h.jsx("input",{type:"text",name:"address",onChange:d,value:t,onKeyDown:y,onBlur:g,onFocus:()=>t.length>=3&&o(!0),placeholder:"Введите адрес",autoComplete:"off",required:!0}),a&&n.length>0&&h.jsx("ul",{className:de.dropdown,ref:c,children:n.map((v,C)=>h.jsx("li",{className:de.suggestion,style:{backgroundColor:C===l?"#f0f0f0":"#fff"},onMouseEnter:()=>u(C),onClick:()=>m(v.title.text),children:v.title.text},C))})]})}function vn(){const t=Ke(u=>u.cart),[e,n]=T.useState({name:"",phone:"",address:"",comments:""}),r=u=>{const s=[];return Object.keys(u).forEach(f=>{u[+f].forEach(c=>{const i=`${c.title} (тесто ${c.type}, ${c.size} см): ${c.count} шт. x ${c.price} ₽ = ${c.count*c.price} ₽`;s.push(i)})}),s.join(`
`)},[a,o]=fn("xzzbvddb",{data:{orderSummary:r(t.items),totalPrice:String(t.totalPrice),totalCount:String(t.totalCount)}});if(a.succeeded)return h.jsx("p",{children:"Thanks for joining!"});const l=u=>{n({...e,[u.target.name]:u.target.value})};return h.jsx("div",{className:"order-container",children:h.jsx("form",{className:"order-form",onSubmit:o,children:h.jsxs("div",{className:"order-columns",children:[h.jsxs("div",{className:"form-fields",children:[h.jsx("h2",{children:"Оформление заказа"}),h.jsxs("div",{className:"form-group",children:[h.jsxs("label",{htmlFor:"name",children:["Имя ",h.jsx("span",{className:"required",children:"*"})]}),h.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,placeholder:"Введите ваше имя",required:!0}),h.jsx(te,{prefix:"Name",field:"name",errors:a.errors})]}),h.jsxs("div",{className:"form-group",children:[h.jsxs("label",{htmlFor:"phone",children:["Телефон ",h.jsx("span",{className:"required",children:"*"})]}),h.jsx(ut,{type:"tel",id:"phone",name:"phone",placeholder:"+7 (___) ___-__-__",required:!0,mask:"+7 (999) 999-99-99",value:e.phone,onChange:l}),h.jsx(te,{prefix:"Phone",field:"phone",errors:a.errors})]}),h.jsxs("div",{className:"form-group",children:[h.jsxs("label",{htmlFor:"address",children:["Адрес ",h.jsx("span",{className:"required",children:"*"})]}),h.jsx(mn,{}),h.jsx(te,{prefix:"Address",field:"address",errors:a.errors})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{htmlFor:"comments",children:"Комментарий"}),h.jsx("textarea",{id:"comments",name:"comments",value:e.comments,onChange:l,placeholder:"Комментарий к заказу"}),h.jsx(te,{prefix:"Comments",field:"comments",errors:a.errors})]})]}),h.jsxs("div",{className:"order-summary",children:[h.jsx("h3",{children:"Ваш заказ"}),h.jsx("ul",{children:Object.keys(t.items).map(u=>t.items[+u].map((s,f)=>h.jsxs("li",{children:[h.jsx("img",{src:s.imageUrl,alt:s.title,className:"pizza-image"}),h.jsxs("div",{className:"pizza-details",children:[h.jsx("span",{children:s.title}),h.jsxs("span",{children:["Тесто ",s.type,", ",s.size," см"]}),h.jsxs("span",{children:["Количество: ",s.count," шт."]}),h.jsxs("span",{children:["Цена за 1 шт: ",s.price," ₽"]})]}),h.jsxs("div",{className:"item-total",children:[h.jsx("strong",{children:"Всего:"})," ",s.price*s.count," ₽"]})]},`${u}-${f}`)))}),h.jsxs("div",{className:"total",children:[h.jsx("strong",{children:"Итого:"}),h.jsxs("span",{children:[t.totalPrice," ₽"]})]}),h.jsx("div",{className:"form-submit",children:h.jsx("button",{className:"btn-submit",disabled:a.submitting,type:"submit",children:"Подтвердить заказ"})})]})]})})})}export{vn as default};
