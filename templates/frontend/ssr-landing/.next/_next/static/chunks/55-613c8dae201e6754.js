'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55],
  {
    2962: function (e, t, o) {
      o.d(t, {
        PB: function () {
          return l;
        },
      });
      var a = o(9008),
        r = o(7294);
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      var p = {
          templateTitle: '',
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        i = function (e) {
          var t,
            o = [];
          e.titleTemplate && (p.templateTitle = e.titleTemplate);
          var a = '';
          e.title
            ? ((a = e.title),
              p.templateTitle &&
                (a = p.templateTitle.replace(/%s/g, function () {
                  return a;
                })))
            : e.defaultTitle && (a = e.defaultTitle),
            a && o.push(r.createElement('title', { key: 'title' }, a));
          var n = e.noindex || p.noindex || e.dangerouslySetAllPagesToNoIndex,
            i = e.nofollow || p.nofollow || e.dangerouslySetAllPagesToNoFollow,
            l = '';
          if (e.robotsProps) {
            var h = e.robotsProps,
              c = h.nosnippet,
              d = h.maxSnippet,
              m = h.maxImagePreview,
              s = h.maxVideoPreview,
              g = h.noarchive,
              u = h.noimageindex,
              f = h.notranslate,
              y = h.unavailableAfter;
            l =
              (c ? ',nosnippet' : '') +
              (d ? ',max-snippet:' + d : '') +
              (m ? ',max-image-preview:' + m : '') +
              (g ? ',noarchive' : '') +
              (y ? ',unavailable_after:' + y : '') +
              (u ? ',noimageindex' : '') +
              (s ? ',max-video-preview:' + s : '') +
              (f ? ',notranslate' : '');
          }
          if (
            (n || i
              ? (e.dangerouslySetAllPagesToNoIndex && (p.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (p.nofollow = !0),
                o.push(
                  r.createElement('meta', {
                    key: 'robots',
                    name: 'robots',
                    content: (n ? 'noindex' : 'index') + ',' + (i ? 'nofollow' : 'follow') + l,
                  })
                ),
                o.push(
                  r.createElement('meta', {
                    key: 'googlebot',
                    name: 'googlebot',
                    content: (n ? 'noindex' : 'index') + ',' + (i ? 'nofollow' : 'follow') + l,
                  })
                ))
              : (o.push(r.createElement('meta', { key: 'robots', name: 'robots', content: 'index,follow' + l })),
                o.push(r.createElement('meta', { key: 'googlebot', name: 'googlebot', content: 'index,follow' + l }))),
            e.description &&
              o.push(r.createElement('meta', { key: 'description', name: 'description', content: e.description })),
            e.mobileAlternate &&
              o.push(
                r.createElement('link', {
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
                  r.createElement('link', {
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
                  r.createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: e.twitter.cardType })
                ),
              e.twitter.site &&
                o.push(r.createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: e.twitter.site })),
              e.twitter.handle &&
                o.push(
                  r.createElement('meta', {
                    key: 'twitter:creator',
                    name: 'twitter:creator',
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              o.push(r.createElement('meta', { key: 'fb:app_id', property: 'fb:app_id', content: e.facebook.appId })),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                o.push(
                  r.createElement('meta', {
                    key: 'og:url',
                    property: 'og:url',
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var G = e.openGraph.type.toLowerCase();
              o.push(r.createElement('meta', { key: 'og:type', property: 'og:type', content: G })),
                'profile' === G && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      o.push(
                        r.createElement('meta', {
                          key: 'profile:first_name',
                          property: 'profile:first_name',
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      o.push(
                        r.createElement('meta', {
                          key: 'profile:last_name',
                          property: 'profile:last_name',
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      o.push(
                        r.createElement('meta', {
                          key: 'profile:username',
                          property: 'profile:username',
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      o.push(
                        r.createElement('meta', {
                          key: 'profile:gender',
                          property: 'profile:gender',
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : 'book' === G && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        o.push(
                          r.createElement('meta', { key: 'book:author:0' + t, property: 'book:author', content: e })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      o.push(
                        r.createElement('meta', {
                          key: 'book:isbn',
                          property: 'book:isbn',
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      o.push(
                        r.createElement('meta', {
                          key: 'book:release_date',
                          property: 'book:release_date',
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        o.push(r.createElement('meta', { key: 'book:tag:0' + t, property: 'book:tag', content: e }));
                      }))
                  : 'article' === G && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      o.push(
                        r.createElement('meta', {
                          key: 'article:published_time',
                          property: 'article:published_time',
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      o.push(
                        r.createElement('meta', {
                          key: 'article:modified_time',
                          property: 'article:modified_time',
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      o.push(
                        r.createElement('meta', {
                          key: 'article:expiration_time',
                          property: 'article:expiration_time',
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        o.push(
                          r.createElement('meta', {
                            key: 'article:author:0' + t,
                            property: 'article:author',
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      o.push(
                        r.createElement('meta', {
                          key: 'article:section',
                          property: 'article:section',
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        o.push(
                          r.createElement('meta', { key: 'article:tag:0' + t, property: 'article:tag', content: e })
                        );
                      }))
                  : ('video.movie' !== G && 'video.episode' !== G && 'video.tv_show' !== G && 'video.other' !== G) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          o.push(
                            r.createElement('meta', {
                              key: 'video:actor:0' + t,
                              property: 'video:actor',
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            o.push(
                              r.createElement('meta', {
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
                          r.createElement('meta', {
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
                          r.createElement('meta', { key: 'video:writer:0' + t, property: 'video:writer', content: e })
                        );
                      }),
                    e.openGraph.video.duration &&
                      o.push(
                        r.createElement('meta', {
                          key: 'video:duration',
                          property: 'video:duration',
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      o.push(
                        r.createElement('meta', {
                          key: 'video:release_date',
                          property: 'video:release_date',
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        o.push(r.createElement('meta', { key: 'video:tag:0' + t, property: 'video:tag', content: e }));
                      }),
                    e.openGraph.video.series &&
                      o.push(
                        r.createElement('meta', {
                          key: 'video:series',
                          property: 'video:series',
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            (e.openGraph.title || e.title) &&
              o.push(
                r.createElement('meta', { key: 'og:title', property: 'og:title', content: e.openGraph.title || a })
              ),
              (e.openGraph.description || e.description) &&
                o.push(
                  r.createElement('meta', {
                    key: 'og:description',
                    property: 'og:description',
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth && (p.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight && (p.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, t) {
                  o.push(r.createElement('meta', { key: 'og:image:0' + t, property: 'og:image', content: e.url })),
                    e.alt &&
                      o.push(
                        r.createElement('meta', { key: 'og:image:alt0' + t, property: 'og:image:alt', content: e.alt })
                      ),
                    e.width
                      ? o.push(
                          r.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: e.width.toString(),
                          })
                        )
                      : p.defaultOpenGraphImageWidth &&
                        o.push(
                          r.createElement('meta', {
                            key: 'og:image:width0' + t,
                            property: 'og:image:width',
                            content: p.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? o.push(
                          r.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: e.height.toString(),
                          })
                        )
                      : p.defaultOpenGraphImageHeight &&
                        o.push(
                          r.createElement('meta', {
                            key: 'og:image:height' + t,
                            property: 'og:image:height',
                            content: p.defaultOpenGraphImageHeight.toString(),
                          })
                        );
                }),
              e.defaultOpenGraphVideoWidth && (p.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight && (p.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, t) {
                  o.push(r.createElement('meta', { key: 'og:video:0' + t, property: 'og:video', content: e.url })),
                    e.alt &&
                      o.push(
                        r.createElement('meta', { key: 'og:video:alt0' + t, property: 'og:video:alt', content: e.alt })
                      ),
                    e.width
                      ? o.push(
                          r.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: e.width.toString(),
                          })
                        )
                      : p.defaultOpenGraphVideoWidth &&
                        o.push(
                          r.createElement('meta', {
                            key: 'og:video:width0' + t,
                            property: 'og:video:width',
                            content: p.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? o.push(
                          r.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: e.height.toString(),
                          })
                        )
                      : p.defaultOpenGraphVideoHeight &&
                        o.push(
                          r.createElement('meta', {
                            key: 'og:video:height' + t,
                            property: 'og:video:height',
                            content: p.defaultOpenGraphVideoHeight.toString(),
                          })
                        );
                }),
              e.openGraph.locale &&
                o.push(
                  r.createElement('meta', { key: 'og:locale', property: 'og:locale', content: e.openGraph.locale })
                ),
              e.openGraph.site_name &&
                o.push(
                  r.createElement('meta', {
                    key: 'og:site_name',
                    property: 'og:site_name',
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical && o.push(r.createElement('link', { rel: 'canonical', href: e.canonical, key: 'canonical' })),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, a, n;
                o.push(
                  r.createElement(
                    'meta',
                    Object.assign(
                      {
                        key:
                          'meta:' +
                          (null != (t = null != (a = null != (n = e.keyOverride) ? n : e.name) ? a : e.property)
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
                  r.createElement(
                    'link',
                    Object.assign({ key: 'link' + (null != (t = e.keyOverride) ? t : e.href) + e.rel }, e)
                  )
                );
              }),
            o
          );
        },
        l =
          (r.Component,
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              n(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.title,
                  o = e.noindex,
                  n = void 0 !== o && o,
                  p = e.nofollow,
                  l = e.robotsProps,
                  h = e.description,
                  c = e.canonical,
                  d = e.openGraph,
                  m = e.facebook,
                  s = e.twitter,
                  g = e.additionalMetaTags,
                  u = e.titleTemplate,
                  f = e.mobileAlternate,
                  y = e.languageAlternates,
                  G = e.additionalLinkTags;
                return r.createElement(
                  a.default,
                  null,
                  i({
                    title: t,
                    noindex: n,
                    nofollow: p,
                    robotsProps: l,
                    description: h,
                    canonical: c,
                    facebook: m,
                    openGraph: d,
                    additionalMetaTags: g,
                    twitter: s,
                    titleTemplate: u,
                    mobileAlternate: f,
                    languageAlternates: y,
                    additionalLinkTags: G,
                  })
                );
              }),
              t
            );
          })(r.Component));
    },
    1164: function (e, t, o) {
      function a(e, t) {
        if (null == e) return {};
        var o,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var o,
              a,
              r = {},
              n = Object.keys(e);
            for (a = 0; a < n.length; a++) (o = n[a]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++)
            (o = n[a]), t.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
        }
        return r;
      }
      o.d(t, {
        Z: function () {
          return a;
        },
      });
    },
  },
]);