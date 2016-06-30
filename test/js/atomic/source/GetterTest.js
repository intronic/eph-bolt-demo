test(
  'GetterTest',

  { 'example.fortune.source.Fortunes': '../mock/Fortunes' },

  [
    'example.fortune.source.Getter'
  ],

  function (Getter) {
    assert.succeeds(Getter.get, 'Getter.get() throws an exception!');
    assert.eq('The only fortune available in our mock!', Getter.get(), 'Did not get the only fortune! How could this happen??');
  }
);
