define(
  'example.fortune.source.Getter',

  [
    'example.fortune.source.Fortunes'
  ],

  function (Fortunes) {
    var rnd = function (n) {
      return Math.round(Math.random() * (n - 1));
    };

    var get = function () {
      var index = rnd(Fortunes.length);
      return Fortunes[index];
    };

    return {
      get: get
    };
  }
);