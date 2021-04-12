function loggerBeforeColorNames(arrayWithObjects){
  let beforeColorNames = arrayWithObjects || getYellowAvailabilities(); // Object in array containes keys: Name & Color
  for( let i in beforeColorNames ){
    Logger.log(`@i: ${i} -- Name: ${beforeColorNames[i].name}, Color: ${beforeColorNames[i].color}`);
  }
}