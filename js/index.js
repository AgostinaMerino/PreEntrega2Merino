class Producto{
    constructor(titulo, precio, descripcion, stock, categoria, activo){
        this.titulo = titulo.toUpperCase()
        this.precio = parseFloat(precio)
        this.descripcion = descripcion
        this.stock = stock
        this.categoria = categoria
        this.activo = true //por defecto asumo que el producto esta activo
    }

    sumarIVA(){
        this.precio = this.precio * 1.21
    }

    noActivo(){
        this.activo = false
    }

}


let arrayProductos = []
let cantidadProductos = Number(prompt('Cantidad de productos a ingresar'))

//Para crear la lista de productos puedo usar tanto un do-while como un for
for (let indice = 0; indice < cantidadProductos; indice++){
    let titulo = (prompt('Ingrese nombre del articulo:'))
    let precio = parseFloat(prompt('Ingrese precio del articulo:'))
    let descripcion = prompt('Ingrese descripcion del articulo:')
    let stock = prompt('Ingrese stock disponible del articulo:')
    let categoria = Number(prompt('Ingrese categoria del articulo:'))

    //ahora vamos a crear un objeto de este tipo
    let producto = new Producto(titulo, precio, descripcion, stock, categoria)
    //cuando la propiedad y la variable se llaman igual no hace falta nombrarlas 2 veces

    //agrego el iva al precio del producto y, luego si, añado el objeto al array de productos
    producto.sumarIVA()
    arrayProductos.push(producto)
}

console.table(arrayProductos) //muestro el array de productos

//Usemos un metodo de busqueda para encontrar un producto si es que este esta dentro del array de productos
let coincidencias = []
coincidencias.push(arrayProductos.find((articulo) => articulo.titulo == ('Arroz').toUpperCase()))
coincidencias.push(arrayProductos.find((articulo) => articulo.titulo == ('Jabon').toUpperCase()))
coincidencias.push(arrayProductos.find((articulo) => articulo.titulo == ('Leche en polvo').toUpperCase()))


console.log('¿Listado de coincidencia de articulos cargados respecto al listado escrito?: ')
for(posicion = 0; posicion < coincidencias.length; posicion++){
    console.table(coincidencias[posicion])
}

alert("se han ingresado " + cantidadProductos + ' nuevos articulos.')



