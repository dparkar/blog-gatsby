webpackJsonp([0x67ef26645b2a,60335399758886],{113:function(e,t){e.exports={layoutContext:{}}},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),u=n(209),l=r(u),c=n(113),f=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},428:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function a(e){return function(){return e}}function i(e,t,n,r,o,a,i,u){if(d(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var c=r(n(2)),f=function(){};f.thatReturns=a,f.thatReturnsFalse=a(!1),f.thatReturnsTrue=a(!0),f.thatReturnsNull=a(null),f.thatReturnsThis=function(){return this},f.thatReturnsArgument=function(e){return e};var s=f,d=function(e){},p=i,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(l()?Object.assign:function(e,t){for(var n,r,o=u(e),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var i in n)y.call(n,i)&&(o[i]=n[i]);if(h){r=h(n);for(var l=0;l<r.length;l++)m.call(n,r[l])&&(o[r[l]]=n[r[l]])}}return o},"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),g=b,v=function(){function e(e,t,n,r,o,a){a!==g&&p(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=s,n.PropTypes=n,n},w=o(function(e){e.exports=v()}),x="production",O=function(e,t,n,r,o,a,i,u){if("production"!==x&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},E=O,j=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},_=j,M=function(e){var t=/[height|width]$/;return t.test(e)},T=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,o){var a=e[r];r=_(r),M(r)&&"number"==typeof a&&(a+="px"),t+=a===!0?r:a===!1?"not "+r:"("+r+": "+a+")",o<n.length-1&&(t+=" and ")}),t},P=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=T(n),r<e.length-1&&(t+=", ")}),t):T(e)},R=P,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},C=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},A=function(e){function t(){var n,r,o;k(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=r=W(this,e.call.apply(e,[this].concat(i))),r.state={matches:r.props.defaultMatches},r.updateMatches=function(){return r.setState({matches:r.mediaQueryList.matches})},o=n,W(r,o)}return C(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":S(window))){var e=this.props.targetWindow||window;E("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=R(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function e(){var t=this.props,n=t.children,e=t.render,r=this.state.matches;return e?r?e():null:n?"function"==typeof n?n(r):(!Array.isArray(n)||n.length)&&r?c.Children.only(n):null:null},t}(c.Component);A.propTypes={defaultMatches:w.bool,query:w.oneOfType([w.string,w.object,w.arrayOf(w.object.isRequired)]).isRequired,render:w.func,children:w.oneOfType([w.node,w.func]),targetWindow:w.object},A.defaultProps={defaultMatches:!0},e.exports=A},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(73),u=r(i),l=function(){return a.default.createElement("div",{style:{background:"#f5f5f5",marginBottom:"3rem",borderBottom:"2px solid #e6e6e6"}},a.default.createElement("div",{style:{margin:"0 auto",maxWidth:980,padding:"1.45rem 1.0875rem"}},a.default.createElement("h1",{style:{margin:0,textAlign:"center",fontSize:"18px"}},a.default.createElement(u.default,{to:"/",style:{color:"black",textDecoration:"none"}},"dhawal parkar logs ..."))))};t.default=l,e.exports=t.default},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=function(e){return a.default.createElement("div",{style:{border:"2px solid #e6e6e6",maxWidth:960,padding:"0.5rem",marginBottom:"25px"}},a.default.createElement("strong",null,e.title,".")," ",e.description)};t.default=i,e.exports=t.default},298:function(e,t){},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(7),u=r(i),l=n(428),c=r(l),f=n(207),s=r(f),d=n(208),p=r(d);n(298),n(299);var h=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement(s.default,null),a.default.createElement("div",{style:{margin:"0 auto",maxWidth:980,display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%"}},a.default.createElement(c.default,{query:{maxWidth:848}},function(e){return e?a.default.createElement("div",{style:{margin:"0 auto",maxWidth:980,display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%",padding:"25px"}},a.default.createElement("div",{style:{flex:1}},t())):a.default.createElement("div",{style:{margin:"0 auto",maxWidth:980,display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%",padding:"25px"}},a.default.createElement("div",{style:{flex:2.5,paddingRight:"30px"}},t()),a.default.createElement("div",{style:{flex:1}},a.default.createElement(p.default,{title:"dplogs",description:"Articles on Artifical Intelligence, Robotics and Distributed Systems written by me."}),a.default.createElement(p.default,{title:"About author",description:"Dhawal Parkar"})))})))};h.propTypes={children:u.default.func},t.default=h,e.exports=t.default},299:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-2abfc667c37e6263bd01.js.map