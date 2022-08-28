(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(r.AmpStateContext));
        });
      var a,
        o = (a = n('q1tI')) && a.__esModule ? a : { default: a },
        r = n('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          a = e.hybrid,
          o = void 0 !== a && a,
          r = e.hasQuery,
          i = void 0 !== r && r;
        return n || (o && i);
      }
    },
    '7W2i': function (e, t, n) {
      var a = n('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && a(e, t);
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      n('lSNA');
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var a,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set) ? Object.defineProperty(n, o, r) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        r = (a = n('Xuae')) && a.__esModule ? a : { default: a },
        i = n('lwAK'),
        p = n('FYa8'),
        l = n('/0+H');
      function c() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(o.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var s = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                a = {};
              return function (o) {
                var r = !0,
                  i = !1;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  i = !0;
                  var p = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(p) ? (r = !1) : e.add(p);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (r = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var l = 0, c = s.length; l < c; l++) {
                      var u = s[l];
                      if (o.props.hasOwnProperty(u))
                        if ('charSet' === u) n.has(u) ? (r = !1) : n.add(u);
                        else {
                          var d = o.props[u],
                            h = a[u] || new Set();
                          ('name' === u && i) || !h.has(d) ? (h.add(d), (a[u] = h)) : (r = !1);
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      function f(e) {
        var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          a = (0, o.useContext)(p.HeadManagerContext);
        return o.default.createElement(
          r.default,
          { reduceComponentsToState: h, headManager: a, inAmpMode: (0, l.isInAmpMode)(n) },
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
      var a = n('g4pe'),
        o = n.n(a),
        r = n('q1tI'),
        i = n.n(r);
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
            n = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var a = '';
          e.title
            ? ((a = e.title),
              l.templateTitle &&
                (a = l.templateTitle.replace(/%s/g, function () {
                  return a;
                })))
            : e.defaultTitle && (a = e.defaultTitle),
            a && n.push(i.a.createElement('title', { key: 'title' }, a));
          var o = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            r = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
            p = '';
          if (e.robotsProps) {
            var c = e.robotsProps,
              u = c.nosnippet,
              d = c.maxSnippet,
              s = c.maxImagePreview,
              h = c.maxVideoPreview,
              f = c.noarchive,
              m = c.noimageindex,
              g = c.notranslate,
              y = c.unavailableAfter;
            p =
              (u ? ',nosnippet' : '') +
              (d ? ',max-snippet:' + d : '') +
              (s ? ',max-image-preview:' + s : '') +
              (f ? ',noarchive' : '') +
              (y ? ',unavailable_after:' + y : '') +
              (m ? ',noimageindex' : '') +
              (h ? ',max-video-preview:' + h : '') +
              (g ? ',notranslate' : '');
          }
          if (
            (o || r
              ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
                n.push(
                  i.a.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (o ? 'noindex' : 'index') + ',' + (r ? 'nofollow' : 'follow') + p,
                  })
                ),
                n.push(
                  i.a.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (o ? 'noindex' : 'index') + ',' + (r ? 'nofollow' : 'follow') + p,
                  })
                ))
              : (n.push(i.a.createElement('meta', { key: 'robots', name: 'robots', content: 'index,follow' + p })),
                n.push(
                  i.a.createElement('meta', { key: 'googlebot', name: 'googlebot', content: 'index,follow' + p })
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
              var v = e.openGraph.type.toLowerCase();
              n.push(i.a.createElement('meta', { key: 'og:type', property: 'og:type', content: v })),
                'profile' === v && e.openGraph.profile
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
                  : 'book' === v && e.openGraph.book
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
                  : 'article' === v && e.openGraph.article
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
                  : ('video.movie' !== v && 'video.episode' !== v && 'video.tv_show' !== v && 'video.other' !== v) ||
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
                i.a.createElement('meta', { key: 'og:title', property: 'og:title', content: e.openGraph.title || a })
              ),
              (e.openGraph.description || e.description) &&
                n.push(
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
                      : l.defaultOpenGraphImageWidth &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: l.defaultOpenGraphImageWidth.toString(),
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
                      : l.defaultOpenGraphImageHeight &&
                        n.push(
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
                      : l.defaultOpenGraphVideoWidth &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: l.defaultOpenGraphVideoWidth.toString(),
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
                      : l.defaultOpenGraphVideoHeight &&
                        n.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: l.defaultOpenGraphVideoHeight.toString(),
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
                var t, a, o;
                n.push(
                  i.a.createElement(
                    'meta',
                    Object.assign(
                      {
                        key:
                          'meta:' +
                          (null != (t = null != (a = null != (o = e.keyOverride) ? o : e.name) ? a : e.property)
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
          (r.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              p(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  n = e.noindex,
                  a = void 0 !== n && n,
                  r = e.nofollow,
                  p = e.robotsProps,
                  l = e.description,
                  u = e.canonical,
                  d = e.openGraph,
                  s = e.facebook,
                  h = e.twitter,
                  f = e.additionalMetaTags,
                  m = e.titleTemplate,
                  g = e.mobileAlternate,
                  y = e.languageAlternates,
                  v = e.additionalLinkTags;
                return i.a.createElement(
                  o.a,
                  null,
                  c({
                    title: t,
                    noindex: a,
                    nofollow: r,
                    robotsProps: p,
                    description: l,
                    canonical: u,
                    facebook: s,
                    openGraph: d,
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
          })(r.Component));
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
    FYa8: function (e, t, n) {
      'use strict';
      var a;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((a = n('q1tI')) && a.__esModule ? a : { default: a }).default.createContext({});
      t.HeadManagerContext = o;
    },
    Ff2n: function (e, t, n) {
      'use strict';
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      n.d(t, 'a', function () {
        return a;
      });
    },
    Ijbi: function (e, t, n) {
      var a = n('WkPL');
      e.exports = function (e) {
        if (Array.isArray(e)) return a(e);
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
      var a = n('Ijbi'),
        o = n('EbDI'),
        r = n('ZhPi'),
        i = n('Bnag');
      e.exports = function (e) {
        return a(e) || o(e) || r(e) || i();
      };
    },
    Xuae: function (e, t, n) {
      'use strict';
      var a = n('RIqP'),
        o = n('lwsE'),
        r = n('W8MJ'),
        i = (n('PJYZ'), n('7W2i')),
        p = n('a1gu'),
        l = n('Nsbk');
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
          var n,
            a = l(e);
          if (t) {
            var o = l(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return p(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n('q1tI'),
        d = (function (e) {
          i(n, e);
          var t = c(n);
          function n(e) {
            var r;
            return (
              o(this, n),
              ((r = t.call(this, e))._hasHeadManager = void 0),
              (r.emitChange = function () {
                r._hasHeadManager &&
                  r.props.headManager.updateHead(
                    r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances), r.props)
                  );
              }),
              (r._hasHeadManager = r.props.headManager && r.props.headManager.mountedInstances),
              r
            );
          }
          return (
            r(n, [
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
      t.default = d;
    },
    a1gu: function (e, t, n) {
      var a = n('cDf5'),
        o = n('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== a(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/');
    },
    jtTr: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var a = n('q1tI'),
        o = function (e) {
          var t = Object(a.useState)(e),
            n = t[0],
            o = t[1];
          return (
            Object(a.useEffect)(function () {
              var e = function (e) {
                var t, n, a;
                ((null === (t = 'https://app.trac.co') ? void 0 : t.split(',')) || []).includes(e.origin) &&
                  'trac-editor' === (null === (n = e.data) || void 0 === n ? void 0 : n.origin) &&
                  null !== (a = e.data) &&
                  void 0 !== a &&
                  a.payload &&
                  o(
                    (function (e) {
                      try {
                        return JSON.parse(decodeURIComponent(escape(window.atob(e))));
                      } catch (t) {
                        return {};
                      }
                    })(e.data.payload)
                  );
              };
              return (
                window.addEventListener('message', e, !1),
                document.referrer &&
                  window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
                function () {
                  window.removeEventListener('message', e);
                }
              );
            }, []),
            { pageData: n }
          );
        };
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
      var a;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((a = n('q1tI')) && a.__esModule ? a : { default: a }).default.createContext({});
      t.AmpStateContext = o;
    },
  },
]);
