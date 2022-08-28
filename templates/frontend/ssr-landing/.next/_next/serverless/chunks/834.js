'use strict';
exports.id = 834;
exports.ids = [834];
exports.modules = {
  /***/ 5834: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ VideoPlayer,
    });

    // EXTERNAL MODULE: ./node_modules/react/index.js
    var react = __webpack_require__(7294);
    // EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
    var styled_components_cjs = __webpack_require__(27);
    // EXTERNAL MODULE: ./src/components/icons/play/index.tsx
    var play = __webpack_require__(6711);
    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(5893); // CONCATENATED MODULE: ./src/components/image-alternatives/index.tsx
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

    const ImageAlternatives = (props) => {
      const { 0: alts, 1: setAlts } = (0, react.useState)(props.src);
      const { 0: src, 1: setSource } = (0, react.useState)(props.src.length ? props.src[0] : '');

      if (!props.src.length || !src || !alts.length) {
        return null;
      }

      const handleError = () => {
        const newAlts = alts.slice(1);
        setAlts(newAlts);

        if (newAlts.length) {
          setSource(newAlts[0]);
        }
      };

      const handleLoad = (ev) => {
        if (ev.currentTarget.naturalWidth === 120) {
          handleError();
        }
      };

      const newProps = _objectSpread(
        _objectSpread({}, props),
        {},
        {
          src,
          onError: handleError,
          onLoad: handleLoad,
        }
      );

      return /*#__PURE__*/ jsx_runtime.jsx(
        'img',
        _objectSpread(
          _objectSpread({}, newProps),
          {},
          {
            alt: props.alt,
          }
        )
      );
    }; // CONCATENATED MODULE: ./src/components/video-player/index.tsx
    function VideoPlayer({ className, data, variant = 'large', artistName }) {
      var _data$url2;

      const { 0: playVideo, 1: setPlayVideo } = (0, react.useState)(false);

      const getCode = () => {
        var _data$url;

        if (data.id) {
          return data.id;
        }

        return (_data$url = data.url) === null || _data$url === void 0 ? void 0 : _data$url.split('embed/')[1];
      };

      const getPoster = () => {
        const code = getCode();
        return [
          `https://img.youtube.com/vi/${code}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${code}/hqdefault.jpg`,
          `https://img.youtube.com/vi/${code}/mqdefault.jpg`,
          `https://img.youtube.com/vi/${code}/default.jpg`,
        ];
      };

      const isPlaylist =
        (_data$url2 = data.url) === null || _data$url2 === void 0 ? void 0 : _data$url2.includes('list=');

      const getEmbedUrl = () => {
        const code = getCode();

        if (code) {
          if (isPlaylist) {
            return `https://www.youtube.com/embed/videoseries?list=${code}`;
          }

          return `https://www.youtube.com/embed/${code}?autoplay=1&controls=0&disablekb=1&rel=0`;
        }

        return '';
      };

      const sendAnalytics = () => {
        analytics.track('Tracpage Link Click', {
          artist_id: artistName,
          category: data.type === 'traclink' ? 'Release' : 'Url',
          name: data.title,
        });
      };

      const handleWrapperClick = () => {
        sendAnalytics();
        setPlayVideo(!playVideo);
      };

      return /*#__PURE__*/ (0, jsx_runtime.jsxs)(VideoContainer, {
        className: className,
        children: [
          /*#__PURE__*/ jsx_runtime.jsx(VideoWrapper, {
            children: playVideo
              ? /*#__PURE__*/ jsx_runtime.jsx('iframe', {
                  className: 'iframe',
                  title: data.title ? data.title : 'Music Video',
                  src: getEmbedUrl(),
                  width: '100%',
                  height: '100%',
                  frameBorder: '0',
                  allow: 'autoplay',
                  allowFullScreen: true,
                })
              : /*#__PURE__*/ (0, jsx_runtime.jsxs)(ImageWrapper, {
                  onClick: handleWrapperClick,
                  children: [
                    /*#__PURE__*/ jsx_runtime.jsx(PlayButton, {
                      children: /*#__PURE__*/ jsx_runtime.jsx(play /* default */.Z, {}),
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(CoverImage, {
                      variant: variant,
                      src: getPoster(),
                      alt: data.title || 'Music Video',
                    }),
                  ],
                }),
          }),
          /*#__PURE__*/ (0, jsx_runtime.jsxs)(Info, {
            children: [
              /*#__PURE__*/ jsx_runtime.jsx(Title, {
                children: data.title,
              }),
              /*#__PURE__*/ jsx_runtime.jsx(Text, {
                children: artistName,
              }),
            ],
          }),
        ],
      });
    }
    const VideoContainer = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'video-player__VideoContainer',
        componentId: 'sc-19p591d-0',
      })(['display:grid;grid-template-columns:1fr;gap:24px;']);
    const VideoWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'video-player__VideoWrapper',
        componentId: 'sc-19p591d-1',
      })([
      'width:100%;position:relative;border-radius:5px;overflow:hidden;height:0;padding-top:56.25%;> iframe{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;}',
    ]);
    const ImageWrapper = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'video-player__ImageWrapper',
        componentId: 'sc-19p591d-2',
      })([
      'cursor:pointer;display:flex;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;',
    ]);
    const PlayButton = styled_components_cjs /* default.button.withConfig */.ZP.button
      .withConfig({
        displayName: 'video-player__PlayButton',
        componentId: 'sc-19p591d-3',
      })(
      [
        'background-color:',
        ';display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:50%;cursor:pointer;opacity:1;padding:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity ',
        ';&:hover{opacity:0.85;> svg{fill:',
        ';}}> svg{margin-left:4px;fill:',
        ';transition:fill ',
        ';}',
      ],
      ({ theme }) => theme.colors.background,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`,
      ({ theme }) => theme.colors.accentHover,
      ({ theme }) => theme.colors.accent,
      ({ theme }) => `${theme.transitions.duration} ${theme.transitions.type}`
    );
    const CoverImage = (0, styled_components_cjs /* default */.ZP)(ImageAlternatives).withConfig({
      displayName: 'video-player__CoverImage',
      componentId: 'sc-19p591d-4',
    })(
      ['border-radius:5px;', ' ', ''],
      ({ variant }) => variant === 'large' && (0, styled_components_cjs /* css */.iv)(['object-fit:cover;width:100%;']),
      ({ variant }) =>
        variant === 'small' && (0, styled_components_cjs /* css */.iv)(['object-fit:cover;height:100%;width:100%;'])
    );
    const Info = styled_components_cjs /* default.div.withConfig */.ZP.div
      .withConfig({
        displayName: 'video-player__Info',
        componentId: 'sc-19p591d-5',
      })(['display:flex;flex-direction:column;gap:12px;']);
    const Title = styled_components_cjs /* default.h4.withConfig */.ZP.h4
      .withConfig({
        displayName: 'video-player__Title',
        componentId: 'sc-19p591d-6',
      })(
      [
        'color:',
        ';font-weight:800;font-size:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin:0;@media (max-width:',
        '){font-size:24px;overflow:visible;display:block;}',
      ],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );
    const Text = styled_components_cjs /* default.h6.withConfig */.ZP.h6
      .withConfig({
        displayName: 'video-player__Text',
        componentId: 'sc-19p591d-7',
      })(
      ['color:', ';font-size:24px;font-weight:400;margin:0;opacity:0.7;@media (max-width:', '){font-size:16px;}'],
      ({ theme }) => theme.colors.primary,
      ({ theme }) => `${theme.breakpoints.laptopS}px`
    );

    /***/
  },
};
