'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class uses React's childContexts to propagate the client property to all
 * subcomponents within this component's subtree.  Subcomponents access
 * the client property via `this.context.client`.
 *
 * This component expects only a single subcomponent, which in turn can have many subcomponents.
 */
var LayerProvider = function (_Component) {
  _inherits(LayerProvider, _Component);

  function LayerProvider(props, context) {
    _classCallCheck(this, LayerProvider);

    var _this = _possibleConstructorReturn(this, (LayerProvider.__proto__ || Object.getPrototypeOf(LayerProvider)).call(this, props, context));

    _this.client = props.client;
    return _this;
  }

  _createClass(LayerProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { client: this.client };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      if (typeof children === 'function') {
        children = children();
      }

      return _react.Children.only(children);
    }
  }]);

  return LayerProvider;
}(_react.Component);

LayerProvider.propTypes = {
  client: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.element
};
LayerProvider.childContextTypes = {
  client: _react.PropTypes.object.isRequired
};
exports.default = LayerProvider;