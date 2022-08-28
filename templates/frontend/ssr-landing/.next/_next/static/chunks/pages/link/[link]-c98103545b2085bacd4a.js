_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    '/kYb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return _;
      });
      var a = n('q1tI'),
        i = n.n(a),
        r = n('vOnD'),
        o = n('WqaS'),
        c = n('wx14'),
        l = n('ZMKu'),
        s = i.a.createElement;
      function d(t) {
        return s(
          u,
          { initial: 'rest', whileHover: 'hover', whileTap: 'tap', animate: 'rest' },
          s(
            'svg',
            Object(c.a)({ width: '40', height: '40', viewBox: '0 0 50 50' }, t),
            s(p, { cx: '25', cy: '25', r: '25' }),
            s(m, {
              variants: { rest: { x: 0, scale: 1 }, hover: { x: -2, scale: 1.0625 }, tap: { x: -100, scale: 0.95 } },
              d: 'M31 24h-9.6l3.3-3.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5 5c-0.1 0.1-0.2 0.2-0.2 0.3 -0.1 0.2-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l5 5C23.5 30.9 23.7 31 24 31s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4L21.4 26H31c0.6 0 1-0.4 1-1S31.6 24 31 24z',
            })
          )
        );
      }
      var u = Object(r.d)(l.b.div).withConfig({ displayName: 'back__IconWrapper', componentId: 'om8no8-0' })(
          ['cursor:pointer;width:40px;height:40px;&:hover{circle{fill:', ';}}'],
          function (t) {
            return t.theme.colors.itemBackgroundHover;
          }
        ),
        p = r.d.circle.withConfig({ displayName: 'back__StyledCircle', componentId: 'om8no8-1' })(
          ['fill:', ';transition:fill ', ';'],
          function (t) {
            return t.theme.colors.sidebarBackground;
          },
          function (t) {
            var e = t.theme;
            return ''.concat(e.transitions.duration, ' ').concat(e.transitions.type);
          }
        ),
        m = Object(r.d)(l.b.path).withConfig({ displayName: 'back__StyledPath', componentId: 'om8no8-2' })(
          ['fill:', ';'],
          function (t) {
            return t.theme.colors.icon;
          }
        ),
        h = n('20a2'),
        f = i.a.createElement;
      function _(t) {
        var e = t.onClick,
          n = Object(h.useRouter)();
        return f(
          b,
          { alignItems: 'center' },
          f(d, {
            onClick:
              e ||
              function () {
                return n.back();
              },
          })
        );
      }
      var b = Object(r.d)(o.a).withConfig({
        displayName: 'back-navigation__NavigationContainer',
        componentId: 'kfmxgl-0',
      })(['max-height:40px;']);
    },
    '8W7O': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSP', function () {
          return b;
        }),
        n.d(e, 'default', function () {
          return g;
        });
      var a = n('q1tI'),
        i = n.n(a),
        r = n('vOnD'),
        o = n('jtTr'),
        c = n('6Hpx'),
        l = n('wx14'),
        s = n('Ff2n'),
        d = i.a.createElement,
        u = function (t) {
          var e = t.className,
            n = t.src,
            a = Object(s.a)(t, ['className', 'src']);
          return d(
            p,
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
              a
            )
          );
        },
        p = r.d.iframe.withConfig({ displayName: 'link-iframe__StyledIframe', componentId: 'sc-1yo402b-0' })([
          'border:none;background-color:white;',
        ]),
        m = n('MWXp'),
        h = n('42Rd'),
        f = n('/kYb'),
        _ = i.a.createElement,
        b = !0;
      function g(t) {
        var e = t.siteData,
          n = t.data,
          a = Object(o.a)(e).pageData;
        return a && a.data && n
          ? _(
              i.a.Fragment,
              null,
              _(m.a, { pageData: a }),
              _(
                h.a,
                { theme: a ? a.theme : void 0 },
                _(
                  c.a,
                  { pageData: a, hasBackground: !0, hideNavbar: !0, hideCart: !0, action: _(f.a, null) },
                  _(v, null, _(w, { src: n.url }))
                )
              )
            )
          : null;
      }
      var v = r.d.div.withConfig({ displayName: 'link__Wrapper', componentId: 'sc-1o3zuic-0' })([
          'max-width:608px;margin:0 auto;position:relative;min-height:80vh;',
        ]),
        w = Object(r.d)(u).withConfig({ displayName: 'link__PositionedIframe', componentId: 'sc-1o3zuic-1' })([
          'position:absolute;top:0;left:0;height:100%;width:100%;border-radius:8px;',
        ]);
    },
    MWXp: function (t, e, n) {
      'use strict';
      (function (t) {
        var a = n('q1tI'),
          i = n.n(a),
          r = n('9ixD'),
          o = i.a.createElement;
        e.a = function (e) {
          var n = e.pageData;
          return o(
            i.a.Fragment,
            null,
            o(r.a, {
              title: n.title,
              description: n.description || n.data.bio || n.title,
              openGraph: {
                title: n.title,
                description: n.description || n.data.bio || n.title,
                url: 'https://'.concat(n.subdomain, '.').concat(t.env.NEXT_PUBLIC_APP_BASE_DOMAIN, '/'),
                images: [{ url: n.avatar }],
                type: 'website',
              },
            })
          );
        };
      }.call(this, n('8oxB')));
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
