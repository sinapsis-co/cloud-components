(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [225],
  {
    113: function (n, t, e) {
      'use strict';
      e(7294);
      var i = e(186),
        r = e(6805),
        o = e(5893);
      t.Z = (0, i.ZP)(function (n) {
        var t = (0, r.c$)(0),
          e = (0, r.Hm)(t, [0.05, 0.15], [0, 1]),
          i = {
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 4, type: 'spring', stiffness: 50 } },
          };
        return (0, o.jsxs)('svg', {
          className: n.className,
          onClick: function (t) {
            return n.onClick ? n.onClick(t) : null;
          },
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          xmlnsXlink: 'http://www.w3.org/1999/xlink',
          children: [
            (0, o.jsx)(r.ww.path, {
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
            (0, o.jsx)(r.ww.path, {
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
            }),
          ],
        });
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
    6071: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return g;
          },
        });
      var i = e(7294),
        r = e(2872),
        o = e(6747),
        a = e(2163),
        c = e(1163),
        s = e(186),
        l = e(5343),
        u = e(113),
        d = e(5893);
      function h(n) {
        var t = n.className,
          e = n.userEmail,
          i = n.orderId;
        return (0, d.jsxs)(p, {
          className: t,
          children: [
            (0, d.jsx)(m, { iconSize: 64 }),
            (0, d.jsx)(f, { children: 'Thank you for your order!' }),
            (0, d.jsxs)(w, { children: ['Your order No:', i, ' has been placed.'] }),
            (0, d.jsxs)(w, {
              className: 'has-marign',
              children: ['We sent an email to ', e, ' with your order confirmation and bill.', ' '],
            }),
          ],
        });
      }
      var m = (0, s.ZP)(u.Z).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;']),
        p = (0, s.ZP)(l.Z).withConfig({
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
        f = s.ZP.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:28px;margin:0;text-align:center;'],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        w = s.ZP.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:16px 0 0;opacity:0.5;text-align:center;&.has-marign{margin-top:40px;}',
          ],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        x = !0;
      function g() {
        var n = (0, i.useState)(),
          t = n[0],
          e = n[1];
        (0, i.useEffect)(function () {
          var n = function (n) {
            var t, i, r;
            (
              (null === (t = 'http://localhost:3000,https://app.development.trac.co') ? void 0 : t.split(',')) || []
            ).includes(n.origin) &&
              'trac-editor' === (null === (i = n.data) || void 0 === i ? void 0 : i.origin) &&
              null !== (r = n.data) &&
              void 0 !== r &&
              r.payload &&
              e(
                (function (n) {
                  try {
                    return JSON.parse(decodeURIComponent(escape(window.atob(n))));
                  } catch (t) {
                    return {};
                  }
                })(n.data.payload)
              );
          };
          return (
            window.addEventListener('message', n, !1),
            document.referrer &&
              window.parent.postMessage({ origin: 'trac-artist-site', ready: !0 }, document.referrer),
            function () {
              window.removeEventListener('message', n);
            }
          );
        }, []);
        var s = (0, c.useRouter)();
        return t && t.id
          ? (0, d.jsx)(o.Z, {
              theme: t ? t.theme : void 0,
              removeBranding: null === t || void 0 === t ? void 0 : t.removeBranding,
              children: (0, d.jsxs)(r.Z, {
                columnFlow: !0,
                children: [
                  (0, d.jsx)(a.Z, {
                    title: 'Order Confirmation',
                    onClick: function () {
                      return s.push('../../');
                    },
                  }),
                  (0, d.jsx)(h, { orderId: '1029482', userEmail: 'hernan@sinapsis.co' }),
                ],
              }),
            })
          : null;
      }
    },
    6527: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/payment/confirmation',
        function () {
          return e(6071);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [430, 987, 819, 227, 774, 888, 179], function () {
      return (t = 6527), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
