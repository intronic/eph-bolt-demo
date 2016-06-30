define(
  'example.fortune.ui.Button',

  [
  ],

  function () {
    return function () {
      var button = document.createElement('button');
      button.appendChild(document.createTextNode('Read my fortune!'));

      var element = function () {
        return button;
      };

      var onclick = function (f) {
        button.onclick = f;
      };

      return {
        element: element,
        onclick: onclick
      };
    };
  }
);
