let amigo = {nome:"Thaysa"
,sexo:"F", 
idade:"18",
 nascimento:"23/11",
 peso:66,
  engordar(p=0){
  console.log("Engordou")
  this.peso+=p
  }
}

console.log(amigo.nome)
console.log(amigo.idade)
amigo.engordar(2)
console.log(`Pesa igual a ${amigo.peso}`)