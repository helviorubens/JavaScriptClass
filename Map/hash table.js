const hashTable = new Map()

// Add elements
hashTable.set('nome', 'Hélvio')
hashTable.set(1, 'Número um')
hashTable.set(true, 'Verdadeiro')
hashTable.set({a: 1}, 'Objeto')

// Access elements
console.log('access', hashTable.get('nome'))
console.log('access', hashTable.get(1))

// Verify if a key exists
console.log('verify', hashTable.has('idade'))
console.log('verify', hashTable.has(true))

// Loop elements
hashTable.forEach((value, key) => {
  console.log(key, value)
})

// Delete elements
hashTable.delete({a: 1})
console.log('delete', hashTable.has({a: 1}))

// Get Map size
console.log('size', hashTable.size)