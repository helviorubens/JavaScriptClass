class Person {
    constructor(name) {
        this._name = this._capitalize(name)
    }

    set name(newName) {
        this._name = this._capitalize(newName)
    }

    get name() {
        return this._name
    }

    /** Método responsável por "validar" a informação contida na propriedade "name"
     * 
     * @param {String} text 
     * @returns 
     */
    _capitalize(text) {
        return `${text.toUpperCase()}`
    }

    walk() {
        return `${this._name} is walking...`
    }
}


let helvio = new Person('Hélvio')
console.log(helvio.name)
let rubens = new Person('Rubens')
console.log(rubens.name)