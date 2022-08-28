(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(a.default.useContext(o.AmpStateContext));
        });
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery,
          i = void 0 !== o && o;
        return n || (a && i);
      }
    },
    '1LmX': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var r = n('q1tI'),
        a = n.n(r),
        o = n('F6jV'),
        i = n('vOnD'),
        l = n('wx14'),
        c = n('rePB'),
        p = a.a.createElement;
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var h = a.a.createElement;
      function d(e) {
        var t,
          n = e.className,
          a = e.data,
          i = e.variant,
          l = void 0 === i ? 'large' : i,
          c = Object(r.useState)(!1),
          p = c[0],
          u = c[1],
          s = function () {
            var e;
            return a.id ? a.id : null === (e = a.url) || void 0 === e ? void 0 : e.split('embed/')[1];
          },
          d = null === (t = a.url) || void 0 === t ? void 0 : t.includes('list=');
        return h(
          f,
          { className: n },
          p
            ? h('iframe', {
                className: 'iframe',
                title: a.title ? a.title : 'Music Video',
                src: (function () {
                  var e = s();
                  return e
                    ? d
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
            : h(
                m,
                {
                  onClick: function () {
                    return u(!p);
                  },
                },
                h(g, null, h(o.a, null)),
                h(v, {
                  variant: l,
                  src: (function () {
                    var e = s();
                    return [
                      'https://img.youtube.com/vi/'.concat(e, '/maxresdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/hqdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/mqdefault.jpg'),
                      'https://img.youtube.com/vi/'.concat(e, '/default.jpg'),
                    ];
                  })(),
                  alt: a.title || 'Music Video',
                })
              )
        );
      }
      var f = i.e.div.withConfig({ displayName: 'video-player__VideoWrapper', componentId: 'sc-19p591d-0' })([
          'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
        ]),
        m = i.e.div.withConfig({ displayName: 'video-player__ImageWrapper', componentId: 'sc-19p591d-1' })([
          'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
        ]),
        g = i.e.button.withConfig({ displayName: 'video-player__PlayButton', componentId: 'sc-19p591d-2' })(
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
        v = Object(i.e)(function (e) {
          var t = Object(r.useState)(e.src),
            n = t[0],
            a = t[1],
            o = Object(r.useState)(e.src.length ? e.src[0] : ''),
            i = o[0],
            c = o[1];
          if (!e.src.length || !i || !n.length) return null;
          var u = function () {
              var e = n.slice(1);
              a(e), e.length && c(e[0]);
            },
            h = s(
              s({}, e),
              {},
              {
                src: i,
                onError: u,
                onLoad: function (e) {
                  120 === e.currentTarget.naturalWidth && u();
                },
              }
            );
          return p('img', Object(l.a)({}, h, { alt: e.alt }));
        }).withConfig({ displayName: 'video-player__CoverImage', componentId: 'sc-19p591d-3' })(
          ['border-radius:5px;', ' ', ''],
          function (e) {
            return 'large' === e.variant && Object(i.d)(['object-fit:cover;width:100%;']);
          },
          function (e) {
            return 'small' === e.variant && Object(i.d)(['object-fit:cover;height:100%;width:100%;']);
          }
        );
    },
    '5wV8': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      });
      var r = n('wx14'),
        a = n('Ff2n'),
        o = n('q1tI'),
        i = n.n(o),
        l = n('vOnD'),
        c = i.a.createElement;
      function p(e) {
        var t = e.src,
          n = e.variant,
          o = void 0 === n ? 'square' : n,
          i = Object(a.a)(e, ['src', 'variant']);
        return t ? c(u, Object(r.a)({ variant: o, src: t }, i)) : c(s, { variant: o, as: 'div' });
      }
      var u = l.e.img.withConfig({ displayName: 'cover-image__Cover', componentId: 'y910y5-0' })(
          ['object-fit:cover;border-radius:5px;', ' ', ' ', ''],
          function (e) {
            return (
              'square' === e.variant &&
              Object(l.d)(
                ['width:', ';height:', ';@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  return e.theme.sizes.coverSize;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.tablet, 'px');
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
              Object(l.d)(
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
              'rounded' === e.variant &&
              Object(l.d)(
                ['width:', ';height:', ';border-radius:99%;@media (max-width:', '){width:', ';height:', ';}'],
                function (e) {
                  return e.theme.sizes.coverSizeRounded;
                },
                function (e) {
                  return e.theme.sizes.coverSizeRounded;
                },
                function (e) {
                  var t = e.theme;
                  return ''.concat(t.breakpoints.tablet, 'px');
                },
                function (e) {
                  return e.theme.sizes.coverSizeRoundedMobile;
                },
                function (e) {
                  return e.theme.sizes.coverSizeRoundedMobile;
                }
              )
            );
          }
        ),
        s = Object(l.e)(u).withConfig({ displayName: 'cover-image__CoverColor', componentId: 'y910y5-1' })(
          ['background-color:', ';'],
          function (e) {
            return e.theme.colors.secondary;
          }
        );
    },
    '7W2i': function (e, t, n) {
      var r = n('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && r(e, t);
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      n('lSNA');
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var r,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set) ? Object.defineProperty(n, a, o) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        o = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        i = n('lwAK'),
        l = n('FYa8'),
        c = n('/0+H');
      function p() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(a.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function s(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var h = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = a.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(s, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0,
                  i = !1;
                if (a.key && 'number' !== typeof a.key && a.key.indexOf('$') > 0) {
                  i = !0;
                  var l = a.key.slice(a.key.indexOf('$') + 1);
                  e.has(l) ? (o = !1) : e.add(l);
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case 'meta':
                    for (var c = 0, p = h.length; c < p; c++) {
                      var u = h[c];
                      if (a.props.hasOwnProperty(u))
                        if ('charSet' === u) n.has(u) ? (o = !1) : n.add(u);
                        else {
                          var s = a.props[u],
                            d = r[u] || new Set();
                          ('name' === u && i) || !d.has(s) ? (d.add(s), (r[u] = d)) : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return a.default.cloneElement(e, { key: n });
          });
      }
      function f(e) {
        var t = e.children,
          n = (0, a.useContext)(i.AmpStateContext),
          r = (0, a.useContext)(l.HeadManagerContext);
        return a.default.createElement(
          o.default,
          { reduceComponentsToState: d, headManager: r, inAmpMode: (0, c.isInAmpMode)(n) },
          t
        );
      }
      f.rewind = function () {};
      var m = f;
      t.default = m;
    },
    '9ixD': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n('g4pe'),
        a = n.n(r),
        o = n('q1tI'),
        i = n.n(o);
      function l(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      var c = {
          templateTitle: '',
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        p = function (e) {
          var t,
            n = [];
          e.titleTemplate && (c.templateTitle = e.titleTemplate);
          var r = '';
          e.title
            ? ((r = e.title),
              c.templateTitle &&
                (r = c.templateTitle.replace(/%s/g, function () {
                  return r;
                })))
            : e.defaultTitle && (r = e.defaultTitle),
            r && n.push(i.a.createElement('title', { key: 'title' }, r));
          var a = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex,
            o = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow,
            l = '';
          if (e.robotsProps) {
            var p = e.robotsProps,
              u = p.nosnippet,
              s = p.maxSnippet,
              h = p.maxImagePreview,
              d = p.maxVideoPreview,
              f = p.noarchive,
              m = p.noimageindex,
              g = p.notranslate,
              v = p.unavailableAfter;
            l =
              (u ? ',nosnippet' : '') +
              (s ? ',max-snippet:' + s : '') +
              (h ? ',max-image-preview:' + h : '') +
              (f ? ',noarchive' : '') +
              (v ? ',unavailable_after:' + v : '') +
              (m ? ',noimageindex' : '') +
              (d ? ',max-video-preview:' + d : '') +
              (g ? ',notranslate' : '');
          }
          if (
            (a || o
              ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
                n.push(
                  i.a.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (a ? 'noindex' : 'index') + ',' + (o ? 'nofollow' : 'follow') + l,
                  })
                ),
                n.push(
                  i.a.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (a ? 'noindex' : 'index') + ',' + (o ? 'nofollow' : 'follow') + l,
                  })
                ))
              : (n.push(i.a.createElement('meta', { key: 'robots', name: 'robots', content: 'index,follow' + l })),
                n.push(
                  i.a.createElement('meta', { key: 'googlebot', name: 'googlebot', content: 'index,follow' + l })
                )),
            e.description &&
              n.push(i.a.createElement('meta', { key: 'description', name: 'description', content: e.description })),
            e.mobileAlternate &&
              n.push(
                i.a.createElement('link', {
                  rel: 'alternate',
                  key: 'mobileAlternate',
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                n.push(
                  i.a.createElement('link', {
                    rel: 'alternate',
                    key: 'languageAlternate-' + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                n.push(
                  i.a.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: e.twitter.cardType })
                ),
              e.twitter.site &&
                n.push(
                  i.a.createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: e.twitter.site })
                ),
              e.twitter.handle &&
                n.push(
                  i.a.createElement('meta', {
                    key: 'twitter:creator',
                    name: 'twitter:creator',
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              n.push(i.a.createElement('meta', { key: 'fb:app_id', property: 'fb:app_id', content: e.facebook.appId })),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                n.push(
                  i.a.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var y = e.openGraph.type.toLowerCase();
              n.push(i.a.createElement('meta', { key: 'og:type', property: 'og:type', content: y })),
                'profile' === y && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'profile:gender',
                          property: 'profile:gender',
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : 'book' === y && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', { key: 'book:author:0' + t, property: 'book:author', content: e })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        n.push(i.a.createElement('meta', { key: 'book:tag:0' + t, property: 'book:tag', content: e }));
                      }))
                  : 'article' === y && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', {
                            key: 'article:author:0' + t,
                            property: 'article:author',
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', { key: 'article:tag:0' + t, property: 'article:tag', content: e })
                        );
                      }))
                  : ('video.movie' !== y && 'video.episode' !== y && 'video.tv_show' !== y && 'video.other' !== y) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          n.push(
                            i.a.createElement('meta', {
                              key: 'video:actor:0' + t,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            n.push(
                              i.a.createElement('meta', {
                                key: 'video:actor:role:0' + t,
                                property: 'video:actor:role',
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', {
                            key: 'video:director:0' + t,
                            property: 'video:director',
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', { key: 'video:writer:0' + t, property: 'video:writer', content: e })
                        );
                      }),
                    e.openGraph.video.duration &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        n.push(
                          i.a.createElement('meta', { key: 'video:tag:0' + t, property: 'video:tag', content: e })
                        );
                      }),
                    e.openGraph.video.series &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            (e.openGraph.title || e.title) &&
              n.push(
                i.a.createElement('meta', { key: 'og:title', property: 'og:title', content: e.openGraph.title || r })
              ),
              (e.openGraph.description || e.description) &&
                n.push(
                  i.a.createElement('meta', {
                    key: 'og:description',
                    property: 'og:description',
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, t) {
                  n.push(i.a.createElement('meta', { key: 'og:image:0' + t, property: 'og:image', content: e.url })),
                    e.alt &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'og:image:alt0' + t,
                          property: 'og:image:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? n.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: e.width.toString(),
                          })
                        )
                      : c.defaultOpenGraphImageWidth &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: c.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? n.push(
                          i.a.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: e.height.toString(),
                          })
                        )
                      : c.defaultOpenGraphImageHeight &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: c.defaultOpenGraphImageHeight.toString(),
                          })
                        );
                }),
              e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, t) {
                  n.push(i.a.createElement('meta', { key: 'og:video:0' + t, property: 'og:video', content: e.url })),
                    e.alt &&
                      n.push(
                        i.a.createElement('meta', {
                          key: 'og:video:alt0' + t,
                          property: 'og:video:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: e.width.toString(),
                          })
                        )
                      : c.defaultOpenGraphVideoWidth &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: c.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: e.height.toString(),
                          })
                        )
                      : c.defaultOpenGraphVideoHeight &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: c.defaultOpenGraphVideoHeight.toString(),
                          })
                        );
                }),
              e.openGraph.locale &&
                n.push(
                  i.a.createElement('meta', { key: 'og:locale', property: 'og:locale', content: e.openGraph.locale })
                ),
              e.openGraph.site_name &&
                n.push(
                  i.a.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical && n.push(i.a.createElement('link', { rel: 'canonical', href: e.canonical, key: 'canonical' })),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, r, a;
                n.push(
                  i.a.createElement(
                    'meta',
                    Object.assign(
                      {
                        key:
                          'meta:' +
                          (null != (t = null != (r = null != (a = e.keyOverride) ? a : e.name) ? r : e.property)
                            ? t
                            : e.httpEquiv),
                      },
                      e
                    )
                  )
                );
              }),
            null != (t = e.additionalLinkTags) &&
              t.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                n.push(
                  i.a.createElement(
                    'link',
                    Object.assign({ key: 'link' + (null != (t = e.keyOverride) ? t : e.href) + e.rel }, e)
                  )
                );
              }),
            n
          );
        },
        u =
          (o.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              l(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  n = e.noindex,
                  r = void 0 !== n && n,
                  o = e.nofollow,
                  l = e.robotsProps,
                  c = e.description,
                  u = e.canonical,
                  s = e.openGraph,
                  h = e.facebook,
                  d = e.twitter,
                  f = e.additionalMetaTags,
                  m = e.titleTemplate,
                  g = e.mobileAlternate,
                  v = e.languageAlternates,
                  y = e.additionalLinkTags;
                return i.a.createElement(
                  a.a,
                  null,
                  p({
                    title: t,
                    noindex: r,
                    nofollow: o,
                    robotsProps: l,
                    description: c,
                    canonical: u,
                    facebook: h,
                    openGraph: s,
                    additionalMetaTags: f,
                    twitter: d,
                    titleTemplate: m,
                    mobileAlternate: g,
                    languageAlternates: v,
                    additionalLinkTags: y,
                  })
                );
              }),
              t
            );
          })(o.Component));
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    },
    F6jV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('wx14'),
        a = n('q1tI'),
        o = n.n(a).a.createElement;
      function i(e) {
        return o(
          'svg',
          Object(r.a)({ width: '12', height: '16', viewBox: '0 0 11 14' }, e),
          o('path', {
            d: 'M0 2.73703C0 1.13964 1.78029 0.18686 3.1094 1.07293L9.50385 5.3359C10.6913 6.12754 10.6913 7.87246 9.50385 8.6641L3.1094 12.9271C1.78029 13.8131 0 12.8604 0 11.263V2.73703Z',
            fill: e.fill,
          })
        );
      }
    },
    FBxL: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var r = n('q1tI'),
        a = n.n(r),
        o = n('Vt1p'),
        i = n('5wV8'),
        l = n('wx14'),
        c = a.a.createElement;
      function p(e) {
        return c(
          'svg',
          Object(l.a)({ width: '11', height: '10', viewBox: '0 0 11 10' }, e),
          c('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.64007 1.53697L8.0606 4.09174L0.837498 4.12698C0.614275 4.12787 0.400549 4.22353 0.243444 4.39288C0.08634 4.56224 -0.00124073 4.79136 1.23978e-05 5.02975C0.0010519 5.26799 0.090724 5.49602 0.249279 5.66362C0.407835 5.83121 0.62227 5.92463 0.845354 5.92329L8.06688 5.88889L5.67856 8.46967C5.52135 8.63872 5.43351 8.86758 5.43439 9.10584C5.43528 9.3441 5.52481 9.57221 5.68328 9.73993C6.0136 10.089 6.54622 10.0863 6.87351 9.73405L10.8017 5.49791C11.0691 5.20761 11.0656 4.74071 10.7938 4.45503L6.82401 0.260002C6.49396 -0.0889478 5.96158 -0.0863191 5.63457 0.265876C5.47741 0.435182 5.38969 0.664244 5.39072 0.902639C5.39175 1.14103 5.48145 1.36922 5.64007 1.53697Z',
            fill: e.fill,
          })
        );
      }
      var u = a.a.createElement;
      function s(e) {
        return u(
          'svg',
          Object(l.a)({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
          u('path', {
            fill: e.fill,
            d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
          })
        );
      }
      var h = n('vOnD'),
        d = a.a.createElement;
      function f(e) {
        var t = e.data,
          n = e.className,
          r = e.variant,
          l = void 0 === r ? 'row' : r,
          c = Object(h.f)(),
          u = d(
            a.a.Fragment,
            null,
            t.platform ? d(y, { as: 'div' }, Object(o.a)(t.platform)) : d(i.a, { src: t.avatar, alt: t.title }),
            d(g, { variant: l }, d('h3', null, t.title)),
            'row' === l &&
              d(
                v,
                null,
                t.isSuccess
                  ? d(s, { height: '20px', fill: c.colors.success })
                  : d(p, { height: '20px', fill: c.colors.primary })
              )
          );
        return t.title && t.url
          ? d(m, { className: ''.concat(n || ''), href: t.url, variant: l, target: '_blank' }, u)
          : null;
      }
      var m = h.e.a.withConfig({ displayName: 'simple-link__Link', componentId: 'fqic60-0' })(
          [
            'height:100px;border-radius:5px;background-color:',
            ';font-size:16px;line-height:24px;color:',
            ';font-family:',
            ';width:100%;padding:20px;display:flex;align-items:center;justify-content:flex-start;@media (max-width:',
            '){height:84px;}',
            ' ',
            '',
          ],
          function (e) {
            return e.theme.colors.inputsBackground;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.fontFamily;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            return (
              'column-left' === e.variant &&
              Object(h.d)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-right:2px;',
              ])
            );
          },
          function (e) {
            return (
              'column-right' === e.variant &&
              Object(h.d)([
                'width:calc(50% - 2px);flex-direction:column;align-items:flex-start;height:170px;margin-left:2px;',
              ])
            );
          }
        ),
        g = h.e.div.withConfig({ displayName: 'simple-link__Info', componentId: 'fqic60-1' })(
          [
            'flex-grow:0;padding:0px 20px;width:',
            ';> h3{margin:0px;color:',
            ';font-size:16px;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}@media (max-width:',
            '){width:',
            ';> h3{white-space:nowrap;text-overflow:ellipsis;}}',
            '',
          ],
          function (e) {
            var t = e.theme;
            return 'calc(100% - '.concat(t.sizes.coverSize, ' - ').concat(t.sizes.commonIconSize, ')');
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            var t = e.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          },
          function (e) {
            var t = e.theme;
            return 'calc(100% - '.concat(t.sizes.coverSizeMobile, ' - ').concat(t.sizes.commonIconSize, ')');
          },
          function (e) {
            var t = e.variant;
            return (
              ('column-right' === t || 'column-left' === t) && Object(h.d)(['padding:20px 0px 0px 0px;width:100%;'])
            );
          }
        ),
        v = h.e.button.withConfig({ displayName: 'simple-link__Icon', componentId: 'fqic60-2' })(
          [
            'background-color:',
            ';display:flex;width:',
            ';height:',
            ';justify-content:center;align-items:center;border-radius:50%;cursor:pointer;opacity:1;padding:0;transition:opacity ',
            ';&:hover{opacity:0.75;> svg{fill:',
            ';}}',
          ],
          function (e) {
            return e.theme.colors.background;
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
            return e.theme.colors.primaryHover;
          }
        ),
        y = Object(h.e)(v).withConfig({ displayName: 'simple-link__PlatformIcon', componentId: 'fqic60-3' })(
          ['> svg{height:20px;fill:', ';}'],
          function (e) {
            return e.theme.colors.primary;
          }
        );
    },
    FYa8: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var a = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.HeadManagerContext = a;
    },
    Ijbi: function (e, t, n) {
      var r = n('WkPL');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    RIqP: function (e, t, n) {
      var r = n('Ijbi'),
        a = n('EbDI'),
        o = n('ZhPi'),
        i = n('Bnag');
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || i();
      };
    },
    Vt1p: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return N;
      });
      var r = n('q1tI'),
        a = n.n(r),
        o = n('wx14'),
        i = a.a.createElement;
      function l(e) {
        return i(
          'svg',
          Object(o.a)({ role: 'img', viewBox: '0 0 512 512' }, e),
          i('path', {
            fill: e.fill,
            d: 'M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z',
          })
        );
      }
      var c = a.a.createElement;
      function p(e) {
        return c(
          'svg',
          Object(o.a)({ width: '15', height: '15', viewBox: '0 0 15 15' }, e),
          c('path', {
            fill: e.fill,
            d: 'M14 6.1c-0.1 0-0.2 0-0.4 0 -1.4 0-2.6-0.7-3.4-1.8v6.2c0 2.5-2.1 4.6-4.6 4.6S1 13 1 10.4s2.1-4.6 4.6-4.6l0 0c0.1 0 0.2 0 0.3 0v2.3C5.8 8.1 5.7 8.1 5.6 8.1c-1.3 0-2.4 1-2.4 2.3 0 1.3 1.1 2.3 2.4 2.3 1.3 0 2.5-1 2.5-2.3L8.1 0h2.2c0.2 1.9 1.8 3.4 3.7 3.6L14 6.1',
          })
        );
      }
      var u = a.a.createElement;
      function s(e) {
        return u(
          'svg',
          Object(o.a)(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-hidden': 'true',
              focusable: 'false',
              role: 'img',
              viewBox: '0 0 576 512',
            },
            e
          ),
          u('path', {
            fill: e.fill,
            d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
          })
        );
      }
      var h = a.a.createElement;
      function d(e) {
        return h(
          'svg',
          Object(o.a)({ width: '24', height: '20', viewBox: '0 0 24 20' }, e),
          h('path', {
            d: 'M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z',
            fill: e.fill,
          })
        );
      }
      var f = a.a.createElement;
      function m(e) {
        return f(
          'svg',
          Object(o.a)({ 'aria-hidden': 'true', role: 'img', viewBox: '0 0 512 512' }, e),
          f('path', {
            fill: e.fill,
            d: 'M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z',
          })
        );
      }
      var g = a.a.createElement;
      function v(e) {
        return g(
          'svg',
          Object(o.a)({ width: '13', height: '24', viewBox: '0 0 13 24' }, e),
          g('path', {
            d: 'M12.1482 13.3981L12.8219 9.08738H8.60731V6.29126C8.60731 5.11165 9.19498 3.96116 11.0826 3.96116H13V0.291262C13 0.291262 11.2607 0 9.59863 0C6.12603 0 3.85845 2.06505 3.85845 5.80194V9.08738H0V13.3981H3.85845V23.8194C4.6331 23.9388 5.42557 24 6.23288 24C7.04018 24 7.83265 23.9388 8.60731 23.8194V13.3981H12.1482Z',
            fill: e.fill,
          })
        );
      }
      var y = a.a.createElement;
      function C(e) {
        return y(
          'svg',
          Object(o.a)({ width: '22', height: '22', viewBox: '0 0 22 22' }, e),
          y(
            'g',
            { clipPath: 'url(#clip0)' },
            y('path', {
              d: 'M21.9947 22V21.9991H22.0002V13.9306C22.0002 9.98345 21.1504 6.94287 16.5359 6.94287C14.3176 6.94287 12.8289 8.1602 12.2212 9.31429H12.157V7.31137H7.78174V21.9991H12.3376V14.7263C12.3376 12.8114 12.7006 10.9597 15.072 10.9597C17.4086 10.9597 17.4434 13.145 17.4434 14.8491V22H21.9947Z',
              fill: e.fill,
            }),
            y('path', { d: 'M0.362793 7.3125H4.92413V22.0003H0.362793V7.3125Z', fill: e.fill }),
            y('path', {
              d: 'M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z',
              fill: e.fill,
            })
          ),
          y('defs', null, y('clipPath', { id: 'clip0' }, y('rect', { width: '22', height: '22', fill: e.fill })))
        );
      }
      var b = a.a.createElement;
      function w(e) {
        return b(
          'svg',
          Object(o.a)({ width: '26', height: '26', viewBox: '0 0 26 26' }, e),
          b('path', {
            d: 'M12.9999 2.51258C16.4157 2.51258 16.8203 2.52563 18.1694 2.58718C19.4167 2.64411 20.094 2.85246 20.5449 3.02766C21.1005 3.23274 21.6032 3.55974 22.0158 3.98463C22.4407 4.39728 22.7677 4.8999 22.9728 5.45556C23.148 5.90634 23.3564 6.58371 23.4132 7.831C23.4748 9.18001 23.4878 9.58458 23.4878 13.0005C23.4878 16.4165 23.4748 16.821 23.4132 18.1701C23.3563 19.4174 23.1479 20.0947 22.9728 20.5455C22.7599 21.0972 22.434 21.5983 22.0158 22.0165C21.5977 22.4346 21.0966 22.7606 20.5449 22.9734C20.0941 23.1486 19.4167 23.357 18.1694 23.4139C16.8207 23.4754 16.4161 23.4885 12.9999 23.4885C9.58369 23.4885 9.17927 23.4754 7.83036 23.4139C6.58307 23.357 5.90575 23.1486 5.45492 22.9734C4.89926 22.7683 4.39664 22.4413 3.98399 22.0164C3.5591 21.6038 3.2321 21.1012 3.02702 20.5455C2.85182 20.0947 2.64341 19.4174 2.58654 18.1701C2.52499 16.8211 2.51194 16.4165 2.51194 13.0005C2.51194 9.58458 2.52499 9.18011 2.58654 7.831C2.64347 6.58371 2.85182 5.90639 3.02702 5.45556C3.23212 4.89988 3.55916 4.39723 3.98409 3.98458C4.39674 3.55969 4.89937 3.23269 5.45502 3.02761C5.9058 2.85241 6.58318 2.644 7.83046 2.58713C9.17947 2.52558 9.58404 2.51253 13 2.51253L12.9999 2.51258ZM13 0.20752C9.52565 0.20752 9.08984 0.222246 7.72555 0.284504C6.36385 0.34666 5.43395 0.562887 4.62023 0.879152C3.76662 1.20038 2.99336 1.70393 2.35437 2.3547C1.70345 2.99366 1.19975 3.76692 0.87841 4.62056C0.562398 5.43433 0.346172 6.36424 0.28427 7.72594C0.221758 9.09023 0.207031 9.52603 0.207031 13.0004C0.207031 16.4747 0.221758 16.9105 0.28427 18.2748C0.346426 19.6365 0.562652 20.5664 0.878918 21.3801C1.20014 22.2337 1.7037 23.007 2.35447 23.646C2.99346 24.2968 3.76672 24.8003 4.62033 25.1216C5.4341 25.4378 6.364 25.6541 7.72565 25.7162C9.09015 25.7785 9.5258 25.7932 13.0001 25.7932C16.4744 25.7932 16.9103 25.7785 18.2745 25.7162C19.6362 25.6541 20.5661 25.4378 21.3799 25.1216C22.2297 24.7929 23.0015 24.2903 23.6457 23.646C24.29 23.0017 24.7926 22.23 25.1213 21.3801C25.4375 20.5664 25.6538 19.6365 25.7159 18.2748C25.7782 16.9103 25.7929 16.4747 25.7929 13.0004C25.7929 9.52608 25.7782 9.09023 25.7159 7.72594C25.6538 6.36424 25.4375 5.43433 25.1213 4.62061C24.8001 3.76701 24.2965 2.99375 23.6457 2.35475C23.0067 1.70385 22.2334 1.20019 21.3797 0.878898C20.5659 0.562887 19.636 0.34666 18.2743 0.284758C16.91 0.222246 16.4742 0.20752 12.9999 0.20752H13Z',
            fill: e.fill,
          }),
          b('path', {
            d: 'M13 6.43066C11.7007 6.43066 10.4306 6.81595 9.35027 7.53779C8.26995 8.25964 7.42794 9.28563 6.93073 10.486C6.43351 11.6864 6.30342 13.0073 6.55689 14.2816C6.81037 15.5559 7.43604 16.7265 8.35477 17.6452C9.27351 18.5639 10.4441 19.1896 11.7184 19.4431C12.9927 19.6965 14.3136 19.5665 15.514 19.0692C16.7143 18.572 17.7403 17.73 18.4622 16.6497C19.184 15.5694 19.5693 14.2993 19.5693 13C19.5693 11.2577 18.8772 9.58676 17.6452 8.35477C16.4132 7.12279 14.7423 6.43066 13 6.43066ZM13 17.2642C12.1566 17.2642 11.3322 17.0141 10.6309 16.5456C9.92966 16.077 9.38311 15.411 9.06036 14.6318C8.73762 13.8526 8.65318 12.9952 8.81772 12.168C8.98227 11.3409 9.3884 10.581 9.98477 9.98468C10.5811 9.38832 11.341 8.98219 12.1681 8.81766C12.9953 8.65313 13.8527 8.73758 14.6319 9.06033C15.4111 9.38308 16.0771 9.92964 16.5456 10.6309C17.0142 11.3321 17.2643 12.1566 17.2643 13C17.2643 14.1309 16.815 15.2156 16.0153 16.0153C15.2156 16.815 14.1309 17.2642 13 17.2642Z',
            fill: e.fill,
          }),
          b('path', {
            d: 'M19.8291 7.70647C20.6769 7.70647 21.3642 7.01917 21.3642 6.17135C21.3642 5.32353 20.6769 4.63623 19.8291 4.63623C18.9812 4.63623 18.2939 5.32353 18.2939 6.17135C18.2939 7.01917 18.9812 7.70647 19.8291 7.70647Z',
            fill: e.fill,
          })
        );
      }
      var x = r.createElement,
        k = function (e) {
          return x(
            'svg',
            Object(o.a)({ width: '23', height: '15', viewBox: '0 0 23 15' }, e),
            x('rect', { y: '12', width: '5', height: '3' }),
            x('rect', { x: '12', y: '12', width: '5', height: '3' }),
            x('rect', { x: '12', y: '8', width: '5', height: '3' }),
            x('rect', { x: '6', y: '12', width: '5', height: '3' }),
            x('rect', { x: '6', y: '8', width: '5', height: '3' }),
            x('rect', { x: '6', y: '4', width: '5', height: '3' }),
            x('rect', { x: '18', y: '12', width: '5', height: '3' }),
            x('rect', { x: '18', y: '8', width: '5', height: '3' }),
            x('rect', { x: '18', width: '5', height: '3' }),
            x('rect', { x: '18', y: '4', width: '5', height: '3' })
          );
        },
        E = r.createElement,
        O = function (e) {
          return E(
            'svg',
            Object(o.a)({ width: '14', height: '16', viewBox: '0 0 14 16' }, e),
            E('path', {
              d: 'M14 5.4C13.7 2.4 11 0 7.8 0H0v16h4c0.6 0 1-0.4 1-1v-3h3c1.7 0 3.3-0.7 4.4-2C13.6 8.8 14.1 7.1 14 5.4z',
            })
          );
        },
        M = r.createElement,
        G = function (e) {
          return M(
            'svg',
            Object(o.a)({ width: '24', height: '17', viewBox: '0 0 24 17' }, e),
            M('path', {
              fill: e.fill,
              d: 'M16 12l-4 4 -4-4 4-4L16 12zM4 0L0 4l4 4 4-4L4 0zM12 0L8 4l4 4 4-4L12 0zM20 0l-4 4 4 4 4-4L20 0z',
            })
          );
        },
        j = r.createElement,
        _ = function (e) {
          return j(
            'svg',
            Object(o.a)({ width: '24', height: '24', viewBox: '0 0 24 24' }, e),
            j('path', {
              fill: e.fill,
              d: 'M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0zM17.5 17.3c-0.2 0.4-0.7 0.5-1 0.2 -2.8-1.7-6.4-2.1-10.5-1.2 -0.4 0.1-0.8-0.2-0.9-0.6 -0.1-0.4 0.2-0.8 0.6-0.9 4.6-1 8.5-0.6 11.7 1.3C17.6 16.5 17.7 17 17.5 17.3zM19 14c-0.3 0.4-0.8 0.6-1.3 0.3 -3.2-2-8.1-2.6-12-1.4 -0.5 0.1-1-0.1-1.2-0.6 -0.1-0.5 0.1-1 0.6-1.2 4.4-1.3 9.8-0.7 13.5 1.6C19.1 13 19.2 13.6 19 14zM19.1 10.6C15.2 8.3 8.8 8.1 5.2 9.3 4.6 9.4 3.9 9.1 3.8 8.5 3.6 7.9 3.9 7.3 4.5 7.1c4.2-1.3 11.3-1 15.7 1.6 0.5 0.3 0.7 1 0.4 1.5C20.3 10.8 19.6 11 19.1 10.6z',
            })
          );
        },
        z = r.createElement,
        I = function (e) {
          return z(
            'svg',
            Object(o.a)({ width: '16', height: '16', viewBox: '0 0 16 16' }, e),
            z('path', { fill: e.fill, d: 'M9.7 11.6c-0.5 0.5-1 0.8-1.7 1 -0.6-0.2-1.2-0.6-1.7-1H9.7z' }),
            z('path', {
              fill: e.fill,
              d: 'M14.6 4.4l0-2.4c-0.6 0-1.1 0.1-1.6 0.3C11.7 0.9 10 0 8 0 6 0 4.3 0.9 3 2.3 2.5 2.2 2 2.1 1.4 2.1v2.4C0.6 5 0 6 0 7.1c0 1.1 0.6 2.1 1.4 2.7C1.8 13.3 4.6 16 8 16c3.4 0 6.2-2.7 6.6-6.1l0-0.1C15.4 9.3 16 8.3 16 7.1 16 6 15.4 5 14.6 4.4zM8 1.3c1.4 0 2.7 0.6 3.7 1.5C11.5 3 11.2 3.1 11 3.2c-0.9-0.5-1.9-0.8-3-0.8 -1.1 0-2.1 0.3-3 0.8C4.8 3.1 4.5 3 4.3 2.8 5.3 1.9 6.6 1.3 8 1.3zM13.3 8.8v0.3c0 3.1-2.4 5.6-5.3 5.6 -2.9 0-5.3-2.5-5.3-5.5V8.9l0-5.3C3.5 3.8 4.3 4.3 5 4.8c0.9-0.6 1.9-1 3-1 1.1 0 2.2 0.4 3 1 0.6-0.6 1.4-1 2.2-1.2L13.3 8.8z',
            }),
            z('path', {
              fill: e.fill,
              d: 'M9.5 13.5C9.1 13.8 8.6 14 8 14c-0.6 0-1.1-0.2-1.5-0.5 0 0 0-0.2 0.1-0.3 0.1-0.2 0.2-0.2 0.2-0.2 0.4 0.1 0.8 0.2 1.2 0.2 0.4 0 0.8-0.1 1.2-0.2 0 0 0.1 0.1 0.2 0.3C9.5 13.4 9.5 13.5 9.5 13.5z',
            }),
            z('path', {
              fill: e.fill,
              d: 'M6.4 9.1c0.7 0.1 1.1 0.8 1.3 1.8 0 0-1.1 0-1.9 0 -0.3 0-0.7-0.1-0.8-0.2C4.1 10.1 4.1 9.3 4.1 9 4.1 9 5.5 9 6.4 9.1z',
            }),
            z('path', {
              fill: e.fill,
              d: 'M9.6 9.1c-0.7 0.1-1.1 0.8-1.3 1.8 0 0 1.1 0 1.9 0 0.3 0 0.7-0.1 0.8-0.2 0.8-0.5 0.8-1.3 0.8-1.6C11.9 9 10.5 9 9.6 9.1z',
            })
          );
        },
        S = r.createElement,
        L = function (e) {
          return S(
            'svg',
            Object(o.a)({ width: '20', height: '24', viewBox: '0 0 20 24' }, e),
            S('path', {
              fill: e.fill,
              d: 'M19.6 18.7c-0.4 0.8-0.8 1.6-1.3 2.3 -0.7 1-1.2 1.6-1.6 2C16 23.6 15.3 24 14.5 24c-0.5 0-1.2-0.2-2-0.5 -0.8-0.3-1.5-0.5-2.1-0.5 -0.7 0-1.4 0.2-2.2 0.5C7.6 23.8 6.9 24 6.5 24c-0.7 0-1.4-0.3-2.2-1 -0.5-0.4-1-1.1-1.7-2.1 -0.7-1-1.3-2.3-1.8-3.7C0.3 15.8 0 14.4 0 12.9c0-1.6 0.3-3 1-4.2 0.5-0.9 1.3-1.7 2.2-2.2C4.1 6 5.1 5.8 6.1 5.7c0.6 0 1.3 0.2 2.3 0.5 0.9 0.4 1.5 0.5 1.8 0.5 0.2 0 0.9-0.2 2-0.6 1.1-0.4 2-0.5 2.7-0.5 2 0.2 3.5 1 4.5 2.4 -1.8 1.1-2.7 2.6-2.7 4.6 0 1.5 0.6 2.8 1.6 3.8 0.5 0.5 1 0.8 1.6 1.1C19.9 18 19.7 18.3 19.6 18.7L19.6 18.7z',
            }),
            S('path', {
              fill: e.fill,
              d: 'M15 0.5c0 1.2-0.4 2.3-1.3 3.4 -1 1.2-2.3 1.9-3.7 1.8 0-0.1 0-0.3 0-0.5 0-1.2 0.5-2.4 1.4-3.4 0.4-0.5 1-0.9 1.7-1.3C13.7 0.2 14.4 0 15 0 15 0.2 15 0.3 15 0.5L15 0.5z',
            })
          );
        },
        V = r.createElement,
        P = function (e) {
          return V(
            'svg',
            Object(o.a)({ width: '24', height: '17', viewBox: '0 0 24 15' }, e),
            V('path', {
              fill: e.fill,
              d: 'M22.3 9.8c-0.8 0-1.8 0.2-2.5 0.7 -0.2 0.2-0.2 0.4 0 0.4 0.8-0.1 2.6-0.4 3 0.1 0.3 0.4-0.4 2.2-0.7 3 -0.1 0.3 0.1 0.3 0.3 0.2 1.4-1.2 1.7-3.7 1.5-4C23.8 9.9 23.1 9.8 22.3 9.8z',
            }),
            V('path', {
              fill: e.fill,
              d: 'M0.3 10.4c1.6 0.9 3.4 1.6 5.1 2.2 1.8 0.5 3.5 0.9 5.3 1 1.8 0.1 3.6-0.1 5.4-0.5 1.8-0.4 3.5-0.9 5.2-1.7l0 0c0.2-0.1 0.4 0 0.5 0.2 0.1 0.2 0 0.4-0.1 0.5 -1.6 1.2-3.4 2-5.3 2.5 -1.9 0.5-3.8 0.7-5.8 0.5 -1.9-0.1-3.8-0.6-5.6-1.3 -1.8-0.7-3.5-1.7-5-3C0 10.6 0 10.5 0 10.4 0.1 10.3 0.2 10.3 0.3 10.4L0.3 10.4z',
            }),
            V('path', {
              fill: e.fill,
              d: 'M21.7 3.3c0.5-0.3 1.1-0.2 1.6 0.2V2.6c-0.2-0.1-0.3-0.2-0.5-0.3 -0.5-0.1-1-0.1-1.5 0.1 -1 0.4-1.4 1.5-1.4 2.4 0 0.4 0.1 0.9 0.3 1.3 0.2 0.4 0.5 0.9 1 1.1 0.4 0.3 1 0.3 1.4 0.3 0.3 0 0.5-0.1 0.8-0.2V6.6c-0.6 0.1-1.3 0.1-1.7-0.2 -0.5-0.3-0.7-0.9-0.7-1.6C20.9 4.2 21.2 3.6 21.7 3.3z',
            }),
            V('path', {
              fill: e.fill,
              d: 'M16.1 4.7c-0.3-0.2-0.6-0.2-0.8-0.3 -0.2-0.1-0.9-0.2-0.9-0.8 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 1.3 0 1.9 0.3V2.6c-0.7-0.3-1.5-0.5-2.2-0.2 -0.6 0.2-1.1 0.7-1.2 1.1 -0.1 0.9 0.5 1.4 0.8 1.5 0.3 0.2 0.6 0.2 0.8 0.3 0.5 0.1 0.8 0.3 0.9 0.4C16 5.8 16 5.9 16 6.1s0 0.3-0.2 0.3c-0.3 0.2-0.8 0.2-1.2 0.2 -0.4 0-1-0.2-1.5-0.4v0.8c0.4 0.3 0.9 0.4 1.4 0.5 0.6 0.1 1.1 0.1 1.8-0.2C16.6 7.2 17 6.9 17 6.1 17 5.2 16.4 4.9 16.1 4.7z',
            }),
            V('path', {
              fill: e.fill,
              d: 'M7.2 4c0-0.1 0-0.2 0-0.3C7.1 3.2 6.8 2.8 6.4 2.6 6 2.4 5.5 2.3 5.1 2.5 4.7 2.6 4.3 2.8 3.9 2.9 3.8 2.8 3.6 2.7 3.5 2.6 3.1 2.4 2.6 2.3 2.2 2.5 2 2.6 1.7 2.7 1.4 2.8V2.3H0.4v5.3h1.1V3.6c0.4-0.1 0.7-0.2 1.1-0.3 0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5 0-0.2c0-0.1 0-0.2 0-0.3C4.7 3.6 5 3.5 5.4 3.4c0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5L7.2 4z',
            }),
            V('path', {
              fill: e.fill,
              d: 'M11.2 6.3c-0.2 0.1-0.3 0.1-0.5 0.2 -0.3 0.1-0.4 0.1-0.6 0.1C9.7 6.5 9.4 6.1 9.4 5.9c0-0.5 0-1.2 0-1.8l0-1.8 -1.1 0 0 1.8c0 0.6 0 1.2 0 1.8 0 0.5 0.3 0.9 0.6 1.1C9.2 7.3 9.6 7.5 10 7.5c0.4 0 0.8-0.1 1.1-0.3 0 0 0.1 0 0.1-0.1v0.2h1.1V2.3h-1.1V6.3z',
            }),
            V('rect', { fill: e.fill, x: '17.7', y: '2.3', width: '1.1', height: '5.3' }),
            V('ellipse', { fill: e.fill, cx: '18.2', cy: '0.8', rx: '0.7', ry: '0.8' })
          );
        },
        H = r.createElement,
        A = function (e) {
          return H(
            'svg',
            Object(o.a)({ viewBox: '0 0 32 14', width: '32', height: '14' }, e),
            H('path', {
              fill: e.fill,
              d: 'M0.4 8.4c-0.1 0-0.1 0.1-0.1 0.1L0 10.3 0.2 12c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1v0 0l0.3-1.8L0.5 8.5C0.5 8.4 0.4 8.4 0.4 8.4L0.4 8.4zM1.7 7.4c0-0.1-0.1-0.1-0.1-0.1 -0.1 0-0.1 0.1-0.1 0.1 0 0-0.3 2.9-0.3 2.9l0.3 2.8c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1L2 10.3 1.7 7.4 1.7 7.4zM6.6 4.7C6.5 4.7 6.4 4.8 6.4 5l-0.3 5.3 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2v0l0.3-3.4L6.9 5C6.9 4.8 6.8 4.7 6.6 4.7zM4.1 6.6C4 6.6 3.9 6.7 3.9 6.8l-0.3 3.5 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L4.3 6.8C4.3 6.7 4.2 6.6 4.1 6.6zM9.2 14c0.2 0 0.3-0.1 0.3-0.3l0.2-3.4L9.5 3.2c0-0.2-0.1-0.3-0.3-0.3C9.1 2.9 9 3 8.9 3.2l-0.2 7.1 0.2 3.4C9 13.8 9.1 14 9.2 14zM14.6 14c0.2 0 0.4-0.2 0.4-0.4v0 0l0.2-3.3L15 2.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.4 0.2-0.4 0.4L14 10.3c0 0 0.2 3.3 0.2 3.3C14.2 13.8 14.4 14 14.6 14zM11.9 14c0.2 0 0.3-0.2 0.4-0.4v0l0.2-3.3 -0.2-7.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.3 0.2-0.4 0.4l-0.2 7.1 0.2 3.3C11.5 13.8 11.7 14 11.9 14L11.9 14zM5.4 13.9c0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L5.6 7c0-0.1-0.1-0.2-0.2-0.2C5.2 6.8 5.1 6.9 5.1 7l-0.3 3.3 0.3 3.4C5.1 13.9 5.2 13.9 5.4 13.9zM2.8 13.8c0.1 0 0.2-0.1 0.2-0.2l0.3-3.3L3 6.9c0-0.1-0.1-0.2-0.2-0.2 -0.1 0-0.2 0.1-0.2 0.2l-0.3 3.4 0.3 3.3C2.7 13.7 2.7 13.8 2.8 13.8L2.8 13.8zM13.2 3c-0.2 0-0.4 0.2-0.4 0.4l-0.2 6.9 0.2 3.3c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.3 -0.2-6.9C13.6 3.2 13.4 3 13.2 3L13.2 3zM7.9 14c0.1 0 0.3-0.1 0.3-0.3l0.3-3.4L8.2 3.7c0-0.2-0.1-0.3-0.3-0.3 -0.1 0-0.3 0.1-0.3 0.3l-0.2 6.5 0.2 3.4C7.7 13.9 7.8 14 7.9 14zM10.9 13.7L10.9 13.7l0.2-3.4L10.9 3c0-0.2-0.1-0.3-0.3-0.3 -0.2 0-0.3 0.1-0.3 0.3L10 10.3l0.2 3.4c0 0.2 0.1 0.3 0.3 0.3C10.7 14 10.9 13.8 10.9 13.7L10.9 13.7 10.9 13.7zM28.1 6.1c-0.5 0-1.1 0.1-1.5 0.3C26.2 2.8 23.3 0 19.6 0c-0.9 0-1.8 0.2-2.5 0.5 -0.3 0.1-0.4 0.2-0.4 0.5v12.6c0 0.2 0.2 0.4 0.4 0.5 0 0 10.8 0 10.9 0 2.2 0 3.9-1.8 3.9-4C32 7.8 30.2 6.1 28.1 6.1L28.1 6.1zM15.9 0.9c-0.2 0-0.4 0.2-0.4 0.4l-0.2 8.9 0.2 3.2c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.2 -0.2-8.9C16.4 1.1 16.2 0.9 15.9 0.9L15.9 0.9z',
            })
          );
        },
        T = a.a.createElement;
      function N(e) {
        switch (e) {
          case 'facebook':
            return T(v, null);
          case 'twitter':
            return T(d, null);
          case 'instagram':
            return T(w, null);
          case 'linkedin':
            return T(C, null);
          case 'youtube':
            return T(s, null);
          case 'tiktok':
            return T(p, null);
          case 'snapchat':
            return T(m, null);
          case 'amazonMusic':
          case 'amazon':
            return T(P, null);
          case 'appleMusic':
          case 'apple':
            return T(L, null);
          case 'napster':
            return T(I, null);
          case 'spotify':
            return T(_, null);
          case 'tidal':
            return T(G, null);
          case 'soundcloud':
            return T(A, null);
          case 'deezer':
            return T(k, null);
          case 'pandora':
            return T(O, null);
          default:
            return T(l, null);
        }
      }
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('RIqP'),
        a = n('lwsE'),
        o = n('W8MJ'),
        i = (n('PJYZ'), n('7W2i')),
        l = n('a1gu'),
        c = n('Nsbk');
      function p(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var a = c(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n('q1tI'),
        s = (function (e) {
          i(n, e);
          var t = p(n);
          function n(e) {
            var o;
            return (
              a(this, n),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props)
                  );
              }),
              (o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances),
              o
            );
          }
          return (
            o(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange();
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(u.Component);
      t.default = s;
    },
    a1gu: function (e, t, n) {
      var r = n('cDf5'),
        a = n('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? a(e) : t;
      };
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/');
    },
    jtTr: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return a;
        });
        var r = n('q1tI'),
          a = function (t) {
            var n = Object(r.useState)(t),
              a = n[0],
              o = n[1];
            return (
              Object(r.useEffect)(function () {
                var t = function (t) {
                  var n, r, a;
                  (
                    (null === (n = e.env.NEXT_PUBLIC_APP_ALLOWED_ORIGINS) || void 0 === n ? void 0 : n.split(',')) || []
                  ).includes(t.origin) &&
                    'trac-editor' === (null === (r = t.data) || void 0 === r ? void 0 : r.origin) &&
                    null !== (a = t.data) &&
                    void 0 !== a &&
                    a.payload &&
                    o(
                      (function (e) {
                        try {
                          return JSON.parse(decodeURIComponent(escape(window.atob(e))));
                        } catch (t) {
                          return {};
                        }
                      })(t.data.payload)
                    );
                };
                return (
                  window.addEventListener('message', t, !1),
                  document.referrer &&
                    window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                  function () {
                    window.removeEventListener('message', t);
                  }
                );
              }, []),
              { pageData: a }
            );
          };
      }.call(this, n('8oxB')));
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var a = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = a;
    },
  },
]);
