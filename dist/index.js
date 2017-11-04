'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var d = function d(s) {
    var e = {},
        i = void 0,
        k = void 0,
        v = [],
        r = '',
        w = String.fromCharCode;
    var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

    for (var z in n) {
        for (var _i = n[z][0]; _i < n[z][1]; _i++) {
            v.push(w(_i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i += 72) {
        var b = 0,
            c = void 0,
            x = void 0,
            l = 0,
            o = s.substring(i, i + 72);
        for (var _x = 0; _x < o.length; _x++) {
            c = e[o.charAt(_x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                r += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return r;
};

var df = d('X3dob19pc19hdXRob3Jf');
var get = function get() {
    return d('VGhpcyBwcm9qZWN0IHdhcyBkZXZlbG9wZWQgYnkgS2F0ZSBEbWl0cmlldmEgYW5kIEFuZHJleSBLb3JpbnNraXksDQpSaWJlcmEgRGlnaXRhbCBTdHVkaW8=');
};
var trim = function trim(v) {
    return v !== df ? v : get();
};

exports.get = get;
exports.trim = trim;