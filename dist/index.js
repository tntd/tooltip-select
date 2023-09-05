"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tooltip = _interopRequireDefault(require("tntd/es/tooltip"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _select = _interopRequireDefault(require("tntd/es/select"));
var _tntdSelect = _interopRequireDefault(require("tntd/es/tntd-select"));
var _react = require("react");
var _lodash = require("lodash");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TooltipSelect = /*#__PURE__*/(0, _react.memo)(function (props) {
  var children = props.children,
    value = props.value,
    _props$isVirtual = props.isVirtual,
    isVirtual = _props$isVirtual === void 0 ? false : _props$isVirtual,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    setTitle = props.setTitle,
    optionFilterProp = props.optionFilterProp,
    filterOption = props.filterOption;
  var Option = isVirtual ? _tntdSelect.default.Option : _select.default.Option;
  var originalFilterOption = filterOption; // 将原始的filterOption函数引用保存到一个新的变量

  var filterOptionFunction = function filterOptionFunction(input, option) {
    // 创建一个新的option对象，其中props.children是由props.originChildren替换的
    var newOption = _objectSpread(_objectSpread({}, option), {}, {
      props: _objectSpread(_objectSpread({}, option.props), {}, {
        children: option.props.originChildren
      })
    });

    // 调用原始的filterOption函数
    return filterOption(input, newOption);
  };
  // //获取添加Tooltip的option子项

  var tooltipChildren = [];
  tooltipChildren = children === null || children === void 0 ? void 0 : children.map(function (item) {
    if ((0, _lodash.isArray)(item)) {
      return item === null || item === void 0 ? void 0 : item.map(function (item1) {
        var _item1$props, _item1$props2;
        if ((item1 === null || item1 === void 0 || (_item1$props = item1.props) === null || _item1$props === void 0 ? void 0 : _item1$props.value) !== undefined && (item1 === null || item1 === void 0 || (_item1$props2 = item1.props) === null || _item1$props2 === void 0 ? void 0 : _item1$props2.value) !== null) {
          var _item1$props3, _item1$props4, _item1$props5;
          return /*#__PURE__*/React.createElement(Option, (0, _extends2.default)({}, item1 === null || item1 === void 0 ? void 0 : item1.props, {
            originChildren: item1 === null || item1 === void 0 ? void 0 : item1.props.children
          }), /*#__PURE__*/React.createElement(_tooltip.default, {
            title: setTitle ? setTitle(item1 === null || item1 === void 0 || (_item1$props3 = item1.props) === null || _item1$props3 === void 0 ? void 0 : _item1$props3.children) : item1 === null || item1 === void 0 || (_item1$props4 = item1.props) === null || _item1$props4 === void 0 ? void 0 : _item1$props4.children
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              marginRight: "5px"
            }
          }, item1 === null || item1 === void 0 || (_item1$props5 = item1.props) === null || _item1$props5 === void 0 ? void 0 : _item1$props5.children)));
        } else {
          return false;
        }
      });
    } else {
      var _item$props, _item$props2;
      if ((item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.value) !== undefined && (item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.value) !== null) {
        var _item$props3, _item$props4, _item$props5;
        return /*#__PURE__*/React.createElement(Option, (0, _extends2.default)({}, item === null || item === void 0 ? void 0 : item.props, {
          originChildren: item === null || item === void 0 ? void 0 : item.props.children
        }), /*#__PURE__*/React.createElement(_tooltip.default, {
          title: setTitle ? setTitle(item === null || item === void 0 || (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.children) : item === null || item === void 0 || (_item$props4 = item.props) === null || _item$props4 === void 0 ? void 0 : _item$props4.children
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            marginRight: "5px"
          }
        }, item === null || item === void 0 || (_item$props5 = item.props) === null || _item$props5 === void 0 ? void 0 : _item$props5.children)));
      } else {
        return false;
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVirtual ? /*#__PURE__*/React.createElement(_tntdSelect.default, (0, _extends2.default)({}, props, {
    optionFilterProp: optionFilterProp === "children" ? "originChildren" : optionFilterProp,
    filterOption: filterOptionFunction
  }), tooltipChildren) : /*#__PURE__*/React.createElement(_select.default, (0, _extends2.default)({}, props, {
    optionFilterProp: optionFilterProp === "children" ? "originChildren" : optionFilterProp,
    filterOption: filterOptionFunction
  }), children));
}, function (pre, next) {
  var _pre$children, _next$children;
  return pre.isMemo && (pre === null || pre === void 0 ? void 0 : pre.value) === (next === null || next === void 0 ? void 0 : next.value) && (0, _lodash.isEqual)(pre === null || pre === void 0 || (_pre$children = pre.children) === null || _pre$children === void 0 ? void 0 : _pre$children.length, next === null || next === void 0 || (_next$children = next.children) === null || _next$children === void 0 ? void 0 : _next$children.length);
});
var _default = TooltipSelect;
exports.default = _default;