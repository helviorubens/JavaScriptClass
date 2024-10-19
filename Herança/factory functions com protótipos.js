const volkswagenProto = {
  logCarInfo () {
    console.log(`Volkswagen ${this.name}, cor ${this.color}.`)
  }
}

const toyotaProto = {
  logCarInfo () {
    console.log(`Toyota ${this.name}, cor ${this.color}.`)
  }
}

const carMaker = ({ name, color }, carProto) => {
  const car = Object.create(carProto)

  car.name = name
  car.color = color

  return car
}

const amarok = carMaker({ name: 'Amarok', color: 'preta'}, volkswagenProto)
const jetta = carMaker({ name: 'Jetta', color: 'prata'}, volkswagenProto)
const corolla = carMaker({ name: 'Corolla', color: 'branca'}, toyotaProto)

amarok.logCarInfo()
jetta.logCarInfo()
corolla.logCarInfo()