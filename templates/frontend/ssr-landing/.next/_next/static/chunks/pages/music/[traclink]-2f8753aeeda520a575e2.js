_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    '/kYb': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      });
      var o = n('q1tI'),
        r = n.n(o),
        i = n('vOnD'),
        a = n('WqaS'),
        u = n('wx14'),
        l = n('ZMKu'),
        c = r.a.createElement;
      function s(e) {
        return c(
          d,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          c(
            'svg',
            Object(u.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, e),
            c(p, { cx: '25', cy: '25', r: '25' }),
            c(f, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var d = Object(i.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (e) {
            return e.theme.colors.itemBackgroundHover;
          }
        ),
        p = i.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        f = Object(i.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (e) {
            return e.theme.colors.icon;
          }
        ),
        _ = n('20a2'),
        m = r.a.createElement;
      function h(e) {
        var t = e.artistName,
          n = e.title,
          o = e.onClick,
          r = Object(_.useRouter)();
        return m(
          v,
          { alignItems: 'center' },
          m(s, {
            onClick:
              o ||
              function () {
                return r.back();
              },
          }),
          n || t ? m(g, null, n || t) : null
        );
      }
      var v = Object(i.d)(a.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['max-height:40px;']),
        g = i.d.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (e) {
            return e.theme.colors.primary;
          }
        );
    },
    '1LmX': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var o = n('q1tI'),
        r = n.n(o),
        i = n('vOnD'),
        a = n('F6jV'),
        u = n('wx14'),
        l = n('rePB'),
        c = r.a.createElement;
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                Object(l.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var p = r.a.createElement;
      function f(e) {
        var t,
          n = e.className,
          r = e.data,
          i = e.variant,
          u = void 0 === i ? 'large' : i,
          l = e.artistName,
          c = Object(o.useState)(!1),
          s = c[0],
          d = c[1],
          f = function () {
            var e;
            return r.id ? r.id : null === (e = r.url) || void 0 === e ? void 0 : e.split('embed/')[1];
          },
          g = null === (t = r.url) || void 0 === t ? void 0 : t.includes('list=');
        return p(
          _,
          { className: n },
          s
            ? p('iframe', {
                className: 'iframe',
                title: r.title ? r.title : 'Music Video',
                src: (function () {
                  var e = f();
                  return e
                    ? g
                      ? 'https://www.youtube.com/embed/videoseries?list='.concat(e)
                      : 'https://www.youtube.com/embed/'.concat(e, '?autoplay=1&controls=0&disablekb=1&rel=0')
                    : '';
                })(),
                width: '100%',
                height: '100%',
                frameBorder: '0',
                allow: 'autoplay',
                allowFullScreen: !0,
              })
            : p(
                m,
                {
                  onClick: function () {
                    analytics.track('Tracpage Link Click', {
                      artist_id: l,
                      category: 'traclink' === r.type ? 'Release' : 'Url',
                      name: r.title,
                    }),
                      d(!s);
                  },
                },
                p(h, null, p(a.a, null)),
                p(v, {
                  variant: u,
                  src: (function () {
                    var e = f();
                    return [
                      'https://img.youtube.com/vi/'.concat(e, '/maxresdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/hqdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/mqdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/default.jpg'),
                    ];
                  })(),
                  alt: r.title || 'Music Video',
                })
              )
        );
      }
      var _ = i.d.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-0' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        m = i.d.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-1' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        h = i.d.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-2' })(
          [
            'background-color:',
            ';display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:1;padding:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity ',
            ';&:hover{opacity:0.85;> svg{fill:',
            ';}}> svg{margin-left:4px;fill:',
            ';transition:fill ',
            ';}',
          ],
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.accentHover;
          },
          function (e) {
            return e.theme.colors.accent;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        v = Object(i.d)(function (e) {
          var t = Object(o.useState)(e.src),
            n = t[0],
            r = t[1],
            i = Object(o.useState)(e.src.length ? e.src[0] : ''),
            a = i[0],
            l = i[1];
          if (!e.src.length || !a || !n.length) return null;
          var s = function () {
              var e = n.slice(1);
              r(e), e.length && l(e[0]);
            },
            p = d(
              d({}, e),
              {},
              {
                src: a,
                onError: s,
                onLoad: function (e) {
                  120 === e.currentTarget.naturalWidth && s();
                },
              }
            );
          return c('img', Object(u.a)({}, p, { alt: e.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-3' })(
          ['border-radius:5px;', ' ', ''],
          function (e) {
            return 'large' === e.variant && Object(i.c)(['object-fit:cover;width:100%;']);
          },
          function (e) {
            return 'small' === e.variant && Object(i.c)(['object-fit:cover;height:100%;width:100%;']);
          }
        );
    },
    '3r9c': function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (o) {
        'object' === typeof window && (n = window);
      }
      e.exports = n;
    },
    '5wV8': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var o = n('wx14'),
        r = n('Ff2n'),
        i = n('q1tI'),
        a = n.n(i),
        u = n('vOnD'),
        l = a.a.createElement;
      function c(e) {
        var t = e.src,
          n = e.variant,
          i = void 0 === n ? 'square' : n,
          a = Object(r.a)(e, ['src', 'variant']);
        return t ? l(s, Object(o.a)({ variant: i, src: t }, a)) : l(d, { variant: i, as: 'div' });
      }
      var s = u.d.img.withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (e) {
            return (
              'square' === e.variant &&
              Object(u.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptop, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeMobile;
                }
              )
            );
          },
          function (e) {
            return (
              'squareSmall' === e.variant &&
              Object(u.c)(
                ['width:', ';height:', ';'],
                function (e) {
                  return e.theme.sizes.coverSizeSmall;
                },
                function (e) {
                  return e.theme.sizes.coverSizeSmall;
                }
              )
            );
          },
          function (e) {
            return (
              'squareHighlight' === e.variant &&
              Object(u.c)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlight;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.laptopS, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeHighlightMobile;
                }
              )
            );
          }
        ),
        d = Object(u.d)(s).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';'],
          function (e) {
            return e.theme.colors.secondary;
          }
        );
    },
    F6jV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var o = n('wx14'),
        r = n('q1tI'),
        i = n.n(r).a.createElement;
      function a(e) {
        return i(
          'svg',
          Object(o.a)({ width: '12', height: '16', viewBox: '0 0 11 14' }, e),
          i('path', {
            d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
            fill: e.fill,
          })
        );
      }
    },
    FBxL: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return _;
      });
      var o = n('q1tI'),
        r = n.n(o),
        i = n('vOnD'),
        a = n('Vt1p'),
        u = n('wx14'),
        l = r.a.createElement;
      function c(e) {
        return l(
          'svg',
          Object(u.a)({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
          l('path', {
            fill: e.fill,
            d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
          })
        );
      }
      var s = n('5wV8'),
        d = r.a.createElement;
      function p(e) {
        return d(
          'svg',
          Object(u.a)({ width: '11', height: '10', viewBox: '0 0 11 10' }, e),
          d('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
            fill: e.fill,
          })
        );
      }
      var f = r.a.createElement;
      function _(e) {
        var t = e.data,
          n = e.className,
          o = e.artistId,
          u = e.releaseId,
          l = Object(i.e)(),
          d = f(
            r.a.Fragment,
            null,
            f(
              h,
              null,
              t.platform
                ? f(y, { as: 'div' }, Object(a.a)(t.platform))
                : f(s.a, { src: t.avatar, alt: t.title, variant: 'squareSmall' }),
              f(v, null, f('h3', null, t.title))
            ),
            f(
              g,
              { className: 'icon' },
              t.isSuccess
                ? f(c, { height: '20px', fill: l.colors.success })
                : f(p, { height: '20px', fill: l.colors.primary })
            )
          );
        return t.title && t.url
          ? f(
              m,
              {
                className: ''
                  .concat(n || '', ' ')
                  .concat(t.highlight ? 'highlight' : '', ' ')
                  .concat(t.platform ? 'platform' : ''),
                href: t.url,
                target: '_blank',
                onClick: function () {
                  analytics.track('Traclink Click', { dsp: t.platform, artist_id: o, release_id: u });
                },
              },
              d
            )
          : null;
      }
      var m = i.d.a.withConfig({ displayName: 'simple-link__Link', componentId: 'fqic60-0' })(
          [
            'height:100px;border-radius:5px;background-color:',
            ';color:',
            ';width:100%;padding:20px;display:flex;align-items:center;justify-content:space-between;transition:background-color ',
            ';@media (max-width:',
            '){height:auto;}&:hover{background-color:',
            ';}&.highlight{background-color:',
            ';order:-1;grid-column:1/-1;}&.platform{background-color:',
            ';&:hover{background-color:',
            ';.icon{background-color:',
            ';}}}',
          ],
          function (e) {
            return e.theme.colors.itemBackground;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return e.theme.colors.itemBackgroundHover;
          },
          function (e) {
            return e.theme.colors.highlightBackground;
          },
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            return e.theme.colors.inputsBackground;
          },
          function (e) {
            return e.theme.colors.inputsBackground;
          }
        ),
        h = i.d.div.withConfig({ displayName: 'simple-link__Content', componentId: 'fqic60-1' })([
          'display:flex;align-items:center;justify-content:flex-start;width:100%;flex:0 1 auto;',
        ]),
        v = i.d.div.withConfig({ displayName: 'simple-link__Info', componentId: 'fqic60-2' })(
          [
            'flex-grow:0;padding:0px 20px;> h3{margin:0px;color:',
            ';font-size:16px;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}@media (max-width:',
            '){> h3{white-space:wrap;}}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptop, 'px');
          }
        ),
        g = i.d.button.withConfig({ displayName: 'simple-link__Icon', componentId: 'fqic60-3' })(
          [
            'background-color:',
            ';display:flex;width:',
            ';height:',
            ';justify-content:center;align-items:center;border-radius:50%;cursor:pointer;opacity:1;padding:0;flex:0 0 auto;transition:opacity ',
            ',background-color ',
            ';&:hover{opacity:0.75;> svg{fill:',
            ';}}',
          ],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            return e.theme.sizes.commonIconSize;
          },
          function (e) {
            return e.theme.sizes.commonIconSize;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.primaryHover;
          }
        ),
        y = Object(i.d)(g).withConfig({ displayName: 'simple-link__PlatformIcon', componentId: 'fqic60-4' })(
          ['background-color:', ';> svg{height:20px;fill:', ';}'],
          function (e) {
            return e.theme.colors.itemBackground;
          },
          function (e) {
            return e.theme.colors.primary;
          }
        );
    },
    HlzF: function (e, t, n) {
      (function (n) {
        var o;
        !(function () {
          'use strict';
          var r = function () {
            this.init();
          };
          r.prototype = {
            init: function () {
              var e = this || i;
              return (
                (e._counter = 1e3),
                (e._html5AudioPool = []),
                (e.html5PoolSize = 10),
                (e._codecs = {}),
                (e._howls = []),
                (e._muted = !1),
                (e._volume = 1),
                (e._canPlayEvent = 'canplaythrough'),
                (e._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null),
                (e.masterGain = null),
                (e.noAudio = !1),
                (e.usingWebAudio = !0),
                (e.autoSuspend = !0),
                (e.ctx = null),
                (e.autoUnlock = !0),
                e._setup(),
                e
              );
            },
            volume: function (e) {
              var t = this || i;
              if (((e = parseFloat(e)), t.ctx || f(), 'undefined' !== typeof e && e >= 0 && e <= 1)) {
                if (((t._volume = e), t._muted)) return t;
                t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
                for (var n = 0; n < t._howls.length; n++)
                  if (!t._howls[n]._webAudio)
                    for (var o = t._howls[n]._getSoundIds(), r = 0; r < o.length; r++) {
                      var a = t._howls[n]._soundById(o[r]);
                      a && a._node && (a._node.volume = a._volume * e);
                    }
                return t;
              }
              return t._volume;
            },
            mute: function (e) {
              var t = this || i;
              t.ctx || f(),
                (t._muted = e),
                t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, i.ctx.currentTime);
              for (var n = 0; n < t._howls.length; n++)
                if (!t._howls[n]._webAudio)
                  for (var o = t._howls[n]._getSoundIds(), r = 0; r < o.length; r++) {
                    var a = t._howls[n]._soundById(o[r]);
                    a && a._node && (a._node.muted = !!e || a._muted);
                  }
              return t;
            },
            stop: function () {
              for (var e = this || i, t = 0; t < e._howls.length; t++) e._howls[t].stop();
              return e;
            },
            unload: function () {
              for (var e = this || i, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
              return (
                e.usingWebAudio && e.ctx && 'undefined' !== typeof e.ctx.close && (e.ctx.close(), (e.ctx = null), f()),
                e
              );
            },
            codecs: function (e) {
              return (this || i)._codecs[e.replace(/^x-/, '')];
            },
            _setup: function () {
              var e = this || i;
              if (((e.state = (e.ctx && e.ctx.state) || 'suspended'), e._autoSuspend(), !e.usingWebAudio))
                if ('undefined' !== typeof Audio)
                  try {
                    'undefined' === typeof new Audio().oncanplaythrough && (e._canPlayEvent = 'canplay');
                  } catch (t) {
                    e.noAudio = !0;
                  }
                else e.noAudio = !0;
              try {
                new Audio().muted && (e.noAudio = !0);
              } catch (t) {}
              return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function () {
              var e = this || i,
                t = null;
              try {
                t = 'undefined' !== typeof Audio ? new Audio() : null;
              } catch (a) {
                return e;
              }
              if (!t || 'function' !== typeof t.canPlayType) return e;
              var n = t.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                o = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                r = o && parseInt(o[0].split('/')[1], 10) < 33;
              return (
                (e._codecs = {
                  mp3: !(r || (!n && !t.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                  mpeg: !!n,
                  opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                  ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                  oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                  wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType('audio/wav')).replace(/^no$/, ''),
                  aac: !!t.canPlayType('audio/aac;').replace(/^no$/, ''),
                  caf: !!t.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                  m4a: !!(
                    t.canPlayType('audio/x-m4a;') ||
                    t.canPlayType('audio/m4a;') ||
                    t.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  m4b: !!(
                    t.canPlayType('audio/x-m4b;') ||
                    t.canPlayType('audio/m4b;') ||
                    t.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  mp4: !!(
                    t.canPlayType('audio/x-mp4;') ||
                    t.canPlayType('audio/mp4;') ||
                    t.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                  webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                  dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                  flac: !!(t.canPlayType('audio/x-flac;') || t.canPlayType('audio/flac;')).replace(/^no$/, ''),
                }),
                e
              );
            },
            _unlockAudio: function () {
              var e = this || i;
              if (!e._audioUnlocked && e.ctx) {
                (e._audioUnlocked = !1),
                  (e.autoUnlock = !1),
                  e._mobileUnloaded || 44100 === e.ctx.sampleRate || ((e._mobileUnloaded = !0), e.unload()),
                  (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                var t = function (n) {
                  for (; e._html5AudioPool.length < e.html5PoolSize; )
                    try {
                      var o = new Audio();
                      (o._unlocked = !0), e._releaseHtml5Audio(o);
                    } catch (n) {
                      e.noAudio = !0;
                      break;
                    }
                  for (var r = 0; r < e._howls.length; r++)
                    if (!e._howls[r]._webAudio)
                      for (var i = e._howls[r]._getSoundIds(), a = 0; a < i.length; a++) {
                        var u = e._howls[r]._soundById(i[a]);
                        u && u._node && !u._node._unlocked && ((u._node._unlocked = !0), u._node.load());
                      }
                  e._autoResume();
                  var l = e.ctx.createBufferSource();
                  (l.buffer = e._scratchBuffer),
                    l.connect(e.ctx.destination),
                    'undefined' === typeof l.start ? l.noteOn(0) : l.start(0),
                    'function' === typeof e.ctx.resume && e.ctx.resume(),
                    (l.onended = function () {
                      l.disconnect(0),
                        (e._audioUnlocked = !0),
                        document.removeEventListener('touchstart', t, !0),
                        document.removeEventListener('touchend', t, !0),
                        document.removeEventListener('click', t, !0);
                      for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit('unlock');
                    });
                };
                return (
                  document.addEventListener('touchstart', t, !0),
                  document.addEventListener('touchend', t, !0),
                  document.addEventListener('click', t, !0),
                  e
                );
              }
            },
            _obtainHtml5Audio: function () {
              var e = this || i;
              if (e._html5AudioPool.length) return e._html5AudioPool.pop();
              var t = new Audio().play();
              return (
                t &&
                  'undefined' !== typeof Promise &&
                  (t instanceof Promise || 'function' === typeof t.then) &&
                  t.catch(function () {
                    console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                  }),
                new Audio()
              );
            },
            _releaseHtml5Audio: function (e) {
              var t = this || i;
              return e._unlocked && t._html5AudioPool.push(e), t;
            },
            _autoSuspend: function () {
              var e = this;
              if (e.autoSuspend && e.ctx && 'undefined' !== typeof e.ctx.suspend && i.usingWebAudio) {
                for (var t = 0; t < e._howls.length; t++)
                  if (e._howls[t]._webAudio)
                    for (var n = 0; n < e._howls[t]._sounds.length; n++) if (!e._howls[t]._sounds[n]._paused) return e;
                return (
                  e._suspendTimer && clearTimeout(e._suspendTimer),
                  (e._suspendTimer = setTimeout(function () {
                    if (e.autoSuspend) {
                      (e._suspendTimer = null), (e.state = 'suspending');
                      var t = function () {
                        (e.state = 'suspended'),
                          e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                      };
                      e.ctx.suspend().then(t, t);
                    }
                  }, 3e4)),
                  e
                );
              }
            },
            _autoResume: function () {
              var e = this;
              if (e.ctx && 'undefined' !== typeof e.ctx.resume && i.usingWebAudio)
                return (
                  'running' === e.state && 'interrupted' !== e.ctx.state && e._suspendTimer
                    ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                    : 'suspended' === e.state || ('running' === e.state && 'interrupted' === e.ctx.state)
                    ? (e.ctx.resume().then(function () {
                        e.state = 'running';
                        for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit('resume');
                      }),
                      e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                    : 'suspending' === e.state && (e._resumeAfterSuspend = !0),
                  e
                );
            },
          };
          var i = new r(),
            a = function (e) {
              e.src && 0 !== e.src.length
                ? this.init(e)
                : console.error('An array of source files must be passed with any new Howl.');
            };
          a.prototype = {
            init: function (e) {
              var t = this;
              return (
                i.ctx || f(),
                (t._autoplay = e.autoplay || !1),
                (t._format = 'string' !== typeof e.format ? e.format : [e.format]),
                (t._html5 = e.html5 || !1),
                (t._muted = e.mute || !1),
                (t._loop = e.loop || !1),
                (t._pool = e.pool || 5),
                (t._preload = ('boolean' !== typeof e.preload && 'metadata' !== e.preload) || e.preload),
                (t._rate = e.rate || 1),
                (t._sprite = e.sprite || {}),
                (t._src = 'string' !== typeof e.src ? e.src : [e.src]),
                (t._volume = void 0 !== e.volume ? e.volume : 1),
                (t._xhr = {
                  method: e.xhr && e.xhr.method ? e.xhr.method : 'GET',
                  headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                  withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
                }),
                (t._duration = 0),
                (t._state = 'unloaded'),
                (t._sounds = []),
                (t._endTimers = {}),
                (t._queue = []),
                (t._playLock = !1),
                (t._onend = e.onend ? [{ fn: e.onend }] : []),
                (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                (t._onload = e.onload ? [{ fn: e.onload }] : []),
                (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                (t._onresume = []),
                (t._webAudio = i.usingWebAudio && !t._html5),
                'undefined' !== typeof i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(),
                i._howls.push(t),
                t._autoplay &&
                  t._queue.push({
                    event: 'play',
                    action: function () {
                      t.play();
                    },
                  }),
                t._preload && 'none' !== t._preload && t.load(),
                t
              );
            },
            load: function () {
              var e = this,
                t = null;
              if (i.noAudio) e._emit('loaderror', null, 'No audio support.');
              else {
                'string' === typeof e._src && (e._src = [e._src]);
                for (var n = 0; n < e._src.length; n++) {
                  var o, r;
                  if (e._format && e._format[n]) o = e._format[n];
                  else {
                    if ('string' !== typeof (r = e._src[n])) {
                      e._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                      continue;
                    }
                    (o = /^data:audio\/([^;,]+);/i.exec(r)) || (o = /\.([^.]+)$/.exec(r.split('?', 1)[0])),
                      o && (o = o[1].toLowerCase());
                  }
                  if (
                    (o ||
                      console.warn(
                        'No file extension was found. Consider using the "format" property or specify an extension.'
                      ),
                    o && i.codecs(o))
                  ) {
                    t = e._src[n];
                    break;
                  }
                }
                if (t)
                  return (
                    (e._src = t),
                    (e._state = 'loading'),
                    'https:' === window.location.protocol &&
                      'http:' === t.slice(0, 5) &&
                      ((e._html5 = !0), (e._webAudio = !1)),
                    new u(e),
                    e._webAudio && c(e),
                    e
                  );
                e._emit('loaderror', null, 'No codec support for selected audio sources.');
              }
            },
            play: function (e, t) {
              var n = this,
                o = null;
              if ('number' === typeof e) (o = e), (e = null);
              else {
                if ('string' === typeof e && 'loaded' === n._state && !n._sprite[e]) return null;
                if ('undefined' === typeof e && ((e = '__default'), !n._playLock)) {
                  for (var r = 0, a = 0; a < n._sounds.length; a++)
                    n._sounds[a]._paused && !n._sounds[a]._ended && (r++, (o = n._sounds[a]._id));
                  1 === r ? (e = null) : (o = null);
                }
              }
              var u = o ? n._soundById(o) : n._inactiveSound();
              if (!u) return null;
              if ((o && !e && (e = u._sprite || '__default'), 'loaded' !== n._state)) {
                (u._sprite = e), (u._ended = !1);
                var l = u._id;
                return (
                  n._queue.push({
                    event: 'play',
                    action: function () {
                      n.play(l);
                    },
                  }),
                  l
                );
              }
              if (o && !u._paused) return t || n._loadQueue('play'), u._id;
              n._webAudio && i._autoResume();
              var c = Math.max(0, u._seek > 0 ? u._seek : n._sprite[e][0] / 1e3),
                s = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - c),
                d = (1e3 * s) / Math.abs(u._rate),
                p = n._sprite[e][0] / 1e3,
                f = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
              (u._sprite = e), (u._ended = !1);
              var _ = function () {
                (u._paused = !1),
                  (u._seek = c),
                  (u._start = p),
                  (u._stop = f),
                  (u._loop = !(!u._loop && !n._sprite[e][2]));
              };
              if (!(c >= f)) {
                var m = u._node;
                if (n._webAudio) {
                  var h = function () {
                    (n._playLock = !1), _(), n._refreshBuffer(u);
                    var e = u._muted || n._muted ? 0 : u._volume;
                    m.gain.setValueAtTime(e, i.ctx.currentTime),
                      (u._playStart = i.ctx.currentTime),
                      'undefined' === typeof m.bufferSource.start
                        ? u._loop
                          ? m.bufferSource.noteGrainOn(0, c, 86400)
                          : m.bufferSource.noteGrainOn(0, c, s)
                        : u._loop
                        ? m.bufferSource.start(0, c, 86400)
                        : m.bufferSource.start(0, c, s),
                      d !== 1 / 0 && (n._endTimers[u._id] = setTimeout(n._ended.bind(n, u), d)),
                      t ||
                        setTimeout(function () {
                          n._emit('play', u._id), n._loadQueue();
                        }, 0);
                  };
                  'running' === i.state && 'interrupted' !== i.ctx.state
                    ? h()
                    : ((n._playLock = !0), n.once('resume', h), n._clearTimer(u._id));
                } else {
                  var v = function () {
                    (m.currentTime = c),
                      (m.muted = u._muted || n._muted || i._muted || m.muted),
                      (m.volume = u._volume * i.volume()),
                      (m.playbackRate = u._rate);
                    try {
                      var o = m.play();
                      if (
                        (o && 'undefined' !== typeof Promise && (o instanceof Promise || 'function' === typeof o.then)
                          ? ((n._playLock = !0),
                            _(),
                            o
                              .then(function () {
                                (n._playLock = !1), (m._unlocked = !0), t || (n._emit('play', u._id), n._loadQueue());
                              })
                              .catch(function () {
                                (n._playLock = !1),
                                  n._emit(
                                    'playerror',
                                    u._id,
                                    'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                                  ),
                                  (u._ended = !0),
                                  (u._paused = !0);
                              }))
                          : t || ((n._playLock = !1), _(), n._emit('play', u._id), n._loadQueue()),
                        (m.playbackRate = u._rate),
                        m.paused)
                      )
                        return void n._emit(
                          'playerror',
                          u._id,
                          'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                        );
                      '__default' !== e || u._loop
                        ? (n._endTimers[u._id] = setTimeout(n._ended.bind(n, u), d))
                        : ((n._endTimers[u._id] = function () {
                            n._ended(u), m.removeEventListener('ended', n._endTimers[u._id], !1);
                          }),
                          m.addEventListener('ended', n._endTimers[u._id], !1));
                    } catch (r) {
                      n._emit('playerror', u._id, r);
                    }
                  };
                  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === m.src &&
                    ((m.src = n._src), m.load());
                  var g = (window && window.ejecta) || (!m.readyState && i._navigator.isCocoonJS);
                  if (m.readyState >= 3 || g) v();
                  else {
                    n._playLock = !0;
                    var y = function () {
                      v(), m.removeEventListener(i._canPlayEvent, y, !1);
                    };
                    m.addEventListener(i._canPlayEvent, y, !1), n._clearTimer(u._id);
                  }
                }
                return u._id;
              }
              n._ended(u);
            },
            pause: function (e) {
              var t = this;
              if ('loaded' !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: 'pause',
                    action: function () {
                      t.pause(e);
                    },
                  }),
                  t
                );
              for (var n = t._getSoundIds(e), o = 0; o < n.length; o++) {
                t._clearTimer(n[o]);
                var r = t._soundById(n[o]);
                if (
                  r &&
                  !r._paused &&
                  ((r._seek = t.seek(n[o])), (r._rateSeek = 0), (r._paused = !0), t._stopFade(n[o]), r._node)
                )
                  if (t._webAudio) {
                    if (!r._node.bufferSource) continue;
                    'undefined' === typeof r._node.bufferSource.stop
                      ? r._node.bufferSource.noteOff(0)
                      : r._node.bufferSource.stop(0),
                      t._cleanBuffer(r._node);
                  } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
                arguments[1] || t._emit('pause', r ? r._id : null);
              }
              return t;
            },
            stop: function (e, t) {
              var n = this;
              if ('loaded' !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: 'stop',
                    action: function () {
                      n.stop(e);
                    },
                  }),
                  n
                );
              for (var o = n._getSoundIds(e), r = 0; r < o.length; r++) {
                n._clearTimer(o[r]);
                var i = n._soundById(o[r]);
                i &&
                  ((i._seek = i._start || 0),
                  (i._rateSeek = 0),
                  (i._paused = !0),
                  (i._ended = !0),
                  n._stopFade(o[r]),
                  i._node &&
                    (n._webAudio
                      ? i._node.bufferSource &&
                        ('undefined' === typeof i._node.bufferSource.stop
                          ? i._node.bufferSource.noteOff(0)
                          : i._node.bufferSource.stop(0),
                        n._cleanBuffer(i._node))
                      : (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                        ((i._node.currentTime = i._start || 0),
                        i._node.pause(),
                        i._node.duration === 1 / 0 && n._clearSound(i._node))),
                  t || n._emit('stop', i._id));
              }
              return n;
            },
            mute: function (e, t) {
              var n = this;
              if ('loaded' !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: 'mute',
                    action: function () {
                      n.mute(e, t);
                    },
                  }),
                  n
                );
              if ('undefined' === typeof t) {
                if ('boolean' !== typeof e) return n._muted;
                n._muted = e;
              }
              for (var o = n._getSoundIds(t), r = 0; r < o.length; r++) {
                var a = n._soundById(o[r]);
                a &&
                  ((a._muted = e),
                  a._interval && n._stopFade(a._id),
                  n._webAudio && a._node
                    ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime)
                    : a._node && (a._node.muted = !!i._muted || e),
                  n._emit('mute', a._id));
              }
              return n;
            },
            volume: function () {
              var e,
                t,
                n,
                o = this,
                r = arguments;
              if (0 === r.length) return o._volume;
              if (1 === r.length || (2 === r.length && 'undefined' === typeof r[1])) {
                var a = o._getSoundIds(),
                  u = a.indexOf(r[0]);
                u >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
              } else r.length >= 2 && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
              if (!('undefined' !== typeof e && e >= 0 && e <= 1))
                return (n = t ? o._soundById(t) : o._sounds[0]) ? n._volume : 0;
              if ('loaded' !== o._state || o._playLock)
                return (
                  o._queue.push({
                    event: 'volume',
                    action: function () {
                      o.volume.apply(o, r);
                    },
                  }),
                  o
                );
              'undefined' === typeof t && (o._volume = e), (t = o._getSoundIds(t));
              for (var l = 0; l < t.length; l++)
                (n = o._soundById(t[l])) &&
                  ((n._volume = e),
                  r[2] || o._stopFade(t[l]),
                  o._webAudio && n._node && !n._muted
                    ? n._node.gain.setValueAtTime(e, i.ctx.currentTime)
                    : n._node && !n._muted && (n._node.volume = e * i.volume()),
                  o._emit('volume', n._id));
              return o;
            },
            fade: function (e, t, n, o) {
              var r = this;
              if ('loaded' !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: 'fade',
                    action: function () {
                      r.fade(e, t, n, o);
                    },
                  }),
                  r
                );
              (e = Math.min(Math.max(0, parseFloat(e)), 1)),
                (t = Math.min(Math.max(0, parseFloat(t)), 1)),
                (n = parseFloat(n)),
                r.volume(e, o);
              for (var a = r._getSoundIds(o), u = 0; u < a.length; u++) {
                var l = r._soundById(a[u]);
                if (l) {
                  if ((o || r._stopFade(a[u]), r._webAudio && !l._muted)) {
                    var c = i.ctx.currentTime,
                      s = c + n / 1e3;
                    (l._volume = e), l._node.gain.setValueAtTime(e, c), l._node.gain.linearRampToValueAtTime(t, s);
                  }
                  r._startFadeInterval(l, e, t, n, a[u], 'undefined' === typeof o);
                }
              }
              return r;
            },
            _startFadeInterval: function (e, t, n, o, r, i) {
              var a = this,
                u = t,
                l = n - t,
                c = Math.abs(l / 0.01),
                s = Math.max(4, c > 0 ? o / c : o),
                d = Date.now();
              (e._fadeTo = n),
                (e._interval = setInterval(function () {
                  var r = (Date.now() - d) / o;
                  (d = Date.now()),
                    (u += l * r),
                    (u = Math.round(100 * u) / 100),
                    (u = l < 0 ? Math.max(n, u) : Math.min(n, u)),
                    a._webAudio ? (e._volume = u) : a.volume(u, e._id, !0),
                    i && (a._volume = u),
                    ((n < t && u <= n) || (n > t && u >= n)) &&
                      (clearInterval(e._interval),
                      (e._interval = null),
                      (e._fadeTo = null),
                      a.volume(n, e._id),
                      a._emit('fade', e._id));
                }, s));
            },
            _stopFade: function (e) {
              var t = this,
                n = t._soundById(e);
              return (
                n &&
                  n._interval &&
                  (t._webAudio && n._node.gain.cancelScheduledValues(i.ctx.currentTime),
                  clearInterval(n._interval),
                  (n._interval = null),
                  t.volume(n._fadeTo, e),
                  (n._fadeTo = null),
                  t._emit('fade', e)),
                t
              );
            },
            loop: function () {
              var e,
                t,
                n,
                o = this,
                r = arguments;
              if (0 === r.length) return o._loop;
              if (1 === r.length) {
                if ('boolean' !== typeof r[0]) return !!(n = o._soundById(parseInt(r[0], 10))) && n._loop;
                (e = r[0]), (o._loop = e);
              } else 2 === r.length && ((e = r[0]), (t = parseInt(r[1], 10)));
              for (var i = o._getSoundIds(t), a = 0; a < i.length; a++)
                (n = o._soundById(i[a])) &&
                  ((n._loop = e),
                  o._webAudio &&
                    n._node &&
                    n._node.bufferSource &&
                    ((n._node.bufferSource.loop = e),
                    e && ((n._node.bufferSource.loopStart = n._start || 0), (n._node.bufferSource.loopEnd = n._stop))));
              return o;
            },
            rate: function () {
              var e,
                t,
                n,
                o = this,
                r = arguments;
              if (0 === r.length) t = o._sounds[0]._id;
              else if (1 === r.length) {
                var a = o._getSoundIds(),
                  u = a.indexOf(r[0]);
                u >= 0 ? (t = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
              } else 2 === r.length && ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
              if ('number' !== typeof e) return (n = o._soundById(t)) ? n._rate : o._rate;
              if ('loaded' !== o._state || o._playLock)
                return (
                  o._queue.push({
                    event: 'rate',
                    action: function () {
                      o.rate.apply(o, r);
                    },
                  }),
                  o
                );
              'undefined' === typeof t && (o._rate = e), (t = o._getSoundIds(t));
              for (var l = 0; l < t.length; l++)
                if ((n = o._soundById(t[l]))) {
                  o.playing(t[l]) &&
                    ((n._rateSeek = o.seek(t[l])), (n._playStart = o._webAudio ? i.ctx.currentTime : n._playStart)),
                    (n._rate = e),
                    o._webAudio && n._node && n._node.bufferSource
                      ? n._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime)
                      : n._node && (n._node.playbackRate = e);
                  var c = o.seek(t[l]),
                    s = (o._sprite[n._sprite][0] + o._sprite[n._sprite][1]) / 1e3 - c,
                    d = (1e3 * s) / Math.abs(n._rate);
                  (!o._endTimers[t[l]] && n._paused) ||
                    (o._clearTimer(t[l]), (o._endTimers[t[l]] = setTimeout(o._ended.bind(o, n), d))),
                    o._emit('rate', n._id);
                }
              return o;
            },
            seek: function () {
              var e,
                t,
                n = this,
                o = arguments;
              if (0 === o.length) t = n._sounds[0]._id;
              else if (1 === o.length) {
                var r = n._getSoundIds(),
                  a = r.indexOf(o[0]);
                a >= 0
                  ? (t = parseInt(o[0], 10))
                  : n._sounds.length && ((t = n._sounds[0]._id), (e = parseFloat(o[0])));
              } else 2 === o.length && ((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
              if ('undefined' === typeof t) return n;
              if ('number' === typeof e && ('loaded' !== n._state || n._playLock))
                return (
                  n._queue.push({
                    event: 'seek',
                    action: function () {
                      n.seek.apply(n, o);
                    },
                  }),
                  n
                );
              var u = n._soundById(t);
              if (u) {
                if (!('number' === typeof e && e >= 0)) {
                  if (n._webAudio) {
                    var l = n.playing(t) ? i.ctx.currentTime - u._playStart : 0,
                      c = u._rateSeek ? u._rateSeek - u._seek : 0;
                    return u._seek + (c + l * Math.abs(u._rate));
                  }
                  return u._node.currentTime;
                }
                var s = n.playing(t);
                s && n.pause(t, !0),
                  (u._seek = e),
                  (u._ended = !1),
                  n._clearTimer(t),
                  n._webAudio || !u._node || isNaN(u._node.duration) || (u._node.currentTime = e);
                var d = function () {
                  n._emit('seek', t), s && n.play(t, !0);
                };
                if (s && !n._webAudio) {
                  var p = function () {
                    n._playLock ? setTimeout(p, 0) : d();
                  };
                  setTimeout(p, 0);
                } else d();
              }
              return n;
            },
            playing: function (e) {
              var t = this;
              if ('number' === typeof e) {
                var n = t._soundById(e);
                return !!n && !n._paused;
              }
              for (var o = 0; o < t._sounds.length; o++) if (!t._sounds[o]._paused) return !0;
              return !1;
            },
            duration: function (e) {
              var t = this,
                n = t._duration,
                o = t._soundById(e);
              return o && (n = t._sprite[o._sprite][1] / 1e3), n;
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
                t[n]._paused || e.stop(t[n]._id),
                  e._webAudio ||
                    (e._clearSound(t[n]._node),
                    t[n]._node.removeEventListener('error', t[n]._errorFn, !1),
                    t[n]._node.removeEventListener(i._canPlayEvent, t[n]._loadFn, !1),
                    t[n]._node.removeEventListener('ended', t[n]._endFn, !1),
                    i._releaseHtml5Audio(t[n]._node)),
                  delete t[n]._node,
                  e._clearTimer(t[n]._id);
              var o = i._howls.indexOf(e);
              o >= 0 && i._howls.splice(o, 1);
              var r = !0;
              for (n = 0; n < i._howls.length; n++)
                if (i._howls[n]._src === e._src || e._src.indexOf(i._howls[n]._src) >= 0) {
                  r = !1;
                  break;
                }
              return (
                l && r && delete l[e._src],
                (i.noAudio = !1),
                (e._state = 'unloaded'),
                (e._sounds = []),
                (e = null),
                null
              );
            },
            on: function (e, t, n, o) {
              var r = this['_on' + e];
              return 'function' === typeof t && r.push(o ? { id: n, fn: t, once: o } : { id: n, fn: t }), this;
            },
            off: function (e, t, n) {
              var o = this,
                r = o['_on' + e],
                i = 0;
              if (('number' === typeof t && ((n = t), (t = null)), t || n))
                for (i = 0; i < r.length; i++) {
                  var a = n === r[i].id;
                  if ((t === r[i].fn && a) || (!t && a)) {
                    r.splice(i, 1);
                    break;
                  }
                }
              else if (e) o['_on' + e] = [];
              else {
                var u = Object.keys(o);
                for (i = 0; i < u.length; i++) 0 === u[i].indexOf('_on') && Array.isArray(o[u[i]]) && (o[u[i]] = []);
              }
              return o;
            },
            once: function (e, t, n) {
              return this.on(e, t, n, 1), this;
            },
            _emit: function (e, t, n) {
              for (var o = this, r = o['_on' + e], i = r.length - 1; i >= 0; i--)
                (r[i].id && r[i].id !== t && 'load' !== e) ||
                  (setTimeout(
                    function (e) {
                      e.call(this, t, n);
                    }.bind(o, r[i].fn),
                    0
                  ),
                  r[i].once && o.off(e, r[i].fn, r[i].id));
              return o._loadQueue(e), o;
            },
            _loadQueue: function (e) {
              var t = this;
              if (t._queue.length > 0) {
                var n = t._queue[0];
                n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action();
              }
              return t;
            },
            _ended: function (e) {
              var t = this,
                n = e._sprite;
              if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
                return setTimeout(t._ended.bind(t, e), 100), t;
              var o = !(!e._loop && !t._sprite[n][2]);
              if ((t._emit('end', e._id), !t._webAudio && o && t.stop(e._id, !0).play(e._id), t._webAudio && o)) {
                t._emit('play', e._id),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  (e._playStart = i.ctx.currentTime);
                var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), r);
              }
              return (
                t._webAudio &&
                  !o &&
                  ((e._paused = !0),
                  (e._ended = !0),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  t._clearTimer(e._id),
                  t._cleanBuffer(e._node),
                  i._autoSuspend()),
                t._webAudio || o || t.stop(e._id, !0),
                t
              );
            },
            _clearTimer: function (e) {
              var t = this;
              if (t._endTimers[e]) {
                if ('function' !== typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
                else {
                  var n = t._soundById(e);
                  n && n._node && n._node.removeEventListener('ended', t._endTimers[e], !1);
                }
                delete t._endTimers[e];
              }
              return t;
            },
            _soundById: function (e) {
              for (var t = this, n = 0; n < t._sounds.length; n++) if (e === t._sounds[n]._id) return t._sounds[n];
              return null;
            },
            _inactiveSound: function () {
              var e = this;
              e._drain();
              for (var t = 0; t < e._sounds.length; t++) if (e._sounds[t]._ended) return e._sounds[t].reset();
              return new u(e);
            },
            _drain: function () {
              var e = this,
                t = e._pool,
                n = 0,
                o = 0;
              if (!(e._sounds.length < t)) {
                for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && n++;
                for (o = e._sounds.length - 1; o >= 0; o--) {
                  if (n <= t) return;
                  e._sounds[o]._ended &&
                    (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0),
                    e._sounds.splice(o, 1),
                    n--);
                }
              }
            },
            _getSoundIds: function (e) {
              if ('undefined' === typeof e) {
                for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id);
                return t;
              }
              return [e];
            },
            _refreshBuffer: function (e) {
              return (
                (e._node.bufferSource = i.ctx.createBufferSource()),
                (e._node.bufferSource.buffer = l[this._src]),
                e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                (e._node.bufferSource.loop = e._loop),
                e._loop &&
                  ((e._node.bufferSource.loopStart = e._start || 0), (e._node.bufferSource.loopEnd = e._stop || 0)),
                e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime),
                this
              );
            },
            _cleanBuffer: function (e) {
              var t = i._navigator && i._navigator.vendor.indexOf('Apple') >= 0;
              if (
                i._scratchBuffer &&
                e.bufferSource &&
                ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
              )
                try {
                  e.bufferSource.buffer = i._scratchBuffer;
                } catch (n) {}
              return (e.bufferSource = null), this;
            },
            _clearSound: function (e) {
              /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) ||
                (e.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            },
          };
          var u = function (e) {
            (this._parent = e), this.init();
          };
          u.prototype = {
            init: function () {
              var e = this,
                t = e._parent;
              return (
                (e._muted = t._muted),
                (e._loop = t._loop),
                (e._volume = t._volume),
                (e._rate = t._rate),
                (e._seek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++i._counter),
                t._sounds.push(e),
                e.create(),
                e
              );
            },
            create: function () {
              var e = this,
                t = e._parent,
                n = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
              return (
                t._webAudio
                  ? ((e._node = 'undefined' === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain()),
                    e._node.gain.setValueAtTime(n, i.ctx.currentTime),
                    (e._node.paused = !0),
                    e._node.connect(i.masterGain))
                  : i.noAudio ||
                    ((e._node = i._obtainHtml5Audio()),
                    (e._errorFn = e._errorListener.bind(e)),
                    e._node.addEventListener('error', e._errorFn, !1),
                    (e._loadFn = e._loadListener.bind(e)),
                    e._node.addEventListener(i._canPlayEvent, e._loadFn, !1),
                    (e._endFn = e._endListener.bind(e)),
                    e._node.addEventListener('ended', e._endFn, !1),
                    (e._node.src = t._src),
                    (e._node.preload = !0 === t._preload ? 'auto' : t._preload),
                    (e._node.volume = n * i.volume()),
                    e._node.load()),
                e
              );
            },
            reset: function () {
              var e = this,
                t = e._parent;
              return (
                (e._muted = t._muted),
                (e._loop = t._loop),
                (e._volume = t._volume),
                (e._rate = t._rate),
                (e._seek = 0),
                (e._rateSeek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++i._counter),
                e
              );
            },
            _errorListener: function () {
              var e = this;
              e._parent._emit('loaderror', e._id, e._node.error ? e._node.error.code : 0),
                e._node.removeEventListener('error', e._errorFn, !1);
            },
            _loadListener: function () {
              var e = this,
                t = e._parent;
              (t._duration = Math.ceil(10 * e._node.duration) / 10),
                0 === Object.keys(t._sprite).length && (t._sprite = { __default: [0, 1e3 * t._duration] }),
                'loaded' !== t._state && ((t._state = 'loaded'), t._emit('load'), t._loadQueue()),
                e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1);
            },
            _endListener: function () {
              var e = this,
                t = e._parent;
              t._duration === 1 / 0 &&
                ((t._duration = Math.ceil(10 * e._node.duration) / 10),
                t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1e3 * t._duration),
                t._ended(e)),
                e._node.removeEventListener('ended', e._endFn, !1);
            },
          };
          var l = {},
            c = function (e) {
              var t = e._src;
              if (l[t]) return (e._duration = l[t].duration), void p(e);
              if (/^data:[^;]+;base64,/.test(t)) {
                for (var n = atob(t.split(',')[1]), o = new Uint8Array(n.length), r = 0; r < n.length; ++r)
                  o[r] = n.charCodeAt(r);
                d(o.buffer, e);
              } else {
                var i = new XMLHttpRequest();
                i.open(e._xhr.method, t, !0),
                  (i.withCredentials = e._xhr.withCredentials),
                  (i.responseType = 'arraybuffer'),
                  e._xhr.headers &&
                    Object.keys(e._xhr.headers).forEach(function (t) {
                      i.setRequestHeader(t, e._xhr.headers[t]);
                    }),
                  (i.onload = function () {
                    var t = (i.status + '')[0];
                    '0' === t || '2' === t || '3' === t
                      ? d(i.response, e)
                      : e._emit('loaderror', null, 'Failed loading audio file with status: ' + i.status + '.');
                  }),
                  (i.onerror = function () {
                    e._webAudio && ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete l[t], e.load());
                  }),
                  s(i);
              }
            },
            s = function (e) {
              try {
                e.send();
              } catch (t) {
                e.onerror();
              }
            },
            d = function (e, t) {
              var n = function () {
                  t._emit('loaderror', null, 'Decoding audio data failed.');
                },
                o = function (e) {
                  e && t._sounds.length > 0 ? ((l[t._src] = e), p(t, e)) : n();
                };
              'undefined' !== typeof Promise && 1 === i.ctx.decodeAudioData.length
                ? i.ctx.decodeAudioData(e).then(o).catch(n)
                : i.ctx.decodeAudioData(e, o, n);
            },
            p = function (e, t) {
              t && !e._duration && (e._duration = t.duration),
                0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }),
                'loaded' !== e._state && ((e._state = 'loaded'), e._emit('load'), e._loadQueue());
            },
            f = function () {
              if (i.usingWebAudio) {
                try {
                  'undefined' !== typeof AudioContext
                    ? (i.ctx = new AudioContext())
                    : 'undefined' !== typeof webkitAudioContext
                    ? (i.ctx = new webkitAudioContext())
                    : (i.usingWebAudio = !1);
                } catch (r) {
                  i.usingWebAudio = !1;
                }
                i.ctx || (i.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
                  t = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                  n = t ? parseInt(t[1], 10) : null;
                if (e && n && n < 9) {
                  var o = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                  i._navigator && !o && (i.usingWebAudio = !1);
                }
                i.usingWebAudio &&
                  ((i.masterGain =
                    'undefined' === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain()),
                  i.masterGain.gain.setValueAtTime(i._muted ? 0 : i._volume, i.ctx.currentTime),
                  i.masterGain.connect(i.ctx.destination)),
                  i._setup();
              }
            };
          void 0 ===
            (o = function () {
              return { Howler: i, Howl: a };
            }.apply(t, [])) || (e.exports = o),
            (t.Howler = i),
            (t.Howl = a),
            'undefined' !== typeof n
              ? ((n.HowlerGlobal = r), (n.Howler = i), (n.Howl = a), (n.Sound = u))
              : 'undefined' !== typeof window &&
                ((window.HowlerGlobal = r), (window.Howler = i), (window.Howl = a), (window.Sound = u));
        })(),
          (function () {
            'use strict';
            var e;
            (HowlerGlobal.prototype._pos = [0, 0, 0]),
              (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
              (HowlerGlobal.prototype.stereo = function (e) {
                var t = this;
                if (!t.ctx || !t.ctx.listener) return t;
                for (var n = t._howls.length - 1; n >= 0; n--) t._howls[n].stereo(e);
                return t;
              }),
              (HowlerGlobal.prototype.pos = function (e, t, n) {
                var o = this;
                return o.ctx && o.ctx.listener
                  ? ((t = 'number' !== typeof t ? o._pos[1] : t),
                    (n = 'number' !== typeof n ? o._pos[2] : n),
                    'number' !== typeof e
                      ? o._pos
                      : ((o._pos = [e, t, n]),
                        'undefined' !== typeof o.ctx.listener.positionX
                          ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, 0.1),
                            o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, 0.1),
                            o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, 0.1))
                          : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]),
                        o))
                  : o;
              }),
              (HowlerGlobal.prototype.orientation = function (e, t, n, o, r, i) {
                var a = this;
                if (!a.ctx || !a.ctx.listener) return a;
                var u = a._orientation;
                return (
                  (t = 'number' !== typeof t ? u[1] : t),
                  (n = 'number' !== typeof n ? u[2] : n),
                  (o = 'number' !== typeof o ? u[3] : o),
                  (r = 'number' !== typeof r ? u[4] : r),
                  (i = 'number' !== typeof i ? u[5] : i),
                  'number' !== typeof e
                    ? u
                    : ((a._orientation = [e, t, n, o, r, i]),
                      'undefined' !== typeof a.ctx.listener.forwardX
                        ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1),
                          a.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, 0.1),
                          a.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, 0.1),
                          a.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, 0.1),
                          a.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, 0.1),
                          a.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, 0.1))
                        : a.ctx.listener.setOrientation(e, t, n, o, r, i),
                      a)
                );
              }),
              (Howl.prototype.init =
                ((e = Howl.prototype.init),
                function (t) {
                  var n = this;
                  return (
                    (n._orientation = t.orientation || [1, 0, 0]),
                    (n._stereo = t.stereo || null),
                    (n._pos = t.pos || null),
                    (n._pannerAttr = {
                      coneInnerAngle: 'undefined' !== typeof t.coneInnerAngle ? t.coneInnerAngle : 360,
                      coneOuterAngle: 'undefined' !== typeof t.coneOuterAngle ? t.coneOuterAngle : 360,
                      coneOuterGain: 'undefined' !== typeof t.coneOuterGain ? t.coneOuterGain : 0,
                      distanceModel: 'undefined' !== typeof t.distanceModel ? t.distanceModel : 'inverse',
                      maxDistance: 'undefined' !== typeof t.maxDistance ? t.maxDistance : 1e4,
                      panningModel: 'undefined' !== typeof t.panningModel ? t.panningModel : 'HRTF',
                      refDistance: 'undefined' !== typeof t.refDistance ? t.refDistance : 1,
                      rolloffFactor: 'undefined' !== typeof t.rolloffFactor ? t.rolloffFactor : 1,
                    }),
                    (n._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
                    (n._onpos = t.onpos ? [{ fn: t.onpos }] : []),
                    (n._onorientation = t.onorientation ? [{ fn: t.onorientation }] : []),
                    e.call(this, t)
                  );
                })),
              (Howl.prototype.stereo = function (e, n) {
                var o = this;
                if (!o._webAudio) return o;
                if ('loaded' !== o._state)
                  return (
                    o._queue.push({
                      event: 'stereo',
                      action: function () {
                        o.stereo(e, n);
                      },
                    }),
                    o
                  );
                var r = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
                if ('undefined' === typeof n) {
                  if ('number' !== typeof e) return o._stereo;
                  (o._stereo = e), (o._pos = [e, 0, 0]);
                }
                for (var i = o._getSoundIds(n), a = 0; a < i.length; a++) {
                  var u = o._soundById(i[a]);
                  if (u) {
                    if ('number' !== typeof e) return u._stereo;
                    (u._stereo = e),
                      (u._pos = [e, 0, 0]),
                      u._node &&
                        ((u._pannerAttr.panningModel = 'equalpower'),
                        (u._panner && u._panner.pan) || t(u, r),
                        'spatial' === r
                          ? 'undefined' !== typeof u._panner.positionX
                            ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                              u._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                              u._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime))
                            : u._panner.setPosition(e, 0, 0)
                          : u._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
                      o._emit('stereo', u._id);
                  }
                }
                return o;
              }),
              (Howl.prototype.pos = function (e, n, o, r) {
                var i = this;
                if (!i._webAudio) return i;
                if ('loaded' !== i._state)
                  return (
                    i._queue.push({
                      event: 'pos',
                      action: function () {
                        i.pos(e, n, o, r);
                      },
                    }),
                    i
                  );
                if (
                  ((n = 'number' !== typeof n ? 0 : n),
                  (o = 'number' !== typeof o ? -0.5 : o),
                  'undefined' === typeof r)
                ) {
                  if ('number' !== typeof e) return i._pos;
                  i._pos = [e, n, o];
                }
                for (var a = i._getSoundIds(r), u = 0; u < a.length; u++) {
                  var l = i._soundById(a[u]);
                  if (l) {
                    if ('number' !== typeof e) return l._pos;
                    (l._pos = [e, n, o]),
                      l._node &&
                        ((l._panner && !l._panner.pan) || t(l, 'spatial'),
                        'undefined' !== typeof l._panner.positionX
                          ? (l._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                            l._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime),
                            l._panner.positionZ.setValueAtTime(o, Howler.ctx.currentTime))
                          : l._panner.setPosition(e, n, o)),
                      i._emit('pos', l._id);
                  }
                }
                return i;
              }),
              (Howl.prototype.orientation = function (e, n, o, r) {
                var i = this;
                if (!i._webAudio) return i;
                if ('loaded' !== i._state)
                  return (
                    i._queue.push({
                      event: 'orientation',
                      action: function () {
                        i.orientation(e, n, o, r);
                      },
                    }),
                    i
                  );
                if (
                  ((n = 'number' !== typeof n ? i._orientation[1] : n),
                  (o = 'number' !== typeof o ? i._orientation[2] : o),
                  'undefined' === typeof r)
                ) {
                  if ('number' !== typeof e) return i._orientation;
                  i._orientation = [e, n, o];
                }
                for (var a = i._getSoundIds(r), u = 0; u < a.length; u++) {
                  var l = i._soundById(a[u]);
                  if (l) {
                    if ('number' !== typeof e) return l._orientation;
                    (l._orientation = [e, n, o]),
                      l._node &&
                        (l._panner || (l._pos || (l._pos = i._pos || [0, 0, -0.5]), t(l, 'spatial')),
                        'undefined' !== typeof l._panner.orientationX
                          ? (l._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
                            l._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime),
                            l._panner.orientationZ.setValueAtTime(o, Howler.ctx.currentTime))
                          : l._panner.setOrientation(e, n, o)),
                      i._emit('orientation', l._id);
                  }
                }
                return i;
              }),
              (Howl.prototype.pannerAttr = function () {
                var e,
                  n,
                  o,
                  r = this,
                  i = arguments;
                if (!r._webAudio) return r;
                if (0 === i.length) return r._pannerAttr;
                if (1 === i.length) {
                  if ('object' !== typeof i[0])
                    return (o = r._soundById(parseInt(i[0], 10))) ? o._pannerAttr : r._pannerAttr;
                  (e = i[0]),
                    'undefined' === typeof n &&
                      (e.pannerAttr ||
                        (e.pannerAttr = {
                          coneInnerAngle: e.coneInnerAngle,
                          coneOuterAngle: e.coneOuterAngle,
                          coneOuterGain: e.coneOuterGain,
                          distanceModel: e.distanceModel,
                          maxDistance: e.maxDistance,
                          refDistance: e.refDistance,
                          rolloffFactor: e.rolloffFactor,
                          panningModel: e.panningModel,
                        }),
                      (r._pannerAttr = {
                        coneInnerAngle:
                          'undefined' !== typeof e.pannerAttr.coneInnerAngle
                            ? e.pannerAttr.coneInnerAngle
                            : r._coneInnerAngle,
                        coneOuterAngle:
                          'undefined' !== typeof e.pannerAttr.coneOuterAngle
                            ? e.pannerAttr.coneOuterAngle
                            : r._coneOuterAngle,
                        coneOuterGain:
                          'undefined' !== typeof e.pannerAttr.coneOuterGain
                            ? e.pannerAttr.coneOuterGain
                            : r._coneOuterGain,
                        distanceModel:
                          'undefined' !== typeof e.pannerAttr.distanceModel
                            ? e.pannerAttr.distanceModel
                            : r._distanceModel,
                        maxDistance:
                          'undefined' !== typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
                        refDistance:
                          'undefined' !== typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
                        rolloffFactor:
                          'undefined' !== typeof e.pannerAttr.rolloffFactor
                            ? e.pannerAttr.rolloffFactor
                            : r._rolloffFactor,
                        panningModel:
                          'undefined' !== typeof e.pannerAttr.panningModel
                            ? e.pannerAttr.panningModel
                            : r._panningModel,
                      }));
                } else 2 === i.length && ((e = i[0]), (n = parseInt(i[1], 10)));
                for (var a = r._getSoundIds(n), u = 0; u < a.length; u++)
                  if ((o = r._soundById(a[u]))) {
                    var l = o._pannerAttr;
                    l = {
                      coneInnerAngle: 'undefined' !== typeof e.coneInnerAngle ? e.coneInnerAngle : l.coneInnerAngle,
                      coneOuterAngle: 'undefined' !== typeof e.coneOuterAngle ? e.coneOuterAngle : l.coneOuterAngle,
                      coneOuterGain: 'undefined' !== typeof e.coneOuterGain ? e.coneOuterGain : l.coneOuterGain,
                      distanceModel: 'undefined' !== typeof e.distanceModel ? e.distanceModel : l.distanceModel,
                      maxDistance: 'undefined' !== typeof e.maxDistance ? e.maxDistance : l.maxDistance,
                      refDistance: 'undefined' !== typeof e.refDistance ? e.refDistance : l.refDistance,
                      rolloffFactor: 'undefined' !== typeof e.rolloffFactor ? e.rolloffFactor : l.rolloffFactor,
                      panningModel: 'undefined' !== typeof e.panningModel ? e.panningModel : l.panningModel,
                    };
                    var c = o._panner;
                    c
                      ? ((c.coneInnerAngle = l.coneInnerAngle),
                        (c.coneOuterAngle = l.coneOuterAngle),
                        (c.coneOuterGain = l.coneOuterGain),
                        (c.distanceModel = l.distanceModel),
                        (c.maxDistance = l.maxDistance),
                        (c.refDistance = l.refDistance),
                        (c.rolloffFactor = l.rolloffFactor),
                        (c.panningModel = l.panningModel))
                      : (o._pos || (o._pos = r._pos || [0, 0, -0.5]), t(o, 'spatial'));
                  }
                return r;
              }),
              (Sound.prototype.init = (function (e) {
                return function () {
                  var t = this,
                    n = t._parent;
                  (t._orientation = n._orientation),
                    (t._stereo = n._stereo),
                    (t._pos = n._pos),
                    (t._pannerAttr = n._pannerAttr),
                    e.call(this),
                    t._stereo ? n.stereo(t._stereo) : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
                };
              })(Sound.prototype.init)),
              (Sound.prototype.reset = (function (e) {
                return function () {
                  var t = this,
                    n = t._parent;
                  return (
                    (t._orientation = n._orientation),
                    (t._stereo = n._stereo),
                    (t._pos = n._pos),
                    (t._pannerAttr = n._pannerAttr),
                    t._stereo
                      ? n.stereo(t._stereo)
                      : t._pos
                      ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                      : t._panner && (t._panner.disconnect(0), (t._panner = void 0), n._refreshBuffer(t)),
                    e.call(this)
                  );
                };
              })(Sound.prototype.reset));
            var t = function (e, t) {
              'spatial' === (t = t || 'spatial')
                ? ((e._panner = Howler.ctx.createPanner()),
                  (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                  (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                  (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                  (e._panner.distanceModel = e._pannerAttr.distanceModel),
                  (e._panner.maxDistance = e._pannerAttr.maxDistance),
                  (e._panner.refDistance = e._pannerAttr.refDistance),
                  (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                  (e._panner.panningModel = e._pannerAttr.panningModel),
                  'undefined' !== typeof e._panner.positionX
                    ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
                      e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
                      e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime))
                    : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                  'undefined' !== typeof e._panner.orientationX
                    ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
                      e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
                      e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime))
                    : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2]))
                : ((e._panner = Howler.ctx.createStereoPanner()),
                  e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
                e._panner.connect(e._node),
                e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
            };
          })();
      }.call(this, n('3r9c')));
    },
    MWXp: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n.n(o),
        i = n('9ixD'),
        a = r.a.createElement;
      t.a = function (e) {
        var t = e.pageData;
        return a(
          r.a.Fragment,
          null,
          a(i.a, {
            title: t.title,
            description: t.description || t.data.bio || t.title,
            openGraph: {
              title: t.title,
              description: t.description || t.data.bio || t.title,
              url: 'https://'.concat(t.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: t.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    NOk2: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var o = n('q1tI'),
        r = n('MllO');
      function i() {
        var e = Object(o.useState)({ width: void 0, height: void 0 }),
          t = e[0],
          n = e[1];
        return (
          Object(o.useEffect)(function () {
            function e() {
              n({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener('resize', e),
              e(),
              function () {
                return window.removeEventListener('resize', e);
              }
            );
          }, []),
          !!t.width && t.width <= r.a.laptopS
        );
      }
    },
    O8AL: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__N_SSP', function () {
          return Q;
        }),
        n.d(t, 'default', function () {
          return J;
        });
      var o = n('rePB'),
        r = n('q1tI'),
        i = n.n(r),
        a = n('vOnD'),
        u = n('voqa'),
        l = n('jtTr'),
        c = n('6Hpx'),
        s = n('FBxL'),
        d = n('qYvR'),
        p = n('MWXp'),
        f = n('HlzF'),
        _ = n('NOk2'),
        m = n('F6jV'),
        h = n('wx14'),
        v = i.a.createElement;
      function g(e) {
        return v(
          'svg',
          Object(h.a)({ width: '14', height: '14', viewBox: '0 0 14 14' }, e),
          v('path', {
            d: 'M2 2V12',
            stroke: 'white',
            strokeWidth: '4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
          v('path', {
            d: 'M11.5 2V12',
            stroke: 'white',
            strokeWidth: '4',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      var y = n('5wV8'),
        w = n('1LmX'),
        b = i.a.createElement;
      function x(e) {
        var t,
          n = e.data,
          o = e.title,
          u = e.activeTrack,
          l = e.isPlaying,
          c = e.setActiveTrack,
          s = e.setPlaying,
          d = Object(_.a)(),
          p = Object(a.e)(),
          h = Object(r.useRef)(),
          v = function (e) {
            var t, n;
            (e.stopPropagation(), l || u)
              ? l
                ? null === (t = h.current) || void 0 === t || t.pause()
                : null === (n = h.current) || void 0 === n || n.play()
              : c(y[0].url);
          },
          y =
            (null === (t = n.tracks) || void 0 === t
              ? void 0
              : t
                  .sort(function (e, t) {
                    return (e.order || 0) - (t.order || 0);
                  })
                  .map(function (e) {
                    return { songName: e.title, url: e.url, isPlaying: e.url === u && l };
                  })) || [];
        return (
          Object(r.useEffect)(
            function () {
              return (
                (e = u) &&
                  ((h.current = new f.Howl({ src: [e], html5: !0, autoplay: !1 })),
                  h.current.on('play', function () {
                    s(!0);
                  }),
                  h.current.on('pause', function () {
                    var e;
                    return s((null === (e = h.current) || void 0 === e ? void 0 : e.playing()) || !1);
                  }),
                  h.current.on('end', function () {
                    return s(!1);
                  })),
                function () {
                  var e;
                  clearInterval(void 0),
                    h.current && (null === (e = h.current) || void 0 === e || e.off(), h.current.unload());
                }
              );
              var e;
            },
            [u]
          ),
          b(
            A,
            { className: n.videoUrl ? 'video' : '' },
            n.videoUrl
              ? b(w.a, { variant: 'small', data: { title: o, url: n.videoUrl } })
              : b(
                  i.a.Fragment,
                  null,
                  b(
                    P,
                    null,
                    b(k, { src: n.coverUrl, alt: o, variant: 'square' }),
                    d &&
                      n.tracks &&
                      n.tracks.length > 0 &&
                      b(O, { onClick: v }, l ? b(g, null) : b(m.a, { fill: p.palette.white }))
                  ),
                  b(
                    T,
                    null,
                    b(S, null, b('h1', null, o), b('p', null, n.artistName)),
                    b(
                      I,
                      null,
                      !d &&
                        n.tracks &&
                        n.tracks.length > 0 &&
                        b(O, { onClick: v }, l ? b(g, null) : b(m.a, { fill: p.palette.white })),
                      null !== y && void 0 !== y && y.length
                        ? b(
                            j,
                            null,
                            b(
                              'p',
                              null,
                              null === y || void 0 === y ? void 0 : y.length,
                              '\xa0',
                              1 === (null === y || void 0 === y ? void 0 : y.length) ? 'Song' : 'Songs'
                            )
                          )
                        : null
                    )
                  )
                )
          )
        );
      }
      var A = a.d.div.withConfig({ displayName: 'traclink-info__InfoContainer', componentId: 'lff03t-0' })(
          [
            'display:flex;flex-direction:row;align-items:flex-start;width:100%;@media (max-width:',
            '){flex-direction:column;}&.video{flex-direction:column;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        k = Object(a.d)(y.a).withConfig({ displayName: 'traclink-info__StyledCoverImage', componentId: 'lff03t-1' })(
          ['margin-right:32px;@media (max-width:', '){margin:0 auto 24px;}'],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        T = a.d.div.withConfig({ displayName: 'traclink-info__Content', componentId: 'lff03t-2' })(
          [
            'min-height:',
            ';display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;@media (max-width:',
            '){min-height:auto;gap:32px;}@media (max-width:',
            '){align-items:center;gap:0;}',
          ],
          function (e) {
            return e.theme.sizes.coverSize;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptop, 'px');
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        S = a.d.div.withConfig({ displayName: 'traclink-info__Info', componentId: 'lff03t-3' })(
          [
            'color:',
            ';@media (max-width:',
            '){text-align:center;}> h1{margin:0;font-size:40px;font-weight:800;line-height:40px;letter-spacing:-1px;margin-bottom:10px;word-break:break-word;}> p{margin:0;font-size:14px;font-weight:400;line-height:20px;opacity:0.7;}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        I = a.d.div.withConfig({ displayName: 'traclink-info__PlayerInfo', componentId: 'lff03t-4' })(
          [
            'display:flex;justify-content:space-between;align-items:center;width:100%;@media (max-width:',
            '){justify-content:center;}',
          ],
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          }
        ),
        O = a.d.button.withConfig({ displayName: 'traclink-info__ActionButton', componentId: 'lff03t-5' })(
          [
            'width:50px;height:50px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;@media (max-width:',
            '){position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}> svg{fill:',
            ';height:16px;}',
          ],
          function (e) {
            return e.theme.colors.accent;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          },
          function (e) {
            return e.theme.colors.accent;
          }
        ),
        j = a.d.div.withConfig({ displayName: 'traclink-info__SongsInfo', componentId: 'lff03t-6' })(
          [
            'border-radius:50px;padding:8px 24px;background-color:',
            ';@media (max-width:',
            '){margin-top:14px;}> p{color:',
            ';font-size:14px;font-weight:700;line-height:24px;margin:0;}',
          ],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.laptopS, 'px');
          },
          function (e) {
            return e.theme.colors.primary;
          }
        ),
        P = a.d.div.withConfig({ displayName: 'traclink-info__CoverWrapper', componentId: 'lff03t-7' })([
          'position:relative;margin:0 auto;',
        ]),
        C = n('42Rd'),
        N = n('/kYb'),
        B = n('ZMKu'),
        H = n('ufqH'),
        M = i.a.createElement;
      function L(e) {
        var t = Object(a.e)(),
          n = { animate: { height: 3 }, initial: { height: 9, rotate: 180 } };
        return M(
          'svg',
          { width: '18', height: '9', viewBox: '0 0 18 9' },
          M(B.b.rect, {
            variants: n,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.25 },
            fill: e.fill ? e.fill : t.colors.primary,
            width: '4',
            height: '9',
          }),
          M(B.b.rect, {
            variants: n,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.75 },
            fill: e.fill ? e.fill : t.colors.primary,
            x: '7',
            width: '4',
            height: '9',
          }),
          M(B.b.rect, {
            variants: n,
            initial: 'initial',
            animate: 'animate',
            transition: { loop: 1 / 0, ease: 'linear', duration: 1, delay: 0.5 },
            fill: e.fill ? e.fill : t.colors.primary,
            x: '14',
            width: '4',
            height: '9',
          })
        );
      }
      var D = i.a.createElement;
      function E(e) {
        var t = Object(a.e)();
        return D(
          F,
          {
            className: e.className,
            whileHover: { paddingLeft: '5px', paddingRight: '5px' },
            onClick: function () {
              return e.onClick ? e.onClick() : null;
            },
          },
          D(
            V,
            { className: 'song-name '.concat(e.isPlaying ? 'playing' : '') },
            D('p', null, (e.index + 1).toString().padStart(2, '0'), ' ', e.songName),
            e.isPlaying ? D(L, { fill: t.colors.accent }) : null,
            e.isPlaying ? null : D(q, { className: 'play-icon' }, D(m.a, { fill: t.colors.accent }))
          )
        );
      }
      var F = Object(a.d)(B.b.div).withConfig({
          displayName: 'traclink-release-item__StyledTraclinkReleaseItem',
          componentId: 'p9uhcv-0',
        })(
          [
            'height:auto;width:100%;padding:24px 0;border-bottom:1px solid ',
            ';cursor:pointer;&:hover{.song-name{> p{opacity:1;}}.play-icon{opacity:1;}}',
          ],
          function (e) {
            var t = e.theme;
            return Object(H.a)(t.colors.primary, 0.1);
          }
        ),
        V = a.d.div.withConfig({ displayName: 'traclink-release-item__SongName', componentId: 'p9uhcv-1' })(
          [
            'display:flex;justify-content:space-between;align-items:center;min-height:32px;> p{color:',
            ';font-size:16px;font-weight:700;line-height:19px;opacity:0.5;transition:opacity ',
            ';}&.playing{> p{opacity:1;}}',
          ],
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        q = a.d.div.withConfig({ displayName: 'traclink-release-item__IconWrapper', componentId: 'p9uhcv-2' })(
          [
            'width:32px;height:32px;background-color:',
            ';display:flex;justify-content:center;align-items:center;border-radius:50%;opacity:0;transition:opacity ',
            ';> svg{fill:',
            ';height:10px;}',
          ],
          function (e) {
            return e.theme.colors.sidebarBackground;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.accent;
          }
        ),
        z = i.a.createElement;
      function G(e) {
        return e.releasePlaylist.length
          ? z(
              R,
              { className: e.className },
              z(W, null, e.releasePlaylist.length, ' ', 1 === e.releasePlaylist.length ? 'Song' : 'Songs'),
              e.releasePlaylist.map(function (t, n) {
                return z(E, {
                  key: n,
                  index: n,
                  songName: t.songName,
                  isPlaying: t.isPlaying,
                  onClick: function () {
                    return e.setActive(n);
                  },
                });
              })
            )
          : null;
      }
      var R = Object(a.d)(B.b.div).withConfig({
          displayName: 'traclink-release__StyledTraclinkRelease',
          componentId: 'xnmvxw-0',
        })(['height:auto;width:100%;']),
        W = a.d.h2.withConfig({ displayName: 'traclink-release__SongsQty', componentId: 'xnmvxw-1' })(
          ['color:', ';font-size:24px;font-weight:800;line-height:24px;margin:60px 0 24px;'],
          function (e) {
            return e.theme.colors.primary;
          }
        ),
        X = i.a.createElement;
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var $ = ['spotify', 'deezer', 'napster'],
        Y = ['custom', 'spotify', 'appleMusic', 'tidal', 'amazonMusic', 'youtube', 'deezer', 'pandora', 'napster'],
        Q = !0;
      function J(e) {
        var t,
          n,
          o = Object(l.a)(e.pageData).pageData,
          a = Object(l.a)(e.siteData).pageData,
          f = Object(r.useState)([]),
          _ = f[0],
          m = f[1],
          h = Object(r.useState)(),
          v = h[0],
          g = h[1],
          y = Object(r.useState)(!1),
          w = y[0],
          b = y[1],
          A = Object(u.a)();
        Object(r.useEffect)(
          function () {
            if (o) {
              var e = function (e) {
                  var t;
                  return (
                    (null === (t = window) || void 0 === t
                      ? void 0
                      : t.location.search.includes('success='.concat(e.platform))) || !1
                  );
                },
                t = function (e) {
                  return e.platform
                    ? (function (e, t, n) {
                        var o = {
                            action: n,
                            releaseId: t,
                            returnUrl: ''.concat(
                              window.location.search ? window.location : ''.concat(window.location, '?results')
                            ),
                            isPreSave: !1,
                            timestamp: Number(new Date()),
                            nonce: Math.floor(1e8 * Math.random()),
                          },
                          r = btoa(JSON.stringify(o));
                        return ''
                          .concat('https://api.development.trac.co', '/pre-save/')
                          .concat(e, '/?state=')
                          .concat(r);
                      })(e.platform, o.id, 'save')
                    : '';
                };
              m(
                (function () {
                  var n =
                    null === o || void 0 === o
                      ? void 0
                      : o.links
                          .map(function (e) {
                            if (e.platform && e.platform.length > 0) return e;
                            var t,
                              n =
                                ((t = e.title),
                                Y.find(function (e) {
                                  return t.toLowerCase().includes(e);
                                }));
                            return n ? Z(Z({}, e), {}, { platform: n }) : e;
                          })
                          .filter(function (e) {
                            return Y.some(function (t) {
                              return t === e.platform;
                            });
                          });
                  return (function () {
                    var e;
                    return (
                      !(!o || null === (e = o.data) || void 0 === e || !e.releaseDate) &&
                      o.data.releaseDate > Number(new Date())
                    );
                  })()
                    ? n
                        .filter(function (e) {
                          return $.some(function (t) {
                            return t === e.platform;
                          });
                        })
                        .map(function (n) {
                          return Z(Z({}, n), {}, { url: t(n), isSuccess: e(n) });
                        })
                    : n.filter(function (e) {
                        return e.url && e.url.length > 0;
                      });
                })()
              ),
                analytics.track('Traclink Viewed', {
                  artist_name: o.data.artistName,
                  release_name: o.title,
                  artist_id: o.ownerId,
                  release_id: o.id,
                });
            }
          },
          [o]
        );
        var k =
          (null === o ||
          void 0 === o ||
          null === (t = o.data) ||
          void 0 === t ||
          null === (n = t.tracks) ||
          void 0 === n
            ? void 0
            : n
                .sort(function (e, t) {
                  return (e.order || 0) - (t.order || 0);
                })
                .map(function (e) {
                  return { songName: e.title, url: e.url, isPlaying: e.url === v && w };
                })) || [];
        return o && o.data
          ? X(
              i.a.Fragment,
              null,
              X(p.a, { pageData: o }),
              X(
                C.a,
                { theme: a ? a.theme : void 0 },
                X(
                  c.a,
                  {
                    pageData: a,
                    hasBackground: !0,
                    hasBackgroundMobile: !0,
                    hideNavbar: !0,
                    hideCart: !0,
                    action: X(N.a, null),
                  },
                  X(
                    K,
                    null,
                    X(x, {
                      data: o.data,
                      title: o.title,
                      activeTrack: v,
                      isPlaying: w,
                      setActiveTrack: g,
                      setPlaying: b,
                    }),
                    _.length > 0
                      ? X(
                          ee,
                          null,
                          _.filter(function (e) {
                            return !(null === e || void 0 === e || !e.url);
                          }).map(function (e, t) {
                            return X(s.a, { key: t, data: e, artistId: o.ownerId, releaseId: o.id });
                          })
                        )
                      : null,
                    X(G, {
                      title: o.title,
                      releasePlaylist: k,
                      setActive: function (e) {
                        return g(k[e].url);
                      },
                    }),
                    A
                      ? X(
                          te,
                          null,
                          X(d.a, {
                            avatar: (null === a || void 0 === a ? void 0 : a.avatar) || '',
                            title: (null === a || void 0 === a ? void 0 : a.title) || '',
                          }),
                          X(ne, { href: '/' }, 'View Profile')
                        )
                      : null
                  )
                )
              )
            )
          : null;
      }
      var K = a.d.div.withConfig({ displayName: 'traclink__Wrapper', componentId: 'bjx3n0-0' })([
          'max-width:608px;margin:0 auto;',
        ]),
        ee = a.d.div.withConfig({ displayName: 'traclink__LinksContainer', componentId: 'bjx3n0-1' })([
          'width:100%;margin-top:48px;gap:14px;display:flex;flex-direction:column;',
        ]),
        te = a.d.div.withConfig({ displayName: 'traclink__MobileInfo', componentId: 'bjx3n0-2' })([
          'margin-top:32px;padding:0 24px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:24px;',
        ]),
        ne = a.d.a.withConfig({ displayName: 'traclink__HomeButton', componentId: 'bjx3n0-3' })(
          [
            'background-color:',
            ';color:',
            ';font-size:14px;font-weight:700;line-height:24px;border-radius:50px;padding:8px 20px;transition:background-color ',
            ';&:hover,&:focus,&:active{background-color:',
            ';}',
          ],
          function (e) {
            return e.theme.colors.inputsBackground;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          },
          function (e) {
            return e.theme.colors.inputsBackgroundHover;
          }
        );
    },
    WqaS: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n('vOnD'),
        i = o.createElement;
      t.a = Object(r.d)(function (e) {
        return i(
          'div',
          {
            className: e.className,
            onClick: function (t) {
              return e.onClick ? e.onClick(t) : null;
            },
          },
          e.children || ''
        );
      }).withConfig({ displayName: 'flex', componentId: 'sc-53hndv-0' })(
        [
          'display:flex;justify-content:',
          ';flex-direction:',
          ';flex-grow:',
          ';flex-basis:',
          ';flex-shrink:',
          ';flex-wrap:',
          ';flex:',
          ';align-items:',
          ';',
        ],
        function (e) {
          return e.justifyContent || 'flex-start';
        },
        function (e) {
          return e.flexDirection || 'row';
        },
        function (e) {
          return e.flexGrow || 0;
        },
        function (e) {
          return e.flexBasis || 'auto';
        },
        function (e) {
          return e.flexShrink || 1;
        },
        function (e) {
          return e.flexWrap || 'nowrap';
        },
        function (e) {
          return e.flex || ' 0 1 auto';
        },
        function (e) {
          return e.alignItems || 'stretch';
        }
      );
    },
    sBPx: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/music/[traclink]',
        function () {
          return n('O8AL');
        },
      ]);
    },
  },
  [['sBPx', 0, 2, 3, 1, 4]],
]);