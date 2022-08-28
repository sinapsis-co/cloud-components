_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    0: function (n, e, t) {
      t('74v/'), (n.exports = t('nOHt'));
    },
    '20a2': function (n, e, t) {
      n.exports = t('nOHt');
    },
    '74v/': function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t('hUgY');
        },
      ]);
    },
    g4pe: function (n, e, t) {
      n.exports = t('8Kt/');
    },
    hUgY: function (n, e, t) {
      'use strict';
      t.r(e);
      var o = t('q1tI'),
        a = t.n(o),
        c = t('g4pe'),
        i = t.n(c),
        f = t('20a2'),
        r = t.n(f),
        l = a.a.createElement;
      e.default = function (n) {
        var e = n.Component,
          t = n.pageProps;
        return (
          Object(o.useEffect)(function () {
            var n = function () {
              if (location.hash) {
                var n = document.querySelector('#scroll-'.concat(location.hash.slice(1)));
                if (n) {
                  var e = n.getBoundingClientRect();
                  window.scrollTo({ top: window.scrollY + e.top - 120, behavior: 'smooth' });
                }
              }
            };
            return (
              r.a.events.on('hashChangeComplete', n),
              r.a.events.on('routeChangeComplete', n),
              function () {
                r.a.events.off('hashChangeComplete', n), r.a.events.off('routeChangeComplete', n);
              }
            );
          }, []),
          l(
            a.a.Fragment,
            null,
            l(
              i.a,
              null,
              l('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
              l('meta', { name: 'msapplication-TileImage', content: 'favicon/ms-icon-144x144.png' }),
              l('meta', { name: 'theme-color', content: '#ffffff' }),
              l('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
              l('meta', { name: 'theme-color', content: '#F4514D' })
            ),
            l(e, t)
          )
        );
      };
    },
  },
  [[0, 0, 2, 1]],
]);
