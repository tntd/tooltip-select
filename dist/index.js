"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/tooltip/style");
var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));
require("antd/es/select/style");
var _select = _interopRequireDefault(require("antd/es/select"));
var _ant3VirtualSelect = _interopRequireDefault(require("@tntd/ant3-virtual-select"));
var _react = require("react");
var _lodash = require("lodash");
var TooltipSelect = /*#__PURE__*/(0, _react.memo)(function (props) {
  var children = props.children,
    value = props.value,
    _props$isVirtual = props.isVirtual,
    isVirtual = _props$isVirtual === void 0 ? false : _props$isVirtual,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    setTitle = props.setTitle;
  var Option = isVirtual ? _ant3VirtualSelect.default.Option : _select.default.Option;
  // //获取添加Tooltip的option子项
  var tooltipChildren = children === null || children === void 0 ? void 0 : children.map(function (item) {
    var _item$props, _item$props2, _item$props3;
    return /*#__PURE__*/React.createElement(Option, item === null || item === void 0 ? void 0 : item.props, /*#__PURE__*/React.createElement(_tooltip.default, {
      title: setTitle ? setTitle(item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.children) : item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.children
    }, item === null || item === void 0 || (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.children));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVirtual ? /*#__PURE__*/React.createElement(_ant3VirtualSelect.default, props, tooltipChildren) : /*#__PURE__*/React.createElement(_select.default, props, tooltipChildren));
}, function (pre, next) {
  var _pre$children, _next$children;
  return pre.isMemo && (pre === null || pre === void 0 ? void 0 : pre.value) === (next === null || next === void 0 ? void 0 : next.value) && (0, _lodash.isEqual)(pre === null || pre === void 0 || (_pre$children = pre.children) === null || _pre$children === void 0 ? void 0 : _pre$children.length, next === null || next === void 0 || (_next$children = next.children) === null || _next$children === void 0 ? void 0 : _next$children.length);
});
var _default = TooltipSelect;
exports.default = _default;