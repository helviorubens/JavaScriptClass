const namesCollection = (function() {
  // membros privados
  let objects = [];

  function addObject(object) {
    objects.push(object);
  }

  function removeObject(object) {
    let index = objects.indexOf(object);

    if(index > 0) {
      objects.splice(index, 1);
    }
  }

  function getObjects() {
    return JSON.parse(JSON.stringify(objects));
  }

  // membros públicos
  return {
    addName: addObject,
    removeName: removeObject,
    getNames: getObjects
  }
}())

namesCollection.addName("Hélvio");
namesCollection.addName("Rubens");
namesCollection.addName("Albuquerque");

console.log(namesCollection.getNames());
namesCollection.removeName("Rubens");

console.log(namesCollection.getNames());