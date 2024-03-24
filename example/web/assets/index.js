// build/_snowpack/pkg/@mediapipe/tasks-vision.js
var t = typeof self != "undefined" ? self : {};
function e(e2) {
  t: {
    for (var n2 = ["CLOSURE_FLAGS"], r2 = t, s2 = 0; s2 < n2.length; s2++)
      if ((r2 = r2[n2[s2]]) == null) {
        n2 = null;
        break t;
      }
    n2 = r2;
  }
  return (e2 = n2 && n2[e2]) != null && e2;
}
function n() {
  throw Error("Invalid UTF8");
}
function r(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), t2 == null ? e2 : t2 + e2;
}
var s;
var i;
var o = typeof TextDecoder != "undefined";
var a;
var h = typeof TextEncoder != "undefined";
function c(t2) {
  if (h)
    t2 = (a || (a = new TextEncoder())).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let s2 = 0; s2 < t2.length; s2++) {
      var e2 = t2.charCodeAt(s2);
      if (128 > e2)
        r2[n2++] = e2;
      else {
        if (2048 > e2)
          r2[n2++] = e2 >> 6 | 192;
        else {
          if (55296 <= e2 && 57343 >= e2) {
            if (56319 >= e2 && s2 < t2.length) {
              const i2 = t2.charCodeAt(++s2);
              if (56320 <= i2 && 57343 >= i2) {
                e2 = 1024 * (e2 - 55296) + i2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              s2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
var u;
var l = e(610401301);
var d = e(188588736);
var f = t.navigator;
function p(t2) {
  return !!l && (!!u && u.brands.some(({brand: e2}) => e2 && e2.indexOf(t2) != -1));
}
function g(e2) {
  var n2;
  return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), n2.indexOf(e2) != -1;
}
function m() {
  return !!l && (!!u && 0 < u.brands.length);
}
function y() {
  return m() ? p("Chromium") : (g("Chrome") || g("CriOS")) && !(!m() && g("Edge")) || g("Silk");
}
u = f && f.userAgentData || null;
var _ = !m() && (g("Trident") || g("MSIE"));
!g("Android") || y(), y(), g("Safari") && (y() || !m() && g("Coast") || !m() && g("Opera") || !m() && g("Edge") || (m() ? p("Microsoft Edge") : g("Edg/")) || m() && p("Opera"));
var v = {};
var E = null;
function w(t2) {
  var e2 = t2.length, n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : "=.".indexOf(t2[e2 - 1]) != -1 && (n2 = "=.".indexOf(t2[e2 - 2]) != -1 ? n2 - 2 : n2 - 1);
  var r2 = new Uint8Array(n2), s2 = 0;
  return function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        var n4 = t3.charAt(r3++), s4 = E[n4];
        if (s4 != null)
          return s4;
        if (!/^[\s\xa0]*$/.test(n4))
          throw Error("Unknown base64 encoding at char: " + n4);
      }
      return e4;
    }
    T();
    for (var r3 = 0; ; ) {
      var s3 = n3(-1), i2 = n3(0), o2 = n3(64), a2 = n3(64);
      if (a2 === 64 && s3 === -1)
        break;
      e3(s3 << 2 | i2 >> 4), o2 != 64 && (e3(i2 << 4 & 240 | o2 >> 2), a2 != 64 && e3(o2 << 6 & 192 | a2));
    }
  }(t2, function(t3) {
    r2[s2++] = t3;
  }), s2 !== n2 ? r2.subarray(0, s2) : r2;
}
function T() {
  if (!E) {
    E = {};
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"], n2 = 0; 5 > n2; n2++) {
      var r2 = t2.concat(e2[n2].split(""));
      v[n2] = r2;
      for (var s2 = 0; s2 < r2.length; s2++) {
        var i2 = r2[s2];
        E[i2] === void 0 && (E[i2] = s2);
      }
    }
  }
}
var A = typeof Uint8Array != "undefined";
var b = !_ && typeof btoa == "function";
function k(t2) {
  if (!b) {
    var e2;
    e2 === void 0 && (e2 = 0), T(), e2 = v[e2];
    var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
    let h2 = 0, c2 = 0;
    for (; h2 < t2.length - 2; h2 += 3) {
      var s2 = t2[h2], i2 = t2[h2 + 1], o2 = t2[h2 + 2], a2 = e2[s2 >> 2];
      s2 = e2[(3 & s2) << 4 | i2 >> 4], i2 = e2[(15 & i2) << 2 | o2 >> 6], o2 = e2[63 & o2], n2[c2++] = a2 + s2 + i2 + o2;
    }
    switch (a2 = 0, o2 = r2, t2.length - h2) {
      case 2:
        o2 = e2[(15 & (a2 = t2[h2 + 1])) << 2] || r2;
      case 1:
        t2 = t2[h2], n2[c2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + o2 + r2;
    }
    return n2.join("");
  }
  for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; )
    e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
  return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
}
var x = /[-_.]/g;
var S = {"-": "+", _: "/", ".": "="};
function L(t2) {
  return S[t2] || "";
}
function F(t2) {
  if (!b)
    return w(t2);
  x.test(t2) && (t2 = t2.replace(x, L)), t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++)
    e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function R(t2) {
  return A && t2 != null && t2 instanceof Uint8Array;
}
var M;
function P() {
  return M || (M = new Uint8Array(0));
}
var O = {};
var C;
function I(t2) {
  if (t2 !== O)
    throw Error("illegal external caller");
}
function D() {
  return C || (C = new U(null, O));
}
function N(t2) {
  I(O);
  var e2 = t2.g;
  return (e2 = e2 == null || R(e2) ? e2 : typeof e2 == "string" ? F(e2) : null) == null ? e2 : t2.g = e2;
}
var U = class {
  constructor(t2, e2) {
    if (I(e2), this.g = t2, t2 != null && t2.length === 0)
      throw Error("ByteString should be constructed with non-empty values");
  }
  h() {
    const t2 = N(this);
    return t2 ? new Uint8Array(t2) : P();
  }
};
function B(t2, e2) {
  return Error(`Invalid wire type: ${t2} (at position ${e2})`);
}
function G() {
  return Error("Failed to read varint, encoding is invalid.");
}
function j(t2, e2) {
  return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
}
function V(t2) {
  if (typeof t2 == "string")
    return {buffer: F(t2), N: false};
  if (Array.isArray(t2))
    return {buffer: new Uint8Array(t2), N: false};
  if (t2.constructor === Uint8Array)
    return {buffer: t2, N: false};
  if (t2.constructor === ArrayBuffer)
    return {buffer: new Uint8Array(t2), N: false};
  if (t2.constructor === U)
    return {buffer: N(t2) || P(), N: true};
  if (t2 instanceof Uint8Array)
    return {buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), N: false};
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function X() {
  return typeof BigInt == "function";
}
var H = typeof Uint8Array.prototype.slice == "function";
var W;
var z = 0;
var K = 0;
function Y(t2) {
  const e2 = 0 > t2;
  let n2 = (t2 = Math.abs(t2)) >>> 0;
  if (t2 = Math.floor((t2 - n2) / 4294967296), e2) {
    const [e3, r2] = nt(n2, t2);
    t2 = r2, n2 = e3;
  }
  z = n2 >>> 0, K = t2 >>> 0;
}
function $(t2) {
  const e2 = W || (W = new DataView(new ArrayBuffer(8)));
  e2.setFloat32(0, +t2, true), K = 0, z = e2.getUint32(0, true);
}
function q(t2, e2) {
  return 4294967296 * e2 + (t2 >>> 0);
}
function J(t2, e2) {
  const n2 = 2147483648 & e2;
  return n2 && (e2 = ~e2 >>> 0, (t2 = 1 + ~t2 >>> 0) == 0 && (e2 = e2 + 1 >>> 0)), t2 = q(t2, e2), n2 ? -t2 : t2;
}
function Z(t2, e2) {
  if (t2 >>>= 0, 2097151 >= (e2 >>>= 0))
    var n2 = "" + (4294967296 * e2 + t2);
  else
    X() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, 1e7 <= t2 && (n2 += Math.floor(t2 / 1e7), t2 %= 1e7), 1e7 <= n2 && (e2 += Math.floor(n2 / 1e7), n2 %= 1e7), n2 = e2 + Q(n2) + Q(t2));
  return n2;
}
function Q(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function tt() {
  var t2 = z, e2 = K;
  if (2147483648 & e2)
    if (X())
      t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
    else {
      const [n2, r2] = nt(t2, e2);
      t2 = "-" + Z(n2, r2);
    }
  else
    t2 = Z(t2, e2);
  return t2;
}
function et(t2) {
  if (16 > t2.length)
    Y(Number(t2));
  else if (X())
    t2 = BigInt(t2), z = Number(t2 & BigInt(4294967295)) >>> 0, K = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +(t2[0] === "-");
    K = z = 0;
    const n2 = t2.length;
    for (let r2 = e2, s2 = (n2 - e2) % 6 + e2; s2 <= n2; r2 = s2, s2 += 6) {
      const e3 = Number(t2.slice(r2, s2));
      K *= 1e6, z = 1e6 * z + e3, 4294967296 <= z && (K += Math.trunc(z / 4294967296), K >>>= 0, z >>>= 0);
    }
    if (e2) {
      const [t3, e3] = nt(z, K);
      z = t3, K = e3;
    }
  }
}
function nt(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
function rt(t2, e2) {
  let n2, r2 = 0, s2 = 0, i2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    n2 = o2[a2++], r2 |= (127 & n2) << i2, i2 += 7;
  } while (32 > i2 && 128 & n2);
  for (32 < i2 && (s2 |= (127 & n2) >> 4), i2 = 3; 32 > i2 && 128 & n2; i2 += 7)
    n2 = o2[a2++], s2 |= (127 & n2) << i2;
  if (lt(t2, a2), 128 > n2)
    return e2(r2 >>> 0, s2 >>> 0);
  throw G();
}
function st(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, s2 = t2.h;
  for (; n2 < r2; ) {
    const r3 = s2[n2++];
    if (e2 |= r3, (128 & r3) == 0)
      return lt(t2, n2), !!(127 & e2);
  }
  throw G();
}
function it(t2) {
  const e2 = t2.h;
  let n2 = t2.g, r2 = e2[n2++], s2 = 127 & r2;
  if (128 & r2 && (r2 = e2[n2++], s2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], s2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], s2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], s2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++])))))
    throw G();
  return lt(t2, n2), s2;
}
function ot(t2) {
  return it(t2) >>> 0;
}
function at(t2) {
  var e2 = t2.h;
  const n2 = t2.g, r2 = e2[n2], s2 = e2[n2 + 1], i2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], lt(t2, t2.g + 4), (r2 << 0 | s2 << 8 | i2 << 16 | e2 << 24) >>> 0;
}
function ht(t2) {
  var e2 = at(t2);
  t2 = 2 * (e2 >> 31) + 1;
  const n2 = e2 >>> 23 & 255;
  return e2 &= 8388607, n2 == 255 ? e2 ? NaN : 1 / 0 * t2 : n2 == 0 ? t2 * Math.pow(2, -149) * e2 : t2 * Math.pow(2, n2 - 150) * (e2 + Math.pow(2, 23));
}
function ct(t2) {
  return it(t2);
}
function ut(t2, e2, {ca: n2 = false} = {}) {
  t2.ca = n2, e2 && (e2 = V(e2), t2.h = e2.buffer, t2.m = e2.N, t2.j = 0, t2.l = t2.h.length, t2.g = t2.j);
}
function lt(t2, e2) {
  if (t2.g = e2, e2 > t2.l)
    throw j(t2.l, e2);
}
function dt(t2, e2) {
  if (0 > e2)
    throw Error(`Tried to read a negative byte length: ${e2}`);
  const n2 = t2.g, r2 = n2 + e2;
  if (r2 > t2.l)
    throw j(e2, t2.l - n2);
  return t2.g = r2, n2;
}
function ft(t2, e2) {
  if (e2 == 0)
    return D();
  var n2 = dt(t2, e2);
  return t2.ca && t2.m ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? P() : H ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), n2.length == 0 ? D() : new U(n2, O);
}
var pt = [];
function gt(t2) {
  var e2 = t2.g;
  if (e2.g == e2.l)
    return false;
  t2.l = t2.g.g;
  var n2 = ot(t2.g);
  if (e2 = n2 >>> 3, !(0 <= (n2 &= 7) && 5 >= n2))
    throw B(n2, t2.l);
  if (1 > e2)
    throw Error(`Invalid field number: ${e2} (at position ${t2.l})`);
  return t2.m = e2, t2.h = n2, true;
}
function mt(t2) {
  switch (t2.h) {
    case 0:
      t2.h != 0 ? mt(t2) : st(t2.g);
      break;
    case 1:
      lt(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (t2.h != 2)
        mt(t2);
      else {
        var e2 = ot(t2.g);
        lt(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      lt(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.m; ; ) {
        if (!gt(t2))
          throw Error("Unmatched start-group tag: stream EOF");
        if (t2.h == 4) {
          if (t2.m != e2)
            throw Error("Unmatched end-group tag");
          break;
        }
        mt(t2);
      }
      break;
    default:
      throw B(t2.h, t2.l);
  }
}
function yt(t2, e2, n2) {
  const r2 = t2.g.l, s2 = ot(t2.g), i2 = t2.g.g + s2;
  let o2 = i2 - r2;
  if (0 >= o2 && (t2.g.l = i2, n2(e2, t2, void 0, void 0, void 0), o2 = i2 - t2.g.g), o2)
    throw Error(`Message parsing ended unexpectedly. Expected to read ${s2} bytes, instead read ${s2 - o2} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return t2.g.g = i2, t2.g.l = r2, e2;
}
function _t(t2) {
  var e2 = ot(t2.g), a2 = dt(t2 = t2.g, e2);
  if (t2 = t2.h, o) {
    var h2, c2 = t2;
    (h2 = i) || (h2 = i = new TextDecoder("utf-8", {fatal: true})), e2 = a2 + e2, c2 = a2 === 0 && e2 === c2.length ? c2 : c2.subarray(a2, e2);
    try {
      var u2 = h2.decode(c2);
    } catch (t3) {
      if (s === void 0) {
        try {
          h2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          h2.decode(new Uint8Array([97])), s = true;
        } catch (t4) {
          s = false;
        }
      }
      throw !s && (i = void 0), t3;
    }
  } else {
    e2 = (u2 = a2) + e2, a2 = [];
    let s2, i2 = null;
    for (; u2 < e2; ) {
      var l2 = t2[u2++];
      128 > l2 ? a2.push(l2) : 224 > l2 ? u2 >= e2 ? n() : (s2 = t2[u2++], 194 > l2 || (192 & s2) != 128 ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & s2)) : 240 > l2 ? u2 >= e2 - 1 ? n() : (s2 = t2[u2++], (192 & s2) != 128 || l2 === 224 && 160 > s2 || l2 === 237 && 160 <= s2 || (192 & (h2 = t2[u2++])) != 128 ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & s2) << 6 | 63 & h2)) : 244 >= l2 ? u2 >= e2 - 2 ? n() : (s2 = t2[u2++], (192 & s2) != 128 || s2 - 144 + (l2 << 28) >> 30 != 0 || (192 & (h2 = t2[u2++])) != 128 || (192 & (c2 = t2[u2++])) != 128 ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & s2) << 12 | (63 & h2) << 6 | 63 & c2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), 8192 <= a2.length && (i2 = r(i2, a2), a2.length = 0);
    }
    u2 = r(i2, a2);
  }
  return u2;
}
function vt(t2) {
  const e2 = ot(t2.g);
  return ft(t2.g, e2);
}
function Et(t2, e2, n2) {
  var r2 = ot(t2.g);
  for (r2 = t2.g.g + r2; t2.g.g < r2; )
    n2.push(e2(t2.g));
}
var wt = [];
function Tt(t2) {
  return t2 ? /^\d+$/.test(t2) ? (et(t2), new At(z, K)) : null : bt || (bt = new At(0, 0));
}
var At = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var bt;
function kt(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (et(t2), new xt(z, K)) : null : St || (St = new xt(0, 0));
}
var xt = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var St;
function Lt(t2, e2, n2) {
  for (; 0 < n2 || 127 < e2; )
    t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function Ft(t2, e2) {
  for (; 127 < e2; )
    t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function Rt(t2, e2) {
  if (0 <= e2)
    Ft(t2, e2);
  else {
    for (let n2 = 0; 9 > n2; n2++)
      t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function Mt(t2, e2) {
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function Pt(t2, e2) {
  e2.length !== 0 && (t2.l.push(e2), t2.h += e2.length);
}
function Ot(t2, e2, n2) {
  Ft(t2.g, 8 * e2 + n2);
}
function Ct(t2, e2) {
  return Ot(t2, e2, 2), e2 = t2.g.end(), Pt(t2, e2), e2.push(t2.h), e2;
}
function It(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.h + t2.g.length() - n2; 127 < n2; )
    e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
  e2.push(n2), t2.h++;
}
function Dt(t2, e2, n2) {
  Ot(t2, e2, 2), Ft(t2.g, n2.length), Pt(t2, t2.g.end()), Pt(t2, n2);
}
function Nt(t2, e2, n2, r2) {
  n2 != null && (e2 = Ct(t2, e2), r2(n2, t2), It(t2, e2));
}
var Ut = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.l = n2, this.pa = r2;
  }
};
function Bt(t2) {
  return Array.prototype.slice.call(t2);
}
function Gt(t2) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : t2;
}
var jt = Gt();
var Vt = Gt("0di");
var Xt = jt ? (t2, e2) => {
  t2[jt] |= e2;
} : (t2, e2) => {
  t2.g !== void 0 ? t2.g |= e2 : Object.defineProperties(t2, {g: {value: e2, configurable: true, writable: true, enumerable: false}});
};
var Ht = jt ? (t2, e2) => {
  t2[jt] &= ~e2;
} : (t2, e2) => {
  t2.g !== void 0 && (t2.g &= ~e2);
};
function Wt(t2, e2, n2) {
  return n2 ? t2 | e2 : t2 & ~e2;
}
var zt = jt ? (t2) => 0 | t2[jt] : (t2) => 0 | t2.g;
var Kt = jt ? (t2) => t2[jt] : (t2) => t2.g;
var Yt = jt ? (t2, e2) => (t2[jt] = e2, t2) : (t2, e2) => (t2.g !== void 0 ? t2.g = e2 : Object.defineProperties(t2, {g: {value: e2, configurable: true, writable: true, enumerable: false}}), t2);
function $t(t2) {
  return Xt(t2, 34), t2;
}
function qt(t2, e2) {
  Yt(e2, -14591 & (0 | t2));
}
function Jt(t2, e2) {
  Yt(e2, -14557 & (34 | t2));
}
function Zt(t2) {
  return (t2 = t2 >> 14 & 1023) === 0 ? 536870912 : t2;
}
var Qt;
var te = {};
var ee = {};
function ne(t2) {
  return !(!t2 || typeof t2 != "object" || t2.Ja !== ee);
}
function re(t2) {
  return t2 !== null && typeof t2 == "object" && !Array.isArray(t2) && t2.constructor === Object;
}
function se(t2, e2, n2) {
  if (t2 != null) {
    if (typeof t2 == "string")
      t2 = t2 ? new U(t2, O) : D();
    else if (t2.constructor !== U)
      if (R(t2))
        t2 = t2.length ? new U(n2 ? t2 : new Uint8Array(t2), O) : D();
      else {
        if (!e2)
          throw Error();
        t2 = void 0;
      }
  }
  return t2;
}
function ie(t2, e2, n2) {
  if (!Array.isArray(t2) || t2.length)
    return false;
  const r2 = zt(t2);
  return !!(1 & r2) || !(!e2 || !(Array.isArray(e2) ? e2.includes(n2) : e2.has(n2))) && (Yt(t2, 1 | r2), true);
}
var oe = [];
function ae(t2) {
  if (2 & t2)
    throw Error();
}
Yt(oe, 55), Qt = Object.freeze(oe);
var he = class {
  constructor(t2, e2, n2) {
    this.l = 0, this.g = t2, this.h = e2, this.m = n2;
  }
  next() {
    if (this.l < this.g.length) {
      const t2 = this.g[this.l++];
      return {done: false, value: this.h ? this.h.call(this.m, t2) : t2};
    }
    return {done: true, value: void 0};
  }
  [Symbol.iterator]() {
    return new he(this.g, this.h, this.m);
  }
};
var ce;
var ue;
function le(t2, e2) {
  (e2 = ce ? e2[ce] : void 0) && (t2[ce] = Bt(e2));
}
function de(t2) {
  return (t2 = Error(t2)).__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = "warning", t2;
}
function fe(t2) {
  return t2 == null || typeof t2 == "number" ? t2 : t2 === "NaN" || t2 === "Infinity" || t2 === "-Infinity" ? Number(t2) : void 0;
}
function pe(t2) {
  return t2 == null || typeof t2 == "boolean" ? t2 : typeof t2 == "number" ? !!t2 : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
var ge = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function me(t2) {
  const e2 = typeof t2;
  return e2 === "number" ? Number.isFinite(t2) : e2 === "string" && ge.test(t2);
}
function ye(t2) {
  if (t2 == null)
    return t2;
  if (typeof t2 == "string") {
    if (!t2)
      return;
    t2 = +t2;
  }
  return typeof t2 == "number" && Number.isFinite(t2) ? 0 | t2 : void 0;
}
function ve(t2) {
  return t2[0] !== "-" && (20 > t2.length || t2.length === 20 && 184467 > Number(t2.substring(0, 6)));
}
function Ee(t2) {
  return t2[0] === "-" ? 20 > t2.length || t2.length === 20 && -922337 < Number(t2.substring(0, 7)) : 19 > t2.length || t2.length === 19 && 922337 > Number(t2.substring(0, 6));
}
function we(t2) {
  return t2 = Math.trunc(t2), Number.isSafeInteger(t2) || (Y(t2), t2 = J(z, K)), t2;
}
function Te(t2) {
  var e2 = Math.trunc(Number(t2));
  return Number.isSafeInteger(e2) ? String(e2) : ((e2 = t2.indexOf(".")) !== -1 && (t2 = t2.substring(0, e2)), Ee(t2) || (et(t2), t2 = tt()), t2);
}
function Ae(t2) {
  return t2 == null ? t2 : me(t2) ? typeof t2 == "number" ? we(t2) : Te(t2) : void 0;
}
function be(t2) {
  if (typeof t2 != "string")
    throw Error();
  return t2;
}
function ke(t2) {
  if (t2 != null && typeof t2 != "string")
    throw Error();
  return t2;
}
function xe(t2) {
  return t2 == null || typeof t2 == "string" ? t2 : void 0;
}
function Se(t2, e2, n2, r2) {
  if (t2 != null && typeof t2 == "object" && t2.X === te)
    return t2;
  if (!Array.isArray(t2))
    return n2 ? 2 & r2 ? (t2 = e2[Vt]) ? e2 = t2 : ($t((t2 = new e2()).u), e2 = e2[Vt] = t2) : e2 = new e2() : e2 = void 0, e2;
  let s2 = n2 = zt(t2);
  return s2 === 0 && (s2 |= 32 & r2), s2 |= 2 & r2, s2 !== n2 && Yt(t2, s2), new e2(t2);
}
function Le(t2, e2, n2) {
  if (e2) {
    var r2 = !!r2;
    if (!me(e2 = t2))
      throw de("int64");
    typeof e2 == "string" ? r2 = Te(e2) : r2 ? (r2 = Math.trunc(e2), Number.isSafeInteger(r2) ? r2 = String(r2) : Ee(e2 = String(r2)) ? r2 = e2 : (Y(r2), r2 = tt())) : r2 = we(e2);
  } else
    r2 = Ae(t2);
  return typeof (n2 = (t2 = r2) == null ? n2 ? 0 : void 0 : t2) == "string" && (r2 = +n2, Number.isSafeInteger(r2)) ? r2 : n2;
}
var Fe;
var Re;
var Me;
function Pe(t2) {
  switch (typeof t2) {
    case "boolean":
      return Re || (Re = [0, void 0, true]);
    case "number":
      return 0 < t2 ? void 0 : t2 === 0 ? Me || (Me = [0, void 0]) : [-t2, void 0];
    case "string":
      return [0, t2];
    case "object":
      return t2;
  }
}
function Oe(t2, e2) {
  return Ce(t2, e2[0], e2[1]);
}
function Ce(t2, e2, n2) {
  if (t2 == null && (t2 = Fe), Fe = void 0, t2 == null) {
    var r2 = 96;
    n2 ? (t2 = [n2], r2 |= 512) : t2 = [], e2 && (r2 = -16760833 & r2 | (1023 & e2) << 14);
  } else {
    if (!Array.isArray(t2))
      throw Error();
    if (2048 & (r2 = zt(t2)))
      throw Error();
    if (64 & r2)
      return t2;
    if (r2 |= 64, n2 && (r2 |= 512, n2 !== t2[0]))
      throw Error();
    t: {
      const s2 = (n2 = t2).length;
      if (s2) {
        const t3 = s2 - 1;
        if (re(n2[t3])) {
          if (1024 <= (e2 = t3 - (+!!(512 & (r2 |= 256)) - 1)))
            throw Error();
          r2 = -16760833 & r2 | (1023 & e2) << 14;
          break t;
        }
      }
      if (e2) {
        if (1024 < (e2 = Math.max(e2, s2 - (+!!(512 & r2) - 1))))
          throw Error();
        r2 = -16760833 & r2 | (1023 & e2) << 14;
      }
    }
  }
  return Yt(t2, r2), t2;
}
var Ie = {};
var De = function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), false;
  } catch {
    return true;
  }
}();
var Ne = class {
  constructor() {
    this.g = new Map();
  }
  get(t2) {
    return this.g.get(t2);
  }
  set(t2, e2) {
    return this.g.set(t2, e2), this.size = this.g.size, this;
  }
  delete(t2) {
    return t2 = this.g.delete(t2), this.size = this.g.size, t2;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t2) {
    return this.g.has(t2);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t2, e2) {
    return this.g.forEach(t2, e2);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var Ue = De ? (Object.setPrototypeOf(Ne.prototype, Map.prototype), Object.defineProperties(Ne.prototype, {size: {value: 0, configurable: true, enumerable: true, writable: true}}), Ne) : class extends Map {
  constructor() {
    super();
  }
};
function Be(t2) {
  return t2;
}
function Ge(t2) {
  if (2 & t2.L)
    throw Error("Cannot mutate an immutable Map");
}
var je = class extends Ue {
  constructor(t2, e2, n2 = Be, r2 = Be) {
    super();
    let s2 = zt(t2);
    s2 |= 64, Yt(t2, s2), this.L = s2, this.U = e2, this.S = n2, this.Z = this.U ? Ve : r2;
    for (let i2 = 0; i2 < t2.length; i2++) {
      const o2 = t2[i2], a2 = n2(o2[0], false, true);
      let h2 = o2[1];
      e2 ? h2 === void 0 && (h2 = null) : h2 = r2(o2[1], false, true, void 0, void 0, s2), super.set(a2, h2);
    }
  }
  oa(t2 = Xe) {
    if (this.size !== 0)
      return this.Y(t2);
  }
  Y(t2 = Xe) {
    const e2 = [], n2 = super.entries();
    for (var r2; !(r2 = n2.next()).done; )
      (r2 = r2.value)[0] = t2(r2[0]), r2[1] = t2(r2[1]), e2.push(r2);
    return e2;
  }
  clear() {
    Ge(this), super.clear();
  }
  delete(t2) {
    return Ge(this), super.delete(this.S(t2, true, false));
  }
  entries() {
    var t2 = this.na();
    return new he(t2, He, this);
  }
  keys() {
    return this.Ia();
  }
  values() {
    var t2 = this.na();
    return new he(t2, je.prototype.get, this);
  }
  forEach(t2, e2) {
    super.forEach((n2, r2) => {
      t2.call(e2, this.get(r2), r2, this);
    });
  }
  set(t2, e2) {
    return Ge(this), (t2 = this.S(t2, true, false)) == null ? this : e2 == null ? (super.delete(t2), this) : super.set(t2, this.Z(e2, true, true, this.U, false, this.L));
  }
  Oa(t2) {
    const e2 = this.S(t2[0], false, true);
    t2 = t2[1], t2 = this.U ? t2 === void 0 ? null : t2 : this.Z(t2, false, true, void 0, false, this.L), super.set(e2, t2);
  }
  has(t2) {
    return super.has(this.S(t2, false, false));
  }
  get(t2) {
    t2 = this.S(t2, false, false);
    const e2 = super.get(t2);
    if (e2 !== void 0) {
      var n2 = this.U;
      return n2 ? ((n2 = this.Z(e2, false, true, n2, this.ta, this.L)) !== e2 && super.set(t2, n2), n2) : e2;
    }
  }
  na() {
    return Array.from(super.keys());
  }
  Ia() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ve(t2, e2, n2, r2, s2, i2) {
  return t2 = Se(t2, r2, n2, i2), s2 && (t2 = tn(t2)), t2;
}
function Xe(t2) {
  return t2;
}
function He(t2) {
  return [t2, this.get(t2)];
}
var We;
function ze() {
  return We || (We = new je($t([]), void 0, void 0, void 0, Ie));
}
function Ke(t2, e2, n2, r2, s2) {
  if (t2 != null) {
    if (Array.isArray(t2))
      t2 = ie(t2, void 0, 0) ? void 0 : s2 && 2 & zt(t2) ? t2 : Ye(t2, e2, n2, r2 !== void 0, s2);
    else if (re(t2)) {
      const i2 = {};
      for (let o2 in t2)
        i2[o2] = Ke(t2[o2], e2, n2, r2, s2);
      t2 = i2;
    } else
      t2 = e2(t2, r2);
    return t2;
  }
}
function Ye(t2, e2, n2, r2, s2) {
  const i2 = r2 || n2 ? zt(t2) : 0;
  r2 = r2 ? !!(32 & i2) : void 0;
  const o2 = Bt(t2);
  for (let t3 = 0; t3 < o2.length; t3++)
    o2[t3] = Ke(o2[t3], e2, n2, r2, s2);
  return n2 && (le(o2, t2), n2(i2, o2)), o2;
}
function $e(t2) {
  return Ke(t2, qe, void 0, void 0, false);
}
function qe(t2) {
  return t2.X === te ? t2.toJSON() : t2 instanceof je ? t2.oa($e) : function(t3) {
    switch (typeof t3) {
      case "number":
        return isFinite(t3) ? t3 : String(t3);
      case "boolean":
        return t3 ? 1 : 0;
      case "object":
        if (t3)
          if (Array.isArray(t3)) {
            if (ie(t3, void 0, 0))
              return;
          } else {
            if (R(t3))
              return k(t3);
            if (t3 instanceof U) {
              const e2 = t3.g;
              return e2 == null ? "" : typeof e2 == "string" ? e2 : t3.g = k(e2);
            }
            if (t3 instanceof je)
              return t3.oa();
          }
    }
    return t3;
  }(t2);
}
function Je(t2, e2, n2 = Jt) {
  if (t2 != null) {
    if (A && t2 instanceof Uint8Array)
      return e2 ? t2 : new Uint8Array(t2);
    if (Array.isArray(t2)) {
      var r2 = zt(t2);
      return 2 & r2 ? t2 : (e2 && (e2 = r2 === 0 || !!(32 & r2) && !(64 & r2 || !(16 & r2))), e2 ? Yt(t2, -12293 & (34 | r2)) : Ye(t2, Je, 4 & r2 ? Jt : n2, true, true));
    }
    return t2.X === te ? (n2 = t2.u, t2 = 2 & (r2 = Kt(n2)) ? t2 : Ze(t2, n2, r2, true)) : t2 instanceof je && !(2 & t2.L) && (n2 = $t(t2.Y(Je)), t2 = new je(n2, t2.U, t2.S, t2.Z)), t2;
  }
}
function Ze(t2, e2, n2, r2) {
  return t2 = t2.constructor, Fe = e2 = Qe(e2, n2, r2), e2 = new t2(e2), Fe = void 0, e2;
}
function Qe(t2, e2, n2) {
  const r2 = n2 || 2 & e2 ? Jt : qt, s2 = !!(32 & e2);
  return t2 = function(t3, e3, n3) {
    const r3 = Bt(t3);
    var s3 = r3.length;
    const i2 = 256 & e3 ? r3[s3 - 1] : void 0;
    for (s3 += i2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < s3; e3++)
      r3[e3] = n3(r3[e3]);
    if (i2) {
      e3 = r3[e3] = {};
      for (const t4 in i2)
        e3[t4] = n3(i2[t4]);
    }
    return le(r3, t3), r3;
  }(t2, e2, (t3) => Je(t3, s2, r2)), Xt(t2, 32 | (n2 ? 2 : 0)), t2;
}
function tn(t2) {
  const e2 = t2.u, n2 = Kt(e2);
  return 2 & n2 ? Ze(t2, e2, n2, false) : t2;
}
function en(t2, e2) {
  return nn(t2 = t2.u, Kt(t2), e2);
}
function nn(t2, e2, n2, r2) {
  if (n2 === -1)
    return null;
  if (n2 >= Zt(e2)) {
    if (256 & e2)
      return t2[t2.length - 1][n2];
  } else {
    var s2 = t2.length;
    if (r2 && 256 & e2 && (r2 = t2[s2 - 1][n2]) != null)
      return r2;
    if ((e2 = n2 + (+!!(512 & e2) - 1)) < s2)
      return t2[e2];
  }
}
function rn(t2, e2, n2, r2) {
  const s2 = t2.u;
  let i2 = Kt(s2);
  return ae(i2), sn(s2, i2, e2, n2, r2), t2;
}
function sn(t2, e2, n2, r2, s2) {
  const i2 = Zt(e2);
  if (n2 >= i2 || s2) {
    let o2 = e2;
    if (256 & e2)
      s2 = t2[t2.length - 1];
    else {
      if (r2 == null)
        return o2;
      s2 = t2[i2 + (+!!(512 & e2) - 1)] = {}, o2 |= 256;
    }
    return s2[n2] = r2, n2 < i2 && (t2[n2 + (+!!(512 & e2) - 1)] = void 0), o2 !== e2 && Yt(t2, o2), o2;
  }
  return t2[n2 + (+!!(512 & e2) - 1)] = r2, 256 & e2 && (n2 in (t2 = t2[t2.length - 1]) && delete t2[n2]), e2;
}
function on(t2, e2, n2, r2, s2) {
  var i2 = 2 & e2;
  let o2 = nn(t2, e2, n2, s2);
  Array.isArray(o2) || (o2 = Qt);
  const a2 = !(2 & r2);
  r2 = !(1 & r2);
  const h2 = !!(32 & e2);
  let c2 = zt(o2);
  return c2 !== 0 || !h2 || i2 || a2 ? 1 & c2 || (c2 |= 1, Yt(o2, c2)) : (c2 |= 33, Yt(o2, c2)), i2 ? (t2 = false, 2 & c2 || ($t(o2), t2 = !!(4 & c2)), (r2 || t2) && Object.freeze(o2)) : (i2 = !!(2 & c2) || !!(2048 & c2), r2 && i2 ? (o2 = Bt(o2), r2 = 1, h2 && !a2 && (r2 |= 32), Yt(o2, r2), sn(t2, e2, n2, o2, s2)) : a2 && 32 & c2 && !i2 && Ht(o2, 32)), o2;
}
function an(t2, e2) {
  t2 = t2.u;
  let n2 = Kt(t2);
  const r2 = nn(t2, n2, e2), s2 = fe(r2);
  return s2 != null && s2 !== r2 && sn(t2, n2, e2, s2), s2;
}
function hn(t2) {
  t2 = t2.u;
  let e2 = Kt(t2);
  const n2 = nn(t2, e2, 1), r2 = se(n2, true, !!(34 & e2));
  return r2 != null && r2 !== n2 && sn(t2, e2, 1, r2), r2;
}
function cn(t2, e2, n2) {
  t2 = t2.u;
  let r2 = Kt(t2);
  const s2 = 2 & r2 ? 1 : 2;
  let i2 = un(t2, r2, e2);
  var o2 = zt(i2);
  if (!(4 & o2)) {
    (4 & o2 || Object.isFrozen(i2)) && (i2 = Bt(i2), o2 = Sn(o2, r2, false), r2 = sn(t2, r2, e2, i2));
    var a2 = 0;
    let s3 = 0;
    for (; a2 < i2.length; a2++) {
      const t3 = n2(i2[a2]);
      t3 != null && (i2[s3++] = t3);
    }
    s3 < a2 && (i2.length = s3), o2 = Wt(o2 = ln(o2, r2, false), 20, true), o2 = Wt(o2, 4096, false), o2 = Wt(o2, 8192, false), Yt(i2, o2), 2 & o2 && Object.freeze(i2);
  }
  return dn(o2) || (n2 = o2, (o2 = (a2 = s2 === 1) ? Wt(o2, 2, true) : Wt(o2, 32, false)) !== n2 && Yt(i2, o2), a2 && Object.freeze(i2)), s2 === 2 && dn(o2) && (i2 = Bt(i2), o2 = Sn(o2, r2, false), Yt(i2, o2), sn(t2, r2, e2, i2)), i2;
}
function un(t2, e2, n2) {
  return t2 = nn(t2, e2, n2), Array.isArray(t2) ? t2 : Qt;
}
function ln(t2, e2, n2) {
  return t2 === 0 && (t2 = Sn(t2, e2, n2)), Wt(t2, 1, true);
}
function dn(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(2048 & t2);
}
function fn(t2) {
  t2 = Bt(t2);
  for (let e2 = 0; e2 < t2.length; e2++) {
    const n2 = t2[e2] = Bt(t2[e2]);
    Array.isArray(n2[1]) && (n2[1] = $t(n2[1]));
  }
  return t2;
}
function gn(t2, e2, n2, r2) {
  t2 = t2.u;
  let s2 = Kt(t2);
  ae(s2), sn(t2, s2, e2, (r2 === "0" ? Number(n2) === 0 : n2 === r2) ? void 0 : n2);
}
function mn(t2, e2, n2, r2) {
  const s2 = Kt(t2);
  ae(s2), t2 = on(t2, s2, e2, 2), r2 = n2(r2, !!(4 & (e2 = zt(t2))) && !!(4096 & e2)), t2.push(r2);
}
function yn(t2) {
  return t2;
}
function vn(t2, e2, n2) {
  let r2 = 0;
  for (let s2 = 0; s2 < n2.length; s2++) {
    const i2 = n2[s2];
    nn(t2, e2, i2) != null && (r2 !== 0 && (e2 = sn(t2, e2, r2)), r2 = i2);
  }
  return r2;
}
function En(t2, e2, n2, r2) {
  let s2 = Kt(t2);
  ae(s2);
  const i2 = nn(t2, s2, n2, r2);
  let o2;
  if (i2 != null && i2.X === te)
    return (e2 = tn(i2)) !== i2 && sn(t2, s2, n2, e2, r2), e2.u;
  if (Array.isArray(i2)) {
    const t3 = zt(i2);
    o2 = 2 & t3 ? Qe(i2, t3, false) : i2, o2 = Oe(o2, e2);
  } else
    o2 = Oe(void 0, e2);
  return o2 !== i2 && sn(t2, s2, n2, o2, r2), o2;
}
function wn(t2, e2, n2, r2) {
  t2 = t2.u;
  let s2 = Kt(t2);
  const i2 = nn(t2, s2, n2, r2);
  return (e2 = Se(i2, e2, false, s2)) !== i2 && e2 != null && sn(t2, s2, n2, e2, r2), e2;
}
function Tn(t2, e2, n2, r2 = false) {
  if ((e2 = wn(t2, e2, n2, r2)) == null)
    return e2;
  t2 = t2.u;
  let s2 = Kt(t2);
  if (!(2 & s2)) {
    const i2 = tn(e2);
    i2 !== e2 && sn(t2, s2, n2, e2 = i2, r2);
  }
  return e2;
}
function An(t2, e2, n2, r2, s2, i2) {
  var o2 = !!(2 & e2), a2 = o2 ? 1 : 2;
  const h2 = a2 === 1;
  a2 = a2 === 2, s2 = !!s2, i2 && (i2 = !o2), o2 = un(t2, e2, r2);
  var c2 = zt(o2);
  const u2 = !!(4 & c2);
  if (!u2) {
    var l2 = o2, d2 = e2;
    const t3 = !!(2 & (c2 = ln(c2, e2, s2)));
    t3 && (d2 = Wt(d2, 2, true));
    let r3 = !t3, i3 = true, a3 = 0, h3 = 0;
    for (; a3 < l2.length; a3++) {
      const e3 = Se(l2[a3], n2, false, d2);
      if (e3 instanceof n2) {
        if (!t3) {
          const t4 = !!(2 & zt(e3.u));
          r3 && (r3 = !t4), i3 && (i3 = t4);
        }
        l2[h3++] = e3;
      }
    }
    h3 < a3 && (l2.length = h3), c2 = Wt(c2, 4, true), c2 = Wt(c2, 16, i3), c2 = Wt(c2, 8, r3), Yt(l2, c2), t3 && Object.freeze(l2);
  }
  if (n2 = !!(8 & c2) || h2 && !o2.length, i2 && !n2) {
    for (dn(c2) && (o2 = Bt(o2), c2 = Sn(c2, e2, s2), e2 = sn(t2, e2, r2, o2)), i2 = o2, n2 = c2, l2 = 0; l2 < i2.length; l2++)
      (c2 = i2[l2]) !== (d2 = tn(c2)) && (i2[l2] = d2);
    n2 = Wt(n2, 8, true), n2 = Wt(n2, 16, !i2.length), Yt(i2, n2), c2 = n2;
  }
  return dn(c2) || (i2 = c2, h2 ? c2 = Wt(c2, !o2.length || 16 & c2 && (!u2 || 32 & c2) ? 2 : 2048, true) : s2 || (c2 = Wt(c2, 32, false)), c2 !== i2 && Yt(o2, c2), h2 && Object.freeze(o2)), a2 && dn(c2) && (o2 = Bt(o2), c2 = Sn(c2, e2, s2), Yt(o2, c2), sn(t2, e2, r2, o2)), o2;
}
function bn(t2, e2, n2) {
  t2 = t2.u;
  const r2 = Kt(t2);
  return An(t2, r2, e2, n2, false, !(2 & r2));
}
function kn(t2, e2, n2, r2, s2) {
  return r2 == null && (r2 = void 0), rn(t2, n2, r2, s2);
}
function xn(t2, e2, n2, r2) {
  r2 == null && (r2 = void 0), t2 = t2.u;
  let s2 = Kt(t2);
  ae(s2), (n2 = vn(t2, s2, n2)) && n2 !== e2 && r2 != null && (s2 = sn(t2, s2, n2)), sn(t2, s2, e2, r2);
}
function Sn(t2, e2, n2) {
  return t2 = Wt(t2, 2, !!(2 & e2)), t2 = Wt(t2, 32, !!(32 & e2) && n2), Wt(t2, 2048, false);
}
function Ln(t2, e2, n2, r2) {
  t2 = t2.u;
  const s2 = Kt(t2);
  ae(s2), e2 = An(t2, s2, n2, e2, true), n2 = r2 != null ? r2 : new n2(), e2.push(n2), 2 & zt(n2.u) ? Ht(e2, 8) : Ht(e2, 16);
}
function Fn(t2, e2) {
  return ye(en(t2, e2));
}
function Rn(t2, e2) {
  return xe(en(t2, e2));
}
function Mn(t2) {
  return t2 ?? 0;
}
function Pn(t2, e2) {
  return Mn(an(t2, e2));
}
function On(t2, e2, n2) {
  if (n2 != null && typeof n2 != "boolean")
    throw t2 = typeof n2, Error(`Expected boolean but got ${t2 != "object" ? t2 : n2 ? Array.isArray(n2) ? "array" : t2 : "null"}: ${n2}`);
  rn(t2, e2, n2);
}
function In(t2, e2, n2) {
  if (n2 != null && typeof n2 != "number")
    throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
  rn(t2, e2, n2);
}
function Dn(t2, e2, n2) {
  e2.g ? e2.m(t2, e2.g, e2.h, n2, true) : e2.m(t2, e2.h, n2, true);
}
je.prototype.toJSON = void 0, je.prototype.Ja = ee;
var Nn = class {
  constructor(t2, e2) {
    this.u = Ce(t2, e2);
  }
  toJSON() {
    return Un(this, Ye(this.u, qe, void 0, void 0, false), true);
  }
  l() {
    var t2 = mo;
    return t2.g ? t2.l(this, t2.g, t2.h, true) : t2.l(this, t2.h, t2.defaultValue, true);
  }
  clone() {
    const t2 = this.u;
    return Ze(this, t2, Kt(t2), false);
  }
  N() {
    return !!(2 & zt(this.u));
  }
};
function Un(t2, e2, n2) {
  var r2 = d ? void 0 : t2.constructor.A;
  const s2 = Kt(n2 ? t2.u : e2);
  if (!(t2 = e2.length))
    return e2;
  let i2, o2;
  if (re(n2 = e2[t2 - 1])) {
    t: {
      var a2 = n2;
      let t3 = {}, e3 = false;
      for (var h2 in a2) {
        let n3 = a2[h2];
        if (Array.isArray(n3)) {
          let t4 = n3;
          (ie(n3, r2, +h2) || ne(n3) && n3.size === 0) && (n3 = null), n3 != t4 && (e3 = true);
        }
        n3 != null ? t3[h2] = n3 : e3 = true;
      }
      if (e3) {
        for (var c2 in t3) {
          a2 = t3;
          break t;
        }
        a2 = null;
      }
    }
    a2 != n2 && (i2 = true), t2--;
  }
  for (h2 = +!!(512 & s2) - 1; 0 < t2 && (n2 = e2[c2 = t2 - 1], c2 -= h2, n2 == null || ie(n2, r2, c2) || ne(n2) && n2.size === 0); t2--)
    o2 = true;
  return i2 || o2 ? (e2 = Array.prototype.slice.call(e2, 0, t2), a2 && e2.push(a2), e2) : e2;
}
function Bn(t2) {
  return Array.isArray(t2) ? t2[0] instanceof Ut ? t2 : [Gr, t2] : [t2, void 0];
}
function Gn(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = zt(e2);
    if (4 & n2)
      return e2;
    for (var r2 = 0, s2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      n3 != null && (e2[s2++] = n3);
    }
    return s2 < r2 && (e2.length = s2), Yt(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
  }
}
Nn.prototype.X = te, Nn.prototype.toString = function() {
  return Un(this, this.u, false).toString();
};
var jn = Symbol();
function Vn(t2) {
  let e2 = t2[jn];
  if (!e2) {
    const n2 = qn(t2), r2 = hr(t2), s2 = r2.l;
    e2 = s2 ? (t3, e3) => s2(t3, e3, r2) : (t3, e3) => {
      for (; gt(e3) && e3.h != 4; ) {
        var s3 = e3.m, i2 = r2[s3];
        if (!i2) {
          var o2 = r2.ea;
          o2 && (o2 = o2[s3]) && (i2 = r2[s3] = Xn(o2));
        }
        i2 && i2(e3, t3, s3) || (s3 = (i2 = e3).l, mt(i2), i2.ia ? i2 = void 0 : (o2 = i2.g.g - s3, i2.g.g = s3, i2 = ft(i2.g, o2)), s3 = t3, i2 && (ce || (ce = Symbol()), (o2 = s3[ce]) ? o2.push(i2) : s3[ce] = [i2]));
      }
      n2 === Wn || n2 === zn || n2.j || (t3[ue || (ue = Symbol())] = n2);
    }, t2[jn] = e2;
  }
  return e2;
}
function Xn(t2) {
  const e2 = (t2 = Bn(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = Vn(t2), r2 = hr(t2).T;
    return (t3, s2, i2) => e2(t3, s2, i2, r2, n2);
  }
  return e2;
}
var Hn = class {
};
var Wn;
var zn;
var Kn = Symbol();
function Yn(t2, e2, n2) {
  const r2 = n2[1];
  let s2;
  if (r2) {
    const n3 = r2[Kn];
    s2 = n3 ? n3.T : Pe(r2[0]), t2[e2] = n3 ?? r2;
  }
  s2 && s2 === Re ? (t2.g || (t2.g = new Set())).add(e2) : n2[0] && (t2.h || (t2.h = new Set())).add(e2);
}
function $n(t2, e2) {
  return [t2.l, !e2 || 0 < e2[0] ? void 0 : e2];
}
function qn(t2) {
  var e2 = t2[Kn];
  if (e2)
    return e2;
  if (!(e2 = Zn(t2, t2[Kn] = new Hn(), $n, $n, Yn)).ea && !e2.h && !e2.g) {
    let n2 = true;
    for (let t3 in e2)
      isNaN(t3) || (n2 = false);
    n2 ? (Pe(t2[0]) === Re ? zn ? e2 = zn : ((e2 = new Hn()).T = Pe(true), e2 = zn = e2) : e2 = Wn || (Wn = new Hn()), e2 = t2[Kn] = e2) : e2.j = true;
  }
  return e2;
}
function Jn(t2, e2, n2) {
  t2[e2] = n2;
}
function Zn(t2, e2, n2, r2, s2 = Jn) {
  e2.T = Pe(t2[0]);
  let i2 = 0;
  var o2 = t2[++i2];
  o2 && o2.constructor === Object && (e2.ea = o2, typeof (o2 = t2[++i2]) == "function" && (e2.l = o2, e2.m = t2[++i2], o2 = t2[++i2]));
  const a2 = {};
  for (; Array.isArray(o2) && typeof o2[0] == "number" && 0 < o2[0]; ) {
    for (var h2 = 0; h2 < o2.length; h2++)
      a2[o2[h2]] = o2;
    o2 = t2[++i2];
  }
  for (h2 = 1; o2 !== void 0; ) {
    let l2;
    typeof o2 == "number" && (h2 += o2, o2 = t2[++i2]);
    var c2 = void 0;
    if (o2 instanceof Ut ? l2 = o2 : (l2 = jr, i2--), l2.pa) {
      o2 = t2[++i2], c2 = t2;
      var u2 = i2;
      typeof o2 == "function" && (o2 = o2(), c2[u2] = o2), c2 = o2;
    }
    for (u2 = h2 + 1, typeof (o2 = t2[++i2]) == "number" && 0 > o2 && (u2 -= o2, o2 = t2[++i2]); h2 < u2; h2++) {
      const t3 = a2[h2];
      s2(e2, h2, c2 ? r2(l2, c2, t3) : n2(l2, t3));
    }
  }
  return e2;
}
var Qn = Symbol();
function tr(t2) {
  let e2 = t2[Qn];
  if (!e2) {
    const n2 = sr(t2);
    e2 = (t3, e3) => lr(t3, e3, n2), t2[Qn] = e2;
  }
  return e2;
}
var er = Symbol();
function nr(t2) {
  return t2.h;
}
function rr(t2, e2) {
  let n2, r2;
  const s2 = t2.h;
  return (t3, i2, o2) => s2(t3, i2, o2, r2 || (r2 = sr(e2).T), n2 || (n2 = tr(e2)));
}
function sr(t2) {
  let e2 = t2[er];
  return e2 || (e2 = Zn(t2, t2[er] = {}, nr, rr), cr(t2), e2);
}
var ir = Symbol();
function or(t2, e2) {
  const n2 = t2.g;
  return e2 ? (t3, r2, s2) => n2(t3, r2, s2, e2) : n2;
}
function ar(t2, e2, n2) {
  const r2 = t2.g;
  let s2, i2;
  return (t3, o2, a2) => r2(t3, o2, a2, i2 || (i2 = hr(e2).T), s2 || (s2 = Vn(e2)), n2);
}
function hr(t2) {
  let e2 = t2[ir];
  return e2 || (qn(t2), e2 = Zn(t2, t2[ir] = {}, or, ar), cr(t2), e2);
}
function cr(t2) {
  ir in t2 && Kn in t2 && er in t2 && (t2.length = 0);
}
function ur(t2, e2) {
  var n2 = t2[e2];
  if (n2)
    return n2;
  if ((n2 = t2.ea) && (n2 = n2[e2])) {
    var r2 = (n2 = Bn(n2))[0].h;
    if (n2 = n2[1]) {
      const e3 = tr(n2), s2 = sr(n2).T;
      n2 = (n2 = t2.m) ? n2(s2, e3) : (t3, n3, i2) => r2(t3, n3, i2, s2, e3);
    } else
      n2 = r2;
    return t2[e2] = n2;
  }
}
function lr(t2, e2, n2) {
  for (var r2 = Kt(t2), s2 = +!!(512 & r2) - 1, i2 = t2.length, o2 = 512 & r2 ? 1 : 0, a2 = i2 + (256 & r2 ? -1 : 0); o2 < a2; o2++) {
    const r3 = t2[o2];
    if (r3 == null)
      continue;
    const i3 = o2 - s2, a3 = ur(n2, i3);
    a3 && a3(e2, r3, i3);
  }
  if (256 & r2) {
    r2 = t2[i2 - 1];
    for (let t3 in r2)
      s2 = +t3, Number.isNaN(s2) || (i2 = r2[t3]) != null && (a2 = ur(n2, s2)) && a2(e2, i2, s2);
  }
  if (t2 = ce ? t2[ce] : void 0)
    for (Pt(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++)
      Pt(e2, N(t2[n2]) || P());
}
function dr(t2, e2) {
  return new Ut(t2, e2, false, false);
}
function fr(t2, e2) {
  return new Ut(t2, e2, true, false);
}
function pr(t2, e2) {
  return new Ut(t2, e2, false, true);
}
function gr(t2, e2, n2) {
  sn(t2, Kt(t2), e2, n2);
}
var mr = pr(function(t2, e2, n2, r2, s2) {
  return t2.h === 2 && (t2 = yt(t2, Oe([void 0, void 0], r2), s2), ae(r2 = Kt(e2)), (s2 = nn(e2, r2, n2)) instanceof je ? (2 & s2.L) != 0 ? ((s2 = s2.Y()).push(t2), sn(e2, r2, n2, s2)) : s2.Oa(t2) : Array.isArray(s2) ? (2 & zt(s2) && sn(e2, r2, n2, s2 = fn(s2)), s2.push(t2)) : sn(e2, r2, n2, [t2]), true);
}, function(t2, e2, n2, r2, s2) {
  if (e2 instanceof je)
    e2.forEach((e3, i2) => {
      Nt(t2, n2, Oe([i2, e3], r2), s2);
    });
  else if (Array.isArray(e2))
    for (let i2 = 0; i2 < e2.length; i2++) {
      const o2 = e2[i2];
      Array.isArray(o2) && Nt(t2, n2, Oe(o2, r2), s2);
    }
});
function yr(t2, e2, n2) {
  t:
    if (e2 != null) {
      if (me(e2)) {
        if (typeof e2 == "string") {
          e2 = Te(e2);
          break t;
        }
        if (typeof e2 == "number") {
          e2 = we(e2);
          break t;
        }
      }
      e2 = void 0;
    }
  e2 != null && (typeof e2 == "string" && kt(e2), e2 != null && (Ot(t2, n2, 0), typeof e2 == "number" ? (t2 = t2.g, Y(e2), Lt(t2, z, K)) : (n2 = kt(e2), Lt(t2.g, n2.h, n2.g))));
}
function _r(t2, e2, n2) {
  (e2 = ye(e2)) != null && e2 != null && (Ot(t2, n2, 0), Rt(t2.g, e2));
}
function vr(t2, e2, n2) {
  (e2 = pe(e2)) != null && (Ot(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function Er(t2, e2, n2) {
  (e2 = xe(e2)) != null && Dt(t2, n2, c(e2));
}
function wr(t2, e2, n2, r2, s2) {
  Nt(t2, n2, e2 instanceof Nn ? e2.u : Array.isArray(e2) ? Oe(e2, r2) : void 0, s2);
}
function Tr(t2, e2, n2) {
  (e2 = e2 == null || typeof e2 == "string" || R(e2) || e2 instanceof U ? e2 : void 0) != null && Dt(t2, n2, V(e2).buffer);
}
function Ar(t2, e2, n2) {
  return (t2.h === 5 || t2.h === 2) && (e2 = on(e2, Kt(e2), n2, 2, false), t2.h == 2 ? Et(t2, ht, e2) : e2.push(ht(t2.g)), true);
}
var br;
var xr = dr(function(t2, e2, n2) {
  return t2.h === 5 && (gr(e2, n2, ht(t2.g)), true);
}, function(t2, e2, n2) {
  (e2 = fe(e2)) != null && (Ot(t2, n2, 5), t2 = t2.g, $(e2), Mt(t2, z));
});
var Lr = fr(Ar, function(t2, e2, n2) {
  if ((e2 = Gn(fe, e2)) != null && e2.length) {
    Ot(t2, n2, 2), Ft(t2.g, 4 * e2.length);
    for (let r2 = 0; r2 < e2.length; r2++)
      n2 = t2.g, $(e2[r2]), Mt(n2, z);
  }
});
var Fr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, rt(t2.g, J)), true);
}, yr);
var Rr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, (t2 = rt(t2.g, J)) === 0 ? void 0 : t2), true);
}, yr);
var Mr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, rt(t2.g, q)), true);
}, function(t2, e2, n2) {
  t:
    if (e2 != null) {
      if (me(e2)) {
        if (typeof e2 == "string") {
          var r2 = Math.trunc(Number(e2));
          Number.isSafeInteger(r2) && 0 <= r2 ? e2 = String(r2) : ((r2 = e2.indexOf(".")) !== -1 && (e2 = e2.substring(0, r2)), ve(e2) || (et(e2), e2 = Z(z, K)));
          break t;
        }
        if (typeof e2 == "number") {
          e2 = 0 <= (e2 = Math.trunc(e2)) && Number.isSafeInteger(e2) ? e2 : function(t3) {
            if (0 > t3) {
              Y(t3);
              const e3 = Z(z, K);
              return t3 = Number(e3), Number.isSafeInteger(t3) ? t3 : e3;
            }
            return ve(String(t3)) ? t3 : (Y(t3), q(z, K));
          }(e2);
          break t;
        }
      }
      e2 = void 0;
    }
  e2 != null && (typeof e2 == "string" && Tt(e2), e2 != null && (Ot(t2, n2, 0), typeof e2 == "number" ? (t2 = t2.g, Y(e2), Lt(t2, z, K)) : (n2 = Tt(e2), Lt(t2.g, n2.h, n2.g))));
});
var Pr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, it(t2.g)), true);
}, _r);
var Or = fr(function(t2, e2, n2) {
  return (t2.h === 0 || t2.h === 2) && (e2 = on(e2, Kt(e2), n2, 2, false), t2.h == 2 ? Et(t2, it, e2) : e2.push(it(t2.g)), true);
}, function(t2, e2, n2) {
  if ((e2 = Gn(ye, e2)) != null && e2.length) {
    n2 = Ct(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++)
      Rt(t2.g, e2[n3]);
    It(t2, n2);
  }
});
var Cr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, (t2 = it(t2.g)) === 0 ? void 0 : t2), true);
}, _r);
var Ir = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, st(t2.g)), true);
}, vr);
var Dr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, (t2 = st(t2.g)) === false ? void 0 : t2), true);
}, vr);
var Nr = fr(function(t2, e2, n2) {
  return t2.h === 2 && (mn(e2, n2, yn, t2 = _t(t2)), true);
}, function(t2, e2, n2) {
  if ((e2 = Gn(xe, e2)) != null)
    for (let o2 = 0; o2 < e2.length; o2++) {
      var r2 = t2, s2 = n2, i2 = e2[o2];
      i2 != null && Dt(r2, s2, c(i2));
    }
});
var Ur = dr(function(t2, e2, n2) {
  return t2.h === 2 && (gr(e2, n2, (t2 = _t(t2)) === "" ? void 0 : t2), true);
}, Er);
var Br = dr(function(t2, e2, n2) {
  return t2.h === 2 && (gr(e2, n2, _t(t2)), true);
}, Er);
var Gr = pr(function(t2, e2, n2, r2, s2) {
  return t2.h === 2 && (yt(t2, En(e2, r2, n2, true), s2), true);
}, wr);
var jr = pr(function(t2, e2, n2, r2, s2) {
  return t2.h === 2 && (yt(t2, En(e2, r2, n2), s2), true);
}, wr);
br = new Ut(function(t2, e2, n2, r2, s2) {
  if (t2.h !== 2)
    return false;
  r2 = Oe(void 0, r2);
  let i2 = Kt(e2);
  ae(i2);
  let o2 = on(e2, i2, n2, 3);
  return i2 = Kt(e2), 4 & zt(o2) && (o2 = Bt(o2), Yt(o2, -2079 & (1 | zt(o2))), sn(e2, i2, n2, o2)), o2.push(r2), yt(t2, r2, s2), true;
}, function(t2, e2, n2, r2, s2) {
  if (Array.isArray(e2))
    for (let i2 = 0; i2 < e2.length; i2++)
      wr(t2, e2[i2], n2, r2, s2);
}, true, true);
var Vr = pr(function(t2, e2, n2, r2, s2, i2) {
  if (t2.h !== 2)
    return false;
  let o2 = Kt(e2);
  return ae(o2), (i2 = vn(e2, o2, i2)) && n2 !== i2 && sn(e2, o2, i2), yt(t2, e2 = En(e2, r2, n2), s2), true;
}, wr);
var Xr = dr(function(t2, e2, n2) {
  return t2.h === 2 && (gr(e2, n2, vt(t2)), true);
}, Tr);
var Wr = dr(function(t2, e2, n2) {
  return t2.h === 0 && (gr(e2, n2, it(t2.g)), true);
}, function(t2, e2, n2) {
  (e2 = ye(e2)) != null && (e2 = parseInt(e2, 10), Ot(t2, n2, 0), Rt(t2.g, e2));
});
var zr = fr(function(t2, e2, n2) {
  return (t2.h === 0 || t2.h === 2) && (e2 = on(e2, Kt(e2), n2, 2, false), t2.h == 2 ? Et(t2, ct, e2) : e2.push(it(t2.g)), true);
}, function(t2, e2, n2) {
  if ((e2 = Gn(ye, e2)) != null && e2.length) {
    n2 = Ct(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++)
      Rt(t2.g, e2[n3]);
    It(t2, n2);
  }
});
var Kr = class {
  constructor(t2, e2) {
    this.h = t2, this.g = e2, this.l = Tn, this.m = kn, this.defaultValue = void 0;
  }
};
function Yr(t2, e2) {
  return new Kr(t2, e2);
}
function $r(t2, e2) {
  return (n2, r2) => {
    t: {
      if (wt.length) {
        const t3 = wt.pop();
        t3.o(r2), ut(t3.g, n2, r2), n2 = t3;
      } else
        n2 = new class {
          constructor(t3, e3) {
            if (pt.length) {
              const n3 = pt.pop();
              ut(n3, t3, e3), t3 = n3;
            } else
              t3 = new class {
                constructor(t4, e4) {
                  this.h = null, this.m = false, this.g = this.l = this.j = 0, ut(this, t4, e4);
                }
                clear() {
                  this.h = null, this.m = false, this.g = this.l = this.j = 0, this.ca = false;
                }
              }(t3, e3);
            this.g = t3, this.l = this.g.g, this.h = this.m = -1, this.o(e3);
          }
          o({ia: t3 = false} = {}) {
            this.ia = t3;
          }
        }(n2, r2);
      try {
        const r3 = new t2(), i2 = r3.u;
        Vn(e2)(i2, n2);
        var s2 = r3;
        break t;
      } finally {
        n2.g.clear(), n2.m = -1, n2.h = -1, 100 > wt.length && wt.push(n2);
      }
      s2 = void 0;
    }
    return s2;
  };
}
function qr(t2) {
  return function() {
    const e2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    lr(this.u, e2, sr(t2)), Pt(e2, e2.g.end());
    const n2 = new Uint8Array(e2.h), r2 = e2.l, s2 = r2.length;
    let i2 = 0;
    for (let t3 = 0; t3 < s2; t3++) {
      const e3 = r2[t3];
      n2.set(e3, i2), i2 += e3.length;
    }
    return e2.l = [n2], n2;
  };
}
var Zr = [0, Ur, dr(function(t2, e2, n2) {
  return t2.h === 2 && (gr(e2, n2, (t2 = vt(t2)) === D() ? void 0 : t2), true);
}, function(t2, e2, n2) {
  if (e2 != null) {
    if (e2 instanceof Nn) {
      const r2 = e2.Qa;
      return void (r2 && (e2 = r2(e2), e2 != null && Dt(t2, n2, V(e2).buffer)));
    }
    if (Array.isArray(e2))
      return;
  }
  Tr(t2, e2, n2);
})];
var Qr = [0, Br];
var ts = [0, Pr, Wr, Ir, -1, Or, Wr, -1];
var es = [0, Ir, -1];
var ns = class extends Nn {
  constructor() {
    super();
  }
};
ns.A = [6];
var rs = [0, Ir, Br, Ir, Wr, -1, zr, Br, -1, es, Wr];
var ss = [0, Br, -2];
var is = class extends Nn {
  constructor() {
    super();
  }
};
var os = [0];
var as = [0, Pr, Ir, -3];
var hs = class extends Nn {
  constructor(t2) {
    super(t2, 2);
  }
};
var cs = {};
var us = [-2, cs, Ir];
cs[336783863] = [0, Br, Ir, -1, Pr, [0, [1, 2, 3, 4, 5], Vr, os, Vr, rs, Vr, ss, Vr, as, Vr, ts], Qr];
var ls = [0, Ur, Dr];
var ds = [0, Rr, -1, Dr, -3, Rr, Or, Ur, Cr, Rr, -1, Dr, Cr, Dr, -2, Ur];
var fs = [-1, {}];
var ps = [0, Br, 1, fs];
var gs = [0, Br, Nr, fs];
function ms(t2, e2) {
  gn(t2, 2, ke(e2), "");
}
function ys(t2, e2) {
  mn(t2.u, 3, be, e2);
}
function _s(t2, e2) {
  mn(t2.u, 4, be, e2);
}
var vs = class extends Nn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return kn(this, 0, 7, t2);
  }
};
vs.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var Es = [-500, Ur, -1, Nr, -3, us, br, Zr, Cr, -1, ps, gs, br, ls, Ur, ds, Cr, Nr, 987, Nr];
var ws = [0, Ur, -1, fs];
var Ts = [-500, Br, -1, [-1, {}], 998, Br];
var As = [-500, Br, Nr, -1, [-2, {}, Ir], 997, Nr, -1];
var bs = [-500, Br, Nr, fs, 998, Nr];
function ks(t2, e2) {
  Ln(t2, 1, vs, e2);
}
function xs(t2, e2) {
  mn(t2.u, 10, be, e2);
}
function Ss(t2, e2) {
  mn(t2.u, 15, be, e2);
}
var Ls = class extends Nn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return kn(this, 0, 1001, t2);
  }
};
Ls.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var Fs = [-500, br, Es, 4, br, Ts, br, As, Cr, br, bs, Nr, Cr, ps, gs, br, ws, Nr, -2, ds, Ur, -1, Dr, 979, fs, br, Zr];
var Rs = $r(Ls, Fs);
Ls.prototype.g = qr(Fs);
var Ms = [0, br, [0, Pr, -2]];
var Ns = [0, Pr, xr];
var Us = [0, Pr, -1, Ms];
var Bs = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
var Gs = [0, Pr, -3];
var js = [0, xr, -3];
var Vs = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
var Xs = [0, xr, -1, Br, xr];
var Hs = class extends Nn {
  constructor(t2) {
    super(t2);
  }
  h() {
    return Tn(this, Bs, 2);
  }
  g() {
    return bn(this, Vs, 5);
  }
};
Hs.A = [5];
var Ws = [0, Wr, Gs, js, Us, br, Xs];
var zs = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
zs.A = [1, 2, 3, 8, 9];
var Ks = $r(zs, [0, Nr, Or, Lr, Ws, Br, -1, Fr, br, Ns, Nr, Fr]);
var si = class extends Nn {
  constructor() {
    super();
  }
};
si.prototype.g = qr([0, xr, -4, Fr]);
var yi = [0, Br, Pr, xr, Nr, -1];
var vi = [0, Ir, -1];
var Ei = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
var wi = [1, 2, 3, 4, 5];
var Ti = class extends Nn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return hn(this) != null;
  }
  h() {
    return Rn(this, 2) != null;
  }
};
var Ai = [0, Xr, Br, [0, Pr, Fr, -1], [0, Mr, Fr]];
var bi = class extends Nn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return pe(en(this, 2)) ?? false;
  }
};
var ki = [0, Ai, Ir, [0, wi, Vr, as, Vr, rs, Vr, ts, Vr, os, Vr, ss], Wr];
var xi = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
var Si = [0, ki, xr, -1, Pr];
var Li = Yr(502141897, xi);
cs[502141897] = Si;
var Fi = [0, Ai];
cs[512499200] = Fi;
var Ri = [0, Fi];
cs[515723506] = Ri;
var Pi = [0, ki];
cs[508981768] = Pi;
var Ci = [0, ki, xr, Pi, Ir];
var Di = [0, ki, Si, Ci, xr, Ri];
cs[508968149] = Ci;
cs[508968150] = Di;
cs[513916220] = [0, ki, Di, Pr];
var ji = [0, ki, yi];
cs[478825465] = ji;
var Vi = [0, ki];
cs[478825422] = Vi;
var Hi = [0, ki, Vi, ji, -1];
var zi = [0, ki, xr, Pr];
var Yi = [0, ki, xr];
var qi = [0, ki, zi, Yi, xr];
var Zi = [0, ki, qi, Hi];
cs[463370452] = Hi, cs[464864288] = zi, cs[474472470] = Yi;
cs[462713202] = qi;
cs[479097054] = Zi;
var so = [0, ki, xr, -1, Pr];
cs[514774813] = so;
var oo = [0, ki, xr, Ir];
cs[518928384] = oo;
cs[456383383] = [0, ki, yi];
cs[476348187] = [0, ki, vi];
var po = [0, Wr, -1];
var go = class extends Nn {
  constructor(t2) {
    super(t2);
  }
};
go.A = [3];
var mo = Yr(458105876, class extends Nn {
  constructor(t2) {
    super(t2);
  }
  g() {
    var t2 = this.u;
    const e2 = Kt(t2);
    var n2 = 2 & e2;
    return t2 = function(t3, e3, n3) {
      var r2 = go;
      const s2 = 2 & e3;
      let i2 = false;
      if (n3 == null) {
        if (s2)
          return ze();
        n3 = [];
      } else if (n3.constructor === je) {
        if ((2 & n3.L) == 0 || s2)
          return n3;
        n3 = n3.Y();
      } else
        Array.isArray(n3) ? i2 = !!(2 & zt(n3)) : n3 = [];
      if (s2) {
        if (!n3.length)
          return ze();
        i2 || (i2 = true, $t(n3));
      } else
        i2 && (i2 = false, n3 = fn(n3));
      return i2 || (64 & zt(n3) ? Ht(n3, 32) : 32 & e3 && Xt(n3, 32)), sn(t3, e3, 2, r2 = new je(n3, r2, Le, void 0), false), r2;
    }(t2, e2, nn(t2, e2, 2)), t2 == null || !n2 && go && (t2.ta = true), n2 = t2;
  }
});
cs[458105876] = [0, po, mr, [true, Fr, [0, Br, -1, Nr]]];
cs[458105758] = [0, ki, Br, po];
cs[443442058] = [0, ki, Br, Pr, xr, Nr, -1];
function ko(t2) {
  var e2 = cn(t2, 3, fe), n2 = cn(t2, 2, ye), r2 = cn(t2, 1, xe), s2 = cn(t2, 9, xe);
  const i2 = {categories: [], keypoints: []};
  for (let t3 = 0; t3 < e2.length; t3++)
    i2.categories.push({score: e2[t3], index: n2[t3] ?? -1, categoryName: r2[t3] ?? "", displayName: s2[t3] ?? ""});
  if ((e2 = Tn(t2, Hs, 4)?.h()) && (i2.boundingBox = {originX: Fn(e2, 1) ?? 0, originY: Fn(e2, 2) ?? 0, width: Fn(e2, 3) ?? 0, height: Fn(e2, 4) ?? 0, angle: 0}), Tn(t2, Hs, 4)?.g().length)
    for (const e3 of Tn(t2, Hs, 4).g())
      i2.keypoints.push({x: an(e3, 1) ?? 0, y: an(e3, 2) ?? 0, score: an(e3, 4) ?? 0, label: Rn(e3, 3) ?? ""});
  return i2;
}
var Ro;
cs[516587230] = [0, ki, so, oo, xr];
var Mo = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function Po() {
  if (Ro === void 0)
    try {
      await WebAssembly.instantiate(Mo), Ro = true;
    } catch {
      Ro = false;
    }
  return Ro;
}
async function Oo(t2, e2 = "") {
  const n2 = await Po() ? "wasm_internal" : "wasm_nosimd_internal";
  return {wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm`};
}
var Co = class {
};
function Io() {
  const t2 = navigator.userAgent;
  return t2.includes("Safari") && !t2.includes("Chrome");
}
async function Do(t2) {
  if (typeof importScripts != "function") {
    const e2 = document.createElement("script");
    return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
      e2.addEventListener("load", () => {
        t3();
      }, false), e2.addEventListener("error", (t4) => {
        n2(t4);
      }, false), document.body.appendChild(e2);
    });
  }
  importScripts(t2.toString());
}
function No(t2) {
  return t2.videoWidth !== void 0 ? [t2.videoWidth, t2.videoHeight] : t2.naturalWidth !== void 0 ? [t2.naturalWidth, t2.naturalHeight] : t2.displayWidth !== void 0 ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
}
function Uo(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
}
function Bo(t2, e2, n2) {
  if (!t2.i.canvas)
    throw Error("No OpenGL canvas configured.");
  if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl")))
    throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false);
  const [r2, s2] = No(e2);
  return !t2.l || r2 === t2.i.canvas.width && s2 === t2.i.canvas.height || (t2.i.canvas.width = r2, t2.i.canvas.height = s2), [r2, s2];
}
function Go(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++)
    r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
  e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2)
    t2.i._free(e3);
  t2.i._free(e2);
}
function jo(t2, e2, n2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
}
function Vo(t2, e2, n2) {
  let r2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, s2) => {
    e3 ? (n2(r2, s2), r2 = []) : r2.push(t3);
  };
}
Co.forVisionTasks = function(t2) {
  return Oo("vision", t2);
}, Co.forTextTasks = function(t2) {
  return Oo("text", t2);
}, Co.forGenAiTasks = function(t2) {
  return Oo("genai", t2);
}, Co.forAudioTasks = function(t2) {
  return Oo("audio", t2);
}, Co.isSimdSupported = function() {
  return Po();
};
async function Xo(t2, e2, n2, r2) {
  return t2 = await (async (t3, e3, n3, r3, s2) => {
    if (e3 && await Do(e3), !self.ModuleFactory)
      throw Error("ModuleFactory not set.");
    if (n3 && (await Do(n3), !self.ModuleFactory))
      throw Error("ModuleFactory not set.");
    return self.Module && s2 && ((e3 = self.Module).locateFile = s2.locateFile, s2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = s2.mainScriptUrlOrBlob)), s2 = await self.ModuleFactory(self.Module || s2), self.ModuleFactory = self.Module = void 0, new t3(s2, r3);
  })(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, {locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3}), await t2.o(r2), t2;
}
function Ho(t2, e2) {
  const n2 = Tn(t2.baseOptions, Ti, 1) || new Ti();
  typeof e2 == "string" ? (rn(n2, 2, ke(e2)), rn(n2, 1)) : e2 instanceof Uint8Array && (rn(n2, 1, se(e2, false, false)), rn(n2, 2)), kn(t2.baseOptions, 0, 1, n2);
}
function Wo(t2) {
  try {
    const e2 = t2.H.length;
    if (e2 === 1)
      throw Error(t2.H[0].message);
    if (1 < e2)
      throw Error("Encountered multiple errors: " + t2.H.map((t3) => t3.message).join(", "));
  } finally {
    t2.H = [];
  }
}
function zo(t2, e2) {
  t2.C = Math.max(t2.C, e2);
}
var qo = class {
  constructor(t2) {
    this.g = t2, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(false);
  }
  l(t2, e2 = true) {
    if (e2) {
      const e3 = t2.baseOptions || {};
      if (t2.baseOptions?.modelAssetBuffer && t2.baseOptions?.modelAssetPath)
        throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(Tn(this.baseOptions, Ti, 1)?.g() || Tn(this.baseOptions, Ti, 1)?.h() || t2.baseOptions?.modelAssetBuffer || t2.baseOptions?.modelAssetPath))
        throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(t3, e4) {
        let n2 = Tn(t3.baseOptions, Ei, 3);
        if (!n2) {
          var r2 = n2 = new Ei(), s2 = new is();
          xn(r2, 4, wi, s2);
        }
        "delegate" in e4 && (e4.delegate === "GPU" ? (e4 = n2, r2 = new ns(), xn(e4, 2, wi, r2)) : (e4 = n2, r2 = new is(), xn(e4, 4, wi, r2))), kn(t3.baseOptions, 0, 3, n2);
      }(this, e3), e3.modelAssetPath)
        return fetch(e3.modelAssetPath.toString()).then((t3) => {
          if (t3.ok)
            return t3.arrayBuffer();
          throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
        }).then((t3) => {
          try {
            this.g.i.FS_unlink("/model.dat");
          } catch {
          }
          this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), Ho(this, "/model.dat"), this.m(), this.K();
        });
      Ho(this, e3.modelAssetBuffer);
    }
    return this.m(), this.K(), Promise.resolve();
  }
  K() {
  }
  fa() {
    let t2;
    if (this.g.fa((e2) => {
      t2 = Rs(e2);
    }), !t2)
      throw Error("Failed to retrieve CalculatorGraphConfig");
    return t2;
  }
  setGraph(t2, e2) {
    this.g.attachErrorListener((t3, e3) => {
      this.H.push(Error(e3));
    }), this.g.Ma(), this.g.setGraph(t2, e2), this.B = void 0, Wo(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Wo(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function Jo(t2, e2) {
  if (!t2)
    throw Error(`Unable to obtain required WebGL resource: ${e2}`);
  return t2;
}
qo.prototype.close = qo.prototype.close;
function Qo(t2, e2, n2) {
  const r2 = t2.g;
  if (n2 = Jo(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS))
    throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
  return r2.attachShader(t2.h, n2), n2;
}
var oa = class {
  H() {
    return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
  }
  m() {
    const t2 = this.g;
    if (this.h = Jo(t2.createProgram(), "Failed to create WebGL program"), this.ba = Qo(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.aa = Qo(this, this.H(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS))
      throw Error(`Error during program linking: ${t2.getProgramInfoLog(this.h)}`);
    this.P = t2.getAttribLocation(this.h, "aVertex"), this.O = t2.getAttribLocation(this.h, "aTex");
  }
  D() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const t2 = this.g;
      t2.deleteProgram(this.h), t2.deleteShader(this.ba), t2.deleteShader(this.aa);
    }
    this.B && this.g.deleteFramebuffer(this.B), this.v && this.v.close(), this.s && this.s.close();
  }
};
function Ga(...t2) {
  return t2.map(([t3, e2]) => ({start: t3, end: e2}));
}
var ja = function(t2) {
  return class extends t2 {
    Ma() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((Va = class {
  constructor(t2, e2) {
    this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", e2 !== void 0 ? this.i.canvas = e2 : typeof OffscreenCanvas == "undefined" || Io() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  async initializeGraph(t2) {
    const e2 = await (await fetch(t2)).arrayBuffer();
    t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, e2) {
    const n2 = t2.length, r2 = this.i._malloc(n2);
    this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
  }
  configureAudio(t2, e2, n2, r2, s2) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Uo(this, r2 || "input_audio", (r3) => {
      Uo(this, s2 = s2 || "audio_header", (s3) => {
        this.i._configureAudio(r3, s3, t2, e2, n2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.l = t2;
  }
  setAutoRenderToScreen(t2) {
    this.i._setAutoRenderToScreen(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  fa(t2) {
    jo(this, "__graph_config__", (e2) => {
      t2(e2);
    }), Uo(this, "__graph_config__", (t3) => {
      this.i._getGraphConfig(t3, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(t2) {
    this.i.errorListener = t2;
  }
  attachEmptyPacketListener(t2, e2) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
  }
  addAudioToStream(t2, e2, n2) {
    this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
  }
  addAudioToStreamWithShape(t2, e2, n2, r2, s2) {
    const i2 = 4 * t2.length;
    this.h !== i2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(i2), this.h = i2), this.i.HEAPF32.set(t2, this.g / 4), Uo(this, r2, (t3) => {
      this.i._addAudioToInputStream(this.g, e2, n2, t3, s2);
    });
  }
  addGpuBufferToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const [r2, s2] = Bo(this, t2, e3);
      this.i._addBoundTextureToStream(e3, r2, s2, n2);
    });
  }
  addBoolToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      this.i._addBoolToInputStream(t2, e3, n2);
    });
  }
  addDoubleToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      this.i._addDoubleToInputStream(t2, e3, n2);
    });
  }
  addFloatToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      this.i._addFloatToInputStream(t2, e3, n2);
    });
  }
  addIntToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      this.i._addIntToInputStream(t2, e3, n2);
    });
  }
  addStringToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      Uo(this, t2, (t3) => {
        this.i._addStringToInputStream(t3, e3, n2);
      });
    });
  }
  addStringRecordToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      Go(this, Object.keys(t2), (r2) => {
        Go(this, Object.values(t2), (s2) => {
          this.i._addFlatHashMapToInputStream(r2, s2, Object.keys(t2).length, e3, n2);
        });
      });
    });
  }
  addProtoToStream(t2, e2, n2, r2) {
    Uo(this, n2, (n3) => {
      Uo(this, e2, (e3) => {
        const s2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, s2), this.i._addProtoToInputStream(s2, t2.length, e3, n3, r2), this.i._free(s2);
      });
    });
  }
  addEmptyPacketToStream(t2, e2) {
    Uo(this, t2, (t3) => {
      this.i._addEmptyPacketToInputStream(t3, e2);
    });
  }
  addBoolVectorToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const r2 = this.i._allocateBoolVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2)
        this.i._addBoolVectorEntry(r2, e4);
      this.i._addBoolVectorToInputStream(r2, e3, n2);
    });
  }
  addDoubleVectorToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const r2 = this.i._allocateDoubleVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2)
        this.i._addDoubleVectorEntry(r2, e4);
      this.i._addDoubleVectorToInputStream(r2, e3, n2);
    });
  }
  addFloatVectorToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const r2 = this.i._allocateFloatVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2)
        this.i._addFloatVectorEntry(r2, e4);
      this.i._addFloatVectorToInputStream(r2, e3, n2);
    });
  }
  addIntVectorToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const r2 = this.i._allocateIntVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2)
        this.i._addIntVectorEntry(r2, e4);
      this.i._addIntVectorToInputStream(r2, e3, n2);
    });
  }
  addStringVectorToStream(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const r2 = this.i._allocateStringVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2)
        Uo(this, e4, (t3) => {
          this.i._addStringVectorEntry(r2, t3);
        });
      this.i._addStringVectorToInputStream(r2, e3, n2);
    });
  }
  addBoolToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      this.i._addBoolToInputSidePacket(t2, e3);
    });
  }
  addDoubleToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      this.i._addDoubleToInputSidePacket(t2, e3);
    });
  }
  addFloatToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      this.i._addFloatToInputSidePacket(t2, e3);
    });
  }
  addIntToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      this.i._addIntToInputSidePacket(t2, e3);
    });
  }
  addStringToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      Uo(this, t2, (t3) => {
        this.i._addStringToInputSidePacket(t3, e3);
      });
    });
  }
  addProtoToInputSidePacket(t2, e2, n2) {
    Uo(this, n2, (n3) => {
      Uo(this, e2, (e3) => {
        const r2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      const n2 = this.i._allocateBoolVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2)
        this.i._addBoolVectorEntry(n2, e4);
      this.i._addBoolVectorToInputSidePacket(n2, e3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      const n2 = this.i._allocateDoubleVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2)
        this.i._addDoubleVectorEntry(n2, e4);
      this.i._addDoubleVectorToInputSidePacket(n2, e3);
    });
  }
  addFloatVectorToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      const n2 = this.i._allocateFloatVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2)
        this.i._addFloatVectorEntry(n2, e4);
      this.i._addFloatVectorToInputSidePacket(n2, e3);
    });
  }
  addIntVectorToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      const n2 = this.i._allocateIntVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2)
        this.i._addIntVectorEntry(n2, e4);
      this.i._addIntVectorToInputSidePacket(n2, e3);
    });
  }
  addStringVectorToInputSidePacket(t2, e2) {
    Uo(this, e2, (e3) => {
      const n2 = this.i._allocateStringVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2)
        Uo(this, e4, (t3) => {
          this.i._addStringVectorEntry(n2, t3);
        });
      this.i._addStringVectorToInputSidePacket(n2, e3);
    });
  }
  attachBoolListener(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachBoolListener(t3);
    });
  }
  attachBoolVectorListener(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachBoolVectorListener(t3);
    });
  }
  attachIntListener(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachIntListener(t3);
    });
  }
  attachIntVectorListener(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachIntVectorListener(t3);
    });
  }
  attachDoubleListener(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachDoubleListener(t3);
    });
  }
  attachDoubleVectorListener(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachDoubleVectorListener(t3);
    });
  }
  attachFloatListener(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachFloatListener(t3);
    });
  }
  attachFloatVectorListener(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachFloatVectorListener(t3);
    });
  }
  attachStringListener(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachStringListener(t3);
    });
  }
  attachStringVectorListener(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachStringVectorListener(t3);
    });
  }
  attachProtoListener(t2, e2, n2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachProtoListener(t3, n2 || false);
    });
  }
  attachProtoVectorListener(t2, e2, n2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.i._attachProtoVectorListener(t3, n2 || false);
    });
  }
  attachAudioListener(t2, e2, n2) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), jo(this, t2, (t3, n3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
    }), Uo(this, t2, (t3) => {
      this.i._attachAudioListener(t3, n2 || false);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Va {
  get ha() {
    return this.i;
  }
  sa(t2, e2, n2) {
    Uo(this, e2, (e3) => {
      const [r2, s2] = Bo(this, t2, e3);
      this.ha._addBoundTextureAsImageToStream(e3, r2, s2, n2);
    });
  }
  W(t2, e2) {
    jo(this, t2, e2), Uo(this, t2, (t3) => {
      this.ha._attachImageListener(t3);
    });
  }
  da(t2, e2) {
    Vo(this, t2, e2), Uo(this, t2, (t3) => {
      this.ha._attachImageVectorListener(t3);
    });
  }
}));
var Va;
var Xa = class extends ja {
};
async function Ha(t2, e2, n2) {
  return async function(t3, e3, n3, r2) {
    return Xo(t3, e3, n3, r2);
  }(t2, n2.canvas ?? (typeof OffscreenCanvas == "undefined" || Io() ? document.createElement("canvas") : void 0), e2, n2);
}
function Wa(t2, e2, n2, r2) {
  if (t2.V) {
    const i2 = new si();
    if (n2?.regionOfInterest) {
      if (!t2.ra)
        throw Error("This task doesn't support region-of-interest.");
      var s2 = n2.regionOfInterest;
      if (s2.left >= s2.right || s2.top >= s2.bottom)
        throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > s2.left || 0 > s2.top || 1 < s2.right || 1 < s2.bottom)
        throw Error("Expected RectF values to be in [0,1].");
      In(i2, 1, (s2.left + s2.right) / 2), In(i2, 2, (s2.top + s2.bottom) / 2), In(i2, 4, s2.right - s2.left), In(i2, 3, s2.bottom - s2.top);
    } else
      In(i2, 1, 0.5), In(i2, 2, 0.5), In(i2, 4, 1), In(i2, 3, 1);
    if (n2?.rotationDegrees) {
      if (n2?.rotationDegrees % 90 != 0)
        throw Error("Expected rotation to be a multiple of 90°.");
      if (In(i2, 5, -Math.PI * n2.rotationDegrees / 180), n2?.rotationDegrees % 180 != 0) {
        const [t3, r3] = No(e2);
        n2 = Pn(i2, 3) * r3 / t3, s2 = Pn(i2, 4) * t3 / r3, In(i2, 4, n2), In(i2, 3, s2);
      }
    }
    t2.g.addProtoToStream(i2.g(), "mediapipe.NormalizedRect", t2.V, r2);
  }
  t2.g.sa(e2, t2.ba, r2 ?? performance.now()), t2.finishProcessing();
}
function za(t2, e2, n2) {
  if (t2.baseOptions?.g())
    throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  Wa(t2, e2, n2, t2.C + 1);
}
function Ka(t2, e2, n2, r2) {
  if (!t2.baseOptions?.g())
    throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  Wa(t2, e2, n2, r2);
}
var $a = class extends qo {
  constructor(t2, e2, n2, r2) {
    super(t2), this.g = t2, this.ba = e2, this.V = n2, this.ra = r2, this.O = new oa();
  }
  l(t2, e2 = true) {
    if ("runningMode" in t2 && On(this.baseOptions, 2, !!t2.runningMode && t2.runningMode !== "IMAGE"), t2.canvas !== void 0 && this.g.i.canvas !== t2.canvas)
      throw Error("You must create a new task to reset the canvas.");
    return super.l(t2, e2);
  }
  close() {
    this.O.close(), super.close();
  }
};
$a.prototype.close = $a.prototype.close;
var qa = class extends $a {
  constructor(t2, e2) {
    super(new Xa(t2, e2), "image_in", "norm_rect_in", false), this.j = {detections: []}, kn(t2 = this.h = new xi(), 0, 1, e2 = new bi()), In(this.h, 2, 0.5), In(this.h, 3, 0.3);
  }
  get baseOptions() {
    return Tn(this.h, bi, 1);
  }
  set baseOptions(t2) {
    kn(this.h, 0, 1, t2);
  }
  o(t2) {
    return "minDetectionConfidence" in t2 && In(this.h, 2, t2.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t2 && In(this.h, 3, t2.minSuppressionThreshold ?? 0.3), this.l(t2);
  }
  F(t2, e2) {
    return this.j = {detections: []}, za(this, t2, e2), this.j;
  }
  G(t2, e2, n2) {
    return this.j = {detections: []}, Ka(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Ls();
    xs(t2, "image_in"), xs(t2, "norm_rect_in"), Ss(t2, "detections");
    const e2 = new hs();
    Dn(e2, Li, this.h);
    const n2 = new vs();
    ms(n2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), ys(n2, "IMAGE:image_in"), ys(n2, "NORM_RECT:norm_rect_in"), _s(n2, "DETECTIONS:detections"), n2.o(e2), ks(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3)
        t3 = Ks(e4), this.j.detections.push(ko(t3));
      zo(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      zo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
qa.prototype.detectForVideo = qa.prototype.G, qa.prototype.detect = qa.prototype.F, qa.prototype.setOptions = qa.prototype.o, qa.createFromModelPath = async function(t2, e2) {
  return Ha(qa, t2, {baseOptions: {modelAssetPath: e2}});
}, qa.createFromModelBuffer = function(t2, e2) {
  return Ha(qa, t2, {baseOptions: {modelAssetBuffer: e2}});
}, qa.createFromOptions = function(t2, e2) {
  return Ha(qa, t2, e2);
};
var Ja = Ga([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
var Za = Ga([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
var Qa = Ga([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
var th = Ga([474, 475], [475, 476], [476, 477], [477, 474]);
var eh = Ga([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
var nh = Ga([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
var rh = Ga([469, 470], [470, 471], [471, 472], [472, 469]);
var sh = Ga([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
var oh = Ga([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
var uh = Ga([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
var yh = Ga([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);

// build/dist/index.js
var GoogleMediaPipeFaceDetectorWrapper = class {
  constructor() {
    this.showMessage = () => {
      try {
        alert("Package Alert");
        return true;
      } catch (error) {
        console.log(`Show Message ${error}`);
        return false;
      }
    };
    this.load = async () => {
      try {
        this.vision = await Co.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
        this.facedetector = await qa.createFromModelPath(this.vision, "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/latest/blaze_face_short_range.tflite");
        return true;
      } catch (error) {
        this.vision = void 0;
        this.facedetector = void 0;
        console.log(`Initialization Error: ${error}`);
        return false;
      }
    };
    this.close = async () => {
      try {
        this.facedetector?.close();
        this.vision = void 0;
        this.facedetector = void 0;
        return true;
      } catch (error) {
        console.log(`Closing Error ${error}`);
        return false;
      }
    };
    this.preprocess = async (imagePath) => {
      try {
        const response = await fetch(imagePath);
        const blob = await response.blob();
        let imageBitmap = await createImageBitmap(blob);
        return imageBitmap;
      } catch (error) {
        console.log("Preprocessing error");
        return null;
      }
    };
    this.detect = (image) => {
      try {
        let result = this.facedetector?.detect(image);
        if (result == void 0) {
          throw "Error occurred while detecting face";
        }
        let faces = [];
        if (result.detections.length > 0) {
          result.detections.forEach((detection) => {
            if (detection.boundingBox) {
              const boundingBox = detection.boundingBox;
              const right = boundingBox.originX + boundingBox.width;
              const bottom = boundingBox.originY + boundingBox.height;
              const left = boundingBox.originX;
              const top = boundingBox.originY;
              const rect = {
                left,
                top,
                right,
                bottom
              };
              faces.push(rect);
            }
          });
        }
        console.log(faces);
        return faces;
      } catch (error) {
        console.log(`Face Detection Error ${error}`);
        return null;
      }
    };
  }
};
// export {
//   GoogleMediaPipeFaceDetectorWrapper
// };
//# sourceMappingURL=index.js.map