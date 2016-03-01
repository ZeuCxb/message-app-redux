'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SAVE':
      var name = action.data.name;
      var msg = action.data.msg;

      return [].concat(_toConsumableArray(state), [{
        name: name,
        msg: msg
      }]);
    default:
      return state;
  }
};

var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

var Title = function Title(_ref) {
  var children = _ref.children;

  return React.createElement(
    'h3',
    null,
    children
  );
};

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Post).apply(this, arguments));
  }

  _createClass(Post, [{
    key: 'send',
    value: function send(e) {
      e.preventDefault();

      var name = this.refs.name;
      var msg = this.refs.msg;

      if (name.value != '' && msg.value != '') {
        store.dispatch({ type: 'SAVE', data: { name: name.value, msg: msg.value } });

        u('.error').text('');

        name.value = '';
        msg.value = '';
      } else {
        u('.error').text('Preencha todos os campos');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        null,
        React.createElement('h4', { className: 'error' }),
        React.createElement(
          'p',
          null,
          React.createElement('input', { ref: 'name', placeholder: 'Name...' })
        ),
        React.createElement(
          'p',
          null,
          React.createElement('textarea', { ref: 'msg', placeholder: 'Message...' })
        ),
        React.createElement(
          'button',
          { onClick: this.send.bind(this) },
          'Send'
        )
      );
    }
  }]);

  return Post;
}(React.Component);

var Message = function Message(_ref2) {
  var name = _ref2.name;
  var msg = _ref2.msg;

  return React.createElement(
    'div',
    { className: 'message' },
    React.createElement(
      'h4',
      null,
      name
    ),
    React.createElement(
      'p',
      null,
      '"' + msg + '"'
    )
  );
};

var MessageList = function MessageList(_ref3) {
  var messages = _ref3.messages;

  var msgs = messages.map(function (data, cont) {
    return React.createElement(Message, { key: cont, name: data.name, msg: data.msg });
  });

  return React.createElement(
    'div',
    null,
    msgs
  );
};

var MessageApp = function MessageApp(_ref4) {
  var title = _ref4.title;
  var messages = _ref4.messages;

  return React.createElement(
    'div',
    null,
    React.createElement(
      Title,
      null,
      title
    ),
    React.createElement(Post, null),
    React.createElement(MessageList, { messages: messages })
  );
};

function render() {
  ReactDOM.render(React.createElement(MessageApp, { title: 'Message App', messages: store.getState() }), document.getElementById('container'));
}

render();
store.subscribe(render);
