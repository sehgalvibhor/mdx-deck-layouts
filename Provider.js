'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Dots = require('./Dots');

var _Dots2 = _interopRequireDefault(_Dots);

var _updaters = require('./updaters');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bottom = _styledComponents2.default.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0
});

var Footer = _styledComponents2.default.h5([], {
  position: 'fixed',
  left: 0,
  bottom: 0,
  textAlign: 'center',
  width: '100%'
});

var Button = _styledComponents2.default.div([], {
  cursor: 'pointer',
  width: '64px',
  height: '100vh'
});
var Previous = (0, _styledComponents2.default)(Button)([], {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0
});
var Next = (0, _styledComponents2.default)(Button)([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0
});

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          mode = _props.mode,
          index = _props.index,
          length = _props.length,
          update = _props.update;


      if (mode !== _constants.modes.normal) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          children
        );
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children,
        _react2.default.createElement(
          Footer,
          null,
          'Slide ',
          index+1,
          ' of ',
          length+1
        ),
        _react2.default.createElement(
          Bottom,
          null,
          _react2.default.createElement(_Dots2.default, {
            mx: 'auto',
            mb: 2,
            index: index,
            length: length,
            onClick: function onClick(index) {
              update({ index: index });
            }
          })
        ),
        _react2.default.createElement(Previous, {
          role: 'button',
          title: 'Previous Slide',
          onClick: function onClick(e) {
            update(_updaters.previous);
          }
        }),
        _react2.default.createElement(Next, {
          role: 'button',
          title: 'Next Slide',
          onClick: function onClick(e) {
            update(_updaters.next);
          }
        })
      );
    }
  }]);

  return Provider;
}(_react2.default.Component);

exports.default = Provider;