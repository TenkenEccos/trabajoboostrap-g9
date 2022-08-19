const laptops =["rojo","verdo","rosado","azul"]

laptops[0]="fucsia"
laptops[4]="green"

laptops[laptops.length]="azulado"
laptops[laptops.length]="negro"
console.log("laptops",laptops)

//objetos

const laptops1 ={
ram :"32gb",
pantalla: "25",
teclado:"luminosos",
cargador:"inalambrico",
}
//añadir key y value a objeto
laptops1.regalo="mouse"

console.table( laptops1)


//funciones
//declarativa que es sola
 function suma2(a,b){
    return a+b
}
console.log(suma2 (10,30))
//expresiva o anonima, se declara dentro de una variable
let sumar3 = function(a,b){
    return a+b
}
console.log(sumar3(30,40))

//funcion flecha- no funciona con this
//=>
const suma4 =(a,b)=>{
    return a+b
}

console.log("suma4",suma4(10,55))
