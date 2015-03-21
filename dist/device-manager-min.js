/** 
* device-manager - v1.0.1.
* https://github.com/mkay581/device-manager.git
* Copyright 2015 Mark Kennedy. Licensed MIT.
*/

!function t(e,n,r){function i(o,s){if(!n[o]){if(!e[o]){var h="function"==typeof require&&require;if(!s&&h)return h(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var g=n[o]={exports:{}};e[o][0].call(g.exports,function(t){var n=e[o][1][t];return i(n?n:t)},g,g.exports,t,e,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(t,e){"use strict";var n={createTarget:function(t){this._targets=this._targets||[];var e=this._getTargetMap(t);e.target||(t.addEventListener=this._getEventMethod(t,"_addEvent").bind(this),t.removeEventListener=this._getEventMethod(t,"_removeEvent").bind(this),t.dispatchEvent=this._getEventMethod(t,"_dispatchEvent").bind(this),e.target=t,this._targets.push(e))},_getTargetMap:function(t){return this._targets.filter(function(e){return e.target===t})[0]||{}},_addEvent:function(t,e,n,r,i){"boolean"!=typeof r&&(i=r,r=null),r=r||!1;var a=this.getNested(this._getTargetMap(t),e);a||(a=this.setNested(this._getTargetMap(t),e,[]));var o={listener:n,context:i,useCapture:r};-1===a.indexOf(o)&&a.push(o)},_getEventMethod:function(t,e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),this[e].apply(this,n)}.bind(this)},_removeEvent:function(t,e,n){var r=this.getNested(this._getTargetMap(t),e,[]);r.forEach(function(t,e){t.listener===n&&r.splice(e,1)})},_dispatchEvent:function(t,e,n){var r,i=this._getTargetMap(t)||{};i[e]&&i[e].forEach(function(i){r=this._createEvent(e,n),i.listener.call(i.context||t,r)}.bind(this))},_createEvent:function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n},extend:function(t){var e,n,r=t;for(n=1;n<arguments.length;n++){e=arguments[n];for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i])}return r},getNested:function(t,e,n){for(var r=e.split("."),i=t,a=0;a<r.length;a++){if(!i[r[a]]){i=n;break}i=i[r[a]]}return i},setNested:function(t,e,n){for(var r=e.split("."),i=t,a=0;a<r.length;a++){var o=a===r.length-1;o?i[r[a]]=n:(i[r[a]]=i[r[a]]||{},i=i[r[a]])}return n},destroyTarget:function(t){var e=this._getTargetMap(t),n=this._targets.indexOf(e);n>-1&&this._targets.splice(n,1)}};e.exports=n},{}],2:[function(t,e){"use strict";var n=t("event-handler"),r=function(){this.initialize()};r.prototype={initialize:function(){n.createTarget(this),this._getOrientationChangeListener=function(){var t=this;return function(){t._onOrientationChange.bind(t)}},window.addEventListener("orientationchange",this._getOrientationChangeListener())},_onOrientationChange:function(){var t;t=window.innerHeight<=window.innerWidth?"landscape":"portrait",this.dispatchEvent("orientationchange",{orientation:t})},getUserAgent:function(){return window.navigator.userAgent},isBrowser:function(t){var e=t;Array.isArray(t)&&(e=t.join("|"));var n=new RegExp(e,"i");return n.test(this.getUserAgent())},isMobile:function(){return this.isBrowser(["Android","webOS","iPhone","iPad","iPod","BlackBerry","IEMobile","Opera Mini"])},isOS:function(t){var e=t;Array.isArray(t)&&(e=t.join("|"));var n=new RegExp(e,"i");return n.test(this.getUserAgent())},destroy:function(){window.removeEventListener("orientationchange",this._getOrientationChangeListener()),n.destroyTarget(this)}},e.exports=new r},{"event-handler":1}]},{},[2]);