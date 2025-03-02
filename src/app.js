import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Loaded saving:', saving);
  })
  .catch((error) => {
    console.error('Error:', error);
  });