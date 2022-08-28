_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return w;
      });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('WqaS'),
        c = n('wx14'),
        l = n('ZMKu'),
        s = a.a.createElement;
      function u(t) {
        return s(
          d,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          s(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            s(f, { cx: '25', cy: '25', r: '25' }),
            s(p, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var d = Object(r.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        f = r.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        p = Object(r.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        m = n('20a2'),
        h = a.a.createElement;
      function w(t) {
        var e = t.onClick,
          n = Object(m.useRouter)();
        return h(
          g,
          { alignItems: 'center' },
          h(u, {
            onClick:
              e ||
              function () {
                return n.back();
              },
          })
        );
      }
      var g = Object(r.d)(o.a).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    '8W7O': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return g;
        }),
        n.d(e, 'default', function () {
          return v;
        });
      var i = n('q1tI'),
        a = n.n(i),
        r = n('vOnD'),
        o = n('jtTr'),
        c = n('6Hpx'),
        l = n('wx14'),
        s = n('Ff2n'),
        u = a.a.createElement,
        d = function (t) {
          var e = t.className,
            n = t.src,
            i = Object(s.a)(t, ['className', 'src']);
          return u(
            f,
            Object(l.a)(
              {
                className: e || '',
                frameBorder: '0',
                width: '100%',
                height: '100%',
                src: n,
                referrerPolicy: 'no-referrer',
                sandbox: 'allow-same-origin',
              },
              i
            )
          );
        },
        f = r.d.iframe.withConfig({ displayName: 'link-iframe__StyledIframe', componentId: 'sc-1yo402b-0' })([
          'border:none;background-color:white;',
        ]),
        p = n('MWXp'),
        m = n('42Rd'),
        h = n('/kYb'),
        w = a.a.createElement,
        g = !0;
      function v(t) {
        var e = t.siteData,
          n = t.data,
          i = Object(o.a)(e).pageData;
        return i && i.data && n
          ? w(
              a.a.Fragment,
              null,
              w(p.a, { pageData: i }),
              w(
                m.a,
                { theme: i ? i.theme : void 0 },
                w(
                  c.a,
                  { pageData: i, hasBackground: !0, hideNavbar: !0, hideCart: !0, action: w(h.a, null) },
                  w(b, null, w(x, { src: n.url }))
                )
              )
            )
          : null;
      }
      var b = r.d.div.withConfig({ displayName: 'link__Wrapper', componentId: 'sc-1o3zuic-0' })([
          'max-width:608px;margin:0 auto;position:relative;min-height:80vh;',
        ]),
        x = Object(r.d)(d).withConfig({ displayName: 'link__PositionedIframe', componentId: 'sc-1o3zuic-1' })([
          'position:absolute;top:0;left:0;height:100%;width:100%;border-radius:8px;',
        ]);
    },
    MWXp: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n.n(i),
        r = n('9ixD'),
        o = a.a.createElement;
      e.a = function (t) {
        var e = t.pageData;
        return o(
          a.a.Fragment,
          null,
          o(r.a, {
            title: e.title,
            description: e.description || e.data.bio || e.title,
            openGraph: {
              title: e.title,
              description: e.description || e.data.bio || e.title,
              url: 'https://'.concat(e.subdomain, '.').concat('development.trac.co', '/'),
              images: [{ url: e.avatar }],
              type: 'website',
            },
          })
        );
      };
    },
    WqaS: function (t, e, n) {
      'use strict';
      var i = n('q1tI'),
        a = n('vOnD'),
        r = i.createElement;
      e.a = Object(a.d)(function (t) {
        return r(
          'div',
          {
            className: t.className,
            onClick: function (e) {
              return t.onClick ? t.onClick(e) : null;
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
    YZG3: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/link/[link]',
        function () {
          return n('8W7O');
        },
      ]);
    },
  },
  [['YZG3', 0, 2, 3, 1, 4]],
]);
