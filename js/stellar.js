! function(m, o, t, v) {
    var s = "stellar",
        i = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[n];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[n];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, i, s, o) {
                    t[0].style[n] = "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)"
                }
            }
        },
        n = function() {
            var t, e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                i = m("script")[0].style,
                s = "";
            for (t in i)
                if (e.test(t)) {
                    s = t.match(e)[0];
                    break
                } return "WebkitOpacity" in i && (s = "Webkit"), "KhtmlOpacity" in i && (s = "Khtml"),
                function(t) {
                    return s + (0 < s.length ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }()("transform"),
        e = m("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== v,
        L = e ? function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            })
        } : function(t, e, i) {
            t.css("background-position", e + " " + i)
        },
        _ = e ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        r = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };

    function f(t, e) {
        this.element = t, this.options = m.extend({}, i, e), this._defaults = i, this._name = s, this.init()
    }
    f.prototype = {
        init: function() {
            this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === t.body && (this.element = o), this.$scrollElement = m(this.element), this.$element = this.element === o ? m("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== v ? m(this.options.viewportElement) : this.$scrollElement[0] === o || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var n = this,
                t = a[n.options.scrollProperty],
                r = l[n.options.positionProperty],
                e = t.setLeft,
                i = t.setTop;
            this._setScrollLeft = "function" == typeof e ? function(t) {
                e(n.$scrollElement, t)
            } : m.noop, this._setScrollTop = "function" == typeof i ? function(t) {
                i(n.$scrollElement, t)
            } : m.noop, this._setPosition = r.setPosition || function(t, e, i, s, o) {
                n.options.horizontalScrolling && r.setLeft(t, e, i), n.options.verticalScrolling && r.setTop(t, s, o)
            }
        },
        _handleWindowLoadAndResize: function() {
            var t = this,
                e = m(o);
            t.options.responsive && e.bind("load." + this.name, function() {
                t.refresh()
            }), e.bind("resize." + this.name, function() {
                t._detectViewport(), t.options.responsive && t.refresh()
            })
        },
        refresh: function(t) {
            var i = this,
                e = i._getScrollLeft(),
                s = i._getScrollTop();
            t && t.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), t && t.firstLoad && /WebKit/.test(navigator.userAgent) && m(o).load(function() {
                var t = i._getScrollLeft(),
                    e = i._getScrollTop();
                i._setScrollLeft(t + 1), i._setScrollTop(e + 1), i._setScrollLeft(t), i._setScrollTop(e)
            }), this._setScrollLeft(e), this._setScrollTop(s)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== v;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var g = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== v)
                for (var t = this.particles.length - 1; 0 <= t; t--) this.particles[t].$element.data("stellar-elementIsActive", v);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(t) {
                var e, i, s, o, n, r, a, l, f, c = m(this),
                    h = 0,
                    p = 0,
                    d = 0,
                    u = 0;
                if (c.data("stellar-elementIsActive")) {
                    if (c.data("stellar-elementIsActive") !== this) return
                } else c.data("stellar-elementIsActive", this);
                g.options.showElement(c), c.data("stellar-startingLeft") ? (c.css("left", c.data("stellar-startingLeft")), c.css("top", c.data("stellar-startingTop"))) : (c.data("stellar-startingLeft", c.css("left")), c.data("stellar-startingTop", c.css("top"))), s = c.position().left, o = c.position().top, n = "auto" === c.css("margin-left") ? 0 : parseInt(c.css("margin-left"), 10), r = "auto" === c.css("margin-top") ? 0 : parseInt(c.css("margin-top"), 10), l = c.offset().left - n, f = c.offset().top - r, c.parents().each(function() {
                    var t = m(this);
                    if (!0 === t.data("stellar-offset-parent")) return h = d, p = u, a = t, !1;
                    d += t.position().left, u += t.position().top
                }), e = c.data("stellar-horizontal-offset") !== v ? c.data("stellar-horizontal-offset") : a !== v && a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : g.horizontalOffset, i = c.data("stellar-vertical-offset") !== v ? c.data("stellar-vertical-offset") : a !== v && a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : g.verticalOffset, g.particles.push({
                    $element: c,
                    $offsetParent: a,
                    isFixed: "fixed" === c.css("position"),
                    horizontalOffset: e,
                    verticalOffset: i,
                    startingPositionLeft: s,
                    startingPositionTop: o,
                    startingOffsetLeft: l,
                    startingOffsetTop: f,
                    parentOffsetLeft: h,
                    parentOffsetTop: p,
                    stellarRatio: c.data("stellar-ratio") !== v ? c.data("stellar-ratio") : 1,
                    width: c.outerWidth(!0),
                    height: c.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var t, d = this,
                u = this._getScrollLeft(),
                g = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function() {
                var t, e, i, s, o, n, r, a = m(this),
                    l = _(a),
                    f = 0,
                    c = 0,
                    h = 0,
                    p = 0;
                if (a.data("stellar-backgroundIsActive")) {
                    if (a.data("stellar-backgroundIsActive") !== this) return
                } else a.data("stellar-backgroundIsActive", this);
                a.data("stellar-backgroundStartingLeft") ? L(a, a.data("stellar-backgroundStartingLeft"), a.data("stellar-backgroundStartingTop")) : (a.data("stellar-backgroundStartingLeft", l[0]), a.data("stellar-backgroundStartingTop", l[1])), i = "auto" === a.css("margin-left") ? 0 : parseInt(a.css("margin-left"), 10), s = "auto" === a.css("margin-top") ? 0 : parseInt(a.css("margin-top"), 10), o = a.offset().left - i - u, n = a.offset().top - s - g, a.parents().each(function() {
                    var t = m(this);
                    if (!0 === t.data("stellar-offset-parent")) return f = h, c = p, r = t, !1;
                    h += t.position().left, p += t.position().top
                }), t = a.data("stellar-horizontal-offset") !== v ? a.data("stellar-horizontal-offset") : r !== v && r.data("stellar-horizontal-offset") !== v ? r.data("stellar-horizontal-offset") : d.horizontalOffset, e = a.data("stellar-vertical-offset") !== v ? a.data("stellar-vertical-offset") : r !== v && r.data("stellar-vertical-offset") !== v ? r.data("stellar-vertical-offset") : d.verticalOffset, d.backgrounds.push({
                    $element: a,
                    $offsetParent: r,
                    isFixed: "fixed" === a.css("background-attachment"),
                    horizontalOffset: t,
                    verticalOffset: e,
                    startingValueLeft: l[0],
                    startingValueTop: l[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(l[0], 10)) ? 0 : parseInt(l[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(l[1], 10)) ? 0 : parseInt(l[1], 10),
                    startingPositionLeft: a.position().left,
                    startingPositionTop: a.position().top,
                    startingOffsetLeft: o,
                    startingOffsetTop: n,
                    parentOffsetLeft: f,
                    parentOffsetTop: c,
                    stellarRatio: a.data("stellar-background-ratio") === v ? 1 : a.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, i, s, o;
            for (o = this.particles.length - 1; 0 <= o; o--) e = (t = this.particles[o]).$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; 0 <= o; o--)(s = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), L(s.$element, s.startingValueLeft, s.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = m.noop, m(o).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var t = this,
                e = m(o);
            e.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), e.bind("resize.horizontal-" + this.name, function() {
                t.horizontalOffset = t.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), e.bind("resize.vertical-" + this.name, function() {
                t.verticalOffset = t.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, s, o, n, r, a, l, f, c = this._getScrollLeft(),
                h = this._getScrollTop(),
                p = !0,
                d = !0;
            if (this.currentScrollLeft !== c || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = c, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; 0 <= f; f--) e = (t = this.particles[f]).isFixed ? 1 : 0, a = this.options.horizontalScrolling ? (n = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (n = t.startingPositionLeft, t.startingOffsetLeft), l = this.options.verticalScrolling ? (r = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop, t.startingOffsetTop), this.options.hideDistantElements && (d = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), d && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, n, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (f = this.backgrounds.length - 1; 0 <= f; f--) e = (i = this.backgrounds[f]).isFixed ? 0 : 1, s = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (h + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, L(i.$element, s, o)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), e = !1
                },
                s = function() {
                    e || (r(i), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, s), s()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                r(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, m.fn[s] = function(e) {
        var i = arguments;
        return e === v || "object" == typeof e ? this.each(function() {
            m.data(this, "plugin_" + s) || m.data(this, "plugin_" + s, new f(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var t = m.data(this, "plugin_" + s);
            t instanceof f && "function" == typeof t[e] && t[e].apply(t, Array.prototype.slice.call(i, 1)), "destroy" === e && m.data(this, "plugin_" + s, null)
        }) : void 0
    }, m[s] = function(t) {
        var e = m(o);
        return e.stellar.apply(e, Array.prototype.slice.call(arguments, 0))
    }, m[s].scrollProperty = a, m[s].positionProperty = l, o.Stellar = f
}(jQuery, this, document)