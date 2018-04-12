function hacerCafe(cafe,azucar,leche){
    var instrucciones = "hervir agua,";
    instrucciones += " verter el agua en una taza,"
    instrucciones += " agregar " + cafe + " cucharadas de cafe, ";
    instrucciones += " agregar " + azucar + " cucharadas de azucar, ";
    instrucciones += " agregar " + leche + " % de leche, ";
    instrucciones += " revolver y a disfrutar"
    return instrucciones
}
//funcion comun
var cafe=hacerCafe(2,3,15)
console.log(cafe)


