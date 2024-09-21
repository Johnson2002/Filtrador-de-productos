const producto = [
    {id: "Producot 1", marca: "Nike", precio: 200},
    {id: "Producot 2", marca: "Adidas", precio: 500},
    {id: "Producot 3", marca: "NewBalance", precio: 100},
    {id: "Producot 4", marca: "Nike", precio: 90},
    {id: "Producot 5", marca: "Topper", precio: 200},
    {id: "Producot 6", marca: "Nike", precio: 100}
]
function busquedaDeProductos(producto, marca, precio) {
    const productosEncontrados = [];
    
    for (let i = 0; i < producto.length; i++) {
      const encontrado = producto[i];
      
      if (encontrado.marca === marca  && encontrado.precio <= precio) {
        productosEncontrados.push(encontrado);
      }
    }
    
    return productosEncontrados;
}

console.log(busquedaDeProductos(producto, "Nike", 200));