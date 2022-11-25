// Antes esto se hacia de una manera distintia, veamos ES5
function ParametersWithThis(name, age) {
    this.name = name;
    this.age = age;
    let fullName = `${name} ${age}`;
    console.log(fullName);
    // Mostrara por pantalla > Andrés 30

}

ParametersWithThis("Andrés", 30);




// Poniendo parametros por defectos ES6
function Parameters(name = "Andrés", age = 25) {
    console.log(name, age);
}

// Además de esta forma tambien podriamos pasarle nuevos valores a los parametros
Parameters();
Parameters("Felipe", 30); // all llamar node index.js, nos mostrara ambos resultados


// Template literal

/*let name = "Andrés";
let lastName = "Romaña";
let fullName = name + ' ' + lastName;
console.log(fullName);
// > Pero con ES6+, Entran los Template literals
// La solución mas optima es usar templateliterals, ya que disminuye el uso de + y simplificamos
let fullName2 = `${name} ${lastName}`
console.log(fullName2) */

/*******/

// Destructuring (Desestructuracion)
// En si podemos ver que la desestructuracion, la usamos para simplificar el trabajar con muchas variables
// donde con un simple let { nombrePropiedad1, nombrePropiedad2... } = Objeto;
// nos traemos todas sus propiedades, y en conjunto con el spread operator, podemos ademas
// crear nuevas propiedades que se unan a las viejas en un nuevo objeto.
/*let People = {
    firstName: 'Andrés',
    age: 23,
    country: 'CO'
}

 console.log(People.age); // Sin desestructuracion
let { age } = People;
console.log(age);
let { firstName, country } = People;
console.log(firstName, country); */

// Miremos otro ejemplo

let Obj1 = {
    firstName: 'Andrés',
    age: 23,
    country: 'CO'
}

let Obj2 = {
    ...Obj1, // Aqui nos traemos las propiedades del objeto People, y ademas, le agregamos una nueva
    city: "Medellin"
}

let Obj3 = {
    ...Obj2,
    barrio: "Estadio"
}

let { city, ...all } = Obj2; // y si le pasamos el operador de propagacion, traemos todas
// las otras propiedades del objeto
console.log(city, all);
let { barrio, ...allx } = Obj3;
console.log('******* TERCER OBJETO')
console.log(barrio, allx);




// Dinamic import ES11
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.Hello();
})

/***************/
// ARROW FUNCTIONS, Promesas y Parámetros en objetos.
// Objetos

let fName = "Felipe";
let fAge = 24;
// Before 
let obj = { fName: fName, age: fAge };
console.log(obj.fName);
// Now 
let obj2 = { fName, fAge };
console.log(obj2.fName)


// Usando funciones de tipo flecha, esta la usamos mucho en frameworks y librerias de terceros.

// Crearemos un array para ver un ejemplo

const USERS = [
    { name: "Andrés", age: 25 },
    { name: "Romaña", age: 35 },
];

// Si vamos a recorrer dicho array, miremos como lo haciamos anteriormente.
let allUsers = USERS.map(function (item) {
    console.log(`${item.name} ${item.age}`); // ademas hemos usado template literal 
});
// Pero veamos usando arrow functions ( Funciones flecha)
console.log("Arrow F")
let allUsers2 = USERS.map((item, id) => {
    console.log(`${item.name} ${item.age} ${id}`); // ademas hemos usado template literal 
});  // Mira que hemos usado .map((se le pasa aqui los valores al callback) =>) y luego se llama el arrow function =>


const USERS2 = [
    { name: "Felipa", age: 60 },
    { name: "Silvio", age: 62 },
    { name: "Serna", age: 90 },

];

// const allUsers3 completa este

/* Pero igual el arrow function, tambien se puede llamar
para crear valores y demas, donde definimos sus parametors
y luego podemos pasar argumentos */

const USER = (fUSER, fLast) => {
    console.log(fUSER, fLast);
};

USER("Andrés", "Romaña"); // le pasamos los argumentos


// Si quisieramos pasar un solo parametro.
const USER2 = fUSER => {
    console.log(fUSER);
};
USER2("Andrés"); // le pasamos el argumento


/* Promesas . Es algo asi, como "Algo sucedera en un rato" */

const HellW = (A) => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            if (A > 5) {
                res("FULL ACCESS");
            }else {
                rej("NOT FULL ACCESS");
            }
        },3000)
    })
};
// Llamamos a la funcion
HellW(7)
    .then(response => { console.log(response) })
    .catch(error => { console.error(error) })
    .finally(() => {
        console.log("SE HA TERMINADO LA PROMESA");
    });

// Claes, Modulos y generadores

class Calculator {
    constructor () {
        this.Fname;
        this.LNAME;
        this.VALUE;
    }
    // Methods

    Sum(VALUE) {
        console.log(VALUE); // Este console mostrara 50
        return this.VALUE; // este mostrara 1000
    }
}

const Calc = new Calculator();
Calc.Fname = "Andrés";
Calc.LNAME = "Romaña";
Calc.VALUE = 1000;
console.log(Calc.Sum(50));
