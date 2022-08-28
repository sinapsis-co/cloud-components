_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    '5syb': function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/payment/confirmation',
        function () {
          return e('E7Mf');
        },
      ]);
    },
    E7Mf: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, '__N_SSP', function () {
          return v;
        }),
        e.d(n, 'default', function () {
          return k;
        });
      var i = e('q1tI'),
        o = e.n(i),
        a = e('vOnD'),
        r = e('jtTr'),
        c = e('6Hpx'),
        s = e('MWXp'),
        l = e('42Rd'),
        u = e('WqaS'),
        p = e('EMkL'),
        d = o.a.createElement;
      function m(t) {
        var n = t.className;
        return d(
          h,
          { className: n },
          d(f, { iconSize: 32 }),
          d(g, null, 'Your order has been completed successfully.'),
          d(x, { className: 'has-marign' }, 'We\u2019ve sent you an e-mail containing all the details of your order.')
        );
      }
      var f = Object(a.d)(p.a).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;position:absolute;top:30px;left:30px;']),
        h = Object(a.d)(u.a).withConfig({
          displayName: 'payment-confirmation__ConfirmationWrapper',
          componentId: 'sc-1hvzzxz-1',
        })(
          [
            'flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:340px;height:220px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:',
            ';padding:80px 30px 20px;border-radius:4px;@media (min-width:',
            '){max-width:420px;}',
          ],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          }
        ),
        g = a.d.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:30px;margin:0;text-align:left;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        x = a.d.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:12px 0 0;opacity:0.5;text-align:left;&.has-marign{margin-top:12px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        y = e('20a2'),
        w = e('QNzL'),
        b = o.a.createElement,
        v = !0;
      function k(t) {
        var n = t.siteData,
          e = Object(r.a)(n).pageData,
          a = Object(y.useRouter)();
        return (
          Object(i.useEffect)(function () {
            Object(w.b)('orderId');
            var t = setTimeout(function () {
              a.push('/');
            }, 3e3);
            return function () {
              clearTimeout(t);
            };
          }, []),
          e && e.id
            ? b(
                o.a.Fragment,
                null,
                b(s.a, { pageData: e }),
                b(
                  l.a,
                  { theme: e ? e.theme : void 0 },
                  b(
                    c.a,
                    { hideNavbar: !0, hideCart: !0 },
                    b(m, null),
                    b(
                      N,
                      null,
                      b('p', { className: 'redirecting' }, 'REDIRECTING YOU SHORTLY...'),
                      b('a', { href: '/' }, 'Continue to Artist Name')
                    )
                  )
                )
              )
            : null
        );
      }
      var N = a.d.div.withConfig({ displayName: 'confirmation__RedirectingContainer', componentId: 'sc-1rjhmep-0' })(
        [
          'position:absolute;top:80%;left:50%;color:',
          ";transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:'Sen',sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}",
        ],
        function (t) {
          return t.theme.colors.primary;
        }
      );
    },
    EMkL: function (t, n, e) {
      'use strict';
      var i = e('q1tI'),
        o = e('vOnD'),
        a = e('ZMKu'),
        r = i.createElement;
      n.a = Object(o.d)(function (t) {
        var n = Object(a.c)(0),
          e = Object(a.d)(n, [0.05, 0.15], [0, 1]),
          i = {
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 4, type: 'spring', stiffness: 50 } },
          };
        return r(
          'svg',
          {
            className: t.className,
            onClick: function (n) {
              return t.onClick ? t.onClick(n) : null;
            },
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
          },
          r(a.b.path, {
            className: 'path',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeLinejoin: 'round',
            d: 'M8 12.1 10.9 15 16 10',
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: i,
            style: { pathLength: n, opacity: e },
          }),
          r(a.b.path, {
            className: 'circle',
            d: 'M1,12a11,11 0 1,0 22,0a11,11 0 1,0 -22,0',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: i,
            style: { pathLength: n, opacity: e },
          })
        );
      }).withConfig({ displayName: 'circle-check', componentId: 'sc-197s174-0' })(
        [
          'width:',
          'px;height:',
          'px;.path,.circle{fill:none;transition:stroke ',
          ';}.path{stroke:',
          ';}.circle{stroke:',
          ';}',
          ' ',
          ' ',
          '',
        ],
        function (t) {
          return t.iconSize ? t.iconSize : '32';
        },
        function (t) {
          return t.iconSize ? t.iconSize : '32';
        },
        function (t) {
          var n = t.theme;
          return ''.concat(n.transitions.duration, ' ').concat(n.transitions.type);
        },
        function (t) {
          return t.theme.colors.primary;
        },
        function (t) {
          return t.theme.colors.success;
        },
        function (t) {
          return t.noAnimation
            ? '\n      .path,\n      .circle {\n        opacity: 1;\n        animation: none;\n        stroke-dasharray: 0;\n        stroke-dashoffset: 0;\n      }\n    '
            : null;
        },
        function (t) {
          return t.noCircle ? '\n      .circle {\n        display: none;\n      }\n  ' : null;
        },
        function (t) {
          return t.customColor
            ? '\n      .circle,\n      .path {\n        stroke: '.concat(t.customColor, ';\n      }\n  ')
            : null;
        }
      );
    },
    MWXp: function (t, n, e) {
      'use strict';
      var i = e('q1tI'),
        o = e.n(i),
        a = e('9ixD'),
        r = o.a.createElement;
      n.a = function (t) {
        var n = t.pageData;
        return r(
          o.a.Fragment,
          null,
          r(a.a, {
            title: n.title,
            description: n.description || n.data.bio || n.title,
            openGraph: {
              title: n.title,
              description: n.description || n.data.bio || n.title,
              url: 'https://'.concat(n.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: n.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    QNzL: function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return i;
      }),
        e.d(n, 'c', function () {
          return o;
        }),
        e.d(n, 'b', function () {
          return a;
        });
      var i = function (t) {
          if ('undefined' !== typeof localStorage) {
            var n = localStorage.getItem(t);
            return n ? JSON.parse(n) : null;
          }
        },
        o = function (t, n) {
          'undefined' !== typeof localStorage && localStorage.setItem(t, JSON.stringify(n));
        },
        a = function (t) {
          'undefined' !== typeof localStorage && localStorage.removeItem(t);
        };
    },
  },
  [['5syb', 0, 2, 3, 1, 4]],
]);
