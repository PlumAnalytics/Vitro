/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ee.type(e);
        return "function" !== n && !ee.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function i(e, t, n) {
        if (ee.isFunction(t))
            return ee.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return ee.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ae.test(t))
                return ee.filter(t, e, n);
            t = ee.filter(t, e)
        }
        return ee.grep(e, function(e) {
            return X.call(t, e) >= 0 !== n
        })
    }
    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function s(e) {
        var t = pe[e] = {};
        return ee.each(e.match(fe) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function o() {
        K.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), ee.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = ee.expando + Math.random()
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? ee.parseJSON(n) : n)
                } catch (e) {}
                ve.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function h() {
        try {
            return K.activeElement
        } catch (e) {}
    }
    function d(e, t) {
        return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function p(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function _(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n,
            i,
            r,
            s,
            o,
            a,
            l,
            c;
        if (1 === t.nodeType) {
            if (me.hasData(e) && (s = me.access(e), o = me.set(t, s), c = s.events)) {
                delete o.handle, o.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++)
                        ee.event.add(t, r, c[r][n])
            }
            ve.hasData(e) && (a = ve.access(e), l = ee.extend({}, a), ve.set(t, l))
        }
    }
    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], n) : n
    }
    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function y(t, n) {
        var i = ee(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : ee.css(i[0], "display");
        return i.detach(), r
    }
    function b(e) {
        var t = K,
            n = Me[e];
        return n || (n = y(e, t), "none" !== n && n || ($e = ($e || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = $e[0].contentDocument, t.write(), t.close(), n = y(e, t), $e.detach()), Me[e] = n), n
    }
    function x(e, t, n) {
        var i,
            r,
            s,
            o,
            a = e.style;
        return n = n || Be(e), n && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || ee.contains(e.ownerDocument, e) || (o = ee.style(e, t)), We.test(o) && Fe.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }
    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ye.length; r--;)
            if (t = Ye[r] + n, t in e)
                return t;
        return i
    }
    function k(e, t, n) {
        var i = Ue.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function C(e, t, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; s < 4; s += 2)
            "margin" === n && (o += ee.css(e, n + we[s], !0, r)), i ? ("content" === n && (o -= ee.css(e, "padding" + we[s], !0, r)), "margin" !== n && (o -= ee.css(e, "border" + we[s] + "Width", !0, r))) : (o += ee.css(e, "padding" + we[s], !0, r), "padding" !== n && (o += ee.css(e, "border" + we[s] + "Width", !0, r)));
        return o
    }
    function N(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Be(e),
            o = "border-box" === ee.css(e, "boxSizing", !1, s);
        if (r <= 0 || null == r) {
            if (r = x(e, t, s), (r < 0 || null == r) && (r = e.style[t]), We.test(r))
                return r;
            i = o && (J.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + C(e, t, n || (o ? "border" : "content"), i, s) + "px"
    }
    function j(e, t) {
        for (var n, i, r, s = [], o = 0, a = e.length; o < a; o++)
            i = e[o], i.style && (s[o] = me.get(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (s[o] = me.access(i, "olddisplay", b(i.nodeName)))) : s[o] || (r = Te(i), (n && "none" !== n || !r) && me.set(i, "olddisplay", r ? n : ee.css(i, "display"))));
        for (o = 0; o < a; o++)
            i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
        return e
    }
    function S(e, t, n, i, r) {
        return new S.prototype.init(e, t, n, i, r)
    }
    function E() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = ee.now()
    }
    function q(e, t) {
        var n,
            i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = we[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function D(e, t, n) {
        for (var i, r = (nt[t] || []).concat(nt["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, t, e))
                return i
    }
    function A(e, t, n) {
        var i,
            r,
            s,
            o,
            a,
            l,
            c,
            u = this,
            h = {},
            d = e.style,
            f = e.nodeType && Te(e),
            p = me.get(e, "fxshow");
        n.queue || (a = ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, ee.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = ee.css(e, "display"), "none" === c && (c = b(e.nodeName)), "inline" === c && "none" === ee.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Ke.exec(r)) {
                if (delete t[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !p || void 0 === p[i])
                        continue;
                    f = !0
                }
                h[i] = p && p[i] || ee.style(e, i)
            }
        if (!ee.isEmptyObject(h)) {
            p ? "hidden" in p && (f = p.hidden) : p = me.access(e, "fxshow", {}), s && (p.hidden = !f), f ? ee(e).show() : u.done(function() {
                    ee(e).hide()
                }), u.done(function() {
                var t;
                me.remove(e, "fxshow");
                for (t in h)
                    ee.style(e, t, h[t])
            });
            for (i in h)
                o = D(f ? p[i] : 0, i, u), i in p || (p[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function O(e, t) {
        var n,
            i,
            r,
            s,
            o;
        for (n in e)
            if (i = ee.camelCase(n), r = t[i], s = e[n], ee.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), o = ee.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete e[i];
                for (n in s)
                    n in e || (e[n] = s[n], t[n] = r)
            } else
                t[i] = r
    }
    function L(e, t, n) {
        var i,
            r,
            s = 0,
            o = tt.length,
            a = ee.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r)
                    return !1;
                for (var t = Ge || E(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; o < l; o++)
                    c.tweens[o].run(s);
                return a.notifyWith(e, [c, s, n]), s < 1 && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: ee.extend({}, t),
                opts: ee.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || E(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ee.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < i; n++)
                        c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (O(u, c.opts.specialEasing); s < o; s++)
            if (i = tt[s].call(c, e, u, c.opts))
                return i;
        return ee.map(u, D, c), ee.isFunction(c.opts.start) && c.opts.start.call(e, c), ee.fx.timer(ee.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i,
                r = 0,
                s = t.toLowerCase().match(fe) || [];
            if (ee.isFunction(n))
                for (; i = s[r++];)
                    "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function R(e, t, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, ee.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var s = {},
            o = e === xt;
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }
    function H(e, t) {
        var n,
            i,
            r = ee.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ee.extend(!0, e, i), e
    }
    function P(e, t, n) {
        for (var i, r, s, o, a = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n)
            s = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        if (s)
            return s !== l[0] && l.unshift(s), n[s]
    }
    function $(e, t, n, i) {
        var r,
            s,
            o,
            a,
            l,
            c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (o in e.converters)
                c[o.toLowerCase()] = e.converters[o];
        for (s = u.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                if ("*" === s)
                    s = l;
                else if ("*" !== l && l !== s) {
                    if (o = c[l + " " + s] || c["* " + s], !o)
                        for (r in c)
                            if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e.throws)
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + s
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function M(e, t, n, i) {
        var r;
        if (ee.isArray(t))
            ee.each(t, function(t, r) {
                n || kt.test(e) ? i(e, r) : M(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== ee.type(t))
            i(e, t);
        else
            for (r in t)
                M(e + "[" + r + "]", t[r], n, i)
    }
    function F(e) {
        return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
        B = W.slice,
        z = W.concat,
        U = W.push,
        X = W.indexOf,
        Q = {},
        V = Q.toString,
        Y = Q.hasOwnProperty,
        G = "".trim,
        J = {},
        K = e.document,
        Z = "2.1.0",
        ee = function(e, t) {
            return new ee.fn.init(e, t)
        },
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
    ee.fn = ee.prototype = {
        jquery: Z,
        constructor: ee,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function(e) {
            var t = ee.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ee.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ee.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: W.sort,
        splice: W.splice
    }, ee.extend = ee.fn.extend = function() {
        var e,
            t,
            n,
            i,
            r,
            s,
            o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || ee.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = o[t], i = e[t], o !== i && (c && i && (ee.isPlainObject(i) || (r = ee.isArray(i))) ? (r ? (r = !1, s = n && ee.isArray(n) ? n : []) : s = n && ee.isPlainObject(n) ? n : {}, o[t] = ee.extend(c, s, i)) : void 0 !== i && (o[t] = i));
        return o
    }, ee.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ee.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            if ("object" !== ee.type(e) || e.nodeType || ee.isWindow(e))
                return !1;
            try {
                if (e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[V.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t,
                n = eval;
            e = ee.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r,
                s = 0,
                o = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s < o && (r = t.apply(e[s], i), r !== !1); s++)
                        ;
                else
                    for (s in e)
                        if (r = t.apply(e[s], i), r === !1)
                            break
            } else if (a)
                for (; s < o && (r = t.call(e[s], s, e[s]), r !== !1); s++)
                    ;
            else
                for (s in e)
                    if (r = t.call(e[s], s, e[s]), r === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : G.call(e)
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ee.merge(i, "string" == typeof e ? [e] : e) : U.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], s = 0, o = e.length, a = !n; s < o; s++)
                i = !t(e[s], s), i !== a && r.push(e[s]);
            return r
        },
        map: function(e, t, i) {
            var r,
                s = 0,
                o = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s < o; s++)
                    r = t(e[s], s, i), null != r && l.push(r);
            else
                for (s in e)
                    r = t(e[s], s, i), null != r && l.push(r);
            return z.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                i,
                r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ee.isFunction(e))
                return i = B.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(B.call(arguments)))
                }, r.guid = e.guid = e.guid || ee.guid++, r
        },
        now: Date.now,
        support: J
    }), ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var re = /*!
     * Sizzle CSS Selector Engine v1.10.16
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-01-13
     */
        function(e) {
            function t(e, t, n, i) {
                var r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    h,
                    p,
                    _,
                    g;
                if ((t ? t.ownerDocument || t : M) !== A && D(t), t = t || A, n = n || [], !e || "string" != typeof e)
                    return n;
                if (1 !== (a = t.nodeType) && 9 !== a)
                    return [];
                if (L && !i) {
                    if (r = ve.exec(e))
                        if (o = r[1]) {
                            if (9 === a) {
                                if (s = t.getElementById(o), !s || !s.parentNode)
                                    return n;
                                if (s.id === o)
                                    return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && P(t, s) && s.id === o)
                                return n.push(s), n
                        } else {
                            if (r[2])
                                return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = r[3]) && T.getElementsByClassName && t.getElementsByClassName)
                                return Z.apply(n, t.getElementsByClassName(o)), n
                        }
                    if (T.qsa && (!I || !I.test(e))) {
                        if (p = h = $, _ = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (c = d(e), (h = t.getAttribute("id")) ? p = h.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)
                                c[l] = p + f(c[l]);
                            _ = ye.test(e) && u(t.parentNode) || t, g = c.join(",")
                        }
                        if (g)
                            try {
                                return Z.apply(n, _.querySelectorAll(g)), n
                            } catch (e) {} finally {
                                h || t.removeAttribute("id")
                            }
                    }
                }
                return x(e.replace(le, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[$] = !0, e
            }
            function r(e) {
                var t = A.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }
            function s(e, t) {
                for (var n = e.split("|"), i = e.length; i--;)
                    k.attrHandle[n[i]] = t
            }
            function o(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, s = e([], n.length, t), o = s.length; o--;)
                            n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function u(e) {
                return e && typeof e.getElementsByTagName !== Q && e
            }
            function h() {}
            function d(e, n) {
                var i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u = z[e + " "];
                if (u)
                    return n ? 0 : u.slice(0);
                for (a = e, l = [], c = k.preFilter; a;) {
                    i && !(r = ce.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (o in k.filter)
                        !(r = pe[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                    if (!i)
                        break
                }
                return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
            }
            function f(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function p(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    s = W++;
                return t.first ? function(t, n, s) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r)
                                return e(t, n, s)
                    } : function(t, n, o) {
                        var a,
                            l,
                            c = [F, s];
                        if (o) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, o))
                                    return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (l = t[$] || (t[$] = {}), (a = l[i]) && a[0] === F && a[1] === s)
                                        return c[2] = a[2];
                                    if (l[i] = c, c[2] = e(t, n, o))
                                        return !0
                                }
                    }
            }
            function _(e) {
                return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i))
                                return !1;
                        return !0
                    } : e[0]
            }
            function g(e, t, n, i, r) {
                for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)
                    (s = e[a]) && (n && !n(s, i, r) || (o.push(s), c && t.push(a)));
                return o
            }
            function m(e, t, n, r, s, o) {
                return r && !r[$] && (r = m(r)), s && !s[$] && (s = m(s, o)), i(function(i, o, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        f = [],
                        p = o.length,
                        _ = i || b(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !i && t ? _ : g(_, d, e, a, l),
                        v = n ? s || (i ? e : p || r) ? [] : o : m;
                    if (n && n(m, v, a, l), r)
                        for (c = g(v, f), r(c, [], a, l), u = c.length; u--;)
                            (h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                    if (i) {
                        if (s || e) {
                            if (s) {
                                for (c = [], u = v.length; u--;)
                                    (h = v[u]) && c.push(m[u] = h);
                                s(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)
                                (h = v[u]) && (c = s ? te.call(i, h) : d[u]) > -1 && (i[c] = !(o[c] = h))
                        }
                    } else
                        v = g(v === o ? v.splice(p, v.length) : v), s ? s(null, o, v, l) : Z.apply(o, v)
                })
            }
            function v(e) {
                for (var t, n, i, r = e.length, s = k.relative[e[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = p(function(e) {
                    return e === t
                }, o, !0), c = p(function(e) {
                    return te.call(t, e) > -1
                }, o, !0), u = [function(e, n, i) {
                    return !s && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; a < r; a++)
                    if (n = k.relative[e[a].type])
                        u = [p(_(u), n)];
                    else {
                        if (n = k.filter[e[a].type].apply(null, e[a].matches), n[$]) {
                            for (i = ++a; i < r && !k.relative[e[i].type]; i++)
                                ;
                            return m(a > 1 && _(u), a > 1 && f(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                        }
                        u.push(n)
                    }
                return _(u)
            }
            function y(e, n) {
                var r = n.length > 0,
                    s = e.length > 0,
                    o = function(i, o, a, l, c) {
                        var u,
                            h,
                            d,
                            f = 0,
                            p = "0",
                            _ = i && [],
                            m = [],
                            v = S,
                            y = i || s && k.find.TAG("*", c),
                            b = F += null == v ? 1 : Math.random() || .1,
                            x = y.length;
                        for (c && (S = o !== A && o); p !== x && null != (u = y[p]); p++) {
                            if (s && u) {
                                for (h = 0; d = e[h++];)
                                    if (d(u, o, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (F = b)
                            }
                            r && ((u = !d && u) && f--, i && _.push(u))
                        }
                        if (f += p, r && p !== f) {
                            for (h = 0; d = n[h++];)
                                d(_, m, o, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;)
                                        _[p] || m[p] || (m[p] = J.call(l));
                                m = g(m)
                            }
                            Z.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (F = b, S = v), _
                    };
                return r ? i(o) : o
            }
            function b(e, n, i) {
                for (var r = 0, s = n.length; r < s; r++)
                    t(e, n[r], i);
                return i
            }
            function x(e, t, n, i) {
                var r,
                    s,
                    o,
                    a,
                    l,
                    c = d(e);
                if (!i && 1 === c.length) {
                    if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && T.getById && 9 === t.nodeType && L && k.relative[s[1].type]) {
                        if (t = (k.find.ID(o.matches[0].replace(xe, we), t) || [])[0], !t)
                            return n;
                        e = e.slice(s.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !k.relative[a = o.type]);)
                        if ((l = k.find[a]) && (i = l(o.matches[0].replace(xe, we), ye.test(s[0].type) && u(t.parentNode) || t))) {
                            if (s.splice(r, 1), e = i.length && f(s), !e)
                                return Z.apply(n, i), n;
                            break
                        }
                }
                return j(e, c)(i, t, !L, n, ye.test(e) && u(t.parentNode) || t), n
            }
            var w,
                T,
                k,
                C,
                N,
                j,
                S,
                E,
                q,
                D,
                A,
                O,
                L,
                I,
                R,
                H,
                P,
                $ = "sizzle" + -new Date,
                M = e.document,
                F = 0,
                W = 0,
                B = n(),
                z = n(),
                U = n(),
                X = function(e, t) {
                    return e === t && (q = !0), 0
                },
                Q = "undefined",
                V = 1 << 31,
                Y = {}.hasOwnProperty,
                G = [],
                J = G.pop,
                K = G.push,
                Z = G.push,
                ee = G.slice,
                te = G.indexOf || function(e) {
                        for (var t = 0, n = this.length; t < n; t++)
                            if (this[t] === e)
                                return t;
                        return -1
                    },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                se = re.replace("w", "w#"),
                oe = "\\[" + ie + "*(" + re + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + ie + "*\\]",
                ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ce = new RegExp("^" + ie + "*," + ie + "*"),
                ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                de = new RegExp(ae),
                fe = new RegExp("^" + se + "$"),
                pe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                _e = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Z.apply(G = ee.call(M.childNodes), M.childNodes), G[M.childNodes.length].nodeType
            } catch (e) {
                Z = {
                    apply: G.length ? function(e, t) {
                            K.apply(e, ee.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];)
                                ;
                            e.length = n - 1
                        }
                }
            }
            T = t.support = {}, N = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = t.setDocument = function(e) {
                var t,
                    n = e ? e.ownerDocument || e : M,
                    i = n.defaultView;
                return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, O = n.documentElement, L = !N(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                            D()
                        }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                            D()
                        })), T.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = r(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = me.test(n.getElementsByClassName) && r(function(e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                        }), T.getById = r(function(e) {
                        return O.appendChild(e).id = $, !n.getElementsByName || !n.getElementsByName($).length
                    }), T.getById ? (k.find.ID = function(e, t) {
                            if (typeof t.getElementById !== Q && L) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, k.filter.ID = function(e) {
                            var t = e.replace(xe, we);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete k.find.ID, k.filter.ID = function(e) {
                            var t = e.replace(xe, we);
                            return function(e) {
                                var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), k.find.TAG = T.getElementsByTagName ? function(e, t) {
                            if (typeof t.getElementsByTagName !== Q)
                                return t.getElementsByTagName(e)
                        } : function(e, t) {
                            var n,
                                i = [],
                                r = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = s[r++];)
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                            return s
                        }, k.find.CLASS = T.getElementsByClassName && function(e, t) {
                            if (typeof t.getElementsByClassName !== Q && L)
                                return t.getElementsByClassName(e)
                        }, R = [], I = [], (T.qsa = me.test(n.querySelectorAll)) && (r(function(e) {
                        e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || I.push(":checked")
                    }), r(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (T.matchesSelector = me.test(H = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                        T.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), R.push("!=", ae)
                    }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), t = me.test(O.compareDocumentPosition), P = t || me.test(O.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1
                        }, X = t ? function(e, t) {
                            if (e === t)
                                return q = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === M && P(M, e) ? -1 : t === n || t.ownerDocument === M && P(M, t) ? 1 : E ? te.call(E, e) - te.call(E, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t)
                                return q = !0, 0;
                            var i,
                                r = 0,
                                s = e.parentNode,
                                a = t.parentNode,
                                l = [e],
                                c = [t];
                            if (!s || !a)
                                return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : E ? te.call(E, e) - te.call(E, t) : 0;
                            if (s === a)
                                return o(e, t);
                            for (i = e; i = i.parentNode;)
                                l.unshift(i);
                            for (i = t; i = i.parentNode;)
                                c.unshift(i);
                            for (; l[r] === c[r];)
                                r++;
                            return r ? o(l[r], c[r]) : l[r] === M ? -1 : c[r] === M ? 1 : 0
                        }, n) : A
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== A && D(e), n = n.replace(he, "='$1']"), T.matchesSelector && L && (!R || !R.test(n)) && (!I || !I.test(n)))
                    try {
                        var i = H.call(e, n);
                        if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (e) {}
                return t(n, A, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== A && D(e), P(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== A && D(e);
                var n = k.attrHandle[t.toLowerCase()],
                    i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== i ? i : T.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t,
                    n = [],
                    i = 0,
                    r = 0;
                if (q = !T.detectDuplicates, E = !T.sortStable && e.slice(0), e.sort(X), q) {
                    for (; t = e[r++];)
                        t === e[r] && (i = n.push(r));
                    for (; i--;)
                        e.splice(n[i], 1)
                }
                return E = null, e
            }, C = t.getText = function(e) {
                var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += C(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++];)
                        n += C(t);
                return n
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t,
                            n = !e[5] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && B(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var s = t.attr(r, e);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c,
                                    u,
                                    h,
                                    d,
                                    f,
                                    p,
                                    _ = s !== o ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    m = a && t.nodeName.toLowerCase(),
                                    v = !l && !a;
                                if (g) {
                                    if (s) {
                                        for (; _;) {
                                            for (h = t; h = h[_];)
                                                if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType)
                                                    return !1;
                                            p = _ = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? g.firstChild : g.lastChild], o && v) {
                                        for (u = g[$] || (g[$] = {}), c = u[e] || [], f = c[0] === F && c[1], d = c[0] === F && c[2], h = f && g.childNodes[f]; h = ++f && h && h[_] || (d = f = 0) || p.pop();)
                                            if (1 === h.nodeType && ++d && h === t) {
                                                u[e] = [F, f, d];
                                                break
                                            }
                                    } else if (v && (c = (t[$] || (t[$] = {}))[e]) && c[0] === F)
                                        d = c[1];
                                    else
                                        for (; (h = ++f && h && h[_] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++d || (v && ((h[$] || (h[$] = {}))[e] = [F, d]), h !== t));)
                                            ;
                                    return d -= r, d === i || d % i === 0 && d / i >= 0
                                }
                            }
                    },
                    PSEUDO: function(e, n) {
                        var r,
                            s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return s[$] ? s(n) : s.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                        for (var i, r = s(e, n), o = r.length; o--;)
                                            i = te.call(e, r[o]), e[i] = !(t[i] = r[o])
                                    }) : function(e) {
                                        return s(e, 0, r)
                                    }) : s
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = j(e.replace(le, "$1"));
                        return r[$] ? i(function(e, t, n, i) {
                                for (var s, o = r(e, null, i, []), a = e.length; a--;)
                                    (s = o[a]) && (e[a] = !(t[a] = s))
                            }) : function(e, i, s) {
                                return t[0] = e, r(t, null, s, n), !n.pop()
                            }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function(t) {
                            var n;
                            do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === O
                    },
                    focus: function(e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return _e.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;)
                            e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;)
                            e.push(i);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                k.pseudos[w] = a(w);
            for (w in {
                submit: !0,
                reset: !0
            })
                k.pseudos[w] = l(w);
            return h.prototype = k.filters = k.pseudos, k.setFilters = new h, j = t.compile = function(e, t) {
                var n,
                    i = [],
                    r = [],
                    s = U[e + " "];
                if (!s) {
                    for (t || (t = d(e)), n = t.length; n--;)
                        s = v(t[n]), s[$] ? i.push(s) : r.push(s);
                    s = U(e, y(r, i))
                }
                return s
            }, T.sortStable = $.split("").sort(X).join("") === $, T.detectDuplicates = !!q, D(), T.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(A.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), T.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || s(ne, function(e, t, n) {
                var i;
                if (!n)
                    return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    ee.find = re, ee.expr = re.selectors, ee.expr[":"] = ee.expr.pseudos, ee.unique = re.uniqueSort, ee.text = re.getText, ee.isXMLDoc = re.isXML, ee.contains = re.contains;
    var se = ee.expr.match.needsContext,
        oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    ee.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ee.find.matchesSelector(i, e) ? [i] : [] : ee.find.matches(e, ee.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }, ee.fn.extend({
        find: function(e) {
            var t,
                n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e)
                return this.pushStack(ee(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (ee.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                ee.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? ee.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && se.test(e) ? ee(e) : e || [], !1).length
        }
    });
    var le,
        ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = ee.fn.init = function(e, t) {
            var n,
                i;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t)
                    return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ee ? t[0] : t, ee.merge(this, ee.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), oe.test(n[1]) && ee.isPlainObject(t))
                        for (n in t)
                            ee.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ee.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ee.makeArray(e, this))
        };
    ue.prototype = ee.fn, le = ee(K);
    var he = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ee.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ee(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ee.fn.extend({
        has: function(e) {
            var t = ee(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ee.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, s = [], o = se.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ee.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? ee.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(ee(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ee.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ee.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ee.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return ee.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ee.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ee.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ee.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ee.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ee.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ee.merge([], e.childNodes)
        }
    }, function(e, t) {
        ee.fn[e] = function(n, i) {
            var r = ee.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ee.filter(i, r)), this.length > 1 && (de[e] || ee.unique(r), he.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        pe = {};
    ee.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || s(e) : ee.extend({}, e);
        var t,
            n,
            i,
            r,
            o,
            a,
            l = [],
            c = !e.once && [],
            u = function(s) {
                for (t = e.memory && s, n = !0, a = r || 0, r = 0, o = l.length, i = !0; l && a < o; a++)
                    if (l[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        !function t(n) {
                            ee.each(n, function(n, i) {
                                var r = ee.type(i);
                                "function" === r ? e.unique && h.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                            })
                        }(arguments), i ? o = l.length : t && (r = n, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && ee.each(arguments, function(e, t) {
                        for (var n; (n = ee.inArray(t, l, n)) > -1;)
                            l.splice(n, 1), i && (n <= o && o--, n <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ee.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || h.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, ee.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ee.Callbacks("once memory"), "resolved"], ["reject", "fail", ee.Callbacks("once memory"), "rejected"], ["notify", "progress", ee.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ee.Deferred(function(n) {
                            ee.each(t, function(t, s) {
                                var o = ee.isFunction(e[t]) && e[t];
                                r[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ee.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ee.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ee.each(t, function(e, s) {
                var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? i : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t,
                n,
                i,
                r = 0,
                s = B.call(arguments),
                o = s.length,
                a = 1 !== o || e && ee.isFunction(e.promise) ? o : 0,
                l = 1 === a ? e : ee.Deferred(),
                c = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++)
                    s[r] && ee.isFunction(s[r].promise) ? s[r].promise().done(c(r, i, s)).fail(l.reject).progress(c(r, n, t)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    });
    var _e;
    ee.fn.ready = function(e) {
        return ee.ready.promise().done(e), this
    }, ee.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ee.readyWait++ : ee.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ee.readyWait : ee.isReady) || (ee.isReady = !0, e !== !0 && --ee.readyWait > 0 || (_e.resolveWith(K, [ee]), ee.fn.trigger && ee(K).trigger("ready").off("ready")))
        }
    }), ee.ready.promise = function(t) {
        return _e || (_e = ee.Deferred(), "complete" === K.readyState ? setTimeout(ee.ready) : (K.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))), _e.promise(t)
    }, ee.ready.promise();
    var ge = ee.access = function(e, t, n, i, r, s, o) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === ee.type(n)) {
            r = !0;
            for (a in n)
                ee.access(e, t, a, n[a], !0, s, o)
        } else if (void 0 !== i && (r = !0, ee.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ee(e), n)
                })), t))
            for (; a < l; a++)
                t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : s
    };
    ee.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = ee.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e))
                return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, ee.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i,
                r = this.key(e),
                s = this.cache[r];
            if ("string" == typeof t)
                s[t] = n;
            else if (ee.isEmptyObject(s))
                ee.extend(this.cache[r], t);
            else
                for (i in t)
                    s[i] = t[i];
            return s
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ee.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                i,
                r,
                s = this.key(e),
                o = this.cache[s];
            if (void 0 === t)
                this.cache[s] = {};
            else {
                ee.isArray(t) ? i = t.concat(t.map(ee.camelCase)) : (r = ee.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;)
                    delete o[i[n]]
            }
        },
        hasData: function(e) {
            return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var me = new a,
        ve = new a,
        ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    ee.extend({
        hasData: function(e) {
            return ve.hasData(e) || me.hasData(e)
        },
        data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        removeData: function(e, t) {
            ve.remove(e, t)
        },
        _data: function(e, t, n) {
            return me.access(e, t, n)
        },
        _removeData: function(e, t) {
            me.remove(e, t)
        }
    }), ee.fn.extend({
        data: function(e, t) {
            var n,
                i,
                r,
                s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = ve.get(s), 1 === s.nodeType && !me.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;)
                        i = o[n].name, 0 === i.indexOf("data-") && (i = ee.camelCase(i.slice(5)), l(s, i, r[i]));
                    me.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                    ve.set(this, e)
                }) : ge(this, function(t) {
                    var n,
                        i = ee.camelCase(e);
                    if (s && void 0 === t) {
                        if (n = ve.get(s, e), void 0 !== n)
                            return n;
                        if (n = ve.get(s, i), void 0 !== n)
                            return n;
                        if (n = l(s, i, void 0), void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            var n = ve.get(this, i);
                            ve.set(this, i, t), e.indexOf("-") !== -1 && void 0 !== n && ve.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ve.remove(this, e)
            })
        }
    }), ee.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue", i = me.get(e, t), n && (!i || ee.isArray(n) ? i = me.access(e, t, ee.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ee.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = ee._queueHooks(e, t),
                o = function() {
                    ee.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return me.get(e, n) || me.access(e, n, {
                    empty: ee.Callbacks("once memory").add(function() {
                        me.remove(e, [t + "queue", n])
                    })
                })
        }
    }), ee.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ee.queue(this, e, t);
                        ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ee.dequeue(this, e)
                    })
        },
        dequeue: function(e) {
            return this.each(function() {
                ee.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                i = 1,
                r = ee.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)
                n = me.get(s[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        Te = function(e, t) {
            return e = t || e, "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
        },
        ke = /^(?:checkbox|radio)$/i;
    !function() {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div"));
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>", J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    J.focusinBubbles = "onfocusin" in e;
    var Ne = /^key/,
        je = /^(?:mouse|contextmenu)|click/,
        Se = /^(?:focusinfocus|focusoutblur)$/,
        Ee = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var s,
                o,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                _,
                g = me.get(e);
            if (g)
                for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = ee.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                    return typeof ee !== Ce && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(fe) || [""], c = t.length; c--;)
                    a = Ee.exec(t[c]) || [], f = _ = a[1], p = (a[2] || "").split(".").sort(), f && (h = ee.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = ee.event.special[f] || {}, u = ee.extend({
                        type: f,
                        origType: _,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ee.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(e, i, p, o) !== !1 || e.addEventListener && e.addEventListener(f, o, !1)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), ee.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var s,
                o,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                _,
                g = me.hasData(e) && me.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(fe) || [""], c = t.length; c--;)
                    if (a = Ee.exec(t[c]) || [], f = _ = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = ee.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;)
                            u = d[s], !r && _ !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(e, u));
                        o && !d.length && (h.teardown && h.teardown.call(e, p, g.handle) !== !1 || ee.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l)
                            ee.event.remove(e, f + t[c], n, i, !0);
                ee.isEmptyObject(l) && (delete g.handle, me.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var s,
                o,
                a,
                l,
                c,
                u,
                h,
                d = [i || K],
                f = Y.call(t, "type") ? t.type : t,
                p = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !Se.test(f + ee.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[ee.expando] ? t : new ee.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ee.makeArray(n, [t]), h = ee.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !ee.isWindow(i)) {
                    for (l = h.delegateType || f, Se.test(l + f) || (o = o.parentNode); o; o = o.parentNode)
                        d.push(o),
                            a = o;
                    a === (i.ownerDocument || K) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0; (o = d[s++]) && !t.isPropagationStopped();)
                    t.type = s > 1 ? l : h.bindType || f, u = (me.get(o, "events") || {})[t.type] && me.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && ee.acceptData(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || h._default && h._default.apply(d.pop(), n) !== !1 || !ee.acceptData(i) || c && ee.isFunction(i[f]) && !ee.isWindow(i) && (a = i[c], a && (i[c] = null), ee.event.triggered = f, i[f](), ee.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = ee.event.fix(e);
            var t,
                n,
                i,
                r,
                s,
                o = [],
                a = B.call(arguments),
                l = (me.get(this, "events") || {})[e.type] || [],
                c = ee.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (o = ee.event.handlers.call(this, e, l), t = 0; (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
                        e.namespace_re && !e.namespace_re.test(s.namespace) || (e.handleObj = s, e.data = s.data, i = ((ee.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n,
                i,
                r,
                s,
                o = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; n < a; n++)
                            s = t[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? ee(r, this).index(l) >= 0 : ee.find(r, this, null, [l]).length), i[r] && i.push(s);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && o.push({
                elem: this,
                handlers: t.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n,
                    i,
                    r,
                    s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ee.expando])
                return e;
            var t,
                n,
                i,
                r = e.type,
                s = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = je.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new ee.Event(s), t = i.length; t--;)
                n = i[t], e[n] = s[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ee.nodeName(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return ee.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = ee.extend(new ee.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ee.event.trigger(r, null, t) : ee.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, ee.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, ee.Event = function(e, t) {
        return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? c : u) : this.type = e, t && ee.extend(this, t), this.timeStamp = e && e.timeStamp || ee.now(), void (this[ee.expando] = !0)) : new ee.Event(e, t)
    }, ee.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = c, this.stopPropagation()
        }
    }, ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    i = this,
                    r = e.relatedTarget,
                    s = e.handleObj;
                return r && (r === i || ee.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), J.focusinBubbles || ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0)
        };
        ee.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = me.access(i, t);
                r || i.addEventListener(e, n, !0), me.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = me.access(i, t) - 1;
                r ? me.access(i, t, r) : (i.removeEventListener(e, n, !0), me.remove(i, t))
            }
        }
    }), ee.fn.extend({
        on: function(e, t, n, i, r) {
            var s,
                o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e)
                    this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)
                i = u;
            else if (!i)
                return this;
            return 1 === r && (s = i, i = function(e) {
                return ee().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ee.guid++)), this.each(function() {
                ee.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i,
                r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                ee.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ee.event.trigger(e, t, n, !0)
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        De = /<([\w:]+)/,
        Ae = /<|&#?\w+;/,
        Oe = /<(?:script|style|link)/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^$|\/(?:java|ecma)script/i,
        Re = /^true\/(.*)/,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, ee.extend({
        clone: function(e, t, n) {
            var i,
                r,
                s,
                o,
                a = e.cloneNode(!0),
                l = ee.contains(e.ownerDocument, e);
            if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (o = m(a), s = m(e), i = 0, r = s.length; i < r; i++)
                    v(s[i], o[i]);
            if (t)
                if (n)
                    for (s = s || m(e), o = o || m(a), i = 0, r = s.length; i < r; i++)
                        g(s[i], o[i]);
                else
                    g(e, a);
            return o = m(a, "script"), o.length > 0 && _(o, !l && m(e, "script")), a
        },
        buildFragment: function(e, t, n, i) {
            for (var r, s, o, a, l, c, u = t.createDocumentFragment(), h = [], d = 0, f = e.length; d < f; d++)
                if (r = e[d], r || 0 === r)
                    if ("object" === ee.type(r))
                        ee.merge(h, r.nodeType ? [r] : r);
                    else if (Ae.test(r)) {
                        for (s = s || u.appendChild(t.createElement("div")), o = (De.exec(r) || ["", ""])[1].toLowerCase(), a = Pe[o] || Pe._default, s.innerHTML = a[1] + r.replace(qe, "<$1></$2>") + a[2], c = a[0]; c--;)
                            s = s.lastChild;
                        ee.merge(h, s.childNodes), s = u.firstChild, s.textContent = ""
                    } else
                        h.push(t.createTextNode(r));
            for (u.textContent = "", d = 0; r = h[d++];)
                if ((!i || ee.inArray(r, i) === -1) && (l = ee.contains(r.ownerDocument, r), s = m(u.appendChild(r), "script"), l && _(s), n))
                    for (c = 0; r = s[c++];)
                        Ie.test(r.type || "") && n.push(r);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, r, s, o, a = ee.event.special, l = 0; void 0 !== (n = e[l]); l++) {
                if (ee.acceptData(n) && (s = n[me.expando], s && (t = me.cache[s]))) {
                    if (i = Object.keys(t.events || {}), i.length)
                        for (o = 0; void 0 !== (r = i[o]); o++)
                            a[r] ? ee.event.remove(n, r) : ee.removeEvent(n, r, t.handle);
                    me.cache[s] && delete me.cache[s]
                }
                delete ve.cache[n[ve.expando]]
            }
        }
    }), ee.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? ee.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ee.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                t || 1 !== n.nodeType || ee.cleanData(m(n)), n.parentNode && (t && ee.contains(n.ownerDocument, n) && _(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ee.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ee.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !Pe[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(qe, "<$1></$2>");
                    try {
                        for (; n < i; n++)
                            t = this[n] || {}, 1 === t.nodeType && (ee.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ee.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n,
                i,
                r,
                s,
                o,
                a,
                l = 0,
                c = this.length,
                u = this,
                h = c - 1,
                d = e[0],
                _ = ee.isFunction(d);
            if (_ || c > 1 && "string" == typeof d && !J.checkClone && Le.test(d))
                return this.each(function(n) {
                    var i = u.eq(n);
                    _ && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
                });
            if (c && (n = ee.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = ee.map(m(n, "script"), f), s = r.length; l < c; l++)
                    o = n, l !== h && (o = ee.clone(o, !0, !0), s && ee.merge(r, m(o, "script"))), t.call(this[l], o, l);
                if (s)
                    for (a = r[r.length - 1].ownerDocument, ee.map(r, p), l = 0; l < s; l++)
                        o = r[l], Ie.test(o.type || "") && !me.access(o, "globalEval") && ee.contains(a, o) && (o.src ? ee._evalUrl && ee._evalUrl(o.src) : ee.globalEval(o.textContent.replace(He, "")))
            }
            return this
        }
    }), ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ee.fn[e] = function(e) {
            for (var n, i = [], r = ee(e), s = r.length - 1, o = 0; o <= s; o++)
                n = o === s ? this : this.clone(!0), ee(r[o])[t](n), U.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var $e,
        Me = {},
        Fe = /^margin/,
        We = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        Be = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", s.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, s.removeChild(o)
        }
        var n,
            i,
            r = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            s = K.documentElement,
            o = K.createElement("div"),
            a = K.createElement("div");
        a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(a), e.getComputedStyle && ee.extend(J, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t,
                    n = a.appendChild(K.createElement("div"));
                return n.style.cssText = a.style.cssText = r, n.style.marginRight = n.style.width = "0", a.style.width = "1px", s.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), s.removeChild(o), a.innerHTML = "", t
            }
        })
    }(), ee.swap = function(e, t, n, i) {
        var r,
            s,
            o = {};
        for (s in t)
            o[s] = e.style[s], e.style[s] = t[s];
        r = n.apply(e, i || []);
        for (s in t)
            e.style[s] = o[s];
        return r
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + xe + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + xe + ")", "i"),
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    ee.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    s,
                    o,
                    a = ee.camelCase(t),
                    l = e.style;
                return t = ee.cssProps[a] || (ee.cssProps[a] = T(l, a)), o = ee.cssHooks[t] || ee.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t] : (s = typeof n, "string" === s && (r = Xe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ee.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || ee.cssNumber[a] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = "", l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r,
                s,
                o,
                a = ee.camelCase(t);
            return t = ee.cssProps[a] || (ee.cssProps[a] = T(e.style, a)), o = ee.cssHooks[t] || ee.cssHooks[a], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (s = parseFloat(r), n === !0 || ee.isNumeric(s) ? s || 0 : r) : r
        }
    }), ee.each(["height", "width"], function(e, t) {
        ee.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return 0 === e.offsetWidth && ze.test(ee.css(e, "display")) ? ee.swap(e, Qe, function() {
                            return N(e, t, i)
                        }) : N(e, t, i)
            },
            set: function(e, n, i) {
                var r = i && Be(e);
                return k(e, n, i ? C(e, t, i, "border-box" === ee.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ee.cssHooks.marginRight = w(J.reliableMarginRight, function(e, t) {
        if (t)
            return ee.swap(e, {
                display: "inline-block"
            }, x, [e, "marginRight"])
    }), ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ee.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + we[i] + t] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, Fe.test(e) || (ee.cssHooks[e + t].set = k)
    }), ee.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var i,
                    r,
                    s = {},
                    o = 0;
                if (ee.isArray(t)) {
                    for (i = Be(e), r = t.length; o < r; o++)
                        s[t[o]] = ee.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Te(this) ? ee(this).show() : ee(this).hide()
                })
        }
    }), ee.Tween = S, S.prototype = {
        constructor: S,
        init: function(e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ee.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = S.propHooks[this.prop];
            return e && e.get ? e.get(this) : S.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = S.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
        }
    }, S.prototype.init.prototype = S.prototype, S.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ee.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ee.fx = S.prototype.init, ee.fx.step = {};
    var Ge,
        Je,
        Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [A],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Ze.exec(t),
                    s = r && r[3] || (ee.cssNumber[e] ? "" : "px"),
                    o = (ee.cssNumber[e] || "px" !== s && +i) && Ze.exec(ee.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +i || 1;
                    do a = a || ".5", o /= a, ee.style(n.elem, e, o + s);
                    while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    ee.Animation = ee.extend(L, {
        tweener: function(e, t) {
            ee.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), ee.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ee.extend({}, e) : {
                complete: n || !n && t || ee.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ee.isFunction(t) && t
            };
        return i.duration = ee.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ee.fx.speeds ? ee.fx.speeds[i.duration] : ee.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ee.isFunction(i.old) && i.old.call(this), i.queue && ee.dequeue(this, i.queue)
        }, i
    }, ee.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = ee.isEmptyObject(e),
                s = ee.speed(t, n, i),
                o = function() {
                    var t = L(this, ee.extend({}, e), s);
                    (r || me.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    s = ee.timers,
                    o = me.get(this);
                if (r)
                    o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && et.test(r) && i(o[r]);
                for (r = s.length; r--;)
                    s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                !t && n || ee.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t,
                    n = me.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    s = ee.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, ee.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;)
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), ee.each(["toggle", "show", "hide"], function(e, t) {
        var n = ee.fn[t];
        ee.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
        }
    }), ee.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ee.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), ee.timers = [], ee.fx.tick = function() {
        var e,
            t = 0,
            n = ee.timers;
        for (Ge = ee.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || ee.fx.stop(), Ge = void 0
    }, ee.fx.timer = function(e) {
        ee.timers.push(e), e() ? ee.fx.start() : ee.timers.pop()
    }, ee.fx.interval = 13, ee.fx.start = function() {
        Je || (Je = setInterval(ee.fx.tick, ee.fx.interval))
    }, ee.fx.stop = function() {
        clearInterval(Je), Je = null
    }, ee.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ee.fn.delay = function(e, t) {
        return e = ee.fx ? ee.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }, function() {
        var e = K.createElement("input"),
            t = K.createElement("select"),
            n = t.appendChild(K.createElement("option"));
        e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
    }();
    var it,
        rt,
        st = ee.expr.attrHandle;
    ee.fn.extend({
        attr: function(e, t) {
            return ge(this, ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ee.removeAttr(this, e)
            })
        }
    }), ee.extend({
        attr: function(e, t, n) {
            var i,
                r,
                s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === Ce ? ee.prop(e, t, n) : (1 === s && ee.isXMLDoc(e) || (t = t.toLowerCase(), i = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ee.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void ee.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n,
                i,
                r = 0,
                s = t && t.match(fe);
            if (s && 1 === e.nodeType)
                for (; n = s[r++];)
                    i = ee.propFix[n] || n, ee.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!J.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rt = {
        set: function(e, t, n) {
            return t === !1 ? ee.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = st[t] || ee.find.attr;
        st[t] = function(e, t, i) {
            var r,
                s;
            return i || (s = st[t], st[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, st[t] = s), r
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i;
    ee.fn.extend({
        prop: function(e, t) {
            return ge(this, ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ee.propFix[e] || e]
            })
        }
    }), ee.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i,
                r,
                s,
                o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !ee.isXMLDoc(e), s && (t = ee.propFix[t] || t, r = ee.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (ee.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ee.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    ee.fn.extend({
        addClass: function(e) {
            var t,
                n,
                i,
                r,
                s,
                o,
                a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (ee.isFunction(e))
                return this.each(function(t) {
                    ee(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(fe) || []; l < c; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (s = 0; r = t[s++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o = ee.trim(i), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                i,
                r,
                s,
                o,
                a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (ee.isFunction(e))
                return this.each(function(t) {
                    ee(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(fe) || []; l < c; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") >= 0;)
                                i = i.replace(" " + r + " ", " ");
                        o = e ? ee.trim(i) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ee.isFunction(e) ? this.each(function(n) {
                        ee(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n)
                            for (var t, i = 0, r = ee(this), s = e.match(fe) || []; t = s[i++];)
                                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else
                            n !== Ce && "boolean" !== n || (this.className && me.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : me.get(this, "__className__") || "")
                    })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var lt = /\r/g;
    ee.fn.extend({
        val: function(e) {
            var t,
                n,
                i,
                r = this[0];
            {
                if (arguments.length)
                    return i = ee.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ee(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ee.isArray(r) && (r = ee.map(r, function(e) {
                                    return null == e ? "" : e + ""
                                })), t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return t = ee.valHooks[r.type] || ee.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
            }
        }
    }), ee.extend({
        valHooks: {
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === r) && (J.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ee.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ee(n).val(), s)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = ee.makeArray(t), o = r.length; o--;)
                        i = r[o], (i.selected = ee.inArray(ee(i).val(), s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), ee.each(["radio", "checkbox"], function() {
        ee.valHooks[this] = {
            set: function(e, t) {
                if (ee.isArray(t))
                    return e.checked = ee.inArray(ee(e).val(), t) >= 0
            }
        }, J.checkOn || (ee.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ee.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ee.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = ee.now(),
        ut = /\?/;
    ee.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ee.parseXML = function(e) {
        var t,
            n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || ee.error("Invalid XML: " + e), t
    };
    var ht,
        dt,
        ft = /#.*$/,
        pt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        xt = {},
        wt = "*/".concat("*");
    try {
        dt = location.href
    } catch (e) {
        dt = K.createElement("a"), dt.href = "", dt = dt.href
    }
    ht = yt.exec(dt.toLowerCase()) || [], ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt,
            type: "GET",
            isLocal: gt.test(ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ee.parseJSON,
                "text xml": ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, ee.ajaxSettings), t) : H(ee.ajaxSettings, e)
        },
        ajaxPrefilter: I(bt),
        ajaxTransport: I(xt),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var l,
                    u,
                    m,
                    v,
                    b,
                    w = t;
                2 !== y && (y = 2, a && clearTimeout(a), i = void 0, s = o || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (v = P(h, x, n)), v = $(h, v, x, l), l ? (h.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (ee.lastModified[r] = b), b = x.getResponseHeader("etag"), b && (ee.etag[r] = b)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, u = v.data, m = v.error, l = !m)) : (m = w, !e && w || (w = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || w) + "", l ? p.resolveWith(d, [u, w, x]) : p.rejectWith(d, [x, w, m]), x.statusCode(g), g = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, h, l ? u : m]), _.fireWith(d, [x, w]), c && (f.trigger("ajaxComplete", [x, h]), --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u,
                h = ee.ajaxSetup({}, t),
                d = h.context || h,
                f = h.context && (d.nodeType || d.jquery) ? ee(d) : ee.event,
                p = ee.Deferred(),
                _ = ee.Callbacks("once memory"),
                g = h.statusCode || {},
                m = {},
                v = {},
                y = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!o)
                                for (o = {}; t = _t.exec(s);)
                                    o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = v[n] = v[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (y < 2)
                                for (t in e)
                                    g[t] = [g[t], e[t]];
                            else
                                x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (p.promise(x).complete = _.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || dt) + "").replace(ft, "").replace(vt, ht[1] + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = ee.trim(h.dataType || "*").toLowerCase().match(fe) || [""], null == h.crossDomain && (l = yt.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === ht[1] && l[2] === ht[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ht[3] || ("http:" === ht[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ee.param(h.data, h.traditional)), R(bt, h, t, x), 2 === y)
                return x;
            c = h.global, c && 0 === ee.active++ && ee.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !mt.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ut.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = pt.test(r) ? r.replace(pt, "$1_=" + ct++) : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)), h.ifModified && (ee.lastModified[r] && x.setRequestHeader("If-Modified-Since", ee.lastModified[r]), ee.etag[r] && x.setRequestHeader("If-None-Match", ee.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : h.accepts["*"]);
            for (u in h.headers)
                x.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === y))
                return x.abort();
            b = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[u](h[u]);
            if (i = R(xt, h, t, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    y = 1, i.send(m, n)
                } catch (e) {
                    if (!(y < 2))
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ee.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ee.get(e, void 0, t, "script")
        }
    }), ee.each(["get", "post"], function(e, t) {
        ee[t] = function(e, n, i, r) {
            return ee.isFunction(n) && (r = r || i, i = n, n = void 0), ee.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ee.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ee._evalUrl = function(e) {
        return ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ee.fn.extend({
        wrapAll: function(e) {
            var t;
            return ee.isFunction(e) ? this.each(function(t) {
                    ee(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;)
                        e = e.firstElementChild;
                    return e
                }).append(this)), this)
        },
        wrapInner: function(e) {
            return ee.isFunction(e) ? this.each(function(t) {
                    ee(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ee(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
        },
        wrap: function(e) {
            var t = ee.isFunction(e);
            return this.each(function(n) {
                ee(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ee.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, ee.expr.filters.visible = function(e) {
        return !ee.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
        kt = /\[\]$/,
        Ct = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    ee.param = function(e, t) {
        var n,
            i = [],
            r = function(e, t) {
                t = ee.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            };
        if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || e.jquery && !ee.isPlainObject(e))
            ee.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                M(n, e[n], t, r);
        return i.join("&").replace(Tt, "+")
    }, ee.fn.extend({
        serialize: function() {
            return ee.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ee.prop(this, "elements");
                return e ? ee.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ee(this).is(":disabled") && jt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ke.test(e))
            }).map(function(e, t) {
                var n = ee(this).val();
                return null == n ? null : ee.isArray(n) ? ee.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Ct, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Ct, "\r\n")
                        }
            }).get()
        }
    }), ee.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var St = 0,
        Et = {},
        qt = {
            0: 200,
            1223: 204
        },
        Dt = ee.ajaxSettings.xhr();
    e.ActiveXObject && ee(e).on("unload", function() {
        for (var e in Et)
            Et[e]()
    }), J.cors = !!Dt && "withCredentials" in Dt, J.ajax = Dt = !!Dt, ee.ajaxTransport(function(e) {
        var t;
        if (J.cors || Dt && !e.crossDomain)
            return {
                send: function(n, i) {
                    var r,
                        s = e.xhr(),
                        o = ++St;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields)
                            s[r] = e.xhrFields[r];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        s.setRequestHeader(r, n[r]);
                    t = function(e) {
                        return function() {
                            t && (delete Et[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? i(s.status, s.statusText) : i(qt[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                            text: s.responseText
                                        } : void 0, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), s.onerror = t("error"), t = Et[o] = t("abort"), s.send(e.hasContent && e.data || null)
                },
                abort: function() {
                    t && t()
                }
            }
    }), ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ee.globalEval(e), e
            }
        }
    }), ee.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ee.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n;
            return {
                send: function(i, r) {
                    t = ee("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var At = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || ee.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), ee.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r,
            s,
            o,
            a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + r) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return o || ee.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
                o = arguments
            }, i.always(function() {
                e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, At.push(r)), o && ee.isFunction(s) && s(o[0]), o = s = void 0
            }), "script"
    }), ee.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var i = oe.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = ee.buildFragment([e], t, r), r && r.length && ee(r).remove(), ee.merge([], i.childNodes))
    };
    var Lt = ee.fn.load;
    ee.fn.load = function(e, t, n) {
        if ("string" != typeof e && Lt)
            return Lt.apply(this, arguments);
        var i,
            r,
            s,
            o = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a), e = e.slice(0, a)), ee.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && ee.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
                o.each(n, s || [e.responseText, t, e])
            }), this
    }, ee.expr.filters.animated = function(e) {
        return ee.grep(ee.timers, function(t) {
            return e === t.elem
        }).length
    };
    var It = e.document.documentElement;
    ee.offset = {
        setOffset: function(e, t, n) {
            var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u = ee.css(e, "position"),
                h = ee(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = h.offset(), s = ee.css(e, "top"), l = ee.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, c ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), ee.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : h.css(d)
        }
    }, ee.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                        ee.offset.setOffset(this, e, t)
                    });
            var t,
                n,
                i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            if (s)
                return t = s.documentElement, ee.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = F(s), {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }) : r
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ee.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ee.nodeName(e[0], "html") || (i = e.offset()), i.top += ee.css(e[0], "borderTopWidth", !0), i.left += ee.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ee.css(n, "marginTop", !0),
                    left: t.left - i.left - ee.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || It; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");)
                    e = e.offsetParent;
                return e || It
            })
        }
    }), ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        ee.fn[t] = function(r) {
            return ge(this, function(t, r, s) {
                var o = F(t);
                return void 0 === s ? o ? o[n] : t[r] : void (o ? o.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : t[r] = s)
            }, t, r, arguments.length, null)
        }
    }), ee.each(["top", "left"], function(e, t) {
        ee.cssHooks[t] = w(J.pixelPosition, function(e, n) {
            if (n)
                return n = x(e, t), We.test(n) ? ee(e).position()[t] + "px" : n
        })
    }), ee.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ee.fn[i] = function(i, r) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (i === !0 || r === !0 ? "margin" : "border");
                return ge(this, function(t, n, i) {
                    var r;
                    return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ee.css(t, n, o) : ee.style(t, n, i, o)
                }, t, s ? i : void 0, s, null)
            }
        })
    }), ee.fn.size = function() {
        return this.length
    }, ee.fn.andSelf = ee.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ee
    });
    var Rt = e.jQuery,
        Ht = e.$;
    return ee.noConflict = function(t) {
        return e.$ === ee && (e.$ = Ht), t && e.jQuery === ee && (e.jQuery = Rt), ee
    }, typeof t === Ce && (e.jQuery = e.$ = ee), ee
}), /*!
 Chosen, a Select Box Enhancer for jQuery and Prototype
 by Patrick Filler for Harvest, http://getharvest.com

 Version 1.1.0
 based on the fork https://github.com/koenpunt/chosen/releases/tag/v1.1.0
 with custom enhancements by Ruben Verborgh:
 - auto-select new element if no other options available
 - accept suggestions after tab or space
 - replaced 'chosen-container' by 'chosen'

 MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 This file is generated by `grunt build`, do not edit it by hand.
 */
    function() {
        var e,
            t,
            n,
            i,
            r,
            s = {}.hasOwnProperty,
            o = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t)
                    s.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            };
        i = function() {
            function e() {
                this.options_index = 0, this.parsed = []
            }
            return e.prototype.add_node = function(e) {
                return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
            }, e.prototype.add_group = function(e) {
                var t,
                    n,
                    i,
                    r,
                    s,
                    o;
                for (t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: this.escapeExpression(e.label),
                    children: 0,
                    disabled: e.disabled
                }), s = e.childNodes, o = [], i = 0, r = s.length; i < r; i++)
                    n = s[i], o.push(this.add_option(n, t, e.disabled));
                return o
            }, e.prototype.add_option = function(e, t, n) {
                if ("OPTION" === e.nodeName.toUpperCase())
                    return "" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                            array_index: this.parsed.length,
                            options_index: this.options_index,
                            value: e.value,
                            text: e.text,
                            html: e.innerHTML,
                            selected: e.selected,
                            disabled: n === !0 ? n : e.disabled,
                            group_array_index: t,
                            classes: e.className,
                            style: e.style.cssText
                        })) : this.parsed.push({
                            array_index: this.parsed.length,
                            options_index: this.options_index,
                            empty: !0
                        }), this.options_index += 1
            }, e.prototype.escapeExpression = function(e) {
                var t,
                    n;
                return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function(e) {
                            return t[e] || "&amp;"
                        })) : e
            }, e
        }(), i.select_to_array = function(e) {
            var t,
                n,
                r,
                s,
                o;
            for (n = new i, o = e.childNodes, r = 0, s = o.length; r < s; r++)
                t = o[r], n.add_node(t);
            return n.parsed
        }, t = function() {
            function e(t, n) {
                this.form_field = t, this.options = null != n ? n : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
            }
            return e.prototype.set_default_values = function() {
                var e = this;
                return this.click_test_action = function(t) {
                    return e.test_active_click(t)
                }, this.activate_action = function(t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.create_option = this.options.create_option || !1, this.persistent_create_option = this.options.persistent_create_option || !1, this.skip_no_results = this.options.skip_no_results || !1
            }, e.prototype.set_default_text = function() {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text, this.create_option_text = this.form_field.getAttribute("data-create_option_text") || this.options.create_option_text || e.default_create_option_text
            }, e.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, e.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, e.prototype.input_focus = function(e) {
                var t = this;
                if (this.is_multiple) {
                    if (!this.active_field)
                        return setTimeout(function() {
                            return t.container_mousedown()
                        }, 50)
                } else if (!this.active_field)
                    return this.activate_field()
            }, e.prototype.input_blur = function(e) {
                var t = this;
                if (!this.mouse_on_container)
                    return this.active_field = !1, setTimeout(function() {
                        return t.blur_test()
                    }, 100)
            }, e.prototype.results_option_build = function(e) {
                var t,
                    n,
                    i,
                    r,
                    s;
                for (t = "", s = this.results_data, i = 0, r = s.length; i < r; i++)
                    n = s[i], t += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
                return t
            }, e.prototype.result_add_option = function(e) {
                var t,
                    n;
                return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), n = document.createElement("li"), n.className = t.join(" "), n.style.cssText = e.style, n.setAttribute("data-option-array-index", e.array_index), n.innerHTML = e.search_text, this.outerHTML(n)) : ""
            }, e.prototype.result_add_group = function(e) {
                var t;
                return (e.search_match || e.group_match) && e.active_options > 0 ? (t = document.createElement("li"), t.className = "group-result", t.innerHTML = e.search_text, this.outerHTML(t)) : ""
            }, e.prototype.append_option = function(e) {
                return this.select_append_option(e)
            }, e.prototype.results_update_field = function() {
                if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing)
                    return this.winnow_results()
            }, e.prototype.reset_single_select_options = function() {
                var e,
                    t,
                    n,
                    i,
                    r;
                for (i = this.results_data, r = [], t = 0, n = i.length; t < n; t++)
                    e = i[t], e.selected ? r.push(e.selected = !1) : r.push(void 0);
                return r
            }, e.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, e.prototype.results_search = function(e) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, e.prototype.winnow_results = function() {
                var e,
                    t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    f,
                    p;
                for (this.no_results_clear(), o = 0, n = !1, l = this.get_search_text(), t = l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), s = this.search_contains ? "" : "^", r = new RegExp(s + t, "i"), h = new RegExp(t, "i"), e = new RegExp("^" + t + "$", "i"), p = this.results_data, d = 0, f = p.length; d < f; d++)
                    i = p[d], i.search_match = !1, a = null, this.include_option_in_results(i) && (i.group && (i.group_match = !1, i.active_options = 0), null != i.group_array_index && this.results_data[i.group_array_index] && (a = this.results_data[i.group_array_index], 0 === a.active_options && a.search_match && (o += 1), a.active_options += 1), i.group && !this.group_search || (i.search_text = i.group ? i.label : i.html, i.search_match = this.search_string_match(i.search_text, r), i.search_match && !i.group && (o += 1), n = e.test(i.html), i.search_match ? (l.length && (c = i.search_text.search(h), u = i.search_text.substr(0, c + l.length) + "</em>" + i.search_text.substr(c + l.length), i.search_text = u.substr(0, c) + "<em>" + u.substr(c)), null != a && (a.group_match = !0)) : null != i.group_array_index && this.results_data[i.group_array_index].search_match && (i.search_match = !0)));
                this.result_clear_highlight(), o < 1 && l.length ? (this.update_results_content(""), this.create_option && this.skip_no_results || this.no_results(l)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight()), this.create_option && (o < 1 || !n && this.persistent_create_option) && l.length && (this.show_create_option(l), o < 1 && this.result_do_highlight(this.search_results.find(".create-option")))
            }, e.prototype.search_string_match = function(e, t) {
                var n,
                    i,
                    r,
                    s;
                if (t.test(e))
                    return !0;
                if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
                    for (r = 0, s = i.length; r < s; r++)
                        if (n = i[r], t.test(n))
                            return !0
            }, e.prototype.choices_count = function() {
                var e,
                    t,
                    n,
                    i;
                if (null != this.selected_option_count)
                    return this.selected_option_count;
                for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; t < n; t++)
                    e = i[t], e.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, e.prototype.choices_click = function(e) {
                if (e.preventDefault(), !this.results_showing && !this.is_disabled)
                    return this.results_show()
            }, e.prototype.keyup_checker = function(e) {
                var t,
                    n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0)
                            return this.keydown_backstroke();
                        if (!this.pending_backstroke)
                            return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (e.preventDefault(), this.results_showing)
                            return this.result_select(e);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, e.prototype.clipboard_event_checker = function(e) {
                var t = this;
                return setTimeout(function() {
                    return t.results_search()
                }, 50)
            }, e.prototype.container_width = function() {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, e.prototype.include_option_in_results = function(e) {
                return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty)
            }, e.prototype.search_results_touchstart = function(e) {
                return this.touch_started = !0, this.search_results_mouseover(e)
            }, e.prototype.search_results_touchmove = function(e) {
                return this.touch_started = !1, this.search_results_mouseout(e)
            }, e.prototype.search_results_touchend = function(e) {
                if (this.touch_started)
                    return this.search_results_mouseup(e)
            }, e.prototype.outerHTML = function(e) {
                var t;
                return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
            }, e.browser_is_supported = function() {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !/iP(od|hone)/i.test(window.navigator.userAgent) && (!/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent))
            }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e.default_create_option_text = "Add Option", e
        }(), e = jQuery, e.fn.extend({
            chosen: function(i) {
                return t.browser_is_supported() ? this.each(function(t) {
                        var r,
                            s;
                        r = e(this), s = r.data("chosen"), "destroy" === i && s ? s.destroy() : s || r.data("chosen", new n(this, i))
                    }) : this
            }
        }), n = function(t) {
            function n() {
                return r = n.__super__.constructor.apply(this, arguments)
            }
            return o(n, t), n.prototype.setup = function() {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, n.prototype.set_up_html = function() {
                var t,
                    n;
                return t = ["chosen"], t.push("chosen-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), n = {
                    class: t.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, n.prototype.register_observers = function() {
                var e = this;
                return this.container.bind("mousedown.chosen", function(t) {
                    e.container_mousedown(t)
                }), this.container.bind("mouseup.chosen", function(t) {
                    e.container_mouseup(t)
                }), this.container.bind("mouseenter.chosen", function(t) {
                    e.mouse_enter(t)
                }), this.container.bind("mouseleave.chosen", function(t) {
                    e.mouse_leave(t)
                }), this.search_results.bind("mouseup.chosen", function(t) {
                    e.search_results_mouseup(t)
                }), this.search_results.bind("mouseover.chosen", function(t) {
                    e.search_results_mouseover(t)
                }), this.search_results.bind("mouseout.chosen", function(t) {
                    e.search_results_mouseout(t)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                    e.search_results_mousewheel(t)
                }), this.search_results.bind("touchstart.chosen", function(t) {
                    e.search_results_touchstart(t)
                }), this.search_results.bind("touchmove.chosen", function(t) {
                    e.search_results_touchmove(t)
                }), this.search_results.bind("touchend.chosen", function(t) {
                    e.search_results_touchend(t)
                }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                    e.results_update_field(t)
                }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                    e.activate_field(t)
                }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
                    e.container_mousedown(t)
                }), this.form_field_jq.bind("chosen:close.chosen", function(t) {
                    e.input_blur(t)
                }), this.search_field.bind("blur.chosen", function(t) {
                    e.input_blur(t)
                }), this.search_field.bind("keyup.chosen", function(t) {
                    e.keyup_checker(t)
                }), this.search_field.bind("keydown.chosen", function(t) {
                    e.keydown_checker(t)
                }), this.search_field.bind("focus.chosen", function(t) {
                    e.input_focus(t)
                }), this.search_field.bind("cut.chosen", function(t) {
                    e.clipboard_event_checker(t)
                }), this.search_field.bind("paste.chosen", function(t) {
                    e.clipboard_event_checker(t)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                        e.choices_click(t)
                    }) : this.container.bind("click.chosen", function(e) {
                        e.preventDefault()
                    })
            }, n.prototype.destroy = function() {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, n.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, n.prototype.container_mousedown = function(t) {
                if (!this.is_disabled && (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null == t || !e(t.target).hasClass("search-choice-close")))
                    return this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
            }, n.prototype.container_mouseup = function(e) {
                if ("ABBR" === e.target.nodeName && !this.is_disabled)
                    return this.results_reset(e)
            }, n.prototype.search_results_mousewheel = function(e) {
                var t;
                if (e.originalEvent && (t = -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t)
                    return e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())
            }, n.prototype.blur_test = function(e) {
                if (!this.active_field && this.container.hasClass("chosen-active"))
                    return this.close_field()
            }, n.prototype.close_field = function() {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, n.prototype.activate_field = function() {
                return this.container.addClass("chosen-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, n.prototype.test_active_click = function(t) {
                var n;
                return n = e(t.target).closest(".chosen"), n.length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
            }, n.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold && !this.create_option ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, n.prototype.result_do_highlight = function(e) {
                var t,
                    n,
                    i,
                    r,
                    s;
                if (e.length) {
                    if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), r = i + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight(), t >= r)
                        return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
                    if (n < s)
                        return this.search_results.scrollTop(n)
                }
            }, n.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, n.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                        chosen: this
                    }))
            }, n.prototype.update_results_content = function(e) {
                return this.search_results.html(e)
            }, n.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, n.prototype.set_tab_index = function(e) {
                var t;
                if (this.form_field.tabIndex)
                    return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
            }, n.prototype.set_label_behavior = function() {
                var t = this;
                if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0)
                    return this.form_field_label.bind("click.chosen", function(e) {
                        return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                    })
            }, n.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, n.prototype.search_results_mouseup = function(t) {
                var n;
                if (n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n.length)
                    return this.result_highlight = n, this.result_select(t), this.search_field.focus()
            }, n.prototype.search_results_mouseover = function(t) {
                var n;
                if (n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first())
                    return this.result_do_highlight(n)
            }, n.prototype.search_results_mouseout = function(t) {
                if (e(t.target).hasClass("active-result"))
                    return this.result_clear_highlight()
            }, n.prototype.choice_build = function(t) {
                var n,
                    i,
                    r = this;
                return n = e("<li />", {
                    class: "search-choice"
                }).html("<span>" + t.html + "</span>"), t.disabled ? n.addClass("search-choice-disabled") : (i = e("<a />", {
                        class: "search-choice-close",
                        "data-option-array-index": t.array_index
                    }), i.bind("click.chosen", function(e) {
                        return r.choice_destroy_link_click(e)
                    }), n.append(i)), this.search_container.before(n)
            }, n.prototype.choice_destroy_link_click = function(t) {
                if (t.preventDefault(), t.stopPropagation(), !this.is_disabled)
                    return this.choice_destroy(e(t.target))
            }, n.prototype.choice_destroy = function(e) {
                if (this.result_deselect(e[0].getAttribute("data-option-array-index")))
                    return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
            }, n.prototype.results_reset = function() {
                if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field)
                    return this.results_hide()
            }, n.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, n.prototype.result_select = function(e) {
                var t,
                    n;
                if (this.result_highlight)
                    return t = this.result_highlight, t.hasClass("create-option") ? (this.select_create_option(this.search_field.val()), this.results_hide()) : (this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                                chosen: this
                            }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                                selected: this.form_field.options[n.options_index].value
                            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale()))
            }, n.prototype.single_set_selected_text = function(e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(e)
            }, n.prototype.result_deselect = function(e) {
                var t;
                return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[t.options_index].value
                }), this.search_field_scale(), !0)
            }, n.prototype.single_deselect_control_build = function() {
                if (this.allow_single_deselect)
                    return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
            }, n.prototype.get_search_text = function() {
                return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html()
            }, n.prototype.winnow_results_set_highlight = function() {
                var e,
                    t;
                if (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e)
                    return this.result_do_highlight(e)
            }, n.prototype.no_results = function(t) {
                var n;
                return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, n.prototype.show_create_option = function(t) {
                var n;
                n = e('<li class="create-option active-result">' + this.create_option_text + ": " + t + "</li>"), this.search_results.append(n)
            }, n.prototype.create_option_clear = function() {
                return this.search_results.find(".create-option").remove()
            }, n.prototype.select_create_option = function(t) {
                return e.isFunction(this.create_option) ? this.create_option.call(this, t) : this.select_append_option({
                        value: t,
                        text: t
                    })
            }, n.prototype.select_append_option = function(t) {
                var n;
                return n = e("<option />", t).attr("selected", "selected"), this.form_field_jq.append(n), this.form_field_jq.trigger("chosen:updated"), this.form_field_jq.trigger("change"), this.search_field.trigger("focus")
            }, n.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, n.prototype.keydown_arrow = function() {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_showing && this.create_option ? this.result_do_highlight(this.search_results.find(".create-option")) : this.results_show()
            }, n.prototype.keyup_arrow = function() {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, n.prototype.keydown_backstroke = function() {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, n.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, n.prototype.keydown_checker = function(e) {
                var t,
                    n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple ? this.result_select(e) : this.result_highlight && this.result_highlight.hasClass("create-option") && this.result_select(e), this.mouse_on_container = !1;
                        break;
                    case 13:
                        e.preventDefault();
                        break;
                    case 32:
                        this.result_highlight && this.result_highlight.hasClass("create-option") && this.result_select(e);
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        e.preventDefault(), this.keydown_arrow()
                }
            }, n.prototype.search_field_scale = function() {
                var t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c;
                if (this.is_multiple) {
                    for (i = 0, a = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = o.length; l < c; l++)
                        r = o[l], s += r + ":" + this.search_field.css(r) + ";";
                    return t = e("<div />", {
                        style: s
                    }), t.text(this.search_field.val()), e("body").append(t), a = t.width() + 25, t.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, n
        }(t)
    }.call(this), /**
 * FastScroller – Copyright 2016 Ruben Verborgh
 *
 * Strongly based on infinite-scroller
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
    function(e) {
        var t = 50,
            n = 10;
        e.FastScrollerSource = function() {}, e.FastScrollerSource.prototype = {
            fetch: function(e) {},
            render: function(e, t) {}
        }, e.FastScroller = function(e, t) {
            e.length && e[0] && (e = e[0]), t.render || "function" != typeof t || (t = {
                render: t
            }), this.reset_(), this.scroller_ = e, this.source_ = t, this.requestInProgress_ = !1, this.scroller_.addEventListener("scroll", this.onScroll_.bind(this)), window.addEventListener("resize", this.onResize_.bind(this)), this.scrollRunway_ = document.createElement("div"), this.scrollRunway_.className = "scrollRunway", this.scrollRunway_.textContent = " ", this.scrollRunwayEnd_ = 0, this.scrollRunway_.style.position = "absolute", this.scrollRunway_.style.height = "1px", this.scrollRunway_.style.width = "1px", this.scrollRunway_.style.transition = "transform 0.2s", this.scroller_.appendChild(this.scrollRunway_), this.onResize_()
        }, e.FastScroller.prototype = {
            reset_: function() {
                this.anchorItem = {
                    index: 0,
                    offset: 0
                }, this.firstAttachedItem_ = 0, this.lastAttachedItem_ = 0, this.anchorScrollTop = 0, this.items_ = [], this.loadedItems_ = 0, this.scrollRunwayEnd_ = 0
            },
            onResize_: function() {
                for (var e = 0; e < this.items_.length; e++)
                    this.items_[e].height = 0;
                this.onScroll_()
            },
            onScroll_: function() {
                var e = this.scroller_.scrollTop - this.anchorScrollTop;
                0 == this.scroller_.scrollTop ? this.anchorItem = {
                        index: 0,
                        offset: 0
                    } : this.anchorItem = this.calculateAnchoredItem(this.anchorItem, e), this.anchorScrollTop = this.scroller_.scrollTop;
                var i = this.calculateAnchoredItem(this.anchorItem, this.scroller_.offsetHeight);
                e < 0 ? this.fill(this.anchorItem.index - t, i.index + n) : this.fill(this.anchorItem.index - n, i.index + t)
            },
            calculateAnchoredItem: function(e, t) {
                if (0 == t)
                    return e;
                t += e.offset;
                var n = e.index;
                if (t < 0)
                    for (; t < 0 && n > 0 && this.items_[n - 1].height;)
                        t += this.items_[n - 1].height, n--;
                else
                    for (; t > 0 && n < this.items_.length && this.items_[n].height && this.items_[n].height < t;)
                        t -= this.items_[n].height, n++;
                return {
                    index: n,
                    offset: t
                }
            },
            fill: function(e, t) {
                this.firstAttachedItem_ = Math.max(0, e), this.lastAttachedItem_ = t, this.attachContent()
            },
            attachContent: function() {
                var e,
                    t = [],
                    n = this.firstAttachedItem_,
                    i = Math.min(this.lastAttachedItem_, this.items_.length);
                for (e = 0; e < this.items_.length; e++)
                    e != n ? this.items_[e].node && (t.push(this.items_[e].node), this.items_[e].node = null) : e = i - 1;
                for (e = n; e < i; e++)
                    if (!this.items_[e].node) {
                        var r = this.source_.render(this.items_[e].data, t.pop());
                        r.length && r[0] && (r = r[0]), r.style.position = "absolute", this.items_[e].top = -1, this.scroller_.appendChild(r), this.items_[e].node = r
                    }
                for (; t.length;)
                    this.scroller_.removeChild(t.pop());
                for (e = n; e < i; e++)
                    this.items_[e].height || (this.items_[e].height = this.items_[e].node.offsetHeight);
                for (this.anchorScrollTop = 0, e = 0; e < this.anchorItem.index; e++)
                    this.anchorScrollTop += this.items_[e].height;
                this.anchorScrollTop += this.anchorItem.offset;
                var s = this.anchorScrollTop - this.anchorItem.offset;
                for (e = this.anchorItem.index; e > n;)
                    s -= this.items_[e - 1].height, e--;
                for (; e < n;)
                    s += this.items_[e].height, e++;
                for (e = n; e < i; e++)
                    s !== this.items_[e].top && (this.items_[e].node.style.transform = "translateY(" + s + "px)", this.items_[e].top = s), s += this.items_[e].height || this.tombstoneSize_;
                this.scrollRunwayEnd_ = Math.max(this.scrollRunwayEnd_, s), this.scrollRunway_.style.transform = "translate(0, " + this.scrollRunwayEnd_ + "px)", this.scroller_.scrollTop = this.anchorScrollTop, this.maybeRequestContent()
            },
            maybeRequestContent: function() {
                if (!this.requestInProgress_) {
                    var e = this.lastAttachedItem_ - this.loadedItems_;
                    if (!(e <= 0)) {
                        this.requestInProgress_ = !0;
                        this.items_[this.loadedItems_ - 1];
                        this.source_.fetch && this.source_.fetch(e).then(this.addContent.bind(this))
                    }
                }
            },
            addContent: function(e) {
                this.requestInProgress_ = !1;
                for (var t = this.items_.length, n = 0; n < e.length; n++)
                    this.items_[this.loadedItems_++] = {
                        data: e[n],
                        node: null,
                        height: 0,
                        top: 0
                    };
                t < this.lastAttachedItem_ && this.attachContent()
            },
            removeAll: function() {
                for (var e = 0; e < this.items_.length; e++)
                    this.items_[e].node && this.scroller_.removeChild(this.items_[e].node);
                this.reset_(), this.scroller_.scrollTop = 0, this.onScroll_()
            }
        }
    }(self), function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.N3 = e()
    }
}(function() {
    return function e(t, n, i) {
        function r(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(o, !0);
                    if (s)
                        return s(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[o] = {
                    exports: {}
                };
                t[o][0].call(u.exports, function(e) {
                    var n = t[o][1][e];
                    return r(n ? n : e)
                }, u, u.exports, e, t, n, i)
            }
            return n[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < i.length; o++)
            r(i[o]);
        return r
    }({
        1: [function(e, t, n) {
            function i(e) {
                if (!(this instanceof i))
                    return new i(e);
                r.call(this, {
                    decodeStrings: !0
                }), this._readableState.objectMode = !0;
                var t,
                    n,
                    s = this,
                    a = new o(e);
                a.parse({
                    on: function(e, i) {
                        "data" === e ? t = i : n = i
                    }
                }, function(e, t) {
                    e && s.emit("error", e) || t && s.push(t)
                }, function(e, t) {
                    s.emit("prefix", e, t)
                }), this._transform = function(e, n, i) {
                    t(e), i()
                }, this._flush = function(e) {
                    n(), e()
                }
            }
            var r = e("stream").Transform,
                s = e("util"),
                o = e("./N3Parser.js");
            s.inherits(i, r), t.exports = i
        }, {
            "./N3Parser.js": void 0,
            stream: void 0,
            util: void 0
        }],
        2: [function(e, t, n) {
            function i(e) {
                if (!(this instanceof i))
                    return new i(e);
                r.call(this, {
                    encoding: "utf8"
                }), this._writableState.objectMode = !0;
                var t = this,
                    n = new o({
                        write: function(e, n, i) {
                            t.push(e), i && i()
                        },
                        end: function(e) {
                            t.push(null), e && e()
                        }
                    }, e);
                this._transform = function(e, t, i) {
                    n.addTriple(e, i)
                }, this._flush = function(e) {
                    n.end(e)
                }
            }
            var r = e("stream").Transform,
                s = e("util"),
                o = e("./N3Writer.js");
            s.inherits(i, r), t.exports = i
        }, {
            "./N3Writer.js": 3,
            stream: void 0,
            util: void 0
        }],
        3: [function(e, t, n) {
            function i(e, t) {
                if (!(this instanceof i))
                    return new i(e, t);
                if (e && "function" != typeof e.write && (t = e, e = null), t = t || {}, e)
                    this._outputStream = e, this._endStream = void 0 === t.end || !!t.end;
                else {
                    var n = "";
                    this._outputStream = {
                        write: function(e, t, i) {
                            n += e, i && i()
                        },
                        end: function(e) {
                            e && e(null, n)
                        }
                    }, this._endStream = !0
                }
                this._subject = null, /triple|quad/i.test(t.format) ? this._writeTriple = this._writeTripleLine : (this._graph = "", this._prefixIRIs = Object.create(null), t.prefixes && this.addPrefixes(t.prefixes))
            }
            function r(e) {
                var t = u[e];
                return void 0 === t && (1 === e.length ? (t = e.charCodeAt(0).toString(16), t = "\\u0000".substr(0, 6 - t.length) + t) : (t = (1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) + 9216).toString(16), t = "\\U00000000".substr(0, 10 - t.length) + t)), t
            }
            var s = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i,
                o = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                a = o + "type",
                l = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
                c = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
                u = {
                    "\\": "\\\\",
                    '"': '\\"',
                    "\t": "\\t",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\b": "\\b",
                    "\f": "\\f"
                };
            i.prototype = {
                _write: function(e, t) {
                    this._outputStream.write(e, "utf8", t)
                },
                _writeTriple: function(e, t, n, i, r) {
                    try {
                        this._graph !== i && (this._write((null === this._subject ? "" : this._graph ? "\n}\n" : ".\n") + (i ? this._encodeIriOrBlankNode(i) + " {\n" : "")), this._subject = null, this._graph = "[" !== i[0] ? i : "]"), this._subject === e ? this._predicate === t ? this._write(", " + this._encodeObject(n), r) : this._write(";\n    " + this._encodePredicate(this._predicate = t) + " " + this._encodeObject(n), r) : this._write((null === this._subject ? "" : ".\n") + this._encodeSubject(this._subject = e) + " " + this._encodePredicate(this._predicate = t) + " " + this._encodeObject(n), r)
                    } catch (e) {
                        r && r(e)
                    }
                },
                _writeTripleLine: function(e, t, n, i, r) {
                    delete this._prefixMatch;
                    try {
                        this._write(this._encodeIriOrBlankNode(e) + " " + this._encodeIriOrBlankNode(t) + " " + this._encodeObject(n) + (i ? " " + this._encodeIriOrBlankNode(i) + ".\n" : ".\n"), r)
                    } catch (e) {
                        r && r(e)
                    }
                },
                _encodeIriOrBlankNode: function(e) {
                    var t = e[0];
                    if ("[" === t || "(" === t || "_" === t && ":" === e[1])
                        return e;
                    l.test(e) && (e = e.replace(c, r));
                    var n = this._prefixRegex.exec(e);
                    return n ? n[1] ? this._prefixIRIs[n[1]] + n[2] : e : "<" + e + ">"
                },
                _encodeLiteral: function(e, t, n) {
                    return l.test(e) && (e = e.replace(c, r)), n ? '"' + e + '"@' + n : t ? '"' + e + '"^^' + this._encodeIriOrBlankNode(t) : '"' + e + '"'
                },
                _encodeSubject: function(e) {
                    if ('"' === e[0])
                        throw new Error("A literal as subject is not allowed: " + e);
                    return "[" === e[0] && (this._subject = "]"), this._encodeIriOrBlankNode(e)
                },
                _encodePredicate: function(e) {
                    if ('"' === e[0])
                        throw new Error("A literal as predicate is not allowed: " + e);
                    return e === a ? "a" : this._encodeIriOrBlankNode(e)
                },
                _encodeObject: function(e) {
                    if ('"' !== e[0])
                        return this._encodeIriOrBlankNode(e);
                    var t = s.exec(e);
                    if (!t)
                        throw new Error("Invalid literal: " + e);
                    return this._encodeLiteral(t[1], t[2], t[3])
                },
                _blockedWrite: function() {
                    throw new Error("Cannot write because the writer has been closed.")
                },
                addTriple: function(e, t, n, i, r) {
                    void 0 === n ? this._writeTriple(e.subject, e.predicate, e.object, e.graph || "", t) : "string" != typeof i ? this._writeTriple(e, t, n, "", i) : this._writeTriple(e, t, n, i, r)
                },
                addTriples: function(e) {
                    for (var t = 0; t < e.length; t++)
                        this.addTriple(e[t])
                },
                addPrefix: function(e, t, n) {
                    var i = {};
                    i[e] = t, this.addPrefixes(i, n)
                },
                addPrefixes: function(e, t) {
                    var n = this._prefixIRIs,
                        i = !1;
                    for (var r in e) {
                        var s = e[r];
                        /[#\/]$/.test(s) && n[s] !== (r += ":") && (i = !0, n[s] = r, null !== this._subject && (this._write(this._graph ? "\n}\n" : ".\n"), this._subject = null, this._graph = ""), this._write("@prefix " + r + " <" + s + ">.\n"))
                    }
                    if (i) {
                        var o = "",
                            a = "";
                        for (var l in n)
                            o += o ? "|" + l : l, a += (a ? "|" : "") + n[l];
                        o = o.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, "\\$&"), this._prefixRegex = new RegExp("^(?:" + a + ")[^/]*$|^(" + o + ")([a-zA-Z][\\-_a-zA-Z0-9]*)$")
                    }
                    this._write(i ? "\n" : "", t)
                },
                blank: function(e, t) {
                    var n,
                        i,
                        r = e;
                    switch (void 0 === e ? r = [] : "string" == typeof e ? r = [{
                                predicate: e,
                                object: t
                            }] : "length" in e || (r = [e]), i = r.length) {
                        case 0:
                            return "[]";
                        case 1:
                            if (n = r[0], "[" !== n.object[0])
                                return "[ " + this._encodePredicate(n.predicate) + " " + this._encodeObject(n.object) + " ]";
                        default:
                            for (var s = "[", o = 0; o < i; o++)
                                n = r[o], n.predicate === e ? s += ", " + this._encodeObject(n.object) : (s += (o ? ";\n  " : "\n  ") + this._encodePredicate(n.predicate) + " " + this._encodeObject(n.object), e = n.predicate);
                            return s + "\n]"
                    }
                },
                list: function(e) {
                    for (var t = e && e.length || 0, n = new Array(t), i = 0; i < t; i++)
                        n[i] = this._encodeObject(e[i]);
                    return "(" + n.join(" ") + ")"
                },
                _prefixRegex: /$0^/,
                end: function(e) {
                    null !== this._subject && (this._write(this._graph ? "\n}\n" : ".\n"), this._subject = null), this._write = this._blockedWrite;
                    var t = e && function(n, i) {
                            t = null, e(n, i)
                        };
                    if (this._endStream)
                        try {
                            return this._outputStream.end(t)
                        } catch (e) {}
                    t && t()
                }
            }, t.exports = i
        }, {}],
        4: [function(e, t, n) {
            var i = e;
            e = function() {};
            var n = t.exports = {
                Lexer: e("./lib/N3Lexer"),
                Parser: e("./lib/N3Parser"),
                Writer: e("./lib/N3Writer"),
                Store: e("./lib/N3Store"),
                StreamParser: e("./lib/N3StreamParser"),
                StreamWriter: e("./lib/N3StreamWriter"),
                Util: e("./lib/N3Util")
            };
            Object.keys(n).forEach(function(e) {
                Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return delete n[e], n[e] = i("./lib/N3" + e)
                    }
                })
            })
        }, {
            "./lib/N3Lexer": void 0,
            "./lib/N3Parser": void 0,
            "./lib/N3Store": void 0,
            "./lib/N3StreamParser": 1,
            "./lib/N3StreamWriter": 2,
            "./lib/N3Util": void 0,
            "./lib/N3Writer": 3
        }]
    }, {}, [4])(4)
}), /*! @license MIT ©2014–2016 Ruben Verborgh, Ghent University – imec */
// jQuery widget for Triple Pattern Fragments query execution
    function(e) {
        function t(t, n) {
            this.element = t, this.options = e.extend({}, this.options, n);
            var i = this;
            this._queryWorker = new Worker(ldfAssetsPath + "ldf-client-worker.js"), this._queryWorker.onmessage = function(e) {
                var t = e.data;
                switch (t.type) {
                    case "queryInfo":
                        return i._initResults(t.queryType);
                    case "result":
                        return i._addResult(t.result);
                    case "end":
                        return i._endResults();
                    case "log":
                        return i._logAppender(t.log);
                    case "error":
                        return this.onerror(t.error)
                }
            }, this._queryWorker.onerror = function(t) {
                i._queryWorker.onerror = e.noop, i._stopExecution(t)
            }
        }
        function n(e) {
            function t() {
                s = "", e.empty(), o = 50, clearTimeout(a)
            }
            function n(t) {
                o > 0 ? (e.append(i(t)), 0 === --o && (a = setTimeout(r, l))) : s += t
            }
            function r() {
                clearTimeout(a), a = null, s ? (e.append(i(s)), s = "", a = setTimeout(r, l)) : o = 1
            }
            var s,
                o,
                a,
                l = 1e3;
            return t(), n.clear = t, n.flush = r, n
        }
        function i(e) {
            return (e + "").replace(/(<)|(>)|(&)|http(s?:\/\/[^\s<>]+)/g, r)
        }
        function r(e, t, n, r, s) {
            return t && "&lt;" || n && "&gt;" || r && "&amp;" || (s = "http" + i(s)) && '<a href="' + s + '" target=_blank>' + s + "</a>"
        }
        function s(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        function o(e) {
            for (var t = {}, n = e ? e.length : 0, i = 0; i < n; i++)
                t[e[i]] = !1;
            return t
        }
        function a(e) {
            if (e)
                try {
                    return new Date(Date.parse(e))
                } catch (e) {}
        }
        function l(t, n) {
            return n = n || e("<div>", {
                    class: "result"
                }).append(e("<dl>"))[0], e(n.firstChild).empty().append(e.map(t, function(t, n) {
                return [e("<dt>", {
                    text: n
                }), e("<dd>", {
                    html: i(t)
                })]
            })), n
        }
        e.fn.queryui = function(n, i, r) {
            "string" != typeof n && (r = i, i = n, n = "init");
            for (var s = this, o = 0; o < this.length && s === this; o++) {
                var a = e(this[o]),
                    l = a.data("queryui");
                switch (n) {
                    case "init":
                        l || (a.data("queryui", l = new t(a, i)), l._create());
                        break;
                    case "option":
                        if (!l)
                            throw new Error("Query UI not activated on this element");
                        void 0 === i ? s = l.options : void 0 === r ? s = l.options[r] : l._setOption(i, r)
                }
            }
            return s
        }, t.prototype = {
            options: {
                datasources: [],
                queries: [],
                prefixes: []
            },
            _create: function() {
                var t = this,
                    i = this.options,
                    r = this.element,
                    s = this.$stop = e(".stop", r),
                    o = this.$start = e(".start", r),
                    a = this.$query = e(".queryText", r),
                    c = this.$queries = e(".query", r),
                    u = e(".log", r),
                    h = e(".results", r),
                    d = e("<div>", {
                        class: "text"
                    }),
                    f = this.$datasources = e(".datasources", r),
                    p = this.$datetime = e(".datetime", r),
                    _ = this.$details = e(".details", r),
                    g = this.$showDetails = e(".details-toggle", r);
                f.length || (f = this.$datasources = e("<select>")), h.length || (h = e("<div>")), u.length || (u = e("<div>")), f.chosen({
                    create_option: !0,
                    persistent_create_option: !0,
                    skip_no_results: !0,
                    search_contains: !0,
                    display_selected_options: !1,
                    placeholder_text: " ",
                    create_option_text: "Add datasource"
                }), f.change(function() {
                    t._setOption("selectedDatasources", f.val())
                }), a.edited = "" !== a.val(), a.change(function() {
                    i.query = a.val(), a.edited = !0
                }), c.chosen({
                    skip_no_results: !0,
                    placeholder_text: " "
                }), c.change(function(e) {
                    (e = c.val()) && (a.val(i.query = e).edited = !1)
                }), p.change(function() {
                    t._setOption("datetime", p.val())
                }), o.click(this._startExecution.bind(this)), s.click(this._stopExecution.bind(this)), g.click(function() {
                    _.is(":visible") ? t._hideDetails() : t._showDetails()
                }), h.append(d), this._resultsScroller = new FastScroller(h, l), this._resultAppender = n(d), this._logAppender = n(u), this.$timing = e(".timing", r);
                for (var m in i)
                    this._setOption(m, i[m], !0)
            },
            _setOption: function(t, n, i) {
                var r = this.options;
                if (i || r[t] !== n) {
                    r[t] = n;
                    var a = this,
                        l = this.$datasources,
                        c = this.$queries;
                    switch (t) {
                        case "datasources":
                            l.empty().append((n || []).map(function(t, n) {
                                return e("<option>", {
                                    text: t.name,
                                    value: t.url
                                })
                            })), this._setOption("selectedDatasources", r.selectedDatasources, !0);
                            break;
                        case "selectedDatasources":
                            var u = l.children();
                            !i || n && n.length || !u.length || (r[t] = n = [u.val()]);
                            var h = o(n);
                            u.each(function(t) {
                                var n = e(this),
                                    i = e(this).val();
                                n.attr("selected", i in h), h[i] = !0
                            }), l.append(e.map(h, function(t, n) {
                                return t ? null : e("<option>", {
                                        text: n,
                                        value: n,
                                        selected: !0
                                    })
                            })).trigger("chosen:updated"), this._loadQueries(n);
                            break;
                        case "query":
                            this.$query.val(n).change();
                            break;
                        case "queries":
                            n.forEach(function(e) {
                                e.datasourceMatcher = new RegExp("^(?:" + e.datasources.map(s).join("|").replace(/\\\*|^$/g, ".*") + ")$")
                            }), this._loadQueries(r.selectedDatasources);
                            break;
                        case "datetime":
                            n && this._showDetails(), this.$datetime.val(n).change();
                            break;
                        case "relevantQueries":
                            n = n || [], this.$query.edited || n.some(function(e) {
                                return e.sparql === r.query
                            }) || n[0] && this._setOption("query", n[0].sparql), c.empty().append(e("<option>"), n.map(function(t) {
                                return e("<option>", {
                                    text: t.name,
                                    value: t.sparql,
                                    selected: r.query === t.sparql
                                })
                            })).trigger("chosen:updated").change();
                            break;
                        case "settings":
                            e.getJSON(n, function(e) {
                                for (var t in e)
                                    a._setOption(t, e[t])
                            })
                    }
                }
            },
            _loadQueries: function(e) {
                var t = (this.options.queries || []).filter(function(t, n) {
                        return t.id = n, !e || e.some(function(e) {
                            return t.datasourceMatcher.test(e)
                        })
                    }),
                    n = t.map(function(e) {
                        return e.id
                    }).join();
                this._querySetId !== n && (this._querySetId = n, this._setOption("relevantQueries", t), this.element.trigger("changeQuerySet"))
            },
            _startExecution: function() {
                var t = this.$datasources.val();
                return t && t.length ? (this.$stop.show(), this.$start.hide(), this._resultsScroller.removeAll(), this._resultAppender.clear(), this._logAppender.clear(), e("html,body").animate({
                        scrollTop: this.$stop.offset().top
                    }), this._resultCount = 0, this._startTimer(), void this._queryWorker.postMessage({
                        type: "query",
                        query: this.$query.val(),
                        datasources: t,
                        prefixes: this.options.prefixes,
                        datetime: a(this.options.datetime)
                    })) : alert("Please choose a datasource to execute the query.")
            },
            _stopExecution: function(e) {
                this._queryWorker.postMessage({
                    type: "stop"
                }), this._stopTimer(), this.$stop.hide(), this.$start.show(), e && e.message && this._resultAppender(e.message), this._resultAppender.flush(), this._logAppender.flush(), this._writeResult = this._writeEnd = null
            },
            _initResults: function(t) {
                var n = this._resultAppender;
                switch (t) {
                    case "SELECT":
                        this._writeResult = function(e) {
                            this._resultsScroller.addContent([e])
                        }, this._writeEnd = function() {
                            this._resultCount || n("This query has no results.")
                        };
                        break;
                    case "CONSTRUCT":
                    case "DESCRIBE":
                        var i = new N3.Writer({
                            write: function(e, t, i) {
                                n(e), i && i()
                            }
                        }, this.options);
                        this._writeResult = function(e) {
                            i.addTriple(e)
                        }, this._writeEnd = function() {
                            i.end()
                        };
                        break;
                    case "ASK":
                        this._writeResult = function(e) {
                            n(e)
                        }, this._writeEnd = e.noop;
                        break;
                    default:
                        n(t + " queries are unsupported.")
                }
            },
            _addResult: function(e) {
                this._writeResult && (this._resultCount++, this._writeResult(e))
            },
            _endResults: function() {
                this._writeEnd && (this._writeEnd(), this._stopExecution())
            },
            _startTimer: function() {
                this._startTime = new Date, this._stopTimer(), this._updateTimer(), this._updateTimerHandle = setInterval(this._updateTimer.bind(this), 100)
            },
            _updateTimer: function() {
                this.$timing.text(this._resultCount.toLocaleString() + " result" + (1 === this._resultCount ? "" : "s") + " in " + ((new Date - this._startTime) / 1e3).toFixed(1) + "s")
            },
            _stopTimer: function() {
                this._updateTimerHandle && (this._updateTimer(), clearInterval(this._updateTimerHandle), this._updateTimerHandle = 0)
            },
            _showDetails: function() {
                this.$details.slideDown(150), this.$showDetails.addClass("enabled")
            },
            _hideDetails: function() {
                this._setOption("datetime", ""), this.$details.slideUp(150), this.$showDetails.removeClass("enabled")
            }
        }
    }(jQuery), /*! @license MIT ©2014–2016 Ruben Verborgh, Ghent University – imec */
    /** Loads and stores state of the Triple Pattern Fragments widget using the URL. */
    jQuery(function(e) {
        function t() {
            var e = location.hash.substr(1).split("&").reduce(function(e, t) {
                var n = t.match(/^([^=]+)=(.*)/);
                return n && (e[decodeURIComponent(n[1])] = decodeURIComponent(n[2])), e
            }, {});
            (e.datasources = e.datasources || e.startFragment) && i.queryui("option", "selectedDatasources", e.datasources.split(/[ ,;]+/)), e.query && i.queryui("option", "query", e.query), e.datetime && i.queryui("option", "datetime", e.datetime)
        }
        function n() {
            var e = [],
                t = i.queryui("option"),
                n = t.selectedDatasources || [],
                r = (t.datasources[0] || {}).url,
                s = t.query === (t.queries[0] || {}).sparql,
                o = 0 === n.length || 1 === n.length && n[0] === r;
            o || e.push("datasources=" + n.map(encodeURIComponent).join(";")), s || e.push("query=" + encodeURIComponent(t.query || "")), t.datetime && e.push("datetime=" + encodeURIComponent(t.datetime)), e = e.length ? "#" + e.join("&") : "", history.replaceState(null, null, location.href.replace(/(?:#.*)?$/, e))
        }
        var i = e(".ldf-client").one("changeQuerySet", function() {
            t(), e(window).on("popstate", t), history.replaceState && i.on("change", n)
        })
    });
//# sourceMappingURL=ldf-client-ui-packaged.js.map

