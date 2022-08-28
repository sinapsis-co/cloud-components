_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    '/kYb': function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return x;
      });
      var i = e('q1tI'),
        a = e.n(i),
        r = e('vOnD'),
        o = e('WqaS'),
        c = e('wx14'),
        l = e('ZMKu'),
        s = a.a.createElement;
      function u(n) {
        return s(
          p,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          s(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, n),
            s(d, { cx: '25', cy: '25', r: '25' }),
            s(h, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var p = Object(r.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (n) {
            return n.theme.colors.itemBackgroundHover;
          }
        ),
        d = r.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (n) {
            return n.theme.colors.sidebarBackground;
          },
          function (n) {
            var t = n.theme;
            return ''.concat(t.transitions.duration, ' ').concat(t.transitions.type);
          }
        ),
        h = Object(r.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (n) {
            return n.theme.colors.icon;
          }
        ),
        m = e('20a2'),
        f = a.a.createElement;
      function x(n) {
        var t = n.onClick,
          e = Object(m.useRouter)();
        return f(
          g,
          { alignItems: 'center' },
          f(u, {
            onClick:
              t ||
              function () {
                return e.back();
              },
          })
        );
      }
      var g = Object(r.d)(o.a).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    '5syb': function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/merch/payment/confirmation',
        function () {
          return e('E7Mf');
        },
      ]);
    },
    E7Mf: function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, '__N_SSP', function () {
          return b;
        }),
        e.d(t, 'default', function () {
          return k;
        });
      var i = e('q1tI'),
        a = e.n(i),
        r = e('jtTr'),
        o = e('6Hpx'),
        c = e('MWXp'),
        l = e('42Rd'),
        s = e('/kYb'),
        u = e('vOnD'),
        p = e('WqaS'),
        d = e('EMkL'),
        h = a.a.createElement;
      function m(n) {
        var t = n.className,
          e = n.userEmail,
          i = n.orderId;
        return h(
          x,
          { className: t },
          h(f, { iconSize: 64 }),
          h(g, null, 'Thank you for your order!'),
          h(w, null, 'Your order No:', i, ' has been placed.'),
          h(w, { className: 'has-marign' }, 'We sent an email to ', e, ' with your order confirmation and bill.', ' ')
        );
      }
      var f = Object(u.d)(d.a).withConfig({
          displayName: 'payment-confirmation__StyledCircleCheckIcon',
          componentId: 'sc-1hvzzxz-0',
        })(['margin-bottom:40px;']),
        x = Object(u.d)(p.a).withConfig({
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
        g = u.d.h4.withConfig({ displayName: 'payment-confirmation__Title', componentId: 'sc-1hvzzxz-2' })(
          ['color:', ';font-size:24px;font-weight:400;line-height:28px;margin:0;text-align:center;'],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        w = u.d.p.withConfig({ displayName: 'payment-confirmation__Description', componentId: 'sc-1hvzzxz-3' })(
          [
            'color:',
            ';font-size:16px;font-weight:400;line-height:19px;margin:16px 0 0;opacity:0.5;text-align:center;&.has-marign{margin-top:40px;}',
          ],
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        v = a.a.createElement,
        b = !0;
      function k(n) {
        var t = n.siteData,
          e = Object(r.a)(t).pageData;
        return e && e.id
          ? v(
              a.a.Fragment,
              null,
              v(c.a, { pageData: e }),
              v(
                l.a,
                { theme: e ? e.theme : void 0 },
                v(
                  o.a,
                  { hideNavbar: !0, hideCart: !0, action: v(s.a, null) },
                  v(m, { orderId: '1029482', userEmail: 'hernan@sinapsis.co' })
                )
              )
            )
          : null;
      }
    },
    EMkL: function (n, t, e) {
      'use strict';
      var i = e('q1tI'),
        a = e('vOnD'),
        r = e('ZMKu'),
        o = i.createElement;
      t.a = Object(a.d)(function (n) {
        var t = Object(r.c)(0),
          e = Object(r.d)(t, [0.05, 0.15], [0, 1]),
          i = {
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 4, type: 'spring', stiffness: 50 } },
          };
        return o(
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
          o(r.b.path, {
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
          o(r.b.path, {
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
    MWXp: function (n, t, e) {
      'use strict';
      var i = e('q1tI'),
        a = e.n(i),
        r = e('9ixD'),
        o = a.a.createElement;
      t.a = function (n) {
        var t = n.pageData;
        return o(
          a.a.Fragment,
          null,
          o(r.a, {
            title: t.title,
            description: t.description || t.data.bio || t.title,
            openGraph: {
              title: t.title,
              description: t.description || t.data.bio || t.title,
              url: 'https://'.concat(t.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: t.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    WqaS: function (n, t, e) {
      'use strict';
      var i = e('q1tI'),
        a = e('vOnD'),
        r = i.createElement;
      t.a = Object(a.d)(function (n) {
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
  [['5syb', 0, 2, 3, 1, 4]],
]);
