var palabras = ["NODE","HTML","BOOTSTRAP"]
var palabra = palabras[1]

var contenedor = document.getElementById("lineasbajas")

var ul = document.createElement("ul")

for(let i = 0; i<palabra.length; i++){ 
    var li = document.createElement("li")

     li.textContent = "_ "
     
     ul.append(li)
     
}

contenedor.append(ul)