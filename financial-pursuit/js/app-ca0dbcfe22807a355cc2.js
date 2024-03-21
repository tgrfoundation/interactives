webpackJsonp(
  [15],
  Array(60).concat([
    function(e, t, l) {
      "use strict";
      function a(e) {
        return (0, c.trim)(e, "/");
      }
      function f(e) {
        return (0, c.filter)(
          (0, c.map)(e, function(e) {
            return a(e.path);
          }),
          function(e) {
            return "" !== e;
          }
        );
      }
      function r() {
        return a(
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "undefined"
        ).split("/")[0];
      }
      function n(e) {
        var t = e.match(/\d$/);
        return null === t ? null : +t[0];
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.trimPath = a),
        (t.pathsFromRoutes = f),
        (t.firstPathSegment = r),
        (t.getPathParameter = n);
      var c = l(47);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, l = Array(e.length); t < e.length; t++) l[t] = e[t];
          return l;
        }
        return Array.from(e);
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        d = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })();
      t.default = function(e) {
        var t = (function(t) {
          function l() {
            var e, t, a, f;
            n(this, l);
            for (var u = arguments.length, i = Array(u), d = 0; d < u; d++)
              i[d] = arguments[d];
            return (
              (t = a = c(
                this,
                (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
                  e,
                  [this].concat(i)
                )
              )),
              (a.getContentPaths = function() {
                return E.without.apply(
                  void 0,
                  [(0, M.pathsFromRoutes)(g.default)].concat(
                    r(v.nonContentPaths)
                  )
                );
              }),
              (a.getNextSection = function(e) {
                var t = a.contentPaths,
                  l = t.indexOf((0, M.trimPath)(e));
                return -1 !== l && l + 1 in t
                  ? (0, M.firstPathSegment)(t[l + 1])
                  : null;
              }),
              (a.getNextPath = function() {
                var e = a.props,
                  t = e.activitiesCompleted,
                  l = e.currentPath,
                  f = e.farthestPath,
                  r = a.contentPaths;
                if (
                  a.isLastPathInIntro(l) ||
                  "/medals" === l ||
                  "/true-false" === l ||
                  "/learn-from-me" === l
                )
                  return "/spin";
                if (a.isLastPathInSection(l)) return "/medals";
                if ("/spin" === l) {
                  if (
                    !a.isLastPathInIntro(f) &&
                    "/true-false" !== (0, E.last)(t) &&
                    "/learn-from-me" !== (0, E.last)(t)
                  ) {
                    var n = Math.random();
                    if (n <= 0.33) return "/true-false";
                    if (n <= 0.66) return "/learn-from-me";
                  }
                  if (null !== f)
                    return a.isLastPathInSection(f)
                      ? "/" + a.getNextSection(f)
                      : "/" + (0, M.firstPathSegment)(f);
                }
                var c = r.indexOf((0, M.trimPath)(l));
                return -1 !== c && c + 1 in r ? "/" + r[c + 1] : "/" + r[0];
              }),
              (a.getPrevPath = function() {
                var e = a.contentPaths,
                  t = e.indexOf((0, M.trimPath)(a.props.currentPath));
                return -1 !== t && t - 1 in e ? "/" + e[t - 1] : null;
              }),
              (a.isLastPathInSection = function(e) {
                return (
                  !!a.contentPaths.includes((0, M.trimPath)(e)) &&
                  (0, M.firstPathSegment)(e) !== a.getNextSection(e)
                );
              }),
              (a.isFrontPage = function() {
                return (
                  (0, M.trimPath)(a.props.currentPath) === a.contentPaths[0]
                );
              }),
              (a.isLastPathInIntro = function(e) {
                return (
                  "intro" === (0, M.firstPathSegment)(e) &&
                  a.isLastPathInSection(e)
                );
              }),
              (f = t),
              c(a, f)
            );
          }
          return (
            u(l, t),
            d(l, [
              {
                key: "render",
                value: function() {
                  var t = this.props,
                    l = (t.activitiesCompleted, t.currentPath),
                    a = t.farthestPath,
                    r = f(t, [
                      "activitiesCompleted",
                      "currentPath",
                      "farthestPath",
                    ]);
                  return (
                    (this.contentPaths = this.getContentPaths()),
                    (this.frontPage = this.isFrontPage()),
                    (this.prevPath = this.getPrevPath()),
                    (this.nextPath = this.getNextPath()),
                    s.default.createElement(
                      e,
                      i(
                        {
                          currentPath: l,
                          farthestPath: a,
                          frontPage: this.frontPage,
                          prevPath: this.prevPath,
                          nextPath: this.nextPath,
                          contentPaths: this.contentPaths,
                        },
                        r
                      )
                    )
                  );
                },
              },
            ]),
            l
          );
        })(o.Component);
        return (
          (t.defaultProps = {
            activitiesCompleted: [],
            currentPath: null,
            farthestPath: null,
          }),
          (t.propTypes = {
            activitiesCompleted: h.default.arrayOf(h.default.string),
            currentPath: h.default.string,
            farthestPath: h.default.string,
          }),
          (0, m.connect)(b)(t)
        );
      };
      var o = l(1),
        s = a(o),
        p = l(2),
        h = a(p),
        m = l(58),
        E = l(47),
        v = l(102),
        g = a(v),
        M = l(60),
        b = function(e) {
          return {
            activitiesCompleted: e.activity.completed,
            currentPath: e.path.currentPath,
            farthestPath: e.path.farthestPath,
          };
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      var a = {
        title: "Financial Pur$uit",
        prod_dir: "/interactives/financial-pursuit/",
        host: "costs.dev",
        port: "3000",
        ga: "UA-89584346-4",
      };
      e.exports = a;
    },
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nonContentPaths = void 0);
      var f = l(605),
        r = a(f),
        n = l(619),
        c = a(n),
        u = l(627),
        i = a(u),
        d = l(632),
        o = a(d),
        s = l(638),
        p = a(s),
        h = l(643),
        m = a(h),
        E = l(647),
        v = a(E),
        g = l(654),
        M = a(g),
        b = l(661),
        z = a(b),
        F = l(665),
        y = a(F),
        C = l(669),
        x = a(C),
        w = l(672),
        P = a(w),
        A = l(674),
        k = a(A),
        B = l(677),
        D = a(B),
        O = l(679),
        S = a(O),
        L = l(681),
        H = a(L);
      (t.default = [{ path: "/", redirect: "/intro" }].concat(
        r.default,
        c.default,
        i.default,
        o.default,
        p.default,
        m.default,
        v.default,
        M.default,
        z.default,
        y.default,
        x.default,
        P.default,
        k.default,
        D.default,
        S.default,
        H.default
      )),
        (t.nonContentPaths = ["medals", "spin", "true-false", "learn-from-me"]);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        n = l(1),
        c = l(2),
        u = a(c),
        i = l(18),
        d = a(i),
        o = l(613),
        s = a(o),
        p = function(e) {
          var t = e.caps,
            l = e.center,
            a = e.children,
            c = e.className,
            u = e.margin,
            i = e.size,
            o = e.strong,
            p = e.tag,
            h = f(e, [
              "caps",
              "center",
              "children",
              "className",
              "margin",
              "size",
              "strong",
              "tag",
            ]);
          return (0, n.createElement)(
            p,
            r(
              {
                className: (0, d.default)(
                  s.default[p],
                  t && s.default.caps,
                  l && s.default.center,
                  o && s.default.strong,
                  c
                ),
                style: {
                  fontSize: null !== i && 1 * i + "rem",
                  marginBottom: 1 * u + "rem",
                },
              },
              h
            ),
            a
          );
        };
      (p.defaultProps = {
        caps: !1,
        center: !1,
        children: null,
        className: null,
        margin: 1,
        size: null,
        strong: !1,
        tag: "p",
      }),
        (p.propTypes = {
          caps: u.default.bool,
          center: u.default.bool,
          children: u.default.node,
          className: u.default.string,
          margin: u.default.number,
          size: u.default.number,
          strong: u.default.bool,
          tag: u.default.string,
        }),
        (t.default = p);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t) {
      e.exports = {
        container: "container-Aewn9",
        row: "row-1Kshp",
        column: "column-1nftb",
        center: "center-1Xusp",
        vcenter: "vcenter-1F-pi",
        columnSmallFifth: "columnSmallFifth-3L4Vi",
        columnMediumFifth: "columnMediumFifth-2RVD6",
        columnLargeFifth: "columnLargeFifth-3Prij",
        columnSmall1: "columnSmall1-2o3PX",
        pushSmall1: "pushSmall1-aByH8",
        columnSmall2: "columnSmall2-1vheK",
        pushSmall2: "pushSmall2-22oXF",
        columnSmall3: "columnSmall3-3ujT_",
        pushSmall3: "pushSmall3-1f2Hz",
        columnSmall4: "columnSmall4-1VMpx",
        pushSmall4: "pushSmall4-WvY1Y",
        columnSmall5: "columnSmall5-1WYNG",
        pushSmall5: "pushSmall5-2tJaK",
        columnSmall6: "columnSmall6-3vDia",
        pushSmall6: "pushSmall6-fhDKn",
        columnSmall7: "columnSmall7-3VAC9",
        pushSmall7: "pushSmall7-2Httn",
        columnSmall8: "columnSmall8-26Kfi",
        pushSmall8: "pushSmall8-bdInw",
        columnSmall9: "columnSmall9-1pL0n",
        pushSmall9: "pushSmall9-1avXZ",
        columnSmall10: "columnSmall10-2x4KW",
        pushSmall10: "pushSmall10-NsyjA",
        columnSmall11: "columnSmall11-3EjTE",
        pushSmall11: "pushSmall11-2Jq6M",
        columnSmall12: "columnSmall12-COpic",
        pushSmall12: "pushSmall12-3M_3q",
        columnMedium1: "columnMedium1-iF_9P",
        pushMedium1: "pushMedium1-33MZY",
        columnMedium2: "columnMedium2-2w0Qk",
        pushMedium2: "pushMedium2-1RpUL",
        columnMedium3: "columnMedium3-2B29v",
        pushMedium3: "pushMedium3-2I2QK",
        columnMedium4: "columnMedium4-1AXk8",
        pushMedium4: "pushMedium4-uK2K_",
        columnMedium5: "columnMedium5-1Netx",
        pushMedium5: "pushMedium5-26kzX",
        columnMedium6: "columnMedium6-sTIME",
        pushMedium6: "pushMedium6-2nb-9",
        columnMedium7: "columnMedium7-hwrLE",
        pushMedium7: "pushMedium7-2RZG9",
        columnMedium8: "columnMedium8-35x3N",
        pushMedium8: "pushMedium8-1yn-7",
        columnMedium9: "columnMedium9-2UIYf",
        pushMedium9: "pushMedium9-2bhxR",
        columnMedium10: "columnMedium10-R4huP",
        pushMedium10: "pushMedium10-RcADP",
        columnMedium11: "columnMedium11-3Svc4",
        pushMedium11: "pushMedium11-1Yq9f",
        columnMedium12: "columnMedium12-_taBI",
        pushMedium12: "pushMedium12-3FAqg",
        columnLarge1: "columnLarge1-1XRMj",
        pushLarge1: "pushLarge1-3Kbgx",
        columnLarge2: "columnLarge2-1zPS0",
        pushLarge2: "pushLarge2-3YBgE",
        columnLarge3: "columnLarge3-38Rhv",
        pushLarge3: "pushLarge3-1yXLH",
        columnLarge4: "columnLarge4-2lfK7",
        pushLarge4: "pushLarge4-KqKFn",
        columnLarge5: "columnLarge5-b7iyt",
        pushLarge5: "pushLarge5-3fzAE",
        columnLarge6: "columnLarge6-3rPOB",
        pushLarge6: "pushLarge6-HilGu",
        columnLarge7: "columnLarge7-1Pe7M",
        pushLarge7: "pushLarge7-1bSTI",
        columnLarge8: "columnLarge8-1FQnh",
        pushLarge8: "pushLarge8-7egiU",
        columnLarge9: "columnLarge9-1HvxI",
        pushLarge9: "pushLarge9-3BeHW",
        columnLarge10: "columnLarge10-1qSGH",
        pushLarge10: "pushLarge10-1frsG",
        columnLarge11: "columnLarge11-2yNbB",
        pushLarge11: "pushLarge11-MuHi6",
        columnLarge12: "columnLarge12-2puhu",
        pushLarge12: "pushLarge12-1VuC-",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Column = t.Row = t.Container = void 0);
      var f = l(607),
        r = a(f),
        n = l(608),
        c = a(n),
        u = l(609),
        i = a(u);
      (t.Container = r.default), (t.Row = c.default), (t.Column = i.default);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(614),
        o = a(d),
        s = function(e) {
          var t = e.className,
            l = e.icon;
          return r.default.createElement("i", {
            className: (0, i.default)(o.default.fa, o.default["fa-" + l], t),
            "aria-hidden": "true",
          });
        };
      (s.defaultProps = { className: null }),
        (s.propTypes = {
          className: c.default.string,
          icon: c.default.string.isRequired,
        }),
        (t.default = s);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        i = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })();
      t.default = function(e) {
        var t = (function(t) {
          function l() {
            var e, t, a, f;
            r(this, l);
            for (var c = arguments.length, i = Array(c), d = 0; d < c; d++)
              i[d] = arguments[d];
            return (
              (t = a = n(
                this,
                (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(
                  e,
                  [this].concat(i)
                )
              )),
              (a.getSections = function() {
                return E.default
                  .filter(function(e) {
                    return "title" in e;
                  })
                  .map(function(e) {
                    return u({}, e, { id: (0, v.trimPath)(e.path) });
                  });
              }),
              (a.getSection = function() {
                var e = (0, v.firstPathSegment)(a.props.currentPath);
                return a.sections.some(function(t) {
                  return t.id === e;
                })
                  ? e
                  : null;
              }),
              (a.getSectionNumber = function() {
                var e = a.sections.findIndex(function(e) {
                  return e.id === (0, v.firstPathSegment)(a.props.currentPath);
                });
                return -1 !== e ? e : null;
              }),
              (a.getCompletedSections = function() {
                var e = a.sections.findIndex(function(e) {
                  return e.id === (0, v.firstPathSegment)(a.props.farthestPath);
                });
                return a.sections.slice(1, e + 1).map(function(e) {
                  return e.id;
                });
              }),
              (f = t),
              n(a, f)
            );
          }
          return (
            c(l, t),
            i(l, [
              {
                key: "render",
                value: function() {
                  var t = this.props,
                    l =
                      (t.currentPath,
                      t.farthestPath,
                      f(t, ["currentPath", "farthestPath"]));
                  return (
                    (this.sections = this.getSections()),
                    (this.currentSection = this.getSection()),
                    (this.currentSectionNumber = this.getSectionNumber()),
                    (this.completedSections = this.getCompletedSections()),
                    o.default.createElement(
                      e,
                      u(
                        {
                          completedSections: this.completedSections,
                          currentSection: this.currentSection,
                          currentSectionNumber: this.currentSectionNumber,
                          sections: this.sections,
                        },
                        l
                      )
                    )
                  );
                },
              },
            ]),
            l
          );
        })(d.Component);
        return (
          (t.defaultProps = { children: null }),
          (t.propTypes = {
            children: p.default.node,
            currentPath: p.default.string.isRequired,
            farthestPath: p.default.string.isRequired,
          }),
          (0, h.connect)(g)(t)
        );
      };
      var d = l(1),
        o = a(d),
        s = l(2),
        p = a(s),
        h = l(58),
        m = l(102),
        E = a(m),
        v = l(60),
        g = function(e) {
          return {
            currentPath: e.path.currentPath,
            farthestPath: e.path.farthestPath,
          };
        };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storeAvatar = t.initializeUser = void 0);
      var a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        f = l(163),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(f),
        n = function(e) {
          return { type: "STORE_USER_ID", userId: e };
        },
        c =
          ((t.initializeUser = function() {
            return function(e) {
              return r.default.getUserId().then(function(t) {
                return e(n(t));
              });
            };
          }),
          (t.storeAvatar = function(e) {
            return { type: "STORE_AVATAR", avatar: e };
          }),
          { userId: null, avatar: null }),
        u = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : c,
            t = arguments[1];
          switch (t.type) {
            case "STORE_USER_ID":
              return a({}, e, { userId: t.userId });
            case "STORE_AVATAR":
              return a({}, e, { avatar: t.avatar });
            default:
              return e;
          }
        };
      t.default = u;
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), l(236);
      var a = l(100),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        r = l(166);
      t.default = {
        getUserId: function() {
          return this.request("user", {
            property: f.default.title,
            url: document.location.origin,
            browser: (0, r.getBrowser)(),
            os: (0, r.getOS)(),
          }).then(function(e) {
            return e.data.id;
          });
        },
        logPageview: function(e, t, l) {
          this.request("pageview", { user_id: e, name: t, path: l });
        },
        logEvent: function(e, t, l, a) {
          var f =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null,
            r = { user_id: e, path: t, label: l, value: a };
          null !== f && (r.correct = f), this.request("event", r);
        },
        parseJson: function(e) {
          return e.json();
        },
        checkStatus: function(e) {
          if (e.status >= 200 && e.status < 300) return e;
          throw new Error(e.statusText);
        },
        request: function(e, t) {
          return fetch("//cepdata.frb.io/api/" + e, {
            method: "POST",
            body: JSON.stringify(t),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then(this.checkStatus)
            .then(this.parseJson)
            .catch(function(e) {
              throw new Error(e);
            });
        },
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        f =
          ((t.toggleAudio = function() {
            return { type: "TOGGLE_AUDIO" };
          }),
          (t.toggleTranscript = function() {
            return { type: "TOGGLE_TRANSCRIPT" };
          }),
          (t.setTranscript = function(e) {
            return { type: "SET_TRANSCRIPT", transcript: e };
          }),
          { audioEnabled: !0, transcript: "", transcriptVisible: !1 }),
        r = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f,
            t = arguments[1];
          switch (t.type) {
            case "TOGGLE_AUDIO":
              return a({}, e, { audioEnabled: !e.audioEnabled });
            case "TOGGLE_TRANSCRIPT":
              return a({}, e, { transcriptVisible: !e.transcriptVisible });
            case "SET_TRANSCRIPT":
              return a({}, e, { transcript: t.transcript });
            default:
              return e;
          }
        };
      t.default = r;
    },
    ,
    function(e, t, l) {
      "use strict";
      function a() {
        var e = i.getBrowser();
        return "IE" === e.name || "Edge" === e.name;
      }
      function f() {
        document.body.className = a() ? "ie" : "not-ie";
      }
      function r() {
        var e = i.getBrowser();
        return e.name + " " + e.major;
      }
      function n() {
        var e = i.getOS();
        return e.name + " " + e.version;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isIe = a),
        (t.setIeBodyClass = f),
        (t.getBrowser = r),
        (t.getOS = n);
      var c = l(237),
        u = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(c),
        i = new u.default();
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
          t = arguments[1];
        switch (t.type) {
          case "STORE_PATHS":
            return { currentPath: t.currentPath, farthestPath: t.farthestPath };
          default:
            return e;
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      var f =
        ((t.storePaths = function(e, t) {
          return { type: "STORE_PATHS", currentPath: e, farthestPath: t };
        }),
        { currentPath: null, farthestPath: null });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function u() {}
      (t.__esModule = !0),
        (t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0);
      var i = l(2),
        d = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var l in e)
              Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
          return (t.default = e), t;
        })(i),
        o = l(1),
        s = a(o),
        p = l(104),
        h = a(p),
        m = (l(252), (t.UNMOUNTED = "unmounted")),
        E = (t.EXITED = "exited"),
        v = (t.ENTERING = "entering"),
        g = (t.ENTERED = "entered"),
        M = (t.EXITING = "exiting"),
        b = (function(e) {
          function t(l, a) {
            r(this, t);
            var f = n(this, e.call(this, l, a)),
              c = a.transitionGroup,
              u = c && !c.isMounting ? l.enter : l.appear,
              i = void 0;
            return (
              (f.nextStatus = null),
              l.in
                ? u
                  ? ((i = E), (f.nextStatus = v))
                  : (i = g)
                : (i = l.unmountOnExit || l.mountOnEnter ? m : E),
              (f.state = { status: i }),
              (f.nextCallback = null),
              f
            );
          }
          return (
            c(t, e),
            (t.prototype.getChildContext = function() {
              return { transitionGroup: null };
            }),
            (t.prototype.componentDidMount = function() {
              this.updateStatus(!0);
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              var t = this.pendingState || this.state,
                l = t.status;
              e.in
                ? (l === m && this.setState({ status: E }),
                  l !== v && l !== g && (this.nextStatus = v))
                : (l !== v && l !== g) || (this.nextStatus = M);
            }),
            (t.prototype.componentDidUpdate = function() {
              this.updateStatus();
            }),
            (t.prototype.componentWillUnmount = function() {
              this.cancelNextCallback();
            }),
            (t.prototype.getTimeouts = function() {
              var e = this.props.timeout,
                t = void 0,
                l = void 0,
                a = void 0;
              return (
                (t = l = a = e),
                null != e &&
                  "number" != typeof e &&
                  ((t = e.exit), (l = e.enter), (a = e.appear)),
                { exit: t, enter: l, appear: a }
              );
            }),
            (t.prototype.updateStatus = function() {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = this.nextStatus;
              if (null !== t) {
                (this.nextStatus = null), this.cancelNextCallback();
                var l = h.default.findDOMNode(this);
                t === v ? this.performEnter(l, e) : this.performExit(l);
              } else
                this.props.unmountOnExit &&
                  this.state.status === E &&
                  this.setState({ status: m });
            }),
            (t.prototype.performEnter = function(e, t) {
              var l = this,
                a = this.props.enter,
                f = this.context.transitionGroup
                  ? this.context.transitionGroup.isMounting
                  : t,
                r = this.getTimeouts();
              if (!t && !a)
                return void this.safeSetState({ status: g }, function() {
                  l.props.onEntered(e);
                });
              this.props.onEnter(e, f),
                this.safeSetState({ status: v }, function() {
                  l.props.onEntering(e, f),
                    l.onTransitionEnd(e, r.enter, function() {
                      l.safeSetState({ status: g }, function() {
                        l.props.onEntered(e, f);
                      });
                    });
                });
            }),
            (t.prototype.performExit = function(e) {
              var t = this,
                l = this.props.exit,
                a = this.getTimeouts();
              if (!l)
                return void this.safeSetState({ status: E }, function() {
                  t.props.onExited(e);
                });
              this.props.onExit(e),
                this.safeSetState({ status: M }, function() {
                  t.props.onExiting(e),
                    t.onTransitionEnd(e, a.exit, function() {
                      t.safeSetState({ status: E }, function() {
                        t.props.onExited(e);
                      });
                    });
                });
            }),
            (t.prototype.cancelNextCallback = function() {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (t.prototype.safeSetState = function(e, t) {
              var l = this;
              (this.pendingState = e),
                (t = this.setNextCallback(t)),
                this.setState(e, function() {
                  (l.pendingState = null), t();
                });
            }),
            (t.prototype.setNextCallback = function(e) {
              var t = this,
                l = !0;
              return (
                (this.nextCallback = function(a) {
                  l && ((l = !1), (t.nextCallback = null), e(a));
                }),
                (this.nextCallback.cancel = function() {
                  l = !1;
                }),
                this.nextCallback
              );
            }),
            (t.prototype.onTransitionEnd = function(e, t, l) {
              this.setNextCallback(l),
                e
                  ? (this.props.addEndListener &&
                      this.props.addEndListener(e, this.nextCallback),
                    null != t && setTimeout(this.nextCallback, t))
                  : setTimeout(this.nextCallback, 0);
            }),
            (t.prototype.render = function() {
              var e = this.state.status;
              if (e === m) return null;
              var t = this.props,
                l = t.children,
                a = f(t, ["children"]);
              if (
                (delete a.in,
                delete a.mountOnEnter,
                delete a.unmountOnExit,
                delete a.appear,
                delete a.enter,
                delete a.exit,
                delete a.timeout,
                delete a.addEndListener,
                delete a.onEnter,
                delete a.onEntering,
                delete a.onEntered,
                delete a.onExit,
                delete a.onExiting,
                delete a.onExited,
                "function" == typeof l)
              )
                return l(e, a);
              var r = s.default.Children.only(l);
              return s.default.cloneElement(r, a);
            }),
            t
          );
        })(s.default.Component);
      (b.contextTypes = { transitionGroup: d.object }),
        (b.childContextTypes = { transitionGroup: function() {} }),
        (b.propTypes = {}),
        (b.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: u,
          onEntering: u,
          onEntered: u,
          onExit: u,
          onExiting: u,
          onExited: u,
        }),
        (b.UNMOUNTED = 0),
        (b.EXITED = 1),
        (b.ENTERING = 2),
        (b.ENTERED = 3),
        (b.EXITING = 4),
        (t.default = b);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        var t = "transition" + e + "Timeout",
          l = "transition" + e;
        return function(e) {
          if (e[l]) {
            if (null == e[t])
              return new Error(
                t +
                  " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information."
              );
            if ("number" != typeof e[t])
              return new Error(t + " must be a number (in milliseconds)");
          }
          return null;
        };
      }
      (t.__esModule = !0),
        (t.classNamesShape = t.timeoutsShape = void 0),
        (t.transitionTimeout = a);
      var f = l(2),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(f);
      (t.timeoutsShape = r.default.oneOfType([
        r.default.number,
        r.default.shape({ enter: r.default.number, exit: r.default.number })
          .isRequired,
      ])),
        (t.classNamesShape = r.default.oneOfType([
          r.default.string,
          r.default.shape({
            enter: r.default.string,
            exit: r.default.string,
            active: r.default.string,
          }),
          r.default.shape({
            enter: r.default.string,
            enterActive: r.default.string,
            exit: r.default.string,
            exitActive: r.default.string,
          }),
        ]));
    },
    ,
    function(e, t, l) {
      "use strict";
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
          t = arguments[1];
        switch (t.type) {
          case "STORE_SELECTIONS":
            var l = f({}, e.selections);
            return (l[t.activityId] = t.payload), f({}, e, { selections: l });
          case "ACTIVITY_COMPLETED":
            return f({}, e, { completed: e.completed.concat(t.activityId) });
          default:
            return e;
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var a in l)
              Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
          }
          return e;
        };
      t.default = a;
      var r =
        ((t.storeSelections = function(e, t) {
          return { type: "STORE_SELECTIONS", activityId: e, payload: t };
        }),
        (t.activityCompleted = function(e) {
          return { type: "ACTIVITY_COMPLETED", activityId: e };
        }),
        { completed: [], selections: {} });
    },
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(1),
        n = a(r),
        c = l(18),
        u = a(c),
        i = l(2),
        d = a(i),
        o = l(611),
        s = a(o),
        p = function(e) {
          var t = e.src,
            l = e.className,
            a = e.width,
            r = e.height,
            c = f(e, ["src", "className", "width", "height"]);
          return n.default.createElement(
            "div",
            {
              className: (0, u.default)(s.default.wrapper, l),
              style: { paddingBottom: (r / a) * 100 + "%" },
            },
            n.default.createElement(t, c)
          );
        };
      (p.defaultProps = { className: null }),
        (p.propTypes = {
          className: d.default.string,
          src: d.default.func.isRequired,
          width: d.default.number.isRequired,
          height: d.default.number.isRequired,
        }),
        (t.default = p);
    },
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(610),
        o = a(d),
        s = l(256),
        p = a(s),
        h = l(612),
        m = a(h),
        E = function(e) {
          var t = e.className;
          return r.default.createElement(p.default, {
            src: o.default,
            className: (0, i.default)(m.default.logo, t),
            width: 613,
            height: 88,
          });
        };
      (E.defaultProps = { className: null }),
        (E.propTypes = { className: c.default.string }),
        (t.default = E);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(676),
        o = a(d),
        s = function(e) {
          var t = e.className,
            l = e.icon,
            a = e.muted,
            f = e.number;
          return r.default.createElement(
            "div",
            { className: (0, i.default)(o.default.wrapper, t) },
            r.default.createElement(
              "svg",
              { viewBox: "0 0 260 260", className: o.default.medal },
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  { id: "desaturate" },
                  r.default.createElement("feColorMatrix", {
                    in: "SourceGraphic",
                    type: "matrix",
                    values:
                      "0   0   0   0  0 0.2 0   0.5 0  0 0   0   0.2 0.5 0 0   0   0   1   0",
                  })
                )
              ),
              r.default.createElement(
                "g",
                { filter: a && "url(#desaturate)" },
                r.default.createElement("circle", {
                  cx: "130.51",
                  cy: "110.61",
                  r: "96.47",
                  fill: "#ffcd34",
                }),
                r.default.createElement("circle", {
                  cx: "130.03",
                  cy: "31.19",
                  r: "29.19",
                  fill: "#ffba00",
                }),
                r.default.createElement("circle", {
                  cx: "169.81",
                  cy: "41.59",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "matrix(.5 -.87 .87 .5 48.89 167.85)",
                }),
                r.default.createElement("circle", {
                  cx: "90.38",
                  cy: "42.07",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-30 90.39 42.08)",
                }),
                r.default.createElement("circle", {
                  cx: "61.49",
                  cy: "71.32",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-60 61.49 71.32)",
                }),
                r.default.createElement("circle", {
                  cx: "51.09",
                  cy: "111.1",
                  r: "29.19",
                  fill: "#ffba00",
                }),
                r.default.createElement("path", {
                  d:
                    "M74.94 258.08l-13.5-36.19-39.1-4.63 69.23-89.2 52.6 40.83-69.23 89.19z",
                  fill: "#9f1050",
                }),
                r.default.createElement("path", {
                  d:
                    "M186.09 258.08l13.49-36.19 39.11-4.63-69.23-89.2-52.6 40.83 69.23 89.19z",
                  fill: "#9f1050",
                }),
                r.default.createElement("circle", {
                  cx: "61.97",
                  cy: "150.74",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-30 61.97 150.74)",
                }),
                r.default.createElement("circle", {
                  cx: "91.22",
                  cy: "179.64",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "matrix(.5 -.87 .87 .5 -109.96 168.82)",
                }),
                r.default.createElement("circle", {
                  cx: "131",
                  cy: "190.04",
                  r: "29.19",
                  fill: "#ffba00",
                }),
                r.default.createElement("circle", {
                  cx: "170.65",
                  cy: "179.15",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-30 170.64 179.14)",
                }),
                r.default.createElement("circle", {
                  cx: "199.54",
                  cy: "149.9",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-60 199.54 149.9)",
                }),
                r.default.createElement("circle", {
                  cx: "209.94",
                  cy: "110.13",
                  r: "29.19",
                  fill: "#ffba00",
                }),
                r.default.createElement("circle", {
                  cx: "199.06",
                  cy: "70.48",
                  r: "29.19",
                  fill: "#ffba00",
                  transform: "rotate(-30 199.06 70.48)",
                }),
                r.default.createElement("path", {
                  d:
                    "M130.51 202.35a91.74 91.74 0 1 1 91.74-91.74 91.84 91.84 0 0 1-91.74 91.74z",
                  fill: "#feee44",
                }),
                r.default.createElement("path", {
                  d:
                    "M130.51 185.83a75.22 75.22 0 1 1 75.22-75.22 75.3 75.3 0 0 1-75.22 75.22z",
                  fill: "#ffcd34",
                }),
                r.default.createElement("path", {
                  d:
                    "M130.51 185.83a75.3 75.3 0 0 1-75.21-75.22c29.92 40.63 118 45.28 150.44 0a75.3 75.3 0 0 1-75.23 75.22z",
                  fill: "#ffd860",
                }),
                r.default.createElement("path", {
                  d:
                    "M130 46.33a75.29 75.29 0 0 1 75.17 73.12 75.21 75.21 0 1 0-149.9-8.84c0 .7 0 1.4.05 2.1A75.31 75.31 0 0 1 130 46.33z",
                  fill: "#ffa000",
                }),
                r.default.createElement("path", {
                  d:
                    "M155.14 80.94l-25.21-16.05-25.21 16.05V25.6l50.42-.31v55.65z",
                  fill: "#ffa000",
                }),
                r.default.createElement("path", {
                  d:
                    "M155.14 22.26a91.32 91.32 0 0 0-50.42.33V72l25.21-16 25.21 16z",
                  fill: "#f35b6a",
                }),
                r.default.createElement("rect", {
                  width: "17.97",
                  height: "8.42",
                  x: "187.28",
                  y: "55.03",
                  fill: "#fff",
                  rx: "3.16",
                  ry: "3.16",
                  transform: "rotate(50.7 197.51 59.75)",
                }),
                r.default.createElement("rect", {
                  width: "17.97",
                  height: "8.42",
                  x: "58.39",
                  y: "161.19",
                  fill: "#fff",
                  rx: "3.16",
                  ry: "3.16",
                  transform: "rotate(50.8 67.38 165.39)",
                }),
                f &&
                  r.default.createElement(
                    "text",
                    {
                      x: "130",
                      y: "45",
                      textAnchor: "middle",
                      fill: "#FFF",
                      fontFamily: "MrEavesBold",
                      fontSize: "120%",
                    },
                    f
                  ),
                l &&
                  r.default.createElement("use", {
                    xlinkHref: "#" + l,
                    height: "32%",
                    y: "32%",
                  })
              )
            )
          );
        };
      (s.defaultProps = {
        className: null,
        icon: null,
        muted: !1,
        number: null,
      }),
        (s.propTypes = {
          className: c.default.string,
          icon: c.default.string,
          muted: c.default.bool,
          number: c.default.number,
        }),
        (t.default = s);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        n = l(1),
        c = a(n),
        u = l(2),
        i = a(u),
        d = function(e) {
          var t = e.alt,
            l = e.className,
            a = e.src,
            n = f(e, ["alt", "className", "src"]);
          return c.default.createElement(
            "img",
            r({ src: a, className: l, alt: t }, n)
          );
        };
      (d.defaultProps = { alt: "", className: null }),
        (d.propTypes = {
          alt: i.default.string,
          className: i.default.string,
          src: i.default.string.isRequired,
        }),
        (t.default = d);
    },
    function(e, t, l) {
      e.exports = l(262);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      l(167), l(445);
      var f = l(1),
        r = a(f),
        n = l(104),
        c = l(535),
        u = a(c),
        i = l(100),
        d = a(i),
        o = l(166),
        s = l(559),
        p = a(s),
        h = (0, u.default)(),
        m = d.default.prod_dir;
      (0, o.setIeBodyClass)(),
        (0, n.render)(
          r.default.createElement(p.default, { store: h, basePath: m }),
          document.getElementById("app")
        );
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      e.exports = l.p + ".htaccess";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t, l) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = l),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = arguments[t];
            for (var a in l)
              Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
          }
          return e;
        };
      t.default = function() {
        var e = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || n.compose,
          t = (0, n.combineReducers)({
            activity: v.default,
            audio: M.default,
            path: m.default,
            user: p.default,
          }),
          l = F.default.title.toLowerCase().replace(" ", "_"),
          a = (0, b.loadState)(l),
          c = (0, n.createStore)(
            t,
            a,
            e((0, n.applyMiddleware)(u.default, o.default))
          );
        return (
          c.subscribe(
            (0, i.throttle)(function() {
              var e = c.getState(),
                t = Object.keys(e).reduce(function(t, l) {
                  return "audio" !== l ? r({}, t, f({}, l, e[l])) : t;
                }, {});
              (0, b.saveState)(l, t);
            }, 1e3)
          ),
          c
        );
      };
      var n = l(148),
        c = l(232),
        u = a(c),
        i = l(47),
        d = l(549),
        o = a(d),
        s = l(162),
        p = a(s),
        h = l(239),
        m = a(h),
        E = l(254),
        v = a(E),
        g = l(164),
        M = a(g),
        b = l(558),
        z = l(100),
        F = a(z);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(233),
        r = a(f),
        n = l(162),
        c = l(100),
        u = a(c),
        i = l(163),
        d = a(i);
      t.default = function(e) {
        return function(t) {
          return function(l) {
            if ("STORE_PATHS" === l.type) {
              var a = e.getState(),
                f = a.path.currentPath,
                c = a.user.userId;
              if (f !== l.currentPath) {
                void 0 === window.ga && r.default.initialize(u.default.ga),
                  r.default.pageview(l.currentPath);
                var i = function(e) {
                  d.default.logPageview(e, document.title, l.currentPath);
                };
                null === c
                  ? e.dispatch((0, n.initializeUser)()).then(function(e) {
                      var t = e.userId;
                      i(t);
                    })
                  : i(c);
              }
            }
            return t(l);
          };
        };
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadState = function(e) {
          try {
            var t = sessionStorage.getItem(e);
            if (null === t) return;
            return JSON.parse(t);
          } catch (e) {
            return;
          }
        }),
        (t.saveState = function(e, t) {
          try {
            var l = JSON.stringify(t);
            sessionStorage.setItem(e, l);
          } catch (e) {}
        });
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(58),
        i = l(81),
        d = l(595);
      l(602);
      var o = l(604),
        s = a(o),
        p = l(683),
        h = a(p),
        m = l(742),
        E = a(m);
      l(743);
      var v = l(102),
        g = a(v),
        M = function(e) {
          var t = e.basePath,
            l = e.store;
          return r.default.createElement(
            u.Provider,
            { store: l },
            r.default.createElement(
              i.BrowserRouter,
              { basename: t },
              r.default.createElement(i.Route, {
                render: function(e) {
                  var t = e.location;
                  return "/" === t.pathname
                    ? r.default.createElement(i.Redirect, {
                        to: g.default[0].redirect,
                      })
                    : r.default.createElement(
                        s.default,
                        null,
                        r.default.createElement(
                          h.default,
                          null,
                          r.default.createElement(
                            d.TransitionGroup,
                            null,
                            r.default.createElement(
                              d.Transition,
                              { timeout: 300, key: t.key, appear: !0 },
                              function(e) {
                                return r.default.createElement(
                                  i.Switch,
                                  { location: t },
                                  g.default.map(function(t, l) {
                                    return r.default.createElement(i.Route, {
                                      key: l,
                                      exact: !0,
                                      path: t.path,
                                      render: function() {
                                        return r.default.createElement(
                                          "div",
                                          {
                                            style: {
                                              display:
                                                "entering" === e
                                                  ? "none"
                                                  : "block",
                                            },
                                          },
                                          r.default.createElement(
                                            E.default,
                                            { load: t.component },
                                            function(t) {
                                              return t
                                                ? r.default.createElement(t, {
                                                    transitionStatus: e,
                                                  })
                                                : null;
                                            }
                                          )
                                        );
                                      },
                                    });
                                  })
                                );
                              }
                            )
                          )
                        )
                      );
                },
              })
            )
          );
        };
      (M.propTypes = {
        basePath: c.default.string.isRequired,
        store: c.default.objectOf(c.default.any).isRequired,
      }),
        (t.default = M);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = l(596),
        r = a(f),
        n = l(600),
        c = a(n),
        u = l(251),
        i = a(u);
      e.exports = {
        Transition: i.default,
        TransitionGroup: c.default,
        CSSTransition: r.default,
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        u = l(2),
        i = (function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var l in e)
              Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
          return (t.default = e), t;
        })(u),
        d = l(597),
        o = a(d),
        s = l(599),
        p = a(s),
        h = l(1),
        m = a(h),
        E = l(251),
        v = a(E),
        g = l(252),
        M = function(e, t) {
          return (
            t &&
            t.split(" ").forEach(function(t) {
              return (0, o.default)(e, t);
            })
          );
        },
        b = function(e, t) {
          return (
            t &&
            t.split(" ").forEach(function(t) {
              return (0, p.default)(e, t);
            })
          );
        },
        z =
          (c({}, v.default.propTypes, {
            classNames: g.classNamesShape,
            onEnter: i.func,
            onEntering: i.func,
            onEntered: i.func,
            onExit: i.func,
            onExiting: i.func,
            onExited: i.func,
          }),
          (function(e) {
            function t() {
              var l, a, n;
              f(this, t);
              for (var c = arguments.length, u = Array(c), i = 0; i < c; i++)
                u[i] = arguments[i];
              return (
                (l = a = r(this, e.call.apply(e, [this].concat(u)))),
                (a.onEnter = function(e, t) {
                  var l = a.getClassNames(t ? "appear" : "enter"),
                    f = l.className;
                  a.removeClasses(e, "exit"),
                    M(e, f),
                    a.props.onEnter && a.props.onEnter(e);
                }),
                (a.onEntering = function(e, t) {
                  var l = a.getClassNames(t ? "appear" : "enter"),
                    f = l.activeClassName;
                  a.reflowAndAddClass(e, f),
                    a.props.onEntering && a.props.onEntering(e);
                }),
                (a.onEntered = function(e, t) {
                  a.removeClasses(e, t ? "appear" : "enter"),
                    a.props.onEntered && a.props.onEntered(e);
                }),
                (a.onExit = function(e) {
                  var t = a.getClassNames("exit"),
                    l = t.className;
                  a.removeClasses(e, "appear"),
                    a.removeClasses(e, "enter"),
                    M(e, l),
                    a.props.onExit && a.props.onExit(e);
                }),
                (a.onExiting = function(e) {
                  var t = a.getClassNames("exit"),
                    l = t.activeClassName;
                  a.reflowAndAddClass(e, l),
                    a.props.onExiting && a.props.onExiting(e);
                }),
                (a.onExited = function(e) {
                  a.removeClasses(e, "exit"),
                    a.props.onExited && a.props.onExited(e);
                }),
                (a.getClassNames = function(e) {
                  var t = a.props.classNames,
                    l = "string" != typeof t ? t[e] : t + "-" + e;
                  return {
                    className: l,
                    activeClassName:
                      "string" != typeof t ? t[e + "Active"] : l + "-active",
                  };
                }),
                (n = l),
                r(a, n)
              );
            }
            return (
              n(t, e),
              (t.prototype.removeClasses = function(e, t) {
                var l = this.getClassNames(t),
                  a = l.className,
                  f = l.activeClassName;
                a && b(e, a), f && b(e, f);
              }),
              (t.prototype.reflowAndAddClass = function(e, t) {
                e.scrollTop, M(e, t);
              }),
              (t.prototype.render = function() {
                var e = c({}, this.props);
                return (
                  delete e.classNames,
                  m.default.createElement(
                    v.default,
                    c({}, e, {
                      onEnter: this.onEnter,
                      onEntered: this.onEntered,
                      onEntering: this.onEntering,
                      onExit: this.onExit,
                      onExiting: this.onExiting,
                      onExited: this.onExited,
                    })
                  )
                );
              }),
              t
            );
          })(m.default.Component));
      (z.propTypes = {}), (t.default = z), (e.exports = t.default);
    },
    function(e, t, l) {
      "use strict";
      function a(e, t) {
        e.classList
          ? e.classList.add(t)
          : (0, r.default)(e) || (e.className = e.className + " " + t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      var f = l(598),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(f);
      e.exports = t.default;
    },
    function(e, t, l) {
      "use strict";
      function a(e, t) {
        return e.classList
          ? !!t && e.classList.contains(t)
          : -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = a),
        (e.exports = t.default);
    },
    function(e, t, l) {
      "use strict";
      e.exports = function(e, t) {
        e.classList
          ? e.classList.remove(t)
          : (e.className = e.className
              .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
              .replace(/\s+/g, " ")
              .replace(/^\s*|\s*$/g, ""));
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var l = {};
        for (var a in e)
          t.indexOf(a) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]));
        return l;
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      t.__esModule = !0;
      var u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = arguments[t];
              for (var a in l)
                Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
            }
            return e;
          },
        i = l(2),
        d = a(i),
        o = l(1),
        s = a(o),
        p = l(601),
        h =
          Object.values ||
          function(e) {
            return Object.keys(e).map(function(t) {
              return e[t];
            });
          },
        m =
          (d.default.any,
          d.default.node,
          d.default.bool,
          d.default.bool,
          d.default.bool,
          d.default.func,
          {
            component: "div",
            childFactory: function(e) {
              return e;
            },
          }),
        E = (function(e) {
          function t(l, a) {
            r(this, t);
            var f = n(this, e.call(this, l, a));
            return (
              (f.handleExited = function(e, t, l) {
                var a = (0, p.getChildMapping)(f.props.children);
                e in a ||
                  (l && l(t),
                  f.setState(function(t) {
                    var l = u({}, t.children);
                    return delete l[e], { children: l };
                  }));
              }),
              (f.state = {
                children: (0, p.getChildMapping)(l.children, function(e) {
                  var t = function(t) {
                    f.handleExited(e.key, t, e.props.onExited);
                  };
                  return (0,
                  o.cloneElement)(e, { onExited: t, in: !0, appear: f.getProp(e, "appear"), enter: f.getProp(e, "enter"), exit: f.getProp(e, "exit") });
                }),
              }),
              f
            );
          }
          return (
            c(t, e),
            (t.prototype.getChildContext = function() {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (t.prototype.getProp = function(e, t) {
              var l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.props;
              return null != l[t] ? l[t] : e.props[t];
            }),
            (t.prototype.componentDidMount = function() {
              this.appeared = !0;
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              var t = this,
                l = this.state.children,
                a = (0, p.getChildMapping)(e.children),
                f = (0, p.mergeChildMappings)(l, a);
              Object.keys(f).forEach(function(r) {
                var n = f[r];
                if ((0, o.isValidElement)(n)) {
                  var c = function(e) {
                      t.handleExited(n.key, e, n.props.onExited);
                    },
                    u = r in l,
                    i = r in a,
                    d = l[r],
                    s = (0, o.isValidElement)(d) && !d.props.in;
                  !i || (u && !s)
                    ? i || !u || s
                      ? i &&
                        u &&
                        (0, o.isValidElement)(d) &&
                        (f[r] = (0, o.cloneElement)(n, {
                          onExited: c,
                          in: d.props.in,
                          exit: t.getProp(n, "exit", e),
                          enter: t.getProp(n, "enter", e),
                        }))
                      : (f[r] = (0, o.cloneElement)(n, { in: !1 }))
                    : (f[r] = (0, o.cloneElement)(n, {
                        onExited: c,
                        in: !0,
                        exit: t.getProp(n, "exit", e),
                        enter: t.getProp(n, "enter", e),
                      }));
                }
              }),
                this.setState({ children: f });
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.component,
                l = e.childFactory,
                a = f(e, ["component", "childFactory"]),
                r = this.state.children;
              return (
                delete a.appear,
                delete a.enter,
                delete a.exit,
                s.default.createElement(t, a, h(r).map(l))
              );
            }),
            t
          );
        })(s.default.Component);
      (E.childContextTypes = { transitionGroup: d.default.object.isRequired }),
        (E.propTypes = {}),
        (E.defaultProps = m),
        (t.default = E),
        (e.exports = t.default);
    },
    function(e, t, l) {
      "use strict";
      function a(e, t) {
        var l = function(e) {
            return t && (0, r.isValidElement)(e) ? t(e) : e;
          },
          a = Object.create(null);
        return (
          e &&
            r.Children.map(e, function(e) {
              return e;
            }).forEach(function(e) {
              a[e.key] = l(e);
            }),
          a
        );
      }
      function f(e, t) {
        function l(l) {
          return l in t ? t[l] : e[l];
        }
        (e = e || {}), (t = t || {});
        var a = Object.create(null),
          f = [];
        for (var r in e)
          r in t ? f.length && ((a[r] = f), (f = [])) : f.push(r);
        var n = void 0,
          c = {};
        for (var u in t) {
          if (a[u])
            for (n = 0; n < a[u].length; n++) {
              var i = a[u][n];
              c[a[u][n]] = l(i);
            }
          c[u] = l(u);
        }
        for (n = 0; n < f.length; n++) c[f[n]] = l(f[n]);
        return c;
      }
      (t.__esModule = !0), (t.getChildMapping = a), (t.mergeChildMappings = f);
      var r = l(1);
    },
    function(e, t) {},
    function(e, t) {
      e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var l = t.protocol + "//" + t.host,
          a = l + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var f = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(f))
              return e;
            var r;
            return (
              (r =
                0 === f.indexOf("//")
                  ? f
                  : 0 === f.indexOf("/")
                  ? l + f
                  : a + f.replace(/^\.\//, "")),
              "url(" + JSON.stringify(r) + ")"
            );
          }
        );
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e) {
        if (Array.isArray(e)) {
          for (var t = 0, l = Array(e.length); t < e.length; t++) l[t] = e[t];
          return l;
        }
        return Array.from(e);
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })(),
        i = l(1),
        d = l(2),
        o = a(d),
        s = l(58),
        p = l(81),
        h = l(47),
        m = l(102),
        E = a(m),
        v = l(60),
        g = l(239),
        M = function(e) {
          return { farthestPath: e.path.farthestPath };
        },
        b = function(e) {
          return {
            onRouteChange: function(t, l) {
              e((0, g.storePaths)(t, l));
            },
          };
        },
        z = (function(e) {
          function t() {
            var e, l, a, c;
            r(this, t);
            for (var u = arguments.length, i = Array(u), d = 0; d < u; d++)
              i[d] = arguments[d];
            return (
              (l = a = n(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(i)
                )
              )),
              (a.getContentPaths = function() {
                return h.without.apply(
                  void 0,
                  [(0, v.pathsFromRoutes)(E.default)].concat(
                    f(m.nonContentPaths)
                  )
                );
              }),
              (a.getFarthestPath = function(e) {
                var t = a.props.farthestPath,
                  l = (0, v.trimPath)(e),
                  f = a.getContentPaths();
                return f.includes(l) &&
                  (f.indexOf(l) > f.indexOf(t) || null === l)
                  ? l
                  : t;
              }),
              (c = l),
              n(a, c)
            );
          }
          return (
            c(t, e),
            u(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e = this.props,
                    t = e.location;
                  (0, e.onRouteChange)(
                    t.pathname,
                    this.getFarthestPath(t.pathname)
                  );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  var t = this.props.onRouteChange;
                  e.location.pathname !== e.currentPath &&
                    t(
                      e.location.pathname,
                      this.getFarthestPath(e.location.pathname)
                    );
                },
              },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                },
              },
            ]),
            t
          );
        })(i.Component);
      (z.defaultProps = { currentPath: null, farthestPath: null }),
        (z.propTypes = {
          children: o.default.node.isRequired,
          currentPath: o.default.string,
          farthestPath: o.default.string,
          location: o.default.shape({ pathname: o.default.string }).isRequired,
          onRouteChange: o.default.func.isRequired,
        }),
        (t.default = (0, h.flow)((0, s.connect)(M, b), p.withRouter)(z));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(606),
        r = a(f),
        n = l(615),
        c = a(n),
        u = l(616),
        i = a(u),
        d = l(617),
        o = a(d),
        s = l(618),
        p = a(s);
      t.default = [
        { path: "/intro", title: "Get Started", component: r.default },
        { path: "/intro/how-will-you-pay", component: c.default },
        { path: "/intro/destination", component: i.default },
        { path: "/intro/character", component: o.default },
        { path: "/intro/confidence-rating", component: p.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(7)
          .then(
            function(t) {
              e(l(747));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(158),
        o = a(d),
        s = function(e) {
          var t = e.children,
            l = e.className;
          return r.default.createElement(
            "div",
            { className: (0, i.default)(o.default.container, l) },
            t
          );
        };
      (s.defaultProps = { className: null }),
        (s.propTypes = {
          children: c.default.node.isRequired,
          className: c.default.string,
        }),
        (t.default = s);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(158),
        o = a(d),
        s = function(e) {
          var t = e.center,
            l = e.children,
            a = e.className,
            f = e.column,
            n = e.vcenter;
          return r.default.createElement(
            "div",
            {
              className: (0, i.default)(
                o.default.row,
                t && o.default.center,
                f && o.default.column,
                n && o.default.vcenter,
                a
              ),
            },
            l
          );
        };
      (s.defaultProps = {
        center: !1,
        className: null,
        column: !1,
        vcenter: !1,
      }),
        (s.propTypes = {
          center: c.default.bool,
          children: c.default.node.isRequired,
          className: c.default.string,
          column: c.default.bool,
          vcenter: c.default.bool,
        }),
        (t.default = s);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(158),
        o = a(d),
        s = function(e) {
          var t = e.children,
            l = e.className,
            a = e.small,
            f = e.medium,
            n = e.large,
            c = e.pushSmall,
            u = e.pushMedium,
            d = e.pushLarge,
            s = (0, i.default)(
              a ? o.default["columnSmall" + a] : null,
              f ? o.default["columnMedium" + f] : null,
              n ? o.default["columnLarge" + n] : null,
              c ? o.default["pushSmall" + c] : null,
              u ? o.default["pushMedium" + u] : null,
              d ? o.default["pushLarge" + d] : null,
              l
            );
          return r.default.createElement("div", { className: s }, t);
        };
      (s.defaultProps = {
        children: null,
        className: null,
        small: null,
        medium: null,
        large: null,
        pushSmall: null,
        pushMedium: null,
        pushLarge: null,
      }),
        (s.propTypes = {
          children: c.default.node,
          className: c.default.string,
          small: c.default.oneOfType([c.default.number, c.default.string]),
          medium: c.default.oneOfType([c.default.number, c.default.string]),
          large: c.default.oneOfType([c.default.number, c.default.string]),
          pushSmall: c.default.number,
          pushMedium: c.default.number,
          pushLarge: c.default.number,
        }),
        (t.default = s);
    },
    function(e, t, l) {
      function a(e) {
        return f.createElement("svg", e, [
          f.createElement("defs", { key: 0 }, [
            f.createElement("path", {
              id: "logo-b",
              d:
                "M0 13s66.7878 9.223 100.35 9.6758c33.5622.4526 399.3925 0 399.3925 0L608.297 15s-16.874 30-14.981 30c1.893 0 14.981 28.9883 14.981 28.9883S532.639 65.42 499.7424 65.621c-25.3777.1552-213.4735 4.7743-399.3925 8.3673C45.2663 75.0528 0 79 0 79l19.2773-33L0 13z",
              key: 0,
            }),
            f.createElement(
              "filter",
              {
                id: "logo-a",
                width: "102.3%",
                height: "121.2%",
                x: "-1.2%",
                y: "-7.6%",
                filterUnits: "objectBoundingBox",
                key: 1,
              },
              [
                f.createElement("feOffset", {
                  dy: "2",
                  in: "SourceAlpha",
                  result: "shadowOffsetOuter1",
                  key: 0,
                }),
                f.createElement("feGaussianBlur", {
                  stdDeviation: "2",
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  key: 1,
                }),
                f.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
                  in: "shadowBlurOuter1",
                  key: 2,
                }),
              ]
            ),
            f.createElement("path", {
              id: "logo-d",
              d:
                "M29 0s258.5872 5 372.2422 5c113.655 0 174.203-5 174.203-5s-7.0526 28.5052-7.0526 44c0 15.4948 7.0527 44 7.0527 44l-174.164-3L29 88s8.082-30.1055 8.082-44S29 0 29 0z",
              key: 2,
            }),
            f.createElement(
              "filter",
              {
                id: "logo-c",
                width: "105.1%",
                height: "131.8%",
                x: "-1.8%",
                y: "-12.5%",
                filterUnits: "objectBoundingBox",
                key: 3,
              },
              [
                f.createElement("feOffset", {
                  dx: "4",
                  dy: "3",
                  in: "SourceAlpha",
                  result: "shadowOffsetOuter1",
                  key: 0,
                }),
                f.createElement("feGaussianBlur", {
                  stdDeviation: "4",
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  key: 1,
                }),
                f.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0",
                  in: "shadowBlurOuter1",
                  key: 2,
                }),
              ]
            ),
            f.createElement(
              "text",
              {
                id: "logo-f",
                fill: "#FFF",
                fontFamily: "MrEavesBold",
                fontSize: "60",
                key: 4,
              },
              f.createElement(
                "tspan",
                { x: "95", y: "60" },
                "Financial Pur$uit"
              )
            ),
            f.createElement(
              "filter",
              {
                id: "logo-e",
                width: "103.3%",
                height: "119.4%",
                x: "-1.7%",
                y: "-6.9%",
                filterUnits: "objectBoundingBox",
                key: 5,
              },
              [
                f.createElement("feOffset", {
                  dy: "2",
                  in: "SourceAlpha",
                  result: "shadowOffsetOuter1",
                  key: 0,
                }),
                f.createElement("feGaussianBlur", {
                  stdDeviation: "2",
                  in: "shadowOffsetOuter1",
                  result: "shadowBlurOuter1",
                  key: 1,
                }),
                f.createElement("feColorMatrix", {
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
                  in: "shadowBlurOuter1",
                  key: 2,
                }),
              ]
            ),
          ]),
          f.createElement("g", { fill: "none", fillRule: "evenodd", key: 1 }, [
            f.createElement("g", { transform: "translate(1)", key: 0 }, [
              f.createElement("use", {
                fill: "#000",
                filter: "url(#logo-a)",
                xlinkHref: "#logo-b",
                key: 0,
              }),
              f.createElement("use", {
                fill: "#87C7E1",
                xlinkHref: "#logo-b",
                key: 1,
              }),
            ]),
            f.createElement("g", { transform: "translate(1)", key: 1 }, [
              f.createElement("use", {
                fill: "#000",
                filter: "url(#logo-c)",
                xlinkHref: "#logo-d",
                key: 0,
              }),
              f.createElement("use", {
                fill: "#1587D2",
                xlinkHref: "#logo-d",
                key: 1,
              }),
            ]),
            f.createElement(
              "g",
              { fill: "#FFF", transform: "translate(1)", key: 2 },
              [
                f.createElement("use", {
                  filter: "url(#logo-e)",
                  xlinkHref: "#logo-f",
                  key: 0,
                }),
                f.createElement("use", { xlinkHref: "#logo-f", key: 1 }),
              ]
            ),
          ]),
        ]);
      }
      var f = l(1);
      (a.displayName = "LogoImg"),
        (a.defaultProps = { viewBox: "0 0 613 88" }),
        (e.exports = a),
        (a.default = a);
    },
    function(e, t) {
      e.exports = { wrapper: "wrapper-Zu_SU" };
    },
    function(e, t) {
      e.exports = { logo: "logo-2fZ6a" };
    },
    function(e, t) {
      e.exports = {
        strong: "strong-ssjr1",
        caps: "caps-18rR6",
        center: "center-2017r",
      };
    },
    function(e, t) {
      e.exports = {
        fa: "fa-3PVHj",
        "fa-lg": "fa-lg-15Bg-",
        "fa-2x": "fa-2x-_ZFMZ",
        "fa-3x": "fa-3x-3Bnwk",
        "fa-4x": "fa-4x-2S7fO",
        "fa-5x": "fa-5x-1AQ98",
        "fa-fw": "fa-fw-1N2Mj",
        "fa-ul": "fa-ul-2OuGI",
        "fa-li": "fa-li-2Z5-x",
        "fa-border": "fa-border-2anY9",
        "fa-pull-left": "fa-pull-left-2S9R0",
        "fa-pull-right": "fa-pull-right-2bNLp",
        "pull-right": "pull-right-3w5Y4",
        "pull-left": "pull-left-hBqbw",
        "fa-spin": "fa-spin-36nWB",
        "fa-pulse": "fa-pulse-1wNoD",
        "fa-rotate-90": "fa-rotate-90-chGpk",
        "fa-rotate-180": "fa-rotate-180-xpyhJ",
        "fa-rotate-270": "fa-rotate-270-1db1G",
        "fa-flip-horizontal": "fa-flip-horizontal-V6sIW",
        "fa-flip-vertical": "fa-flip-vertical-jtolY",
        "fa-stack": "fa-stack-LlF47",
        "fa-stack-1x": "fa-stack-1x-85K0F",
        "fa-stack-2x": "fa-stack-2x-2AwIe",
        "fa-inverse": "fa-inverse-2m3Sy",
        "fa-glass": "fa-glass-2ZiYS",
        "fa-music": "fa-music-3RrO5",
        "fa-search": "fa-search-3o9Cm",
        "fa-envelope-o": "fa-envelope-o-1pvcm",
        "fa-heart": "fa-heart-ygfGY",
        "fa-star": "fa-star-15mSq",
        "fa-star-o": "fa-star-o-3LGEU",
        "fa-user": "fa-user-ezfoX",
        "fa-film": "fa-film-2CRt5",
        "fa-th-large": "fa-th-large-1IYMZ",
        "fa-th": "fa-th-3Z5m9",
        "fa-th-list": "fa-th-list-3e9T7",
        "fa-check": "fa-check-2fcn1",
        "fa-remove": "fa-remove-lH7f5",
        "fa-close": "fa-close-3Qbqf",
        "fa-times": "fa-times-35Fbc",
        "fa-search-plus": "fa-search-plus-7mMOK",
        "fa-search-minus": "fa-search-minus-2i2CT",
        "fa-power-off": "fa-power-off-8MVpz",
        "fa-signal": "fa-signal-WStwZ",
        "fa-gear": "fa-gear-3NfgH",
        "fa-cog": "fa-cog-3s6WX",
        "fa-trash-o": "fa-trash-o-1e2wF",
        "fa-home": "fa-home-1WAzk",
        "fa-file-o": "fa-file-o-2B_4L",
        "fa-clock-o": "fa-clock-o-1KdrL",
        "fa-road": "fa-road-2aASr",
        "fa-download": "fa-download-1mbhd",
        "fa-arrow-circle-o-down": "fa-arrow-circle-o-down-3h0oM",
        "fa-arrow-circle-o-up": "fa-arrow-circle-o-up-1YxIw",
        "fa-inbox": "fa-inbox-1wdW-",
        "fa-play-circle-o": "fa-play-circle-o-1GqoY",
        "fa-rotate-right": "fa-rotate-right-3CylE",
        "fa-repeat": "fa-repeat-2rvHi",
        "fa-refresh": "fa-refresh-3Rs4Z",
        "fa-list-alt": "fa-list-alt-2718-",
        "fa-lock": "fa-lock-3PftY",
        "fa-flag": "fa-flag-3h_Zt",
        "fa-headphones": "fa-headphones-BzmQe",
        "fa-volume-off": "fa-volume-off-1F8wI",
        "fa-volume-down": "fa-volume-down-3b-EO",
        "fa-volume-up": "fa-volume-up-280ZE",
        "fa-qrcode": "fa-qrcode-3xk12",
        "fa-barcode": "fa-barcode-22kyN",
        "fa-tag": "fa-tag-1tIsV",
        "fa-tags": "fa-tags-UDRgj",
        "fa-book": "fa-book-1px8M",
        "fa-bookmark": "fa-bookmark-1s_Yl",
        "fa-print": "fa-print-Q7Zlk",
        "fa-camera": "fa-camera-10BYZ",
        "fa-font": "fa-font-Q4u6D",
        "fa-bold": "fa-bold-2osbS",
        "fa-italic": "fa-italic-18DRb",
        "fa-text-height": "fa-text-height-N0P-t",
        "fa-text-width": "fa-text-width-gwA5O",
        "fa-align-left": "fa-align-left-taAwk",
        "fa-align-center": "fa-align-center-We9o0",
        "fa-align-right": "fa-align-right-39pLP",
        "fa-align-justify": "fa-align-justify-2ayDB",
        "fa-list": "fa-list-1z8Ct",
        "fa-dedent": "fa-dedent-2go-G",
        "fa-outdent": "fa-outdent-Pr-Bx",
        "fa-indent": "fa-indent-23PEN",
        "fa-video-camera": "fa-video-camera-r57Pw",
        "fa-photo": "fa-photo-2Karq",
        "fa-image": "fa-image-1BuIE",
        "fa-picture-o": "fa-picture-o-21YoW",
        "fa-pencil": "fa-pencil-RnYxA",
        "fa-map-marker": "fa-map-marker-1zTBq",
        "fa-adjust": "fa-adjust-1Grmg",
        "fa-tint": "fa-tint-2MKv5",
        "fa-edit": "fa-edit-D_KK9",
        "fa-pencil-square-o": "fa-pencil-square-o-HD9Zz",
        "fa-share-square-o": "fa-share-square-o-1Ni9C",
        "fa-check-square-o": "fa-check-square-o-DYeIs",
        "fa-arrows": "fa-arrows-1PEjH",
        "fa-step-backward": "fa-step-backward-39y6O",
        "fa-fast-backward": "fa-fast-backward-2RfoE",
        "fa-backward": "fa-backward-OHyiX",
        "fa-play": "fa-play-QcLas",
        "fa-pause": "fa-pause-2plvz",
        "fa-stop": "fa-stop-2-mQr",
        "fa-forward": "fa-forward-2flR8",
        "fa-fast-forward": "fa-fast-forward-3zRgc",
        "fa-step-forward": "fa-step-forward-3hApI",
        "fa-eject": "fa-eject-C6wyh",
        "fa-chevron-left": "fa-chevron-left-yxcA6",
        "fa-chevron-right": "fa-chevron-right-3TREK",
        "fa-plus-circle": "fa-plus-circle-AMR4D",
        "fa-minus-circle": "fa-minus-circle-WA0rN",
        "fa-times-circle": "fa-times-circle-2CBsa",
        "fa-check-circle": "fa-check-circle-2VJ_l",
        "fa-question-circle": "fa-question-circle-exfgD",
        "fa-info-circle": "fa-info-circle-2iDQD",
        "fa-crosshairs": "fa-crosshairs-373cs",
        "fa-times-circle-o": "fa-times-circle-o-QlPU8",
        "fa-check-circle-o": "fa-check-circle-o-34A_x",
        "fa-ban": "fa-ban-1Pbqs",
        "fa-arrow-left": "fa-arrow-left-2D8lH",
        "fa-arrow-right": "fa-arrow-right-2PNwj",
        "fa-arrow-up": "fa-arrow-up-3mGAa",
        "fa-arrow-down": "fa-arrow-down-nQ8gz",
        "fa-mail-forward": "fa-mail-forward-1scVZ",
        "fa-share": "fa-share-2APiT",
        "fa-expand": "fa-expand-1WkFg",
        "fa-compress": "fa-compress-128fx",
        "fa-plus": "fa-plus-TH8Dr",
        "fa-minus": "fa-minus-2bL0w",
        "fa-asterisk": "fa-asterisk-3Hoco",
        "fa-exclamation-circle": "fa-exclamation-circle-ZhoyQ",
        "fa-gift": "fa-gift-3Zw1x",
        "fa-leaf": "fa-leaf-2UfA_",
        "fa-fire": "fa-fire-YzazT",
        "fa-eye": "fa-eye-3qIQp",
        "fa-eye-slash": "fa-eye-slash-1pYFt",
        "fa-warning": "fa-warning-36tWE",
        "fa-exclamation-triangle": "fa-exclamation-triangle-3G2ih",
        "fa-plane": "fa-plane-3Qj4U",
        "fa-calendar": "fa-calendar-_BE4T",
        "fa-random": "fa-random-2aG0l",
        "fa-comment": "fa-comment-J0Sn1",
        "fa-magnet": "fa-magnet-amLcd",
        "fa-chevron-up": "fa-chevron-up-eGr5m",
        "fa-chevron-down": "fa-chevron-down-3zGVJ",
        "fa-retweet": "fa-retweet-2-fo1",
        "fa-shopping-cart": "fa-shopping-cart-1zHGX",
        "fa-folder": "fa-folder-1u3sp",
        "fa-folder-open": "fa-folder-open-M6CQ1",
        "fa-arrows-v": "fa-arrows-v-C9ni9",
        "fa-arrows-h": "fa-arrows-h-33OiJ",
        "fa-bar-chart-o": "fa-bar-chart-o-2z84r",
        "fa-bar-chart": "fa-bar-chart-12Q4P",
        "fa-twitter-square": "fa-twitter-square-1d-XE",
        "fa-facebook-square": "fa-facebook-square-2fnOk",
        "fa-camera-retro": "fa-camera-retro-3qoCy",
        "fa-key": "fa-key-n6B4x",
        "fa-gears": "fa-gears-1DLEM",
        "fa-cogs": "fa-cogs-gSoF5",
        "fa-comments": "fa-comments-18lro",
        "fa-thumbs-o-up": "fa-thumbs-o-up-nnpvD",
        "fa-thumbs-o-down": "fa-thumbs-o-down-2XSmB",
        "fa-star-half": "fa-star-half-1ATfS",
        "fa-heart-o": "fa-heart-o-3Kd68",
        "fa-sign-out": "fa-sign-out-3c9W1",
        "fa-linkedin-square": "fa-linkedin-square-3VTc2",
        "fa-thumb-tack": "fa-thumb-tack-1r38P",
        "fa-external-link": "fa-external-link-3qPy8",
        "fa-sign-in": "fa-sign-in-32_mH",
        "fa-trophy": "fa-trophy-4YOY5",
        "fa-github-square": "fa-github-square-1oEap",
        "fa-upload": "fa-upload-2h3Tw",
        "fa-lemon-o": "fa-lemon-o-3wPPH",
        "fa-phone": "fa-phone-QmqOe",
        "fa-square-o": "fa-square-o-28vpG",
        "fa-bookmark-o": "fa-bookmark-o-1JpEY",
        "fa-phone-square": "fa-phone-square-3iPbD",
        "fa-twitter": "fa-twitter-20ot7",
        "fa-facebook-f": "fa-facebook-f-1Bbih",
        "fa-facebook": "fa-facebook-1GPqD",
        "fa-github": "fa-github-2arLq",
        "fa-unlock": "fa-unlock-1C-WG",
        "fa-credit-card": "fa-credit-card-tn0oh",
        "fa-feed": "fa-feed-1GfZg",
        "fa-rss": "fa-rss-23lfH",
        "fa-hdd-o": "fa-hdd-o-eG2MB",
        "fa-bullhorn": "fa-bullhorn-3FKaZ",
        "fa-bell": "fa-bell-2w_KV",
        "fa-certificate": "fa-certificate-2PoEu",
        "fa-hand-o-right": "fa-hand-o-right-33fTo",
        "fa-hand-o-left": "fa-hand-o-left-3REfo",
        "fa-hand-o-up": "fa-hand-o-up-3tknb",
        "fa-hand-o-down": "fa-hand-o-down-1TtPq",
        "fa-arrow-circle-left": "fa-arrow-circle-left-2J7P9",
        "fa-arrow-circle-right": "fa-arrow-circle-right-2PPvQ",
        "fa-arrow-circle-up": "fa-arrow-circle-up-V-3cf",
        "fa-arrow-circle-down": "fa-arrow-circle-down-2NkeE",
        "fa-globe": "fa-globe-3AYLQ",
        "fa-wrench": "fa-wrench-2ntuh",
        "fa-tasks": "fa-tasks-3E90c",
        "fa-filter": "fa-filter-3xmGl",
        "fa-briefcase": "fa-briefcase-3kBpb",
        "fa-arrows-alt": "fa-arrows-alt-3RPQO",
        "fa-group": "fa-group-1lr8L",
        "fa-users": "fa-users-jXRSH",
        "fa-chain": "fa-chain-vAfiA",
        "fa-link": "fa-link-2HCYc",
        "fa-cloud": "fa-cloud-27ik4",
        "fa-flask": "fa-flask-2FBnW",
        "fa-cut": "fa-cut-uAAJe",
        "fa-scissors": "fa-scissors-QfMjY",
        "fa-copy": "fa-copy-2wASz",
        "fa-files-o": "fa-files-o-3QeJU",
        "fa-paperclip": "fa-paperclip-2E2Wu",
        "fa-save": "fa-save-3te94",
        "fa-floppy-o": "fa-floppy-o-36IMk",
        "fa-square": "fa-square-3w3tO",
        "fa-navicon": "fa-navicon-2UURY",
        "fa-reorder": "fa-reorder-L3gVo",
        "fa-bars": "fa-bars-MFrww",
        "fa-list-ul": "fa-list-ul-zpZkU",
        "fa-list-ol": "fa-list-ol-2RzQ4",
        "fa-strikethrough": "fa-strikethrough-PeTW1",
        "fa-underline": "fa-underline-3td5R",
        "fa-table": "fa-table-3NrlN",
        "fa-magic": "fa-magic-3y0_l",
        "fa-truck": "fa-truck-1NTZN",
        "fa-pinterest": "fa-pinterest-1_EAl",
        "fa-pinterest-square": "fa-pinterest-square-3ZkuL",
        "fa-google-plus-square": "fa-google-plus-square-24K6b",
        "fa-google-plus": "fa-google-plus-3BdFU",
        "fa-money": "fa-money-13sTL",
        "fa-caret-down": "fa-caret-down-kfMaB",
        "fa-caret-up": "fa-caret-up-21MHg",
        "fa-caret-left": "fa-caret-left-3qzbh",
        "fa-caret-right": "fa-caret-right-3T8iX",
        "fa-columns": "fa-columns-3ONf3",
        "fa-unsorted": "fa-unsorted-2Lu56",
        "fa-sort": "fa-sort-1agOp",
        "fa-sort-down": "fa-sort-down-13mnz",
        "fa-sort-desc": "fa-sort-desc-3fMd_",
        "fa-sort-up": "fa-sort-up-3Zjqr",
        "fa-sort-asc": "fa-sort-asc-3-e2V",
        "fa-envelope": "fa-envelope-2oe7U",
        "fa-linkedin": "fa-linkedin-1U7tp",
        "fa-rotate-left": "fa-rotate-left-1Yl_E",
        "fa-undo": "fa-undo-3_gxx",
        "fa-legal": "fa-legal-2zx5b",
        "fa-gavel": "fa-gavel-7IyIM",
        "fa-dashboard": "fa-dashboard-3dUFo",
        "fa-tachometer": "fa-tachometer-2xO0Z",
        "fa-comment-o": "fa-comment-o-298ls",
        "fa-comments-o": "fa-comments-o-1gvy0",
        "fa-flash": "fa-flash-32qWn",
        "fa-bolt": "fa-bolt-2-j2Q",
        "fa-sitemap": "fa-sitemap-1iXS8",
        "fa-umbrella": "fa-umbrella-29pix",
        "fa-paste": "fa-paste-1eRGm",
        "fa-clipboard": "fa-clipboard-cwcgf",
        "fa-lightbulb-o": "fa-lightbulb-o-3NP2T",
        "fa-exchange": "fa-exchange-2aSWJ",
        "fa-cloud-download": "fa-cloud-download-O1-Vc",
        "fa-cloud-upload": "fa-cloud-upload-1q7cO",
        "fa-user-md": "fa-user-md-2lRkn",
        "fa-stethoscope": "fa-stethoscope-24SqD",
        "fa-suitcase": "fa-suitcase-3MGtk",
        "fa-bell-o": "fa-bell-o-24HFN",
        "fa-coffee": "fa-coffee-3wjNO",
        "fa-cutlery": "fa-cutlery-1hsQE",
        "fa-file-text-o": "fa-file-text-o-19TyD",
        "fa-building-o": "fa-building-o-366GL",
        "fa-hospital-o": "fa-hospital-o-2tHPk",
        "fa-ambulance": "fa-ambulance-1MZhP",
        "fa-medkit": "fa-medkit-3d-eX",
        "fa-fighter-jet": "fa-fighter-jet-3sgBV",
        "fa-beer": "fa-beer-1jFp1",
        "fa-h-square": "fa-h-square-12P39",
        "fa-plus-square": "fa-plus-square-2k5z_",
        "fa-angle-double-left": "fa-angle-double-left-2gLvQ",
        "fa-angle-double-right": "fa-angle-double-right-39QPh",
        "fa-angle-double-up": "fa-angle-double-up-3yMfL",
        "fa-angle-double-down": "fa-angle-double-down-1yu3l",
        "fa-angle-left": "fa-angle-left-3FwX9",
        "fa-angle-right": "fa-angle-right-2uf5o",
        "fa-angle-up": "fa-angle-up-2THro",
        "fa-angle-down": "fa-angle-down-21cN5",
        "fa-desktop": "fa-desktop-1ZheM",
        "fa-laptop": "fa-laptop-1sRgy",
        "fa-tablet": "fa-tablet-2UtVS",
        "fa-mobile-phone": "fa-mobile-phone-2_pxH",
        "fa-mobile": "fa-mobile-1XHF3",
        "fa-circle-o": "fa-circle-o-l77Ox",
        "fa-quote-left": "fa-quote-left-X_6JH",
        "fa-quote-right": "fa-quote-right-3RF5x",
        "fa-spinner": "fa-spinner-CxFkW",
        "fa-circle": "fa-circle-2JQW-",
        "fa-mail-reply": "fa-mail-reply-v8KO2",
        "fa-reply": "fa-reply-1Ya9Q",
        "fa-github-alt": "fa-github-alt-1BEGh",
        "fa-folder-o": "fa-folder-o-6ZjAK",
        "fa-folder-open-o": "fa-folder-open-o-14pwn",
        "fa-smile-o": "fa-smile-o-6AfxG",
        "fa-frown-o": "fa-frown-o-2NG0s",
        "fa-meh-o": "fa-meh-o-2pl8B",
        "fa-gamepad": "fa-gamepad-2GWPm",
        "fa-keyboard-o": "fa-keyboard-o-qmZYn",
        "fa-flag-o": "fa-flag-o-PYyyc",
        "fa-flag-checkered": "fa-flag-checkered-H8Pzx",
        "fa-terminal": "fa-terminal-2xdQD",
        "fa-code": "fa-code-3WtRU",
        "fa-mail-reply-all": "fa-mail-reply-all-JTueU",
        "fa-reply-all": "fa-reply-all-2oMP4",
        "fa-star-half-empty": "fa-star-half-empty-orDaG",
        "fa-star-half-full": "fa-star-half-full-5R8kQ",
        "fa-star-half-o": "fa-star-half-o-1xrvm",
        "fa-location-arrow": "fa-location-arrow-Ib1iV",
        "fa-crop": "fa-crop-2mhu2",
        "fa-code-fork": "fa-code-fork-2YUgl",
        "fa-unlink": "fa-unlink-3BH9h",
        "fa-chain-broken": "fa-chain-broken-1bMT4",
        "fa-question": "fa-question-DxNX3",
        "fa-info": "fa-info-3qjGI",
        "fa-exclamation": "fa-exclamation-2WoGZ",
        "fa-superscript": "fa-superscript-3xShr",
        "fa-subscript": "fa-subscript-1DMvz",
        "fa-eraser": "fa-eraser-3vKAs",
        "fa-puzzle-piece": "fa-puzzle-piece-3ZSiB",
        "fa-microphone": "fa-microphone-2zeCO",
        "fa-microphone-slash": "fa-microphone-slash-3Tigo",
        "fa-shield": "fa-shield-1-Fil",
        "fa-calendar-o": "fa-calendar-o-399UJ",
        "fa-fire-extinguisher": "fa-fire-extinguisher-p4pFD",
        "fa-rocket": "fa-rocket-1GUPo",
        "fa-maxcdn": "fa-maxcdn-3ymID",
        "fa-chevron-circle-left": "fa-chevron-circle-left-1wAYO",
        "fa-chevron-circle-right": "fa-chevron-circle-right-3ON2-",
        "fa-chevron-circle-up": "fa-chevron-circle-up-16Z9X",
        "fa-chevron-circle-down": "fa-chevron-circle-down-1HrIM",
        "fa-html5": "fa-html5-2q7o9",
        "fa-css3": "fa-css3-2En2D",
        "fa-anchor": "fa-anchor-1QmoM",
        "fa-unlock-alt": "fa-unlock-alt-333k3",
        "fa-bullseye": "fa-bullseye-1kA17",
        "fa-ellipsis-h": "fa-ellipsis-h-J76iR",
        "fa-ellipsis-v": "fa-ellipsis-v-1Lgqz",
        "fa-rss-square": "fa-rss-square-3pLzQ",
        "fa-play-circle": "fa-play-circle-xTXMd",
        "fa-ticket": "fa-ticket-cyyCI",
        "fa-minus-square": "fa-minus-square-1Lt40",
        "fa-minus-square-o": "fa-minus-square-o-3ovZk",
        "fa-level-up": "fa-level-up-YyET8",
        "fa-level-down": "fa-level-down-3SZS5",
        "fa-check-square": "fa-check-square-wFmsC",
        "fa-pencil-square": "fa-pencil-square-pIXig",
        "fa-external-link-square": "fa-external-link-square-1AA37",
        "fa-share-square": "fa-share-square-1YjJq",
        "fa-compass": "fa-compass-1pplt",
        "fa-toggle-down": "fa-toggle-down-2bers",
        "fa-caret-square-o-down": "fa-caret-square-o-down-1J2N0",
        "fa-toggle-up": "fa-toggle-up-3Zko7",
        "fa-caret-square-o-up": "fa-caret-square-o-up-3dO-G",
        "fa-toggle-right": "fa-toggle-right-2TsDh",
        "fa-caret-square-o-right": "fa-caret-square-o-right-2OZ_n",
        "fa-euro": "fa-euro-2VPGy",
        "fa-eur": "fa-eur-2Lg3r",
        "fa-gbp": "fa-gbp-MHXHy",
        "fa-dollar": "fa-dollar-1fDlE",
        "fa-usd": "fa-usd-1ky0W",
        "fa-rupee": "fa-rupee-3gStv",
        "fa-inr": "fa-inr-usnd9",
        "fa-cny": "fa-cny-1pTHf",
        "fa-rmb": "fa-rmb-2MoyH",
        "fa-yen": "fa-yen-19BlV",
        "fa-jpy": "fa-jpy-13GaU",
        "fa-ruble": "fa-ruble-eVXlG",
        "fa-rouble": "fa-rouble-a4wn3",
        "fa-rub": "fa-rub-19OTy",
        "fa-won": "fa-won-2OY4r",
        "fa-krw": "fa-krw-2OvaA",
        "fa-bitcoin": "fa-bitcoin-3jlCG",
        "fa-btc": "fa-btc-13Or8",
        "fa-file": "fa-file-1D03K",
        "fa-file-text": "fa-file-text-1klHt",
        "fa-sort-alpha-asc": "fa-sort-alpha-asc-3Yjq7",
        "fa-sort-alpha-desc": "fa-sort-alpha-desc-2Rp_T",
        "fa-sort-amount-asc": "fa-sort-amount-asc-2dOmv",
        "fa-sort-amount-desc": "fa-sort-amount-desc-1MN6c",
        "fa-sort-numeric-asc": "fa-sort-numeric-asc-3gV1L",
        "fa-sort-numeric-desc": "fa-sort-numeric-desc-xK4fl",
        "fa-thumbs-up": "fa-thumbs-up-f7zwS",
        "fa-thumbs-down": "fa-thumbs-down-2nOWy",
        "fa-youtube-square": "fa-youtube-square-2ZEmY",
        "fa-youtube": "fa-youtube-1_Bkr",
        "fa-xing": "fa-xing-1i1zc",
        "fa-xing-square": "fa-xing-square-3utHT",
        "fa-youtube-play": "fa-youtube-play-1kbob",
        "fa-dropbox": "fa-dropbox-3pB-A",
        "fa-stack-overflow": "fa-stack-overflow-1EIHp",
        "fa-instagram": "fa-instagram-18E8e",
        "fa-flickr": "fa-flickr-1Cnxo",
        "fa-adn": "fa-adn-1eZBI",
        "fa-bitbucket": "fa-bitbucket-1Dnv1",
        "fa-bitbucket-square": "fa-bitbucket-square-34O4G",
        "fa-tumblr": "fa-tumblr-30jLV",
        "fa-tumblr-square": "fa-tumblr-square-Rb_ct",
        "fa-long-arrow-down": "fa-long-arrow-down-1rWWq",
        "fa-long-arrow-up": "fa-long-arrow-up-3YEYo",
        "fa-long-arrow-left": "fa-long-arrow-left-2Gh0V",
        "fa-long-arrow-right": "fa-long-arrow-right-3Zr1t",
        "fa-apple": "fa-apple-20fZ8",
        "fa-windows": "fa-windows-BOhFB",
        "fa-android": "fa-android-2o5Uu",
        "fa-linux": "fa-linux-3Ww7U",
        "fa-dribbble": "fa-dribbble-1myST",
        "fa-skype": "fa-skype-3AGdZ",
        "fa-foursquare": "fa-foursquare-2VOGK",
        "fa-trello": "fa-trello-29miL",
        "fa-female": "fa-female-31MA7",
        "fa-male": "fa-male-3cRTV",
        "fa-gittip": "fa-gittip-cgvOB",
        "fa-gratipay": "fa-gratipay-2oJ2X",
        "fa-sun-o": "fa-sun-o--KHpt",
        "fa-moon-o": "fa-moon-o-3Az23",
        "fa-archive": "fa-archive-38723",
        "fa-bug": "fa-bug-QtCuI",
        "fa-vk": "fa-vk-3YHgh",
        "fa-weibo": "fa-weibo-LE84o",
        "fa-renren": "fa-renren-1xCYH",
        "fa-pagelines": "fa-pagelines-3IM-W",
        "fa-stack-exchange": "fa-stack-exchange-3Xkv6",
        "fa-arrow-circle-o-right": "fa-arrow-circle-o-right-26xln",
        "fa-arrow-circle-o-left": "fa-arrow-circle-o-left-3xTfz",
        "fa-toggle-left": "fa-toggle-left-3UN9j",
        "fa-caret-square-o-left": "fa-caret-square-o-left-1Peyu",
        "fa-dot-circle-o": "fa-dot-circle-o-2-P1Y",
        "fa-wheelchair": "fa-wheelchair-2ILlW",
        "fa-vimeo-square": "fa-vimeo-square-2t92k",
        "fa-turkish-lira": "fa-turkish-lira-FkAXf",
        "fa-try": "fa-try-2Pu_4",
        "fa-plus-square-o": "fa-plus-square-o-23AP9",
        "fa-space-shuttle": "fa-space-shuttle-2JjUi",
        "fa-slack": "fa-slack-3SLbN",
        "fa-envelope-square": "fa-envelope-square-1b7e2",
        "fa-wordpress": "fa-wordpress-3dEL6",
        "fa-openid": "fa-openid-2PAub",
        "fa-institution": "fa-institution-lmXVO",
        "fa-bank": "fa-bank-3-KF6",
        "fa-university": "fa-university-3COrt",
        "fa-mortar-board": "fa-mortar-board-3WXCP",
        "fa-graduation-cap": "fa-graduation-cap-YuHy4",
        "fa-yahoo": "fa-yahoo-16YQU",
        "fa-google": "fa-google-2toB2",
        "fa-reddit": "fa-reddit--Scde",
        "fa-reddit-square": "fa-reddit-square-2EzQe",
        "fa-stumbleupon-circle": "fa-stumbleupon-circle-3irVG",
        "fa-stumbleupon": "fa-stumbleupon-1uubf",
        "fa-delicious": "fa-delicious-QeasZ",
        "fa-digg": "fa-digg-DMI3K",
        "fa-pied-piper-pp": "fa-pied-piper-pp-3StAr",
        "fa-pied-piper-alt": "fa-pied-piper-alt-3mB7u",
        "fa-drupal": "fa-drupal-kaWh9",
        "fa-joomla": "fa-joomla-2akA8",
        "fa-language": "fa-language-3G8fn",
        "fa-fax": "fa-fax-Vzv92",
        "fa-building": "fa-building-3NwDC",
        "fa-child": "fa-child-3KYWq",
        "fa-paw": "fa-paw-2jiAS",
        "fa-spoon": "fa-spoon-1tNfr",
        "fa-cube": "fa-cube-2jyps",
        "fa-cubes": "fa-cubes-1D892",
        "fa-behance": "fa-behance-1ak6q",
        "fa-behance-square": "fa-behance-square-u45Vb",
        "fa-steam": "fa-steam-2EPm-",
        "fa-steam-square": "fa-steam-square-3su2R",
        "fa-recycle": "fa-recycle-4blj7",
        "fa-automobile": "fa-automobile-2kS-G",
        "fa-car": "fa-car-1cMIH",
        "fa-cab": "fa-cab-1wosJ",
        "fa-taxi": "fa-taxi-2aual",
        "fa-tree": "fa-tree-2Bhkl",
        "fa-spotify": "fa-spotify-Hk1zN",
        "fa-deviantart": "fa-deviantart-1UA9U",
        "fa-soundcloud": "fa-soundcloud-K3X9Q",
        "fa-database": "fa-database-Ych3f",
        "fa-file-pdf-o": "fa-file-pdf-o-1bMKW",
        "fa-file-word-o": "fa-file-word-o-U3USu",
        "fa-file-excel-o": "fa-file-excel-o-2sTLq",
        "fa-file-powerpoint-o": "fa-file-powerpoint-o-3SXWV",
        "fa-file-photo-o": "fa-file-photo-o-1-64m",
        "fa-file-picture-o": "fa-file-picture-o-3v1Me",
        "fa-file-image-o": "fa-file-image-o-2YQjh",
        "fa-file-zip-o": "fa-file-zip-o-2CeNX",
        "fa-file-archive-o": "fa-file-archive-o-Llhs0",
        "fa-file-sound-o": "fa-file-sound-o-P4ubO",
        "fa-file-audio-o": "fa-file-audio-o-DAB6z",
        "fa-file-movie-o": "fa-file-movie-o-1mBQ_",
        "fa-file-video-o": "fa-file-video-o-Mf1Ro",
        "fa-file-code-o": "fa-file-code-o-37z8I",
        "fa-vine": "fa-vine-21bKO",
        "fa-codepen": "fa-codepen-3XzmW",
        "fa-jsfiddle": "fa-jsfiddle-JUToJ",
        "fa-life-bouy": "fa-life-bouy-oBuCk",
        "fa-life-buoy": "fa-life-buoy-2QFNe",
        "fa-life-saver": "fa-life-saver-r3FIm",
        "fa-support": "fa-support-ZlIY1",
        "fa-life-ring": "fa-life-ring-3c6KH",
        "fa-circle-o-notch": "fa-circle-o-notch-1Z2MS",
        "fa-ra": "fa-ra-1DMWS",
        "fa-resistance": "fa-resistance-1NPPc",
        "fa-rebel": "fa-rebel-3zebA",
        "fa-ge": "fa-ge-1BZLL",
        "fa-empire": "fa-empire-2E2ID",
        "fa-git-square": "fa-git-square-1JsNo",
        "fa-git": "fa-git-2F1nF",
        "fa-y-combinator-square": "fa-y-combinator-square-uVAy5",
        "fa-yc-square": "fa-yc-square-2iT0q",
        "fa-hacker-news": "fa-hacker-news-UadDO",
        "fa-tencent-weibo": "fa-tencent-weibo-2YZf1",
        "fa-qq": "fa-qq-nYSFT",
        "fa-wechat": "fa-wechat-3X06u",
        "fa-weixin": "fa-weixin-LBiU2",
        "fa-send": "fa-send-2WuJC",
        "fa-paper-plane": "fa-paper-plane-3d5P1",
        "fa-send-o": "fa-send-o-1x34V",
        "fa-paper-plane-o": "fa-paper-plane-o-1fxNW",
        "fa-history": "fa-history-1OqjL",
        "fa-circle-thin": "fa-circle-thin-3p_KX",
        "fa-header": "fa-header-Wr6qx",
        "fa-paragraph": "fa-paragraph-264v1",
        "fa-sliders": "fa-sliders-2D_ye",
        "fa-share-alt": "fa-share-alt-i82k5",
        "fa-share-alt-square": "fa-share-alt-square-1F4hT",
        "fa-bomb": "fa-bomb-3A41d",
        "fa-soccer-ball-o": "fa-soccer-ball-o-EZy8j",
        "fa-futbol-o": "fa-futbol-o-1i8Fr",
        "fa-tty": "fa-tty-3CNeK",
        "fa-binoculars": "fa-binoculars-1p2MQ",
        "fa-plug": "fa-plug-FI-cP",
        "fa-slideshare": "fa-slideshare-1EZMs",
        "fa-twitch": "fa-twitch-b3N6n",
        "fa-yelp": "fa-yelp-9KZZR",
        "fa-newspaper-o": "fa-newspaper-o-37WJq",
        "fa-wifi": "fa-wifi-1fkGc",
        "fa-calculator": "fa-calculator-1-6tn",
        "fa-paypal": "fa-paypal-2zywX",
        "fa-google-wallet": "fa-google-wallet-1VqeG",
        "fa-cc-visa": "fa-cc-visa-1ugfQ",
        "fa-cc-mastercard": "fa-cc-mastercard-107EY",
        "fa-cc-discover": "fa-cc-discover-vsxTS",
        "fa-cc-amex": "fa-cc-amex-VDjz_",
        "fa-cc-paypal": "fa-cc-paypal-jdANY",
        "fa-cc-stripe": "fa-cc-stripe-1TyEK",
        "fa-bell-slash": "fa-bell-slash-24Bmh",
        "fa-bell-slash-o": "fa-bell-slash-o-20akq",
        "fa-trash": "fa-trash-3JcRq",
        "fa-copyright": "fa-copyright-2oilz",
        "fa-at": "fa-at-RvUyB",
        "fa-eyedropper": "fa-eyedropper-3E844",
        "fa-paint-brush": "fa-paint-brush-1ezzU",
        "fa-birthday-cake": "fa-birthday-cake-2Q0Al",
        "fa-area-chart": "fa-area-chart-BNOUW",
        "fa-pie-chart": "fa-pie-chart-1_zAc",
        "fa-line-chart": "fa-line-chart-1KMO9",
        "fa-lastfm": "fa-lastfm-uj0tr",
        "fa-lastfm-square": "fa-lastfm-square-oUgN_",
        "fa-toggle-off": "fa-toggle-off-3oypn",
        "fa-toggle-on": "fa-toggle-on-JTJWc",
        "fa-bicycle": "fa-bicycle-1GG9o",
        "fa-bus": "fa-bus-2FccH",
        "fa-ioxhost": "fa-ioxhost-mi8M6",
        "fa-angellist": "fa-angellist-tZzUE",
        "fa-cc": "fa-cc-3Ddai",
        "fa-shekel": "fa-shekel-1XDDc",
        "fa-sheqel": "fa-sheqel-bjZ0j",
        "fa-ils": "fa-ils-3-Rpz",
        "fa-meanpath": "fa-meanpath-qJeeR",
        "fa-buysellads": "fa-buysellads-33-ts",
        "fa-connectdevelop": "fa-connectdevelop-7qR8z",
        "fa-dashcube": "fa-dashcube-2Wr7V",
        "fa-forumbee": "fa-forumbee-1WapQ",
        "fa-leanpub": "fa-leanpub-11vfF",
        "fa-sellsy": "fa-sellsy-3Gx9B",
        "fa-shirtsinbulk": "fa-shirtsinbulk-IYlVi",
        "fa-simplybuilt": "fa-simplybuilt-2pzE-",
        "fa-skyatlas": "fa-skyatlas-1FFGu",
        "fa-cart-plus": "fa-cart-plus-1ICYN",
        "fa-cart-arrow-down": "fa-cart-arrow-down-3gUbg",
        "fa-diamond": "fa-diamond-1jo8x",
        "fa-ship": "fa-ship-1ShPD",
        "fa-user-secret": "fa-user-secret-2pRx3",
        "fa-motorcycle": "fa-motorcycle-2Dlr7",
        "fa-street-view": "fa-street-view-2oJSN",
        "fa-heartbeat": "fa-heartbeat-Cj7a6",
        "fa-venus": "fa-venus-1uiQe",
        "fa-mars": "fa-mars-3kZzO",
        "fa-mercury": "fa-mercury-1tkFC",
        "fa-intersex": "fa-intersex-2TvOi",
        "fa-transgender": "fa-transgender-3AL1X",
        "fa-transgender-alt": "fa-transgender-alt-Rm6HZ",
        "fa-venus-double": "fa-venus-double-1GdUh",
        "fa-mars-double": "fa-mars-double-2lWbV",
        "fa-venus-mars": "fa-venus-mars-HZIYB",
        "fa-mars-stroke": "fa-mars-stroke-1x_p8",
        "fa-mars-stroke-v": "fa-mars-stroke-v-xZf4u",
        "fa-mars-stroke-h": "fa-mars-stroke-h-2e13S",
        "fa-neuter": "fa-neuter-2qjDu",
        "fa-genderless": "fa-genderless-1qjfN",
        "fa-facebook-official": "fa-facebook-official-4ZlIp",
        "fa-pinterest-p": "fa-pinterest-p-3uiRX",
        "fa-whatsapp": "fa-whatsapp-31QQ2",
        "fa-server": "fa-server-3LI61",
        "fa-user-plus": "fa-user-plus-23cs-",
        "fa-user-times": "fa-user-times-3NDnx",
        "fa-hotel": "fa-hotel-3wqqs",
        "fa-bed": "fa-bed-3Wmlu",
        "fa-viacoin": "fa-viacoin-2O92g",
        "fa-train": "fa-train-2Mnun",
        "fa-subway": "fa-subway-t5Zg7",
        "fa-medium": "fa-medium-3LBy6",
        "fa-yc": "fa-yc-L8oOw",
        "fa-y-combinator": "fa-y-combinator-1Jvw1",
        "fa-optin-monster": "fa-optin-monster-2omvX",
        "fa-opencart": "fa-opencart-1NJTm",
        "fa-expeditedssl": "fa-expeditedssl-2hOlJ",
        "fa-battery-4": "fa-battery-4-3PnlT",
        "fa-battery-full": "fa-battery-full-2I-lF",
        "fa-battery-3": "fa-battery-3-2xgk8",
        "fa-battery-three-quarters": "fa-battery-three-quarters-B0TJU",
        "fa-battery-2": "fa-battery-2-PwGG0",
        "fa-battery-half": "fa-battery-half-3EC4u",
        "fa-battery-1": "fa-battery-1-GKYXD",
        "fa-battery-quarter": "fa-battery-quarter-1BeHH",
        "fa-battery-0": "fa-battery-0-1Ounj",
        "fa-battery-empty": "fa-battery-empty-zKv8t",
        "fa-mouse-pointer": "fa-mouse-pointer-RVsij",
        "fa-i-cursor": "fa-i-cursor-2hEZG",
        "fa-object-group": "fa-object-group-H0YlT",
        "fa-object-ungroup": "fa-object-ungroup-3hD3z",
        "fa-sticky-note": "fa-sticky-note-WRP8o",
        "fa-sticky-note-o": "fa-sticky-note-o-1ZtwW",
        "fa-cc-jcb": "fa-cc-jcb-2boV8",
        "fa-cc-diners-club": "fa-cc-diners-club-1XY1t",
        "fa-clone": "fa-clone-3xx1h",
        "fa-balance-scale": "fa-balance-scale-2a0Dg",
        "fa-hourglass-o": "fa-hourglass-o-1dlR6",
        "fa-hourglass-1": "fa-hourglass-1-1866o",
        "fa-hourglass-start": "fa-hourglass-start-gCntD",
        "fa-hourglass-2": "fa-hourglass-2-XARrQ",
        "fa-hourglass-half": "fa-hourglass-half-3UDN7",
        "fa-hourglass-3": "fa-hourglass-3-1UnMG",
        "fa-hourglass-end": "fa-hourglass-end-2IWG_",
        "fa-hourglass": "fa-hourglass-35Vk6",
        "fa-hand-grab-o": "fa-hand-grab-o-22Nsl",
        "fa-hand-rock-o": "fa-hand-rock-o-1faso",
        "fa-hand-stop-o": "fa-hand-stop-o-3nQhZ",
        "fa-hand-paper-o": "fa-hand-paper-o-26v93",
        "fa-hand-scissors-o": "fa-hand-scissors-o-xb0vA",
        "fa-hand-lizard-o": "fa-hand-lizard-o-9oH6o",
        "fa-hand-spock-o": "fa-hand-spock-o-1HON1",
        "fa-hand-pointer-o": "fa-hand-pointer-o-11kKK",
        "fa-hand-peace-o": "fa-hand-peace-o-3jM_l",
        "fa-trademark": "fa-trademark-3CKSR",
        "fa-registered": "fa-registered-3DF1m",
        "fa-creative-commons": "fa-creative-commons-3IJJA",
        "fa-gg": "fa-gg-1rd27",
        "fa-gg-circle": "fa-gg-circle-3JcNE",
        "fa-tripadvisor": "fa-tripadvisor-l9z6p",
        "fa-odnoklassniki": "fa-odnoklassniki-scG9Q",
        "fa-odnoklassniki-square": "fa-odnoklassniki-square-zOKWu",
        "fa-get-pocket": "fa-get-pocket-2H43p",
        "fa-wikipedia-w": "fa-wikipedia-w-Nhk2j",
        "fa-safari": "fa-safari-uYrPG",
        "fa-chrome": "fa-chrome-lBVED",
        "fa-firefox": "fa-firefox-2FvCh",
        "fa-opera": "fa-opera-3-B3O",
        "fa-internet-explorer": "fa-internet-explorer-3XYd8",
        "fa-tv": "fa-tv-R1V1D",
        "fa-television": "fa-television-2QynV",
        "fa-contao": "fa-contao-1fiE3",
        "fa-500px": "fa-500px-1E1Bx",
        "fa-amazon": "fa-amazon-3MeA1",
        "fa-calendar-plus-o": "fa-calendar-plus-o-22hwV",
        "fa-calendar-minus-o": "fa-calendar-minus-o-2qJTL",
        "fa-calendar-times-o": "fa-calendar-times-o-ffSBH",
        "fa-calendar-check-o": "fa-calendar-check-o-28oD8",
        "fa-industry": "fa-industry-1YY0m",
        "fa-map-pin": "fa-map-pin-1TmXS",
        "fa-map-signs": "fa-map-signs-LvqZ2",
        "fa-map-o": "fa-map-o-3kNwy",
        "fa-map": "fa-map-1ON_3",
        "fa-commenting": "fa-commenting-3lj_n",
        "fa-commenting-o": "fa-commenting-o-2rdHj",
        "fa-houzz": "fa-houzz-1LL3d",
        "fa-vimeo": "fa-vimeo-3hBUh",
        "fa-black-tie": "fa-black-tie-3OQnP",
        "fa-fonticons": "fa-fonticons-17bqv",
        "fa-reddit-alien": "fa-reddit-alien-Ah2YD",
        "fa-edge": "fa-edge-2jBkj",
        "fa-credit-card-alt": "fa-credit-card-alt-136-S",
        "fa-codiepie": "fa-codiepie-3hsXd",
        "fa-modx": "fa-modx-3Rm1p",
        "fa-fort-awesome": "fa-fort-awesome-2eVZT",
        "fa-usb": "fa-usb-_kIBQ",
        "fa-product-hunt": "fa-product-hunt-3Dy1G",
        "fa-mixcloud": "fa-mixcloud-1FIs7",
        "fa-scribd": "fa-scribd-xQij6",
        "fa-pause-circle": "fa-pause-circle-1zyQo",
        "fa-pause-circle-o": "fa-pause-circle-o-3HIn5",
        "fa-stop-circle": "fa-stop-circle-17UVx",
        "fa-stop-circle-o": "fa-stop-circle-o-3yn-T",
        "fa-shopping-bag": "fa-shopping-bag-kGwMs",
        "fa-shopping-basket": "fa-shopping-basket-2QkUo",
        "fa-hashtag": "fa-hashtag-15Z8r",
        "fa-bluetooth": "fa-bluetooth-2xSAP",
        "fa-bluetooth-b": "fa-bluetooth-b-niA4L",
        "fa-percent": "fa-percent-1851Z",
        "fa-gitlab": "fa-gitlab-1oSWS",
        "fa-wpbeginner": "fa-wpbeginner-1qkkC",
        "fa-wpforms": "fa-wpforms-2fyGb",
        "fa-envira": "fa-envira-3Ri_n",
        "fa-universal-access": "fa-universal-access-3rGbH",
        "fa-wheelchair-alt": "fa-wheelchair-alt-CqINd",
        "fa-question-circle-o": "fa-question-circle-o-1sA9T",
        "fa-blind": "fa-blind-2qPZ9",
        "fa-audio-description": "fa-audio-description-3B4Oq",
        "fa-volume-control-phone": "fa-volume-control-phone-1BCRd",
        "fa-braille": "fa-braille-2Q4zp",
        "fa-assistive-listening-systems":
          "fa-assistive-listening-systems-1A5E3",
        "fa-asl-interpreting": "fa-asl-interpreting-DJryD",
        "fa-american-sign-language-interpreting":
          "fa-american-sign-language-interpreting-37Hiq",
        "fa-deafness": "fa-deafness-2Rdje",
        "fa-hard-of-hearing": "fa-hard-of-hearing-2jQgf",
        "fa-deaf": "fa-deaf-_j4pq",
        "fa-glide": "fa-glide-IsoMc",
        "fa-glide-g": "fa-glide-g-3EIMp",
        "fa-signing": "fa-signing-30znq",
        "fa-sign-language": "fa-sign-language-1NxR2",
        "fa-low-vision": "fa-low-vision-WzP1m",
        "fa-viadeo": "fa-viadeo-x-S3x",
        "fa-viadeo-square": "fa-viadeo-square-2bp99",
        "fa-snapchat": "fa-snapchat-3efbg",
        "fa-snapchat-ghost": "fa-snapchat-ghost-1Evfw",
        "fa-snapchat-square": "fa-snapchat-square-1b0R3",
        "fa-pied-piper": "fa-pied-piper-3SVkO",
        "fa-first-order": "fa-first-order-2a3K2",
        "fa-yoast": "fa-yoast-1ZBo4",
        "fa-themeisle": "fa-themeisle-3BZJB",
        "fa-google-plus-circle": "fa-google-plus-circle-2ciuG",
        "fa-google-plus-official": "fa-google-plus-official--ltTc",
        "fa-fa": "fa-fa-FP_X2",
        "fa-font-awesome": "fa-font-awesome-2kDu2",
        "sr-only": "sr-only-2MIDc",
        "sr-only-focusable": "sr-only-focusable-1dkiN",
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(7)
          .then(
            function(t) {
              e(l(748));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(7)
          .then(
            function(t) {
              e(l(749));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(750));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(3)
          .then(
            function(t) {
              e(l(751));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(620),
        r = a(f),
        n = l(621),
        c = a(n),
        u = l(622),
        i = a(u),
        d = l(623),
        o = a(d),
        s = l(624),
        p = a(s),
        h = l(625),
        m = a(h),
        E = l(626),
        v = a(E);
      t.default = [
        {
          path: "/cost-of-college",
          title: "Truth: The Cost of College",
          component: r.default,
        },
        { path: "/cost-of-college/challenge-1", component: c.default },
        { path: "/cost-of-college/why-so-expensive", component: i.default },
        { path: "/cost-of-college/earn-more", component: o.default },
        { path: "/cost-of-college/good-news", component: p.default },
        { path: "/cost-of-college/chart", component: m.default },
        { path: "/cost-of-college/challenge-2", component: v.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(752));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(1)
          .then(
            function(t) {
              e(l(753));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(754));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(755));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(756));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(8)
          .then(
            function(t) {
              e(l(757));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(2)
          .then(
            function(t) {
              e(l(758));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(628),
        r = a(f),
        n = l(629),
        c = a(n),
        u = l(630),
        i = a(u),
        d = l(631),
        o = a(d);
      t.default = [
        {
          path: "/what-is-financial-aid",
          title: "What is Financial Aid",
          component: r.default,
        },
        { path: "/what-is-financial-aid/challenge-1", component: c.default },
        { path: "/what-is-financial-aid/types-of-aid", component: i.default },
        { path: "/what-is-financial-aid/challenge-2", component: o.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(759));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(1)
          .then(
            function(t) {
              e(l(760));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(4)
          .then(
            function(t) {
              e(l(761));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(5)
          .then(
            function(t) {
              e(l(762));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(633),
        r = a(f),
        n = l(634),
        c = a(n),
        u = l(635),
        i = a(u),
        d = l(636),
        o = a(d),
        s = l(637),
        p = a(s);
      t.default = [
        {
          path: "/not-created-equal",
          title: "Not All Financial Aid Is Created Equal",
          component: r.default,
        },
        {
          path: "/not-created-equal/grants-are-awesome-1",
          component: c.default,
        },
        {
          path: "/not-created-equal/grants-are-awesome-2",
          component: i.default,
        },
        { path: "/not-created-equal/how-can-i-qualify", component: o.default },
        { path: "/not-created-equal/challenge-1", component: p.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(763));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(6)
          .then(
            function(t) {
              e(l(764));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(6)
          .then(
            function(t) {
              e(l(765));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(6)
          .then(
            function(t) {
              e(l(766));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(5)
          .then(
            function(t) {
              e(l(767));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(639),
        r = a(f),
        n = l(640),
        c = a(n),
        u = l(641),
        i = a(u),
        d = l(642),
        o = a(d);
      t.default = [
        {
          path: "/unlocking-financial-aid",
          title: "Unlocking Financial Aid",
          component: r.default,
        },
        { path: "/unlocking-financial-aid/challenge-1", component: c.default },
        { path: "/unlocking-financial-aid/meet-fafsa", component: i.default },
        { path: "/unlocking-financial-aid/challenge-2", component: o.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(768));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(5)
          .then(
            function(t) {
              e(l(769));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(9)
          .then(
            function(t) {
              e(l(770));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(2)
          .then(
            function(t) {
              e(l(771));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(644),
        r = a(f),
        n = l(645),
        c = a(n),
        u = l(646),
        i = a(u);
      t.default = [
        {
          path: "/understanding-your-award",
          title: "Understanding Your Financial Aid Award",
          component: r.default,
        },
        {
          path: "/understanding-your-award/anatomy-of-award",
          component: c.default,
        },
        { path: "/understanding-your-award/fine-print", component: i.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(772));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(8)
          .then(
            function(t) {
              e(l(773));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(774));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(648),
        r = a(f),
        n = l(649),
        c = a(n),
        u = l(650),
        i = a(u),
        d = l(651),
        o = a(d),
        s = l(652),
        p = a(s),
        h = l(653),
        m = a(h);
      t.default = [
        {
          path: "/comparing-awards",
          title: "Comparing Financial Aid Awards",
          component: r.default,
        },
        { path: "/comparing-awards/challenge-1", component: c.default },
        {
          path: "/comparing-awards/examine-package-activity",
          component: i.default,
        },
        {
          path: "/comparing-awards/examine-package-activity/0",
          component: i.default,
        },
        {
          path: "/comparing-awards/examine-package-activity/1",
          component: i.default,
        },
        {
          path: "/comparing-awards/examine-package-activity/2",
          component: i.default,
        },
        {
          path: "/comparing-awards/examine-package-activity/3",
          component: i.default,
        },
        {
          path: "/comparing-awards/examine-package-activity/4",
          component: i.default,
        },
        { path: "/comparing-awards/best-package/0", component: o.default },
        { path: "/comparing-awards/best-package/1", component: o.default },
        { path: "/comparing-awards/best-package/2", component: o.default },
        { path: "/comparing-awards/best-package/3", component: o.default },
        { path: "/comparing-awards/tips", component: p.default },
        { path: "/comparing-awards/challenge-2", component: m.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(775));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(1)
          .then(
            function(t) {
              e(l(776));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(10)
          .then(
            function(t) {
              e(l(777));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(10)
          .then(
            function(t) {
              e(l(778));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(779));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(2)
          .then(
            function(t) {
              e(l(780));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(655),
        r = a(f),
        n = l(656),
        c = a(n),
        u = l(657),
        i = a(u),
        d = l(658),
        o = a(d),
        s = l(659),
        p = a(s),
        h = l(660),
        m = a(h);
      t.default = [
        {
          path: "/reducing-the-gap",
          title: "Reducing the Gap",
          component: r.default,
        },
        { path: "/reducing-the-gap/challenge-1", component: c.default },
        { path: "/reducing-the-gap/what-do-you-do", component: i.default },
        { path: "/reducing-the-gap/calculating-the-gap", component: o.default },
        { path: "/reducing-the-gap/tips", component: p.default },
        { path: "/reducing-the-gap/challenge-2", component: m.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(781));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(1)
          .then(
            function(t) {
              e(l(782));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(783));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(784));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(785));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(1)
          .then(
            function(t) {
              e(l(786));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(662),
        r = a(f),
        n = l(663),
        c = a(n),
        u = l(664),
        i = a(u);
      t.default = [
        {
          path: "/power-of-scholarships",
          title: "The Power of Scholarships",
          component: r.default,
        },
        { path: "/power-of-scholarships/videos", component: c.default },
        { path: "/power-of-scholarships/tips", component: i.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(787));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(4)
          .then(
            function(t) {
              e(l(788));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(4)
          .then(
            function(t) {
              e(l(789));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(666),
        r = a(f),
        n = l(667),
        c = a(n),
        u = l(668),
        i = a(u);
      t.default = [
        {
          path: "/your-plan",
          title: "Your Financial Aid Plan",
          component: r.default,
        },
        { path: "/your-plan/next-steps", component: c.default },
        { path: "/your-plan/confidence-rating", component: i.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(790));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(3)
          .then(
            function(t) {
              e(l(791));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(3)
          .then(
            function(t) {
              e(l(792));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(670),
        r = a(f),
        n = l(671),
        c = a(n);
      t.default = [
        { path: "/campus", title: "The Campus", component: r.default },
        { path: "/campus/wrap-up", component: c.default },
      ];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(793));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(9)
          .then(
            function(t) {
              e(l(794));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = l(673),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = [{ path: "/spin", component: f.default }];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(0)
          .then(
            function(t) {
              e(l(795));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = l(675),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = [{ path: "/medals", component: f.default }];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(14)
          .then(
            function(t) {
              e(l(796));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t) {
      e.exports = {
        wrapper: "wrapper-2KdbE",
        medal: "medal-2-dkb",
        number: "number-19l1a",
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = l(678),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = [{ path: "/true-false", component: f.default }];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(12)
          .then(
            function(t) {
              e(l(797));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = l(680),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = [{ path: "/learn-from-me", component: f.default }];
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(11)
          .then(
            function(t) {
              e(l(798));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = l(682),
        f = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = { component: f.default };
    },
    function(e, t, l) {
      e.exports = function(e) {
        l.e(13)
          .then(
            function(t) {
              e(l(799));
            }.bind(null, l)
          )
          .catch(l.oe);
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(82),
        i = a(u),
        d = l(684),
        o = a(d),
        s = l(60),
        p = function(e) {
          var t = e.children,
            l = e.contentPaths,
            a = e.currentPath;
          return r.default.createElement(
            o.default,
            {
              showHeader: "intro" !== (0, s.trimPath)(a),
              showOverlay: (function() {
                return (
                  !l.includes((0, s.trimPath)(a)) ||
                  1 !== (0, s.trimPath)(a).split("/").length
                );
              })(),
            },
            t
          );
        };
      (p.propTypes = {
        children: c.default.node.isRequired,
        contentPaths: c.default.arrayOf(c.default.string).isRequired,
        currentPath: c.default.string.isRequired,
      }),
        (t.default = (0, i.default)(p));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(685),
        o = a(d),
        s = l(688),
        p = a(s),
        h = l(737),
        m = a(h),
        E = l(159),
        v = l(741),
        g = a(v),
        M = function(e) {
          var t = e.children,
            l = e.showHeader,
            a = e.showOverlay;
          return r.default.createElement(
            o.default,
            null,
            r.default.createElement("div", {
              className: (0, i.default)(g.default.overlay, a && g.default.show),
            }),
            r.default.createElement(
              E.Container,
              null,
              r.default.createElement(p.default, { hide: !l }),
              r.default.createElement(
                "div",
                { className: g.default.content },
                t
              ),
              r.default.createElement(m.default, null)
            )
          );
        };
      (M.defaultProps = { showHeader: !1, showOverlay: !1 }),
        (M.propTypes = {
          children: c.default.node.isRequired,
          showHeader: c.default.bool,
          showOverlay: c.default.bool,
        }),
        (t.default = M);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(161),
        i = a(u),
        d = l(686),
        o = a(d),
        s = function(e) {
          var t = e.children,
            l = e.completedSections;
          return r.default.createElement(o.default, { visitedSections: l }, t);
        };
      (s.propTypes = {
        children: c.default.node.isRequired,
        completedSections: c.default.arrayOf(c.default.string).isRequired,
      }),
        (t.default = (0, i.default)(s));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(687),
        o = a(d),
        s = function(e) {
          var t = e.children,
            l = e.visitedSections,
            a = {
              "cost-of-college": { x: 423, y: 463 },
              "what-is-financial-aid": { x: 680, y: 463 },
              "not-created-equal": { x: 808, y: 388 },
              "unlocking-financial-aid": { x: 424, y: 166 },
              "power-of-scholarships": { x: 681, y: 314 },
              "understanding-your-award": { x: 553, y: 240 },
              "comparing-awards": { x: 680, y: 166 },
              "your-plan": { x: 808, y: 240 },
              "reducing-the-gap": { x: 936, y: 314 },
              campus: { x: 796, y: 10 },
            };
          return r.default.createElement(
            "div",
            { className: o.default.board },
            r.default.createElement(
              "svg",
              { className: o.default.map, viewBox: "0 0 1420 1024" },
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "symbol",
                  { id: "stop-bg", viewBox: "0 0 183.9 106.1" },
                  r.default.createElement("path", {
                    d: "M91.8 0L0 53l91.9 53.1 92-53.1",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "your-plan", viewBox: "0 0 60.2 95.2" },
                  r.default.createElement("path", {
                    fill: "#FFB100",
                    d:
                      "M46.2 73.6l-6-47.3L4 47.1l6 34.8c0 5.7 5.9 9.3 10.8 6.5l25.4-14.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFB100",
                    d: "M45.1 73.9V49.5L8.6 70.8 15.9 91",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFB100",
                    d:
                      "M12.3 92.8c2.6.4 5.1-1.9 5.5-4.4l2.9-17.5-10-.9-2.8 16.8c-.4 2.5 1.8 5.6 4.4 6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CAE5E2",
                    d:
                      "M14 24v64.9l36.1-21.5V4.6C50.1 2 48.2 0 45.6 0L10.2 20.5c2.1 0 3.8 1.5 3.8 3.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#DCEEEC",
                    d:
                      "M14.1 24.2L50.2 3.3C49.7 1.9 48.3 0 45.7 0L10.3 20.5c2.1 0 3.8 1.6 3.8 3.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#32AAEA",
                    d:
                      "M19 80.7l5.1-3.6V36.8L19 40.3m22.1 32.2l5-3.5V14.8l-5 3.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#00694F",
                    d: "M40.1 68.7L0 92V70.5l40.1-23.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#00814F",
                    d: "M46.1 69.5L6 92.9V71.6l40.1-23.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#37AE4C",
                    d: "M50.1 71.8L10 95.2V73.9l40.1-23.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#00814F",
                    d: "M10 95.2l-4-2.3V71.6l4 2.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#32AAEA",
                    d: "M30.3 72.3l4.8-2.8V24.4l-4.9 2.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD34",
                    d:
                      "M60.2 31.1L24.1 52l-6 34.7c0 1.2-.2 2.4-.9 3.4-.5.8-1.3 1.7-2.1 2.3l36.1-20.9c2.1-1.2 3-3.4 3-5.8l6-34.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD34",
                    d:
                      "M55.7 28.4l-6.6 3.7-6 32.3 7.5-3.1c2.1-1.2 3.5-3.4 3.5-5.8l6-24.6c.1-2.3-2.5-3.7-4.4-2.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFBA00",
                    d:
                      "M19.2 79.9L18 86.6c-.3 1.2-.4 2.3-.9 3.4-.3.9-1.2 1.7-2.1 2.2L53.5 70 55 59.1 19.2 79.9z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "learn-from-me", viewBox: "0 0 67.6 89.5" },
                  r.default.createElement("path", {
                    fill: "#AFD5F9",
                    d:
                      "M43.7 8.2c0 7.2-5 15.9-11.2 19.5s-11.2.7-11.2-6.5 5-15.9 11.2-19.5S43.7 1 43.7 8.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#AFD5F9",
                    d:
                      "M29.7 3.6c-2.1 1.9-3.9 4.1-5.3 6.6l14.7 8.5 2.9-2.8c.5-1.3.9-2.7 1.2-4.1L29.7 3.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#AFD5F9",
                    d:
                      "M51.9 8.4c0 7.5-5.3 16.6-11.7 20.3s-11.8.7-11.8-6.7S33.7 5.3 40.2 1.6 51.9.9 51.9 8.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A3D6FF",
                    d:
                      "M54.8 12.6c0 7.5-5.3 16.6-11.7 20.3s-11.7.7-11.7-6.8S36.6 9.6 43.1 5.9s11.7-.7 11.7 6.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#91C5E1",
                    d:
                      "M20.3 31.2c0 6.5-4.5 14.4-10.2 17.6S0 49.4 0 42.9s4.5-14.4 10.2-17.6 10.1-.6 10.1 5.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#BCDCFF",
                    d:
                      "M28.4 16.8c0 6.5-4.5 14.4-10.2 17.6s-10.1.7-10.1-5.8S12.6 14.2 18.3 11s10.1-.6 10.1 5.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#91C5E1",
                    d:
                      "M23.6 41c0 6.6-4.6 14.6-10.4 17.9S2.9 59.6 2.9 53s4.6-14.7 10.3-18 10.4-.6 10.4 6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#91C5E1",
                    d:
                      "M29.6 42.2c0 6.6-4.6 14.6-10.3 17.9s-10.4.6-10.4-6 4.6-14.6 10.3-17.9 10.4-.6 10.4 6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#91C5E1",
                    d:
                      "M37.9 34c0 7.5-5.3 16.6-11.7 20.3-6.5 3.7-11.7.7-11.7-6.8S19.6 31 26.1 27.2s11.8-.7 11.8 6.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#BCDCFF",
                    d: "M39.7 18.9l-15.1-9L8.2 26.6l15.7 9.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#71B4D8",
                    d: "M21.5 68.7L5.7 59.6 15.9 57l3 1.7 6.1 1.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#91C5E1",
                    d: "M23.9 35.8L8.2 26.6 4.9 47l13.7 1.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#71B4D8",
                    d: "M49.2 1.2l14.3 8.4-6.4 1.2-10.5-6.3",
                  }),
                  r.default.createElement(
                    "g",
                    null,
                    r.default.createElement("path", {
                      fill: "#D4F3FF",
                      d:
                        "M36 40.2c0 6.5-4.5 14.4-10.2 17.6-5.6 3.2-10.2.6-10.2-5.9s4.5-14.4 10.2-17.6S36 33.8 36 40.2z",
                    }),
                    r.default.createElement("path", {
                      fill: "#D4F3FF",
                      d:
                        "M44.1 26c0 6.5-4.5 14.4-10.2 17.6s-10.2.6-10.2-5.9S28.3 23.3 34 20.1s10.1-.6 10.1 5.9zM67.1 31.3c0 8-5.6 17.7-12.4 21.6s-12.5.8-12.5-7.2 5.6-17.6 12.5-21.6 12.4-.7 12.4 7.2z",
                    }),
                    r.default.createElement("path", {
                      fill: "#D4F3FF",
                      d:
                        "M67.6 17.5c0 7.5-5.3 16.6-11.7 20.3s-11.8.7-11.8-6.8 5.3-16.6 11.7-20.3 11.8-.7 11.8 6.8z",
                    }),
                    r.default.createElement("path", {
                      fill: "#D4F3FF",
                      d:
                        "M53.6 43.1c0 7.5-5.3 16.6-11.7 20.3s-11.7.7-11.7-6.8S35.4 40 41.8 36.3s11.8-.7 11.8 6.8z",
                    }),
                    r.default.createElement("path", {
                      fill: "#D4F3FF",
                      d:
                        "M58.7 17c0 7.2-5 15.9-11.2 19.5s-11.3.6-11.3-6.5 5-15.9 11.2-19.5 11.3-.7 11.3 6.5zM39.3 50.1c0 6.6-4.6 14.6-10.4 17.9s-10.3.6-10.3-6 4.6-14.6 10.3-17.9 10.4-.6 10.4 6z",
                    }),
                    r.default.createElement("path", {
                      fill: "#A3D6FF",
                      d:
                        "M48.4 36.8c-.1 2.6-1.5 5-3.7 6.5-2.1 1.2-3.7.2-3.7-2.2.1-2.6 1.5-5 3.7-6.5 2.1-1.1 3.7-.2 3.7 2.2zM61 29.4c-.1 2.6-1.5 5-3.7 6.5-2.1 1.2-3.7.2-3.7-2.2.1-2.6 1.5-5 3.7-6.5 2-1.1 3.7-.2 3.7 2.2zM35.9 44.2c-.1 2.6-1.5 5-3.7 6.5-2.1 1.2-3.7.2-3.7-2.2.1-2.6 1.5-5 3.7-6.5 2-1.1 3.7-.2 3.7 2.2z",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "#71B4D8",
                    d:
                      "M40.9 1.2l11 6.3c-.4-6.5-5.1-9.3-11-6.3zM3.2 49.6c-.2 1.1-.3 2.2-.3 3.4 0 6.6 4.6 9.3 10.4 6 1-.6 1.9-1.2 2.7-2L3.2 49.6z",
                  }),
                  r.default.createElement(
                    "g",
                    null,
                    r.default.createElement("path", {
                      fill: "#71B4D8",
                      d:
                        "M49.5 71.8c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.1 3.4-.2 3.4 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d:
                        "M50.2 65.3c-.1 2.4-1.4 4.5-3.3 5.8-1.8 1.1-3.3.2-3.3-1.9.1-2.4 1.4-4.5 3.3-5.8 1.8-1.1 3.3-.3 3.3 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d:
                        "M51.3 68.1c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.2 3.4-.3 3.4 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#91C5E1",
                      d:
                        "M55.2 63.9c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.1 3.4-.3 3.4 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d:
                        "M54.3 68.3c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.4-5.8 1.8-1.1 3.3-.2 3.3 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#91C5E1",
                      d: "M59 64.4l-4.7-2.7-1.9 4.7 2.6 2.1",
                    }),
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d: "M53.8 65.8l-4.7-2.7-1.9 4.6 2.7 2.1",
                    }),
                    r.default.createElement("path", {
                      fill: "#71B4D8",
                      d: "M43.9 78l4.7 2.7 2.7-5.4-6.9-3.9",
                    }),
                    r.default.createElement(
                      "g",
                      { fill: "#D4F3FF" },
                      r.default.createElement("path", {
                        d:
                          "M55 68.1c-.1 2.4-1.4 4.6-3.3 5.9-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.4-5.8 1.8-1.2 3.3-.3 3.3 1.8z",
                      }),
                      r.default.createElement("path", {
                        d:
                          "M60.1 66.6c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.8-1.1 3.3-.2 3.4 1.9z",
                      }),
                      r.default.createElement("path", {
                        d:
                          "M59.1 71.1c-.1 2.4-1.4 4.6-3.4 5.9-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 2-1.2 3.5-.3 3.5 1.8z",
                      }),
                      r.default.createElement("path", {
                        d:
                          "M54.3 74.6c-.1 2.4-1.3 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.4-5.8 1.8-1.1 3.3-.3 3.3 1.9z",
                      })
                    )
                  ),
                  r.default.createElement(
                    "g",
                    null,
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d:
                        "M32.1 78c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.6 3.4-5.9 1.8-1 3.3-.2 3.3 2z",
                    }),
                    r.default.createElement("path", {
                      fill: "#71B4D8",
                      d:
                        "M30.9 81.5c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.3-4.5 3.3-5.8 1.9-1.1 3.4-.3 3.4 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#91C5E1",
                      d:
                        "M35.8 78c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.5.2-3.5-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.1 3.5-.3 3.5 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#71B4D8",
                      d:
                        "M33.7 82.3c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.1 3.4-.3 3.4 1.9z",
                    }),
                    r.default.createElement("path", {
                      fill: "#91C5E1",
                      d: "M38.2 77.8L35 75.9l-1.7 3.5 1.7.5",
                    }),
                    r.default.createElement("path", {
                      fill: "#AFD5E9",
                      d: "M34.2 77.5l-3.3-1.8-5.1 4.7-.4 1.4 3.8 2.2",
                    }),
                    r.default.createElement("path", {
                      fill: "#71B4D8",
                      d: "M25.3 87.6l3 1.7.8-2.3-1.8-.6",
                    }),
                    r.default.createElement(
                      "g",
                      null,
                      r.default.createElement(
                        "g",
                        { fill: "#D4F3FF" },
                        r.default.createElement("path", {
                          d:
                            "M33.9 83.2c-.1 2.4-1.4 4.5-3.4 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.4-5.8 1.9-1.2 3.4-.3 3.4 1.9z",
                        }),
                        r.default.createElement("path", {
                          d:
                            "M35 79.6c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.9-1.1 3.4-.2 3.4 1.9z",
                        }),
                        r.default.createElement("path", {
                          d:
                            "M39.4 80.1c-.1 2.4-1.4 4.6-3.4 5.9-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 2-1.2 3.5-.3 3.5 1.8z",
                        }),
                        r.default.createElement("path", {
                          d:
                            "M37.3 83.2c-.1 2.4-1.4 4.5-3.3 5.8-1.9 1.1-3.4.2-3.4-1.9.1-2.4 1.4-4.5 3.3-5.8 1.8-1.2 3.3-.3 3.4 1.9z",
                        })
                      )
                    )
                  )
                ),
                r.default.createElement(
                  "symbol",
                  { id: "true-false", viewBox: "0 0 86 92" },
                  r.default.createElement("path", {
                    fill: "#37AE4C",
                    d:
                      "M0 32.5s-.1 36.7 0 38.2.1 2.6 2.1 3.7 9.8 5.8 9.8 5.8-.3-41.3.1-41.7-1.3-2.8 1.1-4.3S64.8 6.4 64.8 6.4L56.2.5s-2-1.4-4.9.5L2.1 28.2S.4 29.3 0 32.5zM16.8 77.6L7.4 88.4l6.9 3.7 13.9-18.4s-1.7-3.4-2-3.4-9.4 7.3-9.4 7.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#74D746",
                    d:
                      "M11.5 39.4c0-4 .7-4.9 2.8-6.1C14.1 33.3 61.6 7 61.6 7c2-.8 2.5-1.1 3-.8 3.1 2.2 2.5 42.7 2.5 42.7-.1 1.1-.6 2-1.4 2.8C64.4 53 35 68.8 35 68.8c-1.8 5.4-4.7 10.2-8.7 14.3-3.5 3.6-7.6 6.6-12 9L24 75.7l-9.1 4.7s-2.8.2-3.4-.7 0-33.6 0-40.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CBFFBA",
                    d: "M28 40.3l-4.7 9.4 15 8.8 18.4-31.3-7.8-4-11.7 21.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#D8464B",
                    d:
                      "M46.2 55.4v16.7c-.1.7.3 1.3.9 1.6.8.5 4.3 2.5 4.3 2.5s-.1-18.1 0-18.2-.6-1.2.5-1.9 22.7-12.2 22.7-12.2l-3.8-2.6c-.7-.4-1.6-.3-2.2.2l-21.4 12c-.6.5-.9 1.2-1 1.9zM53.6 75.2L49.5 80l3 1.6 6.1-8.1c-.2-.5-.5-1-.9-1.5-.1 0-4.1 3.2-4.1 3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#F15A5E",
                    d:
                      "M51.3 58.4c0-1.7.3-2.1 1.2-2.7-.1 0 20.8-11.5 20.8-11.5.9-.3 1.1-.5 1.3-.3 1.4 1 1.1 18.8 1.1 18.8-.1.4-.3.9-.6 1.2-.6.6-13.5 7.5-13.5 7.5-.8 2.3-2.1 4.5-3.8 6.3-1.5 1.6-3.3 2.9-5.3 4l4.2-7.2-4 2s-1.2.1-1.5-.3.1-14.8.1-17.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFA08D",
                    d:
                      "M58.6 59l2.1-3.8 3.2 2.4 2.1-4.9 3.4 2.2-2.2 4.2 2.6 1.7-1.9 3.7-3.2-1.7-2.3 4-3.3-1.9 2.7-3.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#D8464B",
                    d:
                      "M60.8 15.8v14c-.1.6.2 1.1.8 1.4.7.4 3.6 2.1 3.6 2.1s-.1-15.2 0-15.3-.5-1 .4-1.6c.9-.6 19-10.2 19-10.2l-3.2-2.1c-.6-.3-1.3-.3-1.8.1l-18.1 10c-.4.4-.6 1-.7 1.6zM67 32.4l-3.5 4 2.5 1.3 5.1-6.8c-.2-.4-.4-.9-.7-1.2 0 .1-3.4 2.7-3.4 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#F15A5E",
                    d:
                      "M65.1 18.4c0-1.5.3-1.8 1-2.3l17.4-9.7c.7-.3.9-.4 1.1-.3 1.2.8 1 15.7 1 15.7-.1.4-.2.7-.5 1-.5.5-11.3 6.3-11.3 6.3-.7 2-1.7 3.8-3.2 5.3-1.3 1.3-2.8 2.5-4.5 3.4l3.6-6-3.4 1.7s-1 .1-1.2-.3 0-12.4 0-14.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFA08D",
                    d:
                      "M71.2 18.8l1.8-3.1 2.7 2 1.7-4.1 2.9 1.8-1.8 3.5 2.1 1.4-1.5 3.1-2.7-1.3-2 3.3-2.8-1.6 2.3-3.3",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "power-of-scholarships", viewBox: "0 0 68.9 93.5" },
                  r.default.createElement("path", {
                    fill: "#006EB6",
                    d:
                      "M61.5 0l7.4 4-10.3 8-.4-7.3M0 89.3l6.9 4.2 6.7-5.9-5.1-7.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#006EB6",
                    d: "M61.3 54.5L0 89.3V35.8L61.5 0",
                  }),
                  r.default.createElement("path", {
                    fill: "#48A0FF",
                    d: "M68.7 58.4L6.9 93.5V40l62-36",
                  }),
                  r.default.createElement("path", {
                    fill: "#CAE5E2",
                    d: "M14.3 44.3l47.2-27.5-.1 37.3-47.1 26.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#D8ECEA",
                    d: "M26.5 37.2l-12.2 7.1v9.5l31 9.5 16.1-9.2v-6.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#009BAB",
                    d: "M53.8 30L24.6 47.4v-4.1l29.2-17.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#4DB9C4",
                    d: "M32.1 38.9l-7.5 4.4v4.1l12-7.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#009BAB",
                    d: "M47.7 44.1L18.4 61.5v-4.1L47.7 40",
                  }),
                  r.default.createElement("path", {
                    fill: "#4DB9C4",
                    d: "M47.7 43.7l-4-1.3-22.6 13.4 4.6 1.4 22-13.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#009BAB",
                    d: "M40.8 59.4L18.4 72.7v-4.1l22.4-13.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#4DB9C4",
                    d: "M38.1 61l2.7-1.6v-4.1l-7.3 4.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#F04050",
                    d: "M61.6 67.6l-6.8-1.1-6.8 8.9V56.3l13.6-7.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFBA00",
                    d:
                      "M61.1 47.5c0 4.8-3.4 10.7-7.6 13.2-4.2 2.4-7.6.5-7.6-4.4 0-4.8 3.4-10.7 7.6-13.2 4.2-2.5 7.6-.5 7.6 4.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFBA00",
                    d: "M58.6 42.4l3.1 1.8L51 62.8 47.9 61",
                  }),
                  r.default.createElement("path", {
                    fill: "#FEEE44",
                    d:
                      "M64.1 49.2c0 4.8-3.4 10.7-7.6 13.2s-7.6.5-7.6-4.4c0-4.8 3.4-10.7 7.6-13.2 4.2-2.4 7.6-.5 7.6 4.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFFF86",
                    d:
                      "M49.5 54.2l11.7 3.6c1.8-2.6 2.9-5.8 2.9-8.6v-.1l-9.4-2.9c-2.4 2-4.3 5-5.2 8z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "reducing-the-gap", viewBox: "0 0 68.4 90.1" },
                  r.default.createElement("path", {
                    fill: "#D4EAE8",
                    d:
                      "M23.2 10.3L.8 25.6s14 17.9 14.1 18.2 13.7 6 13.7 6l2.2-17.1-.4-14.8-7.2-7.6z",
                  }),
                  r.default.createElement(
                    "g",
                    {
                      fill: "none",
                      stroke: "#509B7E",
                      strokeWidth: "1.066",
                      strokeMiterlimit: "10",
                    },
                    r.default.createElement("path", {
                      d: "M24.3 11.4l-1.1-1.1-1.3.9",
                    }),
                    r.default.createElement("path", {
                      strokeDasharray: "3.4319,3.4319",
                      d: "M19.1 13.1L3.5 23.8",
                    }),
                    r.default.createElement("path", {
                      d: "M2.1 24.7l-1.3.9s.4.5 1 1.3",
                    }),
                    r.default.createElement("path", {
                      strokeDasharray: "3.1642,3.1642",
                      d:
                        "M3.7 29.4c4.1 5.3 11.1 14.2 11.2 14.5.1.2 6.7 3.1 10.7 4.8",
                    }),
                    r.default.createElement("path", {
                      d: "M27.1 49.3c.9.4 1.5.6 1.5.6l.2-1.6",
                    }),
                    r.default.createElement("path", {
                      strokeDasharray: "3.0275,3.0275",
                      d: "M29.2 45.3l1.6-12.6-.5-14.8-4.9-5.3",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "none",
                    stroke: "#509B7E",
                    strokeWidth: "1.066",
                    strokeMiterlimit: "10",
                    strokeDasharray: "3.197",
                    d:
                      "M26.3 9.6l-14.3.5s5.6 38.5 6.7 38.3c1.1-.3 12-11.2 12-11.2L30.4 20 26.3 9.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#00814F",
                    d:
                      "M23.6 57.1s-6.3-17.6-5.9-27.9C18 18.9 19 5.5 19 5.5L42.8 0s-1.4 21.7-.9 30.2c.6 8.6 6.5 24.2 6.5 24.2l-24.8 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#009D5B",
                    d:
                      "M27.4 50.4s-5.3-16.4-5-21.9c.3-5.4.1-15.5.1-15.5s2.3-.5 3.4-1.8c1.4-1.7.9-3.3.9-3.3l6.7-1.5s.3 2 1.5 2.9c1.2.8 3.4.8 3.4.8s-.9 17.5.3 20.9c1.2 3.4 3.7 15.8 3.7 15.8L41.2 51l-9.6 2s.2-1.4-1.7-2.3c-1.9-.7-2.5-.3-2.5-.3z",
                  }),
                  r.default.createElement("circle", {
                    fill: "#37AE4C",
                    cx: "31",
                    cy: "28.9",
                    r: "4.8",
                  }),
                  r.default.createElement("circle", {
                    fill: "#00814F",
                    cx: "30.1",
                    cy: "17.1",
                    r: "3.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#FEB48D",
                    d:
                      "M53.1 67.6c3.7-2.8 10.4-6.7 14.4-1S62.3 91.7 53.6 90c-8.6-1.8-10.1-5.2-10.1-5.2s-3.8 1.2-6.8.3c-3-.9-16.7-10-16.7-10s-4.8-24.7-4.4-24.8c.4-.1 11.2-7.3 11.8-7.5s7.7 3.3 7.7 3.3l12.8 8.6 5.2 12.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FEC3A4",
                    d:
                      "M13.2 66s-2.3-.9-2.4.4-.4 5.5.4 7.3c.8 1.8 14.6 9.4 16.3 2S17.8 65 17.8 65l-4.6 1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FED0B7",
                    d:
                      "M13.3 54.8s-1.9-.1-2 1.3c-.2 1.4-.5 8.7.4 10s15.4 7.8 15.5-.4c-.1-8.1-13.9-10.9-13.9-10.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#37AE4C",
                    d:
                      "M17.9 53.8s3.6-18.3 9.2-27S40.3 7.1 40.3 7.1l23.3 7.5S51.3 32.5 47.3 40.1s-6.8 24.1-6.8 24.1L17.9 53.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#80DE4E",
                    d:
                      "M24.6 50.1s3.9-16.8 6.9-21.3c3-4.5 8-13.2 8-13.2s2.2.7 3.8.2c2.1-.7 2.5-2.4 2.5-2.4l6.6 2.1s-.8 1.9-.2 3.2c.6 1.3 2.5 2.4 2.5 2.4s-9.8 14.6-10.5 18.1c-.7 3.6-4.9 15.5-4.9 15.5l-3.2 3-9.3-3.2s.9-1.2-.3-2.8c-1.1-1.7-1.9-1.6-1.9-1.6z",
                  }),
                  r.default.createElement("circle", {
                    fill: "#37AE4C",
                    cx: "38.7",
                    cy: "33.5",
                    r: "4.8",
                  }),
                  r.default.createElement("circle", {
                    fill: "#37AE4C",
                    cx: "44",
                    cy: "22.8",
                    r: "3.4",
                  }),
                  r.default.createElement("path", {
                    opacity: ".1",
                    fill: "#00814F",
                    d:
                      "M17.6 29.1L47.3 40l-9.7 21.7S24.3 59.6 21.7 54c-2.5-5.6-4.1-24.9-4.1-24.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FED0B7",
                    d:
                      "M32.9 52.9s-8.8-17.2 2.3-17.7c7.6-.4 3.2 5.6 6 8.2s8.9 4 12.9 8.3c4 4.4 5.7 9.9 5.7 9.9l2.9 1.8s-5.4 1.2-7.9 4.6-5.2 8.2-5.2 8.2-7.3-1.3-13.5-7.5c-6.2-6-3.2-15.8-3.2-15.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFDDCB",
                    d:
                      "M12.2 40.6s-3.4.2-3.6 4.8c-.2 4.6 1.3 8.7 3.9 10.1 2.6 1.4 10.8 2.8 11.6-3.3.9-6-7.9-11.6-11.9-11.6z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "comparing-awards", viewBox: "0 0 94.5 60.6" },
                  r.default.createElement("path", {
                    fill: "#48B2BA",
                    d:
                      "M32.4 12.2c-1.4-.9-3-2.1-3-3.7V3.3L18.9 9.8 0 20.7V26c0 1.6 1.4 3 2.7 3.6l29.7-17.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#48B2BA",
                    d: "M83.5 41.2L53.1 58.8 2.6 29.5l29.7-17.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#9EDCD7",
                    d: "M94.1 43l-30 17.6-50.5-29.4 30.7-16.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#33A2B2",
                    d: "M83.5 41.2L57.1 56.5 13.6 31.2l25.7-15",
                  }),
                  r.default.createElement("path", {
                    fill: "#E1EEE2",
                    d: "M94.5 38.2L64.1 55.8 13.6 26.5 43.3 9.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#81609E",
                    d: "M48.1 16.7L26.9 28.9l-3-1.8 21.2-12.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#32AAEA",
                    d:
                      "M57.1 22L36 34.2l-3-1.8 21.1-12.2m21.1 12.1L54.1 44.5l-3-1.7 21.1-12.2m9 5.2L60.1 48l-3-1.8L78.2 34m-23.9-3.6L42 37.5l-3-1.7 12.3-7.1m9.1 5.2L48 41l-3-1.7 12.4-7.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#9EDCD7",
                    d:
                      "M79.4 16.3c-6.3-3.6-16.5-3.6-22.8 0s-6.3 9.5 0 13.2c6.3 3.6 16.5 3.6 22.8 0s6.3-9.5 0-13.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#48B2BA",
                    d:
                      "M56.9 18.2l-4.5 2.6c-.5 1.2-.6 2.4-.3 3.6l7.8-4.5-3-1.7zm14.8-1.7L53.5 27c.6.7 1.4 1.4 2.4 2.1l18.8-10.8-3-1.8zM59.2 30.7c1.3.5 2.7.9 4.1 1.1l5.4-3.1-3-1.7-6.5 3.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#0094E5",
                    d:
                      "M79.7 13l11.7-6.7c2.3-1.3 2.3-4.5 0-5.9-1-.6-2.3-.6-3.4 0L72.9 9.2l6.8 3.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#3A384C",
                    d:
                      "M74.4 16l11.7-6.7c2.3-1.3 2.3-4.6 0-5.9-1-.6-2.3-.6-3.4 0l-15.1 8.7 6.8 3.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#006094",
                    d:
                      "M79.1 9.5c-6.3-3.6-16.5-3.6-22.8 0s-6.3 9.5 0 13.2c6.3 3.6 16.5 3.6 22.8 0 6.3-3.7 6.3-9.6 0-13.2zm-3.3 9.7c-2.1 1.2-5 1.9-8.1 1.9s-6-.7-8.1-1.9c-1.6-.9-2.6-2.1-2.6-3.1 0-1.1.9-2.2 2.6-3.1 2.1-1.2 5-1.9 8.1-1.9s6 .7 8.1 1.9c1.6.9 2.6 2.1 2.6 3.1s-1 2.1-2.6 3.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A2E8FF",
                    d:
                      "M67.7 21.2c-3.1 0-6-.7-8.1-1.9-1.6-.9-2.6-2.1-2.6-3.1 0-1.1.9-2.2 2.6-3.1 2.1-1.2 5-1.9 8.1-1.9s6 .7 8.1 1.9c1.6.9 2.6 2.1 2.6 3.1 0 1.1-.9 2.2-2.6 3.1-2.1 1.2-5.1 1.9-8.1 1.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#2577C1",
                    d:
                      "M69.2 23.8c0 .5-.4.9-.9.9h-3.1c-.5 0-.9-.4-.9-.9v-.1c0-.5.4-.9.9-.9h3.1c.5 0 .9.4.9.9v.1zm1.9-14.6c0 .5-.4.9-.9.9h-3.1c-.5 0-.9-.4-.9-.9v-.1c0-.5.4-.9.9-.9h3.1c.5 0 .9.4.9.9v.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#56B9FF",
                    d:
                      "M72.2 11.5c-1.4-.3-3-.5-4.5-.5-3.1 0-6 .7-8.1 1.9C58 13.8 57 15 57 16s.8 2 2.2 2.9l13-7.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E1FFFF",
                    d:
                      "M69.8 20h-3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h3.6c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "understanding-your-award", viewBox: "0 0 62.7 93.7" },
                  r.default.createElement("path", {
                    fill: "#999",
                    d: "M20.1 39.1L0 67v26.7l40.3-23.3V43.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#16759E",
                    d: "M34.7 72.4V11.7L6.8 27.9v60.7",
                  }),
                  r.default.createElement("path", {
                    fill: "#006094",
                    d: "M34.6 72.3l.1-38.4L6.8 50.2v38.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#CCC",
                    d: "M40.3 70.4L0 93.7V67l15.6 3.2 9-5.2 15.7-21.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E6",
                    d: "M0 93.7l15.6-23.5 9-5.2 15.7 5.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#33A2B2",
                    d:
                      "M20.8 18.6v56l28.1-16v-55c0-2-1.6-3.6-3.6-3.6L18.1 15.7c1.5 0 2.7 1.3 2.7 2.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#48B2BA",
                    d:
                      "M20.9 18.6l.1 32 28.2-16.3V3.6c0-2-1.7-3.6-3.7-3.6L18.2 15.7c1.5 0 2.7 1.3 2.7 2.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E1EEE2",
                    d:
                      "M55.9 69.3V22.4L27.8 38.6v37.3c0 4.4 4.7 6.7 8.5 4.5l19.6-11.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#9EDCD7",
                    d: "M56.3 68.7l-.4-18.8-28 16.4 5.8 15.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#F35B6A",
                    d: "M46.3 37.3L31.8 46v-2.8l14.5-8.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#32AAEA",
                    d:
                      "M51.7 41.5L31.8 53.3v-2.8l19.9-11.8m0 8.7L31.8 59.3v-2.8l19.9-11.8m0 9.1L31.8 65.6v-2.8L51.7 51",
                  }),
                  r.default.createElement("path", {
                    fill: "#EDF5EE",
                    d:
                      "M62.7 51l-28 16.2v11.3c0 .9 0 1.8-.5 2.6-.4.6-.9 1.3-1.5 1.7l27.6-16.1c1.6-.9 2.4-2.6 2.4-4.5V51z",
                  }),
                  r.default.createElement("path", {
                    fill: "#0094E5",
                    d: "M31.8 65.6v-1.5l19.9-11.8v1.5",
                  }),
                  r.default.createElement("path", {
                    fill: "#9EDCD7",
                    d:
                      "M31.6 83.1H31c-1.8 0-3.2-1.4-3.2-3.2V66.3h7v13.6c0 1.7-1.4 3.2-3.2 3.2z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { id: "unlocking-financial-aid", viewBox: "0 0 65.5 94.8" },
                  r.default.createElement("path", {
                    fill: "#FFA800",
                    d:
                      "M62.9 93.3c-3.4 2-9 2-12.4 0L26.3 78.9l-4.1-16.4 40.7 23.7c3.4 2 3.4 5.2 0 7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD34",
                    d:
                      "M38.7 43.7V31.4H20.2v39.5c0 2.7.8 5.1 3.1 6.4l24.8 14.8c1.2.8 2.7 1.2 3.8 1.6V51.5l-13.2-7.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFDE79",
                    d:
                      "M48.9 49.6l.4 43c1.2.8 2.6 1.5 3.8 1.8l.1-42.8-4-2h-.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFBA00",
                    d:
                      "M62.9 51.1c-3.4 2-9 2-12.4 0L22.2 34.7l20.6-2.3 20.1 11.5c3.4 2 3.4 5.2 0 7.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFBA00",
                    d:
                      "M22.7 28c3.4-2 9-2 12.4 0l28.3 16.4-.3 13.3-40.5-22.6c-3.3-1.9-3.3-5.1.1-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFA800",
                    d:
                      "M62.9 51.1c1.5-1 2.6-2.3 2.6-3.6v42.2H53.2V51.9c3.2.9 7.3.9 9.7-.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FF9400",
                    d:
                      "M59.5 47.9c-1.6.9-4.3.9-5.9 0s-1.6-2.5 0-3.4 4.3-.9 5.9 0 1.7 2.5 0 3.4z",
                  }),
                  r.default.createElement(
                    "g",
                    { fill: "#333" },
                    r.default.createElement("path", {
                      d:
                        "M31.2 57.2c0 3.6 2.5 8 5.6 9.8s5.6.3 5.6-3.3-2.5-8-5.6-9.8-5.6-.3-5.6 3.3z",
                    }),
                    r.default.createElement("path", {
                      d: "M32.7 70.2l8.2 4.7L39.3 64l-5-2.9",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "#E6E6E6",
                    d:
                      "M41.5 61.5c-.6-1.5-2.8-5.5-4.1-6l-22.5 13 7.2 4.2 19.4-11.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E6",
                    d:
                      "M38.3 54.9l-6.9 4c.5 2.3 1.7 4.7 3.4 6.4l7.3-4.2c-.7-2.3-2.1-4.6-3.8-6.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M40.4 60.1c.4-.2-.7-3-.7-3L29.5 63c-.8.5-1 1.6-.3 2.3.5.5 1.2.6 1.8.3l9.4-5.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M33.7 64l7.8-4.5c-.4-.9-.9-1.8-1.5-2.6l-7.8 4.5c.4.9.9 1.8 1.5 2.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d:
                      "M11.9 86.7C5.3 86.7 0 82.1 0 76.5s5.5 5.4 12 5.4 11.8-11.1 11.8-5.4c0 5.7-5.3 10.2-11.9 10.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d:
                      "M11.9 65.1C5.3 65.1 0 69.7 0 75.3s5.3 10.2 11.9 10.2 11.9-4.6 11.9-10.2-5.3-10.2-11.9-10.2zm0 16.1c-4 0-7.2-2.6-7.2-5.9 0-3.2 3.2-5.9 7.2-5.9s7.2 2.6 7.2 5.9c0 3.3-3.2 5.9-7.2 5.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E6",
                    d:
                      "M11.9 62.9C5.3 62.9 0 67.5 0 73.1s5.3 10.2 11.9 10.2 11.9-4.6 11.9-10.2-5.3-10.2-11.9-10.2zm0 16c-4 0-7.2-2.6-7.2-5.9s3.2-5.9 7.2-5.9 7.2 2.6 7.2 5.9-3.2 5.9-7.2 5.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M21.3 78.1l-2.4 2.4c-.5.5-1.3.5-1.8 0l-.2-.2c-.5-.5-.5-1.3 0-1.8l2.4-2.4c.5-.5 1.3-.5 1.8 0l.2.2c.5.5.5 1.3 0 1.8zM7.4 67.6L5 70c-.5.5-1.3.5-1.8 0l-.2-.2c-.5-.5-.5-1.3 0-1.8l2.4-2.4c.5-.5 1.3-.5 1.8 0l.2.2c.5.5.5 1.3 0 1.8z",
                  }),
                  r.default.createElement(
                    "g",
                    { fill: "#84908E" },
                    r.default.createElement("path", {
                      d:
                        "M61.8 33.1c-1.5 1-4 1-5.5 0s-1.5-2.6 0-3.5c1.5-1 4-1 5.5 0 1.5.9 1.5 2.5 0 3.5zm-28.6 0c-1.5 1-4 1-5.5 0s-1.5-2.6 0-3.5c1.5-1 4-1 5.5 0 1.5.9 1.5 2.5 0 3.5z",
                    }),
                    r.default.createElement("path", {
                      d:
                        "M26.6 19.4v10.4c0 1.1 7.7 1.1 7.7 0V19.4c0-6.6 3.7-11.7 9.6-11.7 5.9 0 11.3 5.1 11.3 11.7v10.4c0 1.1 7.7 1.1 7.7 0V19.4C62.9 7.9 54 0 43.7 0S26.6 7.9 26.6 19.4z",
                    }),
                    r.default.createElement("path", {
                      d: "M55.2 27h7.7v4.1h-7.7V27zm-28.6 0h7.7v4.1h-7.7V27z",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "#D6D6C9",
                    d:
                      "M57.4 29.4h-.2c-.7 0-1.3-.6-1.3-1.3v-3.8c0-.7.6-1.3 1.3-1.3h.3c.7 0 1.3.6 1.3 1.3v3.8c0 .7-.6 1.3-1.4 1.3zm-28.8 0h-.3c-.7 0-1.3-.6-1.3-1.3v-3.8c0-.7.6-1.3 1.3-1.3h.3c.7 0 1.3.6 1.3 1.3v3.8c0 .7-.6 1.3-1.3 1.3z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { viewBox: "0 0 96 82", id: "cost-of-college" },
                  r.default.createElement("path", {
                    fill: "#212121",
                    d: "M20.3 27.9v21.7C20.3 54.9 26 67 43.7 67h.1V27.9H20.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M43.8 27.9V67c15.5-.1 23.5-12.6 23.5-17.4V27.9H43.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#535355",
                    d: "M0 27.5L44.1 2.1l41.4 26.5L43.8 53",
                  }),
                  r.default.createElement("path", {
                    fill: "#3A393A",
                    d:
                      "M41.3 12.5c-4.5 2.7-7.4 5.5-9.3 8.1-2.7 3.7-1.9 9 1.8 11.8 5.8 4.3 13.2 5.7 20.1 3.8 4.3-1.2 8.8-3.3 13.7-6.4l10.3-6L51.3 6.7l-10 5.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#3A393A",
                    d:
                      "M26.5 42.9L58 24.5c0-4.2-4.9-6.8-9.2-4.2l-30.2 18 5.1 3.1 2.8 1.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#6F1B55",
                    d: "M83.4 64.3l5.7-3.3L64 60l-1.7 6.2 24.2 4",
                  }),
                  r.default.createElement("path", {
                    fill: "#9F1D52",
                    d: "M82.9 74.5L67.8 61.7l-10.7 3.5 15.1 12.9 2.4-3.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#48B2B9",
                    d:
                      "M62.1 59.4C65 53.9 70 45.3 73.8 42c4.9-4.2 11-2.5 12.7 2.2L68.3 60.7l-6.2-1.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CAE5E0",
                    d:
                      "M69.8 63.1c5 0 15-5.1 17.2-6.7 4.8-3.5 6.5-7 5.3-11.9-1.4-5.7-5.9-8.4-8.2-8.9-8.2 7.4-13.7 14.6-18.5 20.7l4.2 6.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E1EDE0",
                    d: "M65.8 58.6l26.6-24.3 3.9 7-29 19.5",
                  }),
                  r.default.createElement("path", {
                    fill: "#DA1D45",
                    d:
                      "M66 68.1l-5.8-10.2s.8-2.5 4.8-4.2c2.5-1.1 6.3-1 8.2 2.1s1.6 5.7-.2 7.9c-1.7 2-7 4.4-7 4.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#EF4252",
                    d:
                      "M74.5 59.5c-.1-1.1-.5-2.4-1.3-3.7-1.9-3.1-5.7-3.1-8.2-2.1l-.6.3c-.3.8-.4 1.6-.3 2.5.3 3.3 3.1 5.7 6.2 5.4 1.8-.2 3.2-1.1 4.2-2.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#19769F",
                    d:
                      "M48 80.6c-10.6 1.6-14.3-15.7-6.8-18.7 4.1-1.7 7.5-1.7 10.7-1.7l13.2 7.9C58.8 75.2 50.7 80 48 80.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#48B2B9",
                    d:
                      "M49 75.3c1.9-5-1.9-15.7-7.8-13.4 5.8-2.3 12.1-3.1 21.2-4.5l3.2 6.9C61.5 68.7 53 74.6 49 75.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CAE5E0",
                    d:
                      "M48 80.6c4.3-1 7.4-6.6 4.7-15.5-1.9-6.2-7.4-8.4-11-9C53 55 62.4 54 65.8 55.8c3.4 1.8 4.6 6.3 3 10.2-1 2.5-11.6 12.2-20.8 14.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E1EDE0",
                    d:
                      "M67.3 57c-2.8-.9-12.6 1.2-22.3 2.5l4.6 9.3c8.5-4.6 18.3-10 19.6-9.7l-.6-1.7-1.3-.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#F68E45",
                    d:
                      "M15.6 54.1v12.6c0 1.9 2.3 3.5 5.1 3.5V49c-2.8 0-5.1 2.3-5.1 5.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M20.7 49v24.2c2.5 0 4.6-1.2 5-2.9h.1V54.2c0-2.9-2.3-5.2-5.1-5.2z",
                  }),
                  r.default.createElement("circle", {
                    cx: "20.7",
                    cy: "48.6",
                    r: "3.9",
                    fill: "#F68E45",
                  }),
                  r.default.createElement("path", {
                    fill: "#FEED47",
                    d:
                      "M20.7 48.2c-1.3 0-2.3-1-2.3-2.3v-4.5c0-1.8 1-3.6 2.6-4.5l2.1-1.2v10.2c-.1 1.2-1.1 2.3-2.4 2.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#8AC64E",
                    d: "M42.4 16.4l18.4 12.1L89.1 12 70.7 0",
                  }),
                  r.default.createElement("path", {
                    fill: "#02834D",
                    d:
                      "M42.4 16.4c-3.1 1.8-5.1 3.8-6.4 5.6-1.9 2.6-1.3 6.2 1.2 8.1 4 3 9.1 3.9 13.8 2.6 3-.8 6.4-2.1 9.7-4.2L42.4 16.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#212121",
                    d:
                      "M40.4 24.2c2.7-1.6 5.9-1.5 8.5.2 1.2.8 1.2 2.6-.1 3.4-2.5 1.5-5.6 1.5-8.1 0l-.2-.1c-1.4-.9-1.4-2.8-.1-3.5z",
                  }),
                  r.default.createElement(
                    "g",
                    { fill: "#37AD4C" },
                    r.default.createElement("path", {
                      d:
                        "M74 9.1c-3-2-7.7-2.2-10.6-.6-2.8 1.7-2.7 4.6.3 6.6l3-1.8c-1.2-.8-1.3-2-.1-2.7s3.1-.6 4.4.2c1.2.8 1.3 2 .1 2.7l3.2 2.1c2.8-1.6 2.7-4.5-.3-6.5z",
                    }),
                    r.default.createElement("path", {
                      d:
                        "M56.4 19.3c3 2 7.7 2.2 10.6.6s2.7-4.6-.3-6.6l-3 1.8c1.2.8 1.3 2 .1 2.7s-3.1.6-4.4-.2c-1.2-.8-1.3-2-.1-2.7l-3.2-2.1c-2.8 1.6-2.7 4.6.3 6.5zm18.3-8.7l-3.2-2 2.6-1.5 3.2 2.1",
                    }),
                    r.default.createElement("path", {
                      d: "M58.8 19.9l-3.1-2.1-2.6 1.5 3.2 2.1",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "#FEED47",
                    d:
                      "M46.5 27.3c0-2.5-2.8-3.9-5.3-2.4L23 35.6l-2.9 3.3 2.9 2.2 21-12.3c.8.1 1.7 0 2.5-.2v-1.3z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { viewBox: "0 0 206 175", id: "campus" },
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M0 95.8h37v12.3H0V95.8zM169.4 112h37v12.3h-37V112z",
                  }),
                  r.default.createElement("path", {
                    fill: "#02824F",
                    d: "M169.4 98.5h37V112h-37V98.5zM0 82.2h37v13.5H0V82.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M89.5 56.3L0 108l116.8 67.9 89.6-51.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#02824F",
                    d: "M89.5 44L0 95.8l116.8 67.8 89.6-51.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#39AE4C",
                    d: "M89.5 30.5L0 82.3l116.8 67.8 89.6-51.6",
                  }),
                  r.default.createElement("path", {
                    fill: "#E8A06B",
                    d: "M121.7 54l-85.4 49.4 32.1 18.7 85.5-49.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#EFBB96",
                    d: "M125.6 56.2l-85.4 49.4L79 128.2 164.4 79",
                  }),
                  r.default.createElement("path", {
                    fill: "#E8A06B",
                    d: "M93.4 73.4L83.2 96l15.7-1.4L162.7 78",
                  }),
                  r.default.createElement("path", {
                    fill: "#E8A06B",
                    d: "M79.1 79.9L75 89.5l15.8-1.4 4.1-10",
                  }),
                  r.default.createElement("path", {
                    fill: "#3E475F",
                    d: "M75.1 54.5l6.6 3.9.1-8.4-6.7-3.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#02824F",
                    d:
                      "M53.2 86.2l-11.6 6.7-11.7-6.7 11.7-6.7m36-6.8l-12.3 7-12.2-7 12.2-7.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E5",
                    d: "M35.8 56.8l16.4 9.5V33.9l-16.4-9.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E5",
                    d: "M35.8 24.7l16.4 9.7-7.3-11.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#4D4D4D",
                    d: "M52.2 34.4L92 11.3 83.7 0 44.9 22.5",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d: "M91.5 43.5L52.2 66.3V34.4l39.3-23.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M35.8 24.6L73.9 2.4 83.8 0 44.9 22.5",
                  }),
                  r.default.createElement("path", {
                    fill: "#3E4741",
                    d:
                      "M40 38.2l7.1 4.1v-5.6c0-2.6-1.4-5-3.7-6.3-1.5-.9-3.4.2-3.4 2v5.8zm0 13.9l7.1 4.1v-8.9L40 43.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#CDCCCC",
                    d: "M63.9 59.7l31 17.4V45.5l-31-18.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M118.4 26l4.1-2.3L91.6 8.8 76 4.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#676767",
                    d: "M118.4 26L89 42.3 63.5 27.6 76 4.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M62.3 64.9h6V72h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d: "M62.3 60.8h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d:
                      "M67.5 73.5c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0 1.1 1.9 0 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d:
                      "M67.5 69.3c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0 1.1 2 0 2.7z",
                  }),
                  r.default.createElement("circle", {
                    cx: "65.3",
                    cy: "53.5",
                    r: "12.1",
                    fill: "#80C348",
                  }),
                  r.default.createElement("path", {
                    fill: "#61BB46",
                    d:
                      "M74.6 45.7c.5 1.3.8 2.7.8 4.2C75.4 56.6 70 62 63.3 62c-3.7 0-7-1.7-9.2-4.3 1.7 4.6 6.1 7.9 11.3 7.9 6.7 0 12.1-5.4 12.1-12.1-.1-3-1.2-5.7-2.9-7.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CDCCCC",
                    d: "M81.3 83.3l37.7 22.2v-48L81.3 35.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#B8BEBD",
                    d: "M81.3 60L119 82.2V57.5L81.3 35.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d: "M69.8 42.4h7.6V89h-7.6V42.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M76.3 90.8c-1.5 1-3.9 1-5.4 0s-1.5-2.5 0-3.5 3.9-1 5.4 0 1.5 2.5 0 3.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d:
                      "M75.3 51.1c-1.8.2-4.1-.9-5-2.5-1-1.6-.2-3 1.6-3.3s4.1.9 5 2.5.2 3.1-1.6 3.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d:
                      "M77.5 52.1V41.4h-7.6v7.1c0 .4.1.8.4 1.3 1 1.6 4.4 3.5 6.2 3.2.4-.1.8-.2 1-.5v-.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d: "M80.7 48.5h7.6v46.6h-7.6V48.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d:
                      "M88.3 57.5V46.8h-7.6v7.1c0 .4.1.8.4 1.3 1 1.6 4.4 3.5 6.2 3.2.4-.1.8-.2 1-.5v-.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M87.2 96.9c-1.5 1-3.9 1-5.4 0s-1.5-2.5 0-3.5 3.9-1 5.4 0 1.5 2.5 0 3.5zm9.7-38.8h7.6v46.6h-7.6V58.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d:
                      "M104.6 67V56.3H97v7.1c0 .4.1.8.4 1.3 1 1.6 4.4 3.5 6.2 3.2.4-.1.8-.2 1-.5V67z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M103.4 106.5c-1.5 1-3.9 1-5.4 0s-1.5-2.5 0-3.5 3.9-1 5.4 0 1.5 2.5 0 3.5zm4.4-42.3h7.6v43.9h-7.6V64.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d:
                      "M115.4 62.7h-7.6v7.1c0 .4.1.8.4 1.3 1 1.6 4.4 3.5 6.2 3.2.4-.1.8-.2 1-.5V62.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d: "M66.6 42.1L119 72.7 92.9 35.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#CDCCCC",
                    d: "M74.9 43.3L91.1 39l16.1 23.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#4D4D4D",
                    d: "M119 72.7l43.8-25.4-26.2-37.6-43.7 25.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M110.3 16.7L66.6 42.1l26.3-7 43.7-25.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d: "M162.8 80.1L119 105.5V72.7l43.8-25.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#989898",
                    d:
                      "M86.8 42.6c0 2.4 1.7 5.3 3.8 6.5s3.8.2 3.8-2.2c0-2.4-1.7-5.3-3.8-6.5s-3.8-.2-3.8 2.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#989898",
                    d: "M90.8 50.8l-5.4-9.2 2.6-1.5 5.3 9.3",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFF",
                    d:
                      "M84.3 44.1c0 2.4 1.7 5.3 3.8 6.5s3.8.2 3.8-2.2c0-2.4-1.7-5.3-3.8-6.5s-3.8-.2-3.8 2.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CDCCCC",
                    d: "M132.3 97.7l31 17.3V83.4l-31-18.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M186.8 63.9l4.1-2.3-30.6-17.7-16.8-5.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#676767",
                    d: "M186.8 63.9l-29.4 16-25.5-14.7 11.6-26.5",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d: "M206.4 98.6l-43.9 25.1V92.1l43.9-25.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E5",
                    d: "M146.1 113.9l16.4 9.8v-32l-16.4-9.2",
                  }),
                  r.default.createElement("path", {
                    fill: "#E6E6E5",
                    d: "M146.1 82.5l16.4 9.6-7.3-11.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#4D4D4D",
                    d: "M162.5 92.1l43.9-25.9-8.1-11.1-43.1 25.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#333",
                    d: "M146.1 82.3l41.6-24.1 10.6-3.1-43.1 25.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#39423C",
                    d:
                      "M175.2 96.9l-7.1 4.1v-8.9l7.1-4.1m0 23.5l-7.1 4.1v-8.9l7.1-4.1M189 89.8l-7.1 4.1V85l7.1-4.1m0 23.6l-7.1 4.1v-8.9l7.1-4.1m13.3-12.8l-7.2 4.1V78l7.1-4.1m.1 23.5l-7.2 4.1v-8.8l7.1-4.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#3E4741",
                    d:
                      "M150.3 95.9l7.1 4.1v-5.6c0-2.6-1.4-5-3.7-6.3-1.5-.9-3.4.2-3.4 2v5.8zm0 13.9l7.1 4.1V105l-7.1-4.1",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M38.6 78.6h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d: "M38.6 74.5h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d:
                      "M43.7 87.2c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0 1.2 1.9 0 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d:
                      "M43.7 83c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0 1.2 2 0 2.7z",
                  }),
                  r.default.createElement("circle", {
                    cx: "41.6",
                    cy: "67.2",
                    r: "12.1",
                    fill: "#80C348",
                  }),
                  r.default.createElement("path", {
                    fill: "#61BB46",
                    d:
                      "M50.8 59.4c.5 1.3.8 2.7.8 4.2 0 6.7-5.4 12.1-12.1 12.1-3.7 0-7-1.7-9.2-4.3 1.7 4.6 6.1 7.9 11.3 7.9 6.7 0 12.1-5.4 12.1-12.1-.1-3-1.1-5.7-2.9-7.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#02824F",
                    d:
                      "M118.6 125.4l-11.6 6.7-11.7-6.7 11.7-6.8m33.7-5.7l-11.7 6.7-11.7-6.7 11.7-6.8",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M126 105.1h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d: "M126 100.9h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d:
                      "M131.1 113.6c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0c1.2.7 1.2 1.9 0 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d:
                      "M131.1 109.4c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7 3.1-.7 4.2 0c1.2.8 1.2 2 0 2.7z",
                  }),
                  r.default.createElement("circle", {
                    cx: "129",
                    cy: "93.6",
                    r: "12.1",
                    fill: "#80C348",
                  }),
                  r.default.createElement("path", {
                    fill: "#61BB46",
                    d:
                      "M138.2 85.8c.5 1.3.8 2.7.8 4.2 0 6.7-5.4 12.1-12.1 12.1-3.7 0-7-1.7-9.2-4.3 1.7 4.6 6.1 7.9 11.3 7.9 6.7 0 12.1-5.4 12.1-12.1 0-3-1.1-5.7-2.9-7.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d: "M104 118h6v7.1h-6V118z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d: "M104 113.9h6v7.1h-6v-7.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CD895B",
                    d:
                      "M109.1 126.5c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7c1.2-.7 3.1-.7 4.2 0s1.1 2 0 2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#C4743B",
                    d:
                      "M109.1 122.4c-1.2.7-3.1.7-4.2 0s-1.2-2 0-2.7c1.2-.7 3.1-.7 4.2 0s1.1 1.9 0 2.7z",
                  }),
                  r.default.createElement("circle", {
                    cx: "107",
                    cy: "106.5",
                    r: "12.1",
                    fill: "#80C348",
                  }),
                  r.default.createElement("path", {
                    fill: "#61BB46",
                    d:
                      "M116.2 98.8c.5 1.3.8 2.7.8 4.2 0 6.7-5.4 12.1-12.1 12.1-3.7 0-7-1.7-9.2-4.3 1.7 4.6 6.1 7.9 11.3 7.9 6.7 0 12.1-5.4 12.1-12.1-.1-3-1.1-5.7-2.9-7.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#B4B4B4",
                    d: "M77.5 56.2v-4.9",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { viewBox: "0 0 93 78", id: "what-is-financial-aid" },
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d:
                      "M63.3 29.1c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.3-4.1 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d: "M33.3 31.9h34.5v4.8H33.3v-4.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDE045",
                    d:
                      "M63.3 25.4c7 4 7 10.6 0 14.6S45 44 38 40s-7-10.6 0-14.6 18.3-4 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M50.7 38.5c-3.6 0-7-.8-9.4-2.2-1.9-1.1-3-2.4-3-3.6 0-1.2 1.1-2.5 3-3.6 2.4-1.4 5.9-2.2 9.4-2.2s7 .8 9.4 2.2c1.9 1.1 3 2.4 3 3.6 0 1.2-1.1 2.5-3 3.6-2.4 1.4-5.9 2.2-9.4 2.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M41.3 30.9c2.4-1.4 5.9-2.2 9.4-2.2s7 .8 9.4 2.2c1.4.8 2.4 1.8 2.8 2.7.1-.3.2-.6.2-.9 0-1.2-1.1-2.5-3-3.6-2.4-1.4-5.9-2.2-9.4-2.2s-7 .8-9.4 2.2c-1.9 1.1-3 2.4-3 3.6 0 .3.1.6.2.9.4-.9 1.3-1.9 2.8-2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d:
                      "M61.1 22c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.4-4.1 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d: "M30.4 25.2h35.5V29H30.4v-3.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDE045",
                    d:
                      "M61.1 18.3c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.4-4 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d:
                      "M64.4 15.1c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.3-4 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAA51A",
                    d: "M34.2 18.5h35.3v3.8H34.2v-3.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDE045",
                    d:
                      "M64.4 11.4c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.3-4 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M63.3 6.6c7 4 7 10.6 0 14.6s-18.3 4-25.3 0-7-10.6 0-14.6 18.3-4 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M33.3 9.9h34.5v4.8H33.3V9.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M63.3 3c7 4 7 10.6 0 14.6s-18.3 4-25.3 0S31 7 38 3s18.3-4.1 25.3 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M50.7 16.1c-3.6 0-7-.8-9.4-2.2-1.9-1.1-3-2.4-3-3.6s1.1-2.5 3-3.6c2.4-1.4 5.9-2.2 9.4-2.2s7 .8 9.4 2.2c1.9 1.1 3 2.4 3 3.6s-1.1 2.5-3 3.6c-2.4 1.4-5.9 2.2-9.4 2.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M41.3 8.5c2.4-1.4 5.9-2.2 9.4-2.2s7 .8 9.4 2.2c1.4.8 2.4 1.8 2.8 2.7.1-.3.2-.6.2-.9 0-1.2-1.1-2.5-3-3.6-2.4-1.4-5.9-2.2-9.4-2.2s-7 .8-9.4 2.2c-1.9 1.1-3 2.4-3 3.6 0 .3.1.6.2.9.4-1 1.3-1.9 2.8-2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAF7E8",
                    d:
                      "M54.4 1.2c0 .5-.4 1-1 1h-2.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h2.9c.6.1 1 .5 1 1zm-1.9 15.4c0 .5-.4 1-1 1h-2.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h2.9c.6 0 1 .5 1 1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M26 21.7c8 .2 11.1 6 6.9 12.8-4.2 6.8-14.2 12.2-22.3 12-8-.2-11.1-6-6.9-12.8C8 26.8 17.9 21.4 26 21.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M.6 38.8l31.5-16.9 2 3.7L2.6 42.5l-2-3.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M24.2 18.4c8 .2 11.1 6 6.9 12.8-4.2 6.8-14.2 12.2-22.3 12-8-.2-11.1-6-6.9-12.8 4.3-6.9 14.3-12.2 22.3-12z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M19.3 36c-3.1 1.7-6.5 2.6-9.3 2.5-2.2-.1-3.8-.7-4.3-1.8-.6-1.1-.2-2.8.9-4.6 1.5-2.4 4.1-4.7 7.2-6.4 3.1-1.7 6.5-2.6 9.3-2.5 2.2.1 3.8.7 4.3 1.8.6 1.1.2 2.7-.9 4.6-1.4 2.4-4 4.7-7.2 6.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M7.4 33.7c1.5-2.4 4.1-4.7 7.2-6.4 3.1-1.7 6.5-2.6 9.3-2.5 1.6.1 2.9.4 3.7 1.1 0-.3-.1-.6-.3-.9-.6-1.1-2.2-1.7-4.3-1.8-2.8-.1-6.2.8-9.3 2.5s-5.8 4-7.2 6.4C5.3 34 5 35.6 5.6 36.7c.1.3.3.5.6.7 0-1 .4-2.3 1.2-3.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAF7E8",
                    d:
                      "M14.9 25.1l-2.2 1.2c-.5.3-1.2.1-1.5-.5-.3-.5-.1-1.2.5-1.5l2.2-1.2c.5-.3 1.2-.1 1.5.5.3.5.1 1.2-.5 1.5zm5.8 12.6l-2.2 1.2c-.5.3-1.2.1-1.5-.5-.3-.5-.1-1.2.5-1.5l2.2-1.2c.5-.3 1.2-.1 1.5.5s.1 1.2-.5 1.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#02824F",
                    d:
                      "M54 33.8l-24 14c-1.5 1-2.4 2.7-2.4 4.7s.9 3.8 2.6 4.8l30.2 17.6 32.8-19L54 33.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#0F9A59",
                    d:
                      "M55.8 65.1c2.5-1.4 6.5-1.4 8.9 0l11.8-6.7c-2.4-1.4-2.5-3.6-.2-5.1L47.4 37.7l-12.5 9.9c-2.4 1.4-2.3 4.8.1 6.1l20.8 11.4c-.1.1 0 0 0 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A9D271",
                    d:
                      "M35.5 47.7l20 11.6 35-20.2-20-11.6c-1.7-1-3.8-1-5.6 0L30.1 47.6c1.6-.9 3.6-1 5.4.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#CFE5B4",
                    d:
                      "M50.3 48.2c2.5-1.4 6.4-1.4 8.9 0L73.4 40c-2.4-1.4-2.4-3.7 0-5.1l-8.9-5.1c-1.1-.7-2.6-.7-3.7 0L37.7 43.1c1.1-.6 2.4-.6 3.6.1l9 5c0 .1 0 0 0 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A9D271",
                    d:
                      "M59.2 33.8c-1-.6-2.2-.9-3.5-1l-7.2 4.1c.2.7.8 1.5 1.8 2 2.5 1.4 6.5 1.4 8.9 0 2.5-1.4 2.5-3.7 0-5.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M41.2 60.2c6.9 4 6.9 10.5 0 14.5s-18.1 4-25.1 0c-6.9-4-6.9-10.5 0-14.5 7-4 18.2-4 25.1 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M11.1 63.6h35.3v4.8H11.1v-4.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M41.2 56.5c6.9 4 6.9 10.5 0 14.5s-18.1 4-25.1 0c-6.9-4-6.9-10.5 0-14.5 7-4 18.2-4 25.1 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M28.7 69.6c-3.5 0-6.9-.8-9.3-2.2-1.9-1.1-3-2.4-3-3.6 0-1.2 1.1-2.5 3-3.6 2.4-1.4 5.8-2.2 9.3-2.2s6.9.8 9.3 2.2c1.9 1.1 3 2.4 3 3.6 0 1.2-1.1 2.5-3 3.6-2.4 1.4-5.8 2.2-9.3 2.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M19.4 62c2.4-1.4 5.8-2.2 9.3-2.2s6.9.8 9.3 2.2c1.4.8 2.4 1.8 2.8 2.7.1-.3.2-.6.2-.9 0-1.2-1.1-2.5-3-3.6-2.4-1.4-5.8-2.2-9.3-2.2s-6.9.8-9.3 2.2c-1.9 1.1-3 2.4-3 3.6 0 .3.1.6.2.9.4-.9 1.4-1.9 2.8-2.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAF7E8",
                    d:
                      "M31.4 56.9c0 .5-.4 1-1 1h-2.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h2.9c.6 0 1 .4 1 1zm-1 14.3c0 .5-.4 1-1 1h-3.8c-.5 0-1-.4-1-1 0-.5.4-1 1-1h3.8c.6.1 1 .5 1 1z",
                  })
                ),
                r.default.createElement(
                  "symbol",
                  { viewBox: "0 0 594.1 723.3", id: "not-created-equal" },
                  r.default.createElement("path", {
                    fill: "#333",
                    d:
                      "M438.3 556.4c66 38.2 66 100.1 0 138.3-66 38.2-173.3 38.2-240 0-66-38.2-66-100.1 0-138.3 66.8-38.2 174.1-38.2 240 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#4D4D4D",
                    d:
                      "M437.5 538.1c66 38.2 66 100.1 0 138.3s-173.3 38.2-240 0c-66-38.2-66-100.1 0-138.3s174.1-38.2 240 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#677775",
                    d:
                      "M396.2 558c42.9 24.6 42.9 65.2 0 90.6-42.9 24.6-113.7 24.6-156.6 0-42.9-24.6-42.9-65.2 0-90.6 43-24.7 112.9-24.7 156.6 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d:
                      "M396.2 543.6c42.9 24.6 42.9 65.2 0 90.6-42.9 24.6-113.7 24.6-156.6 0-42.9-24.6-42.9-65.2 0-90.6 43-25.4 112.9-24.6 156.6 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#D6D6C9",
                    d:
                      "M354.1 585h-78.7V98.6c0-21.5 17.5-38.9 38.9-38.9 21.5 0 38.9 17.5 38.9 38.9V585h.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E9E7DF",
                    d:
                      "M346.1 383.1c0 3.2-2.4 6.4-6.4 6.4h-4c-3.2 0-6.4-2.4-6.4-6.4v-58.8c0-3.2 2.4-6.4 6.4-6.4h4c3.2 0 6.4 2.4 6.4 6.4v58.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#D6D6C9",
                    d:
                      "M343 600.9c-15.1 8.7-40.5 8.7-55.6.8-15.1-7.9-15.1-23 0-31.8s40.5-8.7 55.6-.8c15.1 7.9 15.1 23 0 31.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#9BA3A1",
                    d: "M271.4 201.9l-42.9-50.1 66.8-38.2 24.6 61.2",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "307.2",
                    cy: "144.7",
                    fill: "#9BA3A1",
                    rx: "28.6",
                    ry: "33.4",
                  }),
                  r.default.createElement("path", {
                    fill: "#A9D4F1",
                    d:
                      "M200.7 231.3c46.1 26.2 46.1 69.1 0 96.2-46.1 26.2-120 26.2-166.1 0-46.1-26.2-46.1-69.1 0-96.2 46.1-26.2 120.8-26.2 166.1 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#8DBFE7",
                    d:
                      "M226.1 267.8c-7.9-31.8-38.9-64.4-69.9-73.9-14.3-4-26.2-2.4-34.2 4l-11.9 11.9c-2.4 2.4-4.8 5.6-5.6 8.7-24.6-3.2-52.5 3.2-71.5 15.1-12.7 7.9-19.9 14.3-19.9 30.2V279c0 10.3 5.6 18.3 19.9 26.2 28.6 15.1 75.5 14.3 103.3-3.2.8-.8 2.4-1.6 4-2.4 10.3 8.7 22.3 15.9 34.2 19.1 15.9 4.8 28.6 2.4 35.8-4.8l11.9-11.9c4.7-7.1 7.1-19 3.9-34.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M137.9 225.7c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2s-29.4-41.3-1.6-58.8c27.8-16.7 73.1-18.3 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M16.2 242.2L160 238l.5 16.7-143.8 4.2-.5-16.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M137.9 211.4c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2s-29.4-41.3-1.6-58.8 73.1-19.1 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M88.6 265.5c-14.3.8-27.8-2.4-38.2-7.9-7.9-4-11.9-9.5-12.7-14.3 0-4.8 4-10.3 11.9-15.1 9.5-5.6 23-9.5 37.4-10.3 14.3-.8 27.8 2.4 38.2 7.9 7.9 4 11.9 9.5 12.7 14.3 0 4.8-4 10.3-11.9 15.1-9.6 6.3-23.1 9.5-37.4 10.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M49.7 236.1c9.5-5.6 23-9.5 37.4-10.3 14.3-.8 27.8 2.4 38.2 7.9 5.6 3.2 9.5 7.2 11.9 10.3.8-1.6.8-2.4.8-4 0-4.8-4.8-10.3-12.7-14.3-9.5-5.6-23.8-7.9-38.2-7.9-14.3.8-27.8 4-37.4 10.3-7.2 4.8-11.9 10.3-11.9 15.1 0 1.6 0 2.4.8 4 1.5-4 5.5-8 11.1-11.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAF7E8",
                    d:
                      "M91.8 218.6H81.5c-2.4 0-4.8-1.6-4.8-4s1.6-4.8 4-4.8H91c2.4 0 4.8 1.6 4.8 4 .8 2.4-1.6 4.8-4 4.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M138.7 193.9c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2-28.7-15.1-29.5-41.3-1.6-58.8 27.8-16.7 73.1-18.3 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M16.2 210.4l143.8-4.2.5 16.7-143.8 4.2-.5-16.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M137.9 179.6c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2-28.6-15.1-29.4-41.3-1.6-58.8s73.1-19.1 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M88.6 233.7c-14.3.8-27.8-2.4-38.2-7.9-7.9-4-11.9-9.5-12.7-14.3 0-4.8 4-10.3 11.9-15.1 9.5-5.6 23-9.5 37.4-10.3 14.3-.8 27.8 2.4 38.2 7.9 7.9 4 11.9 9.5 12.7 14.3 0 4.8-4 10.3-11.9 15.1-9.6 6.3-23.1 9.5-37.4 10.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M49.7 204.3c9.5-5.6 23-9.5 37.4-10.3 14.3-.8 27.8 2.4 38.2 7.9 5.6 3.2 9.5 7.2 11.9 10.3.8-1.6.8-2.4.8-4 0-4.8-4.8-10.3-12.7-14.3-9.5-5.6-23.8-7.9-38.2-7.9-14.3.8-27.8 4-37.4 10.3-7.2 4.8-11.9 10.3-11.9 15.1 0 1.6 0 2.4.8 4 2.3-4 5.5-8 11.1-11.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FAF7E8",
                    d:
                      "M92.6 186.8H82.3c-2.4 0-4.8-1.6-4.8-4s1.6-4.8 4-4.8h10.3c2.4 0 4.8 1.6 4.8 4s-1.6 4.8-4 4.8z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A1C9DB",
                    d:
                      "M124.4 73.9c5.6-2.4 11.1 0 13.5 5.6l76.3 183.6s-5.6 10.3-15.9 15.1L118.8 87.4c-2.4-4.7 0-11.1 5.6-13.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M138.7 162.1c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2C9.9 209 9.1 182.8 37 165.3s73.1-19.1 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d: "M16.2 177.8l143-4.2.5 16.7-143 4.2-.5-16.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M137.9 147c28.6 15.1 29.4 41.3 1.6 58.8-27.8 16.7-73.1 18.3-101.7 3.2-28.6-15.1-29.4-41.3-1.6-58.8s73.1-18.3 101.7-3.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M88.6 201.1c-14.3.8-27.8-2.4-38.2-7.9-7.9-4-11.9-9.5-12.7-14.3 0-4.8 4-10.3 11.9-15.1 9.5-5.6 23-9.5 37.4-10.3 14.3-.8 27.8 2.4 38.2 7.9 7.9 4 11.9 9.5 12.7 14.3 0 4.8-4 10.3-11.9 15.1-9.6 6.3-23.1 10.3-37.4 10.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M219 261.5c7.9 31.8-11.1 49.3-42.1 40.5-31-8.7-62.8-42.1-69.9-73.9-8-31.8 11-49.3 42-40.5 31 9.5 62.8 42.1 70 73.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDBA12",
                    d:
                      "M125.2 181.3l99.3 104.1-12.1 11.6-99.3-104.1 12.1-11.6z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FDED47",
                    d:
                      "M230.1 251.2C238 283 219 300.4 188 291.7c-31-8.7-62.8-42.1-69.9-73.9s11.1-49.3 42.1-40.5c31 9.5 61.9 42.1 69.9 73.9z",
                  }),
                  r.default.createElement("path", {
                    fill: "#FFCD36",
                    d:
                      "M156.2 250.4c-9.5-10.3-16.7-22.3-19.9-33.4-2.4-8.7-1.6-15.1 2.4-19.1 3.2-3.2 10.3-4 19.1-1.6 11.1 3.2 23 11.1 32.6 21.5 9.5 10.3 16.7 22.3 19.9 33.4 2.4 8.7 1.6 15.1-2.4 19.1-3.2 3.2-10.3 4-19.1 1.6-10.4-3.3-22.3-11.2-32.6-21.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#6281B3",
                    d:
                      "M200.7 327.5c-46.1 26.2-120 26.2-166.1 0C11.6 314.8.4 297.3.4 279.8v.8c0 56.4 52.5 102.5 116.8 102.5 62.8 0 113.7-42.9 116.8-97-2.3 15.1-13.4 29.4-33.3 41.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A1C9DB",
                    d:
                      "M452.6 247.2c5.6-2.4 11.1 0 13.5 5.6l76.3 183.6s-5.6 10.3-15.9 15.1L447 260.7c-2.3-5.6.1-11.9 5.6-13.5z",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d:
                      "M514.6 336.2c-9.5 5.6-20.7 5.6-31-.8L68.8 97c-21.5-11.9-23-42.1-3.2-53.3 9.5-5.6 20.7-5.6 31 .8L511.5 283c21.4 11.9 23 41.3 3.1 53.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#9BA3A1",
                    d:
                      "M447.9 265.5c-2.4 4-7.2 4.8-11.1 3.2l-47.7-27.8c-4-2.4-4.8-7.2-3.2-11.1 2.4-4 7.2-4.8 11.1-3.2l47.7 27.8c4 2.3 5.6 7.9 3.2 11.1z",
                  }),
                  r.default.createElement("path", {
                    fill: "#A9D4F1",
                    d:
                      "M534.5 420.5c46.1 26.2 46.1 69.1 0 96.2-46.1 26.2-120 26.2-166.1 0-46.1-26.2-46.1-69.1 0-96.2 46.1-27.1 120.8-27.1 166.1 0z",
                  }),
                  r.default.createElement("path", {
                    fill: "#6281B3",
                    d:
                      "M534.5 515.8c-46.1 26.2-120 26.2-166.1 0-23-12.7-34.2-30.2-34.2-47.7v.8c0 56.4 52.5 102.5 116.8 102.5 62.8 0 113.7-42.9 116.8-97-2.3 16-13.4 30.3-33.3 41.4z",
                  }),
                  r.default.createElement("path", {
                    fill: "#677775",
                    d:
                      "M242 201.1h-1.6c-14.3 0-26.2-11.9-26.2-26.2v-1.6c0-14.3 11.9-26.2 26.2-26.2h1.6c14.3 0 26.2 11.9 26.2 26.2v1.6c0 14.3-11.9 26.2-26.2 26.2z",
                  }),
                  r.default.createElement("path", {
                    fill: "#9BA3A1",
                    d:
                      "M234.1 209h-1.6c-14.3 0-26.2-11.9-26.2-26.2v-1.6c0-14.3 11.9-26.2 26.2-26.2h1.6c14.3 0 26.2 11.9 26.2 26.2v1.6c0 14.3-11.9 26.2-26.2 26.2zm272.6 129.6c-13.5 0-24.6-11.1-24.6-24.6v-43c0-13.5 11.1-24.6 24.6-24.6 13.5 0 24.6 11.1 24.6 24.6v42.9c.8 13.6-11.1 24.7-24.6 24.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#84908E",
                    d:
                      "M74.3 92.2c-13.5 0-24.6-11.1-24.6-24.6v-43C49.7 11.1 60.8 0 74.3 0 87.8 0 99 11.1 99 24.6v42.9c.7 13.6-10.4 24.7-24.7 24.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E4F0F4",
                    d:
                      "M125.2 49.3c-4.8-1.6-10.3.8-11.9 5.6l-101 236-4.8 10.3c4 6.4 8.7 11.9 15.9 16.7l4-9.5L132.3 62c2.4-4.8-.8-11.1-7.1-12.7z",
                  }),
                  r.default.createElement("path", {
                    fill: "#8DBFE7",
                    d:
                      "M557.6 439.5c-41.3.8-184.4 9.5-199.5 29.4-1.6 2.4-2.4 4.8-1.6 7.2 6.4 22.3 21.5 40.5 39.7 52.5 30.2 9.5 66 10.3 97 3.2 15.9-8.7 28.6-21.5 37.4-38.2.8-1.6 2.4-4 3.2-6.4l7.9-2.4 25.4-7.9c4-12.7 0-25.5-9.5-37.4z",
                  }),
                  r.default.createElement("circle", {
                    cx: "574.2",
                    cy: "411.7",
                    r: "19.9",
                    fill: "#93B0BE",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "559.1",
                    cy: "416.4",
                    fill: "#637F94",
                    transform: "rotate(163.276 559.135 416.442)",
                    rx: "20.7",
                    ry: "46.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#637F94",
                    d: "M560.1 464.6l-27.9-88.7 12.9-4.1 27.9 88.7-12.9 4.1z",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "546.5",
                    cy: "420.4",
                    fill: "#93B0BE",
                    transform: "rotate(163.276 546.48 420.397)",
                    rx: "20.7",
                    ry: "46.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#93B0B1",
                    d: "M547.4 468.6l-27.9-88.7 12.9-4.1 27.9 88.7-12.9 4.1z",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "533.8",
                    cy: "424.4",
                    fill: "#637F94",
                    transform: "rotate(163.276 533.808 424.437)",
                    rx: "20.7",
                    ry: "46.9",
                  }),
                  r.default.createElement("path", {
                    fill: "#637F94",
                    d: "M534.7 472.6l-27.9-88.7 12.9-4.1 27.9 88.7-12.9 4.1z",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "521.1",
                    cy: "428.4",
                    fill: "#93B0BE",
                    transform: "rotate(163.276 521.124 428.452)",
                    rx: "20.7",
                    ry: "46.9",
                  }),
                  r.default.createElement("circle", {
                    cx: "455",
                    cy: "448.3",
                    r: "79.5",
                    fill: "#FFCD36",
                  }),
                  r.default.createElement("circle", {
                    cx: "443.1",
                    cy: "452.2",
                    r: "39.7",
                    fill: "#F68E44",
                  }),
                  r.default.createElement("ellipse", {
                    cx: "499.5",
                    cy: "435.4",
                    fill: "#F68E44",
                    transform: "rotate(163.276 499.49 435.43)",
                    rx: "15.9",
                    ry: "36.6",
                  }),
                  r.default.createElement("circle", {
                    cx: "439.1",
                    cy: "480.9",
                    r: "19.1",
                    fill: "#FFF",
                  }),
                  r.default.createElement("path", {
                    fill: "#F68E44",
                    d: "M456.7 463.4l-8.7-28.9 44.1-13.3 8.7 28.9-44.1 13.3z",
                  }),
                  r.default.createElement("path", {
                    fill: "#E4F0F4",
                    d:
                      "M459.8 245.6c-4.8-1.6-10.3.8-11.9 5.6l-70.7 164.5-33.4 78.7c2.4 4 5.6 7.2 9.5 10.3 2.4 1.6 4 4 6.4 5.6l106.5-251.2c2.3-5.6-.8-11.9-6.4-13.5z",
                  })
                )
              ),
              r.default.createElement(
                "linearGradient",
                {
                  id: "grass",
                  x1: "719.0259",
                  x2: "719.0259",
                  y1: "1024",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#9FCC81",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D0F295",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#grass)",
                d: "M0 0h1438.1v1024H0z",
              }),
              (function() {
                return l.map(function(e, t) {
                  return r.default.createElement("use", {
                    key: t,
                    className: (0, i.default)(
                      o.default.landingSquare,
                      t === l.length - 1 && o.default.active
                    ),
                    xlinkHref: "#stop-bg",
                    x: a[e].x,
                    y: a[e].y,
                    width: "campus" === e ? 470 : 185,
                    height: "campus" === e ? 271 : 107,
                  });
                });
              })(),
              r.default.createElement("path", {
                fill: "#165F93",
                d:
                  "M0 663.5l277.9-160.8-.1-33 76.1-43.9-9.3-5.4-4.9 2.8-119.3-68.9v-21.9L0 205.2V56.9l339.1 196 .1 21.9 195.3 112.8-123.6 71.2v-.1l-76.2 44.1.1 32.8L0 729.3",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "c",
                  x1: "-1.1275",
                  x2: "353.6734",
                  y1: "431.9164",
                  y2: "431.9164",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#60B460",
                }),
                r.default.createElement("stop", {
                  offset: ".541",
                  stopColor: "#127F40",
                }),
                r.default.createElement("stop", {
                  offset: ".6353",
                  stopColor: "#178242",
                }),
                r.default.createElement("stop", {
                  offset: ".7474",
                  stopColor: "#258C48",
                }),
                r.default.createElement("stop", {
                  offset: ".8685",
                  stopColor: "#3D9C52",
                }),
                r.default.createElement("stop", {
                  offset: ".9954",
                  stopColor: "#5FB360",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#60B461",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#c)",
                d:
                  "M-1.1 664l278.9-161.1-.1-33 76-43.9L225 351.7v-21.9L.7 199.8c-.4 3.6-1.1 7.2-1 10.8l215.8 124.5V357l119.2 69-66.2 38.3v32.9L0 652.3c-.3 3.9-1.2 7.8-1.1 11.7z",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "d",
                  x1: "-2.4528",
                  x2: "420.1734",
                  y1: "599.9805",
                  y2: "599.9805",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#60B460",
                }),
                r.default.createElement("stop", {
                  offset: ".541",
                  stopColor: "#127F40",
                }),
                r.default.createElement("stop", {
                  offset: ".6353",
                  stopColor: "#178242",
                }),
                r.default.createElement("stop", {
                  offset: ".7474",
                  stopColor: "#258C48",
                }),
                r.default.createElement("stop", {
                  offset: ".8685",
                  stopColor: "#3D9C52",
                }),
                r.default.createElement("stop", {
                  offset: ".9954",
                  stopColor: "#5FB360",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#60B461",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#d)",
                d:
                  "M410.7 459l-76.2 44 .2 32.8L-.4 729c-1 4-3.1 8.1-1.4 12l345.9-199.8v-32.9l76-43.9-9.4-5.4z",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "e",
                  x1: "1.3997",
                  x2: "548.5149",
                  y1: "315.8577",
                  y2: "315.8577",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#60B460",
                }),
                r.default.createElement("stop", {
                  offset: ".541",
                  stopColor: "#127F40",
                }),
                r.default.createElement("stop", {
                  offset: ".6353",
                  stopColor: "#178242",
                }),
                r.default.createElement("stop", {
                  offset: ".7474",
                  stopColor: "#258C48",
                }),
                r.default.createElement("stop", {
                  offset: ".8685",
                  stopColor: "#3D9C52",
                }),
                r.default.createElement("stop", {
                  offset: ".9954",
                  stopColor: "#5FB360",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#60B461",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#e)",
                d:
                  "M344.2 267v-16.5L1.4 52.1c.8 4.4 2 8.9 1.8 12.8l331 190.7v21.9l195.3 112.8-194.8 112.5v32.9l-66.5 38.4 9.5 5.5 66.5-38.4v-32.9l204.3-117.4L344.2 267z",
              }),
              r.default.createElement("path", {
                d: "M806.4 590.9l93.1-53.5-28.6-16.6-92.9 53.5",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d: "M799.7 585.2l93.1-53.5-28.5-16.6-92.9 53.5",
              }),
              r.default.createElement("path", {
                d: "M903.3 679.4l128.6-74-28.6-16.6-128.4 74",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d: "M896.6 673.7l128.6-74-28.6-16.6-128.3 74",
              }),
              r.default.createElement("path", {
                d:
                  "M1032.1 572.5l28.3 16.5 384.2-221.7v-33l-412.5 238.2zm413.1-83.6l-307.8 177.7 28.3 16.5L1448.3 520c-1.6-10.5-3.5-20.6-3.1-31.1z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M1025.5 566.8l28.3 16.5L1438 361.6v-33l-412.5 238.2zm413-83.6l-307.8 177.7 28.3 16.5 282.6-163.1c-1.6-10.5-3.4-20.6-3.1-31.1z",
              }),
              r.default.createElement("path", {
                d:
                  "M1435 516.1L644.4 59.7l-28.5 16.5 820.8 474c-.7-11.4-1.9-22.6-1.7-34.1zm-.9-148.4l-280.7-162-28.5 16.5L1433 400.1c-.9-10.9.6-21.5 1.1-32.4zM294.7 6.2l-2.2-1.3c-.1.4-.1.8-.3 1.3h2.5z",
              }),
              r.default.createElement("path", {
                d:
                  "M1149.5 499.7L294.7 6.2h-2.5c.1-.4.2-.9.3-1.3l-11-6.4c-15.4 2.2-30.8 7.1-46.2 5.8l886 511.7 28.2-16.3zM892.8 680.3l-8.2-4.7-373.3-215.4 28.6-16.4 352.9 203.6V671",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M1438.8 509.4L648.2 53.1l-28.5 16.5 820.8 474c-.7-11.5-1.9-22.6-1.7-34.2zm-.9-148.3l-280.7-162-28.5 16.5 308.1 177.9c-.9-10.9.6-21.5 1.1-32.4zm-284.6 132L298.5-.5H296c.1-.4.2-.9.3-1.3l-11-6.4C269.8-6 254.4-1.1 239-2.3l886.1 511.7 28.2-16.3zM896.6 673.7l-8.2-4.8-373.3-215.3 28.6-16.5 352.9 203.7v23.6",
              }),
              r.default.createElement("path", {
                d:
                  "M393.6 533.2l512.9-296.4-28.4-16.1-512.9 295.9M426 224L654.8 91.7l-28.5-16.5-229 132.3M365.1 72.3L6 279.7c-1 10.9-.5 22.3-.4 33.2L393.7 88.8l-28.6-16.5zm1081.9-32L493.3 590.8l28.5 16.4L1446 73.6c-1.4-11 1.4-22.3 1-33.3zm-.9 148.3L906.7 500.1l28.3 16.5 511-294.9c-1.6-10.9.2-22.1.1-33.1z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M386.9 527.5l513-296.4-28.4-16.1-512.9 295.9m60.8-292.6L648.2 86l-28.5-16.5-229.1 132.3M358.5 66.6L-.6 274c-1 10.9-.5 22.3-.4 33.2L387 83.1l-28.5-16.5zm1081.9-32L486.6 585.1l28.5 16.4 924.2-533.6c-1.3-11 1.4-22.3 1.1-33.3zm-.9 148.3L900 494.4l28.3 16.5 511-294.9c-1.5-10.9.2-22.1.2-33.1z",
              }),
              r.default.createElement("path", {
                d:
                  "M997.3 3.5L521.8 278.1l28.5 16.5L1049.4 6.5c-.3-.1-.5-.1-.7-.3-16.7-10.8-33.9-3.7-51.4-2.7z",
              }),
              r.default.createElement("path", {
                d:
                  "M223.6 442.6L-4.5 311.1 24 294.6l228.1 131.5M1152.2 683L248.9 163.8l31.4-19.1 872.3 505.2m280.9-433.7l-364-210.8c-11.5-2.1-22.6-6.5-34.1-7.1-10.8 0-20.3 4.8-30.7 5.9L1433 250.3c-.2-11.4.7-22.8.5-34.1z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M230.2 436.9L2.2 305.4l28.5-16.5 228 131.5m900.2 256.9L255.6 158.1l31.3-19.1 872.4 505.2m280.9-433.7L1076.2-.3c-11.5-2.1-22.6-6.5-34.1-7.1-10.8 0-20.3 4.8-30.7 5.9l428.3 246.2c-.3-11.5.7-22.9.5-34.2z",
              }),
              r.default.createElement("path", {
                d:
                  "M491.6 295.6L4.9 576.5c.1 11.1-.5 22.4-.9 33.5l516.6-298.2-29-16.2z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M484.9 289.9l-486.6 281c.1 11.1-.5 22.3-.9 33.5L514 306.1l-29.1-16.2z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M990.7-2.2L515.1 272.4l28.5 16.5L1042.7.8c-.3-.1-.5-.1-.7-.3-16.6-10.8-33.9-3.7-51.3-2.7z",
              }),
              "fuse",
              r.default.createElement("path", {
                d: "M322.6 648l-200-115.5 28.5-16.5 199.8 115.4",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d: "M329.2 642.3l-200-115.5 28.5-16.5 199.8 115.4",
              }),
              r.default.createElement("path", {
                d: "M515.2 611.1l-156.8-90.6 28.5-16.4 156.8 90.5",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d: "M515.2 601.6L358.4 511l28.5-16.4 156.8 90.5",
              }),
              r.default.createElement("path", {
                d:
                  "M436.3 557.9L5.9 806.4c.1 11.4-.8 22.6-1.9 34l460.8-266.1-28.5-16.4z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M429.7 552.2L-.7 800.7c.1 11.4-.8 22.6-1.9 34l460.8-266.1-28.5-16.4z",
              }),
              r.default.createElement("path", {
                d:
                  "M904.1 678.9l-6.9 4-4.4-2.6v-7.9M1166 683l-6.9 3.9-7.9-4.5.1-7.9",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d: "M1154.4 492.3l-42.5 24.6 6.9 3.9 43-24.8",
              }),
              r.default.createElement("use", {
                xlinkHref: "#cost-of-college",
                x: "470.6",
                y: "469.8",
                width: "96",
                height: "82",
              }),
              r.default.createElement("use", {
                xlinkHref: "#what-is-financial-aid",
                x: "726",
                y: "467",
                width: "93",
                height: "78",
              }),
              r.default.createElement("use", {
                xlinkHref: "#not-created-equal",
                x: "860",
                y: "370",
                width: "77",
                height: "93",
              }),
              r.default.createElement("use", {
                xlinkHref: "#unlocking-financial-aid",
                x: "480",
                y: "145",
                width: "66",
                height: "95",
              }),
              r.default.createElement("use", {
                xlinkHref: "#understanding-your-award",
                x: "620",
                y: "225",
                width: "62",
                height: "93",
              }),
              r.default.createElement("use", {
                xlinkHref: "#comparing-awards",
                x: "720",
                y: "190",
                width: "94",
                height: "60",
              }),
              r.default.createElement("use", {
                xlinkHref: "#reducing-the-gap",
                x: "992",
                y: "316",
                width: "62",
                height: "90",
              }),
              r.default.createElement("use", {
                xlinkHref: "#power-of-scholarships",
                x: "745",
                y: "300",
                width: "70",
                height: "94",
              }),
              r.default.createElement("use", {
                xlinkHref: "#your-plan",
                x: "875",
                y: "225",
                width: "60.2",
                height: "95.2",
              }),
              r.default.createElement("use", {
                xlinkHref: "#campus",
                x: "920",
                y: "67",
                width: "206",
                height: "175",
              }),
              r.default.createElement("path", {
                fill: "#45CDED",
                d:
                  "M250.4 279.8c-2.3-3-4.9-6 1-2.9-1.9-2 2.3-4.6 20.7 7.4l70.8 43.1c.6 2.2.3 5.4-11.4 3.5-11.7-1.9-11.3-1-11.3-1l-5.2-3.6-5.4-1.9-6.5-1.8-6.4-4.9-6.6-2-5.3-3.5-4.7-6.8-5.9-1.7-4.7-2.3-5.9-4.5s-8.5-6.7-14.2-14.5c-5.6-7.8-1.4-5.2 1-2.6z",
              }),
              r.default.createElement("path", {
                fill: "#7DE3FF",
                d:
                  "M337.7 322c-.3.3-1.3 1.4-1.5 1.8 1.7 1 6.9 2.6 6.5 5.3-.5 3-6.6 1.9-8.5 1.6-3.9-.5-7-1.8-10.9-1.9-4.1-.1-6.1-2.4-9.7-4-3.5-1.5-9-1.2-11.8-3.8-1.1-1-1.2-2.6-2.4-3.6-1.9-1.5-4.9-1.5-7.2-2.3-5.2-1.8-7.5-5.2-10.5-9.4-2.4-3.5-3.6-2.1-7.3-2.9-5.3-1.1-3.2-7.2-14.1-6.7l2.5.5c4.5 1.3 3.1 3.7 5.2 5.9 2.7 2.8 7.3.7 10.3 2.8 3.1 2.1 3.8 6.4 7.2 8.6 4.2 2.8 9.4 3.7 13.5 6.8 3.1 2.4 5.3 2.9 9.3 3.9 4.2 1.1 5.6 4 9.2 5.7 4.2 2 8.6-.1 12.9.8 4 .8 6.7 3.4 11.2 2.4 10-1.9.5-9.1-3.9-11.5z",
              }),
              r.default.createElement("path", {
                fill: "#7DE3FF",
                d:
                  "M327.3 330.8c-3.5-1.3-6.5-1.2-10.3-1.3-12.2-.2-21.8-7.6-31.6-14.2-4.5-3.1-6.5-9.5-11.6-11.3-3-1.1-4.9-1.4-7.5-3.5-1.8-1.4-3.7-2.7-5.8-3.6l1.1 1.4c2.1 1.1 2.5 3.2 4.1 4.8 2.2 2.1 5.7 1.6 7.8 3.5 1.9 1.7 1.6 4.6 3.5 6.4 2.6 2.3 7.5 3.6 10.6 5.4 5.6 3.1 8.6 7.4 14.8 9.1 5.3 1.5 8.8 4.6 14.9 4.4 3.1-.1 6-1 9-.5 2.5.4 4.2 1 6.8.7-2.2-.1-3.9-.5-5.8-1.3z",
                opacity: ".5",
              }),
              r.default.createElement("path", {
                fill: "#FF9700",
                d:
                  "M336 330.7c-7.6-1.2-22.2-7.7-31.4-12.7-3-1.7-35.4-20.1-43.1-28.8-6.6-7.5-4.4-11.2-3.1-11.2 1.7.1 34.3 10.6 63.8 31.4 9.1 6.4 18.4 14.5 21.1 17.2 1.2 1.2 1.7 5.5-7.3 4.1z",
              }),
              r.default.createElement("path", {
                fill: "#FFB85A",
                d:
                  "M314.9 305c2 1.2 3.6 2.5 4.5 3.6 1.6 2 .6 3.2-.5 3.8-1.1.6-3.1 1.2-6.6.3-2-.5-4.3-1.5-6.2-2.6-1.8-1-2.8-2.1-3-3.2-.4-2.7 5.5-5.5 11.8-1.9z",
              }),
              r.default.createElement("path", {
                fill: "#A0A0A0",
                d:
                  "M308.1 303.3c-3.8.4-7.3 3.4-1.7 6.7 1.9 1.1 4.1 2 6.1 2.5 4.5 1.2 7.3-.2 7.8-1.6-.3 1.5-3 3-7.9 1.8-2-.5-4.3-1.5-6.2-2.6-6-3.4-1.9-6.4 1.9-6.8z",
              }),
              r.default.createElement("path", {
                fill: "#B76800",
                d:
                  "M305.9 304.4c-2 1.2-2.1 3 1.3 5 3.4 2 8.6 3.9 11.3 2.4 2.7-1.6-.7-4.6-4-6.6-3.5-2-6.6-1.9-8.6-.8z",
              }),
              r.default.createElement("path", {
                fill: "#FFB85A",
                d:
                  "M291.4 291.7c2 1.2 3.6 2.5 4.5 3.6 1.6 2 .6 3.2-.5 3.8-1.1.6-3.1 1.2-6.6.3-2-.5-4.3-1.5-6.2-2.6-1.8-1-2.8-2.1-3-3.2-.4-2.7 5.5-5.5 11.8-1.9z",
              }),
              r.default.createElement("path", {
                fill: "#A0A0A0",
                d:
                  "M284.6 290c-3.8.4-7.3 3.4-1.7 6.7 1.9 1.1 4.1 2 6.1 2.5 4.5 1.2 7.3-.2 7.8-1.6-.3 1.5-3 3-7.9 1.8-2-.5-4.3-1.5-6.2-2.6-6-3.4-2-6.4 1.9-6.8z",
              }),
              r.default.createElement("path", {
                fill: "#B76800",
                d:
                  "M282.4 291.1c-2 1.2-2.1 3 1.3 5 3.4 2 8.6 3.9 11.3 2.4 2.7-1.6-.7-4.6-4-6.6-3.5-2-6.6-1.9-8.6-.8z",
              }),
              r.default.createElement("path", {
                fill: "#2C96FF",
                d:
                  "M258.5 278c-8.1 5.5 28.3 26.2 40.2 33.3 11.9 7.1 35.7 18 40.3 18.2 4.6.1 5.1-1.3 4.7-2.3.8 1.6.2 4.7-7.7 3.5-7.6-1.2-22.2-7.7-31.4-12.7-3-1.7-35.4-20.1-43.1-28.8-6.5-7.5-4.3-11.2-3-11.2z",
                opacity: ".5",
              }),
              r.default.createElement("path", {
                fill: "#E3C7A8",
                d:
                  "M285.6 278.3c-.4 1.7.2 6.7 1.8 7.8 1.6 1.1 6 1.3 6.6.9.3-.9.7-1.1.7-1.1s-5.2-1.5-5.7-2-.5-4.4-.4-5.1c.3-1.6-2.3-3.1-3-.5z",
              }),
              r.default.createElement("path", {
                fill: "#105140",
                d:
                  "M295 298.5c-.2.1-.3.2-.5.2-1.4-.1-3.8-.8-7.8-2.8-1.3-.7-3.7-3-4-3.8l4-1.8c1.4.2 3 .9 4.5 1.8 3.2 1.9 6.4 4.8 3.8 6.4z",
              }),
              r.default.createElement("path", {
                fill: "#25826C",
                d:
                  "M294.3 298.8c-2.8.9-7.5-.9-10.7-2.7-.4-.3-.8-.5-1.1-.8-.7-1.2-1.2-2.5-1.2-3l4.4-.6c2.7 1.2 6.8 5.1 8.6 7.1z",
              }),
              r.default.createElement("path", {
                fill: "#DB6835",
                d:
                  "M285 276.9c.2 1.1-.1 2.1-.1 2.1s-2.4.7-2.5.7l-1.4-1c.4-.2 2.4-1.9 4-1.8z",
              }),
              r.default.createElement("path", {
                fill: "#EDD2B7",
                d:
                  "M280.1 280.8c1.4-3.2 8.6-5.4 8-1.7-.7 4.8-1.6 7.5-.8 10.5.8 3.1-3.7 4.2-6.1 2.8-.8-2.3-2.5-8.4-1.1-11.6z",
              }),
              r.default.createElement("path", {
                fill: "#25826C",
                d:
                  "M281.3 292.3c0-.1-.1-.2-.1-.3.6.2 2.5.7 4.3-.1 1.2-.5 1.7-1.3 2-1.9.1 1.2-.6 2.1-1.7 2.6-1 2.2-3.6 1.6-4.5-.3z",
              }),
              r.default.createElement("path", {
                fill: "#FF925C",
                d:
                  "M279.6 284.2c.1-2.4 0-4.4 1.4-5.4.3-.2 1.3-1 2.4-1.5v.1c-.2.1-.6.3-.9.6-.1.1 0 .3.1.3.4.1.9.4 1.4 1.1.9 1.2 2 2.8 2 2.8s.9-3.9.4-5.3c.3-.2 1-.2 1.3.1.9.7.7 2.6.3 4.9-.2.8-.6 6.4-.2 7.4 0 1-.9 1.3-1.4 1.3l-.3-.3-.1.7s-1.3 1.4-5.1.8c-.8-1.6-1.4-4.7-1.3-7.6z",
              }),
              r.default.createElement("path", {
                fill: "#561000",
                d:
                  "M287.8 289.4c0 .6-.4 1-.7 1.1l-.2-3c-.1-.9.1-1.8.5-2.5l.4-.8c-.2 1.9-.3 4.6 0 5.2zm-4-3.7c.7.5 1.1 1.3 1.2 2.1l.4 3.5c-.7.3-2.1.7-4.5.3-.7-1.5-1.4-4.3-1.3-7.1l2.9.1 1.3 1.1z",
              }),
              r.default.createElement("path", {
                d:
                  "M284.825 292.035l-.5912.1026-.9565-5.5177.5912-.103zM284 283.9c2.4-.2 3.7-.9 3.7-.9l-.3-.5s-1.2.7-3.5.8l.1.6z",
              }),
              r.default.createElement("path", {
                d:
                  "M282.8 286.9h-.2v-.5c2.4 0 4.6-1 5.1-1.2v.6c-.8.2-2.7 1-4.9 1.1zm.4 2.7h-.2v-.6c2 0 3.8-.7 4.6-1.1v.6c-.9.4-2.6 1-4.4 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#A0A0A0",
                d: "M282.8 280.4c.2.6.9 3.2.1 4.5-.9 1.5-2.5.7-2.8.2l2.7-4.7z",
              }),
              r.default.createElement("path", {
                fill: "#EDD2B7",
                d:
                  "M281.5 279.3c.7.1 1.5.6 1.8 3.1.3 2.4-1.4 3.8-2.5 3-1.5-1-1.3-6.4.7-6.1z",
              }),
              r.default.createElement("path", {
                fill: "#E3C7A8",
                d:
                  "M285.3 275.9c-.1-.2-.2-.3-.3-.5-.1-.2-1.3.1-2 .2-.7 0 .1-.2.1.4.3.4.5 1.4.4 2.4.6.9 1.9.9 2.3.6.9-.5.6-1.8.5-2.5l-1-.6z",
              }),
              r.default.createElement("path", {
                fill: "#F7DCBF",
                d:
                  "M286.1 271.3c-.3-.6-.2 0-.2 0l-3.4 1.1v1.9c.9 1.8.7 1.6 1.7 2.6.6.6 1.8.5 2.6.2.4-.2.7-.6.6-1.1 0-.3-.3-1.9-.8-3.2-.3-1-.5-1.5-.5-1.5z",
              }),
              r.default.createElement("path", {
                fill: "#4C1B02",
                d:
                  "M286.8 273.5c.1-1.2-.1-2.5-1.4-4.1-.1.7-.8.5-1.6.5-.4 0-.8.1-1.1.2-.3.1-1.7.9-2.4 1.8.2-.1.3 0 .3 0s-.4.5-.4.9c.1-.2.4-.2.4.1v.2c.4 2 2.1 2.8 2.2 4.2.5-.6.4-1.3.3-1.7-.2-.4 0-.6.2-.4.2.2.6.5.2-1-.4-1.5.7-2.2 1.3-2.4.6-.2 1.1-.5 1.4.3.5.8.6 1.4.6 1.4z",
              }),
              r.default.createElement("path", {
                fill: "#F7E3CD",
                d:
                  "M282.6 275.6c-.2-.3-.1-.7.1-.8.2-.2.6 0 .8.3 0 .1.2.3.3.4.2.3.2.6 0 .7-.4.2-1.1-.4-1.2-.6z",
              }),
              r.default.createElement("path", {
                fill: "#822E03",
                d:
                  "M284.7 270.7c0-.4-.5-.6-.8-.5.2.1.3.4.1.9-.2.4-1 1.3-.4 3-.3-1.4.7-2 1.3-2.3.6-.2 1.1-.5 1.4.3.4.9.5 1.4.5 1.4.1-1.2-.1-2.5-1.4-4.1.1.2-.2 1-.7 1.3z",
              }),
              r.default.createElement("path", {
                fill: "#E3C7A8",
                d:
                  "M286.1 274.8c.7-.4.4-.4.2-.9 0 0 .3.3.3.4v.3l-.1.1c-.1.1-.2.1-.4.1zm.7.9c-.2.4-.9.7-1.4.5.5 0 1-.2 1.4-.5z",
              }),
              r.default.createElement("path", {
                fill: "#4C1B02",
                d:
                  "M285.3 272.8c0-.1 0-.1-.1-.1-.3 0-.6.1-.9.2-.3.2-.5.5-.6.8.2-.3.4-.5.7-.7.2-.1.5-.2.8-.1.1 0 .1 0 .1-.1zm.7-.3c.1 0 .1 0 .2-.1 0-.1.1-.2.2-.3.1-.1.3-.1.4 0 0-.1-.1-.1-.2-.2h-.3l-.3.3v.3z",
              }),
              r.default.createElement("path", {
                fill: "#E3C7A8",
                d:
                  "M293.7 286.8l.6-.2s.3.1.4.4c.1.2-.5.8-.9.6-.4-.1-.1-.8-.1-.8z",
              }),
              r.default.createElement("path", {
                fill: "#4FE294",
                d:
                  "M303.8 283.9c-.5.1-.9.2-1.1.5l-1.2 1.2c-.1.1-.3.2-.5.2h-.1l.2.2 10.5-1.7c.2 0 .5.1.6.2.1.2.1.3-.1.3l-10.5 1.7c0 .1.1.1.2.2h.8l2.6.5c.6.1 1.1.1 1.6.1l6.5-1.1c.4-.1.7-.3.5-.7-.1-.3-.4-.7-.8-1.2s-.8-.9-1.1-1.2c-.4-.3-1-.4-1.4-.4l-6.7 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#77F2AC",
                d:
                  "M301 286c.2.2.3.4.5.6l10.5-1.7c.2 0 .3-.2.2-.3-.1-.2-.5-.3-.7-.2L301 286z",
              }),
              r.default.createElement("path", {
                fill: "#E2E2E2",
                d:
                  "M301.5 286.4l10.5-1.7c.1 0 .2 0 .2-.1 0 .1-.1.2-.3.3l-10.5 1.7c-.2-.2-.3-.4-.5-.6h.2c.2.1.3.3.4.4z",
              }),
              r.default.createElement("path", {
                fill: "#4C4C4C",
                d:
                  "M301.2 285.6c.1 0 .2 0 .3.2.2.3.3.7.2 1-.1.2-.2.2-.3.3h-.2c.1 0 .2-.1.3-.3.1-.3 0-.8-.2-1-.1-.1-.2-.2-.3-.2h.2z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M301.3 285.8c-.2-.3-.5-.2-.6.1-.1.3 0 .8.2 1 .2.3.5.2.6-.1.1-.3 0-.7-.2-1z",
              }),
              r.default.createElement("path", {
                fill: "#C6C6C6",
                d:
                  "M300.9 286c.1 0 .1 0 .2.1s.2.4.1.5c0 .1-.1.1-.1.1l-31 5.2c.1 0 .1-.1.1-.1.1-.2 0-.4-.1-.5-.1-.1-.1-.1-.2-.1l31-5.2z",
              }),
              r.default.createElement("path", {
                fill: "#AAA",
                d:
                  "M270 291.3c-.1-.1-.3-.1-.3.1-.1.2 0 .4.1.5.1.1.3.1.3-.1.1-.1.1-.4-.1-.5z",
              }),
              r.default.createElement("path", {
                fill: "#4C4C4C",
                d:
                  "M269.8 290.9c.1 0 .2 0 .3.2.2.3.3.7.2 1-.1.2-.2.2-.3.3h-.2c.1 0 .2-.1.3-.3.1-.3 0-.8-.2-1-.1-.1-.2-.2-.3-.2h.2z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M270 291.1c-.2-.3-.5-.2-.6.1-.1.3 0 .8.2 1 .2.3.5.2.6-.1.1-.3 0-.8-.2-1z",
              }),
              r.default.createElement("path", {
                fill: "#4FE294",
                d:
                  "M257.3 292.3c.1.3.4.7.8 1.2s.8.9 1.1 1.2c.4.3 1 .4 1.4.4l6.5-1.1c.5-.1.9-.2 1.1-.5l1.2-1.2c.1-.1.3-.2.5-.2h.1l-.2-.2-10.5 1.7c-.2 0-.5-.1-.6-.2-.1-.2-.1-.3.1-.3l10.5-1.7c0-.1-.1-.1-.2-.2h-.8l-2.6-.5c-.6-.1-1.1-.1-1.6-.1l-6.5 1.1c-.2 0-.4.3-.3.6z",
              }),
              r.default.createElement("path", {
                fill: "#77F2AC",
                d:
                  "M259 293.1c-.2 0-.3.2-.2.4.1.2.5.2.7.2L270 292c.2-.4-.2-.7-.5-.6l-10.5 1.7z",
              }),
              r.default.createElement("path", {
                fill: "#E2E2E2",
                d:
                  "M259 293.1c-.3.2.1.4.6.3l10.4-1.7c0 .1 0 .2-.1.3l-10.5 1.7c-.2 0-.6 0-.7-.2-.1-.2.1-.4.3-.4z",
              }),
              r.default.createElement("path", {
                fill: "#CECECE",
                d:
                  "M257.4 292.2c.1.3.4.7.8 1.2s.8.9 1.1 1.2c.4.3.9.4 1.4.4l6.5-1.1c.5-.1.9-.2 1.1-.5l1.2-1.2c.1-.1.3-.2.5-.2l.1.1h-.1c-.2 0-.4.1-.5.2l-1.2 1.2c-.3.2-.6.4-1.1.5l-6.5 1.1c-.4.1-1-.1-1.4-.4-.3-.3-.7-.6-1.1-1.2-.5-.5-.7-.9-.8-1.3-.1-.1-.1-.2 0-.3-.1.1-.1.2 0 .3z",
              }),
              r.default.createElement(
                "g",
                { fill: "#F7DCBF" },
                r.default.createElement("path", {
                  d:
                    "M280.4 279.7c-1.7.6-4.9 2.2-4.9 4.1 0 1.9 2 4.9 2.6 5.1 1-.6 1.1-.7 1.1-.7s-1.3-3.6-1.1-4.3c.1-.7 2.8-1.2 3.5-1.5 1.6-.7 1.4-3.7-1.2-2.7z",
                }),
                r.default.createElement("path", {
                  d:
                    "M279.7 288.1c.6.3.9.5 1.1.8.1.1.2.3.3.5l-.8.1c-.1 0-.4.8.3.9.3 0 .3.3 0 .6s-1.6.6-2.1.2c-.5-.5-.5-2.2-.7-2.8-.2-.6 1.9-.3 1.9-.3z",
                })
              ),
              r.default.createElement("path", {
                fill: "#E3C7A8",
                d:
                  "M293.9 286.3l.4-.4h.3c.3.1 1.8.4 2 .9.2.5-.2 1.2-.4 1.2-.2.1-1.7.8-2 .5-.3-.3.2-.7.1-.9-.1-.2 0-.4-.5-.6-.6-.1.1-.7.1-.7z",
              }),
              r.default.createElement("path", {
                fill: "#820303",
                d:
                  "M318.5 311.8c-.5.3-1.1.4-1.7.5-1.4-.4-3.5-1.2-6.4-2.6-1.3-.7-3.7-3-4-3.8l4-1.8c3 .5 6.7 3.1 8.2 4.4 1 1.3 1.3 2.5-.1 3.3z",
              }),
              r.default.createElement("path", {
                fill: "#C10000",
                d:
                  "M307.1 309.4c-.5-.3-.9-.5-1.2-.8-.5-1-.9-2-.9-2.4l4.4-.6c2.5 1.1 6.2 4.6 8.2 6.6-2.8.7-7.4-1-10.5-2.8z",
              }),
              r.default.createElement("path", {
                fill: "#DB6835",
                d:
                  "M308.8 290.8c.2 1.1-.1 2.1-.1 2.1s-2.4.7-2.5.7l-1.4-1c.4-.3 2.4-1.9 4-1.8z",
              }),
              r.default.createElement("path", {
                fill: "#96694B",
                d:
                  "M311.8 291.1c.7.2 3.1 1.2 4 2 .8.8 1.1 1.8 1.2 2.4 0 .6-1.4 1.9-1.4 1.9s-.1-.9-.9-2c-1.1-1.5-4.2-.1-4.2-1.4 0-1.2-.7-3.6 1.3-2.9z",
              }),
              r.default.createElement("path", {
                fill: "#AF8061",
                d:
                  "M303.9 294.6c1.4-3.2 8.6-5.4 8-1.7-.7 4.8-1.6 7.5-.8 10.5.8 3.1-3.7 4.2-6.1 2.8-.8-2.2-2.5-8.4-1.1-11.6z",
              }),
              r.default.createElement("path", {
                fill: "#C10000",
                d:
                  "M305.1 306.1c0-.1-.1-.2-.1-.3.6.2 2.5.7 4.3-.1 1.2-.5 1.7-1.3 2-1.9.1 1.2-.6 2.1-1.7 2.6-1 2.3-3.6 1.7-4.5-.3z",
              }),
              r.default.createElement("path", {
                fill: "#FF925C",
                d:
                  "M303.4 298c.1-2.4 0-4.4 1.4-5.4.3-.2 1.3-1 2.4-1.5v.1c-.2.1-.6.3-.9.6-.1.1 0 .3.1.3.4.1.9.4 1.4 1.1.9 1.2 2 2.8 2 2.8s.9-3.9.4-5.3c.3-.2 1-.2 1.3.1.9.7.7 2.6.3 4.9-.2.8-.6 6.4-.2 7.4-.1 1-.9 1.3-1.4 1.3l-.3-.3-.1.6s-1.3 1.4-5.1.8c-.8-1.5-1.5-4.6-1.3-7.5z",
              }),
              r.default.createElement("path", {
                fill: "#561000",
                d:
                  "M311.6 303.2c0 .6-.4 1-.7 1.1l-.2-3c-.1-.9.1-1.8.5-2.5l.4-.8c-.2 2-.3 4.6 0 5.2zm-4-3.6c.7.5 1.1 1.3 1.2 2.1l.4 3.5c-.7.3-2.1.7-4.5.3-.7-1.5-1.4-4.3-1.3-7.1l2.9.1 1.3 1.1z",
              }),
              r.default.createElement("path", {
                d:
                  "M308.5805 305.9144l-.5912.1024-.956-5.5176.5913-.1025zM307.8 297.7c2.4-.2 3.7-.9 3.7-.9l-.3-.5s-1.2.7-3.5.8l.1.6z",
              }),
              r.default.createElement("path", {
                d:
                  "M306.6 300.7h-.2v-.6c2.4 0 4.6-1 5.1-1.2v.6c-.9.4-2.8 1.1-4.9 1.2zm.4 2.7h-.2v-.5c2 0 3.8-.7 4.6-1.1v.6c-.9.4-2.6.9-4.4 1z",
              }),
              r.default.createElement("path", {
                fill: "#A0A0A0",
                d: "M306.6 294.3c.2.6.9 3.2.1 4.5-.9 1.5-2.5.7-2.8.2l2.7-4.7z",
              }),
              r.default.createElement("path", {
                fill: "#AF8061",
                d:
                  "M305.3 293.1c.7.1 1.5.6 1.8 3.1.3 2.4-1.4 3.8-2.5 3-1.5-1-1.3-6.4.7-6.1z",
              }),
              r.default.createElement("path", {
                fill: "#96694B",
                d:
                  "M309.4 289.7c0-.2-.2-.4-.3-.5-.1-.2-1.3 0-2.1 0-.8-.1.1-.2 0 .4.3.4.4 1.5.2 2.5.6.9 1.8 1.1 2.3.8 1-.4.8-1.8.7-2.5l-.8-.7z",
              }),
              r.default.createElement("path", {
                fill: "#BF8D6B",
                d:
                  "M310.6 285c-.2-.7-.2-.1-.2-.1l-3.6.8-.2 1.9c.8 1.9.5 1.7 1.5 2.8.6.7 1.8.7 2.6.4.5-.1.7-.6.7-1.1 0-.3-.1-1.9-.5-3.4-.2-.7-.3-1.3-.3-1.3z",
              }),
              r.default.createElement("path", {
                fill: "#DD440E",
                d:
                  "M311.1 287.4c0-2.9-1.1-4.4-3.9-3.8-.7.1-1.8.7-2.6 1.6.2-.1.4 0 .4 0s-.4.5-.5.9c.2-.2.4-.1.4.2.1 2.1 1.9 3.2 1.9 4.6.6-.6.6-1.2.4-1.7-.1-.5.1-.6.2-.4.2.2.5.5.3-1s.9-2.1 1.5-2.3c.6-.2 1.2-.4 1.4.4.4.9.5 1.5.5 1.5z",
              }),
              r.default.createElement("path", {
                fill: "#BF8D6B",
                d:
                  "M306.6 289.1c-.2-.3-.1-.7.2-.8.3-.1.6 0 .8.3 0 .1.2.4.2.5.2.3.1.7 0 .7-.4.2-1.1-.4-1.2-.7z",
              }),
              r.default.createElement("path", {
                fill: "#96694B",
                d:
                  "M310.3 288.7c.8-.4.4-.3.4-.9 0 0 .2.4.3.4 0 .1 0 .2-.1.3h-.1c-.2.1-.4.2-.5.2zm.5 1c-.3.3-1 .6-1.5.3.5.1 1.1 0 1.5-.3z",
              }),
              r.default.createElement("path", {
                fill: "#DD440E",
                d:
                  "M309.7 286.4c0-.1 0-.1-.1-.2-.3-.1-.7 0-1 .1-.3.2-.6.4-.7.7.2-.3.5-.5.8-.6.3-.1.6-.1.8 0 .1.1.2.1.2 0zm.8-.2h.2c0-.1.1-.2.2-.3.1-.1.3-.1.4.1 0-.1-.1-.1-.2-.2h-.3c-.1.1-.3.1-.4.2 0 0 0 .1.1.2z",
              }),
              r.default.createElement("path", {
                fill: "#BF8D6B",
                d: "M315.3 296.8l.9-.1.1.3-.8 1s-.2 0-.4-.3c-.3-.3 0-.7.2-.9z",
              }),
              r.default.createElement("path", {
                fill: "#4FE294",
                d:
                  "M321.4 286.4c-.3.4-.4.8-.4 1.1l-.1 1.7c0 .2-.1.3-.2.5l-.1.1h.2l6.2-8.7c.1-.2.4-.3.6-.3.2 0 .3.2.2.3l-6.2 8.7h.2l.1-.1c.1-.2.3-.3.5-.5l2.2-1.5c.5-.3.9-.7 1.2-1.1l3.8-5.3c.3-.4.3-.7-.1-.9-.3-.1-.8-.2-1.4-.3-.7-.1-1.2-.1-1.6 0-.5 0-1 .4-1.2.7l-3.9 5.6z",
              }),
              r.default.createElement("path", {
                fill: "#77F2AC",
                d:
                  "M320.8 289.9c.3 0 .5 0 .7.1l6.2-8.7c.1-.2.1-.3-.1-.4-.3-.1-.5.2-.7.3l-6.1 8.7z",
              }),
              r.default.createElement("path", {
                fill: "#E2E2E2",
                d:
                  "M321.5 289.8l6.2-8.7c.1-.1.1-.1.1-.2.1.1.1.2 0 .4l-6.2 8.7c-.3 0-.5 0-.7-.1l.1-.1h.5z",
              }),
              r.default.createElement("path", {
                fill: "#4C4C4C",
                d:
                  "M320.7 289.5c.1-.1.2-.1.4-.1.3 0 .7.3.9.6.1.2.1.3 0 .4l-.1.2c.1-.1.1-.2 0-.4-.1-.3-.5-.6-.9-.6-.2 0-.3 0-.4.1l.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M320.9 289.5c-.3 0-.5.2-.4.5.1.3.5.6.9.6.3 0 .5-.2.4-.5-.2-.3-.6-.5-.9-.6z",
              }),
              r.default.createElement("path", {
                fill: "#C6C6C6",
                d:
                  "M320.8 290s.1-.1.2-.1c.2 0 .4.2.5.3v.2L303.1 316v-.2c-.1-.2-.3-.3-.5-.3-.1 0-.2 0-.2.1l18.4-25.6z",
              }),
              r.default.createElement("path", {
                fill: "#AAA",
                d:
                  "M302.7 315.5c-.2 0-.3.1-.2.3.1.2.3.3.5.3s.3-.1.2-.3c-.2-.1-.4-.3-.5-.3z",
              }),
              r.default.createElement("path", {
                fill: "#4C4C4C",
                d:
                  "M302.2 315.3c.1-.1.2-.1.4-.1.3 0 .7.3.9.6.1.2.1.3 0 .4l-.1.2c.1-.1.1-.2 0-.4-.1-.3-.5-.6-.9-.6-.2 0-.3 0-.4.1l.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M302.4 315.4c-.3 0-.5.2-.4.5.1.3.5.6.9.6.3 0 .5-.2.4-.5-.1-.3-.5-.6-.9-.6z",
              }),
              r.default.createElement("path", {
                fill: "#4FE294",
                d:
                  "M294.4 325.2c.3.1.8.2 1.4.3.7.1 1.2.1 1.6 0 .5 0 1-.4 1.2-.7l3.8-5.3c.3-.4.4-.8.4-1.1l.1-1.7c0-.2.1-.3.2-.5l.1-.1h-.2l-6.2 8.7c-.1.2-.4.3-.6.3-.2 0-.3-.2-.1-.3l6.2-8.7h-.2l-.1-.1c-.1.2-.3.3-.5.5l-2.2 1.5c-.5.3-.9.7-1.2 1.1l-3.8 5.3c-.3.3-.3.7.1.8z",
              }),
              r.default.createElement("path", {
                fill: "#77F2AC",
                d:
                  "M296.1 324.6c-.1.2-.1.4.1.4s.5-.2.6-.3l6.2-8.7c-.1-.4-.6-.3-.7-.1l-6.2 8.7z",
              }),
              r.default.createElement("path", {
                fill: "#E2E2E2",
                d:
                  "M296.1 324.6c-.1.3.4.2.6-.2l6.2-8.6c.1 0 .1.1.2.2l-6.2 8.7c-.1.2-.4.4-.6.3-.3 0-.3-.2-.2-.4z",
              }),
              r.default.createElement("path", {
                fill: "#CECECE",
                d:
                  "M294.4 325.1c.3.1.8.2 1.5.3.7.1 1.2.1 1.6 0 .5 0 1-.4 1.2-.7l3.8-5.3c.3-.4.4-.8.4-1.1v-1.7c0-.2.1-.3.2-.5h.1l-.1.1c-.1.2-.2.3-.2.5l-.1 1.7c0 .4-.2.8-.4 1.1l-3.8 5.3c-.3.4-.8.7-1.2.7h-1.6c-.6-.1-1.1-.2-1.4-.4-.1 0-.2-.1-.2-.2 0 .1 0 .2.2.2z",
              }),
              r.default.createElement(
                "g",
                { fill: "#BF8D6B" },
                r.default.createElement("path", {
                  d:
                    "M303.7 294.1c-1.2 1.3-3.1 5.9-2.3 7.7.8 1.7 5.5 3.8 6.2 3.8.6-.9.7-1.2.7-1.2s-4.3-3-4.5-3.7c-.2-.7 1.7-4.1 2.2-4.6 1.1-1.4-.4-4-2.3-2z",
                }),
                r.default.createElement("path", {
                  d:
                    "M308.7 304.2c.7 0 1 0 1.3.2.1 0 .2.1.3.2l-.5.7s0 .7.6.5c.3-.1.4.2.3.6-.1.4-1.2 1.3-1.8 1.1-.6-.2-1.4-1.8-1.8-2.2-.4-.5 1.6-1.1 1.6-1.1z",
                })
              ),
              r.default.createElement("path", {
                fill: "#BF8D6B",
                d:
                  "M315.3 296.6c-.3.5.4.6 1 1.7s1.8-1.4 1.4-2.3c-.3-.8-.5-1.6-1.7 0-.3.2-.6.4-.7.6z",
              }),
              r.default.createElement("path", {
                fill: "#E5B617",
                d: "M996.2 198.6c.1 0 .1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M990 165s.5-1.1.6-3.2c.1-2 .1-2.2.3-3 .1-.2.2-.4.2-.7v-1.7l-.1-.1c-.1 0-.1 0-.1.1 0 0 0 .1-.1.2v-.3s0-.1-.1-.1h-.1s-.1 0-.1.1c0-.2-.1-.4-.3-.3-.1 0-.1.1-.1.1 0 .1 0 .1-.1.2v-.1c0-.1-.1-.1-.1-.1-.2 0-.2.1-.2.1-.1.4-.1.8-.2 1.2 0 .1-.1.2-.1.2v-.1s0-.1-.1-.1c-.1-.1-.1-.2-.2-.3-.1-.1-.2-.3-.3-.3-.2.1.2.7.3 1 0 .1.1.3.2.4v.1c.1.3.2.5.3.7 0 .3 0 .5-.1.8-.3 1.1-1.2 2.9-1.4 4-.2 1.4 1.9 1.2 1.9 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M982.4 170.4c.2.4 1.7 2.1 2 1 .3-.7.9-1 1.5-1.4.8-.4 1.5-.9 2.2-1.4.4-.2.6-.4.9-.8.2-.3.5-.6.7-1 .8-1.4 1.3-2.9 1.4-4.5v-2.9c-.1-.3-.4-.1-.6 0-.2 0-.3.1-.5.1-.3 0-.6-.2-.9-.4-.1-.1-.3-.3-.4-.2-.1.1-.2.4-.2.5 0 .1-.1.3-.1.4 0 .3-.1.5-.2.8 0 .2-.1.5-.1.8 0 .3-.1.7-.1 1 0 .3-.1.5-.1.8l-.3 1.2c-.1.4-.3.8-.4 1.2-.1.2-.2.5-.4.7-.5.5-1.6.7-2.3.9-.4.1-.8.2-1.2.1-.2 0-.4 0-.5-.1-.2 0-.4-.2-.5 0-.1.1-.1.5-.2.6-.2.5-.1.9-.1 1.5 0 .3.2.7.4 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M983.5 171c.3-.7.9-1 1.5-1.4.8-.4 1.5-.9 2.2-1.4.4-.2.6-.4.9-.8.2-.3.5-.6.7-1 .8-1.4 1.3-2.9 1.4-4.5v-2.5h.3c.2 0 .5-.2.6 0v2.9c-.1 1.6-.6 3.1-1.4 4.5-.2.3-.4.7-.7 1-.3.4-.5.5-.9.8-.7.5-1.5 1-2.2 1.4-.6.4-1.3.6-1.5 1.4-.2.6-.8.4-1.2-.1.1 0 .2-.1.3-.3z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M988.4 160.6c.2.2.4.4.7.5.2.1.4.1.6.2.5.1 1 .1 1.4-.1v-.8c-.4.2-.9.2-1.4.1-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.6-.4 0 .2 0 .5-.1.7z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M983.5 178.3l-.5.6c-.3.5-.6 1.1-1 1.6-.3.3-.6.5-.9.8 0 0 0 .1-.1.1-.1.1-.1.4-.2.6-.1.2.1.5.1.7v.6c0 .5-.1 1.1-.2 1.6v.6c0 .2.1.3.1.5s-.1.4-.1.5c-.1.4-.1.7-.1 1.1 0 .6.1 1.2.3 1.8.1.6.3 1.2.4 1.8 0 .4.1.9.5.9.3 0 .7 0 .9-.2.4-.2.4-.3.3-.7 0-.4 0-.8-.1-1.2 0-1.3 0-2.6.2-3.8 0-.3.1-.5.2-.8.1-.3.1-.5.2-.8 0-.4.1-.7.1-1.1v-2c.2-1 .2-2.1-.1-3.2z",
              }),
              r.default.createElement("path", {
                fill: "#E6AB81",
                d:
                  "M981.8 191.3c-.1-.6-.2-1.2-.4-1.8-.1-.6-.3-1.2-.3-1.8 0-.4.1-.7.1-1.1 0-.2.1-.4.1-.5 0-.2-.2-.4.1-.4.5 0 1.1 0 1.6-.1.1 0 .2-.1.3-.1.2-.2.2-.4.2-.7v-.1c0-.1-.1-.1-.2-.1-.3 0-.6-.1-.8-.1-.2 0-.4 0-.5-.1l-.2-.2c-.1-.1-.1-.2-.2-.3-.3-.3-.2-.7-.2-1.1 0-.2-.2-.5-.1-.7.1-.3.2-.5.2-.6 0 0 0-.1.1-.1.3-.3.6-.5.9-.8.4-.4.7-1.1 1-1.6 0 0 .1-.1.1-.2 0-.2-.1-.3-.1-.5l-.5.6c-.3.5-.6 1.1-1 1.6-.3.3-.6.5-.9.8 0 0 0 .1-.1.1-.1.1-.1.4-.2.6-.1.2.1.5.1.7v.6c0 .5-.1 1.1-.2 1.6v.6c0 .2.1.3.1.5s-.1.4-.1.5c-.1.4-.1.7-.1 1.1 0 .6.1 1.2.3 1.8.1.6.3 1.2.4 1.8 0 .4.1.9.5.9h.4c-.4 0-.4-.5-.4-.8z",
              }),
              r.default.createElement("path", {
                fill: "#F1BC95",
                d:
                  "M976.2 195.1c-.1-.6-.2-1.3-.3-1.9-.1-.6-.1-1.2-.2-1.9 0-.6-.1-1.3 0-1.9 0-.3.1-.7.2-1 .1-.3.2-.6.3-.8.2-.3.3-.6.4-1 .1-.3 0-.8 0-1.1v-3.7c.1-.3.1-.6.1-.8 0-.3.1-.6.2-.9.1-.4.2-.8.4-1.2 0-.1.4-.9.5-.8 0 0 1.1.7 3.4-.4s2.2-1.5 2.2-1.5.7 2.4-.3 4c-.4.6-.8 1.2-1.4 1.6-.3.2-.6.4-.8.7-.4.6-.4 1.3-.5 1.9-.1.8-.3 1.5-.6 2.3-.4 1.2-.7 2.3-1.1 3.5-.1.2-.1.4-.2.6-.1.4-.2.9-.2 1.3l-.3 2.7c0 .3-.1.6-.4.6-.3.1-.6.1-.9.1-.3.1-.4-.2-.5-.4z",
              }),
              r.default.createElement("path", {
                fill: "#E6AB81",
                d:
                  "M976.7 195.3c-.1-.6-.2-1.3-.3-1.9-.1-.6-.1-1.2-.2-1.9 0-.6-.1-1.3 0-1.9 0-.3.1-.7.2-1 .1-.3.2-.6.3-.8.2-.3.3-.6.4-1v-.4c0-.2.2-.2.4-.2.4.1.8.1 1.2.1.4 0 .8-.1 1.1-.3.1 0 .1-.1.2-.1.1-.1.1-.2.1-.3.1-.2.1-.4.1-.6-.6.1-1.1.3-1.7.4h-.7c-.2-.1-.5-.3-.6-.5V182c.1-.3.1-.6.1-.8 0-.3.1-.6.2-.9.1-.4.2-.8.4-1.2 0-.1.4-.9.5-.8 0 0 1.1.7 3.4-.4 1-.5 1.5-.8 1.8-1-.1-.4-.1-.6-.1-.6s.1.3-2.2 1.5c-2.3 1.1-3.4.4-3.4.4-.1 0-.5.8-.5.8-.2.4-.3.8-.4 1.2-.1.3-.1.6-.2.9 0 .3 0 .6-.1.8v3.7c0 .4.1.8 0 1.1-.1.3-.2.7-.4 1-.1.3-.2.6-.3.8-.1.3-.2.6-.2 1-.1.6 0 1.2 0 1.9 0 .6.1 1.3.2 1.9.1.6.2 1.3.3 1.9 0 .3.1.5.5.5h.2c-.2-.2-.2-.3-.3-.4z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M985.9 193.7c0 .2 0 .3-.1.4l-.3.3c-.1.1-.3.1-.4.1-.4.1-.9 0-1.3-.1-.1 0-.2-.1-.3-.1-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.2-.1 0-.1-.1-.2-.1-.1-.1-.3 0-.5.1-.3-.1-.6-.2-1-.3-.1 0-.1-.1-.1-.1-.1-.2-.1-.4-.1-.6v-.5c0-.1 0-.2.1-.3v-.6c.1-.2.2-.3.4-.3h.1c.1 0 .1.1.1.1 0 .1.1.2.2.2.1.1.2 0 .3 0 .2 0 .3-.1.5-.2 0 0 .2-.1.4-.1h.4c.1 0 .2.1.2.2 0 0 0 .1.1.1v.1c.1.1.1.3.2.4h.3c.1 0 .1 0 .2.1.1 0 .2.1.3.1.1 0 .2.1.3.1.1.1.2.1.3.2.1 0 .1.1.2.1l.1.1.1.1c.1.5.2.6.2.8z",
              }),
              r.default.createElement("path", {
                fill: "#1F1F1F",
                d:
                  "M985.8 193.8l-.3.3c-.1.1-.3.1-.4.1-.4.1-.9 0-1.3-.1-.1 0-.2-.1-.3-.1-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.2-.1 0-.1-.1-.2-.1-.1-.1-.3 0-.5.1-.2-.1-.5-.2-.7-.2-.1 0-.3-.1-.4-.2-.1-.2-.1-.4-.1-.6v.3c0 .2 0 .4.1.6.1.1.3.1.4.2.2.1.5.2.7.2.1 0 .3-.1.5-.1.1 0 .1.1.2.1.1.1.2.1.3.2.1.1.3.1.4.1.1 0 .2.1.3.1.4.1.8.1 1.3.1.1 0 .3 0 .4-.1l.3-.3v-.3c0 .1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3D3D3D",
                d:
                  "M985.5 193.6c-.2.1-.4.1-.6.1-.2 0-.4-.1-.6-.1-.2 0-.4-.1-.6-.1-.1 0-.3-.1-.4-.2-.2-.1-.2-.3-.3-.5v-.3c0-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.2.1-.2.3-.3.4-.4.1 0 .2.1.2.2s.1.1.1.2c.1.1.1.3.2.4h.3c.1 0 .1 0 .2.1.1 0 .2.1.3.1.1 0 .2.1.3.1.1.1.2.1.3.2.1 0 .1.1.2.1l.1.1c.3.2.3.4.1.5z",
              }),
              r.default.createElement("path", {
                fill: "#497ED1",
                d: "M980.7 183.4v-.2.2z",
              }),
              r.default.createElement("path", {
                fill: "#EDEBE8",
                d:
                  "M984 178.2s-.9 1.5-3.5 1.5c-.9 0-1.9-.2-3.2-.6 0 0 .5-2.8.2-3.4-.2-.4-1.2-1.7-1.7-2.8 0-.1-.1-.1-.1-.2-.1-.3-.2-.5-.2-.7 0-.5-.1-.9 0-1.4.1-.3.2-.6.2-.8.1-.2.1-.3.2-.5s.3-.4.5-.5c.7-.5 1.2-1 1.8-1.4 0 0 .1 0 .1-.1.5-.3.9-.5 1.4-.7.4-.2 1-.1 1.5 0 .9.2 1.6.5 1.9.9.6.8 1 2.7.8 5.8-.1 3.1.1 4.9.1 4.9z",
              }),
              r.default.createElement("path", {
                fill: "#CCC",
                d: "M980.8 168.3l1.4.8.1-.1-.1-1.8",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d: "M980.4 169.2l.8.5.6-.1.2-1.2-1.1-.1",
              }),
              r.default.createElement("path", {
                fill: "#1277AB",
                d: "M980.4 169l.8.6.6-.2.2-1.1-1.1-.1",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M982.3 169v-2.2.1c0 .2-.2.3-.3.4 0 0-.1 0-.1.1-.1 0-.2.1-.3.1v.1l.1.1v.1c-.1.1-.2.1-.3.2l-.2.2-.1.1 1.2.7z",
              }),
              r.default.createElement("path", {
                fill: "#D18D6D",
                d:
                  "M981.6 167.8s0 .1 0 0c0 .1-.1.2-.2.2s-.2.1-.3.1c-.2.1-.4.1-.7.1h-.4c-.1 0-.3 0-.4-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.5-.3v-.2c.1-.2.2-.4.3-.5.2-.2.4-.3.7-.4h.2c.4-.1.8-.1 1.3 0 .2.3.3.6.4.9v.1c.2 0 .2.1.3.3z",
              }),
              r.default.createElement("path", {
                fill: "#C77752",
                d:
                  "M979.6 167.9v.3c-.2-.1-.5-.1-.7-.2-.3-.1-.6-.2-.5-.5.1-.2.2-.4.3-.5.2-.2.4-.3.7-.4h.2v.1c0 .3-.1.6-.1 1 .1-.1.1 0 .1.2z",
              }),
              r.default.createElement("path", {
                fill: "#D18D6D",
                d:
                  "M981.5 166.1l-.1 1.2v.6c-.1 0-.2.1-.3.1-.2.1-.4.1-.7.1-.1 0-.2-.1-.4-.1-.2-.1-.3-.1-.5-.2s-.4-.2-.6-.4c-.1 0-.1-.1-.2-.2v-1.5c0-.1.1-.2.2-.3.1-.1.1-.1.2-.1h.5c.3.1.7.1 1 .3.2.1.4.1.6.2.1.2.3.3.3.3z",
              }),
              r.default.createElement("path", {
                fill: "#C77752",
                d:
                  "M980.5 167.4h-.1c-.1 0-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v.1h-.1c-.1 0-.3 0-.4-.1-.2 0-.4-.1-.6-.1 0 0-.1 0-.1-.1v-.1c.1-.5.1-1 .1-1.6 0-.2.2-.3.3-.3.2-.1.4-.1.6-.1 0 0 .1.3.1.4 0 .1.1.2.1.4v.3c0 .1.1.2.2.2.1.1.2.1.3.2.1.1.1.1.2.1.2 0 .3.1.5.2.1 0 .2.2.1.2h-.1c-.1.1-.2.1-.3 0z",
              }),
              r.default.createElement("path", {
                fill: "#F0B88F",
                d:
                  "M982.3 166c.1.6-.4 1-1.3 1.1-.4 0-.9-.1-1.3-.2-.2-.1-.3-.1-.4-.2h-.2c-.1 0-.1-.1-.1-.1-2.7-1.5-1.5-2.1-1.4-3.2 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.4-.9 1.5-1.7 2.2-1.8.5-.1.9.2 1.3.5.2.2.3.4.5.6v.1c.3.5.4 2.9.5 3.6z",
              }),
              r.default.createElement("path", {
                fill: "#2B2B2B",
                d:
                  "M977.4 194.6c-.1 0-.3.1-.4 0-.1 0-.2-.1-.3-.2h-.3c-.3 0-.5.1-.6.4-.1.3-.1.5 0 .8 0 .2 0 .5.1.7.1.2.3.5.4.7h.1l.1.5c.1.3.1.5.3.7.1.2.2.3.4.5.3.3.6.6 1 .7h.2c.1 0 .3 0 .4-.1.2-.1.4-.1.6-.3.1-.2.1-.5.1-.7 0-.3 0-.5-.1-.8-.1-.2-.2-.4-.3-.5-.2-.3-.4-.7-.5-1-.2-.4-.2-.8-.3-1.2v-.1c-.3-.1-.8-.1-.9-.1z",
              }),
              r.default.createElement("path", {
                fill: "#1F1F1F",
                d:
                  "M979.1 198.8s-.1 0-.1.1c-.1 0-.2.1-.3.1 0 0-.1 0-.2.1-.1 0-.3.1-.5 0-.1 0-.2-.1-.4-.1-.1 0-.2-.1-.3-.2-.2-.1-.3-.3-.4-.4-.1-.2-.3-.3-.4-.5-.1-.2-.2-.4-.3-.7l-.1-.5h-.1c-.2-.2-.4-.5-.4-.7-.1-.2 0-.5-.1-.7v-.1.4c0 .2 0 .5.1.7.1.2.3.5.4.7h.1l.1.5c.1.3.1.5.3.7.1.2.2.3.4.5.3.3.6.6 1 .7h.2c.1 0 .3 0 .4-.1.2-.1.4-.1.6-.3.1-.2.1-.4.1-.6 0 .1 0 .2-.1.3.1.1.1.1 0 .1z",
              }),
              r.default.createElement("path", {
                fill: "#3D3D3D",
                d:
                  "M977.3 195.5c.1 0 .2-.1.3-.1.1 0 .2-.1.3 0 .1.1 0 .3 0 .4 0 .2.1.3.2.4.2.3.4.5.6.8.1.1.1.3.2.4 0 .1.1.2.1.3 0 .2.1.5-.1.7-.1.1-.3.2-.4.2-.2 0-.5.1-.7-.1-.2-.2-.4-.4-.5-.6-.2-.2-.3-.4-.4-.6-.1-.2-.2-.4-.2-.6v-1.1c0-.1.1-.1.2-.1.2.1.3.1.4 0z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M984.1 182.3v1.6c0 .1 0 .2-.1.3-.1.2-.2.4-.3.5-.2.2-.5.4-.7.5-.8.3-2.3.1-2.3-.4v-1.6c-.1 1.3-.5 2.5-.9 3.8l-.6 2.1c-.3 1.1-.7 2.9-.9 4-.1.3-.1.7-.1 1-.1.3-.1.7-.2 1-.1.2-.2.6-.4.6-.3.1-.7 0-1 0-.3-.1-.5-.3-.7-.6-.1-.2-.2-.5-.2-.7-.3-1.3-.3-2.7-.3-4.1v-.8c0-.8.3-1.5.6-2.2.1-.3.3-.5.4-.8.1-.3.1-.6.1-1v-1c0-1 0-2 .1-3 .1-.7.3-1.3.5-2 .1-.2.1-.3.2-.5 0-.1.1-.3.2-.4.2.1.3.3.5.5.1.1.3.1.5.2.3.1.6.1 1 .1.6 0 1.2.1 1.8 0h.4c.5-.1.9-.2 1.3-.4.1-.1.2-.1.3-.2.1-.1.2-.2.3-.2l.1-.1c.1-.1.2-.2.3-.2l.1-.1v.6c0 .2-.1.4-.1.7 0 .2 0 .4.1.6 0 .1 0 .2.1.2.1.4.1.9.1 1.3-.2.1-.2.4-.2.7z",
              }),
              r.default.createElement("path", {
                fill: "#2E2925",
                d:
                  "M976.7 195.2c-.1-.2-.2-.5-.2-.7-.3-1.3-.3-2.7-.3-4.1v-.8c0-.8.3-1.5.6-2.2.1-.3.3-.5.4-.8.1-.3.1-.6.1-1v-1c0-1 0-2 .1-3 .1-.7.3-1.3.5-2 .1-.2.1-.3.2-.5h-.1c-.2-.1-.3-.3-.5-.5-.1.1-.1.3-.2.4-.1.2-.1.3-.2.5-.2.6-.4 1.3-.5 2-.1 1-.2 2-.1 3v1c0 .3 0 .7-.1 1-.1.3-.3.5-.4.8-.3.7-.5 1.5-.6 2.2v.8c.1 1.4 0 2.7.3 4.1.1.3.1.5.2.7.1.3.3.6.7.6.2 0 .4.1.6.1-.2-.1-.4-.3-.5-.6zm2.4-15.9c.3.1.6.1 1 .1.6 0 1.2.1 1.8 0h.4c.5-.1.9-.2 1.3-.4.1-.1.2-.1.3-.2v-.8l-.1.1c-.1.1-.2.2-.3.2l-.1.1c-.1.1-.2.2-.3.2-.1.1-.2.1-.3.2-.4.2-.8.4-1.3.4h-2.7c.2.1.3.1.3.1z",
              }),
              r.default.createElement("path", {
                fill: "#302C27",
                d:
                  "M984.2 182.3v.6c0 .2 0 .4-.1.6v.1c0 .1 0 .2-.1.4l-.3 1.2c-.1.6-.2 1.1-.4 1.7-.2.8-.2 1.7-.2 2.5v1.5c0 .1.1.2.1.3v.5c0 .1-.1.1-.1.1-.5.3-1 .5-1.5.5h-.4c-.1 0-.2-.2-.3-.3v-.8c0-.3-.1-.5-.1-.8 0-.2-.1-.5-.1-.7-.1-.5-.2-.9-.2-1.4 0-.2-.1-.4-.1-.6 0-.4.1-.8.1-1.2 0-.1.1-.3 0-.4 0-.2 0-.3-.1-.5v-3.3h.2c.1 0 .3-.1.3-.3.2-.3.2-.8.2-1.2 0-.4 0-.8-.1-1.3 0-.1 0-.1.1-.2h.1c.5-.1.9-.2 1.3-.4.1-.1.3-.2.4-.2.1-.1.2-.2.4-.3.1 0 .1-.1.2-.1s.1-.1.2-.1c.1-.1.1-.1.1-.2v3.2c.4.3.4.7.4 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M983.3 178.7c.1-.1.3-.2.4-.2.1-.1.2-.2.4-.3v-.2c0 .1-.1.1-.1.2-.1.1-.1.1-.2.1s-.1.1-.2.1c-.1.1-.2.2-.4.3-.1.1-.3.2-.4.2-.1 0-.1.1-.2.1.2-.1.5-.2.7-.3zm-1.1 13.3h-.4c-.1 0-.2-.2-.3-.3v-.8c0-.3-.1-.5-.1-.8 0-.2-.1-.5-.1-.7-.1-.5-.2-.9-.2-1.4 0-.2-.1-.4-.1-.6 0-.4.1-.8.1-1.2 0-.1.1-.3 0-.4 0-.2 0-.3-.1-.5V182c-.1.1-.2.1-.3.2h-.2v3.3c0 .2.1.3.1.5v.4c-.1.4-.1.8-.1 1.2 0 .2 0 .4.1.6.1.5.1.9.2 1.4 0 .2.1.4.1.7 0 .3 0 .5.1.8v.8l.3.3h.4c.4 0 .8-.2 1.2-.3-.3.1-.5.1-.7.1z",
              }),
              r.default.createElement("path", {
                fill: "#DF9876",
                d:
                  "M981.6 162.1h-.1c-.1.1-.1.1-.2.1-.2.1-.4.2-.6.2-.1 0-.3.1-.4.1-.1 0-.3 0-.4.1-.2.1-.4.3-.5.6-.1.2-.1.4-.1.5 0 .3.2.6.2.9 0 .1.1.2.1.2v.3c0 .1-.1.2-.1.4 0 .1.1.3.1.4.1.3.2.5.3.8-.2-.1-.3-.1-.4-.2h-.2c-.1 0-.1-.1-.1-.1-2.7-1.5-1.5-2.1-1.4-3.2 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.2-.4.6-.7 1-.9.3-.1.5-.2.8-.3.4-.1.8-.2 1.1-.1h.5c.1 0 .2.2.2.2s0 .1.1.1l.1.2c-.1.1-.2.1-.2.1z",
              }),
              r.default.createElement("path", {
                fill: "#4F2900",
                d:
                  "M979.2 165.1c0-.1 0-.3-.1-.4-.1-.3-.1-.6-.2-.9-.2-.8.5-1.3 1.9-1.7.5-.1.6-.1.8 0-.2-.5-.5-1-.9-1.2-.7-.4-1.5-.7-2.3-.6-.9.1-1.5.6-1.9 1.3-.4.6-.4 1.5-.2 2.2.1.5.3.9.6 1.3.3.5.8.9 1.3 1.2.1.1.3.1.4.2 0 0 0-.2-.1-.2-.1-.4-.4-.7-.7-1l-.3-.3c-.1-.2-.1-.4-.1-.6.1-.2.3-.3.5-.2.1.1.3.2.3.4.1.2.2.4.4.5.1.1 0 .2.2.2.4-.1.4-.2.4-.2z",
              }),
              r.default.createElement("path", {
                fill: "#422200",
                d:
                  "M979.2 160.6h1.3c-.6-.3-1.3-.5-1.9-.4-.9.1-1.5.6-1.9 1.3-.4.6-.4 1.5-.2 2.2.1.5.3.9.6 1.3s.6.8 1 1c0-.1-.1-.1-.1-.2-.2-.3-.3-.6-.5-.9-.3-.6-.4-1.1-.5-1.7-.2-1.1.5-2 1.4-2.5.2 0 .5-.1.8-.1z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M969 168.5s-.8-1-1.4-2.9c-.6-1.9-.6-2.2-1.1-2.8-.2-.2-.3-.3-.3-.6 0-.1-.1-.3-.1-.5-.1-.4-.1-.6-.2-.9 0-.1-.1-.2-.1-.3 0 0 0-.1.1-.1h.1l.1.1c0-.1-.1-.2-.1-.3 0 0 0-.1.1-.1h.2v-.1c0-.2 0-.4.2-.4.1 0 .1 0 .1.1s.1.1.1.1v-.1c0-.1 0-.1.1-.2.2-.1.2.1.2.1.2.4.3.7.5 1.1 0 .1.1.1.2.2v-.2c0-.1.1-.2.1-.3 0-.1.1-.3.3-.3.2 0-.1.7-.1 1v.6c0 .3-.1.5-.1.8 0 .3.1.5.3.7.5.9 1.9 2.5 2.4 3.5.5 1.4-1.6 1.8-1.6 1.8z",
              }),
              r.default.createElement("path", {
                fill: "#CCC",
                d:
                  "M978 167.5c.1-.1.2-.2.3-.2v.2c.1.1.2.2.4.2.2.1.5.2.7.2.4.1.9.2 1.3.4l-.4 1.5-.1.1-.1-.1-1.1-1.1c-.2-.2-.4-.4-.6-.7l-.3-.3c-.1-.1-.1-.1-.2-.1.1 0 .1 0 .1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M978.2 167.4c.1-.1.2-.2.3-.2v.2c.1.1.2.2.4.2.2.1.5.2.7.2.4.1.9.2 1.3.4l-.5 1.6-.1-.1-1.1-1.1c-.2-.2-.4-.4-.6-.7l-.3-.3c-.1-.1-.1-.1-.2-.1l.1-.1c-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d: "M981.1 169.6l-.1 6 1.2 1.5h.1l.4-2-1.1-5.6",
              }),
              r.default.createElement("path", {
                fill: "#1277AB",
                d: "M981.2 169.6v6l1.1 1.5.6-2-1.1-5.7",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "j",
                  x1: "1087.62",
                  x2: "1093.1071",
                  y1: "219.1855",
                  y2: "219.1855",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "rotate(-10.673 702.588 717.63)",
                },
                r.default.createElement("stop", {
                  offset: ".1613",
                  stopColor: "#26221F",
                }),
                r.default.createElement("stop", {
                  offset: ".1879",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".5593",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".577",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8728",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8985",
                  stopColor: "#2E2925",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#j)",
                d:
                  "M993.7 153.7l.4 2v.4c-.1.5-.6.9-1.2 1.2-.3.2-.7.3-1.2.4-.4.1-.8.1-1.2.1-.7-.1-1.3-.3-1.6-.7-.1-.1-.1-.2-.2-.4l-.4-2c0 .1.1.3.2.4.3.4.9.6 1.6.7.4 0 .8 0 1.2-.1.4-.1.8-.2 1.2-.4.6-.3 1.1-.8 1.2-1.2v-.4z",
              }),
              r.default.createElement("path", {
                fill: "#E0E0E0",
                d:
                  "M993.7 153.8l.3 1.8-2.3 2-3.1-1.1-.3-1.7c0 .1.1.3.2.4.3.4.9.6 1.6.7.4 0 .8 0 1.2-.1.4-.1.8-.2 1.2-.4.6-.3 1.1-.8 1.2-1.2v-.4z",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d:
                  "M993.7 153.7v.4c-.1.5-.6.9-1.2 1.2-.3.2-.7.3-1.2.4-.4.1-.8.1-1.2.1-.7-.1-1.3-.3-1.6-.7-.1-.1-.1-.2-.2-.4-.1-.5.3-1.1.9-1.5.1 0 .2-.1.2-.1s.1 0 .1-.1c.3-.2.7-.3 1.2-.4.4-.1.8-.1 1.2-.1 1 .2 1.7.6 1.8 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d: "M991.6 157.1l4.2-3.6-.1-.4-5.1-1.4-4.3 3.2.1.4",
              }),
              r.default.createElement("path", {
                fill: "#26221F",
                d: "M991.5 156.7l.1.4-5.2-1.8-.1-.4",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d: "M991.5 156.7l4.2-3.6-5.2-1.8-4.2 3.6",
              }),
              r.default.createElement("ellipse", {
                cx: "991",
                cy: "154",
                fill: "#4A423B",
                transform: "rotate(166.168 991.045 154.05)",
                rx: "3",
                ry: "1.7",
              }),
              r.default.createElement("path", {
                fill: "#D6E318",
                d:
                  "M990.3 160.2c0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.2-.1-.3v-.1l-.1.1h-.3v1.7h.1v-.6l-.1-1 .1.9.1.6h.1l-.1-.6-.1-.8.3 1.4h.1l-.3-1.4.2.8.2.6h.1l-.1-.6-.2-.8.3.9.2.5c-.2-.1-.1-.1-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#F2FF33",
                d:
                  "M989.8 158.7c0 .1-.1.1-.1.1h-.1s0-.1.1-.1c-.1-.1 0-.1.1 0-.1-.1 0-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#E5B617",
                d:
                  "M989.4 158.8c-.9-3.1 1.6-5 1.6-5l.1.2s-2.4 1.8-1.6 4.8h-.1z",
              }),
              r.default.createElement("ellipse", {
                cx: "991.1",
                cy: "153.8",
                fill: "#FFD82B",
                transform: "rotate(166.168 991.116 153.84)",
                rx: ".4",
                ry: ".2",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M980.6 178.7v1.4c0 .4-.1.7-.1 1.1 0 .7-.1 1.3-.1 2-.1 1.5-.1 3-.3 4.6-.1.3 0 .4-.3.5-.3.1-.6.1-.9.1h-.8c-.4 0-.7-.1-1.1-.3-.4-.2-.8-.4-1.1-.7-.2-.2-.3-.2-.2-.5 0-.2.1-.4.1-.6.1-.3.1-.6.1-1 .2-1.3.4-2.6.6-4 .1-.4.1-.8.2-1.2.2-1.3.4-2.6.2-3.9-.1-.6-.1-1.4-.3-1.9-.2-.5-.4-1-.5-1.5 0-.1-.1-.1-.1-.2-.2-.5-.4-1-.3-1.5 0-.2.1-.4.1-.6.1-.3.2-.6.2-.8.1-.2.1-.3.2-.5.2-.4.5-.7.8-1l.1-.1c.2-.2.5-.4.8-.5.1 0 .1-.1.2-.1s.1-.1.2-.1c.1-.1.2-.1.3-.1h.1s0 .1-.1.1v.2c0 .1 0 .1.1.2 0 .1.1.2.2.3l.3.3c.1.1.1.4.1.5.1.3.2.7.3 1 .2.6.5 1.2.6 1.9.1.4.2.8.2 1.1 0 0 .1.2.1.4.1.4.2 1 .2 1.1.1.5.2 1 .2 1.5l-.3 2.8z",
              }),
              r.default.createElement("path", {
                fill: "#0B4969",
                d:
                  "M976.4 187.7c0-.2.1-.4.1-.6.1-.3.1-.6.1-1 .2-1.3.4-2.6.6-4 .1-.4.1-.8.2-1.2.2-1.3.4-2.6.2-3.9-.1-.6-.1-1.4-.3-1.9-.2-.5-.4-1-.5-1.5 0-.1-.1-.1-.1-.2-.2-.5-.4-1-.3-1.5 0-.2.1-.4.1-.6.1-.3.2-.6.2-.8.1-.2.1-.3.2-.5.2-.4.5-.7.8-1 .2-.2.5-.4.8-.6.1 0 .1-.1.2-.1l-.1-.1c-.1-.1-.1-.2-.2-.3 0-.1-.1-.1-.1-.2v-.1s0-.1.1-.1h-.1c-.1 0-.2.1-.3.1-.1 0-.1.1-.2.1s-.1.1-.2.1c-.3.2-.6.4-.8.6-.3.3-.6.6-.8 1-.1.1-.1.3-.2.5-.1.3-.2.6-.2.8 0 .2-.1.4-.1.6-.1.6.1 1 .3 1.5 0 .1.1.1.1.2.2.5.3 1 .5 1.5.2.6.3 1.3.3 1.9.2 1.3 0 2.6-.2 3.9-.1.4-.1.8-.2 1.2-.2 1.3-.4 2.6-.6 4 0 .3-.1.6-.1 1 0 .2-.1.4-.1.6 0 .2.1.3.3.5.2.2.4.3.6.4v-.3z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M977.7 171.7c-.1.5-1.1 2.5-1.7 1.5-.4-.6-1.1-.8-1.8-.9-.9-.2-1.7-.5-2.5-.8-.4-.1-.7-.2-1.1-.5-.3-.2-.6-.5-.9-.8-1.1-1.1-2-2.5-2.5-4-.1-.4-.2-.8-.4-1.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1 0-.1-.1-.2 0-.1-.1-.1-.1-.2-.1-.2-.1-.3-.2-.5v-.1c.1-.3.4-.2.6-.2.2 0 .3 0 .5-.1.3-.1.6-.3.7-.6.1-.1.2-.3.3-.3.2.1.2.3.3.5.1.1.1.3.2.4.1.2.2.5.3.7.1.2.2.5.3.7.1.3.3.6.4.9.1.2.2.5.3.7.2.4.4.7.6 1 .2.3.5.7.7 1 .2.2.4.4.6.5.5.2 1.1.3 1.7.3.7 0 1.3 0 2-.1h.9c.7.2.8.8 1 1.4.2.6.2 1.1.1 1.5z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M976.8 172.6c-.4-.6-1.1-.8-1.8-.9-.9-.2-1.7-.5-2.5-.8-.4-.1-.7-.2-1.1-.5-.3-.2-.6-.5-.9-.8-1.1-1.1-2-2.5-2.5-4-.1-.4-.2-.8-.4-1.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1 0-.1-.1-.2 0-.1-.1-.1-.1-.2s0-.1-.1-.2h-.3c-.2 0-.6-.1-.6.2v.1c.1.2.1.3.2.5 0 .1.1.1.1.2s0 .1.1.2c0 .1.1.2.1.3 0 .1.1.2.1.3.1.4.2.8.4 1.2.5 1.5 1.4 2.9 2.5 4 .3.3.6.5.9.8.4.3.6.4 1.1.5.8.3 1.7.6 2.5.8.7.2 1.4.3 1.8.9.4.5.8.2 1.2-.4-.1.1-.3 0-.4-.2z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M968.2 162.6c.1 0 .3-.1.4-.2l-.1-.1c-.2-.1-.3.1-.3.3zm16.7 24.7c-.1.2-.3.3-.5.4-.2.1-.5.1-.6.2-.1 0-.3.1-.4.1h-.3c-.6 0-.6-.3-.6-.7 0-.6.1-1.1.2-1.7.4-3.2.4-6.4.4-9.6v-3.3c0-.9-.2-1.8-.4-2.7-.1-.5-.2-1-.2-1.5-.1-.5-.1-1-.2-1.6 0-.1 0-.2-.1-.2v-.1h.3c.1 0 .1.1.2.2.3.4.6.8.8 1.2.1.1.1.2.2.3.1.1.2.3.2.4.2.5.3 1.1.4 1.7.1.8.1 1.6.1 2.4v2.5c0 1.6.2 3.2.3 4.9 0 .6.1 1.3.1 1.9.1 1.2.1 2.4.1 3.5v.9c.1.3.1.6 0 .8z",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M980.2 173.2c-.2-.3-.4-.5-.5-.8-.3-.4-.6-.8-.8-1.3-.3-.4-.6-.9-.9-1.3-.2-.4-.5-.7-.7-1.1-.1-.2-.3-.4-.3-.6v-.1c.2-.2.5-.4.8-.5.1 0 .1-.1.2-.1s.1-.1.2-.1c.1-.1.2-.1.3-.1h.1s0 .1-.1.1v.2c0 .1 0 .1.1.2 0 .1.1.2.2.3l.3.3c.1.1.1.4.1.5.1.3.2.7.3 1 .2.6.5 1.2.6 1.9.1.4.2.8.2 1.1-.2 0-.2.2-.1.4zm2.9 0l-.3-1.1c-.1-.3-.1-.7-.2-1.1v-2.3c0-.3-.1-.5-.2-.7-.1-.2-.1-.4-.2-.5-.1-.2-.1-.2-.3-.3-.1 0-.2-.1-.3-.1.2 0 .4-.1.6-.3h.2c.2 0 .4.1.6.1h.3c.1 0 .2 0 .3.1.1 0 .2.1.2.2v1.1c-.1.7-.1 1.3-.2 2-.3.8-.4 1.8-.5 2.9z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M981.8 178.9c.2-2.2-.2-4.5-.9-6.5-.5-1.4-1.1-2.7-1.9-4-.2-.3-.4-.6-.5-.9 0-.1.1-.5 0-.6-.2-.3-1.1.3-1.3.5-.6.7-.1 1.9.2 2.7.5 1.3.9 2.7 1.3 4.1.4 1.4.7 2.8.7 4.3 0 1 0 1.3.7 1.9.4.3.8.7 1.2 1 .2-.7.4-1.6.5-2.5zm3.3-1.5v-1.7c0-1.6-.1-3.1-.4-4.6-.2-.8-.4-1.6-.6-2.3-.1-.4-.3-.7-.5-1.1l-.3-.6c-.1-.2-.3-.3-.4-.3-.2-.1-.3-.1-.5-.1h-.1s-.1 0-.1.1c-.1.1-.4.4-.7.3.2.1.3.3.3.5.1.2.1.3.2.5.2.7.3 1.4.4 2.1.1.7.1 1.4.2 2.2v2c0 1 .1 2 .1 3.1 0 .7.1 1.2.7 1.6.4.3.8.7 1.2 1 .2-1 .4-1.8.5-2.7z",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M978.6 180.9c-.3 1.4-.6 5.4-.6 7.6-.4 0-.7-.1-1.1-.3.1-.5.2-1 .4-1.5.1-.8 1-5.1 1.3-5.8zm5.8 6.8c-.2.1-.5.1-.6.2-.1 0-.3.1-.4.1.4-2.2.8-6 .8-7.4.2.8.2 5.1.3 5.9-.2.4-.1.8-.1 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M969.3 163.8c-.2.2-.3.5-.6.6-.2.1-.4.2-.5.3-.4.2-.9.3-1.4.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3 0-.1 0-.1-.1-.2.4.1.9-.1 1.3-.2l.6-.3c.2-.2.4-.4.5-.6l.4.8z",
              }),
              r.default.createElement("path", {
                fill: "#CC9F7E",
                d:
                  "M967 160.9c0-.2-.1-.4-.2-.5-.1-.2-.1-.4-.1-.3v-.1c.1.3.3.6.3.9zm-.7-.7zm.4 1c0-.2-.1-.3-.2-.5-.1-.1-.1-.2-.1-.3v-.2c0 .3.2.6.3 1zm-.3.2c0-.2-.1-.4-.2-.5-.1-.1-.1-.3-.2-.4l.1.1c0-.1.3.4.3.8z",
              }),
              r.default.createElement("path", {
                fill: "#8CACC7",
                d:
                  "M965.5 161.9l-1.5.1s-.4.2 0 1.1c.4.9 1.1.8 1.3.6.1-.2.6-.6.6-.6l1.7-1.1 3.2-1.8-5.3 1.7z",
              }),
              r.default.createElement("path", {
                fill: "#4D7495",
                d:
                  "M964.2 162.3s-.3.2 0 .7c.3.5.6.6.8.5.1 0 .3-.2.3-.2l.2-.4-.3-.6c-.1 0-.8-.1-1 0z",
              }),
              r.default.createElement("path", {
                fill: "#3C5B75",
                d: "M964.3 162.7s.2.6.5.4l.2-.3-.1-.4-.6.3z",
              }),
              r.default.createElement("path", {
                fill: "#91B3CF",
                d:
                  "M964.8 163.1s.1-.1.1-.3c0-.2-.2-.4-.4-.5-.2-.1-.3 0-.3 0l.7-.3h.8l-.1.7-.8.4z",
              }),
              r.default.createElement("path", {
                fill: "#E2F5FF",
                d:
                  "M965.1 163.4s.2-.2.1-.6c-.1-.4-.4-.6-.5-.7-.2-.1-.4-.1-.5-.1h-.1l5.5-3.1s.3-.1.5-.1c.3.1.7.2.8.8 0 .2 0 .5-.1.6-.1.1-5.7 3.2-5.7 3.2z",
              }),
              r.default.createElement("path", {
                fill: "#D2E9FF",
                d:
                  "M965.4 163.2s0 .2-.1.4l-.1.2 5.6-3.2s.2-.1.2-.3v-.2l-5.6 3.1z",
              }),
              r.default.createElement("path", {
                fill: "#B8941F",
                d: "M967.2 160.3c.7.4 1.1 1.4.7 1.9l.6-.3-.5-1.3-.8-.3z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M969.1 162.2c-.4-.2-.4-.6-.4-.6v-.3l-.5.3s0 .7.4.8.3.6.3.6.2-.2.2-.6c0 0 .3 0 .3.3v-.1s0-.3-.3-.4z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M968.7 161.3s0-1.1-1-1.4l-.6.3s1 .3 1.1 1.4c.1 1.2.5-.3.5-.3z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M959.6 220.4c-.1-.1-.1-.3-.2-.5-.1-.4-.3-.8-.4-1.2-.1-.1-.1-.2-.2-.3-.2-.2-.5-.3-.8-.4-.3 0-.6 0-.9.1-.1 0-.3.1-.4.2-.1.1-.1.3-.1.5v1c0 .1.1.1.2.1.1.1.2.1.3.2.1.1.2.2.2.4.1.3.3.7.4 1 .1.2.1.3.3.4.1.1.1.1.2.1.2.1.5.2.7.3.2.1.6.2.7 0 .5-.3.4-1 .2-1.5 0 .1-.1-.2-.2-.4z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M959.8 222.4c-.2.1-.5 0-.7 0-.2-.1-.5-.2-.7-.3-.1 0-.1-.1-.2-.1-.1-.1-.2-.3-.3-.4-.1-.3-.3-.7-.4-1-.1-.1-.1-.3-.2-.4-.1-.1-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.2-.2-.2-.2-.4-.2-.7v-.2c.1-.4.3-.5.6-.6h.2c.3-.1.6-.1.9-.1.3 0 .6.1.8.4.1.1.1.2.2.3.2.4.3.8.4 1.2 0 .2.1.3.2.5l.3.6c.1.2.2.9-.3 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M959.4 219.9c0-.2-.1-.3-.1-.5 0-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.2-.1-.4-.5-.7-.9-.8-.4-.1-.8 0-1 .4-.2.5.1 1.1.3 1.5.1.1.2.3.3.4l.3.3c.2.2.5.4.8.5h.2c.1 0 .1 0 .1-.1.3-.2.2-.7.2-1v-.2z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M957.1 220v1.6c0 .1 0 .2-.1.2s-.1-.1-.1-.2v-.3c0-.3 0-.5-.1-.8 0-.2-.1-.4-.2-.6-.1-.2-.1-.4-.1-.6v-.2c0-.1.1-.3.2-.4 0 .1.1.1.1.2 0 0 0 .1.1.1.1.1.1.3.2.4-.1 0-.1.3 0 .6 0-.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M957 218.3c-.1.1-.1.2-.2.3l-.1.1c-.1.1-.1.2-.1.4v.6c0 .2.1.5.1.7v.8c0 .2.1.4.1.5-.1 0-.1-.1-.1-.2v-.4c0-.3 0-.5-.1-.8 0-.2-.1-.4-.2-.6-.1-.2-.1-.4-.1-.6v-.4c0-.2.1-.3.2-.4 0-.1.1-.1.2-.1l.1-.1c.2 0 .2 0 .2.2 0-.1 0-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#171513",
                d: "M957 221.5c0 .1 0 .2-.1.2s-.1-.1-.1-.2h.2c-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M963.2 218.8c-.1-.1-.1-.3-.2-.5-.1-.4-.3-.8-.4-1.2-.1-.1-.1-.2-.2-.3-.2-.2-.5-.3-.8-.4-.3 0-.6 0-.9.1-.1 0-.3.1-.4.2-.1.1-.1.3-.1.5v1c0 .1.1.1.2.1.1.1.2.1.3.2.1.1.2.2.2.4.1.3.3.7.4 1 .1.2.1.3.3.4.1.1.1.1.2.1.2.1.5.2.7.3.2.1.6.2.7 0 .5-.3.4-1 .2-1.5l-.2-.4z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M963.4 220.8c-.2.1-.5 0-.7 0-.2-.1-.5-.2-.7-.3-.1 0-.1-.1-.2-.1-.1-.1-.2-.3-.3-.4-.1-.3-.3-.7-.4-1-.1-.1-.1-.3-.2-.4-.1-.1-.1-.1-.2-.1 0 0-.1 0-.1-.1-.1-.1-.2-.1-.3-.2-.2-.2-.2-.4-.2-.7v-.2c.1-.4.3-.5.6-.6h.2c.3-.1.6-.1.9-.1.3 0 .6.1.8.4.1.1.1.2.2.3.2.4.3.8.4 1.2 0 .2.1.3.2.5l.3.6c.1.1.2.8-.3 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M963 218.3c0-.2-.1-.3-.1-.5 0-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.2-.1-.4-.5-.7-.9-.8-.4-.1-.8 0-1 .4-.2.5.1 1.1.3 1.5.1.1.2.3.3.4l.3.3c.2.2.5.4.8.5h.2c.1 0 .1 0 .1-.1.3-.2.2-.7.2-1v-.2z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M960.7 218.4v1.6c0 .1 0 .2-.1.2s-.1-.1-.1-.2v-.3c0-.3 0-.5-.1-.8 0-.2-.1-.4-.2-.6-.1-.2-.1-.4-.1-.6v-.2c0-.1.1-.3.2-.4 0 .1.1.1.1.2 0 0 0 .1.1.1.1.1.1.3.2.4-.1 0 0 .2 0 .6 0-.1 0-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M960.6 216.6c0 .1 0 .1 0 0-.1.1-.1.2-.2.3l-.1.1c-.1.1-.1.2-.1.4v.6c0 .2.1.5.1.7v.8c0 .2.1.4.1.5-.1 0-.1-.1-.1-.2v-.4c0-.3 0-.5-.1-.8 0-.2-.1-.4-.2-.6-.1-.2-.1-.4-.1-.6v-.4c0-.2.1-.3.2-.4 0-.1.1-.1.2-.1l.1-.1c.2.1.2.1.2.2z",
              }),
              r.default.createElement("path", {
                fill: "#171513",
                d:
                  "M960.6 219.8c0 .1 0 .2-.1.2s-.1-.1-.1-.2h.1c-.1.1 0 .1.1 0-.1.1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M966 184.2s.8-.7 1.7-2.3c.9-1.6.9-1.8 1.5-2.3.2-.2.3-.2.4-.5 0-.1.1-.3.2-.4.2-.3.2-.5.3-.7 0-.1.1-.1.1-.2v-.1h-.1l-.1.1c.1-.1.1-.2.1-.2v-.1l-.1-.1h-.1s0 .1-.1.1v-.2c0-.2.1-.4-.1-.4-.1 0-.1 0-.1.1l-.1.1v-.1c0-.1 0-.1-.1-.2s-.2 0-.2 0l-.6.9c0 .1-.1.1-.2.2v-.5c0-.1-.1-.3-.2-.3-.2 0-.1.6-.1.9 0 .1 0 .3-.1.4v.1c0 .2 0 .5-.1.7-.1.2-.2.4-.4.6-.6.7-2.1 1.8-2.7 2.7-.5.9 1.2 1.7 1.2 1.7zm-1.8 19.6c0 .2 0 .4-.1.6 0 .4 0 .7-.1 1.1v1.3c0 .8-.1 1.6-.3 2.4-.1.3-.2.7-.3 1-.2.6-.3 1.1-.4 1.7-.1.7-.2 1.4-.2 2.1 0 .2 0 .5-.1.7v2c0 .5.1 1 .3 1.5.1.2.1.5.1.7v.3c0 .1-.2.2-.3.2h-.3s-.1 0-.1-.1c-.1 0-.1-.1-.2-.2l-.2-.2c-.6-.5-1-1.2-1.1-2 0-.3-.1-.5-.1-.8 0-.1 0-.2-.1-.3-.1-.5-.2-1-.3-1.6v-1.7c.1-.4.2-.7.3-1.1 0-.2.1-.3.2-.5.2-.6.1-1.3.1-1.8-.1-.6-.1-1.1-.2-1.7 0-.3-.1-.6 0-.9v-.2c0-.2.1-.3.1-.5.1-.6.2-1.4.5-1.9l.1-.1.1-.1.1-.1.1-.1c.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3l.2-.2c.3-.3.6-.7.8-1.2.1-.3.2-.6.2-.9.2.5.5 1 .6 1.5-.1.6-.2 1.2-.2 1.7z",
              }),
              r.default.createElement("path", {
                fill: "#D9A986",
                d:
                  "M964 205.7s0 .1 0 0v.4c0 .1-.2.2-.3.2-.1.1-.3.1-.4.2-.2 0-.3.1-.5.1-.4 0-.7.1-1.1 0h-.3c-.2 0-.3.1-.3.3v.7c.1.6.1 1.1.2 1.7.1.6.1 1.3-.1 1.8-.2.7-.5 1.3-.5 2v1.2c0 .6.1 1.2.3 1.7.1.2.1.5.2.8.1.3.2.5.3.8.1.3.3.6.4.9.1.3.3.6.4.9h-.1s-.1 0-.1-.1c-.1 0-.1-.1-.2-.2l-.2-.2c-.6-.5-1-1.2-1.1-2 0-.3-.1-.5-.1-.8 0-.1 0-.2-.1-.3-.1-.5-.2-1-.3-1.6v-1.7c.1-.4.2-.7.3-1.1 0-.1 0-.1.1-.2.2-.6-.1-1.3-.2-1.8l-.3-2.1c0-.6 0-1.2.1-1.8.1-.4.3-.8.6-1.1.2-.2.3-.4.5-.6l.1-.1.1-.1.1-.1c.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3l.2-.2c.2-.2.4-.5.5-.7.1-.1.2-.3.3-.5.1-.2.2-.2.4-.2.3.3.1.7-.1.9-.2.3-.5.7-.8.9-.2.2-.5.4-.7.5-.2.1-.4.3-.5.5-.1.2-.2.5-.3.7 0 .2-.1.5.2.5.8.1 1.6-.3 2.4-.1.2.3.1.5.1.5z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M962 200.3c-.1.6-.4 1.2-.9 1.6-.5.4-1.2.7-1.4 1.4-.1.4-.1.7-.1 1.1v1.2c0 .3 0 .6.1.9.1.5.2 1 .2 1.5.1.7-.1 1.4-.1 2.1 0 .6-.3 1.1-.4 1.6-.1.5-.2 1.1-.2 1.6v.3c-.1.7-.2 1.4-.2 2.1 0 .8 0 1.6.1 2.3 0 .4.1.7.1 1.1 0 .3.1.6.2 1 0 .2 0 .5-.1.7 0 .1 0 .1-.1.1l-.2.2c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.3-.4-.1-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.3-.1-.2-.1-.5-.2-.7-.1-.2-.1-.4-.2-.7v-.2c0-.1-.1-.2-.1-.4s-.1-.4-.1-.6c0-.1 0-.2-.1-.3 0-.2-.1-.5-.1-.7v-.1c0-.3-.1-.6-.1-.9-.1-.5-.1-.9-.1-1.4 0-.3 0-.6.1-1 .1-.6.1-1.3.2-1.9.1-.8 0-1.5-.1-2.3-.1-.7-.5-1.4-.6-2.2 0-.1 0-.2-.1-.4 0-.2-.1-.4-.1-.6 0-.2-.1-.3-.1-.5-.1-.4-.2-.7-.2-1.1V202c0-.3-.1-.6-.1-.9 0-.4 0-.9.1-1.2 0 0 0-.1.1-.1.1-.1.2-.1.3-.1.2 0 .5.3.7.3.3.1.6 0 .9 0 .8-.2 1.5-.5 2.2-1 .4-.2.8-.5 1.2-.8.1-.1.3-.3.4-.3.2-.1.5.1.6.2.5.8.4 1.6.3 2.2z",
              }),
              r.default.createElement("path", {
                fill: "#E6AB81",
                d:
                  "M957.3 200.7c.3.1.6.1.9 0 .8-.1 1.6-.4 2.3-.8.4-.2.8-.4 1.2-.7.1-.1.2-.2.3-.2-.1-.1-.3-.3-.5-.2-.1 0-.3.2-.4.3-.4.2-.8.5-1.2.7-.7.4-1.5.7-2.3.8h-.4c0 .1.1.1.1.1z",
              }),
              r.default.createElement("path", {
                fill: "#D9A986",
                d:
                  "M959.7 205.3v.4l-.4.1c-.2 0-.3.1-.5.1-.3.1-.7.1-1 .1-.2 0-.4 0-.6-.1-.1 0-.2 0-.3-.1-.1 0-.2-.1-.3-.2-.1 0-.1-.1-.2-.2l-.1-.1v.2c0 .1 0 .2.1.3l.3 1.2c.1.4.3.8.4 1.3.2.8.2 1.5.2 2.3-.1.6-.1 1.3-.2 1.9 0 .4-.1.8-.1 1.3 0 .4 0 .7.1 1.1.1 1.1.3 2.1.6 3.1.1.4.2.8.3 1.1 0 .1.1.2.2.3.3.6.7 1.2 1.2 1.7l-.2.2c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.3-.4-.1-.1-.1-.2-.1-.3 0-.1 0-.2-.1-.3-.1-.2-.1-.5-.2-.7-.1-.2-.1-.4-.2-.7v-.2c0-.1-.1-.2-.1-.4 0-.1-.1-.3-.1-.4v-.1c0-.1 0-.2-.1-.3 0-.2-.1-.5-.1-.7v-.4c0-.2-.1-.4-.1-.6-.1-.5-.1-.9-.1-1.4 0-.3 0-.6.1-1 .1-.6.1-1.3.2-1.9.1-.8 0-1.5-.1-2.3-.1-.7-.5-1.4-.6-2.2 0-.1 0-.2-.1-.4 0-.2-.1-.4-.1-.6 0-.2-.1-.3-.1-.5-.1-.4-.1-.9-.1-1.3v-.9c0-.7 0-1.3.1-2v-.3s0-.1.1-.1c.1-.1.2-.1.2 0h.1c.1 0 .2.1.2.1-.1.5-.2.9-.2 1.4 0 .4.1.8.1 1.3 0 .2 0 .2.1.4.1.1.2.2.4.3l.6.3c.4.1.7.3 1.1.4.3.1.6.1.9.2.2.1.3.1.5.1h.1v.1c-.2.3-.2.5-.2.7z",
              }),
              r.default.createElement("path", {
                fill: "#4A423C",
                d:
                  "M963 204c0 .1 0 .2-.1.2v.1c-.1.1-.2.4-.3.4h-.1c-.1 0-.1.1-.2.1h-.1c-.4.2-.8.3-1.3.4h-.9c.1-.4.3-1.8.3-2.7v-2.8l.5-.2c.3 0 .6 0 .9.1.1 0 .3.1.4.1.1 0 .3 0 .4.1.1.1.1.1.1.2.1.3.1.7.1 1 0 .3.1.6.1.9 0 .3 0 .7.1 1 .1.5.1.8.1 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M961 186.2v-.1.1zm7.6-4.8c0 .1-.1.1-.1.2-.1.2-.2.4-.4.7-.4.7-.8 1.3-1.2 1.9-.5.7-1 1.4-1.6 2-.5.6-1.2 1.2-1.8 1.8-.2.2-.4.5-.6.7-.2.2-.4.5-.5.7 0-.1-.1-.2-.2-.3-.2-.2-.2-.5-.4-.7-.1-.2-.3-.4-.4-.7-.1-.2-.3-.5-.4-.8 0-.1-.1-.3-.1-.4 0-.1-.1-.3-.1-.4.1-.3.2-.6.5-.8.2-.2.5-.4.8-.7.2-.2.4-.4.5-.6.3-.3.6-.5 1-.8.9-.7 1.8-1.5 2.5-2.4.1-.2.3-.3.4-.5l.1-.1c.2-.2.3-.5.6-.6.3-.2.7-.1 1.1 0 .2.1.5.3.5.6.1.4 0 .8-.2 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M968.8 180.3c-.1-.3-.3-.5-.5-.6.1.1.1.2.2.3.1.4-.1.7-.2 1.1-.5 1-1 1.9-1.7 2.8-.5.7-1 1.4-1.6 2-.5.6-1.2 1.2-1.8 1.8-.2.2-.4.5-.6.7-.1.1-.3.3-.4.5 0 .1.1.2.2.3.1.1.2.2.2.3 0-.3.3-.5.5-.7.2-.2.4-.5.6-.7.6-.6 1.2-1.1 1.8-1.8.6-.7 1.1-1.3 1.6-2 .6-.9 1.2-1.8 1.7-2.8 0-.5.1-.9 0-1.2z",
              }),
              r.default.createElement("path", {
                fill: "#EDEBE8",
                d:
                  "M963.5 191.5c0 .6-.2 1.1-.6 1.5l-.1.1-.1.1c-.1.1-.2.1-.3.3l-.1.1c-.1.1-.1.3-.1.4v.9c0 .8 0 1.7.1 2.5 0 .7 0 1.2.2 1.8 0 .1.1.3 0 .4-.1.1-.8.8-1.9.9-.9.1-1.8.1-2.8-.1h-.1c-.1 0-.4-.1-.7-.2-.3-.1-.5-.1-.5-.2.2-.7.1-1.8.2-2.5.1-.9.2-2 0-2.9 0-.1-.1-.3-.1-.4-.2-.6-.6-1.2-.7-1.9-.1-.3-.1-.6-.1-1 0-.5-.1-.9-.1-1.4 0-.3-.1-.4 0-.7.1-.4 0-.8.3-1.1.2-.3.5-.4.8-.5.1 0 .1-.1.2-.1l.9-.3c.3-.1.5-.1.7-.3.2-.1.3-.3.5-.4.1-.1.3-.1.5-.2.3-.1.6-.2.9-.2h.6c.1 0 .4 0 .4.2 0 .1.1.1.1.2s.1.2.2.2c.2.3.3.6.4 1l.3 1.2.3.9c.2.3.4.5.6.7.1.4.1.7.1 1z",
              }),
              r.default.createElement("path", {
                fill: "#EDEBE8",
                d:
                  "M962.5 199.6c-.1.1-.8.8-1.9.9-.9.1-1.8.1-2.8-.1h-.1l-.6-.2c-.3-.1-.5-.1-.5-.2.2-.7.1-1.8.2-2.5.1-.9.2-2 0-2.9h1c.5 0 1-.2 1.5-.4.3-.1.6-.3.9-.4.3-.2.5-.1.8 0 .2.1.4.1.6.2.2 0 .4.1.6.1v.8c0 .8 0 1.7.1 2.5 0 .7 0 1.2.2 1.8 0 .1.1.3 0 .4z",
              }),
              r.default.createElement("path", {
                fill: "#CFCDCA",
                d:
                  "M960.2 193.4c-.3.2-.6.4-1 .6-.1 0-.2.1-.3.1-.6.3-1.2.7-1.5 1.3-.1.2-.1.4-.1.6-.1.8-.1 1.5 0 2.3 0 .4.1.7.1 1.1 0 0 .1.6.1.8l-.6-.2c-.2-.1-.3-.1-.5-.2.2-.7.1-1.8.2-2.5.1-.9.2-2 0-2.9 0-.1-.1-.3-.1-.4-.2-.5-.4-.9-.6-1.4-.1-.2-.1-.3-.2-.5-.1-.3-.1-.6-.1-1 0-.5-.1-.9-.1-1.4 0-.3-.1-.4 0-.7.1-.4 0-.8.3-1.1.1-.2.3-.3.5-.4.1 0 .2-.1.2-.1.5-.2 1-.3 1.5-.5.3-.1.5-.4.8-.6l.3.3c.1 0 .1.1.2.2-.4.3-.9.5-1.4.6-.4.1-.9.2-1.3.4l-.1.1c-.1.1-.2.3-.2.4 0 .1.1.2.3.2.3.2.5.8.6 1.2 0 .1.1.2.1.3.1.7-.1 1.4-.1 2.1 0 .4 0 .9.2 1.3.4.7 1.4.8 2.1.5.1 0 .2-.1.3-.2.1 0 .2-.1.3-.1 0-.1 0-.2.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#1798DB",
                d:
                  "M962.5 199.6c.1-.1 0-.3 0-.4-.1-.3-.2-.6-.2-.8 0 .4 0 .8.2 1.2z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M960.6 187.1v.1c0 .2-.1.5-.3.7-.1.1-.3.2-.4.3-.6.3-1.4.2-2-.1-.1 0-.2-.1-.2-.2-.2-.2-.3-.4-.5-.5 0-.1.4-.9.3-.9.1 0 .3 0 .4-.1h.7c.4 0 .7-.1 1.1-.2.2 0 .3-.1.4.1l.3.3c.2.2.2.3.2.5z",
              }),
              r.default.createElement("path", {
                fill: "#FBBA8D",
                d:
                  "M957.5 184.9v1.8s.2.7.9.8c.7.1 1.2.1 1.5-.1l.2-.2v-1.8l-2.6-.5z",
              }),
              r.default.createElement("path", {
                fill: "#FAAF7D",
                d:
                  "M960.1 185.4v.4l-1.7-.4v1.8s0 .1.1.3h-.1c-.7-.1-.9-.8-.9-.8v-1.8l2.6.5z",
              }),
              r.default.createElement("path", {
                fill: "#F8CFB3",
                d:
                  "M960.7 181.1s.5 1.6.4 3.2c-.1 1.6-.8 1.8-1.5 1.9-.7.1-3.2-.6-3.6-1.9-.4-1.3.3-4.6.3-4.6l4.4 1.4z",
              }),
              r.default.createElement("path", {
                fill: "#F5BD97",
                d:
                  "M960.7 181.1s0 .2.1.4c0 0-1.1-.2-1.6.1-.5.3-1.6.6-1.6 1.1 0 .5-.3 1.3-.1 1.9.2.6.6 1 .6 1.4-.9-.3-1.9-.9-2.2-1.7-.4-1.3.3-4.6.3-4.6l4.5 1.4z",
              }),
              r.default.createElement("path", {
                fill: "#462015",
                d:
                  "M956.3 188.4c0-.1 0-.3.1-.4 0-.1.2-.2.3-.2.1-.1.3-.2.4-.2.1-.1.2-.1.2-.2.1-.2.1-.4.2-.5 0-.2.1-.4.1-.6v-.3c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.2-.1-.2-.2-.4-.4-.6-.3-.3-.8-.7-.6-1.2.1-.2.5-.5.7-.3.2.1.3.2.4.3.2.3.3.7.4 1.1 0 0 .1 0 .1-.1-.1-.6.1-1.2 0-1.8 0-.2-.1-.4-.2-.6l-.2-.2h.2l.3.3c.2.2.3.2.5.1.5-.2.9-.3 1.4-.5.2-.1.5-.2.7-.3.1-.1.4-.1.4-.3.1-.2-.1-.8-.2-1-.1-.2-.2-.2-.3-.3-.3-.2-.5-.3-.8-.4-.4-.2-.8-.3-1.2-.4-.7-.2-1.5-.1-2.2.2-.6.3-1.2.8-1.4 1.5-.1.2-.1.3-.1.5-.1.7-.6 1.3-.4 2 .1.3.2.5.3.8.1.3.1.6 0 .8-.1.2-.2.5-.2.7 0 .3.1.5.2.7.2.4.4.8.3 1.2-.1.3-.2.6-.2.9.1.5.8.7.9 1.2.1.3 0 .6 0 .9 0 .4.1.8.3 1.1.2.3.5.6.7.9-.3-.3-.5-.7-.5-1.2 0-.4.2-.8.3-1.2 0-.1.1-.2.1-.4 0-.1-.1-.3-.1-.5 0-.5-.1-.9-.1-1.2z",
              }),
              r.default.createElement("path", {
                fill: "#30160F",
                d:
                  "M956 191.5c0-.4.1-.7.3-1.1v-.3c-.2-.5-.8-.7-.9-1.2-.1-.3.1-.6.2-.9.1-.4-.1-.9-.3-1.2-.1-.2-.2-.4-.2-.7 0-.2.2-.5.2-.7.1-.3.1-.6 0-.8-.1-.3-.3-.5-.3-.8-.2-.7.2-1.3.4-2 0-.2 0-.3.1-.5.2-.7.7-1.2 1.4-1.5.7-.3 1.5-.3 2.2-.2h.1l-.9-.3c-.7-.2-1.5-.1-2.2.2-.6.3-1.2.8-1.4 1.5-.1.2-.1.3-.1.5-.1.7-.6 1.3-.4 2 .1.3.2.5.3.8.1.3.1.6 0 .8-.1.2-.2.5-.2.7 0 .3.1.5.2.7.2.4.4.8.3 1.2-.1.3-.2.6-.2.9.1.5.8.7.9 1.2.1.3 0 .6 0 .9 0 .4.1.8.3 1.1.2.3.5.6.7.9-.4-.3-.5-.8-.5-1.2z",
              }),
              r.default.createElement("path", {
                fill: "#CFCDCA",
                d:
                  "M962.8 193.2l-.1.1-.1.1c-.1.1-.2.1-.2.2l-.1.1c-.1.1-.1.3-.1.4 0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.1 0-.2-.1-.3-.1h-.4.4c.1 0 .2 0 .4-.1.2 0 .3-.1.5-.2l.1-.1c0-.1.1-.1.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#F1BC95",
                d:
                  "M956.5 192.6c.2-.2.2-.4.4-.5.2-.4.4-.8.4-1.2v-.6c0-.4-.1-.7-.2-1.1 0-.2-.1-.4-.1-.6-.1-.2-.1-.4-.2-.5l-.1-.1c-.1-.1-.1-.2-.2-.2s-.1 0-.2.1c-.2.1-.3.3-.5.5-.1.1-.2.2-.3.4-.1.1-.1.3-.1.4-.2 1.1.3 2.1.5 3.2 0 .2.1.4.2.5.1 0 .4-.3.4-.3z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d:
                  "M954.9 201.5c.3-1.1.7-2.2 1.2-3.3.1-.3.4-.6.4-.9.1-.4.2-.7.3-1.1 0 .2.3.3.4.4.2.1.4.2.5.3.1 0 .1.1.2.1s.1.1.2.1.1.1.2.1.2.1.3.1c.1 0 .2 0 .2.1h1.2c.2 0 .3 0 .5-.1.3-.1.6-.2.8-.3.1-.1.3-.1.4-.2l.1-.1c.1 0 .1-.1.1-.1v.1s0 .1.1.2c0 .1 0 .1.1.2s.1.2.2.4c0 .1.1.2.1.2l.3.6c.5 1.1.9 2.3 1.3 3.5.2.5.4 1 .5 1.5.1.5.3 1 .4 1.5.1.4.3.8.2 1.2-.1.3-.4.6-.8.6h-.4c-.1 0-.2-.1-.2-.1-.1 0-.1 0-.1.1-.1.1-.1.2-.2.3-.3.3-.6.5-1 .5-.2 0-.3 0-.5-.1-.3.1-.5.2-.8.2-.3 0-.5-.1-.6-.2-.2.2-.5.3-.7.3h-.3c-.4 0-.7-.2-.9-.5-.2.1-.5.2-.7.2-.4 0-.7-.2-.9-.5v-.1h-.1c-.2.1-.4.1-.6.1-.4 0-.8-.2-.9-.6v-.1c-.2.1-.4.1-.6.1-.2 0-.4-.1-.6-.2l.7-4.5z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M960.6 207.2c-.4.2-.7.3-1.1.3-.4 0-.7-.2-.9-.5.5-1.8.9-4.8 1.2-9.2.2 0 .6-.4.8-.4.1 1.6.1 7.1 0 9.8zm3.3-.8c-.1 0-.2.3-.3.4-.3.3-.6.5-1 .5-.2 0-.3 0-.5-.1.1-2.1 0-6.1-.7-9.7.1-.1.4-.5.5-.6.5 2.1 1.5 7 2 9.5z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M962.7 197.8c-1.1.5-2.3.7-3.5.6-.8-.1-1.6-.3-2.3-.8-.1-.1-.3-.2-.4-.3.1-.4.2-.7.3-1.1 0 .2.3.3.4.4.2.1.4.2.5.3.1 0 .1.1.2.1s.1.1.2.1.1.1.2.1.2.1.3.1c.1 0 .2 0 .2.1h1.2c.2 0 .3 0 .5-.1.3-.1.6-.2.8-.3.1-.1.3-.1.4-.2l.1-.1.1-.1v.1s0 .1.1.2c0 .1 0 .1.1.2s.1.2.2.4c.3.1.4.2.4.3z",
              }),
              r.default.createElement("path", {
                fill: "#26231F",
                d:
                  "M958.7 198.3c0 1.5-1.1 6.4-1.6 8.4v-.1h-.1c-.2.1-.4.1-.6.1-.4 0-.8-.2-.9-.6v-.1c.5-1.2 1.9-4.8 2.6-8.6l.6.9z",
              }),
              r.default.createElement("path", {
                fill: "#CCC",
                d:
                  "M959.6 188.4s-.2 1.1-.4 1.5c0 .1-.2.2-.2.2l-.1-.1c-.2-.2-.4-.3-.5-.5-.3-.2-.5-.5-.8-.7-.2-.1-.3-.3-.5-.4l-.3-.3-.1-.1c-.1-.1-.1-.2-.1-.3 0-.1.1-.1.2-.1s.2-.1.3-.1c0 0-.1 0-.1.1s.1.1.1.2c.3.2.6.4.9.5.6.1 1.1.1 1.6.1zm2 .6c0 .1-.1.1-.2.2l-1.7-.8s.1-.2.2-.2h.1v.1c.1-.1.2-.1.3-.3.1-.1.2-.2.2-.3.1-.3.1-.6 0-.8 0 0-.1-.1-.1-.2l.1-.1.1-.1.1-.1h.1v.3c0 .2.1.5.1.7.1.3.1.6.2.8.2.2.4.6.5.8z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M959.9 188.2l-.6 1.7-.1-.1c-.2-.2-.4-.3-.5-.5-.3-.2-.5-.5-.8-.7-.3-.2-.5-.5-.8-.7-.1-.1-.2-.2-.3-.2 0 0-.1 0-.1-.1 0 0-.1-.1 0-.1l.2-.2s.1 0 .1-.1c.1 0 .2-.1.3-.1 0 0-.1 0-.1.1s.1.1.1.2c.3.2.6.4.9.5.6.3 1.1.4 1.7.3z",
              }),
              r.default.createElement("path", {
                fill: "#FFF",
                d:
                  "M961.6 189l-1.6-.8h-.1.1c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1.1-.1.2-.2.2-.3.1-.3.1-.6 0-.8 0 0-.1-.1-.1-.2l.1-.1.1-.1h.1l.1-.1v.3c0 .2.1.5.1.7.1.3.1.6.2.8 0 .2.1.5.1.7.2-.1.3 0 .3.1z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.2 188.2c0 .1 0 .1 0 0 .1.1.1.1.1.2v.2s0 .1-.1.1c0 0-.1 0-.1.1h-.4l-.1-.1v-.2c0-.1 0-.1.1-.1 0 0 .1 0 .1-.1h.2c.1-.1.1-.1.2-.1z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d:
                  "M960.1 188.2s.1 0 0 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0l.2.2v.2s0 .1-.1.1c0 0 0 .1-.1.1h-.5v-.3s0-.1.1-.1h.2l.2-.2z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.3 188.6s-.1.1 0 0l-.1.1h-.4v-.3.3h.5c-.1 0-.1 0 0-.1 0 .1 0 .1 0 0 0 .1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.1 188.2c.1 0 .1.1.2.1v.3h-.3v-.2h.1c-.1-.2-.1-.2 0-.2z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.1 188.9s.1 0 0 0l.1.1v.1c-.2-.3-.2-.3-.1-.2 0-.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.1 188.9c.1 0 .1 0 0 0l.1.1-.1-.1c-.1-.1 0-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.1 189c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1.1 0 0 0 .1 0 .1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d: "M960.1 188.9l.1.1c-.2-.1-.2-.2-.1-.1-.1-.1-.1-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M960 189.1l.1.1v.1c-.2-.3-.2-.3-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960 189.1l.1.1c-.2-.1-.2-.2-.1-.1-.1-.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d: "M960 189.3l-.1.1v-.1.1c0-.1.1-.1.1-.1 0-.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M959.9 189.1c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0l.1.1-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M960.1 189.3s.1.1 0 0l.1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d:
                  "M960.1 189.3c.1.1.1.1 0 0l.1.1c-.2-.1-.2-.1-.1-.1-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.1 189.5l-.1.1v-.1.1c.1 0 .1 0 .1-.1 0 0 .1 0 0 0 .1 0 .1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d: "M960.1 189.3l.1.1c-.2-.1-.2-.1-.1-.1-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.3 189.5s0 .1 0 0l.1.1v.1c-.2-.2-.2-.2-.1-.2-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d:
                  "M960.3 189.5s0 .1 0 0l.1.1c-.3-.1-.2-.1-.1-.1-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.3 189.7c-.1 0-.1 0 0 0l-.1.1v-.1.1c0-.1 0-.1.1-.1-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.2 189.5c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0l.1.1c-.2-.1-.1-.1-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.4 189.7c0 .1 0 .1 0 0l.1.1v.1c-.2-.2-.2-.2-.1-.2-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d:
                  "M960.4 189.7s0 .1 0 0c0 .1 0 .1 0 0l.1.1c-.2-.1-.2-.1-.1-.1-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.4 189.9c0 .1 0 .1 0 0l-.1.1v-.1.1l.1-.1c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.3 189.7c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1.1.1.1 0 0 .1.1.1.1 0 0l.1.1c-.2-.1-.1-.1-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M960.3 190c.1 0 .1.1 0 0l.1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.3 190s.1 0 0 0c.1 0 .1 0 0 0l.1.1c-.2-.1-.2-.1-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.4 190.2s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0l-.1.1v-.1.1c0-.1 0-.1.1-.1-.1 0-.1 0 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.3 190c.1 0 .1 0 0 0l.1.1c-.2-.1-.2-.1-.1-.1-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M960.2 190.2c.1 0 .1.1 0 0l.1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d:
                  "M960.2 190.2s.1 0 0 0c.1.1.1.1 0 0l.1.1c-.2-.1-.2-.1-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.3 190.4s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0l-.1.1v-.1.1l.1-.1c-.1.1-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.2 190.2c.1 0 .1.1 0 0l.1.1c-.2-.1-.2-.1-.1-.1-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.4 188.7c.1 0 .1 0 .1.1v.1c-.3-.2-.2-.2-.1-.2-.1 0-.1-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.3 188.6h.1c-.2.1-.2.1-.1 0 0 .1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d: "M960.5 188.8c-.1.1-.1.1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.3 188.7s.1 0 0 0c.1 0 .1 0 0 0h.1c-.2.1-.2 0-.1 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.4 188.9c.1 0 .1 0 .1.1v.1c-.2-.2-.2-.2-.1-.2-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.3 188.9c.1 0 .1 0 0 0h.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.5 189s0 .1 0 0c0 .1 0 .1 0 0 0 .1-.1.1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1 0 .1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.3 188.9c.1 0 .1 0 0 0 .1 0 .1 0 0 0h.1c-.2.1-.2.1-.1 0-.1.1-.1.1 0 0-.1.1-.1.1 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M960.6 189c.1 0 .1 0 .1.1v.1c-.2-.1-.2-.2-.1-.2-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.5 189c.1 0 .1 0 0 0h.1c-.2.1-.1 0-.1 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.7 189.2s-.1 0 0 0l-.1.1v-.1.1l.1-.1s0-.1 0 0c0-.1 0-.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.5 189c.1 0 .1 0 0 0 .1 0 .1 0 0 0h.1c-.2.1-.2.1-.1 0-.1.1-.1.1 0 0-.1.1-.1.1 0 0-.1.1-.1.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M960.8 189.1c.1 0 .1 0 .1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M960.8 189.1h.1c-.2.1-.2 0-.1 0-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M960.9 189.2c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1 0 .1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M960.8 189.1s.1 0 0 0h.1c-.2.1-.2.1-.1 0-.1.1-.1.1 0 0-.1.1-.1.1 0 0-.1.1-.1 0 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M961 189.3c.1 0 .1 0 .1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M961 189.2h.1c-.2.1-.2.1-.1 0 0 .1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M961.2 189.4s-.1 0 0 0c-.1 0-.1 0 0 0-.1.1-.1.1 0 0l-.1.1v-.1.1l.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M961 189.3c.1 0 .1 0 0 0h.1c-.2.1-.2 0-.1 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d: "M961.1 189.5c.1 0 .1 0 .1.1v.1c-.2-.2-.2-.2-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M961.1 189.5h.1c-.2.1-.2 0-.1 0-.1 0 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M961.2 189.6c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1 0 .1 0 .1 0 0 0 .1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M961 189.5s.1 0 0 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0h.1c-.1.1-.1.1-.1 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#241010",
                d:
                  "M961.1 189.7c0 .1 0 .1 0 0 0 .1 0 .1 0 0 .1 0 .1 0 .1.1v.1c-.2-.1-.2-.1-.1-.2z",
              }),
              r.default.createElement("path", {
                fill: "#3B1A1A",
                d: "M961.1 189.7h.1c-.2.1-.2.1-.1 0-.1.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#2E1414",
                d:
                  "M961.2 189.9c0 .1 0 .1 0 0 0 .1 0 .1 0 0l-.1.1v-.1.1c.1 0 .1 0 .1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#401C1C",
                d:
                  "M961.1 189.8h.1c-.2.1-.2 0-.1 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M960.3 201.3v.7c0 .8 0 1.6-.1 2.4-.1 1.2-.2 2.4-.4 3.6-.1.6-.1 1.2-.2 1.9-.1.4 0 .5-.4.6-.3.1-.7.1-1.1.2h-1.2c-.4 0-.8-.1-1.1-.3 0 0-.1 0-.1-.1-.5-.2-1.2-.5-1.5-1-.2-.3-.1-.8-.1-1.1 0-1.8.2-3.8.6-5.6.2-1 .5-2.1.7-3.1.1-.5.3-1 .4-1.5.1-.4 0-.9-.1-1.4-.2-1.2-.5-2.4-.7-3.6-.2-1-.6-2.4-.3-3.3.3-1.1 1-1.5 1.9-2 .1 0 .1-.1.2-.1s.1-.1.2-.1c.1-.1.2-.1.3-.2h.1l-.1.1s-.1.1 0 .2v.1c0 .1.1.2.1.3.1.1.1.3.2.4.1.1.2.2.3.4.6 1.3 1.4 3.2 1.8 4.6 0 .3.1.7.1 1 0 .2.1.4.1.6.1 1 .1 2 .1 3 0 .7 0 1.4.1 2 .2.3.2.8.2 1.3z",
              }),
              r.default.createElement("path", {
                fill: "#0B4969",
                d:
                  "M956.9 210.4c-.1 0-.1 0 0 0-.1 0-.1-.1-.2-.1-.5-.2-1.2-.5-1.5-1-.2-.3-.1-.8-.1-1.1 0-1.8.2-3.8.6-5.6.2-1 .5-2.1.7-3.1.1-.5.3-1 .4-1.5.1-.4 0-.9-.1-1.4-.2-1.2-.5-2.4-.7-3.6-.2-1-.6-2.4-.3-3.3.3-1 .9-1.4 1.7-1.9 0-.1-.1-.2-.1-.3v-.3s0-.1.1-.1h-.1c-.1 0-.2.1-.3.2-.1 0-.1.1-.2.1s-.2.1-.2.1c-.9.6-1.6 1-1.9 2-.3 1 .1 2.4.3 3.3.2 1.2.5 2.4.7 3.6.1.4.2.9.1 1.4-.1.5-.3 1-.4 1.5-.3 1-.5 2.1-.7 3.1-.4 1.8-.6 3.7-.6 5.6 0 .3-.1.8.1 1.1.3.5 1 .7 1.5 1 0 0 .1 0 .1.1.4.2.7.3 1.1.3h.8c-.2.1-.5.1-.8-.1z",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M957.7 201.3c-.3 1.7-.7 6.7-.8 9.3-.4 0-.8-.1-1.1-.3 0 0-.1 0-.1-.1.1-.6.3-1.1.4-1.8.2-.9 1.2-6.2 1.6-7.1z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M965.6 207.8c-.1.2-.4.4-.7.6-.2.1-.3.2-.4.2-.2.1-.5.2-.7.3h-.1c-.1 0-.2.1-.3.1-.4.1-.8.3-.8-.3v-1.3c0-1.6.1-3.2 0-4.9-.2-2.9-.5-5.8-.5-8.7 0-.5.1-1 0-1.6 0-.5-.1-1.1-.2-1.6-.1-.7-.2-1.3-.3-2-.1-.4-.1-.8-.3-1.2-.1-.3-.3-.5-.4-.8-.1-.1-.1-.2 0-.3.1-.1.2-.2.3-.4.3.2.4.6.6.9.3.7.6 1.4.8 2.1.1.2.1.4.2.6.1.2.3.3.4.5.4.6 1.1 1.2.9 2.1 0 .3-.2.6-.3.9-.3.6-.4 1.1-.3 1.8v.5c0 .2 0 .4.1.6.1.9.4 1.9.6 2.8.3 1.5.8 2.9 1.1 4.5.2 1 .3 2.1.4 3.1v.8c-.1.1 0 .5-.1.7z",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M964.9 208.4c-.2.1-.3.2-.4.2-.2.1-.5.2-.7.3h-.1c.1-2.7-.1-7.4-.4-9.1.4.9 1.2 6.2 1.4 7.2.1.5.2.9.2 1.4z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M968.5 181.6c-.1.2-.2.4-.4.7-.1-.4-.3-.7-.6-1-.4-.3-.9-.5-1.3-.4.1-.2.3-.3.4-.5.5-.1 1 .1 1.3.4.3.2.5.5.6.8z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M950.3 186.9s-.8-.9-1.6-2.7c-.8-1.8-.8-2-1.3-2.6-.2-.2-.3-.3-.4-.5 0-.1-.1-.3-.1-.5-.2-.4-.2-.6-.3-.8 0-.1-.1-.2-.1-.3v-.1h.1l.1.1c0-.1-.1-.2-.1-.3v-.1s.1-.1.1 0h.1s0 .1.1.1v-.2c0-.2-.1-.4.1-.4.1 0 .1 0 .1.1l.1.1v-.1c0-.1 0-.1.1-.2.2-.1.2.1.2.1.2.3.4.7.5 1 0 .1.1.1.2.2v-.2c0-.1 0-.2.1-.3 0-.1.1-.3.2-.3.2 0 0 .7 0 1v1.4c.1.2.2.5.3.7.6.9 2.1 2.2 2.7 3.2.8 1-1.2 1.6-1.2 1.6z",
              }),
              r.default.createElement("path", {
                fill: "#CC9F7E",
                d:
                  "M947.9 180.2c0-.2-.1-.3-.2-.4-.1-.1-.1-.3-.1-.3v-.1c0 .3.2.5.3.8zm-.3.2c0-.2-.2-.3-.2-.4-.1-.1-.1-.2-.1-.3v-.2c0 .4.2.6.3.9zm-.2.2c0-.2-.1-.3-.2-.4-.1-.1-.1-.2-.2-.4l.1.1c-.1 0 .2.4.3.7z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M948 183.6c0 .1.1.1.1.2.1.2.2.4.4.7.4.7.8 1.3 1.2 1.9.5.7 1 1.4 1.6 2 .5.6 1.2 1.1 1.7 1.7.3.4.7.6 1.1.9.4.3.6.6.7 1.1 0 .1.1.2.1.3.1.2.3.3.5.3.2.1.5.1.7.1.6-.1.9-.6 1-1.1.1-.4.1-.9.1-1.4 0-.7-.1-1.6-.4-2.2-.1-.1-.1-.2-.2-.3-.2-.1-.5 0-.8-.1-.3-.1-.5-.3-.8-.4-.4-.3-.7-.7-1.1-1-.4-.4-.8-.7-1.2-1.1-.8-.7-1.6-1.5-2.3-2.3-.1-.2-.3-.3-.4-.5l-.1-.1c-.2-.2-.3-.5-.6-.6-.3-.2-.7-.1-1.1 0-.2.1-.5.3-.5.6 0 .6.2 1 .3 1.3z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M956.8 192.6c-.2 0-.5 0-.7-.1-.2-.1-.4-.2-.5-.3-.1-.1-.1-.2-.1-.3-.2-.5-.4-.8-.7-1.1-.4-.3-.8-.6-1.1-.9-.5-.6-1.2-1.1-1.7-1.7-.6-.7-1.1-1.3-1.6-2-.4-.6-.8-1.2-1.2-1.9-.1-.2-.2-.4-.4-.7 0-.1-.1-.1-.1-.2-.2-.3-.3-.7-.2-1.1 0-.1.1-.2.2-.3-.1 0-.2.1-.3.1-.2.1-.5.3-.5.6-.1.4 0 .7.2 1.1 0 .1.1.1.1.2.1.2.2.4.4.7.4.7.8 1.3 1.2 1.9.5.7 1 1.4 1.6 2 .5.6 1.2 1.1 1.7 1.7.3.4.7.6 1.1.9.4.3.6.6.7 1.1 0 .1.1.2.1.3.1.2.3.3.5.3.2.1.5.1.7.1.2-.1.5-.2.6-.4z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M948.2 183.9c.1.2.2.4.4.7.1-.4.3-.7.6-1 .4-.3.9-.5 1.3-.4-.1-.2-.3-.3-.4-.5-.5-.1-1 .1-1.3.4-.3.2-.5.5-.6.8z",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M960 195.3c-.1-.2-.2-.3-.3-.5-.3-.4-.5-.8-.8-1.2-.3-.5-.7-1-1-1.6-.4-.5-.7-1.1-1.1-1.6-.3-.4-.6-.9-.9-1.3-.1-.2-.4-.4-.4-.7 0-.4.3-.5.5-.7.1-.1.2-.2.4-.2.1-.1.3-.1.4-.2.1-.1.2-.1.3-.1h.3c0 .1-.1.2-.1.3v.1c.1.2.2.3.3.5l.3.6c.6 1.3 1.4 3.2 1.8 4.6.2.5.3 2 .3 2zm2.1-1l-.3-1.4c-.1-.4-.2-.9-.2-1.3v-2.5c0-.5 0-1-.1-1.5-.1-.2-.2-.4-.3-.5l-.3-.3c-.1-.1-.2-.3-.3-.4v-.1c0-.1.1-.1.1-.1.1-.1.2-.1.3-.2.4-.1.7 0 1.1.1.1 0 .2.1.3.1.1 0 .1 0 .2.1.2.1.4.3.5.4v1.4c-.1.8-.1 1.6-.2 2.4-.6 1.2-.7 2.4-.8 3.8 0-.1 0 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M960.6 198.2c.2-2.1-.2-4.3-.9-6.1-.5-1.3-1.1-2.6-1.8-3.8-.2-.3-.4-.6-.5-.9 0-.1.1-.5 0-.5-.2-.2-1.1.3-1.3.5-.6.7-.1 1.8.2 2.6.5 1.3.8 2.6 1.2 3.9.4 1.3.6 2.7.7 4.1 0 .9 0 1.2.6 1.8.4.3.7.7 1.1 1 .5-.9.6-1.8.7-2.6zm3.3-1.5v-1.6c0-2.7-.4-5.4-1.5-7.8-.1-.1-.1-.2-.2-.3-.1-.2-.3-.5-.4-.6-.2-.2-.4-.3-.6-.5-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1-.1 0-.1.1-.2.2s-.2.1-.2.1 0 .1-.1.1c0 .1 0 .1.1.2l.6.9c.1.2.1.3.2.5.2.6.3 1.3.4 2 .1.7.1 1.4.2 2.1v1.9c0 1 .1 1.9.1 2.9 0 .7.1 1.1.6 1.6.4.3.7.7 1.1 1 .3-1 .4-1.8.5-2.7z",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "k",
                  x1: "1047.9056",
                  x2: "1054.3232",
                  y1: "220.811",
                  y2: "220.811",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "rotate(-11.572 763.99 711.74)",
                },
                r.default.createElement("stop", {
                  offset: ".1613",
                  stopColor: "#26221F",
                }),
                r.default.createElement("stop", {
                  offset: ".1879",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".5593",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".577",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8728",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8985",
                  stopColor: "#2E2925",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#k)",
                d:
                  "M949.6 170.5l.5 2.3v.5c-.1.5-.7 1.1-1.4 1.4-.4.2-.8.4-1.3.5-.5.1-1 .1-1.4.1-.8-.1-1.5-.3-1.9-.8-.1-.1-.2-.3-.2-.5l-.5-2.3c0 .2.1.3.2.5.3.4 1 .7 1.9.8.4 0 .9 0 1.4-.1.5-.1 1-.3 1.3-.5.7-.4 1.3-.9 1.4-1.5v-.4z",
              }),
              r.default.createElement("path", {
                fill: "#E0E0E0",
                d:
                  "M949.6 170.5l.4 2.1-2.7 2.4-3.6-1.2-.4-2c0 .2.1.3.2.5.3.4 1 .7 1.9.8.4 0 .9 0 1.4-.1.5-.1 1-.3 1.3-.5.7-.4 1.3-.9 1.4-1.5.1-.1.1-.3.1-.5z",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d:
                  "M949.6 170.5v.5c-.1.5-.7 1.1-1.4 1.5-.4.2-.8.4-1.3.5-.5.1-1 .1-1.4.1-.8-.1-1.5-.3-1.9-.8-.1-.1-.2-.3-.2-.5-.1-.6.3-1.2 1-1.7.1-.1.2-.1.3-.2 0 0 .1 0 .1-.1.4-.2.8-.4 1.3-.5.5-.1 1-.1 1.4-.1 1.1.2 1.9.6 2.1 1.3z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d: "M947.2 174.5l4.8-4.2-.1-.5-6-1.6-5 3.8.1.5",
              }),
              r.default.createElement("path", {
                fill: "#26221F",
                d: "M947.1 174.1l.1.4-6.2-2-.1-.5",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d: "M947.1 174.1l4.8-4.3-6.1-2.1-4.9 4.3",
              }),
              r.default.createElement("ellipse", {
                cx: "946.4",
                cy: "170.9",
                fill: "#4A423B",
                transform: "rotate(165.262 946.456 170.91)",
                rx: "3.5",
                ry: "2",
              }),
              r.default.createElement("path", {
                fill: "#D6E318",
                d:
                  "M945.6 178.1c0-.1-.1-.2-.1-.4 0-.1-.1-.3-.1-.4-.1-.2-.1-.3-.2-.5 0-.1-.1-.2-.1-.4v-.1l-.1.1h-.4c0 .2 0 .5.1.7 0 .2 0 .5.1.7v.5h.1l-.1-.6-.1-1.1.2 1.1.1.7h.1l-.1-.7-.1-.9.3 1.6h.1l-.3-1.7.2.9.2.7h.1l-.2-.7-.3-1 .3 1 .2.6c.1.1.1 0 .1-.1.1.1.1.1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#F2FF33",
                d: "M945 176.3c0 .1 0 .1 0 0v.1h-.3s0-.1.1-.1h.3-.1z",
              }),
              r.default.createElement("path", {
                fill: "#E5B617",
                d:
                  "M944.7 176.5c-1.1-3.6 1.8-5.9 1.8-5.9l.1.2s-2.8 2.2-1.7 5.7h-.2z",
              }),
              r.default.createElement("ellipse", {
                cx: "946.5",
                cy: "170.7",
                fill: "#FFD82B",
                transform: "rotate(165.262 946.535 170.678)",
                rx: ".4",
                ry: ".3",
              }),
              r.default.createElement("path", {
                fill: "#8CACC7",
                d:
                  "M967.1 176.1l-.6-1.5s-.4-.4-1.2.4c-.8.8-.4 1.5-.2 1.6l.8.4 1.7 1.4 3 2.7-3.5-5z",
              }),
              r.default.createElement("path", {
                fill: "#4D7495",
                d:
                  "M966.2 174.9s-.3-.3-.7.2c-.4.4-.4.9-.3 1 .1.1.3.2.3.2l.5.1.6-.5c-.1 0-.3-.8-.4-1z",
              }),
              r.default.createElement("path", {
                fill: "#3C5B75",
                d: "M965.7 175.2s-.5.4-.2.7l.4.1.4-.3-.6-.5z",
              }),
              r.default.createElement("path", {
                fill: "#91B3CF",
                d:
                  "M965.5 175.9s.2.1.4 0 .4-.4.4-.6c0-.2-.1-.3-.1-.3l.5.6.3.8-.7.2-.8-.7z",
              }),
              r.default.createElement("path", {
                fill: "#E2F5FF",
                d:
                  "M965.3 176.2s.3.1.6-.2c.3-.3.5-.6.6-.8v-.5l-.1-.1 5.2 4.7s.2.2.3.5c0 .3 0 .8-.5 1.1-.2.1-.5.2-.6.1-.2 0-5.5-4.8-5.5-4.8z",
              }),
              r.default.createElement("path", {
                fill: "#D2E9FF",
                d:
                  "M965.6 176.5s-.2.1-.4.1-.2-.1-.2-.1l5.4 4.7s.1.2.3.1h.2l-5.3-4.8z",
              }),
              r.default.createElement("path", {
                fill: "#B8941F",
                d: "M969.3 177.4c-.1.8-1.1 1.6-1.8 1.4l.6.5 1.2-1v-.9z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M968 180c0-.5.4-.6.4-.6l.3-.1-.5-.4s-.7.2-.7.8-.5.5-.5.5.3.2.7-.1c0 0 .1.3-.2.4h.1c.1 0 .4-.1.4-.5z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M968.8 179.2s1.2-.4 1.1-1.5c-.7-.7-.6-.5-.6-.5s.1 1.2-1.1 1.7c-1.1.4.6.3.6.3z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M995.3 184.9v.2c0 .2.1.5.1.7.2.7.3 1.4.6 2.1.3.8.6 1.6.9 2.3.3.7.8 1.4 1.1 2.1.2.4.5.8.7 1.2.3.4.4.7.4 1.2v.3c.1.2.2.3.3.4.2.1.4.3.6.3.6.1 1-.3 1.3-.8.2-.4.4-.8.5-1.2.2-.6.4-1.5.2-2.1 0-.1-.1-.2-.2-.3-.2-.2-.5-.1-.7-.3l-.6-.6c-.3-.4-.5-.8-.7-1.2-.3-.4-.6-.9-.9-1.3-.6-.9-1.1-1.8-1.5-2.8-.1-.2-.2-.4-.2-.6v-.1c-.1-.3-.2-.5-.4-.7-.2-.3-.6-.3-1-.3-.3.1-.5.2-.7.4.1.4.1.8.2 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M1000.9 195.7c-.2 0-.4-.2-.6-.3-.1-.1-.3-.3-.3-.4v-.3c0-.5-.1-.8-.4-1.2-.3-.4-.6-.7-.7-1.2-.3-.7-.8-1.4-1.1-2.1-.3-.8-.6-1.5-.9-2.3l-.6-2.1c-.1-.2-.1-.5-.1-.7v-.2c-.1-.4-.1-.7.1-1.1.1-.1.1-.2.2-.2h-.3c-.3.1-.5.2-.7.4-.2.3-.2.7-.1 1.1v.2c0 .2.1.5.1.7.2.7.3 1.4.6 2.1.3.8.6 1.6.9 2.3.3.7.8 1.4 1.1 2.1.2.4.5.8.7 1.2.3.4.4.7.4 1.2v.3c.1.2.2.3.3.4.2.1.4.3.6.3.4 0 .7 0 .8-.2.1 0 .1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#F8CFB3",
                d:
                  "M996.8 182c-.1 0-.2.2-.2.3 0 .1-.1.2-.1.2v.2c-.1-.1-.1-.1-.1-.2l-.3-.9s0-.1-.2-.1c-.1 0-.1.1-.1.1v.1l-.1-.1s0-.1-.1-.1c-.2 0-.2.1-.1.3v.1h-.2v.1c0 .1 0 .2.1.2 0 0 0-.1-.1-.1h-.1s0 .1-.1.1v.2c0 .2 0 .4.1.7 0 .1 0 .3.1.4 0 .2.1.3.3.5l1.4.6c-.1-.2-.2-.4-.2-.6 0-.2.1-.4.1-.6v-.5c-.1-.3.1-.9-.1-.9z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M995.3 184.9v.2c0 .2.1.5.1.7.2.7.3 1.4.6 2.1.3.8.6 1.6.9 2.3.3.7.8 1.4 1.1 2.1.2.4.5.8.7 1.2.3.4.4.7.4 1.2v.3c.1.2.2.3.3.4.2.1.4.3.6.3.6.1 1-.3 1.3-.8.2-.4.4-.8.5-1.2.2-.6.4-1.5.2-2.1 0-.1-.1-.2-.2-.3-.2-.2-.5-.1-.7-.3l-.6-.6c-.3-.4-.5-.8-.7-1.2-.3-.4-.6-.9-.9-1.3-.6-.9-1.1-1.8-1.5-2.8-.1-.2-.2-.4-.2-.6v-.1c-.1-.3-.2-.5-.4-.7-.2-.3-.6-.3-1-.3-.3.1-.5.2-.7.4.1.4.1.8.2 1.1z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M1000.9 195.7c-.2 0-.4-.2-.6-.3-.1-.1-.3-.3-.3-.4v-.3c0-.5-.1-.8-.4-1.2-.3-.4-.6-.7-.7-1.2-.3-.7-.8-1.4-1.1-2.1-.3-.8-.6-1.5-.9-2.3l-.6-2.1c-.1-.2-.1-.5-.1-.7v-.2c-.1-.4-.1-.7.1-1.1.1-.1.1-.2.2-.2h-.3c-.3.1-.5.2-.7.4-.2.3-.2.7-.1 1.1v.2c0 .2.1.5.1.7.2.7.3 1.4.6 2.1.3.8.6 1.6.9 2.3.3.7.8 1.4 1.1 2.1.2.4.5.8.7 1.2.3.4.4.7.4 1.2v.3c.1.2.2.3.3.4.2.1.4.3.6.3.4 0 .7 0 .8-.2.1 0 .1 0 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M995.3 185.2c0 .2.1.5.1.7.2-.3.5-.6.8-.7.4-.2 1-.2 1.4 0-.1-.2-.2-.4-.2-.6-.4-.2-1-.2-1.4 0-.2.2-.5.4-.7.6z",
              }),
              r.default.createElement("path", {
                fill: "#DF9876",
                d:
                  "M1004.8 206.8c-.2 0 0 1.3-.1 1.5 0 .2-.1.4-.1.6-.3 1.1-.5 2.1-1 3.1-.3.7-.7 1.8-.6 2.6 0 .8.4 1.5.4 2.3v1.2c-.1.9-.3 1.8-.5 2.6-.1.3-.2.7-.5.9-.2.1-.8.1-1 .1-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8v-15.8c.8 1.2 2.1 2 4 2h.5z",
              }),
              r.default.createElement("path", {
                fill: "#D4774A",
                d:
                  "M1001.4 214.7c0 .9.1 1.7.4 2.6.2.8.2 1.7.1 2.6 0 .4-.2.7-.1 1.1 0 .1 0 .7.1.8l-.9-.3c.1-.2.1-.4.1-.6v-.8c0-.3.1-.6.1-1 .1-.7 0-1.3 0-2 0-.5-.1-1.1-.2-1.6s0-.8.1-1.4c.2-1.1.7-2.3.6-3.5.3 1.3-.2 2.7-.3 4.1z",
              }),
              r.default.createElement("path", {
                fill: "#1B1B1B",
                d:
                  "M1003.4 220.3s-.2-1.4-1.2-.4c-.4.4-.6.8-.8 1.3-.2.3-.3.6-.5 1-.1.2-.3.5-.5.5h-.3c-.1 0-.2 0-.3-.1l-.1-.1v-.1l.3-.3c-.3 0-.6 0-.9.1-.1 0-.5.1-.5.2-.1.3 0 1.2.2 1.3.2.1 1.1.8 1.8.2.1 0 .2-.2.2-.2.1-.1.2-.2.3-.2l.5-.5c.1-.1.2-.2.3-.4l.3-.3h.1c.1 0 .1.1.1.2v.4c0 .3 0 .7.1 1 0 .1 0 .3.1.3h.1v-.5c0-.4 0-.8.1-1.2 0-.1 0-.2.1-.2.1-.2.2-.3.3-.4.1-.1.1-.2.1-.3.4-.6.3-1 .1-1.3z",
              }),
              r.default.createElement("path", {
                fill: "#DF9876",
                d:
                  "M1000.9 215.5v.4c0 .8 0 1.6.1 2.4 0 .3.1.7.1 1 .1.7-.1 1.5-.2 2.2-.1.5-.3.8-.6 1.1-.3.4-.6.8-1 1-.2.1-.4.2-.7.2-.1 0-.4 0-.5-.1v-.1c.2-.3.4-.6.5-.9.2-.3.1-.6.1-.9 0-.8 0-1.5-.1-2.3 0-.4-.1-.8-.1-1.1l-.3-2.1c-.1-.7 0-1.3-.1-2-.1-.9-.2-1.9-.3-2.8-.1-.9-.2-1.7 0-2.6.2-1.1.1-2-.1-3.1 0-.2-.1-.4-.1-.6h4.3c0 .7 0 1.4-.1 2.1 0 1.4-.3 2.7-.5 4-.1.6-.3 1.2-.4 1.9.1.9.1 1.6 0 2.3z",
              }),
              r.default.createElement("path", {
                fill: "#D4774A",
                d:
                  "M997.7 211.2c-.1-1.1-.1-2.2-.1-3.3 0-.6-.1-1.3 0-1.9.1-.9 2-.6 2.5-.6h1.9v.8h-3.2s-.2 1.5-.3 1.7c-.1.7-.1 1.3-.1 2 0 1 .1 2 .1 3 .1 2.1.4 4.2.5 6.3v2.9c0 .6-.1 1.3-.5 1.8l-.1.1h-.1c-.2 0-.4 0-.5-.2l-.1-.1v-.3c.2-.2.6-.1.8-.4.1-.2.1-.4.1-.6.1-.8 0-1.5 0-2.3 0-.4-.1-.8-.1-1.1-.1-1-.2-1.9-.4-2.9-.2-1.5-.4-2.9-.5-4.4.1-.2.1-.4.1-.5z",
              }),
              r.default.createElement("path", {
                fill: "#0B4969",
                d:
                  "M1004.5 212.4c-.1 0-.1 0-.2.1-.6.2-1.3.4-2 .5-.7.1-1.5.1-2.2 0-.6-.1-1.1-.1-1.7-.2-.1 0-.1 0-.2-.1-.1 0-.2-.1-.4-.2-.1-.1-.3-.1-.4-.2-.2-.1-.7-.3-.8-.5-.1-.3 0-.8 0-1.1.1-1.6.5-3.2.9-4.8.3-1.4.7-2.8.5-4.2v-.2c-.2-.8-.5-1.6-.8-2.5-.1-.3-.2-.6-.2-.9 0-.3-.1-.6-.2-.8v-.9c.1-.5.2-1.1.4-1.5.2-.4.6-.8.9-1.2.3-.3.5-.6.8-.9.2-.2.4-.3.5-.5.2-.2.2-.5.2-.8v-.1c.1-.1.2-.1.3-.1.3 0 .7-.1 1.1-.1.4 0 .8-.1 1.3-.2.7-.1 1.3.1 2 .4.1 0 .1.1.2.1s.2.1.2.2c.1.1.2.3.2.5v.3c0 .2-.2.5-.2.7v.6c0 .7 0 1.5.1 2.2v2.1c0 .5 0 1-.1 1.5 0 .3 0 .5-.1.8 0 .3-.1.5-.1.8-.1.4-.1.8-.2 1.2v.5c0 .4.1.9.2 1.3.1.6.2 1.3.2 1.9.1 1 .1 1.9.1 2.9v1.7c.4.8.3 1.3-.3 1.7z",
              }),
              r.default.createElement("path", {
                fill: "#C7AB9F",
                d:
                  "M1002.4 189.8l.1 1.2s-.2.4-1.3.5c-1.1.1-1.3-.3-1.3-.3l-.1-1.2 2.6-.2z",
              }),
              r.default.createElement("path", {
                fill: "#DBBAA4",
                d: "M1002.5 191s-.2.4-1.3.5h-.4l-.1-1.2 1.8-.1v.8z",
              }),
              r.default.createElement("path", {
                fill: "#F8CFB3",
                d:
                  "M1000.8 190.7s-2-.1-1.8-1.2c.2-1.1.3-1.6.3-1.6s-.4-.5-.1-.6c.3-.2.6-.3.6-.5 0-.1 0-.8.4-1 .4-.2 2.1-.5 2.1-.5l1.2 3-1.2 2.6-1.5-.2z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M1006 211.5c-.1.1-.2.1-.3.2l-.9.6c-.6.3-1.3.4-2 .6-.1 0-.3.1-.4.1-.4 0-.8.1-1.2.1h-1.3c-.5 0-.9-.1-1.4-.2-.1 0-.2-.1-.4-.1-.1 0-.1-.1-.2-.1v-.2c.3-1 .5-2.1.7-3.1.2-1.1.8-6 .9-7.2.1-1 0-2.1 0-3.1 0-.5-.6-3.2-.4-3.8.1-.2.1-.4.2-.6.1-.3.3-.6.5-.9.6-.6 1.3-1.2 2-1.6.4-.2.8-.3 1.1-.5.5-.2.9-.3 1.4-.3h.1c.2 0 .3.1.4.2.1.1.2.3.2.5.2 1.2.2 2.4.1 3.7-.1 1.3-.2 2.6-.4 4 0 .3 0 .5-.1.8v.4c0 .5-.1 1.1 0 1.6 0 .5.2.9.3 1.3.1.2.1.5.2.7.3 1.1.5 2.2.7 3.3.2 1.1.4 2.2.5 3.3.1 0-.1.1-.3.3z",
              }),
              r.default.createElement("path", {
                fill: "#093C57",
                d:
                  "M1002.1 191.5c-.2-.1-.3-.1-.5-.1s-.4.1-.6.1c-.3 0-.8 0-1.1-.2-.1-.1-.1-.1-.1-.2 0 .1-.1.2-.2.3-.1.1-.2.1-.2.2-.2.4.2.6.5.7.8.3 1.7.2 2.4-.1.1 0 .2-.1.2-.1.2-.2-.2-.5-.4-.6z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M1002.5 191.5c0-.2-.1-.4-.2-.5-.1-.1-.2-.1-.3-.1v.1c-.1.4-.4.6-.7.8-.4.1-.7.1-1.1.1-.4 0-.8 0-1.1.2-.3.2-.6.4-.8.7-.4.5-.5 1.1-.8 1.7l-.1.3c.1.1.2-.1.2-.1.2-.3.4-.7.7-1 .2-.2.4-.3.6-.5.1-.1.2-.1.3-.2.2-.1.6-.3.9-.3.1 0 .2 0 .3.1.2 0 .3.1.5.1.2.1.5.2.7.3.2.1.5.3.8.2v-.1c.1-.5.2-1.1.1-1.8z",
              }),
              r.default.createElement("path", {
                fill: "#222",
                d:
                  "M1006.3 187.5v-.3c0-.4 0-.8-.1-1.2-.1-.4-.4-.6-.6-.9-.2-.3-.3-.5-.6-.8-1-.8-2.5-.9-3.2-.7-.5.1-.9.6-1.2 1-.1.2-.2.5-.4.7-.1.3-.3.5-.4.8.1 0 .2.1.3.2.1-.2.2-.4.4-.5.1 0 .3 0 .4.1.2.1.5.3.7.4.4.4.2.9 0 1.4-.1.2-.2.3-.3.5-.2.4-.2.9-.2 1.3.1.7.4 1.3.6 1.9.3.9.5 1.7.5 2.7 0 .4-.1.8-.1 1.2 0 .6.3 1.2.4 1.8.2 1.1-.1 2.2.3 3.3.1.3.3.5.4.7.4.6.7 1.2.9 2 .4-.8.1-1.7.2-2.5.1-.9.7-1.3 1-2.2.2-.7.1-1.5.1-2.3 0-.5.1-.9.2-1.4 0-.3 0-.7-.1-1.1v-.6c0-.8.6-1.3.5-2.1 0-.3-.1-.7-.1-1 0-.3.2-.5.3-.8.1-.5.1-1.1.1-1.6z",
              }),
              r.default.createElement("path", {
                fill: "#2A2A2A",
                d:
                  "M1001.7 221.3s-.2-1.4-1.2-.4c-.4.4-.6.8-.8 1.3-.2.3-.3.6-.5 1-.1.2-.3.5-.5.5h-.3c-.1 0-.2 0-.3-.1l-.1-.1v-.1l.3-.3c-.3 0-.6 0-.9.1-.1 0-.5.1-.5.2-.1.3 0 1.2.2 1.3.2.1 1.1.8 1.8.2.1 0 .2-.2.2-.2.1-.1.2-.2.3-.2l.5-.5c.1-.1.2-.2.3-.4l.3-.3h.1c.1 0 .1.1.1.2v.4c0 .3 0 .7.1 1 0 .1 0 .3.1.3h.1v-.5c0-.4 0-.8.1-1.2 0-.1 0-.2.1-.2.1-.2.2-.3.3-.4.1-.1.1-.2.1-.3.5-.5.3-.9.1-1.3z",
              }),
              r.default.createElement("path", {
                fill: "#8CACC7",
                d:
                  "M988 189.7l-1.1-.9s-.5-.1-.8.8c-.3.9.2 1.4.5 1.4h.8l2 .5 3.5 1-4.9-2.8z",
              }),
              r.default.createElement("path", {
                fill: "#4D7495",
                d:
                  "M986.8 189.1s-.3-.1-.5.4 0 .8.2.9c.1.1.4 0 .4 0l.4-.1.2-.7c0 .2-.5-.4-.7-.5z",
              }),
              r.default.createElement("path", {
                fill: "#3C5B75",
                d: "M986.6 189.5s-.3.5.1.6l.3-.1.2-.4-.6-.1z",
              }),
              r.default.createElement("path", {
                fill: "#91B3CF",
                d:
                  "M986.6 190.2s.2 0 .3-.2c.1-.2.2-.5.1-.6-.1-.2-.2-.2-.2-.2l.7.3.5.5-.5.4-.9-.2z",
              }),
              r.default.createElement("path", {
                fill: "#E2F5FF",
                d:
                  "M986.6 190.5s.3 0 .4-.4c.2-.4.2-.7.1-.9-.1-.2-.1-.4-.2-.4l-.1-.1 6.1 1.7s.3.1.4.3c.1.2.3.6 0 1.1-.1.2-.3.3-.5.4 0 .1-6.2-1.7-6.2-1.7z",
              }),
              r.default.createElement("path", {
                fill: "#D2E9FF",
                d: "M987 190.6s-.1.2-.3.2h-.2l6.2 1.6s.2.1.3 0l.2-.1-6.2-1.7z",
              }),
              r.default.createElement("path", {
                fill: "#B8941F",
                d: "M990.3 189.8c.2.7-.2 1.8-.9 1.8l.7.2.6-1.3-.4-.7z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M990.3 192.5c-.2-.4.1-.7.1-.7l.2-.2-.6-.1s-.5.5-.3.9-.2.6-.2.6.3 0 .5-.3c0 0 .2.2 0 .4h.1c.2-.1.4-.3.2-.6z",
              }),
              r.default.createElement("path", {
                fill: "#FFCE25",
                d:
                  "M990.6 191.6s.8-.8.3-1.7c-.9-.2-.7-.2-.7-.2s.5.9-.2 1.8c-.7.8.6.1.6.1z",
              }),
              r.default.createElement("path", {
                fill: "#E8B58F",
                d:
                  "M990.1 190.2c-.1-.1-.1-.1-.2-.1s-.1.1-.1.1c-.1.2-.1.4-.1.6 0 .1 0 .2-.1.3-.1.1-.2.1-.3.1-.1 0-.3.1-.4.1h-.3c-.1 0-.2 0-.3-.1-.1 0-.2-.1-.3-.1h-.7c.1.1.2.2.3.2.1 0 .1.1.2.1l.2.2c.1.1.2.1.3.2.2.1.3.2.4.3.2.1.4.2.6.1.2 0 .3-.2.4-.3.1 0 .1-.1.2-.1s.1-.1.2-.1c0 0 .1 0 .1-.1v-1.3c-.1 0-.1 0-.1-.1z",
              }),
              r.default.createElement("path", {
                fill: "#0E5E87",
                d:
                  "M1000.9 195.9c0 .3-.2.6-.3.8-.5.7-1.2 1.2-1.9 1.5-.3.2-.6.3-1 .4-.2.1-.5.2-.7.3-.3.1-.6.3-.9.4-.3.1-.7.2-1.1.2-.8.1-1.6.1-2.4-.1-1-.3-1.3-1.1-1.7-2-.5-1.1-1-2.3-1.5-3.4-.1-.2-.2-.4-.3-.7-.1-.2-.2-.4-.3-.5-.1-.2-.2-.4-.1-.6 0-.3.3-.4.5-.6.2-.1.4-.3.7-.3.5 0 .6.3.8.6 0 .1.1.1.1.2.2.3.3.5.5.8 0 .1.1.2.1.2.4.8.9 1.6 1.4 2.3.1.2.3.4.5.5.5.5 1.1.5 1.7.2.5-.2.9-.6 1.3-.8.2-.1.4-.2.7-.3 1.1-.5 2-1.2 3.2-.7.3.1.5.3.7.5v1.1z",
              }),
              r.default.createElement("path", {
                fill: "#0D557A",
                d:
                  "M989 192c.7 1.5 1.5 3 2.1 4.6.4.9.6 1.7 1.7 2 .8.2 1.6.2 2.4.1.4 0 .7-.1 1.1-.2.3-.1.6-.2.9-.4.2-.1.5-.2.7-.3.3-.1.7-.3 1-.4.7-.4 1.4-.8 1.9-1.5 0-.1.1-.1.1-.2v.3c-.1.3-.2.6-.4.8-.5.7-1.2 1.2-1.9 1.5-.3.2-.7.3-1 .4-.2.1-.5.2-.7.3-.3.1-.6.3-.9.4-.3.1-.7.2-1.1.2-.8.1-1.6.1-2.4-.1-1-.3-1.3-1.1-1.7-2-.7-1.5-1.4-3.1-2.1-4.6-.1-.2-.2-.4-.1-.6 0-.2.2-.3.3-.5 0 .1.1.1.1.2z",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "l",
                  x1: "872.212",
                  x2: "878.0784",
                  y1: "152.0313",
                  y2: "152.0313",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "rotate(11.63 825.355 763.783)",
                },
                r.default.createElement("stop", {
                  offset: ".1613",
                  stopColor: "#26221F",
                }),
                r.default.createElement("stop", {
                  offset: ".1879",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".5593",
                  stopColor: "#2E2925",
                }),
                r.default.createElement("stop", {
                  offset: ".577",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8728",
                  stopColor: "#38322D",
                }),
                r.default.createElement("stop", {
                  offset: ".8985",
                  stopColor: "#2E2925",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#l)",
                d:
                  "M1000.7 173.4l-.4 2.1c0 .2-.1.3-.2.4-.3.4-.9.7-1.7.7-.4 0-.8 0-1.3-.1s-.9-.2-1.2-.4c-.7-.3-1.2-.8-1.3-1.3v-.5l.4-2.1v.5c.1.5.6 1 1.3 1.3.4.2.8.3 1.2.4.5.1.9.1 1.3.1.8-.1 1.4-.3 1.7-.7.1-.1.2-.3.2-.4z",
              }),
              r.default.createElement("path", {
                fill: "#E0E0E0",
                d:
                  "M1000.7 173.4l-.4 1.9-3.1 1-2.6-2.3.4-1.8v.5c.1.5.6 1 1.3 1.3.4.2.8.3 1.2.4.5.1.9.1 1.3.1.8-.1 1.4-.3 1.7-.7.1-.1.2-.3.2-.4z",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d:
                  "M1000.7 173.4c0 .2-.1.3-.2.4-.3.4-.9.7-1.7.7-.4 0-.8 0-1.3-.1s-.9-.2-1.2-.4c-.7-.4-1.2-.8-1.3-1.3v-.5c.1-.5.7-.9 1.5-1.1h.4c.4 0 .8 0 1.3.1s.9.2 1.2.4c.9.4 1.5 1.1 1.3 1.8z",
              }),
              r.default.createElement("path", {
                fill: "#38322D",
                d: "M997.3 175.9l5.6-1.9.1-.4-4.5-3.5-5.5 1.4-.1.5",
              }),
              r.default.createElement("path", {
                fill: "#26221F",
                d: "M997.4 175.5l-.1.4-4.4-3.9.1-.5",
              }),
              r.default.createElement("path", {
                fill: "#423B35",
                d: "M997.4 175.5l5.6-1.9-4.4-3.9-5.6 1.8",
              }),
              r.default.createElement("ellipse", {
                cx: "998",
                cy: "172.6",
                fill: "#4A423B",
                transform: "rotate(-171.533 997.98 172.566)",
                rx: "3.2",
                ry: "1.8",
              }),
              r.default.createElement("path", {
                fill: "#D6E318",
                d:
                  "M994.7 178.3v-1.7s-.1 0-.1.1h-.2l-.1-.1c-.1.2-.1.4-.2.6-.1.2-.1.4-.2.6 0 .1 0 .1-.1.2 0 .1-.1.2-.1.3l.1.1.2-.6.3-1-.3 1-.2.6h.1l.2-.7.2-.8-.3 1.5h.1l.3-1.5-.1.8-.1.7h.1l.1-.6.1-.9-.1 1v.6c.2 0 .3-.1.3-.2 0 .1 0 .1 0 0z",
              }),
              r.default.createElement("path", {
                fill: "#F2FF33",
                d:
                  "M994.9 176.6s-.1.1 0 0c-.1.1-.1.1 0 0l-.1.1v-.1s0-.1.1-.1h.1c-.2 0-.1.1-.1.1z",
              }),
              r.default.createElement("path", {
                fill: "#E5B617",
                d:
                  "M994.5 176.6c.4-3.5 3.6-4.3 3.7-4.3l.1.2s-3.1.8-3.5 4.1h-.3z",
              }),
              r.default.createElement("ellipse", {
                cx: "998.1",
                cy: "172.4",
                fill: "#FFD82B",
                transform: "rotate(-171.533 998.137 172.383)",
                rx: ".4",
                ry: ".2",
              }),
              r.default.createElement("path", {
                fill: "#0A4361",
                d:
                  "M1001.2 213h-1.3c.5-1.6.9-3.2 1.2-4.8 0-.1.1-2.6.1-2.8.1 1.7.1 5.6 0 7.6zm3-.5c-.5.1-.9.3-1.4.3.5-1.6.9-3.3 1.1-4.9 0-.1 0-2.6.1-2.8.2 1.7.3 5.3.2 7.4zm-3.3-5.2z",
              }),
              r.default.createElement("path", {
                fill: "#0C5073",
                d:
                  "M991.1 193c-.3 0-.7.1-1 .2-.3.2-.6.5-.8.8-.1-.2-.2-.4-.3-.7.2-.4.5-.7.9-.9.2-.1.5-.2.7-.2.2.3.4.6.5.8z",
              }),
              r.default.createElement("path", {
                fill: "#D9A986",
                d: "M990 190.3c0-.1 0-.1 0 0-.1-.1-.2-.1-.2-.1v.2h.2v-.1z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M1186.6 459.3l-29.3 16.9-29.3-16.9 29.3-17",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M1149.8 440.8h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M1149.8 430.4h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M1162.6 462.1c-2.9 1.9-7.7 1.9-10.6-.1s-3-5 0-6.9c2.9-1.9 7.7-1.9 10.6.1s2.9 5.1 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M1162.6 451.8c-2.9 1.9-7.7 1.9-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 1.9 2.9 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "1157.3",
                cy: "412",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M1180.5 392.5c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.7-14.2-7.1-19.5z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M677.6 418.3l-29.3 16.9-29.3-16.9 29.3-17",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M640.8 399.8h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M640.8 389.4h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M653.6 421.1c-2.9 1.9-7.7 1.9-10.6-.1s-3-5 0-6.9c2.9-1.9 7.7-1.9 10.6.1s2.9 5.1 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M653.6 410.8c-2.9 1.9-7.7 1.9-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 1.9 2.9 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "648.3",
                cy: "371",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M671.5 351.5c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.7-14.2-7.1-19.5z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M722.6 146.3l-29.3 16.9-29.3-16.9 29.3-17",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M685.8 127.8h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M685.8 117.4h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M698.6 149.1c-2.9 1.9-7.7 1.9-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 2 2.9 5.1 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M698.6 138.8c-2.9 1.9-7.7 1.9-10.6-.1s-3-5 0-6.9c2.9-1.9 7.7-1.9 10.6.1s2.9 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "693.3",
                cy: "99",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M716.5 79.5c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.7-14.2-7.1-19.5z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M1203.3 153.4l-29.3 16.9-29.3-16.9 29.3-16.9",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M1166.5 134.9h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M1166.5 124.6h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M1179.3 156.3c-2.9 1.9-7.7 1.9-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 2 3 5 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M1179.3 145.9c-2.9 1.9-7.7 1.9-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 2 3 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "1174",
                cy: "106.2",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M1197.2 86.6c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.6-14.2-7.1-19.5z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M932.3 600.8L903 617.7l-29.3-16.9 29.3-17",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M895.5 582.3h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M895.5 571.9h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M908.3 603.6c-2.9 1.9-7.7 1.8-10.6-.1s-3-5 0-6.9c2.9-1.9 7.7-1.8 10.6.1s3 5.1 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M908.3 593.3c-2.9 1.9-7.7 1.8-10.6-.1-2.9-1.9-3-5 0-6.9 2.9-1.9 7.7-1.9 10.6.1 2.9 1.9 3 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "903",
                cy: "553.5",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M926.2 534c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.6-14.2-7.1-19.5z",
              }),
              r.default.createElement("path", {
                fill: "#00814F",
                d: "M1211.3 584.8l-29.3 16.9-29.3-16.9 29.3-17",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d: "M1174.5 566.3h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d: "M1174.5 555.9h15v17.9h-15z",
              }),
              r.default.createElement("path", {
                fill: "#CD895A",
                d:
                  "M1187.3 587.6c-2.9 1.9-7.7 1.8-10.6-.1s-3-5 0-6.9c2.9-1.9 7.7-1.8 10.6.1s3 5.1 0 6.9z",
              }),
              r.default.createElement("path", {
                fill: "#C4733B",
                d:
                  "M1187.3 577.3c-2.9 1.9-7.7 1.8-10.6-.1-2.9-1.9-3-5 0-6.9s7.7-1.9 10.6.1c2.9 1.9 3 5 0 6.9z",
              }),
              r.default.createElement("circle", {
                cx: "1182",
                cy: "537.5",
                r: "30.3",
                fill: "#74D846",
              }),
              r.default.createElement("path", {
                fill: "#5BC225",
                d:
                  "M1205.2 518c1.2 3.3 1.9 6.9 1.9 10.6 0 16.8-13.6 30.3-30.3 30.3-9.3 0-17.6-4.2-23.2-10.8 4.3 11.5 15.4 19.7 28.4 19.7 16.8 0 30.3-13.6 30.3-30.3 0-7.4-2.6-14.2-7.1-19.5z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "m",
                  d: "M612.2 146.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "n" },
                r.default.createElement("use", {
                  xlinkHref: "#m",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#n)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "o",
                    d: "M611.5 90h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "p" },
                  r.default.createElement("use", {
                    xlinkHref: "#o",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M607.2 129.7h52.1V164h-52.1z",
                  clipPath: "url(#p)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "q",
                  d: "M627.9 132.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "r" },
                r.default.createElement("use", {
                  xlinkHref: "#q",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#r)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "s",
                    d: "M611.5 90h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "t" },
                  r.default.createElement("use", {
                    xlinkHref: "#s",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M622.9 127.8h20.8v22.8h-20.8z",
                  clipPath: "url(#t)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "u",
                  d: "M627.9 125.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "v" },
                r.default.createElement("use", {
                  xlinkHref: "#u",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#v)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "w",
                    d: "M611.5 90h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "x" },
                  r.default.createElement("use", {
                    xlinkHref: "#w",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M622.9 120.4h20.8v22.8h-20.8z",
                  clipPath: "url(#x)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "y",
                  d:
                    "M637.1 148.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "z" },
                r.default.createElement("use", {
                  xlinkHref: "#y",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#z)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "A",
                    d: "M611.5 90h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "B" },
                  r.default.createElement("use", {
                    xlinkHref: "#A",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M622.9 137.2h20.8v17h-20.8z",
                  clipPath: "url(#B)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "C",
                  d:
                    "M637.1 140.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0s2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "D" },
                r.default.createElement("use", {
                  xlinkHref: "#C",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#D)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "E",
                    d: "M611.5 90h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "F" },
                  r.default.createElement("use", {
                    xlinkHref: "#E",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M622.9 129.7h20.8v17h-20.8z",
                  clipPath: "url(#F)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "G",
                  d: "M611.5 90h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "H" },
                r.default.createElement("use", {
                  xlinkHref: "#G",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#H)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "I",
                    d: "M611.5 90h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "J" },
                  r.default.createElement("use", {
                    xlinkHref: "#I",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#J)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "K",
                      d:
                        "M655 112.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "L" },
                    r.default.createElement("use", {
                      xlinkHref: "#K",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#L)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "M",
                        d: "M611.5 90h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "N" },
                      r.default.createElement("use", {
                        xlinkHref: "#M",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M606.5 85.4h53.6v53.5h-53.6z",
                      clipPath: "url(#N)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "O",
                  d: "M1140.2 295.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "P" },
                r.default.createElement("use", {
                  xlinkHref: "#O",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#P)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "Q",
                    d: "M1139.5 239h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "R" },
                  r.default.createElement("use", {
                    xlinkHref: "#Q",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M1135.2 278.7h52.1V313h-52.1z",
                  clipPath: "url(#R)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "S",
                  d: "M1155.9 281.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "T" },
                r.default.createElement("use", {
                  xlinkHref: "#S",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#T)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "U",
                    d: "M1139.5 239h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "V" },
                  r.default.createElement("use", {
                    xlinkHref: "#U",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1150.9 276.8h20.8v22.8h-20.8z",
                  clipPath: "url(#V)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "W",
                  d: "M1155.9 274.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "X" },
                r.default.createElement("use", {
                  xlinkHref: "#W",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#X)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "Y",
                    d: "M1139.5 239h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "Z" },
                  r.default.createElement("use", {
                    xlinkHref: "#Y",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1150.9 269.4h20.8v22.8h-20.8z",
                  clipPath: "url(#Z)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aa",
                  d:
                    "M1165.1 297.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "ab" },
                r.default.createElement("use", {
                  xlinkHref: "#aa",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#ab)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ac",
                    d: "M1139.5 239h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ad" },
                  r.default.createElement("use", {
                    xlinkHref: "#ac",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1150.9 286.2h20.8v17h-20.8z",
                  clipPath: "url(#ad)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ae",
                  d:
                    "M1165.1 289.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.3 2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "af" },
                r.default.createElement("use", {
                  xlinkHref: "#ae",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#af)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ag",
                    d: "M1139.5 239h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ah" },
                  r.default.createElement("use", {
                    xlinkHref: "#ag",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1150.9 278.7h20.8v17h-20.8z",
                  clipPath: "url(#ah)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ai",
                  d: "M1139.5 239h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "aj" },
                r.default.createElement("use", {
                  xlinkHref: "#ai",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#aj)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ak",
                    d: "M1139.5 239h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "al" },
                  r.default.createElement("use", {
                    xlinkHref: "#ak",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#al)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "am",
                      d:
                        "M1183 261.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "an" },
                    r.default.createElement("use", {
                      xlinkHref: "#am",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#an)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "ao",
                        d: "M1139.5 239h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "ap" },
                      r.default.createElement("use", {
                        xlinkHref: "#ao",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M1134.5 234.4h53.6v53.5h-53.6z",
                      clipPath: "url(#ap)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aq",
                  d: "M1289.2 236.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "ar" },
                r.default.createElement("use", {
                  xlinkHref: "#aq",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#ar)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "as",
                    d: "M1288.5 180h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "at" },
                  r.default.createElement("use", {
                    xlinkHref: "#as",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M1284.2 219.7h52.1V254h-52.1z",
                  clipPath: "url(#at)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "au",
                  d: "M1304.9 222.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "av" },
                r.default.createElement("use", {
                  xlinkHref: "#au",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#av)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aw",
                    d: "M1288.5 180h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ax" },
                  r.default.createElement("use", {
                    xlinkHref: "#aw",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1299.9 217.8h20.8v22.8h-20.8z",
                  clipPath: "url(#ax)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ay",
                  d: "M1304.9 215.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "az" },
                r.default.createElement("use", {
                  xlinkHref: "#ay",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#az)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aA",
                    d: "M1288.5 180h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "aB" },
                  r.default.createElement("use", {
                    xlinkHref: "#aA",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1299.9 210.4h20.8v22.8h-20.8z",
                  clipPath: "url(#aB)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aC",
                  d:
                    "M1314.1 238.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "aD" },
                r.default.createElement("use", {
                  xlinkHref: "#aC",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#aD)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aE",
                    d: "M1288.5 180h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "aF" },
                  r.default.createElement("use", {
                    xlinkHref: "#aE",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1299.9 227.2h20.8v17h-20.8z",
                  clipPath: "url(#aF)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aG",
                  d:
                    "M1314.1 230.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.3 2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "aH" },
                r.default.createElement("use", {
                  xlinkHref: "#aG",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#aH)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aI",
                    d: "M1288.5 180h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "aJ" },
                  r.default.createElement("use", {
                    xlinkHref: "#aI",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1299.9 219.7h20.8v17h-20.8z",
                  clipPath: "url(#aJ)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aK",
                  d: "M1288.5 180h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "aL" },
                r.default.createElement("use", {
                  xlinkHref: "#aK",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#aL)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aM",
                    d: "M1288.5 180h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "aN" },
                  r.default.createElement("use", {
                    xlinkHref: "#aM",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#aN)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "aO",
                      d:
                        "M1332 202.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "aP" },
                    r.default.createElement("use", {
                      xlinkHref: "#aO",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#aP)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "aQ",
                        d: "M1288.5 180h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "aR" },
                      r.default.createElement("use", {
                        xlinkHref: "#aQ",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M1283.5 175.4h53.6v53.5h-53.6z",
                      clipPath: "url(#aR)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "aS",
                  d: "M1288.5 180h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "aT" },
                r.default.createElement("use", {
                  xlinkHref: "#aS",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#aT)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "aU",
                    d: "M1289.5 188h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "aV" },
                  r.default.createElement("use", {
                    xlinkHref: "#aU",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#aV)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "aW",
                      d:
                        "M1326.9 188.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "aX" },
                    r.default.createElement("use", {
                      xlinkHref: "#aW",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#aX)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "aY",
                        d: "M1288.5 180h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "aZ" },
                      r.default.createElement("use", {
                        xlinkHref: "#aY",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M1284.8 183.1h52.2v45.8h-52.2z",
                      clipPath: "url(#aZ)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ba",
                  d: "M1269.2 530.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bb" },
                r.default.createElement("use", {
                  xlinkHref: "#ba",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bb)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bc",
                    d: "M1268.5 474h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bd" },
                  r.default.createElement("use", {
                    xlinkHref: "#bc",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M1264.2 513.7h52.1V548h-52.1z",
                  clipPath: "url(#bd)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "be",
                  d: "M1284.9 516.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bf" },
                r.default.createElement("use", {
                  xlinkHref: "#be",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bf)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bg",
                    d: "M1268.5 474h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bh" },
                  r.default.createElement("use", {
                    xlinkHref: "#bg",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1279.9 511.8h20.8v22.8h-20.8z",
                  clipPath: "url(#bh)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bi",
                  d: "M1284.9 509.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bj" },
                r.default.createElement("use", {
                  xlinkHref: "#bi",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bj)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bk",
                    d: "M1268.5 474h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bl" },
                  r.default.createElement("use", {
                    xlinkHref: "#bk",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1279.9 504.4h20.8v22.8h-20.8z",
                  clipPath: "url(#bl)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bm",
                  d:
                    "M1294.1 532.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bn" },
                r.default.createElement("use", {
                  xlinkHref: "#bm",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bn)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bo",
                    d: "M1268.5 474h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bp" },
                  r.default.createElement("use", {
                    xlinkHref: "#bo",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1279.9 521.2h20.8v17h-20.8z",
                  clipPath: "url(#bp)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bq",
                  d:
                    "M1294.1 524.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.3 2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "br" },
                r.default.createElement("use", {
                  xlinkHref: "#bq",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#br)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bs",
                    d: "M1268.5 474h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bt" },
                  r.default.createElement("use", {
                    xlinkHref: "#bs",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1279.9 513.7h20.8v17h-20.8z",
                  clipPath: "url(#bt)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bu",
                  d: "M1268.5 474h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bv" },
                r.default.createElement("use", {
                  xlinkHref: "#bu",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bv)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bw",
                    d: "M1268.5 474h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bx" },
                  r.default.createElement("use", {
                    xlinkHref: "#bw",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#bx)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "by",
                      d:
                        "M1312 496.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "bz" },
                    r.default.createElement("use", {
                      xlinkHref: "#by",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#bz)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "bA",
                        d: "M1268.5 474h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "bB" },
                      r.default.createElement("use", {
                        xlinkHref: "#bA",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M1263.5 469.4h53.6v53.5h-53.6z",
                      clipPath: "url(#bB)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bC",
                  d: "M1268.5 474h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bD" },
                r.default.createElement("use", {
                  xlinkHref: "#bC",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bD)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bE",
                    d: "M1269.5 482h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bF" },
                  r.default.createElement("use", {
                    xlinkHref: "#bE",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#bF)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "bG",
                      d:
                        "M1306.9 482.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "bH" },
                    r.default.createElement("use", {
                      xlinkHref: "#bG",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#bH)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "bI",
                        d: "M1268.5 474h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "bJ" },
                      r.default.createElement("use", {
                        xlinkHref: "#bI",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M1264.8 477.1h52.2v45.8h-52.2z",
                      clipPath: "url(#bJ)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bK",
                  d: "M1005.2 512.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bL" },
                r.default.createElement("use", {
                  xlinkHref: "#bK",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bL)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bM",
                    d: "M1004.5 456h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bN" },
                  r.default.createElement("use", {
                    xlinkHref: "#bM",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M1000.2 495.7h52.1V530h-52.1z",
                  clipPath: "url(#bN)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bO",
                  d: "M1020.9 498.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bP" },
                r.default.createElement("use", {
                  xlinkHref: "#bO",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bP)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bQ",
                    d: "M1004.5 456h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bR" },
                  r.default.createElement("use", {
                    xlinkHref: "#bQ",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1015.9 493.8h20.8v22.8h-20.8z",
                  clipPath: "url(#bR)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bS",
                  d: "M1020.9 491.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bT" },
                r.default.createElement("use", {
                  xlinkHref: "#bS",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bT)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bU",
                    d: "M1004.5 456h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bV" },
                  r.default.createElement("use", {
                    xlinkHref: "#bU",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1015.9 486.4h20.8v22.8h-20.8z",
                  clipPath: "url(#bV)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "bW",
                  d:
                    "M1030.1 514.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "bX" },
                r.default.createElement("use", {
                  xlinkHref: "#bW",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#bX)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "bY",
                    d: "M1004.5 456h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "bZ" },
                  r.default.createElement("use", {
                    xlinkHref: "#bY",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1015.9 503.2h20.8v17h-20.8z",
                  clipPath: "url(#bZ)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ca",
                  d:
                    "M1030.1 506.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.3 2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cb" },
                r.default.createElement("use", {
                  xlinkHref: "#ca",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cb)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cc",
                    d: "M1004.5 456h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cd" },
                  r.default.createElement("use", {
                    xlinkHref: "#cc",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1015.9 495.7h20.8v17h-20.8z",
                  clipPath: "url(#cd)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ce",
                  d: "M1004.5 456h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cf" },
                r.default.createElement("use", {
                  xlinkHref: "#ce",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cf)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cg",
                    d: "M1004.5 456h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ch" },
                  r.default.createElement("use", {
                    xlinkHref: "#cg",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#ch)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "ci",
                      d:
                        "M1048 478.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "cj" },
                    r.default.createElement("use", {
                      xlinkHref: "#ci",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#cj)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "ck",
                        d: "M1004.5 456h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "cl" },
                      r.default.createElement("use", {
                        xlinkHref: "#ck",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M999.5 451.4h53.6v53.5h-53.6z",
                      clipPath: "url(#cl)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cm",
                  d: "M1004.5 456h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cn" },
                r.default.createElement("use", {
                  xlinkHref: "#cm",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cn)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "co",
                    d: "M1005.5 464h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cp" },
                  r.default.createElement("use", {
                    xlinkHref: "#co",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#cp)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "cq",
                      d:
                        "M1042.9 464.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "cr" },
                    r.default.createElement("use", {
                      xlinkHref: "#cq",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#cr)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "cs",
                        d: "M1004.5 456h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "ct" },
                      r.default.createElement("use", {
                        xlinkHref: "#cs",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M1000.8 459.1h52.2v45.8h-52.2z",
                      clipPath: "url(#ct)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cu",
                  d: "M538.7 364.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cv" },
                r.default.createElement("use", {
                  xlinkHref: "#cu",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cv)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cw",
                    d: "M538 308h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cx" },
                  r.default.createElement("use", {
                    xlinkHref: "#cw",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M533.7 347.7h52.1V382h-52.1z",
                  clipPath: "url(#cx)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cy",
                  d: "M554.4 350.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cz" },
                r.default.createElement("use", {
                  xlinkHref: "#cy",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cz)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cA",
                    d: "M538 308h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cB" },
                  r.default.createElement("use", {
                    xlinkHref: "#cA",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M549.4 345.8h20.8v22.8h-20.8z",
                  clipPath: "url(#cB)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cC",
                  d: "M554.4 343.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cD" },
                r.default.createElement("use", {
                  xlinkHref: "#cC",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cD)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cE",
                    d: "M538 308h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cF" },
                  r.default.createElement("use", {
                    xlinkHref: "#cE",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M549.4 338.4h20.8v22.8h-20.8z",
                  clipPath: "url(#cF)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cG",
                  d:
                    "M563.6 366.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cH" },
                r.default.createElement("use", {
                  xlinkHref: "#cG",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cH)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cI",
                    d: "M538 308h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cJ" },
                  r.default.createElement("use", {
                    xlinkHref: "#cI",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M549.4 355.2h20.8v17h-20.8z",
                  clipPath: "url(#cJ)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cK",
                  d:
                    "M563.6 358.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0s2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cL" },
                r.default.createElement("use", {
                  xlinkHref: "#cK",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cL)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cM",
                    d: "M538 308h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cN" },
                  r.default.createElement("use", {
                    xlinkHref: "#cM",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M549.4 347.7h20.8v17h-20.8z",
                  clipPath: "url(#cN)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cO",
                  d: "M538 308h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cP" },
                r.default.createElement("use", {
                  xlinkHref: "#cO",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cP)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cQ",
                    d: "M538 308h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cR" },
                  r.default.createElement("use", {
                    xlinkHref: "#cQ",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#cR)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "cS",
                      d:
                        "M581.5 330.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "cT" },
                    r.default.createElement("use", {
                      xlinkHref: "#cS",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#cT)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "cU",
                        d: "M538 308h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "cV" },
                      r.default.createElement("use", {
                        xlinkHref: "#cU",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M533 303.4h53.6v53.5H533z",
                      clipPath: "url(#cV)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "cW",
                  d: "M538 308h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "cX" },
                r.default.createElement("use", {
                  xlinkHref: "#cW",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#cX)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "cY",
                    d: "M539 316h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "cZ" },
                  r.default.createElement("use", {
                    xlinkHref: "#cY",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#cZ)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "da",
                      d:
                        "M576.4 316.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "db" },
                    r.default.createElement("use", {
                      xlinkHref: "#da",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#db)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "dc",
                        d: "M538 308h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "dd" },
                      r.default.createElement("use", {
                        xlinkHref: "#dc",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M534.3 311.1h52.2v45.8h-52.2z",
                      clipPath: "url(#dd)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "de",
                  d: "M382.2 143.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "df" },
                r.default.createElement("use", {
                  xlinkHref: "#de",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#df)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dg",
                    d: "M381.5 87h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dh" },
                  r.default.createElement("use", {
                    xlinkHref: "#dg",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M377.2 126.7h52.1V161h-52.1z",
                  clipPath: "url(#dh)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "di",
                  d: "M397.9 129.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dj" },
                r.default.createElement("use", {
                  xlinkHref: "#di",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dj)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dk",
                    d: "M381.5 87h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dl" },
                  r.default.createElement("use", {
                    xlinkHref: "#dk",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M392.9 124.8h20.8v22.8h-20.8z",
                  clipPath: "url(#dl)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dm",
                  d: "M397.9 122.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dn" },
                r.default.createElement("use", {
                  xlinkHref: "#dm",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dn)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "do",
                    d: "M381.5 87h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dp" },
                  r.default.createElement("use", {
                    xlinkHref: "#do",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M392.9 117.4h20.8v22.8h-20.8z",
                  clipPath: "url(#dp)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dq",
                  d:
                    "M407.1 145.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dr" },
                r.default.createElement("use", {
                  xlinkHref: "#dq",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dr)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ds",
                    d: "M381.5 87h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dt" },
                  r.default.createElement("use", {
                    xlinkHref: "#ds",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M392.9 134.2h20.8v17h-20.8z",
                  clipPath: "url(#dt)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "du",
                  d:
                    "M407.1 137.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0s2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dv" },
                r.default.createElement("use", {
                  xlinkHref: "#du",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dv)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dw",
                    d: "M381.5 87h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dx" },
                  r.default.createElement("use", {
                    xlinkHref: "#dw",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M392.9 126.7h20.8v17h-20.8z",
                  clipPath: "url(#dx)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dy",
                  d: "M381.5 87h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dz" },
                r.default.createElement("use", {
                  xlinkHref: "#dy",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dz)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dA",
                    d: "M381.5 87h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dB" },
                  r.default.createElement("use", {
                    xlinkHref: "#dA",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#dB)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "dC",
                      d:
                        "M425 109.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "dD" },
                    r.default.createElement("use", {
                      xlinkHref: "#dC",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#dD)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "dE",
                        d: "M381.5 87h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "dF" },
                      r.default.createElement("use", {
                        xlinkHref: "#dE",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M376.5 82.4h53.6v53.5h-53.6z",
                      clipPath: "url(#dF)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dG",
                  d: "M381.5 87h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dH" },
                r.default.createElement("use", {
                  xlinkHref: "#dG",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dH)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dI",
                    d: "M382.5 95h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dJ" },
                  r.default.createElement("use", {
                    xlinkHref: "#dI",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#dJ)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "dK",
                      d:
                        "M419.9 95.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "dL" },
                    r.default.createElement("use", {
                      xlinkHref: "#dK",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#dL)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "dM",
                        d: "M381.5 87h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "dN" },
                      r.default.createElement("use", {
                        xlinkHref: "#dM",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M377.8 90.1H430v45.8h-52.2z",
                      clipPath: "url(#dN)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dO",
                  d: "M1227 223.3l29.2 16.8 29.1-16.8-29.1-16.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dP" },
                r.default.createElement("use", {
                  xlinkHref: "#dO",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dP)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dQ",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dR" },
                  r.default.createElement("use", {
                    xlinkHref: "#dQ",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M1222 201.4h68.3V245H1222z",
                  clipPath: "url(#dR)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dS",
                  d: "M1248.7 203.8h14.9v17.8h-14.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dT" },
                r.default.createElement("use", {
                  xlinkHref: "#dS",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dT)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dU",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dV" },
                  r.default.createElement("use", {
                    xlinkHref: "#dU",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1243.7 198.8h24.9v27.8h-24.9z",
                  clipPath: "url(#dV)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "dW",
                  d: "M1248.7 193.5h14.9v17.8h-14.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "dX" },
                r.default.createElement("use", {
                  xlinkHref: "#dW",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#dX)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "dY",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "dZ" },
                  r.default.createElement("use", {
                    xlinkHref: "#dY",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1243.7 188.5h24.9v27.8h-24.9z",
                  clipPath: "url(#dZ)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ea",
                  d:
                    "M1261.5 225c-2.9 1.9-7.6 1.8-10.6-.1-2.9-1.9-2.9-4.9 0-6.8 2.9-1.9 7.6-1.8 10.6.1 2.9 1.9 2.9 5 0 6.8",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eb" },
                r.default.createElement("use", {
                  xlinkHref: "#ea",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eb)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ec",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ed" },
                  r.default.createElement("use", {
                    xlinkHref: "#ec",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M1243.7 211.8h24.9v19.6h-24.9z",
                  clipPath: "url(#ed)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ee",
                  d:
                    "M1261.5 214.7c-2.9 1.9-7.6 1.8-10.6-.1-2.9-1.9-2.9-5 0-6.8 2.9-1.9 7.6-1.8 10.6.1 2.9 1.9 2.9 4.9 0 6.8",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "ef" },
                r.default.createElement("use", {
                  xlinkHref: "#ee",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#ef)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eg",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eh" },
                  r.default.createElement("use", {
                    xlinkHref: "#eg",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M1243.7 201.4h24.9V221h-24.9z",
                  clipPath: "url(#eh)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "ei",
                  d: "M1226 145h60.4v60.3H1226z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "ej" },
                r.default.createElement("use", {
                  xlinkHref: "#ei",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#ej)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "ek",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "el" },
                  r.default.createElement("use", {
                    xlinkHref: "#ek",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#el)", enableBackground: "new" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "em",
                      d: "M1225.9 144.5h61v61h-61z",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "en" },
                    r.default.createElement("use", {
                      xlinkHref: "#em",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#en)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "eo",
                        d:
                          "M1286.4 175.2c0 16.7-13.5 30.2-30.2 30.2s-30.2-13.5-30.2-30.2 13.5-30.2 30.2-30.2c16.6 0 30.2 13.5 30.2 30.2",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "ep" },
                      r.default.createElement("use", {
                        xlinkHref: "#eo",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement(
                      "g",
                      { clipPath: "url(#ep)" },
                      r.default.createElement(
                        "defs",
                        null,
                        r.default.createElement("path", {
                          id: "eq",
                          d: "M1225.9 144.5h61v61h-61z",
                        })
                      ),
                      r.default.createElement(
                        "clipPath",
                        { id: "er" },
                        r.default.createElement("use", {
                          xlinkHref: "#eq",
                          overflow: "visible",
                        })
                      ),
                      r.default.createElement("path", {
                        fill: "#74D846",
                        d: "M1221 140h70.4v70.3H1221z",
                        clipPath: "url(#er)",
                      })
                    )
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "es",
                  d:
                    "M1286.4 155.8v84.3h-60.5V145h60.5v10.8h-58.5v49.5h58.5v-49.5z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "et" },
                r.default.createElement("use", {
                  xlinkHref: "#es",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#et)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eu",
                    d: "M1225.9 144.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "ev" },
                  r.default.createElement("use", {
                    xlinkHref: "#eu",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#ev)", enableBackground: "new" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "ew",
                      d: "M1226.9 155.5h60v50h-60z",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "ex" },
                    r.default.createElement("use", {
                      xlinkHref: "#ew",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#ex)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "ey",
                        d:
                          "M1279.3 155.8c1.2 3.3 1.9 6.8 1.9 10.5 0 16.7-13.5 30.2-30.2 30.2-9.3 0-17.6-4.2-23.1-10.8 4.3 11.5 15.3 19.6 28.3 19.6 16.7 0 30.2-13.5 30.2-30.2 0-7.3-2.7-14.1-7.1-19.3",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "ez" },
                      r.default.createElement("use", {
                        xlinkHref: "#ey",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement(
                      "g",
                      { clipPath: "url(#ez)" },
                      r.default.createElement(
                        "defs",
                        null,
                        r.default.createElement("path", {
                          id: "eA",
                          d: "M1225.9 144.5h61v96h-61z",
                        })
                      ),
                      r.default.createElement(
                        "clipPath",
                        { id: "eB" },
                        r.default.createElement("use", {
                          xlinkHref: "#eA",
                          overflow: "visible",
                        })
                      ),
                      r.default.createElement("path", {
                        fill: "#5BC225",
                        d: "M1222.9 150.8h68.5v59.6h-68.5z",
                        clipPath: "url(#eB)",
                      })
                    )
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("circle", {
                  id: "eC",
                  cx: "1260.4",
                  cy: "179",
                  r: "26.5",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eD" },
                r.default.createElement("use", {
                  xlinkHref: "#eC",
                  overflow: "visible",
                })
              ),
              r.default.createElement("path", {
                fill: "#5DB738",
                d: "M1228.9 147.5h63v63h-63z",
                clipPath: "url(#eD)",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eE",
                  d: "M854 148.3l29.2 16.8 29.1-16.8-29.1-16.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eF" },
                r.default.createElement("use", {
                  xlinkHref: "#eE",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eF)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eG",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eH" },
                  r.default.createElement("use", {
                    xlinkHref: "#eG",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M849 126.4h68.3V170H849z",
                  clipPath: "url(#eH)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eI",
                  d: "M875.7 128.8h14.9v17.8h-14.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eJ" },
                r.default.createElement("use", {
                  xlinkHref: "#eI",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eJ)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eK",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eL" },
                  r.default.createElement("use", {
                    xlinkHref: "#eK",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M870.7 123.8h24.9v27.8h-24.9z",
                  clipPath: "url(#eL)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eM",
                  d: "M875.7 118.5h14.9v17.8h-14.9z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eN" },
                r.default.createElement("use", {
                  xlinkHref: "#eM",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eN)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eO",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eP" },
                  r.default.createElement("use", {
                    xlinkHref: "#eO",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M870.7 113.5h24.9v27.8h-24.9z",
                  clipPath: "url(#eP)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eQ",
                  d:
                    "M888.5 150c-2.9 1.9-7.6 1.8-10.6-.1-2.9-1.9-2.9-4.9 0-6.8 2.9-1.9 7.6-1.8 10.6.1 2.9 1.9 2.9 5 0 6.8",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eR" },
                r.default.createElement("use", {
                  xlinkHref: "#eQ",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eR)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eS",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eT" },
                  r.default.createElement("use", {
                    xlinkHref: "#eS",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M870.7 136.8h24.9v19.6h-24.9z",
                  clipPath: "url(#eT)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eU",
                  d:
                    "M888.5 139.7c-2.9 1.9-7.6 1.8-10.6-.1-2.9-1.9-2.9-5 0-6.8 2.9-1.9 7.6-1.8 10.6.1 2.9 1.9 2.9 4.9 0 6.8",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eV" },
                r.default.createElement("use", {
                  xlinkHref: "#eU",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eV)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "eW",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "eX" },
                  r.default.createElement("use", {
                    xlinkHref: "#eW",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M870.7 126.4h24.9V146h-24.9z",
                  clipPath: "url(#eX)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "eY",
                  d: "M853 70h60.4v60.3H853z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "eZ" },
                r.default.createElement("use", {
                  xlinkHref: "#eY",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#eZ)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fa",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fb" },
                  r.default.createElement("use", {
                    xlinkHref: "#fa",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#fb)", enableBackground: "new" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "fc",
                      d: "M852.9 69.5h61v61h-61z",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "fd" },
                    r.default.createElement("use", {
                      xlinkHref: "#fc",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#fd)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "fe",
                        d:
                          "M913.4 100.2c0 16.7-13.5 30.2-30.2 30.2S853 116.9 853 100.2 866.5 70 883.2 70c16.6 0 30.2 13.5 30.2 30.2",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "ff" },
                      r.default.createElement("use", {
                        xlinkHref: "#fe",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement(
                      "g",
                      { clipPath: "url(#ff)" },
                      r.default.createElement(
                        "defs",
                        null,
                        r.default.createElement("path", {
                          id: "fg",
                          d: "M852.9 69.5h61v61h-61z",
                        })
                      ),
                      r.default.createElement(
                        "clipPath",
                        { id: "fh" },
                        r.default.createElement("use", {
                          xlinkHref: "#fg",
                          overflow: "visible",
                        })
                      ),
                      r.default.createElement("path", {
                        fill: "#74D846",
                        d: "M848 65h70.4v70.3H848z",
                        clipPath: "url(#fh)",
                      })
                    )
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fi",
                  d:
                    "M913.4 80.8v84.3h-60.5V70h60.5v10.8h-58.5v49.5h58.5V80.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fj" },
                r.default.createElement("use", {
                  xlinkHref: "#fi",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fj)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fk",
                    d: "M852.9 69.5h61v97h-61z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fl" },
                  r.default.createElement("use", {
                    xlinkHref: "#fk",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#fl)", enableBackground: "new" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "fm",
                      d: "M853.9 80.5h60v50h-60z",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "fn" },
                    r.default.createElement("use", {
                      xlinkHref: "#fm",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#fn)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "fo",
                        d:
                          "M906.3 80.8c1.2 3.3 1.9 6.8 1.9 10.5 0 16.7-13.5 30.2-30.2 30.2-9.3 0-17.6-4.2-23.1-10.8 4.3 11.5 15.3 19.6 28.3 19.6 16.7 0 30.2-13.5 30.2-30.2 0-7.3-2.7-14.1-7.1-19.3",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "fp" },
                      r.default.createElement("use", {
                        xlinkHref: "#fo",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement(
                      "g",
                      { clipPath: "url(#fp)" },
                      r.default.createElement(
                        "defs",
                        null,
                        r.default.createElement("path", {
                          id: "fq",
                          d: "M852.9 69.5h61v96h-61z",
                        })
                      ),
                      r.default.createElement(
                        "clipPath",
                        { id: "fr" },
                        r.default.createElement("use", {
                          xlinkHref: "#fq",
                          overflow: "visible",
                        })
                      ),
                      r.default.createElement("path", {
                        fill: "#5BC225",
                        d: "M849.9 75.8h68.5v59.6h-68.5z",
                        clipPath: "url(#fr)",
                      })
                    )
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("circle", {
                  id: "fs",
                  cx: "887.4",
                  cy: "104",
                  r: "26.5",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "ft" },
                r.default.createElement("use", {
                  xlinkHref: "#fs",
                  overflow: "visible",
                })
              ),
              r.default.createElement("path", {
                fill: "#5DB738",
                d: "M855.9 72.5h63v63h-63z",
                clipPath: "url(#ft)",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fu",
                  d: "M625.2 468.9l21 12.1 21.1-12.1-21.1-12.2z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fv" },
                r.default.createElement("use", {
                  xlinkHref: "#fu",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fv)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fw",
                    d: "M624.5 412h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fx" },
                  r.default.createElement("use", {
                    xlinkHref: "#fw",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#00814F",
                  d: "M620.2 451.7h52.1V486h-52.1z",
                  clipPath: "url(#fx)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fy",
                  d: "M640.9 454.8h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fz" },
                r.default.createElement("use", {
                  xlinkHref: "#fy",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fz)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fA",
                    d: "M624.5 412h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fB" },
                  r.default.createElement("use", {
                    xlinkHref: "#fA",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M635.9 449.8h20.8v22.8h-20.8z",
                  clipPath: "url(#fB)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fC",
                  d: "M640.9 447.4h10.8v12.8h-10.8z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fD" },
                r.default.createElement("use", {
                  xlinkHref: "#fC",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fD)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fE",
                    d: "M624.5 412h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fF" },
                  r.default.createElement("use", {
                    xlinkHref: "#fE",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M635.9 442.4h20.8v22.8h-20.8z",
                  clipPath: "url(#fF)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fG",
                  d:
                    "M650.1 470.1c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0 2.1 1.4 2.1 3.6 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fH" },
                r.default.createElement("use", {
                  xlinkHref: "#fG",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fH)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fI",
                    d: "M624.5 412h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fJ" },
                  r.default.createElement("use", {
                    xlinkHref: "#fI",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#CD895A",
                  d: "M635.9 459.2h20.8v17h-20.8z",
                  clipPath: "url(#fJ)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fK",
                  d:
                    "M650.1 462.7c-2.1 1.3-5.5 1.3-7.6 0-2.1-1.4-2.1-3.6 0-4.9 2.1-1.3 5.5-1.3 7.6 0s2.1 3.5 0 4.9",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fL" },
                r.default.createElement("use", {
                  xlinkHref: "#fK",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fL)" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fM",
                    d: "M624.5 412h44v70h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fN" },
                  r.default.createElement("use", {
                    xlinkHref: "#fM",
                    overflow: "visible",
                  })
                ),
                r.default.createElement("path", {
                  fill: "#C4733B",
                  d: "M635.9 451.7h20.8v17h-20.8z",
                  clipPath: "url(#fN)",
                })
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fO",
                  d: "M624.5 412h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fP" },
                r.default.createElement("use", {
                  xlinkHref: "#fO",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fP)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fQ",
                    d: "M624.5 412h44v44h-44z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fR" },
                  r.default.createElement("use", {
                    xlinkHref: "#fQ",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#fR)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "fS",
                      d:
                        "M668 434.2c0 12-9.8 21.8-21.8 21.8s-21.8-9.7-21.8-21.8 9.8-21.8 21.8-21.8c12.1 0 21.8 9.7 21.8 21.8",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "fT" },
                    r.default.createElement("use", {
                      xlinkHref: "#fS",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#fT)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "fU",
                        d: "M624.5 412h44v44h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "fV" },
                      r.default.createElement("use", {
                        xlinkHref: "#fU",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#74D846",
                      d: "M619.5 407.4h53.6v53.5h-53.6z",
                      clipPath: "url(#fV)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement("path", {
                  id: "fW",
                  d: "M624.5 412h44v70h-44z",
                })
              ),
              r.default.createElement(
                "clipPath",
                { id: "fX" },
                r.default.createElement("use", {
                  xlinkHref: "#fW",
                  overflow: "visible",
                })
              ),
              r.default.createElement(
                "g",
                { clipPath: "url(#fX)", enableBackground: "new" },
                r.default.createElement(
                  "defs",
                  null,
                  r.default.createElement("path", {
                    id: "fY",
                    d: "M625.5 420h43v36h-43z",
                  })
                ),
                r.default.createElement(
                  "clipPath",
                  { id: "fZ" },
                  r.default.createElement("use", {
                    xlinkHref: "#fY",
                    overflow: "visible",
                  })
                ),
                r.default.createElement(
                  "g",
                  { clipPath: "url(#fZ)" },
                  r.default.createElement(
                    "defs",
                    null,
                    r.default.createElement("path", {
                      id: "ga",
                      d:
                        "M662.9 420.1c.9 2.4 1.4 4.9 1.4 7.6 0 12-9.8 21.8-21.8 21.8-6.7 0-12.7-3-16.7-7.8 3.1 8.3 11 14.2 20.4 14.2 12 0 21.8-9.7 21.8-21.8 0-5.3-1.9-10.2-5.1-14",
                    })
                  ),
                  r.default.createElement(
                    "clipPath",
                    { id: "gb" },
                    r.default.createElement("use", {
                      xlinkHref: "#ga",
                      overflow: "visible",
                    })
                  ),
                  r.default.createElement(
                    "g",
                    { clipPath: "url(#gb)" },
                    r.default.createElement(
                      "defs",
                      null,
                      r.default.createElement("path", {
                        id: "gc",
                        d: "M624.5 412h44v69h-44z",
                      })
                    ),
                    r.default.createElement(
                      "clipPath",
                      { id: "gd" },
                      r.default.createElement("use", {
                        xlinkHref: "#gc",
                        overflow: "visible",
                      })
                    ),
                    r.default.createElement("path", {
                      fill: "#5BC225",
                      d: "M620.8 415.1H673v45.8h-52.2z",
                      clipPath: "url(#gd)",
                    })
                  )
                )
              ),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "ge",
                    width: "665.8",
                    height: "241.9",
                    x: "14.7",
                    y: "-153.4",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gg",
                  width: "665.8",
                  height: "241.9",
                  x: "14.7",
                  y: "-153.4",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#ge)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gf",
                      cx: "159.6898",
                      cy: "73.9577",
                      r: "308.9135",
                      gradientTransform: "rotate(22.765 895.167 409.38)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".1708",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".3205",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4624",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".5995",
                      stopColor: "#C5C5C5",
                    }),
                    r.default.createElement("stop", {
                      offset: ".7331",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8625",
                      stopColor: "#7D7D7D",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#787878",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gf)",
                    d:
                      "M661.2-62.5c-3.4-1.4-6.9-2.2-10.4-2.4.3-.6.6-1.1.8-1.7 10.7-25.4-1.3-54.7-26.7-65.3-17.4-7.3-36.7-4-50.5 7.1-6.4-10.3-15.9-18.8-27.9-23.8-30.1-12.6-64.5.9-78.1 30.2-2.6-1.9-5.5-3.6-8.6-4.9-21.4-9-46 1.1-55 22.5-2 4.8-3 9.8-3.2 14.7-.8-.4-1.6-.8-2.5-1.2-7-3-14.6-2.7-21.2 0-4.8-17.4-17.3-32.5-35.2-40-31.1-13-66.9 1.6-79.9 32.7-1 2.4-1.8 4.8-2.5 7.2-5.5-5.9-12.3-10.8-20.2-14.1-24.7-10.4-52.4-2.5-68.4 17.3-3.7-7.2-9.8-13.1-17.8-16.5-3.6-1.5-7.3-2.3-10.9-2.6.3-.5.5-1.1.8-1.6 6.2-14.7-.7-31.6-15.5-37.8-14.7-6.2-31.6.7-37.8 15.5 0 .1-.1.2-.1.3-13.5-3.6-27.9 3.2-33.5 16.5-.3.6-.4 1.2-.6 1.8-1.4-.9-2.8-1.7-4.4-2.4-13.6-5.7-29.2.7-34.9 14.3-5.9 13.4.5 29 14.1 34.7 3.2 1.3 6.5 2 9.7 2.1 1.6 11.8 9.3 22.5 21.1 27.5 4.7 2 9.5 2.8 14.3 2.7 1.4 9.7 7.7 18.4 17.4 22.4 10.7 4.5 22.5 2 30.6-5.2 3 5.1 7.6 9.4 13.4 11.8 8.5 3.6 17.7 2.6 25.1-1.7-5.1 19 4.4 39.2 23 47 16.9 7.1 35.9 1.6 46.7-12.1 3 21.9 17.2 41.7 39.1 50.9 33 13.8 71-1.7 84.8-34.7.7-1.7 1.4-3.5 1.9-5.2 22.8 3.3 45.8-8.9 55.1-31.1l.9-2.4c2 1.4 4.2 2.7 6.6 3.7 9 3.8 18.7 3.4 27.1-.1 5.3 9.6 13.7 17.6 24.6 22.2 24.9 10.4 53.4-.7 64.8-24.9 4.9 5 10.9 9.2 17.8 12.1 27.6 11.6 59.5-1.4 71.1-29 .6-1.4 1-2.8 1.5-4.1 2.6 2.4 5.6 4.4 9.1 5.9 16.1 6.7 34.6-.8 41.3-16.9 6.7-16.2-.8-34.7-16.9-41.4z",
                    mask: "url(#gg)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gh",
                  cx: "159.6898",
                  cy: "73.9577",
                  r: "308.9135",
                  gradientTransform: "rotate(22.765 895.167 409.38)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gh)",
                d:
                  "M661.2-62.5c-3.4-1.4-6.9-2.2-10.4-2.4.3-.6.6-1.1.8-1.7 10.7-25.4-1.3-54.7-26.7-65.3-17.4-7.3-36.7-4-50.5 7.1-6.4-10.3-15.9-18.8-27.9-23.8-30.1-12.6-64.5.9-78.1 30.2-2.6-1.9-5.5-3.6-8.6-4.9-21.4-9-46 1.1-55 22.5-2 4.8-3 9.8-3.2 14.7-.8-.4-1.6-.8-2.5-1.2-7-3-14.6-2.7-21.2 0-4.8-17.4-17.3-32.5-35.2-40-31.1-13-66.9 1.6-79.9 32.7-1 2.4-1.8 4.8-2.5 7.2-5.5-5.9-12.3-10.8-20.2-14.1-24.7-10.4-52.4-2.5-68.4 17.3-3.7-7.2-9.8-13.1-17.8-16.5-3.6-1.5-7.3-2.3-10.9-2.6.3-.5.5-1.1.8-1.6 6.2-14.7-.7-31.6-15.5-37.8-14.7-6.2-31.6.7-37.8 15.5 0 .1-.1.2-.1.3-13.5-3.6-27.9 3.2-33.5 16.5-.3.6-.4 1.2-.6 1.8-1.4-.9-2.8-1.7-4.4-2.4-13.6-5.7-29.2.7-34.9 14.3-5.9 13.4.5 29 14.1 34.7 3.2 1.3 6.5 2 9.7 2.1 1.6 11.8 9.3 22.5 21.1 27.5 4.7 2 9.5 2.8 14.3 2.7 1.4 9.7 7.7 18.4 17.4 22.4 10.7 4.5 22.5 2 30.6-5.2 3 5.1 7.6 9.4 13.4 11.8 8.5 3.6 17.7 2.6 25.1-1.7-5.1 19 4.4 39.2 23 47 16.9 7.1 35.9 1.6 46.7-12.1 3 21.9 17.2 41.7 39.1 50.9 33 13.8 71-1.7 84.8-34.7.7-1.7 1.4-3.5 1.9-5.2 22.8 3.3 45.8-8.9 55.1-31.1l.9-2.4c2 1.4 4.2 2.7 6.6 3.7 9 3.8 18.7 3.4 27.1-.1 5.3 9.6 13.7 17.6 24.6 22.2 24.9 10.4 53.4-.7 64.8-24.9 4.9 5 10.9 9.2 17.8 12.1 27.6 11.6 59.5-1.4 71.1-29 .6-1.4 1-2.8 1.5-4.1 2.6 2.4 5.6 4.4 9.1 5.9 16.1 6.7 34.6-.8 41.3-16.9 6.7-16.2-.8-34.7-16.9-41.4z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gi",
                    width: "1424",
                    height: "445",
                    x: "70.5",
                    y: "-368",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gk",
                  width: "1424",
                  height: "445",
                  x: "70.5",
                  y: "-368",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gi)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gj",
                      cx: "622.315",
                      cy: "-542.9327",
                      r: "653.7505",
                      gradientTransform: "rotate(7.545 887.726 465.87)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gj)",
                    d:
                      "M1447.9-198c1.4-4.1 2.4-8.4 3-12.8 4.7-35.7-20.4-68.5-56.1-73.2-31.1-4.1-60.1 14.5-70.1 43-6.7-3-13.9-5-21.5-6.1-35.3-4.7-68.2 14.9-82.1 45.8-4-1.4-8.1-2.4-12.4-3-9.3-1.2-18.4-.3-26.8 2.3-6.2-22.6-25.3-40.5-50.1-43.8-28.3-3.7-54.5 12.9-64.1 38.6-.2 0-.3-.1-.5-.1-27-3.6-52.5 8-67.9 28.1-11.2-13.5-27.4-23-46.2-25.5-2.8-.4-5.6-.6-8.3-.6 0-.2.1-.3.1-.5 4.7-35.1-20.1-67.4-55.2-72-7.1-.9-14.1-.6-20.8.7-11.3-46.3-50-83.2-100-89.8-55.3-7.3-106.7 24.5-126.3 74.1-12.9-12.8-29.9-21.7-49.3-24.3-45.6-6-87.6 24.9-95.8 69.7-8.5-7-19-11.8-30.7-13.4-8.2-1.1-16.3-.5-23.9 1.6-8.4-19.5-26.6-34.3-49.2-37.3-20.5-2.7-39.9 4.9-53.3 18.7-6.7-6-15.2-10-24.7-11.3-14.2-1.9-27.7 2.9-37.5 11.9-11.6-22.4-33.5-39-60.4-42.6-43-5.7-82.4 24-89.2 66.5-17.9 5.2-32 20.6-34.6 40.3-1.7 13 1.9 25.4 9 35.2-16.8 7.8-29.4 23.8-32 43.5-4.1 30.7 17.5 58.9 48.3 63 15.8 2.1 30.9-2.6 42.4-11.8 7.6 5.3 16.5 9 26.4 10.3 32.8 4.3 62.9-18.7 67.3-51.5 1.4-10.7-.1-21.1-3.9-30.4 1.8.5 3.6.9 5.5 1.1 12.8 1.7 24.9-2.4 33.9-10.3 7.6 10.6 19.4 18.2 33.3 20.1 7.2 1 14.1.3 20.6-1.7 1.4 19.9 12.2 37.6 28.4 48.3-.1.5-.2 1.1-.3 1.6-3.8 28.3 16.2 54.3 44.5 58.1 20.1 2.7 38.9-6.6 49.6-22.2 8.4 8.7 19.7 14.7 32.7 16.4 23 3 44.5-8.3 55.5-27.1 11.2 16.4 29.1 28.1 50.3 30.9 16.5 2.2 32.4-1.4 45.7-9.1 3.9 18.9 19.3 34.1 39.5 36.8 7.2 1 14.1.2 20.6-1.9-3.1 6.1-5.3 12.8-6.2 20-4.5 34.3 19.6 65.8 53.9 70.3 34 4.4 65.5-19.7 70-54 .7-5.4.6-10.8 0-15.9 5.8 10.4 16.2 18.1 29 19.8 21.4 2.8 41-12.2 43.9-33.6.4-3.1.4-6.2.1-9.2 14.2 1.7 27.6-3.2 37.2-12.3 6.6 5.9 15 9.9 24.4 11.1 25.1 3.3 48.1-14.3 51.4-39.4.9-6.5.3-12.8-1.4-18.8 9.8 7.3 21.5 12.3 34.4 14 12.9 1.7 25.4 0 36.7-4.5-.1 33.5 24.7 62.7 58.9 67.2 37.1 4.9 71.2-21.2 76.1-58.3 1.1-8.4.6-16.7-1.2-24.6 12.5-3.7 23.5-11.3 31.5-21.5 9.6 6.2 20.6 10.5 32.7 12.1 13 1.7 25.7.1 37.3-4.1 9.5 33 37.7 58.9 73.9 63.7 48.7 6.5 93.5-27.8 99.9-76.6 4.9-37.4-14.4-72.6-45.9-89.7z",
                    mask: "url(#gk)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gl",
                  cx: "622.315",
                  cy: "-542.9327",
                  r: "653.7505",
                  gradientTransform: "rotate(7.545 887.726 465.87)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gl)",
                d:
                  "M1447.9-198c1.4-4.1 2.4-8.4 3-12.8 4.7-35.7-20.4-68.5-56.1-73.2-31.1-4.1-60.1 14.5-70.1 43-6.7-3-13.9-5-21.5-6.1-35.3-4.7-68.2 14.9-82.1 45.8-4-1.4-8.1-2.4-12.4-3-9.3-1.2-18.4-.3-26.8 2.3-6.2-22.6-25.3-40.5-50.1-43.8-28.3-3.7-54.5 12.9-64.1 38.6-.2 0-.3-.1-.5-.1-27-3.6-52.5 8-67.9 28.1-11.2-13.5-27.4-23-46.2-25.5-2.8-.4-5.6-.6-8.3-.6 0-.2.1-.3.1-.5 4.7-35.1-20.1-67.4-55.2-72-7.1-.9-14.1-.6-20.8.7-11.3-46.3-50-83.2-100-89.8-55.3-7.3-106.7 24.5-126.3 74.1-12.9-12.8-29.9-21.7-49.3-24.3-45.6-6-87.6 24.9-95.8 69.7-8.5-7-19-11.8-30.7-13.4-8.2-1.1-16.3-.5-23.9 1.6-8.4-19.5-26.6-34.3-49.2-37.3-20.5-2.7-39.9 4.9-53.3 18.7-6.7-6-15.2-10-24.7-11.3-14.2-1.9-27.7 2.9-37.5 11.9-11.6-22.4-33.5-39-60.4-42.6-43-5.7-82.4 24-89.2 66.5-17.9 5.2-32 20.6-34.6 40.3-1.7 13 1.9 25.4 9 35.2-16.8 7.8-29.4 23.8-32 43.5-4.1 30.7 17.5 58.9 48.3 63 15.8 2.1 30.9-2.6 42.4-11.8 7.6 5.3 16.5 9 26.4 10.3 32.8 4.3 62.9-18.7 67.3-51.5 1.4-10.7-.1-21.1-3.9-30.4 1.8.5 3.6.9 5.5 1.1 12.8 1.7 24.9-2.4 33.9-10.3 7.6 10.6 19.4 18.2 33.3 20.1 7.2 1 14.1.3 20.6-1.7 1.4 19.9 12.2 37.6 28.4 48.3-.1.5-.2 1.1-.3 1.6-3.8 28.3 16.2 54.3 44.5 58.1 20.1 2.7 38.9-6.6 49.6-22.2 8.4 8.7 19.7 14.7 32.7 16.4 23 3 44.5-8.3 55.5-27.1 11.2 16.4 29.1 28.1 50.3 30.9 16.5 2.2 32.4-1.4 45.7-9.1 3.9 18.9 19.3 34.1 39.5 36.8 7.2 1 14.1.2 20.6-1.9-3.1 6.1-5.3 12.8-6.2 20-4.5 34.3 19.6 65.8 53.9 70.3 34 4.4 65.5-19.7 70-54 .7-5.4.6-10.8 0-15.9 5.8 10.4 16.2 18.1 29 19.8 21.4 2.8 41-12.2 43.9-33.6.4-3.1.4-6.2.1-9.2 14.2 1.7 27.6-3.2 37.2-12.3 6.6 5.9 15 9.9 24.4 11.1 25.1 3.3 48.1-14.3 51.4-39.4.9-6.5.3-12.8-1.4-18.8 9.8 7.3 21.5 12.3 34.4 14 12.9 1.7 25.4 0 36.7-4.5-.1 33.5 24.7 62.7 58.9 67.2 37.1 4.9 71.2-21.2 76.1-58.3 1.1-8.4.6-16.7-1.2-24.6 12.5-3.7 23.5-11.3 31.5-21.5 9.6 6.2 20.6 10.5 32.7 12.1 13 1.7 25.7.1 37.3-4.1 9.5 33 37.7 58.9 73.9 63.7 48.7 6.5 93.5-27.8 99.9-76.6 4.9-37.4-14.4-72.6-45.9-89.7z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gm",
                    width: "375.9",
                    height: "188",
                    x: "354.8",
                    y: "-117.5",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "go",
                  width: "375.9",
                  height: "188",
                  x: "354.8",
                  y: "-117.5",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gm)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gn",
                      cx: "533.8859",
                      cy: "-195.3378",
                      r: "284.9812",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gn)",
                    d:
                      "M688.9-62.2c-2.6 0-5.1.3-7.5.7-9.3-15.6-26.3-26.1-45.8-26.1-6.7 0-13 1.3-18.9 3.5-7.8-16.1-24.3-27.3-43.5-27.3-16.2 0-30.5 8-39.3 20.3-5-15.3-19.4-26.4-36.3-26.4-13.6 0-25.5 7.1-32.3 17.8-2.9-1.6-6.2-2.5-9.7-2.5-11.1 0-20.1 9-20.1 20.1 0 2.4.4 4.7 1.2 6.8-14.9 6.5-25.8 20.6-27.7 37.4-5.7-4.9-13.2-7.9-21.3-7.9-18.2 0-32.9 14.7-32.9 32.9S369.5 20 387.7 20c.7 0 1.3-.1 2-.1 4.5 12.3 16.3 21 30.1 21 5.2 0 10-1.3 14.4-3.4 6.5 13 19.9 22 35.4 22 21.8 0 39.5-17.7 39.5-39.5 0-1.2-.1-2.5-.2-3.7 1.2-.7 2.4-1.4 3.4-2.3 8.7 11.4 22.5 19 38.1 19 8.1 0 15.7-2 22.4-5.6 3 24.2 23.7 43 48.8 43 27.2 0 49.2-22 49.2-49.2 0-1.5-.1-2.9-.2-4.3 5.6 2.7 11.8 4.3 18.4 4.3 23 0 41.7-18.7 41.7-41.7-.1-23-18.7-41.7-41.8-41.7z",
                    mask: "url(#go)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gp",
                  cx: "533.8859",
                  cy: "-195.3378",
                  r: "284.9812",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gp)",
                d:
                  "M688.9-62.2c-2.6 0-5.1.3-7.5.7-9.3-15.6-26.3-26.1-45.8-26.1-6.7 0-13 1.3-18.9 3.5-7.8-16.1-24.3-27.3-43.5-27.3-16.2 0-30.5 8-39.3 20.3-5-15.3-19.4-26.4-36.3-26.4-13.6 0-25.5 7.1-32.3 17.8-2.9-1.6-6.2-2.5-9.7-2.5-11.1 0-20.1 9-20.1 20.1 0 2.4.4 4.7 1.2 6.8-14.9 6.5-25.8 20.6-27.7 37.4-5.7-4.9-13.2-7.9-21.3-7.9-18.2 0-32.9 14.7-32.9 32.9S369.5 20 387.7 20c.7 0 1.3-.1 2-.1 4.5 12.3 16.3 21 30.1 21 5.2 0 10-1.3 14.4-3.4 6.5 13 19.9 22 35.4 22 21.8 0 39.5-17.7 39.5-39.5 0-1.2-.1-2.5-.2-3.7 1.2-.7 2.4-1.4 3.4-2.3 8.7 11.4 22.5 19 38.1 19 8.1 0 15.7-2 22.4-5.6 3 24.2 23.7 43 48.8 43 27.2 0 49.2-22 49.2-49.2 0-1.5-.1-2.9-.2-4.3 5.6 2.7 11.8 4.3 18.4 4.3 23 0 41.7-18.7 41.7-41.7-.1-23-18.7-41.7-41.8-41.7z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gq",
                    width: "614",
                    height: "385.4",
                    x: "519.2",
                    y: "-332.4",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gs",
                  width: "614",
                  height: "385.4",
                  x: "519.2",
                  y: "-332.4",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gq)" },
                  r.default.createElement(
                    "linearGradient",
                    {
                      id: "gr",
                      x1: "782.0224",
                      x2: "846.3721",
                      y1: "-326.377",
                      y2: "-15.9875",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".218",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4091",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".5903",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".7652",
                      stopColor: "#C6C6C6",
                    }),
                    r.default.createElement("stop", {
                      offset: ".9342",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: "1",
                      stopColor: "#969696",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gr)",
                    d:
                      "M1123.5-152.3c6-7 9.6-16.1 9.6-26.1 0-22.2-18-40.2-40.2-40.2-18.3 0-33.7 12.2-38.6 28.9-3.5-.9-7.1-1.5-10.9-1.5-4.4 0-8.6.7-12.6 1.9-5.7-7.7-14.9-12.7-25.2-12.7h-.7c-3.7-21.7-22.6-38.3-45.4-38.3-10.4 0-19.9 3.5-27.6 9.3-8.7-9.3-21.1-15.2-34.9-15.2-5.3 0-10.5.9-15.3 2.5-2.3-24.9-19.9-45.3-43.3-51.8-2.9-20.9-20.8-37-42.5-37-21 0-38.5 15.1-42.2 35.1-19.7 2.2-35 18.9-35 39.2v.7c-2.4-.4-4.8-.7-7.3-.7-23.9 0-43.3 19.4-43.3 43.3 0 9.6 3.2 18.5 8.5 25.7-19.1 5.8-33 23.6-33 44.6 0 7.8 1.9 15.1 5.3 21.5-22.9 2.8-41 21.2-43.3 44.3-4.6-1.6-9.6-2.6-14.8-2.6-11.9 0-22.6 4.7-30.6 12.3-4.2-2.8-9.3-4.5-14.7-4.5-14.6 0-26.5 11.9-26.5 26.5s11.9 26.5 26.5 26.5c1.4 0 2.7-.1 4.1-.3C556.3-4.4 572.2 7.2 591 7.2c12.4 0 23.6-5.1 31.7-13.4 3.8 11.6 14.7 20 27.5 20 5.8 0 11.1-1.7 15.7-4.6 7.5 6.3 17.2 10 27.7 10 15 0 28.2-7.6 36-19.2 9.2 11.7 23.4 19.2 39.5 19.2 7.9 0 15.4-1.9 22.1-5.2 5.9 5.3 13.7 8.6 22.3 8.6 7.2 0 13.9-2.3 19.3-6.2 14.6 22 39.6 36.6 68 36.6 42.2 0 76.9-32.2 81-73.3 6.2 2.3 13 3.7 20 3.7 31.4 0 56.9-25.5 56.9-56.9 0-3.6-.4-7.1-1-10.6 7.8 5.5 17.3 8.7 27.5 8.7 26.6 0 48.1-21.5 48.1-48.1-.1-10.8-3.7-20.8-9.8-28.8z",
                    mask: "url(#gs)",
                  })
                )
              ),
              r.default.createElement(
                "linearGradient",
                {
                  id: "gt",
                  x1: "782.0224",
                  x2: "846.3721",
                  y1: "-326.377",
                  y2: "-15.9875",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gt)",
                d:
                  "M1123.5-152.3c6-7 9.6-16.1 9.6-26.1 0-22.2-18-40.2-40.2-40.2-18.3 0-33.7 12.2-38.6 28.9-3.5-.9-7.1-1.5-10.9-1.5-4.4 0-8.6.7-12.6 1.9-5.7-7.7-14.9-12.7-25.2-12.7h-.7c-3.7-21.7-22.6-38.3-45.4-38.3-10.4 0-19.9 3.5-27.6 9.3-8.7-9.3-21.1-15.2-34.9-15.2-5.3 0-10.5.9-15.3 2.5-2.3-24.9-19.9-45.3-43.3-51.8-2.9-20.9-20.8-37-42.5-37-21 0-38.5 15.1-42.2 35.1-19.7 2.2-35 18.9-35 39.2v.7c-2.4-.4-4.8-.7-7.3-.7-23.9 0-43.3 19.4-43.3 43.3 0 9.6 3.2 18.5 8.5 25.7-19.1 5.8-33 23.6-33 44.6 0 7.8 1.9 15.1 5.3 21.5-22.9 2.8-41 21.2-43.3 44.3-4.6-1.6-9.6-2.6-14.8-2.6-11.9 0-22.6 4.7-30.6 12.3-4.2-2.8-9.3-4.5-14.7-4.5-14.6 0-26.5 11.9-26.5 26.5s11.9 26.5 26.5 26.5c1.4 0 2.7-.1 4.1-.3C556.3-4.4 572.2 7.2 591 7.2c12.4 0 23.6-5.1 31.7-13.4 3.8 11.6 14.7 20 27.5 20 5.8 0 11.1-1.7 15.7-4.6 7.5 6.3 17.2 10 27.7 10 15 0 28.2-7.6 36-19.2 9.2 11.7 23.4 19.2 39.5 19.2 7.9 0 15.4-1.9 22.1-5.2 5.9 5.3 13.7 8.6 22.3 8.6 7.2 0 13.9-2.3 19.3-6.2 14.6 22 39.6 36.6 68 36.6 42.2 0 76.9-32.2 81-73.3 6.2 2.3 13 3.7 20 3.7 31.4 0 56.9-25.5 56.9-56.9 0-3.6-.4-7.1-1-10.6 7.8 5.5 17.3 8.7 27.5 8.7 26.6 0 48.1-21.5 48.1-48.1-.1-10.8-3.7-20.8-9.8-28.8z",
                opacity: ".9",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gu",
                    width: "584.5",
                    height: "360.6",
                    x: "941.5",
                    y: "-227.9",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gw",
                  width: "584.5",
                  height: "360.6",
                  x: "941.5",
                  y: "-227.9",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gu)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gv",
                      cx: "158.335",
                      cy: "-178.8959",
                      r: "427.9141",
                      gradientTransform: "rotate(-172.484 739.733 -61.74)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gv)",
                    d:
                      "M1016.9-160.9c2.1.3 4.2.7 6.3 1.1 18.1-45 64.9-73.8 115.2-67.2 56.1 7.4 96.6 56.3 94.5 111.8 13.3-7.2 29-10.4 45.1-8.3 36.3 4.8 63 34.9 64.7 70.2 7-1.8 14.5-2.4 22.2-1.4 12.2 1.6 22.9 6.9 31.3 14.6 14.9-20.7 40.4-32.8 67.5-29.2 39.2 5.2 66.8 41.1 61.6 80.3-1.8 14-7.6 26.5-16 36.5 11.4 10.4 17.7 26.1 15.5 42.5-3.5 26.8-28.2 45.7-55 42.2-23.6-3.1-41.1-22.5-42.5-45.4-7.8 4.7-17.2 6.9-26.9 5.6-12.8-1.7-23.5-9.1-29.9-19.3-9.7 17.2-29.1 27.7-49.8 24.9-20.7-2.7-36.7-17.8-41.6-36.8-15.2 17.4-38.6 27-63.2 23.8-30.1-4-53.3-26-60.1-53.8-15 23.8-43 38.1-72.8 34.1-40.8-5.4-69.5-42.8-64.1-83.6.5-3.8 1.3-7.6 2.3-11.2-7 1.4-14.3 1.7-21.7.7-36.5-4.8-62.2-38.3-57.4-74.8 4.8-36.4 38.3-62.1 74.8-57.3z",
                    mask: "url(#gw)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gx",
                  cx: "158.335",
                  cy: "-178.8959",
                  r: "427.9141",
                  gradientTransform: "rotate(-172.484 739.733 -61.74)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gx)",
                d:
                  "M1016.9-160.9c2.1.3 4.2.7 6.3 1.1 18.1-45 64.9-73.8 115.2-67.2 56.1 7.4 96.6 56.3 94.5 111.8 13.3-7.2 29-10.4 45.1-8.3 36.3 4.8 63 34.9 64.7 70.2 7-1.8 14.5-2.4 22.2-1.4 12.2 1.6 22.9 6.9 31.3 14.6 14.9-20.7 40.4-32.8 67.5-29.2 39.2 5.2 66.8 41.1 61.6 80.3-1.8 14-7.6 26.5-16 36.5 11.4 10.4 17.7 26.1 15.5 42.5-3.5 26.8-28.2 45.7-55 42.2-23.6-3.1-41.1-22.5-42.5-45.4-7.8 4.7-17.2 6.9-26.9 5.6-12.8-1.7-23.5-9.1-29.9-19.3-9.7 17.2-29.1 27.7-49.8 24.9-20.7-2.7-36.7-17.8-41.6-36.8-15.2 17.4-38.6 27-63.2 23.8-30.1-4-53.3-26-60.1-53.8-15 23.8-43 38.1-72.8 34.1-40.8-5.4-69.5-42.8-64.1-83.6.5-3.8 1.3-7.6 2.3-11.2-7 1.4-14.3 1.7-21.7.7-36.5-4.8-62.2-38.3-57.4-74.8 4.8-36.4 38.3-62.1 74.8-57.3z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gy",
                    width: "488.4",
                    height: "213.8",
                    x: "-95.7",
                    y: "-53.1",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gA",
                  width: "488.4",
                  height: "213.8",
                  x: "-95.7",
                  y: "-53.1",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gy)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gz",
                      cx: "161.7688",
                      cy: "-38.1816",
                      r: "155.5751",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".231",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4336",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6256",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8109",
                      stopColor: "#C6C6C6",
                    }),
                    r.default.createElement("stop", {
                      offset: ".99",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: "1",
                      stopColor: "#A3A3A3",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gz)",
                    d:
                      "M362.2 60.6c-3.7 0-7.2.7-10.5 1.9-4.6-14.7-18.4-25.4-34.6-25.4-2 0-3.9.2-5.9.5-6.4-9.8-17.4-16.2-29.9-16.2-5 0-9.8 1.1-14.1 2.9-5.4-7.3-13.9-12-23.7-12-8.6 0-16.2 3.7-21.6 9.5-7.2-12-20.3-20-35.3-20-4.1 0-8 .6-11.8 1.7-.1-31.3-25.5-56.6-56.9-56.6-16.5 0-31.3 7-41.6 18.2-6.1-2.9-13-4.5-20.2-4.5-12.2 0-23.4 4.6-31.8 12.1C12.1-43-7.1-53.1-28.6-53.1c-37.1 0-67.2 30.1-67.2 67.2 0 35.6 27.7 64.7 62.8 67v.2c0 43.9 35.6 79.4 79.4 79.4 22.6 0 42.9-9.4 57.4-24.5 6.1 2.5 12.7 3.9 19.6 3.9 20.5 0 38.1-12 46.4-29.3 4.3 1.8 9 2.8 13.9 2.8 12.7 0 23.7-6.7 30-16.7 5 3.1 10.8 4.9 17.1 4.9 6.1 0 11.8-1.7 16.7-4.6v.2c0 19.2 15.6 34.8 34.8 34.8 15 0 27.7-9.5 32.6-22.7.7 0 1.5.1 2.2.1 6.6 0 12.7-1.8 18-4.8 5 9.8 15.3 16.6 27.1 16.6 16.8 0 30.4-13.6 30.4-30.4 0-16.8-13.6-30.4-30.4-30.4z",
                    mask: "url(#gA)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gB",
                  cx: "161.7688",
                  cy: "-38.1816",
                  r: "155.5751",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gB)",
                d:
                  "M362.2 60.6c-3.7 0-7.2.7-10.5 1.9-4.6-14.7-18.4-25.4-34.6-25.4-2 0-3.9.2-5.9.5-6.4-9.8-17.4-16.2-29.9-16.2-5 0-9.8 1.1-14.1 2.9-5.4-7.3-13.9-12-23.7-12-8.6 0-16.2 3.7-21.6 9.5-7.2-12-20.3-20-35.3-20-4.1 0-8 .6-11.8 1.7-.1-31.3-25.5-56.6-56.9-56.6-16.5 0-31.3 7-41.6 18.2-6.1-2.9-13-4.5-20.2-4.5-12.2 0-23.4 4.6-31.8 12.1C12.1-43-7.1-53.1-28.6-53.1c-37.1 0-67.2 30.1-67.2 67.2 0 35.6 27.7 64.7 62.8 67v.2c0 43.9 35.6 79.4 79.4 79.4 22.6 0 42.9-9.4 57.4-24.5 6.1 2.5 12.7 3.9 19.6 3.9 20.5 0 38.1-12 46.4-29.3 4.3 1.8 9 2.8 13.9 2.8 12.7 0 23.7-6.7 30-16.7 5 3.1 10.8 4.9 17.1 4.9 6.1 0 11.8-1.7 16.7-4.6v.2c0 19.2 15.6 34.8 34.8 34.8 15 0 27.7-9.5 32.6-22.7.7 0 1.5.1 2.2.1 6.6 0 12.7-1.8 18-4.8 5 9.8 15.3 16.6 27.1 16.6 16.8 0 30.4-13.6 30.4-30.4 0-16.8-13.6-30.4-30.4-30.4z",
                opacity: ".9",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gC",
                    width: "610.5",
                    height: "298.1",
                    x: "948.1",
                    y: "860.7",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gE",
                  width: "610.5",
                  height: "298.1",
                  x: "948.1",
                  y: "860.7",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gC)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gD",
                      cx: "-383.942",
                      cy: "332.3301",
                      r: "427.9323",
                      gradientTransform: "rotate(-175.655 484.61 733.25)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gD)",
                    d:
                      "M1009.7 1068.8c2.1.2 4.3.2 6.4.2 8.5 47.8 48.3 85.6 98.9 89.5 56.5 4.3 106.1-35.3 115.5-90 11.6 9.8 26.2 16.2 42.5 17.4 36.5 2.8 68.8-21.2 77.7-55.4 6.5 3.3 13.7 5.3 21.4 5.9 12.2.9 23.8-2 33.7-7.8 10.3 23.4 32.8 40.4 60.1 42.5 39.4 3 73.8-26.5 76.8-66 1.1-14.1-2-27.5-8.2-39 13.3-7.9 22.7-21.9 23.9-38.4 2.1-27-18.2-50.6-45.2-52.6-23.7-1.8-44.8 13.6-50.9 35.7-6.7-6.2-15.4-10.3-25.2-11-12.9-1-24.9 4-33.2 12.7-5.9-18.8-22.8-33-43.6-34.6-20.8-1.6-39.5 9.9-48.3 27.5-11.4-20.1-32.2-34.4-57-36.3-30.2-2.3-57.5 14.5-69.9 40.3-9.8-26.4-34.3-46.1-64.2-48.4-41-3.1-76.8 27.6-80 68.7-.3 3.9-.3 7.7 0 11.4-6.5-2.8-13.6-4.6-21.1-5.2-36.7-2.8-68.8 24.7-71.5 61.4-2.8 36.7 24.7 68.7 61.4 71.5z",
                    mask: "url(#gE)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gF",
                  cx: "-383.942",
                  cy: "332.3301",
                  r: "427.9323",
                  gradientTransform: "rotate(-175.655 484.61 733.25)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gF)",
                d:
                  "M1009.7 1068.8c2.1.2 4.3.2 6.4.2 8.5 47.8 48.3 85.6 98.9 89.5 56.5 4.3 106.1-35.3 115.5-90 11.6 9.8 26.2 16.2 42.5 17.4 36.5 2.8 68.8-21.2 77.7-55.4 6.5 3.3 13.7 5.3 21.4 5.9 12.2.9 23.8-2 33.7-7.8 10.3 23.4 32.8 40.4 60.1 42.5 39.4 3 73.8-26.5 76.8-66 1.1-14.1-2-27.5-8.2-39 13.3-7.9 22.7-21.9 23.9-38.4 2.1-27-18.2-50.6-45.2-52.6-23.7-1.8-44.8 13.6-50.9 35.7-6.7-6.2-15.4-10.3-25.2-11-12.9-1-24.9 4-33.2 12.7-5.9-18.8-22.8-33-43.6-34.6-20.8-1.6-39.5 9.9-48.3 27.5-11.4-20.1-32.2-34.4-57-36.3-30.2-2.3-57.5 14.5-69.9 40.3-9.8-26.4-34.3-46.1-64.2-48.4-41-3.1-76.8 27.6-80 68.7-.3 3.9-.3 7.7 0 11.4-6.5-2.8-13.6-4.6-21.1-5.2-36.7-2.8-68.8 24.7-71.5 61.4-2.8 36.7 24.7 68.7 61.4 71.5z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gG",
                    width: "660",
                    height: "246.8",
                    x: "734.1",
                    y: "708.7",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gI",
                  width: "660",
                  height: "246.8",
                  x: "734.1",
                  y: "708.7",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gG)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gH",
                      cx: "22.4304",
                      cy: "909.7641",
                      r: "308.9135",
                      gradientTransform: "rotate(-152.89 547.165 819.013)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".1708",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".3205",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4624",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".5995",
                      stopColor: "#C5C5C5",
                    }),
                    r.default.createElement("stop", {
                      offset: ".7331",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8625",
                      stopColor: "#7D7D7D",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#787878",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gH)",
                    d:
                      "M751.2 831.9c3.3 1.7 6.7 2.7 10.2 3.2-.3.5-.6 1-.9 1.6-12.6 24.5-2.8 54.6 21.7 67.2 16.8 8.6 36.3 6.7 50.9-3.2 5.6 10.7 14.4 19.9 26 25.9 29 14.9 64.4 4 80.2-24.2 2.5 2.1 5.2 4 8.2 5.6 20.6 10.6 45.9 2.4 56.5-18.2 2.4-4.7 3.8-9.5 4.3-14.4.8.5 1.6 1 2.4 1.4 6.8 3.5 14.4 3.8 21.1 1.6 3.5 17.7 14.8 33.7 32.1 42.6 30 15.4 66.8 3.5 82.2-26.5 1.2-2.3 2.2-4.6 3-7 5 6.3 11.5 11.7 19.1 15.6 23.8 12.2 52.1 6.5 69.5-12.1 3.1 7.4 8.8 13.8 16.5 17.8 3.4 1.8 7.1 2.9 10.7 3.5-.3.5-.6 1-.9 1.6-7.3 14.2-1.7 31.6 12.6 38.9 14.2 7.3 31.6 1.7 38.9-12.6 0-.1.1-.2.1-.3 13.2 4.6 28.1-1.1 34.7-13.9.3-.6.5-1.2.8-1.7 1.3 1 2.7 1.9 4.2 2.7 13.1 6.7 29.2 1.5 35.9-11.6 6.7-13.1 1.5-29.1-11.6-35.9-3.1-1.6-6.3-2.5-9.6-2.8-.7-11.9-7.5-23.2-19-29-4.5-2.3-9.3-3.5-14-3.8-.7-9.8-6.3-18.9-15.7-23.7-10.3-5.3-22.3-3.7-30.9 2.9-2.6-5.3-6.8-9.9-12.5-12.8-8.2-4.2-17.5-4-25.2-.2 6.5-18.5-1.5-39.4-19.4-48.6-16.3-8.3-35.6-4.3-47.4 8.5-1.4-22.1-14-42.9-35.1-53.7-31.8-16.3-70.9-3.7-87.2 28.1-.9 1.7-1.6 3.4-2.3 5.1-22.4-5.1-46.3 5.4-57.3 26.8-.4.8-.7 1.6-1 2.3-1.9-1.6-4-3-6.3-4.2-8.7-4.5-18.4-4.8-27-1.9-4.5-10-12.3-18.6-22.8-23.9-24-12.3-53.3-3.3-66.5 19.9-4.5-5.4-10.2-10-16.9-13.4-26.7-13.7-59.4-3.1-73.1 23.6-.7 1.3-1.2 2.7-1.8 4-2.4-2.6-5.3-4.8-8.6-6.5-15.5-7.9-34.6-1.8-42.5 13.7-7.9 15-1.8 34 13.7 42z",
                    mask: "url(#gI)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gJ",
                  cx: "22.4304",
                  cy: "909.7641",
                  r: "308.9135",
                  gradientTransform: "rotate(-152.89 547.165 819.013)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gJ)",
                d:
                  "M751.2 831.9c3.3 1.7 6.7 2.7 10.2 3.2-.3.5-.6 1-.9 1.6-12.6 24.5-2.8 54.6 21.7 67.2 16.8 8.6 36.3 6.7 50.9-3.2 5.6 10.7 14.4 19.9 26 25.9 29 14.9 64.4 4 80.2-24.2 2.5 2.1 5.2 4 8.2 5.6 20.6 10.6 45.9 2.4 56.5-18.2 2.4-4.7 3.8-9.5 4.3-14.4.8.5 1.6 1 2.4 1.4 6.8 3.5 14.4 3.8 21.1 1.6 3.5 17.7 14.8 33.7 32.1 42.6 30 15.4 66.8 3.5 82.2-26.5 1.2-2.3 2.2-4.6 3-7 5 6.3 11.5 11.7 19.1 15.6 23.8 12.2 52.1 6.5 69.5-12.1 3.1 7.4 8.8 13.8 16.5 17.8 3.4 1.8 7.1 2.9 10.7 3.5-.3.5-.6 1-.9 1.6-7.3 14.2-1.7 31.6 12.6 38.9 14.2 7.3 31.6 1.7 38.9-12.6 0-.1.1-.2.1-.3 13.2 4.6 28.1-1.1 34.7-13.9.3-.6.5-1.2.8-1.7 1.3 1 2.7 1.9 4.2 2.7 13.1 6.7 29.2 1.5 35.9-11.6 6.7-13.1 1.5-29.1-11.6-35.9-3.1-1.6-6.3-2.5-9.6-2.8-.7-11.9-7.5-23.2-19-29-4.5-2.3-9.3-3.5-14-3.8-.7-9.8-6.3-18.9-15.7-23.7-10.3-5.3-22.3-3.7-30.9 2.9-2.6-5.3-6.8-9.9-12.5-12.8-8.2-4.2-17.5-4-25.2-.2 6.5-18.5-1.5-39.4-19.4-48.6-16.3-8.3-35.6-4.3-47.4 8.5-1.4-22.1-14-42.9-35.1-53.7-31.8-16.3-70.9-3.7-87.2 28.1-.9 1.7-1.6 3.4-2.3 5.1-22.4-5.1-46.3 5.4-57.3 26.8-.4.8-.7 1.6-1 2.3-1.9-1.6-4-3-6.3-4.2-8.7-4.5-18.4-4.8-27-1.9-4.5-10-12.3-18.6-22.8-23.9-24-12.3-53.3-3.3-66.5 19.9-4.5-5.4-10.2-10-16.9-13.4-26.7-13.7-59.4-3.1-73.1 23.6-.7 1.3-1.2 2.7-1.8 4-2.4-2.6-5.3-4.8-8.6-6.5-15.5-7.9-34.6-1.8-42.5 13.7-7.9 15-1.8 34 13.7 42z",
                opacity: "0.8",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gK",
                    width: "512",
                    height: "240",
                    x: "234.6",
                    y: "840.2",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gM",
                  width: "512",
                  height: "240",
                  x: "234.6",
                  y: "840.2",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gK)" },
                  r.default.createElement(
                    "linearGradient",
                    {
                      id: "gL",
                      x1: "1392.2172",
                      x2: "1367.6245",
                      y1: "475.3536",
                      y2: "663.9003",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform: "rotate(17.14 -4278.137 -2743.655)",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".231",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4336",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6256",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8109",
                      stopColor: "#C6C6C6",
                    }),
                    r.default.createElement("stop", {
                      offset: ".99",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: "1",
                      stopColor: "#A3A3A3",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gL)",
                    d:
                      "M705.7 1039.4c-3.7-1.1-6.9-2.9-9.8-5.1-9.1 13.2-26 19.6-42.1 14.6-2-.6-3.8-1.4-5.6-2.3-9.3 7.7-22.2 10.7-34.6 6.9-5-1.5-9.4-4-13.1-7.2-7.5 5.6-17.5 7.6-27.1 4.7-8.5-2.6-15-8.6-18.5-16-10.8 9.7-26.2 13.7-41.1 9.1-4.1-1.3-7.8-3.1-11.1-5.3-9.7 31-42.6 48.3-73.7 38.8-16.3-5-28.8-16.5-35.7-30.8-7 .9-14.2.5-21.4-1.7-12.1-3.7-21.7-11.7-27.8-21.8-17 11.8-39 16-60.4 9.5-36.8-11.3-57.4-50.3-46-87.1 10.9-35.3 47.3-55.7 82.7-47.2v-.2c13.4-43.5 59.5-67.8 103-54.4 22.4 6.9 39.6 22.4 49.3 41.8 6.8-.6 13.8 0 20.7 2.1 20.3 6.3 34.1 23.5 37 43.2 4.8-.5 9.8-.1 14.6 1.4 12.5 3.9 21.5 13.9 24.6 25.7 5.9-1.6 12.2-1.6 18.5.3 6.1 1.9 11.2 5.3 15.1 9.7 0-.1 0-.2.1-.2 5.9-19.1 26.1-29.7 45.1-23.9 14.8 4.6 24.5 17.8 25.4 32.5.7.2 1.5.3 2.2.5 6.5 2 12.1 5.6 16.4 10.3 8-8.2 20.2-11.8 31.9-8.2 16.6 5.1 26 22.8 20.8 39.4-5.1 16.7-22.7 26.1-39.4 20.9z",
                    mask: "url(#gM)",
                  })
                )
              ),
              r.default.createElement(
                "linearGradient",
                {
                  id: "gN",
                  x1: "1392.2172",
                  x2: "1367.6245",
                  y1: "475.3536",
                  y2: "663.9003",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "rotate(17.14 -4278.137 -2743.655)",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gN)",
                d:
                  "M705.7 1039.4c-3.7-1.1-6.9-2.9-9.8-5.1-9.1 13.2-26 19.6-42.1 14.6-2-.6-3.8-1.4-5.6-2.3-9.3 7.7-22.2 10.7-34.6 6.9-5-1.5-9.4-4-13.1-7.2-7.5 5.6-17.5 7.6-27.1 4.7-8.5-2.6-15-8.6-18.5-16-10.8 9.7-26.2 13.7-41.1 9.1-4.1-1.3-7.8-3.1-11.1-5.3-9.7 31-42.6 48.3-73.7 38.8-16.3-5-28.8-16.5-35.7-30.8-7 .9-14.2.5-21.4-1.7-12.1-3.7-21.7-11.7-27.8-21.8-17 11.8-39 16-60.4 9.5-36.8-11.3-57.4-50.3-46-87.1 10.9-35.3 47.3-55.7 82.7-47.2v-.2c13.4-43.5 59.5-67.8 103-54.4 22.4 6.9 39.6 22.4 49.3 41.8 6.8-.6 13.8 0 20.7 2.1 20.3 6.3 34.1 23.5 37 43.2 4.8-.5 9.8-.1 14.6 1.4 12.5 3.9 21.5 13.9 24.6 25.7 5.9-1.6 12.2-1.6 18.5.3 6.1 1.9 11.2 5.3 15.1 9.7 0-.1 0-.2.1-.2 5.9-19.1 26.1-29.7 45.1-23.9 14.8 4.6 24.5 17.8 25.4 32.5.7.2 1.5.3 2.2.5 6.5 2 12.1 5.6 16.4 10.3 8-8.2 20.2-11.8 31.9-8.2 16.6 5.1 26 22.8 20.8 39.4-5.1 16.7-22.7 26.1-39.4 20.9z",
                opacity: ".9",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gO",
                    width: "1419.8",
                    height: "445.3",
                    x: "-50.2",
                    y: "743.6",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gQ",
                  width: "1419.8",
                  height: "445.3",
                  x: "-50.2",
                  y: "743.6",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gO)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gP",
                      cx: "225.0504",
                      cy: "176.8271",
                      r: "653.7505",
                      gradientTransform: "rotate(-168.11 501.275 760.594)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gP)",
                    d:
                      "M-9.5 966.4c-1.7 4-3.1 8.2-4 12.6-7.4 35.2 15.1 69.8 50.4 77.2 30.7 6.5 61-9.9 73.1-37.6 6.4 3.5 13.5 6.1 21 7.7 34.9 7.3 69.2-9.6 85.3-39.4 3.8 1.7 7.9 3 12.2 3.9 9.2 1.9 18.3 1.7 26.9-.3 4.4 23 22.2 42.3 46.6 47.5 27.9 5.9 55.4-8.7 66.8-33.6.2 0 .3.1.5.1 26.6 5.6 52.9-4 69.9-22.9 10.2 14.3 25.6 25.1 44.1 29 2.7.6 5.5 1 8.2 1.2 0 .2-.1.3-.1.5-7.3 34.7 14.9 68.7 49.6 76 7 1.5 14 1.7 20.8.9 7.8 47 43.5 86.7 93 97.1 54.6 11.5 108.3-16.4 131.6-64.3 11.9 13.8 28.2 23.9 47.3 28 45 9.5 89.3-18.2 100.8-62.3 8 7.6 18 13.2 29.6 15.7 8.1 1.7 16.2 1.7 23.9.2 6.9 20.1 23.9 36.2 46.2 40.9 20.2 4.3 40.2-1.8 54.5-14.6 6.2 6.4 14.4 11.2 23.8 13.1 14 3 27.9-.8 38.3-9 9.8 23.2 30.5 41.4 57 47 42.4 8.9 84-17.6 94-59.5 18.3-3.9 33.5-18.1 37.6-37.6 2.7-12.8.1-25.5-6.4-35.7 17.3-6.5 31.1-21.5 35.2-40.9 6.4-30.3-13-60.1-43.4-66.5-15.6-3.3-31 .3-43.2 8.6-7.2-5.9-15.8-10.2-25.5-12.2-32.4-6.8-64.2 13.9-71 46.3-2.2 10.6-1.5 21 1.6 30.6-1.8-.6-3.5-1.2-5.4-1.6-12.6-2.7-25 .5-34.6 7.7-6.8-11.2-17.9-19.6-31.7-22.5-7.1-1.5-14.1-1.3-20.7.1.1-19.9-9.3-38.5-24.7-50.3.1-.5.3-1 .4-1.6 5.9-28-12-55.4-40-61.3-19.8-4.2-39.3 3.6-51.1 18.4-7.8-9.3-18.5-16.2-31.3-18.8-22.7-4.8-45 4.9-57.4 22.8-10-17.2-26.9-30.2-47.8-34.6-16.3-3.4-32.4-1.1-46.3 5.6-2.4-19.1-16.6-35.5-36.6-39.7-7.1-1.5-14.1-1.2-20.6.4 3.6-5.9 6.3-12.4 7.7-19.5 7.1-33.8-14.5-67.1-48.4-74.2s-67.1 14.5-74.2 48.4c-1.1 5.4-1.5 10.7-1.2 15.9-5-10.8-14.8-19.3-27.4-21.9-21.1-4.4-41.8 9.1-46.3 30.2-.6 3.1-.9 6.1-.8 9.1-14-2.8-27.8 1.1-38 9.5-6.1-6.3-14.2-11-23.4-12.9-24.8-5.2-49 10.6-54.3 35.4-1.3 6.4-1.3 12.8 0 18.8-9.2-8-20.5-13.9-33.3-16.6-12.7-2.7-25.3-1.9-36.9 1.7 2.6-33.4-19.9-64.4-53.6-71.5-36.6-7.7-72.6 15.7-80.3 52.4-1.8 8.3-1.9 16.6-.6 24.6-12.7 2.8-24.3 9.5-33 19-9.1-7-19.8-12-31.7-14.5-12.9-2.7-25.6-2.1-37.5 1.2-7-33.6-33.1-61.6-68.8-69.1C9 794.4-38.2 825.1-48.3 873.2c-7.8 37.2 8.7 73.8 38.8 93.2z",
                    mask: "url(#gQ)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gR",
                  cx: "225.0504",
                  cy: "176.8271",
                  r: "653.7505",
                  gradientTransform: "rotate(-168.11 501.275 760.594)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gR)",
                d:
                  "M-9.5 966.4c-1.7 4-3.1 8.2-4 12.6-7.4 35.2 15.1 69.8 50.4 77.2 30.7 6.5 61-9.9 73.1-37.6 6.4 3.5 13.5 6.1 21 7.7 34.9 7.3 69.2-9.6 85.3-39.4 3.8 1.7 7.9 3 12.2 3.9 9.2 1.9 18.3 1.7 26.9-.3 4.4 23 22.2 42.3 46.6 47.5 27.9 5.9 55.4-8.7 66.8-33.6.2 0 .3.1.5.1 26.6 5.6 52.9-4 69.9-22.9 10.2 14.3 25.6 25.1 44.1 29 2.7.6 5.5 1 8.2 1.2 0 .2-.1.3-.1.5-7.3 34.7 14.9 68.7 49.6 76 7 1.5 14 1.7 20.8.9 7.8 47 43.5 86.7 93 97.1 54.6 11.5 108.3-16.4 131.6-64.3 11.9 13.8 28.2 23.9 47.3 28 45 9.5 89.3-18.2 100.8-62.3 8 7.6 18 13.2 29.6 15.7 8.1 1.7 16.2 1.7 23.9.2 6.9 20.1 23.9 36.2 46.2 40.9 20.2 4.3 40.2-1.8 54.5-14.6 6.2 6.4 14.4 11.2 23.8 13.1 14 3 27.9-.8 38.3-9 9.8 23.2 30.5 41.4 57 47 42.4 8.9 84-17.6 94-59.5 18.3-3.9 33.5-18.1 37.6-37.6 2.7-12.8.1-25.5-6.4-35.7 17.3-6.5 31.1-21.5 35.2-40.9 6.4-30.3-13-60.1-43.4-66.5-15.6-3.3-31 .3-43.2 8.6-7.2-5.9-15.8-10.2-25.5-12.2-32.4-6.8-64.2 13.9-71 46.3-2.2 10.6-1.5 21 1.6 30.6-1.8-.6-3.5-1.2-5.4-1.6-12.6-2.7-25 .5-34.6 7.7-6.8-11.2-17.9-19.6-31.7-22.5-7.1-1.5-14.1-1.3-20.7.1.1-19.9-9.3-38.5-24.7-50.3.1-.5.3-1 .4-1.6 5.9-28-12-55.4-40-61.3-19.8-4.2-39.3 3.6-51.1 18.4-7.8-9.3-18.5-16.2-31.3-18.8-22.7-4.8-45 4.9-57.4 22.8-10-17.2-26.9-30.2-47.8-34.6-16.3-3.4-32.4-1.1-46.3 5.6-2.4-19.1-16.6-35.5-36.6-39.7-7.1-1.5-14.1-1.2-20.6.4 3.6-5.9 6.3-12.4 7.7-19.5 7.1-33.8-14.5-67.1-48.4-74.2s-67.1 14.5-74.2 48.4c-1.1 5.4-1.5 10.7-1.2 15.9-5-10.8-14.8-19.3-27.4-21.9-21.1-4.4-41.8 9.1-46.3 30.2-.6 3.1-.9 6.1-.8 9.1-14-2.8-27.8 1.1-38 9.5-6.1-6.3-14.2-11-23.4-12.9-24.8-5.2-49 10.6-54.3 35.4-1.3 6.4-1.3 12.8 0 18.8-9.2-8-20.5-13.9-33.3-16.6-12.7-2.7-25.3-1.9-36.9 1.7 2.6-33.4-19.9-64.4-53.6-71.5-36.6-7.7-72.6 15.7-80.3 52.4-1.8 8.3-1.9 16.6-.6 24.6-12.7 2.8-24.3 9.5-33 19-9.1-7-19.8-12-31.7-14.5-12.9-2.7-25.6-2.1-37.5 1.2-7-33.6-33.1-61.6-68.8-69.1C9 794.4-38.2 825.1-48.3 873.2c-7.8 37.2 8.7 73.8 38.8 93.2z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gS",
                    width: "375.6",
                    height: "197.1",
                    x: "807.1",
                    y: "753.2",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gU",
                  width: "375.6",
                  height: "197.1",
                  x: "807.1",
                  y: "753.2",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gS)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gT",
                      cx: "-41.5679",
                      cy: "480.6436",
                      r: "284.9812",
                      gradientTransform: "rotate(-175.655 484.61 733.25)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gT)",
                    d:
                      "M845.6 880.5c2.6.2 5.1.1 7.6-.1 8.1 16.3 24.3 28 43.7 29.5 6.7.5 13.1-.3 19.1-2.1 6.6 16.7 22.2 29.1 41.3 30.5 16.2 1.2 31.1-5.7 40.7-17.2 3.8 15.7 17.3 27.8 34.2 29.1 13.5 1 25.9-5.1 33.5-15.3 2.8 1.8 6 3 9.5 3.3 11 .8 20.7-7.4 21.5-18.5.2-2.4-.1-4.7-.7-6.9 15.4-5.3 27.3-18.6 30.4-35.2 5.4 5.3 12.6 8.9 20.7 9.5 18.1 1.4 33.9-12.2 35.3-30.3 1.4-18.1-12.2-33.9-30.3-35.3-.7-.1-1.3 0-2-.1-3.6-12.6-14.6-22.2-28.4-23.2-5.2-.4-10.1.5-14.6 2.3-5.5-13.5-18.1-23.5-33.6-24.6-21.8-1.7-40.7 14.6-42.4 36.4-.1 1.2-.1 2.5-.1 3.7-1.3.6-2.5 1.3-3.6 2.1-7.8-12.2-21-20.8-36.5-22-8.1-.6-15.8.8-22.7 3.9-1.2-24.4-20.4-44.7-45.4-46.6-27.1-2.1-50.7 18.2-52.8 45.3-.1 1.5-.1 2.9-.1 4.3-5.3-3.2-11.4-5.2-18-5.7-23-1.7-43 15.5-44.8 38.4-1.7 23 15.5 43 38.5 44.8z",
                    mask: "url(#gU)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "gV",
                  cx: "-41.5679",
                  cy: "480.6436",
                  r: "284.9812",
                  gradientTransform: "rotate(-175.655 484.61 733.25)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gV)",
                d:
                  "M845.6 880.5c2.6.2 5.1.1 7.6-.1 8.1 16.3 24.3 28 43.7 29.5 6.7.5 13.1-.3 19.1-2.1 6.6 16.7 22.2 29.1 41.3 30.5 16.2 1.2 31.1-5.7 40.7-17.2 3.8 15.7 17.3 27.8 34.2 29.1 13.5 1 25.9-5.1 33.5-15.3 2.8 1.8 6 3 9.5 3.3 11 .8 20.7-7.4 21.5-18.5.2-2.4-.1-4.7-.7-6.9 15.4-5.3 27.3-18.6 30.4-35.2 5.4 5.3 12.6 8.9 20.7 9.5 18.1 1.4 33.9-12.2 35.3-30.3 1.4-18.1-12.2-33.9-30.3-35.3-.7-.1-1.3 0-2-.1-3.6-12.6-14.6-22.2-28.4-23.2-5.2-.4-10.1.5-14.6 2.3-5.5-13.5-18.1-23.5-33.6-24.6-21.8-1.7-40.7 14.6-42.4 36.4-.1 1.2-.1 2.5-.1 3.7-1.3.6-2.5 1.3-3.6 2.1-7.8-12.2-21-20.8-36.5-22-8.1-.6-15.8.8-22.7 3.9-1.2-24.4-20.4-44.7-45.4-46.6-27.1-2.1-50.7 18.2-52.8 45.3-.1 1.5-.1 2.9-.1 4.3-5.3-3.2-11.4-5.2-18-5.7-23-1.7-43 15.5-44.8 38.4-1.7 23 15.5 43 38.5 44.8z",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "gW",
                  x1: "567.2979",
                  x2: "632.1232",
                  y1: "747.0691",
                  y2: "1059.7526",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#gW)",
                d:
                  "M304.5 939.4c-6.5 6.5-10.8 15.3-11.6 25.2-1.7 22.1 14.9 41.5 37 43.1 18.2 1.4 34.5-9.6 40.7-25.9 3.4 1.2 7 2 10.8 2.3 4.4.3 8.6 0 12.7-1 5.1 8.1 13.9 13.8 24.2 14.6h.7c2.1 21.9 19.6 39.9 42.3 41.6 10.3.8 20.1-2 28.2-7.1 8 10 19.9 16.7 33.6 17.8 5.3.4 10.5-.1 15.4-1.4.4 25 16.4 46.6 39.3 54.9 1.3 21.1 17.9 38.5 39.6 40.2 21 1.6 39.5-12.2 44.7-31.8 19.8-.7 36.3-16.2 37.8-36.4v-.7c2.3.6 4.7 1 7.2 1.2 23.8 1.8 44.6-16 46.4-39.9.7-9.6-1.8-18.7-6.5-26.2 19.5-4.3 34.7-21 36.3-41.9.6-7.8-.8-15.2-3.7-21.9 23.1-1.1 42.5-18 46.5-40.9 4.5 2 9.4 3.3 14.6 3.7 11.8.9 22.9-3 31.4-9.9 4 3.1 8.9 5.1 14.3 5.6 14.6 1.1 27.3-9.8 28.4-24.4 1.1-14.6-9.8-27.3-24.4-28.4-1.4-.1-2.7-.1-4.1 0-5.2-16.9-20.3-29.7-38.9-31.1-12.4-.9-24 3.3-32.6 10.9-2.9-11.8-13.1-21-25.9-22-5.8-.4-11.2.9-16 3.4-7-6.8-16.4-11.3-26.9-12.1-15-1.1-28.7 5.5-37.4 16.4-8.3-12.4-21.9-20.9-37.9-22.2-7.9-.6-15.5.7-22.4 3.5-5.5-5.8-13-9.6-21.6-10.3-7.2-.5-14 1.3-19.7 4.7-12.8-23.1-36.7-39.5-65-41.6-42.1-3.2-79.1 26.2-86.3 67-6-2.8-12.6-4.7-19.7-5.2-31.3-2.4-58.6 21.1-61 52.4-.3 3.6-.2 7.1.2 10.6-7.4-6-16.6-10-26.8-10.8-26.5-2-49.6 17.8-51.6 44.3-.7 11 2.2 21.2 7.7 29.7z",
                opacity: ".9",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "gX",
                    width: "575.9",
                    height: "386.7",
                    x: "-106.5",
                    y: "605.3",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "gZ",
                  width: "575.9",
                  height: "386.7",
                  x: "-106.5",
                  y: "605.3",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#gX)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "gY",
                      cx: "516.6997",
                      cy: "561.9979",
                      r: "427.9141",
                      gradientTransform: "rotate(11.858 -7095.318 -2020.554)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".2531",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".475",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6844",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8788",
                      stopColor: "#C7C7C7",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#gY)",
                    d:
                      "M389.1 933c-2.1-.4-4.2-1-6.2-1.6-21.5 43.5-70.3 68.7-120 58.3-55.4-11.6-92-63.5-85.8-118.6-13.8 6.2-29.7 8.2-45.6 4.9-35.8-7.5-60.2-39.6-59.2-74.9-7.2 1.3-14.7 1.3-22.2-.3-12-2.5-22.3-8.6-30.1-16.9-16.4 19.5-42.8 29.6-69.5 24-38.7-8.1-63.5-46.1-55.3-84.8 2.9-13.8 9.6-25.8 18.8-35.2-10.6-11.3-15.7-27.3-12.2-43.6 5.6-26.5 31.6-43.5 58.1-37.9 23.1 4.9 39 25.6 38.7 48.5 8.1-4.1 17.7-5.6 27.3-3.6 12.7 2.7 22.8 10.8 28.4 21.5 10.9-16.4 31.1-25.4 51.5-21.1 20.4 4.3 35.2 20.5 38.7 39.9 16.5-16.1 40.5-24 64.8-18.9 29.7 6.2 51.1 30 55.9 58.2 16.8-22.6 45.8-34.7 75.2-28.5 40.3 8.5 66.1 48 57.6 88.3-.8 3.8-1.9 7.5-3.2 11 7.1-.9 14.4-.6 21.7.9 36 7.6 59.1 42.9 51.6 79-7.6 35.9-43 59-79 51.4z",
                    mask: "url(#gZ)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "ha",
                  cx: "516.6997",
                  cy: "561.9979",
                  r: "427.9141",
                  gradientTransform: "rotate(11.858 -7095.318 -2020.554)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".188",
                  stopColor: "#FCFEFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3529",
                  stopColor: "#F1FAFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5091",
                  stopColor: "#DFF3FC",
                }),
                r.default.createElement("stop", {
                  offset: ".66",
                  stopColor: "#C6E9FA",
                }),
                r.default.createElement("stop", {
                  offset: ".8057",
                  stopColor: "#A5DDF7",
                }),
                r.default.createElement("stop", {
                  offset: ".8788",
                  stopColor: "#92D6F5",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#ha)",
                d:
                  "M389.1 933c-2.1-.4-4.2-1-6.2-1.6-21.5 43.5-70.3 68.7-120 58.3-55.4-11.6-92-63.5-85.8-118.6-13.8 6.2-29.7 8.2-45.6 4.9-35.8-7.5-60.2-39.6-59.2-74.9-7.2 1.3-14.7 1.3-22.2-.3-12-2.5-22.3-8.6-30.1-16.9-16.4 19.5-42.8 29.6-69.5 24-38.7-8.1-63.5-46.1-55.3-84.8 2.9-13.8 9.6-25.8 18.8-35.2-10.6-11.3-15.7-27.3-12.2-43.6 5.6-26.5 31.6-43.5 58.1-37.9 23.1 4.9 39 25.6 38.7 48.5 8.1-4.1 17.7-5.6 27.3-3.6 12.7 2.7 22.8 10.8 28.4 21.5 10.9-16.4 31.1-25.4 51.5-21.1 20.4 4.3 35.2 20.5 38.7 39.9 16.5-16.1 40.5-24 64.8-18.9 29.7 6.2 51.1 30 55.9 58.2 16.8-22.6 45.8-34.7 75.2-28.5 40.3 8.5 66.1 48 57.6 88.3-.8 3.8-1.9 7.5-3.2 11 7.1-.9 14.4-.6 21.7.9 36 7.6 59.1 42.9 51.6 79-7.6 35.9-43 59-79 51.4z",
              }),
              r.default.createElement(
                "defs",
                null,
                r.default.createElement(
                  "filter",
                  {
                    id: "hb",
                    width: "481.4",
                    height: "219.3",
                    x: "1030.6",
                    y: "655.7",
                    filterUnits: "userSpaceOnUse",
                  },
                  r.default.createElement("feFlood", {
                    result: "back",
                    floodColor: "#fff",
                    floodOpacity: "1",
                  }),
                  r.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "back",
                  })
                )
              ),
              r.default.createElement(
                "mask",
                {
                  id: "hd",
                  width: "481.4",
                  height: "219.3",
                  x: "1030.6",
                  y: "655.7",
                  maskUnits: "userSpaceOnUse",
                },
                r.default.createElement(
                  "g",
                  { filter: "url(#hb)" },
                  r.default.createElement(
                    "radialGradient",
                    {
                      id: "hc",
                      cx: "-288.1716",
                      cy: "679.4098",
                      r: "155.5751",
                      gradientTransform: "rotate(-175.655 484.61 733.25)",
                      gradientUnits: "userSpaceOnUse",
                    },
                    r.default.createElement("stop", {
                      offset: "0",
                      stopColor: "#FFF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".231",
                      stopColor: "#FCFCFC",
                    }),
                    r.default.createElement("stop", {
                      offset: ".4336",
                      stopColor: "#F1F1F1",
                    }),
                    r.default.createElement("stop", {
                      offset: ".6256",
                      stopColor: "#DFDFDF",
                    }),
                    r.default.createElement("stop", {
                      offset: ".8109",
                      stopColor: "#C6C6C6",
                    }),
                    r.default.createElement("stop", {
                      offset: ".99",
                      stopColor: "#A5A5A5",
                    }),
                    r.default.createElement("stop", {
                      offset: "1",
                      stopColor: "#A3A3A3",
                    })
                  ),
                  r.default.createElement("path", {
                    fill: "url(#hc)",
                    d:
                      "M1058.7 731.7c3.7.3 7.2-.1 10.6-1.1 3.5 15 16.4 26.7 32.6 28 2 .2 3.9.1 5.9-.1 5.6 10.2 16.1 17.5 28.6 18.4 5 .4 9.8-.3 14.3-1.8 4.8 7.6 13 13 22.7 13.8 8.5.6 16.5-2.4 22.3-7.8 6.3 12.5 18.7 21.5 33.6 22.7 4.1.3 8.1 0 11.9-.8-2.2 31.2 21.2 58.4 52.4 60.8 16.4 1.2 31.7-4.7 42.9-15 5.9 3.3 12.6 5.5 19.8 6 12.2.9 23.6-2.8 32.7-9.7 11.1 16.6 29.4 28.2 50.8 29.8 37 2.8 69.3-24.9 72.1-61.9 2.7-35.5-22.7-66.7-57.5-71.6v-.2c3.3-43.7-29.4-81.9-73.2-85.2-22.5-1.7-43.5 6.1-59.1 20.1-5.8-3-12.3-4.8-19.3-5.4-20.4-1.6-38.9 9.1-48.5 25.7-4.1-2.1-8.7-3.5-13.6-3.9-12.6-1-24.2 4.9-31.1 14.4-4.7-3.5-10.4-5.7-16.7-6.2-6.1-.5-11.9.8-17 3.4v-.2c1.5-19.2-12.9-35.9-32.1-37.4-14.9-1.1-28.3 7.3-34.2 20.2-.7-.1-1.4-.3-2.2-.3-6.6-.5-12.8.8-18.4 3.5-4.3-10.2-13.9-17.7-25.7-18.6-16.7-1.3-31.3 11.3-32.6 28-1.3 16.6 11.3 31.2 28 32.4z",
                    mask: "url(#hd)",
                  })
                )
              ),
              r.default.createElement(
                "radialGradient",
                {
                  id: "he",
                  cx: "-288.1716",
                  cy: "679.4098",
                  r: "155.5751",
                  gradientTransform: "rotate(-175.655 484.61 733.25)",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#he)",
                d:
                  "M1058.7 731.7c3.7.3 7.2-.1 10.6-1.1 3.5 15 16.4 26.7 32.6 28 2 .2 3.9.1 5.9-.1 5.6 10.2 16.1 17.5 28.6 18.4 5 .4 9.8-.3 14.3-1.8 4.8 7.6 13 13 22.7 13.8 8.5.6 16.5-2.4 22.3-7.8 6.3 12.5 18.7 21.5 33.6 22.7 4.1.3 8.1 0 11.9-.8-2.2 31.2 21.2 58.4 52.4 60.8 16.4 1.2 31.7-4.7 42.9-15 5.9 3.3 12.6 5.5 19.8 6 12.2.9 23.6-2.8 32.7-9.7 11.1 16.6 29.4 28.2 50.8 29.8 37 2.8 69.3-24.9 72.1-61.9 2.7-35.5-22.7-66.7-57.5-71.6v-.2c3.3-43.7-29.4-81.9-73.2-85.2-22.5-1.7-43.5 6.1-59.1 20.1-5.8-3-12.3-4.8-19.3-5.4-20.4-1.6-38.9 9.1-48.5 25.7-4.1-2.1-8.7-3.5-13.6-3.9-12.6-1-24.2 4.9-31.1 14.4-4.7-3.5-10.4-5.7-16.7-6.2-6.1-.5-11.9.8-17 3.4v-.2c1.5-19.2-12.9-35.9-32.1-37.4-14.9-1.1-28.3 7.3-34.2 20.2-.7-.1-1.4-.3-2.2-.3-6.6-.5-12.8.8-18.4 3.5-4.3-10.2-13.9-17.7-25.7-18.6-16.7-1.3-31.3 11.3-32.6 28-1.3 16.6 11.3 31.2 28 32.4z",
                opacity: ".9",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "hf",
                  x1: "14.6013",
                  x2: "79.224",
                  y1: "433.7175",
                  y2: "745.4234",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: ".3147",
                  stopColor: "#FCFEFE",
                }),
                r.default.createElement("stop", {
                  offset: ".5906",
                  stopColor: "#F1F9FD",
                }),
                r.default.createElement("stop", {
                  offset: ".8511",
                  stopColor: "#DFF2FA",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#D1EDF8",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#hf)",
                d:
                  "M350.8 791.5c7.9-4.8 14.1-12.3 17.2-21.8 6.9-21.1-4.6-43.8-25.7-50.7-17.4-5.7-35.8 1.2-45.7 15.5-3-2-6.3-3.6-9.9-4.8-4.2-1.4-8.4-2-12.6-2.1-3-9.1-10.2-16.7-20-19.9-.2-.1-.5-.1-.7-.2 3.2-21.8-9.6-43.4-31.3-50.5-9.9-3.2-20-2.9-29.1.2-5.4-11.6-15.3-21-28.4-25.2-5.1-1.7-10.2-2.4-15.3-2.3 5.5-24.4-4.9-49.2-25.1-62.7 3.7-20.8-8.3-41.7-28.9-48.4-20-6.5-41.3 2.4-51 20.3-19.4-4-39.1 7.1-45.4 26.4-.1.2-.1.4-.2.6-2.1-1.1-4.3-2.1-6.7-2.9-22.7-7.4-47.1 5-54.6 27.7-3 9.2-2.7 18.6.1 27-20-.4-38.7 12.1-45.2 32.1-2.4 7.4-2.8 15-1.6 22.1-22.7-4.4-45.6 7.4-54.9 28.7-3.9-3-8.3-5.5-13.3-7.1-11.3-3.7-23-2.6-32.9 2.2-3.1-4-7.4-7.1-12.6-8.8-13.9-4.5-28.8 3.1-33.4 17-4.5 13.9 3.1 28.8 17 33.4 1.3.4 2.7.7 4 .9 1 17.6 12.6 33.7 30.4 39.5 11.8 3.9 24.1 2.5 34.3-2.9 0 12.2 7.7 23.5 19.9 27.5 5.5 1.8 11.1 1.8 16.3.5 5.2 8.3 13.2 14.9 23.3 18.1 14.3 4.7 29.2 1.5 40.2-7.1 5.1 14 16.3 25.5 31.6 30.5 7.5 2.5 15.2 3 22.6 1.9 4 6.9 10.4 12.4 18.5 15.1 6.9 2.2 13.9 2.1 20.3.1 7 25.5 26.2 47.1 53.2 55.9 40.1 13.1 83.1-6.7 99.7-44.6 5.2 4.2 11.2 7.5 17.9 9.7 29.9 9.7 62-6.6 71.7-36.4 1.1-3.4 1.9-6.9 2.3-10.4 5.7 7.6 13.7 13.6 23.5 16.8 25.3 8.2 52.4-5.5 60.7-30.8 3.4-9.9 3-20.5-.2-30.1z",
                opacity: ".9",
              }),
              r.default.createElement(
                "linearGradient",
                {
                  id: "hg",
                  x1: "720",
                  x2: "720",
                  y1: "1015.3599",
                  y2: "846.357",
                  gradientUnits: "userSpaceOnUse",
                },
                r.default.createElement("stop", {
                  offset: "0",
                  stopColor: "#FFF",
                }),
                r.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#FFF",
                  stopOpacity: "0",
                })
              ),
              r.default.createElement("path", {
                fill: "url(#hg)",
                d: "M0 843.9h1440V1024H0z",
              })
            ),
            t
          );
        };
      (s.defaultProps = { children: null, visitedSections: [] }),
        (s.propTypes = {
          children: c.default.node,
          visitedSections: c.default.arrayOf(c.default.string),
        }),
        (t.default = s);
    },
    function(e, t) {
      e.exports = {
        board: "board-h8WOY",
        map: "map-wsQJI",
        landingSquare: "landingSquare-2D1ka",
        active: "active-q4sAq",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(689),
        o = a(d),
        s = l(692),
        p = a(s),
        h = l(695),
        m = a(h),
        E = l(159),
        v = l(258),
        g = a(v),
        M = l(736),
        b = a(M),
        z = function(e) {
          var t = e.hide;
          return r.default.createElement(
            E.Row,
            {
              vcenter: !0,
              className: (0, i.default)(b.default.header, t && b.default.hide),
            },
            r.default.createElement(
              E.Column,
              { small: 5 },
              r.default.createElement(g.default, { className: b.default.logo })
            ),
            r.default.createElement(
              E.Column,
              { small: 6, pushSmall: 1, className: b.default.utilities },
              r.default.createElement(m.default, null),
              r.default.createElement(o.default, null),
              r.default.createElement(p.default, null)
            )
          );
        };
      (z.defaultProps = { hide: !1 }),
        (z.propTypes = { hide: c.default.bool }),
        (t.default = z);
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(82),
        i = a(u),
        d = l(690),
        o = a(d),
        s = function(e) {
          var t = e.contentPaths,
            l = e.farthestPath;
          return r.default.createElement(o.default, {
            progress: (function() {
              var e = t.indexOf(l);
              return -1 === e ? 0 : e / t.length;
            })(),
          });
        };
      (s.propTypes = {
        contentPaths: c.default.arrayOf(c.default.string).isRequired,
        farthestPath: c.default.string.isRequired,
      }),
        (t.default = (0, i.default)(s));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(259),
        i = a(u),
        d = l(691),
        o = a(d),
        s = function(e) {
          var t = e.progress;
          return r.default.createElement(
            "div",
            { className: o.default.wrapper },
            r.default.createElement(
              "div",
              { className: o.default.progressBar },
              r.default.createElement("span", {
                style: { transform: "scaleX(" + t + ")" },
              })
            ),
            r.default.createElement(i.default, { className: o.default.medal })
          );
        };
      (s.propTypes = { progress: c.default.number.isRequired }),
        (t.default = s);
    },
    function(e, t) {
      e.exports = {
        wrapper: "wrapper-21OUY",
        progressBar: "progressBar-_NL40",
        medal: "medal-1io7D",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(47),
        i = l(82),
        d = a(i),
        o = l(161),
        s = a(o),
        p = l(693),
        h = a(p),
        m = l(60),
        E = function(e) {
          var t = e.farthestPath,
            l = e.sections;
          return r.default.createElement(h.default, {
            items: l,
            visited: (function() {
              var e = (0, m.firstPathSegment)(t),
                a = l.findIndex(function(t) {
                  return (0, m.trimPath)(t.path) === e;
                });
              return -1 !== a ? l.slice(0, a + 1) : null;
            })(),
          });
        };
      (E.propTypes = {
        farthestPath: c.default.string.isRequired,
        sections: c.default.arrayOf(c.default.object).isRequired,
      }),
        (t.default = (0, u.flow)(d.default, s.default)(E));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })(),
        u = l(1),
        i = a(u),
        d = l(2),
        o = a(d),
        s = l(18),
        p = a(s),
        h = l(81),
        m = l(103),
        E = a(m),
        v = l(160),
        g = a(v),
        M = l(694),
        b = a(M),
        z = (function(e) {
          function t() {
            f(this, t);
            var e = r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this)
            );
            return (
              (e.hasVisited = function(t) {
                return e.props.visited.some(function(e) {
                  return e.path === t.path;
                });
              }),
              (e.handleClick = function() {
                e.setState({ open: !e.state.open });
              }),
              (e.state = { open: !1 }),
              e
            );
          }
          return (
            n(t, e),
            c(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.items,
                    l = this.state.open;
                  return i.default.createElement(
                    "div",
                    { className: b.default.wrapper },
                    i.default.createElement(
                      "button",
                      {
                        className: (0, p.default)(
                          b.default.button,
                          l && b.default.open
                        ),
                        onClick: this.handleClick,
                      },
                      i.default.createElement("span", {
                        className: b.default.bar,
                      }),
                      i.default.createElement("span", {
                        className: b.default.bar,
                      }),
                      i.default.createElement("span", {
                        className: b.default.bar,
                      })
                    ),
                    l &&
                      i.default.createElement(
                        E.default,
                        {
                          tag: "ul",
                          size: 1.125,
                          margin: 0,
                          className: b.default.list,
                          strong: !0,
                        },
                        t.map(function(t, l) {
                          return i.default.createElement(
                            "li",
                            { className: b.default.item, key: l },
                            e.hasVisited(t)
                              ? i.default.createElement(
                                  h.Link,
                                  { onClick: e.handleClick, to: t.path },
                                  i.default.createElement(g.default, {
                                    icon: "check-circle",
                                    className: b.default.icon,
                                  }),
                                  t.title
                                )
                              : t.title
                          );
                        })
                      )
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      (z.defaultProps = { visited: [] }),
        (z.propTypes = {
          items: o.default.arrayOf(o.default.object).isRequired,
          visited: o.default.arrayOf(o.default.object),
        }),
        (t.default = z);
    },
    function(e, t) {
      e.exports = {
        wrapper: "wrapper-1lG8W",
        button: "button-3CUPd",
        bar: "bar-3SWcm",
        open: "open-1KLIz",
        list: "list-2lqRp",
        item: "item-w2_B1",
        icon: "icon-jYS_e",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })(),
        u = l(1),
        i = a(u),
        d = l(2),
        o = a(d),
        s = l(58),
        p = l(47),
        h = l(164),
        m = l(82),
        E = a(m),
        v = l(696),
        g = a(v),
        M = l(60),
        b = function(e) {
          return {
            audioEnabled: e.audio.audioEnabled,
            transcript: e.audio.transcript,
            transcriptVisible: e.audio.transcriptVisible,
          };
        },
        z = function(e) {
          return {
            onToggleAudio: function(t) {
              e((0, h.toggleAudio)(t));
            },
            onToggleTranscript: function(t) {
              e((0, h.toggleTranscript)(t));
            },
          };
        },
        F = (function(e) {
          function t(e) {
            f(this, t);
            var l = r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (l.state = { navigating: !1 }), l;
          }
          return (
            n(t, e),
            c(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.audioEnabled,
                    l = e.onToggleAudio,
                    a = e.onToggleTranscript,
                    f = e.transcript,
                    r = e.transcriptVisible,
                    n = this.state.navigating;
                  return i.default.createElement(g.default, {
                    file: this.file,
                    sound: !n && t,
                    transcript: f,
                    transcriptVisible: r,
                    onSoundClick: l,
                    onTranscriptClick: a,
                  });
                },
              },
              {
                key: "file",
                get: function() {
                  try {
                    var e = (0, M.trimPath)(this.props.currentPath).replace(
                      /\//g,
                      "-"
                    );
                    return l(698)("./" + e + ".mp3");
                  } catch (e) {
                    return null;
                  }
                },
              },
            ]),
            t
          );
        })(u.Component);
      (F.defaultProps = { transcript: null, transcriptVisible: !1 }),
        (F.propTypes = {
          audioEnabled: o.default.bool.isRequired,
          currentPath: o.default.string.isRequired,
          onToggleAudio: o.default.func.isRequired,
          onToggleTranscript: o.default.func.isRequired,
          transcript: o.default.node,
          transcriptVisible: o.default.bool,
        }),
        (t.default = (0, p.flow)(E.default, (0, s.connect)(b, z))(F));
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })(),
        u = l(1),
        i = a(u),
        d = l(2),
        o = a(d),
        s = l(160),
        p = a(s),
        h = l(103),
        m = a(h),
        E = l(697),
        v = a(E),
        g = (function(e) {
          function t() {
            var e, l, a, n;
            f(this, t);
            for (var c = arguments.length, u = Array(c), i = 0; i < c; i++)
              u[i] = arguments[i];
            return (
              (l = a = r(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(u)
                )
              )),
              (a.playNewAudioFile = function() {
                var e = a.props,
                  t = e.file,
                  l = e.sound;
                void 0 !== a.audio &&
                  a.audio.addEventListener("canplay", function() {
                    t && l && a.audio.play();
                  });
              }),
              (n = l),
              r(a, n)
            );
          }
          return (
            n(t, e),
            c(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.playNewAudioFile();
                },
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props,
                    l = t.file,
                    a = t.sound;
                  l && l !== e.file
                    ? this.playNewAudioFile()
                    : a !== e.sound &&
                      (a ? this.audio.play() : this.audio.pause());
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    l = t.file,
                    a = t.onSoundClick,
                    f = t.onTranscriptClick,
                    r = t.sound,
                    n = t.transcript,
                    c = t.transcriptVisible;
                  return i.default.createElement(
                    "div",
                    null,
                    i.default.createElement(
                      "div",
                      { className: v.default.controlWrapper },
                      i.default.createElement(
                        "button",
                        {
                          className: v.default.button,
                          onClick: f,
                          onKeyPress: f,
                        },
                        i.default.createElement(p.default, {
                          icon: c ? "file-text-o" : "file-text",
                          className: v.default.icon,
                        }),
                        i.default.createElement(
                          m.default,
                          { tag: "span", size: 0.625, margin: 0 },
                          "Transcript"
                        )
                      ),
                      c &&
                        "" !== n &&
                        i.default.createElement(
                          m.default,
                          {
                            tag: "div",
                            size: 1.25,
                            margin: 0,
                            className: v.default.transcript,
                          },
                          n
                        )
                    ),
                    i.default.createElement(
                      "div",
                      { className: v.default.controlWrapper },
                      i.default.createElement(
                        "button",
                        {
                          className: v.default.button,
                          onClick: a,
                          onKeyPress: a,
                        },
                        i.default.createElement(p.default, {
                          icon: r ? "volume-up" : "volume-off",
                          className: v.default.icon,
                        }),
                        i.default.createElement(
                          m.default,
                          { tag: "span", size: 0.625, margin: 0 },
                          "Sound"
                        )
                      ),
                      l &&
                        i.default.createElement("audio", {
                          ref: function(t) {
                            e.audio = t;
                          },
                          src: l,
                          preload: !0,
                        })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      (g.defaultProps = {
        file: null,
        onTranscriptClick: null,
        sound: !0,
        transcript: null,
        transcriptVisible: !1,
      }),
        (g.propTypes = {
          file: o.default.string,
          onSoundClick: o.default.func.isRequired,
          onTranscriptClick: o.default.func,
          sound: o.default.bool,
          transcript: o.default.node,
          transcriptVisible: o.default.bool,
        }),
        (t.default = g);
    },
    function(e, t) {
      e.exports = {
        controlWrapper: "controlWrapper-3VK-k",
        button: "button-37zWZ",
        icon: "icon-1DxbB",
        transcript: "transcript-1nw1I",
      };
    },
    function(e, t, l) {
      function a(e) {
        return l(f(e));
      }
      function f(e) {
        var t = r[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t;
      }
      var r = {
        "./campus.mp3": 699,
        "./comparing-awards-examine-package-activity-0.mp3": 700,
        "./comparing-awards-examine-package-activity-1.mp3": 701,
        "./comparing-awards-examine-package-activity-2.mp3": 702,
        "./comparing-awards-examine-package-activity-3.mp3": 703,
        "./comparing-awards-examine-package-activity-4.mp3": 704,
        "./comparing-awards-examine-package-activity.mp3": 705,
        "./comparing-awards-tips.mp3": 706,
        "./comparing-awards.mp3": 707,
        "./cost-of-college-chart.mp3": 708,
        "./cost-of-college-earn-more.mp3": 709,
        "./cost-of-college-good-news.mp3": 710,
        "./cost-of-college-why-so-expensive.mp3": 711,
        "./cost-of-college.mp3": 712,
        "./intro-character.mp3": 713,
        "./intro-destination.mp3": 714,
        "./intro-how-will-you-pay.mp3": 715,
        "./intro.mp3": 716,
        "./not-created-equal-grants-are-awesome-1.mp3": 717,
        "./not-created-equal-grants-are-awesome-2.mp3": 718,
        "./not-created-equal-how-can-i-qualify.mp3": 719,
        "./not-created-equal.mp3": 720,
        "./power-of-scholarships-tips.mp3": 721,
        "./power-of-scholarships.mp3": 722,
        "./reducing-the-gap-calculating-the-gap.mp3": 723,
        "./reducing-the-gap-tips.mp3": 724,
        "./reducing-the-gap-what-do-you-do.mp3": 725,
        "./reducing-the-gap.mp3": 726,
        "./spin.mp3": 727,
        "./understanding-your-award-anatomy-of-award.mp3": 728,
        "./understanding-your-award-fine-print.mp3": 729,
        "./understanding-your-award.mp3": 730,
        "./unlocking-financial-aid.mp3": 731,
        "./what-is-financial-aid-types-of-aid.mp3": 732,
        "./what-is-financial-aid.mp3": 733,
        "./your-plan-next-steps.mp3": 734,
        "./your-plan.mp3": 735,
      };
      (a.keys = function() {
        return Object.keys(r);
      }),
        (a.resolve = f),
        (e.exports = a),
        (a.id = 698);
    },
    function(e, t, l) {
      e.exports = l.p + "media/campus-5166e26e.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-0-9b4f5763.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-1-54dd6de4.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-2-d97be5e2.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-3-bc00b517.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-4-48c8fdeb.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/comparing-awards-examine-package-activity-b36dd9bb.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/comparing-awards-tips-8e9eb4c9.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/comparing-awards-7c016a93.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/cost-of-college-chart-10041e68.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/cost-of-college-earn-more-d97916c4.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/cost-of-college-good-news-aa0d8193.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/cost-of-college-why-so-expensive-50f5d5f9.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/cost-of-college-53c1537b.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/intro-character-b994addb.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/intro-destination-eae03757.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/intro-how-will-you-pay-a4a76440.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/intro-f57efd9b.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/not-created-equal-grants-are-awesome-1-8d20bceb.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/not-created-equal-grants-are-awesome-2-523ac099.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/not-created-equal-how-can-i-qualify-8452d327.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/not-created-equal-e97bca35.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/power-of-scholarships-tips-0743efca.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/power-of-scholarships-b522cf81.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/reducing-the-gap-calculating-the-gap-4d8b3918.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/reducing-the-gap-tips-8c3617a1.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/reducing-the-gap-what-do-you-do-7ede9e33.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/reducing-the-gap-bd165433.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/spin-fa312594.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/understanding-your-award-anatomy-of-award-23664639.mp3";
    },
    function(e, t, l) {
      e.exports =
        l.p + "media/understanding-your-award-fine-print-2d15e070.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/understanding-your-award-e9b8106f.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/unlocking-financial-aid-f4aedfee.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/what-is-financial-aid-types-of-aid-e3609b85.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/what-is-financial-aid-422970ff.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/your-plan-next-steps-19d58cab.mp3";
    },
    function(e, t, l) {
      e.exports = l.p + "media/your-plan-48212376.mp3";
    },
    function(e, t) {
      e.exports = {
        header: "header-2sPEB",
        hide: "hide-1hYUN",
        utilities: "utilities-1CrVv",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = l(1),
        r = a(f),
        n = l(2),
        c = a(n),
        u = l(18),
        i = a(u),
        d = l(103),
        o = a(d),
        s = l(260),
        p = a(s),
        h = l(738),
        m = a(h),
        E = l(739),
        v = a(E),
        g = l(740),
        M = a(g),
        b = function(e) {
          var t = e.className,
            l = new Date().getFullYear();
          return r.default.createElement(
            "div",
            { className: (0, i.default)(M.default.footer, t) },
            r.default.createElement(
              "div",
              { className: M.default.logos },
              r.default.createElement(p.default, {
                src: v.default,
                className: M.default.logoTWF,
              }),
              r.default.createElement(p.default, {
                src: m.default,
                className: M.default.logoDE,
              })
            ),
            r.default.createElement(
              o.default,
              { tag: "small" },
              "Copyright ",
              String.fromCharCode(169),
              " ",
              l,
              " Discovery Education. All rights reserved. Discovery Education is a Division of Discovery Communications, LLC."
            )
          );
        };
      (b.defaultProps = { className: null }),
        (b.propTypes = { className: c.default.string }),
        (t.default = b);
    },
    function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    function(e, t) {
      e.exports =
        "data:image/png;base64,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AACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQRlkFAAAAAABAGmUVAAAAAAAAaZRVAAAAAAAApFFWAQAAAAAAkEZZBQAAAAAAQBplFQAAAAAAAGmUVQAAAAAAAKRRVgEAAAAAAJBGWQUAAAAAAEAaZRUAAAAAAABplFUAAAAAAACkUVYBAAAAAACQ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";
    },
    function(e, t) {
      e.exports = {
        footer: "footer-2W_N5",
        logos: "logos-2jUYW",
        logoDE: "logoDE-2DpFX",
        logoTWF: "logoTWF-21ZsN",
      };
    },
    function(e, t) {
      e.exports = {
        content: "content-SQ_a7",
        overlay: "overlay-2DgRU",
        show: "show-2oQ83",
      };
    },
    function(e, t, l) {
      "use strict";
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function r(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var l = 0; l < t.length; l++) {
              var a = t[l];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(t, l, a) {
            return l && e(t.prototype, l), a && e(t, a), t;
          };
        })(),
        c = l(1),
        u = l(2),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        d = (function(e) {
          function t() {
            a(this, t);
            var e = f(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this)
            );
            return (e.state = { mod: null }), e;
          }
          return (
            r(t, e),
            n(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.load(this.props);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  e.load !== this.props.load && this.load(e);
                },
              },
              {
                key: "load",
                value: function(e) {
                  var t = this;
                  this.setState({ mod: null }),
                    e.load(function(e) {
                      t.setState({ mod: e.default ? e.default : e });
                    });
                },
              },
              {
                key: "render",
                value: function() {
                  return this.state.mod
                    ? this.props.children(this.state.mod)
                    : null;
                },
              },
            ]),
            t
          );
        })(c.Component);
      (d.propTypes = {
        children: i.default.func.isRequired,
        load: i.default.func.isRequired,
      }),
        (t.default = d);
    },
    function(e, t) {},
    ,
    function(e, t) {
      function l(e, t) {
        var l = e[1] || "",
          f = e[3];
        if (!f) return l;
        if (t && "function" == typeof btoa) {
          var r = a(f);
          return [l]
            .concat(
              f.sources.map(function(e) {
                return "/*# sourceURL=" + f.sourceRoot + e + " */";
              })
            )
            .concat([r])
            .join("\n");
        }
        return [l].join("\n");
      }
      function a(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var a = l(t, e);
              return t[2] ? "@media " + t[2] + "{" + a + "}" : a;
            }).join("");
          }),
          (t.i = function(e, l) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var a = {}, f = 0; f < this.length; f++) {
              var r = this[f][0];
              "number" == typeof r && (a[r] = !0);
            }
            for (f = 0; f < e.length; f++) {
              var n = e[f];
              ("number" == typeof n[0] && a[n[0]]) ||
                (l && !n[2]
                  ? (n[2] = l)
                  : l && (n[2] = "(" + n[2] + ") and (" + l + ")"),
                t.push(n));
            }
          }),
          t
        );
      };
    },
    function(e, t, l) {
      function a(e, t) {
        for (var l = 0; l < e.length; l++) {
          var a = e[l],
            f = h[a.id];
          if (f) {
            f.refs++;
            for (var r = 0; r < f.parts.length; r++) f.parts[r](a.parts[r]);
            for (; r < a.parts.length; r++) f.parts.push(d(a.parts[r], t));
          } else {
            for (var n = [], r = 0; r < a.parts.length; r++)
              n.push(d(a.parts[r], t));
            h[a.id] = { id: a.id, refs: 1, parts: n };
          }
        }
      }
      function f(e, t) {
        for (var l = [], a = {}, f = 0; f < e.length; f++) {
          var r = e[f],
            n = t.base ? r[0] + t.base : r[0],
            c = r[1],
            u = r[2],
            i = r[3],
            d = { css: c, media: u, sourceMap: i };
          a[n] ? a[n].parts.push(d) : l.push((a[n] = { id: n, parts: [d] }));
        }
        return l;
      }
      function r(e, t) {
        var l = E(e.insertInto);
        if (!l)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var a = M[M.length - 1];
        if ("top" === e.insertAt)
          a
            ? a.nextSibling
              ? l.insertBefore(t, a.nextSibling)
              : l.appendChild(t)
            : l.insertBefore(t, l.firstChild),
            M.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          l.appendChild(t);
        }
      }
      function n(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = M.indexOf(e);
        t >= 0 && M.splice(t, 1);
      }
      function c(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), i(t, e.attrs), r(e, t), t;
      }
      function u(e) {
        var t = document.createElement("link");
        return (
          (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          i(t, e.attrs),
          r(e, t),
          t
        );
      }
      function i(e, t) {
        Object.keys(t).forEach(function(l) {
          e.setAttribute(l, t[l]);
        });
      }
      function d(e, t) {
        var l, a, f, r;
        if (t.transform && e.css) {
          if (!(r = t.transform(e.css))) return function() {};
          e.css = r;
        }
        if (t.singleton) {
          var i = g++;
          (l = v || (v = c(t))),
            (a = o.bind(null, l, i, !1)),
            (f = o.bind(null, l, i, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((l = u(t)),
              (a = p.bind(null, l, t)),
              (f = function() {
                n(l), l.href && URL.revokeObjectURL(l.href);
              }))
            : ((l = c(t)),
              (a = s.bind(null, l)),
              (f = function() {
                n(l);
              }));
        return (
          a(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              a((e = t));
            } else f();
          }
        );
      }
      function o(e, t, l, a) {
        var f = l ? "" : a.css;
        if (e.styleSheet) e.styleSheet.cssText = z(t, f);
        else {
          var r = document.createTextNode(f),
            n = e.childNodes;
          n[t] && e.removeChild(n[t]),
            n.length ? e.insertBefore(r, n[t]) : e.appendChild(r);
        }
      }
      function s(e, t) {
        var l = t.css,
          a = t.media;
        if ((a && e.setAttribute("media", a), e.styleSheet))
          e.styleSheet.cssText = l;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(l));
        }
      }
      function p(e, t, l) {
        var a = l.css,
          f = l.sourceMap,
          r = void 0 === t.convertToAbsoluteUrls && f;
        (t.convertToAbsoluteUrls || r) && (a = b(a)),
          f &&
            (a +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(f)))) +
              " */");
        var n = new Blob([a], { type: "text/css" }),
          c = e.href;
        (e.href = URL.createObjectURL(n)), c && URL.revokeObjectURL(c);
      }
      var h = {},
        m = (function(e) {
          var t;
          return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        })(function() {
          return window && document && document.all && !window.atob;
        }),
        E = (function(e) {
          var t = {};
          return function(l) {
            return void 0 === t[l] && (t[l] = e.call(this, l)), t[l];
          };
        })(function(e) {
          return document.querySelector(e);
        }),
        v = null,
        g = 0,
        M = [],
        b = l(603);
      e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = m()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var l = f(e, t);
        return (
          a(l, t),
          function(e) {
            for (var r = [], n = 0; n < l.length; n++) {
              var c = l[n],
                u = h[c.id];
              u.refs--, r.push(u);
            }
            e && a(f(e, t), t);
            for (var n = 0; n < r.length; n++) {
              var u = r[n];
              if (0 === u.refs) {
                for (var i = 0; i < u.parts.length; i++) u.parts[i]();
                delete h[u.id];
              }
            }
          }
        );
      };
      var z = (function() {
        var e = [];
        return function(t, l) {
          return (e[t] = l), e.filter(Boolean).join("\n");
        };
      })();
    },
  ]),
  [261]
);
