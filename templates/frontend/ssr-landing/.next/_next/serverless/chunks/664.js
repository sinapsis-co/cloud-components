exports.id = 664;
exports.ids = [664];
exports.modules = {
  /***/ 7942: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';
    var __webpack_unused_export__;

    __webpack_unused_export__ = {
      value: true,
    };
    exports['default'] = void 0;

    var _react = _interopRequireDefault(__webpack_require__(7294));

    var _router = __webpack_require__(4957);

    var _router1 = __webpack_require__(9898);

    var _useIntersection = __webpack_require__(639);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          };
    }

    const prefetched = {};

    function prefetch(router, href, as, options) {
      if (true) return;
      if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
      // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      router.prefetch(href, as, options).catch((err) => {
        if (false) {
        }
      });
      const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

      prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
    }

    function isModifiedEvent(event) {
      const { target } = event.currentTarget;
      return (
        (target && target !== '_self') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        (event.nativeEvent && event.nativeEvent.which === 2)
      );
    }

    function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
      const { nodeName } = e.currentTarget;

      if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
      }

      e.preventDefault(); //  avoid scroll for urls with anchor refs

      if (scroll == null && as.indexOf('#') >= 0) {
        scroll = false;
      } // replace state instead of push if prop is present

      router[replace ? 'replace' : 'push'](href, as, {
        shallow,
        locale,
        scroll,
      });
    }

    function Link(props) {
      if (false) {
      }

      const p = props.prefetch !== false;
      const router = (0, _router1).useRouter();

      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
        return {
          href: resolvedHref,
          as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref,
        };
      }, [router, props.href, props.as]);

      let { children, replace, shallow, scroll, locale } = props;

      if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement('a', null, children);
      } // This will return the first child, if multiple are provided it will throw an error

      let child;

      if (false) {
      } else {
        child = _react.default.Children.only(children);
      }

      const childRef = child && typeof child === 'object' && child.ref;
      const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
        rootMargin: '200px',
      });

      const setRef = _react.default.useCallback(
        (el) => {
          setIntersectionRef(el);

          if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
              childRef.current = el;
            }
          }
        },
        [childRef, setIntersectionRef]
      );

      _react.default.useEffect(() => {
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

        if (shouldPrefetch && !isPrefetched) {
          prefetch(router, href, as, {
            locale: curLocale,
          });
        }
      }, [as, href, isVisible, locale, p, router]);

      const childProps = {
        ref: setRef,
        onClick: (e) => {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, shallow, scroll, locale);
          }
        },
      };

      childProps.onMouseEnter = (e) => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        if ((0, _router).isLocalURL(href)) {
          prefetch(router, href, as, {
            priority: true,
          });
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (props.passHref || (child.type === 'a' && !('href' in child.props))) {
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs

        const localeDomain =
          router &&
          router.isLocaleDomain &&
          (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
        childProps.href =
          localeDomain ||
          (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
      }

      return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    }

    var _default = Link;
    exports['default'] = _default;

    /***/
  },

  /***/ 639: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.useIntersection = useIntersection;

    var _react = __webpack_require__(7294);

    var _requestIdleCallback = __webpack_require__(6286);

    const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

    function useIntersection({ rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const unobserve = (0, _react).useRef();
      const [visible, setVisible] = (0, _react).useState(false);
      const setRef = (0, _react).useCallback(
        (el) => {
          if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
          }

          if (isDisabled || visible) return;

          if (el && el.tagName) {
            unobserve.current = observe(el, (isVisible) => isVisible && setVisible(isVisible), {
              rootMargin,
            });
          }
        },
        [isDisabled, rootMargin, visible]
      );
      (0, _react).useEffect(() => {
        if (!hasIntersectionObserver) {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
            return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
          }
        }
      }, [visible]);
      return [setRef, visible];
    }

    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element); // Destroy observer when there's nothing left to watch:

        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
        }
      };
    }

    const observers = new Map();

    function createObserver(options) {
      const id = options.rootMargin || '';
      let instance = observers.get(id);

      if (instance) {
        return instance;
      }

      const elements = new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      observers.set(
        id,
        (instance = {
          id,
          observer,
          elements,
        })
      );
      return instance;
    }

    /***/
  },

  /***/ 1664: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    module.exports = __webpack_require__(7942);

    /***/
  },
};
