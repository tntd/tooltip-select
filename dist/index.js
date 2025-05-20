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
    onChange = props.onChange,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly;
  var Option = isVirtual ? _tntdSelect.default.Option : _select.default.Option;
  var temp = {};
  var filterOptionFunction = function filterOptionFunction(input, option) {
    var _option$props, _option$props2;
    if (Array.isArray(option)) {
      // 处理多选情况，option是数组
      var newOption = option === null || option === void 0 ? void 0 : option.map(function (opt) {
        var _opt$props, _opt$props2;
        return _objectSpread(_objectSpread({}, opt), {}, {
          props: _objectSpread(_objectSpread({}, opt === null || opt === void 0 ? void 0 : opt.props), {}, {
            children: (opt === null || opt === void 0 || (_opt$props = opt.props) === null || _opt$props === void 0 ? void 0 : _opt$props.originChildren) || (opt === null || opt === void 0 || (_opt$props2 = opt.props) === null || _opt$props2 === void 0 ? void 0 : _opt$props2.children)
          })
        });
      });
      return filterOption(input, newOption);
    }
    // 处理单选情况，option是单个对象
    var newOption1 = _objectSpread(_objectSpread({}, option), {}, {
      props: _objectSpread(_objectSpread({}, option === null || option === void 0 ? void 0 : option.props), {}, {
        children: (option === null || option === void 0 || (_option$props = option.props) === null || _option$props === void 0 ? void 0 : _option$props.originChildren) || (option === null || option === void 0 || (_option$props2 = option.props) === null || _option$props2 === void 0 ? void 0 : _option$props2.children)
      })
    });
    return filterOption(input, newOption1);
  };
  var handleChange = function handleChange(value, option) {
    if (Array.isArray(option)) {
      // 处理多选情况，option是数组
      var newOptions = option === null || option === void 0 ? void 0 : option.map(function (opt) {
        var _opt$props3, _opt$props4;
        return _objectSpread(_objectSpread({}, opt), {}, {
          props: _objectSpread(_objectSpread({}, opt === null || opt === void 0 ? void 0 : opt.props), {}, {
            children: (opt === null || opt === void 0 || (_opt$props3 = opt.props) === null || _opt$props3 === void 0 ? void 0 : _opt$props3.originChildren) || (opt === null || opt === void 0 || (_opt$props4 = opt.props) === null || _opt$props4 === void 0 ? void 0 : _opt$props4.children)
          })
        });
      });
      onChange(value, newOptions);
    } else {
      var _option$props3, _option$props4;
      // 处理单选情况，option是单个对象
      var newOption1 = _objectSpread(_objectSpread({}, option), {}, {
        props: _objectSpread(_objectSpread({}, option === null || option === void 0 ? void 0 : option.props), {}, {
          children: (option === null || option === void 0 || (_option$props3 = option.props) === null || _option$props3 === void 0 ? void 0 : _option$props3.originChildren) || (option === null || option === void 0 || (_option$props4 = option.props) === null || _option$props4 === void 0 ? void 0 : _option$props4.children)
        })
      });
      onChange(value, newOption1);
    }
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
              placement: placement
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                marginRight: '5px'
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
          placement: placement
        }, /*#__PURE__*/React.createElement("span", {
          className: "content",
          style: {
            marginRight: '5px',
            width: '95%',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
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
      var _option$props5;
      return (option === null || option === void 0 || (_option$props5 = option.props) === null || _option$props5 === void 0 ? void 0 : _option$props5.value) === value;
    });
    var dom = selectedOption ? selectedOption.props.originChildren : '- -';
    return /*#__PURE__*/React.createElement(_ellipsis.default, {
      title: dom
    }, dom);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVirtual ? /*#__PURE__*/React.createElement(_tntdSelect.default, (0, _extends2.default)({}, props, temp, {
    onChange: handleChange,
    className: "tooltip-select ".concat(props.className || '')
  }), tooltipChildren) : /*#__PURE__*/React.createElement(_select.default, (0, _extends2.default)({}, props, temp, {
    onChange: handleChange,
    className: "tooltip-select ".concat(props.className || '')
  }), tooltipChildren));
}, function (pre, next) {
  var _pre$children, _next$children;
  return pre.isMemo && (pre === null || pre === void 0 ? void 0 : pre.value) === (next === null || next === void 0 ? void 0 : next.value) && (0, _lodash.isEqual)(pre === null || pre === void 0 || (_pre$children = pre.children) === null || _pre$children === void 0 ? void 0 : _pre$children.length, next === null || next === void 0 || (_next$children = next.children) === null || _next$children === void 0 ? void 0 : _next$children.length);
});
var _default = TooltipSelect;
exports.default = _default;