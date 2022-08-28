_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    '/kYb': function (t, n, e) {
      'use strict';
      e.d(n, 'a', function () {
        return g;
      });
      var i = e('q1tI'),
        a = e.n(i),
        o = e('vOnD'),
        r = e('WqaS'),
        c = e('wx14'),
        l = e('ZMKu'),
        s = a.a.createElement;
      function u(t) {
        return s(
          p,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          s(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            s(m, { cx: '25', cy: '25', r: '25' }),
            s(h, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var p = Object(o.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        m = o.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var n = t.theme;
            return ''.concat(n.transitions.duration, ' ').concat(n.transitions.type);
          }
        ),
        h = Object(o.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        d = e('20a2'),
        f = a.a.createElement;
      function g(t) {
        var n = t.artistName,
          e = t.title,
          i = t.onClick,
          a = Object(d.useRouter)();
        return f(
          x,
          { alignItems: 'center' },
          f(u, {
            onClick:
              i ||
              function () {
                return a.back();
              },
          }),
          e || n ? f(w, null, e || n) : null
        );
      }
      var x = Object(o.d)(r.a).withConfig({
          displayName: 'back-navigation__NavigationContainer',
          componentId: 'kfmxgl-0',
        })(['max-height:40px;']),
        w = o.d.h6.withConfig({ displayName: 'back-navigation__Title', componentId: 'kfmxgl-1' })(
          ['font-size:14px;font-weight:700;text-transform:uppercase;margin-left:18px;opacity:0.7;color:', ';'],
          function (t) {
            return t.theme.colors.primary;
          }
        );
    },
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
          return y;
        }),
        e.d(n, 'default', function () {
          return k;
        });
      var i = e('q1tI'),
        a = e.n(i),
        o = e('jtTr'),
        r = e('6Hpx'),
        c = e('MWXp'),
        l = e('42Rd'),
        s = e('/kYb'),
        u = e('vOnD'),
        p = e('WqaS'),
        m = e('EMkL'),
        h = a.a.createElement;
      function d(t) {
        var n = t.className,
          e = t.userEmail,
          i = t.orderId;
        return h(
          g,
          { className: n },
          h(f, { iconSize: 64 }),
          h(x, null, 'Thank you for your order!'),
          h(w, null, 'Your order No:', i, ' has been placed.'),
          h(w, { className: 'has-marign' }, 'We sent an email to ', e, ' with your order confirmation and bill.', ' ')
        );
      }
      var f = Object(u.d)(m.a).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;']),
        g = Object(u.d)(p.a).withConfig({
          displayName: 'payment-confirmation__ConfirmationWrapper',
          componentId: 'sc-1hvzzxz-1',
        })(
          [
            'flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:340px;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);@media (max-width:',
            '){max-width:none;}',
          ],
          function (t) {
            var n = t.theme;
            return ''.concat(n.breakpoints.tablet, 'px');
          }
        ),
        x = u.d.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:28px;margin:0;text-align:center;'],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        w = u.d.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:16px 0 0;opacity:0.5;text-align:center;&.has-marign{margin-top:40px;}',
          ],
          function (t) {
            return t.theme.colors.primary;
          }
        ),
        v = a.a.createElement,
        y = !0;
      function k(t) {
        var n = t.siteData,
          e = Object(o.a)(n).pageData;
        return e && e.id
          ? v(
              a.a.Fragment,
              null,
              v(c.a, { pageData: e }),
              v(
                l.a,
                { theme: e ? e.theme : void 0 },
                v(
                  r.a,
                  { hideNavbar: !0, hideCart: !0, action: v(s.a, null) },
                  v(d, { orderId: '1029482', userEmail: 'hernan@sinapsis.co' })
                )
              )
            )
          : null;
      }
    },
    EMkL: function (t, n, e) {
      'use strict';
      var i = e('q1tI'),
        a = e('vOnD'),
        o = e('ZMKu'),
        r = i.createElement;
      n.a = Object(a.d)(function (t) {
        var n = Object(o.c)(0),
          e = Object(o.d)(n, [0.05, 0.15], [0, 1]),
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
          r(o.b.path, {
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
          r(o.b.path, {
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
        a = e.n(i),
        o = e('9ixD'),
        r = a.a.createElement;
      n.a = function (t) {
        var n = t.pageData;
        return r(
          a.a.Fragment,
          null,
          r(o.a, {
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
    WqaS: function (t, n, e) {
      'use strict';
      var i = e('q1tI'),
        a = e('vOnD'),
        o = i.createElement;
      n.a = Object(a.d)(function (t) {
        return o(
          'div',
          {
            className: t.className,
            onClick: function (n) {
              return t.onClick ? t.onClick(n) : null;
            },
          },
          t.children || ''
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
        function (t) {
          return t.justifyContent || 'flex-start';
        },
        function (t) {
          return t.flexDirection || 'row';
        },
        function (t) {
          return t.flexGrow || 0;
        },
        function (t) {
          return t.flexBasis || 'auto';
        },
        function (t) {
          return t.flexShrink || 1;
        },
        function (t) {
          return t.flexWrap || 'nowrap';
        },
        function (t) {
          return t.flex || ' 0 1 auto';
        },
        function (t) {
          return t.alignItems || 'stretch';
        }
      );
    },
  },
  [['5syb', 0, 2, 3, 1, 4]],
]);
