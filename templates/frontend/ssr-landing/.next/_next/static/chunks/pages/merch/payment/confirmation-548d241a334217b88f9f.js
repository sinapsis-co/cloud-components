_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    '/kYb': function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return v;
      });
      var i = e('q1tI'),
        o = e.n(i),
        r = e('vOnD'),
        a = e('WqaS'),
        c = e('wx14'),
        s = e('ZMKu'),
        l = o.a.createElement;
      function u(n) {
        return l(
          m,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          l(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, n),
            l(d, { cx: '25', cy: '25', r: '25' }),
            l(f, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var m = Object(r.e)(s.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (n) {
            return n.theme.colors.itemBackgroundHover;
          }
        ),
        d = r.e.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (n) {
            return n.theme.colors.itemBackground;
          },
          function (n) {
            var t = n.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        f = Object(r.e)(s.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (n) {
            return n.theme.colors.icon;
          }
        ),
        p = e('20a2'),
        h = o.a.createElement;
      function v(n) {
        var t = n.artistName,
          e = n.title,
          i = n.onClick,
          o = Object(p.useRouter)();
        return h(
          g,
          { alignItems: 'center' },
          h(u, {
            onClick:
              i ||
              function () {
                return o.back();
              },
          }),
          h(x, null, e || t)
        );
      }
      var g = Object(r.e)(a.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['margin-bottom:30px;@media (max-width:', '){margin-bottom:15px;}'], function (n) {
          var t = n.theme;
          return ''.concat(t.breakpoints.tablet, 'px');
        }),
        x = r.e.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (n) {
            return n.theme.colors.primary;
          }
        );
    },
    '20a2': function (n, t, e) {
      n.exports = e('nOHt');
    },
    '5syb': function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/payment/confirmation',
        function () {
          return e('E7Mf');
        },
      ]);
    },
    '9dHV': function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return l;
      });
      var i = e('q1tI'),
        o = e.n(i),
        r = e('vOnD'),
        a = e('WqaS'),
        c = e('EMkL'),
        s = o.a.createElement;
      function l(n) {
        var t = n.className,
          e = n.userEmail,
          i = n.orderId;
        return s(
          m,
          { className: t },
          s(u, { iconSize: 64 }),
          s(d, null, 'Thank you for your order!'),
          s(f, null, 'Your order No:', i, ' has been placed.'),
          s(f, { className: 'has-marign' }, 'We sent an email to ', e, ' with your order confirmation and bill.', ' ')
        );
      }
      var u = Object(r.e)(c.a).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;']),
        m = Object(r.e)(a.a).withConfig({
          displayName: 'payment-confirmation__ConfirmationWrapper',
          componentId: 'sc-1hvzzxz-1',
        })(
          [
            'flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:340px;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);@media (max-width:',
            '){max-width:none;}',
          ],
          function (n) {
            var t = n.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        d = r.e.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:28px;margin:0;text-align:center;'],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        f = r.e.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:16px 0 0;opacity:0.5;text-align:center;&.has-marign{margin-top:40px;}',
          ],
          function (n) {
            return n.theme.colors.primary;
          }
        );
    },
    E7Mf: function (n, t, e) {
      'use strict';
      e.r(t),
        function (n) {
          e.d(t, '__N_SSP', function () {
            return m;
          }),
            e.d(t, 'default', function () {
              return d;
            });
          var i = e('q1tI'),
            o = e.n(i),
            r = e('6Hpx'),
            a = e('42Rd'),
            c = e('/kYb'),
            s = e('20a2'),
            l = e('9dHV'),
            u = o.a.createElement,
            m = !0;
          function d() {
            var t = Object(i.useState)(),
              e = t[0],
              o = t[1];
            Object(i.useEffect)(function () {
              var t = function (t) {
                var e, i, r;
                (
                  (null === (e = n.env.NEXT_PUBLIC_APP_ALLOWED_ORIGINS) || void 0 === e ? void 0 : e.split(',')) || []
                ).includes(t.origin) &&
                  'trac-editor' === (null === (i = t.data) || void 0 === i ? void 0 : i.origin) &&
                  null !== (r = t.data) &&
                  void 0 !== r &&
                  r.payload &&
                  o(
                    (function (n) {
                      try {
                        return JSON.parse(decodeURIComponent(escape(window.atob(n))));
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
            }, []);
            var m = Object(s.useRouter)();
            return e && e.id
              ? u(
                  a.a,
                  {
                    theme: e ? e.theme : void 0,
                    removeBranding: null === e || void 0 === e ? void 0 : e.removeBranding,
                  },
                  u(
                    r.a,
                    { columnFlow: !0 },
                    u(c.a, {
                      title: 'Order Confirmation',
                      onClick: function () {
                        return m.push('../../');
                      },
                    }),
                    u(l.a, { orderId: '1029482', userEmail: 'hernan@sinapsis.co' })
                  )
                )
              : null;
          }
        }.call(this, e('8oxB'));
    },
    EMkL: function (n, t, e) {
      'use strict';
      var i = e('q1tI'),
        o = e('vOnD'),
        r = e('ZMKu'),
        a = i.createElement;
      t.a = Object(o.e)(function (n) {
        var t = Object(r.c)(0),
          e = Object(r.d)(t, [0.05, 0.15], [0, 1]),
          i = {
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 4, type: 'spring', stiffness: 50 } },
          };
        return a(
          'svg',
          {
            className: n.className,
            onClick: function (t) {
              return n.onClick ? n.onClick(t) : null;
            },
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
          },
          a(r.b.path, {
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
            style: { pathLength: t, opacity: e },
          }),
          a(r.b.path, {
            className: 'circle',
            d: 'M1,12a11,11 0 1,0 22,0a11,11 0 1,0 -22,0',
            strokeWidth: '1.5',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: i,
            style: { pathLength: t, opacity: e },
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
        function (n) {
          return n.iconSize ? n.iconSize : '32';
        },
        function (n) {
          return n.iconSize ? n.iconSize : '32';
        },
        function (n) {
          var t = n.theme;
          return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
        },
        function (n) {
          return n.theme.colors.primary;
        },
        function (n) {
          return n.theme.colors.success;
        },
        function (n) {
          return n.noAnimation
            ? '\n      .path,\n      .circle {\n        opacity: 1;\n        animation: none;\n        stroke-dasharray: 0;\n        stroke-dashoffset: 0;\n      }\n    '
            : null;
        },
        function (n) {
          return n.noCircle ? '\n      .circle {\n        display: none;\n      }\n  ' : null;
        },
        function (n) {
          return n.customColor
            ? '\n      .circle,\n      .path {\n        stroke: '.concat(n.customColor, ';\n      }\n  ')
            : null;
        }
      );
    },
    WqaS: function (n, t, e) {
      'use strict';
      var i = e('q1tI'),
        o = e('vOnD'),
        r = i.createElement;
      t.a = Object(o.e)(function (n) {
        return r(
          'div',
          {
            className: n.className,
            onClick: function (t) {
              return n.onClick ? n.onClick(t) : null;
            },
          },
          n.children || ''
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
        function (n) {
          return n.justifyContent || 'flex-start';
        },
        function (n) {
          return n.flexDirection || 'row';
        },
        function (n) {
          return n.flexGrow || 0;
        },
        function (n) {
          return n.flexBasis || 'auto';
        },
        function (n) {
          return n.flexShrink || 1;
        },
        function (n) {
          return n.flexWrap || 'nowrap';
        },
        function (n) {
          return n.flex || ' 0 1 auto';
        },
        function (n) {
          return n.alignItems || 'stretch';
        }
      );
    },
  },
  [['5syb', 0, 2, 4, 1, 3, 5]],
]);
