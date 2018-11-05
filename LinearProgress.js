define(["exports", "@kinkajou/kinkajou/Kinkajou", "@material/linear-progress/dist/mdc.linear-progress.css"], function (_exports, _Kinkajou, _mdcLinearProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LinearProgress = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var LinearProgress =
  /*#__PURE__*/
  function (_Kinkajou$Component) {
    _inherits(LinearProgress, _Kinkajou$Component);

    function LinearProgress() {
      _classCallCheck(this, LinearProgress);

      return _possibleConstructorReturn(this, _getPrototypeOf(LinearProgress).apply(this, arguments));
    }

    _createClass(LinearProgress, [{
      key: "initProps",
      value: function initProps(props, i) {
        i(props, 'visible', 'background', 'color');
      }
    }, {
      key: "onPropChange",
      value: function onPropChange(key) {
        switch (key) {
          case 'visible':
            if (this.rendered) {
              this.element.setAttribute('class', this.styleClass);
            }

            break;

          case 'background':
            if (this.rendered) {
              var buffer = this.element.querySelector('mdc-linear-progress__buffer');
              buffer.style.backgroundColor = this.background;
            }

            break;

          case 'color':
            if (this.rendered) {
              var bars = this.element.querySelectorAll('mdc-linear-progress__bar-inner');

              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                bar.style.backgroundColor = this.color;
              }
            }

            break;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var bufferStyle = this.background ? "background-color: ".concat(this.background, ";") : undefined;
        var barInnerStyle = this.color ? "background-color: ".concat(this.color, ";") : undefined;
        return _Kinkajou.Kinkajou.createElement("div", {
          role: "progressbar",
          class: this.styleClass
        }, _Kinkajou.Kinkajou.createElement("div", {
          class: "mdc-linear-progress__buffering-dots"
        }), _Kinkajou.Kinkajou.createElement("div", {
          class: "mdc-linear-progress__buffer",
          style: bufferStyle
        }), _Kinkajou.Kinkajou.createElement("div", {
          class: "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
        }, _Kinkajou.Kinkajou.createElement("span", {
          class: "mdc-linear-progress__bar-inner",
          style: barInnerStyle
        })), _Kinkajou.Kinkajou.createElement("div", {
          class: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
        }, _Kinkajou.Kinkajou.createElement("span", {
          class: "mdc-linear-progress__bar-inner",
          style: barInnerStyle
        })));
      }
    }, {
      key: "styleRoot",
      get: function get() {
        return ['mdc-linear-progress'];
      }
    }, {
      key: "styleProps",
      get: function get() {
        return ["mdc-linear-progress--".concat(this.visible ? 'indeterminate' : 'close')];
      }
    }, {
      key: "visible",
      get: function get() {
        return this.getAsBoolean('visible', true);
      },
      set: function set(visible) {
        return this.set('visible', visible);
      }
    }, {
      key: "background",
      get: function get() {
        return this.getAsString('background');
      },
      set: function set(background) {
        return this.set('background', background);
      }
    }, {
      key: "color",
      get: function get() {
        return this.getAsString('color');
      },
      set: function set(color) {
        return this.set('color', color);
      }
    }], [{
      key: "is",
      get: function get() {
        return 'kinkajou.LinearProgress';
      }
    }]);

    return LinearProgress;
  }(_Kinkajou.Kinkajou.Component);

  _exports.LinearProgress = LinearProgress;
});
//# sourceMappingURL=LinearProgress.js.map