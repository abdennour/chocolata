(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Chocolata = require('../lib/Chocolata').default;

},{"../lib/Chocolata":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chocolata = function () {
  function Chocolata() {
    _classCallCheck(this, Chocolata);
  }

  _createClass(Chocolata, null, [{
    key: 'setItem',
    value: function setItem(name, value) {
      var daysToExpire = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config2.default.daysToExpire;

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        value = JSON.stringify(value);
      }
      var date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      var expires = '; expires=' + date.toUTCString();
      document.cookie = name + '=' + value + expires + '; path=/';
    }
  }, {
    key: 'getStringItem',
    value: function getStringItem(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  }, {
    key: 'getObjectItem',
    value: function getObjectItem(name) {
      return JSON.parse(this.getStringItem(name));
    }
  }, {
    key: 'getItem',
    value: function getItem(name) {
      try {
        return this.getObjectItem(name);
      } catch (e) {
        return this.getStringItem(name);
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(name) {
      this.setItem(name, '', -1);
    }
  }]);

  return Chocolata;
}();

exports.default = Chocolata;
},{"./config":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  daysToExpire: 7
};

exports.default = config;
},{}]},{},[1]);
