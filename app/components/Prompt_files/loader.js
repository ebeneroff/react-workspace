!function(t,e){for(var i in e)t[i]=e[i]}(this,function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n=i(12),o=window.Qzzr=window.Qzzr||{};o.Widgets=o.Widgets||n,o.Widgets.initialize()},function(t,e,i){var n=i(7),o=function(){try{return window.self!==window.top}catch(t){return!0}}();e.isMobile=!o&&/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e.decodeStr=function(t){if(t){for(var e="",i=0,n=t.length;n>i;i++)e+=String.fromCharCode(6^t.charCodeAt(i));return e}},e.scrollTo=function(t,e,i){if(t&&"number"==typeof e&&"number"==typeof i&&t.scrollTop!==e){var o=i;n(function r(){var i=10,a=e-t.scrollTop,s=a/o*i;0>=o||Math.abs(a)<Math.abs(s)?t.scrollTop=e:(o-=i,t.scrollTop+=s,n(r))})}},e.elementIsInView=function(t,e){for(var i={top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight};t.offsetParent;)t=t.offsetParent,i.top+=t.offsetTop,i.left+=t.offsetLeft;for(offset in e)i[offset]+=e[offset];return i.top>=$window.pageYOffset&&i.left>=$window.pageXOffset&&i.top+i.height<=$window.pageYOffset+$window.innerHeight&&i.left+i.width<=$window.pageXOffset+$window.innerWidth},e.getDocOffsetTop=function(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e},e.getWindowOffsetTop=function(t){var e=t.ownerDocument.documentElement,i=0;if(!e)return 0;for(i=e.offsetTop+e.clientTop-e.scrollTop;t;)i+=t.offsetTop+t.clientTop-t.scrollTop,t=t.offsetParent;return i},e.toggleBodyActive=function(t){document.body.classList.toggle("qzz-modal-active",t),window.document.getElementsByTagName("html")[0].classList.toggle("qzz-modal-active")},e.toggleViewportMetaTag=function(){var t=0,e=null,i="width=device-width,initial-scale=1.0,user-scalable=no",n=document.querySelector("meta[name=viewport]"),o=document.getElementsByTagName("head")[0];return n?e=n.getAttribute("content"):(n=document.createElement("meta"),n.setAttribute("name","viewport")),function(r){var a=t++%2;r&&(a=0),r===!1&&(a=1),a?e?n.setAttribute("content",e):(n=document.querySelector("meta[name=viewport]"),n.setAttribute("content","width=device-width,initial-scale=1.0,user-scalable=yes")):(e||o.appendChild(n),n.setAttribute("content",i))}}(),e.query=function(t){return t.reduce(function(t,e){return e.value&&t.push(e.name+"="+encodeURIComponent(e.value)),t},[]).join("&")},e.addEventListener=function(t,e,i){if(t.addEventListener)return t.addEventListener(e,i);if(t.attachEvent)return t.attachEvent(e,i);throw new Error("addEventListener not supported")}},function(t,e){function i(t){return t?n(t):void 0}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}t.exports=i,i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},i.prototype.once=function(t,e){function i(){n.off(t,i),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},i.fn=e,this.on(t,i),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks[t];if(!i)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<i.length;o++)if(n=i[o],n===e||n.fn===e){i.splice(o,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),i=this._callbacks[t];if(i){i=i.slice(0);for(var n=0,o=i.length;o>n;++n)i[n].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t}},function(t,e,i){e=t.exports=i(3)(),e.push([t.id,"body.qzz-modal-active,html.qzz-modal-active{overflow:hidden!important;height:100%!important;max-height:100vh!important;width:100%!important;max-width:100%!important;position:relative!important;padding:0!important;margin:0!important}.quizz-container{min-height:1px}.qzz-modal-active *,.qzz-modal-active *:before,.qzz-modal-active *:after{-o-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-webkit-transform:none!important;transform:none!important;-webkit-transform-style:flat!important;position:static!important;z-index:0!important;height:100%!important;overflow:visible!important;content:none!important}.qzz-modal-active iframe{min-height:101vh!important;width:100%!important;position:relative!important}.qzz-modal-active input{display:none!important}.quizz-container{width:auto!important;height:auto!important}.quiz-modal-close{display:none;position:fixed!important;font-family:'Helvetica Neue','Arial',sans-serif!important;top:0!important;right:24px!important;background:rgba(0,0,0,.7)!important;color:#EEEFF8!important;white-space:nowrap!important;border-radius:0 0 2px 2px!important;overflow:hidden!important;padding:0 12px!important;line-height:35px!important;font-size:12px!important;text-align:center!important;text-transform:uppercase!important;font-weight:700!important;height:auto!important;z-index:2147483647!important}.quiz-modal-close:hover{text-decoration:none!important;opacity:.9!important}body .qzz-is-active.quizz-container{background:rgba(34,36,38,.97)!important;position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;width:100%;z-index:2147483646!important;overflow:auto!important;zoom:1;-webkit-overflow-scrolling:touch!important}.qzz-is-active .quiz-modal-content{width:100%!important;position:relative!important}.qzz-is-active .quiz-modal-content:before,.qzz-is-active .quiz-modal-content:after{display:block!important;content:initial!important}.qzz-is-active .quiz-modal-close{display:block!important;z-index:2147483647!important}.qzz-is-paused{position:relative!important;font-family:'Helvetica Neue','Arial',sans-serif}.qzz-is-paused:before{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(34,36,38,.5);z-index:1000001}.qzz-is-paused:after{font-size:14px;text-transform:uppercase;letter-spacing:.05em;font-weight:700;line-height:55px;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:rgba(107,120,133,1);background:#fff;border-radius:10000px;border:3px solid rgba(107,120,133,1);box-shadow:0 3px 4px rgba(34,36,38,.3);content:'Resume quiz';white-space:nowrap;display:block;left:50%;padding:0 26px;position:absolute;top:50%;z-index:1000002}.quiz-modal .fluid-width-video-wrapper[style]{padding-top:0!important;height:100%}.quiz-modal .fluid-width-video-wrapper iframe{width:100%!important;height:100%!important;position:static!important}.quiz-modal-content div{height:100%!important;width:100%!important;padding-bottom:initial!important}",""])},function(t,e,i){(function(e){(function(){var i,n,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(i()-o)/1e6},n=e.hrtime,i=function(){var t;return t=n(),1e9*t[0]+t[1]},o=i()):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(e,i(6))},function(t,e){function i(){c=!1,a.length?l=a.concat(l):u=-1,l.length&&n()}function n(){if(!c){var t=setTimeout(i);c=!0;for(var e=l.length;e;){for(a=l,l=[];++u<e;)a&&a[u].run();u=-1,e=l.length}a=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function r(){}var a,s=t.exports={},l=[],c=!1,u=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new o(t,e)),1!==l.length||c||setTimeout(n,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e,i){for(var n=i(5),o="undefined"==typeof window?{}:window,r=["moz","webkit"],a="AnimationFrame",s=o["request"+a],l=o["cancel"+a]||o["cancelRequest"+a],c=!0,u=0;u<r.length&&!s;u++)s=o[r[u]+"Request"+a],l=o[r[u]+"Cancel"+a]||o[r[u]+"CancelRequest"+a];if(!s||!l){c=!1;var h=0,p=0,d=[],f=1e3/60;s=function(t){if(0===d.length){var e=n(),i=Math.max(0,f-(e-h));h=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(h)}catch(i){setTimeout(function(){throw i},0)}},Math.round(i))}return d.push({handle:++p,callback:t,cancelled:!1}),p},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return c?s.call(o,function(){try{t.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):s.call(o,t)},t.exports.cancel=function(){l.apply(o,arguments)}},function(t,e){"scrollingElement"in document||function(){function t(t){return window.getComputedStyle?getComputedStyle(t,null):t.currentStyle}function e(t){return window.HTMLBodyElement?t instanceof HTMLBodyElement:/body/i.test(t.tagName)}function i(t){for(var i=t;i=i.nextSibling;)if(1==i.nodeType&&e(i))return i;return null}function n(t){return"none"!=t.display&&!("collapse"==t.visibility&&/^table-(.+-group|row|column)$/.test(t.display))}function o(e){var i=t(e),o=t(document.documentElement);return"visible"!=i.overflow&&"visible"!=o.overflow&&n(i)&&n(o)}var r,a=function(){var t=/^CSS1/.test(document.compatMode);if(!t)return!1;if(void 0===r){var e=document.createElement("iframe");e.style.height="1px",(document.body||document.documentElement||document).appendChild(e);var i=e.contentWindow.document;i.write('<!DOCTYPE html><div style="height:9999em">x</div>'),i.close(),r=i.documentElement.scrollHeight>i.body.scrollHeight,e.parentNode.removeChild(e)}return r},s=function(){if(a())return document.documentElement;var t=document.body,e=t&&!/body/i.test(t.tagName);return t=e?i(t):t,t&&o(t)?null:t};Object.defineProperty?Object.defineProperty(document,"scrollingElement",{get:s}):document.__defineGetter__?document.__defineGetter__("scrollingElement",s):(document.scrollingElement=s(),document.attachEvent&&document.attachEvent("onpropertychange",function(){"activeElement"==window.event.propertyName&&(document.scrollingElement=s())}))}()},function(t,e){t.exports='<div class="quiz-modal js-toggle-modal"><style>STYLES</style><div class="quiz-modal-content"><iframe height="100%" width="100%" allowtransparency="TRANSPARENCY" allowfullscreen="true" frameborder="0" scrolling="no" style="border: none;height: 100%;width: 100% !important;position: static;display: block !important;margin: 0 !important;" src="IFRAME_URL"></iframe><span class="quiz-modal-close js-toggle-modal"><span class="quiz-modal-close-label">Close</span></span></div></div>'},function(t,e){t.exports='<div style="text-align: center; padding: 3px; background: #DF534E; color: white;" class="BrowserAlert"><span>Your browser is not supported. Please </span><a href="https://browser-update.org/update.html" target="_blank" style="font-weight: bold; color: white; text-decoration: underline;" class="BrowserAlert-body-link">update your browser</a></div>'},function(t,e,i){function n(t,i,n){e.emit.apply(e,[t,i.source].concat(n))}function o(t){var e=/^qzzr ([^ ]+)(?: (.*))?/.exec(t);return e?[e[1],r(e[2])]:null}function r(t){try{return JSON.parse(t)}catch(e){return t}}var a=i(2),s=i(1).addEventListener;a(e),s(window,"message",function(t){var e=t.data,i=o(e);i&&n("command",t,i)}),e.register=function(t){e.on("command",function(e,i,n){t.ownsFrame(e)&&t.handleCommand(i,n)})}},function(t,e,i){function n(t){a.register(t),s.push(t)}function o(t){var e=document.createElement("div"),i=t.getAttribute("data-qzzr-host"),n=t.getAttribute("data-on-ready");return e.className="quizz-container",e.setAttribute("data-height",t.getAttribute("data-height")||"auto"),e.setAttribute("data-width",t.getAttribute("data-width")||"100%"),e.setAttribute("data-quiz",t.getAttribute("data-quiz")),i&&e.setAttribute("data-qzzr-host",i),n&&e.setAttribute("data-on-ready",n),e}var r=i(14),a=i(11);e.loadQuizzes=e.refresh=e.initialize=function(t){var e,i=document.querySelectorAll(t||".quizz-container"),a=document.getElementsByTagName("script");e=i.length?i:Array.prototype.filter.call(a,function(t){var e=t.src;return e.indexOf("quiz_loader")+e.indexOf("qzzr_loader")>-2}).map(function(t){var e=o(t);return t.parentNode.insertBefore(e,t),e}),Array.prototype.forEach.call(e,function(t){t.qzWidget||n(t.qzWidget=new r(t))})};var s=e.Quizzes=[]},function(t,e,i){function n(t){this.$sf=window.parent.$sf,this.iframe=window.parent.document.getElementById("qzzr-sf-frame"),this.items=[],this.isExpanded=!1,this.activeCall=null,this.widget=t,this.register()}var o=i(1);t.exports=function(t){try{return new n(t)}catch(e){console.error(e)}},n.prototype.resize=function(t,e){e<=t.initialHeight?(this.add("collapse"),this.iframe.setAttribute("height",t.initialHeight+"px")):(this.add("collapse"),this.add("expand",[0,e-t.initialHeight,!0]),this.iframe.setAttribute("height",e+"px"))},n.prototype.register=function(){var t=this,e=t.widget;t.$sf.ext.register(e.initialWidth,e.initialHeight,function(e){setTimeout(function(){var i=t.dequeue(e);i&&i()},30)}),o.isMobile=!1},n.prototype.add=function(t,e){var i=this,n=i.$sf,o={callName:t,f:function(){return n.ext[t].apply(n.ext,e)}},r="expand"===t;if(i.isExpanded!==r){if(i.isExpanded=r,i.activeCall)return i.items.push(o);i.activeCall=o,o.f()}},n.prototype.dequeue=function(t){return-1!=="expanded,collapsed".indexOf(t)&&(this.activeCall=this.items.shift())?this.activeCall.f:null}},function(t,e,i){function n(){}function o(t){var e=this;return e.el=t,t.qzWidget=e,e.id=e.get("quiz"),e.taker=e.get("taker-url"),e.id||e.taker?(e.init(),this.isUnsupported?this.renderUnsupported():(e.listen(),e.render(),e.quizModal=this.el.getElementsByClassName("quiz-modal")[0],e.quizModalContent=e.quizModal.getElementsByClassName("quiz-modal-content")[0],e.scroller=this.el,e.frame=t.querySelector("iframe"),e.setInitialSize(),this.safeframe="true"===this.get("safe-frame")&&i(13)(e),void e.once("show-link",function(){e.showLink()}))):null}var r=i(2),a=i(9),s=i(10),l=i(1),c=l.decodeStr,u=l.scrollTo,h=l.getWindowOffsetTop,p=l.getDocOffsetTop,d=l.toggleBodyActive,f=l.toggleViewportMetaTag,m=l.addEventListener,g=i(4);i(8),t.exports=o,r(o.prototype),o.prototype.init=function(){return this.autoRedirect=!!this.get("auto-redirect"),this.changeCallback=this.getCallback("change-callback"),this.height=this.get("height","auto"),this.hideShareFooter=!!this.get("hide-share-footer"),this.preview=this.get("preview"),this.homeUrl=this.get("h"),this.host=this.get("qzzr-host","https://www.qzzr.com"||"https://www.qzzr.com"),this.minHeight=this.get("min-height","400px"),this.networks=this.get("networks"),this.offset=this.get("offset","0"),this.onReady=this.getCallback("on-ready"),this.transparency=this.get("transparency","false"),this.width=this.get("width","100%"),this.clear=this.get("clear"),this.modalEnabled=l.isMobile&&!this.get("disable-modal"),this.url=this.buildUrl(),this},o.prototype.setInitialSize=function(){var t=this.quizModalContent;this.autoHeight="auto"===this.height,this.initialHeight=parseInt(t.style.height,10),this.initialWidth=parseInt(t.style.width,10),this.docOffsetTop=p(t),t.style.setProperty("height",this.autoHeight?this.minHeight:this.height,"important"),t.style.setProperty("width",this.width),this.clear&&t.style.setProperty("clear",this.clear,"important")},o.prototype.listen=function(){var t=this;return m(t.el,"click",function(){t.handleTouch.apply(t,arguments)},!1),t.on("question:enter",t.changeCallback),t.on("result:enter",t.changeCallback),setTimeout(function(){t.onReady(t)},10),this},o.prototype.render=function(){return this.el.innerHTML=a.replace("TRANSPARENCY",this.transparency).replace("IFRAME_URL",this.url).replace("STYLES",g),this},o.prototype.renderUnsupported=function(){this.el.innerHTML=s},o.prototype.get=function(t,e){return this.el.getAttribute("data-"+t)||e},o.prototype.getCallback=function(t){var e=this.get(t);return e?window[c(e)]||window[e]||n:n},o.prototype.handleCommand=function(t,e){var i=/([^ :]+):(.+)/.exec(t,e);if(i){var n=i[1],o=i[2];if("event"===n)return this.emit(o,e);if("window"!==n)return this;switch(o){case"resize":return this.resize(e);case"enter":return this.openModal();case"scroll-top":return this.scrollToTop(e);case"scroll-bottom":return this.scrollToBottom();case"exit":default:return this}}},o.prototype.handleTouch=function(t){var e=t.target;if(this.hideLink(),!this.modalEnabled)return this;for(;!e.classList.contains("js-toggle-modal")&&e!==this.el&&"html"!==e.nodeName.toLowerCase();)e=e.parentNode;return"html"===e.nodeName.toLowerCase()?this:((e!==this.el||this.el.classList.contains("qzz-is-paused"))&&this.toggleModal(),this)},o.prototype.showLink=function(){return this.el.classList.add("show-qzzr-link"),this},o.prototype.hideLink=function(){return this.el.classList.remove("show-qzzr-link"),this},o.prototype.resize=function(t){if(!this.autoHeight)return this;var e=this.quizModalContent,i=parseInt(t.height,10),n=parseInt(this.minHeight,10),o=parseInt(e.style.height,10);return i=n>i?n:i,o===i?this:(e.style.setProperty("height",i+"px","important"),this.safeframe&&this.safeframe.resize(this,i),this)},o.prototype.ownsFrame=function(t){return this.frame&&this.frame.contentWindow===t},o.prototype.scrollToBottom=function(){if(!this.scroller)return this;var t=this.scroller,e=(this.modalEnabled?this.scroller:document.body,p(t)),i=Math.max(window.document.documentElement.clientHeight,window.innerHeight,0);return setTimeout(function(){var n=e+t.scrollHeight-i;u(this.scroller,n,100)},300),this},o.prototype.scrollToTop=function(t){if(!this.scroller)return this;t=isNaN(t)?0:1*t;var e=1*this.offset,i=document.scrollingElement,n=this.modalEnabled?this.scroller:i,o=h(this.scroller)-t-e,r=p(this.scroller)+t+e;return 0>o&&u(n,r,100),this},o.prototype.buildUrl=function(){if(this.taker)return this.taker;if(!window.btoa)return this.isUnsupported=!0;var t=window.btoa("~/quizzes/"+this.id+"?"+l.query([{name:"state[p_u]",value:window.location},{name:"state[r]",value:document.referrer},{name:"state[n]",value:this.networks},{name:"state[prvw]",value:this.preview},{name:"state[x_id]",value:this.getUrlVar("bmbx_x_id")||this.get("bmbx_x_id")},{name:"state[tm]",value:(this.preview||this.el.hasAttribute("data-bust-cache"))&&(new Date).getTime()}])).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");return this.host+"/widget/quiz/"+t},o.prototype.getUrlVar=function(t){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,i,n){e[i]=n});return e[t]},o.prototype.send=function(t){return this.frame?((this.frame.contentWindow||this.frame).postMessage(t,"*"),this):this},o.prototype.isActive=function(){return this.el.classList.contains("qzz-is-active")},o.prototype.openModal=function(){return this.toggleModal(!0)},o.prototype.closeModal=function(){return this.toggleModal(!1)},o.prototype.toggleModal=function(t){var e="boolean"==typeof t?t:!this.isActive();return this.modalEnabled&&e!==this.isActive()?(f(e),d(e),this.el.classList.toggle("qzz-is-active",e),this.el.classList.toggle("qzz-is-paused",!e),this.send("toggleModalState:"+this.id+":"+e)):this}}]));