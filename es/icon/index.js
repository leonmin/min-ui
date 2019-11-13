import _initializerDefineProperty from "@babel/runtime/helpers/esm/initializerDefineProperty";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/esm/applyDecoratedDescriptor";
import _initializerWarningHelper from "@babel/runtime/helpers/esm/initializerWarningHelper";

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

// min-icon
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
var MinIcon = (_dec = Prop(String), _dec2 = Prop([String, Number]), _dec3 = Prop(String), _dec4 = Emit(), Component(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Vue) {
  _inheritsLoose(MinIcon, _Vue);

  function MinIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Vue.call.apply(_Vue, [this].concat(args)) || this;

    _initializerDefineProperty(_assertThisInitialized(_this), "name", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "size", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "color", _descriptor3, _assertThisInitialized(_this));

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
}(Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "click", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "click"), _class2.prototype)), _class2)) || _class);
export { MinIcon as default };