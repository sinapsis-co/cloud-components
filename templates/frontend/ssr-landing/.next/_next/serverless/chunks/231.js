'use strict';
exports.id = 231;
exports.ids = [231];
exports.modules = {
  /***/ 1947: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ ArtistInfo,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/avatar/index.tsx
    const AvatarImg = styled_components_cjs /* default.img.withConfig */.ZP.img
      .withConfig({
        displayName: 'avatar__AvatarImg',
        componentId: 'sc-1bted74-0',
      })(
      [
        'width:',
        ';height:',
        ';border-radius:4px;object-fit:cover;@media (max-width:',
        '){width:',
        ';height:',
        ';border-radius:50%;}',
      ],
      ({ theme }) => theme.sizes.avatarWidth,
      ({ theme }) => theme.sizes.avatarHeight,
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ theme }) => theme.sizes.avatarWidthMobile,
      ({ theme }) => theme.sizes.avatarHeightMobile
    );
    const AvatarPlaceholder = (0, styled_components_cjs /* default */.ZP)(AvatarImg).withConfig({
      displayName: 'avatar__AvatarPlaceholder',
      componentId: 'sc-1bted74-1',
    })(['background-color:', ';'], ({ theme }) => theme.colors.secondary);

    const Avatar = ({ className, src, alt }) => {
      return src
        ? /*#__PURE__*/ jsx_runtime.jsx(AvatarImg, {
            className: className || '',
            src: src,
            alt: `${alt} avatar`,
          })
        : /*#__PURE__*/ jsx_runtime.jsx(AvatarPlaceholder, {
            as: 'div',
          });
    };

    /* harmony default export */ const components_avatar = Avatar; // CONCATENATED MODULE: ./src/components/artist-info/index.tsx
    function ArtistInfo({ avatar, className, title, description }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(Artist, {
        className: className,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(components_avatar, {
            alt: `${title}-img`,
            src: avatar,
          }),
          /*#__PURE__*/ jsx_runtime.jsx('h1', {
            children: title,
          }),
          description &&
            /*#__PURE__*/ jsx_runtime.jsx('span', {
              children: description,
            }),
        ],
      });
    }
    const Artist = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'artist-info__Artist',
        componentId: 'sc-18jmy9p-0',
      })(
      [
        'display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;@media (max-width:',
        '){justify-content:center;align-items:center;}> h1{font-weight:800;font-size:40px;line-height:100%;margin-bottom:14px;text-align:left;color:',
        ';width:100%;letter-spacing:-2px;}> span{font-size:14px;line-height:145%;opacity:0.5;color:',
        ';width:100%;}@media (max-width:',
        '){> h1{font-size:32px;}> h1,> span{text-align:center;}}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },

  /***/ 2310: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Container,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664);
    var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);
    // EXTERNAL MODULE: ./node_modules/next/router.js
    var next_router = __webpack_require__(1163);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/navbar/index.tsx
    const NavbarWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'navbar__NavbarWrapper',
        componentId: 'sc-1j6iho3-0',
      })(
      [
        'display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:56px;@media (max-width:',
        '){margin-bottom:0;justify-content:flex-start;align-items:flex-end;height:100%;}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const LinksContainer = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'navbar__LinksContainer',
        componentId: 'sc-1j6iho3-1',
      })(
      ['display:grid;grid-gap:24px;gap:24px;grid-auto-flow:column;@media (max-width:', '){grid-auto-flow:row;}'],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const NavbarLink = styled_components_cjs /* default.a.withConfig */.ZP.a
      .withConfig({
        displayName: 'navbar__NavbarLink',
        componentId: 'sc-1j6iho3-2',
      })(
      [
        'color:',
        ';font-weight:400;font-size:18px;line-height:100%;opacity:0.5;transition:opacity ',
        ';&.active,&:hover,&:focus{opacity:1;}&.disabled{pointer-events:none;opacity:0.15;}@media (max-width:',
        '){font-size:24px;font-weight:400;line-height:24px;text-align:left;transition:opacity ',
        ',font-weight ',
        ';&.active,&:hover,&:focus{font-weight:700;}}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`
    );
    const LINKS = [
      {
        label: 'All',
        href: '/',
        disabled: false,
      },
      {
        label: 'Music',
        href: '/music',
        disabled: false,
      },
      {
        label: 'Merch',
        href: '/merch',
        disabled: true,
      },
      {
        label: 'NFT',
        href: '/nft',
        disabled: true,
      },
      {
        label: 'Tour',
        href: '/tour',
        disabled: true,
      },
    ];

    const Navbar = ({ className }) => {
      const router = (0, next_router.useRouter)();

      const isActive = (link) => {
        if (link === '/') {
          return router.pathname === link;
        }

        return router.pathname.startsWith(link);
      };

      return /*#__PURE__*/ jsx_runtime.jsx(NavbarWrapper, {
        className: className || '',
        children: /*#__PURE__*/ jsx_runtime.jsx(LinksContainer, {
          children: LINKS.filter((l) => !l.disabled).map((link, i) =>
            /*#__PURE__*/ jsx_runtime.jsx(
              link_default(),
              {
                href: link.href,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime.jsx(NavbarLink, {
                  className: `${isActive(link.href) ? 'active' : ''} ${link.disabled ? 'disabled' : ''}`,
                  children: link.label,
                }),
              },
              `${link.label}-${i}`
            )
          ),
        }),
      });
    };

    /* harmony default export */ const navbar = Navbar;
    // EXTERNAL MODULE: ./node_modules/polished/dist/polished.cjs.js
    var polished_cjs = __webpack_require__(2521);
    // EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.cjs.js
    var framer_motion_cjs = __webpack_require__(9141);
    // EXTERNAL MODULE: ./src/hooks/is-mobile.tsx
    var is_mobile = __webpack_require__(2447); // CONCATENATED MODULE: ./src/components/icons/logo/index.tsx
    const _excluded = ['className', 'noAnimation'];

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    const LogoIcon = (_ref) => {
      let { className, noAnimation } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      const logoMotion = {
        rest: {
          scale: 1,
        },
        hover: {
          scale: 1.125,
        },
        tap: {
          scale: 0.85,
          scaleX: 1,
        },
      };
      return /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.div */.ww.div, {
        initial: 'rest',
        whileHover: 'hover',
        whileTap: 'tap',
        animate: 'rest',
        children: /*#__PURE__*/ (0, jsx_runtime.jsxs)(
          'svg',
          _objectSpread(
            _objectSpread(
              {
                width: '86',
                height: '19',
                viewBox: '0 0 86 19',
                className: className || '',
                style: {
                  overflow: 'visible',
                },
              },
              props
            ),
            {},
            {
              children: [
                /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* motion.path */.ww.path, {
                  variants: noAnimation ? undefined : logoMotion,
                  transition: {
                    type: 'spring',
                    duration: 0.75,
                    bounce: 0.5,
                  },
                  d: 'M17.31,8.71,8.66,0v8.7L0,0V14.74L4.24,19V10.3L12.9,19V10.3L21.55,19V4.26L17.31,0Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M31.58,0,27.94,3.65V13.76c0,3.11,1.41,5.13,5.44,5.13a10.78,10.78,0,0,0,3-.4V15.57a8.61,8.61,0,0,1-2.09.26c-1.83,0-2.7-.82-2.7-2.64V7.74h4.79V4.42H31.58Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M41.89,8.13V4.42H38.57V18.57H42.2V13.06a6.07,6.07,0,0,1,1.38-4.45,4.56,4.56,0,0,1,3.47-1.19,6.71,6.71,0,0,1,1.1.09V4.14a5.86,5.86,0,0,0-1-.09A5.33,5.33,0,0,0,41.89,8.13Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M64.16,18.57V10c0-4.1-2.31-6-7.3-6C52.4,4,49.44,6,49.1,9.06h3.81c.22-1.67,1.63-2.57,3.94-2.57s3.64,1,3.64,3v.32l-5.05.42c-2.64.25-4.06.65-5.07,1.3a3.62,3.62,0,0,0-1.72,3.2c0,2.63,2.23,4.25,5.72,4.25,3.1,0,5.3-1.1,6.26-3v2.58Zm-3.62-6c0,2.41-2,4-5,4-2,0-3.15-.73-3.15-2s.9-2,3.35-2.21l4.76-.48Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M74.35,6.74c2.28,0,3.75,1.08,4.17,3h0l3.4-1.56C80.94,5.49,78.31,4,74.46,4c-5.16,0-8.4,2.86-8.4,7.47S69.33,19,74.4,19c3.77,0,6.52-1.6,7.54-4.27L78.6,13.2a3.89,3.89,0,0,1-4.2,3c-2.81,0-4.56-1.79-4.56-4.79S71.53,6.74,74.35,6.74Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M85.86,4.75a2.07,2.07,0,0,0-.39-.54,2.15,2.15,0,0,0-.56-.34,1.93,1.93,0,0,0-1.34,0,1.68,1.68,0,0,0-.56.34,1.73,1.73,0,0,0-.4.57,1.61,1.61,0,0,0-.13.68,1.63,1.63,0,0,0,.14.72,1.5,1.5,0,0,0,.39.54,1.53,1.53,0,0,0,.56.34,1.93,1.93,0,0,0,1.34,0,1.72,1.72,0,0,0,.56-.34,1.64,1.64,0,0,0,.4-.57A1.8,1.8,0,0,0,86,5.46,2,2,0,0,0,85.86,4.75ZM85.43,6a1.39,1.39,0,0,1-.28.43,1.07,1.07,0,0,1-.41.28,1.21,1.21,0,0,1-1,0,1.07,1.07,0,0,1-.41-.28A1.23,1.23,0,0,1,83,6a1.57,1.57,0,0,1,0-1.09,1.19,1.19,0,0,1,.28-.42,1,1,0,0,1,.41-.28,1.21,1.21,0,0,1,1,0,1,1,0,0,1,.41.28,1.34,1.34,0,0,1,.28.42A1.47,1.47,0,0,1,85.43,6Z',
                }),
                /*#__PURE__*/ jsx_runtime.jsx('path', {
                  d: 'M84.72,5.54a.42.42,0,0,0,.16-.09A.33.33,0,0,0,85,5.3a.62.62,0,0,0,0-.23.43.43,0,0,0,0-.25.48.48,0,0,0-.15-.2,1,1,0,0,0-.56-.12h-.73V6.43h.38V5.6h.25l.47.83h.4l-.51-.85Zm-.79-.24V4.79h.46l.13,0a.16.16,0,0,1,.09.07.19.19,0,0,1,0,.12c0,.12,0,.19-.1.23a.86.86,0,0,1-.28,0Z',
                }),
              ],
            }
          )
        ),
      });
    };

    /* harmony default export */ const logo = LogoIcon;
    // EXTERNAL MODULE: ./src/components/icons/cart/index.tsx
    var cart = __webpack_require__(1843); // CONCATENATED MODULE: ./src/components/icons/menu/index.tsx
    const menu_excluded = ['className', 'onClick'];

    function menu_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function menu_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          menu_ownKeys(Object(source), true).forEach(function (key) {
            menu_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          menu_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function menu_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function menu_objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = menu_objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }

    function menu_objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    const MenuIcon = (_ref) => {
      let { className, onClick } = _ref,
        props = menu_objectWithoutProperties(_ref, menu_excluded);

      const theme = (0, styled_components_cjs /* useTheme */.Fg)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        menu_objectSpread(
          menu_objectSpread(
            {
              viewBox: '0 0 24 13',
              width: 24,
              height: 13,
              className: className,
              onClick: onClick,
              'aria-hidden': 'true',
              role: 'img',
              style: {
                cursor: onClick ? 'pointer' : 'auto',
              },
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                fill: theme.colors.primary,
                y: '12',
                width: '24',
                height: '1',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                fill: theme.colors.primary,
                y: '6',
                width: '24',
                height: '1',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                fill: theme.colors.primary,
                width: '24',
                height: '1',
              }),
            ],
          }
        )
      );
    };

    /* harmony default export */ const menu = MenuIcon;
    // EXTERNAL MODULE: ./src/components/icons/close/index.tsx
    var icons_close = __webpack_require__(6041);
    // EXTERNAL MODULE: ./src/components/artist-info/index.tsx + 1 modules
    var artist_info = __webpack_require__(1947); // CONCATENATED MODULE: ./src/components/social-link/index.tsx
    function SocialLink({ children, href }) {
      return /*#__PURE__*/ jsx_runtime.jsx(Social, {
        href: href,
        target: '_blank',
        children: children,
      });
    }
    const Social = styled_components_cjs /* default.a.withConfig */.ZP.a
      .withConfig({
        displayName: 'social-link__Social',
        componentId: 'sc-15ne3m8-0',
      })(
      [
        'width:',
        ';max-width:',
        ';height:',
        ';max-height:',
        ';background-color:',
        ';display:flex;justify-content:center;align-items:center;border-radius:50%;transition:background-color ',
        ';&:hover{background-color:',
        ';}> svg{fill:',
        ';height:calc(',
        ' / 2);}',
      ],
      ({ theme }) => theme.sizes.socialIconSize,
      ({ theme }) => theme.sizes.socialIconSize,
      ({ theme }) => theme.sizes.socialIconSize,
      ({ theme }) => theme.sizes.socialIconSize,
      ({ theme }) => theme.colors.iconBackground,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.iconBackgroundHover,
      ({ theme }) => theme.colors.primary,
      ({ theme }) => theme.sizes.socialIconSize
    );
    // EXTERNAL MODULE: ./src/components/motion-opacity/index.tsx
    var motion_opacity = __webpack_require__(2869);
    // EXTERNAL MODULE: ./src/utils/get-social-icon.tsx + 16 modules
    var get_social_icon = __webpack_require__(1389); // CONCATENATED MODULE: ./src/components/sidebar/index.tsx
    const Sidebar = ({ className, pageData, noBg, hideIcons }) => {
      const theme = (0, styled_components_cjs /* useTheme */.Fg)();
      const isMobile = (0, is_mobile /* default */.Z)();
      const router = (0, next_router.useRouter)();
      const [menuOpen, setMenuOpen] = react.useState(false);
      const isHome = router.pathname === '/';

      const hideInfo = () => {
        if (isMobile && !isHome) {
          return true;
        }
      };

      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(SidebarWrapper, {
        className: className || '',
        hideInfo: hideInfo(),
        noBg: noBg,
        children: [
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(Nav, {
            className: hideInfo() ? 'hide-info' : '',
            children: [
              isMobile && router.pathname !== '/merch/cart'
                ? /*#__PURE__*/ jsx_runtime.jsx(cart /* default */.Z, {
                    onClick: () => router.push(`/merch/cart`),
                  })
                : null,
              !hideIcons &&
                /*#__PURE__*/ jsx_runtime.jsx(LogoWrapper, {
                  children: !isHome
                    ? /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
                        href: '/',
                        children: /*#__PURE__*/ jsx_runtime.jsx('a', {
                          style: {
                            width: '86px',
                            height: '20px',
                          },
                          children: /*#__PURE__*/ jsx_runtime.jsx(logo, {
                            fill: theme.colors.logo,
                          }),
                        }),
                      })
                    : /*#__PURE__*/ jsx_runtime.jsx('span', {
                        style: {
                          width: '86px',
                          height: '20px',
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(logo, {
                          noAnimation: true,
                          fill: theme.colors.logo,
                        }),
                      }),
                }),
              /*#__PURE__*/ jsx_runtime.jsx(framer_motion_cjs /* AnimatePresence */.M_, {
                children: isMobile
                  ? !menuOpen
                    ? /*#__PURE__*/ jsx_runtime.jsx(motion_opacity /* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(menu, {
                          onClick: () => setMenuOpen(true),
                        }),
                      })
                    : /*#__PURE__*/ jsx_runtime.jsx(motion_opacity /* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_close /* default */.Z, {
                          style: {
                            width: 24,
                          },
                          fill: theme.colors.primary,
                          onClick: () => setMenuOpen(false),
                        }),
                      })
                  : null,
              }),
            ],
          }),
          isMobile && menuOpen
            ? /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  /*#__PURE__*/ jsx_runtime.jsx(Backdrop, {
                    onClick: () => setMenuOpen(false),
                  }),
                  /*#__PURE__*/ jsx_runtime.jsx(MobileMenu, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(navbar, {}),
                  }),
                ],
              })
            : null,
          !hideInfo()
            ? /*#__PURE__*/ (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  /*#__PURE__*/ jsx_runtime.jsx(artist_info /* default */.Z, {
                    avatar: (pageData === null || pageData === void 0 ? void 0 : pageData.avatar) || '',
                    title: (pageData === null || pageData === void 0 ? void 0 : pageData.title) || '',
                    description: pageData === null || pageData === void 0 ? void 0 : pageData.data.bio,
                  }),
                  !hideIcons &&
                    /*#__PURE__*/ jsx_runtime.jsx(SocialLinks, {
                      children: /*#__PURE__*/ jsx_runtime.jsx(SocialLinksContent, {
                        children: pageData.data.social
                          .filter((s) => s.url && s.url !== 'NEW')
                          .map(
                            (social, key) =>
                              social.url &&
                              /*#__PURE__*/ jsx_runtime.jsx(
                                SocialLink,
                                {
                                  href: social.url,
                                  children: (0, get_social_icon /* default */.Z)(social.provider),
                                },
                                key
                              )
                          ),
                      }),
                    }),
                ],
              })
            : null,
        ],
      });
    };

    /* harmony default export */ const sidebar = Sidebar;
    const SidebarWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__SidebarWrapper',
        componentId: 'sc-1a9uk47-0',
      })(
      [
        'max-width:500px;width:100%;height:100vh;padding:108px 116px 0;position:relative;background-color:',
        ';@media (max-width:',
        '){max-width:400px;padding:108px 32px 0;}@media (max-width:',
        '){width:100%;max-width:none;height:auto;padding:0 24px;position:static;}',
        ' ',
        '',
      ],
      ({ theme }) => theme.colors.sidebarBackground,
      ({ theme }) => `${theme.breakpoints.laptop}px`,
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ hideInfo }) => (hideInfo ? (0, styled_components_cjs /* css */.iv)(['padding-bottom:0;']) : null),
      ({ noBg }) =>
        noBg
          ? (0, styled_components_cjs /* css */.iv)(
              ['@media (max-width:', '){background-color:transparent;}'],
              ({ theme }) => `${theme.breakpoints.tablet}px`
            )
          : null
    );
    const Backdrop = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__Backdrop',
        componentId: 'sc-1a9uk47-1',
      })(['position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;background-color:', ';'], ({ theme }) =>
      (0, polished_cjs /* rgba */.m4)(theme.colors.sidebarBackground, 0.5)
    );
    const MobileMenu = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__MobileMenu',
        componentId: 'sc-1a9uk47-2',
      })(
      ['position:fixed;top:80px;right:0;bottom:40%;left:0;padding:160px 24px 48px;z-index:5;background-color:', ';'],
      ({ theme }) => theme.colors.sidebarBackground
    );
    const SocialLinks = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__SocialLinks',
        componentId: 'sc-1a9uk47-3',
      })(['width:100%;margin-top:24px;position:relative;']);
    const SocialLinksContent = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__SocialLinksContent',
        componentId: 'sc-1a9uk47-4',
      })(
      [
        'width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;gap:6px;& > *{flex:0 0 auto;}@media (max-width:',
        '){justify-content:center;}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const LogoWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__LogoWrapper',
        componentId: 'sc-1a9uk47-5',
      })(
      [
        'width:86px;position:absolute;top:35px;left:32px;overflow:visible;@media (max-width:',
        '){position:relative;top:auto;left:auto;}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Nav = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'sidebar__Nav',
        componentId: 'sc-1a9uk47-6',
      })(
      [
        '@media (max-width:',
        '){display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:28px 0;z-index:990;position:relative;}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const StyledLink = (0, styled_components_cjs /* default */.ZP)(link_default()).withConfig({
      displayName: 'sidebar__StyledLink',
      componentId: 'sc-1a9uk47-7',
    })(['width:86px;']);
    // EXTERNAL MODULE: ./src/components/framer/index.tsx
    var framer = __webpack_require__(8052); // CONCATENATED MODULE: ./src/components/container/index.tsx
    function Container({
      className,
      children,
      pageData,
      action,
      hasBackground,
      hasBackgroundMobile,
      hideNavbar,
      hideSidebar,
      hideCart,
      hideIcons,
      noAnimation,
    }) {
      const router = (0, next_router.useRouter)();
      const isMobile = (0, is_mobile /* default */.Z)();
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(StyledContainer, {
        className: className ? className : '',
        hasBackground: hasBackground,
        hasBackgroundMobile: hasBackgroundMobile,
        hideSidebar: hideSidebar,
        children: [
          pageData
            ? !hideSidebar
              ? /*#__PURE__*/ jsx_runtime.jsx(sidebar, {
                  noBg: hasBackgroundMobile,
                  pageData: pageData,
                  hideIcons: hideIcons,
                })
              : null
            : null,
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(Wrapper, {
            className: 'wrapper',
            variants: noAnimation ? undefined : framer /* containerAnimations */.iR,
            initial: noAnimation ? undefined : 'initial',
            animate: noAnimation ? undefined : 'animate',
            exit: noAnimation ? undefined : 'exit',
            transition: framer /* easeTransition */.BH,
            children: [
              !isMobile
                ? /*#__PURE__*/ (0, jsx_runtime.jsxs)('div', {
                    children: [
                      !hideNavbar ? /*#__PURE__*/ jsx_runtime.jsx(navbar, {}) : null,
                      action
                        ? /*#__PURE__*/ jsx_runtime.jsx(ActionWrapper, {
                            className: hideSidebar ? 'centered' : '',
                            children: action,
                          })
                        : null,
                      !hideCart
                        ? /*#__PURE__*/ jsx_runtime.jsx(PositionedCartIcon, {
                            onClick: () => router.push(`/merch/cart`),
                          })
                        : null,
                    ],
                  })
                : null,
              isMobile && hideSidebar
                ? action
                  ? /*#__PURE__*/ jsx_runtime.jsx(ActionWrapper, {
                      className: hideSidebar ? 'centered' : '',
                      children: action,
                    })
                  : null
                : null,
              /*#__PURE__*/ jsx_runtime.jsx(Content, {
                className: `content ${action ? 'has-action' : ''}`,
                children: children,
              }),
            ],
          }),
        ],
      });
    }
    const StyledContainer = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'container__StyledContainer',
        componentId: 'u3fn7h-0',
      })(
      [
        'height:100%;height:100vh;max-height:100%;max-height:100vh;overflow:hidden;margin:auto;position:relative;display:flex;@media (max-width:',
        '){flex-direction:column;max-height:none;overflow:auto;}',
        ' ',
        ' .content{',
        '}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`,
      ({ hasBackground }) =>
        hasBackground &&
        (0, styled_components_cjs /* css */.iv)(
          [
            '.wrapper{background-color:',
            ';@media (max-width:',
            '){background-color:',
            ';}}.content{margin-left:112px;@media (max-width:',
            '){margin-left:0;}}',
          ],
          ({ theme }) => theme.colors.background,
          ({ theme }) => `${theme.breakpoints.laptop}px`,
          ({ theme }) => theme.colors.background,
          ({ theme }) => `${theme.breakpoints.laptop}px`
        ),
      ({ hasBackgroundMobile }) =>
        hasBackgroundMobile &&
        (0, styled_components_cjs /* css */.iv)(
          ['.wrapper{@media (max-width:', '){background-color:', ';}}'],
          ({ theme }) => `${theme.breakpoints.laptop}px`,
          ({ theme }) => theme.colors.background
        ),
      ({ hideSidebar }) => hideSidebar && (0, styled_components_cjs /* css */.iv)(['margin-inline:auto;'])
    );
    const Wrapper = (0, styled_components_cjs /* default */.ZP)(framer_motion_cjs /* motion.div */.ww.div).withConfig({
      displayName: 'container__Wrapper',
      componentId: 'u3fn7h-1',
    })(
      [
        'width:100%;height:100%;height:100vh;max-height:100%;max-height:100vh;overflow-y:scroll;padding:32px;position:relative;@media (max-width:',
        '){max-width:none;padding:24px;height:auto;max-height:none;overflow-y:visible;}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const Content = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'container__Content',
        componentId: 'u3fn7h-2',
      })(
      [
        'max-width:608px;&.has-action{margin-top:80px;}@media (max-width:',
        '){max-width:none;&.has-action{margin-top:0;}}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );
    const PositionedCartIcon = (0, styled_components_cjs /* default */.ZP)(cart /* default */.Z).withConfig({
      displayName: 'container__PositionedCartIcon',
      componentId: 'u3fn7h-3',
    })(['position:absolute;top:32px;right:32px;']);
    const ActionWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'container__ActionWrapper',
        componentId: 'u3fn7h-4',
      })(
      [
        'position:absolute;top:32px;left:32px;&.centered{left:max(32px,calc(50% - (450px / 2)));@media (max-width:',
        '){position:relative;top:auto;left:auto;margin-bottom:24px;}}',
      ],
      ({ theme }) => `${theme.breakpoints.tablet}px`
    );

    /***/
  },

  /***/ 8052: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ BH: () => /* binding */ easeTransition,
      /* harmony export */ LS: () => /* binding */ scaleAnimations,
      /* harmony export */ iR: () => /* binding */ containerAnimations,
      /* harmony export */ kr: () => /* binding */ imageTransition,
      /* harmony export */ wM: () => /* binding */ hoverMotion,
      /* harmony export */
    });
    const easeTransition = {
      duration: 0.5,
      // ease: [0.0, 0.005, 0.2, 1.0],
      ease: [0.25, 0.1, 0.25, 1],
    };
    const imageTransition = {
      duration: 0.5,
      delay: 0.35,
    };
    const scaleAnimations = {
      initial: {
        opacity: 0,
        scaleY: 0,
        originY: 'top',
      },
      animate: {
        opacity: 1,
        scaleY: 1,
        originY: 'top',
      },
      exit: {
        opacity: 0,
        scaleY: 0,
        originY: 'top',
      },
    };
    const hoverMotion = {
      rest: {
        scale: 1,
      },
      hover: {
        scale: 0.95,
      },
      tap: {
        scale: 1.0125,
      },
    };
    const containerAnimations = {
      initial: {
        opacity: 0,
        x: '100%',
      },
      animate: {
        opacity: 1,
        x: '0%',
      },
      exit: {
        opacity: 0,
        x: '-100%',
      },
    };

    /***/
  },

  /***/ 1843: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var _components_framer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8052);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
    const _excluded = ['className', 'onClick'];

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    const CartIcon = (_ref) => {
      let { className, onClick } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

      const theme = (0, styled_components__WEBPACK_IMPORTED_MODULE_4__ /* .useTheme */.Fg)();
      const iconAnimation = {
        initial: {
          scale: 1,
        },
        animate: {
          scale: 1.2,
        },
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(
        framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div,
        {
          whileHover: 'animate',
          initial: 'initial',
          children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            'svg',
            _objectSpread(
              _objectSpread(
                {
                  className: className,
                  'aria-hidden': 'true',
                  role: 'img',
                  viewBox: '0 0 24 24',
                  width: 24,
                  height: 24,
                  onClick: onClick,
                  style: {
                    cursor: onClick ? 'pointer' : 'auto',
                  },
                },
                props
              ),
              {},
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx('rect', {
                    fill: 'none',
                    width: '24',
                    height: '24',
                  }),
                  /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                    framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.g */.ww.g,
                    {
                      variants: iconAnimation,
                      transition: _components_framer__WEBPACK_IMPORTED_MODULE_2__ /* .easeTransition */.BH,
                      children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx('path', {
                          fill: theme.colors.primary,
                          d: 'M9.72,19.25c-.96,0-1.74-.79-1.74-1.75s.78-1.75,1.74-1.75,1.74,.79,1.74,1.75-.78,1.75-1.74,1.75Zm0-2.5c-.41,0-.75,.34-.75,.75s.33,.75,.75,.75,.75-.34,.75-.75-.33-.75-.75-.75Z',
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx('path', {
                          fill: theme.colors.primary,
                          d: 'M15.97,19.25c-.96,0-1.74-.79-1.74-1.75s.78-1.75,1.74-1.75,1.74,.79,1.74,1.75-.78,1.75-1.74,1.75Zm0-2.5c-.41,0-.75,.34-.75,.75s.33,.75,.75,.75,.75-.34,.75-.75-.33-.75-.75-.75Z',
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx('path', {
                          fill: theme.colors.primary,
                          d: 'M17.02,15.05h-7.65l-1.39-8.4h9.54c.67,0,1.28,.33,1.65,.89,.37,.56,.44,1.26,.18,1.88l-2.33,5.63Zm-6.81-1h6.15l2.07-5.02c.13-.31,.1-.66-.09-.94-.19-.28-.49-.45-.83-.45H9.15l1.06,6.4Z',
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx('polygon', {
                          fill: theme.colors.primary,
                          points: '7.49 15.14 5.82 5.75 4.5 5.75 4.5 4.75 6.65 4.75 8.47 14.96 7.49 15.14',
                        }),
                      ],
                    }
                  ),
                ],
              }
            )
          ),
        }
      );
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = CartIcon;

    /***/
  },

  /***/ 6041: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ CloseIcon,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function CloseIcon(props) {
      return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              width: '12',
              height: '12',
              viewBox: '0 0 12 12',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('rect', {
                x: '10.9497',
                y: '-0.36377',
                width: '2',
                height: '16',
                rx: '1',
                transform: 'rotate(45 10.9497 -0.36377)',
                fill: props.fill,
              }),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx('rect', {
                x: '1.05029',
                y: '-0.36377',
                width: '16',
                height: '2',
                rx: '1',
                transform: 'rotate(45 1.05029 -0.36377)',
                fill: props.fill,
              }),
            ],
          }
        )
      );
    }

    /***/
  },

  /***/ 2869: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* unused harmony export MotionOpacity */
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9141);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);

    const MotionOpacity = (props) => {
      const opacity = {
        visible: {
          opacity: 1,
          transition: {
            ease: 'easeIn',
            duration: 0.25,
          },
        },
        hidden: {
          opacity: 0,
        },
      };
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx('div', {
        className: props.className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
          framer_motion__WEBPACK_IMPORTED_MODULE_1__ /* .motion.div */.ww.div,
          {
            initial: 'hidden',
            animate: 'visible',
            exit: 'hidden',
            variants: opacity,
            children: props.children,
          }
        ),
      });
    };
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MotionOpacity;

    /***/
  },

  /***/ 8134: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ ThemeWrapper,
    });

    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/layout/page/index.tsx
    function Page({ children }) {
      return /*#__PURE__*/ jsx_runtime.jsx(StyledLayout, {
        children: children,
      });
    }
    const StyledLayout = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'page__StyledLayout',
        componentId: 'qan11h-0',
      })(['background-color:', ';min-width:100vw;min-height:100vh;'], ({ theme }) => theme.colors.background); // CONCATENATED MODULE: ./src/theme/sizes/index.tsx
    /* harmony default export */ const sizes = {
      socialIconSize: '48px',
      commonIconSize: '44px',
      avatarWidth: '265px',
      avatarHeight: '316px',
      avatarWidthMobile: '200px',
      avatarHeightMobile: '200px',
      productSize: '224px',
      productSizeDetail: '400px',
      productSizeMobile: '94px',
      coverSize: '224px',
      coverSizeMobile: '155px',
      coverSizeHighlight: '136px',
      coverSizeHighlightMobile: '188px',
      coverSizeSmall: '60px',
      coverSizeRounded: '200px',
      coverSizeRoundedMobile: '130px',
    }; // CONCATENATED MODULE: ./src/theme/colors/index.tsx
    /* harmony default export */ const colors = {
      grays: {
        gray1: '#161618',
        gray2: '#2A2B2F',
        gray25: '#25262B',
        gray275: '#32343C',
        gray285: '#383A3E',
        gray3: '#8e8e8e',
        gray4: '#bababa',
        gray5: '#dedede',
        gray6: '#eaeaea',
        gray7: '#676767',
        gray8: '#999999',
        gray85: '#d9d9d9',
        gray9: '#f4f4f4',
        gray10: '#F1F2F5',
        gray12: '#EFF0F3',
      },
      blacks: {
        black0: '#010101',
      },
      white: '#FFFFFF',
      black: '#111111',
      reds: {
        red1: '#ED3438',
        red2: '#D82F32',
        red3: '#ed0a0f',
      },
      green: {
        green1: '#a2d76b',
        green2: '#4D5E3A',
        green3: '#536449',
        green4: '#E3F3D3',
      },
      yellow: {
        yellow1: '#2A2723',
        yellow2: '#F3D993',
      },
    }; // CONCATENATED MODULE: ./src/theme/shadows/index.tsx
    /* harmony default export */ const shadows = {
      redShadow: '10px 10px 20px rgba(237, 52, 56, 0.3);',
    };
    // EXTERNAL MODULE: ./node_modules/polished/dist/polished.cjs.js
    var polished_cjs = __webpack_require__(2521); // CONCATENATED MODULE: ./src/theme/variant/dark.tsx
    const dark = {
      primary: colors.white,
      primaryHover: colors.grays.gray8,
      secondary: colors.grays.gray4,
      secondaryHover: colors.grays.gray3,
      accent: colors.reds.red1,
      accentHover: colors.reds.red2,
      success: colors.green.green1,
      successDark: colors.green.green2,
      successMid: colors.green.green3,
      successLight: colors.green.green4,
      error: colors.reds.red3,
      inputLabel: colors.grays.gray12,
      shadow: (0, polished_cjs /* rgba */.m4)(colors.blacks.black0, 0.3),
      background: colors.grays.gray25,
      sidebarBackground: colors.grays.gray1,
      logo: colors.grays.gray10,
      inputsBackground: colors.grays.gray275,
      highlightLight: colors.yellow.yellow2,
      highlightDark: colors.yellow.yellow1,
      highlightBackground: colors.yellow.yellow1,
      inputsBackgroundHover: colors.black,
      cartItemBackground: colors.grays.gray275,
      icon: colors.white,
      iconBackground: colors.grays.gray2,
      iconBackgroundHover: colors.grays.gray3,
      itemBackground: colors.grays.gray2,
      itemBackgroundHover: colors.grays.gray285,
      highlight: colors.yellow.yellow2,
    };
    /* harmony default export */ const variant_dark = dark; // CONCATENATED MODULE: ./src/theme/variant/light.tsx
    const light = {
      primary: colors.grays.gray1,
      primaryHover: colors.black,
      secondary: colors.grays.gray7,
      secondaryHover: colors.grays.gray7,
      accent: colors.reds.red1,
      accentHover: colors.reds.red2,
      success: colors.green.green1,
      successDark: colors.green.green2,
      successMid: colors.green.green3,
      successLight: colors.green.green4,
      error: colors.reds.red3,
      inputLabel: colors.grays.gray3,
      shadow: (0, polished_cjs /* rgba */.m4)(colors.grays.gray5, 0.2),
      background: colors.grays.gray6,
      sidebarBackground: colors.grays.gray9,
      logo: colors.black,
      inputsBackground: colors.grays.gray5,
      highlightLight: colors.yellow.yellow2,
      highlightDark: colors.yellow.yellow1,
      highlightBackground: (0, polished_cjs /* rgba */.m4)(colors.yellow.yellow2, 0.1),
      inputsBackgroundHover: colors.grays.gray4,
      cartItemBackground: colors.grays.gray5,
      icon: colors.grays.gray2,
      iconBackground: colors.grays.gray9,
      iconBackgroundHover: colors.grays.gray85,
      itemBackground: colors.grays.gray6,
      itemBackgroundHover: colors.grays.gray85,
      highlight: colors.yellow.yellow2,
    };
    /* harmony default export */ const variant_light = light;
    // EXTERNAL MODULE: ./src/theme/breakpoints/index.tsx
    var breakpoints = __webpack_require__(7911); // CONCATENATED MODULE: ./src/theme/transitions/index.tsx
    /* harmony default export */ const transitions = {
      duration: '.275s',
      type: 'ease-in-out',
      curve: 'cubic-bezier(0.650, 0.000, 0.450, 1.000)',
    }; // CONCATENATED MODULE: ./src/theme/device/index.tsx
    /* harmony default export */ const device = {
      mobileS: `(min-width: ${breakpoints /* default.mobileS */.Z.mobileS}px)`,
      mobileM: `(min-width: ${breakpoints /* default.mobileM */.Z.mobileM}px)`,
      mobileL: `(min-width: ${breakpoints /* default.mobileL */.Z.mobileL}px)`,
      tablet: `(min-width: ${breakpoints /* default.tablet */.Z.tablet}px)`,
      laptopS: `(min-width: ${breakpoints /* default.laptopS */.Z.laptopS}px)`,
      laptop: `(min-width: ${breakpoints /* default.laptop */.Z.laptop}px)`,
      laptopL: `(min-width: ${breakpoints /* default.laptopL */.Z.laptopL}px)`,
      laptopXL: `(min-width: ${breakpoints /* default.laptopXL */.Z.laptopXL}px)`,
      desktop: `(min-width: ${breakpoints /* default.desktop */.Z.desktop}px)`,
      desktopL: `(min-width: ${breakpoints /* default.desktopL */.Z.desktopL}px)`,
      iphoneX: `only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)`,
      retinaDesktop: `
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px),
    only screen and (min--moz-device-pixel-ratio: 2) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px),
    only screen and (-o-min-device-pixel-ratio: 2/1) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px),
    only screen and (min-device-pixel-ratio: 2) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px),
    only screen and (min-resolution: 192dpi) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px),
    only screen and (min-resolution: 2dppx) and (min-width: ${breakpoints /* default.tablet */.Z.tablet}px)`,
      retina: `
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx)`,
    }; // CONCATENATED MODULE: ./src/theme/general/index.tsx
    /* harmony default export */ const general = {
      borderRadius: '4px',
      paddingBtn: '22px',
      columnWidth: 49,
      // this is in px
      gutterWidth: 5,
      // this is in px
      boxShadow: `10px 10px 20px 0`,
      boxShadowHover: `0px 5px 10px 0`,
      boxShadowInput: `0 4px 8px 0`,
      boxShadowInputHover: `0 2px 4px 0`,
      boxShadowPricing: `0 20px 40px 0`,
    }; // CONCATENATED MODULE: ./src/theme/index.tsx
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const commonThemeProps = {
      fontFamily: "'Inter', sans-serif;",
      palette: _objectSpread({}, colors),
      transitions: _objectSpread({}, transitions),
      sizes: _objectSpread({}, sizes),
      shadows: _objectSpread({}, shadows),
      general: _objectSpread({}, general),
    };
    const theme = {
      light: _objectSpread(
        _objectSpread({}, commonThemeProps),
        {},
        {
          colors: _objectSpread({}, variant_light),
          breakpoints: _objectSpread({}, breakpoints /* default */.Z),
          device: _objectSpread({}, device),
        }
      ),
      dark: _objectSpread(
        _objectSpread({}, commonThemeProps),
        {},
        {
          colors: _objectSpread({}, variant_dark),
          breakpoints: _objectSpread({}, breakpoints /* default */.Z),
          device: _objectSpread({}, device),
        }
      ),
    };
    /* harmony default export */ const src_theme = theme; // CONCATENATED MODULE: ./src/theme/global/index.tsx
    /* harmony default export */ const global = styled_components_cjs /* createGlobalStyle */.vJ`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #F1F2F5;
  color: #32343c;
  font-size: 16px;
  font: 400 16px "Inter", sans-serif;
  font-family: 'Inter', sans-serif;
  text-rendering: geometricPrecision;
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums;
  font-weight: normal;
  min-width: 320px;
  margin: 0;
  padding: 0;
  font-stretch: normal;
  font-style: normal;
  overscroll-behavior: none;
}

body.alternate-font {
  background-color: white;
  font: 400 16px "Inter", sans-serif;
  font-family: "Inter", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  position: relative;
}

a.link-line {
  display: inline-flex;
}

a.link-line.red {
  color: #ED3438;
}

a.link-line:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  width: 0%;
  height: 2px;
  background-color: #32343c;
  border-radius: 2px;
  transition: width .25s ease-in-out, right .25s ease-in-out;
}
a.link-line.red:after {
  background-color: #ED3438;
}

a.link-line:hover:after {
  right: 0;
  width: 100%;
}

button,
input,
select,
textarea {
  -webkit-appearance: none;
  filter: none;
  border: none;
  outline: none;
  font-family: "Sen", sans-serif;
}

div[data-consent-manager-dialog] input {
  -webkit-appearance: auto;
}

body.alternate-font button,
body.alternate-font input,
body.alternate-font select,
body.alternate-font textarea {
  font-family: "Inter", sans-serif;
}

button:focus,
input:focus {
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  background-color: white !important;
  color: #32343C !important;
  -webkit-text-fill-color: #32343C !important;
  box-shadow: 0 0 0 1000px white inset !important;
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.mb-5 {
  margin-bottom: 5px;
}
.mb-10 {
  margin-bottom: 5px;
}
.mb-15 {
  margin-bottom: 8px;
}
.mb-20 {
  margin-bottom: 10px;
}
.mb-30 {
  margin-bottom: 15px;
}
.mb-40 {
  margin-bottom: 20px;
}
.mb-50 {
  margin-bottom: 25px;
}
.mb-60 {
  margin-bottom: 30px;
}
.mb-70 {
  margin-bottom: 35px;
}
.mb-80 {
  margin-bottom: 40px;
}

.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 5px;
}
.mt-15 {
  margin-top: 8px;
}
.mt-20 {
  margin-top: 10px;
}
.mt-30 {
  margin-top: 15px;
}
.mt-40 {
  margin-top: 20px;
}
.mt-50 {
  margin-top: 25px;
}
.mt-60 {
  margin-top: 30px;
}
.mt-70 {
  margin-top: 35px;
}
.mt-80 {
  margin-top: 40px;
}

.mr-5 {
  margin-right: 5px;
}
.mr-10 {
  margin-right: 5px;
}

.ml-4 {
  margin-left: 4px;
}

.ml-5 {
  margin-left: 5px;
}

.ml-10 {
  margin-left: 5px;
}

@media only screen and (min-width:1280px) {
	.mb-5 {
    margin-bottom: 5px;
  }
	.mb-10 {
    margin-bottom: 10px;
  }
	.mb-15 {
    margin-bottom: 15px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .mb-60 {
    margin-bottom: 60px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .mb-80 {
    margin-bottom: 80px;
  }

  .mt-5 {
    margin-top: 5px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .mt-60 {
    margin-top: 60px;
  }
  .mt-70 {
    margin-top: 70px;
  }
  .mt-80 {
    margin-top: 80px;
  }
}

::selection {
  background: #111111;
  color: #ffffff;
}
`; // CONCATENATED MODULE: ./src/components/theme-wrapper/index.tsx
    function ThemeWrapper({ theme = 'dark', children }) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(styled_components_cjs /* ThemeProvider */.f6, {
        theme: src_theme[theme],
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(global, {}),
          /*#__PURE__*/ jsx_runtime.jsx(Page, {
            children: children,
          }),
        ],
      });
    }

    /***/
  },

  /***/ 2447: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ useIsMobile,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /* harmony import */ var _artist_theme_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7911);

    function useIsMobile() {
      const { 0: windowSize, 1: setWindowSize } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined,
      });
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return windowSize.width
        ? windowSize.width <= _artist_theme_breakpoints__WEBPACK_IMPORTED_MODULE_1__ /* ["default"].tablet */.Z.tablet
        : false;
    }

    /***/
  },

  /***/ 3886: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ V: () => /* binding */ usePageData,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
    /**
     * usePageData: This hook supports injecting preview data from a container window
     */

    function inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }

    const usePageData = (initial) => {
      const { 0: pageData, 1: setPageData } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const processState = (data) => {
          try {
            return JSON.parse(decodeURIComponent(escape(window.atob(data))));
          } catch {
            return {};
          }
        };

        const receiveMessage = (event) => {
          var _process$env$NEXT_PUB, _event$data, _event$data2;

          const allowedOrigins =
            ((_process$env$NEXT_PUB = 'http://localhost:3000,https://app.development.trac.co') === null ||
            _process$env$NEXT_PUB === void 0
              ? void 0
              : _process$env$NEXT_PUB.split(',')) || [];

          if (
            !(
              allowedOrigins.includes(event.origin) &&
              ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.origin) ===
                'trac-editor' &&
              (_event$data2 = event.data) !== null &&
              _event$data2 !== void 0 &&
              _event$data2.payload
            )
          ) {
            return;
          }

          setPageData(processState(event.data.payload));
        };

        window.addEventListener('message', receiveMessage, false);

        if (inIframe()) {
          window.parent.postMessage(
            {
              origin: 'trac-artist-site',
              ready: true,
            },
            '*'
          );
        }

        return () => {
          window.removeEventListener('message', receiveMessage);
        };
      }, []);
      return {
        pageData,
      };
    };

    /***/
  },

  /***/ 9905: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ GetTracPageData,
    }); // CONCATENATED MODULE: ./src/utils/get-artist-id.ts

    function getArtistId(originalUrl) {
      var _window;

      const rx = new RegExp(`^([^.]+)(?:.[^.]+){0,1}.${'development.trac.co'}$`);
      const url = new URL(
        originalUrl || ((_window = window) === null || _window === void 0 ? void 0 : _window.location.toString()) || ''
      );
      const match = rx.exec(url.host);

      if (match) {
        return match[1];
      }

      return true ? 'faizy-dev2' : 0;
    } // CONCATENATED MODULE: ./src/pages/api/tracpage/index.ts
    async function GetTracPageData(originalUrl) {
      const artistId = getArtistId(originalUrl);
      const url = `${'https://media.development.trac.co'}/trac-page/${artistId}/data.json`;
      return fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }

        return {};
      });
    }

    /***/
  },

  /***/ 7911: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
      mobileS: 321,
      mobileM: 374,
      mobileL: 425,
      tablet: 769,
      laptopS: 1023,
      laptop: 1366,
      laptopL: 1439,
      laptopXL: 1600,
      desktop: 1919,
      desktopL: 2559,
    };

    /***/
  },

  /***/ 1389: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ getSocialIcon,
    });

    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/icons/song/index.tsx
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function SongIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        _objectSpread(
          _objectSpread(
            {
              role: 'img',
              viewBox: '0 0 512 512',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z',
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/tiktok/index.tsx
    function tiktok_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function tiktok_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          tiktok_ownKeys(Object(source), true).forEach(function (key) {
            tiktok_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          tiktok_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function tiktok_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function TiktokIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        tiktok_objectSpread(
          tiktok_objectSpread(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M14 6.1c-0.1 0-0.2 0-0.4 0 -1.4 0-2.6-0.7-3.4-1.8v6.2c0 2.5-2.1 4.6-4.6 4.6S1 13 1 10.4s2.1-4.6 4.6-4.6l0 0c0.1 0 0.2 0 0.3 0v2.3C5.8 8.1 5.7 8.1 5.6 8.1c-1.3 0-2.4 1-2.4 2.3 0 1.3 1.1 2.3 2.4 2.3 1.3 0 2.5-1 2.5-2.3L8.1 0h2.2c0.2 1.9 1.8 3.4 3.7 3.6L14 6.1',
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/youtube/index.tsx
    function youtube_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function youtube_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          youtube_ownKeys(Object(source), true).forEach(function (key) {
            youtube_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          youtube_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function youtube_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function YoutubeIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        youtube_objectSpread(
          youtube_objectSpread(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-hidden': 'true',
              focusable: 'false',
              role: 'img',
              viewBox: '0 0 576 512',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/twitter/index.tsx
    function twitter_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function twitter_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          twitter_ownKeys(Object(source), true).forEach(function (key) {
            twitter_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          twitter_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function twitter_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function TwitterIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        twitter_objectSpread(
          twitter_objectSpread(
            {
              width: '24',
              height: '20',
              viewBox: '0 0 24 20',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              d: 'M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z',
              fill: props.fill,
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/snapchat/index.tsx
    function snapchat_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function snapchat_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          snapchat_ownKeys(Object(source), true).forEach(function (key) {
            snapchat_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          snapchat_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function snapchat_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function SnapchatIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        snapchat_objectSpread(
          snapchat_objectSpread(
            {
              'aria-hidden': 'true',
              role: 'img',
              viewBox: '0 0 512 512',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z',
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/facebook/index.tsx
    function facebook_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function facebook_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          facebook_ownKeys(Object(source), true).forEach(function (key) {
            facebook_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          facebook_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function facebook_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function FacebookIcon(props) {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        facebook_objectSpread(
          facebook_objectSpread(
            {
              width: '13',
              height: '24',
              viewBox: '0 0 13 24',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              d: 'M12.1482 13.3981L12.8219 9.08738H8.60731V6.29126C8.60731 5.11165 9.19498 3.96116 11.0826 3.96116H13V0.291262C13 0.291262 11.2607 0 9.59863 0C6.12603 0 3.85845 2.06505 3.85845 5.80194V9.08738H0V13.3981H3.85845V23.8194C4.6331 23.9388 5.42557 24 6.23288 24C7.04018 24 7.83265 23.9388 8.60731 23.8194V13.3981H12.1482Z',
              fill: props.fill,
            }),
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/linked-in/index.tsx
    function linked_in_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function linked_in_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          linked_in_ownKeys(Object(source), true).forEach(function (key) {
            linked_in_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          linked_in_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function linked_in_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function LinkedinIcon(props) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        linked_in_objectSpread(
          linked_in_objectSpread(
            {
              width: '22',
              height: '22',
              viewBox: '0 0 22 22',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ (0, jsx_runtime.jsxs)('g', {
                clipPath: 'url(#clip0)',
                children: [
                  /*#__PURE__*/ jsx_runtime.jsx('path', {
                    d: 'M21.9947 22V21.9991H22.0002V13.9306C22.0002 9.98345 21.1504 6.94287 16.5359 6.94287C14.3176 6.94287 12.8289 8.1602 12.2212 9.31429H12.157V7.31137H7.78174V21.9991H12.3376V14.7263C12.3376 12.8114 12.7006 10.9597 15.072 10.9597C17.4086 10.9597 17.4434 13.145 17.4434 14.8491V22H21.9947Z',
                    fill: props.fill,
                  }),
                  /*#__PURE__*/ jsx_runtime.jsx('path', {
                    d: 'M0.362793 7.3125H4.92413V22.0003H0.362793V7.3125Z',
                    fill: props.fill,
                  }),
                  /*#__PURE__*/ jsx_runtime.jsx('path', {
                    d: 'M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z',
                    fill: props.fill,
                  }),
                ],
              }),
              /*#__PURE__*/ jsx_runtime.jsx('defs', {
                children: /*#__PURE__*/ jsx_runtime.jsx('clipPath', {
                  id: 'clip0',
                  children: /*#__PURE__*/ jsx_runtime.jsx('rect', {
                    width: '22',
                    height: '22',
                    fill: props.fill,
                  }),
                }),
              }),
            ],
          }
        )
      );
    } // CONCATENATED MODULE: ./src/components/icons/instagram/index.tsx
    function instagram_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function instagram_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          instagram_ownKeys(Object(source), true).forEach(function (key) {
            instagram_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          instagram_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function instagram_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    function InstagramIcon(props) {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        instagram_objectSpread(
          instagram_objectSpread(
            {
              width: '26',
              height: '26',
              viewBox: '0 0 26 26',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                d: 'M12.9999 2.51258C16.4157 2.51258 16.8203 2.52563 18.1694 2.58718C19.4167 2.64411 20.094 2.85246 20.5449 3.02766C21.1005 3.23274 21.6032 3.55974 22.0158 3.98463C22.4407 4.39728 22.7677 4.8999 22.9728 5.45556C23.148 5.90634 23.3564 6.58371 23.4132 7.831C23.4748 9.18001 23.4878 9.58458 23.4878 13.0005C23.4878 16.4165 23.4748 16.821 23.4132 18.1701C23.3563 19.4174 23.1479 20.0947 22.9728 20.5455C22.7599 21.0972 22.434 21.5983 22.0158 22.0165C21.5977 22.4346 21.0966 22.7606 20.5449 22.9734C20.0941 23.1486 19.4167 23.357 18.1694 23.4139C16.8207 23.4754 16.4161 23.4885 12.9999 23.4885C9.58369 23.4885 9.17927 23.4754 7.83036 23.4139C6.58307 23.357 5.90575 23.1486 5.45492 22.9734C4.89926 22.7683 4.39664 22.4413 3.98399 22.0164C3.5591 21.6038 3.2321 21.1012 3.02702 20.5455C2.85182 20.0947 2.64341 19.4174 2.58654 18.1701C2.52499 16.8211 2.51194 16.4165 2.51194 13.0005C2.51194 9.58458 2.52499 9.18011 2.58654 7.831C2.64347 6.58371 2.85182 5.90639 3.02702 5.45556C3.23212 4.89988 3.55916 4.39723 3.98409 3.98458C4.39674 3.55969 4.89937 3.23269 5.45502 3.02761C5.9058 2.85241 6.58318 2.644 7.83046 2.58713C9.17947 2.52558 9.58404 2.51253 13 2.51253L12.9999 2.51258ZM13 0.20752C9.52565 0.20752 9.08984 0.222246 7.72555 0.284504C6.36385 0.34666 5.43395 0.562887 4.62023 0.879152C3.76662 1.20038 2.99336 1.70393 2.35437 2.3547C1.70345 2.99366 1.19975 3.76692 0.87841 4.62056C0.562398 5.43433 0.346172 6.36424 0.28427 7.72594C0.221758 9.09023 0.207031 9.52603 0.207031 13.0004C0.207031 16.4747 0.221758 16.9105 0.28427 18.2748C0.346426 19.6365 0.562652 20.5664 0.878918 21.3801C1.20014 22.2337 1.7037 23.007 2.35447 23.646C2.99346 24.2968 3.76672 24.8003 4.62033 25.1216C5.4341 25.4378 6.364 25.6541 7.72565 25.7162C9.09015 25.7785 9.5258 25.7932 13.0001 25.7932C16.4744 25.7932 16.9103 25.7785 18.2745 25.7162C19.6362 25.6541 20.5661 25.4378 21.3799 25.1216C22.2297 24.7929 23.0015 24.2903 23.6457 23.646C24.29 23.0017 24.7926 22.23 25.1213 21.3801C25.4375 20.5664 25.6538 19.6365 25.7159 18.2748C25.7782 16.9103 25.7929 16.4747 25.7929 13.0004C25.7929 9.52608 25.7782 9.09023 25.7159 7.72594C25.6538 6.36424 25.4375 5.43433 25.1213 4.62061C24.8001 3.76701 24.2965 2.99375 23.6457 2.35475C23.0067 1.70385 22.2334 1.20019 21.3797 0.878898C20.5659 0.562887 19.636 0.34666 18.2743 0.284758C16.91 0.222246 16.4742 0.20752 12.9999 0.20752H13Z',
                fill: props.fill,
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                d: 'M13 6.43066C11.7007 6.43066 10.4306 6.81595 9.35027 7.53779C8.26995 8.25964 7.42794 9.28563 6.93073 10.486C6.43351 11.6864 6.30342 13.0073 6.55689 14.2816C6.81037 15.5559 7.43604 16.7265 8.35477 17.6452C9.27351 18.5639 10.4441 19.1896 11.7184 19.4431C12.9927 19.6965 14.3136 19.5665 15.514 19.0692C16.7143 18.572 17.7403 17.73 18.4622 16.6497C19.184 15.5694 19.5693 14.2993 19.5693 13C19.5693 11.2577 18.8772 9.58676 17.6452 8.35477C16.4132 7.12279 14.7423 6.43066 13 6.43066ZM13 17.2642C12.1566 17.2642 11.3322 17.0141 10.6309 16.5456C9.92966 16.077 9.38311 15.411 9.06036 14.6318C8.73762 13.8526 8.65318 12.9952 8.81772 12.168C8.98227 11.3409 9.3884 10.581 9.98477 9.98468C10.5811 9.38832 11.341 8.98219 12.1681 8.81766C12.9953 8.65313 13.8527 8.73758 14.6319 9.06033C15.4111 9.38308 16.0771 9.92964 16.5456 10.6309C17.0142 11.3321 17.2643 12.1566 17.2643 13C17.2643 14.1309 16.815 15.2156 16.0153 16.0153C15.2156 16.815 14.1309 17.2642 13 17.2642Z',
                fill: props.fill,
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                d: 'M19.8291 7.70647C20.6769 7.70647 21.3642 7.01917 21.3642 6.17135C21.3642 5.32353 20.6769 4.63623 19.8291 4.63623C18.9812 4.63623 18.2939 5.32353 18.2939 6.17135C18.2939 7.01917 18.9812 7.70647 19.8291 7.70647Z',
                fill: props.fill,
              }),
            ],
          }
        )
      );
    }
    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294); // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/deezer/index.tsx
    function deezer_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function deezer_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          deezer_ownKeys(Object(source), true).forEach(function (key) {
            deezer_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          deezer_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function deezer_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const DeezerIsologo = (props) =>
      /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        deezer_objectSpread(
          deezer_objectSpread(
            {
              width: '23',
              height: '15',
              viewBox: '0 0 23 15',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                y: '12',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '12',
                y: '12',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '12',
                y: '8',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '6',
                y: '12',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '6',
                y: '8',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '6',
                y: '4',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '18',
                y: '12',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '18',
                y: '8',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '18',
                width: '5',
                height: '3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                x: '18',
                y: '4',
                width: '5',
                height: '3',
              }),
            ],
          }
        )
      );
    /* harmony default export */ const deezer = DeezerIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/pandora/index.tsx
    function pandora_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function pandora_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          pandora_ownKeys(Object(source), true).forEach(function (key) {
            pandora_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          pandora_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function pandora_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const PandoraIsologo = (props) =>
      /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        pandora_objectSpread(
          pandora_objectSpread(
            {
              width: '14',
              height: '16',
              viewBox: '0 0 14 16',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              d: 'M14 5.4C13.7 2.4 11 0 7.8 0H0v16h4c0.6 0 1-0.4 1-1v-3h3c1.7 0 3.3-0.7 4.4-2C13.6 8.8 14.1 7.1 14 5.4z',
            }),
          }
        )
      );
    /* harmony default export */ const pandora = PandoraIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/tidal/index.tsx
    function tidal_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function tidal_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          tidal_ownKeys(Object(source), true).forEach(function (key) {
            tidal_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          tidal_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function tidal_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const TidalIsologo = (props) => {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        tidal_objectSpread(
          tidal_objectSpread(
            {
              width: '24',
              height: '17',
              viewBox: '0 0 24 17',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M16 12l-4 4 -4-4 4-4L16 12zM4 0L0 4l4 4 4-4L4 0zM12 0L8 4l4 4 4-4L12 0zM20 0l-4 4 4 4 4-4L20 0z',
            }),
          }
        )
      );
    };
    /* harmony default export */ const tidal = TidalIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/spotify/index.tsx
    function spotify_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function spotify_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          spotify_ownKeys(Object(source), true).forEach(function (key) {
            spotify_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          spotify_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function spotify_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const SpotifyIsologo = (props) => {
      return /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        spotify_objectSpread(
          spotify_objectSpread(
            {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0zM17.5 17.3c-0.2 0.4-0.7 0.5-1 0.2 -2.8-1.7-6.4-2.1-10.5-1.2 -0.4 0.1-0.8-0.2-0.9-0.6 -0.1-0.4 0.2-0.8 0.6-0.9 4.6-1 8.5-0.6 11.7 1.3C17.6 16.5 17.7 17 17.5 17.3zM19 14c-0.3 0.4-0.8 0.6-1.3 0.3 -3.2-2-8.1-2.6-12-1.4 -0.5 0.1-1-0.1-1.2-0.6 -0.1-0.5 0.1-1 0.6-1.2 4.4-1.3 9.8-0.7 13.5 1.6C19.1 13 19.2 13.6 19 14zM19.1 10.6C15.2 8.3 8.8 8.1 5.2 9.3 4.6 9.4 3.9 9.1 3.8 8.5 3.6 7.9 3.9 7.3 4.5 7.1c4.2-1.3 11.3-1 15.7 1.6 0.5 0.3 0.7 1 0.4 1.5C20.3 10.8 19.6 11 19.1 10.6z',
            }),
          }
        )
      );
    };
    /* harmony default export */ const spotify = SpotifyIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/napster/index.tsx
    function napster_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function napster_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          napster_ownKeys(Object(source), true).forEach(function (key) {
            napster_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          napster_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function napster_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const NapsterIsologo = (props) => {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        napster_objectSpread(
          napster_objectSpread(
            {
              width: '16',
              height: '16',
              viewBox: '0 0 16 16',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M9.7 11.6c-0.5 0.5-1 0.8-1.7 1 -0.6-0.2-1.2-0.6-1.7-1H9.7z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M14.6 4.4l0-2.4c-0.6 0-1.1 0.1-1.6 0.3C11.7 0.9 10 0 8 0 6 0 4.3 0.9 3 2.3 2.5 2.2 2 2.1 1.4 2.1v2.4C0.6 5 0 6 0 7.1c0 1.1 0.6 2.1 1.4 2.7C1.8 13.3 4.6 16 8 16c3.4 0 6.2-2.7 6.6-6.1l0-0.1C15.4 9.3 16 8.3 16 7.1 16 6 15.4 5 14.6 4.4zM8 1.3c1.4 0 2.7 0.6 3.7 1.5C11.5 3 11.2 3.1 11 3.2c-0.9-0.5-1.9-0.8-3-0.8 -1.1 0-2.1 0.3-3 0.8C4.8 3.1 4.5 3 4.3 2.8 5.3 1.9 6.6 1.3 8 1.3zM13.3 8.8v0.3c0 3.1-2.4 5.6-5.3 5.6 -2.9 0-5.3-2.5-5.3-5.5V8.9l0-5.3C3.5 3.8 4.3 4.3 5 4.8c0.9-0.6 1.9-1 3-1 1.1 0 2.2 0.4 3 1 0.6-0.6 1.4-1 2.2-1.2L13.3 8.8z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M9.5 13.5C9.1 13.8 8.6 14 8 14c-0.6 0-1.1-0.2-1.5-0.5 0 0 0-0.2 0.1-0.3 0.1-0.2 0.2-0.2 0.2-0.2 0.4 0.1 0.8 0.2 1.2 0.2 0.4 0 0.8-0.1 1.2-0.2 0 0 0.1 0.1 0.2 0.3C9.5 13.4 9.5 13.5 9.5 13.5z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M6.4 9.1c0.7 0.1 1.1 0.8 1.3 1.8 0 0-1.1 0-1.9 0 -0.3 0-0.7-0.1-0.8-0.2C4.1 10.1 4.1 9.3 4.1 9 4.1 9 5.5 9 6.4 9.1z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M9.6 9.1c-0.7 0.1-1.1 0.8-1.3 1.8 0 0 1.1 0 1.9 0 0.3 0 0.7-0.1 0.8-0.2 0.8-0.5 0.8-1.3 0.8-1.6C11.9 9 10.5 9 9.6 9.1z',
              }),
            ],
          }
        )
      );
    };
    /* harmony default export */ const napster = NapsterIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/apple/index.tsx
    function apple_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function apple_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          apple_ownKeys(Object(source), true).forEach(function (key) {
            apple_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          apple_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function apple_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const AppleMusicIsologo = (props) => {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        apple_objectSpread(
          apple_objectSpread(
            {
              width: '20',
              height: '24',
              viewBox: '0 0 20 24',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M19.6 18.7c-0.4 0.8-0.8 1.6-1.3 2.3 -0.7 1-1.2 1.6-1.6 2C16 23.6 15.3 24 14.5 24c-0.5 0-1.2-0.2-2-0.5 -0.8-0.3-1.5-0.5-2.1-0.5 -0.7 0-1.4 0.2-2.2 0.5C7.6 23.8 6.9 24 6.5 24c-0.7 0-1.4-0.3-2.2-1 -0.5-0.4-1-1.1-1.7-2.1 -0.7-1-1.3-2.3-1.8-3.7C0.3 15.8 0 14.4 0 12.9c0-1.6 0.3-3 1-4.2 0.5-0.9 1.3-1.7 2.2-2.2C4.1 6 5.1 5.8 6.1 5.7c0.6 0 1.3 0.2 2.3 0.5 0.9 0.4 1.5 0.5 1.8 0.5 0.2 0 0.9-0.2 2-0.6 1.1-0.4 2-0.5 2.7-0.5 2 0.2 3.5 1 4.5 2.4 -1.8 1.1-2.7 2.6-2.7 4.6 0 1.5 0.6 2.8 1.6 3.8 0.5 0.5 1 0.8 1.6 1.1C19.9 18 19.7 18.3 19.6 18.7L19.6 18.7z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M15 0.5c0 1.2-0.4 2.3-1.3 3.4 -1 1.2-2.3 1.9-3.7 1.8 0-0.1 0-0.3 0-0.5 0-1.2 0.5-2.4 1.4-3.4 0.4-0.5 1-0.9 1.7-1.3C13.7 0.2 14.4 0 15 0 15 0.2 15 0.3 15 0.5L15 0.5z',
              }),
            ],
          }
        )
      );
    };
    /* harmony default export */ const apple = AppleMusicIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/amazon/index.tsx
    function amazon_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function amazon_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          amazon_ownKeys(Object(source), true).forEach(function (key) {
            amazon_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          amazon_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function amazon_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const AmazonMusicIsologo = (props) => {
      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(
        'svg',
        amazon_objectSpread(
          amazon_objectSpread(
            {
              width: '24',
              height: '17',
              viewBox: '0 0 24 15',
            },
            props
          ),
          {},
          {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M22.3 9.8c-0.8 0-1.8 0.2-2.5 0.7 -0.2 0.2-0.2 0.4 0 0.4 0.8-0.1 2.6-0.4 3 0.1 0.3 0.4-0.4 2.2-0.7 3 -0.1 0.3 0.1 0.3 0.3 0.2 1.4-1.2 1.7-3.7 1.5-4C23.8 9.9 23.1 9.8 22.3 9.8z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M0.3 10.4c1.6 0.9 3.4 1.6 5.1 2.2 1.8 0.5 3.5 0.9 5.3 1 1.8 0.1 3.6-0.1 5.4-0.5 1.8-0.4 3.5-0.9 5.2-1.7l0 0c0.2-0.1 0.4 0 0.5 0.2 0.1 0.2 0 0.4-0.1 0.5 -1.6 1.2-3.4 2-5.3 2.5 -1.9 0.5-3.8 0.7-5.8 0.5 -1.9-0.1-3.8-0.6-5.6-1.3 -1.8-0.7-3.5-1.7-5-3C0 10.6 0 10.5 0 10.4 0.1 10.3 0.2 10.3 0.3 10.4L0.3 10.4z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M21.7 3.3c0.5-0.3 1.1-0.2 1.6 0.2V2.6c-0.2-0.1-0.3-0.2-0.5-0.3 -0.5-0.1-1-0.1-1.5 0.1 -1 0.4-1.4 1.5-1.4 2.4 0 0.4 0.1 0.9 0.3 1.3 0.2 0.4 0.5 0.9 1 1.1 0.4 0.3 1 0.3 1.4 0.3 0.3 0 0.5-0.1 0.8-0.2V6.6c-0.6 0.1-1.3 0.1-1.7-0.2 -0.5-0.3-0.7-0.9-0.7-1.6C20.9 4.2 21.2 3.6 21.7 3.3z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M16.1 4.7c-0.3-0.2-0.6-0.2-0.8-0.3 -0.2-0.1-0.9-0.2-0.9-0.8 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 1.3 0 1.9 0.3V2.6c-0.7-0.3-1.5-0.5-2.2-0.2 -0.6 0.2-1.1 0.7-1.2 1.1 -0.1 0.9 0.5 1.4 0.8 1.5 0.3 0.2 0.6 0.2 0.8 0.3 0.5 0.1 0.8 0.3 0.9 0.4C16 5.8 16 5.9 16 6.1s0 0.3-0.2 0.3c-0.3 0.2-0.8 0.2-1.2 0.2 -0.4 0-1-0.2-1.5-0.4v0.8c0.4 0.3 0.9 0.4 1.4 0.5 0.6 0.1 1.1 0.1 1.8-0.2C16.6 7.2 17 6.9 17 6.1 17 5.2 16.4 4.9 16.1 4.7z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M7.2 4c0-0.1 0-0.2 0-0.3C7.1 3.2 6.8 2.8 6.4 2.6 6 2.4 5.5 2.3 5.1 2.5 4.7 2.6 4.3 2.8 3.9 2.9 3.8 2.8 3.6 2.7 3.5 2.6 3.1 2.4 2.6 2.3 2.2 2.5 2 2.6 1.7 2.7 1.4 2.8V2.3H0.4v5.3h1.1V3.6c0.4-0.1 0.7-0.2 1.1-0.3 0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5 0-0.2c0-0.1 0-0.2 0-0.3C4.7 3.6 5 3.5 5.4 3.4c0.4-0.1 0.7 0.2 0.7 0.5l0 3.6h1.1l0-1.9 0-0.9 0-0.5L7.2 4z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('path', {
                fill: props.fill,
                d: 'M11.2 6.3c-0.2 0.1-0.3 0.1-0.5 0.2 -0.3 0.1-0.4 0.1-0.6 0.1C9.7 6.5 9.4 6.1 9.4 5.9c0-0.5 0-1.2 0-1.8l0-1.8 -1.1 0 0 1.8c0 0.6 0 1.2 0 1.8 0 0.5 0.3 0.9 0.6 1.1C9.2 7.3 9.6 7.5 10 7.5c0.4 0 0.8-0.1 1.1-0.3 0 0 0.1 0 0.1-0.1v0.2h1.1V2.3h-1.1V6.3z',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('rect', {
                fill: props.fill,
                x: '17.7',
                y: '2.3',
                width: '1.1',
                height: '5.3',
              }),
              /*#__PURE__*/ jsx_runtime.jsx('ellipse', {
                fill: props.fill,
                cx: '18.2',
                cy: '0.8',
                rx: '0.7',
                ry: '0.8',
              }),
            ],
          }
        )
      );
    };
    /* harmony default export */ const amazon = AmazonMusicIsologo; // CONCATENATED MODULE: ./src/components/icons/streaming-isologos/soundcloud/index.tsx
    function soundcloud_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function soundcloud_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          soundcloud_ownKeys(Object(source), true).forEach(function (key) {
            soundcloud_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          soundcloud_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }

    function soundcloud_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const SoundcloudIsologo = (props) =>
      /*#__PURE__*/ jsx_runtime.jsx(
        'svg',
        soundcloud_objectSpread(
          soundcloud_objectSpread(
            {
              viewBox: '0 0 32 14',
              width: '32',
              height: '14',
            },
            props
          ),
          {},
          {
            children: /*#__PURE__*/ jsx_runtime.jsx('path', {
              fill: props.fill,
              d: 'M0.4 8.4c-0.1 0-0.1 0.1-0.1 0.1L0 10.3 0.2 12c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1v0 0l0.3-1.8L0.5 8.5C0.5 8.4 0.4 8.4 0.4 8.4L0.4 8.4zM1.7 7.4c0-0.1-0.1-0.1-0.1-0.1 -0.1 0-0.1 0.1-0.1 0.1 0 0-0.3 2.9-0.3 2.9l0.3 2.8c0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0.1-0.1L2 10.3 1.7 7.4 1.7 7.4zM6.6 4.7C6.5 4.7 6.4 4.8 6.4 5l-0.3 5.3 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2v0l0.3-3.4L6.9 5C6.9 4.8 6.8 4.7 6.6 4.7zM4.1 6.6C4 6.6 3.9 6.7 3.9 6.8l-0.3 3.5 0.3 3.4c0 0.1 0.1 0.2 0.2 0.2 0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L4.3 6.8C4.3 6.7 4.2 6.6 4.1 6.6zM9.2 14c0.2 0 0.3-0.1 0.3-0.3l0.2-3.4L9.5 3.2c0-0.2-0.1-0.3-0.3-0.3C9.1 2.9 9 3 8.9 3.2l-0.2 7.1 0.2 3.4C9 13.8 9.1 14 9.2 14zM14.6 14c0.2 0 0.4-0.2 0.4-0.4v0 0l0.2-3.3L15 2.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.4 0.2-0.4 0.4L14 10.3c0 0 0.2 3.3 0.2 3.3C14.2 13.8 14.4 14 14.6 14zM11.9 14c0.2 0 0.3-0.2 0.4-0.4v0l0.2-3.3 -0.2-7.1c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.3 0.2-0.4 0.4l-0.2 7.1 0.2 3.3C11.5 13.8 11.7 14 11.9 14L11.9 14zM5.4 13.9c0.1 0 0.2-0.1 0.2-0.2l0.3-3.4L5.6 7c0-0.1-0.1-0.2-0.2-0.2C5.2 6.8 5.1 6.9 5.1 7l-0.3 3.3 0.3 3.4C5.1 13.9 5.2 13.9 5.4 13.9zM2.8 13.8c0.1 0 0.2-0.1 0.2-0.2l0.3-3.3L3 6.9c0-0.1-0.1-0.2-0.2-0.2 -0.1 0-0.2 0.1-0.2 0.2l-0.3 3.4 0.3 3.3C2.7 13.7 2.7 13.8 2.8 13.8L2.8 13.8zM13.2 3c-0.2 0-0.4 0.2-0.4 0.4l-0.2 6.9 0.2 3.3c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.3 -0.2-6.9C13.6 3.2 13.4 3 13.2 3L13.2 3zM7.9 14c0.1 0 0.3-0.1 0.3-0.3l0.3-3.4L8.2 3.7c0-0.2-0.1-0.3-0.3-0.3 -0.1 0-0.3 0.1-0.3 0.3l-0.2 6.5 0.2 3.4C7.7 13.9 7.8 14 7.9 14zM10.9 13.7L10.9 13.7l0.2-3.4L10.9 3c0-0.2-0.1-0.3-0.3-0.3 -0.2 0-0.3 0.1-0.3 0.3L10 10.3l0.2 3.4c0 0.2 0.1 0.3 0.3 0.3C10.7 14 10.9 13.8 10.9 13.7L10.9 13.7 10.9 13.7zM28.1 6.1c-0.5 0-1.1 0.1-1.5 0.3C26.2 2.8 23.3 0 19.6 0c-0.9 0-1.8 0.2-2.5 0.5 -0.3 0.1-0.4 0.2-0.4 0.5v12.6c0 0.2 0.2 0.4 0.4 0.5 0 0 10.8 0 10.9 0 2.2 0 3.9-1.8 3.9-4C32 7.8 30.2 6.1 28.1 6.1L28.1 6.1zM15.9 0.9c-0.2 0-0.4 0.2-0.4 0.4l-0.2 8.9 0.2 3.2c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4v0l0.2-3.2 -0.2-8.9C16.4 1.1 16.2 0.9 15.9 0.9L15.9 0.9z',
            }),
          }
        )
      );
    /* harmony default export */ const soundcloud = SoundcloudIsologo; // CONCATENATED MODULE: ./src/utils/get-social-icon.tsx
    function getSocialIcon(iconName) {
      switch (iconName) {
        case 'facebook':
          return /*#__PURE__*/ jsx_runtime.jsx(FacebookIcon, {});

        case 'twitter':
          return /*#__PURE__*/ jsx_runtime.jsx(TwitterIcon, {});

        case 'instagram':
          return /*#__PURE__*/ jsx_runtime.jsx(InstagramIcon, {});

        case 'linkedin':
          return /*#__PURE__*/ jsx_runtime.jsx(LinkedinIcon, {});

        case 'youtube':
          return /*#__PURE__*/ jsx_runtime.jsx(YoutubeIcon, {});

        case 'tiktok':
          return /*#__PURE__*/ jsx_runtime.jsx(TiktokIcon, {});

        case 'snapchat':
          return /*#__PURE__*/ jsx_runtime.jsx(SnapchatIcon, {});

        case 'amazonMusic':
        case 'amazon':
          return /*#__PURE__*/ jsx_runtime.jsx(amazon, {});

        case 'appleMusic':
        case 'apple':
          return /*#__PURE__*/ jsx_runtime.jsx(apple, {});

        case 'napster':
          return /*#__PURE__*/ jsx_runtime.jsx(napster, {});

        case 'spotify':
          return /*#__PURE__*/ jsx_runtime.jsx(spotify, {});

        case 'tidal':
          return /*#__PURE__*/ jsx_runtime.jsx(tidal, {});

        case 'soundcloud':
          return /*#__PURE__*/ jsx_runtime.jsx(soundcloud, {});

        case 'deezer':
          return /*#__PURE__*/ jsx_runtime.jsx(deezer, {});

        case 'pandora':
          return /*#__PURE__*/ jsx_runtime.jsx(pandora, {});

        default:
          return /*#__PURE__*/ jsx_runtime.jsx(SongIcon, {});
      }
    }

    /***/
  },
};
