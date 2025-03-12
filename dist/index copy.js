"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ellipsis = _interopRequireDefault(require("tntd/es/ellipsis"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tooltip = _interopRequireDefault(require("tntd/es/tooltip"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _select = _interopRequireDefault(require("tntd/es/select"));
var _tntdSelect = _interopRequireDefault(require("tntd/es/tntd-select"));
var _react = require("react");
var _lodash = require("lodash");
require("./index.less");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TooltipSelect = /*#__PURE__*/(0, _react.memo)(function (props) {
  var children = props.children,
    value = props.value,
    _props$isVirtual = props.isVirtual,
    isVirtual = _props$isVirtual === void 0 ? false : _props$isVirtual,
    placement = props.placement,
    setTitle = props.setTitle,
    optionFilterProp = props.optionFilterProp,
    filterOption = props.filterOption,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    mouseEnterDelay = props.mouseEnterDelay,
    mouseLeaveDelay = props.mouseLeaveDelay,
    onChange = props.onChange;
  var Option = isVirtual ? _tntdSelect.default.Option : _select.default.Option;
  var temp = {};
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    hoveredOption = _useState2[0],
    setHoveredOption = _useState2[1]; // 当前鼠标悬浮的 Option
  var dropdownRef = (0, _react.useRef)(null);
  var filterOptionFunction = function filterOptionFunction(input, option) {
    var newOption = _objectSpread(_objectSpread({}, option), {}, {
      props: _objectSpread(_objectSpread({}, option.props), {}, {
        children: option.props.originChildren || option.props.children
      })
    });
    return filterOption(input, newOption);
  };
  var handleChange = function handleChange(value, option) {
    debugger;
    var newOption = _objectSpread(_objectSpread({}, option), {}, {
      props: _objectSpread(_objectSpread({}, option.props), {}, {
        children: option.props.originChildren || option.props.children
      })
    });
    onChange(value, newOption); // Modified onChange to use the new option
  };

  var tooltipChildren = [];
  if ((children === null || children === void 0 ? void 0 : children.length) > 0) {
    tooltipChildren = children.map(function (item) {
      var _item$props, _item$props2;
      if ((0, _lodash.isArray)(item)) {
        return item.map(function (item1) {
          var _item1$props, _item1$props2;
          if ((item1 === null || item1 === void 0 || (_item1$props = item1.props) === null || _item1$props === void 0 ? void 0 : _item1$props.value) !== undefined && (item1 === null || item1 === void 0 || (_item1$props2 = item1.props) === null || _item1$props2 === void 0 ? void 0 : _item1$props2.value) !== null) {
            return /*#__PURE__*/React.createElement(Option, (0, _extends2.default)({}, item1.props, {
              originChildren: item1.props.children,
              key: item1.props.value
            }), /*#__PURE__*/React.createElement(_tooltip.default, {
              title: setTitle ? setTitle(item1.props.children) : item1.props.children,
              placement: "right",
              mouseEnterDelay: mouseEnterDelay,
              mouseLeaveDelay: mouseLeaveDelay,
              overlayClassName: "option-tooltip",
              visible: hoveredOption === item1.props.value // 仅当前选中项显示
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                marginRight: '5px'
              },
              onMouseEnter: function onMouseEnter() {
                return setHoveredOption(item1.props.value);
              },
              onMouseLeave: function onMouseLeave() {
                return setHoveredOption(null);
              }
            }, item1.props.children)));
          }
          return null;
        });
      }
      if ((item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.value) !== undefined && (item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.value) !== null) {
        return /*#__PURE__*/React.createElement(Option, (0, _extends2.default)({}, item.props, {
          originChildren: item.props.children,
          key: item.props.value
        }), /*#__PURE__*/React.createElement(_tooltip.default, {
          title: setTitle ? setTitle(item.props.children) : item.props.children,
          placement: "right",
          mouseEnterDelay: mouseEnterDelay,
          mouseLeaveDelay: mouseLeaveDelay,
          overlayClassName: "option-tooltip",
          overlayStyle: {
            opacity: hoveredOption === item.props.value ? 1 : 0
          } // 仅当前选中项显示
        }, /*#__PURE__*/React.createElement("span", {
          className: "content",
          style: {
            marginRight: '5px',
            width: '95%',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          onMouseEnter: function onMouseEnter() {
            return setHoveredOption(item.props.value);
          },
          onMouseLeave: function onMouseLeave() {
            return setHoveredOption(null);
          }
        }, item.props.children)));
      }
      return null;
    });
  }
  if (filterOption) {
    temp.filterOption = filterOptionFunction;
  }
  if (optionFilterProp) {
    temp.optionFilterProp = optionFilterProp === 'children' ? 'originChildren' : optionFilterProp;
  }
  if (readOnly) {
    var selectedOption = tooltipChildren.find(function (option) {
      var _option$props;
      return (option === null || option === void 0 || (_option$props = option.props) === null || _option$props === void 0 ? void 0 : _option$props.value) === value;
    });
    var dom = selectedOption ? selectedOption.props.originChildren : '- -';
    return /*#__PURE__*/React.createElement(_ellipsis.default, {
      title: dom
    }, dom);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVirtual ? /*#__PURE__*/React.createElement(_tntdSelect.default, (0, _extends2.default)({}, props, temp, {
    className: "tooltip-select ".concat(props.className || ''),
    dropdownRender: function dropdownRender(menu) {
      return /*#__PURE__*/React.createElement("div", {
        ref: dropdownRef,
        className: "dropdown-container"
      }, menu);
    },
    onChange: handleChange // Added onChange handler
  }), tooltipChildren) : /*#__PURE__*/React.createElement(_select.default, (0, _extends2.default)({}, props, temp, {
    className: "tooltip-select ".concat(props.className || ''),
    dropdownRender: function dropdownRender(menu) {
      return /*#__PURE__*/React.createElement("div", {
        ref: dropdownRef,
        className: "dropdown-container"
      }, menu);
    },
    onChange: handleChange // Added onChange handler
  }), tooltipChildren));
}, function (pre, next) {
  var _pre$children, _next$children;
  return pre.isMemo && (pre === null || pre === void 0 ? void 0 : pre.value) === (next === null || next === void 0 ? void 0 : next.value) && (0, _lodash.isEqual)(pre === null || pre === void 0 || (_pre$children = pre.children) === null || _pre$children === void 0 ? void 0 : _pre$children.length, next === null || next === void 0 || (_next$children = next.children) === null || _next$children === void 0 ? void 0 : _next$children.length);
});
var _default = TooltipSelect;
exports.default = _default;