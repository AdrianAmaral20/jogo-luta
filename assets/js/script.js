const char = createKnight('Adrian');
const monster = createLittleMonster();

stage.start(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
)