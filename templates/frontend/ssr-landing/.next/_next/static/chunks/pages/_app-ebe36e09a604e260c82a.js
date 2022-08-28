_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    0: function (e, n, t) {
      t('74v/'), (e.exports = t('nOHt'));
    },
    '20a2': function (e, n, t) {
      e.exports = t('nOHt');
    },
    '74v/': function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t('hUgY');
        },
      ]);
    },
    g4pe: function (e, n, t) {
      e.exports = t('8Kt/');
    },
    hUgY: function (e, n, t) {
      'use strict';
      t.r(n);
      var o = t('q1tI'),
        r = t.n(o),
        a = t('g4pe'),
        i = t.n(a),
        c = t('20a2'),
        s = t.n(c),
        l = t('eWwy'),
        u = 'https://js.stripe.com/v3',
        p = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f =
          'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        d = null,
        m = function (e) {
          return null !== d
            ? d
            : (d = new Promise(function (n, t) {
                if ('undefined' !== typeof window)
                  if ((window.Stripe && e && console.warn(f), window.Stripe)) n(window.Stripe);
                  else
                    try {
                      var o = (function () {
                        for (
                          var e = document.querySelectorAll('script[src^="'.concat(u, '"]')), n = 0;
                          n < e.length;
                          n++
                        ) {
                          var t = e[n];
                          if (p.test(t.src)) return t;
                        }
                        return null;
                      })();
                      o && e
                        ? console.warn(f)
                        : o ||
                          (o = (function (e) {
                            var n = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                              t = document.createElement('script');
                            t.src = ''.concat(u).concat(n);
                            var o = document.head || document.body;
                            if (!o)
                              throw new Error(
                                'Expected document.body not to be null. Stripe.js requires a <body> element.'
                              );
                            return o.appendChild(t), t;
                          })(e)),
                        o.addEventListener('load', function () {
                          window.Stripe ? n(window.Stripe) : t(new Error('Stripe.js not available'));
                        }),
                        o.addEventListener('error', function () {
                          t(new Error('Failed to load Stripe.js'));
                        });
                    } catch (r) {
                      return void t(r);
                    }
                else n(null);
              }));
        },
        w = function (e, n, t) {
          if (null === e) return null;
          var o = e.apply(void 0, n);
          return (
            (function (e, n) {
              e && e._registerWrapper && e._registerWrapper({ name: 'stripe-js', version: '1.13.2', startTime: n });
            })(o, t),
            o
          );
        },
        v = Promise.resolve().then(function () {
          return m(null);
        }),
        h = !1;
      v.catch(function (e) {
        h || console.warn(e);
      });
      var g = r.a.createElement;
      n.default = function (e) {
        var n = e.Component,
          t = e.pageProps;
        Object(o.useEffect)(function () {
          var e = function () {
            if (location.hash) {
              var e = document.querySelector('#scroll-'.concat(location.hash.slice(1)));
              if (e) {
                var n = e.getBoundingClientRect();
                window.scrollTo({ top: window.scrollY + n.top - 120, behavior: 'smooth' });
              }
            }
          };
          return (
            s.a.events.on('hashChangeComplete', e),
            s.a.events.on('routeChangeComplete', e),
            function () {
              s.a.events.off('hashChangeComplete', e), s.a.events.off('routeChangeComplete', e);
            }
          );
        }, []);
        var a = (function () {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          h = !0;
          var o = Date.now();
          return v.then(function (e) {
            return w(e, n, o);
          });
        })(
          'pk_test_51GuOjtHv0LNpqD7HL4JfffZf4EyhZdJxSya2G7THwb1L2M3enr8FYzXGax7O6mxVltMMR5HyZTHF3pQ2Ls4v1In800KSTe9QFv'
        );
        return g(
          r.a.Fragment,
          null,
          g(
            i.a,
            null,
            g('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
            g('meta', { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' }),
            g('meta', { name: 'theme-color', content: '#ffffff' }),
            g('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            g('meta', { name: 'theme-color', content: '#F4514D' })
          ),
          g(
            l.Elements,
            {
              stripe: a,
              options: {
                fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap' }],
              },
            },
            g(n, t)
          )
        );
      };
    },
  },
  [[0, 0, 2, 1, 6]],
]);
