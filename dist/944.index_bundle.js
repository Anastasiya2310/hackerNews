"use strict";(self.webpackChunkhacker=self.webpackChunkhacker||[]).push([[944],{34:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(466),o=n(74),c=n.n(o),i=n(509),u=n(429);function a(e){var t=e.by,n=e.time,o=e.descendants,c=e.id;return r.createElement(i.S,null,(function(e){var i=e.theme;return r.createElement("div",{className:"meta-info-".concat(i)},r.createElement("span",null,"by ",r.createElement(u.rU,{to:"/user?id=".concat(t)},t)),r.createElement("span",null,"on ",new Date(1e3*n).toLocaleString("en-US",{hour:"numeric",minute:"numeric"})),"number"==typeof o&&r.createElement("span",null,"with ",r.createElement(u.rU,{to:"/post?id=".concat(c)},o),"comments"))}))}a.propTypes={by:c().string.isRequired,time:c().number.isRequired,descendants:c().number,id:c().number.isRequired}},944:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(466),o=n(74),c=n.n(o),i=n(335),u=n(396),a=n(863);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(b,e);var t,n,o,c,l=(o=b,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(c){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function b(){var e;s(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(y(e=l.call.apply(l,[this].concat(n))),"state",{posts:null,error:null,loading:!0}),e}return t=b,(n=[{key:"componentDidMount",value:function(){this.handleFetch()}},{key:"componentDidUpdate",value:function(e){e.type!==this.props.type&&this.handleFetch()}},{key:"handleFetch",value:function(){var e=this;this.setState({posts:null,error:null,loading:!0}),(0,i.hB)(this.props.type).then((function(t){return e.setState({posts:t,error:null,loading:!1})})).catch((function(t){return e.setState({error:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,o=e.posts;return!0===t?r.createElement(u.Z,null):n?r.createElement("p",{className:"center-text error"},n):r.createElement(a.Z,{posts:o})}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),b}(r.Component);b.propTypes={type:c().oneOf(["new","top"])}},863:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(466),o=n(74),c=n.n(o),i=n(105),u=n(34);function a(e){var t=e.posts;return 0===t.length?r.createElement("p",{className:"center-text"},"No posts"):r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.id,className:"post"},r.createElement(i.Z,{url:e.url,title:e.title,id:e.id}),r.createElement(u.Z,{by:e.by,time:e.time,descendants:e.descendants,id:e.id}))})))}a.propTypes={posts:c().array.isRequired}},105:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(466),o=n(74),c=n.n(o),i=n(429);function u(e){var t=e.url,n=e.title,o=e.id;return t?r.createElement("a",{className:"link",href:t},n):r.createElement(i.rU,{className:"link",to:"/post?id=".concat(o)},n)}u.propTypes={url:c().string,title:c().string.isRequired,id:c().number.isRequired}},335:(e,t,n)=>{n.d(t,{BT:()=>p,T6:()=>s,hB:()=>f,iY:()=>a,tH:()=>l});var r="https://hacker-news.firebaseio.com/v0",o=".json?print=pretty";function c(e){return e.filter(Boolean).filter((function(e){return!0!==e.dead}))}function i(e){return e.filter(Boolean).filter((function(e){return!0!==e.deleted}))}function u(e){return e.filter((function(e){return"story"===e.type}))}function a(e){return fetch("".concat(r,"/item/").concat(e).concat(o)).then((function(e){return e.json()}))}function l(e){return Promise.all(e.map(a)).then((function(e){return i(c(e).filter((function(e){return"comment"===e.type})))}))}function s(e){return Promise.all(e.map(a)).then((function(e){return i(u(c(e)))}))}function f(e){return fetch("".concat(r,"/").concat(e,"stories").concat(o)).then((function(e){return e.json()})).then((function(t){if(!t)throw new Error("Error fetching the ".concat(e," posts"));return t.slice(0,50)})).then((function(e){return Promise.all(e.map(a))})).then((function(e){return i(u(c(e)))}))}function p(e){return fetch("".concat(r,"/user/").concat(e).concat(o)).then((function(e){return e.json()}))}}}]);