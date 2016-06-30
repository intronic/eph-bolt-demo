define(
  'example.fortune.api.Button',

  [
    'example.fortune.source.Getter',
    'example.fortune.ui.Button'
  ],

  function (Getter, Button) {
    return function () {
      var button = Button();

      button.onclick(function () {
        alert(Getter.get());
      });

      return {
        element: button.element
      };
    };
  }
);