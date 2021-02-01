/*! For license information please see commons-4dc31b62462151af50dc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=n("TSYQ"),s=n.n(u);n("E9XD"),n("QLaP");function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,a){var o,u=n,s=u[l(a)],d=u[a],p=c(u,[l(a),a].map(f)),v=t[a],m=function(e,t,n){var a=Object(r.useRef)(void 0!==e),o=Object(r.useState)(t),i=o[0],c=o[1],u=void 0!==e,s=a.current;return a.current=u,!u&&s&&i!==t&&c(t),[u?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,s,e[v]),h=m[0],y=m[1];return i({},p,((o={})[a]=h,o[v]=y,o))}),e)}var p=n("dI71");n("94VI");var v=/-(.)/g;var m=a.a.createContext({});m.Consumer,m.Provider;function h(e,t){var n=Object(r.useContext)(m);return e||n[t]||t}var y=function(e){return e[0].toUpperCase()+(t=e,t.replace(v,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var b=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,u=c(e,["bsPrefix","className","as"]);n=h(n,"navbar-brand");var l=o||(u.href?"a":"span");return a.a.createElement(l,i({},u,{ref:t,className:s()(r,n)}))}));b.displayName="NavbarBrand";var g=b,E=n("dZvc");function x(e,t){return function(e){var t=Object(E.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var w=/([A-Z])/g;var T=/^ms-/;function O(e){return function(e){return e.replace(w,"-$1").toLowerCase()}(e).replace(T,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var S=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(O(t))||x(e).getPropertyValue(O(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!C.test(e))}(a)?n+=O(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(O(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},k=n("SJxq"),j=!1,N=!1;try{var P={get passive(){return j=!0},get once(){return N=j=!0}};k.a&&(window.addEventListener("test",P,P),window.removeEventListener("test",P,!0))}catch(Ve){}var A=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!N){var a=r.once,o=r.capture,i=n;!N&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,j?r:o)}e.addEventListener(t,n,r)};var L=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var I=function(e,t,n,r){return A(e,t,n,r),function(){L(e,t,n,r)}};function R(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=I(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function M(e,t,n,r){var a,o;null==n&&(a=S(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=R(e,n,r),c=I(e,"transitionend",t);return function(){i(),c()}}var D=n("i8i4"),_=n.n(D),K=!1,q=a.a.createContext(null),H=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(p.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[_.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||K?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:_.a.findDOMNode(this);t&&!K?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:_.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,c(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(q.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function U(){}H.contextType=q,H.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:U,onEntering:U,onEntered:U,onExit:U,onExiting:U,onExited:U},H.UNMOUNTED="unmounted",H.EXITED="exited",H.ENTERING="entering",H.ENTERED="entered",H.EXITING="exiting";var B=H;var F,Y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function V(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=z[e];return n+parseInt(S(t,r[0]),10)+parseInt(S(t,r[1]),10)}var W=((F={}).exited="collapse",F.exiting="collapsing",F.entering="collapsing",F.entered="collapse show",F),Z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:V},J=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,u=e.onEntered,l=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,h=e.getDimensionValue,y=void 0===h?V:h,b=c(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof m?m():m,E=Object(r.useMemo)((function(){return Y((function(e){e.style[g]="0"}),n)}),[g,n]),x=Object(r.useMemo)((function(){return Y((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),o)}),[g,o]),w=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=null}),u)}),[g,u]),T=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=y(g,e)+"px",e.offsetHeight}),l)}),[l,y,g]),O=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=null}),f)}),[g,f]);return a.a.createElement(B,i({ref:t,addEndListener:M},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:x,onEntered:w,onExit:T,onExiting:O}),(function(e,t){return a.a.cloneElement(p,i({},t,{className:s()(d,p.props.className,W[e],"width"===g&&"width")}))}))}));J.defaultProps=Z;var X=J,Q=a.a.createContext(null);Q.displayName="NavbarContext";var $=Q,G=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=c(e,["children","bsPrefix"]);return r=h(r,"navbar-collapse"),a.a.createElement($.Consumer,null,(function(e){return a.a.createElement(X,i({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));G.displayName="NavbarCollapse";var ee=G;var te=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function ne(e){var t=te(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var re=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.children,l=e.label,f=e.as,d=void 0===f?"button":f,p=e.onClick,v=c(e,["bsPrefix","className","children","label","as","onClick"]);n=h(n,"navbar-toggler");var m=Object(r.useContext)($)||{},y=m.onToggle,b=m.expanded,g=ne((function(e){p&&p(e),y&&y()}));return"button"===d&&(v.type="button"),a.a.createElement(d,i({},v,{ref:t,onClick:g,"aria-label":l,className:s()(o,n,!b&&"collapsed")}),u||a.a.createElement("span",{className:n+"-icon"}))}));re.displayName="NavbarToggle",re.defaultProps={label:"Toggle navigation"};var ae,oe,ie,ce,ue,se,le,fe,de=re,pe=a.a.createContext(null),ve=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},me=pe,he=(ae="navbar-text",ce=(ie=void 0===(oe={Component:"span"})?{}:oe).displayName,ue=void 0===ce?y(ae):ce,se=ie.Component,le=ie.defaultProps,(fe=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,o=e.as,u=void 0===o?se||"div":o,l=c(e,["className","bsPrefix","as"]),f=h(r,ae);return a.a.createElement(u,i({ref:t,className:s()(n,f)},l))}))).defaultProps=le,fe.displayName=ue,fe),ye=a.a.forwardRef((function(e,t){var n=d(e,{expanded:"onToggle"}),o=n.bsPrefix,u=n.expand,l=n.variant,f=n.bg,p=n.fixed,v=n.sticky,m=n.className,y=n.children,b=n.as,g=void 0===b?"nav":b,E=n.expanded,x=n.onToggle,w=n.onSelect,T=n.collapseOnSelect,O=c(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=h(o,"navbar"),S=Object(r.useCallback)((function(){w&&w.apply(void 0,arguments),T&&E&&x&&x(!1)}),[w,T,E,x]);void 0===O.role&&"nav"!==g&&(O.role="navigation");var k=C+"-expand";"string"==typeof u&&(k=k+"-"+u);var j=Object(r.useMemo)((function(){return{onToggle:function(){return x&&x(!E)},bsPrefix:C,expanded:!!E}}),[C,E,x]);return a.a.createElement($.Provider,{value:j},a.a.createElement(me.Provider,{value:S},a.a.createElement(g,i({ref:t},O,{className:s()(m,C,u&&k,l&&C+"-"+l,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),y)))}));ye.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ye.displayName="Navbar",ye.Brand=g,ye.Toggle=de,ye.Collapse=ee,ye.Text=he;var be=ye,ge=(n("K9S6"),a.a.createContext(null));ge.displayName="CardContext";var Ee=ge,xe=Function.prototype.bind.call(Function.prototype.call,[].slice);var we=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var Te=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=we(e),r=we(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},Oe=a.a.createContext(null);Oe.displayName="NavContext";var Ce=Oe,Se=a.a.createContext(null),ke=function(){},je=a.a.forwardRef((function(e,t){var n,o,u=e.as,s=void 0===u?"ul":u,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=c(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(r.useReducer)((function(e){return!e}),!1)[1],h=Object(r.useRef)(!1),y=Object(r.useContext)(me),b=Object(r.useContext)(Se);b&&(d=d||"tablist",f=b.activeKey,n=b.getControlledId,o=b.getControllerId);var g=Object(r.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",xe(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},x=function(e,t){null!=e&&(l&&l(e,t),y&&y(e,t))};Object(r.useEffect)((function(){if(g.current&&h.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var w=Te(t,g);return a.a.createElement(me.Provider,{value:x},a.a.createElement(Ce.Provider,{value:{role:d,activeKey:ve(f),getControlledId:n||ke,getControllerId:o||ke}},a.a.createElement(s,i({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),h.current=!0,m())},ref:w,role:d}))))})),Ne=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,u=e.as,l=void 0===u?"div":u,f=c(e,["bsPrefix","className","children","as"]);return n=h(n,"nav-item"),a.a.createElement(l,i({},f,{ref:t,className:s()(r,n)}),o)}));Ne.displayName="NavItem";var Pe=Ne;function Ae(e){return!e||"#"===e.trim()}var Le=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,o=e.disabled,u=e.onKeyDown,s=c(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(o||Ae(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return Ae(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),o&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,i({ref:t},s,{onClick:l,onKeyDown:Y((function(e){" "===e.key&&(e.preventDefault(),l(e))}),u)}))}));Le.displayName="SafeAnchor";var Ie=Le,Re=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,o=e.className,u=e.eventKey,l=e.onSelect,f=e.onClick,d=e.as,p=c(e,["active","className","eventKey","onSelect","onClick","as"]),v=ve(u,p.href),m=Object(r.useContext)(me),h=Object(r.useContext)(Ce),y=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var b=h.getControllerId(v),g=h.getControlledId(v);p["data-rb-event-key"]=v,p.id=b||p.id,p["aria-controls"]=g||p["aria-controls"],y=null==n&&null!=v?h.activeKey===v:n}"tab"===p.role&&(p.tabIndex=y?p.tabIndex:-1,p["aria-selected"]=y);var E=ne((function(e){f&&f(e),null!=v&&(l&&l(v,e),m&&m(v,e))}));return a.a.createElement(d,i({},p,{ref:t,onClick:E,className:s()(o,y&&"active")}))})));Re.defaultProps={disabled:!1};var Me=Re,De={disabled:!1,as:Ie},_e=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,u=e.href,l=e.eventKey,f=e.onSelect,d=e.as,p=c(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=h(n,"nav-link"),a.a.createElement(Me,i({},p,{href:u,ref:t,eventKey:l,as:d,disabled:r,onSelect:f,className:s()(o,n,r&&"disabled")}))}));_e.displayName="NavLink",_e.defaultProps=De;var Ke=_e,qe=a.a.forwardRef((function(e,t){var n,o,u,l=d(e,{activeKey:"onSelect"}),f=l.as,p=void 0===f?"div":f,v=l.bsPrefix,m=l.variant,y=l.fill,b=l.justify,g=l.navbar,E=l.className,x=l.children,w=l.activeKey,T=c(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),O=h(v,"nav"),C=!1,S=Object(r.useContext)($),k=Object(r.useContext)(Ee);return S?(o=S.bsPrefix,C=null==g||g):k&&(u=k.cardHeaderBsPrefix),a.a.createElement(je,i({as:p,ref:t,activeKey:w,className:s()(E,(n={},n[O]=!C,n[o+"-nav"]=C,n[u+"-"+m]=!!u,n[O+"-"+m]=!!m,n[O+"-fill"]=y,n[O+"-justified"]=b,n))},T),x)}));qe.displayName="Nav",qe.defaultProps={justify:!1,fill:!1},qe.Item=Pe,qe.Link=Ke;var He=qe,Ue=n("oEq0"),Be=(n("sR/7"),function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=Object(r.useRef)();return i.current=t,Object(r.useEffect)((function(){var e=function(){var e=window.scrollY>50;i.current!==e&&n(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),a.a.createElement(be,{expand:"md",fixed:"top",style:{transition:"1s ease",backgroundColor:t?"white":"transparent"}},a.a.createElement(o.Link,{to:"/",className:"navLink px-1"},"JC"),a.a.createElement(He,{className:"mx-auto navInfo"},a.a.createElement(o.Link,{to:"/about/",className:"navLink"},"O mnie"),a.a.createElement(o.Link,{to:"/training/",className:"navLink"},"Trening"),a.a.createElement(Ue.AnchorLink,{to:"/#contact",className:"navLink stripped",stripHash:!0},"Kontakt")),a.a.createElement(He,null,a.a.createElement(He.Link,null,"PL"),a.a.createElement(He.Link,null,"EN")))}),Fe=(n("8ypT"),["xl","lg","md","sm","xs"]),Ye=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,u=void 0===o?"div":o,l=c(e,["bsPrefix","className","as"]),f=h(n,"col"),d=[],p=[];return Fe.forEach((function(e){var t,n,r,a=l[e];if(delete l[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+f+i:""+f+i+"-"+t),null!=r&&p.push("order"+i+"-"+r),null!=n&&p.push("offset"+i+"-"+n)})),d.length||d.push(f),a.a.createElement(u,i({},l,{ref:t,className:s.a.apply(void 0,[r].concat(d,p))}))}));Ye.displayName="Col";var ze=Ye;t.a=function(e){var t,n=e.children,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement("div",{className:"container wrapper col-12"},a.a.createElement(ze,{md:12,lg:12,className:"align-self-center px-0"},a.a.createElement(Be,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Jakub Chabrowski - Trener Personalny Gdynia"}),a.a.createElement("div",{className:"container content-wrapper col-sm-12 px-0"},n)))}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=f;var r=c(n("q1tI")),a=n("Wbzz"),o=c(n("17x9")),i=n("dj5g");function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.to,n=e.title,o=e.children,c=e.className,u=e.stripHash,l=void 0!==u&&u,f=e.gatsbyLinkProps,d=void 0===f?{}:f,p=e.onAnchorLinkClick,v=l?i.handleStrippedLinkClick:i.handleLinkClick,m=s(s({},d),{},{to:l?(0,i.stripHashedLocation)(t):t,onClick:function(e){return v(t,e,p)}});return n&&(m.title=n),c&&(m.className=c),r.default.createElement(a.Link,m,o||n)}f.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],i[s[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n("F0uZ")},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",u=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("E9XD");var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),v=n.n(p),m=n("YVoz"),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",T="href",O="http-equiv",C="innerHTML",S="itemprop",k="name",j="property",N="rel",P="src",A="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",K=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[E.NOSCRIPT,E.SCRIPT,E.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,E.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},Z=function(e){return $(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(E.BODY,r),ue(E.HTML,a),ce(f,d);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},v={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,v,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(E.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[v.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),v.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,c,r),script:de(E.SCRIPT,u,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},ve=l()((function(e){return{baseTag:X([T,A],e),bodyAttributes:J(y,e),defer:$(e,R),encode:$(e,M),htmlAttributes:J(b,e),linkTags:Q(E.LINK,[N,T],e),metaTags:Q(E.META,[k,x,O,j,S],e),noscriptTags:Q(E.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:Q(E.SCRIPT,[P,C],e),styleTags:Q(E.STYLE,[w],e),title:W(e),titleAttributes:J(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),me=(a=ve,i=o=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case E.BODY:return F({},a,{bodyAttributes:F({},o)});case E.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return v.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),v.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(v.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},"sR/7":function(e,t,n){},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t,n,r=e.description,c=e.lang,u=e.meta,s=e.title,l=Object(i.useStaticQuery)("63159454").site,f=r||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(o.a,{htmlAttributes:{lang:c},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=commons-4dc31b62462151af50dc.js.map