exports.id = 225;
exports.ids = [225];
exports.modules = {
  /***/ 1506: /***/ (module) => {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    module.exports = _assertThisInitialized;

    /***/
  },

  /***/ 9100: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    var setPrototypeOf = __webpack_require__(9489);

    var isNativeReflectConstruct = __webpack_require__(7067);

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        module.exports = _construct = Reflect.construct;
      } else {
        module.exports = _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    module.exports = _construct;

    /***/
  },

  /***/ 7154: /***/ (module) => {
    function _extends() {
      module.exports = _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

      return _extends.apply(this, arguments);
    }

    module.exports = _extends;

    /***/
  },

  /***/ 9754: /***/ (module) => {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;

    /***/
  },

  /***/ 5354: /***/ (module) => {
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    module.exports = _inheritsLoose;

    /***/
  },

  /***/ 430: /***/ (module) => {
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf('[native code]') !== -1;
    }

    module.exports = _isNativeFunction;

    /***/
  },

  /***/ 7067: /***/ (module) => {
    function _isNativeReflectConstruct() {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === 'function') return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    module.exports = _isNativeReflectConstruct;

    /***/
  },

  /***/ 9489: /***/ (module) => {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;

    /***/
  },

  /***/ 5179: /***/ (module) => {
    function _taggedTemplateLiteralLoose(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }

      strings.raw = raw;
      return strings;
    }

    module.exports = _taggedTemplateLiteralLoose;

    /***/
  },

  /***/ 5957: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    var getPrototypeOf = __webpack_require__(9754);

    var setPrototypeOf = __webpack_require__(9489);

    var isNativeFunction = __webpack_require__(430);

    var construct = __webpack_require__(9100);

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === 'function' ? new Map() : undefined;

      module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !isNativeFunction(Class)) return Class;

        if (typeof Class !== 'function') {
          throw new TypeError('Super expression must either be null or a function');
        }

        if (typeof _cache !== 'undefined') {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return construct(Class, arguments, getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        return setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    module.exports = _wrapNativeSuper;

    /***/
  },

  /***/ 9141: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';
    var __webpack_unused_export__;

    __webpack_unused_export__ = { value: true };

    var tslib = __webpack_require__(655);
    var sync = __webpack_require__(1317);
    var popmotion = __webpack_require__(9314);
    var heyListen = __webpack_require__(1320);
    var styleValueTypes = __webpack_require__(1618);
    var React = __webpack_require__(7294);

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { default: e };
    }

    var sync__default = /*#__PURE__*/ _interopDefaultLegacy(sync);
    var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

    var isRefObject = function (ref) {
      return typeof ref === 'object' && ref.hasOwnProperty('current');
    };

    /**
     * A generic subscription manager.
     */
    var SubscriptionManager = /** @class */ (function () {
      function SubscriptionManager() {
        this.subscriptions = new Set();
      }
      SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        this.subscriptions.add(handler);
        return function () {
          return void _this.subscriptions.delete(handler);
        };
      };
      SubscriptionManager.prototype.notify = function (
        /**
         * Using ...args would be preferable but it's array creation and this
         * might be fired every frame.
         */
        a,
        b,
        c
      ) {
        var e_1, _a;
        if (!this.subscriptions.size) return;
        try {
          for (var _b = tslib.__values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            handler(a, b, c);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      SubscriptionManager.prototype.clear = function () {
        this.subscriptions.clear();
      };
      return SubscriptionManager;
    })();

    var isFloat = function (value) {
      return !isNaN(parseFloat(value));
    };
    /**
     * `MotionValue` is used to track the state and velocity of motion values.
     *
     * @public
     */
    var MotionValue = /** @class */ (function () {
      /**
       * @param init - The initiating value
       * @param config - Optional configuration options
       *
       * -  `transformer`: A function to transform incoming values with.
       *
       * @internal
       */
      function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
          if (render === void 0) {
            render = true;
          }
          _this.prev = _this.current;
          _this.current = v;
          if (_this.prev !== _this.current) {
            _this.updateSubscribers.notify(_this.current);
          }
          if (render) {
            _this.renderSubscribers.notify(_this.current);
          }
          // Update timestamp
          var _a = sync.getFrameData(),
            delta = _a.delta,
            timestamp = _a.timestamp;
          if (_this.lastUpdated !== timestamp) {
            _this.timeDelta = delta;
            _this.lastUpdated = timestamp;
            sync__default['default'].postRender(_this.scheduleVelocityCheck);
          }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () {
          return sync__default['default'].postRender(_this.velocityCheck);
        };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
          var timestamp = _a.timestamp;
          if (timestamp !== _this.lastUpdated) {
            _this.prev = _this.current;
          }
        };
        this.current = init;
        this.canTrackVelocity = isFloat(this.current);
      }
      /**
       * Adds a function that will be notified when the `MotionValue` is updated.
       *
       * It returns a function that, when called, will cancel the subscription.
       *
       * When calling `onChange` inside a React component, it should be wrapped with the
       * `useEffect` hook. As it returns an unsubscribe function, this should be returned
       * from the `useEffect` function to ensure you don't add duplicate subscribers..
       *
       * @library
       *
       * ```jsx
       * function MyComponent() {
       *   const x = useMotionValue(0)
       *   const y = useMotionValue(0)
       *   const opacity = useMotionValue(1)
       *
       *   useEffect(() => {
       *     function updateOpacity() {
       *       const maxXY = Math.max(x.get(), y.get())
       *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
       *       opacity.set(newOpacity)
       *     }
       *
       *     const unsubscribeX = x.onChange(updateOpacity)
       *     const unsubscribeY = y.onChange(updateOpacity)
       *
       *     return () => {
       *       unsubscribeX()
       *       unsubscribeY()
       *     }
       *   }, [])
       *
       *   return <Frame x={x} />
       * }
       * ```
       *
       * @motion
       *
       * ```jsx
       * export const MyComponent = () => {
       *   const x = useMotionValue(0)
       *   const y = useMotionValue(0)
       *   const opacity = useMotionValue(1)
       *
       *   useEffect(() => {
       *     function updateOpacity() {
       *       const maxXY = Math.max(x.get(), y.get())
       *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
       *       opacity.set(newOpacity)
       *     }
       *
       *     const unsubscribeX = x.onChange(updateOpacity)
       *     const unsubscribeY = y.onChange(updateOpacity)
       *
       *     return () => {
       *       unsubscribeX()
       *       unsubscribeY()
       *     }
       *   }, [])
       *
       *   return <motion.div style={{ x }} />
       * }
       * ```
       *
       * @internalremarks
       *
       * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
       *
       * ```jsx
       * useOnChange(x, () => {})
       * ```
       *
       * @param subscriber - A function that receives the latest value.
       * @returns A function that, when called, will cancel this subscription.
       *
       * @public
       */
      MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
      };
      MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      };
      /**
       * Adds a function that will be notified when the `MotionValue` requests a render.
       *
       * @param subscriber - A function that's provided the latest value.
       * @returns A function that, when called, will cancel this subscription.
       *
       * @internal
       */
      MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
      };
      /**
       * Attaches a passive effect to the `MotionValue`.
       *
       * @internal
       */
      MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
      };
      /**
       * Sets the state of the `MotionValue`.
       *
       * @remarks
       *
       * ```jsx
       * const x = useMotionValue(0)
       * x.set(10)
       * ```
       *
       * @param latest - Latest value to set.
       * @param render - Whether to notify render subscribers. Defaults to `true`
       *
       * @public
       */
      MotionValue.prototype.set = function (v, render) {
        if (render === void 0) {
          render = true;
        }
        if (!render || !this.passiveEffect) {
          this.updateAndNotify(v, render);
        } else {
          this.passiveEffect(v, this.updateAndNotify);
        }
      };
      /**
       * Returns the latest state of `MotionValue`
       *
       * @returns - The latest state of `MotionValue`
       *
       * @public
       */
      MotionValue.prototype.get = function () {
        return this.current;
      };
      /**
       * @public
       */
      MotionValue.prototype.getPrevious = function () {
        return this.prev;
      };
      /**
       * Returns the latest velocity of `MotionValue`
       *
       * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
       *
       * @public
       */
      MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
          ? // These casts could be avoided if parseFloat would be typed better
            popmotion.velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      };
      /**
       * Registers a new animation to control this `MotionValue`. Only one
       * animation can drive a `MotionValue` at one time.
       *
       * ```jsx
       * value.start()
       * ```
       *
       * @param animation - A function that starts the provided animation
       *
       * @internal
       */
      MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
          _this.stopAnimation = animation(resolve);
        }).then(function () {
          return _this.clearAnimation();
        });
      };
      /**
       * Stop the currently active animation.
       *
       * @public
       */
      MotionValue.prototype.stop = function () {
        if (this.stopAnimation) this.stopAnimation();
        this.clearAnimation();
      };
      /**
       * Returns `true` if this value is currently animating.
       *
       * @public
       */
      MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      };
      MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      };
      /**
       * Destroy and clean up subscribers to this `MotionValue`.
       *
       * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
       * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
       * created a `MotionValue` via the `motionValue` function.
       *
       * @public
       */
      MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
      };
      return MotionValue;
    })();
    /**
     * @internal
     */
    function motionValue(init) {
      return new MotionValue(init);
    }

    /**
     * VisualElement is an abstract class that provides a generic animation-optimised interface to the
     * underlying renderer.
     *
     * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
     * but the idea is we can create, for instance, a ThreeVisualElement that extends
     * VisualElement and we can quickly offer all the same features.
     */
    var VisualElement = /** @class */ (function () {
      function VisualElement(parent, ref) {
        var _this = this;
        // An iterable list of current children
        this.children = new Set();
        this.isHoverEventsEnabled = true;
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        // The latest resolved MotionValues
        this.latest = {};
        // A map of MotionValues used to animate this element
        this.values = new Map();
        // Unsubscription callbacks for MotionValue subscriptions
        this.valueSubscriptions = new Map();
        // A configuration for this VisualElement, each derived class can extend this.
        this.config = {};
        this.isMounted = false;
        // A pre-bound call to the user-provided `onUpdate` callback. This won't
        // be called more than once per frame.
        this.update = function () {
          return _this.config.onUpdate(_this.latest);
        };
        // Pre-bound version of render
        this.triggerRender = function () {
          return _this.render();
        };
        // This function gets passed to the rendered component's `ref` prop
        // and is used to mount/unmount the VisualElement
        this.ref = function (element) {
          element ? _this.mount(element) : _this.unmount();
          if (!_this.externalRef) return;
          if (typeof _this.externalRef === 'function') {
            _this.externalRef(element);
          } else if (isRefObject(_this.externalRef)) {
            _this.externalRef.current = element;
          }
        };
        // Create a relationship with the provided parent.
        this.parent = parent;
        this.rootParent = parent ? parent.rootParent : this;
        this.treePath = parent ? tslib.__spread(parent.treePath, [parent]) : [];
        // Calculate the depth of this node in the VisualElement graph
        this.depth = parent ? parent.depth + 1 : 0;
        // A reference to any externally-defined React ref. This might live better
        // outside the VisualElement and be handled in a hook.
        this.externalRef = ref;
      }
      /**
       * Temporarily suspend hover events while we remove transforms in order to measure the layout.
       *
       * This seems like an odd bit of scheduling but what we're doing is saying after
       * the next render, wait 10 milliseconds before reenabling hover events. Waiting until
       * the next frame results in missed, valid hover events. But triggering on the postRender
       * frame is too soon to avoid triggering events with layout measurements.
       *
       * Note: If we figure out a way of measuring layout while transforms remain applied, this can be removed.
       */
      VisualElement.prototype.suspendHoverEvents = function () {
        var _this = this;
        this.isHoverEventsEnabled = false;
        sync__default['default'].postRender(function () {
          return setTimeout(function () {
            return (_this.isHoverEventsEnabled = true);
          }, 10);
        });
      };
      VisualElement.prototype.getVariantPayload = function () {
        return this.config.custom;
      };
      VisualElement.prototype.getVariant = function (label) {
        var _a;
        return (_a = this.config.variants) === null || _a === void 0 ? void 0 : _a[label];
      };
      VisualElement.prototype.addVariantChild = function (visualElement) {
        var _this = this;
        if (!this.variantChildren) this.variantChildren = new Set();
        this.variantChildren.add(visualElement);
        return function () {
          return _this.variantChildren.delete(visualElement);
        };
      };
      VisualElement.prototype.addVariantChildOrder = function (visualElement) {
        if (!this.variantChildrenOrder) this.variantChildrenOrder = new Set();
        this.variantChildrenOrder.add(visualElement);
      };
      VisualElement.prototype.onAnimationStart = function () {
        var _a, _b;
        (_b = (_a = this.config).onAnimationStart) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      VisualElement.prototype.onAnimationComplete = function () {
        var _a, _b;
        this.isMounted &&
          ((_b = (_a = this.config).onAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a));
      };
      VisualElement.prototype.getDefaultTransition = function () {
        return this.config.transition;
      };
      VisualElement.prototype.subscribe = function (child) {
        var _this = this;
        this.children.add(child);
        return function () {
          return _this.children.delete(child);
        };
      };
      // Check whether this element has a MotionValue of the provided key
      VisualElement.prototype.hasValue = function (key) {
        return this.values.has(key);
      };
      // Add a MotionValue
      VisualElement.prototype.addValue = function (key, value) {
        if (this.hasValue(key)) this.removeValue(key);
        this.values.set(key, value);
        this.setSingleStaticValue(key, value.get());
        this.subscribeToValue(key, value);
      };
      // Remove a MotionValue
      VisualElement.prototype.removeValue = function (key) {
        var _a;
        (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
        this.valueSubscriptions.delete(key);
        this.values.delete(key);
        delete this.latest[key];
      };
      VisualElement.prototype.getValue = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
          value = new MotionValue(defaultValue);
          this.addValue(key, value);
        }
        return value;
      };
      // Iterate over all MotionValues
      VisualElement.prototype.forEachValue = function (callback) {
        this.values.forEach(callback);
      };
      // Get the underlying rendered instance of this VisualElement. For instance in
      // HTMLVisualElement this will be a HTMLElement.
      VisualElement.prototype.getInstance = function () {
        return this.element;
      };
      VisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) {
          config = {};
        }
        this.config = tslib.__assign({}, config);
      };
      VisualElement.prototype.getBaseValue = function (key, _props) {
        return this.baseTarget[key];
      };
      // Set a single `latest` value
      VisualElement.prototype.setSingleStaticValue = function (key, value) {
        this.latest[key] = value;
      };
      // Statically set values to `latest` without needing a MotionValue
      VisualElement.prototype.setStaticValues = function (values, value) {
        if (typeof values === 'string') {
          this.setSingleStaticValue(values, value);
        } else {
          for (var key in values) {
            this.setSingleStaticValue(key, values[key]);
          }
        }
      };
      VisualElement.prototype.scheduleRender = function () {
        sync__default['default'].render(this.triggerRender, false, true);
      };
      VisualElement.prototype.scheduleUpdateLayoutDelta = function () {
        sync__default['default'].preRender(this.rootParent.updateLayoutDelta, false, true);
      };
      VisualElement.prototype.subscribeToValue = function (key, value) {
        var _this = this;
        var onChange = function (latest) {
          _this.setSingleStaticValue(key, latest);
          // Schedule onUpdate if we have an onUpdate listener and the component has mounted
          _this.element && _this.config.onUpdate && sync__default['default'].update(_this.update, false, true);
        };
        var onRender = function () {
          _this.element && _this.scheduleRender();
        };
        var unsubscribeOnChange = value.onChange(onChange);
        var unsubscribeOnRender = value.onRenderRequest(onRender);
        this.valueSubscriptions.set(key, function () {
          unsubscribeOnChange();
          unsubscribeOnRender();
        });
      };
      // Mount the VisualElement with the actual DOM element
      VisualElement.prototype.mount = function (element) {
        heyListen.invariant(
          !!element,
          'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
        );
        if (this.parent) {
          this.removeFromParent = this.parent.subscribe(this);
        }
        /**
         * Save the element to this.element as a semantic API, this.current to the VisualElement
         * is compatible with existing RefObject APIs.
         */
        this.element = this.current = element;
      };
      // Unmount the VisualElement and cancel any scheduled updates
      VisualElement.prototype.unmount = function () {
        var _this = this;
        this.forEachValue(function (_, key) {
          return _this.removeValue(key);
        });
        sync.cancelSync.update(this.update);
        sync.cancelSync.render(this.render);
        this.removeFromParent && this.removeFromParent();
      };
      return VisualElement;
    })();

    function noop(any) {
      return any;
    }

    /**
     * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
     * it's easier to consider each axis individually. This function returns a bounding box
     * as a map of single-axis min/max values.
     */
    function convertBoundingBoxToAxisBox(_a) {
      var top = _a.top,
        left = _a.left,
        right = _a.right,
        bottom = _a.bottom;
      return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
      };
    }
    function convertAxisBoxToBoundingBox(_a) {
      var x = _a.x,
        y = _a.y;
      return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
      };
    }
    /**
     * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
     * provided by Framer to allow measured points to be corrected for device scaling. This is used
     * when measuring DOM elements and DOM event points.
     */
    function transformBoundingBox(_a, transformPoint) {
      var top = _a.top,
        left = _a.left,
        bottom = _a.bottom,
        right = _a.right;
      if (transformPoint === void 0) {
        transformPoint = noop;
      }
      var topLeft = transformPoint({ x: left, y: top });
      var bottomRight = transformPoint({ x: right, y: bottom });
      return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
      };
    }
    /**
     * Create an empty axis box of zero size
     */
    function axisBox() {
      return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
    }
    function copyAxisBox(box) {
      return {
        x: tslib.__assign({}, box.x),
        y: tslib.__assign({}, box.y),
      };
    }
    /**
     * Create an empty box delta
     */
    var zeroDelta = {
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0,
    };
    function delta() {
      return {
        x: tslib.__assign({}, zeroDelta),
        y: tslib.__assign({}, zeroDelta),
      };
    }

    /**
     * ValueType for "auto"
     */
    var auto = {
      test: function (v) {
        return v === 'auto';
      },
      parse: function (v) {
        return v;
      },
    };
    /**
     * ValueType for ints
     */
    var int = tslib.__assign(tslib.__assign({}, styleValueTypes.number), { transform: Math.round });
    /**
     * A map of default value types for common values
     */
    var defaultValueTypes = {
      // Color props
      color: styleValueTypes.color,
      backgroundColor: styleValueTypes.color,
      outlineColor: styleValueTypes.color,
      fill: styleValueTypes.color,
      stroke: styleValueTypes.color,
      // Border props
      borderColor: styleValueTypes.color,
      borderTopColor: styleValueTypes.color,
      borderRightColor: styleValueTypes.color,
      borderBottomColor: styleValueTypes.color,
      borderLeftColor: styleValueTypes.color,
      borderWidth: styleValueTypes.px,
      borderTopWidth: styleValueTypes.px,
      borderRightWidth: styleValueTypes.px,
      borderBottomWidth: styleValueTypes.px,
      borderLeftWidth: styleValueTypes.px,
      borderRadius: styleValueTypes.px,
      radius: styleValueTypes.px,
      borderTopLeftRadius: styleValueTypes.px,
      borderTopRightRadius: styleValueTypes.px,
      borderBottomRightRadius: styleValueTypes.px,
      borderBottomLeftRadius: styleValueTypes.px,
      // Positioning props
      width: styleValueTypes.px,
      maxWidth: styleValueTypes.px,
      height: styleValueTypes.px,
      maxHeight: styleValueTypes.px,
      size: styleValueTypes.px,
      top: styleValueTypes.px,
      right: styleValueTypes.px,
      bottom: styleValueTypes.px,
      left: styleValueTypes.px,
      // Spacing props
      padding: styleValueTypes.px,
      paddingTop: styleValueTypes.px,
      paddingRight: styleValueTypes.px,
      paddingBottom: styleValueTypes.px,
      paddingLeft: styleValueTypes.px,
      margin: styleValueTypes.px,
      marginTop: styleValueTypes.px,
      marginRight: styleValueTypes.px,
      marginBottom: styleValueTypes.px,
      marginLeft: styleValueTypes.px,
      // Transform props
      rotate: styleValueTypes.degrees,
      rotateX: styleValueTypes.degrees,
      rotateY: styleValueTypes.degrees,
      rotateZ: styleValueTypes.degrees,
      scale: styleValueTypes.scale,
      scaleX: styleValueTypes.scale,
      scaleY: styleValueTypes.scale,
      scaleZ: styleValueTypes.scale,
      skew: styleValueTypes.degrees,
      skewX: styleValueTypes.degrees,
      skewY: styleValueTypes.degrees,
      distance: styleValueTypes.px,
      translateX: styleValueTypes.px,
      translateY: styleValueTypes.px,
      translateZ: styleValueTypes.px,
      x: styleValueTypes.px,
      y: styleValueTypes.px,
      z: styleValueTypes.px,
      perspective: styleValueTypes.px,
      transformPerspective: styleValueTypes.px,
      opacity: styleValueTypes.alpha,
      originX: styleValueTypes.progressPercentage,
      originY: styleValueTypes.progressPercentage,
      originZ: styleValueTypes.px,
      // Misc
      zIndex: int,
      filter: styleValueTypes.filter,
      WebkitFilter: styleValueTypes.filter,
      // SVG
      fillOpacity: styleValueTypes.alpha,
      strokeOpacity: styleValueTypes.alpha,
      numOctaves: int,
    };
    /**
     * A list of value types commonly used for dimensions
     */
    var dimensionValueTypes = [
      styleValueTypes.number,
      styleValueTypes.px,
      styleValueTypes.percent,
      styleValueTypes.degrees,
      styleValueTypes.vw,
      styleValueTypes.vh,
      auto,
    ];
    /**
     * Tests a provided value against a ValueType
     */
    var testValueType = function (v) {
      return function (type) {
        return type.test(v);
      };
    };
    /**
     * Tests a dimensional value against the list of dimension ValueTypes
     */
    var findDimensionValueType = function (v) {
      return dimensionValueTypes.find(testValueType(v));
    };
    /**
     * A list of all ValueTypes
     */
    var valueTypes = tslib.__spread(dimensionValueTypes, [styleValueTypes.color, styleValueTypes.complex]);
    /**
     * Tests a value against the list of ValueTypes
     */
    var findValueType = function (v) {
      return valueTypes.find(testValueType(v));
    };
    /**
     * Gets the default ValueType for the provided value key
     */
    var getDefaultValueType = function (key) {
      return defaultValueTypes[key];
    };
    /**
     * Provided a value and a ValueType, returns the value as that value type.
     */
    var getValueAsType = function (value, type) {
      return type && typeof value === 'number' ? type.transform(value) : value;
    };
    function getAnimatableNone(key, value) {
      var _a;
      var defaultValueType = getDefaultValueType(key);
      if (defaultValueType !== styleValueTypes.filter) defaultValueType = styleValueTypes.complex;
      // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
      return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0
        ? void 0
        : _a.call(defaultValueType, value);
    }

    /**
     * A list of all transformable axes. We'll use this list to generated a version
     * of each axes for each transform.
     */
    var transformAxes = ['', 'X', 'Y', 'Z'];
    /**
     * An ordered array of each transformable value. By default, transform values
     * will be sorted to this order.
     */
    var order = ['perspective', 'translate', 'scale', 'rotate', 'skew'];
    /**
     * Generate a list of every possible transform key.
     */
    var transformProps = ['transformPerspective', 'x', 'y', 'z'];
    order.forEach(function (operationKey) {
      transformAxes.forEach(function (axesKey) {
        var key = operationKey + axesKey;
        transformProps.push(key);
      });
    });
    /**
     * A function to use with Array.sort to sort transform keys by their default order.
     */
    function sortTransformProps(a, b) {
      return transformProps.indexOf(a) - transformProps.indexOf(b);
    }
    /**
     * A quick lookup for transform props.
     */
    var transformPropSet = new Set(transformProps);
    function isTransformProp(key) {
      return transformPropSet.has(key);
    }
    /**
     * A quick lookup for transform origin props
     */
    var transformOriginProps = new Set(['originX', 'originY', 'originZ']);
    function isTransformOriginProp(key) {
      return transformOriginProps.has(key);
    }

    var translateAlias = {
      x: 'translateX',
      y: 'translateY',
      z: 'translateZ',
      transformPerspective: 'perspective',
    };
    /**
     * Build a CSS transform style from individual x/y/scale etc properties.
     *
     * This outputs with a default order of transforms/scales/rotations, this can be customised by
     * providing a transformTemplate function.
     */
    function buildTransform(
      transform,
      transformKeys,
      transformTemplate,
      transformIsDefault,
      enableHardwareAcceleration,
      allowTransformNone
    ) {
      if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
      }
      if (allowTransformNone === void 0) {
        allowTransformNone = true;
      }
      // The transform string we're going to build into.
      var transformString = '';
      // Transform keys into their default order - this will determine the output order.
      transformKeys.sort(sortTransformProps);
      // Track whether the defined transform has a defined z so we don't add a
      // second to enable hardware acceleration
      var transformHasZ = false;
      // Loop over each transform and build them into transformString
      var numTransformKeys = transformKeys.length;
      for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + '(' + transform[key] + ') ';
        if (key === 'z') transformHasZ = true;
      }
      if (!transformHasZ && enableHardwareAcceleration) {
        transformString += 'translateZ(0)';
      } else {
        transformString = transformString.trim();
      }
      // If we have a custom `transform` template, pass our transform values and
      // generated transformString to that before returning
      if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? '' : transformString);
      } else if (allowTransformNone && transformIsDefault) {
        transformString = 'none';
      }
      return transformString;
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    function buildTransformOrigin(_a) {
      var _b = _a.originX,
        originX = _b === void 0 ? '50%' : _b,
        _c = _a.originY,
        originY = _c === void 0 ? '50%' : _c,
        _d = _a.originZ,
        originZ = _d === void 0 ? 0 : _d;
      return originX + ' ' + originY + ' ' + originZ;
    }
    /**
     * Build a transform style that takes a calculated delta between the element's current
     * space on screen and projects it into the desired space.
     */
    function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
      var x = _a.x,
        y = _a.y;
      /**
       * The translations we use to calculate are always relative to the viewport coordinate space.
       * But when we apply scales, we also scale the coordinate space of an element and its children.
       * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
       * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
       */
      var xTranslate = x.translate / treeScale.x;
      var yTranslate = y.translate / treeScale.y;
      var transform = 'translate3d(' + xTranslate + 'px, ' + yTranslate + 'px, 0) ';
      if (latestTransform) {
        var rotate = latestTransform.rotate,
          rotateX = latestTransform.rotateX,
          rotateY = latestTransform.rotateY;
        if (rotate) transform += 'rotate(' + rotate + ') ';
        if (rotateX) transform += 'rotateX(' + rotateX + ') ';
        if (rotateY) transform += 'rotateY(' + rotateY + ') ';
      }
      transform += 'scale(' + x.scale + ', ' + y.scale + ')';
      return !latestTransform && transform === identityProjection ? '' : transform;
    }
    var identityProjection = buildLayoutProjectionTransform(delta(), {
      x: 1,
      y: 1,
    });
    /**
     * Take the calculated delta origin and apply it as a transform string.
     */
    function buildLayoutProjectionTransformOrigin(_a) {
      var x = _a.x,
        y = _a.y;
      return x.origin * 100 + '% ' + y.origin * 100 + '% 0';
    }

    /**
     * Returns true if the provided key is a CSS variable
     */
    function isCSSVariable(key) {
      return key.startsWith('--');
    }

    function isCSSVariable$1(value) {
      return typeof value === 'string' && value.startsWith('var(--');
    }
    /**
     * Parse Framer's special CSS variable format into a CSS token and a fallback.
     *
     * ```
     * `var(--foo, #fff)` => [`--foo`, '#fff']
     * ```
     *
     * @param current
     */
    var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function parseCSSVariable(current) {
      var match = cssVariableRegex.exec(current);
      if (!match) return [,];
      var _a = tslib.__read(match, 3),
        token = _a[1],
        fallback = _a[2];
      return [token, fallback];
    }
    var maxDepth = 4;
    function getVariableValue(current, element, depth) {
      if (depth === void 0) {
        depth = 1;
      }
      heyListen.invariant(
        depth <= maxDepth,
        'Max CSS variable fallback depth detected in property "' +
          current +
          '". This may indicate a circular fallback dependency.'
      );
      var _a = tslib.__read(parseCSSVariable(current), 2),
        token = _a[0],
        fallback = _a[1];
      // No CSS variable detected
      if (!token) return;
      // Attempt to read this CSS variable off the element
      var resolved = window.getComputedStyle(element).getPropertyValue(token);
      if (resolved) {
        return resolved.trim();
      } else if (isCSSVariable$1(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
      } else {
        return fallback;
      }
    }
    /**
     * Resolve CSS variables from
     *
     * @internal
     */
    function resolveCSSVariables(visualElement, _a, transitionEnd) {
      var _b;
      var target = tslib.__rest(_a, []);
      var element = visualElement.getInstance();
      if (!(element instanceof HTMLElement)) return { target: target, transitionEnd: transitionEnd };
      // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
      // only if they change but I think this reads clearer and this isn't a performance-critical path.
      if (transitionEnd) {
        transitionEnd = tslib.__assign({}, transitionEnd);
      }
      // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
      visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable$1(current)) return;
        var resolved = getVariableValue(current, element);
        if (resolved) value.set(resolved);
      });
      // Cycle through every target property and resolve CSS variables. Currently
      // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
      for (var key in target) {
        var current = target[key];
        if (!isCSSVariable$1(current)) continue;
        var resolved = getVariableValue(current, element);
        if (!resolved) continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
      }
      return { target: target, transitionEnd: transitionEnd };
    }

    function pixelsToPercent(pixels, axis) {
      return (pixels / (axis.max - axis.min)) * 100;
    }
    /**
     * We always correct borderRadius as a percentage rather than pixels to reduce paints.
     * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
     * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
     * borderRadius in both states. If we animate between the two in pixels that will trigger
     * a paint each time. If we animate between the two in percentage we'll avoid a paint.
     */
    function correctBorderRadius(latest, viewportBox) {
      /**
       * If latest is a string, if it's a percentage we can return immediately as it's
       * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
       */
      if (typeof latest === 'string') {
        if (styleValueTypes.px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      /**
       * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
       * pixel value as a percentage of each axis
       */
      var x = pixelsToPercent(latest, viewportBox.x);
      var y = pixelsToPercent(latest, viewportBox.y);
      return x + '% ' + y + '%';
    }
    var varToken = '_$css';
    function correctBoxShadow(latest, _viewportBox, delta, treeScale) {
      var original = latest;
      /**
       * We need to first strip and store CSS variables from the string.
       */
      var containsCSSVariables = latest.includes('var(');
      var cssVariables = [];
      if (containsCSSVariables) {
        latest = latest.replace(cssVariableRegex, function (match) {
          cssVariables.push(match);
          return varToken;
        });
      }
      var shadow = styleValueTypes.complex.parse(latest);
      // TODO: Doesn't support multiple shadows
      if (shadow.length > 5) return original;
      var template = styleValueTypes.complex.createTransformer(latest);
      var offset = typeof shadow[0] !== 'number' ? 1 : 0;
      // Calculate the overall context scale
      var xScale = delta.x.scale * treeScale.x;
      var yScale = delta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      /**
       * Ideally we'd correct x and y scales individually, but because blur and
       * spread apply to both we have to take a scale average and apply that instead.
       * We could potentially improve the outcome of this by incorporating the ratio between
       * the two scales.
       */
      var averageScale = popmotion.mix(xScale, yScale, 0.5);
      // Blur
      if (typeof shadow[2 + offset] === 'number') shadow[2 + offset] /= averageScale;
      // Spread
      if (typeof shadow[3 + offset] === 'number') shadow[3 + offset] /= averageScale;
      var output = template(shadow);
      if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
          var cssVariable = cssVariables[i_1];
          i_1++;
          return cssVariable;
        });
      }
      return output;
    }
    var borderCorrectionDefinition = {
      process: correctBorderRadius,
    };
    var valueScaleCorrection = {
      borderRadius: tslib.__assign(tslib.__assign({}, borderCorrectionDefinition), {
        applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
      }),
      borderTopLeftRadius: borderCorrectionDefinition,
      borderTopRightRadius: borderCorrectionDefinition,
      borderBottomLeftRadius: borderCorrectionDefinition,
      borderBottomRightRadius: borderCorrectionDefinition,
      boxShadow: {
        process: correctBoxShadow,
      },
    };
    /**
     * @internal
     */
    function addScaleCorrection(correctors) {
      for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
      }
    }

    /**
     * Build style and CSS variables
     *
     * This function converts a Motion style prop:
     *
     * { x: 100, width: 100, originX: 0.5 }
     *
     * Into an object with default value types applied and default
     * transform order set:
     *
     * {
     *   transform: 'translateX(100px) translateZ(0)`,
     *   width: '100px',
     *   transformOrigin: '50% 50%'
     * }
     *
     * Styles are saved to `style` and CSS vars to `vars`.
     *
     * This function works with mutative data structures.
     */
    function buildHTMLStyles(
      latest,
      style,
      vars,
      transform,
      transformOrigin,
      transformKeys,
      _a,
      isLayoutProjectionEnabled,
      delta,
      deltaFinal,
      treeScale,
      targetBox
    ) {
      var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        transformTemplate = _a.transformTemplate,
        allowTransformNone = _a.allowTransformNone;
      // Empty the transformKeys array. As we're throwing out refs to its items
      // this might not be as cheap as suspected. Maybe using the array as a buffer
      // with a manual incrementation would be better.
      transformKeys.length = 0;
      // Track whether we encounter any transform or transformOrigin values.
      var hasTransform = false;
      var hasTransformOrigin = false;
      // Does the calculated transform essentially equal "none"?
      var transformIsNone = true;
      /**
       * Loop over all our latest animated values and decide whether to handle them
       * as a style or CSS variable. Transforms and transform origins are kept seperately
       * for further processing
       */
      for (var key in latest) {
        var value = latest[key];
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = getDefaultValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
          // If this is a transform, flag and enable further transform processing
          hasTransform = true;
          transform[key] = valueAsType;
          transformKeys.push(key);
          if (!transformIsNone) continue;
          // If all the transform keys we've so far encountered are their default value
          // then check to see if this one isn't
          var defaultValue = valueType.default !== undefined ? valueType.default : 0;
          if (value !== defaultValue) transformIsNone = false;
        } else if (isTransformOriginProp(key)) {
          // If this is a transform origin, flag and enable further transform-origin processing
          transformOrigin[key] = valueAsType;
          hasTransformOrigin = true;
        } else if (key !== 'transform' || typeof value !== 'function') {
          // Handle all remaining values. Decide which map to save to depending
          // on whether this is a CSS variable
          var bucket = isCSSVariable(key) ? vars : style;
          // If we need to perform scale correction, and we have a handler for this
          // value type (ie borderRadius), perform it
          if (isLayoutProjectionEnabled && valueScaleCorrection[key]) {
            var corrected = valueScaleCorrection[key].process(value, targetBox, delta, treeScale);
            /**
             * Scale-correctable values can define a number of other values to break
             * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
             */
            var applyTo = valueScaleCorrection[key].applyTo;
            if (applyTo) {
              var num = applyTo.length;
              for (var i = 0; i < num; i++) {
                bucket[applyTo[i]] = corrected;
              }
            } else {
              bucket[key] = corrected;
            }
          } else {
            bucket[key] = valueAsType;
          }
        }
      }
      /**
       * Build transform and transformOrigin. If we're performing layout projection these need
       * to be based off the deltaFinal data. Any user-set origins will have been pre-baked
       * into the deltaFinal.
       */
      if (isLayoutProjectionEnabled) {
        style.transform = buildLayoutProjectionTransform(deltaFinal, treeScale, hasTransform ? transform : undefined);
        if (transformTemplate) {
          style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildLayoutProjectionTransformOrigin(deltaFinal);
      } else {
        if (hasTransform) {
          style.transform = buildTransform(
            transform,
            transformKeys,
            transformTemplate,
            transformIsNone,
            enableHardwareAcceleration,
            allowTransformNone
          );
        }
        if (hasTransformOrigin) {
          style.transformOrigin = buildTransformOrigin(transformOrigin);
        }
      }
    }

    /**
     * Reset an axis to the provided origin box.
     *
     * This is a mutative operation.
     */
    function resetAxis(axis, originAxis) {
      axis.min = originAxis.min;
      axis.max = originAxis.max;
    }
    /**
     * Reset a box to the provided origin box.
     *
     * This is a mutative operation.
     */
    function resetBox(box, originBox) {
      resetAxis(box.x, originBox.x);
      resetAxis(box.y, originBox.y);
    }
    /**
     * Scales a point based on a factor and an originPoint
     */
    function scalePoint(point, scale, originPoint) {
      var distanceFromOrigin = point - originPoint;
      var scaled = scale * distanceFromOrigin;
      return originPoint + scaled;
    }
    /**
     * Applies a translate/scale delta to a point
     */
    function applyPointDelta(point, translate, scale, originPoint, boxScale) {
      if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
      }
      return scalePoint(point, scale, originPoint) + translate;
    }
    /**
     * Applies a translate/scale delta to an axis
     */
    function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
      if (translate === void 0) {
        translate = 0;
      }
      if (scale === void 0) {
        scale = 1;
      }
      axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
      axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
    }
    /**
     * Applies a translate/scale delta to a box
     */
    function applyBoxDelta(box, _a) {
      var x = _a.x,
        y = _a.y;
      applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
      applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
    }
    /**
     * Apply a transform to an axis from the latest resolved motion values.
     * This function basically acts as a bridge between a flat motion value map
     * and applyAxisDelta
     */
    function applyAxisTransforms(final, axis, transforms, _a) {
      var _b = tslib.__read(_a, 3),
        key = _b[0],
        scaleKey = _b[1],
        originKey = _b[2];
      // Copy the current axis to the final axis before mutation
      final.min = axis.min;
      final.max = axis.max;
      var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
      var originPoint = popmotion.mix(axis.min, axis.max, axisOrigin);
      // Apply the axis delta to the final axis
      applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
    }
    /**
     * The names of the motion values we want to apply as translation, scale and origin.
     */
    var xKeys = ['x', 'scaleX', 'originX'];
    var yKeys = ['y', 'scaleY', 'originY'];
    /**
     * Apply a transform to a box from the latest resolved motion values.
     */
    function applyBoxTransforms(finalBox, box, transforms) {
      applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
      applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
    }
    /**
     * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
     */
    function removePointDelta(point, translate, scale, originPoint, boxScale) {
      point -= translate;
      point = scalePoint(point, 1 / scale, originPoint);
      if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
      }
      return point;
    }
    /**
     * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
     */
    function removeAxisDelta(axis, translate, scale, origin, boxScale) {
      if (translate === void 0) {
        translate = 0;
      }
      if (scale === void 0) {
        scale = 1;
      }
      if (origin === void 0) {
        origin = 0.5;
      }
      var originPoint = popmotion.mix(axis.min, axis.max, origin) - translate;
      axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
      axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
    }
    /**
     * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
     * and acts as a bridge between motion values and removeAxisDelta
     */
    function removeAxisTransforms(axis, transforms, _a) {
      var _b = tslib.__read(_a, 3),
        key = _b[0],
        scaleKey = _b[1],
        originKey = _b[2];
      removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
    }
    /**
     * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
     * and acts as a bridge between motion values and removeAxisDelta
     */
    function removeBoxTransforms(box, transforms) {
      removeAxisTransforms(box.x, transforms, xKeys);
      removeAxisTransforms(box.y, transforms, yKeys);
    }
    /**
     * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
     * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
     *
     * This is the final nested loop within HTMLVisualElement.updateLayoutDelta
     */
    function applyTreeDeltas(box, treeScale, treePath) {
      var treeLength = treePath.length;
      if (!treeLength) return;
      // Reset the treeScale
      treeScale.x = treeScale.y = 1;
      for (var i = 0; i < treeLength; i++) {
        var delta = treePath[i].delta;
        // Incoporate each ancestor's scale into a culmulative treeScale for this component
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        // Apply each ancestor's calculated delta into this component's recorded layout box
        applyBoxDelta(box, delta);
      }
    }

    var clampProgress = function (v) {
      return popmotion.clamp(0, 1, v);
    };
    /**
     * Returns true if the provided value is within maxDistance of the provided target
     */
    function isNear(value, target, maxDistance) {
      if (target === void 0) {
        target = 0;
      }
      if (maxDistance === void 0) {
        maxDistance = 0.01;
      }
      return popmotion.distance(value, target) < maxDistance;
    }
    function calcLength(axis) {
      return axis.max - axis.min;
    }
    /**
     * Calculate a transform origin relative to the source axis, between 0-1, that results
     * in an asthetically pleasing scale/transform needed to project from source to target.
     */
    function calcOrigin(source, target) {
      var origin = 0.5;
      var sourceLength = calcLength(source);
      var targetLength = calcLength(target);
      if (targetLength > sourceLength) {
        origin = popmotion.progress(target.min, target.max - sourceLength, source.min);
      } else if (sourceLength > targetLength) {
        origin = popmotion.progress(source.min, source.max - targetLength, target.min);
      }
      return clampProgress(origin);
    }
    /**
     * Update the AxisDelta with a transform that projects source into target.
     *
     * The transform `origin` is optional. If not provided, it'll be automatically
     * calculated based on the relative positions of the two bounding boxes.
     */
    function updateAxisDelta(delta, source, target, origin) {
      delta.origin = origin === undefined ? calcOrigin(source, target) : origin;
      delta.originPoint = popmotion.mix(source.min, source.max, delta.origin);
      delta.scale = calcLength(target) / calcLength(source);
      if (isNear(delta.scale, 1, 0.0001)) delta.scale = 1;
      delta.translate = popmotion.mix(target.min, target.max, delta.origin) - delta.originPoint;
      if (isNear(delta.translate)) delta.translate = 0;
    }
    /**
     * Update the BoxDelta with a transform that projects the source into the target.
     *
     * The transform `origin` is optional. If not provided, it'll be automatically
     * calculated based on the relative positions of the two bounding boxes.
     */
    function updateBoxDelta(delta, source, target, origin) {
      updateAxisDelta(delta.x, source.x, target.x, origin);
      updateAxisDelta(delta.y, source.y, target.y, origin);
    }

    // Call a handler once for each axis
    function eachAxis(handler) {
      return [handler('x'), handler('y')];
    }

    /**
     * Measure and return the element bounding box.
     *
     * We convert the box into an AxisBox2D to make it easier to work with each axis
     * individually and programmatically.
     *
     * This function optionally accepts a transformPagePoint function which allows us to compensate
     * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
     */
    function getBoundingBox(element, transformPagePoint) {
      var box = element.getBoundingClientRect();
      return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
    }

    var isKeyframesTarget = function (v) {
      return Array.isArray(v);
    };

    var positionalKeys = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']);
    var isPositionalKey = function (key) {
      return positionalKeys.has(key);
    };
    var hasPositionalKey = function (target) {
      return Object.keys(target).some(isPositionalKey);
    };
    var setAndResetVelocity = function (value, to) {
      // Looks odd but setting it twice doesn't render, it'll just
      // set both prev and current to the latest value
      value.set(to, false);
      value.set(to);
    };
    var isNumOrPxType = function (v) {
      return v === styleValueTypes.number || v === styleValueTypes.px;
    };
    var BoundingBoxDimension;
    (function (BoundingBoxDimension) {
      BoundingBoxDimension['width'] = 'width';
      BoundingBoxDimension['height'] = 'height';
      BoundingBoxDimension['left'] = 'left';
      BoundingBoxDimension['right'] = 'right';
      BoundingBoxDimension['top'] = 'top';
      BoundingBoxDimension['bottom'] = 'bottom';
    })(BoundingBoxDimension || (BoundingBoxDimension = {}));
    var getPosFromMatrix = function (matrix, pos) {
      return parseFloat(matrix.split(', ')[pos]);
    };
    var getTranslateFromMatrix = function (pos2, pos3) {
      return function (_bbox, _a) {
        var transform = _a.transform;
        if (transform === 'none' || !transform) return 0;
        var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) {
          return getPosFromMatrix(matrix3d[1], pos3);
        } else {
          var matrix = transform.match(/^matrix\((.+)\)$/);
          if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
          } else {
            return 0;
          }
        }
      };
    };
    var transformKeys = new Set(['x', 'y', 'z']);
    var nonTranslationalTransformKeys = transformProps.filter(function (key) {
      return !transformKeys.has(key);
    });
    function removeNonTranslationalTransform(visualElement) {
      var removedTransforms = [];
      nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
          removedTransforms.push([key, value.get()]);
          value.set(key.startsWith('scale') ? 1 : 0);
        }
      });
      // Apply changes to element before measurement
      if (removedTransforms.length) visualElement.render();
      return removedTransforms;
    }
    var positionalValues = {
      // Dimensions
      width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
      },
      height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
      },
      top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
      },
      left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
      },
      bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
      },
      right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
      },
      // Transform
      x: getTranslateFromMatrix(4, 13),
      y: getTranslateFromMatrix(5, 14),
    };
    var convertChangedValueTypes = function (target, visualElement, changedKeys) {
      var originBbox = visualElement.getBoundingBox();
      var elementComputedStyle = visualElement.getComputedStyle();
      var display = elementComputedStyle.display,
        top = elementComputedStyle.top,
        left = elementComputedStyle.left,
        bottom = elementComputedStyle.bottom,
        right = elementComputedStyle.right,
        transform = elementComputedStyle.transform;
      var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
      // If the element is currently set to display: "none", make it visible before
      // measuring the target bounding box
      if (display === 'none') {
        visualElement.setStaticValues('display', target.display || 'block');
      }
      // Apply the latest values (as set in checkAndConvertChangedValueTypes)
      visualElement.render();
      var targetBbox = visualElement.getBoundingBox();
      changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
      });
      return target;
    };
    var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
      if (origin === void 0) {
        origin = {};
      }
      if (transitionEnd === void 0) {
        transitionEnd = {};
      }
      target = tslib.__assign({}, target);
      transitionEnd = tslib.__assign({}, transitionEnd);
      var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
      // We want to remove any transform values that could affect the element's bounding box before
      // it's measured. We'll reapply these later.
      var removedTransformValues = [];
      var hasAttemptedToRemoveTransformValues = false;
      var changedValueTypeKeys = [];
      targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key)) return;
        var from = origin[key];
        var to = target[key];
        var fromType = findDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
          var numKeyframes = to.length;
          for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
            if (!toType) {
              toType = findDimensionValueType(to[i]);
              heyListen.invariant(
                toType === fromType || (isNumOrPxType(fromType) && isNumOrPxType(toType)),
                'Keyframes must be of the same dimension as the current value'
              );
            } else {
              heyListen.invariant(findDimensionValueType(to[i]) === toType, 'All keyframes must be of the same type');
            }
          }
        } else {
          toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
          // If they're both just number or px, convert them both to numbers rather than
          // relying on resize/remeasure to convert (which is wasteful in this situation)
          if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
            var current = value.get();
            if (typeof current === 'string') {
              value.set(parseFloat(current));
            }
            if (typeof to === 'string') {
              target[key] = parseFloat(to);
            } else if (Array.isArray(to) && toType === styleValueTypes.px) {
              target[key] = to.map(parseFloat);
            }
          } else if (
            (fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
            (toType === null || toType === void 0 ? void 0 : toType.transform) &&
            (from === 0 || to === 0)
          ) {
            // If one or the other value is 0, it's safe to coerce it to the
            // type of the other without measurement
            if (from === 0) {
              value.set(toType.transform(from));
            } else {
              target[key] = fromType.transform(to);
            }
          } else {
            // If we're going to do value conversion via DOM measurements, we first
            // need to remove non-positional transform values that could affect the bbox measurements.
            if (!hasAttemptedToRemoveTransformValues) {
              removedTransformValues = removeNonTranslationalTransform(visualElement);
              hasAttemptedToRemoveTransformValues = true;
            }
            changedValueTypeKeys.push(key);
            transitionEnd[key] = transitionEnd[key] !== undefined ? transitionEnd[key] : target[key];
            setAndResetVelocity(value, to);
          }
        }
      });
      if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
          removedTransformValues.forEach(function (_a) {
            var _b = tslib.__read(_a, 2),
              key = _b[0],
              value = _b[1];
            visualElement.getValue(key).set(value);
          });
        }
        // Reapply original values
        visualElement.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
      } else {
        return { target: target, transitionEnd: transitionEnd };
      }
    };
    /**
     * Convert value types for x/y/width/height/top/left/bottom/right
     *
     * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
     *
     * @internal
     */
    function unitConversion(visualElement, target, origin, transitionEnd) {
      return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
    }

    /**
     * Parse a DOM variant to make it animatable. This involves resolving CSS variables
     * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
     */
    var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
      var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
      target = resolved.target;
      transitionEnd = resolved.transitionEnd;
      return unitConversion(visualElement, target, origin, transitionEnd);
    };

    /**
     * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
     */
    var isNumericalString = function (v) {
      return /^\-?\d*\.?\d+$/.test(v);
    };

    var isCustomValue = function (v) {
      return Boolean(v && typeof v === 'object' && v.mix && v.toValue);
    };
    var resolveFinalValueInKeyframes = function (v) {
      // TODO maybe throw if v.length - 1 is placeholder token?
      return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
    };

    /**
     * Decides if the supplied variable is an array of variant labels
     */
    function isVariantLabels(v) {
      return Array.isArray(v);
    }
    /**
     * Decides if the supplied variable is variant label
     */
    function isVariantLabel(v) {
      return typeof v === 'string' || isVariantLabels(v);
    }
    /**
     * Creates an object containing the latest state of every MotionValue on a VisualElement
     */
    function getCurrent(visualElement) {
      var current = {};
      visualElement.forEachValue(function (value, key) {
        return (current[key] = value.get());
      });
      return current;
    }
    /**
     * Creates an object containing the latest velocity of every MotionValue on a VisualElement
     */
    function getVelocity(visualElement) {
      var velocity = {};
      visualElement.forEachValue(function (value, key) {
        return (velocity[key] = value.getVelocity());
      });
      return velocity;
    }
    /**
     * Resovles a variant if it's a variant resolver
     */
    function resolveVariant(visualElement, definition, custom) {
      if (typeof definition === 'string') {
        definition = visualElement.getVariant(definition);
      }
      return typeof definition === 'function'
        ? definition(
            custom !== null && custom !== void 0 ? custom : visualElement.getVariantPayload(),
            getCurrent(visualElement),
            getVelocity(visualElement)
          )
        : definition;
    }

    /**
     * Set VisualElement's MotionValue, creating a new MotionValue for it if
     * it doesn't exist.
     */
    function setMotionValue(visualElement, key, value) {
      if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
      } else {
        visualElement.addValue(key, motionValue(value));
      }
    }
    function setTarget(visualElement, definition) {
      var resolved = resolveVariant(visualElement, definition);
      var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {},
        _b = _a.transitionEnd,
        transitionEnd = _b === void 0 ? {} : _b,
        _c = _a.transition,
        target = tslib.__rest(_a, ['transitionEnd', 'transition']);
      target = tslib.__assign(tslib.__assign({}, target), transitionEnd);
      for (var key in target) {
        var value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
      }
    }
    function setVariants(visualElement, variantLabels) {
      var reversedLabels = tslib.__spread(variantLabels).reverse();
      reversedLabels.forEach(function (key) {
        var _a;
        setTarget(visualElement, visualElement.getVariant(key));
        (_a = visualElement.variantChildren) === null || _a === void 0
          ? void 0
          : _a.forEach(function (child) {
              setVariants(child, variantLabels);
            });
      });
    }
    function setValues(visualElement, definition) {
      if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
      } else if (typeof definition === 'string') {
        return setVariants(visualElement, [definition]);
      } else {
        setTarget(visualElement, definition);
      }
    }
    function checkTargetForNewValues(visualElement, target, origin) {
      var _a, _b;
      var _c;
      var newValueKeys = Object.keys(target).filter(function (key) {
        return !visualElement.hasValue(key);
      });
      var numNewValues = newValueKeys.length;
      if (!numNewValues) return;
      for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        // If this is a keyframes value, we can attempt to use the first value in the
        // array as that's going to be the first value of the animation anyway
        if (Array.isArray(targetValue)) {
          value = targetValue[0];
        }
        // If it isn't a keyframes or the first keyframes value was set as `null`, read the
        // value from the DOM. It might be worth investigating whether to check props (for SVG)
        // or props.style (for HTML) if the value exists there before attempting to read.
        if (value === null) {
          var readValue = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readNativeValue(key);
          value = readValue !== undefined ? readValue : target[key];
          heyListen.invariant(
            value !== null,
            'No initial value for "' +
              key +
              '" can be inferred. Ensure an initial value for "' +
              key +
              '" is defined on the component.'
          );
        }
        if (typeof value === 'string' && isNumericalString(value)) {
          // If this is a number read as a string, ie "0" or "200", convert it to a number
          value = parseFloat(value);
        } else if (!findValueType(value) && styleValueTypes.complex.test(targetValue)) {
          value = getAnimatableNone(key, targetValue);
        }
        visualElement.addValue(key, motionValue(value));
        (_b = (_c = origin)[key]) !== null && _b !== void 0 ? _b : (_c[key] = value);
        visualElement.baseTarget[key] = value;
      }
    }
    function getOriginFromTransition(key, transition) {
      if (!transition) return;
      var valueTransition = transition[key] || transition['default'] || transition;
      return valueTransition.from;
    }
    function getOrigin(target, transition, visualElement) {
      var _a, _b;
      var origin = {};
      for (var key in target) {
        origin[key] =
          (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0
            ? _a
            : (_b = visualElement.getValue(key)) === null || _b === void 0
            ? void 0
            : _b.get();
      }
      return origin;
    }

    var isMotionValue = function (value) {
      return value instanceof MotionValue;
    };

    /**
     * A VisualElement for HTMLElements
     */
    var HTMLVisualElement = /** @class */ (function (_super) {
      tslib.__extends(HTMLVisualElement, _super);
      function HTMLVisualElement() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        /**
         *
         */
        _this.defaultConfig = {
          enableHardwareAcceleration: true,
          allowTransformNone: true,
        };
        /**
         * A mutable record of styles we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.style = {};
        /**
         * A record of styles we only want to apply via React. This gets set in useMotionValues
         * and applied in the render function. I'd prefer this to live somewhere else to decouple
         * VisualElement from React but works for now.
         */
        _this.reactStyle = {};
        /**
         * A mutable record of CSS variables we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.vars = {};
        /**
         * A mutable record of transforms we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transform = {};
        /**
         * A mutable record of transform origins we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformOrigin = {};
        /**
         * A mutable record of transform keys we want to apply to the rendered Element. We order
         * this to order transforms in the desired order. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformKeys = [];
        _this.config = _this.defaultConfig;
        /**
         * ========================================
         * Layout
         * ========================================
         */
        _this.isLayoutProjectionEnabled = false;
        /**
         * A set of layout update event handlers. These are only called once all layouts have been read,
         * making it safe to perform DOM write operations.
         */
        _this.layoutUpdateListeners = new SubscriptionManager();
        _this.layoutMeasureListeners = new SubscriptionManager();
        _this.viewportBoxUpdateListeners = new SubscriptionManager();
        /**
         * Keep track of whether the viewport box has been updated since the last render.
         * If it has, we want to fire the onViewportBoxUpdate listener.
         */
        _this.hasViewportBoxUpdated = false;
        /**
         * The visual target we want to project our component into on a given frame
         * before applying transforms defined in `animate` or `style`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.targetBoxFinal = axisBox();
        /**
         * The overall scale of the local coordinate system as transformed by all parents
         * of this component. We use this for scale correction on our calculated layouts
         * and scale-affected values like `boxShadow`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.treeScale = { x: 1, y: 1 };
        /**
         * The delta between the boxCorrected and the desired
         * targetBox (before user-set transforms are applied). The calculated output will be
         * handed to the renderer and used as part of the style correction calculations, for
         * instance calculating how to display the desired border-radius correctly.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.delta = delta();
        /**
         * The delta between the boxCorrected and the desired targetBoxFinal. The calculated
         * output will be handed to the renderer and used to project the boxCorrected into
         * the targetBoxFinal.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.deltaFinal = delta();
        /**
         * The computed transform string to apply deltaFinal to the element. Currently this is only
         * being used to diff and decide whether to render on the current frame, but a minor optimisation
         * could be to provide this to the buildHTMLStyle function.
         */
        _this.deltaTransform = identityProjection;
        /**
         *
         */
        _this.stopLayoutAxisAnimation = {
          x: function () {},
          y: function () {},
        };
        _this.isTargetBoxLocked = false;
        _this.updateLayoutDelta = function () {
          _this.isLayoutProjectionEnabled && _this.box && _this.updateLayoutDeltas();
          /**
           * Ensure all children layouts are also updated.
           *
           * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
           * multiple times per frame (source of mid-animation GC)
           */
          _this.children.forEach(fireUpdateLayoutDelta);
        };
        return _this;
      }
      /**
       * When a value is removed, we want to make sure it's removed from all rendered data structures.
       */
      HTMLVisualElement.prototype.removeValue = function (key) {
        _super.prototype.removeValue.call(this, key);
        delete this.vars[key];
        delete this.style[key];
      };
      /**
       * Empty the mutable data structures by re-creating them. We can do this every React render
       * as the comparative workload to the rest of the render is very low and this is also when
       * we want to reflect values that might have been removed by the render.
       */
      HTMLVisualElement.prototype.clean = function () {
        this.style = {};
        this.vars = {};
        this.transform = {};
      };
      HTMLVisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) {
          config = {};
        }
        this.config = tslib.__assign(tslib.__assign({}, this.defaultConfig), config);
      };
      /**
       * Read a value directly from the HTMLElement style.
       */
      HTMLVisualElement.prototype.read = function (key) {
        var computedStyle = this.getComputedStyle();
        return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      };
      HTMLVisualElement.prototype.addValue = function (key, value) {
        _super.prototype.addValue.call(this, key, value);
        // If we have rotate values we want to foce the layoutOrigin used in layout projection
        // to the center of the element.
        if (key.startsWith('rotate')) this.layoutOrigin = 0.5;
      };
      /**
       * Read a value directly from the HTMLElement in case it's not defined by a Motion
       * prop. If it's a transform, we just return a pre-defined default value as reading these
       * out of a matrix is either error-prone or can incur a big payload for little benefit.
       */
      HTMLVisualElement.prototype.readNativeValue = function (key) {
        if (isTransformProp(key)) {
          var defaultValueType = getDefaultValueType(key);
          return defaultValueType ? defaultValueType.default || 0 : 0;
        } else {
          return this.read(key);
        }
      };
      HTMLVisualElement.prototype.getBaseValue = function (key, props) {
        var _a;
        var style = (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
        return style !== undefined && !isMotionValue(style)
          ? style
          : _super.prototype.getBaseValue.call(this, key, props);
      };
      /**
       * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
       * can be animated by Motion.
       */
      HTMLVisualElement.prototype.makeTargetAnimatable = function (_a, parseDOMValues) {
        if (parseDOMValues === void 0) {
          parseDOMValues = true;
        }
        var transition = _a.transition,
          transitionEnd = _a.transitionEnd,
          target = tslib.__rest(_a, ['transition', 'transitionEnd']);
        var transformValues = this.config.transformValues;
        var origin = getOrigin(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
          if (transitionEnd) transitionEnd = transformValues(transitionEnd);
          if (target) target = transformValues(target);
          if (origin) origin = transformValues(origin);
        }
        if (parseDOMValues) {
          checkTargetForNewValues(this, target, origin);
          var parsed = parseDomVariant(this, target, origin, transitionEnd);
          transitionEnd = parsed.transitionEnd;
          target = parsed.target;
        }
        return tslib.__assign({ transition: transition, transitionEnd: transitionEnd }, target);
      };
      HTMLVisualElement.prototype.enableLayoutProjection = function () {
        this.isLayoutProjectionEnabled = true;
      };
      HTMLVisualElement.prototype.hide = function () {
        if (this.isVisible === false) return;
        this.isVisible = false;
        this.scheduleRender();
      };
      HTMLVisualElement.prototype.show = function () {
        if (this.isVisible === true) return;
        this.isVisible = true;
        this.scheduleRender();
      };
      /**
       * Register an event listener to fire when the layout is updated. We might want to expose support
       * for this via a `motion` prop.
       */
      HTMLVisualElement.prototype.onLayoutUpdate = function (callback) {
        return this.layoutUpdateListeners.add(callback);
      };
      HTMLVisualElement.prototype.onLayoutMeasure = function (callback) {
        return this.layoutMeasureListeners.add(callback);
      };
      HTMLVisualElement.prototype.onViewportBoxUpdate = function (callback) {
        return this.viewportBoxUpdateListeners.add(callback);
      };
      /**
       * To be called when all layouts are successfully updated. In turn we can notify layoutUpdate
       * subscribers.
       */
      HTMLVisualElement.prototype.layoutReady = function (config) {
        this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, config);
      };
      /**
       * Measure and return the Element's bounding box. We convert it to a AxisBox2D
       * structure to make it easier to work on each individual axis generically.
       */
      HTMLVisualElement.prototype.getBoundingBox = function () {
        var transformPagePoint = this.config.transformPagePoint;
        return getBoundingBox(this.element, transformPagePoint);
      };
      HTMLVisualElement.prototype.getBoundingBoxWithoutTransforms = function () {
        var bbox = this.getBoundingBox();
        removeBoxTransforms(bbox, this.latest);
        return bbox;
      };
      /**
       * Return the computed style after a render.
       */
      HTMLVisualElement.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
      };
      /**
       * Record the bounding box as it exists before a re-render.
       */
      HTMLVisualElement.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
        /**
         * Update targetBox to match the prevViewportBox. This is just to ensure
         * that targetBox is affected by scroll in the same way as the measured box
         */
        this.rebaseTargetBox(false, this.prevViewportBox);
      };
      HTMLVisualElement.prototype.rebaseTargetBox = function (force, box) {
        var _this = this;
        if (force === void 0) {
          force = false;
        }
        if (box === void 0) {
          box = this.box;
        }
        var _a = this.getAxisProgress(),
          x = _a.x,
          y = _a.y;
        var shouldRebase = this.box && !this.isTargetBoxLocked && !x.isAnimating() && !y.isAnimating();
        if (force || shouldRebase) {
          eachAxis(function (axis) {
            var _a = box[axis],
              min = _a.min,
              max = _a.max;
            _this.setAxisTarget(axis, min, max);
          });
        }
      };
      HTMLVisualElement.prototype.measureLayout = function () {
        var _this = this;
        this.box = this.getBoundingBox();
        this.boxCorrected = copyAxisBox(this.box);
        if (!this.targetBox) this.targetBox = copyAxisBox(this.box);
        this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box);
        sync__default['default'].update(function () {
          return _this.rebaseTargetBox();
        });
      };
      HTMLVisualElement.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = true;
      };
      HTMLVisualElement.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation();
        this.isTargetBoxLocked = false;
      };
      /**
       * Reset the transform on the current Element. This is called as part
       * of a batched process across the entire layout tree. To remove this write
       * cycle it'd be interesting to see if it's possible to "undo" all the current
       * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
       * works
       */
      HTMLVisualElement.prototype.resetTransform = function () {
        /**
         * When we reset the transform of an element, there's a fair possibility that
         * the element will visually move from underneath the pointer, triggering attached
         * pointerenter/leave events. We temporarily suspend these while measurement takes place.
         */
        this.suspendHoverEvents();
        var transformTemplate = this.config.transformTemplate;
        this.element.style.transform = transformTemplate ? transformTemplate({}, '') : 'none';
        // Ensure that whatever happens next, we restore our transform
        this.scheduleRender();
      };
      /**
       * Set new min/max boundaries to project an axis into
       */
      HTMLVisualElement.prototype.setAxisTarget = function (axis, min, max) {
        var targetAxis = this.targetBox[axis];
        targetAxis.min = min;
        targetAxis.max = max;
        // Flag that we want to fire the onViewportBoxUpdate event handler
        this.hasViewportBoxUpdated = true;
        this.rootParent.scheduleUpdateLayoutDelta();
      };
      HTMLVisualElement.prototype.getAxisProgress = function () {
        if (!this.axisProgress) {
          this.axisProgress = {
            x: motionValue(0),
            y: motionValue(0),
          };
        }
        return this.axisProgress;
      };
      /**
       *
       */
      HTMLVisualElement.prototype.startLayoutAxisAnimation = function (axis, transition) {
        var _this = this;
        var _a;
        var progress = this.getAxisProgress()[axis];
        var _b = this.targetBox[axis],
          min = _b.min,
          max = _b.max;
        var length = max - min;
        progress.clearListeners();
        progress.set(min);
        progress.set(min); // Set twice to hard-reset velocity
        progress.onChange(function (v) {
          return _this.setAxisTarget(axis, v, v + length);
        });
        return (_a = this.animateMotionValue) === null || _a === void 0
          ? void 0
          : _a.call(this, axis, progress, 0, transition);
      };
      HTMLVisualElement.prototype.stopLayoutAnimation = function () {
        var _this = this;
        eachAxis(function (axis) {
          return _this.getAxisProgress()[axis].stop();
        });
      };
      HTMLVisualElement.prototype.withoutTransform = function (callback) {
        if (this.isLayoutProjectionEnabled) {
          this.resetTransform();
        }
        if (this.parent) {
          this.parent.withoutTransform(callback);
        } else {
          callback();
        }
        if (this.isLayoutProjectionEnabled) {
          this.element.style.transform = this.style.transform;
        }
      };
      /**
       * Update the layout deltas to reflect the relative positions of the layout
       * and the desired target box
       */
      HTMLVisualElement.prototype.updateLayoutDeltas = function () {
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */
        resetBox(this.boxCorrected, this.box);
        var prevTreeScaleX = this.treeScale.x;
        var prevTreeScaleY = this.treeScale.y;
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */
        applyTreeDeltas(this.boxCorrected, this.treeScale, this.treePath);
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */
        updateBoxDelta(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin);
        /**
         * If we have a listener for the viewport box, fire it.
         */
        this.hasViewportBoxUpdated && this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta);
        this.hasViewportBoxUpdated = false;
        /**
         * Ensure this element renders on the next frame if the projection transform has changed.
         */
        var deltaTransform = buildLayoutProjectionTransform(this.delta, this.treeScale);
        if (
          deltaTransform !== this.deltaTransform ||
          // Also compare calculated treeScale, for values that rely on only this for scale correction.
          prevTreeScaleX !== this.treeScale.x ||
          prevTreeScaleY !== this.treeScale.y
        ) {
          this.scheduleRender();
        }
        this.deltaTransform = deltaTransform;
      };
      HTMLVisualElement.prototype.updateTransformDeltas = function () {
        if (!this.isLayoutProjectionEnabled || !this.box) return;
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        applyBoxTransforms(this.targetBoxFinal, this.targetBox, this.latest);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */
        updateBoxDelta(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin);
      };
      /**
       * ========================================
       * Build & render
       * ========================================
       */
      /**
       * Build a style prop using the latest resolved MotionValues
       */
      HTMLVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        if (this.isVisible !== undefined) {
          this.style.visibility = this.isVisible ? 'visible' : 'hidden';
        }
        buildHTMLStyles(
          this.latest,
          this.style,
          this.vars,
          this.transform,
          this.transformOrigin,
          this.transformKeys,
          this.config,
          this.isLayoutProjectionEnabled && !!this.box,
          this.delta,
          this.deltaFinal,
          this.treeScale,
          this.targetBoxFinal
        );
      };
      /**
       * Render the Element by rebuilding and applying the latest styles and vars.
       */
      HTMLVisualElement.prototype.render = function () {
        // Rebuild the latest animated values into style and vars caches.
        this.build();
        // Directly assign style into the Element's style prop. In tests Object.assign is the
        // fastest way to assign styles.
        Object.assign(this.element.style, this.style);
        // Loop over any CSS variables and assign those.
        for (var key in this.vars) {
          this.element.style.setProperty(key, this.vars[key]);
        }
      };
      return HTMLVisualElement;
    })(VisualElement);
    /**
     * Pre-bound version of updateLayoutDelta so we're not creating a new function multiple
     * times per frame.
     */
    var fireUpdateLayoutDelta = function (child) {
      return child.updateLayoutDelta();
    };

    /**
     * Creates a constant value over the lifecycle of a component.
     *
     * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
     * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
     * you can ensure that initialisers don't execute twice or more.
     */
    function useConstant(init) {
      var ref = React.useRef(null);
      if (ref.current === null) {
        ref.current = init();
      }
      return ref.current;
    }

    function calcOrigin$1(origin, offset, size) {
      return typeof origin === 'string' ? origin : styleValueTypes.px.transform(offset + size * origin);
    }
    /**
     * The SVG transform origin defaults are different to CSS and is less intuitive,
     * so we use the measured dimensions of the SVG to reconcile these.
     */
    function calcSVGTransformOrigin(dimensions, originX, originY) {
      var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
      var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
      return pxOriginX + ' ' + pxOriginY;
    }

    // Convert a progress 0-1 to a pixels value based on the provided length
    var progressToPixels = function (progress, length) {
      return styleValueTypes.px.transform(progress * length);
    };
    var dashKeys = {
      offset: 'stroke-dashoffset',
      array: 'stroke-dasharray',
    };
    var camelKeys = {
      offset: 'strokeDashoffset',
      array: 'strokeDasharray',
    };
    /**
     * Build SVG path properties. Uses the path's measured length to convert
     * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
     * and stroke-dasharray attributes.
     *
     * This function is mutative to reduce per-frame GC.
     */
    function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
      if (spacing === void 0) {
        spacing = 1;
      }
      if (offset === void 0) {
        offset = 0;
      }
      if (useDashCase === void 0) {
        useDashCase = true;
      }
      // We use dash case when setting attributes directly to the DOM node and camel case
      // when defining props on a React component.
      var keys = useDashCase ? dashKeys : camelKeys;
      // Build the dash offset
      attrs[keys.offset] = progressToPixels(-offset, totalLength);
      // Build the dash array
      var pathLength = progressToPixels(length, totalLength);
      var pathSpacing = progressToPixels(spacing, totalLength);
      attrs[keys.array] = pathLength + ' ' + pathSpacing;
    }

    var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
    /**
     * Build SVG visual attrbutes, like cx and style.transform
     */
    function buildSVGAttrs(
      _a,
      style,
      vars,
      attrs,
      transform,
      transformOrigin,
      transformKeys,
      config,
      dimensions,
      totalPathLength,
      isLayoutProjectionEnabled,
      delta,
      deltaFinal,
      treeScale,
      targetBox
    ) {
      var attrX = _a.attrX,
        attrY = _a.attrY,
        originX = _a.originX,
        originY = _a.originY,
        pathLength = _a.pathLength,
        _b = _a.pathSpacing,
        pathSpacing = _b === void 0 ? 1 : _b,
        _c = _a.pathOffset,
        pathOffset = _c === void 0 ? 0 : _c,
        // This is object creation, which we try to avoid per-frame.
        latest = tslib.__rest(_a, ['attrX', 'attrY', 'originX', 'originY', 'pathLength', 'pathSpacing', 'pathOffset']);
      /**
       * With SVG we treat all animated values as attributes rather than CSS, so we build into attrs
       */
      buildHTMLStyles(
        latest,
        attrs,
        vars,
        transform,
        transformOrigin,
        transformKeys,
        config,
        isLayoutProjectionEnabled,
        delta,
        deltaFinal,
        treeScale,
        targetBox
      );
      /**
       * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
       * and copy it into style.
       */
      if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
      }
      // Parse transformOrigin
      if (originX !== undefined || originY !== undefined || style.transform) {
        style.transformOrigin = calcSVGTransformOrigin(
          dimensions || unmeasured,
          originX !== undefined ? originX : 0.5,
          originY !== undefined ? originY : 0.5
        );
      }
      // Treat x/y not as shortcuts but as actual attributes
      if (attrX !== undefined) attrs.x = attrX;
      if (attrY !== undefined) attrs.y = attrY;
      // Build SVG path if one has been measured
      if (totalPathLength !== undefined && pathLength !== undefined) {
        buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
      }
      return attrs;
    }

    /**
     * A set of attribute names that are always read/written as camel case.
     */
    var camelCaseAttributes = new Set([
      'baseFrequency',
      'diffuseConstant',
      'kernelMatrix',
      'kernelUnitLength',
      'keySplines',
      'keyTimes',
      'limitingConeAngle',
      'markerHeight',
      'markerWidth',
      'numOctaves',
      'targetX',
      'targetY',
      'surfaceScale',
      'specularConstant',
      'specularExponent',
      'stdDeviation',
      'tableValues',
      'viewBox',
    ]);

    var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
    var REPLACE_TEMPLATE = '$1-$2';
    /**
     * Convert camelCase to dash-case properties.
     */
    var camelToDash = function (str) {
      return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
    };

    /**
     * A VisualElement for SVGElements. Inherits from and extends HTMLVisualElement as the two
     * share data structures.
     */
    var SVGVisualElement = /** @class */ (function (_super) {
      tslib.__extends(SVGVisualElement, _super);
      function SVGVisualElement() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        /**
         * A mutable record of attributes we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.attrs = {};
        /**
         * We disable hardware acceleration for SVG transforms as they're not currently able to be accelerated.
         */
        _this.defaultConfig = {
          enableHardwareAcceleration: false,
        };
        /**
         * Without duplicating this call from HTMLVisualElement we end up with HTMLVisualElement.defaultConfig
         * being assigned to config
         */
        _this.config = _this.defaultConfig;
        return _this;
      }
      /**
       * Measure the SVG element on mount. This can affect page rendering so there might be a
       * better time to perform this - for instance dynamically only if there's a transform-origin dependent
       * transform being set (like rotate)
       */
      SVGVisualElement.prototype.mount = function (element) {
        _super.prototype.mount.call(this, element);
        this.measure();
      };
      /**
       * Update the SVG dimensions and path length
       */
      SVGVisualElement.prototype.measure = function () {
        var _this = this;
        try {
          this.dimensions =
            typeof this.element.getBBox === 'function' ? this.element.getBBox() : this.element.getBoundingClientRect();
        } catch (e) {
          // Most likely trying to measure an unrendered element under Firefox
          this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        if (isPath(this.element)) {
          this.totalPathLength = this.element.getTotalLength();
        }
        /**
         * Ensure we render the element as soon as possible to reflect the measured dimensions.
         * Preferably this would happen synchronously but we put it in rAF to prevent layout thrashing.
         */
        sync__default['default'].render(function () {
          return _this.render();
        });
      };
      SVGVisualElement.prototype.getBaseValue = function (key, props) {
        var prop = props[key];
        return prop !== undefined && !isMotionValue(prop) ? prop : _super.prototype.getBaseValue.call(this, key, props);
      };
      /**
       * Empty the mutable data structures in case attrs have been removed between renders.
       */
      SVGVisualElement.prototype.clean = function () {
        _super.prototype.clean.call(this);
        this.attrs = {};
      };
      /**
       * Read an attribute directly from the SVGElement
       */
      SVGVisualElement.prototype.read = function (key) {
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return this.element.getAttribute(key);
      };
      SVGVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        buildSVGAttrs(
          this.latest,
          this.style,
          this.vars,
          this.attrs,
          this.transform,
          this.transformOrigin,
          this.transformKeys,
          this.config,
          this.dimensions,
          this.totalPathLength,
          this.isLayoutProjectionEnabled && !!this.box,
          this.delta,
          this.deltaFinal,
          this.treeScale,
          this.targetBoxFinal
        );
      };
      SVGVisualElement.prototype.render = function () {
        // Update HTML styles and CSS variables
        _super.prototype.render.call(this);
        // Loop through attributes and apply them to the SVGElement
        for (var key in this.attrs) {
          this.element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, this.attrs[key]);
        }
      };
      return SVGVisualElement;
    })(HTMLVisualElement);
    function isPath(element) {
      return element.tagName === 'path';
    }

    /**
     * @internal
     */
    /**
     * @internal
     */
    var svgElements = [
      'animate',
      'circle',
      'clipPath',
      'defs',
      'desc',
      'ellipse',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feDistantLight',
      'feDropShadow',
      'feFlood',
      'feFuncA',
      'feFuncB',
      'feFuncG',
      'feFuncR',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMergeNode',
      'feMorphology',
      'feOffset',
      'fePointLight',
      'feSpecularLighting',
      'feSpotLight',
      'feTile',
      'feTurbulence',
      'filter',
      'foreignObject',
      'g',
      'image',
      'line',
      'linearGradient',
      'marker',
      'mask',
      'metadata',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'switch',
      'symbol',
      'text',
      'textPath',
      'tspan',
      'use',
      'view',
    ];

    var svgTagNames = new Set(svgElements);
    /**
     * Determine whether this is a HTML or SVG component based on if the provided
     * Component is a string and a recognised SVG tag. A potentially better way to
     * do this would be to offer a `motion.customSVG` function and determine this
     * when we generate the `motion.circle` etc components.
     */
    function isSVGComponent(Component) {
      return typeof Component === 'string' && svgTagNames.has(Component);
    }

    /**
     * @public
     */
    var PresenceContext = React.createContext(null);

    var MotionContext = React.createContext({
      variantContext: {},
    });
    /**
     * @internal
     */
    function useVariantContext() {
      return React.useContext(MotionContext).variantContext;
    }
    function useVisualElementContext() {
      return React.useContext(MotionContext).visualElement;
    }

    /**
     * @internal
     */
    var LayoutGroupContext = React.createContext(null);

    /**
     * DOM-flavoured variation of the useVisualElement hook. Used to create either a HTMLVisualElement
     * or SVGVisualElement for the component.
     *
     */
    var useDomVisualElement = function (Component, props, isStatic, ref) {
      var parent = useVisualElementContext();
      var visualElement = useConstant(function () {
        var DOMVisualElement = isSVGComponent(Component) ? SVGVisualElement : HTMLVisualElement;
        return new DOMVisualElement(parent, ref);
      });
      /**
       * If this is a static component, for instance on the Framer canvas, we essentially want to
       * treat it as a new component every render.
       * TODO: This shouldn't live in a DOM-specific hook but there'll be a better sense of where this
       * and much of this hook should live when creating a new type of VisualElement (e.g Three.js).
       */
      if (isStatic) {
        visualElement.values.clear();
        visualElement.latest = {};
      }
      visualElement.updateConfig(
        tslib.__assign(
          tslib.__assign(tslib.__assign({}, visualElement.config), { enableHardwareAcceleration: !isStatic }),
          props
        )
      );
      var layoutGroupId = React.useContext(LayoutGroupContext);
      visualElement.layoutId = layoutGroupId && props.layoutId ? layoutGroupId + '-' + props.layoutId : props.layoutId;
      var presenceContext = React.useContext(PresenceContext);
      /**
       * Update VisualElement with presence data.
       */
      var isPresent = presenceContext === null ? true : presenceContext.isPresent;
      visualElement.isPresent = props.isPresent !== undefined ? props.isPresent : isPresent;
      /**
       *
       */
      var presenceId = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id;
      visualElement.isPresenceRoot = !parent || parent.presenceId !== presenceId;
      /**
       * TODO: Investigate if we need this
       */
      React.useEffect(
        function () {
          if (props.onViewportBoxUpdate) {
            return visualElement.onViewportBoxUpdate(props.onViewportBoxUpdate);
          }
        },
        [props.onViewportBoxUpdate]
      );
      return visualElement;
    };

    /**
     * @public
     */
    var MotionConfigContext = React.createContext({
      transformPagePoint: function (p) {
        return p;
      },
      features: [],
      isStatic: false,
    });
    /**
     * MotionConfig can be used in combination with the `m` component to cut bundle size
     * and dynamically load only the features you use.
     *
     * ```jsx
     * import {
     *   m as motion,
     *   AnimationFeature,
     *   MotionConfig
     * } from "framer-motion"
     *
     * export function App() {
     *   return (
     *     <MotionConfig features={[AnimationFeature]}>
     *       <motion.div animate={{ x: 100 }} />
     *     </MotionConfig>
     *   )
     * }
     * ```
     *
     * @public
     */
    function MotionConfig(_a) {
      var children = _a.children,
        _b = _a.features,
        features = _b === void 0 ? [] : _b,
        props = tslib.__rest(_a, ['children', 'features']);
      var pluginContext = React.useContext(MotionConfigContext);
      var loadedFeatures = tslib.__spread(pluginContext.features, features);
      // We do want to rerender children when the number of loaded features changes
      var value = React.useMemo(
        function () {
          return { features: loadedFeatures };
        },
        [loadedFeatures.length]
      );
      // Mutative to prevent triggering rerenders in all listening
      // components every time this component renders
      for (var key in props) {
        value[key] = props[key];
      }
      return React.createElement(MotionConfigContext.Provider, { value: value }, children);
    }

    function useUnmountEffect(callback) {
      return React.useEffect(function () {
        return function () {
          return callback();
        };
      }, []);
    }

    function addDomEvent(target, eventName, handler, options) {
      target.addEventListener(eventName, handler, options);
      return function () {
        return target.removeEventListener(eventName, handler, options);
      };
    }
    /**
     * Attaches an event listener directly to the provided DOM element.
     *
     * Bypassing React's event system can be desirable, for instance when attaching non-passive
     * event handlers.
     *
     * ```jsx
     * const ref = useRef(null)
     *
     * useDomEvent(ref, 'wheel', onWheel, { passive: false })
     *
     * return <div ref={ref} />
     * ```
     *
     * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
     * @param eventName - Name of the event you want listen for.
     * @param handler - Function to fire when receiving the event.
     * @param options - Options to pass to `Event.addEventListener`.
     *
     * @public
     */
    function useDomEvent(ref, eventName, handler, options) {
      React.useEffect(
        function () {
          var element = ref.current;
          if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
          }
        },
        [ref, eventName, handler, options]
      );
    }

    function isMouseEvent(event) {
      // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
      if (typeof PointerEvent !== 'undefined' && event instanceof PointerEvent) {
        return !!(event.pointerType === 'mouse');
      }
      return event instanceof MouseEvent;
    }
    function isTouchEvent(event) {
      var hasTouches = !!event.touches;
      return hasTouches;
    }

    /**
     * Filters out events not attached to the primary pointer (currently left mouse button)
     * @param eventHandler
     */
    function filterPrimaryPointer(eventHandler) {
      return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent || (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
          eventHandler(event);
        }
      };
    }
    var defaultPagePoint = { pageX: 0, pageY: 0 };
    function pointFromTouch(e, pointType) {
      if (pointType === void 0) {
        pointType = 'page';
      }
      var primaryTouch = e.touches[0] || e.changedTouches[0];
      var point = primaryTouch || defaultPagePoint;
      return {
        x: point[pointType + 'X'],
        y: point[pointType + 'Y'],
      };
    }
    function pointFromMouse(point, pointType) {
      if (pointType === void 0) {
        pointType = 'page';
      }
      return {
        x: point[pointType + 'X'],
        y: point[pointType + 'Y'],
      };
    }
    function extractEventInfo(event, pointType) {
      if (pointType === void 0) {
        pointType = 'page';
      }
      return {
        point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType),
      };
    }
    function getViewportPointFromEvent(event) {
      return extractEventInfo(event, 'client');
    }
    var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
      if (shouldFilterPrimaryPointer === void 0) {
        shouldFilterPrimaryPointer = false;
      }
      var listener = function (event) {
        return handler(event, extractEventInfo(event));
      };
      return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
    };

    var isBrowser = typeof window !== 'undefined';
    // We check for event support via functions in case they've been mocked by a testing suite.
    var supportsPointerEvents = function () {
      return isBrowser && window.onpointerdown === null;
    };
    var supportsTouchEvents = function () {
      return isBrowser && window.ontouchstart === null;
    };
    var supportsMouseEvents = function () {
      return isBrowser && window.onmousedown === null;
    };

    var mouseEventNames = {
      pointerdown: 'mousedown',
      pointermove: 'mousemove',
      pointerup: 'mouseup',
      pointercancel: 'mousecancel',
      pointerover: 'mouseover',
      pointerout: 'mouseout',
      pointerenter: 'mouseenter',
      pointerleave: 'mouseleave',
    };
    var touchEventNames = {
      pointerdown: 'touchstart',
      pointermove: 'touchmove',
      pointerup: 'touchend',
      pointercancel: 'touchcancel',
    };
    function getPointerEventName(name) {
      if (supportsPointerEvents()) {
        return name;
      } else if (supportsTouchEvents()) {
        return touchEventNames[name];
      } else if (supportsMouseEvents()) {
        return mouseEventNames[name];
      }
      return name;
    }
    function addPointerEvent(target, eventName, handler, options) {
      return addDomEvent(
        target,
        getPointerEventName(eventName),
        wrapHandler(handler, eventName === 'pointerdown'),
        options
      );
    }
    function usePointerEvent(ref, eventName, handler, options) {
      return useDomEvent(
        ref,
        getPointerEventName(eventName),
        handler && wrapHandler(handler, eventName === 'pointerdown'),
        options
      );
    }

    /**
     * Converts seconds to milliseconds
     *
     * @param seconds - Time in seconds.
     * @return milliseconds - Converted time in milliseconds.
     */
    var secondsToMilliseconds = function (seconds) {
      return seconds * 1000;
    };

    /**
     * @internal
     */
    var PanSession = /** @class */ (function () {
      function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
          if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
          var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
          var isPanStarted = _this.startEvent !== null;
          // Only start panning if the offset is larger than 3 pixels. If we make it
          // any larger than this we'll want to reset the pointer history
          // on the first update to avoid visual snapping to the cursoe.
          var isDistancePastThreshold = popmotion.distance(info.offset, { x: 0, y: 0 }) >= 3;
          if (!isPanStarted && !isDistancePastThreshold) return;
          var point = info.point;
          var timestamp = sync.getFrameData().timestamp;
          _this.history.push(tslib.__assign(tslib.__assign({}, point), { timestamp: timestamp }));
          var _a = _this.handlers,
            onStart = _a.onStart,
            onMove = _a.onMove;
          if (!isPanStarted) {
            onStart && onStart(_this.lastMoveEvent, info);
            _this.startEvent = _this.lastMoveEvent;
          }
          onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
          _this.lastMoveEvent = event;
          _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
          // Because Safari doesn't trigger mouseup events when it's above a `<select>`
          if (isMouseEvent(event) && event.buttons === 0) {
            _this.handlePointerUp(event, info);
            return;
          }
          // Throttle mouse move event to once per frame
          sync__default['default'].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
          _this.end();
          var onEnd = _this.handlers.onEnd;
          if (!onEnd) return;
          var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
          onEnd && onEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1) return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = sync.getFrameData().timestamp;
        this.history = [tslib.__assign(tslib.__assign({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = popmotion.pipe(
          addPointerEvent(window, 'pointermove', this.handlePointerMove),
          addPointerEvent(window, 'pointerup', this.handlePointerUp),
          addPointerEvent(window, 'pointercancel', this.handlePointerUp)
        );
      }
      PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
      };
      PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        sync.cancelSync.update(this.updatePoint);
      };
      return PanSession;
    })();
    function transformPoint(info, transformPagePoint) {
      return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
    }
    function subtractPoint(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }
    function getPanInfo(_a, history) {
      var point = _a.point;
      return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
      };
    }
    function startDevicePoint(history) {
      return history[0];
    }
    function lastDevicePoint(history) {
      return history[history.length - 1];
    }
    function getVelocity$1(history, timeDelta) {
      if (history.length < 2) {
        return { x: 0, y: 0 };
      }
      var i = history.length - 1;
      var timestampedPoint = null;
      var lastPoint = lastDevicePoint(history);
      while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
          break;
        }
        i--;
      }
      if (!timestampedPoint) {
        return { x: 0, y: 0 };
      }
      var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
      if (time === 0) {
        return { x: 0, y: 0 };
      }
      var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
      };
      if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
      }
      if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
      }
      return currentVelocity;
    }

    /**
     *
     * @param handlers -
     * @param ref -
     *
     * @internalremarks
     * Currently this sets new pan gesture functions every render. The memo route has been explored
     * in the past but ultimately we're still creating new functions every render. An optimisation
     * to explore is creating the pan gestures and loading them into a `ref`.
     *
     * @internal
     */
    function usePanGesture(_a, ref) {
      var onPan = _a.onPan,
        onPanStart = _a.onPanStart,
        onPanEnd = _a.onPanEnd,
        onPanSessionStart = _a.onPanSessionStart;
      var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
      var panSession = React.useRef(null);
      var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
      var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
          panSession.current = null;
          onPanEnd && onPanEnd(event, info);
        },
      };
      React.useEffect(function () {
        if (panSession.current !== null) {
          panSession.current.updateHandlers(handlers);
        }
      });
      function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
          transformPagePoint: transformPagePoint,
        });
      }
      usePointerEvent(ref, 'pointerdown', hasPanEvents && onPointerDown);
      useUnmountEffect(function () {
        return panSession.current && panSession.current.end();
      });
    }

    /**
     * Recursively traverse up the tree to check whether the provided child node
     * is the parent or a descendant of it.
     *
     * @param parent - Element to find
     * @param child - Element to test against parent
     */
    var isNodeOrChild = function (parent, child) {
      if (!child) {
        return false;
      } else if (parent === child) {
        return true;
      } else {
        return isNodeOrChild(parent, child.parentElement);
      }
    };

    var easingLookup = {
      linear: popmotion.linear,
      easeIn: popmotion.easeIn,
      easeInOut: popmotion.easeInOut,
      easeOut: popmotion.easeOut,
      circIn: popmotion.circIn,
      circInOut: popmotion.circInOut,
      circOut: popmotion.circOut,
      backIn: popmotion.backIn,
      backInOut: popmotion.backInOut,
      backOut: popmotion.backOut,
      anticipate: popmotion.anticipate,
      bounceIn: popmotion.bounceIn,
      bounceInOut: popmotion.bounceInOut,
      bounceOut: popmotion.bounceOut,
    };
    var easingDefinitionToFunction = function (definition) {
      if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        heyListen.invariant(definition.length === 4, 'Cubic bezier arrays must contain four numerical values.');
        var _a = tslib.__read(definition, 4),
          x1 = _a[0],
          y1 = _a[1],
          x2 = _a[2],
          y2 = _a[3];
        return popmotion.cubicBezier(x1, y1, x2, y2);
      } else if (typeof definition === 'string') {
        // Else lookup from table
        heyListen.invariant(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return easingLookup[definition];
      }
      return definition;
    };
    var isEasingArray = function (ease) {
      return Array.isArray(ease) && typeof ease[0] !== 'number';
    };

    /**
     * Check if a value is animatable. Examples:
     *
     * ✅: 100, "100px", "#fff"
     * ❌: "block", "url(2.jpg)"
     * @param value
     *
     * @internal
     */
    var isAnimatable = function (key, value) {
      // If the list of keys tat might be non-animatable grows, replace with Set
      if (key === 'zIndex') return false;
      // If it's a number or a keyframes array, we can animate it. We might at some point
      // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
      // but for now lets leave it like this for performance reasons
      if (typeof value === 'number' || Array.isArray(value)) return true;
      if (
        typeof value === 'string' && // It's animatable if we have a string
        styleValueTypes.complex.test(value) && // And it contains numbers and/or colors
        !value.startsWith('url(') // Unless it starts with "url("
      ) {
        return true;
      }
      return false;
    };

    var underDampedSpring = function () {
      return {
        type: 'spring',
        stiffness: 500,
        damping: 25,
        restDelta: 0.5,
        restSpeed: 10,
      };
    };
    var overDampedSpring = function (to) {
      return {
        type: 'spring',
        stiffness: 550,
        damping: to === 0 ? 100 : 30,
        restDelta: 0.01,
        restSpeed: 10,
      };
    };
    var linearTween = function () {
      return {
        type: 'keyframes',
        ease: 'linear',
        duration: 0.3,
      };
    };
    var keyframes = function (values) {
      return {
        type: 'keyframes',
        duration: 0.8,
        values: values,
      };
    };
    var defaultTransitions = {
      x: underDampedSpring,
      y: underDampedSpring,
      z: underDampedSpring,
      rotate: underDampedSpring,
      rotateX: underDampedSpring,
      rotateY: underDampedSpring,
      rotateZ: underDampedSpring,
      scaleX: overDampedSpring,
      scaleY: overDampedSpring,
      scale: overDampedSpring,
      opacity: linearTween,
      backgroundColor: linearTween,
      color: linearTween,
      default: overDampedSpring,
    };
    var getDefaultTransition = function (valueKey, to) {
      var transitionFactory;
      if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
      } else {
        transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
      }
      return tslib.__assign({ to: to }, transitionFactory(to));
    };

    /**
     * Decide whether a transition is defined on a given Transition.
     * This filters out orchestration options and returns true
     * if any options are left.
     */
    function isTransitionDefined(_a) {
      var when = _a.when,
        delay = _a.delay,
        delayChildren = _a.delayChildren,
        staggerChildren = _a.staggerChildren,
        staggerDirection = _a.staggerDirection,
        repeat = _a.repeat,
        repeatType = _a.repeatType,
        repeatDelay = _a.repeatDelay,
        from = _a.from,
        transition = tslib.__rest(_a, [
          'when',
          'delay',
          'delayChildren',
          'staggerChildren',
          'staggerDirection',
          'repeat',
          'repeatType',
          'repeatDelay',
          'from',
        ]);
      return !!Object.keys(transition).length;
    }
    var legacyRepeatWarning = false;
    /**
     * Convert Framer Motion's Transition type into Popmotion-compatible options.
     */
    function convertTransitionToAnimationOptions(_a) {
      var ease = _a.ease,
        times = _a.times,
        yoyo = _a.yoyo,
        flip = _a.flip,
        loop = _a.loop,
        transition = tslib.__rest(_a, ['ease', 'times', 'yoyo', 'flip', 'loop']);
      var options = tslib.__assign({}, transition);
      if (times) options['offset'] = times;
      /**
       * Convert any existing durations from seconds to milliseconds
       */
      if (transition.duration) options['duration'] = secondsToMilliseconds(transition.duration);
      if (transition.repeatDelay) options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
      /**
       * Map easing names to Popmotion's easing functions
       */
      if (ease) {
        options['ease'] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
      }
      /**
       * Support legacy transition API
       */
      if (transition.type === 'tween') options.type = 'keyframes';
      /**
       * TODO: These options are officially removed from the API.
       */
      if (yoyo || loop || flip) {
        heyListen.warning(
          !legacyRepeatWarning,
          'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'
        );
        legacyRepeatWarning = true;
        if (yoyo) {
          options.repeatType = 'reverse';
        } else if (loop) {
          options.repeatType = 'loop';
        } else if (flip) {
          options.repeatType = 'mirror';
        }
        options.repeat = loop || yoyo || flip || transition.repeat;
      }
      /**
       * TODO: Popmotion 9 has the ability to automatically detect whether to use
       * a keyframes or spring animation, but does so by detecting velocity and other spring options.
       * It'd be good to introduce a similar thing here.
       */
      if (transition.type !== 'spring') options.type = 'keyframes';
      return options;
    }
    /**
     * Get the delay for a value by checking Transition with decreasing specificity.
     */
    function getDelayFromTransition(transition, key) {
      var _a, _b, _c, _d, _e;
      return (_e =
        (_d =
          (_b = (_a = transition[key]) === null || _a === void 0 ? void 0 : _a.delay) !== null && _b !== void 0
            ? _b
            : (_c = transition['default']) === null || _c === void 0
            ? void 0
            : _c.delay) !== null && _d !== void 0
          ? _d
          : transition.delay) !== null && _e !== void 0
        ? _e
        : 0;
    }
    function hydrateKeyframes(options) {
      if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = tslib.__spread(options.to);
        options.to[0] = options.from;
      }
      return options;
    }
    function getPopmotionAnimationOptions(transition, options, key) {
      var _a;
      if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
      }
      hydrateKeyframes(options);
      /**
       * Get a default transition if none is determined to be defined.
       */
      if (!isTransitionDefined(transition)) {
        transition = tslib.__assign(tslib.__assign({}, transition), getDefaultTransition(key, options.to));
      }
      return tslib.__assign(tslib.__assign({}, options), convertTransitionToAnimationOptions(transition));
    }
    /**
     *
     */
    function getAnimation(key, value, target, transition, onComplete) {
      var _a;
      var valueTransition = getValueTransition(transition, key);
      var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
      var isTargetAnimatable = isAnimatable(key, target);
      /**
       * If we're trying to animate from "none", try and get an animatable version
       * of the target. This could be improved to work both ways.
       */
      if (origin === 'none' && isTargetAnimatable && typeof target === 'string') {
        origin = getAnimatableNone(key, target);
      }
      var isOriginAnimatable = isAnimatable(key, origin);
      heyListen.warning(
        isOriginAnimatable === isTargetAnimatable,
        'You are trying to animate ' +
          key +
          ' from "' +
          origin +
          '" to "' +
          target +
          '". ' +
          origin +
          ' is not an animatable value - to enable this animation set ' +
          origin +
          ' to a value animatable to ' +
          target +
          ' via the `style` property.'
      );
      function start() {
        var options = {
          from: origin,
          to: target,
          velocity: value.getVelocity(),
          onComplete: onComplete,
          onUpdate: function (v) {
            return value.set(v);
          },
        };
        return valueTransition.type === 'inertia' || valueTransition.type === 'decay'
          ? popmotion.inertia(tslib.__assign(tslib.__assign({}, options), valueTransition))
          : popmotion.animate(
              tslib.__assign(tslib.__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
                onUpdate: function (v) {
                  var _a;
                  options.onUpdate(v);
                  (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                },
                onComplete: function () {
                  var _a;
                  options.onComplete();
                  (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                },
              })
            );
      }
      function set() {
        var _a;
        value.set(target);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null ||
        _a === void 0
          ? void 0
          : _a.call(valueTransition);
        return { stop: function () {} };
      }
      return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
    }
    function getValueTransition(transition, key) {
      return transition[key] || transition['default'] || transition;
    }
    /**
     * Start animation on a MotionValue. This function is an interface between
     * Framer Motion and Popmotion
     *
     * @internal
     */
    function startAnimation(key, value, target, transition) {
      if (transition === void 0) {
        transition = {};
      }
      return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () {
          return (controls = animation());
        };
        if (delay) {
          delayTimer = setTimeout(start, secondsToMilliseconds(delay));
        } else {
          start();
        }
        return function () {
          clearTimeout(delayTimer);
          controls === null || controls === void 0 ? void 0 : controls.stop();
        };
      });
    }

    /**
     * @internal
     */
    function animateVisualElement(visualElement, definition, options) {
      visualElement.onAnimationStart();
      var animation;
      if (Array.isArray(definition)) {
        var animations = definition.map(function (variant) {
          return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations);
      } else if (typeof definition === 'string') {
        animation = animateVariant(visualElement, definition, options);
      } else {
        // TODO: Remove any and handle TargetResolver
        animation = animateTarget(visualElement, definition, options);
      }
      return animation.then(function () {
        return visualElement.onAnimationComplete();
      });
    }
    function animateVariant(visualElement, variant, options) {
      var _a;
      if (options === void 0) {
        options = {};
      }
      var resolved = resolveVariant(visualElement, variant, options.custom);
      var _b = (resolved || {}).transition,
        transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
      if (options.transitionOverride) {
        transition = options.transitionOverride;
      }
      /**
       * If we have a variant, create a callback that runs it as an animation.
       * Otherwise, we resolve a Promise immediately for a composable no-op.
       */
      var getAnimation = resolved
        ? function () {
            return animateTarget(visualElement, resolved, options);
          }
        : function () {
            return Promise.resolve();
          };
      /**
       * If we have children, create a callback that runs all their animations.
       * Otherwise, we resolve a Promise immediately for a composable no-op.
       */
      var getChildAnimations = ((_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.size)
        ? function (forwardDelay) {
            if (forwardDelay === void 0) {
              forwardDelay = 0;
            }
            var _a = transition.delayChildren,
              delayChildren = _a === void 0 ? 0 : _a,
              staggerChildren = transition.staggerChildren,
              staggerDirection = transition.staggerDirection;
            return animateChildren(
              visualElement,
              variant,
              delayChildren + forwardDelay,
              staggerChildren,
              staggerDirection,
              options
            );
          }
        : function () {
            return Promise.resolve();
          };
      /**
       * If the transition explicitly defines a "when" option, we need to resolve either
       * this animation or all children animations before playing the other.
       */
      var when = transition.when;
      if (when) {
        var _c = tslib.__read(
            when === 'beforeChildren' ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation],
            2
          ),
          first = _c[0],
          last = _c[1];
        return first().then(last);
      } else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
      }
    }
    /**
     * @internal
     */
    function animateTarget(visualElement, definition, _a) {
      var _b;
      var _c = _a === void 0 ? {} : _a,
        _d = _c.delay,
        delay = _d === void 0 ? 0 : _d,
        transitionOverride = _c.transitionOverride,
        type = _c.type;
      var _e = visualElement.makeTargetAnimatable(definition),
        _f = _e.transition,
        transition = _f === void 0 ? visualElement.getDefaultTransition() : _f,
        transitionEnd = _e.transitionEnd,
        target = tslib.__rest(_e, ['transition', 'transitionEnd']);
      if (transitionOverride) transition = transitionOverride;
      var animations = [];
      var protectedValues =
        type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getProtectedKeys(type));
      for (var key in target) {
        var value = visualElement.getValue(key);
        var valueTarget = target[key];
        if (
          !value ||
          valueTarget === undefined ||
          (protectedValues === null || protectedValues === void 0 ? void 0 : protectedValues[key]) !== undefined
        ) {
          continue;
        }
        var animation = startAnimation(key, value, valueTarget, tslib.__assign({ delay: delay }, transition));
        animations.push(animation);
      }
      return Promise.all(animations).then(function () {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    }
    function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
      if (delayChildren === void 0) {
        delayChildren = 0;
      }
      if (staggerChildren === void 0) {
        staggerChildren = 0;
      }
      if (staggerDirection === void 0) {
        staggerDirection = 1;
      }
      var animations = [];
      var maxStaggerDuration = (visualElement.variantChildrenOrder.size - 1) * staggerChildren;
      var generateStaggerDuration =
        staggerDirection === 1
          ? function (i) {
              if (i === void 0) {
                i = 0;
              }
              return i * staggerChildren;
            }
          : function (i) {
              if (i === void 0) {
                i = 0;
              }
              return maxStaggerDuration - i * staggerChildren;
            };
      Array.from(visualElement.variantChildrenOrder).forEach(function (child, i) {
        var animation = animateVariant(
          child,
          variant,
          tslib.__assign(tslib.__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })
        );
        animations.push(animation);
      });
      return Promise.all(animations);
    }
    function stopAnimation(visualElement) {
      visualElement.forEachValue(function (value) {
        return value.stop();
      });
    }

    /**
     * Control animations on one or more components.
     *
     * @public
     */
    var AnimationControls = /** @class */ (function () {
      function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.subscribers = new Set();
      }
      /**
       * Subscribes a component's animation controls to this.
       *
       * @param controls - The controls to subscribe
       * @returns An unsubscribe function.
       *
       * @internal
       */
      AnimationControls.prototype.subscribe = function (visualElement) {
        var _this = this;
        this.subscribers.add(visualElement);
        return function () {
          return _this.subscribers.delete(visualElement);
        };
      };
      /**
       * Starts an animation on all linked components.
       *
       * @remarks
       *
       * ```jsx
       * controls.start("variantLabel")
       * controls.start({
       *   x: 0,
       *   transition: { duration: 1 }
       * })
       * ```
       *
       * @param definition - Properties or variant label to animate to
       * @param transition - Optional `transtion` to apply to a variant
       * @returns - A `Promise` that resolves when all animations have completed.
       *
       * @public
       */
      AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
          var animations_1 = [];
          this.subscribers.forEach(function (visualElement) {
            animations_1.push(
              animateVisualElement(visualElement, definition, {
                transitionOverride: transitionOverride,
              })
            );
          });
          return Promise.all(animations_1);
        } else {
          return new Promise(function (resolve) {
            _this.pendingAnimations.push({
              animation: [definition, transitionOverride],
              resolve: resolve,
            });
          });
        }
      };
      /**
       * Instantly set to a set of properties or a variant.
       *
       * ```jsx
       * // With properties
       * controls.set({ opacity: 0 })
       *
       * // With variants
       * controls.set("hidden")
       * ```
       *
       * @internalremarks
       * We could perform a similar trick to `.start` where this can be called before mount
       * and we maintain a list of of pending actions that get applied on mount. But the
       * expectation of `set` is that it happens synchronously and this would be difficult
       * to do before any children have even attached themselves. It's also poor practise
       * and we should discourage render-synchronous `.start` calls rather than lean into this.
       *
       * @public
       */
      AnimationControls.prototype.set = function (definition) {
        heyListen.invariant(
          this.hasMounted,
          'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
        );
        return this.subscribers.forEach(function (visualElement) {
          setValues(visualElement, definition);
        });
      };
      /**
       * Stops animations on all linked components.
       *
       * ```jsx
       * controls.stop()
       * ```
       *
       * @public
       */
      AnimationControls.prototype.stop = function () {
        this.subscribers.forEach(function (visualElement) {
          stopAnimation(visualElement);
        });
      };
      /**
       * Initialises the animation controls.
       *
       * @internal
       */
      AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
          var animation = _a.animation,
            resolve = _a.resolve;
          _this.start.apply(_this, tslib.__spread(animation)).then(resolve);
        });
      };
      /**
       * Stops all child animations when the host component unmounts.
       *
       * @internal
       */
      AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
      };
      return AnimationControls;
    })();
    /**
     * @internal
     */
    var animationControls = function () {
      return new AnimationControls();
    };

    function shallowCompare(next, prev) {
      if (!Array.isArray(prev)) return false;
      var prevLength = prev.length;
      if (prevLength !== next.length) return false;
      for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i]) return false;
      }
      return true;
    }

    var AnimationType;
    (function (AnimationType) {
      AnimationType['Animate'] = 'animate';
      AnimationType['Hover'] = 'whileHover';
      AnimationType['Tap'] = 'whileTap';
      AnimationType['Drag'] = 'whileDrag';
      AnimationType['Focus'] = 'whileFocus';
      AnimationType['Exit'] = 'exit';
    })(AnimationType || (AnimationType = {}));
    var variantPriorityOrder = [
      AnimationType.Animate,
      AnimationType.Hover,
      AnimationType.Tap,
      AnimationType.Drag,
      AnimationType.Focus,
      AnimationType.Exit,
    ];
    var reversePriorityOrder = tslib.__spread(variantPriorityOrder).reverse();
    var numAnimationTypes = variantPriorityOrder.length;
    function animateList(visualElement) {
      return function (animations) {
        return Promise.all(
          animations.map(function (_a) {
            var animation = _a.animation,
              options = _a.options;
            return animateVisualElement(visualElement, animation, options);
          })
        );
      };
    }
    function createAnimationState(visualElement) {
      var animate = animateList(visualElement);
      var state = createState();
      var isInitialRender = true;
      /**
       * This function will be used to reduce the animation definitions for
       * each active animation type into an object of resolved values for it.
       */
      var buildResolvedTypeValues = function (acc, definition) {
        var resolved = resolveVariant(visualElement, definition);
        if (resolved) {
          var transition = resolved.transition,
            transitionEnd = resolved.transitionEnd,
            target = tslib.__rest(resolved, ['transition', 'transitionEnd']);
          acc = tslib.__assign(tslib.__assign(tslib.__assign({}, acc), target), transitionEnd);
        }
        return acc;
      };
      function getProtectedKeys(type) {
        return state[type].protectedKeys;
      }
      /**
       * This just allows us to inject mocked animation functions
       * @internal
       */
      function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
      }
      var currentProps;
      var currentContext;
      /**
       * When we receive new props, we need to:
       * 1. Create a list of protected keys for each type. This is a directory of
       *    value keys that are currently being "handled" by types of a higher priority
       *    so that whenever an animation is played of a given type, these values are
       *    protected from being animated.
       * 2. Determine if an animation type needs animating.
       * 3. Determine if any values have been removed from a type and figure out
       *    what to animate those to.
       */
      function setProps(props, context, options, changedActiveType) {
        if (context === void 0) {
          context = {};
        }
        /**
         * Keep track of the most recent props and contexts. setActive can pass these
         * straight through rather than requiring external callers to have access to these.
         */
        currentProps = props;
        currentContext = context;
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        var animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        var removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        var encounteredKeys = {};
        // TODO Reconcile with other update config
        if (props.variants) {
          visualElement.updateConfig(
            tslib.__assign(tslib.__assign({}, visualElement.config), { variants: props.variants })
          );
        }
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        var removedVariantIndex = Infinity;
        var _loop_1 = function (i) {
          var type = reversePriorityOrder[i];
          var typeState = state[type];
          var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
          var propIsVariant = isVariantLabel(prop);
          /**
           * If this type has *just* changed isActive status, set activeDelta
           * to that status. Otherwise set to null.
           */
          var activeDelta = type === changedActiveType ? typeState.isActive : null;
          if (activeDelta === false) removedVariantIndex = i;
          /**
           * If this prop is an inherited variant, rather than been set directly on the
           * component itself, we want to make sure we allow the parent to trigger animations.
           */
          var isInherited = prop === context[type] && propIsVariant;
          /**
           *
           */
          if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
            isInherited = false;
          }
          /**
           * Resume from previous snapshot if it's the first render
           */
          if (isInitialRender && type === AnimationType.Animate && visualElement.prevSnapshot) {
            isInitialRender = false;
            typeState.prevResolvedValues = visualElement.prevSnapshot;
          }
          /**
           * Set all encountered keys so far as the protected keys for this type. This will
           * be any key that has been animated or otherwise handled by active, higher-priortiy types.
           */
          typeState.protectedKeys = tslib.__assign({}, encounteredKeys);
          // Check if we can skip analysing this prop early
          if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
            // If we didn't and don't have any defined prop for this animation type
            (!prop && !typeState.prevProp) ||
            // Or if the prop doesn't define an animation
            prop instanceof AnimationControls ||
            typeof prop === 'boolean'
          ) {
            return 'continue';
          }
          /**
           * As we go look through the values defined on this type, if we detect
           * a changed value or a value that was removed in a higher priority, we set
           * this to true and add this prop to the animation list.
           */
          var shouldAnimateType =
            variantsHaveChanged(typeState.prevProp, prop) ||
            // If we're making this variant active, we want to always make it active
            (type === changedActiveType && typeState.isActive && !isInherited && propIsVariant) ||
            // If we removed a higher-priority variant (i is in reverse order)
            (i > removedVariantIndex && propIsVariant);
          /**
           * As animations can be set as variant lists, variants or target objects, we
           * coerce everything to an array if it isn't one already
           */
          var definitionList = Array.isArray(prop) ? prop : [prop];
          /**
           * Build an object of all the resolved values. We'll use this in the subsequent
           * setProps calls to determine whether a value has changed.
           */
          var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
          if (activeDelta === false) resolvedValues = {};
          /**
           * Now we need to loop through all the keys in the prev prop and this prop,
           * and decide:
           * 1. If the value has changed, and needs animating
           * 2. If it has been removed, and needs adding to the removedKeys set
           * 3. If it has been removed in a higher priority type and needs animating
           * 4. If it hasn't been removed in a higher priority but hasn't changed, and
           *    needs adding to the type's protectedKeys list.
           */
          var _a = typeState.prevResolvedValues,
            prevResolvedValues = _a === void 0 ? {} : _a;
          var allKeys = tslib.__assign(tslib.__assign({}, prevResolvedValues), resolvedValues);
          for (var key in allKeys) {
            var next = resolvedValues[key];
            var prev = prevResolvedValues[key];
            // If we've already handled this we can just skip ahead
            if (encounteredKeys.hasOwnProperty(key)) continue;
            if (next !== prev) {
              if (next !== undefined) {
                // If next is defined and doesn't equal prev, it needs animating
                shouldAnimateType = true;
                removedKeys.delete(key);
              } else {
                // If it's undefined, it's been removed.
                removedKeys.add(key);
              }
            } else if (next !== undefined && removedKeys.has(key)) {
              /**
               * If next hasn't changed and it isn't undefined, we want to check if it's
               * been removed by a higher priority
               */
              shouldAnimateType = true;
              removedKeys.delete(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          }
          /**
           * Update the typeState so next time setProps is called we can compare the
           * latest prop and resolvedValues to these.
           */
          typeState.prevProp = prop;
          typeState.prevResolvedValues = resolvedValues;
          /**
           *
           */
          if (typeState.isActive) {
            encounteredKeys = tslib.__assign(tslib.__assign({}, encounteredKeys), resolvedValues);
          }
          /**
           * If this is an inherited prop we want to hard-block animations
           * TODO: Test as this should probably still handle animations triggered
           * by removed values?
           */
          if (shouldAnimateType && !isInherited) {
            animations.push.apply(
              animations,
              tslib.__spread(
                definitionList.map(function (animation) {
                  return {
                    animation: animation,
                    options: tslib.__assign({ type: type }, options),
                  };
                })
              )
            );
          }
        };
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (var i = 0; i < numAnimationTypes; i++) {
          _loop_1(i);
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
          var fallbackAnimation_1 = {};
          removedKeys.forEach(function (key) {
            var fallbackTarget = visualElement.getBaseValue(key, props);
            if (fallbackTarget !== undefined) {
              fallbackAnimation_1[key] = fallbackTarget;
            }
          });
          animations.push({ animation: fallbackAnimation_1 });
        }
        var shouldAnimate = Boolean(animations.length);
        if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
          shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
      }
      /**
       * Change whether a certain animation type is active.
       */
      function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive) return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildrenOrder) === null || _a === void 0
          ? void 0
          : _a.forEach(function (child) {
              var _a;
              return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
            });
        state[type].isActive = isActive;
        return setProps(currentProps, currentContext, options, type);
      }
      return {
        getProtectedKeys: getProtectedKeys,
        setProps: setProps,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
      };
    }
    function variantsHaveChanged(prev, next) {
      if (typeof next === 'string') {
        return next !== prev;
      } else if (isVariantLabels(next)) {
        return !shallowCompare(next, prev);
      }
      return false;
    }
    function createTypeState(isActive) {
      if (isActive === void 0) {
        isActive = false;
      }
      return {
        isActive: isActive,
        protectedKeys: {},
        prevResolvedValues: {},
      };
    }
    function createState() {
      var _a;
      return (
        (_a = {}),
        (_a[AnimationType.Animate] = createTypeState(true)),
        (_a[AnimationType.Hover] = createTypeState()),
        (_a[AnimationType.Tap] = createTypeState()),
        (_a[AnimationType.Drag] = createTypeState()),
        (_a[AnimationType.Focus] = createTypeState()),
        (_a[AnimationType.Exit] = createTypeState()),
        _a
      );
    }

    function createLock(name) {
      var lock = null;
      return function () {
        var openLock = function () {
          lock = null;
        };
        if (lock === null) {
          lock = name;
          return openLock;
        }
        return false;
      };
    }
    var globalHorizontalLock = createLock('dragHorizontal');
    var globalVerticalLock = createLock('dragVertical');
    function getGlobalLock(drag) {
      var lock = false;
      if (drag === 'y') {
        lock = globalVerticalLock();
      } else if (drag === 'x') {
        lock = globalHorizontalLock();
      } else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
          lock = function () {
            openHorizontal_1();
            openVertical_1();
          };
        } else {
          // Release the locks because we don't use them
          if (openHorizontal_1) openHorizontal_1();
          if (openVertical_1) openVertical_1();
        }
      }
      return lock;
    }
    function isDragActive() {
      // Check the gesture lock - if we get it, it means no drag gesture is active
      // and we can safely fire the tap gesture.
      var openGestureLock = getGlobalLock(true);
      if (!openGestureLock) return true;
      openGestureLock();
      return false;
    }

    /**
     * @param handlers -
     * @internal
     */
    function useTapGesture(_a, visualElement) {
      var onTap = _a.onTap,
        onTapStart = _a.onTapStart,
        onTapCancel = _a.onTapCancel,
        whileTap = _a.whileTap;
      var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
      var isPressing = React.useRef(false);
      var cancelPointerEndListeners = React.useRef(null);
      function removePointerEndListener() {
        var _a;
        (_a = cancelPointerEndListeners.current) === null || _a === void 0
          ? void 0
          : _a.call(cancelPointerEndListeners);
        cancelPointerEndListeners.current = null;
      }
      function checkPointerEnd() {
        var _a;
        isPressing.current = false;
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, false);
        return !isDragActive();
      }
      function onPointerUp(event, info) {
        if (!checkPointerEnd()) return;
        /**
         * We only count this as a tap gesture if the event.target is the same
         * as, or a child of, this component's element
         */
        !isNodeOrChild(visualElement.getInstance(), event.target)
          ? onTapCancel === null || onTapCancel === void 0
            ? void 0
            : onTapCancel(event, info)
          : onTap === null || onTap === void 0
          ? void 0
          : onTap(event, info);
      }
      function onPointerCancel(event, info) {
        if (!checkPointerEnd()) return;
        onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
      }
      function onPointerDown(event, info) {
        var _a;
        removePointerEndListener();
        if (isPressing.current) return;
        isPressing.current = true;
        cancelPointerEndListeners.current = popmotion.pipe(
          addPointerEvent(window, 'pointerup', onPointerUp),
          addPointerEvent(window, 'pointercancel', onPointerCancel)
        );
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Tap, true);
      }
      usePointerEvent(visualElement, 'pointerdown', hasPressListeners ? onPointerDown : undefined);
      useUnmountEffect(removePointerEndListener);
    }

    function createHoverEvent(visualElement, isActive, callback) {
      return function (event, info) {
        var _a;
        if (!isMouseEvent(event) || !visualElement.isHoverEventsEnabled) return;
        callback === null || callback === void 0 ? void 0 : callback(event, info);
        (_a = visualElement.animationState) === null || _a === void 0
          ? void 0
          : _a.setActive(AnimationType.Hover, isActive);
      };
    }
    function useHoverGesture(_a, visualElement) {
      var onHoverStart = _a.onHoverStart,
        onHoverEnd = _a.onHoverEnd,
        whileHover = _a.whileHover;
      usePointerEvent(
        visualElement,
        'pointerenter',
        onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : undefined
      );
      usePointerEvent(
        visualElement,
        'pointerleave',
        onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : undefined
      );
    }

    /**
     *
     * @param props
     * @param ref
     * @internal
     */
    function useFocusGesture(_a, visualElement) {
      var whileFocus = _a.whileFocus;
      var onFocus = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0
          ? void 0
          : _a.setActive(AnimationType.Focus, true);
      };
      var onBlur = function () {
        var _a;
        (_a = visualElement.animationState) === null || _a === void 0
          ? void 0
          : _a.setActive(AnimationType.Focus, false);
      };
      useDomEvent(visualElement, 'focus', whileFocus ? onFocus : undefined);
      useDomEvent(visualElement, 'blur', whileFocus ? onBlur : undefined);
    }

    /**
     * Add pan and tap gesture recognition to an element.
     *
     * @param props - Gesture event handlers
     * @param ref - React `ref` containing a DOM `Element`
     * @public
     */
    function useGestures(props, visualElement) {
      usePanGesture(props, visualElement);
      useTapGesture(props, visualElement);
      useHoverGesture(props, visualElement);
      useFocusGesture(props, visualElement);
    }

    var makeRenderlessComponent = function (hook) {
      return function (props) {
        hook(props);
        return null;
      };
    };

    var gestureProps = [
      'onPan',
      'onPanStart',
      'onPanEnd',
      'onPanSessionStart',
      'onTap',
      'onTapStart',
      'onTapCancel',
      'onHoverStart',
      'onHoverEnd',
      'whileFocus',
      'whileTap',
      'whileHover',
    ];
    var GestureComponent = makeRenderlessComponent(function (_a) {
      var visualElement = _a.visualElement,
        props = tslib.__rest(_a, ['visualElement']);
      useGestures(props, visualElement);
    });
    /**
     * @public
     */
    var Gestures = {
      key: 'gestures',
      shouldRender: function (props) {
        return gestureProps.some(function (key) {
          return props.hasOwnProperty(key);
        });
      },
      getComponent: function () {
        return GestureComponent;
      },
    };

    /**
     * A list of all valid MotionProps.
     *
     * @internalremarks
     * This doesn't throw if a `MotionProp` name is missing - it should.
     */
    var validMotionProps = new Set(
      tslib.__spread(
        [
          'initial',
          'animate',
          'exit',
          'style',
          'variants',
          'transition',
          'transformTemplate',
          'transformValues',
          'custom',
          'inherit',
          'layout',
          'layoutId',
          'onLayoutAnimationComplete',
          'onViewportBoxUpdate',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          'drag',
          'dragControls',
          'dragListener',
          'dragConstraints',
          'dragDirectionLock',
          '_dragX',
          '_dragY',
          'dragElastic',
          'dragMomentum',
          'dragPropagation',
          'dragTransition',
          'whileDrag',
        ],
        gestureProps
      )
    );
    /**
     * Check whether a prop name is a valid `MotionProp` key.
     *
     * @param key - Name of the property to check
     * @returns `true` is key is a valid `MotionProp`.
     *
     * @public
     */
    function isValidMotionProp(key) {
      return validMotionProps.has(key);
    }

    var isPropValid = function (key) {
      return !isValidMotionProp(key);
    };
    /**
     * Emotion and Styled Components both allow users to pass through arbitrary props to their components
     * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
     * of these should be passed to the underlying DOM node.
     *
     * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
     * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
     * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
     * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
     *
     * By making it an optionalDependency we can offer this functionality only in the situations where it's
     * actually required.
     */
    try {
      var emotionIsPropValid_1 = __webpack_require__(9495)['default'];
      isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith('on')) {
          return !isValidMotionProp(key);
        } else {
          return emotionIsPropValid_1(key);
        }
      };
    } catch (_a) {
      // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
    }
    function filterProps(props) {
      var domProps = {};
      for (var key in props) {
        if (isPropValid(key)) domProps[key] = props[key];
      }
      return domProps;
    }

    function buildHTMLProps(visualElement, _a) {
      var drag = _a.drag;
      // The `any` isn't ideal but it is the type of createElement props argument
      var htmlProps = {};
      var style = tslib.__assign(
        tslib.__assign(tslib.__assign({}, visualElement.reactStyle), visualElement.style),
        visualElement.vars
      );
      if (!!drag) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = 'none';
        // Disable scrolling on the draggable direction
        style.touchAction = drag === true ? 'none' : 'pan-' + (drag === 'x' ? 'y' : 'x');
      }
      htmlProps.style = style;
      return htmlProps;
    }

    /**
     * Build React props for SVG elements
     */
    function buildSVGProps(visualElement) {
      return tslib.__assign(tslib.__assign({}, visualElement.attrs), {
        style: tslib.__assign({}, visualElement.reactStyle),
      });
    }

    function useRender(Component, props, visualElement) {
      // Only filter props from components we control, ie `motion.div`. If this
      // is a custom component pass along everything provided to it.
      var forwardedProps = typeof Component === 'string' ? filterProps(props) : props;
      /**
       * Every render, empty and rebuild the animated values to be applied to our Element.
       * During animation these data structures are used in a mutable fashion to reduce
       * garbage collection, but between renders we can flush them to remove values
       * that might have been taken out of the provided props.
       */
      visualElement.clean();
      visualElement.build();
      // Generate props to visually render this component
      var visualProps = isSVGComponent(Component) ? buildSVGProps(visualElement) : buildHTMLProps(visualElement, props);
      return React.createElement(
        Component,
        tslib.__assign(tslib.__assign(tslib.__assign({}, forwardedProps), { ref: visualElement.ref }), visualProps)
      );
    }

    function isForcedMotionValue(key, _a) {
      var layout = _a.layout,
        layoutId = _a.layoutId;
      return (
        isTransformProp(key) ||
        isTransformOriginProp(key) ||
        ((layout || layoutId !== undefined) && !!valueScaleCorrection[key])
      );
    }
    /**
     * Scrape props for MotionValues and add/remove them to this component's
     * VisualElement
     */
    function useMotionValues(visualElement, props) {
      var prev = useConstant(empty);
      /**
       * Remove MotionValues that are no longer present
       */
      for (var key in prev) {
        var isForced = isForcedMotionValue(key, props);
        var existsAsProp = props[key] !== undefined;
        var existsAsStyle = props.style && props.style[key] !== undefined;
        var propIsMotionValue = existsAsProp && isMotionValue(props[key]);
        var styleIsMotionValue = existsAsStyle && isMotionValue(props.style[key]);
        var transformRemoved = isForced && !existsAsProp && !existsAsStyle;
        var motionValueRemoved = !isForced && !propIsMotionValue && !styleIsMotionValue;
        if (transformRemoved || motionValueRemoved) {
          visualElement.removeValue(key);
          delete prev[key];
        }
      }
      /**
       * Add incoming MotionValues
       */
      addMotionValues(visualElement, prev, props, false, props);
      if (props.style) addMotionValues(visualElement, prev, props.style, true, props);
      /**
       * Transform custom values if provided a handler, ie size -> width/height
       * Ideally we'd ditch this by removing support for size and other custom values from Framer.
       */
      if (props.transformValues) {
        visualElement.reactStyle = props.transformValues(visualElement.reactStyle);
      }
    }
    /**
     * Add incoming MotionValues
     *
     * TODO: Type the VisualElements properly
     */
    function addMotionValues(visualElement, prev, source, isStyle, props) {
      if (isStyle === void 0) {
        isStyle = false;
      }
      if (isStyle) visualElement.reactStyle = {};
      for (var key in source) {
        var value = source[key];
        var foundMotionValue = false;
        if (isMotionValue(value)) {
          // If this is a MotionValue, add it if it isn't a reserved key
          if (!reservedNames.has(key)) {
            visualElement.addValue(key, value);
            foundMotionValue = true;
          }
        } else if (isForcedMotionValue(key, props)) {
          // If this is a transform prop, always create a MotionValue
          // to ensure we can reconcile them all together.
          if (!visualElement.hasValue(key)) {
            visualElement.addValue(key, motionValue(value));
          } else if (value !== prev[key]) {
            if (isMotionValue(prev[key])) {
              /**
               * If the previous value was a MotionValue, and this value isn't,
               * we want to create a new MotionValue rather than update one that's been removed.
               */
              visualElement.addValue(key, motionValue(value));
            } else {
              /**
               * Otherwise, we just want to ensure the MotionValue is of the latest value.
               */
              var motion = visualElement.getValue(key);
              motion.set(value);
            }
          }
          foundMotionValue = true;
        } else if (isStyle) {
          visualElement.reactStyle[key] = value;
        }
        if (foundMotionValue) prev[key] = value;
      }
    }
    /**
     * These are props we accept as MotionValues but don't want to add
     * to the VisualElement
     */
    var reservedNames = new Set([]);
    var empty = function () {
      return {};
    };

    /**
     * Load features via renderless components based on the provided MotionProps
     */
    function useFeatures(defaultFeatures, isStatic, visualElement, props) {
      var plugins = React.useContext(MotionConfigContext);
      // If this is a static component, or we're rendering on the server, we don't load
      // any feature components
      if (isStatic || typeof window === 'undefined') return null;
      var allFeatures = tslib.__spread(defaultFeatures, plugins.features);
      var numFeatures = allFeatures.length;
      var features = [];
      // Decide which features we should render and add them to the returned array
      for (var i = 0; i < numFeatures; i++) {
        var _a = allFeatures[i],
          shouldRender = _a.shouldRender,
          key = _a.key,
          getComponent = _a.getComponent;
        if (shouldRender(props)) {
          var Component = getComponent(props);
          Component &&
            features.push(
              React.createElement(Component, tslib.__assign({ key: key }, props, { visualElement: visualElement }))
            );
        }
      }
      return features;
    }

    var Presence;
    (function (Presence) {
      Presence[(Presence['Entering'] = 0)] = 'Entering';
      Presence[(Presence['Present'] = 1)] = 'Present';
      Presence[(Presence['Exiting'] = 2)] = 'Exiting';
    })(Presence || (Presence = {}));
    (function (VisibilityAction) {
      VisibilityAction[(VisibilityAction['Hide'] = 0)] = 'Hide';
      VisibilityAction[(VisibilityAction['Show'] = 1)] = 'Show';
    })(exports.zZ || (exports.zZ = {}));

    /**
     * Default handlers for batching VisualElements
     */
    var defaultHandler = {
      measureLayout: function (child) {
        return child.measureLayout();
      },
      layoutReady: function (child) {
        return child.layoutReady();
      },
    };
    /**
     * Sort VisualElements by tree depth, so we process the highest elements first.
     */
    var sortByDepth = function (a, b) {
      return a.depth - b.depth;
    };
    /**
     * Create a batcher to process VisualElements
     */
    function createBatcher() {
      var queue = new Set();
      var add = function (child) {
        return queue.add(child);
      };
      var flush = function (_a) {
        var _b = _a === void 0 ? defaultHandler : _a,
          measureLayout = _b.measureLayout,
          layoutReady = _b.layoutReady,
          parent = _b.parent;
        var order = Array.from(queue).sort(sortByDepth);
        var resetAndMeasure = function () {
          /**
           * Write: Reset any transforms on children elements so we can read their actual layout
           */
          order.forEach(function (child) {
            return child.resetTransform();
          });
          /**
           * Read: Measure the actual layout
           */
          order.forEach(measureLayout);
        };
        parent ? parent.withoutTransform(resetAndMeasure) : resetAndMeasure();
        /**
         * Write: Notify the VisualElements they're ready for further write operations.
         */
        order.forEach(layoutReady);
        /**
         * After all children have started animating, ensure any Entering components are set to Present.
         * If we add deferred animations (set up all animations and then start them in two loops) this
         * could be moved to the start loop. But it needs to happen after all the animations configs
         * are generated in AnimateSharedLayout as this relies on presence data
         */
        order.forEach(function (child) {
          if (child.isPresent) child.presence = Presence.Present;
        });
        queue.clear();
      };
      return { add: add, flush: flush };
    }
    function isSharedLayout(context) {
      return !!context.forceUpdate;
    }
    var SharedLayoutContext = React.createContext(createBatcher());
    /**
     * @internal
     */
    var FramerTreeLayoutContext = React.createContext(createBatcher());

    var isBrowser$1 = typeof window !== 'undefined';
    var useIsomorphicLayoutEffect = isBrowser$1 ? React.useLayoutEffect : React.useEffect;

    function useSnapshotOnUnmount(visualElement) {
      var syncLayout = React.useContext(SharedLayoutContext);
      var framerSyncLayout = React.useContext(FramerTreeLayoutContext);
      useIsomorphicLayoutEffect(function () {
        return function () {
          if (isSharedLayout(syncLayout)) {
            syncLayout.remove(visualElement);
          }
          if (isSharedLayout(framerSyncLayout)) {
            framerSyncLayout.remove(visualElement);
          }
        };
      }, []);
    }

    /**
     * When a component is the child of `AnimatePresence`, it can use `usePresence`
     * to access information about whether it's still present in the React tree.
     *
     * ```jsx
     * import { usePresence } from "framer-motion"
     *
     * export const Component = () => {
     *   const [isPresent, safeToRemove] = usePresence()
     *
     *   useEffect(() => {
     *     !isPresent && setTimeout(safeToRemove, 1000)
     *   }, [isPresent])
     *
     *   return <div />
     * }
     * ```
     *
     * If `isPresent` is `false`, it means that a component has been removed the tree, but
     * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
     *
     * @public
     */
    function usePresence() {
      var context = React.useContext(PresenceContext);
      if (context === null) return [true, null];
      var isPresent = context.isPresent,
        onExitComplete = context.onExitComplete,
        register = context.register;
      // It's safe to call the following hooks conditionally (after an early return) because the context will always
      // either be null or non-null for the lifespan of the component.
      // Replace with useOpaqueId when released in React
      var id = useUniqueId();
      React.useEffect(function () {
        return register(id);
      }, []);
      var safeToRemove = function () {
        return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id);
      };
      return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
    }
    /**
     * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
     * There is no `safeToRemove` function.
     *
     * ```jsx
     * import { useIsPresent } from "framer-motion"
     *
     * export const Component = () => {
     *   const isPresent = useIsPresent()
     *
     *   useEffect(() => {
     *     !isPresent && console.log("I've been removed!")
     *   }, [isPresent])
     *
     *   return <div />
     * }
     * ```
     *
     * @public
     */
    function useIsPresent() {
      return isPresent(React.useContext(PresenceContext));
    }
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    var counter = 0;
    var incrementId = function () {
      return counter++;
    };
    var useUniqueId = function () {
      return useConstant(incrementId);
    };

    /**
     * Use callback either only on the initial render or on all renders. In concurrent mode
     * the "initial" render might run multiple times
     *
     * @param callback - Callback to run
     * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
     *
     * @public
     */
    function useInitialOrEveryRender(callback, isInitialOnly) {
      if (isInitialOnly === void 0) {
        isInitialOnly = false;
      }
      var isInitialRender = React.useRef(true);
      if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
      }
      isInitialRender.current = false;
    }

    function checkShouldInheritVariant(_a) {
      var animate = _a.animate,
        variants = _a.variants,
        inherit = _a.inherit;
      return inherit !== null && inherit !== void 0 ? inherit : !!variants && !animate;
    }

    /**
     * This hook is resonsible for creating the variant-propagation tree
     * relationship between VisualElements.
     */
    function useVariants(visualElement, props, isStatic) {
      var _a, _b, _c;
      var variantContext = useVariantContext();
      var presenceContext = React.useContext(PresenceContext);
      /**
       * We only add this VisualElement to the variant tree *if* we're:
       * 1. Being provided a variants prop
       * 2. Or being used to control variants (ie animate, whileHover etc)
       * 3. Or being passed AnimationControls, which we have to assume may control variants.
       * Otherwise this component should be "invisible" to variant propagation.
       */
      var shouldInheritVariants = checkShouldInheritVariant(props);
      var contextDependencies = [];
      var context = {};
      var isControllingVariants = false;
      if (checkIfControllingVariants(props)) {
        isControllingVariants = true;
        variantContext = {};
      }
      var isVariantNode = isControllingVariants || props.variants;
      /**
       * Loop through each animation prop. Create context dependencies.
       */
      for (var i = 0; i < numVariantProps; i++) {
        var name_1 = variantProps[i];
        var prop = props[name_1];
        var contextProp = variantContext[name_1];
        if (isVariantLabel$1(prop) || prop === false) {
          context[name_1] = prop;
          contextDependencies.push(prop);
        } else {
          if (isVariantLabel$1(contextProp) || contextProp === false) {
            context[name_1] = contextProp;
          }
          contextDependencies.push(null);
        }
        contextDependencies.push(isVariantLabel$1(contextProp) ? contextProp : null);
      }
      var animate = (_a = props.animate) !== null && _a !== void 0 ? _a : context.animate;
      var initial = props.initial;
      if (initial === undefined && (isVariantLabel$1(animate) || context.initial !== false)) {
        initial = context.initial;
      }
      if ((presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false) {
        initial = context.initial = false;
      }
      context.parent = isVariantNode ? visualElement : variantContext.parent;
      useInitialOrEveryRender(function () {
        var initialToSet = initial === false ? animate : initial;
        if (initialToSet && typeof initialToSet !== 'boolean' && !isAnimationControls(initialToSet)) {
          setValues(visualElement, initialToSet);
        }
      }, !isStatic);
      /**
       * We want to update the "base" (or fallback) value on the initial render.
       */
      useInitialOrEveryRender(function () {
        visualElement.forEachValue(function (value, key) {
          visualElement.baseTarget[key] = value.get();
        });
      }, true);
      var nextContext = React.useMemo(function () {
        return context;
      }, contextDependencies);
      /**
       * Subscribe to the parent visualElement if this is a participant in the variant tree
       */
      var remove;
      if (isVariantNode && shouldInheritVariants && !isControllingVariants) {
        remove = (_b = variantContext.parent) === null || _b === void 0 ? void 0 : _b.addVariantChild(visualElement);
        visualElement.inheritsVariants = true;
      }
      /**
       *
       */
      if (
        !isControllingVariants &&
        shouldInheritVariants &&
        ((_c = visualElement.parent) === null || _c === void 0 ? void 0 : _c.isMounted) &&
        initial !== false &&
        animate
      ) {
        visualElement.manuallyAnimateOnMount = true;
      }
      React.useEffect(function () {
        visualElement.isMounted = true;
        return function () {
          visualElement.isMounted = false;
          remove === null || remove === void 0 ? void 0 : remove();
        };
      }, []);
      /**
       * What we want here is to clear the order of variant children in useLayoutEffect
       * then children can re-add themselves in useEffect. This should add them in the intended order
       * for staggerChildren to work correctly.
       */
      useIsomorphicLayoutEffect(function () {
        var _a;
        isPresent(presenceContext) &&
          ((_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.clear());
      });
      React.useEffect(function () {
        var _a;
        isVariantNode &&
          ((_a = variantContext.parent) === null || _a === void 0 ? void 0 : _a.addVariantChildOrder(visualElement));
      });
      return nextContext;
    }
    var variantProps = tslib.__spread(['initial'], variantPriorityOrder);
    var numVariantProps = variantProps.length;
    function isVariantLabel$1(v) {
      return typeof v === 'string' || Array.isArray(v);
    }
    function isAnimationControls(v) {
      return typeof v === 'object' && typeof v.start === 'function';
    }
    function checkIfControllingVariants(props) {
      var _a;
      return (
        typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === 'function' ||
        isVariantLabel$1(props.animate) ||
        isVariantLabel$1(props.whileHover) ||
        isVariantLabel$1(props.whileDrag) ||
        isVariantLabel$1(props.whileTap) ||
        isVariantLabel$1(props.whileFocus) ||
        isVariantLabel$1(props.exit)
      );
    }

    /**
     * Create a `motion` component.
     *
     * This function accepts a Component argument, which can be either a string (ie "div"
     * for `motion.div`), or an actual React component.
     *
     * Alongside this is a config option which provides a way of rendering the provided
     * component "offline", or outside the React render cycle.
     *
     * @internal
     */
    function createMotionComponent(Component, _a) {
      var defaultFeatures = _a.defaultFeatures,
        useVisualElement = _a.useVisualElement,
        useRender = _a.useRender;
      function MotionComponent(props, externalRef) {
        /**
         * If a component is static, we only visually update it as a
         * result of a React re-render, rather than any interactions or animations.
         * If this component or any ancestor is static, we disable hardware acceleration
         * and don't load any additional functionality.
         */
        var isStatic = React.useContext(MotionConfigContext).isStatic;
        /**
         * Create a VisualElement for this component. A VisualElement provides a common
         * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
         * providing a way of rendering to these APIs outside of the React render loop
         * for more performant animations and interactions
         */
        var visualElement = useVisualElement(Component, props, isStatic, externalRef);
        /**
         * Scrape MotionValues from props and add/remove them to/from the VisualElement.
         */
        useMotionValues(visualElement, props);
        /**
         * Add the visualElement as a node in the variant tree.
         */
        var variantContext = useVariants(visualElement, props, isStatic);
        /**
         * Load features as renderless components unless the component isStatic
         */
        var features = useFeatures(defaultFeatures, isStatic, visualElement, props);
        /**
         * Only create a new context value when the sub-contexts change.
         */
        var context = React.useMemo(
          function () {
            return { visualElement: visualElement, variantContext: variantContext };
          },
          [visualElement, variantContext]
        );
        var component = useRender(Component, props, visualElement);
        /**
         * If this component is a child of AnimateSharedLayout, we need to snapshot the component
         * before it's unmounted. This lives here rather than in features/layout/Measure because
         * as a child component its unmount effect runs after this component has been unmounted.
         */
        useSnapshotOnUnmount(visualElement);
        // The mount order and hierarchy is specific to ensure our element ref is hydrated by the time
        // all plugins and features has to execute.
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(MotionContext.Provider, { value: context }, component),
          features
        );
      }
      return React.forwardRef(MotionComponent);
    }

    /**
     * Apply constraints to a point. These constraints are both physical along an
     * axis, and an elastic factor that determines how much to constrain the point
     * by if it does lie outside the defined parameters.
     */
    function applyConstraints(point, _a, elastic) {
      var min = _a.min,
        max = _a.max;
      if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? popmotion.mix(min, point, elastic) : Math.max(point, min);
      } else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? popmotion.mix(max, point, elastic) : Math.min(point, max);
      }
      return point;
    }
    /**
     * Calculates a min projection point based on a pointer, pointer progress
     * within the drag target, and constraints.
     *
     * For instance if an element was 100px width, we were dragging from 0.25
     * along this axis, the pointer is at 200px, and there were no constraints,
     * we would calculate a min projection point of 175px.
     */
    function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
      // Calculate a min point for this axis and apply it to the current pointer
      var min = point - length * progress;
      return constraints ? applyConstraints(min, constraints, elastic) : min;
    }
    /**
     * Calculate constraints in terms of the viewport when defined relatively to the
     * measured axis. This is measured from the nearest edge, so a max constraint of 200
     * on an axis with a max value of 300 would return a constraint of 500 - axis length
     */
    function calcRelativeAxisConstraints(axis, min, max) {
      return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined,
      };
    }
    /**
     * Calculate constraints in terms of the viewport when
     * defined relatively to the measured bounding box.
     */
    function calcRelativeConstraints(layoutBox, _a) {
      var top = _a.top,
        left = _a.left,
        bottom = _a.bottom,
        right = _a.right;
      return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
      };
    }
    /**
     * Calculate viewport constraints when defined as another viewport-relative axis
     */
    function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
      var _a;
      var min = constraintsAxis.min - layoutAxis.min;
      var max = constraintsAxis.max - layoutAxis.max;
      // If the constraints axis is actually smaller than the layout axis then we can
      // flip the constraints
      if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
        (_a = tslib.__read([max, min], 2)), (min = _a[0]), (max = _a[1]);
      }
      return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
      };
    }
    /**
     * Calculate viewport constraints when defined as another viewport-relative box
     */
    function calcViewportConstraints(layoutBox, constraintsBox) {
      return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
      };
    }
    /**
     * Calculate the an axis position based on two axes and a progress value.
     */
    function calcPositionFromProgress(axis, constraints, progress) {
      var axisLength = axis.max - axis.min;
      var min = popmotion.mix(constraints.min, constraints.max - axisLength, progress);
      return { min: min, max: min + axisLength };
    }
    /**
     * Rebase the calculated viewport constraints relative to the layout.min point.
     */
    function rebaseAxisConstraints(layout, constraints) {
      var relativeConstraints = {};
      if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
      }
      if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
      }
      return relativeConstraints;
    }

    var elementDragControls = new WeakMap();
    /**
     *
     */
    var lastPointerEvent;
    var VisualElementDragControls = /** @class */ (function () {
      function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
          x: 0.5,
          y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
      }
      /**
       * Instantiate a PanSession for the drag gesture
       *
       * @public
       */
      VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a,
          _c = _b.snapToCursor,
          snapToCursor = _c === void 0 ? false : _c,
          cursorProgress = _b.cursorProgress;
        /**
         * If this drag session has been manually triggered by the user, it might be from an event
         * outside the draggable element. If snapToCursor is set to true, we need to measure the position
         * of the element and snap it to the cursor.
         */
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
          // Stop any animations on both axis values immediately. This allows the user to throw and catch
          // the component.
          _this.stopMotion();
        };
        var onStart = function (event, info) {
          var _a, _b, _c;
          // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
          var _d = _this.props,
            drag = _d.drag,
            dragPropagation = _d.dragPropagation;
          if (drag && !dragPropagation) {
            if (_this.openGlobalLock) _this.openGlobalLock();
            _this.openGlobalLock = getGlobalLock(drag);
            // If we don 't have the lock, don't start dragging
            if (!_this.openGlobalLock) return;
          }
          /**
           * Record the progress of the mouse within the draggable element on each axis.
           * onPan, we're going to use this to calculate a new bounding box for the element to
           * project into. This will ensure that even if the DOM element moves via a relayout, it'll
           * stick to the correct place under the pointer.
           */
          _this.prepareBoundingBox();
          _this.visualElement.lockTargetBox();
          /**
           * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
           * relative to the element's layout, or a ref to another element. Both need converting to
           * viewport coordinates.
           */
          _this.resolveDragConstraints();
          /**
           * When dragging starts, we want to find where the cursor is relative to the bounding box
           * of the element. Every frame, we calculate a new bounding box using this relative position
           * and let the visualElement renderer figure out how to reproject the element into this bounding
           * box.
           *
           * By doing it this way, rather than applying an x/y transform directly to the element,
           * we can ensure the component always visually sticks to the cursor as we'd expect, even
           * if the DOM element itself changes layout as a result of React updates the user might
           * make based on the drag position.
           */
          var point = getViewportPointFromEvent(event).point;
          eachAxis(function (axis) {
            var _a = _this.visualElement.targetBox[axis],
              min = _a.min,
              max = _a.max;
            _this.cursorProgress[axis] = cursorProgress
              ? cursorProgress[axis]
              : popmotion.progress(min, max, point[axis]);
            /**
             * If we have external drag MotionValues, record their origin point. On pointermove
             * we'll apply the pan gesture offset directly to this value.
             */
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
              _this.originPoint[axis] = axisValue.get();
            }
          });
          // Set current drag status
          _this.isDragging = true;
          _this.currentDirection = null;
          // Fire onDragStart event
          (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
          (_c = _this.visualElement.animationState) === null || _c === void 0
            ? void 0
            : _c.setActive(AnimationType.Drag, true);
        };
        var onMove = function (event, info) {
          var _a, _b, _c, _d;
          var _e = _this.props,
            dragPropagation = _e.dragPropagation,
            dragDirectionLock = _e.dragDirectionLock;
          // If we didn't successfully receive the gesture lock, early return.
          if (!dragPropagation && !_this.openGlobalLock) return;
          var offset = info.offset;
          // Attempt to detect drag direction if directionLock is true
          if (dragDirectionLock && _this.currentDirection === null) {
            _this.currentDirection = getCurrentDirection(offset);
            // If we've successfully set a direction, notify listener
            if (_this.currentDirection !== null) {
              (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0
                ? void 0
                : _b.call(_a, _this.currentDirection);
            }
            return;
          }
          // Update each point with the latest position
          _this.updateAxis('x', event, offset);
          _this.updateAxis('y', event, offset);
          // Fire onDrag event
          (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
          // Update the last pointer event
          lastPointerEvent = event;
        };
        var onEnd = function (event, info) {
          return _this.stop(event, info);
        };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(
          originEvent,
          {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
          },
          { transformPagePoint: transformPagePoint }
        );
      };
      /**
       * Ensure the component's layout and target bounding boxes are up-to-date.
       */
      VisualElementDragControls.prototype.prepareBoundingBox = function () {
        var visualElement = this.visualElement;
        visualElement.withoutTransform(function () {
          visualElement.measureLayout();
        });
        visualElement.rebaseTargetBox(true, visualElement.getBoundingBoxWithoutTransforms());
      };
      VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var dragConstraints = this.props.dragConstraints;
        if (dragConstraints) {
          this.constraints = isRefObject(dragConstraints)
            ? this.resolveRefConstraints(this.visualElement.box, dragConstraints)
            : calcRelativeConstraints(this.visualElement.box, dragConstraints);
        } else {
          this.constraints = false;
        }
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
          eachAxis(function (axis) {
            if (_this.getAxisMotionValue(axis)) {
              _this.constraints[axis] = rebaseAxisConstraints(_this.visualElement.box[axis], _this.constraints[axis]);
            }
          });
        }
      };
      VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props,
          onMeasureDragConstraints = _a.onMeasureDragConstraints,
          transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        heyListen.invariant(
          constraintsElement !== null,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
        );
        this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
        var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
          var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
          this.hasMutatedConstraints = !!userConstraints;
          if (userConstraints) {
            measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
          }
        }
        return measuredConstraints;
      };
      VisualElementDragControls.prototype.cancelDrag = function () {
        var _a;
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
          this.openGlobalLock();
          this.openGlobalLock = null;
        }
        (_a = this.visualElement.animationState) === null || _a === void 0
          ? void 0
          : _a.setActive(AnimationType.Drag, false);
      };
      VisualElementDragControls.prototype.stop = function (event, info) {
        var _a;
        this.visualElement.unlockTargetBox();
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging) return;
        var _b = this.props,
          dragMomentum = _b.dragMomentum,
          dragElastic = _b.dragElastic,
          onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
          var velocity = info.velocity;
          this.animateDragEnd(velocity);
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
      };
      VisualElementDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        this.prepareBoundingBox();
        eachAxis(function (axis) {
          var drag = _this.props.drag;
          // If we're not dragging this axis, do an early return.
          if (!shouldDrag(axis, drag, _this.currentDirection)) return;
          var axisValue = _this.getAxisMotionValue(axis);
          if (axisValue) {
            var point = getViewportPointFromEvent(event).point;
            var box = _this.visualElement.box;
            var length_1 = box[axis].max - box[axis].min;
            var center = box[axis].min + length_1 / 2;
            var offset = point[axis] - center;
            _this.originPoint[axis] = point[axis];
            axisValue.set(offset);
          } else {
            _this.cursorProgress[axis] = 0.5;
            _this.updateVisualElementAxis(axis, event);
          }
        });
      };
      /**
       * Update the specified axis with the latest pointer information.
       */
      VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection)) return;
        return this.getAxisMotionValue(axis)
          ? this.updateAxisMotionValue(axis, offset)
          : this.updateVisualElementAxis(axis, event);
      };
      VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue) return;
        var dragElastic = this.props.dragElastic;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints ? applyConstraints(nextValue, this.constraints[axis], dragElastic) : nextValue;
        axisValue.set(update);
      };
      VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
        var _a;
        var dragElastic = this.props.dragElastic;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.box[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        var point = getViewportPointFromEvent(event).point;
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = calcConstrainedMinPoint(
          point[axis],
          axisLength,
          axisProgress,
          (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis],
          dragElastic
        );
        // Update the axis viewport target with this new min and the length
        this.visualElement.setAxisTarget(axis, min, min + axisLength);
      };
      VisualElementDragControls.prototype.updateProps = function (_a) {
        var _b = _a.drag,
          drag = _b === void 0 ? false : _b,
          _c = _a.dragDirectionLock,
          dragDirectionLock = _c === void 0 ? false : _c,
          _d = _a.dragPropagation,
          dragPropagation = _d === void 0 ? false : _d,
          _e = _a.dragConstraints,
          dragConstraints = _e === void 0 ? false : _e,
          _f = _a.dragElastic,
          dragElastic = _f === void 0 ? 0.35 : _f,
          _g = _a.dragMomentum,
          dragMomentum = _g === void 0 ? true : _g,
          remainingProps = tslib.__rest(_a, [
            'drag',
            'dragDirectionLock',
            'dragPropagation',
            'dragConstraints',
            'dragElastic',
            'dragMomentum',
          ]);
        this.props = tslib.__assign(
          {
            drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum,
          },
          remainingProps
        );
      };
      /**
       * Drag works differently depending on which props are provided.
       *
       * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
       * - If the component will perform layout animations, we output the gesture to the component's
       *      visual bounding box
       * - Otherwise, we apply the delta to the x/y motion values.
       */
      VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props,
          layout = _a.layout,
          layoutId = _a.layoutId;
        var dragKey = '_drag' + axis.toUpperCase();
        if (this.props[dragKey]) {
          return this.props[dragKey];
        } else if (!layout && layoutId === undefined) {
          return this.visualElement.getValue(axis, 0);
        }
      };
      VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props,
          drag = _a.drag,
          dragMomentum = _a.dragMomentum,
          dragElastic = _a.dragElastic,
          dragTransition = _a.dragTransition;
        var momentumAnimations = eachAxis(function (axis) {
          if (!shouldDrag(axis, drag, _this.currentDirection)) {
            return;
          }
          var transition = _this.constraints ? _this.constraints[axis] : {};
          /**
           * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
           * of spring animations so we should look into adding a disable spring option to `inertia`.
           * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
           * using the value of `dragElastic`.
           */
          var bounceStiffness = dragElastic ? 200 : 1000000;
          var bounceDamping = dragElastic ? 40 : 10000000;
          var inertia = tslib.__assign(
            tslib.__assign(
              {
                type: 'inertia',
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
              },
              dragTransition
            ),
            transition
          );
          // If we're not animating on an externally-provided `MotionValue` we can use the
          // component's animation controls which will handle interactions with whileHover (etc),
          // otherwise we just have to animate the `MotionValue` itself.
          return _this.getAxisMotionValue(axis)
            ? _this.startAxisValueAnimation(axis, inertia)
            : _this.visualElement.startLayoutAxisAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
          var _a, _b;
          (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      };
      VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        eachAxis(function (axis) {
          var axisValue = _this.getAxisMotionValue(axis);
          axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
        });
      };
      VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue) return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return startAnimation(axis, axisValue, 0, transition);
      };
      VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props,
          drag = _a.drag,
          dragConstraints = _a.dragConstraints;
        if (!isRefObject(dragConstraints) || !this.constraintsBox) return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        eachAxis(function (axis) {
          boxProgress[axis] = calcOrigin(_this.visualElement.targetBox[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.prepareBoundingBox();
        this.resolveDragConstraints();
        eachAxis(function (axis) {
          if (!shouldDrag(axis, drag, null)) return;
          // Calculate the position of the targetBox relative to the constraintsBox using the
          // previously calculated progress
          var _a = calcPositionFromProgress(
              _this.visualElement.targetBox[axis],
              _this.constraintsBox[axis],
              boxProgress[axis]
            ),
            min = _a.min,
            max = _a.max;
          _this.visualElement.setAxisTarget(axis, min, max);
        });
      };
      VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = addPointerEvent(element, 'pointerdown', function (event) {
          var _a = _this.props,
            drag = _a.drag,
            _b = _a.dragListener,
            dragListener = _b === void 0 ? true : _b;
          drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = addDomEvent(window, 'resize', function () {
          _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
          if (_this.isDragging) _this.resolveDragConstraints();
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevSnapshot = visualElement.prevSnapshot;
        (prevSnapshot === null || prevSnapshot === void 0 ? void 0 : prevSnapshot.isDragging) &&
          this.start(lastPointerEvent, {
            cursorProgress: prevSnapshot.cursorProgress,
          });
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
          stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
          stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
          stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0
            ? void 0
            : stopLayoutUpdateListener();
          _this.cancelDrag();
        };
      };
      return VisualElementDragControls;
    })();
    function shouldDrag(direction, drag, currentDirection) {
      return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
    }
    /**
     * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
     * than the provided threshold, return `null`.
     *
     * @param offset - The x/y offset from origin.
     * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
     */
    function getCurrentDirection(offset, lockThreshold) {
      if (lockThreshold === void 0) {
        lockThreshold = 10;
      }
      var direction = null;
      if (Math.abs(offset.y) > lockThreshold) {
        direction = 'y';
      } else if (Math.abs(offset.x) > lockThreshold) {
        direction = 'x';
      }
      return direction;
    }

    /**
     * A hook that allows an element to be dragged.
     *
     * @internal
     */
    function useDrag(props, visualElement) {
      var groupDragControls = props.dragControls;
      var transformPagePoint = React.useContext(MotionConfigContext).transformPagePoint;
      var dragControls = useConstant(function () {
        return new VisualElementDragControls({
          visualElement: visualElement,
        });
      });
      dragControls.updateProps(tslib.__assign(tslib.__assign({}, props), { transformPagePoint: transformPagePoint }));
      // If we've been provided a DragControls for manual control over the drag gesture,
      // subscribe this component to it on mount.
      React.useEffect(
        function () {
          return groupDragControls && groupDragControls.subscribe(dragControls);
        },
        [dragControls]
      );
      // Mount the drag controls with the visualElement
      React.useEffect(function () {
        return dragControls.mount(visualElement);
      }, []);
    }

    var Component = makeRenderlessComponent(function (_a) {
      var visualElement = _a.visualElement,
        props = tslib.__rest(_a, ['visualElement']);
      return useDrag(props, visualElement);
    });
    /**
     * @public
     */
    var Drag = {
      key: 'drag',
      shouldRender: function (props) {
        return !!props.drag || !!props.dragControls;
      },
      getComponent: function () {
        return Component;
      },
    };

    /**
     * TODO: This component is quite small and no longer directly imports animation code.
     * It could be a candidate for folding back into the main `motion` component.
     */
    var ExitComponent = makeRenderlessComponent(function (props) {
      var custom = props.custom,
        visualElement = props.visualElement;
      var _a = tslib.__read(usePresence(), 2),
        isPresent = _a[0],
        onExitComplete = _a[1];
      var presenceContext = React.useContext(PresenceContext);
      React.useEffect(
        function () {
          var _a, _b;
          var animation =
            (_a = visualElement.animationState) === null || _a === void 0
              ? void 0
              : _a.setActive(AnimationType.Exit, !isPresent, {
                  custom:
                    (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !==
                      null && _b !== void 0
                      ? _b
                      : custom,
                });
          !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
        },
        [isPresent]
      );
    });
    /**
     * @public
     */
    var Exit = {
      key: 'exit',
      shouldRender: function (props) {
        return !!props.exit && !checkShouldInheritVariant(props);
      },
      getComponent: function () {
        return ExitComponent;
      },
    };

    /**
     * `useAnimationGroupSubscription` allows a component to subscribe to an
     * externally-created `AnimationControls`, created by the `useAnimation` hook.
     *
     * @param animation
     * @param controls
     *
     * @internal
     */
    function useAnimationGroupSubscription(visualElement, animation) {
      var unsubscribe = React.useMemo(
        function () {
          return animation.subscribe(visualElement);
        },
        [animation]
      );
      useUnmountEffect(function () {
        return unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe();
      });
    }

    var AnimationState = makeRenderlessComponent(function (props) {
      var visualElement = props.visualElement,
        animate = props.animate;
      /**
       * We dynamically generate the AnimationState manager as it contains a reference
       * to the underlying animation library. We only want to load that if we load this,
       * so people can optionally code split it out using the `m` component.
       */
      visualElement.animationState || (visualElement.animationState = createAnimationState(visualElement));
      var variantContext = useVariantContext();
      /**
       * Every render, we want to update the AnimationState with the latest props
       * and context. We could add these to the dependency list but as many of these
       * props can be objects or arrays it's not clear that we'd gain much performance.
       */
      React.useEffect(function () {
        visualElement.animationState.setProps(props, visualElement.inheritsVariants ? variantContext : undefined);
      });
      /**
       * Subscribe any provided AnimationControls to the component's VisualElement
       */
      if (animate instanceof AnimationControls) {
        useAnimationGroupSubscription(visualElement, animate);
      }
    });
    /**
     * @public
     */
    var Animation = {
      key: 'animation',
      shouldRender: function () {
        return true;
      },
      getComponent: function (_a) {
        var animate = _a.animate,
          whileHover = _a.whileHover,
          whileFocus = _a.whileFocus,
          whileTap = _a.whileTap,
          whileDrag = _a.whileDrag,
          exit = _a.exit,
          variants = _a.variants;
        return animate || whileHover || whileFocus || whileTap || whileDrag || exit || variants
          ? AnimationState
          : undefined;
      },
    };

    function tweenAxis(target, prev, next, p) {
      target.min = popmotion.mix(prev.min, next.min, p);
      target.max = popmotion.mix(prev.max, next.max, p);
    }

    var progressTarget = 1000;
    var Animate = /** @class */ (function (_super) {
      tslib.__extends(Animate, _super);
      function Animate() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.frameTarget = {
          x: { min: 0, max: 0 },
          y: { min: 0, max: 0 },
        };
        _this.stopAxisAnimation = {
          x: undefined,
          y: undefined,
        };
        _this.animate = function (target, origin, _a) {
          if (_a === void 0) {
            _a = {};
          }
          var originBox = _a.originBox,
            targetBox = _a.targetBox,
            visibilityAction = _a.visibilityAction,
            shouldStackAnimate = _a.shouldStackAnimate,
            config = tslib.__rest(_a, ['originBox', 'targetBox', 'visibilityAction', 'shouldStackAnimate']);
          var _b = _this.props,
            visualElement = _b.visualElement,
            layout = _b.layout;
          /**
           * Early return if we've been instructed not to animate this render.
           */
          if (shouldStackAnimate === false) return _this.safeToRemove();
          /**
           * Allow the measured origin (prev bounding box) and target (actual layout) to be
           * overridden by the provided config.
           */
          origin = originBox || origin;
          target = targetBox || target;
          var boxHasMoved = hasMoved(origin, target);
          var animations = eachAxis(function (axis) {
            /**
             * If layout is set to "position", we can resize the origin box based on the target
             * box and only animate its position.
             */
            if (layout === 'position') {
              var targetLength = target[axis].max - target[axis].min;
              origin[axis].max = origin[axis].min + targetLength;
            }
            if (visualElement.isTargetBoxLocked) {
              return;
            } else if (visibilityAction !== undefined) {
              // If we're meant to show/hide the visualElement, do so
              visibilityAction === exports.zZ.Hide ? visualElement.hide() : visualElement.show();
            } else if (boxHasMoved) {
              // If the box has moved, animate between it's current visual state and its
              // final state
              return _this.animateAxis(axis, target[axis], origin[axis], config);
            } else {
              // If the box has remained in the same place, immediately set the axis target
              // to the final desired state
              return visualElement.setAxisTarget(axis, target[axis].min, target[axis].max);
            }
          });
          // Force a render to ensure there's no flash of uncorrected bounding box.
          visualElement.render();
          /**
           * If this visualElement isn't present (ie it's been removed from the tree by the user but
           * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
           * have successfully finished.
           */
          return Promise.all(animations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onLayoutAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (visualElement.isPresent) {
              visualElement.presence = Presence.Present;
            } else {
              _this.safeToRemove();
            }
          });
        };
        return _this;
      }
      Animate.prototype.componentDidMount = function () {
        var _this = this;
        var visualElement = this.props.visualElement;
        visualElement.animateMotionValue = startAnimation;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
        visualElement.updateConfig(
          tslib.__assign(tslib.__assign({}, visualElement.config), {
            safeToRemove: function () {
              return _this.safeToRemove();
            },
          })
        );
      };
      Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        eachAxis(function (axis) {
          var _a, _b;
          return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      };
      /**
       * TODO: This manually performs animations on the visualElement's layout progress
       * values. It'd be preferable to amend the HTMLVisualElement.startLayoutAxisAnimation
       * API to accept more custom animations like this.
       */
      Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a,
          transition = _d.transition,
          crossfadeOpacity = _d.crossfadeOpacity;
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.getAxisProgress()[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * If this is a crossfade animation, create a function that updates both the opacity of this component
         * and the one being crossfaded out.
         */
        var crossfade;
        if (crossfadeOpacity) {
          crossfade = this.createCrossfadeAnimation(crossfadeOpacity);
          visualElement.show();
        }
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
          // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
          var p = layoutProgress.get() / progressTarget;
          // Tween the axis and update the visualElement with the latest values
          tweenAxis(frameTarget, origin, target, p);
          visualElement.setAxisTarget(axis, frameTarget.min, frameTarget.max);
          // If this is a crossfade animation, update both elements.
          crossfade === null || crossfade === void 0 ? void 0 : crossfade(p);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Ensure that the layout delta is updated for this frame.
        visualElement.updateLayoutDelta();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        // Start the animation on this axis
        var animation = startAnimation(
          axis === 'x' ? 'layoutX' : 'layoutY',
          layoutProgress,
          progressTarget,
          transition || this.props.transition || defaultTransition
        ).then(unsubscribeProgress);
        this.stopAxisAnimation[axis] = function () {
          layoutProgress.stop();
          unsubscribeProgress();
        };
        return animation;
      };
      Animate.prototype.createCrossfadeAnimation = function (crossfadeOpacity) {
        var visualElement = this.props.visualElement;
        var opacity = visualElement.getValue('opacity', 0);
        return function (p) {
          opacity.set(easeCrossfadeIn(popmotion.mix(0, 1, p)));
          crossfadeOpacity.set(easeCrossfadeOut(popmotion.mix(1, 0, p)));
        };
      };
      Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      Animate.prototype.render = function () {
        return null;
      };
      return Animate;
    })(React.Component);
    function AnimateLayoutContextProvider(props) {
      var _a = tslib.__read(usePresence(), 2),
        safeToRemove = _a[1];
      return React.createElement(Animate, tslib.__assign({}, props, { safeToRemove: safeToRemove }));
    }
    function hasMoved(a, b) {
      return !isZeroBox(a) && !isZeroBox(b) && (!axisIsEqual(a.x, b.x) || !axisIsEqual(a.y, b.y));
    }
    var zeroAxis = { min: 0, max: 0 };
    function isZeroBox(a) {
      return axisIsEqual(a.x, zeroAxis) && axisIsEqual(a.y, zeroAxis);
    }
    function axisIsEqual(a, b) {
      return a.min === b.min && a.max === b.max;
    }
    var defaultTransition = {
      duration: 0.45,
      ease: [0.4, 0, 0.1, 1],
    };
    function compress(min, max, easing) {
      return function (p) {
        // Could replace ifs with clamp
        if (p < min) return 0;
        if (p > max) return 1;
        return easing(popmotion.progress(min, max, p));
      };
    }
    var easeCrossfadeIn = compress(0, 0.5, popmotion.circOut);
    var easeCrossfadeOut = compress(0.5, 0.95, popmotion.linear);
    /**
     * @public
     */
    var AnimateLayout = {
      key: 'animate-layout',
      shouldRender: function (props) {
        return !!props.layout || !!props.layoutId;
      },
      getComponent: function () {
        return AnimateLayoutContextProvider;
      },
    };

    /**
     * This component is responsible for scheduling the measuring of the motion component
     */
    var Measure = /** @class */ (function (_super) {
      tslib.__extends(Measure, _super);
      function Measure() {
        return (_super !== null && _super.apply(this, arguments)) || this;
      }
      /**
       * If this is a child of a SyncContext, register the VisualElement with it on mount.
       */
      Measure.prototype.componentDidMount = function () {
        var _a = this.props,
          syncLayout = _a.syncLayout,
          framerSyncLayout = _a.framerSyncLayout,
          visualElement = _a.visualElement;
        isSharedLayout(syncLayout) && syncLayout.register(visualElement);
        isSharedLayout(framerSyncLayout) && framerSyncLayout.register(visualElement);
      };
      /**
       * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
       * handle the snapshotting.
       *
       * If it is stand-alone component, add it to the batcher.
       */
      Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props,
          syncLayout = _a.syncLayout,
          visualElement = _a.visualElement;
        if (isSharedLayout(syncLayout)) {
          syncLayout.syncUpdate();
        } else {
          visualElement.snapshotBoundingBox();
          syncLayout.add(visualElement);
        }
        return null;
      };
      Measure.prototype.componentDidUpdate = function () {
        var _a = this.props,
          syncLayout = _a.syncLayout,
          visualElement = _a.visualElement;
        if (!isSharedLayout(syncLayout)) syncLayout.flush();
        /**
         * If this axis isn't animating as a result of this render we want to reset the targetBox
         * to the measured box
         */
        visualElement.rebaseTargetBox();
      };
      Measure.prototype.render = function () {
        return null;
      };
      return Measure;
    })(React__default['default'].Component);
    function MeasureContextProvider(props) {
      var syncLayout = React.useContext(SharedLayoutContext);
      var framerSyncLayout = React.useContext(FramerTreeLayoutContext);
      return React__default['default'].createElement(
        Measure,
        tslib.__assign({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })
      );
    }
    var MeasureLayout = {
      key: 'measure-layout',
      shouldRender: function (props) {
        return !!props.drag || !!props.layout || !!props.layoutId;
      },
      getComponent: function () {
        return MeasureContextProvider;
      },
    };

    var allMotionFeatures = [MeasureLayout, Animation, Drag, Gestures, Exit, AnimateLayout];
    var domBaseConfig = {
      useVisualElement: useDomVisualElement,
      useRender: useRender,
    };
    /**
     * Convert any React component into a `motion` component. The provided component
     * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
     *
     * ```jsx
     * const Component = React.forwardRef((props, ref) => {
     *   return <div ref={ref} />
     * })
     *
     * const MotionComponent = motion.custom(Component)
     * ```
     *
     * @public
     */
    function createMotionProxy(defaultFeatures) {
      var config = tslib.__assign(tslib.__assign({}, domBaseConfig), { defaultFeatures: defaultFeatures });
      function custom(Component) {
        return createMotionComponent(Component, config);
      }
      var componentCache = new Map();
      function get(target, key) {
        if (key === 'custom') return target.custom;
        if (!componentCache.has(key)) {
          componentCache.set(key, createMotionComponent(key, config));
        }
        return componentCache.get(key);
      }
      return new Proxy({ custom: custom }, { get: get });
    }
    /**
     * HTML & SVG components, optimised for use with gestures and animation. These can be used as
     * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
     *
     * @public
     */
    var motion = /*@__PURE__*/ createMotionProxy(allMotionFeatures);
    /**
     * Create a DOM `motion` component with the provided string. This is primarily intended
     * as a full alternative to `motion` for consumers who have to support environments that don't
     * support `Proxy`.
     *
     * ```javascript
     * import { createDomMotionComponent } from "framer-motion"
     *
     * const motion = {
     *   div: createDomMotionComponent('div')
     * }
     * ```
     *
     * @public
     */
    function createDomMotionComponent(key) {
      var config = tslib.__assign(tslib.__assign({}, domBaseConfig), { defaultFeatures: allMotionFeatures });
      return createMotionComponent(key, config);
    }

    /**
     * @public
     */
    var m = /*@__PURE__*/ createMotionProxy([MeasureLayout]);

    function useForceUpdate() {
      var unloadingRef = React.useRef(false);
      var _a = tslib.__read(React.useState(0), 2),
        forcedRenderCount = _a[0],
        setForcedRenderCount = _a[1];
      useUnmountEffect(function () {
        return (unloadingRef.current = true);
      });
      return React.useCallback(
        function () {
          !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
        },
        [forcedRenderCount]
      );
    }

    var presenceId = 0;
    function getPresenceId() {
      var id = presenceId;
      presenceId++;
      return id;
    }
    var PresenceChild = function (_a) {
      var children = _a.children,
        initial = _a.initial,
        isPresent = _a.isPresent,
        onExitComplete = _a.onExitComplete,
        custom = _a.custom,
        presenceAffectsLayout = _a.presenceAffectsLayout;
      var presenceChildren = useConstant(newChildrenMap);
      var id = useConstant(getPresenceId);
      var context = React.useMemo(
        function () {
          return {
            id: id,
            initial: initial,
            isPresent: isPresent,
            custom: custom,
            onExitComplete: function (childId) {
              presenceChildren.set(childId, true);
              var allComplete = true;
              presenceChildren.forEach(function (isComplete) {
                if (!isComplete) allComplete = false;
              });
              allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
            },
            register: function (childId) {
              presenceChildren.set(childId, false);
              return function () {
                return presenceChildren.delete(childId);
              };
            },
          };
        },
        /**
         * If the presence of a child affects the layout of the components around it,
         * we want to make a new context value to ensure they get re-rendered
         * so they can detect that layout change.
         */
        presenceAffectsLayout ? undefined : [isPresent]
      );
      React.useMemo(
        function () {
          presenceChildren.forEach(function (_, key) {
            return presenceChildren.set(key, false);
          });
        },
        [isPresent]
      );
      return React.createElement(PresenceContext.Provider, { value: context }, children);
    };
    function newChildrenMap() {
      return new Map();
    }

    function getChildKey(child) {
      return child.key || '';
    }
    function updateChildLookup(children, allChildren) {
      var seenChildren = false ? 0 : null;
      children.forEach(function (child) {
        var key = getChildKey(child);
        if (false) {
        }
        allChildren.set(key, child);
      });
    }
    function onlyElements(children) {
      var filtered = [];
      // We use forEach here instead of map as map mutates the component key by preprending `.$`
      React.Children.forEach(children, function (child) {
        if (React.isValidElement(child)) filtered.push(child);
      });
      return filtered;
    }
    /**
     * `AnimatePresence` enables the animation of components that have been removed from the tree.
     *
     * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
     *
     * @library
     *
     * Any `Frame` components that have an `exit` property defined will animate out when removed from
     * the tree.
     *
     * ```jsx
     * import { Frame, AnimatePresence } from 'framer'
     *
     * // As items are added and removed from `items`
     * export function Items({ items }) {
     *   return (
     *     <AnimatePresence>
     *       {items.map(item => (
     *         <Frame
     *           key={item.id}
     *           initial={{ opacity: 0 }}
     *           animate={{ opacity: 1 }}
     *           exit={{ opacity: 0 }}
     *         />
     *       ))}
     *     </AnimatePresence>
     *   )
     * }
     * ```
     *
     * You can sequence exit animations throughout a tree using variants.
     *
     * @motion
     *
     * Any `motion` components that have an `exit` property defined will animate out when removed from
     * the tree.
     *
     * ```jsx
     * import { motion, AnimatePresence } from 'framer-motion'
     *
     * export const Items = ({ items }) => (
     *   <AnimatePresence>
     *     {items.map(item => (
     *       <motion.div
     *         key={item.id}
     *         initial={{ opacity: 0 }}
     *         animate={{ opacity: 1 }}
     *         exit={{ opacity: 0 }}
     *       />
     *     ))}
     *   </AnimatePresence>
     * )
     * ```
     *
     * You can sequence exit animations throughout a tree using variants.
     *
     * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
     * once all `motion` components have finished animating out. Likewise, any components using
     * `usePresence` all need to call `safeToRemove`.
     *
     * @public
     */
    var AnimatePresence = function (_a) {
      var children = _a.children,
        custom = _a.custom,
        _b = _a.initial,
        initial = _b === void 0 ? true : _b,
        onExitComplete = _a.onExitComplete,
        exitBeforeEnter = _a.exitBeforeEnter,
        _c = _a.presenceAffectsLayout,
        presenceAffectsLayout = _c === void 0 ? true : _c;
      // We want to force a re-render once all exiting animations have finished. We
      // either use a local forceRender function, or one from a parent context if it exists.
      var forceRender = useForceUpdate();
      var layoutContext = React.useContext(SharedLayoutContext);
      if (isSharedLayout(layoutContext)) {
        forceRender = layoutContext.forceUpdate;
      }
      var isInitialRender = React.useRef(true);
      // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
      var filteredChildren = onlyElements(children);
      // Keep a living record of the children we're actually rendering so we
      // can diff to figure out which are entering and exiting
      var presentChildren = React.useRef(filteredChildren);
      // A lookup table to quickly reference components by key
      var allChildren = React.useRef(new Map()).current;
      // A living record of all currently exiting components.
      var exiting = React.useRef(new Set()).current;
      updateChildLookup(filteredChildren, allChildren);
      // If this is the initial component render, just deal with logic surrounding whether
      // we play onMount animations or not.
      if (isInitialRender.current) {
        isInitialRender.current = false;
        return React.createElement(
          React.Fragment,
          null,
          filteredChildren.map(function (child) {
            return React.createElement(
              PresenceChild,
              {
                key: getChildKey(child),
                isPresent: true,
                initial: initial ? undefined : false,
                presenceAffectsLayout: presenceAffectsLayout,
              },
              child
            );
          })
        );
      }
      // If this is a subsequent render, deal with entering and exiting children
      var childrenToRender = tslib.__spread(filteredChildren);
      // Diff the keys of the currently-present and target children to update our
      // exiting list.
      var presentKeys = presentChildren.current.map(getChildKey);
      var targetKeys = filteredChildren.map(getChildKey);
      // Diff the present children with our target children and mark those that are exiting
      var numPresent = presentKeys.length;
      for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        } else {
          // In case this key has re-entered, remove from the exiting list
          exiting.delete(key);
        }
      }
      // If we currently have exiting children, and we're deferring rendering incoming children
      // until after all current children have exiting, empty the childrenToRender array
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      // Loop through all currently exiting components and clone them to overwrite `animate`
      // with any `exit` prop they might have defined.
      exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1) return;
        var child = allChildren.get(key);
        if (!child) return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
          allChildren.delete(key);
          exiting.delete(key);
          // Remove this child from the present children
          var removeIndex = presentChildren.current.findIndex(function (presentChild) {
            return presentChild.key === key;
          });
          presentChildren.current.splice(removeIndex, 1);
          // Defer re-rendering until all exiting children have indeed left
          if (!exiting.size) {
            presentChildren.current = filteredChildren;
            forceRender();
            onExitComplete && onExitComplete();
          }
        };
        childrenToRender.splice(
          insertionIndex,
          0,
          React.createElement(
            PresenceChild,
            {
              key: getChildKey(child),
              isPresent: false,
              onExitComplete: onExit,
              custom: custom,
              presenceAffectsLayout: presenceAffectsLayout,
            },
            child
          )
        );
      });
      // Add `MotionContext` even to children that don't need it to ensure we're rendering
      // the same tree between renders
      childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key)
          ? child
          : React.createElement(
              PresenceChild,
              { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout },
              child
            );
      });
      presentChildren.current = childrenToRender;
      if (false) {
      }
      return React.createElement(
        React.Fragment,
        null,
        exiting.size
          ? childrenToRender
          : childrenToRender.map(function (child) {
              return React.cloneElement(child);
            })
      );
    };

    function createSwitchAnimation(child, stack) {
      if (stack && child !== stack.lead) {
        return { visibilityAction: exports.zZ.Hide };
      } else if (
        stack &&
        child.presence !== Presence.Entering &&
        child === stack.lead &&
        stack.lead !== stack.prevLead
      ) {
        return { visibilityAction: exports.zZ.Show };
      }
      var originBox;
      var targetBox;
      if (child.presence === Presence.Entering) {
        originBox = stack === null || stack === void 0 ? void 0 : stack.getFollowOrigin();
      } else if (child.presence === Presence.Exiting) {
        targetBox = stack === null || stack === void 0 ? void 0 : stack.getFollowTarget();
      }
      return { originBox: originBox, targetBox: targetBox };
    }
    function createCrossfadeAnimation(child, stack) {
      var _a, _b, _c;
      var config = {};
      var stackLead = stack && stack.lead;
      var stackLeadPresence = stackLead === null || stackLead === void 0 ? void 0 : stackLead.presence;
      if (stack && child === stackLead) {
        if (child.presence === Presence.Entering) {
          config.originBox = stack.getFollowOrigin();
        } else if (child.presence === Presence.Exiting) {
          config.targetBox = stack.getFollowTarget();
        }
      } else if (stack && child === stack.follow) {
        config.transition = stack.getLeadTransition();
        if (stackLeadPresence === Presence.Entering) {
          config.targetBox = stack.getLeadTarget();
        } else if (stackLeadPresence === Presence.Exiting) {
          config.originBox = stack.getLeadOrigin();
        }
      }
      // If neither the lead or follow component is the root child of AnimatePresence,
      // don't handle crossfade animations
      if (
        !((_a = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _a === void 0
          ? void 0
          : _a.isPresenceRoot) &&
        !(stackLead === null || stackLead === void 0 ? void 0 : stackLead.isPresenceRoot)
      ) {
        return config;
      }
      if (!stack || child === stackLead) {
        if (child.presence === Presence.Entering) {
          config.crossfadeOpacity =
            (_b = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _b === void 0
              ? void 0
              : _b.getValue('opacity', 0);
        }
      } else if (stack && child === stack.follow) {
        if (!stackLead || stackLeadPresence === Presence.Entering);
        else if (stackLeadPresence === Presence.Exiting) {
          config.crossfadeOpacity =
            (_c = stack === null || stack === void 0 ? void 0 : stack.lead) === null || _c === void 0
              ? void 0
              : _c.getValue('opacity', 1);
        }
      } else {
        config.visibilityAction = exports.zZ.Hide;
      }
      return config;
    }

    /**
     * For each layout animation, we want to identify two components
     * within a stack that will serve as the "lead" and "follow" components.
     *
     * In the switch animation, the lead component performs the entire animation.
     * It uses the follow bounding box to animate out from and back to. The follow
     * component is hidden.
     *
     * In the crossfade animation, both the lead and follow components perform
     * the entire animation, animating from the follow origin bounding box to the lead
     * target bounding box.
     *
     * Generalising a stack as First In Last Out, *searching from the end* we can
     * generally consider the lead component to be:
     *  - If the last child is present, the last child
     *  - If the last child is exiting, the last *encountered* exiting component
     */
    function findLeadAndFollow(stack, _a) {
      var _b = tslib.__read(_a, 2),
        prevLead = _b[0],
        prevFollow = _b[1];
      var lead = undefined;
      var leadIndex = 0;
      var follow = undefined;
      // Find the lead child first
      var numInStack = stack.length;
      var lastIsPresent = false;
      for (var i = numInStack - 1; i >= 0; i--) {
        var child = stack[i];
        var isLastInStack = i === numInStack - 1;
        if (isLastInStack) lastIsPresent = child.isPresent;
        if (lastIsPresent) {
          lead = child;
        } else {
          // If the child before this will be present, make this the
          // lead.
          var prev = stack[i - 1];
          if (prev && prev.isPresent) lead = child;
        }
        if (lead) {
          leadIndex = i;
          break;
        }
      }
      if (!lead) lead = stack[0];
      // Find the follow child
      follow = stack[leadIndex - 1];
      // If the lead component is exiting, find the closest follow
      // present component
      if (lead) {
        for (var i = leadIndex - 1; i >= 0; i--) {
          var child = stack[i];
          if (child.isPresent) {
            follow = child;
            break;
          }
        }
      }
      // If the lead has changed and the previous lead still exists in the
      // stack, set it to the previous lead. This allows us to differentiate between
      // a, b, c(exit) -> a, b(exit), c(exit)
      // and
      // a, b(exit), c -> a, b(exit), c(exit)
      if (
        lead !== prevLead &&
        !lastIsPresent &&
        follow === prevFollow &&
        stack.find(function (stackChild) {
          return stackChild === prevLead;
        })
      ) {
        lead = prevLead;
      }
      return [lead, follow];
    }
    var LayoutStack = /** @class */ (function () {
      function LayoutStack() {
        this.order = [];
        // Track whether we've ever had a child
        this.hasChildren = false;
      }
      LayoutStack.prototype.add = function (child) {
        var _a;
        this.order.push(child);
        // Load previous values from snapshot into this child
        // TODO Neaten up
        // TODO Double check when reimplementing move
        // TODO Add isDragging status and
        if (this.snapshot) {
          child.prevSnapshot = this.snapshot;
          // TODO Remove in favour of above
          child.prevViewportBox = this.snapshot.boundingBox;
          var latest = this.snapshot.latestMotionValues;
          for (var key in latest) {
            if (!child.hasValue(key)) {
              child.addValue(key, motionValue(latest[key]));
            } else {
              (_a = child.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(latest[key]);
            }
          }
        }
        this.hasChildren = true;
      };
      LayoutStack.prototype.remove = function (child) {
        var index = this.order.findIndex(function (stackChild) {
          return child === stackChild;
        });
        if (index !== -1) this.order.splice(index, 1);
      };
      LayoutStack.prototype.updateLeadAndFollow = function () {
        this.prevLead = this.lead;
        this.prevFollow = this.follow;
        var _a = tslib.__read(findLeadAndFollow(this.order, [this.lead, this.follow]), 2),
          lead = _a[0],
          follow = _a[1];
        this.lead = lead;
        this.follow = follow;
      };
      LayoutStack.prototype.updateSnapshot = function () {
        if (!this.lead) return;
        var snapshot = {
          boundingBox: this.lead.prevViewportBox,
          latestMotionValues: {},
        };
        this.lead.forEachValue(function (value, key) {
          var latest = value.get();
          if (!isTransformProp(latest)) {
            snapshot.latestMotionValues[key] = latest;
          }
        });
        var dragControls = elementDragControls.get(this.lead);
        if (dragControls && dragControls.isDragging) {
          snapshot.isDragging = true;
          snapshot.cursorProgress = dragControls.cursorProgress;
        }
        this.snapshot = snapshot;
      };
      LayoutStack.prototype.isLeadPresent = function () {
        var _a;
        return this.lead && ((_a = this.lead) === null || _a === void 0 ? void 0 : _a.presence) !== Presence.Exiting;
      };
      LayoutStack.prototype.getFollowOrigin = function () {
        var _a;
        return this.follow
          ? this.follow.prevViewportBox
          : (_a = this.snapshot) === null || _a === void 0
          ? void 0
          : _a.boundingBox;
      };
      LayoutStack.prototype.getFollowTarget = function () {
        var _a;
        return (_a = this.follow) === null || _a === void 0 ? void 0 : _a.box;
      };
      LayoutStack.prototype.getLeadOrigin = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.prevViewportBox;
      };
      LayoutStack.prototype.getLeadTarget = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.box;
      };
      LayoutStack.prototype.getLeadTransition = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.config.transition;
      };
      return LayoutStack;
    })();

    function resetRotate(child) {
      // If there's no detected rotation values, we can early return without a forced render.
      var hasRotate = false;
      // Keep a record of all the values we've reset
      var resetValues = {};
      // Check the rotate value of all axes and reset to 0
      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = 'rotate' + axis;
        // If this rotation doesn't exist as a motion value, then we don't
        // need to reset it
        if (!child.hasValue(key) || child.latest[key] === 0) continue;
        hasRotate = true;
        // Record the rotation and then temporarily set it to 0
        resetValues[key] = child.latest[key];
        child.latest[key] = 0;
      }
      // If there's no rotation values, we don't need to do any more.
      if (!hasRotate) return;
      // Force a render of this element to apply the transform with all rotations
      // set to 0.
      child.render();
      // Put back all the values we reset
      for (var key in resetValues) {
        child.latest[key] = resetValues[key];
      }
      // Schedule a render for the next frame. This ensures we won't visually
      // see the element with the reset rotate value applied.
      child.scheduleRender();
    }

    /**
     * @public
     */
    var AnimateSharedLayout = /** @class */ (function (_super) {
      tslib.__extends(AnimateSharedLayout, _super);
      function AnimateSharedLayout() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        /**
         * A list of all the children in the shared layout
         */
        _this.children = new Set();
        /**
         * As animate components with a defined `layoutId` are added/removed to the tree,
         * we store them in order. When one is added, it will animate out from the
         * previous one, and when it's removed, it'll animate to the previous one.
         */
        _this.stacks = new Map();
        /**
         * Track whether the component has mounted. If it hasn't, the presence of added children
         * are set to Present, whereas if it has they're considered Entering
         */
        _this.hasMounted = false;
        /**
         * Track whether we already have an update scheduled. If we don't, we'll run snapshots
         * and schedule one.
         */
        _this.updateScheduled = false;
        /**
         * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
         */
        _this.renderScheduled = false;
        /**
         * The methods provided to all children in the shared layout tree.
         */
        _this.syncContext = tslib.__assign(tslib.__assign({}, createBatcher()), {
          syncUpdate: function (force) {
            return _this.scheduleUpdate(force);
          },
          forceUpdate: function () {
            // By copying syncContext to itself, when this component re-renders it'll also re-render
            // all children subscribed to the SharedLayout context.
            _this.syncContext = tslib.__assign({}, _this.syncContext);
            _this.scheduleUpdate(true);
          },
          register: function (child) {
            return _this.addChild(child);
          },
          remove: function (child) {
            return _this.removeChild(child);
          },
        });
        return _this;
      }
      AnimateSharedLayout.prototype.componentDidMount = function () {
        this.hasMounted = true;
        this.updateStacks();
      };
      AnimateSharedLayout.prototype.componentDidUpdate = function () {
        this.startLayoutAnimation();
      };
      AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
        this.renderScheduled = true;
        return true;
      };
      AnimateSharedLayout.prototype.startLayoutAnimation = function () {
        var _this = this;
        /**
         * Reset update and render scheduled status
         */
        this.renderScheduled = this.updateScheduled = false;
        var type = this.props.type;
        /**
         * Update presence metadata based on the latest AnimatePresence status.
         * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
         */
        this.children.forEach(function (child) {
          if (!child.isPresent) {
            child.presence = Presence.Exiting;
          } else if (child.presence !== Presence.Entering) {
            child.presence = child.presence === Presence.Exiting ? Presence.Entering : Presence.Present;
          }
        });
        /**
         * In every layoutId stack, nominate a component to lead the animation and another
         * to follow
         */
        this.updateStacks();
        /**
         * Decide which animation to use between shared layoutId components
         */
        var createAnimation = type === 'crossfade' ? createCrossfadeAnimation : createSwitchAnimation;
        /**
         * Create a handler which we can use to flush the children animations
         */
        var handler = {
          measureLayout: function (child) {
            return child.measureLayout();
          },
          layoutReady: function (child) {
            var layoutId = child.layoutId;
            child.layoutReady(createAnimation(child, _this.getStack(layoutId)));
          },
          parent: this.context.visualElement,
        };
        /**
         * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
         * This requires some co-ordination across components to stop layout thrashing
         * and ensure measurements are taken at the correct time.
         *
         * Here we use that same mechanism of schedule/flush.
         */
        this.children.forEach(function (child) {
          return _this.syncContext.add(child);
        });
        this.syncContext.flush(handler);
        /**
         * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
         */
        this.stacks.forEach(function (stack) {
          return (stack.snapshot = undefined);
        });
      };
      AnimateSharedLayout.prototype.updateStacks = function () {
        this.stacks.forEach(function (stack) {
          return stack.updateLeadAndFollow();
        });
      };
      AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
        if (force === void 0) {
          force = false;
        }
        if (!(force || !this.updateScheduled)) return;
        /**
         * Flag we've scheduled an update
         */
        this.updateScheduled = true;
        /**
         * Write: Reset rotation transforms so bounding boxes can be accurately measured.
         */
        this.children.forEach(function (child) {
          return resetRotate(child);
        });
        /**
         * Read: Snapshot children
         */
        this.children.forEach(function (child) {
          return child.snapshotBoundingBox();
        });
        /**
         * Every child keeps a local snapshot, but we also want to record
         * snapshots of the visible children as, if they're are being removed
         * in this render, we can still access them.
         */
        this.stacks.forEach(function (stack) {
          return stack.updateSnapshot();
        });
        /**
         * Force a rerender by setting state if we aren't already going to render.
         */
        if (force || !this.renderScheduled) {
          this.renderScheduled = true;
          this.forceUpdate();
        }
      };
      AnimateSharedLayout.prototype.addChild = function (child) {
        this.children.add(child);
        this.addToStack(child);
        child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
      };
      AnimateSharedLayout.prototype.removeChild = function (child) {
        this.scheduleUpdate();
        this.children.delete(child);
        this.removeFromStack(child);
      };
      AnimateSharedLayout.prototype.addToStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.add(child);
      };
      AnimateSharedLayout.prototype.removeFromStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.remove(child);
      };
      /**
       * Return a stack of animate children based on the provided layoutId.
       * Will create a stack if none currently exists with that layoutId.
       */
      AnimateSharedLayout.prototype.getStack = function (id) {
        if (id === undefined) return;
        // Create stack if it doesn't already exist
        !this.stacks.has(id) && this.stacks.set(id, new LayoutStack());
        return this.stacks.get(id);
      };
      AnimateSharedLayout.prototype.render = function () {
        return React.createElement(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children);
      };
      AnimateSharedLayout.contextType = MotionContext;
      return AnimateSharedLayout;
    })(React.Component);

    /**
     * Creates a `MotionValue` to track the state and velocity of a value.
     *
     * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
     *
     * @library
     *
     * ```jsx
     * export function MyComponent() {
     *   const scale = useMotionValue(1)
     *
     *   return <Frame scale={scale} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const scale = useMotionValue(1)
     *
     *   return <motion.div style={{ scale }} />
     * }
     * ```
     *
     * @param initial - The initial state.
     *
     * @public
     */
    function useMotionValue(initial) {
      return useConstant(function () {
        return motionValue(initial);
      });
    }

    function useOnChange(value, callback) {
      React.useEffect(function () {
        return isMotionValue(value) ? value.onChange(callback) : undefined;
      });
    }
    function useMultiOnChange(values, handler) {
      React.useEffect(function () {
        var subscriptions = values.map(function (value) {
          return value.onChange(handler);
        });
        return function () {
          return subscriptions.forEach(function (unsubscribe) {
            return unsubscribe();
          });
        };
      });
    }

    function useCombineMotionValues(values, combineValues) {
      /**
       * Initialise the returned motion value. This remains the same between renders.
       */
      var value = useMotionValue(combineValues());
      /**
       * Create a function that will update the template motion value with the latest values.
       * This is pre-bound so whenever a motion value updates it can schedule its
       * execution in Framesync. If it's already been scheduled it won't be fired twice
       * in a single frame.
       */
      var updateValue = function () {
        return value.set(combineValues());
      };
      /**
       * Synchronously update the motion value with the latest values during the render.
       * This ensures that within a React render, the styles applied to the DOM are up-to-date.
       */
      updateValue();
      /**
       * Subscribe to all motion values found within the template. Whenever any of them change,
       * schedule an update.
       */
      useMultiOnChange(values, function () {
        return sync__default['default'].update(updateValue, false, true);
      });
      return value;
    }

    /**
     * Combine multiple motion values into a new one using a string template literal.
     *
     * ```jsx
     * import {
     *   motion,
     *   useSpring,
     *   useMotionValue,
     *   useMotionTemplate
     * } from "framer-motion"
     *
     * function Component() {
     *   const shadowX = useSpring(0)
     *   const shadowY = useMotionValue(0)
     *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
     *
     *   return <motion.div style={{ filter: shadow }} />
     * }
     * ```
     *
     * @public
     */
    function useMotionTemplate(fragments) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      /**
       * Create a function that will build a string from the latest motion values.
       */
      var numFragments = fragments.length;
      function buildValue() {
        var output = '';
        for (var i = 0; i < numFragments; i++) {
          output += fragments[i];
          var value = values[i];
          if (value) output += values[i].get();
        }
        return output;
      }
      return useCombineMotionValues(values, buildValue);
    }

    /**
     * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
     *
     * TODO: Remove and move to library
     *
     * @internal
     */
    function resolveMotionValue(value) {
      var unwrappedValue = value instanceof MotionValue ? value.get() : value;
      return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
    }

    var isCustomValueType = function (v) {
      return typeof v === 'object' && v.mix;
    };
    var getMixer = function (v) {
      return isCustomValueType(v) ? v.mix : undefined;
    };
    function transform() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var useImmediate = !Array.isArray(args[0]);
      var argOffset = useImmediate ? 0 : -1;
      var inputValue = args[0 + argOffset];
      var inputRange = args[1 + argOffset];
      var outputRange = args[2 + argOffset];
      var options = args[3 + argOffset];
      var interpolator = popmotion.interpolate(
        inputRange,
        outputRange,
        tslib.__assign({ mixer: getMixer(outputRange[0]) }, options)
      );
      return useImmediate ? interpolator(inputValue) : interpolator;
    }

    function useTransform(input, inputRangeOrTransformer, outputRange, options) {
      var transformer =
        typeof inputRangeOrTransformer === 'function'
          ? inputRangeOrTransformer
          : transform(inputRangeOrTransformer, outputRange, options);
      return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], function (_a) {
            var _b = tslib.__read(_a, 1),
              latest = _b[0];
            return transformer(latest);
          });
    }
    function useListTransform(values, transformer) {
      var latest = useConstant(function () {
        return [];
      });
      return useCombineMotionValues(values, function () {
        latest.length = 0;
        var numValues = values.length;
        for (var i = 0; i < numValues; i++) {
          latest[i] = values[i].get();
        }
        return transformer(latest);
      });
    }

    /**
     * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
     *
     * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
     * to another `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useSpring(0, { stiffness: 300 })
     * const y = useSpring(x, { damping: 10 })
     * ```
     *
     * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
     * @param springConfig - Configuration options for the spring.
     * @returns `MotionValue`
     *
     * @public
     */
    function useSpring(source, config) {
      if (config === void 0) {
        config = {};
      }
      var isStatic = React.useContext(MotionConfigContext).isStatic;
      var activeSpringAnimation = React.useRef(null);
      var value = useMotionValue(isMotionValue(source) ? source.get() : source);
      React.useMemo(function () {
        return value.attach(function (v, set) {
          /**
           * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
           * at that level, but this will work for now
           */
          if (isStatic) return set(v);
          if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
          }
          activeSpringAnimation.current = popmotion.animate(
            tslib.__assign(tslib.__assign({ from: value.get(), to: v, velocity: value.getVelocity() }, config), {
              onUpdate: set,
            })
          );
          return value.get();
        });
      }, Object.values(config));
      useOnChange(source, function (v) {
        return value.set(parseFloat(v));
      });
      return value;
    }

    function createScrollMotionValues() {
      return {
        scrollX: motionValue(0),
        scrollY: motionValue(0),
        scrollXProgress: motionValue(0),
        scrollYProgress: motionValue(0),
      };
    }
    function setProgress(offset, maxOffset, value) {
      value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
    }
    function createScrollUpdater(values, getOffsets) {
      var update = function () {
        var _a = getOffsets(),
          xOffset = _a.xOffset,
          yOffset = _a.yOffset,
          xMaxOffset = _a.xMaxOffset,
          yMaxOffset = _a.yMaxOffset;
        // Set absolute positions
        values.scrollX.set(xOffset);
        values.scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, xMaxOffset, values.scrollXProgress);
        setProgress(yOffset, yMaxOffset, values.scrollYProgress);
      };
      update();
      return update;
    }

    var getElementScrollOffsets = function (element) {
      return function () {
        return {
          xOffset: element.scrollLeft,
          yOffset: element.scrollTop,
          xMaxOffset: element.scrollWidth - element.offsetWidth,
          yMaxOffset: element.scrollHeight - element.offsetHeight,
        };
      };
    };
    /**
     * Returns MotionValues that update when the provided element scrolls:
     *
     * - `scrollX` — Horizontal scroll distance in pixels.
     * - `scrollY` — Vertical scroll distance in pixels.
     * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
     * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
     *
     * This element must be set to `overflow: scroll` on either or both axes to report scroll offset.
     *
     * @library
     *
     * ```jsx
     * import * as React from "react"
     * import {
     *   Frame,
     *   useElementScroll,
     *   useTransform
     * } from "framer"
     *
     * export function MyComponent() {
     *   const ref = React.useRef()
     *   const { scrollYProgress } = useElementScroll(ref)
     *
     *   return (
     *     <Frame ref={ref}>
     *       <Frame scaleX={scrollYProgress} />
     *     </Frame>
     *   )
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const ref = useRef()
     *   const { scrollYProgress } = useElementScroll(ref)
     *
     *   return (
     *     <div ref={ref}>
     *       <motion.div style={{ scaleX: scrollYProgress }} />
     *     </div>
     *   )
     * }
     * ```
     *
     * @public
     */
    function useElementScroll(ref) {
      var values = useConstant(createScrollMotionValues);
      useIsomorphicLayoutEffect(function () {
        var element = ref.current;
        heyListen.invariant(!!element, 'ref provided to useScroll must be passed into a HTML element.');
        if (!element) return;
        var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
        var scrollListener = addDomEvent(element, 'scroll', updateScrollValues, { passive: true });
        var resizeListener = addDomEvent(element, 'resize', updateScrollValues);
        return function () {
          scrollListener && scrollListener();
          resizeListener && resizeListener();
        };
      }, []);
      return values;
    }

    var viewportScrollValues;
    function getViewportScrollOffsets() {
      return {
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        xMaxOffset: document.body.clientWidth - window.innerWidth,
        yMaxOffset: document.body.clientHeight - window.innerHeight,
      };
    }
    var hasListeners = false;
    function addEventListeners() {
      hasListeners = true;
      if (typeof window === 'undefined') return;
      var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
      addDomEvent(window, 'scroll', updateScrollValues, { passive: true });
      addDomEvent(window, 'resize', updateScrollValues);
    }
    /**
     * Returns MotionValues that update when the viewport scrolls:
     *
     * - `scrollX` — Horizontal scroll distance in pixels.
     * - `scrollY` — Vertical scroll distance in pixels.
     * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
     * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
     *
     * @library
     *
     * ```jsx
     * import * as React from "react"
     * import {
     *   Frame,
     *   useViewportScroll,
     *   useTransform
     * } from "framer"
     *
     * export function MyComponent() {
     *   const { scrollYProgress } = useViewportScroll()
     *   return <Frame scaleX={scrollYProgress} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const { scrollYProgress } = useViewportScroll()
     *   return <motion.div style={{ scaleX: scrollYProgress }} />
     * }
     * ```
     *
     * @public
     */
    function useViewportScroll() {
      /**
       * Lazy-initialise the viewport scroll values
       */
      if (!viewportScrollValues) {
        viewportScrollValues = createScrollMotionValues();
      }
      useIsomorphicLayoutEffect(function () {
        !hasListeners && addEventListeners();
      }, []);
      return viewportScrollValues;
    }

    // Does this device prefer reduced motion? Returns `null` server-side.
    var prefersReducedMotion;
    function initPrefersReducedMotion() {
      prefersReducedMotion = motionValue(null);
      if (typeof window === 'undefined') return;
      if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia('(prefers-reduced-motion)');
        var setReducedMotionPreferences = function () {
          return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
      } else {
        prefersReducedMotion.set(false);
      }
    }
    /**
     * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
     *
     * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
     * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
     *
     * It will actively respond to changes and re-render your components with the latest setting.
     *
     * ```jsx
     * export function Sidebar({ isOpen }) {
     *   const shouldReduceMotion = useReducedMotion()
     *   const closedX = shouldReduceMotion ? 0 : "-100%"
     *
     *   return (
     *     <motion.div animate={{
     *       opacity: isOpen ? 1 : 0,
     *       x: isOpen ? 0 : closedX
     *     }} />
     *   )
     * }
     * ```
     *
     * @return boolean
     *
     * @public
     */
    function useReducedMotion() {
      /**
       * Lazy initialisation of prefersReducedMotion
       */
      !prefersReducedMotion && initPrefersReducedMotion();
      var _a = tslib.__read(React.useState(prefersReducedMotion.get()), 2),
        shouldReduceMotion = _a[0],
        setShouldReduceMotion = _a[1];
      useOnChange(prefersReducedMotion, setShouldReduceMotion);
      return shouldReduceMotion;
    }

    /**
     * Creates `AnimationControls`, which can be used to manually start, stop
     * and sequence animations on one or more components.
     *
     * The returned `AnimationControls` should be passed to the `animate` property
     * of the components you want to animate.
     *
     * These components can then be animated with the `start` method.
     *
     * @library
     *
     * ```jsx
     * import * as React from 'react'
     * import { Frame, useAnimation } from 'framer'
     *
     * export function MyComponent(props) {
     *    const controls = useAnimation()
     *
     *    controls.start({
     *        x: 100,
     *        transition: { duration: 0.5 },
     *    })
     *
     *    return <Frame animate={controls} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * import * as React from 'react'
     * import { motion, useAnimation } from 'framer-motion'
     *
     * export function MyComponent(props) {
     *    const controls = useAnimation()
     *
     *    controls.start({
     *        x: 100,
     *        transition: { duration: 0.5 },
     *    })
     *
     *    return <motion.div animate={controls} />
     * }
     * ```
     *
     * @returns Animation controller with `start` and `stop` methods
     *
     * @public
     */
    function useAnimation() {
      var animationControls = useConstant(function () {
        return new AnimationControls();
      });
      React.useEffect(function () {
        animationControls.mount();
        return function () {
          return animationControls.unmount();
        };
      }, []);
      return animationControls;
    }

    /**
     * Animate a single value or a `MotionValue`.
     *
     * The first argument is either a `MotionValue` to animate, or an initial animation value.
     *
     * The second is either a value to animate to, or an array of keyframes to animate through.
     *
     * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
     *
     * Returns `PlaybackControls`, currently just a `stop` method.
     *
     * ```javascript
     * const x = useMotionValue(0)
     *
     * useEffect(() => {
     *   const controls = animate(x, 100, {
     *     type: "spring",
     *     stiffness: 2000,
     *     onComplete: v => {}
     *   })
     *
     *   return controls.stop
     * })
     * ```
     *
     * @public
     */
    function animate(from, to, transition) {
      if (transition === void 0) {
        transition = {};
      }
      var value = isMotionValue(from) ? from : motionValue(from);
      startAnimation('', value, to, transition);
      return {
        stop: function () {
          return value.stop();
        },
      };
    }

    /**
     * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
     *
     * @library
     *
     * ```jsx
     * import * as React from "react"
     * import { Frame, useCycle } from "framer"
     *
     * export function MyComponent() {
     *   const [x, cycleX] = useCycle(0, 50, 100)
     *
     *   return (
     *     <Frame
     *       animate={{ x: x }}
     *       onTap={() => cycleX()}
     *      />
     *    )
     * }
     * ```
     *
     * @motion
     *
     * An index value can be passed to the returned `cycle` function to cycle to a specific index.
     *
     * ```jsx
     * import * as React from "react"
     * import { motion, useCycle } from "framer-motion"
     *
     * export const MyComponent = () => {
     *   const [x, cycleX] = useCycle(0, 50, 100)
     *
     *   return (
     *     <motion.div
     *       animate={{ x: x }}
     *       onTap={() => cycleX()}
     *      />
     *    )
     * }
     * ```
     *
     * @param items - items to cycle through
     * @returns [currentState, cycleState]
     *
     * @public
     */
    function useCycle() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      var index = React.useRef(0);
      var _a = tslib.__read(React.useState(items[index.current]), 2),
        item = _a[0],
        setItem = _a[1];
      return [
        item,
        function (next) {
          index.current = typeof next !== 'number' ? popmotion.wrap(0, items.length, index.current + 1) : next;
          setItem(items[index.current]);
        },
      ];
    }

    /**
     * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
     *
     * @library
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <Frame onTapStart={startDrag} />
     *     <Frame drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @motion
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <div onPointerDown={startDrag} />
     *     <motion.div drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @public
     */
    var DragControls = /** @class */ (function () {
      function DragControls() {
        this.componentControls = new Set();
      }
      /**
       * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
       *
       * @internal
       */
      DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () {
          return _this.componentControls.delete(controls);
        };
      };
      /**
       * Start a drag gesture on every `motion` component that has this set of drag controls
       * passed into it via the `dragControls` prop.
       *
       * ```jsx
       * dragControls.start(e, {
       *   snapToCursor: true
       * })
       * ```
       *
       * @param event - PointerEvent
       * @param options - Options
       *
       * @public
       */
      DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
          controls.start(event.nativeEvent || event, options);
        });
      };
      DragControls.prototype.updateConstraints = function () {
        this.componentControls.forEach(function (controls) {
          controls.prepareBoundingBox();
          controls.resolveDragConstraints();
        });
      };
      return DragControls;
    })();
    var createDragControls = function () {
      return new DragControls();
    };
    /**
     * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
     * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
     * might want to initiate that dragging from a different component than the draggable one.
     *
     * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
     * the draggable component's `dragControls` prop. It exposes a `start` method
     * that can start dragging from pointer events on other components.
     *
     * @library
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <Frame onTapStart={startDrag} />
     *     <Frame drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @motion
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <div onPointerDown={startDrag} />
     *     <motion.div drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @public
     */
    function useDragControls() {
      return useConstant(createDragControls);
    }

    /**
     * Uses the ref that is passed in, or creates a new one
     * @param external - External ref
     * @internal
     */
    function useExternalRef(externalRef) {
      // We're conditionally calling `useRef` here which is sort of naughty as hooks
      // shouldn't be called conditionally. However, Framer Motion will break if this
      // condition changes anyway. It might be possible to use an invariant here to
      // make it explicit, but I expect changing `ref` is not normal behaviour.
      var ref = !externalRef || typeof externalRef === 'function' ? React.useRef(null) : externalRef;
      // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
      // but `ref` types changing between renders would break Motion anyway. If we receive
      // bug reports about this, we should track the provided ref and throw an invariant
      // rather than move the conditional to inside the useEffect as this will be fired
      // for every Frame component within Framer.
      if (externalRef && typeof externalRef === 'function') {
        React.useEffect(function () {
          externalRef(ref.current);
          return function () {
            return externalRef(null);
          };
        }, []);
      }
      return ref;
    }

    /**
     * This is just a very basic VisualElement, more of a hack to keep supporting useAnimatedState with
     * the latest APIs.
     */
    var StateVisualElement = /** @class */ (function (_super) {
      tslib.__extends(StateVisualElement, _super);
      function StateVisualElement() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.initialState = {};
        return _this;
      }
      StateVisualElement.prototype.updateLayoutDelta = function () {};
      StateVisualElement.prototype.build = function () {};
      StateVisualElement.prototype.clean = function () {};
      StateVisualElement.prototype.makeTargetAnimatable = function (_a) {
        var transition = _a.transition,
          transitionEnd = _a.transitionEnd,
          target = tslib.__rest(_a, ['transition', 'transitionEnd']);
        var origin = getOrigin(target, transition || {}, this);
        checkTargetForNewValues(this, target, origin);
        return tslib.__assign({ transition: transition, transitionEnd: transitionEnd }, target);
      };
      StateVisualElement.prototype.getBoundingBox = function () {
        return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      };
      StateVisualElement.prototype.readNativeValue = function (key) {
        return this.initialState[key] || 0;
      };
      StateVisualElement.prototype.render = function () {
        this.build();
      };
      return StateVisualElement;
    })(VisualElement);
    /**
     * This is not an officially supported API and may be removed
     * on any version.
     * @internal
     */
    function useAnimatedState(initialState) {
      var _a = tslib.__read(React.useState(initialState), 2),
        animationState = _a[0],
        setAnimationState = _a[1];
      var visualElement = useConstant(function () {
        return new StateVisualElement();
      });
      visualElement.updateConfig({
        onUpdate: function (v) {
          return setAnimationState(tslib.__assign({}, v));
        },
      });
      visualElement.initialState = initialState;
      React.useEffect(function () {
        visualElement.mount({});
        return function () {
          return visualElement.unmount();
        };
      }, []);
      var startAnimation = useConstant(function () {
        return function (animationDefinition) {
          return animateVisualElement(visualElement, animationDefinition);
        };
      });
      return [animationState, startAnimation];
    }

    // Keep things reasonable and avoid scale: Infinity. In practise we might need
    // to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
    // to simply hide content at unreasonable scales.
    var maxScale = 100000;
    var invertScale = function (scale) {
      return scale > 0.001 ? 1 / scale : maxScale;
    };
    var hasWarned = false;
    /**
     * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
     * of their respective parent scales.
     *
     * This is useful for undoing the distortion of content when scaling a parent component.
     *
     * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
     * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
     * of those instead.
     *
     * @motion
     *
     * ```jsx
     * const MyComponent = () => {
     *   const { scaleX, scaleY } = useInvertedScale()
     *   return <motion.div style={{ scaleX, scaleY }} />
     * }
     * ```
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const { scaleX, scaleY } = useInvertedScale()
     *   return <Frame scaleX={scaleX} scaleY={scaleY} />
     * }
     * ```
     *
     * @deprecated
     */
    function useInvertedScale(scale) {
      var parentScaleX = useMotionValue(1);
      var parentScaleY = useMotionValue(1);
      var visualElement = useVisualElementContext();
      heyListen.invariant(
        !!(scale || visualElement),
        'If no scale values are provided, useInvertedScale must be used within a child of another motion component.'
      );
      heyListen.warning(
        hasWarned,
        'useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.'
      );
      hasWarned = true;
      if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
      } else if (visualElement) {
        parentScaleX = visualElement.getValue('scaleX', 1);
        parentScaleY = visualElement.getValue('scaleY', 1);
      }
      var scaleX = useTransform(parentScaleX, invertScale);
      var scaleY = useTransform(parentScaleY, invertScale);
      return { scaleX: scaleX, scaleY: scaleY };
    }

    __webpack_unused_export__ = AnimateLayout;
    exports.M_ = AnimatePresence;
    __webpack_unused_export__ = AnimateSharedLayout;
    __webpack_unused_export__ = AnimationControls;
    __webpack_unused_export__ = Animation;
    __webpack_unused_export__ = DragControls;
    __webpack_unused_export__ = Drag;
    __webpack_unused_export__ = Exit;
    __webpack_unused_export__ = FramerTreeLayoutContext;
    __webpack_unused_export__ = Gestures;
    __webpack_unused_export__ = HTMLVisualElement;
    __webpack_unused_export__ = LayoutGroupContext;
    __webpack_unused_export__ = MotionConfig;
    __webpack_unused_export__ = MotionConfigContext;
    __webpack_unused_export__ = MotionValue;
    __webpack_unused_export__ = PresenceContext;
    __webpack_unused_export__ = SharedLayoutContext;
    __webpack_unused_export__ = addScaleCorrection;
    __webpack_unused_export__ = animate;
    __webpack_unused_export__ = animateVisualElement;
    __webpack_unused_export__ = animationControls;
    __webpack_unused_export__ = createBatcher;
    __webpack_unused_export__ = createDomMotionComponent;
    __webpack_unused_export__ = createMotionComponent;
    __webpack_unused_export__ = isValidMotionProp;
    __webpack_unused_export__ = m;
    exports.ww = motion;
    __webpack_unused_export__ = motionValue;
    __webpack_unused_export__ = resolveMotionValue;
    __webpack_unused_export__ = transform;
    __webpack_unused_export__ = useAnimation;
    __webpack_unused_export__ = useCycle;
    __webpack_unused_export__ = useAnimatedState;
    __webpack_unused_export__ = useInvertedScale;
    __webpack_unused_export__ = useDomEvent;
    __webpack_unused_export__ = useDragControls;
    __webpack_unused_export__ = useElementScroll;
    __webpack_unused_export__ = useExternalRef;
    __webpack_unused_export__ = useGestures;
    __webpack_unused_export__ = useIsPresent;
    __webpack_unused_export__ = useMotionTemplate;
    exports.c$ = useMotionValue;
    __webpack_unused_export__ = usePanGesture;
    __webpack_unused_export__ = usePresence;
    __webpack_unused_export__ = useReducedMotion;
    __webpack_unused_export__ = useSpring;
    __webpack_unused_export__ = useTapGesture;
    exports.Hm = useTransform;
    __webpack_unused_export__ = useVariantContext;
    __webpack_unused_export__ = useViewportScroll;

    /***/
  },

  /***/ 1317: /***/ (__unused_webpack_module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    var defaultTimestep = (1 / 60) * 1000;
    var onNextFrame =
      typeof window !== 'undefined'
        ? function (callback) {
            return window.requestAnimationFrame(callback);
          }
        : function (callback) {
            return setTimeout(function () {
              return callback(performance.now());
            }, defaultTimestep);
          };

    function createRenderStep(runNextFrame) {
      var toRun = [];
      var toRunNextFrame = [];
      var numToRun = 0;
      var isProcessing = false;
      var toKeepAlive = new WeakSet();
      var step = {
        schedule: function (callback, keepAlive, immediate) {
          if (keepAlive === void 0) {
            keepAlive = false;
          }
          if (immediate === void 0) {
            immediate = false;
          }
          var addToCurrentFrame = immediate && isProcessing;
          var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
          if (keepAlive) toKeepAlive.add(callback);
          if (buffer.indexOf(callback) === -1) {
            buffer.push(callback);
            if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
          }
          return callback;
        },
        cancel: function (callback) {
          var index = toRunNextFrame.indexOf(callback);
          if (index !== -1) toRunNextFrame.splice(index, 1);
          toKeepAlive.delete(callback);
        },
        process: function (frameData) {
          var _a;
          isProcessing = true;
          (_a = [toRunNextFrame, toRun]), (toRun = _a[0]), (toRunNextFrame = _a[1]);
          toRunNextFrame.length = 0;
          numToRun = toRun.length;
          if (numToRun) {
            for (var i = 0; i < numToRun; i++) {
              var callback = toRun[i];
              callback(frameData);
              if (toKeepAlive.has(callback)) {
                step.schedule(callback);
                runNextFrame();
              }
            }
          }
          isProcessing = false;
        },
      };
      return step;
    }

    var maxElapsed = 40;
    var useDefaultElapsed = true;
    var runNextFrame = false;
    var isProcessing = false;
    var frame = {
      delta: 0,
      timestamp: 0,
    };
    var stepsOrder = ['read', 'update', 'preRender', 'render', 'postRender'];
    var steps = stepsOrder.reduce(function (acc, key) {
      acc[key] = createRenderStep(function () {
        return (runNextFrame = true);
      });
      return acc;
    }, {});
    var sync = stepsOrder.reduce(function (acc, key) {
      var step = steps[key];
      acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
          keepAlive = false;
        }
        if (immediate === void 0) {
          immediate = false;
        }
        if (!runNextFrame) startLoop();
        return step.schedule(process, keepAlive, immediate);
      };
      return acc;
    }, {});
    var cancelSync = stepsOrder.reduce(function (acc, key) {
      acc[key] = steps[key].cancel;
      return acc;
    }, {});
    var processStep = function (stepId) {
      return steps[stepId].process(frame);
    };
    var processFrame = function (timestamp) {
      runNextFrame = false;
      frame.delta = useDefaultElapsed
        ? defaultTimestep
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
      frame.timestamp = timestamp;
      isProcessing = true;
      stepsOrder.forEach(processStep);
      isProcessing = false;
      if (runNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
      }
    };
    var startLoop = function () {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!isProcessing) onNextFrame(processFrame);
    };
    var getFrameData = function () {
      return frame;
    };

    exports.cancelSync = cancelSync;
    exports['default'] = sync;
    exports.getFrameData = getFrameData;

    /***/
  },

  /***/ 1320: /***/ (__unused_webpack_module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    exports.warning = function () {};
    exports.invariant = function () {};
    if (false) {
    }

    /***/
  },

  /***/ 6847: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    var __webpack_unused_export__;
    var Head = __webpack_require__(9008);
    var React = __webpack_require__(7294);

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { default: e };
    }

    var Head__default = /*#__PURE__*/ _interopDefaultLegacy(Head);
    var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var defaults = {
      templateTitle: '',
      noindex: false,
      nofollow: false,
      defaultOpenGraphImageWidth: 0,
      defaultOpenGraphImageHeight: 0,
      defaultOpenGraphVideoWidth: 0,
      defaultOpenGraphVideoHeight: 0,
    };

    var buildTags = function buildTags(config) {
      var _config$additionalLin;

      var tagsToRender = [];

      if (config.titleTemplate) {
        defaults.templateTitle = config.titleTemplate;
      }

      var updatedTitle = '';

      if (config.title) {
        updatedTitle = config.title;

        if (defaults.templateTitle) {
          updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
            return updatedTitle;
          });
        }
      } else if (config.defaultTitle) {
        updatedTitle = config.defaultTitle;
      }

      if (updatedTitle) {
        tagsToRender.push(
          React__default['default'].createElement(
            'title',
            {
              key: 'title',
            },
            updatedTitle
          )
        );
      }

      var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
      var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;
      var robotsParams = '';

      if (config.robotsProps) {
        var _config$robotsProps = config.robotsProps,
          nosnippet = _config$robotsProps.nosnippet,
          maxSnippet = _config$robotsProps.maxSnippet,
          maxImagePreview = _config$robotsProps.maxImagePreview,
          maxVideoPreview = _config$robotsProps.maxVideoPreview,
          noarchive = _config$robotsProps.noarchive,
          noimageindex = _config$robotsProps.noimageindex,
          notranslate = _config$robotsProps.notranslate,
          unavailableAfter = _config$robotsProps.unavailableAfter;
        robotsParams =
          '' +
          (nosnippet ? ',nosnippet' : '') +
          (maxSnippet ? ',max-snippet:' + maxSnippet : '') +
          (maxImagePreview ? ',max-image-preview:' + maxImagePreview : '') +
          (noarchive ? ',noarchive' : '') +
          (unavailableAfter ? ',unavailable_after:' + unavailableAfter : '') +
          (noimageindex ? ',noimageindex' : '') +
          (maxVideoPreview ? ',max-video-preview:' + maxVideoPreview : '') +
          (notranslate ? ',notranslate' : '');
      }

      if (noindex || nofollow) {
        if (config.dangerouslySetAllPagesToNoIndex) {
          defaults.noindex = true;
        }

        if (config.dangerouslySetAllPagesToNoFollow) {
          defaults.nofollow = true;
        }

        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'robots',
            name: 'robots',
            content: (noindex ? 'noindex' : 'index') + ',' + (nofollow ? 'nofollow' : 'follow') + robotsParams,
          })
        );
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'googlebot',
            name: 'googlebot',
            content: (noindex ? 'noindex' : 'index') + ',' + (nofollow ? 'nofollow' : 'follow') + robotsParams,
          })
        );
      } else {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'robots',
            name: 'robots',
            content: 'index,follow' + robotsParams,
          })
        );
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'googlebot',
            name: 'googlebot',
            content: 'index,follow' + robotsParams,
          })
        );
      }

      if (config.description) {
        tagsToRender.push(
          React__default['default'].createElement('meta', {
            key: 'description',
            name: 'description',
            content: config.description,
          })
        );
      }

      if (config.mobileAlternate) {
        tagsToRender.push(
          React__default['default'].createElement('link', {
            rel: 'alternate',
            key: 'mobileAlternate',
            media: config.mobileAlternate.media,
            href: config.mobileAlternate.href,
          })
        );
      }

      if (config.languageAlternates && config.languageAlternates.length > 0) {
        config.languageAlternates.forEach(function (languageAlternate) {
          tagsToRender.push(
            React__default['default'].createElement('link', {
              rel: 'alternate',
              key: 'languageAlternate-' + languageAlternate.hrefLang,
              hrefLang: languageAlternate.hrefLang,
              href: languageAlternate.href,
            })
          );
        });
      }

      if (config.twitter) {
        if (config.twitter.cardType) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'twitter:card',
              name: 'twitter:card',
              content: config.twitter.cardType,
            })
          );
        }

        if (config.twitter.site) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'twitter:site',
              name: 'twitter:site',
              content: config.twitter.site,
            })
          );
        }

        if (config.twitter.handle) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'twitter:creator',
              name: 'twitter:creator',
              content: config.twitter.handle,
            })
          );
        }
      }

      if (config.facebook) {
        if (config.facebook.appId) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'fb:app_id',
              property: 'fb:app_id',
              content: config.facebook.appId,
            })
          );
        }
      }

      if (config.openGraph) {
        if (config.openGraph.url || config.canonical) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:url',
              property: 'og:url',
              content: config.openGraph.url || config.canonical,
            })
          );
        }

        if (config.openGraph.type) {
          var type = config.openGraph.type.toLowerCase();
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:type',
              property: 'og:type',
              content: type,
            })
          );

          if (type === 'profile' && config.openGraph.profile) {
            if (config.openGraph.profile.firstName) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'profile:first_name',
                  property: 'profile:first_name',
                  content: config.openGraph.profile.firstName,
                })
              );
            }

            if (config.openGraph.profile.lastName) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'profile:last_name',
                  property: 'profile:last_name',
                  content: config.openGraph.profile.lastName,
                })
              );
            }

            if (config.openGraph.profile.username) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'profile:username',
                  property: 'profile:username',
                  content: config.openGraph.profile.username,
                })
              );
            }

            if (config.openGraph.profile.gender) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'profile:gender',
                  property: 'profile:gender',
                  content: config.openGraph.profile.gender,
                })
              );
            }
          } else if (type === 'book' && config.openGraph.book) {
            if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
              config.openGraph.book.authors.forEach(function (author, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'book:author:0' + index,
                    property: 'book:author',
                    content: author,
                  })
                );
              });
            }

            if (config.openGraph.book.isbn) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'book:isbn',
                  property: 'book:isbn',
                  content: config.openGraph.book.isbn,
                })
              );
            }

            if (config.openGraph.book.releaseDate) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'book:release_date',
                  property: 'book:release_date',
                  content: config.openGraph.book.releaseDate,
                })
              );
            }

            if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
              config.openGraph.book.tags.forEach(function (tag, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'book:tag:0' + index,
                    property: 'book:tag',
                    content: tag,
                  })
                );
              });
            }
          } else if (type === 'article' && config.openGraph.article) {
            if (config.openGraph.article.publishedTime) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:published_time',
                  property: 'article:published_time',
                  content: config.openGraph.article.publishedTime,
                })
              );
            }

            if (config.openGraph.article.modifiedTime) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:modified_time',
                  property: 'article:modified_time',
                  content: config.openGraph.article.modifiedTime,
                })
              );
            }

            if (config.openGraph.article.expirationTime) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:expiration_time',
                  property: 'article:expiration_time',
                  content: config.openGraph.article.expirationTime,
                })
              );
            }

            if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
              config.openGraph.article.authors.forEach(function (author, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'article:author:0' + index,
                    property: 'article:author',
                    content: author,
                  })
                );
              });
            }

            if (config.openGraph.article.section) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'article:section',
                  property: 'article:section',
                  content: config.openGraph.article.section,
                })
              );
            }

            if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
              config.openGraph.article.tags.forEach(function (tag, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'article:tag:0' + index,
                    property: 'article:tag',
                    content: tag,
                  })
                );
              });
            }
          } else if (
            (type === 'video.movie' ||
              type === 'video.episode' ||
              type === 'video.tv_show' ||
              type === 'video.other') &&
            config.openGraph.video
          ) {
            if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
              config.openGraph.video.actors.forEach(function (actor, index) {
                if (actor.profile) {
                  tagsToRender.push(
                    React__default['default'].createElement('meta', {
                      key: 'video:actor:0' + index,
                      property: 'video:actor',
                      content: actor.profile,
                    })
                  );
                }

                if (actor.role) {
                  tagsToRender.push(
                    React__default['default'].createElement('meta', {
                      key: 'video:actor:role:0' + index,
                      property: 'video:actor:role',
                      content: actor.role,
                    })
                  );
                }
              });
            }

            if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
              config.openGraph.video.directors.forEach(function (director, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'video:director:0' + index,
                    property: 'video:director',
                    content: director,
                  })
                );
              });
            }

            if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
              config.openGraph.video.writers.forEach(function (writer, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'video:writer:0' + index,
                    property: 'video:writer',
                    content: writer,
                  })
                );
              });
            }

            if (config.openGraph.video.duration) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:duration',
                  property: 'video:duration',
                  content: config.openGraph.video.duration.toString(),
                })
              );
            }

            if (config.openGraph.video.releaseDate) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:release_date',
                  property: 'video:release_date',
                  content: config.openGraph.video.releaseDate,
                })
              );
            }

            if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
              config.openGraph.video.tags.forEach(function (tag, index) {
                tagsToRender.push(
                  React__default['default'].createElement('meta', {
                    key: 'video:tag:0' + index,
                    property: 'video:tag',
                    content: tag,
                  })
                );
              });
            }

            if (config.openGraph.video.series) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'video:series',
                  property: 'video:series',
                  content: config.openGraph.video.series,
                })
              );
            }
          }
        }

        if (config.openGraph.title || config.title) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:title',
              property: 'og:title',
              content: config.openGraph.title || updatedTitle,
            })
          );
        }

        if (config.openGraph.description || config.description) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:description',
              property: 'og:description',
              content: config.openGraph.description || config.description,
            })
          );
        } // images

        if (config.defaultOpenGraphImageWidth) {
          defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
        }

        if (config.defaultOpenGraphImageHeight) {
          defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
        }

        if (config.openGraph.images && config.openGraph.images.length) {
          config.openGraph.images.forEach(function (image, index) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:image:0' + index,
                property: 'og:image',
                content: image.url,
              })
            );

            if (image.alt) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:image:alt0' + index,
                  property: 'og:image:alt',
                  content: image.alt,
                })
              );
            }

            if (image.width) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:image:width0' + index,
                  property: 'og:image:width',
                  content: image.width.toString(),
                })
              );
            } else if (defaults.defaultOpenGraphImageWidth) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:image:width0' + index,
                  property: 'og:image:width',
                  content: defaults.defaultOpenGraphImageWidth.toString(),
                })
              );
            }

            if (image.height) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:image:height' + index,
                  property: 'og:image:height',
                  content: image.height.toString(),
                })
              );
            } else if (defaults.defaultOpenGraphImageHeight) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:image:height' + index,
                  property: 'og:image:height',
                  content: defaults.defaultOpenGraphImageHeight.toString(),
                })
              );
            }
          });
        } // videos

        if (config.defaultOpenGraphVideoWidth) {
          defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
        }

        if (config.defaultOpenGraphVideoHeight) {
          defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
        }

        if (config.openGraph.videos && config.openGraph.videos.length) {
          config.openGraph.videos.forEach(function (video, index) {
            tagsToRender.push(
              React__default['default'].createElement('meta', {
                key: 'og:video:0' + index,
                property: 'og:video',
                content: video.url,
              })
            );

            if (video.alt) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:video:alt0' + index,
                  property: 'og:video:alt',
                  content: video.alt,
                })
              );
            }

            if (video.width) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:video:width0' + index,
                  property: 'og:video:width',
                  content: video.width.toString(),
                })
              );
            } else if (defaults.defaultOpenGraphVideoWidth) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:video:width0' + index,
                  property: 'og:video:width',
                  content: defaults.defaultOpenGraphVideoWidth.toString(),
                })
              );
            }

            if (video.height) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:video:height' + index,
                  property: 'og:video:height',
                  content: video.height.toString(),
                })
              );
            } else if (defaults.defaultOpenGraphVideoHeight) {
              tagsToRender.push(
                React__default['default'].createElement('meta', {
                  key: 'og:video:height' + index,
                  property: 'og:video:height',
                  content: defaults.defaultOpenGraphVideoHeight.toString(),
                })
              );
            }
          });
        }

        if (config.openGraph.locale) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:locale',
              property: 'og:locale',
              content: config.openGraph.locale,
            })
          );
        }

        if (config.openGraph.site_name) {
          tagsToRender.push(
            React__default['default'].createElement('meta', {
              key: 'og:site_name',
              property: 'og:site_name',
              content: config.openGraph.site_name,
            })
          );
        }
      }

      if (config.canonical) {
        tagsToRender.push(
          React__default['default'].createElement('link', {
            rel: 'canonical',
            href: config.canonical,
            key: 'canonical',
          })
        );
      }

      if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
        config.additionalMetaTags.forEach(function (tag) {
          var _ref, _ref2, _tag$keyOverride;

          tagsToRender.push(
            React__default['default'].createElement(
              'meta',
              Object.assign(
                {
                  key:
                    'meta:' +
                    ((_ref =
                      (_ref2 = (_tag$keyOverride = tag.keyOverride) != null ? _tag$keyOverride : tag.name) != null
                        ? _ref2
                        : tag.property) != null
                      ? _ref
                      : tag.httpEquiv),
                },
                tag
              )
            )
          );
        });
      }

      if ((_config$additionalLin = config.additionalLinkTags) != null && _config$additionalLin.length) {
        config.additionalLinkTags.forEach(function (tag) {
          var _tag$keyOverride2;

          tagsToRender.push(
            React__default['default'].createElement(
              'link',
              Object.assign(
                {
                  key:
                    'link' + ((_tag$keyOverride2 = tag.keyOverride) != null ? _tag$keyOverride2 : tag.href) + tag.rel,
                },
                tag
              )
            )
          );
        });
      }

      return tagsToRender;
    };

    var _default = /*#__PURE__*/ (function (_Component) {
      _inheritsLoose(_default, _Component);

      function _default() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = _default.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
          title = _this$props.title,
          titleTemplate = _this$props.titleTemplate,
          defaultTitle = _this$props.defaultTitle,
          _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
          dangerouslySetAllPagesToNoIndex = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
          _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
          dangerouslySetAllPagesToNoFollow = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
          description = _this$props.description,
          canonical = _this$props.canonical,
          facebook = _this$props.facebook,
          openGraph = _this$props.openGraph,
          additionalMetaTags = _this$props.additionalMetaTags,
          twitter = _this$props.twitter,
          defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
          defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
          defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
          defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
          mobileAlternate = _this$props.mobileAlternate,
          languageAlternates = _this$props.languageAlternates,
          additionalLinkTags = _this$props.additionalLinkTags;
        return React__default['default'].createElement(
          Head__default['default'],
          null,
          buildTags({
            title: title,
            titleTemplate: titleTemplate,
            defaultTitle: defaultTitle,
            dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
            dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
            description: description,
            canonical: canonical,
            facebook: facebook,
            openGraph: openGraph,
            additionalMetaTags: additionalMetaTags,
            twitter: twitter,
            defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
            defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
            defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
            defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
            mobileAlternate: mobileAlternate,
            languageAlternates: languageAlternates,
            additionalLinkTags: additionalLinkTags,
          })
        );
      };

      return _default;
    })(React.Component);

    var _default$1 = /*#__PURE__*/ (function (_Component) {
      _inheritsLoose(_default, _Component);

      function _default() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = _default.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
          title = _this$props.title,
          _this$props$noindex = _this$props.noindex,
          noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
          nofollow = _this$props.nofollow,
          robotsProps = _this$props.robotsProps,
          description = _this$props.description,
          canonical = _this$props.canonical,
          openGraph = _this$props.openGraph,
          facebook = _this$props.facebook,
          twitter = _this$props.twitter,
          additionalMetaTags = _this$props.additionalMetaTags,
          titleTemplate = _this$props.titleTemplate,
          mobileAlternate = _this$props.mobileAlternate,
          languageAlternates = _this$props.languageAlternates,
          additionalLinkTags = _this$props.additionalLinkTags;
        return React__default['default'].createElement(
          Head__default['default'],
          null,
          buildTags({
            title: title,
            noindex: noindex,
            nofollow: nofollow,
            robotsProps: robotsProps,
            description: description,
            canonical: canonical,
            facebook: facebook,
            openGraph: openGraph,
            additionalMetaTags: additionalMetaTags,
            twitter: twitter,
            titleTemplate: titleTemplate,
            mobileAlternate: mobileAlternate,
            languageAlternates: languageAlternates,
            additionalLinkTags: additionalLinkTags,
          })
        );
      };

      return _default;
    })(React.Component);

    var markup = function markup(jsonld) {
      return {
        __html: jsonld,
      };
    };

    var formatAuthorName = function formatAuthorName(authorName) {
      return Array.isArray(authorName)
        ? '[' +
            authorName.map(function (name) {
              return '{"@type": "Person","name": "' + name + '"}';
            }) +
            ']'
        : '{"@type": "Person","name": "' + authorName + '"}';
    };

    var ArticleJsonLd = function ArticleJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        title = _ref.title,
        _ref$images = _ref.images,
        images = _ref$images === void 0 ? [] : _ref$images,
        datePublished = _ref.datePublished,
        _ref$dateModified = _ref.dateModified,
        dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
        authorName = _ref.authorName,
        description = _ref.description,
        publisherName = _ref.publisherName,
        publisherLogo = _ref.publisherLogo;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
        url +
        '"\n    },\n    "headline": "' +
        title +
        '",\n    "image": [\n      ' +
        images.map(function (image) {
          return '"' + image + '"';
        }) +
        '\n     ],\n    "datePublished": "' +
        datePublished +
        '",\n    "dateModified": "' +
        (dateModified || datePublished) +
        '",\n    "author": ' +
        formatAuthorName(authorName) +
        ',\n    "publisher": {\n      "@type": "Organization",\n      "name": "' +
        publisherName +
        '",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "' +
        publisherLogo +
        '"\n      }\n    },\n    "description": "' +
        description +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-article' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        _ref$itemListElements = _ref.itemListElements,
        itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      ' +
        itemListElements.map(function (itemListElement) {
          return (
            '{\n        "@type": "ListItem",\n        "position": ' +
            itemListElement.position +
            ',\n        "item": {\n          "@id": "' +
            itemListElement.item +
            '",\n          "name": "' +
            itemListElement.name +
            '"\n        }\n      }'
          );
        }) +
        '\n     ]\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-breadcrumb' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildQuestions = function buildQuestions(mainEntity) {
      return (
        '\n  ' +
        mainEntity.map(function (question) {
          return (
            '{\n      "@type": "Question",\n      "name": "' +
            question.questionName +
            '",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "' +
            question.acceptedAnswerText +
            '"\n      }\n  }'
          );
        })
      );
    };

    var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
      var _ref$mainEntity = _ref.mainEntity,
        mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
      var jslonld =
        '{\n    "@context": "https://schema.org/",\n    "@type": "FAQPage",\n    "mainEntity": [' +
        buildQuestions(mainEntity) +
        ']\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-faq-page',
        })
      );
    };

    var buildBaseSalary = function buildBaseSalary(baseSalary) {
      return (
        '\n  "baseSalary": {\n    "@type": "MonetaryAmount",\n    ' +
        (baseSalary.currency ? '"currency": "' + baseSalary.currency + '",' : '') +
        '\n    "value": {\n      ' +
        (baseSalary.value
          ? Array.isArray(baseSalary.value)
            ? '"minValue": "' + baseSalary.value[0] + '", "maxValue": "' + baseSalary.value[1] + '",'
            : '"value": "' + baseSalary.value + '",'
          : '') +
        '\n      ' +
        (baseSalary.unitText ? '"unitText": "' + baseSalary.unitText + '",' : '') +
        '\n      "@type": "QuantitativeValue"\n    }\n  },\n'
      );
    };

    var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        baseSalary = _ref.baseSalary,
        datePosted = _ref.datePosted,
        description = _ref.description,
        employmentType = _ref.employmentType,
        hiringOrganization = _ref.hiringOrganization,
        jobLocation = _ref.jobLocation,
        applicantLocationRequirements = _ref.applicantLocationRequirements,
        jobLocationType = _ref.jobLocationType,
        title = _ref.title,
        validThrough = _ref.validThrough;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "JobPosting",\n    ' +
        (baseSalary ? buildBaseSalary(baseSalary) : '') +
        '\n    "datePosted": "' +
        datePosted +
        '",\n    "description": "' +
        description +
        '",\n    ' +
        (employmentType ? '"employmentType": "' + employmentType + '",' : '') +
        '\n    "hiringOrganization" : {\n      "@type" : "Organization",\n      "name" : "' +
        hiringOrganization.name +
        '",\n      "sameAs" : "' +
        hiringOrganization.sameAs +
        '"\n      ' +
        (hiringOrganization.logo ? ',"logo": "' + hiringOrganization.logo + '"' : '') +
        '\n    },\n    ' +
        (jobLocation
          ? '"jobLocation": {\n      "@type": "Place",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "' +
            jobLocation.addressLocality +
            '",\n        "addressRegion": "' +
            jobLocation.addressRegion +
            '",\n        "postalCode" : "' +
            jobLocation.postalCode +
            '",\n        "streetAddress" : "' +
            jobLocation.streetAddress +
            '",\n        "addressCountry" : "' +
            jobLocation.addressCountry +
            '"\n          }\n      },'
          : '') +
        '\n    ' +
        (applicantLocationRequirements
          ? ' "applicantLocationRequirements": {\n        "@type": "Country",\n        "name": "' +
            applicantLocationRequirements +
            '"\n    },'
          : '') +
        '\n    ' +
        (jobLocationType ? '"jobLocationType": "' + jobLocationType + '",' : '') +
        '\n    ' +
        (validThrough ? '"validThrough": "' + validThrough + '",' : '') +
        '\n    "title": "' +
        title +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-jobposting' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var BlogJsonLd = function BlogJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        title = _ref.title,
        _ref$images = _ref.images,
        images = _ref$images === void 0 ? [] : _ref$images,
        datePublished = _ref.datePublished,
        _ref$dateModified = _ref.dateModified,
        dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
        authorName = _ref.authorName,
        description = _ref.description;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
        url +
        '"\n    },\n    "headline": "' +
        title +
        '",\n    "image": [\n      ' +
        images.map(function (image) {
          return '"' + image + '"';
        }) +
        '\n     ],\n    "datePublished": "' +
        datePublished +
        '",\n    "dateModified": "' +
        (dateModified || datePublished) +
        '",\n    "author": ' +
        formatAuthorName(authorName) +
        ',\n    "description": "' +
        description +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-blog' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var CourseJsonLd = function CourseJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        courseName = _ref.courseName,
        description = _ref.description,
        providerName = _ref.providerName,
        providerUrl = _ref.providerUrl;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Course",\n    "name": "' +
        courseName +
        '",\n    "description": "' +
        description +
        '",\n    "provider": {\n      "@type": "Organization",\n      "name": "' +
        providerName +
        '"' +
        (providerUrl ? ',\n      "sameAs": "' + providerUrl + '"' : '') +
        '\n    }\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-course' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var DatasetJsonLd = function DatasetJsonLd(_ref) {
      var description = _ref.description,
        name = _ref.name,
        license = _ref.license;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Dataset",\n    "description": "' +
        description +
        '",\n    "name": "' +
        name +
        '"' +
        (license ? ',\n        "license": "' + license + '"' : '') +
        '\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-dataset',
        })
      );
    };

    var formatIfArray = function formatIfArray(value) {
      return Array.isArray(value)
        ? '[' +
            value.map(function (val) {
              return '"' + val + '"';
            }) +
            ']'
        : '"' + value + '"';
    };

    var buildAddress = function (address) {
      return (
        '\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "' +
        address.streetAddress +
        '",\n    "addressLocality": "' +
        address.addressLocality +
        '",\n    ' +
        (address.addressRegion ? '"addressRegion": "' + address.addressRegion + '",' : '') +
        '\n    "postalCode": "' +
        address.postalCode +
        '",\n    "addressCountry": "' +
        address.addressCountry +
        '"\n  },\n'
      );
    };

    var buildAction = function buildAction(action) {
      return (
        '\n  "' +
        action.actionName +
        '": {\n    "@type": "' +
        action.actionType +
        '",\n    "target": "' +
        action.target +
        '"\n  }\n'
      );
    };

    var buildAreaServed = function buildAreaServed(areaServed) {
      return (
        '\n  "areaServed": [\n    ' +
        areaServed.map(function (area) {
          return buildGeoCircle(area);
        }) +
        '\n  ]\n'
      );
    };

    var buildAggregateRating = function buildAggregateRating(aggregateRating) {
      return (
        '\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "' +
        aggregateRating.ratingValue +
        '",\n    "ratingCount": "' +
        aggregateRating.ratingCount +
        '"\n  },\n'
      );
    };

    var buildGeo = function buildGeo(geo) {
      return (
        '\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "' +
        geo.latitude +
        '",\n    "longitude": "' +
        geo.longitude +
        '"\n  },\n'
      );
    };

    var buildGeoCircle = function buildGeoCircle(geoCircle) {
      return (
        '\n  {\n    "@type": "GeoCircle",\n    "geoMidpoint": {\n      "@type": "GeoCoordinates",\n      "latitude": "' +
        geoCircle.geoMidpoint.latitude +
        '",\n      "longitude": "' +
        geoCircle.geoMidpoint.longitude +
        '"\n    },\n    "geoRadius": "' +
        geoCircle.geoRadius +
        '"\n  }\n'
      );
    };

    var buildMakesOffer = function buildMakesOffer(makesOffer) {
      return (
        '\n  "makesOffer":[\n    ' +
        makesOffer.map(function (offer) {
          return buildOffer(offer);
        }) +
        '\n  ]\n'
      );
    };

    var buildOffer = function buildOffer(offer) {
      return (
        '\n  {\n    "@type": "Offer",\n    ' +
        buildPriceSpecification(offer.priceSpecification) +
        ',\n    ' +
        buildItemOffered(offer.itemOffered) +
        '\n  }\n'
      );
    };

    var buildOpeningHours = function buildOpeningHours(openingHours) {
      return (
        '\n  {\n    "@type": "OpeningHoursSpecification",\n    ' +
        (openingHours.dayOfWeek ? '"dayOfWeek": ' + formatIfArray(openingHours.dayOfWeek) + ',' : '') +
        '\n    "opens": "' +
        openingHours.opens +
        '",\n    ' +
        (openingHours.validFrom ? '"validFrom": "' + openingHours.validFrom + '",' : '') +
        '\n    ' +
        (openingHours.validThrough ? '"validThrough": "' + openingHours.validThrough + '",' : '') +
        '\n    "closes": "' +
        openingHours.closes +
        '"\n  }\n'
      );
    };

    var buildPriceSpecification = function buildPriceSpecification(priceSpecification) {
      return (
        '\n  "priceSpecification": {\n    "@type": "' +
        priceSpecification.type +
        '",\n    "priceCurrency": "' +
        priceSpecification.priceCurrency +
        '",\n    "price": "' +
        priceSpecification.price +
        '"\n  }\n'
      );
    };

    var buildRating = function buildRating(rating) {
      return (
        '\n  {\n    "@type": "Rating",\n    ' +
        (rating.bestRating ? '"bestRating": "' + rating.bestRating + '",' : '') +
        '\n    ' +
        (rating.reviewAspect ? '"reviewAspect": "' + rating.reviewAspect + '",' : '') +
        '\n    ' +
        (rating.worstRating ? '"worstRating": "' + rating.worstRating + '",' : '') +
        '\n    "ratingValue": "' +
        rating.ratingValue +
        '"\n  }\n'
      );
    };

    var buildReview = function buildReview(reviews) {
      return (
        '\n  "review": [\n    ' +
        reviews.map(function (review) {
          return (
            '\n      {\n        "@type": "Review",\n        "author": "' +
            review.author +
            '",\n        "datePublished": "' +
            review.datePublished +
            '",\n        ' +
            (review.name ? '"name": "' + review.name + '",' : '') +
            '\n        "reviewBody": "' +
            review.reviewBody +
            '",\n        "reviewRating": ' +
            buildRating(review.reviewRating) +
            '\n      }\n    '
          );
        }) +
        '\n  ],\n'
      );
    };

    var buildItemOffered = function buildItemOffered(service) {
      return (
        '\n  "itemOffered": {\n    "@type": "Service",\n    "name": "' +
        service.name +
        '",\n    "description": "' +
        service.description +
        '"\n  }\n'
      );
    };

    var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        type = _ref.type,
        id = _ref.id,
        name = _ref.name,
        description = _ref.description,
        url = _ref.url,
        telephone = _ref.telephone,
        address = _ref.address,
        geo = _ref.geo,
        images = _ref.images,
        rating = _ref.rating,
        review = _ref.review,
        priceRange = _ref.priceRange,
        servesCuisine = _ref.servesCuisine,
        sameAs = _ref.sameAs,
        openingHours = _ref.openingHours,
        action = _ref.action,
        areaServed = _ref.areaServed,
        makesOffer = _ref.makesOffer;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "' +
        type +
        '",\n    ' +
        (id ? '"@id": "' + id + '",' : '') +
        '\n    ' +
        (description ? '"description": "' + description + '",' : '') +
        '\n    ' +
        (url ? '"url": "' + url + '",' : '') +
        '\n    ' +
        (telephone ? '"telephone": "' + telephone + '",' : '') +
        '\n    ' +
        buildAddress(address) +
        '\n    ' +
        (geo ? '' + buildGeo(geo) : '') +
        '\n    ' +
        (rating ? '' + buildAggregateRating(rating) : '') +
        '\n    ' +
        (review ? '' + buildReview(review) : '') +
        '\n    ' +
        (action ? buildAction(action) + ',' : '') +
        '\n    ' +
        (areaServed ? buildAreaServed(areaServed) + ',' : '') +
        '\n    ' +
        (makesOffer ? buildMakesOffer(makesOffer) + ',' : '') +
        '\n    ' +
        (priceRange ? '"priceRange": "' + priceRange + '",' : '') +
        '\n    ' +
        (servesCuisine ? '"servesCuisine":' + formatIfArray(servesCuisine) + ',' : '') +
        '\n    ' +
        (images ? '"image":' + formatIfArray(images) + ',' : '') +
        '\n    ' +
        (sameAs
          ? '"sameAs": [' +
            sameAs.map(function (url) {
              return '"' + url + '"';
            }) +
            '],'
          : '') +
        '\n    ' +
        (openingHours
          ? '"openingHoursSpecification": ' +
            (Array.isArray(openingHours)
              ? '[' +
                openingHours.map(function (hours) {
                  return '' + buildOpeningHours(hours);
                }) +
                ']'
              : buildOpeningHours(openingHours)) +
            ','
          : '') +
        '\n    "name": "' +
        name +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-local-business' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var LogoJsonLd = function LogoJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        logo = _ref.logo;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "' +
        url +
        '",\n    "logo": "' +
        logo +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-logo' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    // TODO: Docs for offers itemCondition & availability
    // TODO: Seller type, make dynamic
    var buildOffers = function buildOffers(offers) {
      return (
        '\n  {\n    "@type": "Offer",\n    "priceCurrency": "' +
        offers.priceCurrency +
        '",\n    ' +
        (offers.priceValidUntil ? '"priceValidUntil": "' + offers.priceValidUntil + '",' : '') +
        '\n    ' +
        (offers.itemCondition ? '"itemCondition": "' + offers.itemCondition + '",' : '') +
        '\n    ' +
        (offers.availability ? '"availability": "' + offers.availability + '",' : '') +
        '\n    ' +
        (offers.url ? '"url": "' + offers.url + '",' : '') +
        '\n    ' +
        (offers.seller
          ? '\n      "seller": {\n      "@type": "Organization",\n      "name": "' +
            offers.seller.name +
            '"\n    },\n    '
          : '') +
        '\n    "price": "' +
        offers.price +
        '"\n  }\n'
      );
    };

    var buildAggregateOffer = function buildAggregateOffer(offer) {
      return (
        '\n  {\n    "@type": "AggregateOffer",\n    "priceCurrency": "' +
        offer.priceCurrency +
        '",\n    ' +
        (offer.highPrice ? '"highPrice": "' + offer.highPrice + '",' : '') +
        '\n    ' +
        (offer.offerCount ? '"offerCount": "' + offer.offerCount + '",' : '') +
        '\n    "lowPrice": "' +
        offer.lowPrice +
        '"\n  }\n'
      );
    };

    var buildBrand = function buildBrand(brand) {
      return '\n  "brand": {\n      "@type": "Thing",\n      "name": "' + brand + '"\n    },\n';
    };

    var buildReviewRating = function buildReviewRating(rating) {
      return rating
        ? '"reviewRating": {\n          "@type": "Rating",\n          ' +
            (rating.bestRating ? '"bestRating": "' + rating.bestRating + '",' : '') +
            '\n          ' +
            (rating.worstRating ? '"worstRating": "' + rating.worstRating + '",' : '') +
            '\n          "ratingValue": "' +
            rating.ratingValue +
            '"\n        }'
        : '';
    };
    var buildAuthor = function buildAuthor(author) {
      return '\n  "author": {\n      "@type": "' + author.type + '",\n      "name": "' + author.name + '"\n  },\n';
    };
    var buildPublisher = function buildPublisher(publisher) {
      return (
        '\n  "publisher": {\n      "@type": "' + publisher.type + '",\n      "name": "' + publisher.name + '"\n  },\n'
      );
    };
    var buildReviews = function buildReviews(reviews) {
      return (
        '\n"review": [\n  ' +
        reviews.map(function (review) {
          return (
            '{\n      "@type": "Review",\n      ' +
            (review.author ? buildAuthor(review.author) : '') +
            '\n      ' +
            (review.publisher ? buildPublisher(review.publisher) : '') +
            '\n      ' +
            (review.datePublished ? '"datePublished": "' + review.datePublished + '",' : '') +
            '\n      ' +
            (review.reviewBody ? '"reviewBody": "' + review.reviewBody + '",' : '') +
            '\n      ' +
            (review.name ? '"name": "' + review.name + '",' : '') +
            '\n      ' +
            buildReviewRating(review.reviewRating) +
            '\n  }'
          );
        }) +
        '],'
      );
    };
    var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
      return (
        '\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "' +
        aggregateRating.ratingValue +
        '",\n      "reviewCount": "' +
        aggregateRating.reviewCount +
        '"\n    },\n'
      );
    };

    var ProductJsonLd = function ProductJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        productName = _ref.productName,
        _ref$images = _ref.images,
        images = _ref$images === void 0 ? [] : _ref$images,
        description = _ref.description,
        sku = _ref.sku,
        gtin8 = _ref.gtin8,
        gtin13 = _ref.gtin13,
        gtin14 = _ref.gtin14,
        mpn = _ref.mpn,
        brand = _ref.brand,
        _ref$reviews = _ref.reviews,
        reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
        aggregateRating = _ref.aggregateRating,
        offers = _ref.offers,
        aggregateOffer = _ref.aggregateOffer;
      var jslonld =
        '{\n    "@context": "https://schema.org/",\n    "@type": "Product",\n    "image":' +
        formatIfArray(images) +
        ',\n    ' +
        (description ? '"description": "' + description + '",' : '') +
        '\n    ' +
        (mpn ? '"mpn": "' + mpn + '",' : '') +
        '\n    ' +
        (sku ? '"sku": "' + sku + '",' : '') +
        '\n    ' +
        (gtin8 ? '"gtin8": "' + gtin8 + '",' : '') +
        '\n    ' +
        (gtin13 ? '"gtin13": "' + gtin13 + '",' : '') +
        '\n    ' +
        (gtin14 ? '"gtin14": "' + gtin14 + '",' : '') +
        '\n    ' +
        (brand ? buildBrand(brand) : '') +
        '\n    ' +
        (reviews.length ? buildReviews(reviews) : '') +
        '\n    ' +
        (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') +
        '\n    ' +
        (offers
          ? '"offers": ' +
            (Array.isArray(offers)
              ? '[' +
                offers.map(function (offer) {
                  return '' + buildOffers(offer);
                }) +
                ']'
              : buildOffers(offers)) +
            ','
          : '') +
        '\n    ' +
        (aggregateOffer && !offers ? '"offers": ' + buildAggregateOffer(aggregateOffer) + ',' : '') +
        '\n    "name": "' +
        productName +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-product' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        type = _ref.type,
        name = _ref.name,
        url = _ref.url,
        _ref$sameAs = _ref.sameAs,
        sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "' +
        type +
        '",\n    "name": "' +
        name +
        '",\n    "url": "' +
        url +
        '",\n    "sameAs": [\n      ' +
        sameAs.map(function (socialUrl) {
          return '"' + socialUrl + '"';
        }) +
        '\n     ]\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-social' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var formatIfArray$1 = function formatIfArray(value) {
      return Array.isArray(value)
        ? '[' +
            value.map(function (val) {
              return '"' + val + '"';
            }) +
            ']'
        : '"' + value + '"';
    };

    var buildContactPoint = function buildContactPoint(contactPoint) {
      return contactPoint.map(function (contact) {
        return (
          '{\n    "@type": "ContactPoint",\n    "telephone": "' +
          contact.telephone +
          '",\n    "contactType": "' +
          contact.contactType +
          '"' +
          (contact.areaServed ? ',\n    "areaServed": ' + formatIfArray$1(contact.areaServed) : '') +
          (contact.availableLanguage
            ? ',\n    "availableLanguage": ' + formatIfArray$1(contact.availableLanguage)
            : '') +
          (contact.contactOption ? ',\n    "contactOption": "' + contact.contactOption + '"' : '') +
          '\n    }'
        );
      });
    };

    var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        logo = _ref.logo,
        contactPoint = _ref.contactPoint;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "' +
        url +
        '",\n    ' +
        (logo ? '"logo": "' + logo + '",' : '') +
        '\n    "contactPoint": [' +
        buildContactPoint(contactPoint) +
        ']\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-corporate-contact' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        title = _ref.title,
        _ref$images = _ref.images,
        images = _ref$images === void 0 ? [] : _ref$images,
        section = _ref.section,
        keywords = _ref.keywords,
        datePublished = _ref.datePublished,
        _ref$dateCreated = _ref.dateCreated,
        dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
        _ref$dateModified = _ref.dateModified,
        dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
        authorName = _ref.authorName,
        description = _ref.description,
        body = _ref.body,
        publisherName = _ref.publisherName,
        publisherLogo = _ref.publisherLogo;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "NewsArticle",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "' +
        url +
        '"\n    },\n    "headline": "' +
        title +
        '",\n    "image": [\n      ' +
        images.map(function (image) {
          return '"' + image + '"';
        }) +
        '\n     ],\n    "articleSection":"' +
        section +
        '",\n    "keywords": "' +
        keywords +
        '",\n    "datePublished": "' +
        datePublished +
        '",\n    "dateCreated": "' +
        (dateCreated || datePublished) +
        '",\n    "dateModified": "' +
        (dateModified || datePublished) +
        '",\n    "author": ' +
        formatAuthorName(authorName) +
        ',\n    "publisher": {\n      "@type": "Organization",\n      "name": "' +
        publisherName +
        '",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "' +
        publisherLogo +
        '"\n      }\n    },\n    "description": "' +
        description +
        '",\n    "articleBody": "' +
        body +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-newsarticle' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildLocation = function buildLocation(location) {
      return (
        '\n  "location": {\n    "@type": "Place",\n    ' +
        buildAddress(location.address) +
        '\n    ' +
        (location.sameAs ? '"sameAs": "' + location.sameAs + '",' : '') +
        '\n    "name": "' +
        location.name +
        '"\n  },\n'
      );
    };

    var buildPerformer = function buildPerformer(performer) {
      return '\n  {\n    "@type": "PerformingGroup",\n    "name": "' + performer.name + '"\n  }\n';
    };

    var EventJsonLd = function EventJsonLd(_ref) {
      var name = _ref.name,
        startDate = _ref.startDate,
        endDate = _ref.endDate,
        location = _ref.location,
        url = _ref.url,
        description = _ref.description,
        images = _ref.images,
        offers = _ref.offers,
        aggregateOffer = _ref.aggregateOffer,
        performers = _ref.performers;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "Event",\n    "startDate": "' +
        startDate +
        '",\n    "endDate": "' +
        endDate +
        '",\n    ' +
        buildLocation(location) +
        '\n    ' +
        (images ? '"image":' + formatIfArray(images) + ',' : '') +
        '\n    ' +
        (url ? '"url": "' + url + '",' : '') +
        '\n    ' +
        (description ? '"description": "' + description + '",' : '') +
        '\n    ' +
        (offers
          ? '"offers": ' +
            (Array.isArray(offers)
              ? '[' +
                offers.map(function (offer) {
                  return '' + buildOffers(offer);
                }) +
                ']'
              : buildOffers(offers)) +
            ','
          : '') +
        '\n    ' +
        (aggregateOffer && !offers ? '"offers": ' + buildAggregateOffer(aggregateOffer) + ',' : '') +
        '\n    ' +
        (performers
          ? '"performer": ' +
            (Array.isArray(performers)
              ? '[' +
                performers.map(function (performer) {
                  return '' + buildPerformer(performer);
                }) +
                ']'
              : buildPerformer(performers)) +
            ','
          : '') +
        '\n    "name": "' +
        name +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-event',
        })
      );
    };

    var buildVideo = function (video, context) {
      if (context === void 0) {
        context = false;
      }

      return (
        '{\n      ' +
        (context ? '"@context": "https://schema.org",' : '') +
        '\n      "@type": "VideoObject",\n      "name": "' +
        video.name +
        '",\n      "description": "' +
        video.description +
        '",\n      "thumbnailUrl": [\n          ' +
        video.thumbnailUrls
          .map(function (thumbnailUrl) {
            return '"' + thumbnailUrl + '"';
          })
          .join(',') +
        '\n        ],\n        ' +
        (video.contentUrl ? '"contentUrl": "' + video.contentUrl + '",' : '') +
        '\n        ' +
        (video.duration ? '"duration": "' + video.duration + '",' : '') +
        '\n        ' +
        (video.embedUrl ? '"embedUrl": "' + video.embedUrl + '",' : '') +
        '\n        ' +
        (video.expires ? '"expires": "' + video.expires + '",' : '') +
        '        \n        ' +
        (video.hasPart
          ? '"hasPart": ' +
            (Array.isArray(video.hasPart)
              ? '[' +
                video.hasPart
                  .map(function (clip) {
                    return '' + buildClip(clip);
                  })
                  .join(',') +
                ']'
              : buildClip(video.hasPart)) +
            ','
          : '') +
        '\n        ' +
        (video.watchCount ? '' + buildInteractionStatistic(video.watchCount) : '') +
        '        \n        ' +
        (video.publication
          ? '"publication": ' +
            (Array.isArray(video.publication)
              ? '[' +
                video.publication
                  .map(function (broadcastEvent) {
                    return '' + buildBroadcastEvent(broadcastEvent);
                  })
                  .join(',') +
                ']'
              : buildBroadcastEvent(video.publication)) +
            ','
          : '') +
        '\n        ' +
        (video.regionsAllowed ? '"regionsAllowed": ' + formatIfArray(video.regionsAllowed) + ',' : '') +
        '\n        "uploadDate": "' +
        video.uploadDate +
        '"\n  }'
      );
    };

    var buildClip = function buildClip(clip) {
      return (
        '\n  "geo": {\n    "@type": "Clip",\n    "name": "' +
        clip.name +
        '",\n    "startOffset": ' +
        clip.startOffset +
        ',\n    "url": "' +
        clip.url +
        '"\n  }\n'
      );
    };

    var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
      return (
        '\n  "interactionStatistic": {\n    "@type": "InteractionCounter",\n    "interactionType": { "@type": "https://schema.org/WatchAction" },\n    "userInteractionCount": ' +
        watchCount +
        '\n  },\n'
      );
    };

    var buildBroadcastEvent = function buildBroadcastEvent(publication) {
      return (
        '\n  "publication": {\n    "@type": "BroadcastEvent",\n    "name": "' +
        publication.name +
        '",\n    "isLiveBroadcast": ' +
        publication.isLiveBroadcast +
        ',\n    "startDate": "' +
        publication.startDate +
        '",\n    "endDate": "' +
        publication.endDate +
        '"\n  }\n'
      );
    };

    var VideoJsonLd = function VideoJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        name = _ref.name,
        description = _ref.description,
        thumbnailUrls = _ref.thumbnailUrls,
        uploadDate = _ref.uploadDate,
        contentUrl = _ref.contentUrl,
        duration = _ref.duration,
        embedUrl = _ref.embedUrl,
        expires = _ref.expires,
        hasPart = _ref.hasPart,
        watchCount = _ref.watchCount,
        publication = _ref.publication,
        regionsAllowed = _ref.regionsAllowed;
      var jslonld = buildVideo(
        {
          name: name,
          description: description,
          thumbnailUrls: thumbnailUrls,
          uploadDate: uploadDate,
          contentUrl: contentUrl,
          duration: duration,
          embedUrl: embedUrl,
          expires: expires,
          hasPart: hasPart,
          watchCount: watchCount,
          publication: publication,
          regionsAllowed: regionsAllowed,
        },
        true
      );
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-video' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildQuestions$1 = function buildQuestions(mainEntity) {
      return (
        '{\n        "@type": "Question",\n        "name": "' +
        mainEntity.name +
        '",\n        ' +
        (mainEntity.text ? '"text": "' + mainEntity.text + '",' : '') +
        '\n        "answerCount": ' +
        mainEntity.answerCount +
        ',\n        ' +
        (mainEntity.upvotedCount ? '"upvoteCount": ' + mainEntity.upvotedCount + ',' : '') +
        '\n        ' +
        (mainEntity.dateCreated ? '"dateCreated": "' + mainEntity.dateCreated + '",' : '') +
        '\n        ' +
        (mainEntity.author
          ? '"author": {\n          "@type": "Person",\n          "name": "' + mainEntity.author.name + '"\n        },'
          : '') +
        '\n        ' +
        (mainEntity.acceptedAnswer
          ? '"acceptedAnswer": {\n          "@type": "Answer",\n          "text": "' +
            mainEntity.acceptedAnswer.text +
            '",\n          ' +
            (mainEntity.acceptedAnswer.dateCreated
              ? '"dateCreated": "' + mainEntity.acceptedAnswer.dateCreated + '",'
              : '') +
            '\n          ' +
            (mainEntity.acceptedAnswer.upvotedCount
              ? '"upvoteCount": ' + mainEntity.acceptedAnswer.upvotedCount + ','
              : '') +
            '\n          ' +
            (mainEntity.acceptedAnswer.url ? '"url": "' + mainEntity.acceptedAnswer.url + '",' : '') +
            '\n          ' +
            (mainEntity.acceptedAnswer.author
              ? '"author": {\n            "@type": "Person",\n            "name": "' +
                mainEntity.acceptedAnswer.author.name +
                '"\n          }'
              : '') +
            '\n        },'
          : '') +
        '\n        ' +
        (mainEntity.suggestedAnswer
          ? '"suggestedAnswer": [' +
            mainEntity.suggestedAnswer.map(function (suggested) {
              return (
                '{\n            "@type": "Answer",\n            "text": "' +
                suggested.text +
                '",\n            ' +
                (suggested.dateCreated ? '"dateCreated": "' + suggested.dateCreated + '",' : '') +
                '\n            ' +
                (suggested.upvotedCount
                  ? '"upvoteCount": ' + suggested.upvotedCount + ','
                  : '"upvoteCount": ' + 0 + ',') +
                '\n            ' +
                (suggested.url ? '"url": "' + suggested.url + '",' : '') +
                '\n              ' +
                (suggested.author
                  ? '"author": {\n                        "@type": "Person",\n                        "name": "' +
                    suggested.author.name +
                    '"\n                    }'
                  : '') +
                '\n        }'
              );
            }) +
            '\n    ]'
          : '') +
        '\n}'
      );
    };

    var QAPageJsonLd = function QAPageJsonLd(_ref) {
      var mainEntity = _ref.mainEntity,
        keyOverride = _ref.keyOverride;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "QAPage",\n    "mainEntity": ' +
        buildQuestions$1(mainEntity) +
        '\n    }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-qa' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildAggregateRating$2 = function buildAggregateRating(aggregateRating) {
      return (
        '\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "' +
        aggregateRating.ratingValue +
        '",\n      "ratingCount": "' +
        aggregateRating.ratingCount +
        '"\n    },\n'
      );
    };
    var buildInstruction = function buildInstruction(instruction) {
      return (
        '{\n  "@type": "HowToStep",\n  "name": "' +
        instruction.name +
        '",\n  "text": "' +
        instruction.text +
        '",\n  "url": "' +
        instruction.url +
        '",\n  "image": "' +
        instruction.image +
        '"\n}'
      );
    };

    var RecipeJsonLd = function RecipeJsonLd(_ref) {
      var name = _ref.name,
        description = _ref.description,
        authorName = _ref.authorName,
        _ref$images = _ref.images,
        images = _ref$images === void 0 ? [] : _ref$images,
        datePublished = _ref.datePublished,
        prepTime = _ref.prepTime,
        cookTime = _ref.cookTime,
        totalTime = _ref.totalTime,
        keywords = _ref.keywords,
        yields = _ref.yields,
        category = _ref.category,
        cuisine = _ref.cuisine,
        calories = _ref.calories,
        ingredients = _ref.ingredients,
        instructions = _ref.instructions,
        aggregateRating = _ref.aggregateRating,
        video = _ref.video;
      var jslonld =
        '{\n    "@context": "https://schema.org/",\n    "@type": "Recipe",\n    "name": "' +
        name +
        '",\n    "description": "' +
        description +
        '",\n    "datePublished": "' +
        datePublished +
        '",\n    "author": ' +
        formatAuthorName(authorName) +
        ',\n    "image": [\n      ' +
        images
          .map(function (image) {
            return '"' + image + '"';
          })
          .join(',') +
        '\n    ],\n    ' +
        (prepTime ? '"prepTime": "' + prepTime + '",' : '') +
        '\n    ' +
        (cookTime ? '"cookTime": "' + cookTime + '",' : '') +
        '\n    ' +
        (totalTime ? '"totalTime": "' + totalTime + '",' : '') +
        '\n    ' +
        (keywords ? '"keywords": "' + keywords + '",' : '') +
        '\n    ' +
        (yields ? '"recipeYield": "' + yields + '",' : '') +
        '\n    ' +
        (category ? '"recipeCategory": "' + category + '",' : '') +
        '\n    ' +
        (cuisine ? '"recipeCuisine": "' + cuisine + '",' : '') +
        '\n    ' +
        (calories ? '"nutrition": { "@type": "NutritionInformation", "calories": "' + calories + ' calories" },' : '') +
        '\n    ' +
        (aggregateRating ? buildAggregateRating$2(aggregateRating) : '') +
        '\n    ' +
        (video ? '"video": ' + buildVideo(video) + ',' : '') +
        '\n    "recipeIngredient": [\n      ' +
        ingredients
          .map(function (ingredient) {
            return '"' + ingredient + '"';
          })
          .join(',') +
        '\n    ],\n    "recipeInstructions": [\n      ' +
        instructions.map(buildInstruction).join(',') +
        '\n    ]\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-recipe',
        })
      );
    };

    var CarouselJsonLd = function CarouselJsonLd(_ref) {
      var type = _ref.type,
        data = _ref.data;
      var itemListElement = [];

      switch (type) {
        case 'default':
          itemListElement = data.map(function (item, index) {
            return (
              '{\n        "@type": "ListItem",\n        "position": "' +
              (index + 1) +
              '",\n        "url": "' +
              item.url +
              '"\n      }'
            );
          });
          break;

        case 'course':
          itemListElement = data.map(function (item, index) {
            return (
              '{\n        "@type": "ListItem",\n        "position": "' +
              (index + 1) +
              '",\n        "item": {\n          "@context": "https://schema.org",\n          "@type": "Course",\n          "url": "' +
              item.url +
              '",\n          "name": "' +
              item.courseName +
              '",\n          "description": "' +
              item.description +
              '",\n          "provider": {\n            "@type": "Organization",\n            "name": "' +
              item.providerName +
              '"' +
              (item.providerUrl ? ',\n                "sameAs": "' + item.providerUrl + '"' : '') +
              '\n          }\n      }\n    }'
            );
          });
          break;

        case 'movie':
          itemListElement = data.map(function (item, index) {
            return (
              '{\n        "@type": "ListItem",\n        "position": "' +
              (index + 1) +
              '",\n        "item": {\n          "@context": "https://schema.org",\n          "@type": "Movie",\n          "name": "' +
              item.name +
              '",\n          "url": "' +
              item.url +
              '",\n          "image": "' +
              item.image +
              '",\n          ' +
              (item.dateCreated ? '"dateCreated": "' + item.dateCreated + '",' : '') +
              '\n          ' +
              (item.director
                ? '"director": ' +
                  (Array.isArray(item.director)
                    ? '[' +
                      item.director
                        .map(function (director) {
                          return (
                            '{\n                          "@type": "Person",\n                          "name": "' +
                            director.name +
                            '"\n                        }'
                          );
                        })
                        .join(',') +
                      ']'
                    : '{\n                      "@type": "Person",\n                      "name": "' +
                      item.director.name +
                      '"\n                    }')
                : '') +
              '\n          ' +
              (item.review
                ? ',\n              "review": {\n                "@type": "Review",\n                ' +
                  (item.review.author ? buildAuthor(item.review.author) : '') +
                  '\n                ' +
                  (item.review.publisher ? buildPublisher(item.review.publisher) : '') +
                  '\n                ' +
                  (item.review.datePublished ? '"datePublished": "' + item.review.datePublished + '",' : '') +
                  '\n                ' +
                  (item.review.reviewBody ? '"reviewBody": "' + item.review.reviewBody + '",' : '') +
                  '\n                ' +
                  (item.review.name ? '"name": "' + item.review.name + '",' : '') +
                  '\n                ' +
                  buildReviewRating(item.review.reviewRating) +
                  '\n            }'
                : '') +
              '\n        }\n      }'
            );
          });
          break;

        case 'recipe':
          itemListElement = data.map(function (item, index) {
            var _item$images;

            return (
              '{\n        "@type": "ListItem",\n        "position": "' +
              (index + 1) +
              '",\n        "item": {\n          "@context": "https://schema.org/",\n          "@type": "Recipe",\n          "name": "' +
              item.name +
              '",\n          "url" : "' +
              item.url +
              '",\n          "description": "' +
              item.description +
              '",\n          "datePublished": "' +
              item.datePublished +
              '",\n          "author": {\n            "@type": "Person",\n            "name": "' +
              item.authorName +
              '"\n          },\n          "image": [\n            ' +
              ((_item$images = item.images) == null
                ? void 0
                : _item$images
                    .map(function (image) {
                      return '"' + image + '"';
                    })
                    .join(',')) +
              '\n          ],\n          ' +
              (item.prepTime ? '"prepTime": "' + item.prepTime + '",' : '') +
              '\n          ' +
              (item.cookTime ? '"cookTime": "' + item.cookTime + '",' : '') +
              '\n          ' +
              (item.totalTime ? '"totalTime": "' + item.totalTime + '",' : '') +
              '\n          ' +
              (item.keywords ? '"keywords": "' + item.keywords + '",' : '') +
              '\n          ' +
              (item.yields ? '"recipeYield": "' + item.yields + '",' : '') +
              '\n          ' +
              (item.category ? '"recipeCategory": "' + item.category + '",' : '') +
              '\n          ' +
              (item.cuisine ? '"recipeCuisine": "' + item.cuisine + '",' : '') +
              '\n          ' +
              (item.calories
                ? '"nutrition": { "@type": "NutritionInformation", "calories": "' + item.calories + ' calories" },'
                : '') +
              '\n          ' +
              (item.aggregateRating ? buildAggregateRating$2(item.aggregateRating) : '') +
              '\n          ' +
              (item.video ? '"video": ' + buildVideo(item.video) + ',' : '') +
              '\n          "recipeIngredient": [\n            ' +
              item.ingredients
                .map(function (ingredient) {
                  return '"' + ingredient + '"';
                })
                .join(',') +
              '\n          ],\n          "recipeInstructions": [\n            ' +
              item.instructions.map(buildInstruction).join(',') +
              '\n          ]\n      }\n      }'
            );
          });
          break;
      }

      var jsonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    "itemListElement": [' +
        itemListElement.join(',') +
        ']\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jsonld),
          key: 'jsonld-course',
        })
      );
    };

    var SiteLinksSearchBoxJsonLd = function SiteLinksSearchBoxJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        url = _ref.url,
        _ref$potentialActions = _ref.potentialActions,
        potentialActions = _ref$potentialActions === void 0 ? [] : _ref$potentialActions;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "WebSite",\n    "url": "' +
        url +
        '",\n    "potentialAction": [\n      ' +
        potentialActions.map(function (_ref2) {
          var target = _ref2.target,
            queryInput = _ref2.queryInput;
          return (
            '{\n        "@type": "SearchAction",\n        "target": "' +
            target +
            '={' +
            queryInput +
            '}",\n        "query-input": "required name=' +
            queryInput +
            '"\n      }'
          );
        }) +
        '\n     ]\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-siteLinksSearchBox' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildReview$1 = function buildReview(review) {
      return (
        '\n    "review": {\n        "@type": "Review",\n        ' +
        (review.author ? buildAuthor(review.author) : '') +
        '\n        ' +
        (review.publisher ? buildPublisher(review.publisher) : '') +
        '\n        ' +
        (review.datePublished ? '"datePublished": "' + review.datePublished + '",' : '') +
        '\n        ' +
        (review.reviewBody ? '"reviewBody": "' + review.reviewBody + '",' : '') +
        '\n        ' +
        (review.name ? '"name": "' + review.name + '",' : '') +
        '\n        ' +
        buildReviewRating(review.reviewRating) +
        '\n      },\n  '
      );
    };

    var SoftwareAppJsonLd = function SoftwareAppJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        name = _ref.name,
        applicationCategory = _ref.applicationCategory,
        operatingSystem = _ref.operatingSystem,
        priceCurrency = _ref.priceCurrency,
        price = _ref.price,
        aggregateRating = _ref.aggregateRating,
        review = _ref.review;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "SoftwareApplication",\n    "offers": {\n      "@type": "Offer",\n      "priceCurrency": "' +
        priceCurrency +
        '",\n      "price": "' +
        price +
        '"\n    },\n    ' +
        (applicationCategory ? '"applicationCategory": "' + applicationCategory + '",' : '') +
        '\n    ' +
        (operatingSystem ? '"operatingSystem": "' + operatingSystem + '",' : '') +
        '\n    ' +
        (aggregateRating ? buildAggregateRating$2(aggregateRating) : '') +
        '\n    ' +
        (review ? buildReview$1(review) : '') +
        '\n    "name": "' +
        name +
        '"\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-softwareApp' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var CollectionPageJsonLd = function CollectionPageJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        name = _ref.name,
        _ref$hasPart = _ref.hasPart,
        hasPart = _ref$hasPart === void 0 ? [] : _ref$hasPart;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "CollectionPage",\n    "name": "' +
        name +
        '",\n    "hasPart": [\n      ' +
        hasPart.map(function (creativeWork) {
          return (
            '{\n        "@type": "CreativeWork",\n        "author": "' +
            creativeWork.author +
            '",\n        "about": "' +
            creativeWork.about +
            '",\n        "name": "' +
            creativeWork.name +
            '",\n        ' +
            (creativeWork.audience ? '"audience": "' + creativeWork.audience + '",' : '') +
            '\n        ' +
            (creativeWork.keywords ? '"keywords": "' + creativeWork.keywords + '",' : '') +
            '\n        ' +
            (creativeWork.thumbnailUrl ? '"thumbnailUrl": "' + creativeWork.thumbnailUrl + '",' : '') +
            '\n        ' +
            (creativeWork.image ? '"image": "' + creativeWork.image + '",' : '') +
            '\n        "datePublished": "' +
            creativeWork.datePublished +
            '"\n      }'
          );
        }) +
        '\n     ]\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-collection-page' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    var buildBreadcrumb = function buildBreadcrumb(itemListElements) {
      return '{\n  "@type": "BreadcrumbList",\n  "itemListElement": ' + buildBreadcrumbList(itemListElements) + '\n}';
    };

    var buildBreadcrumbList = function buildBreadcrumbList(itemListElements) {
      return (
        '[\n  ' +
        itemListElements.map(function (itemListElement) {
          return (
            '{\n    "@type": "ListItem",\n    "position": ' +
            itemListElement.position +
            ',\n    "item": {\n      "@id": "' +
            itemListElement.item +
            '",\n      "name": "' +
            itemListElement.name +
            '"\n    }\n  }'
          );
        }) +
        '\n]'
      );
    };

    var ProfilePageJsonLd = function ProfilePageJsonLd(_ref) {
      var keyOverride = _ref.keyOverride,
        breadcrumb = _ref.breadcrumb,
        lastReviewed = _ref.lastReviewed;
      var jslonld =
        '{\n    "@context": "https://schema.org",\n    "@type": "ProfilePage",\n    ' +
        (lastReviewed ? '"lastReviewed": "' + lastReviewed + '",' : '') +
        '\n    "breadcrumb": ' +
        (typeof breadcrumb === 'string' ? '"' + breadcrumb + '"' : buildBreadcrumb(breadcrumb)) +
        '\n  }';
      return React__default['default'].createElement(
        Head__default['default'],
        null,
        React__default['default'].createElement('script', {
          type: 'application/ld+json',
          dangerouslySetInnerHTML: markup(jslonld),
          key: 'jsonld-profile-page' + (keyOverride ? '-' + keyOverride : ''),
        })
      );
    };

    __webpack_unused_export__ = ArticleJsonLd;
    __webpack_unused_export__ = BlogJsonLd;
    __webpack_unused_export__ = BreadCrumbJsonLd;
    __webpack_unused_export__ = CarouselJsonLd;
    __webpack_unused_export__ = CollectionPageJsonLd;
    __webpack_unused_export__ = CorporateContactJsonLd;
    __webpack_unused_export__ = CourseJsonLd;
    __webpack_unused_export__ = DatasetJsonLd;
    __webpack_unused_export__ = _default;
    __webpack_unused_export__ = EventJsonLd;
    __webpack_unused_export__ = FAQPageJsonLd;
    __webpack_unused_export__ = JobPostingJsonLd;
    __webpack_unused_export__ = LocalBusinessJsonLd;
    __webpack_unused_export__ = LogoJsonLd;
    __webpack_unused_export__ = NewsArticleJsonLd;
    exports.PB = _default$1;
    __webpack_unused_export__ = ProductJsonLd;
    __webpack_unused_export__ = ProfilePageJsonLd;
    __webpack_unused_export__ = QAPageJsonLd;
    __webpack_unused_export__ = RecipeJsonLd;
    __webpack_unused_export__ = SiteLinksSearchBoxJsonLd;
    __webpack_unused_export__ = SocialProfileJsonLd;
    __webpack_unused_export__ = SoftwareAppJsonLd;
    __webpack_unused_export__ = VideoJsonLd;

    /***/
  },

  /***/ 7913: /***/ (module, exports, __webpack_require__) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports['default'] = void 0;

    var _react = _interopRequireDefault(__webpack_require__(7294));

    var _router = __webpack_require__(2199);

    var _router1 = __webpack_require__(1587);

    var _useIntersection = __webpack_require__(7215);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          };
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
      const { nodeName } = e.currentTarget; // anchors inside an svg have a lowercase nodeName

      const isAnchorNodeName = nodeName.toUpperCase() === 'A';

      if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
      }

      e.preventDefault(); // replace state instead of push if prop is present

      router[replace ? 'replace' : 'push'](href, as, {
        shallow,
        locale,
        scroll,
      });
    }

    const Link = /*#__PURE__*/ _react.default.forwardRef((props, forwardedRef) => {
      const { legacyBehavior = Boolean(false) !== true } = props;

      if (false) {
      }

      let children;

      const {
          href: hrefProp,
          as: asProp,
          children: childrenProp,
          prefetch: prefetchProp,
          passHref,
          replace,
          shallow,
          scroll,
          locale,
          onClick,
          onMouseEnter,
        } = props,
        restProps = _objectWithoutProperties(props, [
          'href',
          'as',
          'children',
          'prefetch',
          'passHref',
          'replace',
          'shallow',
          'scroll',
          'locale',
          'onClick',
          'onMouseEnter',
        ]);

      children = childrenProp;

      if (legacyBehavior && typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement('a', null, children);
      }

      const p = prefetchProp !== false;
      const router = (0, _router1).useRouter();

      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref,
        };
      }, [router, hrefProp, asProp]);

      const previousHref = _react.default.useRef(href);

      const previousAs = _react.default.useRef(as); // This will return the first child, if multiple are provided it will throw an error

      let child;

      if (legacyBehavior) {
        if (false) {
        } else {
          child = _react.default.Children.only(children);
        }
      }

      const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: '200px',
      });

      const setRef = _react.default.useCallback(
        (el) => {
          // Before the link getting observed, check if visible state need to be reset
          if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
          }

          setIntersectionRef(el);

          if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
              childRef.current = el;
            }
          }
        },
        [as, childRef, href, resetVisible, setIntersectionRef]
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
          if (false) {
          }

          if (!legacyBehavior && typeof onClick === 'function') {
            onClick(e);
          }

          if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, shallow, scroll, locale);
          }
        },
        onMouseEnter: (e) => {
          if (!legacyBehavior && typeof onMouseEnter === 'function') {
            onMouseEnter(e);
          }

          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
              priority: true,
            });
          }
        },
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (!legacyBehavior || passHref || (child.type === 'a' && !('href' in child.props))) {
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

      return legacyBehavior
        ? /*#__PURE__*/ _react.default.cloneElement(child, childProps)
        : /*#__PURE__*/ _react.default.createElement('a', Object.assign({}, restProps, childProps), children);
    });

    var _default = Link;
    exports['default'] = _default;

    if (typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) {
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }

    /***/
  },

  /***/ 7215: /***/ (module, exports, __webpack_require__) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.useIntersection = useIntersection;

    var _react = __webpack_require__(7294);

    var _requestIdleCallback = __webpack_require__(8065);

    const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

    function useIntersection({ rootRef, rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const unobserve = (0, _react).useRef();
      const [visible, setVisible] = (0, _react).useState(false);
      const [root, setRoot] = (0, _react).useState(rootRef ? rootRef.current : null);
      const setRef = (0, _react).useCallback(
        (el) => {
          if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
          }

          if (isDisabled || visible) return;

          if (el && el.tagName) {
            unobserve.current = observe(el, (isVisible) => isVisible && setVisible(isVisible), {
              root,
              rootMargin,
            });
          }
        },
        [isDisabled, root, rootMargin, visible]
      );
      const resetVisible = (0, _react).useCallback(() => {
        setVisible(false);
      }, []);
      (0, _react).useEffect(() => {
        if (!hasIntersectionObserver) {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
            return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
          }
        }
      }, [visible]);
      (0, _react).useEffect(() => {
        if (rootRef) setRoot(rootRef.current);
      }, [rootRef]);
      return [setRef, visible, resetVisible];
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
          let index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);

          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }

    const observers = new Map();
    const idList = [];

    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || '',
      };
      let existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;

      if (existing) {
        instance = observers.get(existing);
      } else {
        instance = observers.get(id);
        idList.push(id);
      }

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

    if (typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) {
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }

    /***/
  },

  /***/ 1664: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    module.exports = __webpack_require__(7913);

    /***/
  },

  /***/ 2521: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';
    var __webpack_unused_export__;

    __webpack_unused_export__ = { value: true };

    var _extends = __webpack_require__(7154);
    var _assertThisInitialized = __webpack_require__(1506);
    var _inheritsLoose = __webpack_require__(5354);
    var _wrapNativeSuper = __webpack_require__(5957);
    var _taggedTemplateLiteralLoose = __webpack_require__(5179);

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { default: e };
    }

    var _extends__default = /*#__PURE__*/ _interopDefaultLegacy(_extends);
    var _assertThisInitialized__default = /*#__PURE__*/ _interopDefaultLegacy(_assertThisInitialized);
    var _inheritsLoose__default = /*#__PURE__*/ _interopDefaultLegacy(_inheritsLoose);
    var _wrapNativeSuper__default = /*#__PURE__*/ _interopDefaultLegacy(_wrapNativeSuper);
    var _taggedTemplateLiteralLoose__default = /*#__PURE__*/ _interopDefaultLegacy(_taggedTemplateLiteralLoose);

    function last() {
      var _ref;

      return (_ref = arguments.length - 1), _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];
    }

    function negation(a) {
      return -a;
    }

    function addition(a, b) {
      return a + b;
    }

    function subtraction(a, b) {
      return a - b;
    }

    function multiplication(a, b) {
      return a * b;
    }

    function division(a, b) {
      return a / b;
    }

    function max() {
      return Math.max.apply(Math, arguments);
    }

    function min() {
      return Math.min.apply(Math, arguments);
    }

    function comma() {
      return Array.of.apply(Array, arguments);
    }

    var defaultSymbols = {
      symbols: {
        '*': {
          infix: {
            symbol: '*',
            f: multiplication,
            notation: 'infix',
            precedence: 4,
            rightToLeft: 0,
            argCount: 2,
          },
          symbol: '*',
          regSymbol: '\\*',
        },
        '/': {
          infix: {
            symbol: '/',
            f: division,
            notation: 'infix',
            precedence: 4,
            rightToLeft: 0,
            argCount: 2,
          },
          symbol: '/',
          regSymbol: '/',
        },
        '+': {
          infix: {
            symbol: '+',
            f: addition,
            notation: 'infix',
            precedence: 2,
            rightToLeft: 0,
            argCount: 2,
          },
          prefix: {
            symbol: '+',
            f: last,
            notation: 'prefix',
            precedence: 3,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: '+',
          regSymbol: '\\+',
        },
        '-': {
          infix: {
            symbol: '-',
            f: subtraction,
            notation: 'infix',
            precedence: 2,
            rightToLeft: 0,
            argCount: 2,
          },
          prefix: {
            symbol: '-',
            f: negation,
            notation: 'prefix',
            precedence: 3,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: '-',
          regSymbol: '-',
        },
        ',': {
          infix: {
            symbol: ',',
            f: comma,
            notation: 'infix',
            precedence: 1,
            rightToLeft: 0,
            argCount: 2,
          },
          symbol: ',',
          regSymbol: ',',
        },
        '(': {
          prefix: {
            symbol: '(',
            f: last,
            notation: 'prefix',
            precedence: 0,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: '(',
          regSymbol: '\\(',
        },
        ')': {
          postfix: {
            symbol: ')',
            f: undefined,
            notation: 'postfix',
            precedence: 0,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: ')',
          regSymbol: '\\)',
        },
        min: {
          func: {
            symbol: 'min',
            f: min,
            notation: 'func',
            precedence: 0,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: 'min',
          regSymbol: 'min\\b',
        },
        max: {
          func: {
            symbol: 'max',
            f: max,
            notation: 'func',
            precedence: 0,
            rightToLeft: 0,
            argCount: 1,
          },
          symbol: 'max',
          regSymbol: 'max\\b',
        },
      },
    };

    // based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

    /**
     * Parse errors.md and turn it into a simple hash of code: message
     * @private
     */
    var ERRORS = {
      1: 'Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n',
      2: 'Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n',
      3: 'Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n',
      4: "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
      5: "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
      6: 'Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n',
      7: 'Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n',
      8: 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n',
      9: 'Please provide a number of steps to the modularScale helper.\n\n',
      10: 'Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n',
      11: 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
      12: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
      13: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
      14: 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
      15: 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
      16: 'You must provide a template to this method.\n\n',
      17: 'You passed an unsupported selector state to this method.\n\n',
      18: 'minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n',
      19: 'fromSize and toSize must be provided as stringified numbers with the same units.\n\n',
      20: 'expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n',
      21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      23: 'fontFace expects a name of a font-family.\n\n',
      24: 'fontFace expects either the path to the font file(s) or a name of a local copy.\n\n',
      25: 'fontFace expects localFonts to be an array.\n\n',
      26: 'fontFace expects fileFormats to be an array.\n\n',
      27: 'radialGradient requries at least 2 color-stops to properly render.\n\n',
      28: 'Please supply a filename to retinaImage() as the first argument.\n\n',
      29: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
      30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      31: 'The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n',
      32: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
      33: 'The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n',
      34: 'borderRadius expects a radius value as a string or number as the second argument.\n\n',
      35: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
      36: 'Property must be a string value.\n\n',
      37: 'Syntax Error at %s.\n\n',
      38: 'Formula contains a function that needs parentheses at %s.\n\n',
      39: 'Formula is missing closing parenthesis at %s.\n\n',
      40: 'Formula has too many closing parentheses at %s.\n\n',
      41: 'All values in a formula must have the same unit or be unitless.\n\n',
      42: 'Please provide a number of steps to the modularScale helper.\n\n',
      43: 'Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n',
      44: 'Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n',
      45: 'Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n',
      46: 'Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n',
      47: 'minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n',
      48: 'fromSize and toSize must be provided as stringified numbers with the same units.\n\n',
      49: 'Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n',
      50: 'Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n',
      51: 'Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n',
      52: 'fontFace expects either the path to the font file(s) or a name of a local copy.\n\n',
      53: 'fontFace expects localFonts to be an array.\n\n',
      54: 'fontFace expects fileFormats to be an array.\n\n',
      55: 'fontFace expects a name of a font-family.\n\n',
      56: 'linearGradient requries at least 2 color-stops to properly render.\n\n',
      57: 'radialGradient requries at least 2 color-stops to properly render.\n\n',
      58: 'Please supply a filename to retinaImage() as the first argument.\n\n',
      59: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
      60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      61: 'Property must be a string value.\n\n',
      62: 'borderRadius expects a radius value as a string or number as the second argument.\n\n',
      63: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
      64: 'The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n',
      65: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
      66: 'The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n',
      67: 'You must provide a template to this method.\n\n',
      68: 'You passed an unsupported selector state to this method.\n\n',
      69: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
      70: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
      71: 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
      72: 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
      73: 'Please provide a valid CSS variable.\n\n',
      74: 'CSS variable not found and no default was provided.\n\n',
      75: 'important requires a valid style object, got a %s instead.\n\n',
      76: 'fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n',
      77: 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
      78: 'base must be set in "px" or "%" but you set it in "%s".\n',
    };
    /**
     * super basic version of sprintf
     * @private
     */

    function format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var a = args[0];
      var b = [];
      var c;

      for (c = 1; c < args.length; c += 1) {
        b.push(args[c]);
      }

      b.forEach(function (d) {
        a = a.replace(/%[a-z]/, d);
      });
      return a;
    }
    /**
     * Create an error file out of errors.md for development and a simple web link to the full errors
     * in production mode.
     * @private
     */

    var PolishedError = /*#__PURE__*/ (function (_Error) {
      _inheritsLoose__default['default'](PolishedError, _Error);

      function PolishedError(code) {
        var _this;

        if (true) {
          _this =
            _Error.call(
              this,
              'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                code +
                ' for more information.'
            ) || this;
        } else {
          var _len2, args, _key2;
        }

        return _assertThisInitialized__default['default'](_this);
      }

      return PolishedError;
    })(/*#__PURE__*/ _wrapNativeSuper__default['default'](Error));

    var unitRegExp =
      /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g; // Merges additional math functionality into the defaults.

    function mergeSymbolMaps(additionalSymbols) {
      var symbolMap = {};
      symbolMap.symbols = additionalSymbols
        ? _extends__default['default']({}, defaultSymbols.symbols, additionalSymbols.symbols)
        : _extends__default['default']({}, defaultSymbols.symbols);
      return symbolMap;
    }

    function exec(operators, values) {
      var _ref;

      var op = operators.pop();
      values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
      return op.precedence;
    }

    function calculate(expression, additionalSymbols) {
      var symbolMap = mergeSymbolMaps(additionalSymbols);
      var match;
      var operators = [symbolMap.symbols['('].prefix];
      var values = [];
      var pattern = new RegExp( // Pattern for numbers
        '\\d+(?:\\.\\d+)?|' + // ...and patterns for individual operators/function names
          Object.keys(symbolMap.symbols)
            .map(function (key) {
              return symbolMap.symbols[key];
            }) // longer symbols should be listed first
            // $FlowFixMe
            .sort(function (a, b) {
              return b.symbol.length - a.symbol.length;
            }) // $FlowFixMe
            .map(function (val) {
              return val.regSymbol;
            })
            .join('|') +
          '|(\\S)',
        'g'
      );
      pattern.lastIndex = 0; // Reset regular expression object

      var afterValue = false;

      do {
        match = pattern.exec(expression);

        var _ref2 = match || [')', undefined],
          token = _ref2[0],
          bad = _ref2[1];

        var notNumber = symbolMap.symbols[token];
        var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
        var notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix); // Check for syntax errors:

        if (bad || (afterValue ? notAfterValue : notNewValue)) {
          throw new PolishedError(37, match ? match.index : expression.length, expression);
        }

        if (afterValue) {
          // We either have an infix or postfix operator (they should be mutually exclusive)
          var curr = notNumber.postfix || notNumber.infix;

          do {
            var prev = operators[operators.length - 1];
            if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break; // Apply previous operator, since it has precedence over current one
          } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function

          afterValue = curr.notation === 'postfix';

          if (curr.symbol !== ')') {
            operators.push(curr); // Postfix always has precedence over any operator that follows after it

            if (afterValue) exec(operators, values);
          }
        } else if (notNumber) {
          // prefix operator or function
          operators.push(notNumber.prefix || notNumber.func);

          if (notNumber.func) {
            // Require an opening parenthesis
            match = pattern.exec(expression);

            if (!match || match[0] !== '(') {
              throw new PolishedError(38, match ? match.index : expression.length, expression);
            }
          }
        } else {
          // number
          values.push(+token);
          afterValue = true;
        }
      } while (match && operators.length);

      if (operators.length) {
        throw new PolishedError(39, match ? match.index : expression.length, expression);
      } else if (match) {
        throw new PolishedError(40, match ? match.index : expression.length, expression);
      } else {
        return values.pop();
      }
    }

    function reverseString(str) {
      return str.split('').reverse().join('');
    }
    /**
     * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
     *
     *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
     *
     * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
     * @example
     * // Styles as object usage
     * const styles = {
     *   fontSize: math('12rem + 8rem'),
     *   fontSize: math('(12px + 2px) * 3'),
     *   fontSize: math('3px^2 + sqrt(4)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   fontSize: ${math('12rem + 8rem')};
     *   fontSize: ${math('(12px + 2px) * 3')};
     *   fontSize: ${math('3px^2 + sqrt(4)')};
     * `
     *
     * // CSS as JS Output
     *
     * div: {
     *   fontSize: '20rem',
     *   fontSize: '42px',
     *   fontSize: '11px',
     * }
     */

    function math(formula, additionalSymbols) {
      var reversedFormula = reverseString(formula);
      var formulaMatch = reversedFormula.match(unitRegExp); // Check that all units are the same

      if (
        formulaMatch &&
        !formulaMatch.every(function (unit) {
          return unit === formulaMatch[0];
        })
      ) {
        throw new PolishedError(41);
      }

      var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
      return '' + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : '');
    }

    var cssVariableRegex = /--[\S]*/g;
    /**
     * Fetches the value of a passed CSS Variable in the :root scope, or otherwise returns a defaultValue if provided.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'background': cssVar('--background-color'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${cssVar('--background-color')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   'background': 'red'
     * }
     */

    function cssVar(cssVariable, defaultValue) {
      if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
        throw new PolishedError(73);
      }

      var variableValue;
      /* eslint-disable */

      /* istanbul ignore next */

      if (typeof document !== 'undefined' && document.documentElement !== null) {
        variableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
      }
      /* eslint-enable */

      if (variableValue) {
        return variableValue.trim();
      } else if (defaultValue) {
        return defaultValue;
      }

      throw new PolishedError(74);
    }

    // @private
    function capitalizeString(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

    function generateProperty(property, position) {
      if (!property) return position.toLowerCase();
      var splitProperty = property.split('-');

      if (splitProperty.length > 1) {
        splitProperty.splice(1, 0, position);
        return splitProperty.reduce(function (acc, val) {
          return '' + acc + capitalizeString(val);
        });
      }

      var joinedProperty = property.replace(/([a-z])([A-Z])/g, '$1' + position + '$2');
      return property === joinedProperty ? '' + property + position : joinedProperty;
    }

    function generateStyles(property, valuesWithDefaults) {
      var styles = {};

      for (var i = 0; i < valuesWithDefaults.length; i += 1) {
        if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
          styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
        }
      }

      return styles;
    }
    /**
     * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'paddingTop': '12px',
     *   'paddingRight': '24px',
     *   'paddingBottom': '36px',
     *   'paddingLeft': '48px'
     * }
     */

    function directionalProperty(property) {
      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      //  prettier-ignore
      var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
      var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
      return generateStyles(property, valuesWithDefaults);
    }

    /**
     * Check if a string ends with something
     * @private
     */
    function endsWith(string, suffix) {
      return string.substr(-suffix.length) === suffix;
    }

    var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    /**
     * Returns a given CSS value minus its unit of measure.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   '--dimension': stripUnit('100px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   --dimension: ${stripUnit('100px')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   '--dimension': 100
     * }
     */

    function stripUnit(value) {
      if (typeof value !== 'string') return value;
      var matchedValue = value.match(cssRegex);
      return matchedValue ? parseFloat(value) : value;
    }

    /**
     * Factory function that creates pixel-to-x converters
     * @private
     */

    var pxtoFactory = function pxtoFactory(to) {
      return function (pxval, base) {
        if (base === void 0) {
          base = '16px';
        }

        var newPxval = pxval;
        var newBase = base;

        if (typeof pxval === 'string') {
          if (!endsWith(pxval, 'px')) {
            throw new PolishedError(69, to, pxval);
          }

          newPxval = stripUnit(pxval);
        }

        if (typeof base === 'string') {
          if (!endsWith(base, 'px')) {
            throw new PolishedError(70, to, base);
          }

          newBase = stripUnit(base);
        }

        if (typeof newPxval === 'string') {
          throw new PolishedError(71, pxval, to);
        }

        if (typeof newBase === 'string') {
          throw new PolishedError(72, base, to);
        }

        return '' + newPxval / newBase + to;
      };
    };

    /**
     * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
     * second argument to the function.
     * @function
     * @param {string|number} pxval
     * @param {string|number} [base='16px']
     * @example
     * // Styles as object usage
     * const styles = {
     *   'height': em('16px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   height: ${em('16px')}
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   'height': '1em'
     * }
     */

    var em = /*#__PURE__*/ pxtoFactory('em');

    var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    /**
     * Returns a given CSS value and its unit as elements of an array.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   '--dimension': getValueAndUnit('100px')[0],
     *   '--unit': getValueAndUnit('100px')[1],
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   --dimension: ${getValueAndUnit('100px')[0]};
     *   --unit: ${getValueAndUnit('100px')[1]};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   '--dimension': 100,
     *   '--unit': 'px',
     * }
     */

    function getValueAndUnit(value) {
      if (typeof value !== 'string') return [value, ''];
      var matchedValue = value.match(cssRegex$1);
      if (matchedValue) return [parseFloat(value), matchedValue[2]];
      return [value, undefined];
    }

    /**
     * Helper for targeting rules in a style block generated by polished modules that need !important-level specificity. Can optionally specify a rule (or rules) to target specific rules.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...important(cover())
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${important(cover())}
     * `
     *
     * // CSS as JS Output
     *
     * div: {
     *   'position': 'absolute !important',
     *   'top': '0 !important',
     *   'right: '0 !important',
     *   'bottom': '0 !important',
     *   'left: '0 !important'
     * }
     */

    function important(styleBlock, rules) {
      if (typeof styleBlock !== 'object' || styleBlock === null) {
        throw new PolishedError(75, typeof styleBlock);
      }

      var newStyleBlock = {};
      Object.keys(styleBlock).forEach(function (key) {
        if (typeof styleBlock[key] === 'object' && styleBlock[key] !== null) {
          newStyleBlock[key] = important(styleBlock[key], rules);
        } else if (!rules || (rules && (rules === key || rules.indexOf(key) >= 0))) {
          newStyleBlock[key] = styleBlock[key] + ' !important';
        } else {
          newStyleBlock[key] = styleBlock[key];
        }
      });
      return newStyleBlock;
    }

    var ratioNames = {
      minorSecond: 1.067,
      majorSecond: 1.125,
      minorThird: 1.2,
      majorThird: 1.25,
      perfectFourth: 1.333,
      augFourth: 1.414,
      perfectFifth: 1.5,
      minorSixth: 1.6,
      goldenSection: 1.618,
      majorSixth: 1.667,
      minorSeventh: 1.778,
      majorSeventh: 1.875,
      octave: 2,
      majorTenth: 2.5,
      majorEleventh: 2.667,
      majorTwelfth: 3,
      doubleOctave: 4,
    };

    function getRatio(ratioName) {
      return ratioNames[ratioName];
    }
    /**
     * Establish consistent measurements and spacial relationships throughout your projects by incrementing an em or rem value up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
     * @example
     * // Styles as object usage
     * const styles = {
     *    // Increment two steps up the default scale
     *   'fontSize': modularScale(2)
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *    // Increment two steps up the default scale
     *   fontSize: ${modularScale(2)}
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   'fontSize': '1.77689em'
     * }
     */

    function modularScale(steps, base, ratio) {
      if (base === void 0) {
        base = '1em';
      }

      if (ratio === void 0) {
        ratio = 1.333;
      }

      if (typeof steps !== 'number') {
        throw new PolishedError(42);
      }

      if (typeof ratio === 'string' && !ratioNames[ratio]) {
        throw new PolishedError(43);
      }

      var _ref = typeof base === 'string' ? getValueAndUnit(base) : [base, ''],
        realBase = _ref[0],
        unit = _ref[1];

      var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

      if (typeof realBase === 'string') {
        throw new PolishedError(44, base);
      }

      return '' + realBase * Math.pow(realRatio, steps) + (unit || '');
    }

    /**
     * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
     * second argument to the function.
     * @function
     * @param {string|number} pxval
     * @param {string|number} [base='16px']
     * @example
     * // Styles as object usage
     * const styles = {
     *   'height': rem('16px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   height: ${rem('16px')}
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   'height': '1rem'
     * }
     */

    var rem = /*#__PURE__*/ pxtoFactory('rem');

    var defaultFontSize = 16;

    function convertBase(base) {
      var deconstructedValue = getValueAndUnit(base);

      if (deconstructedValue[1] === 'px') {
        return parseFloat(base);
      }

      if (deconstructedValue[1] === '%') {
        return (parseFloat(base) / 100) * defaultFontSize;
      }

      throw new PolishedError(78, deconstructedValue[1]);
    }

    function getBaseFromDoc() {
      /* eslint-disable */

      /* istanbul ignore next */
      if (typeof document !== 'undefined' && document.documentElement !== null) {
        var rootFontSize = getComputedStyle(document.documentElement).fontSize;
        return rootFontSize ? convertBase(rootFontSize) : defaultFontSize;
      }
      /* eslint-enable */

      /* istanbul ignore next */

      return defaultFontSize;
    }
    /**
     * Convert rem values to px. By default, the base value is pulled from the font-size property on the root element (if it is set in % or px). It defaults to 16px if not found on the root. You can also override the base value by providing your own base in % or px.
     * @example
     * // Styles as object usage
     * const styles = {
     *   'height': remToPx('1.6rem')
     *   'height': remToPx('1.6rem', '10px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   height: ${remToPx('1.6rem')}
     *   height: ${remToPx('1.6rem', '10px')}
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   'height': '25.6px',
     *   'height': '16px',
     * }
     */

    function remToPx(value, base) {
      var deconstructedValue = getValueAndUnit(value);

      if (deconstructedValue[1] !== 'rem' && deconstructedValue[1] !== '') {
        throw new PolishedError(77, deconstructedValue[1]);
      }

      var newBase = base ? convertBase(base) : getBaseFromDoc();
      return deconstructedValue[0] * newBase + 'px';
    }

    var functionsMap = {
      back: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      circ: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
      cubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
      expo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
      quad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
      quart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
      quint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
      sine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
    };
    /**
     * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'transitionTimingFunction': easeIn('quad')
     * }
     *
     * // styled-components usage
     *  const div = styled.div`
     *   transitionTimingFunction: ${easeIn('quad')};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
     * }
     */

    function easeIn(functionName) {
      return functionsMap[functionName.toLowerCase().trim()];
    }

    var functionsMap$1 = {
      back: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      circ: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
      cubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      expo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
      quad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
      quart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
      quint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
      sine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
    };
    /**
     * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'transitionTimingFunction': easeInOut('quad')
     * }
     *
     * // styled-components usage
     *  const div = styled.div`
     *   transitionTimingFunction: ${easeInOut('quad')};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'transitionTimingFunction': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
     * }
     */

    function easeInOut(functionName) {
      return functionsMap$1[functionName.toLowerCase().trim()];
    }

    var functionsMap$2 = {
      back: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
      cubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
      circ: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
      expo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
      quad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
      quart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
      quint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
      sine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
    };
    /**
     * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'transitionTimingFunction': easeOut('quad')
     * }
     *
     * // styled-components usage
     *  const div = styled.div`
     *   transitionTimingFunction: ${easeOut('quad')};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'transitionTimingFunction': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
     * }
     */

    function easeOut(functionName) {
      return functionsMap$2[functionName.toLowerCase().trim()];
    }

    /**
     * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   fontSize: between('20px', '100px', '400px', '1000px'),
     *   fontSize: between('20px', '100px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   fontSize: ${between('20px', '100px', '400px', '1000px')};
     *   fontSize: ${between('20px', '100px')}
     * `
     *
     * // CSS as JS Output
     *
     * h1: {
     *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
     *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
     * }
     */

    function between(fromSize, toSize, minScreen, maxScreen) {
      if (minScreen === void 0) {
        minScreen = '320px';
      }

      if (maxScreen === void 0) {
        maxScreen = '1200px';
      }

      var _getValueAndUnit = getValueAndUnit(fromSize),
        unitlessFromSize = _getValueAndUnit[0],
        fromSizeUnit = _getValueAndUnit[1];

      var _getValueAndUnit2 = getValueAndUnit(toSize),
        unitlessToSize = _getValueAndUnit2[0],
        toSizeUnit = _getValueAndUnit2[1];

      var _getValueAndUnit3 = getValueAndUnit(minScreen),
        unitlessMinScreen = _getValueAndUnit3[0],
        minScreenUnit = _getValueAndUnit3[1];

      var _getValueAndUnit4 = getValueAndUnit(maxScreen),
        unitlessMaxScreen = _getValueAndUnit4[0],
        maxScreenUnit = _getValueAndUnit4[1];

      if (
        typeof unitlessMinScreen !== 'number' ||
        typeof unitlessMaxScreen !== 'number' ||
        !minScreenUnit ||
        !maxScreenUnit ||
        minScreenUnit !== maxScreenUnit
      ) {
        throw new PolishedError(47);
      }

      if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || fromSizeUnit !== toSizeUnit) {
        throw new PolishedError(48);
      }

      if (fromSizeUnit !== minScreenUnit || toSizeUnit !== maxScreenUnit) {
        throw new PolishedError(76);
      }

      var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
      var base = unitlessToSize - slope * unitlessMaxScreen;
      return 'calc(' + base.toFixed(2) + (fromSizeUnit || '') + ' + ' + (100 * slope).toFixed(2) + 'vw)';
    }

    /**
     * CSS to contain a float (credit to CSSMojo).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *    ...clearFix(),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${clearFix()}
     * `
     *
     * // CSS as JS Output
     *
     * '&::after': {
     *   'clear': 'both',
     *   'content': '""',
     *   'display': 'table'
     * }
     */
    function clearFix(parent) {
      var _ref;

      if (parent === void 0) {
        parent = '&';
      }

      var pseudoSelector = parent + '::after';
      return (
        (_ref = {}),
        (_ref[pseudoSelector] = {
          clear: 'both',
          content: '""',
          display: 'table',
        }),
        _ref
      );
    }

    /**
     * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...cover()
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${cover()}
     * `
     *
     * // CSS as JS Output
     *
     * div: {
     *   'position': 'absolute',
     *   'top': '0',
     *   'right: '0',
     *   'bottom': '0',
     *   'left: '0'
     * }
     */
    function cover(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return {
        position: 'absolute',
        top: offset,
        right: offset,
        bottom: offset,
        left: offset,
      };
    }

    /**
     * CSS to represent truncated text with an ellipsis. You can optionally pass a max-width and number of lines before truncating.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...ellipsis('250px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${ellipsis('250px')}
     * `
     *
     * // CSS as JS Output
     *
     * div: {
     *   'display': 'inline-block',
     *   'maxWidth': '250px',
     *   'overflow': 'hidden',
     *   'textOverflow': 'ellipsis',
     *   'whiteSpace': 'nowrap',
     *   'wordWrap': 'normal'
     * }
     */
    function ellipsis(width, lines) {
      if (lines === void 0) {
        lines = 1;
      }

      var styles = {
        display: 'inline-block',
        maxWidth: width || '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      };
      return lines > 1
        ? _extends__default['default']({}, styles, {
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lines,
            display: '-webkit-box',
            whiteSpace: 'normal',
          })
        : styles;
    }

    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
        if (
          Array.isArray(o) ||
          (it = _unsupportedIterableToArray(o)) ||
          (allowArrayLike && o && typeof o.length === 'number')
        ) {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === 'Object' && o.constructor) n = o.constructor.name;
      if (n === 'Map' || n === 'Set') return Array.from(o);
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }

    /**
     * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...fluidRange(
     *    {
     *        prop: 'padding',
     *        fromSize: '20px',
     *        toSize: '100px',
     *      },
     *      '400px',
     *      '1000px',
     *    )
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${fluidRange(
     *      {
     *        prop: 'padding',
     *        fromSize: '20px',
     *        toSize: '100px',
     *      },
     *      '400px',
     *      '1000px',
     *    )}
     * `
     *
     * // CSS as JS Output
     *
     * div: {
     *   "@media (min-width: 1000px)": Object {
     *     "padding": "100px",
     *   },
     *   "@media (min-width: 400px)": Object {
     *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
     *   },
     *   "padding": "20px",
     * }
     */
    function fluidRange(cssProp, minScreen, maxScreen) {
      if (minScreen === void 0) {
        minScreen = '320px';
      }

      if (maxScreen === void 0) {
        maxScreen = '1200px';
      }

      if ((!Array.isArray(cssProp) && typeof cssProp !== 'object') || cssProp === null) {
        throw new PolishedError(49);
      }

      if (Array.isArray(cssProp)) {
        var mediaQueries = {};
        var fallbacks = {};

        for (var _iterator = _createForOfIteratorHelperLoose(cssProp), _step; !(_step = _iterator()).done; ) {
          var _extends2, _extends3;

          var obj = _step.value;

          if (!obj.prop || !obj.fromSize || !obj.toSize) {
            throw new PolishedError(50);
          }

          fallbacks[obj.prop] = obj.fromSize;
          mediaQueries['@media (min-width: ' + minScreen + ')'] = _extends__default['default'](
            {},
            mediaQueries['@media (min-width: ' + minScreen + ')'],
            ((_extends2 = {}),
            (_extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen)),
            _extends2)
          );
          mediaQueries['@media (min-width: ' + maxScreen + ')'] = _extends__default['default'](
            {},
            mediaQueries['@media (min-width: ' + maxScreen + ')'],
            ((_extends3 = {}), (_extends3[obj.prop] = obj.toSize), _extends3)
          );
        }

        return _extends__default['default']({}, fallbacks, mediaQueries);
      } else {
        var _ref, _ref2, _ref3;

        if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
          throw new PolishedError(51);
        }

        return (
          (_ref3 = {}),
          (_ref3[cssProp.prop] = cssProp.fromSize),
          (_ref3['@media (min-width: ' + minScreen + ')'] =
            ((_ref = {}),
            (_ref[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen)),
            _ref)),
          (_ref3['@media (min-width: ' + maxScreen + ')'] =
            ((_ref2 = {}), (_ref2[cssProp.prop] = cssProp.toSize), _ref2)),
          _ref3
        );
      }
    }

    var dataURIRegex =
      /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
    var formatHintMap = {
      woff: 'woff',
      woff2: 'woff2',
      ttf: 'truetype',
      otf: 'opentype',
      eot: 'embedded-opentype',
      svg: 'svg',
      svgz: 'svg',
    };

    function generateFormatHint(format, formatHint) {
      if (!formatHint) return '';
      return ' format("' + formatHintMap[format] + '")';
    }

    function isDataURI(fontFilePath) {
      return !!fontFilePath.match(dataURIRegex);
    }

    function generateFileReferences(fontFilePath, fileFormats, formatHint) {
      if (isDataURI(fontFilePath)) {
        return 'url("' + fontFilePath + '")' + generateFormatHint(fileFormats[0], formatHint);
      }

      var fileFontReferences = fileFormats.map(function (format) {
        return 'url("' + fontFilePath + '.' + format + '")' + generateFormatHint(format, formatHint);
      });
      return fileFontReferences.join(', ');
    }

    function generateLocalReferences(localFonts) {
      var localFontReferences = localFonts.map(function (font) {
        return 'local("' + font + '")';
      });
      return localFontReferences.join(', ');
    }

    function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
      var fontReferences = [];
      if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

      if (fontFilePath) {
        fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
      }

      return fontReferences.join(', ');
    }
    /**
     * CSS for a @font-face declaration. Defaults to check for local copies of the font on the user's machine. You can disable this by passing `null` to localFonts.
     *
     * @example
     * // Styles as object basic usage
     * const styles = {
     *    ...fontFace({
     *      'fontFamily': 'Sans-Pro',
     *      'fontFilePath': 'path/to/file'
     *    })
     * }
     *
     * // styled-components basic usage
     * const GlobalStyle = createGlobalStyle`${
     *   fontFace({
     *     'fontFamily': 'Sans-Pro',
     *     'fontFilePath': 'path/to/file'
     *   }
     * )}`
     *
     * // CSS as JS Output
     *
     * '@font-face': {
     *   'fontFamily': 'Sans-Pro',
     *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
     * }
     */

    function fontFace(_ref) {
      var fontFamily = _ref.fontFamily,
        fontFilePath = _ref.fontFilePath,
        fontStretch = _ref.fontStretch,
        fontStyle = _ref.fontStyle,
        fontVariant = _ref.fontVariant,
        fontWeight = _ref.fontWeight,
        _ref$fileFormats = _ref.fileFormats,
        fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
        _ref$formatHint = _ref.formatHint,
        formatHint = _ref$formatHint === void 0 ? false : _ref$formatHint,
        _ref$localFonts = _ref.localFonts,
        localFonts = _ref$localFonts === void 0 ? [fontFamily] : _ref$localFonts,
        unicodeRange = _ref.unicodeRange,
        fontDisplay = _ref.fontDisplay,
        fontVariationSettings = _ref.fontVariationSettings,
        fontFeatureSettings = _ref.fontFeatureSettings;
      // Error Handling
      if (!fontFamily) throw new PolishedError(55);

      if (!fontFilePath && !localFonts) {
        throw new PolishedError(52);
      }

      if (localFonts && !Array.isArray(localFonts)) {
        throw new PolishedError(53);
      }

      if (!Array.isArray(fileFormats)) {
        throw new PolishedError(54);
      }

      var fontFaceDeclaration = {
        '@font-face': {
          fontFamily: fontFamily,
          src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
          unicodeRange: unicodeRange,
          fontStretch: fontStretch,
          fontStyle: fontStyle,
          fontVariant: fontVariant,
          fontWeight: fontWeight,
          fontDisplay: fontDisplay,
          fontVariationSettings: fontVariationSettings,
          fontFeatureSettings: fontFeatureSettings,
        },
      }; // Removes undefined fields for cleaner css object.

      return JSON.parse(JSON.stringify(fontFaceDeclaration));
    }

    /**
     * CSS to hide text to show a background image in a SEO-friendly way.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'backgroundImage': 'url(logo.png)',
     *   ...hideText(),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   backgroundImage: url(logo.png);
     *   ${hideText()};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'backgroundImage': 'url(logo.png)',
     *   'textIndent': '101%',
     *   'overflow': 'hidden',
     *   'whiteSpace': 'nowrap',
     * }
     */
    function hideText() {
      return {
        textIndent: '101%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      };
    }

    /**
     * CSS to hide content visually but remain accessible to screen readers.
     * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...hideVisually(),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${hideVisually()};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'border': '0',
     *   'clip': 'rect(0 0 0 0)',
     *   'height': '1px',
     *   'margin': '-1px',
     *   'overflow': 'hidden',
     *   'padding': '0',
     *   'position': 'absolute',
     *   'whiteSpace': 'nowrap',
     *   'width': '1px',
     * }
     */
    function hideVisually() {
      return {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      };
    }

    /**
     * Generates a media query to target HiDPI devices.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *  [hiDPI(1.5)]: {
     *    width: 200px;
     *  }
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${hiDPI(1.5)} {
     *     width: 200px;
     *   }
     * `
     *
     * // CSS as JS Output
     *
     * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
     *  only screen and (min--moz-device-pixel-ratio: 1.5),
     *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
     *  only screen and (min-resolution: 144dpi),
     *  only screen and (min-resolution: 1.5dppx)': {
     *   'width': '200px',
     * }
     */
    function hiDPI(ratio) {
      if (ratio === void 0) {
        ratio = 1.3;
      }

      return (
        '\n    @media only screen and (-webkit-min-device-pixel-ratio: ' +
        ratio +
        '),\n    only screen and (min--moz-device-pixel-ratio: ' +
        ratio +
        '),\n    only screen and (-o-min-device-pixel-ratio: ' +
        ratio +
        '/1),\n    only screen and (min-resolution: ' +
        Math.round(ratio * 96) +
        'dpi),\n    only screen and (min-resolution: ' +
        ratio +
        'dppx)\n  '
      );
    }

    function constructGradientValue(literals) {
      var template = '';

      for (
        var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
        _key < _len;
        _key++
      ) {
        substitutions[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < literals.length; i += 1) {
        template += literals[i];

        if (i === substitutions.length - 1 && substitutions[i]) {
          var definedValues = substitutions.filter(function (substitute) {
            return !!substitute;
          }); // Adds leading coma if properties preceed color-stops

          if (definedValues.length > 1) {
            template = template.slice(0, -1);
            template += ', ' + substitutions[i]; // No trailing space if color-stops is the only param provided
          } else if (definedValues.length === 1) {
            template += '' + substitutions[i];
          }
        } else if (substitutions[i]) {
          template += substitutions[i] + ' ';
        }
      }

      return template.trim();
    }

    function _templateObject() {
      var data = _taggedTemplateLiteralLoose__default['default'](['linear-gradient(', '', ')']);

      _templateObject = function _templateObject() {
        return data;
      };

      return data;
    }

    /**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
    function linearGradient(_ref) {
      var colorStops = _ref.colorStops,
        fallback = _ref.fallback,
        _ref$toDirection = _ref.toDirection,
        toDirection = _ref$toDirection === void 0 ? '' : _ref$toDirection;

      if (!colorStops || colorStops.length < 2) {
        throw new PolishedError(56);
      }

      return {
        backgroundColor:
          fallback ||
          colorStops[0]
            .replace(/,\s+/g, ',')
            .split(' ')[0]
            .replace(/,(?=\S)/g, ', '),
        backgroundImage: constructGradientValue(
          _templateObject(),
          toDirection,
          colorStops.join(', ').replace(/,(?=\S)/g, ', ')
        ),
      };
    }

    /**
     * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *    ...normalize(),
     * }
     *
     * // styled-components usage
     * const GlobalStyle = createGlobalStyle`${normalize()}`
     *
     * // CSS as JS Output
     *
     * html {
     *   lineHeight: 1.15,
     *   textSizeAdjust: 100%,
     * } ...
     */
    function normalize() {
      var _ref;

      return [
        ((_ref = {
          html: {
            lineHeight: '1.15',
            textSizeAdjust: '100%',
          },
          body: {
            margin: '0',
          },
          main: {
            display: 'block',
          },
          h1: {
            fontSize: '2em',
            margin: '0.67em 0',
          },
          hr: {
            boxSizing: 'content-box',
            height: '0',
            overflow: 'visible',
          },
          pre: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          },
          a: {
            backgroundColor: 'transparent',
          },
          'abbr[title]': {
            borderBottom: 'none',
            textDecoration: 'underline',
          },
        }),
        (_ref['b,\n    strong'] = {
          fontWeight: 'bolder',
        }),
        (_ref['code,\n    kbd,\n    samp'] = {
          fontFamily: 'monospace, monospace',
          fontSize: '1em',
        }),
        (_ref.small = {
          fontSize: '80%',
        }),
        (_ref['sub,\n    sup'] = {
          fontSize: '75%',
          lineHeight: '0',
          position: 'relative',
          verticalAlign: 'baseline',
        }),
        (_ref.sub = {
          bottom: '-0.25em',
        }),
        (_ref.sup = {
          top: '-0.5em',
        }),
        (_ref.img = {
          borderStyle: 'none',
        }),
        (_ref['button,\n    input,\n    optgroup,\n    select,\n    textarea'] = {
          fontFamily: 'inherit',
          fontSize: '100%',
          lineHeight: '1.15',
          margin: '0',
        }),
        (_ref['button,\n    input'] = {
          overflow: 'visible',
        }),
        (_ref['button,\n    select'] = {
          textTransform: 'none',
        }),
        (_ref['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]'] = {
          WebkitAppearance: 'button',
        }),
        (_ref[
          'button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner'
        ] = {
          borderStyle: 'none',
          padding: '0',
        }),
        (_ref[
          'button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring'
        ] = {
          outline: '1px dotted ButtonText',
        }),
        (_ref.fieldset = {
          padding: '0.35em 0.625em 0.75em',
        }),
        (_ref.legend = {
          boxSizing: 'border-box',
          color: 'inherit',
          display: 'table',
          maxWidth: '100%',
          padding: '0',
          whiteSpace: 'normal',
        }),
        (_ref.progress = {
          verticalAlign: 'baseline',
        }),
        (_ref.textarea = {
          overflow: 'auto',
        }),
        (_ref['[type="checkbox"],\n    [type="radio"]'] = {
          boxSizing: 'border-box',
          padding: '0',
        }),
        (_ref['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button'] = {
          height: 'auto',
        }),
        (_ref['[type="search"]'] = {
          WebkitAppearance: 'textfield',
          outlineOffset: '-2px',
        }),
        (_ref['[type="search"]::-webkit-search-decoration'] = {
          WebkitAppearance: 'none',
        }),
        (_ref['::-webkit-file-upload-button'] = {
          WebkitAppearance: 'button',
          font: 'inherit',
        }),
        (_ref.details = {
          display: 'block',
        }),
        (_ref.summary = {
          display: 'list-item',
        }),
        (_ref.template = {
          display: 'none',
        }),
        (_ref['[hidden]'] = {
          display: 'none',
        }),
        _ref),
        {
          'abbr[title]': {
            textDecoration: 'underline dotted',
          },
        },
      ];
    }

    function _templateObject$1() {
      var data = _taggedTemplateLiteralLoose__default['default'](['radial-gradient(', '', '', '', ')']);

      _templateObject$1 = function _templateObject() {
        return data;
      };

      return data;
    }

    /**
     * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...radialGradient({
     *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
     *     extent: 'farthest-corner at 45px 45px',
     *     position: 'center',
     *     shape: 'ellipse',
     *   })
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${radialGradient({
     *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
     *     extent: 'farthest-corner at 45px 45px',
     *     position: 'center',
     *     shape: 'ellipse',
     *   })}
     *`
     *
     * // CSS as JS Output
     *
     * div: {
     *   'backgroundColor': '#00FFFF',
     *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
     * }
     */
    function radialGradient(_ref) {
      var colorStops = _ref.colorStops,
        _ref$extent = _ref.extent,
        extent = _ref$extent === void 0 ? '' : _ref$extent,
        fallback = _ref.fallback,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? '' : _ref$position,
        _ref$shape = _ref.shape,
        shape = _ref$shape === void 0 ? '' : _ref$shape;

      if (!colorStops || colorStops.length < 2) {
        throw new PolishedError(57);
      }

      return {
        backgroundColor: fallback || colorStops[0].split(' ')[0],
        backgroundImage: constructGradientValue(_templateObject$1(), position, shape, extent, colorStops.join(', ')),
      };
    }

    /**
     * A helper to generate a retina background image and non-retina
     * background image. The retina background image will output to a HiDPI media query. The mixin uses
     * a _2x.png filename suffix by default.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *  ...retinaImage('my-img')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${retinaImage('my-img')}
     * `
     *
     * // CSS as JS Output
     * div {
     *   backgroundImage: 'url(my-img.png)',
     *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
     *    only screen and (min--moz-device-pixel-ratio: 1.3),
     *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
     *    only screen and (min-resolution: 144dpi),
     *    only screen and (min-resolution: 1.5dppx)': {
     *     backgroundImage: 'url(my-img_2x.png)',
     *   }
     * }
     */
    function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
      var _ref;

      if (extension === void 0) {
        extension = 'png';
      }

      if (retinaSuffix === void 0) {
        retinaSuffix = '_2x';
      }

      if (!filename) {
        throw new PolishedError(58);
      } // Replace the dot at the beginning of the passed extension if one exists

      var ext = extension.replace(/^\./, '');
      var rFilename = retinaFilename ? retinaFilename + '.' + ext : '' + filename + retinaSuffix + '.' + ext;
      return (
        (_ref = {
          backgroundImage: 'url(' + filename + '.' + ext + ')',
        }),
        (_ref[hiDPI()] = _extends__default['default'](
          {
            backgroundImage: 'url(' + rFilename + ')',
          },
          backgroundSize
            ? {
                backgroundSize: backgroundSize,
              }
            : {}
        )),
        _ref
      );
    }

    /* eslint-disable key-spacing */
    var functionsMap$3 = {
      easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
      easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
      easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
      easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
      easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
      easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
      easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
      easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
      easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
      easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
      easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
      easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
      easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
      easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
      easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
      easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
      easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
      easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
      easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
      easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
      easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
    };
    /* eslint-enable key-spacing */

    function getTimingFunction(functionName) {
      return functionsMap$3[functionName];
    }
    /**
     * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
     *
     * @deprecated - This will be deprecated in v5 in favor of `easeIn`, `easeOut`, `easeInOut`.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   'transitionTimingFunction': timingFunctions('easeInQuad')
     * }
     *
     * // styled-components usage
     *  const div = styled.div`
     *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
     * `
     *
     * // CSS as JS Output
     *
     * 'div': {
     *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
     * }
     */

    function timingFunctions(timingFunction) {
      return getTimingFunction(timingFunction);
    }

    var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
      var fullWidth = '' + width[0] + (width[1] || '');
      var halfWidth = '' + width[0] / 2 + (width[1] || '');
      var fullHeight = '' + height[0] + (height[1] || '');
      var halfHeight = '' + height[0] / 2 + (height[1] || '');

      switch (pointingDirection) {
        case 'top':
          return '0 ' + halfWidth + ' ' + fullHeight + ' ' + halfWidth;

        case 'topLeft':
          return fullWidth + ' ' + fullHeight + ' 0 0';

        case 'left':
          return halfHeight + ' ' + fullWidth + ' ' + halfHeight + ' 0';

        case 'bottomLeft':
          return fullWidth + ' 0 0 ' + fullHeight;

        case 'bottom':
          return fullHeight + ' ' + halfWidth + ' 0 ' + halfWidth;

        case 'bottomRight':
          return '0 0 ' + fullWidth + ' ' + fullHeight;

        case 'right':
          return halfHeight + ' 0 ' + halfHeight + ' ' + fullWidth;

        case 'topRight':
        default:
          return '0 ' + fullWidth + ' ' + fullHeight + ' 0';
      }
    };

    var getBorderColor = function getBorderColor(pointingDirection, foregroundColor) {
      switch (pointingDirection) {
        case 'top':
        case 'bottomRight':
          return {
            borderBottomColor: foregroundColor,
          };

        case 'right':
        case 'bottomLeft':
          return {
            borderLeftColor: foregroundColor,
          };

        case 'bottom':
        case 'topLeft':
          return {
            borderTopColor: foregroundColor,
          };

        case 'left':
        case 'topRight':
          return {
            borderRightColor: foregroundColor,
          };

        default:
          throw new PolishedError(59);
      }
    };
    /**
     * CSS to represent triangle with any pointing direction with an optional background color.
     *
     * @example
     * // Styles as object usage
     *
     * const styles = {
     *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
     * }
     *
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
     *
     *
     * // CSS as JS Output
     *
     * div: {
     *  'borderColor': 'transparent transparent transparent red',
     *  'borderStyle': 'solid',
     *  'borderWidth': '50px 0 50px 100px',
     *  'height': '0',
     *  'width': '0',
     * }
     */

    function triangle(_ref) {
      var pointingDirection = _ref.pointingDirection,
        height = _ref.height,
        width = _ref.width,
        foregroundColor = _ref.foregroundColor,
        _ref$backgroundColor = _ref.backgroundColor,
        backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
      var widthAndUnit = getValueAndUnit(width);
      var heightAndUnit = getValueAndUnit(height);

      if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
        throw new PolishedError(60);
      }

      return _extends__default['default'](
        {
          width: '0',
          height: '0',
          borderColor: backgroundColor,
        },
        getBorderColor(pointingDirection, foregroundColor),
        {
          borderStyle: 'solid',
          borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
        }
      );
    }

    /**
     * Provides an easy way to change the `wordWrap` property.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...wordWrap('break-word')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${wordWrap('break-word')}
     * `
     *
     * // CSS as JS Output
     *
     * const styles = {
     *   overflowWrap: 'break-word',
     *   wordWrap: 'break-word',
     *   wordBreak: 'break-all',
     * }
     */
    function wordWrap(wrap) {
      if (wrap === void 0) {
        wrap = 'break-word';
      }

      var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
      return {
        overflowWrap: wrap,
        wordWrap: wrap,
        wordBreak: wordBreak,
      };
    }

    function colorToInt(color) {
      return Math.round(color * 255);
    }

    function convertToInt(red, green, blue) {
      return colorToInt(red) + ',' + colorToInt(green) + ',' + colorToInt(blue);
    }

    function hslToRgb(hue, saturation, lightness, convert) {
      if (convert === void 0) {
        convert = convertToInt;
      }

      if (saturation === 0) {
        // achromatic
        return convert(lightness, lightness, lightness);
      } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV

      var huePrime = (((hue % 360) + 360) % 360) / 60;
      var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
      var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
      var red = 0;
      var green = 0;
      var blue = 0;

      if (huePrime >= 0 && huePrime < 1) {
        red = chroma;
        green = secondComponent;
      } else if (huePrime >= 1 && huePrime < 2) {
        red = secondComponent;
        green = chroma;
      } else if (huePrime >= 2 && huePrime < 3) {
        green = chroma;
        blue = secondComponent;
      } else if (huePrime >= 3 && huePrime < 4) {
        green = secondComponent;
        blue = chroma;
      } else if (huePrime >= 4 && huePrime < 5) {
        red = secondComponent;
        blue = chroma;
      } else if (huePrime >= 5 && huePrime < 6) {
        red = chroma;
        blue = secondComponent;
      }

      var lightnessModification = lightness - chroma / 2;
      var finalRed = red + lightnessModification;
      var finalGreen = green + lightnessModification;
      var finalBlue = blue + lightnessModification;
      return convert(finalRed, finalGreen, finalBlue);
    }

    var namedColorMap = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    /**
     * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
     * @private
     */

    function nameToHex(color) {
      if (typeof color !== 'string') return color;
      var normalizedColorName = color.toLowerCase();
      return namedColorMap[normalizedColorName] ? '#' + namedColorMap[normalizedColorName] : color;
    }

    var hexRegex = /^#[a-fA-F0-9]{6}$/;
    var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
    var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
    var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
    var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
    var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
    var hslaRegex =
      /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
    /**
     * Returns an RgbColor or RgbaColor object. This utility function is only useful
     * if want to extract a color component. With the color util `toColorString` you
     * can convert a RgbColor or RgbaColor object back to a string.
     *
     * @example
     * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
     * const color1 = parseToRgb('rgb(255, 0, 0)');
     * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
     * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
     */

    function parseToRgb(color) {
      if (typeof color !== 'string') {
        throw new PolishedError(3);
      }

      var normalizedColor = nameToHex(color);

      if (normalizedColor.match(hexRegex)) {
        return {
          red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
          green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
          blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
        };
      }

      if (normalizedColor.match(hexRgbaRegex)) {
        var alpha = parseFloat((parseInt('' + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
          green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
          blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
          alpha: alpha,
        };
      }

      if (normalizedColor.match(reducedHexRegex)) {
        return {
          red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
          green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
          blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
        };
      }

      if (normalizedColor.match(reducedRgbaHexRegex)) {
        var _alpha = parseFloat((parseInt('' + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

        return {
          red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
          green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
          blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
          alpha: _alpha,
        };
      }

      var rgbMatched = rgbRegex.exec(normalizedColor);

      if (rgbMatched) {
        return {
          red: parseInt('' + rgbMatched[1], 10),
          green: parseInt('' + rgbMatched[2], 10),
          blue: parseInt('' + rgbMatched[3], 10),
        };
      }

      var rgbaMatched = rgbaRegex.exec(normalizedColor);

      if (rgbaMatched) {
        return {
          red: parseInt('' + rgbaMatched[1], 10),
          green: parseInt('' + rgbaMatched[2], 10),
          blue: parseInt('' + rgbaMatched[3], 10),
          alpha: parseFloat('' + rgbaMatched[4]),
        };
      }

      var hslMatched = hslRegex.exec(normalizedColor);

      if (hslMatched) {
        var hue = parseInt('' + hslMatched[1], 10);
        var saturation = parseInt('' + hslMatched[2], 10) / 100;
        var lightness = parseInt('' + hslMatched[3], 10) / 100;
        var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
        var hslRgbMatched = rgbRegex.exec(rgbColorString);

        if (!hslRgbMatched) {
          throw new PolishedError(4, normalizedColor, rgbColorString);
        }

        return {
          red: parseInt('' + hslRgbMatched[1], 10),
          green: parseInt('' + hslRgbMatched[2], 10),
          blue: parseInt('' + hslRgbMatched[3], 10),
        };
      }

      var hslaMatched = hslaRegex.exec(normalizedColor);

      if (hslaMatched) {
        var _hue = parseInt('' + hslaMatched[1], 10);

        var _saturation = parseInt('' + hslaMatched[2], 10) / 100;

        var _lightness = parseInt('' + hslaMatched[3], 10) / 100;

        var _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';

        var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

        if (!_hslRgbMatched) {
          throw new PolishedError(4, normalizedColor, _rgbColorString);
        }

        return {
          red: parseInt('' + _hslRgbMatched[1], 10),
          green: parseInt('' + _hslRgbMatched[2], 10),
          blue: parseInt('' + _hslRgbMatched[3], 10),
          alpha: parseFloat('' + hslaMatched[4]),
        };
      }

      throw new PolishedError(5);
    }

    function rgbToHsl(color) {
      // make sure rgb are contained in a set of [0, 255]
      var red = color.red / 255;
      var green = color.green / 255;
      var blue = color.blue / 255;
      var max = Math.max(red, green, blue);
      var min = Math.min(red, green, blue);
      var lightness = (max + min) / 2;

      if (max === min) {
        // achromatic
        if (color.alpha !== undefined) {
          return {
            hue: 0,
            saturation: 0,
            lightness: lightness,
            alpha: color.alpha,
          };
        } else {
          return {
            hue: 0,
            saturation: 0,
            lightness: lightness,
          };
        }
      }

      var hue;
      var delta = max - min;
      var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      switch (max) {
        case red:
          hue = (green - blue) / delta + (green < blue ? 6 : 0);
          break;

        case green:
          hue = (blue - red) / delta + 2;
          break;

        default:
          // blue case
          hue = (red - green) / delta + 4;
          break;
      }

      hue *= 60;

      if (color.alpha !== undefined) {
        return {
          hue: hue,
          saturation: saturation,
          lightness: lightness,
          alpha: color.alpha,
        };
      }

      return {
        hue: hue,
        saturation: saturation,
        lightness: lightness,
      };
    }

    /**
     * Returns an HslColor or HslaColor object. This utility function is only useful
     * if want to extract a color component. With the color util `toColorString` you
     * can convert a HslColor or HslaColor object back to a string.
     *
     * @example
     * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
     * const color1 = parseToHsl('rgb(255, 0, 0)');
     * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
     * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
     */
    function parseToHsl(color) {
      // Note: At a later stage we can optimize this function as right now a hsl
      // color would be parsed converted to rgb values and converted back to hsl.
      return rgbToHsl(parseToRgb(color));
    }

    /**
     * Reduces hex values if possible e.g. #ff8866 to #f86
     * @private
     */
    var reduceHexValue = function reduceHexValue(value) {
      if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
        return '#' + value[1] + value[3] + value[5];
      }

      return value;
    };

    function numberToHex(value) {
      var hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }

    function colorToHex(color) {
      return numberToHex(Math.round(color * 255));
    }

    function convertToHex(red, green, blue) {
      return reduceHexValue('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
    }

    function hslToHex(hue, saturation, lightness) {
      return hslToRgb(hue, saturation, lightness, convertToHex);
    }

    /**
     * Returns a string value for the color. The returned result is the smallest possible hex notation.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: hsl(359, 0.75, 0.4),
     *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${hsl(359, 0.75, 0.4)};
     *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#b3191c";
     *   background: "#b3191c";
     * }
     */
    function hsl(value, saturation, lightness) {
      if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
        return hslToHex(value, saturation, lightness);
      } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
        return hslToHex(value.hue, value.saturation, value.lightness);
      }

      throw new PolishedError(1);
    }

    /**
     * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: hsla(359, 0.75, 0.4, 0.7),
     *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
     *   background: hsla(359, 0.75, 0.4, 1),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${hsla(359, 0.75, 0.4, 0.7)};
     *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
     *   background: ${hsla(359, 0.75, 0.4, 1)};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "rgba(179,25,28,0.7)";
     *   background: "rgba(179,25,28,0.7)";
     *   background: "#b3191c";
     * }
     */
    function hsla(value, saturation, lightness, alpha) {
      if (
        typeof value === 'number' &&
        typeof saturation === 'number' &&
        typeof lightness === 'number' &&
        typeof alpha === 'number'
      ) {
        return alpha >= 1
          ? hslToHex(value, saturation, lightness)
          : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
      } else if (
        typeof value === 'object' &&
        saturation === undefined &&
        lightness === undefined &&
        alpha === undefined
      ) {
        return value.alpha >= 1
          ? hslToHex(value.hue, value.saturation, value.lightness)
          : 'rgba(' + hslToRgb(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
      }

      throw new PolishedError(2);
    }

    /**
     * Returns a string value for the color. The returned result is the smallest possible hex notation.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: rgb(255, 205, 100),
     *   background: rgb({ red: 255, green: 205, blue: 100 }),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${rgb(255, 205, 100)};
     *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#ffcd64";
     *   background: "#ffcd64";
     * }
     */
    function rgb(value, green, blue) {
      if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
        return reduceHexValue('#' + numberToHex(value) + numberToHex(green) + numberToHex(blue));
      } else if (typeof value === 'object' && green === undefined && blue === undefined) {
        return reduceHexValue('#' + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
      }

      throw new PolishedError(6);
    }

    /**
     * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
     *
     * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: rgba(255, 205, 100, 0.7),
     *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
     *   background: rgba(255, 205, 100, 1),
     *   background: rgba('#ffffff', 0.4),
     *   background: rgba('black', 0.7),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${rgba(255, 205, 100, 0.7)};
     *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
     *   background: ${rgba(255, 205, 100, 1)};
     *   background: ${rgba('#ffffff', 0.4)};
     *   background: ${rgba('black', 0.7)};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "rgba(255,205,100,0.7)";
     *   background: "rgba(255,205,100,0.7)";
     *   background: "#ffcd64";
     *   background: "rgba(255,255,255,0.4)";
     *   background: "rgba(0,0,0,0.7)";
     * }
     */
    function rgba(firstValue, secondValue, thirdValue, fourthValue) {
      if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        var rgbValue = parseToRgb(firstValue);
        return 'rgba(' + rgbValue.red + ',' + rgbValue.green + ',' + rgbValue.blue + ',' + secondValue + ')';
      } else if (
        typeof firstValue === 'number' &&
        typeof secondValue === 'number' &&
        typeof thirdValue === 'number' &&
        typeof fourthValue === 'number'
      ) {
        return fourthValue >= 1
          ? rgb(firstValue, secondValue, thirdValue)
          : 'rgba(' + firstValue + ',' + secondValue + ',' + thirdValue + ',' + fourthValue + ')';
      } else if (
        typeof firstValue === 'object' &&
        secondValue === undefined &&
        thirdValue === undefined &&
        fourthValue === undefined
      ) {
        return firstValue.alpha >= 1
          ? rgb(firstValue.red, firstValue.green, firstValue.blue)
          : 'rgba(' + firstValue.red + ',' + firstValue.green + ',' + firstValue.blue + ',' + firstValue.alpha + ')';
      }

      throw new PolishedError(7);
    }

    var isRgb = function isRgb(color) {
      return (
        typeof color.red === 'number' &&
        typeof color.green === 'number' &&
        typeof color.blue === 'number' &&
        (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
      );
    };

    var isRgba = function isRgba(color) {
      return (
        typeof color.red === 'number' &&
        typeof color.green === 'number' &&
        typeof color.blue === 'number' &&
        typeof color.alpha === 'number'
      );
    };

    var isHsl = function isHsl(color) {
      return (
        typeof color.hue === 'number' &&
        typeof color.saturation === 'number' &&
        typeof color.lightness === 'number' &&
        (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
      );
    };

    var isHsla = function isHsla(color) {
      return (
        typeof color.hue === 'number' &&
        typeof color.saturation === 'number' &&
        typeof color.lightness === 'number' &&
        typeof color.alpha === 'number'
      );
    };
    /**
     * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
     * This util is useful in case you only know on runtime which color object is
     * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: toColorString({ red: 255, green: 205, blue: 100 }),
     *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
     *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
     *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
     *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
     *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
     *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#ffcd64";
     *   background: "rgba(255,205,100,0.72)";
     *   background: "#00f";
     *   background: "rgba(179,25,25,0.72)";
     * }
     */

    function toColorString(color) {
      if (typeof color !== 'object') throw new PolishedError(8);
      if (isRgba(color)) return rgba(color);
      if (isRgb(color)) return rgb(color);
      if (isHsla(color)) return hsla(color);
      if (isHsl(color)) return hsl(color);
      throw new PolishedError(8);
    }

    // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-redeclare
    function curried(f, length, acc) {
      return function fn() {
        // eslint-disable-next-line prefer-rest-params
        var combined = acc.concat(Array.prototype.slice.call(arguments));
        return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
      };
    } // eslint-disable-next-line no-redeclare

    function curry(f) {
      // eslint-disable-line no-redeclare
      return curried(f, f.length, []);
    }

    /**
     * Changes the hue of the color. Hue is a number between 0 to 360. The first
     * argument for adjustHue is the amount of degrees the color is rotated around
     * the color wheel, always producing a positive hue value.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: adjustHue(180, '#448'),
     *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${adjustHue(180, '#448')};
     *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#888844";
     *   background: "rgba(136,136,68,0.7)";
     * }
     */

    function adjustHue(degree, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends__default['default']({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
} // prettier-ignore

    var curriedAdjustHue = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(adjustHue);

    /**
     * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: complement('#448'),
     *   background: complement('rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${complement('#448')};
     *   background: ${complement('rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#884";
     *   background: "rgba(153,153,153,0.7)";
     * }
     */

    function complement(color) {
      if (color === 'transparent') return color;
      var hslColor = parseToHsl(color);
      return toColorString(
        _extends__default['default']({}, hslColor, {
          hue: (hslColor.hue + 180) % 360,
        })
      );
    }

    function guard(lowerBoundary, upperBoundary, value) {
      return Math.max(lowerBoundary, Math.min(upperBoundary, value));
    }

    /**
     * Returns a string value for the darkened color.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: darken(0.2, '#FFCD64'),
     *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${darken(0.2, '#FFCD64')};
     *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#ffbd31";
     *   background: "rgba(255,189,49,0.7)";
     * }
     */

    function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends__default['default']({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore

    var curriedDarken = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(darken);

    /**
     * Decreases the intensity of a color. Its range is between 0 to 1. The first
     * argument of the desaturate function is the amount by how much the color
     * intensity should be decreased.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: desaturate(0.2, '#CCCD64'),
     *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${desaturate(0.2, '#CCCD64')};
     *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#b8b979";
     *   background: "rgba(184,185,121,0.7)";
     * }
     */

    function desaturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends__default['default']({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore

    var curriedDesaturate = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(desaturate);

    /**
     * Returns a number (float) representing the luminance of a color.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
     *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
     *                             'rgba(58, 133, 255, 1)' :
     *                             'rgba(255, 57, 149, 1)',
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
     *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
     *                             'rgba(58, 133, 255, 1)' :
     *                             'rgba(255, 57, 149, 1)'};
     *
     * // CSS in JS Output
     *
     * div {
     *   background: "#CCCD64";
     *   background: "rgba(58, 133, 255, 1)";
     * }
     */

    function getLuminance(color) {
      if (color === 'transparent') return 0;
      var rgbColor = parseToRgb(color);

      var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
          var channel = rgbColor[key] / 255;
          return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
        }),
        r = _Object$keys$map[0],
        g = _Object$keys$map[1],
        b = _Object$keys$map[2];

      return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
    }

    /**
     * Returns the contrast ratio between two colors based on
     * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
     *
     * @example
     * const contrastRatio = getContrast('#444', '#fff');
     */

    function getContrast(color1, color2) {
      var luminance1 = getLuminance(color1);
      var luminance2 = getLuminance(color2);
      return parseFloat(
        (luminance1 > luminance2
          ? (luminance1 + 0.05) / (luminance2 + 0.05)
          : (luminance2 + 0.05) / (luminance1 + 0.05)
        ).toFixed(2)
      );
    }

    /**
     * Converts the color to a grayscale, by reducing its saturation to 0.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: grayscale('#CCCD64'),
     *   background: grayscale('rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${grayscale('#CCCD64')};
     *   background: ${grayscale('rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#999";
     *   background: "rgba(153,153,153,0.7)";
     * }
     */

    function grayscale(color) {
      if (color === 'transparent') return color;
      return toColorString(
        _extends__default['default']({}, parseToHsl(color), {
          saturation: 0,
        })
      );
    }

    /**
     * Converts a HslColor or HslaColor object to a color string.
     * This util is useful in case you only know on runtime which color object is
     * used. Otherwise we recommend to rely on `hsl` or `hsla`.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
     *   background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
     *   background: ${hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#00f";
     *   background: "rgba(179,25,25,0.72)";
     * }
     */
    function hslToColorString(color) {
      if (
        typeof color === 'object' &&
        typeof color.hue === 'number' &&
        typeof color.saturation === 'number' &&
        typeof color.lightness === 'number'
      ) {
        if (color.alpha && typeof color.alpha === 'number') {
          return hsla({
            hue: color.hue,
            saturation: color.saturation,
            lightness: color.lightness,
            alpha: color.alpha,
          });
        }

        return hsl({
          hue: color.hue,
          saturation: color.saturation,
          lightness: color.lightness,
        });
      }

      throw new PolishedError(45);
    }

    /**
     * Inverts the red, green and blue values of a color.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: invert('#CCCD64'),
     *   background: invert('rgba(101,100,205,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${invert('#CCCD64')};
     *   background: ${invert('rgba(101,100,205,0.7)')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#33329b";
     *   background: "rgba(154,155,50,0.7)";
     * }
     */

    function invert(color) {
      if (color === 'transparent') return color; // parse color string to rgb

      var value = parseToRgb(color);
      return toColorString(
        _extends__default['default']({}, value, {
          red: 255 - value.red,
          green: 255 - value.green,
          blue: 255 - value.blue,
        })
      );
    }

    /**
     * Returns a string value for the lightened color.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: lighten(0.2, '#CCCD64'),
     *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${lighten(0.2, '#FFCD64')};
     *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#e5e6b1";
     *   background: "rgba(229,230,177,0.7)";
     * }
     */

    function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends__default['default']({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore

    var curriedLighten = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(lighten);

    /**
     * Determines which contrast guidelines have been met for two colors.
     * Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
     *
     * @example
     * const scores = meetsContrastGuidelines('#444', '#fff');
     */
    function meetsContrastGuidelines(color1, color2) {
      var contrastRatio = getContrast(color1, color2);
      return {
        AA: contrastRatio >= 4.5,
        AALarge: contrastRatio >= 3,
        AAA: contrastRatio >= 7,
        AAALarge: contrastRatio >= 4.5,
      };
    }

    /**
     * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: mix(0.5, '#f00', '#00f')
     *   background: mix(0.25, '#f00', '#00f')
     *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${mix(0.5, '#f00', '#00f')};
     *   background: ${mix(0.25, '#f00', '#00f')};
     *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#7f007f";
     *   background: "#3f00bf";
     *   background: "rgba(63, 0, 191, 0.75)";
     * }
     */

    function mix(weight, color, otherColor) {
  if (color === 'transparent') return otherColor;
  if (otherColor === 'transparent') return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color);

  var color1 = _extends__default['default']({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = _extends__default['default']({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  }); // The formula is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method


  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * (parseFloat(weight) / 1.0) + color2.alpha * (1 - parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore

    var curriedMix = /*#__PURE__*/ curry/*:: :<number | string, string, string, string> */(mix);

    /**
     * Increases the opacity of a color. Its range for the amount is between 0 to 1.
     *
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
     *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
     *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
     *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
     *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#fff";
     *   background: "rgba(255,255,255,0.7)";
     *   background: "rgba(255,0,0,0.7)";
     * }
     */

    function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends__default['default']({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore

    var curriedOpacify = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(opacify);

    var defaultReturnIfLightColor = '#000';
    var defaultReturnIfDarkColor = '#fff';
    /**
     * Returns black or white (or optional passed colors) for best
     * contrast depending on the luminosity of the given color.
     * When passing custom return colors, strict mode ensures that the
     * return color always meets or exceeds WCAG level AA or greater. If this test
     * fails, the default return color (black or white) is returned in place of the
     * custom return color. You can optionally turn off strict mode.
     *
     * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   color: readableColor('#000'),
     *   color: readableColor('black', '#001', '#ff8'),
     *   color: readableColor('white', '#001', '#ff8'),
     *   color: readableColor('red', '#333', '#ddd', true)
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   color: ${readableColor('#000')};
     *   color: ${readableColor('black', '#001', '#ff8')};
     *   color: ${readableColor('white', '#001', '#ff8')};
     *   color: ${readableColor('red', '#333', '#ddd', true)};
     * `
     *
     * // CSS in JS Output
     * element {
     *   color: "#fff";
     *   color: "#ff8";
     *   color: "#001";
     *   color: "#000";
     * }
     */

    function readableColor(color, returnIfLightColor, returnIfDarkColor, strict) {
      if (returnIfLightColor === void 0) {
        returnIfLightColor = defaultReturnIfLightColor;
      }

      if (returnIfDarkColor === void 0) {
        returnIfDarkColor = defaultReturnIfDarkColor;
      }

      if (strict === void 0) {
        strict = true;
      }

      var isColorLight = getLuminance(color) > 0.179;
      var preferredReturnColor = isColorLight ? returnIfLightColor : returnIfDarkColor;

      if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
        return preferredReturnColor;
      }

      return isColorLight ? defaultReturnIfLightColor : defaultReturnIfDarkColor;
    }

    /**
     * Converts a RgbColor or RgbaColor object to a color string.
     * This util is useful in case you only know on runtime which color object is
     * used. Otherwise we recommend to rely on `rgb` or `rgba`.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
     *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
     *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#ffcd64";
     *   background: "rgba(255,205,100,0.72)";
     * }
     */
    function rgbToColorString(color) {
      if (
        typeof color === 'object' &&
        typeof color.red === 'number' &&
        typeof color.green === 'number' &&
        typeof color.blue === 'number'
      ) {
        if (typeof color.alpha === 'number') {
          return rgba({
            red: color.red,
            green: color.green,
            blue: color.blue,
            alpha: color.alpha,
          });
        }

        return rgb({
          red: color.red,
          green: color.green,
          blue: color.blue,
        });
      }

      throw new PolishedError(46);
    }

    /**
     * Increases the intensity of a color. Its range is between 0 to 1. The first
     * argument of the saturate function is the amount by how much the color
     * intensity should be increased.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: saturate(0.2, '#CCCD64'),
     *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${saturate(0.2, '#FFCD64')};
     *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#e0e250";
     *   background: "rgba(224,226,80,0.7)";
     * }
     */

    function saturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends__default['default']({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore

    var curriedSaturate = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(saturate);

    /**
     * Sets the hue of a color to the provided value. The hue range can be
     * from 0 and 359.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: setHue(42, '#CCCD64'),
     *   background: setHue('244', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${setHue(42, '#CCCD64')};
     *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#cdae64";
     *   background: "rgba(107,100,205,0.7)";
     * }
     */

    function setHue(hue, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends__default['default']({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore

    var curriedSetHue = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(setHue);

    /**
     * Sets the lightness of a color to the provided value. The lightness range can be
     * from 0 and 1.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: setLightness(0.2, '#CCCD64'),
     *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${setLightness(0.2, '#CCCD64')};
     *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#4d4d19";
     *   background: "rgba(223,224,159,0.7)";
     * }
     */

    function setLightness(lightness, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends__default['default']({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore

    var curriedSetLightness = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(setLightness);

    /**
     * Sets the saturation of a color to the provided value. The saturation range can be
     * from 0 and 1.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: setSaturation(0.2, '#CCCD64'),
     *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${setSaturation(0.2, '#CCCD64')};
     *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
     * `
     *
     * // CSS in JS Output
     * element {
     *   background: "#adad84";
     *   background: "rgba(228,229,76,0.7)";
     * }
     */

    function setSaturation(saturation, color) {
  if (color === 'transparent') return color;
  return toColorString(_extends__default['default']({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore

    var curriedSetSaturation = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(setSaturation);

    /**
     * Shades a color by mixing it with black. `shade` can produce
     * hue shifts, where as `darken` manipulates the luminance channel and therefore
     * doesn't produce hue shifts.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: shade(0.25, '#00f')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${shade(0.25, '#00f')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#00003f";
     * }
     */

    function shade(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore

    var curriedShade = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(shade);

    /**
     * Tints a color by mixing it with white. `tint` can produce
     * hue shifts, where as `lighten` manipulates the luminance channel and therefore
     * doesn't produce hue shifts.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: tint(0.25, '#00f')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${tint(0.25, '#00f')};
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "#bfbfff";
     * }
     */

    function tint(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore

    var curriedTint = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(tint);

    /**
     * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
     *
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   background: transparentize(0.1, '#fff');
     *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
     *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   background: ${transparentize(0.1, '#fff')};
     *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
     *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
     * `
     *
     * // CSS in JS Output
     *
     * element {
     *   background: "rgba(255,255,255,0.9)";
     *   background: "rgba(255,255,255,0.8)";
     *   background: "rgba(255,0,0,0.3)";
     * }
     */

    function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends__default['default']({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore

    var curriedTransparentize = /*#__PURE__*/ curry/*:: :<number | string, string, string> */(transparentize);

    /**
     * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
     * or a single animation spread over the arguments.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
     * }
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...animation('rotate', '1s', 'ease-in-out')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${animation('rotate', '1s', 'ease-in-out')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'animation': 'rotate 1s ease-in-out'
     * }
     */
    function animation() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Allow single or multiple animations passed
      var multiMode = Array.isArray(args[0]);

      if (!multiMode && args.length > 8) {
        throw new PolishedError(64);
      }

      var code = args
        .map(function (arg) {
          if ((multiMode && !Array.isArray(arg)) || (!multiMode && Array.isArray(arg))) {
            throw new PolishedError(65);
          }

          if (Array.isArray(arg) && arg.length > 8) {
            throw new PolishedError(66);
          }

          return Array.isArray(arg) ? arg.join(' ') : arg;
        })
        .join(', ');
      return {
        animation: code,
      };
    }

    /**
     * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
     * }
     */
    function backgroundImages() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      return {
        backgroundImage: properties.join(', '),
      };
    }

    /**
     * Shorthand that accepts any number of background values as parameters for creating a single background statement.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
     * }
     */
    function backgrounds() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      return {
        background: properties.join(', '),
      };
    }

    var sideMap = ['top', 'right', 'bottom', 'left'];
    /**
     * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
     *
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...border('1px', 'solid', 'red')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${border('1px', 'solid', 'red')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderColor': 'red',
     *   'borderStyle': 'solid',
     *   'borderWidth': `1px`,
     * }
     *
     * // Styles as object usage
     * const styles = {
     *   ...border('top', '1px', 'solid', 'red')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${border('top', '1px', 'solid', 'red')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderTopColor': 'red',
     *   'borderTopStyle': 'solid',
     *   'borderTopWidth': `1px`,
     * }
     */

    function border(sideKeyword) {
      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
        var _ref;

        return (
          (_ref = {}),
          (_ref['border' + capitalizeString(sideKeyword) + 'Width'] = values[0]),
          (_ref['border' + capitalizeString(sideKeyword) + 'Style'] = values[1]),
          (_ref['border' + capitalizeString(sideKeyword) + 'Color'] = values[2]),
          _ref
        );
      } else {
        values.unshift(sideKeyword);
        return {
          borderWidth: values[0],
          borderStyle: values[1],
          borderColor: values[2],
        };
      }
    }

    /**
     * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...borderColor('red', 'green', 'blue', 'yellow')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${borderColor('red', 'green', 'blue', 'yellow')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderTopColor': 'red',
     *   'borderRightColor': 'green',
     *   'borderBottomColor': 'blue',
     *   'borderLeftColor': 'yellow'
     * }
     */
    function borderColor() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return directionalProperty.apply(void 0, ['borderColor'].concat(values));
    }

    /**
     * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...borderRadius('top', '5px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${borderRadius('top', '5px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderTopRightRadius': '5px',
     *   'borderTopLeftRadius': '5px',
     * }
     */
    function borderRadius(side, radius) {
      var uppercaseSide = capitalizeString(side);

      if (!radius && radius !== 0) {
        throw new PolishedError(62);
      }

      if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
        var _ref;

        return (
          (_ref = {}),
          (_ref['border' + uppercaseSide + 'RightRadius'] = radius),
          (_ref['border' + uppercaseSide + 'LeftRadius'] = radius),
          _ref
        );
      }

      if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
        var _ref2;

        return (
          (_ref2 = {}),
          (_ref2['borderTop' + uppercaseSide + 'Radius'] = radius),
          (_ref2['borderBottom' + uppercaseSide + 'Radius'] = radius),
          _ref2
        );
      }

      throw new PolishedError(63);
    }

    /**
     * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderTopStyle': 'solid',
     *   'borderRightStyle': 'dashed',
     *   'borderBottomStyle': 'dotted',
     *   'borderLeftStyle': 'double'
     * }
     */
    function borderStyle() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
    }

    /**
     * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...borderWidth('12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${borderWidth('12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'borderTopWidth': '12px',
     *   'borderRightWidth': '24px',
     *   'borderBottomWidth': '36px',
     *   'borderLeftWidth': '48px'
     * }
     */
    function borderWidth() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
    }

    function generateSelectors(template, state) {
      var stateSuffix = state ? ':' + state : '';
      return template(stateSuffix);
    }
    /**
     * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
     * @private
     */

    function statefulSelectors(states, template, stateMap) {
      if (!template) throw new PolishedError(67);
      if (states.length === 0) return generateSelectors(template, null);
      var selectors = [];

      for (var i = 0; i < states.length; i += 1) {
        if (stateMap && stateMap.indexOf(states[i]) < 0) {
          throw new PolishedError(68);
        }

        selectors.push(generateSelectors(template, states[i]));
      }

      selectors = selectors.join(',');
      return selectors;
    }

    var stateMap = [undefined, null, 'active', 'focus', 'hover'];

    function template(state) {
      return (
        'button' +
        state +
        ',\n  input[type="button"]' +
        state +
        ',\n  input[type="reset"]' +
        state +
        ',\n  input[type="submit"]' +
        state
      );
    }
    /**
     * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
     * @example
     * // Styles as object usage
     * const styles = {
     *   [buttons('active')]: {
     *     'border': 'none'
     *   }
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   > ${buttons('active')} {
     *     border: none;
     *   }
     * `
     *
     * // CSS in JS Output
     *
     *  'button:active,
     *  'input[type="button"]:active,
     *  'input[type=\"reset\"]:active,
     *  'input[type=\"submit\"]:active: {
     *   'border': 'none'
     * }
     */

    function buttons() {
      for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return statefulSelectors(states, template, stateMap);
    }

    /**
     * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...margin('12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${margin('12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'marginTop': '12px',
     *   'marginRight': '24px',
     *   'marginBottom': '36px',
     *   'marginLeft': '48px'
     * }
     */
    function margin() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return directionalProperty.apply(void 0, ['margin'].concat(values));
    }

    /**
     * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...padding('12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${padding('12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'paddingTop': '12px',
     *   'paddingRight': '24px',
     *   'paddingBottom': '36px',
     *   'paddingLeft': '48px'
     * }
     */
    function padding() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return directionalProperty.apply(void 0, ['padding'].concat(values));
    }

    var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
    /**
     * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...position('12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${position('12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'top': '12px',
     *   'right': '24px',
     *   'bottom': '36px',
     *   'left': '48px'
     * }
     *
     * // Styles as object usage
     * const styles = {
     *   ...position('absolute', '12px', '24px', '36px', '48px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${position('absolute', '12px', '24px', '36px', '48px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'position': 'absolute',
     *   'top': '12px',
     *   'right': '24px',
     *   'bottom': '36px',
     *   'left': '48px'
     * }
     */

    function position(firstValue) {
      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      if (positionMap$1.indexOf(firstValue) >= 0 && firstValue) {
        return _extends__default['default']({}, directionalProperty.apply(void 0, [''].concat(values)), {
          position: firstValue,
        });
      } else {
        return directionalProperty.apply(void 0, ['', firstValue].concat(values));
      }
    }

    /**
     * Shorthand to set the height and width properties in a single statement.
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...size('300px', '250px')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${size('300px', '250px')}
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'height': '300px',
     *   'width': '250px',
     * }
     */
    function size(height, width) {
      if (width === void 0) {
        width = height;
      }

      return {
        height: height,
        width: width,
      };
    }

    var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

    function template$1(state) {
      return (
        'input[type="color"]' +
        state +
        ',\n    input[type="date"]' +
        state +
        ',\n    input[type="datetime"]' +
        state +
        ',\n    input[type="datetime-local"]' +
        state +
        ',\n    input[type="email"]' +
        state +
        ',\n    input[type="month"]' +
        state +
        ',\n    input[type="number"]' +
        state +
        ',\n    input[type="password"]' +
        state +
        ',\n    input[type="search"]' +
        state +
        ',\n    input[type="tel"]' +
        state +
        ',\n    input[type="text"]' +
        state +
        ',\n    input[type="time"]' +
        state +
        ',\n    input[type="url"]' +
        state +
        ',\n    input[type="week"]' +
        state +
        ',\n    input:not([type])' +
        state +
        ',\n    textarea' +
        state
      );
    }
    /**
     * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
     * @example
     * // Styles as object usage
     * const styles = {
     *   [textInputs('active')]: {
     *     'border': 'none'
     *   }
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   > ${textInputs('active')} {
     *     border: none;
     *   }
     * `
     *
     * // CSS in JS Output
     *
     *  'input[type="color"]:active,
     *  input[type="date"]:active,
     *  input[type="datetime"]:active,
     *  input[type="datetime-local"]:active,
     *  input[type="email"]:active,
     *  input[type="month"]:active,
     *  input[type="number"]:active,
     *  input[type="password"]:active,
     *  input[type="search"]:active,
     *  input[type="tel"]:active,
     *  input[type="text"]:active,
     *  input[type="time"]:active,
     *  input[type="url"]:active,
     *  input[type="week"]:active,
     *  input:not([type]):active,
     *  textarea:active': {
     *   'border': 'none'
     * }
     */

    function textInputs() {
      for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      return statefulSelectors(states, template$1, stateMap$1);
    }

    /**
     * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same transition values to (second parameter).
     * @example
     * // Styles as object usage
     * const styles = {
     *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
     *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
     * }
     *
     * // styled-components usage
     * const div = styled.div`
     *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
     *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
     * `
     *
     * // CSS as JS Output
     *
     * div {
     *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
     *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
     * }
     */

    function transitions() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      if (Array.isArray(properties[0]) && properties.length === 2) {
        var value = properties[1];

        if (typeof value !== 'string') {
          throw new PolishedError(61);
        }

        var transitionsString = properties[0]
          .map(function (property) {
            return property + ' ' + value;
          })
          .join(', ');
        return {
          transition: transitionsString,
        };
      } else {
        return {
          transition: properties.join(', '),
        };
      }
    }

    __webpack_unused_export__ = curriedAdjustHue;
    __webpack_unused_export__ = animation;
    __webpack_unused_export__ = backgroundImages;
    __webpack_unused_export__ = backgrounds;
    __webpack_unused_export__ = between;
    __webpack_unused_export__ = border;
    __webpack_unused_export__ = borderColor;
    __webpack_unused_export__ = borderRadius;
    __webpack_unused_export__ = borderStyle;
    __webpack_unused_export__ = borderWidth;
    __webpack_unused_export__ = buttons;
    __webpack_unused_export__ = clearFix;
    __webpack_unused_export__ = complement;
    __webpack_unused_export__ = cover;
    __webpack_unused_export__ = cssVar;
    __webpack_unused_export__ = curriedDarken;
    __webpack_unused_export__ = curriedDesaturate;
    __webpack_unused_export__ = directionalProperty;
    __webpack_unused_export__ = easeIn;
    __webpack_unused_export__ = easeInOut;
    __webpack_unused_export__ = easeOut;
    __webpack_unused_export__ = ellipsis;
    __webpack_unused_export__ = em;
    __webpack_unused_export__ = fluidRange;
    __webpack_unused_export__ = fontFace;
    __webpack_unused_export__ = getContrast;
    __webpack_unused_export__ = getLuminance;
    __webpack_unused_export__ = getValueAndUnit;
    __webpack_unused_export__ = grayscale;
    __webpack_unused_export__ = hiDPI;
    __webpack_unused_export__ = hideText;
    __webpack_unused_export__ = hideVisually;
    __webpack_unused_export__ = hsl;
    __webpack_unused_export__ = hslToColorString;
    __webpack_unused_export__ = hsla;
    __webpack_unused_export__ = important;
    __webpack_unused_export__ = invert;
    __webpack_unused_export__ = curriedLighten;
    __webpack_unused_export__ = linearGradient;
    __webpack_unused_export__ = margin;
    __webpack_unused_export__ = math;
    __webpack_unused_export__ = meetsContrastGuidelines;
    __webpack_unused_export__ = curriedMix;
    __webpack_unused_export__ = modularScale;
    __webpack_unused_export__ = normalize;
    __webpack_unused_export__ = curriedOpacify;
    __webpack_unused_export__ = padding;
    __webpack_unused_export__ = parseToHsl;
    __webpack_unused_export__ = parseToRgb;
    __webpack_unused_export__ = position;
    __webpack_unused_export__ = radialGradient;
    __webpack_unused_export__ = readableColor;
    __webpack_unused_export__ = rem;
    __webpack_unused_export__ = remToPx;
    __webpack_unused_export__ = retinaImage;
    __webpack_unused_export__ = rgb;
    __webpack_unused_export__ = rgbToColorString;
    exports.m4 = rgba;
    __webpack_unused_export__ = curriedSaturate;
    __webpack_unused_export__ = curriedSetHue;
    __webpack_unused_export__ = curriedSetLightness;
    __webpack_unused_export__ = curriedSetSaturation;
    __webpack_unused_export__ = curriedShade;
    __webpack_unused_export__ = size;
    __webpack_unused_export__ = stripUnit;
    __webpack_unused_export__ = textInputs;
    __webpack_unused_export__ = timingFunctions;
    __webpack_unused_export__ = curriedTint;
    __webpack_unused_export__ = toColorString;
    __webpack_unused_export__ = transitions;
    __webpack_unused_export__ = curriedTransparentize;
    __webpack_unused_export__ = triangle;
    __webpack_unused_export__ = wordWrap;

    /***/
  },

  /***/ 9314: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var tslib = __webpack_require__(655);
    var heyListen = __webpack_require__(1320);
    var styleValueTypes = __webpack_require__(1618);
    var sync = __webpack_require__(1317);
    var sync__default = _interopDefault(sync);

    var clamp = function (min, max, v) {
      return Math.min(Math.max(v, min), max);
    };

    var safeMin = 0.001;
    var minDuration = 0.01;
    var maxDuration = 10.0;
    var minDamping = 0.05;
    var maxDamping = 1;
    function findSpring(_a) {
      var _b = _a.duration,
        duration = _b === void 0 ? 800 : _b,
        _c = _a.bounce,
        bounce = _c === void 0 ? 0.25 : _c,
        _d = _a.velocity,
        velocity = _d === void 0 ? 0 : _d,
        _e = _a.mass,
        mass = _e === void 0 ? 1 : _e;
      var envelope;
      var derivative;
      heyListen.warning(duration <= maxDuration * 1000, 'Spring duration must be 10 seconds or less');
      var dampingRatio = 1 - bounce;
      dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
      duration = clamp(minDuration, maxDuration, duration / 1000);
      if (dampingRatio < 1) {
        envelope = function (undampedFreq) {
          var exponentialDecay = undampedFreq * dampingRatio;
          var delta = exponentialDecay * duration;
          var a = exponentialDecay - velocity;
          var b = calcAngularFreq(undampedFreq, dampingRatio);
          var c = Math.exp(-delta);
          return safeMin - (a / b) * c;
        };
        derivative = function (undampedFreq) {
          var exponentialDecay = undampedFreq * dampingRatio;
          var delta = exponentialDecay * duration;
          var d = delta * velocity + velocity;
          var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
          var f = Math.exp(-delta);
          var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
          var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
          return (factor * ((d - e) * f)) / g;
        };
      } else {
        envelope = function (undampedFreq) {
          var a = Math.exp(-undampedFreq * duration);
          var b = (undampedFreq - velocity) * duration + 1;
          return -safeMin + a * b;
        };
        derivative = function (undampedFreq) {
          var a = Math.exp(-undampedFreq * duration);
          var b = (velocity - undampedFreq) * (duration * duration);
          return a * b;
        };
      }
      var initialGuess = 5 / duration;
      var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
      if (isNaN(undampedFreq)) {
        return {
          stiffness: 100,
          damping: 10,
        };
      } else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
          stiffness: stiffness,
          damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        };
      }
    }
    var rootIterations = 12;
    function approximateRoot(envelope, derivative, initialGuess) {
      var result = initialGuess;
      for (var i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
      }
      return result;
    }
    function calcAngularFreq(undampedFreq, dampingRatio) {
      return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    }

    var durationKeys = ['duration', 'bounce'];
    var physicsKeys = ['stiffness', 'damping', 'mass'];
    function isSpringType(options, keys) {
      return keys.some(function (key) {
        return options[key] !== undefined;
      });
    }
    function getSpringOptions(options) {
      var springOptions = tslib.__assign(
        { velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false },
        options
      );
      if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        var derived = findSpring(options);
        springOptions = tslib.__assign(tslib.__assign(tslib.__assign({}, springOptions), derived), {
          velocity: 0.0,
          mass: 1.0,
        });
        springOptions.isResolvedFromDuration = true;
      }
      return springOptions;
    }
    function spring(_a) {
      var _b = _a.from,
        from = _b === void 0 ? 0.0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1.0 : _c,
        _d = _a.restSpeed,
        restSpeed = _d === void 0 ? 2 : _d,
        restDelta = _a.restDelta,
        options = tslib.__rest(_a, ['from', 'to', 'restSpeed', 'restDelta']);
      var state = { done: false, value: from };
      var _e = getSpringOptions(options),
        stiffness = _e.stiffness,
        damping = _e.damping,
        mass = _e.mass,
        velocity = _e.velocity,
        isResolvedFromDuration = _e.isResolvedFromDuration;
      var resolveSpring = zero;
      var resolveVelocity = zero;
      function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : (restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4);
        if (dampingRatio < 1) {
          var angularFreq_1 = calcAngularFreq(undampedAngularFreq, dampingRatio);
          resolveSpring = function (t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (
              to -
              envelope *
                (((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1) *
                  Math.sin(angularFreq_1 * t) +
                  initialDelta * Math.cos(angularFreq_1 * t))
            );
          };
          resolveVelocity = function (t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (
              dampingRatio *
                undampedAngularFreq *
                envelope *
                ((Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta)) /
                  angularFreq_1 +
                  initialDelta * Math.cos(angularFreq_1 * t)) -
              envelope *
                (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) -
                  angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t))
            );
          };
        } else if (dampingRatio === 1) {
          resolveSpring = function (t) {
            return (
              to -
              Math.exp(-undampedAngularFreq * t) *
                (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t)
            );
          };
        } else {
          var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
          resolveSpring = function (t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
            return (
              to -
              (envelope *
                ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) +
                  dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT))) /
                dampedAngularFreq_1
            );
          };
        }
      }
      createSpring();
      return {
        next: function (t) {
          var current = resolveSpring(t);
          if (!isResolvedFromDuration) {
            var currentVelocity = resolveVelocity(t) * 1000;
            var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
            state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
          } else {
            state.done = t >= options.duration;
          }
          state.value = state.done ? to : current;
          return state;
        },
        flipTarget: function () {
          var _a;
          velocity = -velocity;
          (_a = [to, from]), (from = _a[0]), (to = _a[1]);
          createSpring();
        },
      };
    }
    spring.needsInterpolation = function (a, b) {
      return typeof a === 'string' || typeof b === 'string';
    };
    var zero = function (_t) {
      return 0;
    };

    var progress = function (from, to, value) {
      var toFromDifference = to - from;
      return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
    };

    var mix = function (from, to, progress) {
      return -progress * from + progress * to + from;
    };

    var mixLinearColor = function (from, to, v) {
      var fromExpo = from * from;
      var toExpo = to * to;
      return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
    };
    var colorTypes = [styleValueTypes.hex, styleValueTypes.rgba, styleValueTypes.hsla];
    var getColorType = function (v) {
      return colorTypes.find(function (type) {
        return type.test(v);
      });
    };
    var notAnimatable = function (color) {
      return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
    };
    var mixColor = function (from, to) {
      var fromColorType = getColorType(from);
      var toColorType = getColorType(to);
      heyListen.invariant(!!fromColorType, notAnimatable(from));
      heyListen.invariant(!!toColorType, notAnimatable(to));
      heyListen.invariant(
        fromColorType.transform === toColorType.transform,
        'Both colors must be hex/RGBA, OR both must be HSLA.'
      );
      var fromColor = fromColorType.parse(from);
      var toColor = toColorType.parse(to);
      var blended = tslib.__assign({}, fromColor);
      var mixFunc = fromColorType === styleValueTypes.hsla ? mix : mixLinearColor;
      return function (v) {
        for (var key in blended) {
          if (key !== 'alpha') {
            blended[key] = mixFunc(fromColor[key], toColor[key], v);
          }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
      };
    };

    var zeroPoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    var isNum = function (v) {
      return typeof v === 'number';
    };

    var combineFunctions = function (a, b) {
      return function (v) {
        return b(a(v));
      };
    };
    var pipe = function () {
      var transformers = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
      }
      return transformers.reduce(combineFunctions);
    };

    function getMixer(origin, target) {
      if (isNum(origin)) {
        return function (v) {
          return mix(origin, target, v);
        };
      } else if (styleValueTypes.color.test(origin)) {
        return mixColor(origin, target);
      } else {
        return mixComplex(origin, target);
      }
    }
    var mixArray = function (from, to) {
      var output = tslib.__spreadArrays(from);
      var numValues = output.length;
      var blendValue = from.map(function (fromThis, i) {
        return getMixer(fromThis, to[i]);
      });
      return function (v) {
        for (var i = 0; i < numValues; i++) {
          output[i] = blendValue[i](v);
        }
        return output;
      };
    };
    var mixObject = function (origin, target) {
      var output = tslib.__assign(tslib.__assign({}, origin), target);
      var blendValue = {};
      for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
          blendValue[key] = getMixer(origin[key], target[key]);
        }
      }
      return function (v) {
        for (var key in blendValue) {
          output[key] = blendValue[key](v);
        }
        return output;
      };
    };
    function analyse(value) {
      var parsed = styleValueTypes.complex.parse(value);
      var numValues = parsed.length;
      var numNumbers = 0;
      var numRGB = 0;
      var numHSL = 0;
      for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
          numNumbers++;
        } else {
          if (parsed[i].hue !== undefined) {
            numHSL++;
          } else {
            numRGB++;
          }
        }
      }
      return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
    }
    var mixComplex = function (origin, target) {
      var template = styleValueTypes.complex.createTransformer(target);
      var originStats = analyse(origin);
      var targetStats = analyse(target);
      heyListen.invariant(
        originStats.numHSL === targetStats.numHSL &&
          originStats.numRGB === targetStats.numRGB &&
          originStats.numNumbers >= targetStats.numNumbers,
        "Complex values '" +
          origin +
          "' and '" +
          target +
          "' too different to mix. Ensure all colors are of the same type."
      );
      return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
    };

    var mixNumber = function (from, to) {
      return function (p) {
        return mix(from, to, p);
      };
    };
    function detectMixerFactory(v) {
      if (typeof v === 'number') {
        return mixNumber;
      } else if (typeof v === 'string') {
        if (styleValueTypes.color.test(v)) {
          return mixColor;
        } else {
          return mixComplex;
        }
      } else if (Array.isArray(v)) {
        return mixArray;
      } else if (typeof v === 'object') {
        return mixObject;
      }
    }
    function createMixers(output, ease, customMixer) {
      var mixers = [];
      var mixerFactory = customMixer || detectMixerFactory(output[0]);
      var numMixers = output.length - 1;
      for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
          var easingFunction = Array.isArray(ease) ? ease[i] : ease;
          mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
      }
      return mixers;
    }
    function fastInterpolate(_a, _b) {
      var from = _a[0],
        to = _a[1];
      var mixer = _b[0];
      return function (v) {
        return mixer(progress(from, to, v));
      };
    }
    function slowInterpolate(input, mixers) {
      var inputLength = input.length;
      var lastInputIndex = inputLength - 1;
      return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
          foundMixerIndex = true;
        } else if (v >= input[lastInputIndex]) {
          mixerIndex = lastInputIndex - 1;
          foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
          var i = 1;
          for (; i < inputLength; i++) {
            if (input[i] > v || i === lastInputIndex) {
              break;
            }
          }
          mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
      };
    }
    function interpolate(input, output, _a) {
      var _b = _a === void 0 ? {} : _a,
        _c = _b.clamp,
        isClamp = _c === void 0 ? true : _c,
        ease = _b.ease,
        mixer = _b.mixer;
      var inputLength = input.length;
      heyListen.invariant(inputLength === output.length, 'Both input and output ranges must be the same length');
      heyListen.invariant(
        !ease || !Array.isArray(ease) || ease.length === inputLength - 1,
        'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
      );
      if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
      }
      var mixers = createMixers(output, ease, mixer);
      var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
      return isClamp
        ? function (v) {
            return interpolator(clamp(input[0], input[inputLength - 1], v));
          }
        : interpolator;
    }

    var reverseEasing = function (easing) {
      return function (p) {
        return 1 - easing(1 - p);
      };
    };
    var mirrorEasing = function (easing) {
      return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
      };
    };
    var createExpoIn = function (power) {
      return function (p) {
        return Math.pow(p, power);
      };
    };
    var createBackIn = function (power) {
      return function (p) {
        return p * p * ((power + 1) * p - power);
      };
    };
    var createAnticipate = function (power) {
      var backEasing = createBackIn(power);
      return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
      };
    };

    var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
    var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
    var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
    var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
    var linear = function (p) {
      return p;
    };
    var easeIn = createExpoIn(2);
    var easeOut = reverseEasing(easeIn);
    var easeInOut = mirrorEasing(easeIn);
    var circIn = function (p) {
      return 1 - Math.sin(Math.acos(p));
    };
    var circOut = reverseEasing(circIn);
    var circInOut = mirrorEasing(circOut);
    var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
    var backOut = reverseEasing(backIn);
    var backInOut = mirrorEasing(backIn);
    var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
    var ca = 4356.0 / 361.0;
    var cb = 35442.0 / 1805.0;
    var cc = 16061.0 / 1805.0;
    var bounceOut = function (p) {
      if (p === 1 || p === 0) return p;
      var p2 = p * p;
      return p < BOUNCE_FIRST_THRESHOLD
        ? 7.5625 * p2
        : p < BOUNCE_SECOND_THRESHOLD
        ? 9.075 * p2 - 9.9 * p + 3.4
        : p < BOUNCE_THIRD_THRESHOLD
        ? ca * p2 - cb * p + cc
        : 10.8 * p * p - 20.52 * p + 10.72;
    };
    var bounceIn = reverseEasing(bounceOut);
    var bounceInOut = function (p) {
      return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
    };

    function defaultEasing(values, easing) {
      return values
        .map(function () {
          return easing || easeInOut;
        })
        .splice(0, values.length - 1);
    }
    function defaultOffset(values) {
      var numValues = values.length;
      return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
      });
    }
    function convertOffsetToTimes(offset, duration) {
      return offset.map(function (o) {
        return o * duration;
      });
    }
    function keyframes(_a) {
      var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        ease = _a.ease,
        offset = _a.offset,
        _d = _a.duration,
        duration = _d === void 0 ? 300 : _d;
      var state = { done: false, value: from };
      var values = Array.isArray(to) ? to : [from, to];
      var times = convertOffsetToTimes(
        offset && offset.length === values.length ? offset : defaultOffset(values),
        duration
      );
      function createInterpolator() {
        return interpolate(times, values, {
          ease: Array.isArray(ease) ? ease : defaultEasing(values, ease),
        });
      }
      var interpolator = createInterpolator();
      return {
        next: function (t) {
          state.value = interpolator(t);
          state.done = t >= duration;
          return state;
        },
        flipTarget: function () {
          values.reverse();
          interpolator = createInterpolator();
        },
      };
    }

    function decay(_a) {
      var _b = _a.velocity,
        velocity = _b === void 0 ? 0 : _b,
        _c = _a.from,
        from = _c === void 0 ? 0 : _c,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 350 : _e,
        _f = _a.restDelta,
        restDelta = _f === void 0 ? 0.5 : _f,
        modifyTarget = _a.modifyTarget;
      var state = { done: false, value: from };
      var amplitude = power * velocity;
      var ideal = from + amplitude;
      var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
      if (target !== ideal) amplitude = target - from;
      return {
        next: function (t) {
          var delta = -amplitude * Math.exp(-t / timeConstant);
          state.done = !(delta > restDelta || delta < -restDelta);
          state.value = state.done ? target : target + delta;
          return state;
        },
        flipTarget: function () {},
      };
    }

    var types = { keyframes: keyframes, spring: spring, decay: decay };
    function detectAnimationFromOptions(config) {
      if (Array.isArray(config.to)) {
        return keyframes;
      } else if (types[config.type]) {
        return types[config.type];
      }
      var keys = new Set(Object.keys(config));
      if (keys.has('ease') || (keys.has('duration') && !keys.has('dampingRatio'))) {
        return keyframes;
      } else if (
        keys.has('dampingRatio') ||
        keys.has('stiffness') ||
        keys.has('mass') ||
        keys.has('damping') ||
        keys.has('restSpeed') ||
        keys.has('restDelta')
      ) {
        return spring;
      }
      return keyframes;
    }

    function loopElapsed(elapsed, duration, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return elapsed - duration - delay;
    }
    function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
      if (delay === void 0) {
        delay = 0;
      }
      if (isForwardPlayback === void 0) {
        isForwardPlayback = true;
      }
      return isForwardPlayback
        ? loopElapsed(duration + -elapsed, duration, delay)
        : duration - (elapsed - duration) + delay;
    }
    function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
      return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
    }

    var framesync = function (update) {
      var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
      };
      return {
        start: function () {
          return sync__default.update(passTimestamp, true, true);
        },
        stop: function () {
          return sync.cancelSync.update(passTimestamp);
        },
      };
    };
    function animate(_a) {
      var _b, _c;
      var from = _a.from,
        _d = _a.autoplay,
        autoplay = _d === void 0 ? true : _d,
        _e = _a.driver,
        driver = _e === void 0 ? framesync : _e,
        _f = _a.elapsed,
        elapsed = _f === void 0 ? 0 : _f,
        _g = _a.repeat,
        repeatMax = _g === void 0 ? 0 : _g,
        _h = _a.repeatType,
        repeatType = _h === void 0 ? 'loop' : _h,
        _j = _a.repeatDelay,
        repeatDelay = _j === void 0 ? 0 : _j,
        onPlay = _a.onPlay,
        onStop = _a.onStop,
        onComplete = _a.onComplete,
        onRepeat = _a.onRepeat,
        onUpdate = _a.onUpdate,
        options = tslib.__rest(_a, [
          'from',
          'autoplay',
          'driver',
          'elapsed',
          'repeat',
          'repeatType',
          'repeatDelay',
          'onPlay',
          'onStop',
          'onComplete',
          'onRepeat',
          'onUpdate',
        ]);
      var to = options.to;
      var driverControls;
      var repeatCount = 0;
      var computedDuration = options.duration;
      var latest;
      var isComplete = false;
      var isForwardPlayback = true;
      var interpolateFromNumber;
      var animator = detectAnimationFromOptions(options);
      if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
          clamp: false,
        });
        from = 0;
        to = 100;
      }
      var animation = animator(tslib.__assign(tslib.__assign({}, options), { from: from, to: to }));
      function repeat() {
        repeatCount++;
        if (repeatType === 'reverse') {
          isForwardPlayback = repeatCount % 2 === 0;
          elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        } else {
          elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
          if (repeatType === 'mirror') animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
      }
      function complete() {
        driverControls.stop();
        onComplete && onComplete();
      }
      function update(delta) {
        if (!isForwardPlayback) delta = -delta;
        elapsed += delta;
        if (!isComplete) {
          var state = animation.next(Math.max(0, elapsed));
          latest = state.value;
          if (interpolateFromNumber) latest = interpolateFromNumber(latest);
          isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
          if (repeatCount === 0)
            computedDuration !== null && computedDuration !== void 0 ? computedDuration : (computedDuration = elapsed);
          if (repeatCount < repeatMax) {
            hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
          } else {
            complete();
          }
        }
      }
      function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
      }
      autoplay && play();
      return {
        stop: function () {
          onStop === null || onStop === void 0 ? void 0 : onStop();
          driverControls.stop();
        },
      };
    }

    function velocityPerSecond(velocity, frameDuration) {
      return frameDuration ? velocity * (1000 / frameDuration) : 0;
    }

    function inertia(_a) {
      var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 750 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget,
        driver = _a.driver,
        onUpdate = _a.onUpdate,
        onComplete = _a.onComplete;
      var currentAnimation;
      function isOutOfBounds(v) {
        return (min !== undefined && v < min) || (max !== undefined && v > max);
      }
      function boundaryNearest(v) {
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
      }
      function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(
          tslib.__assign(tslib.__assign({}, options), {
            driver: driver,
            onUpdate: function (v) {
              var _a;
              onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
              (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            },
            onComplete: onComplete,
          })
        );
      }
      function startSpring(options) {
        startAnimation(
          tslib.__assign(
            { type: 'spring', stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta },
            options
          )
        );
      }
      if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
      } else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== 'undefined') target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
          prev_1 = current_1;
          current_1 = v;
          velocity = velocityPerSecond(v - prev_1, sync.getFrameData().delta);
          if ((heading_1 === 1 && v > boundary_1) || (heading_1 === -1 && v < boundary_1)) {
            startSpring({ from: v, to: boundary_1, velocity: velocity });
          }
        };
        startAnimation({
          type: 'decay',
          from: from,
          velocity: velocity,
          timeConstant: timeConstant,
          power: power,
          restDelta: restDelta,
          modifyTarget: modifyTarget,
          onUpdate: isOutOfBounds(target) ? checkBoundary : undefined,
        });
      }
      return {
        stop: function () {
          return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        },
      };
    }

    var radiansToDegrees = function (radians) {
      return (radians * 180) / Math.PI;
    };

    var angle = function (a, b) {
      if (b === void 0) {
        b = zeroPoint;
      }
      return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
    };

    var applyOffset = function (from, to) {
      var hasReceivedFrom = true;
      if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
      }
      return function (v) {
        if (hasReceivedFrom) {
          return v - from + to;
        } else {
          from = v;
          hasReceivedFrom = true;
          return to;
        }
      };
    };

    var identity = function (v) {
      return v;
    };
    var createAttractor = function (alterDisplacement) {
      if (alterDisplacement === void 0) {
        alterDisplacement = identity;
      }
      return function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
      };
    };
    var attract = createAttractor();
    var attractExpo = createAttractor(Math.sqrt);

    var degreesToRadians = function (degrees) {
      return (degrees * Math.PI) / 180;
    };

    var isPoint = function (point) {
      return point.hasOwnProperty('x') && point.hasOwnProperty('y');
    };

    var isPoint3D = function (point) {
      return isPoint(point) && point.hasOwnProperty('z');
    };

    var distance1D = function (a, b) {
      return Math.abs(a - b);
    };
    function distance(a, b) {
      if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
      } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
      }
    }

    var pointFromVector = function (origin, angle, distance) {
      angle = degreesToRadians(angle);
      return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y,
      };
    };

    var toDecimal = function (num, precision) {
      if (precision === void 0) {
        precision = 2;
      }
      precision = Math.pow(10, precision);
      return Math.round(num * precision) / precision;
    };

    var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
      if (smoothing === void 0) {
        smoothing = 0;
      }
      return toDecimal(prevValue + (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
    };

    var smooth = function (strength) {
      if (strength === void 0) {
        strength = 50;
      }
      var previousValue = 0;
      var lastUpdated = 0;
      return function (v) {
        var currentFramestamp = sync.getFrameData().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
      };
    };

    var snap = function (points) {
      if (typeof points === 'number') {
        return function (v) {
          return Math.round(v / points) * points;
        };
      } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
          var lastDistance = Math.abs(points[0] - v);
          for (i_1 = 1; i_1 < numPoints_1; i_1++) {
            var point = points[i_1];
            var distance = Math.abs(point - v);
            if (distance === 0) return point;
            if (distance > lastDistance) return points[i_1 - 1];
            if (i_1 === numPoints_1 - 1) return point;
            lastDistance = distance;
          }
        };
      }
    };

    function velocityPerFrame(xps, frameDuration) {
      return xps / (1000 / frameDuration);
    }

    var wrap = function (min, max, v) {
      var rangeSize = max - min;
      return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    var a = function (a1, a2) {
      return 1.0 - 3.0 * a2 + 3.0 * a1;
    };
    var b = function (a1, a2) {
      return 3.0 * a2 - 6.0 * a1;
    };
    var c = function (a1) {
      return 3.0 * a1;
    };
    var calcBezier = function (t, a1, a2) {
      return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    };
    var getSlope = function (t, a1, a2) {
      return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
    };
    var subdivisionPrecision = 0.0000001;
    var subdivisionMaxIterations = 10;
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX;
      var currentT;
      var i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
      return currentT;
    }
    var newtonIterations = 8;
    var newtonMinSlope = 0.001;
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    function cubicBezier(mX1, mY1, mX2, mY2) {
      if (mX1 === mY1 && mX2 === mY2) return linear;
      var sampleValues = new Float32Array(kSplineTableSize);
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
      };
    }

    var steps = function (steps, direction) {
      if (direction === void 0) {
        direction = 'end';
      }
      return function (progress) {
        progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps);
      };
    };

    exports.angle = angle;
    exports.animate = animate;
    exports.anticipate = anticipate;
    exports.applyOffset = applyOffset;
    exports.attract = attract;
    exports.attractExpo = attractExpo;
    exports.backIn = backIn;
    exports.backInOut = backInOut;
    exports.backOut = backOut;
    exports.bounceIn = bounceIn;
    exports.bounceInOut = bounceInOut;
    exports.bounceOut = bounceOut;
    exports.circIn = circIn;
    exports.circInOut = circInOut;
    exports.circOut = circOut;
    exports.clamp = clamp;
    exports.createAnticipate = createAnticipate;
    exports.createAttractor = createAttractor;
    exports.createBackIn = createBackIn;
    exports.createExpoIn = createExpoIn;
    exports.cubicBezier = cubicBezier;
    exports.decay = decay;
    exports.degreesToRadians = degreesToRadians;
    exports.distance = distance;
    exports.easeIn = easeIn;
    exports.easeInOut = easeInOut;
    exports.easeOut = easeOut;
    exports.inertia = inertia;
    exports.interpolate = interpolate;
    exports.isPoint = isPoint;
    exports.isPoint3D = isPoint3D;
    exports.keyframes = keyframes;
    exports.linear = linear;
    exports.mirrorEasing = mirrorEasing;
    exports.mix = mix;
    exports.mixColor = mixColor;
    exports.mixComplex = mixComplex;
    exports.pipe = pipe;
    exports.pointFromVector = pointFromVector;
    exports.progress = progress;
    exports.radiansToDegrees = radiansToDegrees;
    exports.reverseEasing = reverseEasing;
    exports.smooth = smooth;
    exports.smoothFrame = smoothFrame;
    exports.snap = snap;
    exports.spring = spring;
    exports.steps = steps;
    exports.toDecimal = toDecimal;
    exports.velocityPerFrame = velocityPerFrame;
    exports.velocityPerSecond = velocityPerSecond;
    exports.wrap = wrap;

    /***/
  },

  /***/ 1618: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    var tslib = __webpack_require__(655);

    var clamp = function (min, max) {
      return function (v) {
        return Math.max(Math.min(v, max), min);
      };
    };
    var sanitize = function (v) {
      return v % 1 ? Number(v.toFixed(5)) : v;
    };
    var floatRegex = /(-)?([\d]*\.?[\d])+/g;
    var colorRegex =
      /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
    var singleColorRegex =
      /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
    function isString(v) {
      return typeof v === 'string';
    }

    var number = {
      test: function (v) {
        return typeof v === 'number';
      },
      parse: parseFloat,
      transform: function (v) {
        return v;
      },
    };
    var alpha = tslib.__assign(tslib.__assign({}, number), { transform: clamp(0, 1) });
    var scale = tslib.__assign(tslib.__assign({}, number), { default: 1 });

    var createUnitType = function (unit) {
      return {
        test: function (v) {
          return isString(v) && v.endsWith(unit) && v.split(' ').length === 1;
        },
        parse: parseFloat,
        transform: function (v) {
          return '' + v + unit;
        },
      };
    };
    var degrees = createUnitType('deg');
    var percent = createUnitType('%');
    var px = createUnitType('px');
    var vh = createUnitType('vh');
    var vw = createUnitType('vw');
    var progressPercentage = tslib.__assign(tslib.__assign({}, percent), {
      parse: function (v) {
        return percent.parse(v) / 100;
      },
      transform: function (v) {
        return percent.transform(v * 100);
      },
    });

    var isColorString = function (type, testProp) {
      return function (v) {
        return (
          (isString(v) && singleColorRegex.test(v) && v.startsWith(type)) || (testProp && v.hasOwnProperty(testProp))
        );
      };
    };
    var splitColor = function (aName, bName, cName) {
      return function (v) {
        var _a;
        if (!isString(v)) return v;
        var _b = v.match(floatRegex),
          a = _b[0],
          b = _b[1],
          c = _b[2],
          alpha = _b[3];
        return (
          (_a = {}),
          (_a[aName] = parseFloat(a)),
          (_a[bName] = parseFloat(b)),
          (_a[cName] = parseFloat(c)),
          (_a.alpha = alpha !== undefined ? parseFloat(alpha) : 1),
          _a
        );
      };
    };

    var hsla = {
      test: isColorString('hsl', 'hue'),
      parse: splitColor('hue', 'saturation', 'lightness'),
      transform: function (_a) {
        var hue = _a.hue,
          saturation = _a.saturation,
          lightness = _a.lightness,
          _b = _a.alpha,
          alpha$1 = _b === void 0 ? 1 : _b;
        return (
          'hsla(' +
          Math.round(hue) +
          ', ' +
          percent.transform(sanitize(saturation)) +
          ', ' +
          percent.transform(sanitize(lightness)) +
          ', ' +
          sanitize(alpha.transform(alpha$1)) +
          ')'
        );
      },
    };

    var clampRgbUnit = clamp(0, 255);
    var rgbUnit = tslib.__assign(tslib.__assign({}, number), {
      transform: function (v) {
        return Math.round(clampRgbUnit(v));
      },
    });
    var rgba = {
      test: isColorString('rgb', 'red'),
      parse: splitColor('red', 'green', 'blue'),
      transform: function (_a) {
        var red = _a.red,
          green = _a.green,
          blue = _a.blue,
          _b = _a.alpha,
          alpha$1 = _b === void 0 ? 1 : _b;
        return (
          'rgba(' +
          rgbUnit.transform(red) +
          ', ' +
          rgbUnit.transform(green) +
          ', ' +
          rgbUnit.transform(blue) +
          ', ' +
          sanitize(alpha.transform(alpha$1)) +
          ')'
        );
      },
    };

    function parseHex(v) {
      var r = '';
      var g = '';
      var b = '';
      var a = '';
      if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
      } else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
      }
      return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
      };
    }
    var hex = {
      test: isColorString('#'),
      parse: parseHex,
      transform: rgba.transform,
    };

    var color = {
      test: function (v) {
        return rgba.test(v) || hex.test(v) || hsla.test(v);
      },
      parse: function (v) {
        if (rgba.test(v)) {
          return rgba.parse(v);
        } else if (hsla.test(v)) {
          return hsla.parse(v);
        } else {
          return hex.parse(v);
        }
      },
      transform: function (v) {
        return isString(v) ? v : v.hasOwnProperty('red') ? rgba.transform(v) : hsla.transform(v);
      },
    };

    var colorToken = '${c}';
    var numberToken = '${n}';
    function test(v) {
      var _a, _b, _c, _d;
      return (
        isNaN(v) &&
        isString(v) &&
        ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0
          ? _b
          : 0) +
          ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0
            ? _d
            : 0) >
          0
      );
    }
    function analyse(v) {
      var values = [];
      var numColors = 0;
      var colors = v.match(colorRegex);
      if (colors) {
        numColors = colors.length;
        v = v.replace(colorRegex, colorToken);
        values.push.apply(values, colors.map(color.parse));
      }
      var numbers = v.match(floatRegex);
      if (numbers) {
        v = v.replace(floatRegex, numberToken);
        values.push.apply(values, numbers.map(number.parse));
      }
      return { values: values, numColors: numColors, tokenised: v };
    }
    function parse(v) {
      return analyse(v).values;
    }
    function createTransformer(v) {
      var _a = analyse(v),
        values = _a.values,
        numColors = _a.numColors,
        tokenised = _a.tokenised;
      var numValues = values.length;
      return function (v) {
        var output = tokenised;
        for (var i = 0; i < numValues; i++) {
          output = output.replace(
            i < numColors ? colorToken : numberToken,
            i < numColors ? color.transform(v[i]) : sanitize(v[i])
          );
        }
        return output;
      };
    }
    var convertNumbersToZero = function (v) {
      return typeof v === 'number' ? 0 : v;
    };
    function getAnimatableNone(v) {
      var parsed = parse(v);
      var transformer = createTransformer(v);
      return transformer(parsed.map(convertNumbersToZero));
    }
    var complex = {
      test: test,
      parse: parse,
      createTransformer: createTransformer,
      getAnimatableNone: getAnimatableNone,
    };

    var maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
    function applyDefaultFilter(v) {
      var _a = v.slice(0, -1).split('('),
        name = _a[0],
        value = _a[1];
      if (name === 'drop-shadow') return v;
      var number = (value.match(floatRegex) || [])[0];
      if (!number) return v;
      var unit = value.replace(number, '');
      var defaultValue = maxDefaults.has(name) ? 1 : 0;
      if (number !== value) defaultValue *= 100;
      return name + '(' + defaultValue + unit + ')';
    }
    var functionRegex = /([a-z-]*)\(.*?\)/g;
    var filter = tslib.__assign(tslib.__assign({}, complex), {
      getAnimatableNone: function (v) {
        var functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(' ') : v;
      },
    });

    exports.alpha = alpha;
    exports.color = color;
    exports.complex = complex;
    exports.degrees = degrees;
    exports.filter = filter;
    exports.hex = hex;
    exports.hsla = hsla;
    exports.number = number;
    exports.percent = percent;
    exports.progressPercentage = progressPercentage;
    exports.px = px;
    exports.rgbUnit = rgbUnit;
    exports.rgba = rgba;
    exports.scale = scale;
    exports.vh = vh;
    exports.vw = vw;

    /***/
  },

  /***/ 655: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ __assign: () => /* binding */ __assign,
      /* harmony export */ __asyncDelegator: () => /* binding */ __asyncDelegator,
      /* harmony export */ __asyncGenerator: () => /* binding */ __asyncGenerator,
      /* harmony export */ __asyncValues: () => /* binding */ __asyncValues,
      /* harmony export */ __await: () => /* binding */ __await,
      /* harmony export */ __awaiter: () => /* binding */ __awaiter,
      /* harmony export */ __classPrivateFieldGet: () => /* binding */ __classPrivateFieldGet,
      /* harmony export */ __classPrivateFieldSet: () => /* binding */ __classPrivateFieldSet,
      /* harmony export */ __createBinding: () => /* binding */ __createBinding,
      /* harmony export */ __decorate: () => /* binding */ __decorate,
      /* harmony export */ __exportStar: () => /* binding */ __exportStar,
      /* harmony export */ __extends: () => /* binding */ __extends,
      /* harmony export */ __generator: () => /* binding */ __generator,
      /* harmony export */ __importDefault: () => /* binding */ __importDefault,
      /* harmony export */ __importStar: () => /* binding */ __importStar,
      /* harmony export */ __makeTemplateObject: () => /* binding */ __makeTemplateObject,
      /* harmony export */ __metadata: () => /* binding */ __metadata,
      /* harmony export */ __param: () => /* binding */ __param,
      /* harmony export */ __read: () => /* binding */ __read,
      /* harmony export */ __rest: () => /* binding */ __rest,
      /* harmony export */ __spread: () => /* binding */ __spread,
      /* harmony export */ __spreadArrays: () => /* binding */ __spreadArrays,
      /* harmony export */ __values: () => /* binding */ __values,
      /* harmony export */
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    }

    var __assign = function () {
      __assign =
        Object.assign ||
        function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === 'function')
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
        d;
      if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
        return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P
          ? value
          : new P(function (resolve) {
              resolve(value);
            });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator['throw'](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: [],
        },
        f,
        y,
        t,
        g;
      return (
        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
        typeof Symbol === 'function' &&
          (g[Symbol.iterator] = function () {
            return this;
          }),
        g
      );
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError('Generator is already executing.');
        while (_)
          try {
            if (
              ((f = 1),
              y &&
                (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
                !(t = t.call(y, op[1])).done)
            )
              return t;
            if (((y = 0), t)) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) if (p !== 'default' && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === 'function' && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === 'number')
        return {
          next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          },
        };
      throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    }

    function __read(o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error: error };
      } finally {
        try {
          if (r && !r.done && (m = i['return'])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }

    function __await(v) {
      return this instanceof __await ? ((this.v = v), this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return (
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i
      );
      function verb(n) {
        if (g[n])
          i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume('next', value);
      }
      function reject(value) {
        resume('throw', value);
      }
      function settle(f, v) {
        if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return (
        (i = {}),
        verb('next'),
        verb('throw', function (e) {
          throw e;
        }),
        verb('return'),
        (i[Symbol.iterator] = function () {
          return this;
        }),
        i
      );
      function verb(n, f) {
        i[n] = o[n]
          ? function (v) {
              return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v;
            }
          : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var m = o[Symbol.asyncIterator],
        i;
      return m
        ? m.call(o)
        : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
          (i = {}),
          verb('next'),
          verb('throw'),
          verb('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i);
      function verb(n) {
        i[n] =
          o[n] &&
          function (v) {
            return new Promise(function (resolve, reject) {
              (v = o[n](v)), settle(resolve, reject, v.done, v.value);
            });
          };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({ value: v, done: d });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, 'raw', { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError('attempted to get private field on non-instance');
      }
      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError('attempted to set private field on non-instance');
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },
};
