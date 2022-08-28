(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [225],
  {
    9568: function (n, t, e) {
      'use strict';
      e(7294);
      var i = e(186),
        r = e(5893);
      t.Z = (0, i.ZP)(function (n) {
        return (0, r.jsx)('div', {
          className: n.className,
          onClick: function (t) {
            return n.onClick ? n.onClick(t) : null;
          },
          children: n.children || '',
        });
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
    8961: function (n, t, e) {
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
    6900: function (n, t, e) {
      'use strict';
      var i = e(2962),
        r = e(5893);
      t.Z = function (n) {
        var t = n.pageData;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i.PB, {
            title: t.title,
            description: t.description || t.data.bio || t.title,
            openGraph: {
              title: t.title,
              description: t.description || t.data.bio || t.title,
              url: 'https://'.concat(t.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: t.avatar }],
              type: 'website',
            },
          }),
        });
      };
    },
    9358: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, {
          __N_SSP: function () {
            return w;
          },
          default: function () {
            return y;
          },
        });
      var i = e(7294),
        r = e(186),
        o = e(3886),
        a = e(2310),
        c = e(6900),
        s = e(8134),
        l = e(9568),
        u = e(8961),
        p = e(5893);
      function h(n) {
        var t = n.className;
        return (0, p.jsxs)(d, {
          className: t,
          children: [
            (0, p.jsx)(f, { iconSize: 32 }),
            (0, p.jsx)(m, { children: 'Your order has been completed successfully.' }),
            (0, p.jsx)(x, {
              className: 'has-marign',
              children: 'We\u2019ve sent you an e-mail containing all the details of your order.',
            }),
          ],
        });
      }
      var f = (0, r.ZP)(u.Z).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;position:absolute;top:30px;left:30px;']),
        d = (0, r.ZP)(l.Z).withConfig({
          displayName: 'payment-confirmation__ConfirmationWrapper',
          componentId: 'sc-1hvzzxz-1',
        })(
          [
            'flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:340px;height:220px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:',
            ';padding:80px 30px 20px;border-radius:4px;@media (min-width:',
            '){max-width:420px;}',
          ],
          function (n) {
            return n.theme.colors.sidebarBackground;
          },
          function (n) {
            var t = n.theme;
            return ''.concat(t.breakpoints.tablet, 'px');
          }
        ),
        m = r.ZP.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:30px;margin:0;text-align:left;'],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        x = r.ZP.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:12px 0 0;opacity:0.5;text-align:left;&.has-marign{margin-top:12px;}',
          ],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        g = e(1163),
        w = !0;
      function y(n) {
        var t = n.siteData,
          e = (0, o.V)(t).pageData,
          r = (0, g.useRouter)();
        return (
          (0, i.useEffect)(function () {
            var n = setTimeout(function () {
              r.push('/');
            }, 3e3);
            return function () {
              clearTimeout(n);
            };
          }, []),
          e && e.id
            ? (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(c.Z, { pageData: e }),
                  (0, p.jsx)(s.Z, {
                    theme: e ? e.theme : void 0,
                    children: (0, p.jsxs)(a.Z, {
                      hideNavbar: !0,
                      hideCart: !0,
                      children: [
                        (0, p.jsx)(h, {}),
                        (0, p.jsxs)(v, {
                          children: [
                            (0, p.jsx)('p', { className: 'redirecting', children: 'REDIRECTING YOU SHORTLY...' }),
                            (0, p.jsx)('a', { href: '/', children: 'Continue to Artist Name' }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null
        );
      }
      var v = r.ZP.div.withConfig({ displayName: 'confirmation__RedirectingContainer', componentId: 'sc-1rjhmep-0' })([
        "position:absolute;top:80%;left:50%;color:white;transform:translate(-50%,-50%);display:flex;max-width:420px;width:100%;align-items:center;justify-content:space-between;a,p{font-family:'Sen',sans-serif;font-size:14px;line-height:18px;text-decoration:underline;}.redirecting{text-transform:uppercase;font-weight:700;max-width:180px;text-decoration:none;}",
      ]);
    },
    7248: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/payment/confirmation',
        function () {
          return e(9358);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [774, 430, 457, 890, 888, 179], function () {
      return (t = 7248), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
