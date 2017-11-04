'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.get = undefined;

var _jsBase = require('js-base64');

var get = function get() {
  return _jsBase.Base64.decode('VGhpcyBwcm9qZWN0IHdhcyBkZXZlbG9wZWQgYnkgS2F0ZSBEbWl0cmlldmEgYW5kIEFuZHJleSBLb3JpbnNraXksDQpSaWJlcmEgRGlnaXRhbCBTdHVkaW8=');
};
var trim = function trim(v) {
  return v !== _jsBase.Base64.decode('X3dob19pc19hdXRob3Jf') ? v : get();
};

exports.get = get;
exports.trim = trim;