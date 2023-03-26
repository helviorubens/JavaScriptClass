/**
 * JavaScript Naming Conventions
 * Source: https://www.syncfusion.com/blogs/post/10-javascript-naming-conventions-every-developer-should-know.aspx
 */

////////////////////////////////////////////
//// 1. Naming Convention for Variables ////
////////////////////////////////////////////

// - The most recommended way to declare JavaScript variables is with camel case variable names:

let dogName = 'Snoopy'
const DOG_NAME = 'Bidu'

///////////////////////////////////////////
//// 2. Naming Convention for Booleans ////
///////////////////////////////////////////

// - We should use 'is' or 'has' as prefixes:

let isDog = true
let hasOwner = false

////////////////////////////////////////////
//// 3. Naming Convention for Functions ////
////////////////////////////////////////////

// - Similar to variables, the camel case approach is the recommended way to declare function names.
// - In addition to that, you should use descriptive nouns and verbs as prefixes:

function getName(dogName, ownerName) { 
    return '${dogName} ${ownerName}'
}

////////////////////////////////////////////
//// 4. Naming Convention for Constants ////
////////////////////////////////////////////

// - All the constants should be defined at the start of your file, method, or class.
// - Constants should be written in uppercase because they are nonchanging variables:

const LEG = 4
const TAIL = 1
const MOVABLE = LEG + TAIL
const DAYS_UNTIL_TOMORROW = 1

//////////////////////////////////////////
//// 5. Naming Convention for Classes ////
//////////////////////////////////////////

// - The major difference between function and class names is that we have to use Pascal case for class names:

class DogCartoon { 
    constructor(dogName, ownerName) { 
        this.dogName = dogName
        this.ownerName = ownerName
    }
}
  
let cartoon = new DogCartoon('Scooby-Doo', 'Shaggy')

/////////////////////////////////////////////
//// 6. Naming Convention for Components ////
/////////////////////////////////////////////

// - Components are used in the DOM, treating them similarly to classes and using Pascal case to define names is recommended:

function DogCartoon(roles) { 
    return ( 
        <div> 
        <span> Dog Name: { roles.dogName } </span> 
        <span> Owner Name: { roles.ownerName } </span> 
        </div> 
    )
}

//////////////////////////////////////////
//// 7. Naming Convention for Methods ////
//////////////////////////////////////////

// - Although there are some differences, the structure of a JavaScript function and a method are pretty similar. So, naming convention rules are the same:

class DogCartoon {
    constructor(dogName, ownerName) { 
        this.dogName = dogName
        this.ownerName = ownerName
    }

    getName() { 
        return '${this.dogName} ${this.ownerName}'
    }
}
  
var cartoon2 = new DogCartoon('Scooby-Doo', 'Shaggy')

console.log(cartoon2.getName())

/////////////////////////////////////////////////////////////
//// 8. Naming Convention for Denoting Private Functions ////
/////////////////////////////////////////////////////////////

// - An underscore (_) is used to denote private variables or functions:

class DogCartoon { 
    constructor(dogName, ownerName) { 
        this.dogName = dogName
        this.ownerName = ownerName
        this.name = _toonName(dogName, ownerName)
    } 
    _toonName(dogName, ownerName) { 
        return `${dogName} ${ownerName}`
    } 
}
  
var cartoon3 = new DogCartoon('Scooby-Doo', 'Shaggy'); 

var name2 = cartoon3.name;
console.log(name2);