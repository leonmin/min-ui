"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

var MinIcon = (_dec = (0, _vuePropertyDecorator.Prop)(String), _dec2 = (0, _vuePropertyDecorator.Prop)([String, Number]), _dec3 = (0, _vuePropertyDecorator.Prop)(String), _dec4 = (0, _vuePropertyDecorator.Emit)(), (0, _vuePropertyDecorator.Component)(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Vue) {
  (0, _inheritsLoose2.default)(MinIcon, _Vue);

  function MinIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;
    (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "name", _descriptor, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "size", _descriptor2, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "color", _descriptor3, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = MinIcon.prototype;

  _proto.click = function click() {};

  _proto.render = function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("i", {
      "class": 'min-icon',
      "on": {
        "click": function click() {
          return _this2.click();
        }
      }
    }, [this.name, " - ", this.size, " - ", this.color]);
  };

  return MinIcon;
}(_vuePropertyDecorator.Vue), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "name", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "size", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "color", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "click", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "click"), _class2.prototype)), _class2)) || _class);
exports.default = MinIcon;