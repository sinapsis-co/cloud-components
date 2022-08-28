(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/0+H': function (e, t, a) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(r.AmpStateContext));
        });
      var n,
        o = (n = a('q1tI')) && n.__esModule ? n : { default: n },
        r = a('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          a = void 0 !== t && t,
          n = e.hybrid,
          o = void 0 !== n && n,
          r = e.hasQuery,
          i = void 0 !== r && r;
        return a || (o && i);
      }
    },
    '7W2i': function (e, t, a) {
      var n = a('SksO');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && n(e, t);
      };
    },
    '8Kt/': function (e, t, a) {
      'use strict';
      a('lSNA');
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var a = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var r = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
            }
          (a.default = e), t && t.set(e, a);
          return a;
        })(a('q1tI')),
        r = (n = a('Xuae')) && n.__esModule ? n : { default: n },
        i = a('lwAK'),
        p = a('FYa8'),
        l = a('/0+H');
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
      function s(e, t) {
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
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var a = o.default.Children.toArray(t.props.children);
            return e.concat(a);
          }, [])
          .reduce(s, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                a = new Set(),
                n = {};
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
                    for (var l = 0, c = d.length; l < c; l++) {
                      var u = d[l];
                      if (o.props.hasOwnProperty(u))
                        if ('charSet' === u) a.has(u) ? (r = !1) : a.add(u);
                        else {
                          var s = o.props[u],
                            h = n[u] || new Set();
                          ('name' === u && i) || !h.has(s) ? (h.add(s), (n[u] = h)) : (r = !1);
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var a = e.key || t;
            return o.default.cloneElement(e, { key: a });
          });
      }
      function f(e) {
        var t = e.children,
          a = (0, o.useContext)(i.AmpStateContext),
          n = (0, o.useContext)(p.HeadManagerContext);
        return o.default.createElement(
          r.default,
          { reduceComponentsToState: h, headManager: n, inAmpMode: (0, l.isInAmpMode)(a) },
          t
        );
      }
      f.rewind = function () {};
      var m = f;
      t.default = m;
    },
    '9ixD': function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return u;
      });
      var n = a('g4pe'),
        o = a.n(n),
        r = a('q1tI'),
        i = a.n(r);
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
            a = [];
          e.titleTemplate && (l.templateTitle = e.titleTemplate);
          var n = '';
          e.title
            ? ((n = e.title),
              l.templateTitle &&
                (n = l.templateTitle.replace(/%s/g, function () {
                  return n;
                })))
            : e.defaultTitle && (n = e.defaultTitle),
            n && a.push(i.a.createElement('title', { key: 'title' }, n));
          var o = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
            r = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
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
            (o || r
              ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0),
                a.push(
                  i.a.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (o ? 'noindex' : 'index') + ',' + (r ? 'nofollow' : 'follow') + p,
                  })
                ),
                a.push(
                  i.a.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (o ? 'noindex' : 'index') + ',' + (r ? 'nofollow' : 'follow') + p,
                  })
                ))
              : (a.push(i.a.createElement('meta', { key: 'robots', name: 'robots', content: 'index,follow' + p })),
                a.push(
                  i.a.createElement('meta', { key: 'googlebot', name: 'googlebot', content: 'index,follow' + p })
                )),
            e.description &&
              a.push(i.a.createElement('meta', { key: 'description', name: 'description', content: e.description })),
            e.mobileAlternate &&
              a.push(
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
                a.push(
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
                a.push(
                  i.a.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: e.twitter.cardType })
                ),
              e.twitter.site &&
                a.push(
                  i.a.createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: e.twitter.site })
                ),
              e.twitter.handle &&
                a.push(
                  i.a.createElement('meta', {
                    key: 'twitter:creator',
                    name: 'twitter:creator',
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              a.push(i.a.createElement('meta', { key: 'fb:app_id', property: 'fb:app_id', content: e.facebook.appId })),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                a.push(
                  i.a.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var v = e.openGraph.type.toLowerCase();
              a.push(i.a.createElement('meta', { key: 'og:type', property: 'og:type', content: v })),
                'profile' === v && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      a.push(
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
                        a.push(
                          i.a.createElement('meta', { key: 'book:author:0' + t, property: 'book:author', content: e })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        a.push(i.a.createElement('meta', { key: 'book:tag:0' + t, property: 'book:tag', content: e }));
                      }))
                  : 'article' === v && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        a.push(
                          i.a.createElement('meta', {
                            key: 'article:author:0' + t,
                            property: 'article:author',
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        a.push(
                          i.a.createElement('meta', { key: 'article:tag:0' + t, property: 'article:tag', content: e })
                        );
                      }))
                  : ('video.movie' !== v && 'video.episode' !== v && 'video.tv_show' !== v && 'video.other' !== v) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          a.push(
                            i.a.createElement('meta', {
                              key: 'video:actor:0' + t,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            a.push(
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
                        a.push(
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
                        a.push(
                          i.a.createElement('meta', { key: 'video:writer:0' + t, property: 'video:writer', content: e })
                        );
                      }),
                    e.openGraph.video.duration &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        a.push(
                          i.a.createElement('meta', { key: 'video:tag:0' + t, property: 'video:tag', content: e })
                        );
                      }),
                    e.openGraph.video.series &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            (e.openGraph.title || e.title) &&
              a.push(
                i.a.createElement('meta', { key: 'og:title', property: 'og:title', content: e.openGraph.title || n })
              ),
              (e.openGraph.description || e.description) &&
                a.push(
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
                  a.push(i.a.createElement('meta', { key: 'og:image:0' + t, property: 'og:image', content: e.url })),
                    e.alt &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'og:image:alt0' + t,
                          property: 'og:image:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? a.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: e.width.toString(),
                          })
                        )
                      : l.defaultOpenGraphImageWidth &&
                        a.push(
                          i.a.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: l.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? a.push(
                          i.a.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: e.height.toString(),
                          })
                        )
                      : l.defaultOpenGraphImageHeight &&
                        a.push(
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
                  a.push(i.a.createElement('meta', { key: 'og:video:0' + t, property: 'og:video', content: e.url })),
                    e.alt &&
                      a.push(
                        i.a.createElement('meta', {
                          key: 'og:video:alt0' + t,
                          property: 'og:video:alt',
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? a.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: e.width.toString(),
                          })
                        )
                      : l.defaultOpenGraphVideoWidth &&
                        a.push(
                          i.a.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: l.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? a.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: e.height.toString(),
                          })
                        )
                      : l.defaultOpenGraphVideoHeight &&
                        a.push(
                          i.a.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: l.defaultOpenGraphVideoHeight.toString(),
                          })
                        );
                }),
              e.openGraph.locale &&
                a.push(
                  i.a.createElement('meta', { key: 'og:locale', property: 'og:locale', content: e.openGraph.locale })
                ),
              e.openGraph.site_name &&
                a.push(
                  i.a.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical && a.push(i.a.createElement('link', { rel: 'canonical', href: e.canonical, key: 'canonical' })),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, n, o;
                a.push(
                  i.a.createElement(
                    'meta',
                    Object.assign(
                      {
                        key:
                          'meta:' +
                          (null != (t = null != (n = null != (o = e.keyOverride) ? o : e.name) ? n : e.property)
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
                a.push(
                  i.a.createElement(
                    'link',
                    Object.assign({ key: 'link' + (null != (t = e.keyOverride) ? t : e.href) + e.rel }, e)
                  )
                );
              }),
            a
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
                  a = e.noindex,
                  n = void 0 !== a && a,
                  r = e.nofollow,
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
                  o.a,
                  null,
                  c({
                    title: t,
                    noindex: n,
                    nofollow: r,
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
    FYa8: function (e, t, a) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((n = a('q1tI')) && n.__esModule ? n : { default: n }).default.createContext({});
      t.HeadManagerContext = o;
    },
    Ff2n: function (e, t, a) {
      'use strict';
      function n(e, t) {
        if (null == e) return {};
        var a,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              o = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]));
        }
        return o;
      }
      a.d(t, 'a', function () {
        return n;
      });
    },
    Ijbi: function (e, t, a) {
      var n = a('WkPL');
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    Nsbk: function (e, t) {
      function a(t) {
        return (
          (e.exports = a =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          a(t)
        );
      }
      e.exports = a;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      };
    },
    RIqP: function (e, t, a) {
      var n = a('Ijbi'),
        o = a('EbDI'),
        r = a('ZhPi'),
        i = a('Bnag');
      e.exports = function (e) {
        return n(e) || o(e) || r(e) || i();
      };
    },
    Xuae: function (e, t, a) {
      'use strict';
      var n = a('RIqP'),
        o = a('lwsE'),
        r = a('W8MJ'),
        i = (a('PJYZ'), a('7W2i')),
        p = a('a1gu'),
        l = a('Nsbk');
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
          var a,
            n = l(e);
          if (t) {
            var o = l(this).constructor;
            a = Reflect.construct(n, arguments, o);
          } else a = n.apply(this, arguments);
          return p(this, a);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = a('q1tI'),
        s = (function (e) {
          i(a, e);
          var t = c(a);
          function a(e) {
            var r;
            return (
              o(this, a),
              ((r = t.call(this, e))._hasHeadManager = void 0),
              (r.emitChange = function () {
                r._hasHeadManager &&
                  r.props.headManager.updateHead(
                    r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances), r.props)
                  );
              }),
              (r._hasHeadManager = r.props.headManager && r.props.headManager.mountedInstances),
              r
            );
          }
          return (
            r(a, [
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
            a
          );
        })(u.Component);
      t.default = s;
    },
    a1gu: function (e, t, a) {
      var n = a('cDf5'),
        o = a('PJYZ');
      e.exports = function (e, t) {
        return !t || ('object' !== n(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    g4pe: function (e, t, a) {
      e.exports = a('8Kt/');
    },
    jtTr: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return o;
      });
      var n = a('q1tI'),
        o = function (e) {
          var t = Object(n.useState)(e),
            a = t[0],
            o = t[1];
          return (
            Object(n.useEffect)(function () {
              var e = function (e) {
                var t, a, n;
                (
                  (null === (t = 'http://localhost:3000,https://app.trac-dev.sinapsis.co') ? void 0 : t.split(',')) ||
                  []
                ).includes(e.origin) &&
                  'trac-editor' === (null === (a = e.data) || void 0 === a ? void 0 : a.origin) &&
                  null !== (n = e.data) &&
                  void 0 !== n &&
                  n.payload &&
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
            { pageData: a }
          );
        };
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      };
    },
    lwAK: function (e, t, a) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((n = a('q1tI')) && n.__esModule ? n : { default: n }).default.createContext({});
      t.AmpStateContext = o;
    },
  },
]);
