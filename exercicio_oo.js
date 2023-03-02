
// abstração/classe
function Animal(reino){
    this.reino = reino
}

// classes herdeiras
function Cachorro(reino, raca, porte, idade, sexo, nome){
    this.porte = porte,
    this.idade = idade,
    this.sexo = sexo,
    this.nome = nome,
    this.raca = raca,

    Animal.call(this, reino)

    this.latir = function latir(){
        console.log("Au au")
    }
}

function Ave(reino, classificacao, especie, sexo){
    this.classificacao = classificacao,
    this.especie = especie,
    this.sexo = sexo,

    Animal.call(this, reino)

    this.piar = function piar(){
        console.log('Cocó')
    }
}

function Homo_sapiens(reino, sexo, especie, ordem, classe){
    this.sexo = sexo,
    this.especie = especie, 
    this.ordem = ordem,
    this.classe = classe,

    Animal.call(this, reino)

    this.falar = function falar(){
        console.log("Olá pessoas")
    }
}


// Instâncias das classes
const goldenRetriever = new Cachorro("Animália(Animal)", "Golden Retriever","Grande", 8 + " Anos", "Fêmea/Macho", "Kiara")
console.log(goldenRetriever)
goldenRetriever.latir()


const galinhas = new Ave("Animália(Animal)", "Galinácea", "Galinha", "Fêmea/Macho")
console.log(galinhas)
galinhas.piar()


const homem = new Homo_sapiens("Animália(Animal)", "Macho/Fêmea ││ Masculino/Feminino", "Homo Sapiens", "Primata", "Mammalia(Mamífero)")
console.log(homem)
homem.falar()