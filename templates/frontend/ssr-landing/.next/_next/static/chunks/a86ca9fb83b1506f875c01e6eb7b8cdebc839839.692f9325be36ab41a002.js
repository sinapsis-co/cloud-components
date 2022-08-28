(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/0+H': function (e, t, o) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(r.default.useContext(a.AmpStateContext));
        });
      var n,
        r = (n = o('q1tI')) && n.__esModule ? n : { default: n },
        a = o('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          o = void 0 !== t && t,
          n = e.hybrid,
          r = void 0 !== n && n,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return o || (r && i);
      }
    },
    '7W2i': function (e, t, o) {
      var n = o('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && n(e, t);
      };
    },
    '8Kt/': function (e, t, o) {
      'use strict';
      var n = o('lSNA');
      function r(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var a,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var o = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
              a && (a.get || a.set) ? Object.defineProperty(o, r, a) : (o[r] = e[r]);
            }
          (o.default = e), t && t.set(e, o);
          return o;
        })(o('q1tI')),
        p = (a = o('Xuae')) && a.__esModule ? a : { default: a },
        l = o('lwAK'),
        c = o('FYa8'),
        u = o('/0+H');
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(i.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function h(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function m(e, t) {
        return e
          .reduce(function (e, t) {
            var o = i.default.Children.toArray(t.props.children);
            return e.concat(o);
          }, [])
          .reduce(h, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                o = new Set(),
                n = {};
              return function (r) {
                var a = !0,
                  i = !1;
                if (r.key && 'number' !== typeof r.key && r.key.indexOf('$') > 0) {
                  i = !0;
                  var p = r.key.slice(r.key.indexOf('$') + 1);
                  e.has(p) ? (a = !1) : e.add(p);
                }
                switch (r.type) {
                  case 'title':
                  case 'base':
                    t.has(r.type) ? (a = !1) : t.add(r.type);
                    break;
                  case 'meta':
                    for (var l = 0, c = f.length; l < c; l++) {
                      var u = f[l];
                      if (r.props.hasOwnProperty(u))
                        if ('charSet' === u) o.has(u) ? (a = !1) : o.add(u);
                        else {
                          var s = r.props[u],
                            d = n[u] || new Set();
                          ('name' === u && i) || !d.has(s) ? (d.add(s), (n[u] = d)) : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, o) {
            var a = e.key || o;
            if (
              !t.inAmpMode &&
              'link' === e.type &&
              e.props.href &&
              ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var p = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var o = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? r(Object(o), !0).forEach(function (t) {
                        n(e, t, o[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                    : r(Object(o)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (p['data-href'] = p.href),
                (p.href = void 0),
                (p['data-optimized-fonts'] = !0),
                i.default.cloneElement(e, p)
              );
            }
            return i.default.cloneElement(e, { key: a });
          });
      }
      function g(e) {
        var t = e.children,
          o = (0, i.useContext)(l.AmpStateContext),
          n = (0, i.useContext)(c.HeadManagerContext);
        return i.default.createElement(
          p.default,
          { reduceComponentsToState: m, headManager: n, inAmpMode: (0, u.isInAmpMode)(o) },
          t
        );
      }
      g.rewind = function () {};
      var y = g;
      t.default = y;
    },
    '9ixD': function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return u;
      });
      var n = o('g4pe'),
        r = o.n(n),
        a = o('q1tI'),
        i = o.n(a);
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      var l = {
          templateTitle: '',
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        c = function (e) {
          var t,
            o = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var n = '';
          e.title
            ? ((n = e.title),
              l.templateTitle &&
                (n = l.templateTitle.replace(/%s/g, function () {
                  return n;
                })))
            : e.defaultTitle && (n = e.defaultTitle),
            n && o.push(i.a.createElement('title', { key: 'title' }, n));
          var r = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            a = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
            p = '';
          if (e.robotsProps) {
            var c = e.robotsProps,
              u = c.nosnippet,
              s = c.maxSnippet,
              d = c.maxImagePreview,
              h = c.maxVideoPreview,
              f = c.noarchive,
              m = c.noimageindex,
              g = c.notranslate,
              y = c.unavailableAfter;
            p =
              (u ? ',nosnippet' : '') +
              (s ? ',max-snippet:' + s : '') +
              (d ? ',max-image-preview:' + d : '') +
              (f ? ',noarchive' : '') +
              (y ? ',unavailable_after:' + y : '') +
              (m ? ',noimageindex' : '') +
              (h ? ',max-video-preview:' + h : '') +
              (g ? ',notranslate' : '');
          }
          if (
            (r || a
              ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
                o.push(
                  i.a.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (r ? 'noindex' : 'index') + ',' + (a ? 'nofollow' : 'follow') + p,
                  })
                ),
                o.push(
                  i.a.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (r ? 'noindex' : 'index') + ',' + (a ? 'nofollow' : 'follow') + p,
                  })
                ))
              : (o.push(i.a.createElement('meta', { key: 'robots', name: 'robots', content: 'index,follow' + p })),
                o.push(
                  i.a.createElement('meta', { key: 'googlebot', name: 'googlebot', content: 'index,follow' + p })
                )),
            e.description &&
              o.push(i.a.createElement('meta', { key: 'description', name: 'description', content: e.description })),
            e.mobileAlternate &&
              o.push(
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
                o.push(
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
                o.push(
                  i.a.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: e.twitter.cardType })
                ),
              e.twitter.site &&
                o.push(
                  i.a.createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: e.twitter.site })
                ),
              e.twitter.handle &&
                o.push(
                  i.a.createElement('meta', {
                    key: 'twitter:creator',
                    name: 'twitter:creator',
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              o.push(i.a.createElement('meta', { key: 'fb:app_id', property: 'fb:app_id', content: e.facebook.appId })),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                o.push(
                  i.a.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var v = e.openGraph.type.toLowerCase();
              o.push(i.a.createElement('meta', { key: 'og:type', property: 'og:type', content: v })),
                'profile' === v && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'profile:gender',
                          property: 'profile:gender',
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : 'book' === v && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        o.push(
                          i.a.createElement('meta', { key: 'book:author:0' + t, property: 'book:author', content: e })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        o.push(i.a.createElement('meta', { key: 'book:tag:0' + t, property: 'book:tag', content: e }));
                      }))
                  : 'article' === v && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        o.push(
                          i.a.createElement('meta', {
                            key: 'article:author:0' + t,
                            property: 'article:author',
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        o.push(
                          i.a.createElement('meta', { key: 'article:tag:0' + t, property: 'article:tag', content: e })
                        );
                      }))
                  : ('video.movie' !== v && 'video.episode' !== v && 'video.tv_show' !== v && 'video.other' !== v) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          o.push(
                            i.a.createElement('meta', {
                              key: 'video:actor:0' + t,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            o.push(
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
                        o.push(
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
                        o.push(
                          i.a.createElement('meta', { key: 'video:writer:0' + t, property: 'video:writer', content: e })
                        );
                      }),
                    e.openGraph.video.duration &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        o.push(
                          i.a.createElement('meta', { key: 'video:tag:0' + t, property: 'video:tag', content: e })
                        );
                      }),
                    e.openGraph.video.series &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            (e.openGraph.title || e.title) &&
              o.push(
                i.a.createElement('meta', { key: 'og:title', property: 'og:title', content: e.openGraph.title || n })
              ),
              (e.openGraph.description || e.description) &&
                o.push(
                  i.a.createElement('meta', {
                    key: 'og:description',
                    property: 'og:description',
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth && (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight && (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, t) {
                  o.push(i.a.createElement('meta', { key: 'og:image:0' + t, property: 'og:image', content: e.url })),
                    e.alt &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'og:image:alt0' + t,
                          property: 'og:image:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? o.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: e.width.toString(),
                          })
                        )
                      : l.defaultOpenGraphImageWidth &&
                        o.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: l.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? o.push(
                          i.a.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: e.height.toString(),
                          })
                        )
                      : l.defaultOpenGraphImageHeight &&
                        o.push(
                          i.a.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: l.defaultOpenGraphImageHeight.toString(),
                          })
                        );
                }),
              e.defaultOpenGraphVideoWidth && (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight && (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, t) {
                  o.push(i.a.createElement('meta', { key: 'og:video:0' + t, property: 'og:video', content: e.url })),
                    e.alt &&
                      o.push(
                        i.a.createElement('meta', {
                          key: 'og:video:alt0' + t,
                          property: 'og:video:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? o.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: e.width.toString(),
                          })
                        )
                      : l.defaultOpenGraphVideoWidth &&
                        o.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: l.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? o.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: e.height.toString(),
                          })
                        )
                      : l.defaultOpenGraphVideoHeight &&
                        o.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: l.defaultOpenGraphVideoHeight.toString(),
                          })
                        );
                }),
              e.openGraph.locale &&
                o.push(
                  i.a.createElement('meta', { key: 'og:locale', property: 'og:locale', content: e.openGraph.locale })
                ),
              e.openGraph.site_name &&
                o.push(
                  i.a.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical && o.push(i.a.createElement('link', { rel: 'canonical', href: e.canonical, key: 'canonical' })),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, n, r;
                o.push(
                  i.a.createElement(
                    'meta',
                    Object.assign(
                      {
                        key:
                          'meta:' +
                          (null != (t = null != (n = null != (r = e.keyOverride) ? r : e.name) ? n : e.property)
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
                o.push(
                  i.a.createElement(
                    'link',
                    Object.assign({ key: 'link' + (null != (t = e.keyOverride) ? t : e.href) + e.rel }, e)
                  )
                );
              }),
            o
          );
        },
        u =
          (a.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              p(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  o = e.noindex,
                  n = void 0 !== o && o,
                  a = e.nofollow,
                  p = e.robotsProps,
                  l = e.description,
                  u = e.canonical,
                  s = e.openGraph,
                  d = e.facebook,
                  h = e.twitter,
                  f = e.additionalMetaTags,
                  m = e.titleTemplate,
                  g = e.mobileAlternate,
                  y = e.languageAlternates,
                  v = e.additionalLinkTags;
                return i.a.createElement(
                  r.a,
                  null,
                  c({
                    title: t,
                    noindex: n,
                    nofollow: a,
                    robotsProps: p,
                    description: l,
                    canonical: u,
                    facebook: d,
                    openGraph: s,
                    additionalMetaTags: f,
                    twitter: h,
                    titleTemplate: m,
                    mobileAlternate: g,
                    languageAlternates: y,
                    additionalLinkTags: v,
                  })
                );
              }),
              t
            );
          })(a.Component));
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
    FYa8: function (e, t, o) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var r = ((n = o('q1tI')) && n.__esModule ? n : { default: n }).default.createContext({});
      t.HeadManagerContext = r;
    },
    Ff2n: function (e, t, o) {
      'use strict';
      function n(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var o,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (o = a[n]), t.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
        }
        return r;
      }
      o.d(t, 'a', function () {
        return n;
      });
    },
    Ijbi: function (e, t, o) {
      var n = o('WkPL');
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    Nsbk: function (e, t) {
      function o(t) {
        return (
          (e.exports = o =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          o(t)
        );
      }
      e.exports = o;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    RIqP: function (e, t, o) {
      var n = o('Ijbi'),
        r = o('EbDI'),
        a = o('ZhPi'),
        i = o('Bnag');
      e.exports = function (e) {
        return n(e) || r(e) || a(e) || i();
      };
    },
    Xuae: function (e, t, o) {
      'use strict';
      var n = o('RIqP'),
        r = o('lwsE'),
        a = o('W8MJ'),
        i = (o('PJYZ'), o('7W2i')),
        p = o('a1gu'),
        l = o('Nsbk');
      function c(e) {
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
          var o,
            n = l(e);
          if (t) {
            var r = l(this).constructor;
            o = Reflect.construct(n, arguments, r);
          } else o = n.apply(this, arguments);
          return p(this, o);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = o('q1tI'),
        s = (function (e) {
          i(o, e);
          var t = c(o);
          function o(e) {
            var a;
            return (
              r(this, o),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances), a.props)
                  );
              }),
              (a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(o, [
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
            o
          );
        })(u.Component);
      t.default = s;
    },
    a1gu: function (e, t, o) {
      var n = o('cDf5'),
        r = o('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== n(t) && 'function' !== typeof t) ? r(e) : t;
      };
    },
    g4pe: function (e, t, o) {
      e.exports = o('8Kt/');
    },
    jtTr: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return r;
      });
      var n = o('q1tI'),
        r = function (e) {
          var t = Object(n.useState)(e),
            o = t[0],
            r = t[1];
          return (
            Object(n.useEffect)(function () {
              var e = function (e) {
                  try {
                    return JSON.parse(decodeURIComponent(escape(window.atob(e))));
                  } catch (t) {
                    return {};
                  }
                },
                t = function (t) {
                  var o, n, a, i;
                  console.log('event: ', t),
                    console.log('event: ', null === (o = t.data) || void 0 === o ? void 0 : o.origin),
                    console.log('event.data.payload: ', e(t.data.payload)),
                    (
                      (null === (n = 'http://localhost:3000,https://app.development.trac.co')
                        ? void 0
                        : n.split(',')) || []
                    ).includes(t.origin) &&
                      'trac-editor' === (null === (a = t.data) || void 0 === a ? void 0 : a.origin) &&
                      null !== (i = t.data) &&
                      void 0 !== i &&
                      i.payload &&
                      r(e(t.data.payload));
                };
              window.addEventListener('message', t, !1),
                console.log('document.referrer: ', document.referrer),
                console.log('Window.location: ', window.location.href);
              var o = window.location != window.parent.location ? document.referrer : document.location.href;
              return (
                console.log('parent: ', o),
                document.referrer &&
                  window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                function () {
                  window.removeEventListener('message', t);
                }
              );
            }, []),
            { pageData: o }
          );
        };
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = o),
          e
        );
      };
    },
    lwAK: function (e, t, o) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var r = ((n = o('q1tI')) && n.__esModule ? n : { default: n }).default.createContext({});
      t.AmpStateContext = r;
    },
    zoQI: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return c;
      });
      var n = o('wx14'),
        r = o('Ff2n'),
        a = o('q1tI'),
        i = o.n(a),
        p = o('vOnD'),
        l = i.a.createElement;
      function c(e) {
        var t = e.children,
          o = e.variant,
          a = void 0 === o ? 'accent' : o,
          i = e.fullWidth,
          p = void 0 !== i && i,
          c = e.className,
          s = Object(r.a)(e, ['children', 'variant', 'fullWidth', 'className']);
        return l(u, Object(n.a)({ variant: a, fullWidth: p, className: c || '' }, s), t);
      }
      var u = p.e.button.withConfig({ displayName: 'button__StyledButton', componentId: 'sc-1n9tfjy-0' })(
        [
          'font-weight:bold;font-size:16px;line-height:24px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:5px;cursor:pointer;font-family:',
          ';transition:background-color ',
          ';&:hover{opacity:0.8;}',
          ' ',
          ' ',
          ' @media (max-width:',
          '){height:70px;}',
        ],
        function (e) {
          return e.theme.fontFamily;
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
        },
        function (e) {
          return e.fullWidth && Object(p.d)(['width:100%;']);
        },
        function (e) {
          var t = e.variant,
            o = e.theme;
          return 'accent' === t
            ? Object(p.d)(
                ['color:white;background-color:', ';&:hover{background-color:', ';}'],
                o.colors.accent,
                o.colors.accentHover
              )
            : Object(p.d)(
                ['color:#111111;background-color:', ';&:hover{background-color:', ';}'],
                o.colors.secondary,
                o.colors.secondaryHover
              );
        },
        function (e) {
          return e.disabled && Object(p.d)(['opacity:0.5;cursor:not-allowed;']);
        },
        function (e) {
          var t = e.theme;
          return ''.concat(t.breakpoints.tablet, 'px');
        }
      );
    },
  },
]);
