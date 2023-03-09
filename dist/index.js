"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _ant3VirtualSelect = _interopRequireDefault(require("@tntd/ant3-virtual-select"));

var _react = require("react");

var TooltipSelect = /*#__PURE__*/(0, _react.memo)(function (props) {
  var children = props.children,
      value = props.value,
      _props$isVirtual = props.isVirtual,
      isVirtual = _props$isVirtual === void 0 ? false : _props$isVirtual,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement;

  var getTitle = function getTitle(value) {
    var _arr;

    var label = '';
    var arr = [];

    if (!(children != null && children.length)) {
      arr.push(children);
    } else {
      arr = children;
    }

    (_arr = arr) == null ? void 0 : _arr.forEach(function (item) {
      var _item$props;

      if ((item == null ? void 0 : (_item$props = item.props) == null ? void 0 : _item$props.value) === value) {
        var _item$props2;

        label = item == null ? void 0 : (_item$props2 = item.props) == null ? void 0 : _item$props2.children;
      }
    });
    return label;
  };

  debugger;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_tooltip.default, {
    placement: placement,
    title: getTitle(value)
  }, isVirtual ? /*#__PURE__*/React.createElement(_ant3VirtualSelect.default, props, children) : /*#__PURE__*/React.createElement(_select.default, props, children)));
}, function (pre, next) {
  var _pre$children, _next$children;

  return pre.isMemo && (pre == null ? void 0 : pre.value) === (next == null ? void 0 : next.value) && (0, _isEqual2.default)(pre == null ? void 0 : (_pre$children = pre.children) == null ? void 0 : _pre$children.length, next == null ? void 0 : (_next$children = next.children) == null ? void 0 : _next$children.length);
});
var _default = TooltipSelect;
exports.default = _default;